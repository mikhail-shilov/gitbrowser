import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GitForm from './gitForm'
import GitReposList from './gitReposList'
import GitRepoInfo from './gitRepoInfo'
import NotFound from '../404'


const GitWrapper = () => {
  return (
    <div className="flex flex-initial flex-col items-center justify-center py-1 px-5	w-full bg-indigo-200 min-h-screen	">
        <Switch>
          <Route exact path="/" component={GitForm} />
          <Route exact path="/:userName" component={GitReposList} />
          <Route exact path="/:userName/:repositoryName" component={GitRepoInfo} />
          <Route component={NotFound} />
        </Switch>
    </div>
  )
}

GitWrapper.propTypes = {}

export default GitWrapper
