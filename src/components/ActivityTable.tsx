const activities = [
  { date: '2024-01-15', activity: 'Video processed', user: 'Alice Johnson' },
  { date: '2024-01-14', activity: 'Help doc generated', user: 'Bob Williams' },
  { date: '2024-01-13', activity: 'Video processed', user: 'Charlie Davis' },
  { date: '2024-01-12', activity: 'Help doc generated', user: 'Diana Evans' },
  { date: '2024-01-11', activity: 'Video processed', user: 'Ethan Foster' },
]

export default function ActivityTable() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead>
          <tr>
            <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Date</th>
            <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Activity</th>
            <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">User</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {activities.map((item, idx) => (
            <tr key={idx}>
              <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-700">{item.date}</td>
              <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-700">{item.activity}</td>
              <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-700">{item.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 