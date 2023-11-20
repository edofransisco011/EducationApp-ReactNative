import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
export default function ProgressBar({progress}) {
  return (
    <View>
      <Progress.Bar progress={progress} 
      width={Dimensions.get('screen').width*0.85} />
    </View>
  )
}