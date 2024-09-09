/**
 * Generated with v0 by Vercel. (https://v0.dev/t/MqW2cIkwT16)
 */

export interface EducationProps {
  children?: React.ReactNode
  company: string
  duration: string
  title: string
}

export default function Education({ children, company, duration, title }: EducationProps) {
  return (
    <>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground">
        {company} | {duration}
      </p>
      <div className="mt-2 space-y-2 text-muted-foreground">{children}</div>
    </>
  )
}
