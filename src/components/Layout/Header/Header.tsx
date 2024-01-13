import React from "react";
import { PlayCircleIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Select, SelectItem, Avatar, Chip, Button } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { users } from "@/constant/users";


const Header = () => {
  return (
    <div className="bg-white shadow-md h-20 flex justify-between items-center fixed  w-4/5 px-6 z-10">
      <div className="w-44">
        <Select
          radius="sm"
          endContent={<Divider orientation="vertical" className="h-6" />}
          items={users}
          variant="faded"
          isMultiline={true}
          selectionMode="multiple"
          placeholder="Design Task"
          labelPlacement="outside"
          classNames={{ base: "max-w-xs ", trigger: "min-h-unit-12 py-2" }}
          renderValue={(items) => {
            return (
              <div className="flex flex-wrap gap-2 ">
                {items.map((item) => (
                  <Chip key={item.key}></Chip>
                ))}
              </div>
            );
          }}
        >
          {(user) => (
            <SelectItem key={user.id} textValue={user.name}>
              <div className="flex gap-2 items-center">
                <Avatar
                  alt={user.name}
                  className="flex-shrink-0"
                  size="sm"
                  src={user.avatar}
                />
                <div className="flex flex-col">
                  <span className="text-small">{user.name}</span>
                  <span className="text-tiny text-default-400">
                    {user.email}
                  </span>
                </div>
              </div>
            </SelectItem>
          )}
        </Select>
      </div>
      <Button className="rounded-md text-indigo-800 bg-slate-200 w-44 font-bold">
        <PlusIcon className="w-3 h-3"/>
        <p>ADD PROJECT</p>
      </Button>
    </div>
  );
};

export default Header;
