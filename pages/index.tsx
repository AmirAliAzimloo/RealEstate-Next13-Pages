import Image from 'next/image'
import { Inter } from 'next/font/google'
import Features from './components/templates/index/Features'
import Story from './components/templates/index/Story'
import Homes from './components/templates/index/Homes'
import Gallery from './components/templates/index/Gallery'


export default function Home() {
  return (
   <>
   <Features/>
   <Story/>
   <Homes/>
   <Gallery/>
   </>
  )
}
