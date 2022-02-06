import Head from 'next/head'
import Link from 'next/link'
import s from '../styles/common.module.css'

export default function Home() {
  return (
    <div className={s.layout}>
      <Head>
        <title>Adopt.eth</title>
        <meta name="description" content="Adopt.eth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen px-4 py-4 pt-24 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to the <span className="text-red-500">Web 3.0</span>
        </h1>
        <h2 className="lg:text-2xl md:text-xl text-lg text-gray-200 text-center max-w-3xl m-auto mb-8 sm:mb-6">
          Explore the world of web 3.0. Learn what is blockchain, how
          it works, mint your first NFT and more.
        </h2>
        <Link href="/wallet" passHref>
          <a className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md cursor-pointer bg-red-600 hover:bg-red-700 text-white">
            Start my Adventure
          </a>
        </Link>
      </main>
    </div>
  )
}
