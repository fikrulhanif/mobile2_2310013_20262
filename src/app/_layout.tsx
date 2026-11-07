import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Sembunyikan header stack agar header Tabs yang tampil */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* Menu modul lama (accessible via /menu) */}
      <Stack.Screen name="index_lama" options={{ title: "Menu Praktikum" }} />

      {/* Screen modul-modul lama (bisa diakses manual via Link) */}
      <Stack.Screen name="input" options={{ title: "Form Mahasiswa" }} />
      <Stack.Screen name="kalkulator" options={{ title: "Kalkulator" }} />
      <Stack.Screen
        name="belajarFlatList"
        options={{ title: "Belajar FlatList" }}
      />
    </Stack>
  );
}
