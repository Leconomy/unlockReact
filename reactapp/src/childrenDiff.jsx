import React, {useState} from 'react'

function List() {
  const [count, setCount] = useState(0)
  let ul = (
    <ul>
      <li key="0">0</li>
      <li key="1">1</li>
      <li key="2">2</li>
      <li key="3">3</li>
      <li key="4">4</li>
      <li key="5">5</li>
    </ul>
  )
  let newUl = (
    <ul>
      <li key="0">0</li>
      <li key="2">2</li>
      <li key="1">1</li>
      <li key="3">3</li>
      <li key="5">5</li>
      <li key="4">4</li>
    </ul>
  )

  return (
    <>
      <button
        onClick={() => {
          setCount(1)
        }}
      >
        点击
      </button>
      {count ? newUl : ul}
    </>
  )
}
export default List