import Image from "next/image"

export default function ClientLogos() {
  // Placeholder for client logos
  const logos = Array(6).fill("/placeholder.svg?height=60&width=120")

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="relative h-12 w-24 md:h-16 md:w-32 opacity-50 hover:opacity-100 transition-opacity duration-300"
        >
          <Image src={logo || "/placeholder.svg"} alt={`Cliente ${index + 1}`} fill className="object-contain" />
        </div>
      ))}
    </div>
  )
}
