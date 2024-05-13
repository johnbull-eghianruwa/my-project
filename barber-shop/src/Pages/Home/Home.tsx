import './Home.css'
import WhiteBg from '../../assets/WhiteBg.jpg'

const Home = () => {
  return (
    <>
    {/* ========= HERO SECTION ======= */}
    <>
      <main className='main-content'>
        <section className='home' id='home'>
            <div className='content'>
              
              {/* ======= HERO CONTENT ===== */}
                <span>Welcome</span>
                <h3>We make <br /> hair beautiful <br /> & unique</h3>
                <div className='btn'>
                  <button>Book an appointment </button>
                </div>
            </div>
            {/*======== HERO COUNTER ======= */}
            <div className='experience'>
              <h2 className='text'>20+</h2>
              <hr/>
              <p className='para'>years experience</p>
            </div>
            <div className='hero-img'>
              <img src={WhiteBg} alt=''/>
            </div>
        </section>
      </main>
    </>
  </>
  )
}

export default Home
