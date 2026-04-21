package com.algotech.api.controller;

import com.algotech.api.dto.ContactRequest;
import com.algotech.api.dto.ContactResponse;
import com.algotech.api.entity.Inquiry;
import com.algotech.api.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping("/contact")
    public ResponseEntity<ContactResponse> submit(@Valid @RequestBody ContactRequest request) {
        Inquiry inquiry = contactService.createInquiry(request);
        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(new ContactResponse(true, inquiry.getId(), inquiry.getCreatedAt()));
    }
}
