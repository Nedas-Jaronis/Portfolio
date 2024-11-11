// import { Button } from "@/components/ui/button"
// import { Github, Linkedin } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

// export default function Intro() {
//   return (
//     <section id="intro" className="w-full min-h-screen flex flex-col items-center justify-center mt-16 md:mt-20"> {/* Added top margin */}
//       <Image
//         src="/profile_3-modified.png"
//         alt="Profile picture"
//         width={960}
//         height={960}
//         quality={100}
//         className="object-cover w-80 h-80 rounded-full" // Rounded to match the profile shape
//         priority
//       />
//       <div className="flex flex-col items-center mt-8">
//         <p className="text-lg text-muted-foreground">Hello, I'm</p>
//         <h1 className="text-4xl md:text-5xl font-bold mb-2">Nedas Jaronis</h1>
//         <p className="text-xl md:text-2xl text-muted-foreground">
//           Backend Developer
//         </p>
//       </div>

//       <div className="flex flex-wrap justify-center gap-4 pt-4">
//         <Button variant="outline" className="min-w-[150px]" onClick={() => window.open('/NedasResume.pdf', '_blank')}>
//           Download CV
//         </Button>
//         <Button asChild className="min-w-[150px] bg-zinc-800 text-white hover:bg-zinc-700">
//           <Link href="#contact">Contact Info</Link>
//         </Button>
//       </div>

//       <div className="flex justify-center gap-4 pt-5">
//         <Link href="https://www.linkedin.com/in/jaronisnedas/" className="hover:opacity-80">
//           <Linkedin className="w-6 h-6" />
//           <span className="sr-only">LinkedIn Profile</span>
//         </Link>
//         <Link href="https://github.com/Nedas-Jaronis" className="hover:opacity-80">
//           <Github className="w-6 h-6" />
//           <span className="sr-only">GitHub Profile</span>
//         </Link>
//       </div>
//       <div className="flex justify-center mt-16">
//         <svg
//           className="w-6 h-6 animate-bounce text-blue-600"
//           fill="none"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//         </svg>
//       </div>
//     </section>
//   )
// }

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, GraduationCap, Trophy, Download, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function IntroSection() {
  return (
    <section id="intro" className="w-full min-h-screen flex flex-col justify-center bg-gradient-to-b from-background to-secondary/10 px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Column: Image and Main Info */}
        <div className="flex flex-col items-center lg:items-start space-y-12">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <Image
              src="/Profile_2_Picture.JPG"
              alt="Professional portrait of Nedas Jaronis"
              fill
              className="object-cover rounded-full border-4 border-primary shadow-xl"
              priority
            />
          </div>
          
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Nedas Jaronis
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light ml-[-40px]">
              Backend Developer & AI Enthusiast
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <Button 
                variant="outline" 
                size="lg"
                className="group"
                onClick={() => window.open('/NedasResume.pdf', '_blank')}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button asChild size="lg">
                <Link href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Link>
              </Button>
            </div>

            <div className="flex justify-center w-full gap-8 pt-4 ml-[-50px]">
              <Link 
                href="https://www.linkedin.com/in/jaronisnedas/" 
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-8 h-8 text-blue-600" />
                <span className="sr-only">LinkedIn Profile</span>
              </Link>
              <Link 
                href="https://github.com/Nedas-Jaronis" 
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-8 h-8 text-blue-600" />
                <span className="sr-only">GitHub Profile</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: About Content */}
        <div className="space-y-8">
          <Card className="border-none shadow-md bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-primary text-blue-600">
                <Trophy className="w-6 h-6" />
                <span>Experience</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-base text-muted-foreground">
                <li>UF/IBM AI Days Hackathon: Insure Sight</li>
                <li>Personal Project: Mini-Casino</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-primary text-blue-600">
                <GraduationCap className="w-6 h-6" />
                <span>Education</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-base text-muted-foreground space-y-2">
                <p>B.S. in Computer Science</p>
                <p>University of Florida</p>
                <p>Expected Graduation: May 2028</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-primary text-blue-600">
                <User className="w-6 h-6" />
                <span>About Me</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-base text-muted-foreground">
                <p>
                  As a freshman at the <span className="font-medium text-foreground">University of Florida</span>, 
                  I'm on a journey to become an <span className="font-medium text-foreground">AI engineer</span>. 
                  My passion lies in creating innovative solutions that drive positive change in our world.
                </p>
                <p>
                  I recently developed Insure Sight, an application that simplifies the insurance claim process 
                  by allowing users to document their belongings before disasters strike. This project showcases 
                  my ability to apply technology to real-world problems.
                </p>
                <p>
                  Beyond coding, I find balance in activities like surfing, snowboarding, and soccer. 
                  I'm always excited to connect with fellow tech enthusiasts and industry professionals!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <svg
          className="w-5 h-5 animate-bounce text-blue-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}