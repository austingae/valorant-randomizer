import '../styles/globals.css'

import "../styles/fonts.css"

import Link from 'next/link'
function MyApp({ Component, pageProps }) {

  return (
    <>
      <nav className='nav'>
        <div className='nav__leftSection'>
          <div className='nav__logoTitleContainer'>
            <img className='nav__logo' src='/images/logos/valorant-logo.svg' />
            <h1 className='nav__title'>Valorant Randomizer</h1>
          </div>
          <p className='nav__motto'>Randomize Your Character, Guns, and Missions.</p>
        </div>

        <div className='nav__rightSection'>
          <Link href=''>
            <a className='nav__link nav__link--marginRight'>Randomizer</a>
          </Link>

          <Link href='tutorial'>
            <a className='nav__link nav__link--marginRight'>Tutorial</a>
          </Link>

          <Link href='share-ideas'>
          <a className='nav__link'>Share Your Ideas</a>
          </Link>
        </div>
      </nav>
    
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
