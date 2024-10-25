import Link from "next/link"
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
        <section className="relative w-full bg-white">
          <div className="wave-container mx-auto px-4 relative z-10">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="card-container flex items-center justify-center h-full absolute inset-0 z-20">
              <Card className="w-full max-w-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md">
                <CardHeader className="text-center">
                  <CardTitle className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    DCA HQ
                  </CardTitle>
                  <CardDescription className="text-xl mt-4 text-gray-600 dark:text-gray-300">
                    Automate your crypto purchases using Dollar Cost Averaging.{" "}
                    <br />
                    The most profitable strategy to buy memecoins, Bitcoin &
                    Stacks.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-center space-x-4">
                  <LaunchApp />
                  <Button variant="outline">
                    <Link href="#features">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <FeatureSection />
      </main>

      <Footer />
    </div>
  )
}
