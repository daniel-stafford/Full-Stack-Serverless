import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { fetchCoins } from 'redux/cryptoSlice'
import { useAppDispatch } from 'redux/store'
import { RootState } from 'redux/types'
import { makeArray } from 'utils/helpers'

export function Coins() {
  const dispatch = useAppDispatch()
  const coins = useSelector((state: RootState) => state.crypto)
  const [limit, setLimit] = useState(10)

  function handleFetchCoins() {
    dispatch(fetchCoins({ limit }))
  }

  function updateLimit(input: number) {
    setLimit(input)
  }

  function renderCoins() {
    return makeArray(coins.data).map((coin) => {
      return <div key={coin.id}>{coin.name}</div>
    })
  }

  return (
    <React.Fragment>
      <h2>Coins (using Lambda Function and Rest API</h2>
      <div>
        <button
          style={{ width: '400px', fontSize: '20px' }}
          onClick={handleFetchCoins}
        >
          Get some coins
        </button>
      </div>

      <input
        style={{ width: '400px', fontSize: '20px' }}
        onChange={(e) => updateLimit(parseInt(e.target.value))}
        placeholder="Number of coins (default 10)"
      />
      {coins.isLoading ? <h3>Loading...</h3> : renderCoins()}
    </React.Fragment>
  )
}
