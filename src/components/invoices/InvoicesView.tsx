import {useEffect, useState} from "react";
import {InvoicesList} from "@/components/invoices/invoicesList/InvoicesList.tsx";

export const InvoicesView = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/api/invoices').then((res) => res.json()).then((data) => {
            setData(data)
        });
    }, []);

    return (
        <InvoicesList data={data}/>
    )
}
