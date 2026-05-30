import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Лестницы на монокосоуре",
    category: "Изготовление под ключ",
    location: "Частный дом, Подмосковье",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/b5737759-ee01-479b-8652-66ce92ff6e64.jpg",
    images: [
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/b5737759-ee01-479b-8652-66ce92ff6e64.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/816093eb-3505-403b-980e-ffff60d4f24d.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/1c1c901c-2026-4227-b0d5-28b2707bfc7b.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/6f0a2ac3-650c-48a6-82ee-a0a298efc414.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/cff1d099-33ba-4e8f-a53c-b39a431b218d.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/0c579f0d-c382-4ba8-a94f-c0974f62b7df.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/a43a16c2-a35b-4e5b-a3ba-5b3c4474f7c4.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/812b20af-fa31-4d10-99bc-8e46fdd60c08.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/017b44c7-d673-4069-a0f6-e26e0d0209ec.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/486e84be-5837-4144-a5ff-9398eb3f7589.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/3efebe57-4d43-4af7-befa-484416bc1633.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/06f32a4a-1b88-4fed-a5ea-571e0c342c48.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/e0c064d6-2d85-469e-af65-d06e06d733f3.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/4395357f-3828-4611-8f7c-d15d89f6b923.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/188d104e-61f7-463e-bb82-e784a893d688.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/65542a67-76b6-4c2c-88c2-cc4df7c90ee7.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/8539c1ce-8a27-4aa5-8707-88897d65754b.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/30c41a0a-e520-4e43-b3f9-1d09d9ecfccc.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/c39f467f-fd1e-4610-9dcc-e1e3d585d692.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/a9d38080-85d6-40e7-b1df-f851d73c4212.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/190f847c-e6c5-40e8-9252-c13f24365ea7.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/57611dae-f9fe-4ce0-a179-030156ba97f8.jpg",
    ],
  },
  {
    id: 2,
    title: "Обшивка бетонных лестниц",
    category: "Обшивка и реставрация",
    location: "Коттедж, Новая Рига",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/9c2b06f8-d32b-44a7-8f10-c3facf7f5c81.jpg",
    images: [
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/9c2b06f8-d32b-44a7-8f10-c3facf7f5c81.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/57e76f8b-077e-4b2e-a160-26f7dc4b20b6.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/a0148b1b-68bd-4ad4-bd62-698abe2bc7bc.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/a079e646-0915-40fb-9fec-0b225f78183c.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/199616c4-3825-4887-bef7-3f05e25aaa0d.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/f13e54a7-e144-4bdf-b885-36107219ee19.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/902c25c2-5b6f-4801-a103-85ab5e972f79.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/6f6cd5e3-ad04-4970-811f-f8c5d85a35b0.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/0b3ea276-cde6-43be-aa8b-354a0f1b1ab8.jpg",
      "https://cdn.poehali.dev/projects/a06219ab-2743-4e38-9c69-70502bc6e8e7/bucket/caa58a84-a0aa-4298-9587-a8a8e2b926d5.jpg",
    ],
  },
  {
    id: 3,
    title: "Перила и ограждения",
    category: "Металл, дерево, стекло",
    location: "Таунхаус, Сочи",
    year: "2024",
    image: "/images/hously-3.png",
  },
  {
    id: 4,
    title: "Металлокаркас лестниц",
    category: "Металлоконструкции",
    location: "Загородный дом, Казань",
    year: "2024",
    image: "/images/hously-4.png",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const [slideIndexes, setSlideIndexes] = useState<Record<number, number>>({})
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  const getSlideIndex = (id: number) => slideIndexes[id] ?? 0

  const prevSlide = (e: React.MouseEvent, id: number, total: number) => {
    e.stopPropagation()
    setSlideIndexes((prev) => ({ ...prev, [id]: (getSlideIndex(id) - 1 + total) % total }))
  }

  const nextSlide = (e: React.MouseEvent, id: number, total: number) => {
    e.stopPropagation()
    setSlideIndexes((prev) => ({ ...prev, [id]: (getSlideIndex(id) + 1) % total }))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Избранные работы</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Наши работы</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Смотреть все работы
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                {"images" in project && project.images ? (
                  <>
                    <img
                      src={project.images[getSlideIndex(project.id)]}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        hoveredId === project.id ? "scale-105" : "scale-100"
                      }`}
                    />
                    {project.images.length > 1 && hoveredId === project.id && (
                      <>
                        <button
                          onClick={(e) => prevSlide(e, project.id, project.images!.length)}
                          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => nextSlide(e, project.id, project.images!.length)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                          {project.images.map((_, i) => (
                            <span
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                i === getSlideIndex(project.id) ? "bg-white" : "bg-white/40"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredId === project.id ? "scale-105" : "scale-100"
                    }`}
                  />
                )}
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="text-muted-foreground/60 text-sm">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}