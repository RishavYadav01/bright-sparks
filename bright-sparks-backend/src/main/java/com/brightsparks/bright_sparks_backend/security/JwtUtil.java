package com.brightsparks.bright_sparks_backend.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import java.util.Date;

public class JwtUtil {


    private static final String SECRET =
            "BrightSparksSecretKeyBrightSparksSecretKey123456";

    private static final SecretKey KEY =
            Keys.hmacShaKeyFor(SECRET.getBytes());

    public static String generateToken(
            String username
    ) {

        return Jwts.builder()
                .subject(username)
                .issuedAt(new Date())
                .expiration(
                        new Date(
                                System.currentTimeMillis()
                                + 86400000
                )
            )
            .signWith(KEY)
                .compact();
    }

    public static String extractUsername(
            String token
    ) {

        return Jwts.parser()
                .verifyWith(KEY)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }


}

