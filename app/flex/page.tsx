import { Badge } from "@/components/ui/badge";
import { GitHubLogoIcon, InfoCircledIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: '/wasm.png',
    alt: 'wasm',
  },
  {
    src: '/next-js.svg',
    alt: 'next.js',
  },
  {
    src: '/remix.png',
    alt: 'remix',
  },
  {
    src: '/prisma.png',
    alt: 'prisma',
  },
  {
    src: '/webrtc.png',
    alt: 'webrtc',
  },
  {
    src: '/nest.js.png',
    alt: 'nest.js',
  },
];

const links = [
  {
    href: 'https://webassembly.org/getting-started/developers-guide/',
    title: 'WASM Docs',
  },
  {
    href: 'https://nextjs.org/docs',
    title: 'Next.js Docs',
  },
  {
    href: 'https://remix.run/docs/en/main',
    title: 'Remix.js Docs',
  },
  {
    href: 'https://www.prisma.io/docs',
    title: 'Prisma Docs',
  },
  {
    href: 'https://developer.mozilla.org/ru/docs/Web/API/WebRTC_API',
    title: 'WebRTC Docs',
  },
  {
    href: 'https://docs.nestjs.com/',
    title: 'Nest.js Docs',
  },
];

const githubLinks = [
  {
    href: 'https://github.com/WebAssembly/getting-started',
    title: 'WASM Repo',
  },
  {
    href: 'https://github.com/vercel/next.js',
    title: 'Next.js Repo',
  },
  {
    href: 'https://github.com/remix-run/remix',
    title: 'Remix.js Repo',
  },
  {
    href: 'https://github.com/prisma/prisma',
    title: 'Prisma Repo',
  },
  {
    href: 'https://github.com/mdn/webdocs',
    title: 'WebRTC Repo',
  },
  {
    href: 'https://github.com/nestjs/docs',
    title: 'Nest.js Repo',
  },
];

export default function Page() {
  return (
    <main className="h-screen flex flex-col">
      <div className="w-full h-1/4 bg-teal-200 flex justify-around items-center">
        <div className="w-2/3 p-2">
          <h1 className="font-bold text-3xl text-gray-50">Web Applications Playground</h1>
          <p className="text-lg text-gray-50">Welcome to Lab! Let's look at some features.</p>
        </div>
        <div className="w-48 self-end pb-12 flex">
          <Badge>
            Made by Ihor Bobulych
            <LightningBoltIcon className="ml-1" />
          </Badge>
        </div>
      </div>
      <div className="w-full h-3/4 flex">
        <div className="w-3/4 flex-col h-full">
          <div className="h-3/4 flex">
            <div className="flex flex-col h-full w-1/3">
              <div className="h-1/2 bg-teal-300 border border-t-0 border-r-0 border-l-0">
                <h1 className="font-bold text-gray-50 md:text-xl text-xs p-2">
                  Documentations <InfoCircledIcon className="md:inline hidden" />
                </h1>
                {links.map((link) => {
                  return (
                      <Link href={link.href}>
                          <p className="text-teal-600 underline text-sm ml-4 mb-0.5">{link.title}</p>
                      </Link>
                  )
                })}
              </div>
              <div className="h-1/2 bg-teal-300">
                <h1 className="font-bold text-gray-50 md:text-xl text-xs p-2">
                  Repositories <GitHubLogoIcon className="md:inline hidden" />
                </h1>
                {githubLinks.map((githubLink) => {
                  return (
                    <Link href={githubLink.href}>
                      <p className="text-teal-600 underline text-sm ml-4 mb-0.5">{githubLink.title}</p>
                    </Link>
                  )
                })}
              </div>
            </div>
            <div className="h-full w-2/3 bg-teal-400">3</div>
          </div>
          <div className="w-full h-1/4 bg-teal-200">0</div>
        </div>
        <div className="w-1/4 h-full overflow-auto bg-teal-300">
          <h1 className="p-2 text-gray-50 md:text-sm text-xs font-bold">
            Let's look on the cutting-edge technologies:
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
                Used by some of the world's largest companies, Next.js enables you
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
  )
}