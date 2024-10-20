import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { FeatureSection } from "@/components/features"
import LaunchApp from "@/components/launch-app"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Header />
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <Image
            src="/bg4.png"
            alt="Background"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="container mx-auto px-4 relative z-10">
            <Card className="w-full max-w-2xl mx-auto bg-white/70 dark:bg-gray-800/70 backdrop-blur-md">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  DCA-HQ
                </CardTitle>
                <CardDescription className="text-xl mt-4 text-gray-600 dark:text-gray-300">
                  The most profitable strategy to buy memecoins, Bitcoin &
                  Stacks.
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-center space-x-4">
                <LaunchApp />
                <Button variant="outline" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        <FeatureSection />
      </main>

      <Footer />
    </div>
  )
}
