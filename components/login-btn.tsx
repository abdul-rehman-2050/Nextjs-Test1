import { useSession, signIn, signOut } from "next-auth/react"
import Button from '@mui/material/Button';
import Link from 'next/link'

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} 
        <Button color="inherit" onClick={() => signOut()}>Logout</Button>
        <Link color="inherit" href="/userlist">Users</Link>
       
      </>
    )
  }
  return (
    <>
      Not signed in 
      <Button color="inherit" onClick={() => signIn()}>Sign in</Button>
    </>
  )
}