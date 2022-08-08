import * as React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>NextJS Tailwind Template</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Hi! I'm Justin. Welcome to my Next Template.</h1>
      </main>

      <footer className='flex h-24 w-full items-center justify-center border-t'></footer>
    </div>
  )
}

export default Home
