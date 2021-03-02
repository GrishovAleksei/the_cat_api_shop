import { Dimensions, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const DEVICE_WIDTH = Dimensions.get('screen').width;
export const isIphone = Platform.OS === 'ios'
export const STATUS_BAR = getStatusBarHeight()