import { useMahasiswa } from "@/context/MahasiswaContext";
import { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function DataMahasiswaScreen() {
  // Ambil data dinamis dan aksi hapus dari Context
  const { dataMahasiswa, hapusMahasiswa } = useMahasiswa();

  // TANTANGAN 3: State untuk pencarian
  const [searchQuery, setSearchQuery] = useState("");

  // TANTANGAN 3: Filter data berdasarkan pencarian
  const filteredData = searchQuery.trim()
    ? dataMahasiswa.filter((item) =>
        item.nama.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : dataMahasiswa;

  const konfirmasiHapus = (id: string, nama: string) => {
    Alert.alert(
      "Konfirmasi Hapus",
      `Apakah Anda yakin ingin menghapus data ${nama}?`,
      [
        { text: "Batal", style: "cancel" },
        {
          text: "Hapus",
          style: "destructive",
          onPress: () => hapusMahasiswa(id),
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      {/* TANTANGAN 3: Kolom Pencarian */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari nama mahasiswa..."
          placeholderTextColor="#94a3b8"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listArea}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>
              {searchQuery
                ? "Tidak ada mahasiswa dengan nama tersebut."
                : "Belum ada data mahasiswa."}
            </Text>
            <Text style={styles.emptySubText}>
              {searchQuery
                ? "Coba kata kunci lain."
                : "Silakan tambahkan data baru melalui tab Input."}
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Avatar Inisial */}
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.nama.charAt(0)}</Text>
            </View>

            {/* Informasi Identitas */}
            <View style={styles.infoArea}>
              <Text style={styles.nama}>{item.nama}</Text>
              <Text style={styles.subText}>NIM: {item.nim}</Text>
              <Text style={styles.prodiText}>{item.prodi}</Text>
            </View>

            {/* Badge Status & Tombol Hapus */}
            <View style={{ alignItems: "flex-end", gap: 6 }}>
              <View
                style={[
                  styles.badge,
                  item.status === "Aktif"
                    ? styles.badgeActive
                    : styles.badgeInactive,
                ]}
              >
                <Text
                  style={[
                    styles.badgeText,
                    item.status === "Aktif"
                      ? styles.badgeTextActive
                      : styles.badgeTextInactive,
                  ]}
                >
                  {item.status}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => konfirmasiHapus(item.id, item.nama)}
              >
                <Text style={styles.hapusText}>Hapus</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  searchInput: {
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 13,
    color: "#0f172a",
  },
  listArea: { padding: 16, gap: 12 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#eff6ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#072deb",
  },
  infoArea: {
    flex: 1,
  },
  nama: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0f172a",
  },
  subText: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
  },
  prodiText: { fontSize: 12, color: "#072deb", marginTop: 2 },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeActive: {
    backgroundColor: "#dcfce7",
  },
  badgeInactive: {
    backgroundColor: "#fee2e2",
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "bold",
  },
  badgeTextActive: {
    color: "#16a34a",
  },
  badgeTextInactive: { color: "#dc2626" },
  hapusText: { fontSize: 11, color: "#dc2626", fontWeight: "600" },
  emptyBox: { alignItems: "center", marginTop: 40 },
  emptyText: { fontSize: 14, fontWeight: "bold", color: "#64748b" },
  emptySubText: { fontSize: 12, color: "#94a3b8", marginTop: 4 },
});
