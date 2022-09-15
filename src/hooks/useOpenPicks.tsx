import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const useOpenPicks = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [open2, setOpen2] = useState<boolean>(false)
    const [open3, setOpen3] = useState<boolean>(false)
    const [open4, setOpen4] = useState<boolean>(false)
  return{ open, setOpen, open2, setOpen2, open3, setOpen3, open4, setOpen4}
}

export default useOpenPicks

