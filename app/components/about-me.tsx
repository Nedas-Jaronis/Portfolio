import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Trophy } from "lucide-react"

export default function AboutMe() {
  return (
    <section id="aboutme" className="w-full min-h-screen flex flex-col items-center justify-center">
    <div className="text-center mb-16">
      <p className="text-lg text-muted-foreground mb-2">Get To Know More</p>
      <h1 className="text-4xl font-bold">About Me</h1>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
        <Image
          src="/Profile_2_Picture.jpg"
          alt="Professional portrait"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div className="space-y-8">
        <div className="grid sm:grid-cols-2 gap-4">
          <Card className="p-6">
            <CardContent className="space-y-4 p-0">
              <Trophy className="w-8 h-8 mx-auto" />
              <h2 className="text-xl font-semibold text-center">Experience</h2>
              <ul className="space-y-2">
                <li>UF/IBM AI Days Hackathon: Insure Sight</li>
                <li>Personal Project: Mini-Casino</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="space-y-4 p-0">
              <GraduationCap className="w-8 h-8 mx-auto" />
              <h2 className="text-xl font-semibold text-center">Education</h2>
              <div className="space-y-2">
                <p>Bachelor of Science in Computer Science</p>
                <p>Expected Graduation: May 2028</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          I&apos;m a freshman studying Computer Science at the University of Florida,
          graduating in May 2028. I aspire to be an AI engineer, dedicated to developing innovative
          solutions that make a positive impact. I created Insure Sight, an app that helps users
          document their belongings before disasters for easier insurance claims. I also developed
          a Mini-Casino project in C++ to further strengthen my programming skills and delve into
          game development. Outside of coding, I enjoy surfing, snowboarding, and playing
          soccer. I&apos;m excited to connect with others in the tech community!
        </p>
      </div>
    </div>

    <div className="flex justify-center mt-16">
      <svg
        className="w-6 h-6 animate-bounce"
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