package com.algotech.api.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ContactRequest(

    @NotBlank(message = "Name is required")
    @Size(max = 120, message = "Name must be 120 characters or fewer")
    String name,

    @NotBlank(message = "Email is required")
    @Email(message = "Enter a valid email address")
    @Size(max = 255)
    String email,

    @Size(max = 40, message = "Phone must be 40 characters or fewer")
    String phone,

    @NotBlank(message = "Message is required")
    @Size(max = 5000, message = "Message must be 5000 characters or fewer")
    String message
) {}
