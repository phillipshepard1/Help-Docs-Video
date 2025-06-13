'use client'

import Sidebar from '@/components/Sidebar'
import VideoUpload from '@/components/VideoUpload'

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 px-4 py-6 sm:p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          {/* Hamburger icon is rendered by Sidebar, so leave space for it on mobile */}
          <span className="block md:hidden w-10" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Upload Video</h1>
        </div>
        <VideoUpload />
      </main>
    </div>
  )
} 