---
sidebar_position: 6
---

# Membuat sebuah Model Formulir Baru

## 1. Memulai Membuat Model Formulir

Membuat sebuah Model Formulir dapat dilakukan dengan cara menekan tombol tambah seperti gambar di bawah ini.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-1.png)

Setelah Anda menekan tombol tersebut, Model Formulir akan otomatis terbuat dan tersimpan. Kemudian Anda akan otomatis dialihkan ke halaman Buat/Edit Model Formulir (https://dev.worx.id/forms/edit/:id).

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-2.png)

Pada halaman Buat/Edit Model Formulir, Anda akan melihat banyak bagian dan juga elemen yang dimana itu akan dijelaskan pada bagian terpisah karena penjelasannya yang cukup panjang. Informasi tambahan, pada halaman Buat/Edit Model Formulir tidak terdapat tombol simpan karena sistem akan secara otomatis menyimpan sebuah perubahan ketika ada yang diperbarui pada bagian ataupun elemen. Secara bawaan ketika anda membuat sebuah Model Formulir, nama Model Formulir adalah "New Form" dan deskripsi Model Formulir adalah "Description".

## 2. Penjelasan Bagian

### 1. Toolbox (Drag & Drop)

Bagian Toolbox merupakan bagian untuk daftar elemen-elemen input yang digunakan untuk membangun Model Formulir. Hingga saat ini sudah ada 15 elemen input yaitu Text Field, Checkbox, Radio Group, Yes/No (Boolean), Dropdown, Date, Time, Separator, Rating, Integer, File, Photo, Signature, Sketch, dan Barcode.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-3.png#center)

Elemen-elemen input tersebut akan dijelaskan pada bagian yang terpisah.

### 2. Form Fields

Bagian Form Fields merupakan bagian yang berisi daftar elemen-elemen input yang akan ditampilkan pada Model Formulir. Bagian Form Fields dapat diisi dengan cara menyeret salah satu elemen dari Bagian Toolbox dan menjatuhkan elemen tersebut ke Bagian Form Fields. Anda dapat melihat contoh cara menyeret & menjatuhkan sebuah elemen input seperti video di bawah ini.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-4.gif)

Pada video di atas, Anda dapat melihat bagaimana proses dari menyeret & menjatuhkan serta bagaimana sistem penyimpanan secara otomatis bekerja. Pada Form Fields, posisi dari elemen-elemen input dapat diubah dengan cara menyeret & menjatuhkan sebuah elemen input. Contohnya seperti video di atas.

### 3. Properties

Bagian properties merupakan bagian yang berisi input-input yang digunakan untuk mengatur setiap elemen-elemen input. Setiap elemen input memiliki pengaturan yang spesifik dan juga memiliki pengaturan yang sama. Pengaturan pada elemen-elemen input akan dijelaskan pada bagian terpisah. Sebagai contoh elemen “Header Info” memiliki field properties “Nama Formulir” dan “Keterangan”.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-5.png)

Catatan: Field Properties dari setiap elemen dapat dilihat dengan cara menekan salah satu elemen input pada Bagian Form Fields. Secara otomatis, Bagian Properties akan ikut berubah mengikuti elemen input yang dipilih.

Pada Field Properties terdapat dua tombol, yaitu tombol hapus dan tombol duplikasi. Tombol hapus (berikon tempat sampah) berfungsi untuk menghapus elemen yang sedang Anda pilih. Tombol duplikasi yang berada disebelah kanan tombol hapus, berfungsi untuk melakukan duplikasi pada elemen yang sedang anda pilih.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-6.png#center)

### 4. Preview

Bagian Preview merupakan bagian untuk menampilkan preview halaman Isi Formulir untuk versi aplikasi mobile dari Model Formulir yang anda buat. Sebagai contoh seperti gambar di bawah ini.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-7.png)

Elemen-elemen input yang muncul di Bagian Preview berasal dari Bagian Form Fields. ketika Anda menyeret & menjatuhkan sebuah elemen dari Bagian Toolbox ke Bagian Form Fields, secara otomatis elemen tersebut akan muncul di Bagian Preview.

## 3.Penjelasan Elemen-Elemen

### 1. Info Tajuk (Header Info)

Info Tajuk digunakan untuk mengatur judul dan keterangan dari Model Formulir yang anda buat. Info Tajuk ini akan muncul pada halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-8.png)

Info Tajuk memiliki 2 field properties, yaitu nama formulir dan keterangan. Berikut ini penjelasan mengenai field properties dari Info Tajuk.

#### 1. Nama Formulir (Form Name)

Nama Formulir berfungsi untuk mengatur judul dari Model Formulir yang anda buat dan field ini wajib diisi.

#### 2. Keterangan (Description)

Keterangan berfungsi untuk mengatur keterangan dari Model Formulir yang anda buat dan field ini wajib diisi.

Anda dapat melihat preview dari Info Tajuk pada Bagian Preview, hasilnya seperti gambar di bawah ini. Nama formulir dan keterangan akan terpasang sebagai judul dan juga keterangan.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-9.png#center)

### 2. Input Teks (Text Field)

Input Teks berfungsi untuk memasukan data seperti huruf, angka dan simbol. Pada Input Teks, Anda dibebaskan untuk memasukan karakter apapun. Input Teks digunakan untuk mengumpulkan data seperti email, nama lengkap, alamat dan lain sebagainya. Jumlah maksimal karakter yang bisa dimasukan ke Input Teks adalah 1024 karakter.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-10.png)

Input Teks memiliki 4 field properties, yaitu Label, Keterangan, Memungkinkan beberapa baris, dan Wajib. Berikut ini penjelasan mengenai field properties dari Input Teks.

#### 1. Label

Label berfungsi untuk mengatur judul dari Input Teks, Label ini tidak wajib diisi atau boleh dikosongkan. Label ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 2. Keterangan (Description)

Keterangan berfungsi untuk mengatur keterangan dari Input Teks, Keterangan ini tidak wajib diisi atau boleh dikosongkan. Keterangan ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 3. Memungkinkan Beberapa Baris (Allows Multiple Lines)

Memungkinkan Beberapa Baris berfungsi untuk mengatur apakah Publik dapat memasukan data tidak hanya satu baris saja tetapi bisa lebih dari satu baris dengan cara menekan enter pada input teks.

#### 4. Wajib (Required)

Wajib berfungsi untuk mengatur jika Input Teks ini wajib diisi di halaman Isi Formulir. Proses pemeriksaan akan terjadi di server dan akan ada notifikasi bahwa Input Teks wajib diisi.

Anda dapat melihat Preview dari Input Teks pada Bagian Preview, hasilnya seperti gambar di bawah ini. Terdapat label, keterangan serta Input Teks.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-11.png#center)

### 3. Kotak Centang (Checkbox)

Kotak Centang berfungsi untuk memberikan opsi pilihan jawaban lebih dari satu yang dimana Anda dapat memilih lebih dari satu opsi jawaban. Kotak Centang digunakan untuk membuat opsi jawaban yang sudah disediakan dan dapat memilih lebih dari 1 jawaban.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-12.png)

Kotak Centang memiliki 6 field properties, yaitu Label, Keterangan, Daftar Opsi, Minimal Centang Opsi, Maksimal Centang Opsi, dan Wajib. Berikut ini penjelasan mengenai field properties dari Kotak Centang.

#### 1. Label

Label berfungsi untuk mengatur judul dari Kotak Centang, Label ini tidak wajib diisi atau boleh dikosongkan. Label ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 2. Keterangan (Description)

Keterangan berfungsi untuk mengatur keterangan dari Kotak Centang, Keterangan ini tidak wajib diisi atau boleh dikosongkan. Keterangan ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 3. Daftar Opsi (Option & Add Options)

Pada Daftar Opsi, terdapat Tombol Tambah Opsi (Add Options) dan Input Teks Opsi. Tombol Tambah Opsi berfungsi untuk menambahkan opsi jawaban. Ketika anda menekan Tombol Tambah Opsi, maka akan muncul Input Teks yang dimana anda dapat menambahkan teks jawaban, selain itu juga terdapat Tombol berikon X yang berfungsi untuk menghapus opsi tersebut.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-13.png)

#### 4. Minimal Centang Opsi (Min. Checked Positions)

Minimal Centang Opsi berfungsi untuk mengatur berapa jumlah minimal opsi yang harus dicentang.

#### 5. Maksimal Centang Opsi (Max. Checked Positions)

Maksimal Centang Opsi berfungsi untuk mengatur berapa jumlah maksimal opsi yang bisa dicentang.

#### 6. Wajib (Required)

Wajib berfungsi untuk mengatur jika Kotak Centang ini wajib diisi di halaman Isi Formulir. Proses pemeriksaan akan terjadi di server dan akan ada notifikasi bahwa Kotak Centang wajib diisi.

Anda dapat melihat Preview dari Kotak Centang pada Bagian Preview, hasilnya seperti gambar di bawah ini. Terdapat label, keterangan serta daftar opsi.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-14.png#center)

### 4. Group Radio (Radio Group)

Grup Radio berfungsi untuk memberikan opsi pilihan jawaban lebih dari satu tetapi Anda hanya dapat memilih satu opsi jawaban. Grup Radio digunakan untuk membuat opsi jawaban yang sudah disediakan tetapi hanya bisa memilih satu opsi jawaban.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-15.png)

Grup Radio memiliki 4 field properties, yaitu Label, Keterangan, Daftar Opsi, dan Wajib. Berikut ini penjelasan mengenai field properties dari Grup Radio.

#### 1. Label

Label berfungsi untuk mengatur judul dari Grup Radio, Label ini tidak wajib diisi atau boleh dikosongkan. Label ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 2. Keterangan (Description)

Keterangan berfungsi untuk mengatur keterangan dari Grup Radio, Keterangan ini tidak wajib diisi atau boleh dikosongkan. Keterangan ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 3. Daftar Opsi (Option & Add Options)

Pada Daftar Opsi, terdapat Tombol Tambah Opsi (Add Options) dan Input Teks Opsi. Tombol Tambah Opsi berfungsi untuk menambahkan opsi jawaban. Ketika anda menekan Tombol Tambah Opsi, maka akan muncul Input Teks yang dimana anda dapat menambahkan teks jawaban, selain itu juga terdapat tombol berikon X yang berfungsi untuk menghapus opsi tersebut.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-16.png#center)

#### 4. Wajib (Required)

Wajib berfungsi untuk mengatur jika Grup Radio ini wajib diisi di halaman Isi Formulir. Proses pemeriksaan akan terjadi di server dan akan ada notifikasi bahwa Grup Radio wajib diisi.

Anda dapat melihat Preview dari Grup Radio pada Bagian Preview, hasilnya seperti gambar di bawah ini. Terdapat label, keterangan serta daftar opsi.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-17.png#center)

### 5. Ya Atau Tidak (Yes/No)

Ya Atau Tidak berfungsi untuk memberikan opsi jawaban Ya (Yes) atau Tidak (No), bentuk inputnya hampir sama dengan Grup Radio (Radio Group) tetapi opsi jawabannya sudah langsung disediakan oleh sistem. Anda hanya dapat memilih satu jawaban yaitu Ya (Yes) atau Tidak (No).

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-18.png)

Ya atau Tidak hanya memiliki 1 field properties, yaitu Label. Berikut ini penjelasan mengenai field properties dari Ya atau Tidak.

#### 1. Label

Label berfungsi untuk mengatur judul dari Ya atau Tidak, Label ini tidak wajib diisi atau boleh dikosongkan. Label ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

Anda dapat melihat Preview dari Ya atau Tidak pada Bagian Preview, hasilnya seperti gambar di bawah ini. Terdapat label serta pilihan opsi Ya (Yes) dan Tidak (No).

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-19.png#center)

### 6. Tarik-Turun (Dropdown)

Tarik-Turun berfungsi untuk memunculkan daftar opsi agar pengguna dapat memilih salah satu dari daftar opsi yang ada. Tarik-Turun digunakan untuk mengumpulkan data seperti asal negara dan lain sebagainya.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-20.png)

Tarik-Turun memiliki 4 field properties, yaitu Label, Keterangan, Daftar Opsi, dan Wajib. Berikut ini penjelasan mengenai field properties dari Tarik-Turun.

#### 1. Label

Label berfungsi untuk mengatur judul dari Tarik-Turun, Label ini tidak wajib diisi atau boleh dikosongkan. Label ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 2. Keterangan (Description)

Keterangan berfungsi untuk mengatur keterangan dari Tarik-Turun, Keterangan ini tidak wajib diisi atau boleh dikosongkan. Keterangan ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 3. Daftar Opsi (Option & Add Options)

Pada Daftar Opsi, terdapat Tombol Tambah Opsi (Add Options) dan Input Teks Opsi. Tombol Tambah Opsi berfungsi untuk menambahkan opsi jawaban. Ketika anda menekan Tombol Tambah Opsi, maka akan muncul Input Teks yang dimana anda dapat menambahkan teks jawaban, selain itu juga terdapat Tombol berikon X yang berfungsi untuk menghapus opsi tersebut.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-21.png#center)

#### 4. Wajib (Required)

Wajib berfungsi untuk mengatur jika Tarik-Turun ini wajib diisi di halaman Isi Formulir. Proses pemeriksaan akan terjadi di server dan akan ada notifikasi bahwa Tarik-Turun wajib diisi.

Anda dapat melihat Preview dari Tarik-Turun pada Bagian Preview, hasilnya seperti gambar di bawah ini. Terdapat label, keterangan serta daftar opsi.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-22.png#center)

### 7. Tanggal (Date)

Tanggal berfungsi untuk membantu memasukkan tanggal dengan memilih dari kalender tanpa harus memasukkan secara manual di kolom input teks. Tanggal digunakan untuk mengumpulkan data seperti tanggal lahir dan lain sebagainya.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-23.png)

Tanggal memiliki 5 field properties, yaitu Label, Keterangan, Nonaktifkan Pemilihan Tanggal di Masa Mendatang, Nonaktifkan Pemilihan Tanggal di Masa Lalu, dan Wajib. Berikut ini penjelasan mengenai field properties dari Input Teks.

#### 1. Label

Label berfungsi untuk mengatur judul dari Tanggal, Label ini tidak wajib diisi atau boleh dikosongkan. Label ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 2. Keterangan (Description)

Keterangan berfungsi untuk mengatur keterangan dari Tanggal, Keterangan ini tidak wajib diisi atau boleh dikosongkan. Keterangan ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 3. Nonaktifkan Pemilihan Tanggal di Masa Mendatang (Disable date selection in the future)

Properti ini digunakan untuk membatasi Anda untuk tidak bisa memilih tanggal di atas hari ini. Sebagai contoh, hari ini tanggal 11 Januari maka anda tidak bisa memilih tanggal di atas 11 Januari.

#### 4. Nonaktifkan Pemilihan Tanggal di Masa Lalu (Disable date selection in the past)

Properti ini digunakan untuk membatasi Anda untuk tidak bisa memilih tanggal di bawah hari ini. Sebagai contoh, hari ini tanggal 11 Januari maka anda tidak bisa memilih tanggal di bawah 11 Januari.

#### 5. Wajib (Required)

Wajib berfungsi untuk mengatur jika Tanggal ini wajib diisi di halaman Isi Formulir. Proses pemeriksaan akan terjadi di server dan akan ada notifikasi bahwa Tanggal wajib diisi.

Anda dapat melihat Preview dari Tanggal pada Bagian Preview, hasilnya seperti gambar di bawah ini. Terdapat label, keterangan serta input teks, dan tombol pilih tanggal (berikon kalender).

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-24.png#center)

### 8. Waktu (Time)

Waktu berfungsi untuk membantu memasukkan waktu dengan memilih dari jam tanpa harus memasukkan secara manual di kolom input teks. Jam digunakan untuk mengumpulkan data seperti jam masuk, jam keluar dan lain sebagainya.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-25.png)

Waktu hanya memiliki 1 field properties, yaitu Label. Berikut ini penjelasan mengenai field properties dari Waktu.

#### 1. Label

Label berfungsi untuk mengatur judul dari Waktu, Label ini tidak wajib diisi atau boleh dikosongkan. Label ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

Anda dapat melihat Preview dari Waktu pada Bagian Preview, hasilnya seperti gambar di bawah ini. Terdapat label serta tombol pilih jam (berikon jam).

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-26.png#center)

### 9. Pemisah (Separator)

Pemisah berfungsi untuk memberikan batas yang berupa garis, judul dan keterangan. Pemisah digunakan untuk mengelompokkan elemen-elemen input, seperti elemen-elemen input khusus data pribadi dan lain sebagainya.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-27.png)

Pemisah memiliki 2 field properties, yaitu Label dan Keterangan. Berikut ini penjelasan mengenai field properties dari Pemisah.

#### 1. Label

Label berfungsi untuk mengatur judul dari Pemisah, Label ini tidak wajib diisi atau boleh dikosongkan. Label ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 2. Keterangan (Description)

Keterangan berfungsi untuk mengatur keterangan dari Pemisah, Keterangan ini tidak wajib diisi atau boleh dikosongkan. Keterangan ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

Anda dapat melihat Preview dari Pemisah pada Bagian Preview, hasilnya seperti gambar di bawah ini. Terdapat label, keterangan, serta garis pembatas.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-28.png#center)

### 10. Peringkat (Rating)

Peringkat berfungsi untuk memberikan penilaian dalam bentuk bintang terhadap sesuatu. Peringkat digunakan untuk mengumpulkan data seperti kepuasan pelanggan dan lain sebagainya.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-29.png)

Peringkat memiliki 4 field properties, yaitu Label, Keterangan, Hitungan Bintang, dan Wajib. Berikut ini penjelasan mengenai field properties dari Peringkat.

#### 1. Label

Label berfungsi untuk mengatur judul dari Peringkat, Label ini tidak wajib diisi atau boleh dikosongkan. Label ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 2. Keterangan (Description)

Keterangan berfungsi untuk mengatur keterangan dari Peringkat, Keterangan ini tidak wajib diisi atau boleh dikosongkan. Keterangan ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 3. Hitungan Bintang (Stars Count)

Hitungan Bintang berfungsi untuk mengatur jumlah maksimal peringkat bintang yang bisa diinputkan akan tetapi Hitungan Bintang dibatasi hanya bisa sampai 10.

#### 4. Wajib (Required)

Wajib berfungsi untuk mengatur jika Peringkat ini wajib diisi di halaman Isi Formulir. Proses pemeriksaan akan terjadi di server dan akan ada notifikasi bahwa Peringkat wajib diisi.

Anda dapat melihat Preview dari Peringkat pada Bagian Preview, hasilnya seperti gambar di bawah ini. Terdapat label, keterangan serta input peringkat.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-30.png#center)

### 11. Bilangan Bulat (Integer)

Bilangan Bulat berfungsi untuk memasukan data berupa angka saja. Bilangan Bulat hampir sama dengan Input Teks tapi Bilangan Bulat hanya bisa menginputkan angka. Bilangan Bulat digunakan untuk mengumpulkan data seperti usia, berat badan dan lain sebagainya.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-31.png)

Bilangan Bulat hanya memiliki 1 field properties, yaitu Label. Berikut ini penjelasan mengenai field properties dari Bilangan Bulat.

#### 1. Label

Label berfungsi untuk mengatur judul dari Bilangan Bulat, Label ini tidak wajib diisi atau boleh dikosongkan. Label ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

Anda dapat melihat Preview dari Bilangan Bulat pada Bagian Preview, hasilnya seperti gambar di bawah ini. Terdapat label serta input.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-32.png#center)

### 12. File

Berkas berfungsi untuk mengunggah berkas ke formulir, hingga saat ini format yang bisa di unggah adalah CSV, DOC, PDF, and XLS. Berkas digunakan untuk mengumpulkan data berkas seperti laporan mingguan dan lain sebagainya.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-33.png)

Berkas memiliki 9 field properties, yaitu Label, Keterangan, Maksimal Berkas, Format Berkas, Minimal Ukuran Berkas, Format Ukuran Minimal Berkas, Maksimal Ukuran Berkas, Format Ukuran Maksimal Berkas dan Wajib. Berikut ini penjelasan mengenai field properties dari Berkas.

#### 1. Label

Label berfungsi untuk mengatur judul dari Berkas, Label ini tidak wajib diisi atau boleh dikosongkan. Label ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 2. Keterangan (Description)

Keterangan berfungsi untuk mengatur keterangan dari Berkas, Keterangan ini tidak wajib diisi atau boleh dikosongkan. Keterangan ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 3. Maksimal Berkas (Max. Number of Files)

Maksimal Berkas berfungsi untuk mengatur batas jumlah berkas yang bisa diunggah ke laporan.

#### 4. Format Berkas (Format File)

Format Berkas berfungsi untuk mengatur format apa saja yang bisa diunggah ke laporan. Saat ini terdapat 4 jenis format, yaitu CSV, DOC, PDF, and XLS. Opsi "jenis format apapun" artinya bisa menggugah format CSV, DOC, PDF, and XLS.

#### 5. Minimal Ukuran Berkas (Min. File Size)

Minimal Ukuran Berkas berfungsi untuk mengatur berapa minimal ukuran berkas yang bisa diunggah.

#### 6. Format Ukuran Minimal Berkas (Min. File Size)

Format Ukuran Minimal Berkas berfungsi untuk mengatur format dari Minimal Ukuran Berkas. Terdapat 3 format, yaitu bytes, KB, dan MB.

#### 7. Maksimal Ukuran Berkas (Max. File Size)

Maksimal Ukuran Berkas berfungsi untuk mengatur berapa maksimal ukuran berkas yang bisa diunggah.

#### 8. Format Ukuran Maksimal Berkas (Max. File Size)

Format Ukuran Maksimal Berkas berfungsi untuk mengatur format dari Maksimal Ukuran Berkas. Terdapat 3 format, yaitu Bytes, KB, dan MB.

#### 9. Wajib (Required)

Wajib berfungsi untuk mengatur jika Berkas ini wajib diisi di halaman Isi Formulir. Proses pemeriksaan akan terjadi di server dan akan ada notifikasi bahwa Berkas wajib diisi.

Anda dapat melihat Preview dari Berkas pada Bagian Preview, hasilnya seperti gambar di bawah ini. Terdapat label, dan Tombol Tambah Berkas (Add File).

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-34.png#center)

### 13. Foto (Photo)

Foto berfungsi untuk mengunggah foto melalui galeri ataupun mengambil foto secara langsung melalui kamera yang kemudian akan dikirim ke formulir. Foto digunakan untuk mengumpulkan data seperti foto kartu identitas dan lain sebagainya.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-35.png)

Foto memiliki 5 field properties, yaitu Label, Keterangan, dan Wajib. Berikut ini penjelasan mengenai field properties dari Foto.

#### 1. Label

Label berfungsi untuk mengatur judul dari Foto, Label ini tidak wajib diisi atau boleh dikosongkan. Label ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 2. Keterangan (Description)

Keterangan berfungsi untuk mengatur keterangan dari Foto, Keterangan ini tidak wajib diisi atau boleh dikosongkan. Keterangan ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 3. Maksimal Gambar (Max. Number of Images)

Maksimal Gambar berfungsi untuk mengatur berapa jumlah maksimal foto/gambar yang bisa diunggah ke Formulir.

#### 4. Diizinkan Mengunggah Dari Galeri (Allow Upload From Galery)

Diizinkan Mengunggah Dari Galeri berfungsi untuk mengizinkan mengunggah foto/gambar melalui galeri.

#### 5. Wajib (Required)

Wajib berfungsi untuk mengatur jika Foto ini wajib diisi di halaman Isi Formulir. Proses pemeriksaan akan terjadi di server dan akan ada notifikasi bahwa Foto wajib diisi.

Anda dapat melihat Preview dari Foto pada Bagian Preview, hasilnya seperti gambar di bawah ini. Terdapat label, keterangan, Tombol Kamera (Camera), dan Tombol Galeri (Gallery).

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-36.png#center)

### 14. Tanda Tangan (Signature)

Tanda Tangan berfungsi untuk memasukan tanda tangan ke Formulir. Tanda Tangan digunakan untuk mengumpulkan data seperti tanda tangan kehadiran dan lain sebagainya.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-37.png)

Tanda Tangan memiliki 3 field properties, yaitu Label, Keterangan, dan Wajib. Berikut ini penjelasan mengenai field properties dari Tanda Tangan.

#### 1. Label

Label berfungsi untuk mengatur judul dari Tanda Tangan, Label ini tidak wajib diisi atau boleh dikosongkan. Label ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 2. Keterangan (Description)

Keterangan berfungsi untuk mengatur keterangan dari Tanda Tangan, Keterangan ini tidak wajib diisi atau boleh dikosongkan. Keterangan ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 3. Wajib (Required)

Wajib berfungsi untuk mengatur jika Tanda Tangan ini wajib diisi di halaman Isi Formulir. Proses pemeriksaan akan terjadi di server dan akan ada notifikasi bahwa Tanda Tangan wajib diisi.

Anda dapat melihat Preview dari Tanda Tangan pada Bagian Preview, hasilnya seperti gambar di bawah ini. Terdapat label, keterangan serta Tombol Tambah Tanda Tangan (Add Signature).

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-38.png#center)

### 15. Sketsa (Sketch)

Sketsa berfungsi untuk memungkinkan Anda untuk menggambar di atas kanvas, selain itu Anda juga bisa menambahkan foto/gambar sebagai latar belakang. Sketsa digunakan untuk membantu memberikan informasi gambar/foto menjadi lebih jelas.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-39.png)

Sketsa hanya memiliki 1 field properties, yaitu Label. Berikut ini penjelasan mengenai field properties dari Sketsa.

#### 1. Label

Label berfungsi untuk mengatur judul dari Sketsa, Label ini tidak wajib diisi atau boleh dikosongkan. Label ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

Anda dapat melihat Preview dari Sketsa pada Bagian Preview, hasilnya seperti gambar di bawah ini. Terdapat label serta Tombol Sketsa (berikon kuas).

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-40.png#center)

### 16. Kode Batang (Barcode)

Kode Batang berfungsi untuk memindai 1D kode batang ataupun 2D kode batang. Terdapat 2 cara untuk memindai Kode Batang, yaitu melalui unggah lewat galeri atau memindai lewat kamera.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-41.png#center)

Kode Batang memiliki 4 field properties, yaitu Label, Batasi Hanya Untuk 1D Kode Batang, Pengguna Bisa Menulis Manual, dan Wajib. Berikut ini penjelasan mengenai field properties dari Kode Batang.

#### 1. Label

Label berfungsi untuk mengatur judul dari Kode Batang, Label ini tidak wajib diisi atau boleh dikosongkan. Label ini akan muncul di halaman Isi Formulir di website Worx dan aplikasi mobile Worx.

#### 2. Batasi Hanya Untuk 1D Kode Batang (Restrict to 1D Barcodes Only)

Batasi Hanya Untuk 1D Kode Batang berfungsi untuk mengatur jika kode batang yang bisa dipindai hanya yang berjenis 1D Kode Batang.

#### 3. Pengguna Bisa Menulis Manual (User Can Manually Override)

Pengguna Bisa Menulis Manual berfungsi untuk mengatur kalau input teks hasil dari pemindaian dapat diubah secara manual.

#### 4. Wajib (Required)

Wajib berfungsi untuk mengatur jika Kode Batang ini wajib diisi di halaman Isi Formulir. Proses pemeriksaan akan terjadi di server dan akan ada notifikasi bahwa Kode Batang wajib diisi.

Anda dapat melihat Preview dari Kode Batang pada Bagian Preview, hasilnya seperti gambar di bawah ini. Terdapat label, input teks hasil pemindaian, dan tombol pemindaian (berikon QR code).

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-42.png#center)
