import { Badge } from "@/components/ui/badge";
import { GitHubLogoIcon, InfoCircledIcon, PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { links, images, githubLinks, videoLinks } from "@/lib/mock"

export default function Page() {
  return (
    <main className="h-screen relative">
      <div className="w-full h-1/4 bg-teal-200 flex justify-around items-center">
        <div className="w-2/3 p-2">
          <h1 className="font-bold md:text-3xl text-sm text-gray-50">Web Applications Playground</h1>
          <p className="md:text-lg text-xs text-gray-50">Welcome to Lab! Lets look at some technologies.</p>
        </div>
        <div className="w-48 self-end pb-12 flex">
          <Badge>
            Made by Ihor Bobulych
            <PersonIcon className="ml-1 md:inline hidden" />
          </Badge>
        </div>
      </div>
      <div className="w-full h-3/4 relative">
        <div className="w-3/4 h-full absolute left-0 top-0">
          <div className="h-3/4 bg-teal-800 relative">
            <div className="absolute left-0 top-0 h-full w-1/3">
              <div className="h-1/2 bg-teal-300 border border-t-0 border-r-0 border-l-0 overflow-auto">
                <h1 className="font-bold text-gray-50 md:text-xl text-xs p-2">
                  Docs <InfoCircledIcon className="md:inline hidden" />
                </h1>
                {links.map((link) => {
                  return (
                    <Link href={link.href} key={link.title}>
                      <p className="text-teal-600 underline text-sm ml-4 mb-0.5">{link.title}</p>
                    </Link>
                  )
                })}
              </div>
              <div className="h-1/2 bg-teal-300 overflow-auto">
                <h1 className="font-bold text-gray-50 md:text-xl text-xs p-2">
                  Repositories <GitHubLogoIcon className="md:inline hidden" />
                </h1>
                {githubLinks.map((githubLink) => {
                  return (
                    <Link href={githubLink.href} key={githubLink.title}>
                      <p className="text-teal-600 underline text-sm ml-4 mb-0.5">{githubLink.title}</p>
                    </Link>
                  )
                })}
              </div>
            </div>
            <div className="absolute left-1/3 top-0 h-full w-2/3 bg-teal-400 overflow-auto">
              <h1 className="p-2 font-bold text-2xl text-gray-50">
                Video Guides
              </h1>
              {videoLinks.map((videoLink) => {
                return (
                  <div className="w-full p-2 flex items-center justify-around" key={videoLink.title}>
                    <div className="w-3/4">
                      <h2 className="text-gray-50 underline">
                        {videoLink.title}
                      </h2>
                      <p className="text-xs text-gray-50 pl-2 pt-1">
                        {videoLink.description}
                      </p>
                    </div>
                    <Link href={videoLink.link}>
                      <Button>
                        Watch
                      </Button>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="w-full h-1/4 bg-teal-200">
            <div className="w-[150px] h-[30px] bg-teal-400 ml-4 text-gray-50 md:text-base text-xs text-center border border-l-gray-50 border-r-gray-50 border-b-gray-50 border-t-0 border-solid border-gray-50">
              Summary
            </div>
            <p className="text-teal-800 md:text-base text-xs p-1">
              In the ever-evolving landscape of web development, embracing innovative technologies is the key to staying
              at the forefront. The tech stack we have curated opens doors to a world of powerful tools and frameworks
              that are shaping the future of the web.
            </p>
          </div>
        </div>
        <div className="w-1/4 h-full absolute right-0 top-0 overflow-auto bg-teal-300">
          <h1 className="p-2 text-gray-50 md:text-sm text-xs font-bold">
            Lets look on the cutting-edge technologies:
          </h1>
          <Accordion type="single" collapsible className="w-full p-1 bg-teal-100 rounded-md text-teal-600">
            <AccordionItem value="item-1">
              <AccordionTrigger>WebAssembly</AccordionTrigger>
              <AccordionContent>
                WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Next.js</AccordionTrigger>
              <AccordionContent>
                Used by some of the worlds largest companies, Next.js enables you
                to create full-stack Web applications by extending the latest React features,
                and integrating powerful Rust-based JavaScript tooling for the fastest builds.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Remix</AccordionTrigger>
              <AccordionContent>
                Remix is a full stack web framework that lets you focus on the user interface
                and work back through web standards to deliver a fast, slick,
                and resilient user experience. People are gonna love using your stuff.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Prisma</AccordionTrigger>
              <AccordionContent>
                Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data
                automated migrations, type-safety and auto-completion.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>WebRTC</AccordionTrigger>
              <AccordionContent>
                Real-time communication for the web.
                With WebRTC, you can add real-time communication capabilities to your application
                that works on top of an open standard.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Nest.js</AccordionTrigger>
              <AccordionContent>
                A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="p-2 text-gray-50 md:text-sm text-xs">We highly advise to use this stack in order to create modern applications.</p>
          <div className="flex md:flex-row flex-col md:space-y-0 space-y-1.5 p-2 justify-around items-center">
            {images.map((image) => {
              return (
                <Image
                  src={image.src}
                  alt={image.alt}
                  key={image.alt}
                  width={40}
                  height={40}
                  className="md:block hidden"
                />
              )
            })}
            {images.map((image) => {
              return (
                <Image
                  src={image.src}
                  alt={image.alt}
                  key={image.alt}
                  width={30}
                  height={30}
                  className="md:hidden block"
                />
              )
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
