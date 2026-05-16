import { getGoogleSheetsClient } from '../../lib/googleSheets';

export default async function handler(req, res) {
  if (req.method!== 'POST') return res.status(405).send('Hanya menerima POST');

  const { nik, nama, email, simpanan_pokok } = req.body;
  const { sheets, spreadsheetId } = await getGoogleSheetsClient();

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values:],
      },
    });
    return res.status(200).json({ message: 'Pendaftaran Berhasil!' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}