var handphone = {

    merk: 'Oppo',
    kamera: ['16 MP', '32 MP', '64 MP'],
    spec: {
        proci: 'Snapdragon 855',
        gpu: 'Adreno 420',
        madein: 'China'
    }
}
document.write('Merk <i>handphone: </i>', handphone.merk, '<br>Prosesor: ', handphone.spec.proci, '<br>Tipe kamera: ',
    handphone.kamera[1])