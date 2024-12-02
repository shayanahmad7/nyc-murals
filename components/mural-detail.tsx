"use client"

import { useState } from "react"
import Image from 'next/image'
import { motion } from "framer-motion"
import { X, Facebook, Twitter, Send, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { addComment } from "@/app/actions"
import { Mural } from "@/data/murals"

interface MuralDetailProps {
  mural: Mural
  onClose: () => void
  updateComments: (muralId: number, newComment: { author: string; text: string }) => void
}

export default function MuralDetail({ mural, onClose, updateComments }: MuralDetailProps) {
  const [author, setAuthor] = useState("")
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleShare = (platform: string) => {
    const url = `https://nyc-mural-explorer.com/mural/${mural.id}`
    const text = `Check out this amazing mural: ${mural.title} by ${mural.artist}`
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'email':
        window.location.href = `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`
        break
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!author.trim() || !comment.trim()) return

    setIsSubmitting(true)
    try {
      const result = await addComment(mural.id, author, comment)
      if (result.success) {
        updateComments(mural.id, { author, text: comment })
        setAuthor("")
        setComment("")
      }
    } catch (error) {
      console.error('Error posting comment:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % mural.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + mural.images.length) % mural.images.length)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 overflow-y-auto backdrop-blur-md"
      onClick={onClose}
    >
      <div className="min-h-screen px-4 py-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="max-w-4xl mx-auto bg-white bg-opacity-10 rounded-xl overflow-hidden text-white backdrop-blur-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <Image
              src={mural.images[currentImageIndex]}
              alt={`${mural.title} - Image ${currentImageIndex + 1}`}
              width={800}
              height={400}
              className="w-full h-[400px] object-cover"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
            {mural.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}
          </div>

          <div className="p-6">
            <h2 className="text-3xl font-bold mb-2">{mural.title}</h2>
            <p className="text-xl text-gray-300 mb-4">by {mural.artist}</p>
            <p className="text-gray-400 mb-6">{mural.description}</p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold mb-2 text-gray-300">Location</h3>
                <p className="text-gray-400">{mural.location}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-300">Year</h3>
                <p className="text-gray-400">{mural.year}</p>
              </div>
            </div>

            {mural.images.length > 1 && (
              <div className="flex space-x-2 mb-6 overflow-x-auto">
                {mural.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`${mural.title} - Thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className={`w-20 h-20 object-cover cursor-pointer ${index === currentImageIndex ? 'border-2 border-white' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}

            <div className="border-t border-gray-700 pt-6">
              <h3 className="font-semibold mb-4 text-gray-300">Comments</h3>
              
              {mural.comments.map((comment, index) => (
                <div key={index} className="flex gap-4 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-gray-600 text-white">
                      {comment.author[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-300">{comment.author}</p>
                    <p className="text-gray-400">{comment.text}</p>
                  </div>
                </div>
              ))}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <Input
                  placeholder="Your name"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="bg-white bg-opacity-10 border-gray-600 text-white placeholder-gray-400"
                  required
                />
                <Textarea
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="bg-white bg-opacity-10 border-gray-600 text-white placeholder-gray-400"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-white text-black hover:bg-gray-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Posting...' : 'Post Comment'}
                </Button>
              </form>
              <div className="mt-6 flex justify-center space-x-4">
                <Button onClick={() => handleShare('facebook')} variant="outline" size="sm">
                  <Facebook className="w-4 h-4 mr-2" />
                  Share on Facebook
                </Button>
                <Button onClick={() => handleShare('twitter')} variant="outline" size="sm">
                  <Twitter className="w-4 h-4 mr-2" />
                  Share on Twitter
                </Button>
                <Button onClick={() => handleShare('email')} variant="outline" size="sm">
                  <Send className="w-4 h-4 mr-2" />
                  Share via Email
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

