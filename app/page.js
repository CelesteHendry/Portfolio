import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen purple-dark text-foreground bg-background">
      <Navbar>
        <NavbarBrand>
          <p> Celeste Hendry </p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link
              color="foreground"
              href="https://www.linkedin.com/in/celeste-hendry-8a6137266/"
            >
              LinkedIn
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="https://github.com/CelesteHendry" aria-current="page">
              GitHub
            </Link>
          </NavbarItem>
          <NavbarItem>
            <a color="foreground" target="_blank" href="/Resume.pdf">
              Resume
            </a>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className="flex flex-col  space-y-4 p-4 ">
        <div className="flex flex-row space-x-4 justify-center">
          <Image
            isBlurred
            isZoomed
            width={350}
            alt="Portfolio Picture"
            src="PortfolioPicture.jpg"
          />

          <div className="flex flex-col items-center space-y-4 p-4 space-x-4 justify-center">
            <h1 className="flex justify-center flex-col space-y-4 p-4 text-4xl font-mono text-purple-400">
              Hi, I&apos;m Celeste!
            </h1>
            <h2 className=" flex justify-center flex-col space-y-4 p-4 text-2xl font-mono text-fuchsia-100">
              It&apos;s nice to meet you!
            </h2>
          </div>
        </div>

        <div className="space-x-4 flex flex-row justify-center">
          <Button
            color="primary"
            variant="shadow"
            radius="full"
            as="a"
            href="#education"
            //className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            Education
          </Button>

          <Button
            color="primary"
            variant="shadow"
            radius="full"
            as="a"
            href="#projects"
            //className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            Projects
          </Button>

          <Button
            color="primary"
            variant="shadow"
            radius="full"
            as="a"
            href="#experience"
            //className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            Experience
          </Button>
        </div>

        <div className="flex flex-row space-x-4 justify-center">
          <Card className="p-4 w-1/4 py-4 bg-slate-800">
            <CardBody className=" h-full  py-2 ">
              <p className="text-tiny uppercase font-bold text-purple-600 text-center">
                Hello!
              </p>
              <small className="text-default-500  text-center">
                My name is Celeste
              </small>
              <h4 className="font-bold text-large text-indigo-300 text-center">
                <p>
                  Ever since I was a kid, I&apos;ve loved playing with computers
                  and video games. They&apos;re like magic boxes that let me
                  explore new worlds and solve puzzles. I&apos;m drawn to the
                  way they blur the lines between reality and fantasy, and how
                  they teach us important life lessons. Now, I&apos;m excited to
                  dive even deeper into computer science, especially game
                  development and AI. I&apos;m thrilled to think about what kind
                  of cool stuff I can create in the future!
                </p>
              </h4>
            </CardBody>
          </Card>
          <Card className="p-4 w-1/4 py-4 bg-slate-800">
            <CardBody className=" h-full  py-2 ">
              <p className="text-tiny uppercase font-bold text-purple-600 text-center"></p>
              <small className="text-default-500  text-center">
                So what do I like to do?
              </small>
              <h4 className="font-bold text-large text-indigo-300 text-center">
                <p>
                  I&apos;m a well-rounded developer with experience in
                  front-end&apos;s back-end&apos;s and databases. I make sure
                  everything works smoothly and looks good. I&apos;ve also built
                  a PC from scratch and used to repair cell phones. On top of
                  that&apos;s I&apos;ve got strong customer service skills&apos;
                  always ensuring things run smoothly and everyone&apos;s
                  satisfied. Whether it&apos;s fixing bugs&apos; building from
                  the ground up&apos; or working with clients&apos; I&apos;ve
                  got it covered.
                </p>
              </h4>
            </CardBody>
          </Card>
        </div>

        <div id="education" className="ml-[450px] my-16">
          <h1 className="text-xl text-indigo-300">Education</h1>
          <Card className="p-4 w-3/4 py-4 bg-slate-800">
            <CardBody>
              <div className="flex flex-row justify-between">
                <p className="text-2xl text-fuchsia-300">
                  Purdue University Fort Wayne
                </p>
                <p className="text-sm text-bold text-fuchsia-400">
                  Cumulative GPA: 3.26/4.0
                </p>
              </div>

              <p className="text-xl">
                B.S. Computer Science Minor In Mathematics Minor in Psychology
              </p>

              <h1 classname="text-5xl">Relevant Coursework: </h1>
              <p className="text-md text-gray-300 flex flex-col">
                <ul className="list-disc pl-5">
                  <li>Data Structures</li>
                  <li>Software Engineering</li>
                  <li>Operating Systems</li>
                  <li>Artificial Intelligence</li>
                </ul>
              </p>
            </CardBody>
          </Card>
        </div>

        <div id="projects" className="ml-[450px] my-16">
          <h1 className="text-xl text-indigo-300">Projects</h1>
          <Card className="p-4 w-3/4 py-4 bg-slate-800">
            <CardBody className="">
              <p className="text-2xl text-fuchsia-300">LevelUp Meds</p>
              <p className="text-sm">
                In December 2024, I led the revamp of the UI/UX for LevelUp
                Meds, utilizing Next.js and Tailwind CSS to deliver a modern,
                responsive, and intuitive design that greatly enhanced the user
                experience and surpassed sponsor expectations. I also optimized
                the backend and database architecture by refactoring code and
                incorporating AWS Cognito, Amplify, and DynamoDB to improve
                authentication, scalability, and data efficiency. Additionally,
                I boosted website performance by 35% through server-side
                rendering (SSR), asset optimization, and code improvements. The
                project leveraged technologies including AWS Cognito, Amplify,
                DynamoDB, React, Next.js, and Tailwind CSS.
              </p>

              <p className="text-2xl text-fuchsia-300">
                Sweetwater Music Center
              </p>
              <p className="text-sm">
                In May 2023, I worked on a migration for Sweet-Water Music
                Center, transitioning their website to Next.js, which resulted
                in a 30% increase in booking interactions. I also designed and
                implemented a sophisticated music item booking system, utilizing
                Next.js for seamless server-side rendering and efficient data
                retrieval. Throughout this project, I worked with technologies
                such as React, Next.js, Node.js, AirTable, Vercel, and Tailwind
                to deliver a high-performance solution.
              </p>

              <p className="text-2xl text-fuchsia-300">LevelUp Meds</p>
              <p className="text-sm">
                In December 2023, I developed a sophisticated file-sharing
                website using React for dynamic frontend rendering, Node.js for
                robust server-side logic, and MongoDB for efficient and scalable
                data storage. I implemented secure file upload/download
                functionalities alongside advanced sorting and search
                capabilities, ensuring a secure and seamlessly organized user
                experience. The project utilized React, Next.js, Node.js,
                MongoDB, Google Cloud, and Firebase.
              </p>
            </CardBody>
          </Card>
        </div>

        <div id="experience" className="ml-[450px]">
          <h1 className="text-xl text-indigo-300">Experience</h1>
          <Card className="p-4 w-3/4 py-4 bg-slate-800">
            <CardBody>
              <p className="text-2xl text-fuchsia-300">CelliMart</p>
              <p className="text-sm">
                From May to August 2019, I worked as a Technician at CelliMart
                in Fort Wayne, IN, where I diagnosed and resolved complex
                hardware and software issues using advanced diagnostic tools,
                leading to a 30% improvement in device efficiency. I also
                applied various techniques to enhance device performance,
                focusing on fine-tuning settings, implementing software updates,
                and addressing digital challenges to deliver an improved user
                experience.
              </p>

              <p className="text-2xl text-fuchsia-300">
                Benchmark Human Services
              </p>
              <p className="text-sm">
                From December 2022 to August 2024, I worked as a Direct Support
                Professional at Benchmark Human Services in Fort Wayne, IN. In
                this role, I utilized secure databases to manage client
                profiles, ensuring real-time adaptability for personalized
                support. I also implemented assistive technologies to enhance
                clients' quality of life and applied data analytics for
                evidence-based decision-making, all while ensuring compliance
                with security and privacy standards.
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="m-64">
          <p className="flex flex-row justify-center text-white text-bold text-xl">
            Made by Celeste Hendry
          </p>
        </div>
      </div>
    </main>
  );
}
