import { useState } from 'react'
import { CheckCircleIcon, DocumentTextIcon, SparklesIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'
import AIAssistant from './AIAssistant'

export default function ProcessVideo({ videoName = 'Product_Demo_V2.mp4' }: { videoName?: string }) {
  const [showAI, setShowAI] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow p-8 max-w-2xl mx-auto">
      <div className="border-2 border-dashed border-green-300 bg-green-50 rounded-lg flex flex-col items-center justify-center py-8 mb-8">
        <CheckCircleIcon className="h-12 w-12 text-green-500 mb-4" />
        <div className="text-xl font-semibold text-green-700 mb-2">Video Analysis Complete!</div>
        <div className="text-gray-600 text-center">Your video "{videoName}" has been successfully analyzed.</div>
      </div>
      <div className="mb-4">
        <div className="font-medium text-gray-700 mb-3">What would you like to create?</div>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center px-4 py-2 rounded bg-gray-100 text-gray-700 font-medium text-sm hover:bg-gray-200">
            <DocumentTextIcon className="h-5 w-5 mr-2" />
            Create Support Doc
          </button>
          <button className="flex items-center px-4 py-2 rounded bg-gray-100 text-gray-700 font-medium text-sm hover:bg-gray-200">
            <SparklesIcon className="h-5 w-5 mr-2" />
            Summarize Video
          </button>
          <button className="flex items-center px-4 py-2 rounded bg-gray-100 text-gray-700 font-medium text-sm hover:bg-gray-200">
            <HandThumbUpIcon className="h-5 w-5 mr-2" />
            Is This Video Good?
          </button>
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-6">
        <button className="px-4 py-2 rounded border border-gray-200 bg-gray-50 text-gray-600 text-sm font-medium">Cancel</button>
        <button className="px-4 py-2 rounded bg-blue-600 text-white text-sm font-medium hover:bg-blue-700" onClick={() => setShowAI(true)}>Create</button>
      </div>
      {showAI && <AIAssistant videoName={videoName} />}
    </div>
  )
} 