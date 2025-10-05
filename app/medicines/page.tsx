import { getMedicines } from '@/lib/cosmic'
import MedicineCard from '@/components/MedicineCard'

export const revalidate = 60

export default async function MedicinesPage() {
  const medicines = await getMedicines()

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">💊 Medicine Database</h1>
          <p className="text-gray-600">
            Browse our database of {medicines.length} medicines with detailed information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medicines.map((medicine) => (
            <MedicineCard key={medicine.id} medicine={medicine} />
          ))}
        </div>

        {medicines.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No medicines found.</p>
          </div>
        )}
      </div>
    </div>
  )
}