import Body from '@/components/body'
import { Button } from '@/components/ui/button'
import { createRootRoute, Link, Outlet, useRouterState } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu.constants'

export const Route = createRootRoute({
  component: () => <Root />,
})

function Root() {
  const location = useRouterState({ select: (s) => s.location })

  return (
    <>
      <div className="flex min-h-[100dvh] flex-col">
        <Hero
          title="Nickel Mattera"
          description="Experienced software engineer with a passion for building creative solutions and a professional climber on the side."
          image="/images/nickel.webp"
          imageSet="/images/nickel@2x.webp 2x">
          <div className="space-x-4 text-center lg:text-left">
            <Button variant="outline" size="lg" className="mt-4" asChild>
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
            </Button>
          </div>
        </Hero>

        <nav className={cn('flex justify-center py-6 md:py-10 lg:py-14')}>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink active={location.pathname === '/'} className={navigationMenuTriggerStyle()}>
                    Software Engineering
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/climbing">
                  <NavigationMenuLink
                    active={location.pathname === '/climbing'}
                    className={navigationMenuTriggerStyle()}>
                    Climbing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <Body>
          <Outlet />
        </Body>

        <Footer />
      </div>
    </>
  )
}
