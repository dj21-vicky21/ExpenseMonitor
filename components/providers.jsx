import { ThemeProvider } from "./providers/theme-provider";

const Providers = ({ children }) => {
    return (<>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    </>);
}

export default Providers;