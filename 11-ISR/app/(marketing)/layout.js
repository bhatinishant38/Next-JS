export default function RootLayout({ children }) {
  return (
    <>
      <header className="border-b border-amber-300 bg-amber-100 px-6 py-4 text-sm font-bold uppercase tracking-wide text-amber-950 sm:px-10">
        Header (Marketing)
      </header>
      {children}
      <footer className="mt-16 border-t border-amber-300 bg-amber-100 px-6 py-5 text-sm font-medium text-amber-950 sm:px-10">
        Footer (Marketing){" "}
      </footer>
    </>
  );
}
