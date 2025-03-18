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


function Login() {

  return (
    <main className="bg-transparent flex flex-row justify-center w-full">
      <div className="bg-[url(/login.png)] bg-cover bg-[50%_50%] w-full h-screen relative">
        <Card className="flex flex-col w-[640px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <CardHeader className="flex flex-row items-center justify-between pt-5 pb-0 px-5">
            <div className="relative w-[147.77px] h-8 bg-blue-700"></div>
            <div className="inline-flex items-center gap-2">
              <div className="bg-blue-700 rounded-full w-9 h-9">
              </div>
              <div className="bg-blue-700 rounded-full w-9 h-9">
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex flex-col items-center gap-2 px-5 pt-2">
            <h2 className="text-[#242424] text-center">
              Hello!
            </h2>
            <p className="text-[#7d7d7d] text-center">
              Log in to your i-BrainTech account below
            </p>

            <div className="w-full max-w-[400px] space-y-4 mt-2">

              <div className="bg-blue-700 flex-col w-full h-[60px] items-start flex relative">
                <label className="self-stretch font-h6 font-[number:var(--h6-font-weight)]"></label>
                <div className="relative w-full">
                  <div className="flex items-center gap-px p-3 self-stretch w-full bg-blue-700">
                    <div
                      className="border-none shadow-none p-0 h-auto font-b3 font-[number:var(--b3-font-weight)]"
                    />
                  </div>
                  <p className="self-stretch mb-[-22.00px] font-h7 font-[number:var(--h7-font-weight)] text-red-500">
                  </p>
                </div>
              </div>
            </div>

            <Button variant="default" className="w-[132px] h-10 mx-auto bg-blue-700">
              Log In
            </Button>

            <div className="flex w-full items-center gap-2">
              <Separator className="flex-1" />
              <span className="font-h7 font-[number:var(--h7-font-weight)] text-[#a1a1a1]">or continue with</span>
              <Separator className="flex-1" />
            </div>

            <Button variant="default" className="bg-blue-700">
            <img className="w-[18px] h-[18px]" alt="Google Logo" src="" />
            <span className="font-medium text-lg">Sign in with Google</span>
            </Button>
          </CardContent>

          <CardFooter className="flex items-center justify-center gap-8 pt-0 pb-5 px-0">
            <Button variant="tertiary" className="text-[#00a8ac] font-h6 font-[number:var(--h6-font-weight)]">
              Don't have an account? Sign Up
            </Button>
            <Button variant="tertiary" className="text-[#00a8ac] font-h6 font-[number:var(--h6-font-weight)]">
              Forgot your password
            </Button>
          </CardFooter>
        </Card>

        <div className="absolute h-3.5 bottom-5 right-5 font-b7 font-[number:var(--b7-font-weight)]">
          Prod Build A409331 - 12/03/2022
        </div>
      </div>
    </main>
  )
}

export default Login
