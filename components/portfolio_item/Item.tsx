import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { lato } from "@/lib/fonts";

import { ItemsPortfolio, ItemPortfolio } from "@/types";
import Image from "next/image";
const Item = ({ data }: ItemPortfolio) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Card className="border-none hover:scale-105 hover:cursor-pointer transition-all">
          <Image
            src={data.image}
            width={800}
            height={200}
            alt="circus"
            className="rounded-t-md"
          />
          <CardHeader>
            <CardTitle>
              <span
                className={`w-full text-justify break-all font-normal text-ellipsis line-clamp-3 ${lato.className}`}
              >
                {data.title}
              </span>
            </CardTitle>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-[800px]   ">
        <DialogHeader>
          {/* <DialogTitle>Are you sure absolutely sure?</DialogTitle> */}
          <DialogDescription className="max-h-[1000px] overflow-auto custom-scrollbar">
            <div className="py-2 mt-4">
              <Image
                src={data.image}
                width={1000}
                height={200}
                alt="circus"
                className="rounded-t-lg"
              />
            </div>
            <div className="text-black text-justify">
              <h1 className="text-2xl font-normal  py-2">{data.title}</h1>
              <p className="text-lg py-2 ">{data.description} </p>
              <div className="py-2">
                <p className="text-lg">Task :</p>
                <ul className="list-decimal list-inside my-2">
                  {data.jobDesc.map((job, index) => (
                    <li key={index}>{job}</li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Item;
