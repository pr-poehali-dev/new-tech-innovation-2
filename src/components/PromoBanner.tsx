export function PromoBanner() {
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
                <p className="text-white/80 text-lg leading-relaxed max-w-md">
                  Доставка, монтаж и покраска уже включены в стоимость — никаких скрытых платежей.
                </p>
              </div>

              {/* Right — prices */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-4 md:gap-4 shrink-0">
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
