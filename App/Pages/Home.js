import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Button } from 'react-native'
import Services from '../Shared/Services'
import { AuthContext } from '../Context/AuthContext'
import WelcomeHeader from '../Components/WelcomeHeader'
import SearchBar from '../Components/SearchBar'
import GlobalApi from '../Shared/GlobalApi'
import Slider from '../Components/Slider'
import VideoCourseList from '../Components/VideoCourseList'
import CourseList from '../Components/CourseList'
import { ScrollView } from 'react-native'



export default function Home() {
    const {userData,setUserData}=useContext(AuthContext)
   
  return (
    <ScrollView style={{padding:20}}>
        <WelcomeHeader/>
        <SearchBar/>
        <Slider/>
        <VideoCourseList/>
        <CourseList type={'basic'} />
        <CourseList type={'advance'} />
        <View style={{height:100}}> 
          
        </View>
    </ScrollView> 
  )
}