import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useMahasiswa } from "./MahasiswaContext";

export default function InputMahasiswaScreen() {
  const { tambahMahasiswa } = useMahasiswa();

  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [prodi, setProdi] = useState("");
  const [noHp, setNoHp] = useState("");
  const [tahunAngkatan, setTahunAngkatan] = useState("");

  const handleSimpan = () => {
    // Validasi
    if (!nim.trim() || !nama.trim()) {
      Alert.alert(
        "Validasi Gagal",
        "NIM dan Nama Lengkap mahasiswa wajib diisi!",
      );
      return;
    }

    // Tantangan 3: Tambahkan data ke Context
    tambahMahasiswa({
      nim: nim.trim(),
      nama: nama.trim(),
      prodi: prodi.trim() || "Belum ditentukan",
      status: "Aktif",
      noHp: noHp.trim() || "-",
      tahunAngkatan:
        tahunAngkatan.trim() || new Date().getFullYear().toString(),
    });

    Alert.alert(
      "Data Berhasil Disimpan",
      `Mahasiswa baru atas nama ${nama} (${nim}) telah ditambahkan ke daftar.`,
      [{ text: "OK" }],
    );

    // Reset formulir setelah disimpan
    setNim("");
    setNama("");
    setProdi("");
    setNoHp("");
    setTahunAngkatan("");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Formulir Pendaftaran Mahasiswa</Text>
      <Text style={styles.subtitle}>
        Isikan data mahasiswa baru secara teliti pada kolom formulir di bawah
        ini:
      </Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nomor Induk Mahasiswa (NIM)</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 230101006"
          placeholderTextColor="#94a3b8"
          value={nim}
          onChangeText={setNim}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nama Lengkap Mahasiswa</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: Muhammad Rizki"
          placeholderTextColor="#94a3b8"
          value={nama}
          onChangeText={setNama}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Program Studi</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: Teknik Informatika / Sistem Informasi"
          placeholderTextColor="#94a3b8"
          value={prodi}
          onChangeText={setProdi}
        />
      </View>

      {/* Tantangan 2 & 3: Field Tambahan */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nomor HP</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 081234567890"
          placeholderTextColor="#94a3b8"
          value={noHp}
          onChangeText={setNoHp}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Tahun Angkatan</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 2023"
          placeholderTextColor="#94a3b8"
          value={tahunAngkatan}
          onChangeText={setTahunAngkatan}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSimpan}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Simpan Data Mahasiswa</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: {
    padding: 18,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
  },
  subtitle: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 4,
    marginBottom: 18,
  },
  formGroup: {
    marginBottom: 14,
  },
  label: {
    fontSize: 12.5,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 13,
    color: "#0f172a",
  },
  button: {
    backgroundColor: "#072deb",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 13.5,
    fontWeight: "bold",
  },
});
