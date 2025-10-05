import Link from 'next/link'
import { getHospitals, getDoctors, getMedicines, getMedicalCategories } from '@/lib/cosmic'
import HospitalCard from '@/components/HospitalCard'
import DoctorCard from '@/components/DoctorCard'
import MedicineCard from '@/components/MedicineCard'
import CategoryCard from '@/components/CategoryCard'
import SearchBar from '@/components/SearchBar'

export const revalidate = 60

export default async function Home() {
  const [hospitals, doctors, medicines, categories] = await Promise.all([
    getHospitals(),
    getDoctors(),
    getMedicines(),
    getMedicalCategories(),
  ])

  const featuredHospitals = hospitals.slice(0, 3)
  const featuredDoctors = doctors.slice(0, 3)
  const featuredMedicines = medicines.slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            🏥 Welcome to <span className="text-primary-500">MediMap+</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your complete medical assistance platform. Find nearby hospitals, search medicines with detailed information, and consult with verified doctors - all in one place.
          </p>
          <div className="max-w-2xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <div className="text-4xl font-bold text-primary-600">{hospitals.length}</div>
              <div className="text-gray-600 mt-2">Hospitals & Clinics</div>
            </div>
            <div className="text-center p-6 bg-medical-green/10 rounded-xl">
              <div className="text-4xl font-bold text-medical-green">{doctors.length}</div>
              <div className="text-gray-600 mt-2">Verified Doctors</div>
            </div>
            <div className="text-center p-6 bg-medical-blue/10 rounded-xl">
              <div className="text-4xl font-bold text-medical-blue">{medicines.length}+</div>
              <div className="text-gray-600 mt-2">Medicines Listed</div>
            </div>
            <div className="text-center p-6 bg-medical-purple/10 rounded-xl">
              <div className="text-4xl font-bold text-medical-purple">{categories.length}</div>
              <div className="text-gray-600 mt-2">Medical Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Browse by Category</h2>
            <Link href="/categories" className="text-primary-600 hover:text-primary-700 font-medium">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hospitals */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Hospitals</h2>
            <Link href="/hospitals" className="text-primary-600 hover:text-primary-700 font-medium">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredHospitals.map((hospital) => (
              <HospitalCard key={hospital.id} hospital={hospital} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Verified Doctors</h2>
            <Link href="/doctors" className="text-primary-600 hover:text-primary-700 font-medium">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Medicines */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Medicine Database</h2>
            <Link href="/medicines" className="text-primary-600 hover:text-primary-700 font-medium">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMedicines.map((medicine) => (
              <MedicineCard key={medicine.id} medicine={medicine} />
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">🚨</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Medical Services</h2>
          <p className="text-gray-600 mb-6">
            Need immediate medical assistance? Contact emergency services or find the nearest hospital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:108"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              📞 Call Ambulance (108)
            </a>
            <Link
              href="/hospitals?emergency=true"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 font-medium rounded-lg hover:bg-gray-50 transition-colors border-2 border-red-600"
            >
              🏥 Find Emergency Hospital
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}