import { Image, StyleSheet, View, Button, Alert } from 'react-native';
import * as SMS from 'expo-sms';

export default function HomeScreen() {
  const id = ['0416526586'];

  function askToSend() {
    Alert.alert('SMS Send', 'Send: ' + id, [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'OK',
        onPress: () => _handlePressButtonAsync()
      }
    ]);
  }

  async function _handlePressButtonAsync() {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      await SMS.sendSMSAsync(
        id,
        'My lecturer is the greatest'
        // Attachments removed for iOS compatibility
      );
    } else {
      Alert.alert("SMS is not available on this device.");
    }
  }

  return (
    <View style={styles.header}>
      <View style={styles.containerRow}>
        <Button title="Send SMS" onPress={askToSend} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 40,
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
