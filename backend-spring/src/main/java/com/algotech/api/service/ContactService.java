package com.algotech.api.service;

import com.algotech.api.dto.ContactRequest;
import com.algotech.api.entity.Inquiry;
import com.algotech.api.repository.InquiryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ContactService {

    private final InquiryRepository repository;
    private final EmailService emailService;

    public ContactService(InquiryRepository repository, EmailService emailService) {
        this.repository = repository;
        this.emailService = emailService;
    }

    @Transactional
    public Inquiry createInquiry(ContactRequest request) {
        Inquiry inquiry = new Inquiry();
        inquiry.setName(request.name().trim());
        inquiry.setEmail(request.email().trim().toLowerCase());
        inquiry.setPhone(request.phone() != null && !request.phone().isBlank()
            ? request.phone().trim() : null);
        inquiry.setMessage(request.message().trim());

        // saveAndFlush forces Hibernate to insert immediately so @CreationTimestamp
        // fires before the async email task enqueues — otherwise `createdAt` is null
        // when the email body is built on the worker thread.
        Inquiry saved = repository.saveAndFlush(inquiry);

        emailService.sendInquiryNotification(saved);

        return saved;
    }
}
