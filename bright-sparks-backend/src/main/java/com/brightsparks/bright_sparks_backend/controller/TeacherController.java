package com.brightsparks.bright_sparks_backend.controller;

import com.brightsparks.bright_sparks_backend.entity.Teacher;
import com.brightsparks.bright_sparks_backend.repository.TeacherRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/teachers")
@CrossOrigin(origins = "http://localhost:5173")
public class TeacherController {


    private final TeacherRepository teacherRepository;

    public TeacherController(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    @GetMapping
    public List<Teacher> getAllTeachers() {
        return teacherRepository.findAll();
    }

    @PostMapping
    public Teacher createTeacher(
            @RequestBody Teacher teacher
    ) {
        return teacherRepository.save(teacher);
    }

    @PutMapping("/{id}")
    public Teacher updateTeacher(
            @PathVariable Long id,
            @RequestBody Teacher updatedTeacher
    ) {

        Teacher teacher =
                teacherRepository.findById(id)
                        .orElseThrow();

        teacher.setFullName(updatedTeacher.getFullName());
        teacher.setSubject(updatedTeacher.getSubject());
        teacher.setQualification(updatedTeacher.getQualification());
        teacher.setExperienceYears(updatedTeacher.getExperienceYears());
        teacher.setPhone(updatedTeacher.getPhone());
        teacher.setEmail(updatedTeacher.getEmail());
        teacher.setProfileImage(updatedTeacher.getProfileImage());
        teacher.setBio(updatedTeacher.getBio());

        return teacherRepository.save(teacher);
    }

    @DeleteMapping("/{id}")
    public void deleteTeacher(
            @PathVariable Long id
    ) {
        teacherRepository.deleteById(id);
    }


}
