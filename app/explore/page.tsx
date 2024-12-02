import { Suspense } from 'react'
import ExploreMurals from '@/components/explore-murals'

export default function ExplorePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExploreMurals />
    </Suspense>
  )
}

