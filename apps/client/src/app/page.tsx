'use client'

export default function Home() {
  // for the new way of api routing /api/hello
  const makeApiCall = async () => {
    await fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify({ hello: 'world' }),
    })
  }

  // for old of api routing  /api/example
  // const makeApiCall = async () => {
  //   await fetch('/api/example', {
  //     method: 'POST',
  //     body: JSON.stringify({ hello: 'world' }),
  //   })
  // }

  return <button onClick={makeApiCall}>make call</button>
}