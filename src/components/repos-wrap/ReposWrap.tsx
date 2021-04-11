import React from "react";
import './style.scss'
import {ReposBox} from "./repos-box/ReposBox";

export const ReposWrap = ({repos}: any) => {
    return (
        <div>
            <div className='repos-wrap'>
                {repos.map((obj: any) => (
                    <ReposBox name={obj.name} ownerLogin={obj.owner.login} url={obj.clone_url}
                              img={obj.owner.avatar_url}/>
                ))}
            </div>
        </div>

    )
}
