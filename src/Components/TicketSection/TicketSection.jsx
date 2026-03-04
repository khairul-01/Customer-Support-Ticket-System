import React, { use } from 'react';
import CsTicket from '../CsTicket/CsTicket';
import TaskStatus from '../TaskStatus/TaskStatus';

const TicketSection = ({ csTicketsData, ticketSelection, selectedTickets }) => {
    const ticketData = use(csTicketsData)
    return (
        <div className='flex'>
            <div className='w-3/4'>
                <h1 className='text-2xl font-semibold mb-3'>Customer Tickets</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {/* card */}
                    {
                        ticketData.map(ticket => <CsTicket key={ticket.id} ticket={ticket} ticketSelection={ticketSelection}></CsTicket>)
                    }
                </div>
            </div>
            <div className='w-1/4'>
                <h1 className='text-2xl font-semibold mb-3'>Task Status</h1>
                <div>
                    {
                        selectedTickets.map(ticket => <TaskStatus key={ticket.id} ticket={ticket}></TaskStatus>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TicketSection;