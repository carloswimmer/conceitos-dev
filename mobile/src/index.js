import React, { useEffect, useState, Children } from 'react'
import {
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native'

import api from './services/api'

export default function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: 'Wimmer'
    })

    setProjects([...projects, response.data])
  }

  async function handleDeleteProject(id) {
    await api.delete(`projects/${id}`)

    const result = projects.filter(proj => proj.id !== id)

    setProjects(result)
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#7159c1"
      />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <>
              <View style={styles.itemList}>
                <Text style={styles.project}>
                  {project.title}
                </Text>
                <TouchableOpacity
                  style={styles.buttonDelete}
                  activeOpacity={0.6}
                  onPress={() => handleDeleteProject(project.id)}
                >
                  <Text style={styles.textDelete}>Del</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        />
        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.6}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },

  project: {
    color: '#fff',
    fontSize: 25,
    width: '70%'
  },

  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#53a'
  },

  textDelete: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#eb4656'
  },

  buttonDelete: {
    width: 75,
    height: 50,
    borderWidth: 2,
    borderColor: '#eb4656',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },

  itemList: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  }
})