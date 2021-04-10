import React, {useEffect, useState} from "react";
import {githubAPI} from "../../../api/api";

export const ReposBox = () => {
    const [repos, setRepos] = useState<any>()

    useEffect(() => {
        githubAPI.getReposByName().then(res => setRepos(res.items))
    }, [])

    return (
        <div>
            {repos
                ? <div>
                    {repos.map((obj: any) => (
                        <div className='repos-box'>
                            <h1>{obj.name}</h1>
                        </div>
                    ))}
                </div>
                : null
            }
        </div>
    )
}
