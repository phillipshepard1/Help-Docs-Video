import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type Props = {
  title: string
  message: string
  showBackButton?: boolean
}

export default function SuccessMessage({ title, message, showBackButton = false }: Props) {
  return (
    <div className="rounded-lg bg-white p-8 shadow-lg max-w-md w-full">
      <div className="flex flex-col items-center text-center">
        <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircleIcon className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        {showBackButton && (
          <Link
            href="/login"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Back to Login
          </Link>
        )}
      </div>
    </div>
  )
} 