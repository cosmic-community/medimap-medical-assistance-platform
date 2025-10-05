import { notFound } from 'next/navigation'
import { getHospitalBySlug } from '@/lib/cosmic'
import Link from 'next/link'

export const revalidate = 60

export default async function HospitalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const hospital = await getHospitalBySlug(slug)

  if (!hospital) {
    notFound()
  }

  const categories = hospital.metadata?.category || []
  const services = hospital.metadata?.services_offered || []

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/hospitals" className="text-primary-600 hover:text-primary-700 mb-6 inline-block">
          ← Back to Hospitals
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {hospital.thumbnail && (
            <img
              src={`${hospital.thumbnail}?w=1200&h=400&fit=crop&auto=format,compress`}
              alt={hospital.title}
              className="w-full h-64 object-cover"
            />
          )}

          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{hospital.title}</h1>
                {hospital.metadata?.hospital_type && (
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {hospital.metadata.hospital_type.value}
                  </span>
                )}
              </div>
              {hospital.metadata?.verified && (
                <span className="inline-flex items-center px-3 py-1 bg-medical-green/10 text-medical-green rounded-full text-sm font-medium">
                  ✓ Verified
                </span>
              )}
            </div>

            {/* Categories */}
            {categories.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Medical Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category: any) => (
                    <span
                      key={category.id}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {category.metadata?.icon_emoji} {category.title}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">📍 Address</h3>
                <p className="text-gray-600">{hospital.metadata?.address}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">📞 Contact</h3>
                <p className="text-gray-600">
                  Phone: <a href={`tel:${hospital.metadata?.contact_number}`} className="text-primary-600 hover:underline">
                    {hospital.metadata?.contact_number}
                  </a>
                </p>
                {hospital.metadata?.emergency_number && (
                  <p className="text-gray-600 mt-1">
                    Emergency: <a href={`tel:${hospital.metadata.emergency_number}`} className="text-red-600 hover:underline font-medium">
                      {hospital.metadata.emergency_number}
                    </a>
                  </p>
                )}
              </div>
            </div>

            {/* Operating Hours */}
            {hospital.metadata?.operating_hours && (
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">🕐 Operating Hours</h3>
                <p className="text-gray-600">{hospital.metadata.operating_hours}</p>
              </div>
            )}

            {/* Services Offered */}
            {services.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">🏥 Services Offered</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="text-primary-600">✓</span>
                      <span className="text-gray-700 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Location Map Link */}
            {hospital.metadata?.location_coordinates && (
              <div className="pt-6 border-t border-gray-200">
                <a
                  href={`https://www.google.com/maps?q=${hospital.metadata.location_coordinates.latitude},${hospital.metadata.location_coordinates.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  🗺️ View on Google Maps
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}