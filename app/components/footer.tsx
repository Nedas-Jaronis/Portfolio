import Link from "next/link"

export default function Footer() {
  return (
    <footer id="footer" className="w-full py-6 flex flex-col items-center gap-4">
      <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <Link 
          href="#intro" 
          className="text-base hover:text-primary/80 transition-colors"
        >
          Intro
        </Link>
        <Link 
          href="#aboutme" 
          className="text-base hover:text-primary/80 transition-colors"
        >
          About Me
        </Link>
        <Link 
          href="#experience" 
          className="text-base hover:text-primary/80 transition-colors"
        >
          Experience
        </Link>
        <Link 
          href="#projects" 
          className="text-base hover:text-primary/80 transition-colors"
        >
          Projects
        </Link>
        <Link 
          href="#contact" 
          className="text-base hover:text-primary/80 transition-colors"
        >
          Contact
        </Link>
      </nav>
      <p className="text-sm text-muted-foreground text-center">
        Copyright © {new Date().getFullYear()} Nedas Jaronis. All Rights Reserved.
      </p>
    </footer>
  )
}
