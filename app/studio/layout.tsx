import type { Metadata } from "next";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` container max-w-[1200px] mx-auto`}>
        <div className="">{children}</div></body>
    </html>
  );
}
