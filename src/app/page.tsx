'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  VideoCameraIcon,
  DocumentTextIcon,
  ChartBarIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Video Processing',
    description: 'Upload and process videos with AI to extract valuable insights automatically.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Help Documentation',
    description: 'Generate comprehensive help documentation from your video content.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Analytics Dashboard',
    description: 'Track usage, performance, and engagement with detailed analytics.',
    icon: ChartBarIcon,
  },
]

const benefits = [
  'Reduce documentation time by 80%',
  'Improve help content quality',
  'Streamline knowledge sharing',
  'Enhance team productivity',
  'Scale support operations',
  'Maintain content consistency',
]

export default function LandingPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <div className="bg-white">
      {/* Header/Navigation */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Streamline
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              Transform Videos into
              <span className="block text-blue-600">Powerful Documentation</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your workflow by automatically converting video content into comprehensive help documentation using AI. Save time, improve quality, and scale your support operations.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Watch Demo
                <VideoCameraIcon className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Everything you need to streamline documentation
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our AI-powered platform helps you create, manage, and distribute help documentation efficiently.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Enhance your documentation workflow
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Experience the power of AI-driven documentation generation and streamline your content creation process.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-gray-100 rounded-2xl p-8 relative overflow-hidden">
                <SparklesIcon className="absolute right-4 top-4 h-6 w-6 text-blue-600" />
                <div className="relative">
                  <div className="space-y-4">
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white rounded-lg shadow-sm"></div>
                    <div className="h-24 bg-white rounded-lg shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to transform your documentation process?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Join thousands of teams who have already streamlined their workflow.
            </p>
            <div className="mt-8">
              <Link
                href="/signup"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
              >
                Get Started Now
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                </li>
                <li>
                  <a href="#security" className="text-gray-600 hover:text-gray-900">Security</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-600 hover:text-gray-900">Blog</a>
                </li>
                <li>
                  <a href="#careers" className="text-gray-600 hover:text-gray-900">Careers</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#documentation" className="text-gray-600 hover:text-gray-900">Documentation</a>
                </li>
                <li>
                  <a href="#help" className="text-gray-600 hover:text-gray-900">Help Center</a>
                </li>
                <li>
                  <a href="#guides" className="text-gray-600 hover:text-gray-900">Guides</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#privacy" className="text-gray-600 hover:text-gray-900">Privacy</a>
                </li>
                <li>
                  <a href="#terms" className="text-gray-600 hover:text-gray-900">Terms</a>
                </li>
                <li>
                  <a href="#security" className="text-gray-600 hover:text-gray-900">Security</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} Streamline. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
