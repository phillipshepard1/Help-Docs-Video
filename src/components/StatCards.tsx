type Stat = {
  label: string
  value: string | number
}

const stats: Stat[] = [
  { label: 'Hours saved', value: '1,234' },
  { label: 'Help docs generated', value: '567' },
  { label: 'Active users', value: '123' },
]

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-start">
          <span className="text-gray-500 text-sm mb-2">{stat.label}</span>
          <span className="text-2xl font-semibold text-gray-900">{stat.value}</span>
        </div>
      ))}
    </div>
  )
} 