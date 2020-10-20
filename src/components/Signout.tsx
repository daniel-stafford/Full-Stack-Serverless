import React from 'react'

import { Auth } from 'aws-amplify'

export function Signout() {
  return (
    <div>
      <button
        onClick={() => {
          Auth.signOut()
        }}
      >
        Sign Out
      </button>
    </div>
  )
}
