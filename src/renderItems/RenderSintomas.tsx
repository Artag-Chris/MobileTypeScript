import { Text, TouchableOpacity, View } from "react-native"
import { Card } from "react-native-paper"


export const renderSintomas = (item: any) => {
    return (
        <View style={{ marginRight: 20, marginTop: 30 }}>
            <TouchableOpacity style={{}}>
                <View style={{}}>
                    <Card style={{}}>
                        <Card.Content style={{}}>
                            <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                
                                <Text>{item.nombreMedicamento}  </Text>
                                <View style={{ alignItems: "center" }}>
                                    <Text>Hora</Text>
                                    <Text>{item.intensidad}</Text>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
            </TouchableOpacity>
        </View>
    )
}