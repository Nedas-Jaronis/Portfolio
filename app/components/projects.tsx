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
      github: "#",
    }
  ];

  return (
    <section id="projects" className="w-full flex flex-col items-center justify-center bg-white py-6 px-4 mt-12">
      <div className="text-center mb-8">
        <p className="text-gray-700 text-sm mb-1">Browse My Recent</p>
        <h2 className="text-3xl font-bold text-blue-600">Projects</h2>
      </div>
      
      <div className="grid md:grid-cols-2 max-w-4xl gap-4 w-full">
        {projects.map((project, index) => (
          <Card key={index} className="bg-card border border-gray-200 shadow-sm overflow-hidden transition-transform transform hover:scale-105">
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
            <CardFooter className="flex flex-col gap-2 p-4">
              <h3 className="text-xl font-semibold text-black">{project.title}</h3>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors" asChild>
                <Link href={project.github}>Github</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
