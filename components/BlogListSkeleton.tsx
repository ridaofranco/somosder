import React from "react"

export function BlogListSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12 animate-pulse">
      {/* Header Section */}
      <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
      <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-8"></div>

      {/* Featured Post Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="relative h-64 md:h-80 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden"></div>
        <div className="flex flex-col justify-center">
          <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded-full mb-4"></div>
          <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>

      {/* Categories/Filters Skeleton */}
      <div className="flex flex-wrap gap-2 mb-12">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        ))}
      </div>

      {/* Blog Post Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-card rounded-xl shadow-sm overflow-hidden border">
            <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-4">
              <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="flex justify-center mt-12">
        <div className="h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  )
}