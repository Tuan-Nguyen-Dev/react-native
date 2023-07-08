import { ScrollView, StyleSheet, Text, View, Image, Dimensions, Pressable, Linking } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../../utils/color'
import Button from '../../../components/Button/button';
import ImageCarousel from '../../../components/ImageCarousel/ImageCarousel';

const { height } = Dimensions.get('window');

const ProductDetail = ({ navigation, route }) => {
    // console.log(' Check navigation >>> ProductDetails', navigation)
    // console.log('Check route >>> ProductDetails', route)

    const { product } = route.params || {};
    // console.log('Check product details ', product)

    const onBackPress = () => {
        navigation.goBack()
    }

    const onContact = () => {
        // Make a phone call
        const phone = '0123456789'
        Linking.openURL(`tel: ${phone}`)

        // Send an Email 
        // const email = 'nguyenductuanff2003@gmail.com'
        // Linking.openURL(`email: ${email}`)
    }

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                {product?.images?.length ? (
                    <ImageCarousel images={product?.images} />
                ) : (

                    <Image style={styles.image} source={{ uri: product.image }} />
                )}
                <View style={styles.content}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
                <Pressable onPress={onBackPress} style={styles.backContainer} >
                    <Image style={styles.backIcon} source={require('../../../assets/back.png')} />
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.bookmarkContainer} >
                    <Image style={styles.bookmarkIcon} source={require('../../../assets/bookmark_blue.png')} />
                </Pressable>
                <Button onPress={onContact} title="Contact Seller" />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetail)

const styles = StyleSheet.create({
    safe: {
        flex: 1,

    },
    container: {
    },
    image: {
        width: '100%',
        height: height * 0.45,
    },
    content: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: -20,
        paddingHorizontal: 16
    },
    title: {
        marginTop: 30,
        fontSize: 24,
        color: colors.black,
        fontWeight: "500",
    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.black,
        marginVertical: 8,
    },
    description: {
        color: colors.textGrey,
        fontWeight: '400',
        marginVertical: 8,
    },
    footer: {
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center'
    },
    bookmarkContainer: {
        backgroundColor: colors.lightGrey,
        borderRadius: 8,
        padding: 10,
        marginRight: 15
    },
    bookmarkIcon: {
        width: 24,
        height: 24
    },
    backContainer: {
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: 10,
        margin: 24,
        marginRight: 15,
        position: 'absolute'
    },
    backIcon: {
        width: 20,
        height: 20
    }
})