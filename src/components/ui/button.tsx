import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "antialiased font-[Raleway] inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-bold w-fit disabled:bg-disabled disabled:text-disabledfore disabled:border-none hover:cursor-pointer hover:shadow-xs",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primaryd",
        secondary:
          "bg-white text-secondary-foreground border border-primary hover:bg-primary/20 ",
        tertiary: "bg-none text-black/70  hover:bg-black/20 hover:text-black/90",
        destructive:
          "bg-red text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xs: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
