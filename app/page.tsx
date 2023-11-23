import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="flex space-x-10">
        <Link href="/flex" className="underline">Flex</Link>
        <Link href="/grid" className="underline">Grid</Link>
        <Link href="/no-grid-no-flex" className="underline">No-Grid No-Flex</Link>
      </div>
    </main>
  )
}
