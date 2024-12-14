import { cn } from '@/lib/utils'
import Body from '@/components/body'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Climbing from '@/pages/climbing'
import Engineering from '@/pages/engineering'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <div className={cn('flex min-h-[100dvh] flex-col')}>
      <Hero
        title="Nickel Mattera"
        description="Experienced software engineer with a passion for building creative solutions and a professional climber on the side."
        image="/images/nickel.webp"
        imageSet="/images/nickel@2x.webp 2x">
        <div className="space-x-4 text-center lg:text-left">
          {/* <Button variant="outline" size="lg" className="mt-4" asChild>
            <a href="https://linkedin.com/in/nickelmattera" target="_blank">
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" className="mt-4" asChild>
            <a href="https://github.com/NicholeMattera" target="_blank">
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" className="mt-4" asChild>
            <a href="https://www.mountainproject.com/user/201597317/nickel-mattera" target="_blank">
              Mountain Project
            </a>
          </Button> */}
        </div>
      </Hero>

      <nav className={cn('flex justify-center py-6 md:py-10 lg:py-14')}></nav>

      <Body>
        <Routes>
          <Route path="/">
            <Route index element={<Engineering />} />
            <Route path="climbing" element={<Climbing />} />
          </Route>
        </Routes>
      </Body>

      <Footer />
    </div>
  )
}

export default App
