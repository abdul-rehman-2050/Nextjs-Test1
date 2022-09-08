import { useSession, signIn, signOut } from "next-auth/react"
import Button from '@mui/material/Button';

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} 
        <Button color="inherit" onClick={() => signOut()}>Logout</Button>
       
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