import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import React from "@/assets/react.svg"
import Ib1 from "@/assets/ib1.jpg"
import { Label } from '@radix-ui/react-label'
import BG from "@/assets/BG-light-texture.jpg"

function Layout() {

  return (
    <div className="h-full content-center flex justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BG})` }}>
     
      <main className="flex gap-16 bg-white w-full min-w-[962px] min-h-[379px] items-center">
         <div className="flex flex-col items-center justify-center gap-8 px-6 py-14 bg-[#d9d9d9] min-h-[379px]">
           <Button variant="default" size="default">Lorem Ipsum</Button>
           <Button variant="default" size="default">Lorem Ipsum</Button>
         </div>
         <div className="flex flex-col items-center justify-center w-full max-w-[184px] h-[146px] bg-[#d9d9d9]">
         <div className="flex items-center p-0 h-full ">
           <Button variant="default" size="default">Lorem Ipsum</Button>
         </div>
         </div>
      </main>


    </div>
  )
}

export default Layout
