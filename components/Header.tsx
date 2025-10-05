import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">🏥</span>
            <span className="text-2xl font-bold text-primary-600">MediMap+</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/hospitals" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Hospitals
            </Link>
            <Link href="/doctors" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Doctors
            </Link>
            <Link href="/medicines" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Medicines
            </Link>
            <a
              href="tel:108"
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              🚨 Emergency
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}