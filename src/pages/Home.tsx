import React from 'react'

import { Coins } from 'components/Coins'
import { Notes } from 'components/Notes'
import { Todo } from 'components/Todo'
import { SignOut } from 'components/Signout'

export function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '95vh',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <div>
        <Todo />
        <Notes />
        <Coins />
      </div>
      <SignOut />
    </div>
  )
}
