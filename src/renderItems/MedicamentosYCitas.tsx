import { FlatList, Text, View } from "react-native";
import { MedicamentosYCitas } from "../interfaces/interfaces";
import Medicamentos from '../screens/Medicamentos';



export const ItemMedicamentosYCitas = ({ data }: { data: MedicamentosYCitas }) => (

    <View style={{ flex: 1, flexDirection: "row", backgroundColor: "red" }}>
        <View style={{ flex: 6, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontWeight: "800" }}>{data.NombreMedicamento ? data.NombreMedicamento : data.NombreCita}</Text>
        </View>
        <View style={{ flex: 6, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontWeight: "800" }}>{data.Hora}</Text>
        </View>
    </View>

);