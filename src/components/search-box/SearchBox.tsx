import React, {FC} from "react";
import './style.scss'

type PropsType = {
    setInput: any
}

export const SearchBox: FC<PropsType> = ({setInput}) => {
    const onInputChange = (e: any) => {
        e.preventDefault()
        setInput(e.target.value.toLowerCase())
    }

    return (
        <div className='wrap'>
            <input placeholder='Write name of repos' onChange={onInputChange}/>
        </div>
    )
}
