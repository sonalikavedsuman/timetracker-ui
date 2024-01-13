import { Inter } from "next/font/google";
import React, { useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

const inter = Inter({ subsets: ["latin"] });

export default function Timesheet() {
  return (
    <main className={`flex min-h-screen flex-col  ${inter.className}`}>
      <div className="flex flex-col mt-20 overflow-y-auto">
        <div className="flex flex-row ml-9 my-10">
          <span className=" mr-unit-9xl font-semibold text-2xl ">Timesheet</span>
          <div className="flex flex-row">
            <Button
              variant="bordered"
              className="rounded-md text-indigo-800 bg-slate-200 w-36 h-10 text-sm font-semibold "
            >
              ADD NEW
            </Button>
            <EllipsisHorizontalIcon className="w-6 h-6 ml-5 mt-2" />
          </div>
        </div>
        <div>
          <Table
            aria-label="Example static collection table"
            className="pl-9"
            isStriped
            removeWrapper
            shadow="sm"
          >
            <TableHeader>
              <TableColumn className="text-black">Project</TableColumn>
              <TableColumn className="text-black">Date</TableColumn>
              <TableColumn className="text-black">Start Time</TableColumn>
              <TableColumn className="text-black">Stop Time</TableColumn>
              <TableColumn className="text-black">Duration</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1" className="divide-x">
                <TableCell>
                  <span className="bg-slate-300 py-0 px-2 rounded-sm text-violet-800 font-bold mr-4">
                    1
                  </span>
                  <span className="text-xs font-semibold text-slate-600">
                    Landing page Design
                  </span>
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  May 21,2019
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  1.10 pm
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  9.20 pm
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  8:10:37
                </TableCell>
              </TableRow>
              <TableRow key="2" className="divide-x ">
                <TableCell>
                  <span className=" bg-yellow-100 py-0 px-2 rounded-sm text-yellow-500 font-bold mr-4">
                    2
                  </span>
                  <span className="text-xs font-semibold text-slate-600">
                    Mobile App
                  </span>
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  May 21,2019
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  1.10 pm
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  9.20 pm
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  8:10:37
                </TableCell>
              </TableRow>
              <TableRow key="3" className="divide-x">
                <TableCell>
                  <span className=" bg-red-100 py-0 px-2 rounded-sm text-red-500 font-bold mr-4">
                    3
                  </span>
                  <span className="text-xs font-semibold text-slate-600">
                    UI/UX
                  </span>
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  May 21,2019
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  1.10 pm
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  9.20 pm
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  8:10:37
                </TableCell>
              </TableRow>
              <TableRow key="4" className="divide-x">
                <TableCell>
                  <span className=" bg-blue-100 py-0 px-2 rounded-sm text-blue-800 font-bold mr-4">
                    4
                  </span>
                  <span className="text-xs font-semibold text-slate-600">
                    Website/apps
                  </span>
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  May 21,2019
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  1.10 pm
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  9.20 pm
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  8:10:37
                </TableCell>
              </TableRow>
              <TableRow key="5" className="divide-x">
                <TableCell>
                  <span className=" bg-orange-100 py-0 px-2 rounded-sm text-orange-500 font-bold mr-4">
                    5
                  </span>
                  <span className="text-xs font-semibold text-slate-600">
                    Branding
                  </span>
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  May 21,2019
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  1.10 pm
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  9.20 pm
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  8:10:37
                </TableCell>
              </TableRow>
              <TableRow key="6" className="divide-x">
                <TableCell>
                  <span className=" bg-green-200 py-0 px-2 rounded-sm text-green-800 font-bold mr-4">
                    6
                  </span>
                  <span className="text-xs font-semibold text-slate-600">
                    Landing page Design
                  </span>
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  May 21,2019
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  1.10 pm
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  9.20 pm
                </TableCell>
                <TableCell className="text-xs font-semibold text-slate-600">
                  8:10:37
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
