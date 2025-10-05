import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🏥</span>
              <span className="text-2xl font-bold">MediMap+</span>
            </div>
            <p className="text-gray-400">
              Your complete medical assistance platform for hospitals, doctors, and medicines.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hospitals" className="text-gray-400 hover:text-white transition-colors">
                  Hospitals
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-gray-400 hover:text-white transition-colors">
                  Doctors
                </Link>
              </li>
              <li>
                <Link href="/medicines" className="text-gray-400 hover:text-white transition-colors">
                  Medicines
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Emergency</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:108" className="text-gray-400 hover:text-white transition-colors">
                  Ambulance: 108
                </a>
              </li>
              <li>
                <a href="tel:102" className="text-gray-400 hover:text-white transition-colors">
                  Medical Help: 102
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Languages</h3>
            <p className="text-gray-400">
              🇬🇧 English<br />
              🇮🇳 मराठी (Marathi)
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} MediMap+. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with <span className="text-red-500">❤️</span> for better healthcare access
          </p>
        </div>
      </div>
    </footer>
  )
}