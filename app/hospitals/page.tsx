import { getHospitals, getMedicalCategories } from '@/lib/cosmic'
import HospitalCard from '@/components/HospitalCard'
import FilterBar from '@/components/FilterBar'

export const revalidate = 60

export default async function HospitalsPage() {
  const [hospitals, categories] = await Promise.all([
    getHospitals(),
    getMedicalCategories(),
  ])

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🏥 Hospitals & Clinics</h1>
          <p className="text-gray-600">
            Browse our directory of {hospitals.length} verified hospitals and clinics
          </p>
        </div>

        <FilterBar categories={categories} type="hospitals" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitals.map((hospital) => (
            <HospitalCard key={hospital.id} hospital={hospital} />
          ))}
        </div>

        {hospitals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hospitals found.</p>
          </div>
        )}
      </div>
    </div>
  )
}