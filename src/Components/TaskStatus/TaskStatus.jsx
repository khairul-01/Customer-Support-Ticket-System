import React from 'react';
// import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const TaskStatus = ({ ticket, csRemove, removeData }) => {
    const handleRemove = () => {
        csRemove(ticket)
        removeData(ticket)
        // toast(`${ticket.id} Resolved successfully`)
        // Swal.fire(`${ticket.id} Resolved successfully`);
        Swal.fire({
            position: "top-end",
            text: `${ticket.id} Resolved successfully`,
            icon: "success"
        });
    }
    return (
        <div>
            <div className="card bg-base-100 card-md shadow-sm">
                <div className="card-body p-2">
                    <h2 className="card-title">{ticket.title}</h2>
                    <button onClick={handleRemove} className="btn bg-[#02A53B]">Complete</button>

                </div>
            </div>
        </div>
    );
};

export default TaskStatus;