package com.brightsparks.bright_sparks_backend.repository;

import com.brightsparks.bright_sparks_backend.entity.Testimonial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestimonialRepository
        extends JpaRepository<Testimonial, Long> {
}
