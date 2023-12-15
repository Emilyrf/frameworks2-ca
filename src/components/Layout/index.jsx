import NavBar from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => (
    <div>
      <NavBar />
      <div className="container mx-auto p-4">
        {children}
      </div>
      <Footer />
    </div>
  );
  
  export default Layout;