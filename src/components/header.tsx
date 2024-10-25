import Link from "next/link"
import Image from "next/image"
import LaunchApp from "@/components/launch-app"

export function Header() {
  return (
    <header className="fixed top-2 left-4 right-4 z-40 px-4 py-1 rounded-lg bg-background/50 backdrop-blur-sm shadow-md">
      <div className="flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/logo.ico"
            width={45}
            height={45}
            style={{ width: "auto" }}
            alt="Logo"
          />
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <LaunchApp />
        </nav>
      </div>
    </header>
  )
}
