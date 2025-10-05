import Link from 'next/link'
import type { MedicalCategory } from '@/types'

export default function CategoryCard({ category }: { category: MedicalCategory }) {
  return (
    <Link href={`/hospitals?category=${category.slug}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center h-full">
        <div className="text-5xl mb-3">{category.metadata?.icon_emoji || '🏥'}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
        {category.metadata?.category_name_marathi && (
          <p className="text-sm text-gray-600 mb-2">{category.metadata.category_name_marathi}</p>
        )}
        {category.metadata?.description && (
          <p className="text-sm text-gray-500 line-clamp-2">{category.metadata.description}</p>
        )}
      </div>
    </Link>
  )
}