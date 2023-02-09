
import { Sidebar } from '@/components'
import Login from '@/components/Login'
import SessionProvider from '@/components/SessionProvider'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import './globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)
  console.log(session, 'sessionsession')
  return (
    <html>
      <head />
      <body>
        <SessionProvider Session={session} >
          {!session ? <>
            <Login />
          </> :
            <div className="flex">
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem] ">
                <Sidebar />
              </div>
              <div className="bg-[#343541] flex-1" >
                {children}
              </div>
            </div>
          }
        </SessionProvider>
      </body>
    </html>
  )
}
