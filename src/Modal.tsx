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
import BG from "@/assets/BG-light-texture.jpg"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"




function Modal() {

  return (
    <div>
  <Card className="w-[640px] rounded-2xl bg-neutral-50 shadow-medium-object-1">
    <CardHeader className="pb-0 pt-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className="w-20 h-20 bg-blue-800"></div>
          <div className="flex flex-col gap-2 flex-1">
            <AlertTitle className="font-h2 text-[#242424] tracking-[var(--h2-letter-spacing)]">
              We Can't Find Your Wi-Fi!
            </AlertTitle>
            <AlertDescription className="font-c1 text-[#7d7d7d] tracking-[var(--c1-letter-spacing)]">
              Retry connecting to the internet or switch to offline mode
            </AlertDescription>
          </div>
        </div>
        <div className="rounded-full h-9 w-9 p-2">
          <div className="h-5 w-5 bg-blue-700" />
        </div>
      </div>
    </CardHeader>

    <Separator className="my-2" />

    <CardFooter className="flex justify-end gap-2 py-6">
    <Button variant="secondary" size="default">Offline Mode</Button>
    <Button variant="default" size="default">Wi-Fi Settings</Button>
    </CardFooter>
  </Card>

    </div>
  )
}

export default Modal
