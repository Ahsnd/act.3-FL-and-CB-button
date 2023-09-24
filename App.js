import React, { useState } from 'react';
import { View, Image, Button, Text, StyleSheet } from 'react-native';

const Option1 = ({ goBack }) => {
  const [currentImage, setCurrentImage] = useState('https://img.icons8.com/?size=160&id=110429&format=png');
  const [imageSwitched, setImageSwitched] = useState(false);

  const handleImageSwitch = () => {
    if (!imageSwitched) {
      setCurrentImage('https://img.icons8.com/?size=160&id=110429&format=png'); // Replace with your second image URI
    } else {
      setCurrentImage(''); // Replace with your second image URI
    }
    setImageSwitched(!imageSwitched);
  };

  return (
    <View style={styles.container}>
        <View style={styles.buttonRow}>
        <Button title="F L BUTTON" disabled />
        <Button title="COUNT BUTTON" disabled />
      </View>
      <Image source={{ uri: currentImage }} style={styles.image} />
      <Button title="SWITCH ON" onPress={handleImageSwitch} />
      <Button title="SWITCH OFF" onPress={handleImageSwitch} />
      <Button title="BACK BUTTON" onPress={goBack} />
    </View>
  );
};
const Option2 = ({ goBack }) => {
  const [value, setValue] = useState(0);

  const handleAdd = () => {
    setValue(value + 1);
  };

  const handleSubtract = () => {
    setValue(value - 1);
  };

  return (
    <View style={styles.container}>
       <View style={styles.buttonRow}>
        <Button title="F L" disabled />
        <Button title="COUNT" disabled />
      </View>
      <Text style={styles.text}>Value: {value}</Text>
      <View style={styles.buttonsContainer}>
        <Button title="+ 1" onPress={handleAdd} />
        <Button title="- 1" onPress={handleSubtract} />
      </View>
      <Button title="BACK" onPress={goBack} />
    </View>
  );
};

const App = () => {
  const [option1Selected, setOption1Selected] = useState(false);
  const [option2Selected, setOption2Selected] = useState(false);

  const goBack = () => {
    setOption1Selected(false);
    setOption2Selected(false);
  };

  return (
    <View style={styles.container}>
      {!option1Selected && !option2Selected && (
        <View style={styles.optionToggleContainer}>
          <Button title="F L BUTTON" onPress={() => setOption1Selected(true)} />
          <Button title="COUNT BUTTON" onPress={() => setOption2Selected(true)} />
        </View>
      )}

      {option1Selected && <Option1 goBack={goBack} />}
      {option2Selected && <Option2 goBack={goBack} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionToggleContainer: {
    flexDirection: 'row',
    justifyContent: 'right',
    marginBottom: 50,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'padding',
    marginBottom: 50,
  },
  text: {
    fontSize: 50,
    marginBottom: 50,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonRow: {
    flexDirection: 'row',
    margin: 50,
  },
});

export default App;