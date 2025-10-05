import { getDoctors } from '@/lib/cosmic'
import DoctorCard from '@/components/DoctorCard'

export const revalidate = 60

export default async function DoctorsPage() {
  const doctors = await getDoctors()

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">👨‍⚕️ Verified Doctors</h1>
          <p className="text-gray-600">
            Browse our directory of {doctors.length} verified healthcare professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {doctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No doctors found.</p>
          </div>
        )}
      </div>
    </div>
  )
}