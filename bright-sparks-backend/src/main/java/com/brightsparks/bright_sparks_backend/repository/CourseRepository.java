package com.brightsparks.bright_sparks_backend.repository;

import com.brightsparks.bright_sparks_backend.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

}
