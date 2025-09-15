import React from "react"

export function ProjectListSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12 animate-pulse">
      {/* Header */}
      <div className="h-10 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
      <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-8"></div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="h-10 w-28 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-card rounded-xl shadow-sm overflow-hidden border">
            <div className="relative h-56 w-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-6">
              <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}