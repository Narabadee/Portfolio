"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const activities = [
  {
    id: 1,
    title: "Route Floor 4",
    date: "2567",
    location: "huachiew chalermprakiet university",
    description: "โปรเจคตรวจและวิเคราะห์สัญญาณ Wifi ของมหาวิทยาลัยในตึกอาคารเรียนชั้นที่ 4",
    image: "/Portfolio/images/activities/495565959_1152089130054265_226530209165748344_n.jpg"
  },
  {
    id: 2,
    title: "Startup Thailand League 2025",
    date: "2568",
    location: "huachiew chalermprakiet university",
    description: "Startup Thailand League 2025",
    image: "/Portfolio/images/activities/500315019_1162931358970042_9003078369724401367_n.jpg"
  },
  {
    id: 3,
    title: "Lark",
    date: "2568",
    location: "huachiew chalermprakiet university",
    description: "เข้าร่วมกิจกรรมที่ Lark มาให้ความรู้เกี่ยวกับการทำงาน",
    image: "/Portfolio/images/activities/626844963_1363994682197041_9123203204315677908_n.jpg"
  },
  {
    id: 4,
    title: "Metro System",
    date: "2569",
    location: "Bangkok",
    description: "ไปดูสถานที่การทำงานและความรู้ในด้านต่างๆ.",
    image: "/Portfolio/images/activities/660634493_1411640594099116_7834948681744095606_n.jpg"
  },
  {
    id: 5,
    title: "Metro System",
    date: "2569",
    location: "Bangkok",
    description: "ไปดูสถานที่การทำงานและความรู้ในด้านต่างๆ.",
    image: "/Portfolio/images/activities/663337890_1411640404099135_7393318035009161537_n.jpg"

  },
  {
    id: 6,
    title: "Metro System",
    date: "2567",
    location: "huachiew chalermprakiet university",
    description: "Metro System มาให้ความรู้เกี่ยวกับการทำงาน Data และการออกแบบ Data Report โดยใช้ Power BI และผมได้รับรางวัลจากการใช้ Data มาวิเคราะห์ข้อมูลธุรกิจ",
    image: "/Portfolio/images/certificates/Certification6.jpg"
  }
]

export function Activities() {
  return (
    <section id="activities" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-shimmer">Activities</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Beyond the code, I actively participate in university life, tech communities, and leadership roles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Dialog key={activity.id}>
              <DialogTrigger asChild>
                <Card
                  className="group cursor-pointer overflow-hidden border-primary/20 bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up shadow-sm hover:shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <p className="text-xs font-semibold uppercase tracking-wider mb-1 text-primary-foreground/80">{activity.date}</p>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1">{activity.title}</h3>
                      <p className="text-xs text-white/70 flex items-center gap-1 mt-1">
                        <span className="inline-block w-1 h-1 rounded-full bg-primary" />
                        {activity.location}
                      </p>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden bg-transparent border-none shadow-none">
                <DialogHeader className="sr-only">
                  <DialogTitle>{activity.title}</DialogTitle>
                </DialogHeader>
                <div className="relative aspect-auto flex flex-col items-center justify-center p-4">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl mb-4"
                  />
                  <div className="bg-card/90 backdrop-blur-md p-4 rounded-xl border border-border max-w-2xl text-center">
                    <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
