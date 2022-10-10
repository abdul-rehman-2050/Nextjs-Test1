import type { NextPage } from 'next'
import Layout from "../components/Layout";
import { useRouter } from 'next/router';
import { Button } from '@mui/material';


const Home: NextPage = () => {

  const router = useRouter();
  return (
    <Layout>
      <h1>NextAuth.js Example</h1>
      <p>
        This is an example site to demonstrate how to use <a href={`https://next-auth.js.org`}>NextAuth.js</a> for authentication.
      </p>
      <Button variant="contained" color="primary" onClick={() => router.push('/auth/signup')}>
    Signup
  </Button>
    </Layout>
  )
}
export default Home
