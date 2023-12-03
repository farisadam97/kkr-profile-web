import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ItemPorfolio } from "@/types";
import Image from "next/image";
const Item = ({ title, description, image }: ItemPorfolio) => {
  return (
    <Card className="border-none hover:scale-105 hover:cursor-pointer transition-all">
      <Image
        src="/circus.png"
        width={800}
        height={200}
        alt="circus"
        className="rounded-t-md"
      />
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full text-ellipsis line-clamp-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          ipsum illum officiis voluptatum quidem adipisci laudantium aliquam
          laboriosam eligendi sapiente modi ducimus quia, quo repellat labore.
          Consectetur modi veniam ab.
        </div>
      </CardContent>
    </Card>
  );
};

export default Item;
