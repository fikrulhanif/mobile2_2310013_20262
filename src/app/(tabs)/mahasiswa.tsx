import { StyleSheet, Text, View } from "react-native";

export default function MahasiswaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Data Mahasiswa</Text>
      <Text style={styles.subtitle}>Area integrasi formulir input dan data FlatList.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    padding: 20,
  },
  title: { fontSize: 20, fontWeight: "bold", color: "#072deb" },
  subtitle: { fontSize: 13, color: "#64748b", marginTop: 6 },
});
