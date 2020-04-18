import React from 'react'

import Header from './components/Header'

function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Main</li>
          <li>Login</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>Overview</li>
          <li>Portfolio</li>
        </ul>
      </Header>
    </>
  )
}

export default App