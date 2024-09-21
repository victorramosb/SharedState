import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ComponentA from './src/components/ComponentA'
import ComponentB from './src/components/ComponentB'
import { AppProvider } from './src/AppProvider'

const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <AppProvider>
            <NavigationContainer>    
                <Stack.Navigator>
                    <Stack.Screen name="ChildA" component={ComponentA} />
                    <Stack.Screen name="ChildB" component={ComponentB} />
                </Stack.Navigator>
            </NavigationContainer>
        </AppProvider>
    )
}

export default App