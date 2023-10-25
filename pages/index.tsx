import Image from 'next/image'
import { Inter } from 'next/font/google'
import Features from './components/templates/index/Features'
import StoryPictures from './components/templates/index/StoryPictures'


export default function Home() {
  return (
   <>
   <Features/>
   <StoryPictures/>
   </>
  )
}
