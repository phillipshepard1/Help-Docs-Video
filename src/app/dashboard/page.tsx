'use client'

import Sidebar from '@/components/Sidebar'
import StatCards from '@/components/StatCards'
import ActivityTable from '@/components/ActivityTable'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 px-4 py-6 sm:p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="block md:hidden w-10" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Dashboard</h1>
        </div>
        <StatCards />
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activity</h2>
        <ActivityTable />
      </main>
    </div>
  )
} 