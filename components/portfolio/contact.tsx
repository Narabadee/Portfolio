"use client"

import Link from "next/link"
import { Github, Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "narabadee47@gmail.com",
    href: "mailto:narabadee47@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "064-910-2354",
    href: "tel:+66649102354"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangkok, Thailand",
    href: null
  }
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Narabadee",
    username: "@Narabadee"
  }
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-shimmer">Get in Touch</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I&apos;m currently looking for internship opportunities. If you have any questions or 
            just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <Card className="bg-card animate-fade-in-up hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl">Contact Information</CardTitle>
              <CardDescription>
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 bg-secondary rounded-xl">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl hover:bg-primary/10 hover:text-primary transition-all"
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="text-sm font-medium">{social.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Card */}
          <Card className="bg-primary text-primary-foreground animate-fade-in-up animation-delay-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <CardContent className="flex flex-col items-center justify-center h-full p-8 text-center">
              <div className="p-4 bg-primary-foreground/10 rounded-full mb-6 animate-float">
                <Send className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Open to Opportunities
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                I&apos;m actively seeking Full-Stack Developer internship positions. 
                Let&apos;s discuss how I can contribute to your team!
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
                asChild
              >
                <Link href="mailto:narabadee47@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send me an email
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
