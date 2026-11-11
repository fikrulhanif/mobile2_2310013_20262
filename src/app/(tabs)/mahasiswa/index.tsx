import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  FlatList,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useMahasiswa } from "./MahasiswaContext";

export default function DataMahasiswaScreen() {
  const { dataMahasiswa } = useMahasiswa();

  const handleCall = (nama: string, noHp: string) => {
    Alert.alert(
      "Hubungi Mahasiswa",
      `Apakah Anda ingin menghubungi ${nama} di nomor ${noHp}?`,
      [
        { text: "Batal", style: "cancel" },
        {
          text: "Hubungi",
          onPress: () => Linking.openURL(`tel:${noHp}`),
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dataMahasiswa}
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

              {/* Tantangan 2: Info Tambahan */}
              <Text style={styles.extraInfo}>📱 {item.noHp}</Text>
              <Text style={styles.extraInfo}>
                🎓 Angkatan {item.tahunAngkatan}
              </Text>
            </View>

            {/* Area Kanan: Badge dan Tombol */}
            <View style={styles.rightArea}>
              {/* Badge Status */}
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

              {/* Tantangan 2: Tombol Aksi Call */}
              <TouchableOpacity
                style={styles.callButton}
                onPress={() => handleCall(item.nama, item.noHp)}
                activeOpacity={0.7}
              >
                <Ionicons name="call" size={16} color="#ffffff" />
              </TouchableOpacity>
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
    alignItems: "flex-start",
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
  extraInfo: {
    fontSize: 11,
    color: "#64748b",
    marginTop: 3,
  },
  rightArea: {
    alignItems: "flex-end",
    gap: 8,
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
  callButton: {
    backgroundColor: "#16a34a",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
