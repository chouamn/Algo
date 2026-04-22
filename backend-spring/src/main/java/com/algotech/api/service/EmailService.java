package com.algotech.api.service;

import com.algotech.api.entity.Inquiry;
import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class EmailService {

    private static final Logger log = LoggerFactory.getLogger(EmailService.class);

    private final String apiKey;
    private final String fromEmail;
    private final String adminEmail;

    public EmailService(
        @Value("${sendgrid.api-key}") String apiKey,
        @Value("${sendgrid.from-email}") String fromEmail,
        @Value("${sendgrid.admin-email}") String adminEmail
    ) {
        this.apiKey = apiKey;
        this.fromEmail = fromEmail;
        this.adminEmail = adminEmail;
    }

    // Async: runs on the task-executor thread pool so the HTTP response
    // is returned immediately after the DB commit, not after the
    // SendGrid round-trip. Failures are logged but never propagate.
    @Async
    public void sendInquiryNotification(Inquiry inquiry) {
        try {
            Mail mail = new Mail(
                new Email(fromEmail),
                "New Inquiry — " + inquiry.getName(),
                new Email(adminEmail),
                new Content("text/plain", buildBody(inquiry))
            );

            Request request = new Request();
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());

            Response response = new SendGrid(apiKey).api(request);

            if (response.getStatusCode() >= 400) {
                log.error("SendGrid delivery failed status={} body={}",
                    response.getStatusCode(), response.getBody());
            } else {
                log.info("Inquiry notification sent inquiryId={}", inquiry.getId());
            }
        } catch (IOException | RuntimeException e) {
            log.error("SendGrid delivery threw inquiryId={} error={}",
                inquiry.getId(), e.getMessage());
        }
    }

    private String buildBody(Inquiry i) {
        return """
            New inquiry received from the Algotech website.

            ID:        %s
            Received:  %s
            Name:      %s
            Email:     %s
            Phone:     %s

            Message:
            %s
            """.formatted(
                i.getId(),
                i.getCreatedAt(),
                i.getName(),
                i.getEmail(),
                i.getPhone() != null ? i.getPhone() : "(not provided)",
                i.getMessage()
            );
    }
}
