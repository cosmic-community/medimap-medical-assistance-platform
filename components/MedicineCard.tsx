import Link from 'next/link'
import type { Medicine } from '@/types'

export default function MedicineCard({ medicine }: { medicine: Medicine }) {
  return (
    <Link href={`/medicines/${medicine.slug}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{medicine.title}</h3>
          {medicine.metadata?.prescription_required && (
            <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">
              ℞
            </span>
          )}
        </div>

        {medicine.metadata?.generic_name && (
          <p className="text-sm text-gray-600 mb-3">
            Generic: {medicine.metadata.generic_name}
          </p>
        )}

        {medicine.metadata?.dosage_form && (
          <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium mb-3">
            {medicine.metadata.dosage_form.value}
          </span>
        )}

        {medicine.metadata?.usage_english && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {medicine.metadata.usage_english}
          </p>
        )}

        {medicine.metadata?.usage_marathi && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {medicine.metadata.usage_marathi}
          </p>
        )}

        {medicine.metadata?.price && (
          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500">Price</p>
            <p className="text-2xl font-bold text-primary-600">₹{medicine.metadata.price}</p>
          </div>
        )}
      </div>
    </Link>
  )
}