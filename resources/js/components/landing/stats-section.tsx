import { useEffect, useState, useRef } from "react"
import { Users, Calendar, Award, Heart } from "lucide-react"

const stats = [
  { icon: Users, value: 15000, suffix: "+", label: "Pasien Dilayani", description: "per tahun" },
  { icon: Calendar, value: 25, suffix: "+", label: "Tahun Berdiri", description: "melayani masyarakat" },
  { icon: Award, value: 12, suffix: "", label: "Penghargaan", description: "prestasi nasional" },
  { icon: Heart, value: 50, suffix: "+", label: "Tenaga Medis", description: "profesional" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <div className="text-white font-semibold mt-2">{stat.label}</div>
              <div className="text-white/70 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}