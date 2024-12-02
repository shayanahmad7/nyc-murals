'use server'

import { murals } from "@/data/murals"

interface Comment {
  author: string
  text: string
}

export async function addComment(muralId: number, author: string, text: string): Promise<{ success: boolean }> {
  try {
    const mural = murals.find(m => m.id === muralId)
    if (!mural) {
      throw new Error('Mural not found')
    }

    const newComment: Comment = { author, text }
    mural.comments.push(newComment)
    
    // Simulating a delay to mimic a network request
    await new Promise(resolve => setTimeout(resolve, 500))
    
    return { success: true }
  } catch (error) {
    console.error('Error adding comment:', error)
    throw error
  }
}

