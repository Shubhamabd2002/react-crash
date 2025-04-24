import React from 'react'

const PropTest = ({data}) => {
  console.log("🚀 ~ PropTest ~ props:", data)
  return (
    <>
    <div>{data.name}</div>
    <div>{data.email}</div>
    <div>{data.age}</div>
    <div>{data.address.city}</div>
    </>
  )
}

export default PropTest