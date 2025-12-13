import emailjs from "@emailjs/browser";

// Load EmailJS configuration from environment variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Validate that all required environment variables are present
if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
  console.error("Missing required EmailJS environment variables");
  console.error({
    SERVICE_ID: SERVICE_ID ? "✓" : "✗ Missing VITE_EMAILJS_SERVICE_ID",
    TEMPLATE_ID: TEMPLATE_ID ? "✓" : "✗ Missing VITE_EMAILJS_TEMPLATE_ID",
    PUBLIC_KEY: PUBLIC_KEY ? "✓" : "✗ Missing VITE_EMAILJS_PUBLIC_KEY",
  });
}

export interface EmailData {
  name: string;
  email: string;
  accountAge?: string;
  followers?: string;
  details?: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    console.log("Sending email with data:", data);
    console.log("Using SERVICE_ID:", SERVICE_ID);
    console.log("Using TEMPLATE_ID:", TEMPLATE_ID);
    console.log("Using PUBLIC_KEY:", PUBLIC_KEY ? "Set" : "Not set");

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        account_age: data.accountAge || "Not provided",
        followers: data.followers || "Not provided",
        details: data.details || "Not provided",
      },
      PUBLIC_KEY
    );

    console.log("EmailJS response:", response);
    return response.status === 200;
  } catch (error) {
    console.error("Failed to send email:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));
    return false;
  }
};
