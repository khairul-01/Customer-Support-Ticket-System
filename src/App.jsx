import { Suspense, useState } from "react"
import BannerSection from "./Components/Banner/BannerSection"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import TicketSection from "./Components/TicketSection/TicketSection"
import { toast, ToastContainer } from 'react-toastify';

const csTicketsData = fetch('/TicketProblems.json').then(res => res.json())

function App() {
  const [selectedTickets, setSelectedTickets] = useState([])
  const [resolveTickets, setResolvedTickets] = useState([])
  const ticketSelection = (ticket) => {
    // console.log("Data Selected",ticket.id)
    setSelectedTickets([...selectedTickets, ticket])
    toast(`${ticket.id} has been selected`)
  }
  const csRemove = (ticket) => {
    console.log("complete button clicked")
    const servTickets = selectedTickets.filter(cs => cs.id !== ticket.id)
    setSelectedTickets(servTickets)
    setResolvedTickets([...resolveTickets, ticket])
  }
  return (
    <>

      <div className="max-w-7xl mx-auto px-4 py-1 space-y-12">
        <Navbar></Navbar>
        <BannerSection selectedTickets={selectedTickets} resolveTickets={resolveTickets}></BannerSection>
        <Suspense fallback={<p className="text-center">Ticket Problem Data are Loading .... <span className="loading loading-spinner text-warning"></span> </p>}>
          <TicketSection ticketSelection={ticketSelection}
            selectedTickets={selectedTickets}
            csRemove={csRemove}
            csTicketsData={csTicketsData}
            resolveTickets={resolveTickets}
          >
          </TicketSection>
        </Suspense>
        <Footer></Footer>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
