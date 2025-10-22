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

    // Google Apps Script will handle email sending automatically
    // when new data is added to the Google Sheet
    // No additional email API call needed here

    return NextResponse.json(
      { message: "Form submitted successfully - email will be sent via Apps Script" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form processing error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
