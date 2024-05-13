import Navbar from "../Components/Navbar"
import Router from "../Routes/Router"
import Footer from '../Components/Footer/Footer'


function Layout() {
    return (
        <>
            <Navbar />
            <main>
                <Router />
            </main>
            <Footer />
        </>
    )
}

export default Layout
