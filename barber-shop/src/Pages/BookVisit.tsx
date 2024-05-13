import './Visit.css';
import BookImage from '../assets/BookImage.jpeg'
const Visit = () => {
  return (
    <section className="vist" id="visit">
        <h1 className="heading">book appointment</h1>
        <div className="row">
            <form action="/visit" method="POST">
                <h3>book your first visit today</h3>
                <div className="inputBox">
                    <label htmlFor="fname">first name</label>
                    <input type="text" name="fame" placeholder="Enter your name" required />
                </div>
                <div className="inputBox">
                    <label htmlFor="lname">last name</label>
                    <input type="text" name="lame" placeholder="Enter your name" required />
                </div>
                <div className="inputBox">
                    <label htmlFor="phoneNumber">phone number</label>
                    <input type="number" name="phoneNumber" placeholder="Enter your phone number" />
                </div>
                <div className="inputBox">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="inputBox">
                    <label htmlFor="message">message</label>
                    <textarea id="text" name="message" rows={4} cols={50} />
                </div>
                <input type="submit" value={'Send a Message '} className="btn"/>
            </form>
            <div className="image">
                <img src={BookImage} alt=""/>
            </div>
        </div>
    </section>
  )
}

export default Visit
