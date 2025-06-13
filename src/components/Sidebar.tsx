'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import {
  HomeIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Videos', href: '/videos', icon: VideoCameraIcon },
  { name: 'Help Docs', href: '/help-docs', icon: DocumentTextIcon },
  { name: 'Feedback', href: '/feedback', icon: ChatBubbleLeftRightIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { signOut, user } = useAuth()
  const [isSigningOut, setIsSigningOut] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleSignOut = async () => {
    setIsSigningOut(true)
    try {
      await signOut()
      router.push('/login')
    } catch (error) {
      console.error('Error signing out:', error)
    } finally {
      setIsSigningOut(false)
    }
  }

  // Sidebar content as a function for reuse
  const sidebarContent = (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      <div className="flex-shrink-0 flex items-center flex-shrink-0 px-4 pt-5 pb-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Streamline
        </h1>
      </div>
      <nav className="flex-1 px-2 bg-white space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                group flex items-center px-2 py-2 text-sm font-medium rounded-md
                ${isActive
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }
              `}
              onClick={() => setMobileOpen(false)}
            >
              <item.icon
                className={`
                  mr-3 flex-shrink-0 h-6 w-6
                  ${isActive ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500'}
                `}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="flex-shrink-0 w-full group block border-t border-gray-200 p-4 bg-white fixed bottom-0 left-0 md:static md:border-t md:bg-transparent md:p-4 md:w-full z-50">
        <div className="flex items-center">
          <div>
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500">
              <span className="text-lg font-medium leading-none text-white">
                {user?.email?.[0].toUpperCase()}
              </span>
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              {user?.email}
            </p>
            <button
              onClick={handleSignOut}
              disabled={isSigningOut}
              className="text-xs font-medium text-gray-500 group-hover:text-gray-700 flex items-center"
            >
              {isSigningOut ? (
                'Signing out...'
              ) : (
                <>
                  Sign out
                  <ArrowRightOnRectangleIcon className="ml-1 h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="absolute top-4 left-4 z-40 md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 bg-white shadow focus:outline-none"
        onClick={() => setMobileOpen(true)}
        aria-label="Open sidebar"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${mobileOpen ? '' : 'pointer-events-none'}`}
        aria-modal="true"
        role="dialog"
        style={{ display: mobileOpen ? 'block' : 'none' }}
      >
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />
        {/* Sidebar Panel */}
        <div
          className={`fixed inset-y-0 left-0 w-4/5 max-w-xs bg-white border-r border-gray-200 shadow-lg rounded-r-lg transform transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <button
            className="absolute top-4 right-4 z-50 inline-flex items-center justify-center p-2 rounded-md text-gray-700 bg-white shadow focus:outline-none"
            onClick={() => setMobileOpen(false)}
            aria-label="Close sidebar"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          {sidebarContent}
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {sidebarContent}
        </div>
      </div>
    </>
  )
} 