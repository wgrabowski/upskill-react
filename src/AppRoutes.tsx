import {Route, Routes} from "react-router-dom";
import {InvoicesView} from "@/components/invoices/InvoicesView.tsx";

export const AppRoutes = () => {
    return <Routes>
        <Route path="/" />
        <Route path="/invoices" element={<InvoicesView/>}/>
    </Routes>
}
