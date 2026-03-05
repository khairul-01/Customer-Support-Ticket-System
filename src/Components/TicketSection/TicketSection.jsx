import React, { use, useEffect, useState } from 'react';
import CsTicket from '../CsTicket/CsTicket';
import TaskStatus from '../TaskStatus/TaskStatus';

const TicketSection = ({ csTicketsData, ticketSelection, selectedTickets, csRemove, resolveTickets }) => {
    const csticketData = use(csTicketsData)
    const [ticketData, setTicketData] = useState([])
    useEffect(() => {
        setTicketData(csticketData)
    }, [csticketData])

    const removeData = (ticket) => {
        const remaingTickets = ticketData.filter(tck => tck.id !== ticket.id)
        setTicketData(remaingTickets)
    }

    return (
        <div className='flex flex-col sm:flex-row'>
            <div className='sm:w-2/3 md:w-3/4'>
                <h1 className='text-2xl font-semibold mb-3'>Customer Tickets</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-3'>
                    {/* card */}
                    {
                        ticketData.map(ticket => <CsTicket key={ticket.id} ticket={ticket} ticketSelection={ticketSelection}></CsTicket>)
                    }
                </div>
            </div>
            <div className='sm:w-1/3 md:w-1/4'>
                <div>
                    <h1 className='text-2xl font-semibold mb-3'>Task Status</h1>
                    <div>
                        {
                            selectedTickets.length ?
                                selectedTickets.map(ticket => <TaskStatus key={ticket.id} ticket={ticket} csRemove={csRemove} removeData={removeData}></TaskStatus>)
                                :
                                <p>Select a ticket to add to Task Status</p>
                        }


                    </div>
                </div>
                <div className='mt-5'>
                    <h1 className='text-2xl font-semibold mb-3'>Resolved Task</h1>
                    <div>
                        {
                            resolveTickets.length ?
                                resolveTickets.map(ticket => <div key={ticket.id} className="card bg-base-100 shadow-sm">
                                    <div className="card-body p-2">
                                        <h2 className="card-title">{ticket.title}</h2>
                                    </div>
                                </div>)
                                :
                                <p>No Resolved task yet</p>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketSection;