import NavbarLogin from "./_components/navbar";

const Layout = ({ children }) => {
    return (
        <div className="h-screen">
            <NavbarLogin />
            <div className="h-full flex dark:bg-gray-900">{children}</div>
        </div>
    );
}

export default Layout;