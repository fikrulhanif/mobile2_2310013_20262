import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useMahasiswa } from "./MahasiswaContext";

export default function ReportMahasiswaScreen() {
  const { dataMahasiswa } = useMahasiswa();

  // Tantangan 3: Hitung statistik dari data real
  const totalMahasiswa = dataMahasiswa.length;
  const mahasiswaAktif = dataMahasiswa.filter(
    (m) => m.status === "Aktif",
  ).length;
  const mahasiswaCuti = dataMahasiswa.filter((m) => m.status === "Cuti").length;
  const teknikInformatika = dataMahasiswa.filter(
    (m) => m.prodi === "Teknik Informatika",
  ).length;
  const sistemInformasi = dataMahasiswa.filter(
    (m) => m.prodi === "Sistem Informasi",
  ).length;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Laporan & Ringkasan Data</Text>
      <Text style={styles.subtitle}>
        Rekapitulasi statistik mahasiswa aktif per semester berjalan:
      </Text>

      {/* Grid 2x2 Kartu Statistik - Tantangan 3: Data Real */}
      <View style={styles.grid}>
        <View style={[styles.card, { borderLeftColor: "#072deb" }]}>
          <Text style={styles.number}>{totalMahasiswa}</Text>
          <Text style={styles.cardLabel}>Total Mahasiswa</Text>
        </View>

        <View style={[styles.card, { borderLeftColor: "#16a34a" }]}>
          <Text style={styles.number}>{mahasiswaAktif}</Text>
          <Text style={styles.cardLabel}>Mahasiswa Aktif</Text>
        </View>

        <View style={[styles.card, { borderLeftColor: "#d97706" }]}>
          <Text style={styles.number}>{teknikInformatika}</Text>
          <Text style={styles.cardLabel}>Teknik Informatika</Text>
        </View>

        <View style={[styles.card, { borderLeftColor: "#7c3aed" }]}>
          <Text style={styles.number}>{sistemInformasi}</Text>
          <Text style={styles.cardLabel}>Sistem Informasi</Text>
        </View>

        <View style={[styles.card, { borderLeftColor: "#dc2626" }]}>
          <Text style={styles.number}>{mahasiswaCuti}</Text>
          <Text style={styles.cardLabel}>Mahasiswa Cuti</Text>
        </View>

        <View style={[styles.card, { borderLeftColor: "#64748b" }]}>
          <Text style={styles.number}>
            {mahasiswaAktif > 0
              ? ((mahasiswaAktif / totalMahasiswa) * 100).toFixed(1)
              : 0}
            %
          </Text>
          <Text style={styles.cardLabel}>Rasio Keaktifan</Text>
        </View>
      </View>

      {/* Kotak Ringkasan Catatan - Tantangan 3: Data Real */}
      <View style={styles.summaryBox}>
        <Text style={styles.summaryTitle}>📌 Catatan Akademik Terkini</Text>
        <Text style={styles.summaryDesc}>
          • Total {totalMahasiswa} mahasiswa terdaftar dalam sistem.{"\n"}•
          Sebanyak {mahasiswaCuti} mahasiswa tercatat sedang mengambil cuti
          kuliah.{"\n"}• Data diperbarui secara otomatis saat mahasiswa baru
          ditambahkan.
        </Text>
      </View>
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
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  card: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 14,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderLeftWidth: 4,
  },
  number: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
  },
  cardLabel: {
    fontSize: 11.5,
    color: "#64748b",
    marginTop: 4,
    fontWeight: "500",
  },
  summaryBox: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 14,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    marginTop: 14,
  },
  summaryTitle: {
    fontSize: 12.5,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 6,
  },
  summaryDesc: {
    fontSize: 12,
    color: "#475569",
    lineHeight: 18,
  },
});
