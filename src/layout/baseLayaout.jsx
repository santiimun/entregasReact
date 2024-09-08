import NavBar from "../containers/navBar";
import Footer from "../containers/footer";

const BaseLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            { children }
            <Footer/>
        </>
    );
}

export default BaseLayout;