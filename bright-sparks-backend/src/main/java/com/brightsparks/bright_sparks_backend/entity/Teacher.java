package com.brightsparks.bright_sparks_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "teachers")
@Data
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "teacher_id")
    private Long teacherId;

    @Column(name = "full_name")
    private String fullName;

    private String subject;

    private String qualification;

    @Column(name = "experience_years")
    private Integer experienceYears;

    private String phone;

    private String email;

    @Column(name = "profile_image")
    private String profileImage;

    private String bio;
}