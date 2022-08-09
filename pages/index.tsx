import * as React from 'react'
import Layout from '../components/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BeakerIcon } from '@heroicons/react/solid'
/* https://heroicons.com/ */

const Home: NextPage = () => {
  return (
    <Layout>
    <div className='min-h-screen flex-col py-2'>
      <Head >
        <title>NextJS Tailwind Template</title>
      </Head>

      <main>
          <h1 className='text-4xl font-bold text-blue-600 flex items-center justify-center min-h-screen'>
            Hi! I'm Justin. Welcome to my Next Template.</h1>
          <BeakerIcon className="h-5 w-5 text-blue-600" />
      </main>

        <footer className='flex h-24 w-full items-center justify-center border-t'>
          <ul role="list">
            <li>Next.js</li>
            <li>React.ks</li>
            <li>TailwindCSS</li>
            <li>Jest</li>
            <li>Babel</li>
            <li>Node.js</li>
            <li>Prettier Plugin</li>
            <li>Heroicons</li>
            <li>PostCSS Purge</li>
            <li>ESLint</li>
            <li>Typescript</li>
          </ul>
      </footer>
      </div>
      </Layout>
  )
}

export default Home