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


function Test() {

  return (
    <div className="h-full mt-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BG})` }}>
      <Card className="flex flex-col items-start">
        <CardHeader className="w-40">User List</CardHeader>
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
    </div>
  )
}

export default Test
