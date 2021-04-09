import React from "react";
import './style.scss'

export const SearchBox = () => {
    return (
        <div className='wrap'>
            <input placeholder='Write name of repos' />
            <button>Find</button>
        </div>
    )
}
