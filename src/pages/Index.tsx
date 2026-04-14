import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"

export default function Index() {
  const missionStatement =
    "В Форма Студии мы верим: великий бренд — это не просто логотип, это философия. Рождённые из страсти к визуальному языку, мы создаём фирменный стиль, который говорит за вас громче слов. Работаем с крупными брендами, которые готовы к смелым решениям. Каждый проект — это диалог между смыслом и формой, между стратегией и эстетикой. Мы не делаем «красиво» — мы создаём идентичность, которую невозможно забыть."

  const timelineEntries = [
    {
      id: 1,
      image: "https://cdn.poehali.dev/projects/35d4b4d4-6b62-4fc1-9e0d-f7df353e1fc8/files/5666f04f-066c-42ff-a583-1dc98fdc4837.jpg",
      alt: "Студия дизайна — рабочее пространство",
      title: "Стратегия прежде всего",
      description:
        "Каждый проект начинается не с эскизов, а с глубокого погружения в бренд клиента. Мы изучаем рынок, конкурентов и аудиторию — чтобы дизайн работал на бизнес-результат, а не просто радовал глаз. Форма следует за смыслом.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/projects/35d4b4d4-6b62-4fc1-9e0d-f7df353e1fc8/files/39885489-9ef2-4903-88f5-620d206c8d20.jpg",
      alt: "Элементы фирменного стиля",
      title: "Айдентика мирового уровня",
      description:
        "Логотипы, типографика, цветовые системы, брендбуки — мы создаём полноценные визуальные экосистемы. Наши решения одинаково сильны на визитке и на билборде 20 метров. Бренд должен быть узнаваем везде.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://cdn.poehali.dev/projects/35d4b4d4-6b62-4fc1-9e0d-f7df353e1fc8/files/f2ed07e9-35df-4073-ae92-90a81d241322.jpg",
      alt: "Процесс создания бренда",
      title: "Результат, который остаётся",
      description:
        "Мы не сдаём файлы и не прощаемся. Каждый клиент получает партнёра, который думает о его бренде так же, как он сам. Долгосрочные отношения — основа нашей работы. Ваш успех — наше портфолио.",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement Section with Grid Background */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">НАШ ПОДХОД</h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="community" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">КАК МЫ РАБОТАЕМ</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                От стратегии до финального файла — три принципа, которые делают наши проекты исключительными.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6">
              Что говорят наши{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">КЛИЕНТЫ</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Реальные отзывы от брендов, которые доверили нам своё визуальное лицо.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* Smooth Scroll Hero with CTA Overlay */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="https://cdn.poehali.dev/projects/35d4b4d4-6b62-4fc1-9e0d-f7df353e1fc8/files/39885489-9ef2-4903-88f5-620d206c8d20.jpg"
          mobileImage="https://cdn.poehali.dev/projects/35d4b4d4-6b62-4fc1-9e0d-f7df353e1fc8/files/39885489-9ef2-4903-88f5-620d206c8d20.jpg"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
    </div>
  )
}