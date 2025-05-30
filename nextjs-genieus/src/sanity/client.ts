import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'rw7h41y0',         // replace if your ID is different
  dataset: 'production',
  apiVersion: '2024-01-01',      // or today's date
  useCdn: false,
})
