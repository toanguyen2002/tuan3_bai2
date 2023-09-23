import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Radio } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import RadioForm from 'react-native-simple-radio-button';
export default function App() {
  var radio_props = [
    { label: 'Male', value: 0 },
    { label: 'Female', value: 1 }
  ];
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>REGISTER</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', width: 300, height: 50, marginTop: 10, marginBottom: 10, padding: 15 }}>
        <TextInput
          placeholder="Name"
          style={{ width: 290, height: 40, color: '#000' }}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', width: 300, height: 50, marginTop: 10, marginBottom: 10, padding: 15 }}>
        <TextInput
          placeholder="Phone"
          style={{ width: 290, height: 40, color: '#000' }}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', width: 300, height: 40, marginTop: 10, marginBottom: 10, padding: 15 }}>
        <TextInput
          placeholder="Email"
          style={{ width: 290, height: 40, color: '#000' }}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', width: 300, height: 50, padding: 15 }}>
        <TextInput
          placeholder="Password"
          style={{ width: 290, height: 40, color: '#000', marginTop: 10, marginBottom: 10 }}
        />
        <AntDesign name="eye" size={24} color="black" />
      </View>


      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', width: 300, height: 50, marginTop: 10, marginBottom: 10, padding: 15 }}>
        <TextInput
          placeholder="Birthday"
          style={{ width: 290, height: 40, color: '#000' }}
        />
      </View>
      <View style={{ justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <RadioForm

          radio_props={radio_props}
          // initial={0}
          onPress={(value) => { this.setState({ value: value }) }}
          formHorizontal={true}
          animation={true}
          buttonColor='#000'
          labelColor='#000'
          labelHorizontal={true}
          accessible={true}
        />
      </View>
      <View style={{ backgroundColor: 'red', width: 300, height: 40, justifyContent: 'center', alignItems: 'center' }}>
        <Text>REGISTER</Text>
      </View>


      <View style={{ width: 300, height: 40, justifyContent: 'center', alignItems: 'center' }}>
        <Text> When you agree to terms and conditions</Text>
      </View>
    </View>
  );
}
