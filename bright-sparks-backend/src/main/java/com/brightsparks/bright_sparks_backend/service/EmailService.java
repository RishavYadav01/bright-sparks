package com.brightsparks.bright_sparks_backend.service;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;


@Service
public class EmailService {


    private final String apiKey =
            System.getenv("BREVO_API_KEY");


    public void sendEnquiryNotification(
            String name,
            String phone,
            String email,
            String message
    ) {

        String htmlContent = """
                <div style="font-family:Arial;padding:20px">

                <h2 style="color:#2563eb">
                🚨 New Bright Sparks Enquiry
                </h2>

                <hr>

                <p><b>Name:</b> %s</p>
                <p><b>Phone:</b> %s</p>
                <p><b>Email:</b> %s</p>

                <h3>Message</h3>

                <div style="
                background:#f8fafc;
                padding:15px;
                border-radius:10px;
                ">
                %s
                </div>

                <br>

                <p>
                Bright Sparks Admission CRM
                </p>

                </div>
                """.formatted(
                name,
                phone,
                email,
                message
        );


        sendEmail(
                "rishavyadav87421@gmail.com",
                "🚨 New Bright Sparks Enquiry",
                htmlContent
        );
    }



    public void sendAutoReply(
            String studentName,
            String studentEmail
    ) {


        String htmlContent = """
                <div style="font-family:Arial;padding:20px">

                <h2 style="color:#2563eb">
                Thank You for Your Enquiry
                </h2>

                <p>
                Dear %s,
                </p>

                <p>
                Thank you for contacting
                <b>Bright Sparks Academy</b>.
                </p>

                <p>
                We have received your enquiry.
                Our admission team will contact you shortly.
                </p>

                <br>

                <p>
                Regards,<br>
                Bright Sparks Academy
                </p>

                </div>
                """.formatted(studentName);



        sendEmail(
                studentEmail,
                "Thank You for Contacting Bright Sparks",
                htmlContent
        );

    }




    private void sendEmail(
            String receiver,
            String subject,
            String htmlContent
    ) {


        try {


            JSONObject emailData =
                    new JSONObject();



            emailData.put(
                    "sender",
                    new JSONObject()
                            .put(
                                    "name",
                                    "Bright Sparks Academy"
                            )
                            .put(
                                    "email",
                                    "brightsparks.rnc.edu@gmail.com"
                            )
            );



            emailData.put(
                    "to",
                    new JSONArray()
                            .put(
                                    new JSONObject()
                                            .put(
                                                    "email",
                                                    receiver
                                            )
                            )
            );


            emailData.put(
                    "subject",
                    subject
            );


            emailData.put(
                    "htmlContent",
                    htmlContent
            );



            OkHttpClient client =
                    new OkHttpClient();



            RequestBody body =
                    RequestBody.create(
                            emailData.toString(),
                            MediaType.parse(
                                    "application/json"
                            )
                    );



            Request request =
                    new Request.Builder()

                            .url(
                                    "https://api.brevo.com/v3/smtp/email"
                            )

                            .addHeader(
                                    "api-key",
                                    apiKey
                            )

                            .addHeader(
                                    "Content-Type",
                                    "application/json"
                            )

                            .post(body)

                            .build();



            Response response =
                    client.newCall(request)
                            .execute();



            System.out.println(
                    "Brevo Email Status: "
                            + response.code()
            );



            response.close();


        }
        catch(Exception e){

            e.printStackTrace();

        }

    }

}