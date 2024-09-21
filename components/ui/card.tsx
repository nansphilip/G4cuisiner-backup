import * as React from "react"

import { cn } from "@comps/lib/utils"
import Image from "next/image"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

/**
 * CardImage component is a Next.js Image component with `aspect-[5/4]`
 * and `object-cover` classes that you can override.
 * @param className - Additional class names for the CardImage component.
 * @param src - The source URL for the image.
 * @param alt - The alternative text for the image.
 * @param props - Additional props to pass to the Image component.
 */
const CardImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentProps<typeof Image>
>(({ className, src, alt, ...props }, ref) => (
  <Image
    ref={ref}
    src={src}
    alt={alt}
    className={cn("aspect-[5/4] object-cover", className)}
    {...props}
  />
))
CardImage.displayName = "CardImage"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 m-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("m-6 mt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center m-6 mt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardImage, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
