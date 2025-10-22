"use client";

import { useState } from "react";
import { X, Send, Loader2 } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Send to Google Sheets
      const sheetsResponse = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!sheetsResponse.ok) {
        throw new Error("Failed to submit form");
      }

      // Send email to founders
      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!emailResponse.ok) {
        throw new Error("Failed to send email");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Auto close after 2 seconds
      setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Removed handleOverlayClick - outside click no longer closes the form

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-background rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
        {/* Header */}
        <div className="relative px-6 py-4 border-b border-border/50">
          <h2
            className="text-2xl font-semibold text-center"
            style={{
              fontFamily: "var(--font-raleway), sans-serif",
              color: "#C06B3F",
              letterSpacing: "0.1em",
            }}
          >
            Get in Touch
          </h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted/50 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
            aria-label="Close form"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 cursor-text"
              placeholder="Your full name"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 cursor-text"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none cursor-text"
              placeholder="Tell us about your inquiry..."
            />
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-center">
              <p className="font-medium">Message sent successfully!</p>
              <p className="text-sm">We&apos;ll get back to you soon.</p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-center">
              <p className="font-medium">Failed to send message</p>
              <p className="text-sm">
                Please try again or contact us directly.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 active:scale-95"
            style={{
              backgroundColor: "#C06B3F",
              fontFamily: "var(--font-raleway), sans-serif",
              letterSpacing: "0.05em",
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = "#B05730";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(192, 107, 63, 0.3)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = "#C06B3F";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }
            }}
            onMouseDown={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.transform = "translateY(0) scale(0.98)";
              }
            }}
            onMouseUp={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.transform = "translateY(-1px)";
              }
            }}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border/50 bg-muted/20">
          <p className="text-xs text-muted-foreground text-center">
            We&apos;ll respond within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
