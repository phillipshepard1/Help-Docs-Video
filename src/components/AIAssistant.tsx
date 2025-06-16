export default function AIAssistant({ videoName = 'Product_Demo_V2.mp4' }: { videoName?: string }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 mt-6 p-6">
      <div className="flex items-center mb-4">
        <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-xs font-semibold mr-2">AI Assistant</span>
      </div>
      <div className="space-y-4">
        {/* AI message */}
        <div className="flex">
          <div className="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-[70%] text-sm">
            Okay, I&apos;m starting to generate the help document for &quot;{videoName}&quot;.
          </div>
        </div>
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-gray-100 text-gray-700 rounded-lg px-4 py-2 max-w-[70%] text-sm">
            Great! Let me know when it&apos;s ready.
          </div>
        </div>
        {/* AI message (generating) */}
        <div className="flex">
          <div className="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-[70%] text-sm">
            Generating... This might take a few seconds.
          </div>
        </div>
      </div>
    </div>
  )
} 