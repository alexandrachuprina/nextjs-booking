import Header from '@/components/Header'
import Main from '@/components/Main'
import Map from '@/components/Map'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Facilities from '@/components/Facilities'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header/>
    <Main/>
    <Map/>
    {/* <Facilities/> */}
    </>
  )
}
