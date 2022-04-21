import React, { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import KanjiService from '../service/KanjiService'

const Home = (): ReactElement => {
  const dispatch = useDispatch()
  return (
    <button
      className="btn"
      type="button"
      onClick={() => {
        KanjiService.dispatchable.getKanji(dispatch, {
          character: '味',
        })
      }}
    >
      Get Kanji Request
    </button>
  )
}

export default Home
