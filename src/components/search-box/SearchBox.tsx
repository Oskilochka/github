import React, {FC, useState} from "react";
import './style.scss'

type PropsType = {
    setInput: (value: any) => void
}

export const SearchBox: FC<PropsType> = ({setInput}) => {
    let [value, setValue] = useState()

    const onInputChange = (e: any) => {
        e.preventDefault()
        setValue(e.target.value.toLowerCase())
    }

    const find = () => {
        value && setInput(value)
    }

    return (
        <div className='search'>
            <input placeholder='Write name of repos' value={value} onChange={onInputChange} className='search_input'/>
            <button onClick={find} className='search_btn' data-testid='search-button'>Find</button>
        </div>
    )
}
