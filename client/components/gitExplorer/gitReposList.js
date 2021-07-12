import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import Head from '../head'
import Placeholder from './gitPlaceholder'

const GitReposList = () => {
  const { userName } = useParams()
  const [isLoading, setLoading] = useState(true)
  const [repos, setRepos] = useState([])

  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`)
    .then(data => data.data)
    .then(data=>{
      setRepos(data.map(repo => <div key={repo.id}><Link to={`/${userName}/${repo.name}`}>{repo.name}</Link> </div>))
      setLoading(false)
    })
  }, [])

  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="header">
            <a id="username">Username : {userName}</a>
            <Link to="/" id="goBack">Go back</Link><br/>
          </div>
          {isLoading && <Placeholder/>}
          {!isLoading && repos}
          

        </div>
      </div>
    </div>
  )
}

GitReposList.propTypes = {}

export default GitReposList
