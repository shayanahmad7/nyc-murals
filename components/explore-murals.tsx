"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useAnimation } from "framer-motion"
import MuralDetail from "@/components/mural-detail"
import { murals as initialMurals, Mural } from "@/data/murals"
import { Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface InfiniteMural extends Mural {
  x: number
  y: number
}

export default function ExploreMurals() {
  const [murals, setMurals] = useState<Mural[]>(() => 
    initialMurals.map(mural => ({
      ...mural,
      images: Array.isArray(mural.images) ? mural.images : [mural.images]
    }))
  )
  const [selectedMural, setSelectedMural] = useState<Mural | null>(null)
  const [showIndicator, setShowIndicator] = useState(true)
  const constraintsRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const indicatorControls = useAnimation()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedMural) {
        setSelectedMural(null)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedMural])

  const handleDragStart = () => {
    if (showIndicator) {
      indicatorControls.start({ opacity: 0, scale: 0.5, transition: { duration: 0.5 } })
      setTimeout(() => setShowIndicator(false), 500)
    }
  }

  const handleClick = () => {
    setShowIndicator(false)
  }

  const getPosition = (index: number, gridX: number, gridY: number) => {
    const columns = 8
    const rows = Math.ceil(murals.length / columns)
    const baseX = (index % columns) * 300
    const baseY = Math.floor(index / columns) * 350
    
    const offsetX = (Math.floor(index / columns) % 2 === 0) ? 0 : 150
    const offsetY = (index % 2 === 0) ? 0 : 50
    
    const randomX = (Math.random() - 0.5) * 20
    const randomY = (Math.random() - 0.5) * 20

    return { 
      x: baseX + offsetX + randomX + gridX * columns * 300, 
      y: baseY + offsetY + randomY + gridY * rows * 350
    }
  }

  const createInfiniteGrid = (): InfiniteMural[] => {
    const infiniteGrid: InfiniteMural[] = []
    const repetitions = 4

    for (let i = 0; i < repetitions; i++) {
      for (let j = 0; j < repetitions; j++) {
        murals.forEach((mural, index) => {
          const position = getPosition(index, i, j)
          infiniteGrid.push({
            ...mural,
            x: position.x,
            y: position.y
          })
        })
      }
    }

    return infiniteGrid
  }

  const infiniteGrid = createInfiniteGrid()

  const updateMuralComments = (muralId: number, newComment: { author: string; text: string }) => {
    setMurals(prevMurals => 
      prevMurals.map(mural => 
        mural.id === muralId
          ? { ...mural, comments: [...mural.comments, newComment] }
          : mural
      )
    )
  }

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 opacity-30"></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
            style={{
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="absolute top-4 left-4 z-20">
        <Link href="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors">
          NYC Murals
        </Link>
      </div>

      {showIndicator && (
        <div className="fixed inset-0 flex items-center justify-center z-40 pointer-events-none">
          <motion.div
            initial={{ scale: 0.9, rotate: -5 }}
            animate={{ 
              scale: [0.9, 1.1, 0.9],
              rotate: [-5, 5, -5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="bg-white bg-opacity-20 text-white rounded-full p-8 shadow-lg backdrop-blur-md"
          >
            <p className="text-center font-bold text-2xl mb-2">
              Drag to Explore
            </p>
            <p className="text-center text-lg">
              Tap to Expand
            </p>
          </motion.div>
        </div>
      )}

      <motion.div
        ref={constraintsRef}
        className="absolute w-[3200vw] h-[3200vh] cursor-grab active:cursor-grabbing"
        drag
        dragConstraints={{ left: -2400 * 16, right: 0, top: -2400 * 16, bottom: 0 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        style={{ x, y }}
        onDragStart={handleDragStart}
        onClick={handleClick}
      >
        {infiniteGrid.map((mural, index) => (
          <motion.div
            key={`${mural.id}-${index}`}
            className="absolute cursor-pointer"
            style={{
              left: `${mural.x}px`,
              top: `${mural.y}px`,
              width: '140px',
              height: '180px',
              pointerEvents: showIndicator ? 'none' : 'auto'
            }}
            whileHover={{ scale: 1.1, zIndex: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              if (!showIndicator) {
                e.stopPropagation()
                setSelectedMural(mural)
              }
            }}
          >
            <div className="w-full h-full rounded-lg overflow-hidden border-4 border-white/90 shadow-lg bg-white flex flex-col">
              <Image
                src={mural.images[0]}
                alt={mural.title}
                width={140}
                height={105}
                className="w-full h-3/4 object-cover"
              />
              <div className="h-1/4 p-2 flex items-center justify-center">
                <p className="text-center text-xs font-medium text-gray-800 line-clamp-2">{mural.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedMural && (
        <MuralDetail 
          mural={murals.find(m => m.id === selectedMural.id) || selectedMural} 
          onClose={() => setSelectedMural(null)} 
          updateComments={updateMuralComments}
        />
      )}

      <div className="absolute bottom-4 left-4 z-20">
        <Button
          variant="outline"
          size="sm"
          className="bg-white bg-opacity-20 text-white hover:bg-white hover:bg-opacity-30"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </div>
    </div>
  )
}

