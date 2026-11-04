import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Kalkulator() {
  // State untuk menampung angka pertama, angka kedua, dan hasil
  const [angkaPertama, setAngkaPertama] = useState("");
  const [angkaKedua, setAngkaKedua] = useState("");
  const [hasil, setHasil] = useState("");

  // Fungsi untuk operasi Tambah
  const handleTambah = () => {
    const num1 = parseFloat(angkaPertama);
    const num2 = parseFloat(angkaKedua);
    if (!isNaN(num1) && !isNaN(num2)) {
      setHasil((num1 + num2).toString());
    } else {
      setHasil("Masukkan angka yang valid!");
    }
  };

  // Fungsi untuk operasi Kurang
  const handleKurang = () => {
    const num1 = parseFloat(angkaPertama);
    const num2 = parseFloat(angkaKedua);
    if (!isNaN(num1) && !isNaN(num2)) {
      setHasil((num1 - num2).toString());
    } else {
      setHasil("Masukkan angka yang valid!");
    }
  };

  // Fungsi untuk operasi Kali
  const handleKali = () => {
    const num1 = parseFloat(angkaPertama);
    const num2 = parseFloat(angkaKedua);
    if (!isNaN(num1) && !isNaN(num2)) {
      setHasil((num1 * num2).toString());
    } else {
      setHasil("Masukkan angka yang valid!");
    }
  };

  // Fungsi untuk operasi Bagi
  const handleBagi = () => {
    const num1 = parseFloat(angkaPertama);
    const num2 = parseFloat(angkaKedua);
    if (!isNaN(num1) && !isNaN(num2)) {
      if (num2 === 0) {
        setHasil("Error: Pembagi tidak boleh nol!");
      } else {
        setHasil((num1 / num2).toString());
      }
    } else {
      setHasil("Masukkan angka yang valid!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kalkulator</Text>

      {/* Input Angka Pertama */}
      <Text style={styles.label}>Angka Pertama:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan angka pertama"
        placeholderTextColor="#94a3b8"
        value={angkaPertama}
        onChangeText={(text) => setAngkaPertama(text)}
        keyboardType="numeric"
      />

      {/* Input Angka Kedua */}
      <Text style={styles.label}>Angka Kedua:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan angka kedua"
        placeholderTextColor="#94a3b8"
        value={angkaKedua}
        onChangeText={(text) => setAngkaKedua(text)}
        keyboardType="numeric"
      />

      {/* Baris Tombol Operasi (Flexbox Horizontal) */}
      <View style={styles.buttonRow}>
        <Pressable style={styles.buttonOperasi} onPress={handleTambah}>
          <Text style={styles.buttonOperasiText}>+</Text>
        </Pressable>

        <Pressable style={styles.buttonOperasi} onPress={handleKurang}>
          <Text style={styles.buttonOperasiText}>-</Text>
        </Pressable>

        <Pressable style={styles.buttonOperasi} onPress={handleKali}>
          <Text style={styles.buttonOperasiText}>×</Text>
        </Pressable>

        <Pressable style={styles.buttonOperasi} onPress={handleBagi}>
          <Text style={styles.buttonOperasiText}>÷</Text>
        </Pressable>
      </View>

      {/* Kartu Hasil Perhitungan */}
      <View style={styles.cardHasil}>
        <Text style={styles.cardTitle}>Hasil Perhitungan:</Text>
        <Text style={styles.hasilText}>{hasil !== "" ? hasil : "0"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 24,
    textAlign: "center",
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: "#0f172a",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 10,
  },
  buttonOperasi: {
    flex: 1,
    backgroundColor: "#3b82f6",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonOperasiText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
  },
  cardHasil: {
    marginTop: 24,
    backgroundColor: "#dcfce7",
    borderWidth: 1,
    borderColor: "#bbf7d0",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#166534",
    marginBottom: 12,
  },
  hasilText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    textAlign: "center",
  },
});
