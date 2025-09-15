import Link from "next/link"
import {
  ArrowRight,
  Calendar,
  Camera,
  BarChart,
  Building,
  Handshake,
  Lightbulb,
  Monitor,
  Palette,
  Plane,
  Ticket,
  Trophy,
  Utensils,
  ChefHat, // Nuevo icono
  Truck,    // Nuevo icono
  Zap,      // Nuevo icono
} from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
}

const iconMap = {
  LightbulbIcon: Lightbulb,
  CalendarIcon: Calendar,
  MonitorIcon: Monitor,
  PaletteIcon: Palette,
  TrophyIcon: Trophy,
  PlaneIcon: Plane,
  TicketIcon: Ticket,
  BuildingIcon: Building,
  CameraIcon: Camera,
  UtensilsIcon: Utensils,
  BarChartIcon: BarChart,
  HandshakeIcon: Handshake,
  ChefHatIcon: ChefHat, // Mapeo del nuevo icono
  TruckIcon: Truck,      // Mapeo del nuevo icono
  ZapIcon: Zap,          // Mapeo del nuevo icono
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Lightbulb

  return (
    <Link href={href} className="group">
      <div className="bg-white dark:bg-dark-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-dark-300 h-full flex flex-col">
        <div className="flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-lg mb-4 group-hover:bg-orange-500 transition-colors duration-300">
          <IconComponent className="h-8 w-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-slate-300 mb-4 flex-grow leading-relaxed">{description}</p>

        <div className="flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors duration-300">
          <span className="mr-2">Más información</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  )
}