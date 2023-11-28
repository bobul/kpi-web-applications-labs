"use client"

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu, NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {
  ArrowRightIcon,
  BoxModelIcon, DiscordLogoIcon, GitHubLogoIcon,
  HamburgerMenuIcon,
  IdCardIcon,
  InstagramLogoIcon,
  TwitterLogoIcon
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

const components: { title: string; href: string }[] = [
  {
    title: "Flex",
    href: "/flex",
  },
  {
    title: "Grid",
    href: "/grid",
  },
  {
    title: "No-Grid No-Flex",
    href: "/no-grid-no-flex",
  },
]

export default function Page() {
  return (
    <main className="h-screen">
      <div className="p-6 bg-gray-100 flex justify-around items-center">
        <div className="flex gap-3 items-center h-5">
            <Image
              src="/nissan.png"
              alt="nissan_logo"
              width={50}
              height={50}
              className="md:block hidden"
            />
          <Image
            src="/nissan.png"
            alt="nissan_logo"
            width={40}
            height={40}
            className="md:hidden block"
          />
          <Separator orientation="vertical" className="bg-gray-400" />
          <h1 className="font-sans text-gray-600 md:text-base text-sm">Innovation That Excites</h1>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                  <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                    <HamburgerMenuIcon />
                  </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[50px] gap-1 p-1 md:w-[150px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="bg-gray-300 flex flex-col md:items-start md:justify-start items-center justify-center md:pr-0 md:pl-32 md:pt-12 md:pb-12 pl-16 pt-6 pb-6 pr-16">
        <h2 className="md:text-xl text-base uppercase mb-2 text-gray-700 font-light tracking-widest">Features</h2>
        <h1 className="md:text-3xl text-xl mb-3 text-gray-700 font-bold text-center md:text-left">Nissan is an awesome car, and consistency is a key</h1>
        <Image
          src="/car.png"
          alt="nissan_car"
          width={450}
          height={150}
          className="block md:hidden mb-2 md:mb-0"
        />
        <div className="flex md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0 text-white">
          <div className="w-72 h-80 p-2 bg-gray-400 flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center gap-2 text-white">
              <IdCardIcon className="scale-150" />
              <p className="font-bold text-2xl">Strategy</p>
            </div>
            <p className="text-center">
              Focus on innovation, sustainability, and a customer-centric approach, aiming to lead in electric
              vehicles, autonomous driving technology, and overall automotive excellence.
            </p>
            <Link href="#">
              <p className="underline flex items-center gap-1">
                more
                <ArrowRightIcon />
              </p>
            </Link>
          </div>
          <div className="w-72 h-80 p-2 bg-gray-400 flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center gap-2 text-white">
              <BoxModelIcon className="scale-150" />
              <p className="font-bold text-2xl">Concepts</p>
            </div>
            <p className="text-center">
              Focus on innovation, sustainability, and a customer-centric approach, aiming to lead in electric
              vehicles, autonomous driving technology, and overall automotive excellence.
            </p>
            <Link href="#">
              <p className="underline flex items-center gap-1">
                more
                <ArrowRightIcon />
              </p>
            </Link>
          </div>
          <Image
            src="/car.png"
            alt="nissan_car"
            width={550}
            height={150}
            className="md:block hidden"
            />
        </div>
      </div>
      <div className="p-12 bg-gray-800 flex md:justify-between md:flex-row flex-col justify-center items-center gap-6">
        <div className="flex justify-center items-center gap-6">
          <h2 className="md:text-xl text-base uppercase text-gray-400 font-light tracking-widest">
            Nissan
          </h2>
          <div className="flex gap-1 scale-125 text-gray-400">
            <InstagramLogoIcon />
            <TwitterLogoIcon />
            <DiscordLogoIcon />
            <GitHubLogoIcon />
          </div>
        </div>
        <p className="text-gray-400 text-center md:text-left">React to the Future: Nissan Drives Innovation © 2023</p>
      </div>
    </main>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="md:text-sm text-xs font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"