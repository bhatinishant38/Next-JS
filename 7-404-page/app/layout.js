
export const metadata = {
  title : {
    template : " %s | Technical Agency",
    default : "Technical Agency"
  },
  description :""
}


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"    
    >
      <body >
       <header style={{background:"teal"}}>Header</header>
        {children}
        <footer style={{background:"teal"}}>Footer</footer>
        </body>
    </html>
  );
}
