import React from 'react'

import { Coins } from 'components/Coins'
import { Notes } from 'components/Notes'
import { Todo } from 'components/Todo'
import { Signout } from 'components/Signout'

export function Home() {
  return (
    <React.Fragment>
      <Todo />
      <Notes />
      <Coins />
      <Signout />
    </React.Fragment>
  )
}
