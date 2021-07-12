import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Markdown from 'markdown-to-jsx'
import { Link, useParams } from 'react-router-dom'

import Head from '../head'
import Placeholder from './gitPlaceholder'

const GitRepoInfo = () => {
  const { userName, repositoryName } = useParams()
  const [isLoading, setLoading] = useState(true)
  const [readmeData, setReadmeData] = useState({})
  const [readmeText, setReadmeText] = useState('')

  useEffect(() => {
      axios.get(`https://api.github.com/repos/${userName}/${repositoryName}/readme`).then(data => data.data)
      .then(readmeRequest => {
        setReadmeData(readmeRequest)
        axios.get(readmeRequest.download_url).then(data => data.data).then(readmeRaw => {
          setReadmeText(readmeRaw)
          setLoading(false)
        })
      })
  }, [])

  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">

        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
        <div id="header">
            <a id="username">Username : {userName}</a>
            <a id="repository">Repository : {repositoryName}</a>
            <Link to="/" id="goBack">Go back</Link><br/>
            <Link to={`/${userName}`} id="goToUsername">Go to {userName} repository list.</Link><br/>
        </div>
          This is text about repo {repositoryName} of {userName}.
          <div id="description">
            {isLoading ? <Placeholder/> : <Markdown>{readmeText}</Markdown>}
            {`It's: ${readmeData}`}
          </div>
        </div>
      </div>
    </div>
  )
}

GitRepoInfo.propTypes = {}

export default GitRepoInfo
