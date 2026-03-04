import React from 'react';

const TaskStatus = ({ticket}) => {
    return (
        <div>
            <div className="card bg-base-100 card-md shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{ticket.title}</h2>
                    <button className="btn bg-[#02A53B]">Complete</button>

                </div>
            </div>
        </div>
    );
};

export default TaskStatus;