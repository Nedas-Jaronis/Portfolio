import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Trophy } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="aboutme" className="w-full flex flex-col items-center justify-center bg-white py-6 px-4 mt-12">
      <div className="text-center mb-10">
        <p className="text-base text-blue-600 font-medium mb-1">Get To Know More</p>
        <h1 className="text-4xl font-semibold text-black">About Me</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <div className="relative aspect-[3/4] w-full max-w-sm mx-auto">
          <Image
            src="/Profile_2_Picture.JPG"
            alt="Professional portrait"
            fill
            className="object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>

        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-3">
            <Card className="p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="space-y-3 p-0">
                <Trophy className="w-7 h-7 mx-auto text-blue-600" />
                <h2 className="text-lg font-semibold text-center text-black">Experience</h2>
                <ul className="text-gray-600 text-sm leading-relaxed">
                  <li>UF/IBM AI Days Hackathon: Insure Sight</li>
                  <li>Personal Project: Mini-Casino</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="space-y-3 p-0">
                <GraduationCap className="w-7 h-7 mx-auto text-blue-600" />
                <h2 className="text-lg font-semibold text-center text-black">Education</h2>
                <div className="text-gray-600 text-sm leading-relaxed">
                  <p>Bachelor of Science in <span className="text-blue-600 font-semibold">Computer Science</span></p>
                  <p>Expected Graduation: <span className="text-blue-600 font-semibold">May 2028</span></p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-gray-800 text-sm leading-relaxed space-y-3">
            <p>
              I&apos;m a freshman studying <span className="font-bold text-blue-600">Computer Science</span> at the 
              <span className="font-bold text-blue-600"> University of Florida</span>, graduating in May 2028. 
              I aspire to be an <span className="font-bold text-blue-600">AI engineer</span>, focused on creating 
              innovative solutions for positive change.
            </p>
            <p>
              I developed Insure Sight, an app for documenting belongings before disasters to simplify insurance claims. 
              Outside of coding, I enjoy surfing, snowboarding, and soccer. 
              I&apos;m excited to connect with others in the tech community!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
