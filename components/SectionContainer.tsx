import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto max-w-3xl px-4  sm:px-4 xl:max-w-5xl xl:px-0 mobile:px-2">
      {children}
    </section>
  )
}
