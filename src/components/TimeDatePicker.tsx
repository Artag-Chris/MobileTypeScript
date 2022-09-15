import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const TimeDatePicker = (props:any) => {
  return (
    <DateTimePickerModal
        isVisible={props.open||props.open2}
        mode={props.mode}
        onConfirm={(time) => props.setTime(time)}
        onCancel={() => props.setOpen(false)||props.setOpen2(false)}
      />
  )
}

export default TimeDatePicker