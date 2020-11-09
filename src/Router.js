import { useState, useEffect } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Public from './sections/Public'
import Profile from './sections/Profile'
import Protected from './sections/Protected'

const Router = () => {
  const [current, setCurrent] = useState('home')

  useEffect(() => {
    setRoute()
    window.addEventListener('hashchange', setRoute)
    return () => window.removeEventListener('hashchange', setRoute)
  }, [])

  function setRoute() {
    const location = window.location.href.split('/')
    const pathname = location[location.length - 1]
    setCurrent(pathname ? pathname : 'home')
  }

  return (
    <HashRouter>
      <Nav current={current} />
      <Switch>
        <Route exact path="/" component={Public} />
        <Route exact path="/protected" component={Protected} />
        <Route exact path="/profile" component={Profile} />
        <Route component={Public} />{' '}
      </Switch>{' '}
    </HashRouter>
  )
}

export default Router
