package com.brightsparks.bright_sparks_backend.controller;

import com.brightsparks.bright_sparks_backend.entity.Enquiry;
import com.brightsparks.bright_sparks_backend.repository.EnquiryRepository;
import com.brightsparks.bright_sparks_backend.service.EmailService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enquiries")
@CrossOrigin(origins = "http://localhost:5173")
public class EnquiryController {


    private final EnquiryRepository enquiryRepository;
    private final EmailService emailService;

    public EnquiryController(
            EnquiryRepository enquiryRepository,
            EmailService emailService
    ) {
        this.enquiryRepository = enquiryRepository;
        this.emailService = emailService;
    }

    @GetMapping
    public List<Enquiry> getAllEnquiries() {
        return enquiryRepository.findAll();
    }

    @PostMapping
    public Enquiry createEnquiry(@RequestBody Enquiry enquiry) {

        enquiry.setStatus("NEW");
        enquiry.setCreatedAt(java.time.LocalDateTime.now());

        Enquiry savedEnquiry =
                enquiryRepository.save(enquiry);

        emailService.sendEnquiryNotification(
                savedEnquiry.getFullName(),
                savedEnquiry.getPhone(),
                savedEnquiry.getEmail(),
                savedEnquiry.getMessage()

        );
        emailService.sendAutoReply(
                savedEnquiry.getFullName(),
                savedEnquiry.getEmail()
        );

        return savedEnquiry;
    }

    @PutMapping("/{id}/status")
    public Enquiry updateStatus(
            @PathVariable Long id,
            @RequestParam String status
    ) {

        Enquiry enquiry =
                enquiryRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException("Enquiry not found"));

        enquiry.setStatus(status);

        return enquiryRepository.save(enquiry);
    }

    @DeleteMapping("/{id}")
    public void deleteEnquiry(
            @PathVariable Long id
    ) {
        enquiryRepository.deleteById(id);
    }


}
