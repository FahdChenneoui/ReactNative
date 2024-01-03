import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

export const DateTimePicke = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View>
            <View style={styles.fixToText}>
                <View>
                    <Button
                        color='#465bd8'
                        onPress={showDatepicker} title="Show date picker!" />
                </View>
                <View>
                    <Button
                        color='#465bd8'
                        onPress={showTimepicker} title="Show time picker!" />
                </View>
            </View>
            <Text>selected: {date.toLocaleString()}</Text>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                />
            )}
        </View>
    );
}
const styles = StyleSheet.create({

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

});