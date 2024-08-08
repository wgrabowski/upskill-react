import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Button} from "@/components/ui/button.tsx";
import {PenIcon} from "lucide-react";

export const InvoicesList = ({data}: { data: any[] }) => {
    return <Table className={"table-auto"}>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>No.</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Valid until</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-right">Actions</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {data.map((item) => <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.createdAt}</TableCell>
                <TableCell>{item.validUntil}</TableCell>
                <TableCell>{item.items.reduce((sum, entry) => {
                    sum += entry.amount;
                    return sum
                }, 0)}</TableCell>

                <TableCell className="text-right">  <Button variant="outline" size="icon">
                    <PenIcon className="h-4 w-4" />
                </Button></TableCell>
            </TableRow>)}
        </TableBody>
    </Table>
}
