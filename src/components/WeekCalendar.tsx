import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Calendar } from 'react-native-calendars';
import { Agenda } from 'react-native-calendars'
import BottomCalendarCitas from './weekCalendarComponents/BottomcalendarCitas';
import TopCalendarformulas from './weekCalendarComponents/TopCalendarformulas';

const WeekCalendar = () => {
    return (
        <View style={styles.containerPrincipal}>
        <View style={styles.containerVistaWeekCalendar}>
                <Agenda
                    loadItemsForMonth={() => { }}
                    renderEmptyData={() => {
                        return <View />;
                    }}
                />  
                </View>
            <View style={styles.containerLista}>
                <TopCalendarformulas />
                <BottomCalendarCitas />
            </View>
        </View>
    )
}

export default WeekCalendar

const styles = StyleSheet.create({
    containerPrincipal: { flex: 1 },
    containerVistaWeekCalendar: { height: "30%" },
    containerLista: { height: "70%", borderColor: "black", borderWidth: 3 },
    containerUpper: { flex: 6, alignItems: "center", flexDirection: "column", borderBottomWidth: 3, borderBottomColor: "black" },
    containerBottom: { flex: 6, alignItems: "center", flexDirection: "column" },
})