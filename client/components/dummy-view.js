import React from 'react'
import Head from './head'

const Dummy = () => {
  return (
    <div>
      <Head title="This is GitHub explorer!" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          This is dummy component 12345
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
