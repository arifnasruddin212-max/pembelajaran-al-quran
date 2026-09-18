const SHEET_NAME = 'Hasil Game';

function doPost(e) {
  const data = JSON.parse(e.postData.contents || '{}');
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['Tanggal','Nama','NIM','Skor','Benar','Salah','Level','Waktu (detik)','Al-Fatihah','An-Nas','Al-Falaq','Al-Ikhlas','Al-Lahab']);
  }
  const p = data.per_surah || {};
  sh.appendRow([
    new Date(),
    data.nama || '',
    data.nim || '',
    Number(data.score || 0),
    Number(data.benar || 0),
    Number(data.salah || 0),
    Number(data.level || 0),
    Number(data.waktu_detik || 0),
    (p['Al-Fatihah'] ? p['Al-Fatihah'].c : 0) + '/' + (p['Al-Fatihah'] ? p['Al-Fatihah'].w : 0),
    (p['An-Nas'] ? p['An-Nas'].c : 0) + '/' + (p['An-Nas'] ? p['An-Nas'].w : 0),
    (p['Al-Falaq'] ? p['Al-Falaq'].c : 0) + '/' + (p['Al-Falaq'] ? p['Al-Falaq'].w : 0),
    (p['Al-Ikhlas'] ? p['Al-Ikhlas'].c : 0) + '/' + (p['Al-Ikhlas'] ? p['Al-Ikhlas'].w : 0),
    (p['Al-Lahab'] ? p['Al-Lahab'].c : 0) + '/' + (p['Al-Lahab'] ? p['Al-Lahab'].w : 0)
  ]);
  return ContentService.createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}
