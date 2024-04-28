import React from 'react'

export default function UserProfile({ params }) {

    console.log(params.id, 'params');
  return (
    <div>{params.id}</div>
  )
}
