export default function PortfolioLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Skeleton */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-8 bg-gray-700 rounded-full w-48 mx-auto mb-8 animate-pulse"></div>
            <div className="h-16 bg-gray-700 rounded-lg w-full max-w-2xl mx-auto mb-6 animate-pulse"></div>
            <div className="h-6 bg-gray-700 rounded w-3/4 mx-auto mb-8 animate-pulse"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-center">
                  <div className="h-8 bg-gray-700 rounded w-16 mx-auto mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded w-20 mx-auto animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters Skeleton */}
      <section className="py-8 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="h-10 bg-gray-200 rounded-lg w-full max-w-md animate-pulse"></div>
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-8 bg-gray-200 rounded w-24 animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Skeleton */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="h-10 bg-gray-200 rounded w-96 mx-auto mb-4 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-64 mx-auto animate-pulse"></div>
            </div>

            {/* Featured Project Cards */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-2xl p-8 mb-12 animate-pulse">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex gap-3 mb-4">
                      <div className="h-6 bg-gray-300 rounded-full w-32"></div>
                      <div className="h-6 bg-gray-300 rounded-full w-20"></div>
                    </div>
                    <div className="h-8 bg-gray-300 rounded w-full mb-4"></div>
                    <div className="h-20 bg-gray-300 rounded w-full mb-6"></div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[...Array(3)].map((_, j) => (
                        <div key={j} className="h-16 bg-gray-300 rounded"></div>
                      ))}
                    </div>
                    <div className="h-10 bg-gray-300 rounded w-48"></div>
                  </div>
                  <div className="h-80 bg-gray-300 rounded-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="h-10 bg-gray-200 rounded w-80 mx-auto mb-4 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-64 mx-auto animate-pulse"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-16 bg-gray-200 rounded w-full mb-4"></div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="h-12 bg-gray-200 rounded"></div>
                      <div className="h-12 bg-gray-200 rounded"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="h-4 bg-gray-200 rounded w-20"></div>
                      <div className="h-8 bg-gray-200 rounded w-16"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
