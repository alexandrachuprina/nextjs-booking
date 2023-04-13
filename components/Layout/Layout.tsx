import { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface LayoutProps {
  children?: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ minHeight: "100vh", display: 'flex', flexDirection: 'column'}}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
