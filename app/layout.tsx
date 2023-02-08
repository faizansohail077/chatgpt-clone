import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className="bg-[#343541]" >

          {children}
        </div>
      </body>
    </html>
  )
}
