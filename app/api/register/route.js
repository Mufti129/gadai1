import { NextResponse } from 'next/server';
import { getGoogleSheetsClient } from '../../../lib/googleSheets';

export async function POST(req) {
  try {
    const body = await req.json();
    const { nik, nama, email, simpanan_pokok } = body;
    const { sheets, spreadsheetId } = await getGoogleSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values:],
      },
    });
    return NextResponse.json({ message: 'Sukses!' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
