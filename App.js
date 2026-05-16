import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [form, setForm] = useState({ nik: '', nama: '', email: '' });

  const submitData = async () => {
    try {
      const res = await fetch('https://koperasi-anda.vercel.app/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...form, simpanan_pokok: 10000 }),
      });
      if (res.ok) Alert.alert("Sukses", "Data Anda telah masuk ke sistem koperasi.");
    } catch (e) {
      Alert.alert("Error", "Gagal menghubungi server.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Koperasi Digital</Text>
      <TextInput placeholder="NIK KTP" style={styles.input} onChangeText={(val) => setForm({...form, nik: val})} />
      <TextInput placeholder="Nama Lengkap" style={styles.input} onChangeText={(val) => setForm({...form, nama: val})} />
      <TextInput placeholder="Email" style={styles.input} onChangeText={(val) => setForm({...form, email: val})} />
      <TouchableOpacity style={styles.button} onPress={submitData}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>DAFTAR SEKARANG</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 30, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
  input: { backgroundColor: 'white', padding: 15, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#ddd' },
  button: { backgroundColor: '#e63946', padding: 18, borderRadius: 8, alignItems: 'center' }
});