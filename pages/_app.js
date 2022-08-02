import '../styles/globals.css'

import "../styles/fonts.css"

import Link from 'next/link'
function MyApp({ Component, pageProps }) {

  return (
    <>
      <div className='ValorantRandomizerScreenNotShowing' style={{padding: '1rem'}}>
        <div style={{backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(1,1,29,1) 53%, rgba(255,70,86,1) 100%)', padding: '1rem', marginBottom: '2rem'}}>
          <img src="/images/logos/valorant-logo.svg" style={{width: '50px'}}/>
          <h2 style={{fontFamily: "Valorant", fontSize: '35px', marginBottom: '0rem', color: 'rgb(249,249,249)'}}>Valorant Randomizer</h2>
          <p style={{fontFamily: "Couture", marginTop: '0.5rem', marginLeft: '0.5rem', color: 'rgb(249,249,249)'}}>Randomize Your Character, Guns, and Missions.</p>
        </div>
        <h2>Hello There,</h2>
        <p style={{lineHeight: '1.5rem'}}>You are seeing this message because you are trying to view this website on a small screen-sized device, such as your
          phone or tablet. The Valorant Randomizer, due to its functionalities, only works on devices with screen size larger
          than 1440px, such as your laptop or computer. If you are continuing to see this message, we will be happy to assist you 
          at playvalorantrandomizer@gmail.com 
        </p>
        <p>Thank you for your understanding, and have a wonderful day!</p>
        <p style={{marginTop: '2rem'}}>- Valorant Randomizer Developer Team</p>

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
