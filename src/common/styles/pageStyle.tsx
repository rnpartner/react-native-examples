import {ViewStyle, StyleProp} from 'react-native'

export default function pageStyle(style: ViewStyle = {}): StyleProp<ViewStyle> {
  return {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    ...style,
  }
}
