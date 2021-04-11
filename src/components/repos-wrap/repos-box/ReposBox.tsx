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
            <h3> {name}</h3>
            <h4>Owner: {ownerLogin}</h4>
            <h4><a href={url}>See at gitHub</a></h4>
        </div>
    )
}
