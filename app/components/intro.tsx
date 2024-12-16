import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, GraduationCap, Trophy, Download, Mail, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function IntroSection() {
  return (
    <section id="intro" className="w-full min-h-screen flex flex-col justify-center bg-gradient-to-b from-background to-secondary/10 px-4 py-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
        <div className="flex flex-col items-center space-y-6 justify-center h-full">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/Profile_2_Picture.JPG"
              alt="Professional portrait of Nedas Jaronis"
              fill
              className="object-cover rounded-full border-2 border-primary shadow-xl"
              priority
            />
          </div>
          
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Nedas Jaronis
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Backend Developer & AI Enthusiast
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <Button variant="outline" size="sm" className="group text-sm" onClick={() => window.open('/NedasResume.pdf', '_blank')}>
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button asChild size="sm" className="text-sm">
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>

            <div className="flex justify-center w-full gap-6 pt-2">
              <Link 
                href="https://www.linkedin.com/in/jaronisnedas/" 
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 text-blue-600" />
                <span className="sr-only">LinkedIn Profile</span>
              </Link>
              <Link 
                href="https://github.com/Nedas-Jaronis" 
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 text-blue-600" />
                <span className="sr-only">GitHub Profile</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-8">
          {[
            { title: "About Me", icon: User, content: [
              "As a freshman at the University of Florida, I'm on a journey to become an AI engineer. My passion lies in creating innovative solutions that drive positive change in our world.",
              "I recently developed Insure Sight, an application that simplifies the insurance claim process by allowing users to document their belongings before disasters strike.",
              "Beyond coding, I find balance in activities like surfing, snowboarding, and soccer. I'm always excited to connect with fellow tech enthusiasts and industry professionals!"
            ]},
            { title: "Education", icon: GraduationCap, content: ["B.S. in Computer Science", "University of Florida", "Expected Graduation: May 2028"] },
            { title: "Experience", icon: Trophy, content: ["UF/IBM AI Days Hackathon: Insure Sight", "Personal Project: Mini-Casino"] }
          ].map(({ title, icon: Icon, content }) => (
            <Card key={title} className="border-none shadow-md bg-card/50 backdrop-blur-sm">
              <CardHeader className="py-2">
                <CardTitle className="flex items-center space-x-2 text-primary text-blue-600 text-lg">
                  <Icon className="w-4 h-4" />
                  <span>{title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="py-2">
                <div className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                  {content.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <svg className="w-6 h-6 animate-bounce text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}