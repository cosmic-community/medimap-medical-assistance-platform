import { createBucketClient } from '@cosmicjs/sdk'
import type { Hospital, Doctor, Medicine, MedicalCategory, CosmicResponse } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Get all hospitals with categories
export async function getHospitals(): Promise<Hospital[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'hospitals',
      })
      .props(['id', 'title', 'slug', 'metadata', 'thumbnail'])
      .depth(1)

    return response.objects as Hospital[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch hospitals')
  }
}

// Get single hospital by slug
export async function getHospitalBySlug(slug: string): Promise<Hospital | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'hospitals',
        slug,
      })
      .props(['id', 'title', 'slug', 'metadata', 'thumbnail'])
      .depth(1)

    return response.object as Hospital
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch hospital')
  }
}

// Get all doctors with hospital relationships
export async function getDoctors(): Promise<Doctor[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'doctors',
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects as Doctor[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch doctors')
  }
}

// Get single doctor by slug
export async function getDoctorBySlug(slug: string): Promise<Doctor | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'doctors',
        slug,
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.object as Doctor
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch doctor')
  }
}

// Get all medicines
export async function getMedicines(): Promise<Medicine[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'medicines',
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects as Medicine[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch medicines')
  }
}

// Get single medicine by slug
export async function getMedicineBySlug(slug: string): Promise<Medicine | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'medicines',
        slug,
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.object as Medicine
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch medicine')
  }
}

// Get all medical categories
export async function getMedicalCategories(): Promise<MedicalCategory[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'medical-categories',
      })
      .props(['id', 'title', 'slug', 'metadata'])

    return response.objects as MedicalCategory[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch medical categories')
  }
}

// Search hospitals by query
export async function searchHospitals(query: string): Promise<Hospital[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'hospitals',
      })
      .props(['id', 'title', 'slug', 'metadata', 'thumbnail'])
      .depth(1)

    const hospitals = response.objects as Hospital[]
    
    // Filter hospitals by search query
    return hospitals.filter(hospital => {
      const searchString = `${hospital.title} ${hospital.metadata?.hospital_name} ${hospital.metadata?.address}`.toLowerCase()
      return searchString.includes(query.toLowerCase())
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to search hospitals')
  }
}

// Search medicines by query
export async function searchMedicines(query: string): Promise<Medicine[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'medicines',
      })
      .props(['id', 'title', 'slug', 'metadata'])

    const medicines = response.objects as Medicine[]
    
    // Filter medicines by search query
    return medicines.filter(medicine => {
      const searchString = `${medicine.title} ${medicine.metadata?.medicine_name} ${medicine.metadata?.generic_name}`.toLowerCase()
      return searchString.includes(query.toLowerCase())
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to search medicines')
  }
}

// Search doctors by query
export async function searchDoctors(query: string): Promise<Doctor[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'doctors',
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    const doctors = response.objects as Doctor[]
    
    // Filter doctors by search query
    return doctors.filter(doctor => {
      const searchString = `${doctor.title} ${doctor.metadata?.doctor_name} ${doctor.metadata?.specialization?.value}`.toLowerCase()
      return searchString.includes(query.toLowerCase())
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to search doctors')
  }
}