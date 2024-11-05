'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#intro", label: "Intro" },
    { href: "#aboutme", label: "About Me" },
    { href: '#experience', label: 'Experience'},
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl md:text-4xl font-semibold tracking-tight">Nedas Jaronis</span>
          </Link>
          
          <nav className="hidden lg:flex items-center justify-center space-x-10 text-xl font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
              >
                <Menu className="h-8 w-8" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-3xl font-medium transition-colors hover:text-foreground/80 text-foreground/60 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}