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
        height: '90vh',
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
