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
    <div className="inline-flex max-w-screen-sm w-full gap-5 justify-center flex-wrap bg-indigo-600 font-bold rounded-lg border shadow-lg p-10">
      <Head title="GitHub explorer!" />
      <input
        type='text'
        className='flex-grow rounded-lg px-2'
        autoComplete="off"
        id='input-field'
        value={inputData}
        onChange={inputHandler}
        placeholder="Enter %username%"
      />
      <button
        type='button'
        className="px-4 rounded-lg border text-white hover:bg-yellow-500"
        id="search-button"
        onClick={buttonHandler}
      >Go</button>
    </div>
  )
}

GitFinder.propTypes = {}

export default GitFinder
