import { Suspense, useState } from "react"
import BannerSection from "./Components/Banner/BannerSection"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import TicketSection from "./Components/TicketSection/TicketSection"

const csTicketsData = fetch('/TicketProblems.json').then(res => res.json())

function App() {
  const [selectedTickets, setSelectedTickets] = useState([])
  const ticketSelection = (ticket) => {
    // console.log("Data Selected",ticket.id)
    setSelectedTickets([...selectedTickets, ticket])
  } 
  return (
    <>

      <div className="max-w-7xl mx-auto px-4 py-1 space-y-12">
        <Navbar></Navbar>
        <BannerSection></BannerSection>
        <Suspense fallback={<p className="text-center">Ticket Problem Data are Loading .... <span className="loading loading-spinner text-warning"></span> </p>}>
          <TicketSection ticketSelection={ticketSelection}
          selectedTickets={selectedTickets}
          csTicketsData={csTicketsData}>
          </TicketSection>
        </Suspense>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
