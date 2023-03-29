bilangan = ["Nol", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan"]

def terbilang(angka):
  if angka <= 2000:
    return "Angka harus lebih besar dari 2000"
  strAngka = str(angka)
  if len(strAngka) > 4:
    return "Harus 4 digit angka"
  idxRibuan = int(strAngka[0])
  idxRatusan = int(strAngka[1])
  idxPuluhan = int(strAngka[2])
  idxSatuan = int(strAngka[3])
  ribuan = bilangan[idxRibuan] + " Ribu"
  ratusan = ""
  puluhan = ""
  satuan = ""
  if idxRatusan == 1:
    ratusan = " Seratus"
  elif idxRatusan > 1:
    ratusan = " " + bilangan[idxRatusan] + " Ratus"
  if idxPuluhan == 1:
    if idxSatuan == 0:
      puluhan = " Sepuluh"
    elif idxSatuan == 1:
      puluhan = " Sebelas"
    else:
      puluhan = " " + bilangan[idxSatuan] + " Belas"
  elif idxPuluhan > 1:
    puluhan = " " + bilangan[idxPuluhan] + " Puluh"
  if idxPuluhan != 1 and idxSatuan != 0:
    satuan = " " + bilangan[idxSatuan]
  return ribuan + ratusan + puluhan + satuan

angka = 9999
hasil = terbilang(angka)
print(hasil)
