import { Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { useContext, useCallback, useRef, useState, useLayoutEffect } from 'react';
import { BitinUserContext } from '../context/bitinContext/BitinUserContext';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import Ionicons from '@expo/vector-icons/Ionicons';
import RegFormula from '../components/RegFormula';
import RegMedicamento from '../components/RegMedicamento';
import RegCita from '../components/RegCita';
import Reciever from '../components/Reciever';
import CardTogggleBotSheet from '../components/CardTogggleBotSheet';
import { useNavigation } from '@react-navigation/native';
import { BackgroundImage } from 'react-native-elements/dist/config';




const Agendar = () => {
  const navigation = useNavigation()
  const { BitinContext } = useContext(BitinUserContext)
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsopen] = useState(false);
  const snapPoints = ["50%", "80%"]
  const [isFormula, setIsFormula] = useState(false);
  const [isMedicamento, setIsMedicamento] = useState(false);
  const [isCita, setIsCita] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Agendemos',
      headerStyle: { backgroundColor: '#F400A2' },
      headerTitleStyle: { color: 'white' },
      headerLeft: () => (
        <View style={{ marginRight:"20%",marginLeft:5}}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
            <Ionicons style={{ alignSelf: "center" }} name="arrow-undo" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ), headerRight: () => (
        <View style={{display:"none"}}
        >
          <TouchableOpacity activeOpacity={0.5} >
          <Ionicons style={{ alignSelf: "center" }} name="arrow-undo" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    })
  }, [])


  const handleClose = () => sheetRef.current?.close()


  const handleBottomSheet = useCallback((index) => {
    sheetRef.current?.snapToIndex(index)
    setIsopen(true)
  }, [])

  const handleFormula = () => {
    setIsFormula(true)
    setIsMedicamento(false)
    setIsCita(false)
    handleClose()
  }

  const handleMedicamento = () => {
    setIsFormula(false)
    setIsMedicamento(true)
    setIsCita(false)
    handleClose()
  }
  const handleCita = () => {
    setIsFormula(false)
    setIsMedicamento(false)
    setIsCita(true)
    handleClose()
  }

  return (
    <ScrollView style={{ flex: 1, height: "100%" }}>
      <View style={{ height: "100%" }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}>
          <Reciever texto="¿Hola como estas?" />
          <Reciever texto={`¿Que podemos hacer por ti ${BitinContext.userName}?`} />
          <TouchableOpacity onPress={() => handleBottomSheet(0)}>
            <CardTogggleBotSheet username={BitinContext.userName} texto="presiona para seleccionar" />
          </TouchableOpacity>
          <View style={{ flex: 6, height: "100%" }}>
            {isFormula && <RegFormula setIsFormula={setIsFormula} />}
            {isMedicamento && <RegMedicamento  setIsMedicamento={setIsMedicamento} />}
            {isCita && <RegCita setIsCita={setIsCita} />}
          </View>

          <View style={{ marginBottom: "80%" }} ></View>

        </KeyboardAvoidingView>
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          style={{}}
          onClose={() => setIsopen(!isOpen)}
        >
          <BottomSheetView style={{ flex: 1, alignItems: "center", backgroundColor: "#F400A2", height: "100%" }}>
            <View style={{ width: "90%", height: "20%", flexDirection: "row" }}>
              <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                <Image
                  source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" }}
                  style={styles.avatarSender} />
              </View>
              <View style={{ flex: 8, backgroundColor: "gray" }}>
                <Text style={{ color: "white" }} > {BitinContext.userName} : </Text>
                <Text style={{ color: "white" }} > Quisiera </Text>
              </View>
            </View>
            <View style={{ flex: 1, width: "90%", borderTopWidth: 1, borderTopColor: "black", marginTop: 10 }}>
              <TouchableOpacity style={{ flexDirection: "row", borderColor: "black", borderWidth: 2, borderRadius: 50, marginTop: 10 }} onPress={handleFormula} >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <Ionicons name="receipt-outline" size={30} color="white" />
                </View>
                <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ color: "white" }}> Inscribir una nueva formula </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: "row", borderColor: "black", borderWidth: 2, borderRadius: 50, marginTop: 5 }} onPress={handleMedicamento}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <Ionicons name="eyedrop-outline" size={30} color="white" />
                </View>
                <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ color: "white" }}> Registrar un medicamento </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: "row", borderColor: "black", borderWidth: 2, borderRadius: 50, marginTop: 5 }} onPress={handleCita}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <Ionicons name="alarm-outline" size={30} color="white" />
                </View>
                <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ color: "white" }}> Agendar una cita </Text>
                </View>
              </TouchableOpacity>
            </View>
          </BottomSheetView>
        </BottomSheet>
      </View>
    </ScrollView>
  )
}

export default Agendar

const styles = StyleSheet.create({
  container: { flex: 1 },
  sender: {
    //padding: 15,
    backgroundColor: "#F400A2",
    //backgroundColor: "blue",
    alignSelf: "flex-start",
    borderRadius: 5,
    margin: 15,
    maxWidth: "80%",
    position: "relative",
    color: "white",
  },
  avatarSender: {
    width: 40,
    height: 40,
    borderRadius: 75,
  },
})