import '../styles/globals.css'

import "../styles/fonts.css"

import Link from 'next/link'
function MyApp({ Component, pageProps }) {

  return (
    <>
      <div className='ValorantRandomizerScreenNotShowing'>
        <img src="/images/logos/valorant-logo.svg" style={{width: '50px'}}/>
        <h2>Valorant Randomizer</h2>
        <p>Randomize Your Character, Guns, and Missions.</p>
        <h2>Hello!</h2>
        <p>You are seeing this message because you are trying to view this website on a small screen-size device, such as your phone or tablet. The Valorant Randomizer, because of its functionalities, only works on a laptop or computer, or devices with screen sizes that are over 1440px. If you are continuing to experience difficulties, please contact us at playvalorantrandomizer@gmail.com</p>
        <p>Thank you, and have a wonderful day!</p>
        <p>- Valorant Randomizer Developer Team</p>

      </div>
      <div className='ValorantRandomizerScreen'>
        <nav className='nav'>
          <div className='nav__leftSection'>
            <Link href='/'>
              <div className='nav__logoTitleContainer'>
                <img className='nav__logo' src='/images/logos/valorant-logo.svg' />
                <h1 className='nav__title'>Valorant <span>Ra</span><span>nd</span><span>om</span><span>iz</span><span>er</span></h1>
              </div>
            </Link>
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
      </div>
    </>
  )
}

export default MyApp
