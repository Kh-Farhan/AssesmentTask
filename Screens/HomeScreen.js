import {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image,ScrollView,FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function HomeScreen({navigation}) {
  const Challenges=[{title:"MORNING WORKOUTS",img:"image2"},{title:"MORNING WORKOUTS",img:"image2"},{title:"MORNING WORKOUTS",img:"image2"}]
  useEffect(() => {
    navigation.setOptions({ 
      headerShown:true,
      title: 'YOUR PERSONALIZED PLAN',
      headerStyle: { backgroundColor: '#00B2E3',elevation:0 }, 
      headerTitleStyle: { color: '#FFFFFF',fontSize:16.93,marginLeft:6 },
      headerRight:()=>( 
      <TouchableOpacity style={styles.headerR}> 
      <Image style={styles.tabIcon} source={require('../assets/crown.png')}/>
      <Text style={{color:"#00B2E3",fontSize:12,marginLeft:4}}>PRO</Text>
      </TouchableOpacity>) });
    
  }, [])
  return (
    
    <View style={styles.container}>
   <ScrollView>
      <View style={styles.topContainer}>
        <View style={styles.topMidContainer}>
          <View style={{justifyContent:"center",alignItems:"center"}}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
            <Image style={styles.tabIcon} source={require('../assets/fire.png')}/>
            <Text style={{color:"#00B2E3",fontSize:18,marginLeft:4}}>30</Text>
            </View>
            <Text style={{color:"#9B9B9B",fontSize:12}}>WORKOUT DAYS</Text>
          </View>
          <View style={styles.verticleLine}></View>
          <View style={{justifyContent:"center",alignItems:"center"}}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
            <Image style={styles.tabIcon} source={require('../assets/Diet-icon.png')}/>
            <Text style={{color:"#00B2E3",fontSize:18,marginLeft:4}}>30</Text>
            </View>
            <Text style={{color:"#9B9B9B",fontSize:12}}>DIET DAYS</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.image1C}>
          <View style={styles.image1T}>
            <Text style={{fontWeight:"bold"}}>30 DAYS WORKOUT</Text>
            <View style={{flexDirection :"row",marginTop:4,alignItems:"center"}}>
            <Image tintColor={"black"}  style={{marginRight:.5,height:12,resizeMode:"contain"}} source={require('../assets/fire.png')}/>
            <Image tintColor={"#9B9B9B"} style={{marginRight:.5,height:12,resizeMode:"contain"}} source={require('../assets/fire.png')}/>
            <Image tintColor={"#9B9B9B"} style={{marginRight:.5,height:12,resizeMode:"contain"}} source={require('../assets/fire.png')}/>
            <Image tintColor={"#9B9B9B"} style={{marginRight:.5,height:12,resizeMode:"contain"}} source={require('../assets/fire.png')}/>
            <Text style={{fontSize:14,marginLeft:3,fontWeight:"bold",marginTop:-2}}>Unfit</Text>
            </View>
            <Text style={{marginTop:4}}>10%</Text>
            <View style={{borderWidth:2,width:20,borderRadius:2,marginTop:4}}></View>
            <TouchableOpacity style={styles.goButton}> 
              <Text style={{color:"white",fontSize:12}}>GO!</Text>
            </TouchableOpacity>
          </View>
          <View>
          <Image style={styles.image1} source={require('../assets/image1.png')}/>
          </View>
        </View>
        <Text style={{fontSize:15,marginLeft:3,fontWeight:"bold",marginTop:10,marginLeft:19}}>CHALLENGES</Text>
        <View style={styles.scroll}>
        <FlatList
          horizontal
          data={Challenges}
          style={{backgroundColor:'#C5EAFA'}}
          keyExtractor={(item, index) => index}
          renderItem={({ item,index }) => (
            <View style={styles.scrollItems}>
              <Text style={styles.scrollText} >{item.title}</Text>
              <Image style={styles.play} source={require('../assets/Subtract.png')}/>
              <View style={{backgroundColor:"#104657",position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,zIndex:1,borderRadius:13,opacity:0.6}}></View>
              <Image style={styles.image2} source={require(`../assets/image2.png`)}/>
            </View>
        
        )}
        />
        </View>
        <View style={styles.image3C}>
              <Text style={styles.image3Text} >YOUR DIET PLAN IS READY!</Text>
              <Image style={styles.image3} source={require(`../assets/image3.png`)}/>
              <TouchableOpacity style={styles.image3Button}> 
              <Text style={{color:"white",fontSize:12,alignSelf:"center"}}>GO!</Text>
            </TouchableOpacity>
            </View>
            <View style={[styles.image3C,{marginBottom:31}]}>
              <Text style={styles.image3Text} >MIND POWER</Text>
              <Image  style={styles.top} source={require(`../assets/top.png`)}/>
              <Image style={styles.image3} source={require(`../assets/image4.png`)}/>
              <TouchableOpacity style={styles.image3Button}> 
              <Text style={{color:"white",fontSize:12,alignSelf:"center"}}>GO!</Text>
            </TouchableOpacity>
            </View>
      </View>
      
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5EAFA',
    marginBottom:73
  },
  headerR:{
    backgroundColor:"white",
    width:62,
    height:27,
    borderRadius:40,
    marginRight:19,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  topContainer:{
    height:118,
    backgroundColor:"#00B2E3",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
   
  },
  topMidContainer:{
    marginTop:9,
    backgroundColor:"white",
    marginHorizontal:19,
    height:65,
    borderRadius:15,
    flexDirection:'row',
    justifyContent:"space-between",
    paddingHorizontal:30
  },
  verticleLine:{
    top:21,
    height: 30,
    width: 1,
    backgroundColor: '#9B9B9B',
  },
  image1C:{
    marginHorizontal:19,
    height:187,
    backgroundColor:"white",
    borderRadius:15,
    marginTop:-25,
    flexDirection:"row",
    justifyContent:"flex-end"
  },
  image1:{
    height:187,
    width:240,
    borderRadius:13
  },
  image2:{
    borderRadius:13
  },
  image3:{
    height:165,
    width:322,
    resizeMode:"contain"
  },
  image1T:{
    position: 'absolute', top: 18, left: 18, right: 0, bottom: 0, alignItems: 'flex-start',zIndex:1
  },
  goButton:{
    backgroundColor:"#00B2E3",
    width:77,
    height:32,
    borderRadius:40,
    marginRight:19,
    marginTop:45,
    justifyContent:"center",
    alignItems:"center"
  },
  scroll:{
      backgroundColor:"white",
      borderRadius:15,
      marginTop:10,
      justifyContent:"center",
      alignItems:"center",
      marginLeft:19
  },
  image3C:{
    height:150,
    marginHorizontal:19,
    backgroundColor:"white",
    borderRadius:15,
    marginTop:18,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:19,
    elevation:10
},
  play:{
    zIndex:2,
    position: 'absolute', top: "40%", left:  "45%", right: 0, bottom: 0,
  },
  scrollText:{
    color:"white",
    zIndex:2,
    position: 'absolute', top: "8%", left:  "9%", right: 0, bottom: 0,
  },
  image3Text:{
    color:"black",
    fontWeight:"bold",
    zIndex:2,
    position: 'absolute', top: "8%", left:  "9%", right: 0, bottom: 0,
  },
  scrollItems:{marginRight:10,
    shadowColor: "#104657",
  shadowOffset: {
    width: 3,
    height: 3,
  },
  elevation: 4,
  borderRadius:15
},
image3Button:{  
backgroundColor:"#00B2E3",
width:77,
height:32,
borderRadius:40,
marginRight:19,
marginTop:85,
justifyContent:"center",
alignItems:"center",
position: 'absolute', top: 18, left: 18, right: 0, bottom: 0, 
alignItems: 'flex-start',
zIndex:3},
top:{
  zIndex:1,
  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
  height:150,
  borderRadius:15
}
});