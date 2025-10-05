'use client'

import { useState } from 'react'
import type { MedicalCategory } from '@/types'

interface FilterBarProps {
  categories: MedicalCategory[]
  type: 'hospitals' | 'doctors'
}

export default function FilterBar({ categories, type }: FilterBarProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  return (
    <div className="mb-8 p-4 bg-white rounded-lg shadow">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setSelectedCategory('')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedCategory === ''
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.slug)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === category.slug
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.metadata?.icon_emoji} {category.title}
          </button>
        ))}
      </div>
    </div>
  )
}