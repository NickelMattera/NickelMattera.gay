/**
 * Generated with v0 by Vercel. (https://v0.dev/t/MqW2cIkwT16)
 */

export interface CertificateProps {
  children?: React.ReactNode
  expires?: string
  expired?: string
  issued: string
  title: string
}

export default function Certificate({ children, expires, expired, issued, title }: CertificateProps) {
  return (
    <>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground">
        Issued {issued}
        {(expires && ` | Expires ${expires}`) || (expired && ` | Expired ${expired}`)}
      </p>
      <div className="mt-2 text-muted-foreground">{children}</div>
    </>
  )
}
