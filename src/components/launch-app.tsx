"use client"
import Link from "next/link"
import React from "react"
import { Button } from "./ui/button"

const LaunchApp = () => {
  return (
    <Link
      className="text-sm font-medium hover:underline underline-offset-4"
      href="#"
    >
      <Button
        onClick={() => window.open(`https://app.dcahq.com`, "_blank")}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300"
      >
        Launch App 🚀
      </Button>
    </Link>
  )
}

export default LaunchApp
