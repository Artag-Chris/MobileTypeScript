import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Dialog, Button, CheckBox, Avatar } from 'react-native-elements';

const DialogOptions = (props:any) => {
    const [checked, setChecked] = useState(1);
    return (
        <View>
            <Dialog
                isVisible={props.open}
                onBackdropPress={()=>props.setOpen(false)}
            >
                <Dialog.Title title="Usar Medicamentos Registrados?" />
                {['Si', 'No'].map((l, i) => (
                    <CheckBox
                        key={i}
                        title={l}
                        containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={checked === i + 1}
                        onPress={() => setChecked(i + 1)}
                    />
                ))}

                <Dialog.Actions>
                    <Dialog.Button
                        title="CONFIRM"
                        onPress={() => {
                            console.log(`Option ${checked} was selected!`);
                            props.setOpcion(checked)
                            props.setOpen(false);
                            props.setSeleccionpath(1)
                        }}
                    />
                    <Dialog.Button title="CANCEL"  onPress={()=>props.setOpen(false)}  />
                </Dialog.Actions>
            </Dialog>
        </View>
    )
}

export default DialogOptions

const styles = StyleSheet.create({})