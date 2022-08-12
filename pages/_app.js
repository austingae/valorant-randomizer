import Link from 'next/link'
import Head from 'next/head';

import '../styles/globals.css'
import "../styles/fonts.css"

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html charset=utf-8" />

        <link rel="icon" href="/images/logos/valorant-logo.svg" />
    </Head>

      <div className='ValorantRandomizerScreenNotShowing' style={{padding: '1rem'}}>
        <div style={{backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(1,1,29,1) 53%, rgba(255,70,86,1) 100%)', padding: '1rem', marginBottom: '2rem'}}>
          <img src="/images/logos/valorant-logo.svg" style={{width: '50px'}} alt="Valorant Logo"/>
          <h1 style={{fontFamily: "Valorant", fontSize: '35px', marginBottom: '0rem', color: 'rgb(249,249,249)'}}>Valorant Randomizer</h1>
          <p style={{fontFamily: "Couture", marginTop: '0.5rem', marginLeft: '0.5rem', color: 'rgb(249,249,249)'}}>Randomize Agents, Guns, and Challenges.</p>
        </div>
        <h2>Hello There,</h2>
        <p style={{lineHeight: '1.5rem'}}>You are seeing this message because you are trying to view this Valorant Randomizer on a small screen-sized device, such as your phone or tablet.
                                          The Valorant Randomizer, because of its functionalities, only works on devices with screen sizes larger than 1024 pixels, such as your laptop or computer. 
                                          If you are continuing to experience difficulties, email me at playvalorantrandomizer@gmail.com. I will help you out!
        </p>
        <p>Thank you for your understanding, and have a wonderful day!</p>
        <p style={{marginTop: '2rem'}}>- DuhAppleBaby, Creator of Valorant Randomizer</p>
      </div>
      
      <div className='ValorantRandomizerScreen'>
        {/*Navigation Bar*/}
        <nav className='nav'>
          <div className='nav__leftSection'>
            <Link href='/'>
              <div className='nav__logoTitleContainer'>
                <img className='nav__logo' src='/images/logos/valorant-logo.svg' alt="Valorant Logo"/>
                <h1 className='nav__title'>Valorant Randomizer</h1>
              </div>
            </Link>
            <h2 className='nav__motto'>Randomize Your Agents, Weapons, and Over 50 Fun Challenges.</h2>
          </div>

          <div className='nav__rightSection'>
            <Link href='/'>
              <a className='nav__link nav__link--marginRight'>Valorant Randomizer</a>
            </Link>

            <Link href='/how-to-use-valorant-randomizer/'>
              <a className='nav__link nav__link--marginRight'>How To Use</a>
            </Link>
          </div>
        </nav>



        {/*Components*/}
        <Component {...pageProps} />



        {/*Footer*/}
        <footer className='footer'>
          <h2 className='createdByStatement'>Valorant Randomizer created by DuhAppleBaby with support from dpepper and silveronepark. Contact DuhAppleBaby at playvalorantrandomizer@gmail.com or click <a href='mailto: playvalorantrandomizer@gmail.com' style={{color: 'rgb(172, 172, 172);'}}>here</a>. Valorant Randomizer <a href='https://www.gdprprivacynotice.com/live.php?token=SfVdEvwK9VfpTAW2nRkCgMHEFLZSOnqt' target='_blank' rel='noreferrer' style={{color: 'rgb(172, 172, 172);'}}>Privacy Policy</a>.</h2>
          <h2 className='disclaimerStatement'>ValorantRandomizer isn&apos;t endorsed by <a href='https://playvalorant.com/en-us/' rel='noreferrer' style={{color: 'rgb(172, 172, 172)', textDecoration: 'none'}}>Riot Games</a>, and it does not reflect the views or opinions of <a href='https://www.riotgames.com/en' rel='noreferrer' style={{color: 'rgb(172, 172, 172)', textDecoration: 'none'}}>Riot Games</a> and doesn&apos;t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.</h2>
          <h2 className='disclaimerStatement'>Valorant Randomizer includes <a href='https://valorant.fandom.com/wiki/Agents' rel='noreferrer' style={{color: 'rgb(172, 172, 172)', textDecoration: 'none'}}>Valorant Agents</a>: Astra, Breach, Brimstone, Chamber, Cypher, Fade, Jett, Kayo, Killjoy, Neon, Omen, Phoenix, Raze, Reyna, Sage, Skye, Sova, Viper, and Yoru. Valorant Randomizer includes <a href='https://liquipedia.net/valorant/Portal:Weapons' rel='noreferrer' style={{color: 'rgb(172, 172, 172)', textDecoration: 'none'}}>Valorant Guns</a>: Classic, Shorty, Frenzy, Ghost, Sheriff, Stinger, Spectre, Bucky, Judge, Bulldog, Guardian, Phantom, Vandal, Marshal, Operator, Ares, and Odin. Valorant Randomizer includes <a href='https://valorant.fandom.com/wiki/Maps' rel='noreferrer' style={{color: 'rgb(172, 172, 172)', textDecoration: 'none'}}>Valorant Maps</a>: Ascent, Bind, Breeze, Fracture, Haven, Icebox, and Pearl.</h2>

          <div className='partnershipSection'>
            <h2 className='partnershipSection__title'>Check Out These Other Randomizers:</h2>
            <div className='partnerList'>
             
            <div className='partner'>
                  <a className='partner__link' href='https://www.apexrandomizer.com/'>
                    <div className='partner__img_and_name'>
                      <img className='partner__img' src='/images/partners/apexrandomizer.webp'/>
                      <p className='partner_name'>Apex Randomizer</p>
                    </div>
                  </a>
              </div>
              
              <div className='partner'>
                  <a className='partner__link' href='https://kkmet.com/lss/'>
                    <div className='partner__img_and_name'>
                      <img className='partner__img' src='/images/partners/lolskinselector.png'/>
                      <p className='partner_name'>League of Legends Skin Selector</p>
                    </div>
                  </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default MyApp
