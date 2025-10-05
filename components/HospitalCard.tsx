import Link from 'next/link'
import type { Hospital } from '@/types'

export default function HospitalCard({ hospital }: { hospital: Hospital }) {
  const categories = hospital.metadata?.category || []
  const services = hospital.metadata?.services_offered || []

  return (
    <Link href={`/hospitals/${hospital.slug}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
        {hospital.thumbnail && (
          <img
            src={`${hospital.thumbnail}?w=600&h=300&fit=crop&auto=format,compress`}
            alt={hospital.title}
            width="300"
            height="150"
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900">{hospital.title}</h3>
            {hospital.metadata?.verified && (
              <span className="text-medical-green text-sm">✓</span>
            )}
          </div>

          {hospital.metadata?.hospital_type && (
            <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium mb-3">
              {hospital.metadata.hospital_type.value}
            </span>
          )}

          {hospital.metadata?.address && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              📍 {hospital.metadata.address}
            </p>
          )}

          {categories.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {categories.slice(0, 3).map((category: any) => (
                <span
                  key={category.id}
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                >
                  {category.metadata?.icon_emoji}
                </span>
              ))}
            </div>
          )}

          {hospital.metadata?.operating_hours && (
            <p className="text-sm text-gray-600">
              🕐 {hospital.metadata.operating_hours}
            </p>
          )}

          {services.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500">
                {services.length} services available
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}