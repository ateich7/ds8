import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import React from "@/assets/react.svg"
import Ib1 from "@/assets/ib1.jpg"
import { Label } from '@radix-ui/react-label'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import BG from "@/assets/BG-light-texture.jpg"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Separator } from '@radix-ui/react-separator'


function Logskel() {

  return (
      <div className="flex flex-col items-start gap-2 bg-neutral-50 shadow-medium-object w-[640px] shadow-lg rounded-2xl">
        <CardHeader className="w-full p-0">
          <div className="justify-between pt-5 pb-0 px-5 flex items-center w-full">
            <div className="w-[148px] h-8 bg-[#9f9f9f]" />
            <div className="flex items-center gap-2">
        
                  <div className="w-9 h-9 bg-[#9f9f9f]" />
                  <div className="w-9 h-9 bg-[#9f9f9f]" />
        
            </div>
          </div>
        </CardHeader>
    
        <CardContent className="flex flex-col items-center w-full gap-2 px-5">
          <Separator className="h-6 w-0 invisible" />
    

          <div className="w-[71px] h-[30px] bg-[#9f9f9f]" />
    

          <div className="w-[282px] h-[18px] bg-[#9f9f9f]" />
    
          <Separator className="h-6 w-0 invisible" />
    
 
         
            <div  className="w-[400px] h-[68px] bg-[#9f9f9f] border-0" />
            <div  className="w-[400px] h-[68px] bg-[#9f9f9f] border-0" />
    
          <Separator className="h-10 w-0 invisible" />
    
    
          <div className="w-[132px] h-9 bg-[#9f9f9f] border-0" />
    
          <Separator className="h-2 w-0 invisible" />
    
          <div className="w-[400px] h-4 bg-[#9f9f9f]" />
    
          <Separator className="h-2 w-0 invisible" />
    
 
          <div className="w-[179px] h-[46px] bg-[#9f9f9f]" />
    
          <Separator className="h-6 w-0 invisible" />
        </CardContent>
    
        <CardFooter className="justify-center gap-8 pt-0 pb-5 px-0 w-full">
          <div className="w-[234px] h-[30px] bg-[#9f9f9f]" />
          <div className="w-[170px] h-[30px] bg-[#9f9f9f]" />
        </CardFooter>
      </div>
  )
}

export default Logskel
