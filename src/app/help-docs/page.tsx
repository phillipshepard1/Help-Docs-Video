'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import DocumentTable from '@/components/DocumentTable'
import DocumentGrid from '@/components/DocumentGrid'
import NewDocumentModal from '@/components/NewDocumentModal'
import { MagnifyingGlassIcon, Squares2X2Icon, ListBulletIcon } from '@heroicons/react/24/outline'
import { Document, ViewMode } from '@/types/documents'

// Sample data
const initialDocuments: Document[] = [
  {
    id: '1',
    title: 'Getting Started with Streamline',
    category: 'Onboarding',
    lastUpdated: '2023-10-26',
    status: 'Created'
  },
  {
    id: '2',
    title: 'How to Upload a Video',
    category: 'Video Management',
    lastUpdated: '2023-10-25',
    status: 'Created'
  },
  {
    id: '3',
    title: 'Understanding Video Analytics',
    category: 'Analytics',
    lastUpdated: '2023-10-24',
    status: 'Created'
  },
  {
    id: '4',
    title: 'Integrating with Third-Party Apps',
    category: 'Integrations',
    lastUpdated: '2023-10-22',
    status: 'Created'
  },
  {
    id: '5',
    title: 'Troubleshooting Common Issues',
    category: 'Support',
    lastUpdated: '2023-10-20',
    status: 'Created'
  }
]

export default function HelpDocsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('list')
  const [searchQuery, setSearchQuery] = useState('')
  const [isNewDocModalOpen, setIsNewDocModalOpen] = useState(false)
  const [documents, setDocuments] = useState<Document[]>(initialDocuments)

  // Filter documents based on search query
  const filteredDocuments = documents.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Handle new document creation
  const handleCreateDocument = ({ title, category }: { title: string; category: string }) => {
    const newDocument: Document = {
      id: String(documents.length + 1),
      title,
      category,
      lastUpdated: new Date().toISOString().split('T')[0],
      status: 'Created'
    }
    setDocuments([newDocument, ...documents])
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 px-4 py-6 sm:p-8 md:p-12">
        <div className="w-full sm:max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4 sm:gap-0">
            <div className="flex items-center gap-3">
              <span className="block md:hidden w-10" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Help Documentation</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                  title="Grid view"
                >
                  <Squares2X2Icon className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                  title="List view"
                >
                  <ListBulletIcon className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              <button 
                onClick={() => setIsNewDocModalOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
              >
                + New Document
              </button>
            </div>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {viewMode === 'list' ? (
            <div className="overflow-x-auto w-full">
              <DocumentTable documents={filteredDocuments} />
            </div>
          ) : (
            <DocumentGrid documents={filteredDocuments} />
          )}
        </div>
      </main>

      <NewDocumentModal
        isOpen={isNewDocModalOpen}
        onClose={() => setIsNewDocModalOpen(false)}
        onSubmit={handleCreateDocument}
      />
    </div>
  )
} 