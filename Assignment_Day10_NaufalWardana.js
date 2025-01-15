class Siswa {
  constructor(nama, kelas, nilaiMapel, nilaiRataUjian, ranking) {
    this.nama = nama;
    this.kelas = kelas;
    this.nilaiMapel = nilaiMapel;
    this.nilaiRataUjian = nilaiRataUjian;
    this.ranking = ranking;
  }
}

class Sekolahan {
  constructor(daftarSiswa) {
    this.daftarSiswa = daftarSiswa;
  }

  searchNilaiMapel(mapel, nilai) {
    const daftarSiswaByNilaiMapel = this.daftarSiswa.filter(
      (siswa) => siswa.nilaiMapel[mapel] && siswa.nilaiMapel[mapel] === nilai
    );
    return daftarSiswaByNilaiMapel;
  }

  daftarRankingSiswa() {
    const daftarRanking = this.daftarSiswa
      .map((siswa) => ({
        ranking: siswa.ranking,
        nama: siswa.nama,
        kelas: siswa.kelas,
        "nilai rata rata": siswa.nilaiRataUjian,
      }))
      .sort((a, b) => a.ranking - b.ranking);
    return daftarRanking;
  }

  daftarAbsensiSiswa() {
    const daftarAbsensi = [...this.daftarSiswa]
      .sort((a, b) => a.nama.localeCompare(b.nama))
      .map((siswa) => ({
        nama: siswa.nama,
        kelas: siswa.kelas,
      }));

    return daftarAbsensi;
  }
}

// Data siswa
const daftarSiswa = [
  new Siswa("Naufal", "12A", { ipa: 80, Biologi: 90 }, 85.0, 1),
  new Siswa("Johan", "12A", { ipa: 80, Biologi: 90 }, 85.0, 2),
  new Siswa("Wawan", "12A", { ipa: 80, Biologi: 85 }, 82.5, 3),
  new Siswa("Cesar", "12B", { ipa: 80, Biologi: 85 }, 82.5, 4),
];

const sekolahTadikaMesra = new Sekolahan(daftarSiswa);

const daftarSiswaByNilaiMapel = sekolahTadikaMesra.searchNilaiMapel("ipa", 80);
const daftarRankingSiswa = sekolahTadikaMesra.daftarRankingSiswa();
const daftarAbsensiSiswa = sekolahTadikaMesra.daftarAbsensiSiswa();

console.log("=============== DAFTAR SISWA UNTUK PELAJARAN ===============");
console.table(daftarSiswaByNilaiMapel);

console.log("=============== DAFTAR RANKING ===============");
console.table(daftarRankingSiswa);

console.log("=============== DAFTAR ABSENSI ===============");
console.table(daftarAbsensiSiswa);
