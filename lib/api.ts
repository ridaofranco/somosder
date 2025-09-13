"\"use client"

// API calls for fetching data
export const fetchPlaceholders = async () => {
  const response = await fetch("/api/scan-placeholders")
  if (!response.ok) {
    throw new Error(`Error fetching placeholders: ${response.status}`)
  }
  return response.json()
}
