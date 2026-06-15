package com.brightsparks.bright_sparks_backend.controller;

import com.brightsparks.bright_sparks_backend.repository.CourseRepository;
import com.brightsparks.bright_sparks_backend.repository.TeacherRepository;
import com.brightsparks.bright_sparks_backend.repository.TestimonialRepository;
import com.brightsparks.bright_sparks_backend.repository.EnquiryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final CourseRepository courseRepository;
    private final TeacherRepository teacherRepository;
    private final TestimonialRepository testimonialRepository;
    private final EnquiryRepository enquiryRepository;

    public DashboardController(
            CourseRepository courseRepository,
            TeacherRepository teacherRepository,
            TestimonialRepository testimonialRepository,
            EnquiryRepository enquiryRepository
    ) {
        this.courseRepository = courseRepository;
        this.teacherRepository = teacherRepository;
        this.testimonialRepository = testimonialRepository;
        this.enquiryRepository = enquiryRepository;
    }

    @GetMapping("/stats")
    public Map<String, Long> getStats() {


        Map<String, Long> stats = new HashMap<>();

        stats.put("courses",
                courseRepository.count());

        stats.put("teachers",
                teacherRepository.count());

        stats.put("testimonials",
                testimonialRepository.count());

        stats.put("totalEnquiries",
                enquiryRepository.count());

        stats.put("newEnquiries",
                enquiryRepository.countByStatus("NEW"));

        stats.put("contacted",
                enquiryRepository.countByStatus("CONTACTED"));

        stats.put("admitted",
                enquiryRepository.countByStatus("ADMITTED"));

        return stats;


    }

}
