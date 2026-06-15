package com.brightsparks.bright_sparks_backend.repository;

import com.brightsparks.bright_sparks_backend.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {

}
