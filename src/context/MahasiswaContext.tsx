import React, { createContext, useContext, useState } from "react";
import { Alert } from "react-native";

// 1. Tipe data item mahasiswa
export interface Mahasiswa {
  id: string;
  nim: string;
  nama: string;
  prodi: string;
  status: "Aktif" | "Cuti";
  noHp: string;
  tahunAngkatan: string;
}

// 2. Definisi nilai yang dibagikan oleh Context
interface MahasiswaContextType {
  dataMahasiswa: Mahasiswa[];
  tambahMahasiswa: (mhsBaru: Omit<Mahasiswa, "id">) => void;
  hapusMahasiswa: (id: string) => void;
}

// 3. Inisialisasi wadah Context
const MahasiswaContext = createContext<MahasiswaContextType | undefined>(
  undefined,
);

// 4. Data awal mahasiswa (dummy)
const DATA_AWAL: Mahasiswa[] = [
  {
    id: "1",
    nim: "230101001",
    nama: "Ahmad Fauzi",
    prodi: "Teknik Informatika",
    status: "Aktif",
    noHp: "081234567001",
    tahunAngkatan: "2023",
  },
  {
    id: "2",
    nim: "230101002",
    nama: "Budi Santoso",
    prodi: "Sistem Informasi",
    status: "Aktif",
    noHp: "081234567002",
    tahunAngkatan: "2023",
  },
  {
    id: "3",
    nim: "230101003",
    nama: "Citra Dewi",
    prodi: "Teknik Informatika",
    status: "Aktif",
    noHp: "081234567003",
    tahunAngkatan: "2023",
  },
  {
    id: "4",
    nim: "230101004",
    nama: "Dedi Kurniawan",
    prodi: "Sistem Informasi",
    status: "Cuti",
    noHp: "081234567004",
    tahunAngkatan: "2023",
  },
  {
    id: "5",
    nim: "230101005",
    nama: "Eka Rahmawati",
    prodi: "Teknik Informatika",
    status: "Aktif",
    noHp: "081234567005",
    tahunAngkatan: "2023",
  },
];

// 5. Komponen Provider Pembungkus
export const MahasiswaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dataMahasiswa, setDataMahasiswa] = useState<Mahasiswa[]>(DATA_AWAL);

  // Fungsi menambah data mahasiswa baru (diletakkan di urutan paling atas)
  const tambahMahasiswa = (mhsBaru: Omit<Mahasiswa, "id">) => {
    // TANTANGAN 1: Validasi NIM Unik
    const nimSudahAda = dataMahasiswa.some(
      (m) => m.nim.toLowerCase() === mhsBaru.nim.toLowerCase(),
    );

    if (nimSudahAda) {
      Alert.alert(
        "Gagal",
        `NIM ${mhsBaru.nim} sudah terdaftar! Silakan gunakan NIM yang berbeda.`,
      );
      return;
    }

    const itemBaru: Mahasiswa = {
      id: Date.now().toString(), // Membuat ID unik otomatis berbasis waktu
      ...mhsBaru,
    };
    setDataMahasiswa((prevData) => [itemBaru, ...prevData]);
  };

  // Fungsi menghapus mahasiswa berdasarkan ID
  const hapusMahasiswa = (id: string) => {
    setDataMahasiswa((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <MahasiswaContext.Provider
      value={{ dataMahasiswa, tambahMahasiswa, hapusMahasiswa }}
    >
      {children}
    </MahasiswaContext.Provider>
  );
};

// 6. Custom Hook agar memanggil context menjadi sangat mudah di layar mana pun
export const useMahasiswa = () => {
  const context = useContext(MahasiswaContext);
  if (!context) {
    throw new Error(
      "useMahasiswa wajib digunakan di dalam <MahasiswaProvider>!",
    );
  }
  return context;
};
