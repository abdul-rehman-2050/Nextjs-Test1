// e.g. in `pages/index.tsx`
import prisma from '../prisma';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Router from 'next/router';
import { InferGetServerSidePropsType } from 'next'

export const getServerSideProps = async ({ }) => {
  
  const allusers = await prisma.user.findMany({})
  
  return {  props: {
            allusers: JSON.parse(JSON.stringify(allusers)) // <===
    }
     }
}

function UserList({ allusers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    return (
        <Layout>
            <h1> All Users List</h1>
          <div>
          {allusers.map((user:any) => <li key={user.id}>{user.name}</li>)}
                
            </div>
        </Layout>
    );
    

}

export default UserList;
