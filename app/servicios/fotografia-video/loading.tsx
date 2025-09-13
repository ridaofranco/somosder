import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Skeleton */}
      <section className="py-4 bg-white border-b">
        <div className="container px-4 md:px-6">
          <Skeleton className="h-4 w-64" />
        </div>
      </section>

      {/* Hero Skeleton */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Skeleton className="h-6 w-32 mb-6 bg-white/20" />
                <div className="flex gap-3 mb-6">
                  <Skeleton className="h-6 w-24 bg-white/20" />
                  <Skeleton className="h-6 w-20 bg-white/20" />
                  <Skeleton className="h-6 w-28 bg-white/20" />
                </div>
                <Skeleton className="h-16 w-full mb-6 bg-white/20" />
                <Skeleton className="h-24 w-full mb-8 bg-white/20" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="text-center">
                      <Skeleton className="h-8 w-12 mx-auto mb-2 bg-white/20" />
                      <Skeleton className="h-4 w-16 mx-auto bg-white/20" />
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Skeleton className="h-12 w-48 bg-white/20" />
                  <Skeleton className="h-12 w-40 bg-white/20" />
                </div>
              </div>
              <div>
                <Skeleton className="h-96 w-full rounded-2xl bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Skeletons */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Skeleton className="h-12 w-96 mx-auto mb-4" />
              <Skeleton className="h-6 w-64 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border rounded-lg p-6">
                  <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
                  <Skeleton className="h-6 w-32 mx-auto mb-3" />
                  <Skeleton className="h-16 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
