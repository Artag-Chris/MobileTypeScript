
import { Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";




export const renderItem = (item: any) => {
    return (
        <View style={{ marginRight: 20, marginTop: 30 }}>
            <TouchableOpacity style={{}}>
                <View style={{}}>
                    <Card style={{}}>
                        <Card.Content style={{}}>
                            <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <Text>Nombre Sintoma</Text>
                                
                                <View style={{ backgroundColor: "red", alignItems: "center" }}>
                                    <Text>Sintoma</Text>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
            </TouchableOpacity>
        </View>
    )
}

