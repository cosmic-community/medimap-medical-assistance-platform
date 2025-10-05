import { notFound } from 'next/navigation'
import { getDoctorBySlug } from '@/lib/cosmic'
import Link from 'next/link'

export const revalidate = 60

export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const doctor = await getDoctorBySlug(slug)

  if (!doctor) {
    notFound()
  }

  const availableDays = doctor.metadata?.available_days || []
  const languages = doctor.metadata?.languages || []

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/doctors" className="text-primary-600 hover:text-primary-700 mb-6 inline-block">
          ← Back to Doctors
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{doctor.title}</h1>
                {doctor.metadata?.specialization && (
                  <p className="text-xl text-primary-600 font-medium">
                    {doctor.metadata.specialization.value}
                  </p>
                )}
              </div>
              {doctor.metadata?.verified && (
                <span className="inline-flex items-center px-3 py-1 bg-medical-green/10 text-medical-green rounded-full text-sm font-medium">
                  ✓ Verified
                </span>
              )}
            </div>

            {/* Qualifications & Experience */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🎓 Qualifications</h3>
                <p className="text-gray-600">{doctor.metadata?.qualifications}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">💼 Experience</h3>
                <p className="text-gray-600">{doctor.metadata?.experience} years</p>
              </div>
            </div>

            {/* Consultation Fee */}
            {doctor.metadata?.consultation_fee && (
              <div className="mb-8 p-4 bg-primary-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">💰 Consultation Fee</h3>
                <p className="text-2xl font-bold text-primary-600">₹{doctor.metadata.consultation_fee}</p>
              </div>
            )}

            {/* Hospital */}
            {doctor.metadata?.hospital && (
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">🏥 Hospital / Clinic</h3>
                <Link
                  href={`/hospitals/${doctor.metadata.hospital.slug}`}
                  className="text-primary-600 hover:underline"
                >
                  {doctor.metadata.hospital.title}
                </Link>
              </div>
            )}

            {/* Contact */}
            {doctor.metadata?.contact_number && (
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">📞 Contact</h3>
                <a
                  href={`tel:${doctor.metadata.contact_number}`}
                  className="text-primary-600 hover:underline"
                >
                  {doctor.metadata.contact_number}
                </a>
              </div>
            )}

            {/* Availability */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {availableDays.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📅 Available Days</h3>
                  <div className="flex flex-wrap gap-2">
                    {availableDays.map((day, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {doctor.metadata?.consultation_hours && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">🕐 Consultation Hours</h3>
                  <p className="text-gray-600">{doctor.metadata.consultation_hours}</p>
                </div>
              )}
            </div>

            {/* Languages */}
            {languages.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">🗣️ Languages Spoken</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Online Consultation */}
            {doctor.metadata?.online_consultation && (
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-medical-green">
                  <span className="text-2xl">✓</span>
                  <span className="font-medium">Online Consultation Available</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}