import { useEffect, useState } from "react";

const Card = ({input, data, repos}) => {
    return(
        <div className="card">
            <div className="img-div">
                <a target={'_blank'} href={`https://github.com/${input}`}><img src={data.avatar_url} alt="avatar"></img></a>
            </div>
            <div className="info-div">
                <h1>{data.login}</h1>
                <div className="follower-div">
                    <p>Followers: {data.followers}</p>
                    <p>Following: {data.following}</p>
                    <p>Repos: {data.public_repos}</p>
                </div>
                <div className="repos">
                    {repos.map(repo => {
                        return <a target={'_blank'} href={`https://github.com/${input}/${repo.name}`} key={repo.id}>{repo.name}</a>
                    })}
                    <a target={'_blank'} className='see-more' href={`https://github.com/${input}\?tab=repositories`} key={0}>See more</a>
                </div>
            </div>
        </div>
    )
}
export default Card;