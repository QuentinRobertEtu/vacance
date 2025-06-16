"use client"

import { useState, useEffect } from "react"
import { Sun, Waves, Palmtree, Plane, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function SummerCountdown() {
  const [timeToVacation, setTimeToVacation] = useState({ days: 0 })
  const [timeToAlbania, setTimeToAlbania] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [timeToCrevette, setTimeToCrevette] = useState({ days: 0 })

  useEffect(() => {
    const updateCountdowns = () => {
      const now = new Date()

      // Compte à rebours pour les vacances (5 juillet)
      const vacationDate = new Date("2025-07-05T00:00:00")
      const diffVacation = vacationDate.getTime() - now.getTime()
      const daysToVacation = Math.max(0, Math.ceil(diffVacation / (1000 * 60 * 60 * 24)))

      // Compte à rebours pour l'Albanie (9 juillet)
      const albaniaDate = new Date("2025-07-09T00:00:00")
      const diffAlbania = albaniaDate.getTime() - now.getTime()

      if (diffAlbania > 0) {
        const days = Math.floor(diffAlbania / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diffAlbania % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diffAlbania % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diffAlbania % (1000 * 60)) / 1000)

        setTimeToAlbania({ days, hours, minutes, seconds })
      } else {
        setTimeToAlbania({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }

      setTimeToVacation({ days: daysToVacation })

      const crevetteDate = new Date("2025-07-06T00:00:00")
      const diffCrevette = crevetteDate.getTime() - now.getTime()
      const daysToCrevette = Math.max(0, Math.ceil(diffCrevette / (1000 * 60 * 60 * 24)))
      setTimeToCrevette({ days: daysToCrevette })
    }

    updateCountdowns()
    const interval = setInterval(updateCountdowns, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Arrière-plan dégradé estival */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-300 via-blue-400 to-cyan-500" />

      {/* Éléments décoratifs animés */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soleil */}
        <div className="absolute top-8 right-8 animate-pulse">
          <Sun className="w-20 h-20 text-yellow-300 drop-shadow-lg" />
        </div>

        {/* Palmiers */}
        <div className="absolute bottom-0 left-0 animate-sway">
          <Palmtree className="w-24 h-24 text-green-600" />
        </div>
        <div className="absolute bottom-0 right-16 animate-sway-delayed">
          <Palmtree className="w-20 h-20 text-green-700" />
        </div>

        {/* Vagues */}
        <div className="absolute bottom-0 left-1/4 animate-bounce-slow">
          <Waves className="w-16 h-16 text-blue-100 opacity-60" />
        </div>
        <div className="absolute bottom-0 right-1/3 animate-bounce-slower">
          <Waves className="w-14 h-14 text-blue-200 opacity-50" />
        </div>

        {/* Nuages */}
        <div className="absolute top-20 left-20 w-16 h-8 bg-white rounded-full opacity-80 animate-float" />
        <div className="absolute top-32 right-32 w-20 h-10 bg-white rounded-full opacity-70 animate-float-delayed" />
        <div className="absolute top-16 left-1/2 w-12 h-6 bg-white rounded-full opacity-60 animate-float-slow" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 space-y-12">
        {/* Titre principal */}
        <div className="text-center space-y-4">
          <h3 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Les vacances arrivent bientôt ma Eli ☀️</h3>
        </div>

        {/* Compteur vacances (5 juillet) */}
        <Card className="w-full max-w-2xl bg-gradient-to-r from-orange-400 to-pink-500 border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Calendar className="w-8 h-8 text-white" />
              <h2 className="text-3xl font-bold text-white">Début des Vacances</h2>
            </div>
            <p className="text-white/90 text-lg mb-6">5 juillet 2025</p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-7xl font-bold text-white mb-2">{timeToVacation.days}</div>
              <div className="text-2xl text-white/90 font-semibold">
                {timeToVacation.days === 1 ? "jour restant" : "jours restants"}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compteur crevette (6 juillet) */}
        <Card className="w-full max-w-2xl bg-gradient-to-r from-pink-400 to-red-200 border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <h2 className="text-3xl font-bold text-white">Championnat du Monde du Décorticage de Crevettes</h2>
            </div>
            <p className="text-white/90 text-lg mb-6">6 juillet 2025</p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-7xl font-bold text-white mb-2">{timeToCrevette.days}</div>
              <div className="text-2xl text-white/90 font-semibold">
                {timeToCrevette.days === 1 ? "jour restant" : "jours restants"}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compteur Albanie (9 juillet) */}
        <Card className="w-full max-w-4xl bg-gradient-to-r from-red-500 to-green-500 border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Plane className="w-8 h-8 text-white" />
              <h2 className="text-3xl font-bold text-white">Voyage en Albanie</h2>
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <p className="text-white/90 text-lg mb-6">9 juillet 2025</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeToAlbania.days}</div>
                <div className="text-sm md:text-lg text-white/90 font-semibold">Jours</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeToAlbania.hours}</div>
                <div className="text-sm md:text-lg text-white/90 font-semibold">Heures</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeToAlbania.minutes}</div>
                <div className="text-sm md:text-lg text-white/90 font-semibold">Minutes</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeToAlbania.seconds}</div>
                <div className="text-sm md:text-lg text-white/90 font-semibold">Secondes</div>
              </div>
            </div>
          </CardContent>
        </Card>

        

        {/* Message motivant */}
        <div className="text-center space-y-2 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl">
          <p className="text-xl text-white font-medium">🌊 Prépare-toi pour des vacances inoubliables ! 🌊</p>
          <p className="text-lg text-blue-100">Courage ma fiancée c'est la dernière ligne droite</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        
        @keyframes sway-delayed {
          0%, 100% { transform: rotate(1deg); }
          50% { transform: rotate(-1deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce-slower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(5px) translateY(-5px); }
          50% { transform: translateX(-5px) translateY(-10px); }
          75% { transform: translateX(-10px) translateY(-5px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(-5px) translateY(-5px); }
          50% { transform: translateX(5px) translateY(-10px); }
          75% { transform: translateX(10px) translateY(-5px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(8px) translateY(-8px); }
        }
        
        .animate-sway {
          animation: sway 4s ease-in-out infinite;
        }
        
        .animate-sway-delayed {
          animation: sway-delayed 4.5s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-bounce-slower {
          animation: bounce-slower 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
