"use client"

import Image from "next/image"

export default function ClientLogos() {
  // All client logos - keeping the existing Cloudinary URLs
  const logos = [
    "https://res.cloudinary.com/dtuh208kh/image/upload/v1747333505/image-2_wjdkdy_e_background_removal_f_png_gwxc5f.png",
    "https://res.cloudinary.com/dtuh208kh/image/upload/v1747331112/1000002233_274362aa63d8d438f3c733a23b8a7081-16_1_2024_16_19_59_pxz9b8.png",
    "https://res.cloudinary.com/dtuh208kh/image/upload/v1747330395/png-2_kfxfhw.png",
    "https://res.cloudinary.com/dtuh208kh/image/upload/v1747331093/png-13_vhrqcu.png",
    "https://res.cloudinary.com/dtuh208kh/image/upload/v1747335090/logo-garzia_t1dsn2.png",
    "https://res.cloudinary.com/dtuh208kh/image/upload/v1747330395/png_yzxhgx.png",
    "https://res.cloudinary.com/dtuh208kh/image/upload/v1747330651/png-11_b9obrk_e_background_removal_f_png_yfzbso.png",
    "https://res.cloudinary.com/dtuh208kh/image/upload/v1747338886/png-10_xkycdh.png",
    "https://res.cloudinary.com/dtuh208kh/image/upload/v1747341016/Disen%CC%83o_sin_ti%CC%81tulo_2_hkx4ds.png",
    "https://res.cloudinary.com/dtuh208kh/image/upload/v1747341679/Logo-5yardas-01-1024x414_w0juja.png",
  ]

  return (
    <div className="w-full py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8 gap-y-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative h-24 w-full flex-shrink-0 opacity-80 hover:opacity-100 transition-all duration-300 flex items-center justify-center"
            >
              <div className="relative h-20 w-44">
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`Cliente ${index + 1}`}
                  fill
                  className="object-contain transition-colors duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}