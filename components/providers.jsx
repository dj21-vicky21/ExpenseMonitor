import ClientProviders from "./providers/ClientProvider";
import { ThemeProvider } from "./providers/theme-provider";

const Providers = ({ children }) => {
    return (<>
        <ClientProviders>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </ClientProviders>
    </>);
}

export default Providers;