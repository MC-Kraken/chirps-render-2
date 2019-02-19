import React from 'react'

export default function Users(props) {

  const { name, email, password } = props.users;

  return (
    <>
      <ul>
        <li>Name: { name }</li>
        <li>Email: { email }</li>
        <li>Password: { password }</li>
      </ul>
    </>
  )
}