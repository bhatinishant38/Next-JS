export default function RootLayout({ children }) {
  return (
    <>
      <header className="border-b border-emerald-300/20 bg-emerald-950 px-6 py-4 text-sm font-bold uppercase tracking-wide text-emerald-50 sm:px-10">
        Header (Application)
      </header>
      {children}
      <footer className="mt-16 border-t border-emerald-300/20 bg-emerald-950 px-6 py-5 text-sm font-medium text-emerald-100 sm:px-10">
        Footer (Application){" "}
      </footer>
    </>
  );
}
