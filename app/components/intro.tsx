import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Intro() {
  return (
    <section id="intro" className="w-full min-h-screen flex flex-col items-center justify-center mt-16 md:mt-20"> {/* Added top margin */}
      <Image
        src="/profile_3-modified.png"
        alt="Profile picture"
        width={960}
        height={960}
        quality={100}
        className="object-cover w-80 h-80 rounded-full" // Rounded to match the profile shape
        priority
      />
      <div className="flex flex-col items-center mt-8">
        <p className="text-lg text-muted-foreground">Hello, I'm</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Nedas Jaronis</h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Backend Developer
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 pt-4">
        <Button variant="outline" className="min-w-[150px]" onClick={() => window.open('/NedasResume.pdf', '_blank')}>
          Download CV
        </Button>
        <Button asChild className="min-w-[150px] bg-zinc-800 text-white hover:bg-zinc-700">
          <Link href="#contact">Contact Info</Link>
        </Button>
      </div>

      <div className="flex justify-center gap-4 pt-5">
        <Link href="https://www.linkedin.com/in/jaronisnedas/" className="hover:opacity-80">
          <Linkedin className="w-6 h-6" />
          <span className="sr-only">LinkedIn Profile</span>
        </Link>
        <Link href="https://github.com/Nedas-Jaronis" className="hover:opacity-80">
          <Github className="w-6 h-6" />
          <span className="sr-only">GitHub Profile</span>
        </Link>
      </div>
      <div className="flex justify-center mt-16">
        <svg
          className="w-6 h-6 animate-bounce text-blue-600"
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
