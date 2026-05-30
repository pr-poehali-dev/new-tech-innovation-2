import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Сколько стоит изготовление лестницы?",
    answer:
      "Стоимость зависит от конструкции, материала и сложности. Маршевая лестница из сосны начинается от 80 000 ₽, из дуба — от 150 000 ₽. Точную цену рассчитываем после выезда замерщика — это бесплатно.",
  },
  {
    question: "Можно ли обшить уже готовую бетонную лестницу?",
    answer:
      "Да, это одна из наших самых востребованных услуг. Обшиваем бетонные и металлические основания деревом любой породы. Работа занимает от 3 до 7 дней в зависимости от размера лестницы.",
  },
  {
    question: "Как долго изготавливается лестница?",
    answer:
      "Стандартная маршевая лестница изготавливается за 2–4 недели. Сложные конструкции с резьбой или эксклюзивными элементами — до 6 недель. Монтаж занимает 1–3 дня.",
  },
  {
    question: "Приезжаете ли вы на замер?",
    answer:
      "Да, выезд замерщика бесплатный. Специалист приедет в удобное для вас время, снимет все размеры, оценит условия монтажа и сразу ориентировочно назовёт стоимость работ.",
  },
  {
    question: "Даёте ли вы гарантию на работы?",
    answer:
      "Даём гарантию 3 года на все виды работ и материалы. Если в этот период появится скрип, деформация или другие дефекты по нашей вине — устраним бесплатно.",
  },
  {
    question: "Как оформить заказ?",
    answer:
      "Позвоните нам или оставьте заявку на сайте. Мы перезвоним, уточним детали и назначим бесплатный выезд замерщика. После замера получите готовый расчёт и сможете принять решение.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}