'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [searchType, setSearchType] = useState<'hospitals' | 'doctors' | 'medicines'>('hospitals')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}&type=${searchType}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="flex flex-col md:flex-row gap-2">
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value as any)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="hospitals">🏥 Hospitals</option>
          <option value="doctors">👨‍⚕️ Doctors</option>
          <option value="medicines">💊 Medicines</option>
        </select>
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${searchType}...`}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            🔍 Search
          </button>
        </div>
      </div>
    </form>
  )
}