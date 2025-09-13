import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, MapPin, Clock, CheckCircle } from "lucide-react"

interface JobListingProps {
  job: {
    id: string
    title: string
    department: string
    location: string
    type: string
    experience: string
    description: string
    responsibilities: string[]
    requirements: string[]
  }
}

export default function JobListing({ job }: JobListingProps) {
  return (
    <div className="bg-secondary dark:bg-dark-300 rounded-lg overflow-hidden shadow-md">
      <div className="p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{job.title}</h3>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Briefcase className="h-4 w-4 mr-1" /> {job.department}
              </span>
              <span className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4 mr-1" /> {job.location}
              </span>
              <span className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Clock className="h-4 w-4 mr-1" /> {job.type}
              </span>
            </div>
          </div>
          <Link href={`/trabaja-con-nosotros/${job.id}`}>
            <Button className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white">Aplicar Ahora</Button>
          </Link>
        </div>
        <p className="text-gray-700 dark:text-slate-300 mb-6">{job.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Responsabilidades</h4>
            <ul className="space-y-2">
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-slate-300 text-sm">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Requisitos</h4>
            <ul className="space-y-2">
              {job.requirements.map((requirement, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-slate-300 text-sm">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
