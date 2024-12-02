"use client"

import Link from 'next/link'
import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useTransform, useSpring, useAnimation } from "framer-motion"
import { Drawer } from "vaul"
import MuralDetail from "@/components/mural-detail"
import { murals } from "@/data/murals"
import { Share2, MousePointer } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Mural {
  id: number
  title: string
  artist: string
  image: string
  description: string
  location: string
  year: string
  comments: Array<{ author: string; text: string }>
}

interface InfiniteMural extends Mural {
  x: number
  y: number
}

export default function ExploreMurals() {
  const [selectedMural, setSelectedMural] = useState<Mural | null>(null)
  const [showIndicator, setShowIndicator] = useState(true)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const constraintsRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 100 }
  const scaleX = useSpring(useTransform(x, [-1500, 0, 1500], [1.5, 1, 1.5]), springConfig)
  const scaleY = useSpring(useTransform(y, [-1500, 0, 1500], [1.5, 1, 1.5]), springConfig)

  const indicatorControls = useAnimation()

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 opacity-30"></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-xl"
            style={{
              background: `radial-gradient(circle, rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.8) 0%, rgba(0,0,0,0) 70%)`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              x: Math.random() * (windowSize.width || 1000),
              y: Math.random() * (windowSize.height || 1000),
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() * 0.5 + 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="absolute top-4 left-4 z-20">
        <Link href="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors">
          NYC Murals
        </Link>
      </div>

      <Drawer.Root open={showIndicator} onOpenChange={setShowIndicator}>
        <Drawer.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30" />
        <Drawer.Content className="fixed inset-0 flex items-center justify-center z-40 pointer-events-none">
          <motion.div 
            className="bg-purple-900 text-white rounded-full p-8 shadow-lg w-72 h-72 flex flex-col items-center justify-center cursor-pointer pointer-events-auto"
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
            onClick={handleClick}
          >
            <p className="text-center font-bold text-2xl mb-2">
              Drag to Explore
            </p>
            <p className="text-center text-2xl mb-4">
              Tap to Expand
            </p>
            <motion.div
              animate={{
                y: [-10, 10, -10]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <MousePointer size={48} className="text-white" />
            </motion.div>
          </motion.div>
        </Drawer.Content>
      </Drawer.Root>

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
              <img
                src={mural.image}
                alt={mural.title}
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
        <MuralDetail mural={selectedMural} onClose={() => setSelectedMural(null)} />
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

