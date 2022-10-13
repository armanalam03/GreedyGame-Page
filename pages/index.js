import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>

      <Head>
        <title>Landing Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="All-in-one solution for all your app monetization and user acquisition needs so that you can concentrate on making awesome apps."
          key="desc"
        />
      </Head>

    <div className='homeContainer'>
      <div className='navbar'>
        <div className="navIcon">
          <Image src="/assets/icon.png" width={389} height={51} layout="responsive" alt="GreedyGame" />
        </div>
      </div>
      <div className='introContainer container'>
        <div className="bgShape shapeTop">
          <Image src="/assets/bg shape.png" width={398} height={732} layout="responsive" alt='Bg Shape' />
        </div>
        <div className="bgShape shapeBottom">
          <Image src="/assets/bg shape.png" width={398} height={732} layout="responsive" alt='Bg Shape' />
        </div>
        <div className="introWrapper wrapper">
          <div className='introHeadline'>
            <strong>Result-oriented</strong> performance campaigns for every objective
            <div className="underline1">
              <Image src="/assets/underline 1.png" width={829} height={42} layout="responsive" alt='Underline' />
            </div>
          </div>
          <div className='introGrid'>
            <div className="gridBox">
              <div className="gridImg">
                <Image src="/assets/box 1.png" width={127} height={78} layout="responsive" alt='Asset' />
              </div>
              <span>Self-serve platform with CPI starting at INR 1</span>
            </div>
            <div className="gridBox">
              <div className="gridImg">
                <Image src="/assets/box 2.png" width={84} height={84} layout="responsive" alt='Asset' />
              </div>
              <span>Access to premium inventory and exposure to 5K+ apps</span>
            </div>
            <div className="gridBox">
              <div className="gridImg">
                <Image src="/assets/box 3.png" width={84} height={76} layout="responsive" alt='Asset' />
              </div>
              <span>Comprehensive reporting and insights into campaign performance</span>
            </div>
            <div className="gridBox">
              <div className="gridImg">
                <Image src="/assets/box 4.png" width={89} height={73} layout="responsive" alt='Asset' />
              </div>
              <span>Campaigns for every need - clicks, installs, impressions, and more</span>
            </div>
          </div>
        </div>

        <div className="formContainer" id="form">
        <form className="detailsWrapper">
          <div className="detail name">
            <label>Name</label>
            <input type="name" name="name" placeholder='Enter your Full Name' required className='input'/>
          </div>
          <div className="detail number">
            <label>Phone Number</label>
            <input type="text" name="number" placeholder='(+91-xxxxxxxxxx)' pattern="[+]{1}[9]{1}[1]{1}-[0-9]{10}" required className='input' />
          </div>
          <div className="detail email">
            <label>Email</label>
            <input type="email" name="email" placeholder='Enter your Email Address' required className='input'/>
          </div>
          <div className="detail link">
            <label>App/Website Link (optional)</label>
            <input type="url" name="link" placeholder='Enter you App/Website you wish to monetise' className='input'/>
          </div>
          <div className="detail income">
            <label>Monthly Revenue (USD)</label>
            <input type="number" name="income" placeholder='Enter your Average monthly revenue in USD' required className='input' />
          </div>
          <input type="submit" value="Get Started" className='submit' />
        </form>
        <span className="tnc">
        By signing up, you agree to our <span className='blue'>Terms</span> and <span className="blue">Privacy Policy</span>
        </span>
      </div>

      </div>

      

      <div className="statsContainer container">
        <div className="statsWrapper wrapper">
          <div className="stats">
            <span className="num">300+</span>
            <span className="origin">Affiliates</span>
          </div>
          <div className="stats">
            <span className="num">5K+</span>
            <span className="origin">App Inventory</span>
          </div>
          <div className="stats">
            <span className="num">1M+</span>
            <span className="origin">App Installs</span>
          </div>
          <div className="stats">
            <span className="num">3K+</span>
            <span className="origin">Active Compaigns</span>
          </div>
        </div>
      </div>
      <div className="partnersContainer container">
        <div className="partnersWrapper wrapper">
          <span>Our Top Partners</span>
          <div className="partners">
            <div className="partner">
              <Image src="/assets/partner 1.png" width={375} height={339} layout="responsive" alt='Partner' />
            </div>
            <div className="partner">
              <Image src="/assets/partner 2.png" width={375} height={339} layout="responsive" alt='Partner' />
            </div>
            <div className="partner">
              <Image src="/assets/partner 3.png" width={375} height={339} layout="responsive" alt='Partner' />
            </div>
            <div className="partner">
              <Image src="/assets/partner 4.png" width={375} height={339} layout="responsive" alt='Partner' />
            </div>
            <div className="partner">
              <Image src="/assets/partner 5.png" width={375} height={339} layout="responsive" alt='Partner' />
            </div>
            <div className="partner">
              <Image src="/assets/partner 6.png" width={375} height={339} layout="responsive" alt='Partner' />
            </div>
          </div>
        </div>
      </div>
      <div className="clientsContainer container">
        <div className="clientsWrapper wrapper">
          <span>Our Top Clients</span>
          <div className="clients">
            <div className="client">
              <Image src="/assets/client 1.png" width={375} height={339} layout="responsive" alt='Client' />
            </div>
            <div className="client">
              <Image src="/assets/client 2.png" width={375} height={339} layout="responsive" alt='Client' />
            </div>
            <div className="client">
              <Image src="/assets/client 3.png" width={375} height={339} layout="responsive" alt='Client' />
            </div>
          </div>
        </div>
      </div>
      <div className="reviewsContainer container">
        <div className="reviewBg">
          <Image src="/assets/review bg.png" width={608} height={532} layout="responsive" alt='bg' />
        </div>
        <div className="reviewsWrapper wrapper">
          <span>Hear it from Clients</span>
          <div className="reviewBox">
            <div className="companyLogo">
              <Image src="/assets/review.png" width={234} height={64} layout="responsive" alt='Company' />
            </div>
            <span className="reviewHighlight">
              22.4 Mn minutes of branding results in 25k high-quality registrations
            </span>
            <span className="review">
              The placement of clickable units natively placed on the main menu, gameplay screen and pause screen ensured high engagement, registrations and transactions.
            </span>
            <span className="readLink">
              Read Casestudy
            </span>
          </div>
        </div>
      </div>
      <div className="footerContainer container">
        <div className="footerWrapper wrapper">
          <span className="footerHeading">
            Acquire quality users, not just installs
            <div className="underline2">
              <Image src="/assets/underline 1.png" width={829} height={42} layout="responsive" alt='Underline' />
            </div>
          </span>
          <span className="footerText">
            Talk to us today and start creating mobile marketing campaigns that deliver results.
          </span>
        </div>
      </div>
      <div className="copyrightContainer container">
        <span className="copyrights">&#169;2022 GreedyGame, Inc. All rights reserved.</span>
      </div>
      <div className="mobileContainer">
        <span>Get a Call back from us</span>
        <button className="getStarted" onClick={() => {
          document.getElementById("form").scrollIntoView({behavior: "smooth", block: "center"})
        }}>Get Started</button>
      </div>
    </div>

    </>
  )
}
