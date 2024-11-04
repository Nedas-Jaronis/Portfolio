import { Mail, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ContactMe() {
  return (
    <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-4">
        <p className="text-muted-foreground text-4xl">Get in Touch</p>
        <h2 className="text-8xl font-bold tracking-tight">Contact Me</h2>
      </div>
      
      <div className="mt-8 rounded-full border bg-background px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link 
            href="mailto:jaronisnedas@ufl.edu"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>jaronisnedas@ufl.edu</span>
          </Link>
          <div className="hidden sm:block h-4 w-px bg-border" />
          <Link 
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
    </section>
  )
}