import { FlatList, ListRenderItem, Text, TouchableOpacity, View } from "react-native";
import { Formula, Medicamento } from "../interfaces/interfaces";

const renderItem: ListRenderItem<Medicamento> = ({ item }) => <Item2 data={item} />;

const Item2 = ({ data }: { data: Medicamento }) => {
    return (
        <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{flex:1 }}>
                <Text>{data.nombreMedicamento}</Text>
            </View>
            <View style={{flex:1 }}>
            <Text style={{}}>{data.dosis} </Text>
            </View>
        </View>
    );

}


export const Item = ({ data }: { data: Formula }) => (
    <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 20, flex: 1 }} >
        <View style={{ width: "90%", flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "#F400A2" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>{data.nombreFormula}</Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>{data.fechaVenceFormula}</Text>

        </View>
        <View style={{ width: "90%", borderColor: "black", borderWidth: 3 }}>
            <FlatList
                data={data.medicamentos}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item: Medicamento) => item.nombreMedicamento}

            />
        </View>
    </View>
);

{/** ( item ) => (
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-evenly"}}>
                    <View style={{ justifyContent: "center",flex:6,alignItems:"center" }}>
                        <Text style={{ justifyContent: "center", alignItems: "center" }}>{item.nombreMedicamento}</Text>
                    </View>
                    <View style={{ justifyContent: "center",flex:6,alignItems:"center" }}>
                        <Text style={{ fontSize:15,fontWeight:"600"}}>{item.fechaVenceMedicamento}</Text>
                    </View>
                </View>
            ) */}