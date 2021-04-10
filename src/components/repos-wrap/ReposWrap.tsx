import React, {useEffect, useState} from "react";
import './style.scss'
import {githubAPI} from "../../api/api";
import {ReposBox} from "./repos-box/ReposBox";

export const ReposWrap = ({repos}: any) => {

    return (
        <div>
            <h4>Found {repos?.length} repositories </h4>
            <h5>Sorted by stars</h5>
            <div className='repos-wrap'>
                {repos
                    ?
                    repos.map((obj: any) => (
                        <ReposBox name={obj.name} ownerLogin={obj.owner.login} url={obj.clone_url}
                                  img={obj.owner.avatar_url}/>
                    ))
                    : null
                }
            </div>
        </div>

    )
}
