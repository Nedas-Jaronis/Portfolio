import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="text-center mb-12">
        <p className="text-blue-600 mb-2">Explore My</p>
        <h2 className="text-4xl font-bold text-black">Experience</h2>
      </div>
      
      <div className="grid md:grid-cols-2 max-w-5xl gap-8 w-full">
        <Card className="p-6 border-l-4 border-blue-600 shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-6 text-blue-600">Frontend Development</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-semibold">HTML</p>
                <p className="text-sm text-muted-foreground">Basic</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-semibold">CSS</p>
                <p className="text-sm text-muted-foreground">Basic</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-semibold">JavaScript</p>
                <p className="text-sm text-muted-foreground">Basic</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-blue-600 shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-6 text-blue-600">Backend Development</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-semibold">Python</p>
                <p className="text-sm text-muted-foreground">Intermediate</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-semibold">C++</p>
                <p className="text-sm text-muted-foreground">Intermediate</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-semibold">Flask</p>
                <p className="text-sm text-muted-foreground">Basic</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
