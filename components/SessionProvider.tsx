"use client"
import { Session } from 'next-auth'
import { SessionProvider as Provider } from 'next-auth/react'
import { ReactNode } from 'react'

type Props = {
    Session: Session | null,
    children: ReactNode
}

const SessionProvider = ({ children, Session }: Props) => {
    return (
        <Provider session={Session} >{children}</Provider>
    )
}

export default SessionProvider