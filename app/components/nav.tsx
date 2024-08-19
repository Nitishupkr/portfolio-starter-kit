import Link from 'next/link'
import Logo from 'app/components/logo' // Adjust the path as needed

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'deploy',
  },
}

export function Navbar() {
  return (
    <aside className="mb-16 tracking-tight text-xl">
      <div className="lg:sticky lg:top-10">
        <nav
          className="flex items-center justify-between px-4 fade md:overflow-auto"
          id="nav"
        >
          {/* Logo Section */}
          <div className="flex order-2 md:order-1 md:flex md:flex-row items-center">
            <Link href="/">
              <Logo className="transition-all hover:opacity-80 md:mr-8 md:ml-0 ml-2" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex order-1 md:order-2 space-x-4">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-1 px-2"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
