"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

const certificates = [
  {
    id: 1,
    title: "รางวัลเกียรติคุณ",
    date: "2567",
    description: "เป็นผู้ที่มีผลการเรียนดี ความประพฤติเรียบร้อย มีน้ำใจ มีมนุษยสัมพันธ์ดี เสียสละต่อส่วนรวม",
    image: "/Portfolio/images/certificates/Certifacate1.jpg"
  },
  {
    id: 2,
    title: "เรียนดี",
    date: "2567",
    description: "เกรดเฉลี่ย 3.71",
    image: "/Portfolio/images/certificates/Certifacate2.jpg"
  },
  {
    id: 3,
    title: "รางวัลเกียรติคุณ",
    date: "2566",
    description: "เป็นผู้ที่มีผลการเรียนดี ความประพฤติเรียบร้อย มีน้ำใจ มีมนุษยสัมพันธ์ดี เสียสละต่อส่วนรวม",
    image: "/Portfolio/images/certificates/Certifacate3.jpg"
  },
  {
    id: 4,
    title: "รางวัลเกียรติคุณ",
    date: "2566",
    description: "เป็นผู้ที่มีผลการเรียนดี ความประพฤติเรียบร้อย มีน้ำใจ มีมนุษยสัมพันธ์ดี เสียสละต่อส่วนรวม",
    image: "/Portfolio/images/certificates/Certifacate4.jpg"
  },
  {
    id: 5,
    title: "Business Discovery",
    date: "2568",
    description: "NIA SET E-learning",
    image: "/Portfolio/images/certificates/Certifacate5.jpeg"
  },
  {
    id: 6,
    title: "Software Engineer Certificate",
    date: "2569",
    description: "hackerrank.com certificate about Software Engineer Certificate test",
    image: "/Portfolio/images/certificates/Certification7.jpeg"
  }
]

export function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-shimmer">Certificates</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and recognitions I&apos;ve earned throughout my academic and professional journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Dialog key={cert.id}>
              <DialogTrigger asChild>
                <Card
                  className="group cursor-pointer overflow-hidden border-primary/20 bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium px-4 py-2 bg-primary/80 rounded-full text-sm">View Certificate</span>
                    </div>
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{cert.title}</CardTitle>
                      <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded">{cert.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 pb-4 pt-0">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden bg-transparent border-none shadow-none">
                <DialogHeader className="sr-only">
                  <DialogTitle>{cert.title}</DialogTitle>
                </DialogHeader>
                <div className="relative aspect-auto flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
