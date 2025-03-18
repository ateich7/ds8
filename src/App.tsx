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

function App() {

  return (
    <div className="h-full content-center flex justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BG})` }}>
      <Card className="shadow-none basis-lg m-auto h-auto border-none">
        <Button variant="default" size="sm">Lorem Ipsum</Button>
      </Card>
    </div>
  )
}

export default App
