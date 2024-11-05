import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Trophy } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="aboutme" className="w-full flex flex-col items-center justify-center bg-white py-8 px-4">
      <div className="text-center mb-8">
        <p className="text-sm text-blue-600 font-medium mb-2">Get To Know More</p>
        <h1 className="text-3xl font-bold text-black">About Me</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <div className="relative aspect-[3/4] w-56 mx-auto">
          <Image
            src="/Profile_2_Picture.JPG"
            alt="Professional portrait"
            fill
            className="object-cover rounded-lg shadow-lg transition-transform duration-200 hover:scale-105"
            priority
          />
        </div>

        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="p-4 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="space-y-2">
                <Trophy className="w-5 h-5 text-blue-600" />
                <h2 className="text-md font-bold text-black">Experience</h2>
                <ul className="text-gray-600 text-sm">
                  <li>UF/IBM AI Days Hackathon: Insure Sight</li>
                  <li>Personal Project: Mini-Casino</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-4 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="space-y-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <h2 className="text-md font-bold text-black">Education</h2>
                <div className="text-gray-600 text-sm">
                  <p>Bachelor of Science in <span className="text-blue-600 font-semibold">Computer Science</span></p>
                  <p>Expected Graduation: <span className="text-blue-600 font-semibold">May 2028</span></p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-gray-800 text-sm space-y-2">
            <p>
              I&apos;m a freshman studying <span className="font-bold text-blue-600">Computer Science</span> at the 
              <span className="font-bold text-blue-600"> University of Florida</span>. 
              I aspire to be an <span className="font-bold text-blue-600">AI engineer</span>.
            </p>
            <p>
              I developed Insure Sight, an app for documenting belongings before disasters to simplify insurance claims. 
              Outside of coding, I enjoy surfing, snowboarding, and soccer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
