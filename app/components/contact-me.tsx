import { Mail, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ContactMe() {
  return (
    <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6 mb-12">
        <p className="text-muted-foreground text-5xl md:text-6xl font-light">Get in Touch</p>
        <h2 className="text-7xl md:text-8xl font-bold tracking-tighter">Contact Me</h2>
      </div>
      
      <div className="mt-12 rounded-full border-2 bg-background px-10 py-6 shadow-lg">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <Link 
            href="mailto:jaronisnedas@ufl.edu"
            className="flex items-center gap-3 hover:text-primary transition-colors text-lg md:text-xl"
          >
            <Mail className="h-6 w-6 md:h-7 md:w-7" />
            <span>jaronisnedas@ufl.edu</span>
          </Link>
          <div className="hidden sm:block h-6 w-px bg-border" />
          <Link 
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-primary transition-colors text-lg md:text-xl"
          >
            <Linkedin className="h-6 w-6 md:h-7 md:w-7" />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
    </section>
  )
}