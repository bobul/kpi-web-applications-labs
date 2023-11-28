import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col items-center gap-8 border border-solid border-gray-400 w-1/4 p-2">
        <h1 className="font-bold">Lab 1-2</h1>
        <div className="flex md:flex-row flex-col md:justify-around md:w-full">
          <Link href="/flex" className="underline">Flex</Link>
          <Link href="/grid" className="underline">Grid</Link>
          <Link href="/no-grid-no-flex" className="underline">No-Grid No-Flex</Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 border border-solid border-gray-400 w-1/4 p-2">
        <h1 className="font-bold">Lab 3</h1>
        <div className="flex space-x-10">
          <Link href="/layout" className="underline">Layout</Link>
        </div>
      </div>
    </main>
  )
}
