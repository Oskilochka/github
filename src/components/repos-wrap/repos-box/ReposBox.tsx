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
            <img src={img} className='repos-box_img'/>
            <h3 className='repos-box_name'> {name}</h3>
            <h4><span className='repos-box_owner'>Owner</span>: {ownerLogin}</h4>
            <h4><a href={url} className='repos-box_link'>See at gitHub</a></h4>
        </div>
    )
}
