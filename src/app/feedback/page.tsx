'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import Sidebar from '@/components/Sidebar'
import { ChatBubbleLeftRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

type FeedbackType = 'bug' | 'feature' | 'improvement' | 'other'
type FeedbackStatus = 'pending' | 'in_review' | 'completed'

interface Feedback {
  id: string
  type: FeedbackType
  title: string
  description: string
  status: FeedbackStatus
  createdAt: Date
  userId: string
}

const FEEDBACK_TYPES = [
  { id: 'bug', label: 'Bug Report', description: 'Report an issue or unexpected behavior' },
  { id: 'feature', label: 'Feature Request', description: 'Suggest a new feature' },
  { id: 'improvement', label: 'Improvement', description: 'Suggest an improvement to existing features' },
  { id: 'other', label: 'Other', description: 'Other type of feedback' },
]

// Sample data - In production, this would come from your database
const SAMPLE_FEEDBACK: Feedback[] = [
  {
    id: '1',
    type: 'feature',
    title: 'Add dark mode support',
    description: 'It would be great to have a dark mode option for better visibility in low-light conditions.',
    status: 'in_review',
    createdAt: new Date('2024-03-15'),
    userId: 'user123',
  },
  {
    id: '2',
    type: 'bug',
    title: 'Video processing error',
    description: 'Sometimes the video processing gets stuck at 99%.',
    status: 'completed',
    createdAt: new Date('2024-03-14'),
    userId: 'user123',
  },
]

export default function FeedbackPage() {
  const { user } = useAuth()
  const [selectedType, setSelectedType] = useState<FeedbackType>('bug')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [feedbackList, setFeedbackList] = useState<Feedback[]>(SAMPLE_FEEDBACK)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    const newFeedback: Feedback = {
      id: Math.random().toString(36).substr(2, 9),
      type: selectedType,
      title,
      description,
      status: 'pending',
      createdAt: new Date(),
      userId: user?.id || 'anonymous',
    }

    setFeedbackList(prev => [newFeedback, ...prev])
    setTitle('')
    setDescription('')
    setSelectedType('bug')
    setShowSuccess(true)
    setIsSubmitting(false)

    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  const getStatusColor = (status: FeedbackStatus) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'in_review':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 w-full px-4 py-6 sm:mx-auto sm:max-w-4xl sm:p-8 md:p-12">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row justify-between mb-8 gap-4 sm:gap-0">
            <div className="flex items-center gap-3">
              <span className="block md:hidden w-10" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Feedback</h1>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {feedbackList.length} Items
            </span>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="mb-6 p-4 bg-green-50 rounded-md flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-green-700">Feedback submitted successfully!</span>
            </div>
          )}

          {/* Feedback Form */}
          <div className="w-full text-left bg-white rounded-lg shadow mb-8 sm:max-w-2xl sm:mx-auto">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Submit New Feedback</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">Feedback Type</label>
                  <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {FEEDBACK_TYPES.map((type) => (
                      <div
                        key={type.id}
                        className={`
                          relative rounded-lg border p-4 cursor-pointer
                          ${selectedType === type.id
                            ? 'border-blue-500 ring-2 ring-blue-200'
                            : 'border-gray-200'
                          }
                        `}
                        onClick={() => setSelectedType(type.id as FeedbackType)}
                      >
                        <div className="flex items-center">
                          <div className="flex-1">
                            <h3 className="text-sm font-medium text-gray-900">{type.label}</h3>
                            <p className="text-sm text-gray-500">{type.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                    placeholder="Brief summary of your feedback"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                    placeholder="Detailed description of your feedback"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                      ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}
                    `}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Feedback History */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Feedback History</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {feedbackList.map((feedback) => (
                    <tr key={feedback.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {FEEDBACK_TYPES.find(type => type.id === feedback.type)?.label}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {feedback.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(feedback.status)}`}>
                          {feedback.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {feedback.createdAt.toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 