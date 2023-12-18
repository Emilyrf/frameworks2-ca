import NavBar from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => (
    <div>
      <NavBar />
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        {children}
      </div>
      <Footer />
    </div>
  );
  
  export default Layout;