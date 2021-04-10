import React, {FC} from "react";

type PropsType = {
    name: string,
    url: string,
    ownerLogin: string,
    img: string
}

export const ReposBox: FC<PropsType> = ({name, ownerLogin, url, img}) => {

    return (
        <div className='repos-box'>
            <img src={img} className='owner-img'/>
            <h1>{name}</h1>
            <h1>{ownerLogin}</h1>
            <h3> <a href={url}>See at gitHub</a> </h3>
        </div>
    )
}
