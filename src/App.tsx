import React from 'react'

import { Todo } from 'components/Todo'
import { Notes } from 'components/Notes'
import { Coins } from 'components/Coins'

export function App() {
  return (
    <div>
      <Todo />
      <Notes />
      <Coins />
    </div>
  )
}
