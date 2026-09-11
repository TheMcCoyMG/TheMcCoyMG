import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rotimi Ogundele | A Better Future Starts With Us",
  description: "The public profile and work of Rotimi Ogundele.",
  icons: {
    icon: "/official-logo.jpeg",
    apple: "/official-logo.jpeg",
  },
  openGraph: {
    title: "Rotimi Ogundele | A Better Future Starts With Us",
    description: "The public profile and work of Rotimi Ogundele.",
    type: "profile",
    images: ["/official-logo.jpeg"],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
