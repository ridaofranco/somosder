import React from "react"

export function BlogPostSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12 animate-pulse">
      {/* Breadcrumbs */}
      <div className="h-4 w-64 bg-gray-200 dark:bg-gray-700 rounded mb-8"></div>

      {/* Back to blog */}
      <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-8"></div>

      {/* Article Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        </div>
        <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
        <div className="h-8 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-5 w-28 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden mb-10 bg-gray-200 dark:bg-gray-700"></div>

      {/* Article Content with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        {/* Sidebar */}
        <div className="lg:col-span-1 order-2 lg:order-1 space-y-6">
          <div className="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-11/12 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-10/12 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
            <div className="flex gap-2">
              <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 order-1 lg:order-2">
          <div className="space-y-4 mb-12">
            <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-6 w-11/12 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-6 w-10/12 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-6 w-9/12 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>

          {/* Tags */}
          <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6 mb-12">
            <div className="flex flex-wrap items-center gap-2">
              <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gray-100 dark:bg-gray-800/50 rounded-xl p-6 mb-12">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0"></div>
              <div>
                <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Prev/Next Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 h-full">
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 h-full">
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2 ml-auto"></div>
              <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mb-12">
            <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md h-full flex flex-col">
                  <div className="relative h-40 bg-gray-200 dark:bg-gray-700"></div>
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div className="mb-12">
            <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:bg-gray-700 h-32"></div>
          </div>

          {/* CTA */}
          <div className="bg-orange-500 rounded-xl p-8 text-center">
            <div className="h-8 w-3/4 mx-auto bg-orange-400 rounded mb-4"></div>
            <div className="h-6 w-1/2 mx-auto bg-orange-400 rounded mb-6"></div>
            <div className="h-10 w-48 mx-auto bg-white rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}