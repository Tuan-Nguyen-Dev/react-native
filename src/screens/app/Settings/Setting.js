import { Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header/Header'
import ListItem from '../../../components/ListItem/ListItem'
import { colors } from '../../../utils/color'
import EditableBox from '../../../components/EditableBox/EdittableBox'
import Button from '../../../components/Button/button'

const Setting = ({ navigation }) => {

    const [editing, setEditing] = useState(false);
    const [values, setValues] = useState({ name: 'User', email: 'nguyenductuanff2003@gmail.com' })
    const onEditPress = () => {
        setEditing(true);
    }
    const onSave = () => {
        setEditing(false);
    }

    const onChange = (key, value) => {
        // key : name  and email
        //value : name : User, email :abc @gmai.com

        setValues(v => ({ ...v, [key]: value }))
        console.log("Check key", key);
    }
    console.log("Check values >>>>", values);

    const onItemPress = () => {
        Linking.openURL('https://google.com')
    }

    const goBack = () => {
        navigation.goBack()
    }
    return (
        <SafeAreaView>
            <Header showBack onBackPress={goBack} title="Settings" />
            <ScrollView style={styles.container}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Personal Information</Text>
                    <Pressable onPress={onEditPress}>
                        <Image style={styles.icon} source={require('../../../assets/edit.png')} />
                    </Pressable>
                </View>
                <EditableBox label="Name" onChangeText={(v) => onChange("name", v)} value={values.name} editable={editing} />
                <EditableBox label="Email" onChangeText={(v) => onChange("email", v)} value={values.email} editable={editing} />
                {editing ? (
                    <Button style={styles.button} onPress={onSave} title="Save" />
                ) : null}

                <Text style={[styles.sectionTitle, { marginTop: 35 }]}>Help Center</Text>
                <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
                <ListItem onPress={onItemPress} style={styles.item} title="CONTACT Us" />
                <ListItem onPress={onItemPress} style={styles.item} title="Privacy & Terms" />
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Setting)

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        width: 24,
        height: 24
    },
    item: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginVertical: 8,
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 16,
        color: colors.grey,
        marginBottom: 16
    },
    button: {
        paddingVertical: 12,
        marginTop: 16
    }
})