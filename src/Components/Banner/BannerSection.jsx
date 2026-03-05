import React from 'react';
import vector1 from '../../assets/vector1.png'
// import vector2 from '../../assets/vector2.png'

const BannerSection = ({selectedTickets, resolveTickets}) => {
    // console.log(selectedTickets)
    return (
        <div className='flex flex-col md:flex-row gap-3 md:gap-6'>
            <div className='md:w-1/2 h-52 flex justify-center items-center'
                style={{
                    backgroundImage: `url(${vector1}), linear-gradient(to right, #632EE3, #9F62F2)`,

                }}
            >
                <div className='text-center'>
                    <h3 className='text-2xl'>In-Progress</h3>
                    <h1 className='text-5xl font-semibold mt-2'>{selectedTickets.length}</h1>
                </div>
            </div>
            <div className='md:w-1/2 h-52 flex justify-center items-center'
                style={{
                    backgroundImage: `url(${vector1}), linear-gradient(to right, #54CF68, #00827A)`,
                }}
            >
                <div className='text-center'>
                    <h3 className='text-2xl'>Resolved</h3>
                    <h1 className='text-5xl font-semibold mt-2'>{resolveTickets.length}</h1>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;