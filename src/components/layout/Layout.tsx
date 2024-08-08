import {AppBar} from "@/components/layout/AppBar.tsx";
import {PropsWithChildren} from "react";


export const Layout = ({children}: PropsWithChildren) => {
    return <main>
        <AppBar/>
        {children}
    </main>
}
