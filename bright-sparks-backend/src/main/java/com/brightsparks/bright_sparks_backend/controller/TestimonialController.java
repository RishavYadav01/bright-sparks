package com.brightsparks.bright_sparks_backend.controller;

import com.brightsparks.bright_sparks_backend.entity.Testimonial;
import com.brightsparks.bright_sparks_backend.repository.TestimonialRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/testimonials")
@CrossOrigin(origins = "http://localhost:5173")
public class TestimonialController {


    private final TestimonialRepository testimonialRepository;

    public TestimonialController(
            TestimonialRepository testimonialRepository
    ) {
        this.testimonialRepository = testimonialRepository;
    }

    @GetMapping
    public List<Testimonial> getAllTestimonials() {
        return testimonialRepository.findAll();
    }

    @PostMapping
    public Testimonial createTestimonial(
            @RequestBody Testimonial testimonial
    ) {
        return testimonialRepository.save(testimonial);
    }

    @PutMapping("/{id}")
    public Testimonial updateTestimonial(
            @PathVariable Long id,
            @RequestBody Testimonial updatedTestimonial
    ) {

        Testimonial testimonial =
                testimonialRepository.findById(id)
                        .orElseThrow();

        testimonial.setStudentName(
                updatedTestimonial.getStudentName()
        );

        testimonial.setReview(
                updatedTestimonial.getReview()
        );

        testimonial.setRating(
                updatedTestimonial.getRating()
        );

        testimonial.setIsFeatured(
                updatedTestimonial.getIsFeatured()
        );

        return testimonialRepository.save(testimonial);
    }

    @DeleteMapping("/{id}")
    public void deleteTestimonial(
            @PathVariable Long id
    ) {
        testimonialRepository.deleteById(id);
    }


}
