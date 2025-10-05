# 🏥 MediMap+ - Medical Assistance Platform

![MediMap+ Preview](https://imgix.cosmicjs.com/77f23350-a1a6-11f0-bba7-d56988718db7-photo-1587351021759-3e566b6af7cc-1759639583387.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A comprehensive medical assistance platform that helps people quickly find nearby hospitals, search for medicines, and consult with verified doctors. Built with Next.js 15 and powered by Cosmic CMS.

## ✨ Features

- 🏥 **Hospital Directory**: Browse hospitals by category, type (Government/Private/Clinic), and services offered
- 💊 **Medicine Database**: Search medicines with bilingual information (English & Marathi), pricing, composition, and alternatives
- 👨‍⚕️ **Doctor Consultation**: Find verified doctors by specialization with consultation fees, availability, and online consultation options
- 🏷️ **Medical Categories**: Organized browsing by Emergency Care, Cardiology, Pediatrics, and General Medicine
- 🔍 **Advanced Search**: Quick search across hospitals, medicines, and doctors
- 📱 **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- 🌐 **Bilingual Support**: Content available in both English and Marathi

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68e1f743260d9dd939d1bc67&clone_repository=68e1f994260d9dd939d1bc95)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "🏥 MediMap+ App Prompt
> 
> App Name: MediMap+
> 
> App Type: Medical Assistance & Healthcare App
> 
> 
> ---
> 
> 📌 Core Features:
> 
> 1. Nearby Hospitals & Medical Stores
> 
> Google Maps Integration
> 
> Shows all nearby hospitals, clinics, and medical shops
> 
> Live distance & navigation support
> 
> 
> 
> 2. Medicine Search & Information
> 
> User can search any medicine by name
> 
> App displays:
> 
> Medicine Name
> 
> Use (कशासाठी आहे)
> 
> Contents / Composition
> 
> Price
> 
> Alternative medicines
> 
> 
> 
> 
> 3. Doctor Consultation (Faithful & Verified Doctors)
> 
> Online consultation with registered doctors
> 
> Appointment booking system
> 
> Video/Chat consultation (basic version)
> 
> 
> 
> 4. User Authentication
> 
> Login & Signup (User + Doctor separate roles)
> 
> Secure Firebase/Database authentication
> 
> 
> 
> 5. UI/UX
> 
> Simple, modern, professional design
> 
> Logo style like DreamNode Innovation (clean, attractive, medical theme)
> 
> 
> 
> 
> 
> ---
> 
> 📊 Additional Modules:
> 
> Medicine database (Expandable)
> 
> Emergency call button (direct call to nearby hospital/ambulance)
> 
> Multilingual support (English + Marathi)
> 
> 
> 
> ---
> 
> 📦 Deliverables Needed:
> 
> Android APK (Installable App)
> 
> Web App (Accessible via browser)
> 
> Full Source Code (Flutter / Firebase recommended)
> 
> Reports (English + Marathi)
> 
> PPT (English + Marathi)
> 
> Poster (for project presentation)
> 
> Logo (Transparent + Icon format)
> 
> 
> 
> ---
> 
> 🎯 Goal:
> 
> To develop a complete medical application that helps people quickly:
> ✔️ Find nearby hospitals/medicals
> ✔️ Search medicines with details
> ✔️ Consult with doctors online
> ✔️ Access emergency medical support"

### Code Generation Prompt

> Based on the content model I created for the MediMap+ medical assistance application, build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Cosmic SDK v1.5+** - Official SDK for Cosmic integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Bun package manager (or npm)
- Cosmic account with bucket access

### Installation

1. Clone the repository and install dependencies:

```bash
bun install
```

2. Create a `.env.local` file with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

3. Run the development server:

```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📚 Cosmic SDK Examples

### Fetching Hospitals with Categories

```typescript
import { cosmic } from '@/lib/cosmic'

const response = await cosmic.objects
  .find({
    type: 'hospitals'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const hospitals = response.objects
```

### Searching Medicines

```typescript
const response = await cosmic.objects
  .find({
    type: 'medicines',
    'metadata.medicine_name': {
      $regex: searchQuery,
      $options: 'i'
    }
  })
  .props(['id', 'title', 'slug', 'metadata'])
```

### Finding Doctors by Specialization

```typescript
const response = await cosmic.objects
  .find({
    type: 'doctors',
    'metadata.specialization.key': specializationKey
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## 🎨 Cosmic CMS Integration

This application uses Cosmic CMS for all content management:

- **Hospitals**: Hospital listings with location, services, and contact details
- **Doctors**: Doctor profiles with specialization, availability, and consultation info
- **Medicines**: Medicine database with bilingual information and pricing
- **Medical Categories**: Category organization for browsing and filtering

All content can be managed through the Cosmic dashboard without code changes.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Set these in your hosting platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

<!-- README_END -->