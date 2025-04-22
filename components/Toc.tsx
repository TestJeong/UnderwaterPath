// components/TOC.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from './Link'

interface TOCItem {
  value: string
  url: string
  depth: number
}

interface TOCProps {
  headings: TOCItem[]
}

export default function TOC({ headings }: TOCProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleHeadings.length > 0) {
          setActiveId(visibleHeadings[0].target.id)
        }
      },
      {
        rootMargin: '0px 0px -70% 0px', // 화면 위쪽 30%쯤에 닿았을 때 감지
        threshold: [0, 1.0],
      }
    )

    const headingElements = Array.from(document.querySelectorAll('h2, h3'))
    headingElements.forEach((el) => observer.observe(el))

    return () => {
      headingElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <nav className="sticky top-24 hidden max-h-[80vh] overflow-y-auto pr-4 xl:block">
      <h2 className="mb-4 text-sm font-bold text-gray-700 dark:text-gray-300">📚 목차</h2>
      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
        {headings.map((item) => {
          const isActive = item.url === `#${activeId}`
          return (
            <li key={item.url} className={`ml-${(item.depth - 2) * 4}`}>
              <Link
                href={item.url}
                className={`block transition-colors duration-200 ${
                  isActive ? 'font-bold text-primary-500' : ''
                }`}
              >
                {item.value}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
