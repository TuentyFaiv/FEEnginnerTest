import { css, cx } from "@emotion/css";

import * as responsive from "./Footer.styles.responsive";
import { content, flex, text } from "@mixins";

export const footer = cx(
  css`
    width: 100%;
    padding: 16px;
    background-color: var(--bg-footer);
  `,
  responsive.footer,
);

export const container = cx(
  content(),
  css`
  `,
  responsive.container,
);

export const list = cx(
  flex({ justify: "flex-end", gap: "24px" }),
  css`
    list-style: none;
  `,
  responsive.list,
);

export const item = cx(
  css`
    max-width: max-content;
  `,
  responsive.item,
);

export const link = cx(
  flex({ justify: "center", gap: "5px" }),
  text({ size: 1.4, weight: 500 }),
  css``,
  responsive.link,
);

export const icon = cx(
  css`
    display: block;
    width: 32px;
    height: 32px;
    object-fit: contain;
  `,
  responsive.icon,
);
