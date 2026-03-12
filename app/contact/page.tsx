"use client";

import { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send, ArrowRight, Users, Handshake, Briefcase } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const contactReasons = [
  {
    icon: Handshake,
    title: "Partnerships",
    description: "Collaborate with us on projects and initiatives",
  },
  {
    icon: Briefcase,
    title: "Investment",
    description: "Explore investment opportunities in herbal agriculture",
  },
  {
    icon: Users,
    title: "Training",
    description: "Join our youth training and skills development programs",
  },
  {
    icon: Mail,
    title: "General Inquiry",
    description: "Get in touch for any questions or information",
  },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 100;
const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 2000;

function validateName(name: string): string {
  const t = name.trim();
  if (!t) return "Name is required.";
  if (t.length < MIN_NAME_LENGTH) return `Name must be at least ${MIN_NAME_LENGTH} characters.`;
  if (t.length > MAX_NAME_LENGTH) return `Name must be no more than ${MAX_NAME_LENGTH} characters.`;
  return "";
}

function validateEmail(email: string): string {
  if (!email.trim()) return "Email is required.";
  if (!EMAIL_REGEX.test(email.trim())) return "Please enter a valid email address.";
  return "";
}

function validateSubject(subject: string): string {
  if (!subject) return "Please select a subject.";
  return "";
}

function validateMessage(message: string): string {
  const t = message.trim();
  if (!t) return "Message is required.";
  if (t.length < MIN_MESSAGE_LENGTH) return `Message must be at least ${MIN_MESSAGE_LENGTH} characters.`;
  if (t.length > MAX_MESSAGE_LENGTH) return `Message must be no more than ${MAX_MESSAGE_LENGTH} characters.`;
  return "";
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateAll = () => {
    const nameErr = validateName(formData.name);
    const emailErr = validateEmail(formData.email);
    const subjectErr = validateSubject(formData.subject);
    const messageErr = validateMessage(formData.message);
    setErrors({
      name: nameErr,
      email: emailErr,
      subject: subjectErr,
      message: messageErr,
    });
    return !(nameErr || emailErr || subjectErr || messageErr);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTouched({});
    } catch {
      alert("Failed to send. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const validators: Record<string, (v: string) => string> = {
        name: validateName,
        email: validateEmail,
        subject: validateSubject,
        message: validateMessage,
      };
      const fn = validators[name];
      if (fn) setErrors((prev) => ({ ...prev, [name]: fn(value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validators: Record<string, (v: string) => string> = {
      name: validateName,
      email: validateEmail,
      subject: validateSubject,
      message: validateMessage,
    };
    const fn = validators[name];
    if (fn) setErrors((prev) => ({ ...prev, [name]: fn(value) }));
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative py-0 w-full">
        <div className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center w-full">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/youth-with-hoe-portrait.jpg"
              alt="Contact Us"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F6131]/75 via-[#0F6131]/70 to-[#0F6131]/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-0 py-8 sm:py-12 md:py-16 lg:py-20">
            <AnimatedSection>
              <div className="w-full max-w-4xl mx-auto text-center text-white px-4 sm:px-6 md:px-8 lg:px-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-0 drop-shadow-2xl leading-tight px-2">
                  Get in Touch
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg leading-relaxed mb-0 mt-3 sm:mt-4 px-2">
                  We welcome partners, investors, farmers, youth groups, and organizations interested in herbal agriculture and sustainable development.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-5 sm:mt-6 px-2">
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm shadow-lg text-sm sm:text-base min-h-[44px] sm:min-h-[48px] px-4 sm:px-6 w-full sm:w-auto">
                    <Link href="/about">
                      Learn About Us
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="bg-[#8EBA3E] hover:bg-[#8EBA3E]/90 text-white shadow-lg hover:shadow-xl transition-all text-sm sm:text-base min-h-[44px] sm:min-h-[48px] px-4 sm:px-6 w-full sm:w-auto">
                    <Link href="#form">
                      Send a Message <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Reasons */}
      <Section className="bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <AnimatedSection key={index} delay={0.1 * index}>
                  <Card className="border-2 hover:shadow-xl transition-shadow text-center h-full">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-[#8EBA3E]/20 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-[#0F6131]" />
                      </div>
                      <CardTitle className="text-xl text-[#0F6131]">{reason.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{reason.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Contact Form and Info */}
      <Section className="bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <Card id="form" className="border-2 border-[#8EBA3E]/30 shadow-xl scroll-mt-24">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0F6131]">Send Us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#0F6131]">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your full name"
                        maxLength={MAX_NAME_LENGTH}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F6131] focus:border-transparent transition-all ${
                          errors.name ? "border-red-500" : "border-[#8EBA3E]/30"
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#0F6131]">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="you@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F6131] focus:border-transparent transition-all ${
                          errors.email ? "border-red-500" : "border-[#8EBA3E]/30"
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-[#0F6131]">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? "subject-error" : undefined}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F6131] focus:border-transparent transition-all ${
                          errors.subject ? "border-red-500" : "border-[#8EBA3E]/30"
                        }`}
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General inquiries</option>
                        <option value="partnership">Partnership requests</option>
                        <option value="collaboration">Project collaboration</option>
                        <option value="training">Training applications</option>
                        <option value="investment">Investment opportunities</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.subject && (
                        <p id="subject-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.subject}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#0F6131]">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your message (min. 10 characters)"
                        maxLength={MAX_MESSAGE_LENGTH}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F6131] focus:border-transparent transition-all resize-none ${
                          errors.message ? "border-red-500" : "border-[#8EBA3E]/30"
                        }`}
                      />
                      <p className="mt-1 text-xs text-muted-foreground">
                        {formData.message.length} / {MAX_MESSAGE_LENGTH} characters
                      </p>
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#0F6131] hover:bg-[#0F6131]/90 text-white shadow-lg disabled:opacity-70"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {isSubmitting ? "Sending…" : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Information */}
            <div className="space-y-6">
              <AnimatedSection delay={0.2}>
                <Card className="border-2 border-[#8EBA3E]/30 shadow-xl h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#0F6131]">Contact Information</CardTitle>
                    <CardDescription className="text-base">
                      Reach out to us through any of these channels.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-[#8EBA3E]/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-[#0F6131]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#0F6131] mb-1">Address</p>
                        <p className="text-muted-foreground leading-relaxed">
                          EDYM Herbal Hub Company Limited<br />
                          No. 55 Apple Street<br />
                          Adjiringano, East Legon<br />
                          Accra, Ghana
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-[#8EBA3E]/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-[#0F6131]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#0F6131] mb-1">Phone</p>
                        <a
                          href="tel:+233244895520"
                          className="text-muted-foreground hover:text-[#0F6131] transition-colors"
                        >
                          +233 24 489 5520
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-[#8EBA3E]/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-[#0F6131]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#0F6131] mb-1">Email</p>
                        <a
                          href="mailto:edymherbalhub@gmail.com"
                          className="text-muted-foreground hover:text-[#0F6131] transition-colors break-all"
                        >
                          Edymherbalhub@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Card className="bg-gradient-to-br from-[#0F6131] to-[#8EBA3E] text-white border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Why Partner With Us?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90 mb-4 leading-relaxed">
                      EDYM Herbal Hub is building Ghana's next-generation herbal industry through innovation, training, and sustainable enterprise.
                    </p>
                    <ul className="space-y-2 text-white/90">
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>Youth-led and community-focused</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>Sustainable and environmentally responsible</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>Proven track record of impact</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>Comprehensive training and support</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F6131] mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join us in building Ghana's herbal agriculture future. Whether you're an investor, partner, or aspiring farmer, we'd love to hear from you.
            </p>
            <Button asChild size="lg" variant="outline" className="border-2 border-[#0F6131] text-[#0F6131] hover:bg-[#0F6131]/10">
              <a href="#form">
                Send a Message <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}

