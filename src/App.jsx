import BannerSection from "./Components/Banner/BannerSection"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"


function App() {

  return (
    <>

      <div className="max-w-7xl mx-auto px-4 py-1 space-y-12">
        <Navbar></Navbar>
        <BannerSection></BannerSection>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
