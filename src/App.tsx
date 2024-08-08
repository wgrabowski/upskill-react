import './App.css'

import {Layout} from "@/components/layout/Layout.tsx";
import {AppRoutes} from "@/AppRoutes.tsx";

const App = () => {
    return (
        <Layout>
            <AppRoutes/>
        </Layout>
    )
}

export default App
