function orang(nama, umur, lihat) {

    var adik = {}
    adik.nama = nama,
        adik.jangka = umur,
        adik.lihat = lihat

    document.write(adik.nama, ', umurnya adalah ' + adik.jangka + '. Dan dia sangat ' + adik.lihat)
}
orang('Nasywa', 16, 'cantik')