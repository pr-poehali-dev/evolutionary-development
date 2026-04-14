import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Design studio client testimonials
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Форма Студия полностью переосмыслила наш бренд. После редизайна узнаваемость среди целевой аудитории выросла втрое. Это было смелое и точное решение.",
    by: "Андрей Волков, CEO Meridian Group",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AndreyVolkov&backgroundColor=3b82f6&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Они не просто сделали красивый логотип — они поняли суть нашего бизнеса и создали айдентику, которая живёт во всём: от упаковки до digital.",
    by: "Мария Соколова, CMO Luxe Retail",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MariaSokolova&backgroundColor=10b981&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Работать с командой — удовольствие. Никакого воды в презентациях, только по делу. Наш новый фирменный стиль — лучшее, что мы сделали за 5 лет.",
    by: "Игорь Петров, основатель NOVA Brands",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=IgorPetrov&backgroundColor=8b5cf6&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Инвесторы отметили наш ребрендинг на первой же встрече. Визуальный язык студии передаёт именно то, что мы хотели донести — доверие и инновации.",
    by: "Екатерина Лим, CPO TechCore",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=EkaterinaLim&backgroundColor=ef4444&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Брендбук получился настолько чётким, что новые сотрудники понимают наш стиль с первого дня. Это сэкономило нам сотни часов в год.",
    by: "Тимур Аскеров, Brand Director Stellar",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=TimurAskerov&backgroundColor=f59e0b&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Проект был сдан раньше срока, без правок после утверждения. Для нас это редкость. С удовольствием возвращаемся к ним на каждый новый запуск.",
    by: "Ольга Карпова, маркетинг-директор Atmos",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OlgaKarpova&backgroundColor=6366f1&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Логотип, который создала студия, стал иконой нашей категории. Конкуренты начали нас копировать — для меня это лучший знак качества.",
    by: "Дмитрий Орлов, CEO Archetype",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DmitriyOrlov&backgroundColor=ec4899&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Упаковка, которую они разработали для нашей линейки, получила два международных награды. Полки в магазинах работают — продажи подтверждают.",
    by: "Наталья Фёдорова, Founder Organic Lab",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NataliyaFedorova&backgroundColor=06b6d4&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Я скептически относился к дизайн-студиям — до этого сотрудничества. Они изменили моё мнение навсегда. Профессионализм на каждом этапе.",
    by: "Роман Захаров, Chairman Vertex Capital",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RomanZakharov&backgroundColor=f97316&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "Команда студии всегда на шаг впереди трендов. Они предложили направление, о котором мы не думали, и попали точно в цель нашей аудитории.",
    by: "Алина Морозова, Head of Brand Pulse Media",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlinaMorozova&backgroundColor=84cc16&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "Стратегическая сессия перед началом работы стоила отдельного проекта. Мы поняли своих клиентов глубже, чем за годы внутренних исследований.",
    by: "Артём Белов, COO Flagship Retail",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ArtemBelov&backgroundColor=a855f7&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "Работаем со студией уже четыре года. Каждый проект сложнее предыдущего — и каждый раз они удивляют качеством и вниманием к деталям.",
    by: "Ксения Игнатова, VP Marketing Kronos",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KseniyaIgnatova&backgroundColor=059669&textColor=ffffff",
  },
  {
    tempId: 12,
    testimonial:
      "Их подход к презентации концепций — отдельное искусство. Мы с первого раза выбрали направление без бесконечных итераций. Сэкономили месяц.",
    by: "Павел Крылов, CEO Novum Agency",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=PavelKrylov&backgroundColor=0ea5e9&textColor=ffffff",
  },
  {
    tempId: 13,
    testimonial:
      "Фирменный стиль, который они создали, работает одинаково сильно в digital и офлайн. Это редкое умение — думать системно, а не точечно.",
    by: "Светлана Гусева, Brand Manager EcoLine",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SvetlanaGuseva&backgroundColor=dc2626&textColor=ffffff",
  },
  {
    tempId: 14,
    testimonial:
      "Самое ценное — они говорят с нами на языке бизнеса, а не дизайна. Мы понимаем каждое решение, потому что оно обосновано стратегически.",
    by: "Николай Тихонов, Founder Prime Industries",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NikolayTikhonov&backgroundColor=7c3aed&textColor=ffffff",
  },
  {
    tempId: 15,
    testimonial:
      "После запуска нового бренда нас начали замечать международные партнёры. Визуальный уровень открыл двери, которые раньше были закрыты.",
    by: "Юлия Степанова, CEO Global Ventures",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=YuliyaStepanova&backgroundColor=ea580c&textColor=ffffff",
  },
  {
    tempId: 16,
    testimonial:
      "Они создали нам не просто логотип, а целую визуальную систему. Сейчас любой дизайнер в команде работает в рамках стиля без согласований.",
    by: "Максим Фролов, CTO Databridge",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MaximFrolov&backgroundColor=16a34a&textColor=ffffff",
  },
  {
    tempId: 17,
    testimonial:
      "Мы запустились с новым брендом и за три месяца получили coverage в топ-5 отраслевых изданиях. Дизайн стал частью нашей PR-стратегии.",
    by: "Елена Борисова, PR Director Magnit Pro",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ElenaBorisovaDesign&backgroundColor=2563eb&textColor=ffffff",
  },
  {
    tempId: 18,
    testimonial:
      "Честность — главное, что выделяет студию. Они сказали нам, что наша идея не сработает, предложили альтернативу — и оказались правы.",
    by: "Антон Сорокин, основатель Craft Foods",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AntonSorokin&backgroundColor=be185d&textColor=ffffff",
  },
  {
    tempId: 19,
    testimonial:
      "После редизайна конверсия на сайте выросла на 34%. Дизайн — это не трата, это инвестиция. Форма Студия это доказала на цифрах.",
    by: "Вера Климова, CMO Digital Pulse",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=VeraKlimova&backgroundColor=0891b2&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gray-900 text-white border-gray-900"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-gray-400",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Следующий отзыв"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}