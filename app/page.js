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
    <main className="flex flex-col items-center justify-center min-h-screen purple-dark text-foreground bg-background">
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
            <Link color="foreground" href="#">
              Resume
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className="flex flex-col items-center space-y-4 p-4 ">
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
              Hi, I'm Celeste!
            </h1>
            <h2 className=" flex justify-center flex-col space-y-4 p-4 text-2xl font-mono text-fuchsia-100">
              It's nice to meet you!
            </h2>
          </div>
        </div>

        <div className="space-x-4">
          <Button
            color="primary"
            variant="shadow"
            radius="full"
            //className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            Education
          </Button>

          <Button
            color="primary"
            variant="shadow"
            radius="full"
            //className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            Projects
          </Button>

          <Button
            color="primary"
            variant="shadow"
            radius="full"
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
              <small className="text-default-500  text-center"></small>
              <h4 className="font-bold text-large text-indigo-300 text-center">
                <p></p>
              </h4>
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
}
