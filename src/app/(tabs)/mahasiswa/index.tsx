import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

interface MahasiswaItem {
  id: string;
  nim: string;
  nama: string;
  prodi: string;
  status: "Aktif" | "Cuti";
}

// Data dummy untuk praktikum
const DATA_MAHASISWA: MahasiswaItem[] = [
  { id: "1", nim: "230101001", nama: "Ahmad Fauzi", prodi: "Teknik Informatika", status: "Aktif" },
  { id: "2", nim: "230101002", nama: "Budi Santoso", prodi: "Sistem Informasi", status: "Aktif" },
  { id: "3", nim: "230101003", nama: "Citra Dewi", prodi: "Teknik Informatika", status: "Aktif" },
  { id: "4", nim: "230101004", nama: "Dedi Kurniawan", prodi: "Sistem Informasi", status: "Cuti" },
  { id: "5", nim: "230101005", nama: "Eka Rahmawati", prodi: "Teknik Informatika", status: "Aktif" }
];

export default function DataMahasiswaScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA_MAHASISWA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listArea}
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

            {/* Badge Status */}
            <View
              style={[
                styles.badge,
                item.status === "Aktif" ? styles.badgeActive : styles.badgeInactive,
              ]}
            >
              <Text
                style={[
                  styles.badgeText,
                  item.status === "Aktif" ? styles.badgeTextActive : styles.badgeTextInactive,
                ]}
              >
                {item.status}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  listArea: {
    padding: 16,
    gap: 12,
  },
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
  prodiText: {
    fontSize: 12,
    color: "#072deb",
    marginTop: 2,
  },
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
  badgeTextInactive: {
    color: "#dc2626",
  },
});
