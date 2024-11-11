'use client'

import Image from 'next/image'
import Link from 'next/link'
import Intro from './components/intro'
// import AboutMe from './components/about-me'
import Projects from './components/projects'
import Experience from './components/experience'
import ContactMe from './components/contact-me'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className="font-['Poppins',sans-serif] container">
      <Intro />
      {/* <AboutMe /> */}
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  )
}