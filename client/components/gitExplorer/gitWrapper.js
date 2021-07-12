import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Head from '../head'
import GitForm from './gitForm'
import GitReposList from './gitReposList'
import GitRepoInfo from './gitRepoInfo'
import NotFound from '../404'


const GitWrapper = () => {
  return (
    <div className="container w-full">
      <Head title="GitHub explorer!" />
      <div className="flex items-center w-full justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 w-full text-white max-width font-bold rounded-lg border shadow-lg p-10">
        <Switch>
          <Route exact path="/" component={GitForm} />
          <Route exact path="/:userName" component={GitReposList} />
          <Route exact path="/:userName/:repositoryName" component={GitRepoInfo} />
          <Route component={NotFound} />
        </Switch>
        </div>
      </div>
    </div>
  )
}

GitWrapper.propTypes = {}

export default GitWrapper
