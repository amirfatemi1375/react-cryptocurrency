import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const MainLayout=({children,isFooter=true,headerTitle})=>{
   return(
    <>
     <Header title={headerTitle}></Header>
       {children}
     {isFooter?<Footer></Footer>:null}
    </>
   )
}
export default MainLayout;