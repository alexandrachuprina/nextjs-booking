import { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface LayoutProps {
  children?: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
