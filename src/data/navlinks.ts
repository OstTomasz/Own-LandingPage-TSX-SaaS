interface NavLinkItem {
  readonly to: string;
  readonly label: string;
}

export const NAV_LINKS: readonly NavLinkItem[] = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contacts", label: "Contacts" },
] as const;
