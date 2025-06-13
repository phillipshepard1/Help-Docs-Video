export type Document = {
  id?: string
  title: string
  category: string
  lastUpdated: string
  status: 'Created' | 'Draft' | 'Published'
  content?: string
}

export type ViewMode = 'grid' | 'list' 