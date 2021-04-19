import React, {useState} from 'react';
import {View, Image, Text, Button, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';


const App = () => {
 const [imagePath, setImagePath] = useState('');

 const caputeImage = () => {
   ImagePicker.openCamera({
     width: 800,
     height: 500,
     cropping: true,
     compressImageQuality: 1,
     mediaType: 'photo',
   }).then(response => {
     setImagePath(response);
     <Text> response.path </Text> 
   });

 };

 return (

   <View style={{flex: 1, justifyContent: 'center'}}>
     <Image
       source={{uri: imagePath.path}}
       style={{
         height: 300,
         borderWidth: 1,
         borderColor: 'black',
         justifyContent: 'center',
         alignSelf: 'center',
         width: 300,
         marginBottom: 20,
       }}
     />

     <TouchableOpacity
       style={{
         backgroundColor: '#e3e3e3',
         justifyContent: 'center',
         alignSelf: 'center',
         height: 60,
         width: 200,
         marginTop: 20,
       }}
       onPress={caputeImage}>
       <Text
         style={{
           textAlignVertical: 'center',
           textAlign: 'center',
           fontSize: 14,
         }}>
         Capture Image
       </Text>
     </TouchableOpacity>
   </View>
 );
};

export default App;