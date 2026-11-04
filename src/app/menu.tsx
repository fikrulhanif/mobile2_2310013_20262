import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Praktikum</Text>
      <Text style={styles.subtitle}>
        Aplikasi Mobile 2 - Modul 4 & 5
      </Text>

      {/* Tombol ke Form Mahasiswa */}
      <Link href="/input" asChild>
        <Pressable style={styles.menuButton}>
          <Text style={styles.menuIcon}>📝</Text>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Formulir Mahasiswa</Text>
            <Text style={styles.menuDesc}>
              Input data mahasiswa dengan validasi
            </Text>
          </View>
        </Pressable>
      </Link>

      {/* Tombol ke Kalkulator */}
      <Link href="/kalkulator" asChild>
        <Pressable style={styles.menuButton}>
          <Text style={styles.menuIcon}>🧮</Text>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Kalkulator</Text>
            <Text style={styles.menuDesc}>
              Operasi aritmatika dasar (+, -, ×, ÷)
            </Text>
          </View>
        </Pressable>
      </Link>

      {/* Tombol ke Belajar FlatList */}
      <Link href="/belajarFlatList" asChild>
        <Pressable style={styles.menuButton}>
          <Text style={styles.menuIcon}>📋</Text>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Belajar FlatList</Text>
            <Text style={styles.menuDesc}>
              Pengelolaan data JSON dan FlatList
            </Text>
          </View>
        </Pressable>
      </Link>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Mata Kuliah: Aplikasi Mobile 2</Text>
        <Text style={styles.footerText}>Modul 4 & 5: useState & FlatList</Text>
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
    fontSize: 26,
    fontWeight: "bold",
    color: "#0f172a",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
    marginBottom: 40,
  },
  menuButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  menuIcon: {
    fontSize: 40,
    marginRight: 16,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 4,
  },
  menuDesc: {
    fontSize: 13,
    color: "#64748b",
  },
  footer: {
    marginTop: 40,
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#94a3b8",
    textAlign: "center",
    marginBottom: 2,
  },
});
