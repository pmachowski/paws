import React from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"

import { Button, ListItem, Screen, Text } from "../../components"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"

const playfulCatsImg = require("./assets/cats.png")

export const MainScreen = observer(function MainScreen() {
  const rootStore = useStores()
  const { catStore } = rootStore
  console.tron.log("CATS:", catStore.cats)

  const navigation = useNavigation()
  const nextScreen = () => {
    catStore.empty()
    navigation.navigate("add")
  }

  const renderItem = ({ item }) => <ListItem item={item} />

  return (
    <View testID="MainScreen" style={styles.full}>
      <Screen preset="fixed">
        <View style={{ ...styles.header, ...(catStore.isEmpty ? styles.headerBig : {}) }}>
          <Text preset="header" style={styles.headerText}>
            {catStore.isEmpty ? "Welcome to " : `You have ${catStore.paws} `}
            <Text preset="headerBold" style={styles.headerText} text="Paws" />
          </Text>
          <Image source={playfulCatsImg} style={styles.cats} />
        </View>

        <View style={styles.content}>
          {catStore.isEmpty ? (
            <>
              <Text preset="headerLight" style={styles.infoHeaderText}>
                It feels lonely here.{" "}
              </Text>
              <Text style={styles.info} text="Use the button at the bottom to add your cats. " />
            </>
          ) : (
            <FlatList
              data={catStore.cats}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.list}
            />
          )}
        </View>
      </Screen>

      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <Button testID="ButtonAddNewCat" text="Add New Cat" onPress={nextScreen} />
        </View>
      </View>
    </View>
  )
})

const styles = {
  full: {
    flex: 1,
  } as ViewStyle,
  header: {
    backgroundColor: color.background,
    paddingHorizontal: spacing.normal,
  } as ViewStyle,
  headerBig: {
    flex: 1.5,
    justifyContent: "space-around",
  } as ViewStyle,
  headerText: {
    fontSize: 33,
    textAlign: "center",
    marginVertical: spacing.big,
  } as TextStyle,
  infoHeaderText: {
    paddingTop: spacing.big,
  } as TextStyle,
  content: {
    flex: 1,
    backgroundColor: color.container,
    borderTopLeftRadius: spacing.iphoneRadius,
    borderTopRightRadius: spacing.iphoneRadius,
    paddingHorizontal: spacing.large,
  } as ViewStyle,
  list: {
    paddingVertical: spacing.big,
  } as ViewStyle,
  info: {
    marginTop: 20,
  } as TextStyle,
  cats: {
    resizeMode: "contain",
    alignSelf: "center",
    position: "relative",
    top: 22,
  } as ImageStyle,

  footer: {
    backgroundColor: color.container,
  } as ViewStyle,
  footerContent: {
    backgroundColor: color.background,
    borderTopLeftRadius: spacing.iphoneRadius,
    borderTopRightRadius: spacing.iphoneRadius,
    padding: spacing.iphoneRadius,
  } as ViewStyle,
}
