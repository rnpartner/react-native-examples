import * as React from 'react'
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
} from 'react-native'

const isIOS = Platform.OS === 'ios'
type Props = TouchableNativeFeedbackProps & TouchableOpacityProps

export default function <TouchableProps extends Props>(props: TouchableProps) {
  return isIOS ? (
    <TouchableOpacity {...props} />
  ) : (
    <TouchableNativeFeedback {...props} />
  )
}
