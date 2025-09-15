"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"

interface ServiceCardProps {
  title: string
  description: string
  icon: keyof typeof Icons
  href: string
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const IconComponent = Icons[icon]

  return (
    <Link href={href} className="group">
      <Card className="bg-white dark:bg-dark-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-dark-300 h-full flex flex-col">
        <CardContent className="p-0 text-left flex-grow">
          {IconComponent && (
            <div className="flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-lg mb-4 group-hover:bg-orange-500 transition-colors duration-300">
              <IconComponent className="h-8 w-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
            </div>
          )}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-slate-300 mb-4 leading-relaxed">{description}</p>
        </CardContent>
        <div className="flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors duration-300 mt-auto">
          <span className="mr-2">Más información</span>
          <Icons.ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </Card>
    </Link>
  )
}