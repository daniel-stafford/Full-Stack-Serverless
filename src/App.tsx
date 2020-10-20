import React, { useEffect } from 'react'
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
} from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from 'pages/Home'
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
  const [authState, setAuthState] = React.useState<AuthState>()
  const [user, setUser] = React.useState<object | undefined>()

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState)
      setUser(authData)
    })
  }, [])

  return authState === AuthState.SignedIn && user ? (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  ) : (
    <AmplifyAuthenticator usernameAlias="email">
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
  )
}
