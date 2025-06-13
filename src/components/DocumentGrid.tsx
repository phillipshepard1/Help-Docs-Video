import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { Document } from '@/types/documents'

export default function DocumentGrid({ documents }: { documents: Document[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {documents.map((doc, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{doc.title}</h3>
            <button className="text-gray-400 hover:text-gray-600 p-1">
              <EllipsisHorizontalIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-500">
              <span className="font-medium mr-2">Category:</span>
              {doc.category}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="font-medium mr-2">Updated:</span>
              {doc.lastUpdated}
            </div>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {doc.status}
              </span>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 