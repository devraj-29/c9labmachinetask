import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const productDetails = () => {
    const route: any = useRoute();
    console.log('route===>', route.params.product)
    return (
        <View style={{ flex: 1, paddingHorizontal: 10, gap: 10 }}>
            <Image source={require('../assets/placeholder.jpg')} />
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.title}>category :</Text>
                <Text style={styles.desc}>{route.params.product.category}</Text>
            </View>
            <View style={{}}>
                <Text style={styles.title}>Description :</Text>
                <Text style={styles.desc}>{route.params.product.description}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.title}>price :</Text>
                <Text style={styles.desc}>{route.params.product.price}</Text>
            </View>
        </View>
    )
}

export default productDetails

const styles = StyleSheet.create({

    title:{ textAlign: 'left', fontSize: 18, fontWeight: 'bold' },
    desc:{ textAlign: 'left', fontSize: 18 }
})