import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Insure Sight",
      image: "/InsureSight_pic.webp",
      github: "https://github.com/kevin8999/InsureSight",
    },
    {
      title: "Mini-Casino",
      image: "/Casino_pic.webp",
      github: "#",
    }
  ]

  return (
    <section id="projects" className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <p className="text-muted-foreground mb-2">Browse My Recent</p>
        <h2 className="text-4xl font-bold">Projects</h2>
      </div>
      
      <div className="grid md:grid-cols-2 max-w-5xl gap-8 w-full">
        {projects.map((project, index) => (
          <Card key={index} className="bg-card border-2 overflow-hidden">
            <CardContent className="p-6">
              <div className="aspect-square relative bg-muted rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 pb-6">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <div className="flex gap-4">
                <Button variant="outline" asChild>
                  <Link href={project.github}>Github</Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}