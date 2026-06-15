package com.brightsparks.bright_sparks_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "testimonials")
@Data
public class Testimonial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "testimonial_id")
    private Long testimonialId;

    @Column(name = "student_name")
    private String studentName;

    private String review;

    private Integer rating;

    @Column(name = "is_featured")
    private Boolean isFeatured;
}
