import { notFound } from 'next/navigation'
import { getMedicineBySlug } from '@/lib/cosmic'
import Link from 'next/link'

export const revalidate = 60

export default async function MedicineDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const medicine = await getMedicineBySlug(slug)

  if (!medicine) {
    notFound()
  }

  const alternatives = medicine.metadata?.alternative_medicines || []

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/medicines" className="text-primary-600 hover:text-primary-700 mb-6 inline-block">
          ← Back to Medicines
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{medicine.title}</h1>
                {medicine.metadata?.generic_name && (
                  <p className="text-lg text-gray-600">Generic: {medicine.metadata.generic_name}</p>
                )}
              </div>
              {medicine.metadata?.prescription_required && (
                <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                  ℞ Prescription Required
                </span>
              )}
            </div>

            {/* Price & Dosage Form */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {medicine.metadata?.price && (
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1">💰 Price</h3>
                  <p className="text-2xl font-bold text-primary-600">₹{medicine.metadata.price}</p>
                </div>
              )}
              {medicine.metadata?.dosage_form && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1">💊 Dosage Form</h3>
                  <p className="text-lg text-gray-700">{medicine.metadata.dosage_form.value}</p>
                </div>
              )}
            </div>

            {/* Usage - English */}
            {medicine.metadata?.usage_english && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">📋 Usage (English)</h3>
                <p className="text-gray-600 leading-relaxed">{medicine.metadata.usage_english}</p>
              </div>
            )}

            {/* Usage - Marathi */}
            {medicine.metadata?.usage_marathi && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">📋 उपयोग (मराठी)</h3>
                <p className="text-gray-600 leading-relaxed">{medicine.metadata.usage_marathi}</p>
              </div>
            )}

            {/* Composition */}
            {medicine.metadata?.composition && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">🧪 Composition / Contents</h3>
                <p className="text-gray-600">{medicine.metadata.composition}</p>
              </div>
            )}

            {/* Side Effects */}
            {medicine.metadata?.side_effects && (
              <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-gray-900 mb-2">⚠️ Side Effects</h3>
                <p className="text-gray-600">{medicine.metadata.side_effects}</p>
              </div>
            )}

            {/* Alternative Medicines */}
            {alternatives.length > 0 && (
              <div className="pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">🔄 Alternative Medicines</h3>
                <div className="grid gap-3">
                  {alternatives.map((alt: any) => (
                    <Link
                      key={alt.id}
                      href={`/medicines/${alt.slug}`}
                      className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <p className="font-medium text-gray-900">{alt.title}</p>
                      {alt.metadata?.price && (
                        <p className="text-sm text-gray-600">₹{alt.metadata.price}</p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}