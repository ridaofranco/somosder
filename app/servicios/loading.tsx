import { ServiceCardSkeleton } from "@/components/ServiceCardSkeleton"

export default function Loading() {
  return (
    <div className="container py-12">
      <div className="h-10 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-6 animate-pulse"></div>
      <div className="h-6 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-8 animate-pulse"></div>
      <ServiceCardSkeleton />
    </div>
  )
}