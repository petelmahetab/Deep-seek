import "./globals.css";

export const metadata = {
  title: " DeepSeek",
  description: "Clone of the Actual DeepSeek",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="font-inder antialiased">
        {children}
      </body>
    </html>
  );
}
