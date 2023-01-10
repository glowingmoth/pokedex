import React from 'react'
import {useParams} from 'react-router-dom'

export default function Test1 () {
  let id = useParams()
  console.log("In Test1 with pokemon id: ", id)
  return <div>Test 1!</div>
}
