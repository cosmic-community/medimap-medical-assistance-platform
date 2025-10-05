import Link from 'next/link'
import type { Doctor } from '@/types'

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Link href={`/doctors/${doctor.slug}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.title}</h3>
            {doctor.metadata?.specialization && (
              <p className="text-primary-600 font-medium">
                {doctor.metadata.specialization.value}
              </p>
            )}
          </div>
          {doctor.metadata?.verified && (
            <span className="text-medical-green text-sm">✓ Verified</span>
          )}
        </div>

        {doctor.metadata?.qualifications && (
          <p className="text-sm text-gray-600 mb-3">
            🎓 {doctor.metadata.qualifications}
          </p>
        )}

        {doctor.metadata?.experience && (
          <p className="text-sm text-gray-600 mb-3">
            💼 {doctor.metadata.experience} years experience
          </p>
        )}

        {doctor.metadata?.hospital && (
          <p className="text-sm text-gray-600 mb-3">
            🏥 {doctor.metadata.hospital.title}
          </p>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {doctor.metadata?.consultation_fee && (
            <div>
              <p className="text-xs text-gray-500">Consultation Fee</p>
              <p className="text-lg font-bold text-primary-600">
                ₹{doctor.metadata.consultation_fee}
              </p>
            </div>
          )}
          {doctor.metadata?.online_consultation && (
            <span className="text-xs px-2 py-1 bg-medical-green/10 text-medical-green rounded-full">
              Online Available
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}