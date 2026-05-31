import { useEffect, useState } from "react"

function useCountdown(targetDate: Date) {
  const calc = () => {
    const diff = targetDate.getTime() - Date.now()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function Pad({ n }: { n: number }) {
  return <>{String(n).padStart(2, "0")}</>
}

export function PromoBanner() {
  const deadline = new Date("2026-06-30T23:59:59")
  const { days, hours, minutes, seconds } = useCountdown(deadline)

  return (
    <section className="py-0">
      <div className="bg-orange-500 text-white">
        <div className="container mx-auto px-6 md:px-12 py-14 md:py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
              {/* Left */}
              <div className="flex-1">
                <span className="inline-block bg-white/20 text-white text-xs tracking-[0.25em] uppercase px-3 py-1.5 mb-5">
                  Акция · до конца июня
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight mb-4">
                  Металлокаркас под ключ
                </h2>
                <p className="text-white/80 text-lg leading-relaxed max-w-md mb-6">
                  Доставка, монтаж и покраска уже включены в стоимость — никаких скрытых платежей.
                </p>

                {/* Countdown */}
                <div className="flex items-end gap-3 mb-8">
                  {[{ v: days, l: "дней" }, { v: hours, l: "часов" }, { v: minutes, l: "минут" }, { v: seconds, l: "секунд" }].map(({ v, l }, i) => (
                    <div key={l} className="flex items-end gap-3">
                      {i > 0 && <span className="text-white/50 text-2xl font-light mb-2">:</span>}
                      <div className="text-center">
                        <div className="text-3xl md:text-4xl font-semibold tabular-nums leading-none mb-1">
                          <Pad n={v} />
                        </div>
                        <div className="text-white/60 text-xs uppercase tracking-widest">{l}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="tel:+79118908947"
                  className="inline-flex items-center justify-center gap-2 bg-white text-orange-500 font-medium px-8 py-4 text-sm tracking-wide hover:bg-white/90 transition-colors duration-300"
                >
                  Позвонить нам
                </a>
              </div>

              {/* Right — prices */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-4 shrink-0">
                <div className="bg-white/15 border border-white/25 px-7 py-5">
                  <p className="text-white/70 text-sm mb-1">На двойном косоуре</p>
                  <p className="text-3xl font-semibold tracking-tight">125 000 ₽</p>
                </div>
                <div className="bg-white/15 border border-white/25 px-7 py-5">
                  <p className="text-white/70 text-sm mb-1">На одном косоуре</p>
                  <p className="text-3xl font-semibold tracking-tight">170 000 ₽</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
