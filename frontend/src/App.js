import React, { useState } from 'react'

import './App.css'

import Header from './components/Header'
import backgroundImage from './assets/background.jpeg'

function App() {
  const [projects, setProjects] = useState([
    'Desenvolvimento de App',
    'Front-end Web'
  ])

  function handleAddProject() {
    setProjects([...projects, `Novo Projeto ${Date.now()}`])
  }

  return (
    <>
      <Header title="Projects" />
      <img width={300} src={backgroundImage} alt="Praia com Gelo"/>
      <ul>
        {projects.map(project => <li key={project} >{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  )
}

export default App