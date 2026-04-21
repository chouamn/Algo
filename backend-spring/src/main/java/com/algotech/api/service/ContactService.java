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
        inquiry.setMessage(request.message().trim());

        Inquiry saved = repository.save(inquiry);

        // EmailService self-catches — a SendGrid failure must not roll back the insert.
        emailService.sendInquiryNotification(saved);

        return saved;
    }
}
