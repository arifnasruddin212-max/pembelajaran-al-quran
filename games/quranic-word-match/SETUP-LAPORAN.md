# Konfigurasi Laporan Nilai

Game Qur'anic Word Match sekarang memiliki fitur **Kirim Hasil ke Dosen**.

## Cara mengaktifkan laporan

1. Buat Google Sheet baru, misalnya **Laporan Qur'anic Word Match**.
2. Buka **Extensions → Apps Script**.
3. Hapus kode awal dan tempel isi file `Code.gs` dari folder ini.
4. Simpan.
5. Pilih **Deploy → New deployment → Web app**.
6. Atur **Execute as: Me** dan akses **Anyone**.
7. Klik Deploy, lalu salin **Web app URL**.
8. Buka file `games/quranic-word-match/index.html` di GitHub.
9. Cari:
   `const REPORT_ENDPOINT="";`
10. Tempel Web app URL di antara tanda kutip, lalu simpan/commit.

Setelah itu mahasiswa mengisi **Nama + NIM**, bermain, lalu pada halaman hasil menekan **📤 Kirim Hasil ke Dosen**.

Data akan masuk ke sheet **Hasil Game** dengan kolom tanggal, nama, NIM, skor, benar, salah, level, waktu, dan hasil per surah.

> Catatan: URL Web App bersifat publik sebagai endpoint penerima data. Jangan memasukkan data sensitif selain identitas akademik yang memang diperlukan untuk penilaian.
