package com.brightsparks.bright_sparks_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "enquiries")
@Data
public class Enquiry {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "enquiry_id")
    private Long enquiryId;

    @Column(name = "full_name")
    private String fullName;

    private String phone;

    private String email;

    private String message;

    private String status;

    @Column(name = "created_at")
    private LocalDateTime createdAt;


}
