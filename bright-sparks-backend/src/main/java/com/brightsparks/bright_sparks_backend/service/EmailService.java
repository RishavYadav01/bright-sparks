package com.brightsparks.bright_sparks_backend.service;

import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {


    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendEnquiryNotification(
            String name,
            String phone,
            String email,
            String message
    ) {

        try {

            MimeMessage mimeMessage =
                    mailSender.createMimeMessage();

            MimeMessageHelper helper =
                    new MimeMessageHelper(mimeMessage, true);

            helper.setTo("rishavyadav87421@gmail.com");

            helper.setSubject("🚨 New Bright Sparks Enquiry");

            String htmlContent = """
                <div style="font-family: Arial, sans-serif; padding:20px;">
                
                    <h2 style="color:#2563eb;">
                        🚨 New Enquiry Received
                    </h2>
                    
                    <hr>
                    
                    <p><strong>Name:</strong> %s</p>
                    <p><strong>Phone:</strong> %s</p>
                    <p><strong>Email:</strong> %s</p>
                    
                    <h3>Message</h3>
                    
                    <div style="
                        background:#f8fafc;
                        padding:15px;
                        border-radius:10px;
                        border:1px solid #e2e8f0;
                    ">
                        %s
                    </div>
                    
                    <br>
                    
                    <p style="color:gray;">
                        Bright Sparks Admission CRM
                    </p>
                
                </div>
                """.formatted(
                    name,
                    phone,
                    email,
                    message
            );

            helper.setText(htmlContent, true);

            mailSender.send(mimeMessage);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void sendAutoReply(
            String studentName,
            String studentEmail
    ) {

        try {

            MimeMessage mimeMessage =
                    mailSender.createMimeMessage();

            MimeMessageHelper helper =
                    new MimeMessageHelper(mimeMessage, true);

            helper.setTo(studentEmail);

            helper.setSubject(
                    "Thank You for Contacting Bright Sparks"
            );

            String htmlContent = """
                <div style="font-family:Arial,sans-serif;padding:20px;">

                    <h2 style="color:#2563eb;">
                        Thank You for Your Enquiry
                    </h2>

                    <p>
                        Dear %s,
                    </p>

                    <p>
                        Thank you for contacting
                        <strong>Bright Sparks Academy</strong>.
                    </p>

                    <p>
                        We have successfully received your enquiry.
                        Our admission team will contact you shortly.
                    </p>

                    <div style="
                        background:#eff6ff;
                        padding:15px;
                        border-radius:10px;
                        margin-top:20px;
                    ">
                        📞 Admission Support Team
                    </div>

                    <br>

                    <p>
                        Regards,<br>
                        Bright Sparks Academy
                    </p>

                </div>
                """.formatted(studentName);

            helper.setText(htmlContent, true);

            mailSender.send(mimeMessage);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
