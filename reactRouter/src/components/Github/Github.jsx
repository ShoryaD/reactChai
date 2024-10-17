import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/ShoryaD')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
    return (
      <div className='flex flex-col items-center justify-center m-4 text-black p-6 text-3xl'>
        <h1 className='mb-4'>Github Followers: {data.followers}</h1>
        
        <a href={data.html_url} target="_blank" rel="noopener noreferrer">
          <img 
            src={data.avatar_url} 
            alt="GitHub Profile" 
            width={300} 
            className="rounded-full border-4 border-white shadow-lg mb-4"
          />
        </a>

        <p className="text-xl">Click on the logo to visit my GitHub profile</p>
      </div>
    );
  }

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ShoryaD')
    return response.json()
}