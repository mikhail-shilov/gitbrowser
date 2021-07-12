import React, { useState } from 'react'
import { history } from '../../redux';
import Head from '../head'

const GitFinder = () => {
  const [inputData, setInputData] = useState('');
  const inputHandler = e => {
    setInputData(e.target.value)
  }

  const buttonHandler = () => {
    history.push(inputData)
  }


  return (
    <div>
      <Head title="GitHub explorer!" />
      <div className="flex items-center justify-center h-screen">


        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
        <input
        type='text'
        autoComplete="off"
        id='input-field'
        value={inputData}
        onChange={inputHandler}
        placeholder="Enter %username%"
         />
        <button type='button' id="search-button" onClick={buttonHandler}>Go</button>
        </div>
      </div>
    </div>
  )
}

GitFinder.propTypes = {}

export default GitFinder
