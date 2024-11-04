import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const datta = useLoaderData()
    // const [datta, setData] = useState([]);

    // useEffect(() => {
        

    //     fetch("https://api.github.com/users/vikasshkeen563")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

  return (
    <div    className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
      GitHub followers: {datta.followers}
      <img  src={datta.avatar_url} alt="Gitpicture" width={300} />
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/vikasshkeen563")
    return response.json();
}
