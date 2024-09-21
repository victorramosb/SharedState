import { useState } from 'react'
import { View, Text, ActivityIndicator, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useAppContext } from '../AppProvider'

const ComponentA = ({ navigation }) => {
    const { container, horizontal, square, title, subtitle, itemsContainer, input, button } = styles
    
    const { mainSharedState, mainDispatch,
            sideSharedState, sideDispatch  } = useAppContext()

    const [ text, setText ] = useState(null)

    // console.log('mainSharedState: ', mainSharedState)

    return (
        <View style={container}>
            <View style={horizontal}>
                <Text style={title}>Componente A</Text>
                
                <TouchableOpacity onPress={() => { navigation.navigate('ChildB') }}>
                    <Text style={button}>Ir a B</Text>
                </TouchableOpacity>
            </View>

            <View style={horizontal}>
                <Text style={subtitle}>Solo el Coponente A puede escribir en el mainSharedState</Text>
                <Text style={subtitle}>Ambos Coponentes pueden leer los estados compartidos</Text>
            </View>

            <View style={{ ...horizontal, flex: 3 }}>
                <View style={square}>
                    <Text style={subtitle}>Elementos del estado compartido mainSharedState:</Text>

                    <View style={itemsContainer}>
                        { mainSharedState.loading ? <ActivityIndicator size='large' color='#0000ff' /> :
                            mainSharedState.data.map((item, index) => {
                                return <Text key={index}>{item}</Text>
                            })
                        }
                    </View>
                </View>

                <View style={{...square, backgroundColor: '#aaa'}}>
                    <Text style={subtitle}>Elementos del estado compartido sideSharedState:</Text>
                    <View style={itemsContainer}>
                        { sideSharedState.loading ? <ActivityIndicator size='large' color='#0000ff' /> :
                            sideSharedState.data.map((item, index) => {
                                return <Text key={index}>{item}</Text>
                            })
                        }
                    </View>
                </View>
            </View>

            <View style={{...horizontal, flexDirection: 'column' }}>
                <TextInput
                    style={input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Escribe algo para agregar a mainSharedState'
                    value={text}
                    onChangeText={input => { setText(input) }}
                />

                <TouchableOpacity onPress={() => {
                    mainDispatch({ type: 'ADD_TEXT', payload: text })
                }}>
                    <Text style={button}>Agregar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    horizontal: {
        flex: 1,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    square: {
        flex: 1,
    },
    title: {
        fontSize: 30
    },
    subtitle: {
        flex: 1,
        padding: 10,
    },
    itemsContainer: {
        flex: 3
    },
    input: {
        borderWidth: 1,
        padding: 5,
        paddingRight: 10
    },
    button: {
        alignSelf: 'center',

        paddingLeft: 5,
        paddingRight: 5,

        borderColor: 'black',
        borderWidth:1,
        
        marginBottom: 10,

        backgroundColor: '#a0a0ff',
        fontSize: 18
    },
})

export default ComponentA
