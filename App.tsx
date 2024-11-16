import { themes } from '@/themes';
import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';

import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Input } from '@/components/Input';
import { Counter } from '@/components/Counter';
import { Task } from '@/components/Task';
import { EmptyListComponent } from '@/components/EmptyListComponent';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState(0)

  const [fontLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular
  })

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  function handleNewTask(newTask: string) {
    setTasks([...tasks, newTask])
  }

  function handleDeleteTask(task: string) {
    setTasks(tasks.filter(item => item !== task))
  }

  function handleCompleteTask(complete: boolean) {
    setTasksCompleted(
      complete ?
      tasksCompleted + 1 :
      tasksCompleted - 1
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.title}>
        <Image 
          source={require('./assets/images/Logo.png')}
        />
      </View>
      <View style={styles.taskContainer}>
          <Input addNewTask={handleNewTask}/>
        <View style={styles.counterContainer}>
          <Counter
            text='Criadas' 
            color={themes.colors.blue[300]} 
            value={tasks.length}
          />
          <Counter
            text='Concluídas' 
            color={themes.colors.purple[300]} 
            value={tasksCompleted}
          />
        </View>
        
        <FlatList
          style={{  width: '100%', paddingHorizontal: 24 }}
          data={tasks}
          renderItem={({item}) => 
            <Task
              value={item} 
              deleteTask={handleDeleteTask}
              completeTask={handleCompleteTask}
            />
          }
          keyExtractor={item => item}
          ListEmptyComponent={EmptyListComponent}
          scrollEnabled={(tasks.length > 0)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.gray[700],
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingVertical: 70,
    paddingHorizontal: 132,
  },
  taskContainer: {
    flex: 1,
    backgroundColor: themes.colors.gray[600],
    width: '100%',
    alignItems: 'center'
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 32,
    marginBottom: 20
  }
});
