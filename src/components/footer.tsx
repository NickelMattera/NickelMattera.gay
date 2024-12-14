export default function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      <p className="text-xs text-muted-foreground">&copy; 2024 Nickel Mattera. All rights reserved.</p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        <a
          href="https://linkedin.com/in/nickelmattera"
          target="_blank"
          className="text-xs underline-offset-4 hover:underline">
          LinkedIn
        </a>
        <a
          href="https://github.com/NicholeMattera"
          target="_blank"
          className="text-xs underline-offset-4 hover:underline">
          GitHub
        </a>
        <a
          href="https://www.mountainproject.com/user/201597317/nickel-mattera"
          target="_blank"
          className="text-xs underline-offset-4 hover:underline">
          Mountain Project
        </a>
        <a
          href="https://www.goodreads.com/nickelmattera"
          target="_blank"
          className="text-xs underline-offset-4 hover:underline">
          Goodreads
        </a>
        <a
          href="https://www.instagram.com/nickel.climbs"
          target="_blank"
          className="text-xs underline-offset-4 hover:underline">
          Instagram
        </a>
      </nav>
    </footer>
  )
}
