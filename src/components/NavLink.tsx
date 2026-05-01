import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Props extends NavLinkProps {
  activeClassName?: string;
}

/**
 * Thin wrapper around React Router's NavLink that merges an `activeClassName`
 * when the route is active, keeping the active-state styling declarative.
 */
export function NavLink({ className, activeClassName, ...props }: Props) {
  return (
    <RouterNavLink
      {...props}
      className={({ isActive }) =>
        cn(typeof className === "string" ? className : "", isActive ? activeClassName : "")
      }
    />
  );
}
