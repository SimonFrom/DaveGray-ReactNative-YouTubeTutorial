import {StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList,
    View, Text, Image
} from 'react-native';
import { Colors } from "@/constants/theme";
import {Component} from "react";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";


export default function menuScreen() {
    const colorScheme = Appearance.getColorScheme()

    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;


    const styles = createStyles(theme,  colorScheme);
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;
    const seperatorComp = <View style={styles.seperator}/>;
    const headerComp = <View style={styles.header}>Top of list</View>
    const footerComp = <View style={styles.footer}><Text>That's all folks</Text></View>


    return (
        <Container>
           <FlatList
               data={MENU_ITEMS}
               keyExtractor={(item) => item.id.toString()}
               showsHorizontalScrollIndicator={false}
               contentContainerStyle={styles.contentContainer}
               ItemSeparatorComponent={seperatorComp}
               // ListHeaderComponent={headerComp}
               ListFooterComponent={footerComp}
               ListFooterComponentStyle={styles.footer}
               // ListEmptyComponent is important for empty items
               // It is possible to define components inline
               // Test with empty array [] in data
               ListEmptyComponent={<Text>No items found.</Text>}
               renderItem={({ item }) => (
                <View style={styles.row}>
                    <View style={styles.menuTextRow}>
                        <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
                        <Text style={styles.menuItemText}>{item.description}</Text>

                    </View>
                    <Image style={styles.menuImg} source={MENU_IMAGES[item.id - 1]} />
                </View>
           )}>
           </FlatList>
        </Container>
    )
}


function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background,

        },
        seperator: {
            height: 5,
            backgroundColor: colorScheme === "dark" ? 'papayawhip' : 'black',
            width: '80%',
            maxWidth: 300,
            marginHorizontal: 'auto',
            marginTop: 10,
            marginBottom: 10,
        },
        footer: {
            marginHorizontal: 'auto',
        },
        header: {
            marginHorizontal: 'auto'
        },
        row: {
            flexDirection: 'row',
            width: '100%',
            maxWidth: 600,
            height: 100,
            borderStyle: 'solid',
            borderColor: colorScheme === "dark" ? '#000' : 'papayawhip',
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden',
            marginHorizontal: 'auto',
            marginBottom: 10,
        },
        menuTextRow: {
            width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1,
        },
        menuItemTitle: {
            fontSize: 18,
            textDecorationLine: 'underline',

        },
        menuItemText: {
            color: theme.textColor,
        },
        menuImg: {
            width: 100,
            height: 100,
        }
    })
}