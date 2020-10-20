import React, { useEffect } from 'react'
import {
  AmplifyAuthenticator,
  AmplifyContainer,
  AmplifySignIn,
  AmplifySignUp,
} from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from 'pages/Home'
import { useAppDispatch } from 'redux/store'
import { authSlice } from 'redux/authSlice'
import { RootState } from 'redux/types'
import { useSelector } from 'react-redux'
import 'app.css'

const signInFields = [
  {
    type: 'email',
    label: 'Email',
    placeholder: 'Please enter your Email',
    required: true,
  },
  {
    type: 'password',
    label: 'Password',
    placeholder: 'Please enter your Password',
    required: true,
  },
]
const signUpFields = [
  {
    type: 'email',
    label: 'Email',
    placeholder: 'Please enter your Email',
    required: true,
  },
  {
    type: 'password',
    label: 'Password',
    placeholder: 'Please enter your Password',
    required: true,
  },
]

export function App() {
  const dispatch = useAppDispatch()
  const { auth, user } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      dispatch(authSlice.actions.addAuthStatus(nextAuthState))
      authData && dispatch(authSlice.actions.addUser(authData))
    })
  }, [dispatch])

  return auth === AuthState.SignedIn && user ? (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  ) : (
    <AmplifyContainer>
      <AmplifyAuthenticator usernameAlias="email" style={{ marginTop: '50vh' }}>
        <AmplifySignUp
          headerText="Create an email (feel free to use a temporary email)"
          slot="sign-up"
          usernameAlias="email"
          formFields={signUpFields}
        ></AmplifySignUp>
        <AmplifySignIn
          headerText="Log in to fiddle with Amplify"
          slot="sign-in"
          usernameAlias="email"
          formFields={signInFields}
        ></AmplifySignIn>
      </AmplifyAuthenticator>
    </AmplifyContainer>
  )
}
