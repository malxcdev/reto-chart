import React from 'react'
import chartImg from '../assets/images/logo.svg'
function Resume() {
    return (
        <article className='bg-soft-red rounded-xl p-6 flex justify-between items-center text-white'>
            <div>
                <h1 className='text-lg'>My balance</h1>
                <p className='text-3xl font-bold'>$921.48</p>
            </div>
            <figure>
                <img src={chartImg} alt="" />
            </figure>
        </article>
    )
}

export default Resume