import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className=" font-display text-5xl   font-medium tracking-tighter sm:text-6xl">
          Meet Arweave:
          <br />
          Permanent information storage.
        </h1>
        <div className="mt-10 font-sans text-xl tracking-tight xl:space-y-10">
          <p>
            The Arweave network is like Bitcoin, but for data: An entire web
            inside a decentralized, provably neutral and open ledger.
          </p>
          <p className="pt-4">
            Not only does the Arweave network permanently store all of
            humanity’s important digital artifacts, but it can even be used to
            host fully decentralized and provably neutral web apps.
          </p>
          <p className="pt-4">
            The Arweave protocol is complete, mature and widely adopted. As
            such, its ecosystem is fully decentralized. This site is just the
            tip of the iceberg. It acts as a map that points you to places you
            can use, learn about, and build on Arweave.
          </p>
          <p className="pt-4">
            Dive in! The rabbit hole is deep, and the possibilities are endless.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
