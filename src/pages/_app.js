import '@/styles/globals.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ul className='flex gap-2'>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/test"}>Test</Link></li>
        <li><Link href={"/testing/router-test"}>Router-Test</Link></li>
      </ul>

      <Component {...pageProps} />
    </>
  )
}
