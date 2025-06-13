import { useState } from 'react'
import { CloudArrowUpIcon } from '@heroicons/react/24/outline'
import ProcessVideo from './ProcessVideo'

export default function VideoUpload() {
  const [uploaded, setUploaded] = useState(false)
  const [videoName, setVideoName] = useState('Product_Demo_V2.mp4')

  if (uploaded) {
    return <ProcessVideo videoName={videoName} />
  }

  return (
    <div className="bg-white rounded-lg shadow p-8 w-full">
      <div className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center py-16 mb-6">
        <CloudArrowUpIcon className="h-12 w-12 text-gray-300 mb-4" />
        <p className="text-gray-500 mb-2">Drag & drop your video here</p>
        <span className="text-gray-400 mb-4">or</span>
        <label className="inline-block">
          <input type="file" className="hidden" onChange={e => {
            if (e.target.files && e.target.files[0]) {
              setVideoName(e.target.files[0].name)
            }
          }} />
          <span className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer text-sm font-medium">Browse files</span>
        </label>
        <div className="text-xs text-gray-400 mt-4">MP4, MOV, AVI · Max: 5GB</div>
      </div>
      <div className="flex justify-end gap-2">
        <button className="px-4 py-2 rounded border border-gray-200 bg-gray-50 text-gray-600 text-sm font-medium">Cancel</button>
        <button className="px-4 py-2 rounded bg-blue-600 text-white text-sm font-medium hover:bg-blue-700" onClick={() => setUploaded(true)}>Upload Video</button>
      </div>
    </div>
  )
} 