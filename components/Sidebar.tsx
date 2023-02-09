"use client"
import { useCollection } from 'react-firebase-hooks/firestore'
import { signOut, useSession } from "next-auth/react"
import NewChat from "./NewChat"
import { collection } from 'firebase/firestore'
import { db } from '@/firebase'

const Sidebar = () => {
    const { data: session } = useSession()

    const [data, loading, error] = useCollection(
        session && collection(db, "users", session.user?.email, "chats")
    )

    return (
        <div className=" p-2 flex flex-col h-screen" >
            <div className="flex-1">
                {/* new chat */}
                <NewChat />
            </div>

            {session && (
                <img onClick={() => signOut()} className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50 " src={session?.user?.image!} alt={'profile-pic'} />
            )}
        </div>
    )
}

export default Sidebar