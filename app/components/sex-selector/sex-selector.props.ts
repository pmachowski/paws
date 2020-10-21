import { ViewStyle } from "react-native"
import { SexType } from "./sex-selector"

export interface SexSelectorProps {
  onSelect: Function

  preselected?: SexType

  label: string

  style?: ViewStyle

  error?: string
}
