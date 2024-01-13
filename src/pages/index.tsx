import Image from "next/image";
import { Inter } from "next/font/google";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  EllipsisHorizontalIcon,
  PhotoIcon,
  PlusIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Divider,
} from "@nextui-org/react";
import { ArrowTrendingUpIcon } from "@heroicons/react/20/solid";
import { DocumentCheckIcon } from "@heroicons/react/24/solid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col  ${inter.className}`}>
      <div className="flex flex-row mt-20 overflow-y-auto">
        <div className="w-4/6 border-r-1 border-gray-300 ">
          <div className="flex flex-row justify-between ">
            <p className="mt-4 mb-7 ml-7 font-semibold text-lg">Timesheet</p>
            <div className="flex flex-row">
              <Button className="rounded-sm text-indigo-800 bg-slate-200 w-32 h-8 text-xs font-semibold mt-4 mb-7 pr-5 ">
                <p className="text-center">VIEW FULL SHEET</p>
              </Button>
              <EllipsisHorizontalIcon className="h-7 w-7 ml-3 mt-4 mr-5" />
            </div>
          </div>
          <div>
            <Table
              aria-label="Example static collection table"
              removeWrapper
              isStriped
              className="border-b-1 border-gray-300 px-5 pb-5"
            >
              <TableHeader className="">
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
                <TableRow key="2" className="divide-x">
                  <TableCell>
                    <span className=" bg-yellow-100 py-0 px-2 rounded-sm text-yellow-500 font-bold mr-4">
                      3
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
                      5
                    </span>
                    <span className="text-xs font-semibold text-slate-600">
                      UI/UX
                    </span>
                  </TableCell>
                  <TableCell className="text-xs font-semibold text-slate-600">
                    May21,2019
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
                      2
                    </span>
                    <span className="text-xs font-semibold text-slate-600">
                      Website/apps
                    </span>
                  </TableCell>
                  <TableCell className="text-xs font-semibold text-slate-600">
                    May21,2019
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
                      9
                    </span>
                    <span className="text-xs font-semibold text-slate-600">
                      Branding
                    </span>
                  </TableCell>
                  <TableCell className="text-xs font-semibold text-slate-600">
                    May21,2019
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
          <div className="mx-8">
            <p className="my-2 mb-4 font-semibold text-lg ">To-Do Lists</p>

            <div className="flex flex-row pb-5 ">
              <div className="mr-5 ml-3 mt-2">
                <p className=" text-violet-800 font-semibold text-xl">20</p>
                <p className="text-violet-800 text-xs font-medium">May</p>
              </div>

              <Button className=" w-5/6 border-1 justify-between rounded-md h-16 bg-white">
                <div className=" flex flex-col items-start">
                  <p className="font-semibold py-1">Revamp Instagram app</p>
                  <p className="text-xs text-slate-400 font-medium">Today</p>
                </div>
                <EllipsisHorizontalIcon className="w-7 h-7 text-slate-600" />
              </Button>
            </div>
            <div className="flex flex-row pb-5">
              <div className="mr-5  ml-3 mt-2">
                <p className=" text-violet-800 font-semibold text-xl">21</p>
                <p className="text-violet-800 text-xs font-medium">May</p>
              </div>
              <Button className="w-5/6 border-1 justify-between rounded-md h-16 bg-white">
                <div className=" flex flex-col items-start">
                  <p className="font-semibold py-1">Prototyping</p>
                  <p className=" text-xs text-slate-400 font-medium">
                    Upcoming
                  </p>
                </div>
                <EllipsisHorizontalIcon className="w-7 h-7 text-slate-600" />
              </Button>
            </div>
            <div className="flex flex-row pb-10">
              <div className="mr-5 ml-3 mt-2">
                <p className=" text-violet-800 font-semibold text-xl">22</p>
                <p className="text-violet-800 text-xs font-medium">May</p>
              </div>
              <Button className="w-5/6 border-1 justify-between rounded-md h-16 bg-white">
                <div className=" flex flex-col items-start">
                  <p className="font-semibold py-1">
                    Collect references for new project
                  </p>
                  <p className=" text-xs text-slate-400 font-medium">
                    Upcoming
                  </p>
                </div>
                <EllipsisHorizontalIcon className="w-7 h-7 text-slate-600" />
              </Button>
            </div>
          </div>
        </div>
        <div className="w-2/6">
          <div className="border-b-1 border-gray-300  px-12 pb-[9px]">
            <p className="mt-4 mb-7 font-semibold text-lg">Report</p>
            <Button className="rounded-md bg-indigo-800 p-8 mb-4 w-64">
              <div className="p-[11px] bg-violet-200 rounded-md">
                <ArrowTrendingUpIcon className="w-5 h-5 text-white " />
              </div>
              <div className="flex flex-col items-start mr-9">
                <span className="uppercase text-[10px] font-medium text-slate-400 ">
                  Weekly Activity
                </span>
                <span className="text-white text-md">52%</span>
              </div>
              <div className="flex flex-row bg-green-500  text-white rounded-sm  mb-5">
                <ChevronUpIcon className="w-2 h-2 mt-[6px] ml-2 mr-1" />
                <span className="mr-2 text-[10px] font-semibold">17%</span>
              </div>
            </Button>
            <Button className="rounded-md bg-slate-200 p-8 mb-8 w-64">
              <div className="p-[11px] bg-white rounded-md">
                <ArrowTrendingUpIcon className="w-5 h-5 text-black" />
              </div>
              <div className="flex flex-col items-start mr-5">
                <span className="uppercase text-[10px] font-medium text-stone-400">
                  Worked this week
                </span>
                <span className="text-black text-md">
                  11:56:33
                </span>
              </div>
              <div className="flex flex-row bg-pink-100 pr-2 text-orange-600 rounded-sm mb-5 ">
                <ChevronDownIcon className="w-2 h-2 mt-[6px] ml-2 mr-1" />
                <span className="mr-2 text-[10px] font-semibold">17%</span>
              </div>
            </Button>
            <Button className="bg-white text-violet-800 border-1 mb-6 w-64 rounded-md ">
              <DocumentCheckIcon className="w-5 h-5  text-violet-800" />
              <div className="flex flex-col items-start mr-6">
                <span className="uppercase text-xs text-violet-800 font-medium">
                  Export as pdf
                </span>
              </div>
            </Button>
          </div>
          <div className="mx-12">
            <p className="my-3 font-semibold text-lg">Screenshots</p>
            <div className="flex flex-row justify-between border-b-1 pt-2 pb-4 ">
              <div className="flex flex-row gap-2 ">
                <PhotoIcon className="w-5 h-5 text-slate-500" />
                <p className="text-xs font-semibold text-slate-500">
                  Shot_1_attach_1.png
                </p>
              </div>
              <p className="bg-slate-100 text-violet-700 rounded-md font-medium text-[10px]  pt-1 pl-2 w-10 h-6">
                View
              </p>
            </div>
            <div className="flex flex-row justify-between  mb-5 border-b-1 pt-4 pb-4">
              <div className="flex flex-row gap-3">
                <PhotoIcon className="w-5 h-5 text-slate-500" />
                <p className="text-xs font-medium text-slate-500">
                  Shot_1_attach_3.png
                </p>
              </div>
              {/* <Button
              size="sm"
              className="rounded-md bg-slate-200 text-violet-700 ml-5  text-[10px] h-6 "
             >
              View
            </Button> */}
              <p className="bg-slate-100 text-violet-700 rounded-md font-medium text-[10px]  pt-1 pl-2 w-10 h-6">
                View
              </p>
            </div>
            <div className="flex flex-row justify-between  mb-5 border-b-1 pb-4">
              <div className="flex flex-row gap-3">
                <VideoCameraIcon className="w-5 h-5 text-slate-500" />
                <p className="text-xs font-medium text-slate-500">
                  Screen record_12.mov
                </p>
              </div>

              {/* <Button size="sm" className="rounded-md bg-violet-700 text-white text-[10px] ml-5 h-6">
              Play
            </Button> */}
              <p className="text-white bg-indigo-800 rounded-md font-medium text-[10px]  pt-1 pl-[11px] w-10 h-6">
                Play
              </p>
            </div>
            <Button className="bg-white text-violet-800 border-1 mt-2 w-64 text-xs font-medium rounded-md uppercase mb-2 ">
              View All
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
