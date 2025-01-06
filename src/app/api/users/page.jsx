"use client";

import { useEffect, useState } from "react";
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
  const [users, setUsers] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3000/api/foydalanuvchilar");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <a href="/api/CreatUser">
      <Button className="">Foydalanuvchi qo`shish + </Button>
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
