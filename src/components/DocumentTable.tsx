import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { Document } from '@/types/documents'

export default function DocumentTable({ documents }: { documents: Document[] }) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Title</th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Category</th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Last Updated</th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Status</th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {documents.map((doc, index) => (
            <tr key={doc.id || index} className="hover:bg-gray-50">
              <td className="py-4 px-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{doc.title}</div>
              </td>
              <td className="py-4 px-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{doc.category}</div>
              </td>
              <td className="py-4 px-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{doc.lastUpdated}</div>
              </td>
              <td className="py-4 px-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {doc.status}
                </span>
              </td>
              <td className="py-4 px-4 whitespace-nowrap">
                <button className="text-gray-400 hover:text-gray-600">
                  <EllipsisHorizontalIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 