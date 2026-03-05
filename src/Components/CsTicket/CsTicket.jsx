import React from 'react';

const CsTicket = ({ticket, ticketSelection}) => {
    // console.log(ticket)
    const handleTicketSelection = () => {
        ticketSelection(ticket)
    }
    return (
        <div>
            <div onClick={handleTicketSelection} className="card bg-base-100 hover:bg-indigo-500 active:bg-violet-700 shadow-sm">
                <div className="card-body p-2 sm:p-3">
                    <div className='flex flex-col sm:flex-row justify-between'>
                        <h2 className="card-title">{ticket.title}</h2>
                        <div className={`badge ${ticket.status==="Pending"?'badge-accent':'badge-warning'} `}><i className={`fa-solid fa-circle ${ticket.status==="Pending"?'text-green-800':'text-yellow-800'}`}></i>{ticket.status} </div>
                    </div>
                    <p>{ticket.description}</p>
                    <div className="flex flex-col sm:flex-row justify-between">
                        <div className='flex gap-2'>
                            <span>{ticket.id}</span>
                            <span className='uppercase'>{ticket.priority} Priority</span>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-2'>
                            <span>{ticket.customer}</span>
                            <div><i className="fa-regular fa-calendar"></i>{ticket.createdAt}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CsTicket;