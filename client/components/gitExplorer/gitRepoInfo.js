import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Markdown from 'markdown-to-jsx'
import { Link, useParams } from 'react-router-dom'

import Head from '../head'
import Placeholder from './gitPlaceholder'

const GitRepoInfo = () => {
  const { userName, repositoryName } = useParams()
  const [isLoading, setLoading] = useState(true)
  const [readmeText, setReadmeText] = useState('')

  useEffect(() => {
    axios.get(`https://api.github.com/repos/${userName}/${repositoryName}/readme`).then(data => data.data)
      .then(readmeRequest => {
        axios.get(readmeRequest.download_url).then(data => data.data).then(readmeRaw => {
          setReadmeText(readmeRaw)
          setLoading(false)
        })
      })
  }, [])

  return (
    <div className="max-w-screen-sm w-full bg-indigo-300 text-white font-bold border rounded-lg shadow-lg">
      <Head title="README of repo" />
      <header id="header" className="text-xl text-left flex-wrap bg-indigo-600 font-bold rounded-lg border shadow-lg p-10">
        <Link to="/" id="go-back">%home%</Link>&nbsp;/&nbsp;
        <Link to={`/${userName}`} id="go-repository-list">{userName}</Link>&nbsp;/&nbsp;
         <a id="repository-name">{repositoryName}</a>
      </header>
      <main className="py-5 px-10 overflow-x-auto">
        <div id="description">
          {isLoading ? <Placeholder /> : <Markdown>{readmeText}</Markdown>}
        </div>
      </main>
    </div>
  )
}

GitRepoInfo.propTypes = {}

export default GitRepoInfo
