import React, {FC, useState} from "react";
import './style.scss'

type PropsType = {
    setInput: any
}

export const SearchBox: FC<PropsType> = ({setInput}) => {
    const [value, setValue] = useState()

    const onInputChange = (e: any) => {
        e.preventDefault()
        setValue(e.target.value.toLowerCase())
    }

    const find = () => {
        setInput(value)
    }

    return (
        <div className='wrap'>
            <input placeholder='Write name of repos'  onChange={onInputChange}/>
            <button onClick={find}>Find</button>
        </div>
    )
}
