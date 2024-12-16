import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
      github: "https://github.com/Nedas-Jaronis/Mini-Casino",
    },
    {
      title: "Sudoku",
      image: "/Sudoku_Cover_Photo.webp",
      github: "https://github.com/trenton125/Sudoku-Project",
    }
  ];

  return (
    <section id="projects" className="w-full flex flex-col items-center justify-center bg-white py-16 px-4 min-h-screen">
      <div className="text-center mb-8">
        <p className="text-sm text-gray-700 mb-2">Browse My Recent</p>
        <h2 className="text-3xl font-bold text-blue-600">Projects</h2>
      </div>
      
      <div className="grid md:grid-cols-2 max-w-4xl gap-6 w-full justify-center items-center">
        {projects.map((project, index) => (
          <Card key={index} className="bg-card border-2 border-gray-200 shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <CardContent className="p-4">
              <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 p-4 items-center">
              <h3 className="text-lg font-bold text-black">{project.title}</h3>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors" asChild>
                <Link href={project.github}>Github</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
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
  );
}
