import "./globals.css";
export const metadata = {
  title: {
    template: " %s | Technical Agency",
    default: "Technical Agency",
  },
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 text-zinc-900 antialiased selection:bg-lime-300 selection:text-zinc-950">
        {children}
      </body>
    </html>
  );
}
