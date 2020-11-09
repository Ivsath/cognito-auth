import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify'

const protectedRoute = (Comp, route = '/profile') => (props) => {
  useEffect(() => {
    checkAuthState()
  }, [])

  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser()
    } catch (err) {
      props.history.push(route)
    }
  }

  return <Comp {...props} />
}

export default protectedRoute
