package com.brightsparks.bright_sparks_backend.controller;

import com.brightsparks.bright_sparks_backend.dto.LoginRequest;
import com.brightsparks.bright_sparks_backend.entity.Admin;
import com.brightsparks.bright_sparks_backend.security.JwtUtil;
import com.brightsparks.bright_sparks_backend.repository.AdminRepository;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final AdminRepository adminRepository;

    public AdminController(AdminRepository adminRepository) {

        this.adminRepository = adminRepository;

    }
    @GetMapping("/all")
    public java.util.List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    @PostMapping("/login")
    public Map<String, Object> login(
            @RequestBody LoginRequest request
    ) {

        Map<String, Object> response = new HashMap<>();

        Admin admin = adminRepository
                .findByUsername(request.getUsername())
                .orElse(null);

        if (
                admin != null &&
                        admin.getPassword().equals(request.getPassword())
        ) {

            String token =
                    JwtUtil.generateToken(
                            admin.getUsername()
                    );

            response.put("success", true);
            response.put("message", "Login Successful");
            response.put("token", token);

        }else {

            response.put("success", false);
            response.put("message", "Invalid Credentials");
        }

        return response;
    }

}
