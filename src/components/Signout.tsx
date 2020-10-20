import React from 'react'

import { Auth } from 'aws-amplify'
import { useAppDispatch } from 'redux/store'
import { authSlice } from 'redux/authSlice'

export function SignOut() {
  const dispatch = useAppDispatch()
  return (
    <div>
      <button
        onClick={() => {
          dispatch(authSlice.actions.signOut({}))
          Auth.signOut()
        }}
      >
        Sign Out
      </button>
    </div>
  )
}
