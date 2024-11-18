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
    }
  ];

  return (
    <section id="projects" className="w-full flex flex-col items-center justify-center bg-white py-8 px-4 min-h-[100vh]">
      <div className="text-center mb-6">
        <p className="text-xs text-gray-700 mb-1">Browse My Recent</p>
        <h2 className="text-2xl font-bold text-blue-600">Projects</h2>
      </div>
      
      <div className="grid sm:grid-cols-2 max-w-2xl gap-4 w-full justify-center items-center">
        {projects.map((project, index) => (
          <Card key={index} className="bg-card border border-gray-200 shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <CardContent className="p-3">
              <div className="relative w-full pt-[75%]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-1 p-3 items-center">
              <h3 className="text-base font-semibold text-black">{project.title}</h3>
              <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors" asChild>
                <Link href={project.github}>Github</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <svg
          className="w-5 h-5 animate-bounce text-blue-600"
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