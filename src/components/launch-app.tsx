"use client"

import React from "react"
import { Button } from "./ui/button"

const LaunchApp = () => {
  return (
    <Button
      onClick={() => {
        console.log("!!!!!!!")
        window.open(`https://app.dcahq.com`, "_blank")
      }}
      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium hover:underline underline-offset-4"
    >
      Launch App 🚀
    </Button>
  )
}

export default LaunchApp
