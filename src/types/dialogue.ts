export interface RetrievalInfo {
  sources: string[]
  relevance: number
  context: string
}

export interface Message {
  id: number
  type: 'system' | 'user' | 'assistant'
  content: string
  timestamp: Date
  retrievalInfo: RetrievalInfo | null
}