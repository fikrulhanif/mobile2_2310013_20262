import React, { createContext, useContext, useState, ReactNode } from "react";

// Interface untuk data mahasiswa
export interface MahasiswaItem {
  id: string;
  nim: string;
  nama: string;
  prodi: string;
  status: "Aktif" | "Cuti";
  noHp: string;
  tahunAngkatan: string;
}

// Interface untuk Context
interface MahasiswaContextType {
  dataMahasiswa: MahasiswaItem[];
  tambahMahasiswa: (mahasiswa: Omit<MahasiswaItem, "id">) => void;
}

// Context
const MahasiswaContext = createContext<MahasiswaContextType | undefined>(undefined);

// Provider Component
export function MahasiswaProvider({ children }: { children: ReactNode }) {
  // Data awal dummy
  const [dataMahasiswa, setDataMahasiswa] = useState<MahasiswaItem[]>([
    { id: "1", nim: "230101001", nama: "Ahmad Fauzi", prodi: "Teknik Informatika", status: "Aktif", noHp: "081234567801", tahunAngkatan: "2023" },
    { id: "2", nim: "230101002", nama: "Budi Santoso", prodi: "Sistem Informasi", status: "Aktif", noHp: "081234567802", tahunAngkatan: "2023" },
    { id: "3", nim: "230101003", nama: "Citra Dewi", prodi: "Teknik Informatika", status: "Aktif", noHp: "081234567803", tahunAngkatan: "2023" },
    { id: "4", nim: "230101004", nama: "Dedi Kurniawan", prodi: "Sistem Informasi", status: "Cuti", noHp: "081234567804", tahunAngkatan: "2023" },
    { id: "5", nim: "230101005", nama: "Eka Rahmawati", prodi: "Teknik Informatika", status: "Aktif", noHp: "081234567805", tahunAngkatan: "2023" }
  ]);

  // Fungsi untuk menambah mahasiswa baru
  const tambahMahasiswa = (mahasiswa: Omit<MahasiswaItem, "id">) => {
    const newId = (dataMahasiswa.length + 1).toString();
    const newMahasiswa: MahasiswaItem = {
      id: newId,
      ...mahasiswa,
    };
    setDataMahasiswa([...dataMahasiswa, newMahasiswa]);
  };

  return (
    <MahasiswaContext.Provider value={{ dataMahasiswa, tambahMahasiswa }}>
      {children}
    </MahasiswaContext.Provider>
  );
}

// Custom Hook untuk menggunakan Context
export function useMahasiswa() {
  const context = useContext(MahasiswaContext);
  if (context === undefined) {
    throw new Error("useMahasiswa must be used within a MahasiswaProvider");
  }
  return context;
}
