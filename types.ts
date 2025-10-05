// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
  thumbnail?: string
}

// Location coordinates interface
export interface LocationCoordinates {
  latitude: number
  longitude: number
}

// Hospital type
export interface Hospital extends CosmicObject {
  type: 'hospitals'
  metadata: {
    hospital_name?: string
    address?: string
    location_coordinates?: LocationCoordinates
    contact_number?: string
    emergency_number?: string
    services_offered?: string[]
    operating_hours?: string
    hospital_type?: {
      key: string
      value: string
    }
    category?: MedicalCategory[]
    verified?: boolean
  }
}

// Doctor type
export interface Doctor extends CosmicObject {
  type: 'doctors'
  metadata: {
    doctor_name?: string
    specialization?: {
      key: string
      value: string
    }
    qualifications?: string
    experience?: number
    consultation_fee?: number
    hospital?: Hospital
    contact_number?: string
    available_days?: string[]
    consultation_hours?: string
    online_consultation?: boolean
    verified?: boolean
    languages?: string[]
  }
}

// Medicine type
export interface Medicine extends CosmicObject {
  type: 'medicines'
  metadata: {
    medicine_name?: string
    generic_name?: string
    usage_english?: string
    usage_marathi?: string
    composition?: string
    price?: number
    dosage_form?: {
      key: string
      value: string
    }
    alternative_medicines?: Medicine[]
    prescription_required?: boolean
    side_effects?: string
  }
}

// Medical Category type
export interface MedicalCategory extends CosmicObject {
  type: 'medical-categories'
  metadata: {
    category_name?: string
    category_name_marathi?: string
    description?: string
    icon_emoji?: string
  }
}

// API response type
export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit?: number
  skip?: number
}

// Type guards
export function isHospital(obj: CosmicObject): obj is Hospital {
  return obj.type === 'hospitals'
}

export function isDoctor(obj: CosmicObject): obj is Doctor {
  return obj.type === 'doctors'
}

export function isMedicine(obj: CosmicObject): obj is Medicine {
  return obj.type === 'medicines'
}

export function isMedicalCategory(obj: CosmicObject): obj is MedicalCategory {
  return obj.type === 'medical-categories'
}