package com.brightsparks.bright_sparks_backend.repository;

import com.brightsparks.bright_sparks_backend.entity.Enquiry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnquiryRepository extends JpaRepository<Enquiry, Long> {


    long countByStatus(String status);


}

