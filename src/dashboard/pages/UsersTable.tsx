import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import profile from "@/assets/profile.png"
import { Badge } from "@/components/ui/badge";
const UsersTable = () => {
    return (
        <div>
            <h2 className="my-2 font-bold text-2xl">A list of all user</h2>
            <Table className="bg-white rounded-md" >
                <TableCaption>A list of Users.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center" >Image</TableHead>
                        <TableHead className="text-center" >Name</TableHead>
                        <TableHead className="text-center" >Role</TableHead>
                        <TableHead className="text-center" >Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="text-center flex justify-center">
                            <img src={profile} width={50} height={50} className="rounded-md" />
                        </TableCell>
                        <TableCell className=" text-center font-medium">Jony Mia</TableCell>
                        <TableCell className="text-center font-bold">Admin</TableCell>
                        <TableCell className="text-center">
                            <div className="flex w-full flex-wrap justify-center gap-2">
                                <Badge>Active</Badge>
                                <Badge variant="destructive">Offline</Badge>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default UsersTable;