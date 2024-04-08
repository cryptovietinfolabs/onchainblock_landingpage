"use client";
import useRouterEffect from "@Hooks/common/useRouterEffect";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  className?: string;
  target?: string;
  pageName?: string;
  children: React.ReactNode;
};
export default function LinkEffect({
  href,
  className,
  target,
  children,
  pageName,
}: Props): React.ReactElement {
  const { routerEffect } = useRouterEffect();
  return (
    <Link
      href={href}
      target={target}
      className={className}
      onClick={(e): void => {
        routerEffect({ url: href, pageName });
        e.preventDefault();
      }}
      passHref
    >
      {children}
    </Link>
  );
}
