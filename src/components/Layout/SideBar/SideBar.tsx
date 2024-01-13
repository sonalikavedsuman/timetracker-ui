import {
  ArrowDownTrayIcon,
  ArrowTrendingUpIcon,
  BellIcon,
  ChartBarSquareIcon,
  ClockIcon,
  Cog8ToothIcon,
  DocumentCheckIcon,
  DocumentTextIcon,
  FolderIcon,
  MinusIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { Badge, Avatar } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className=" bg-indigo-800 h-screen fixed w-1/5 z-10">
      <div className="flex flex-col justify-between content-between">
        <div className=" text-yellow-400 py-10 pl-6">Icon</div>
        <div className="flex flex-col gap-5 pl-6">
          <div className="flex flex-row items-center gap-6">
            <ClockIcon className="h-5 w-5 " color="white" />
            <Link href="/">
              <p className=" text-white text-sm  font-medium ">Dashboard</p>
            </Link>
          </div>
          <div className="flex flex-row items-center gap-6">
            <ArrowTrendingUpIcon className="h-5 w-5 " color="white" />
            <Link href="/activity">
              <p className=" text-white text-sm  font-medium ">Activity</p>
            </Link>
          </div>
          <div className="flex flex-row items-center gap-6">
            <ChartBarSquareIcon className="h-5 w-5 " color="white" />
            <Link href="/timesheet">
              <p className=" text-white text-sm  font-medium ">Timesheet</p>
            </Link>
          </div>
          <MinusIcon className="h-7 w-7  text-slate-500" />

          <div className="flex flex-row items-center gap-6">
            <DocumentCheckIcon className="h-5 w-5 " color="white" />
            <Link href="/todo">
              <p className=" text-white text-sm  font-medium ">To-Do</p>
            </Link>
          </div>
          <div className="flex flex-row items-center gap-6">
            <DocumentTextIcon className="h-5 w-5 " color="white" />
            <Link href="/invoices">
              <p className=" text-white text-sm  font-medium ">Invoices</p>
            </Link>
          </div>
          <div className="flex flex-row items-center gap-6">
            <FolderIcon className="h-5 w-5 " color="white" />
            <Link href="/projects">
              <p className=" text-white text-sm  font-medium ">Projects</p>
            </Link>
          </div>
          <MinusIcon className="h-7 w-7  text-slate-500" />
          <div className="flex flex-row items-center gap-6">
            <QuestionMarkCircleIcon className="h-5 w-5 " color="white" />
            <p className=" text-white text-sm  font-medium ">Help</p>
          </div>
          <div className="flex flex-row items-center gap-6">
            <ArrowDownTrayIcon className="h-5 w-5 " color="white" />
            <p className=" text-white text-sm  font-medium ">Download APP</p>
          </div>
        </div>
      </div>
      <div className="absolute w-full left-0 bottom-2">
        <div className="flex flex-row justify-around items-center content-center ">
          <div className="w-1/3 flex justify-center">
            <Badge color="danger" content="5">
              <BellIcon className="h-6 w-6" color="white" />
            </Badge>
          </div>
          <div className="w-1/3 flex justify-center border-x-1">
            <Cog8ToothIcon className="h-6 w-6" color="white" />
          </div>
          <div className="w-1/3 flex justify-center">
            <Avatar
              isBordered
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              className="w-5 h-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
