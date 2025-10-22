import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();
    const { name, email, message } = formData;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send data to Google Apps Script Web App
    const webAppResponse = await fetch(process.env.GOOGLE_APPS_SCRIPT_WEB_APP_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: name,
        email: email,
        message: message,
      }),
    });

    if (!webAppResponse.ok) {
      console.error("Google Apps Script Web App error:", await webAppResponse.text());
      return NextResponse.json(
        { error: "Failed to submit form" },
        { status: 500 }
      );
    }

    const result = await webAppResponse.json();
    console.log("Form submitted successfully:", result);

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
