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
        <Image
          src={imageSrc}
          width={420}
          height={360}
          alt={imageAlt}
          className="rounded-lg shadow-lg w-full"
        />
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
    <section id="features" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Lower Your Entry Price Like Never Before
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Experience non-custodial & emotionless investing on autopilot and
          improve your entry points with algorithmic & weighted strategies.
          Bringing modern financial instruments to crypto.
        </p>
        <div className="space-y-16">
          <Feature
            title="Achieve a Better Average Entry Price"
            description={[
              "Reduces impact of volatility",
              "Removes fear & greed based decisions from your trades"
            ]}
            imageSrc="/chart.png"
            imageAlt="Chart showing better average entry price"
          />
          <Feature
            title="Decentralized and Secure"
            description={[
              "Break large swaps into smaller ones, reducing slippage",
              "Powered by Bitcoin, non-custodial, and fully decentralized",
              "Withdraw your assets anytime with full control"
            ]}
            imageSrc="/blocks5.png"
            imageAlt="Blockchain representation"
            reverse
          />
          <Feature
            title="Smart Swapping Strategies"
            description={[
              "Choose your best accumulation strategy based on your appetite",
              "Removes emotion-based decisions from your trades"
            ]}
            imageSrc="/lines.png"
            imageAlt="Smart swapping strategies visualization"
          />
        </div>
      </div>
    </section>
  )
}
