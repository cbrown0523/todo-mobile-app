import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

const Read = (props) => (
    <View style={styles.readWrapper}>
        <TouchableOpacity onPress={() => props.setChecked()}>
            <Icon
                name={props.checked ? "check" : "square"}
                size={30}
                color="#900"
                style={{ marginLeft: 15 }}
            />
        </TouchableOpacity>

        <View>
            {props.checked && <View style={styles.verticalLine}></View>}
            <Text style={styles.read}>{props.text}</Text>
        </View>
        <Icon
            name="trash-2"
            size={30}
            color="#900"
            style={{ marginLeft: 'auto' }}
            onPress={props.delete}
        />
    </View>
)

export default Read

const styles = StyleSheet.create({
    readWrapper: {
        marginTop: '6%',
        flexDirection: 'row',
        borderColor: '#34fff',
        borderBottomWidth: 1.5,
        width: '100%',
        alignItems: 'stretch',
        minHeight: 40,
    },
    read: {
        paddingBottom: 15,
        paddingLeft: 8,
        marginTop: 6,
        borderColor: '#F0F1F0',
        borderBottomWidth: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'tan',
    },
    verticalLine: {
        borderBottomColor: 'white',
        borderBottomWidth: 3,
        marginLeft: 8,
        width: '100%',
        position: 'absolute',
        marginTop: 12
    }
})
