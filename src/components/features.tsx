import Image from "next/image"
import Soon from "@/components/soon"

interface FeatureProps {
  title: string
  description: string[]
  imageSrc: string
  imageAlt: string
  reverse?: boolean
}

function Feature({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false
}: FeatureProps) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
        reverse ? "md:order-2" : ""
      }`}
    >
      <div className={`${reverse ? "md:order-1" : ""}`}>
        <div className="w-full h-full">
          <Image
            src={imageSrc}
            width={420}
            height={360}
            alt={imageAlt}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          {title} {title.includes("Smart") && <Soon />}
        </h3>
        <ul className="text-gray-300 text-lg space-y-2">
          {description.map((item: string, index: number) => (
            <li key={index}>✓ {item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function FeatureSection() {
  return (
    <section id="features" className="py-16 bg-custom-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Lower Your Entry Price Like Never Before
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Experience non-custodial, emotionless investing on autopilot to
          improve your entry points with algorithmic & weighted strategies.
          Bringing modern financial instruments to crypto.
        </p>
        <div className="space-y-16">
          <Feature
            title="Achieve a Better Entry Price"
            description={[
              "Swap using the best DEX",
              "Minimize the impact of market volatility",
              "Automate recurring investments and eliminate fear or greed driven trading decisions",
              "Track your performance and get insights into your investment strategy with detailed analytics"
            ]}
            imageSrc="/chart.png"
            imageAlt="Chart showing better average entry price"
          />
          <Feature
            title="Fully Decentralized and Secure"
            description={[
              "Fragment large swaps into smaller ones to reduce slippage",
              "Withdraw your assets anytime with full control",
              "Swaps are executed by an incentivized network of participants",
              "Powered by Bitcoin, non-custodial, and fully decentralized"
            ]}
            imageSrc="/blocks.png"
            imageAlt="Blockchain representation"
            reverse
          />
          <Feature
            title="Smart Swapping Strategies"
            description={[
              "Select the optimal DCA strategy tailored to your risk profile appetite",
              "Custom assets & allocation strategies with algorithmic & weighted swaps.",
              "Eliminate emotional bias from your trading decisions"
            ]}
            imageSrc="/lines.png"
            imageAlt="Smart swapping strategies visualization"
          />
        </div>
      </div>
    </section>
  )
}
