import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/66456778-f938-4f23-b505-8bc74973f168.jpg"
          alt="Лестница на монокосоуре"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pb-0 pl-1 pr-1 pt-8 md:pt-0">
        <div className="mb-72 md:mb-60 lg:mb-80">
          <p className="text-sm tracking-[0.3em] uppercase text-center text-secondary mb-0">{"Изготовление и обшивка лестниц в Калининграде"}</p>

          <h1 className="text-7xl font-medium text-balance text-center text-white mb-0 tracking-tight leading-[0.9] lg:text-8xl">
            {"Лестницы, которые"}
            <br />
            <span className="text-orange-200">{"украшают дом"}</span>
          </h1>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-30">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  )
}
