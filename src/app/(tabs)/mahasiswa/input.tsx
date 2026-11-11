import { useMahasiswa } from "@/context/MahasiswaContext";
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

export default function InputMahasiswaScreen() {
  const { tambahMahasiswa } = useMahasiswa();

  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [prodi, setProdi] = useState("");

  // TANTANGAN 2: State untuk pilihan status
  const [status, setStatus] = useState<"Aktif" | "Cuti">("Aktif");

  const handleSimpan = () => {
    if (!nim.trim() || !nama.trim()) {
      Alert.alert(
        "Validasi Gagal",
        "NIM dan Nama Lengkap mahasiswa wajib diisi!",
      );
      return;
    }

    // Masukkan data ke State Terpusat (Global)
    tambahMahasiswa({
      nim: nim.trim(),
      nama: nama.trim(),
      prodi: prodi.trim() || "Teknik Informatika",
      status: status, // TANTANGAN 2: Gunakan status yang dipilih
      noHp: "-",
      tahunAngkatan: new Date().getFullYear().toString(),
    });

    Alert.alert(
      "Sukses Tersimpan! 🎉",
      `Mahasiswa baru atas nama ${nama} (${nim}) telah terdaftar di database lokal.`,
    );

    // Reset formulir setelah disimpan
    setNim("");
    setNama("");
    setProdi("");
    setStatus("Aktif");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Formulir Pendaftaran Mahasiswa</Text>
      <Text style={styles.subtitle}>
        Data yang diinputkan di sini akan langsung tampil otomatis di tab Data
        dan Report!
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

      {/* TANTANGAN 2: Pilihan Status Mahasiswa */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Status Mahasiswa</Text>
        <View style={styles.statusContainer}>
          <TouchableOpacity
            style={[
              styles.statusButton,
              status === "Aktif" && styles.statusButtonActive,
            ]}
            onPress={() => setStatus("Aktif")}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.statusText,
                status === "Aktif" && styles.statusTextActive,
              ]}
            >
              Aktif
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.statusButton,
              status === "Cuti" && styles.statusButtonActive,
            ]}
            onPress={() => setStatus("Cuti")}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.statusText,
                status === "Cuti" && styles.statusTextActive,
              ]}
            >
              Cuti
            </Text>
          </TouchableOpacity>
        </View>
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
  container: { flex: 1, backgroundColor: "#f8fafc" },
  content: { padding: 18 },
  title: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  subtitle: { fontSize: 12, color: "#64748b", marginTop: 4, marginBottom: 18 },
  formGroup: { marginBottom: 14 },
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
  // TANTANGAN 2: Styles untuk pilihan status
  statusContainer: {
    flexDirection: "row",
    gap: 10,
  },
  statusButton: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  statusButtonActive: {
    backgroundColor: "#072deb",
    borderColor: "#072deb",
  },
  statusText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#64748b",
  },
  statusTextActive: {
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#072deb",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#ffffff", fontSize: 13.5, fontWeight: "bold" },
});
