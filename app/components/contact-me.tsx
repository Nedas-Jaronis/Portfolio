import { Mail, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ContactMe() {
  return (
    <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <div className="text-center space-y-6 mb-12">
        <p className="text-blue-600 text-5xl md:text-6xl font-light">Let’s Connect</p>
        <h2 className="text-7xl md:text-8xl font-bold tracking-tighter text-black">Contact Me</h2>
      </div>
      
      <div className="mt-12 rounded-full border-2 border-blue-600 bg-white px-10 py-6 shadow-lg">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <Link 
            href="mailto:jaronisnedas@ufl.edu"
            className="flex items-center gap-3 hover:text-blue-600 transition-colors text-lg md:text-xl text-gray-800"
          >
            <Mail className="h-6 w-6 md:h-7 md:w-7 text-blue-600" />
            <span>jaronisnedas@ufl.edu</span>
          </Link>
          <div className="hidden sm:block h-6 w-px bg-gray-300" />
          <Link 
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-600 transition-colors text-lg md:text-xl text-gray-800"
          >
            <Linkedin className="h-6 w-6 md:h-7 md:w-7 text-blue-600" />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
