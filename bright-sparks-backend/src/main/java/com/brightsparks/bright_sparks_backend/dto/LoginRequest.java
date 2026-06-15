package com.brightsparks.bright_sparks_backend.dto;

import lombok.Data;

@Data
public class LoginRequest {

    private String username;
    private String password;
}