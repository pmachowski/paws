import { TextStyle } from "react-native"
import { IconTypes } from "./icons"

export interface IconProps {
  /**
   * Style overrides for the icon image
   */
  style?: TextStyle

  /**
   * The name of the icon
   */
  icon?: IconTypes
}
