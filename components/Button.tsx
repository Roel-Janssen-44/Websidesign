import React from "react";
import Link from "next/link";

type buttonProps = {
  link: string;
  label: string;
};

export default function Button({ link, label }: buttonProps) {
  return (
    <Link
      className="group flex border-blue border-2 relative text-white p-0 rounded mt-1.5 ml-1.5"
      href={link}
    >
      <span
        className="block px-6 py-2 -translate-y-1.5 -translate-x-1.5 transition-all bg-blue rounded border-2 border-blue scale-[1.03]
                   group-hover:translate-y-0 group-hover:translate-x-0"
      >
        {label}
      </span>
    </Link>
  );
}
