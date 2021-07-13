import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import Head from '../head'
import Placeholder from './gitPlaceholder'

const LinkInList = props => {
  return (
    <Link to={`/${props.user}/${props.repo}`}>
      <div className='px-5 max-w-full px-6 py-2 hover:bg-indigo-800'>
        <a className='max-w-full overflow-x-hidden'>
          {props.repo}
        </a>
      </div>
    </Link>
  )
}

const GitReposList = () => {
  const { userName } = useParams()
  const [isLoading, setLoading] = useState(true)
  const [repos, setRepos] = useState([])

  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`)
      .then(data => data.data)
      .then(data => {
        setRepos(data.map(repo => <LinkInList key={repo.id} user={userName} repo={repo.name} />))
        setLoading(false)
      })
  }, [])

  return (
    <div className="max-w-screen-sm w-full bg-indigo-300 text-white font-bold border rounded-lg shadow-lg">
      <Head title="list of user's repositories" />
      <header id="header" className="text-xl text-left flex-wrap bg-indigo-600 font-bold rounded-lg border shadow-lg p-10">
        <Link to="/" id="go-back">%home%</Link>&nbsp;/&nbsp;
        <a id="repository-name">{userName}</a>
      </header>
      <main className="pt-2 pb-5 px-5">
        {isLoading ? <Placeholder /> : repos}
      </main>
    </div>
  )
}

GitReposList.propTypes = {}

export default GitReposList
