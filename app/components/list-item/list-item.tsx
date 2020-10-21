import React from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { color, spacing } from "../../theme"
import { Text } from ".."
import { ListItemProps } from "./list-item.props"
import { Icon } from "../icon/icon"
import { useNavigation } from "@react-navigation/native"

/**
 * A horizontal container component used to hold a row of a form.
 */
export function ListItem({ style, item }: ListItemProps) {
  const navigation = useNavigation()
  const nextScreen = () => {
    console.tron.log(item)
    item.makeActive()
    navigation.navigate("add")
  }

  return (
    <TouchableOpacity onPress={nextScreen} activeOpacity={0.7}>
      <View style={[styles.container, style]}>
        <View style={{ ...styles.iconContainer, ...styles[`${item.sex}IconContainer`] }}>
          <Icon icon="cat" style={{ ...styles.icon, ...styles[`${item.sex}Icon`] }} />
        </View>
        <View style={styles.infoContainer}>
          <Text preset="header" text={item.name} />
          <View style={styles.detailsContainer}>
            <Text preset="default" style={{ marginRight: spacing.big }}>
              {"Sex: "}
              <Icon icon={item.sex} style={{ ...styles.iconSmall, ...styles[`${item.sex}Icon`] }} />
            </Text>
            <Text preset="default">Breed: {item.breed}</Text>
          </View>
        </View>
        <Icon icon="chevronRight" style={styles.iconRight} />
      </View>
    </TouchableOpacity>
  )
}

const SIZE = 80

const styles = {
  container: {
    height: SIZE,
    backgroundColor: color.background,
    borderRadius: spacing.big,
    marginBottom: spacing.normal,
    flexDirection: "row",
  } as ViewStyle,
  iconContainer: {
    height: SIZE,
    width: SIZE,
    borderRadius: spacing.big,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  maleIconContainer: {
    backgroundColor: color.palette.offWhite,
  } as ViewStyle,
  femaleIconContainer: {
    backgroundColor: color.palette.orangeDarker,
  } as ViewStyle,
  iconRight: {
    opacity: 0.8,
    position: "absolute",
    top: 24,
    right: spacing.normal,
  } as TextStyle,
  icon: {
    fontSize: 40,
  } as TextStyle,
  iconSmall: {
    fontSize: 15,
  } as TextStyle,
  maleIcon: {
    color: color.palette.turquoise,
  } as TextStyle,
  femaleIcon: {
    color: color.palette.angry,
  } as TextStyle,
  infoContainer: {
    paddingHorizontal: spacing.normal,
    paddingVertical: spacing.small,
  } as ViewStyle,
  detailsContainer: {
    marginTop: spacing.small,
    flexDirection: "row",
  } as ViewStyle,
}
