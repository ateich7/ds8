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
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"



function Inp() {

  return (
    <div className="flex bg-white justify-center w-full min-h-screen">
      <div className="w-full flex flex-col p-6 gap-[60px]">
        {/* Header section */}
        <header className="flex justify-between items-center w-full">
          <h1 className="font-h1 font-bold text-[64px] leading-[76px] text-black">
            This is a Test
          </h1>

          <div className="flex gap-6 items-center">

            <Button variant="default" size="default" >Lorem Ipsum</Button> 
            <Button size="default" variant="default"  >Lorem Ipsum</Button> 
            <Button size="default" variant="default" >Lorem Ipsum</Button>

          </div>
        </header>

        {/* Content section */}
        <section className="flex gap-8 flex-1 w-full">

          <Card className="w-full flex flex-col items-start">
            <Table>
              <TableCaption>A list of your recent users.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">User</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Session Count</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Jason Bourne</TableCell>
                  <TableCell>jasonbourne@umich.edu</TableCell>
                  <TableCell>235</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jason Bourne</TableCell>
                  <TableCell>jasonbourne@umich.edu</TableCell>
                  <TableCell>235</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jason Bourne</TableCell>
                  <TableCell>jasonbourne@umich.edu</TableCell>
                  <TableCell>235</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jason Bourne</TableCell>
                  <TableCell>jasonbourne@umich.edu</TableCell>
                  <TableCell>235</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jason Bourne</TableCell>
                  <TableCell>jasonbourne@umich.edu</TableCell>
                  <TableCell>235</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jason Bourne</TableCell>
                  <TableCell>jasonbourne@umich.edu</TableCell>
                  <TableCell>235</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jason Bourne</TableCell>
                  <TableCell>jasonbourne@umich.edu</TableCell>
                  <TableCell>235</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jason Bourne</TableCell>
                  <TableCell>jasonbourne@umich.edu</TableCell>
                  <TableCell>235</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>



          <Card className="w-auto  ">
          <CardContent className="flex flex-col items-center gap-6 p-16">
        {/* Map through the input fields */}
        
          <Input/>
          <Input/>
          <Input/>

        <div className="flex items-center gap-5 mt-0">
       
            <Button
            
              className=""
              variant="default"
            >
        Lorem Ipsum
            </Button>
       
        </div>
      </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};


export default Inp
