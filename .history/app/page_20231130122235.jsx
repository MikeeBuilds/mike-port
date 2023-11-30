import About from '@/components/About'
import Hero from '@/components/Hero'
import { main } from 'json'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
    </main>
  )
}
