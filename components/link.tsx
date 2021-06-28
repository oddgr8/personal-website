import NextLink from "next/link";
import { Link as MuiLink } from "@material-ui/core";
import React from "react";

export default function Link({
  internal,
  href,
  children,
  ...linkProps
}: React.PropsWithChildren<{
  internal?: boolean;
  href: URL | string;
  [linkProps: string]: any;
}>) {
  if (internal) {
    return (
      <NextLink href={href} passHref={true}>
        <MuiLink color="textPrimary" underline="none" {...linkProps}>
          {children}
        </MuiLink>
      </NextLink>
    );
  }
  return (
    <MuiLink
      color="textPrimary"
      underline="none"
      href={href as string}
      {...linkProps}
    >
      {children}
    </MuiLink>
  );
}
