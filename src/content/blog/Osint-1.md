---
title: "OSINT-1: Mencari username social media"
description: Artikel ini menjelaskan OSINT (Open Source Intelligence) dan penggunaan tools Sharelock untuk mencari username di berbagai platform media sosial, dengan panduan langkah demi langkah dan contoh kasus nyata. Artikel ini untuk tujuan edukasi.
pubDate: 2024-07-06
tags:
  - CyberSecurity
  - OSINT
---
# Apa itu OSINT (Open Source Intelligence)

Open Source Intelligence atau OSINT dapat didefinisikan sebagai metode pengumpulan dan pengolahan informasi publik yang dapat menghasilkan intelijen. Metode ini terdiri dari input data dari berbagai sumber seperti situs web media sosial, catatan publik, situs web, forum, artikel berita, dan lain-lain. OSINT telah digunakan secara luas di berbagai bidang seperti keamanan siber, penegakan hukum, jurnalisme, dan intelijen kompetitif.

# Tools OSINT

Ada banyak tools yang dapat digunakan untuk mengumpulkan dan menganalisis informasi dalam OSINT. Beberapa tools populer termasuk Maltego, The Harvester dan banyak lagi. Tools ini dapat membantu dalam mengotomatisasi proses pengumpulan data, membuat visualisasi hubungan antara data, dan memberikan wawasan yang lebih mendalam mengenai subjek yang sedang diteliti. Namun kali ini saya akan menggunakan tools yang sederhana saja dan cukup populer yaitu Sharelock.
# Sharelock
Sharelock adalah salah satu tools OSINT yang sangat berguna untuk menemukan keberadaan username tertentu di berbagai platform sosial media dan situs web lainnya. Dengan memasukkan username yang ingin dicari, Sharelock akan melakukan pencarian otomatis di berbagai situs untuk melihat apakah username tersebut sudah digunakan atau tersedia. Hal ini sangat berguna untuk melakukan pengawasan atau pengecekan terhadap keberadaan dan aktivitas online seseorang.
# Installasi Tools
Untuk Menjalakan tools tersebut tentunya harus sudah menyelesaikan tahap installasi terlebih dahulu, pastikan sudah menginstall python3+. Buka command prompt, Jika sudah ikuti command dibawah ini.

```
pip install sherlock-project
```
> Jika gagal pada proses installasi gunakan command dibawah ini
```
pip install sherlock-project --user
```

# Menjalankan Tools
Jika tools sudah terinstall kamu bisa langsung menjalankan tools tersebut dengan command dibawah ini.
```
python -m sherlock username
```


## Real Case
Pada real case ini saya mencontohkan pada akun instagram shakiraamirah, saya ingin mencari username social media lainnya dengan username instagram tersebut.

![](../../assets/20240706011444.png)

Tinggal kita jalankan toolsnya.

```
python -m sherlock shakiraamirah 
```

## Hasil akhir
Dapat di lihat hasil pencariannya cukup menarik 🗿
```
> python -m sherlock shakiraamirah
[*] Checking username shakiraamirah on:

[+] Academia.edu: https://independent.academia.edu/shakiraamirah
[+] AllMyLinks: https://allmylinks.com/shakiraamirah
[+] AskFM: https://ask.fm/shakiraamirah
[+] Duolingo: https://www.duolingo.com/profile/shakiraamirah
[+] HackerRank: https://hackerrank.com/shakiraamirah
[+] SlideShare: https://slideshare.net/shakiraamirah
[+] Smule: https://www.smule.com/shakiraamirah
[+] Snapchat: https://www.snapchat.com/add/shakiraamirah
[+] Telegram: https://t.me/shakiraamirah

[*] Search completed with 9 results
```

> **CATATAN**: Username yang dicari belum tentu milik orang yang sama bisa saja milik orang lain.

# Tambahan
Jika dirasa sulit untuk melakukan penginstallan dan lainnya, berikut beberapa list website untuk mengecekan username versi website:

```
- whatsmyname.app
- usersearch.org
- instantusername.com
```
# Kesimpulan
Artikel ini disusun untuk tujuan edukasi semata. OSINT (Open Source Intelligence) adalah metode yang kuat untuk mengumpulkan informasi dari sumber publik. Dalam praktiknya, OSINT menggunakan berbagai tools untuk mengotomatisasi proses pengumpulan data dan memberikan wawasan yang mendalam. Salah satu tools yang sederhana dan populer adalah Sharelock, yang memungkinkan kita untuk mencari username di berbagai platform sosial media dan situs web lainnya. 

Melalui contoh real case menggunakan username "shakiraamirah", kita bisa melihat bagaimana Sharelock dapat mengidentifikasi keberadaan username tersebut di berbagai situs. Hasil pencarian ini dapat berguna untuk berbagai tujuan seperti keamanan siber, investigasi penegakan hukum, atau pengecekan keberadaan digital seseorang.

Penting untuk selalu memperhatikan etika dan legalitas dalam pengumpulan dan penggunaan informasi melalui OSINT. Data yang ditemukan belum tentu milik orang yang sama dan harus diperlakukan dengan hati-hati untuk menghindari kesalahan identifikasi.

> This article is for educational purposes only.


