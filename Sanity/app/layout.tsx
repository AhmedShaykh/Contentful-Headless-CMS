import './globals.css';

export const metadata = {
  title: 'Sanity Headless CMS',
  description: 'Sanity Headless CMS With NEXT.JS 13',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
};