"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function TableDemo() {
  const users = [
    { id: 1, name: "Rahmatillo", yoshi: 20, kasbi: "Dasturchi", tajribasi: "1 yil" },
    { id: 2, name: "Ahmad", yoshi: 25, kasbi: "Dizayner", tajribasi: "3 yil" },
    { id: 3, name: "Anvar", yoshi: 30, kasbi: "Loyiha menejeri", tajribasi: "5 yil" },
    { id: 4, name: "Shahlo", yoshi: 28, kasbi: "Frontend dasturchi", tajribasi: "4 yil" },
    { id: 5, name: "Ziyoda", yoshi: 24, kasbi: "Backend dasturchi", tajribasi: "2 yil" },
    { id: 6, name: "Ulug'bek", yoshi: 35, kasbi: "Arxitektor", tajribasi: "10 yil" },
    { id: 7, name: "Otabek", yoshi: 22, kasbi: "DevOps", tajribasi: "1.5 yil" },
    { id: 8, name: "Madina", yoshi: 27, kasbi: "Ma'lumotlar muhandisi", tajribasi: "3 yil" },
    { id: 9, name: "Sarvar", yoshi: 32, kasbi: "Mobile dasturchi", tajribasi: "7 yil" },
    { id: 10, name: "Dilnoza", yoshi: 29, kasbi: "Test muhandisi", tajribasi: "5 yil" },
  ];

  return (
    <div className="p-4">
      <a href="/api/CreatUser">
        <Button className="">Foydalanuvchi qoshish + </Button>
      </a>

      <Table>
        <TableCaption>Foydalanuvchilar royxati</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Ism</TableHead>
            <TableHead>Yoshi</TableHead>
            <TableHead>Kasbi</TableHead>
            <TableHead className="text-right">Tajribasi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.yoshi}</TableCell>
              <TableCell>{user.kasbi}</TableCell>
              <TableCell className="text-right">{user.tajribasi}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
