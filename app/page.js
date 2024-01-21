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
    <main>
      <Navbar>
        <NavbarBrand>
          <User
            name="Celeste Hendry"
            avatarProps={{
              src: "",
            }}
          />
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

      <div className="flex justify-center items-center space-x-48 p-4">
        <Image
          isZoomed
          width={350}
          alt="Portfolio Picture"
          src="PortfolioPicture.jpg"
        />

        <Card className="p-4 w-1/4 py-4">
          <CardBody className=" h-full overflow-visible py-2">
            <p className="text-tiny uppercase font-bold">Hello!</p>
            <small className="text-default-500">My name is Celeste</small>
            // eslint-disable-next-line react/no-unescaped-entities
            <h4 className="font-bold text-large">
              <p>
                Ever since I was a kid, I've loved playing with computers and
                video games. They're like magic boxes that let me explore new
                worlds and solve puzzles. I'm drawn to the way they blur the
                lines between reality and fantasy, and how they teach us
                important life lessons. Now, I'm excited to dive even deeper
                into computer science, especially game development and AI. I'm
                thrilled to think about what kind of cool stuff I can create in
                the future!
              </p>
            </h4>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
