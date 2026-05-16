export const metadata = {
  title: 'Koperasi Digital Indonesia',
  description: 'Platform pendaftaran dan bagi hasil anggota',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
