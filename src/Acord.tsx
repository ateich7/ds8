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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


function Acord() {

  return (
      <div className="inline-flex flex-col items-start p-6 bg-white">
        <Accordion type="single" collapsible defaultValue="item-1">
         
            <AccordionItem  value="item-1" className="border-b border-slate-200">
              <AccordionTrigger className="py-4 font-medium text-slate-900 text-base">
             This is the title of the accordion
              </AccordionTrigger>
              <AccordionContent className="text-slate-900 font-subtle">
              This is the contents of the accordion! 
              </AccordionContent>
            </AccordionItem>
            <AccordionItem  value="item-1" className="border-b border-slate-200">
              <AccordionTrigger className="py-4 font-medium text-slate-900 text-base">
             This is the title of the accordion
              </AccordionTrigger>
              <AccordionContent className="text-slate-900 font-subtle">
              This is the contents of the accordion! 
              </AccordionContent>
            </AccordionItem>

        </Accordion>
      </div>
    
  )
}

export default Acord
