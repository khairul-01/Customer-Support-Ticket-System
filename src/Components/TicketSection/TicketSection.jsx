import React, { use } from 'react';
import CsTicket from '../CsTicket/CsTicket';
import TaskStatus from '../TaskStatus/TaskStatus';

const TicketSection = ({ csTicketsData, ticketSelection, selectedTickets }) => {
    const ticketData = use(csTicketsData)
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