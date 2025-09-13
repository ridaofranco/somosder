"use client"

import { useState } from "react"
import { Users, Scan, Layers, Cpu, Briefcase, Trophy, Activity, Music, Smartphone } from "lucide-react"

type ProjectFiltersProps = {
  categories: string[]
  onFilterChange: (filters: { category: string | null }) => void
}

export function ProjectFilters({ categories, onFilterChange }: ProjectFiltersProps) {
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // useEffect(() => {
  //   onFilterChange({ category: selectedCategory })
  // }, [selectedCategory, onFilterChange])

  // return (
  //   <div className="flex flex-wrap gap-4 mb-8">
  //     <div>
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="outline" className="flex items-center gap-2">
  //             {selectedCategory || "Todas las categorías"}
  //             <ChevronDown className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent className="w-56">
  //           <DropdownMenuGroup>
  //             <DropdownMenuItem className="flex items-center justify-between" onClick={() => setSelectedCategory(null)}>
  //               <span>Todas las categorías</span>
  //               {selectedCategory === null && <Check className="h-4 w-4" />}
  //             </DropdownMenuItem>
  //             {categories.map((category) => (
  //               <DropdownMenuItem
  //                 key={category}
  //                 className="flex items-center justify-between"
  //                 onClick={() => setSelectedCategory(category)}
  //               >
  //                 <span>{category}</span>
  //                 {selectedCategory === category && <Check className="h-4 w-4" />}
  //               </DropdownMenuItem>
  //             ))}
  //           </DropdownMenuGroup>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     </div>
  //   </div>
  // )
  const [activeCategory, setActiveCategory] = useState(null)

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    onFilterChange({ category })
  }

  return (
    <div className="flex flex-wrap gap-2 mt-6">
      <button
        onClick={() => handleCategoryChange(null)}
        className={`px-4 py-2 text-sm rounded-full transition-colors ${
          activeCategory === null
            ? "bg-primary text-white"
            : "border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
        }`}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`flex items-center px-4 py-2 rounded-full transition-colors text-sm font-medium ${
            (category === "Todos" && !activeCategory) || activeCategory === category
              ? "bg-orange-500 text-white"
              : "border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          }`}
        >
          {category === "Co-producción con Mind Market" && <Users className="mr-1 h-3 w-3" />}
          {category === "Control de Accesos" && <Scan className="mr-1 h-3 w-3" />}
          {category === "Producción Integral" && <Layers className="mr-1 h-3 w-3" />}
          {category === "Tecnología e Innovación" && <Cpu className="mr-1 h-3 w-3" />}
          {category === "Eventos Corporativos" && <Briefcase className="mr-1 h-3 w-3" />}
          {category === "Eventos Deportivos" && <Trophy className="mr-1 h-3 w-3" />}
          {category === "Gestión Deportiva" && <Activity className="mr-1 h-3 w-3" />}
          {category === "Eventos Culturales" && <Music className="mr-1 h-3 w-3" />}
          {category === "Eventos Privados con Interacción Digital" && <Smartphone className="mr-1 h-3 w-3" />}
          {category}
        </button>
      ))}
    </div>
  )
}
