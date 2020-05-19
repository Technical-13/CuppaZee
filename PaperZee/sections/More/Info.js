import * as React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import credits from './credits.json';
import { TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
  var theme = useSelector(i=>i.themes[i.theme]);
  var nav = useNavigation();

  return (
    <ScrollView style={{ backgroundColor: theme.page_content.bg }} contentContainerStyle={{padding:8}}>
      <View style={{alignItems:"center"}}>
        <Text style={{color: theme.page_content.fg,fontSize:24,fontWeight:"bold"}}>CuppaZee App</Text>
        {/* TODO: Replace "CuppaZee App" with Logo */}
        <Text style={{color: theme.page_content.fg,fontSize:20,fontWeight:"bold"}}>Build 22</Text>
      </View>
      <View style={{height:1,backgroundColor:theme.page_content.fg,opacity:0.5,margin:8}}></View>
      <View style={{alignItems:"center"}}>
        <Text style={{color: theme.page_content.fg,fontSize:24,fontWeight:"bold"}}>Credits</Text>
      </View>
      <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
        {credits.filter(i=>i.type=="dev").map(i=><TouchableRipple onPress={()=>nav.navigate('UserDetails',{userid:i.user_id})}>
          <View style={{alignItems:"center",padding:4,width:160}}>
            <Image source={{uri:`https://munzee.global.ssl.fastly.net/images/avatars/ua${i.user_id.toString(36)}.png`}} style={{backgroundColor:"white",height:48,width:48,borderRadius:24}} />
            <Text style={{color: theme.page_content.fg,fontSize:20,fontWeight:"bold"}}>{i.username}</Text>
            <Text style={{color: theme.page_content.fg,fontSize:16}}>{i.title}</Text>
          </View>
        </TouchableRipple>)}
      </View>
      <View style={{height:1,backgroundColor:theme.page_content.fg,opacity:0.5,margin:8}}></View>
      <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
        {credits.filter(i=>i.type=="translator").map(i=><TouchableRipple onPress={()=>nav.navigate('UserDetails',{userid:i.user_id})}>
          <View style={{alignItems:"center",padding:4,width:120}}>
            <Image source={{uri:`https://munzee.global.ssl.fastly.net/images/avatars/ua${i.user_id.toString(36)}.png`}} style={{backgroundColor:"white",height:48,width:48,borderRadius:24}} />
            <Text style={{color: theme.page_content.fg,fontSize:16,fontWeight:"bold"}}>{i.username}</Text>
            <Text style={{color: theme.page_content.fg,fontSize:12}}>{i.title}</Text>
          </View>
        </TouchableRipple>)}
      </View>
      <View style={{height:1,backgroundColor:theme.page_content.fg,opacity:0.5,margin:8}}></View>
      <Text style={{color: theme.page_content.fg,fontSize:20,fontWeight:"bold",textAlign:"center"}}>Patrons and Supporters</Text>
      <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
        {credits.filter(i=>i.type=="supporter").map(i=><TouchableRipple onPress={()=>nav.navigate('UserDetails',{userid:i.user_id})}>
          <View style={{alignItems:"center",padding:4,width:100}}>
            <Image source={{uri:`https://munzee.global.ssl.fastly.net/images/avatars/ua${i.user_id.toString(36)}.png`}} style={{backgroundColor:"white",height:36,width:36,borderRadius:18}} />
            <Text numberOfLines={1} ellipsizeMode='head' style={{color: theme.page_content.fg,fontSize:12,fontWeight:"bold"}}>{i.username}</Text>
          </View>
        </TouchableRipple>)}
      </View>
    </ScrollView>
  );
}