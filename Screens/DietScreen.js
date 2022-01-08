import { StyleSheet, Text, View } from 'react-native';

export default function DietScreen() {
  return (
    <View style={styles.container}>
    <Text>Diet Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5EAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
