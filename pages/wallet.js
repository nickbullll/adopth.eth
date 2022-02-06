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

      <main className="max-w-3xl w-max mx-auto px-4 py-4 pt-24">
        <h1 className="text-5xl font-bold mb-6">
          Let&apos;s start with keys...
        </h1>
        <p className="lg:text-2xl md:text-xl text-lg text-gray-200 max-w-3xl mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quidem eos ducimus quam sequi! Maxime ut odio nemo quo
          delectus sed, quis veritatis vero perferendis sint nihil
          sapiente velit praesentium ipsum?
        </p>
        <p className="lg:text-2xl md:text-xl text-lg text-gray-200 max-w-3xl mb-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quidem eos ducimus quam sequi! Maxime ut odio nemo quo
          delectus sed, quis veritatis vero perferendis sint nihil
          sapiente velit praesentium ipsum?
        </p>
        <h1 className="text-5xl font-bold mb-6">
          Now, let's create your first account!
        </h1>
        <p className="lg:text-2xl md:text-xl text-lg text-gray-200 max-w-3xl mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quidem eos ducimus quam sequi! Maxime ut odio nemo quo
          delectus sed, quis veritatis vero perferendis sint nihil
          sapiente velit praesentium ipsum?
        </p>
        <p className="lg:text-2xl md:text-xl text-lg text-gray-200 max-w-3xl mb-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quidem eos ducimus quam sequi! Maxime ut odio nemo quo
          delectus sed, quis veritatis vero perferendis sint nihil
          sapiente velit praesentium ipsum?
        </p>
        {/* <Link href="/wallet" passHref>
          <a className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md cursor-pointer bg-red-600 hover:bg-red-700 text-white">
            Start my Adventure
          </a>
        </Link> */}
      </main>
    </div>
  )
}
