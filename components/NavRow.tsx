import type { FC, ReactElement as Element } from "react";

const NavRow: FC<{
  Icon?: Element;
  text: string;
  href?: string;
}> = ({ Icon = "", text, href }) => {
  return (
    <a href={href} className="flex flex-row p-1 items-center">
      {Icon}
      <p>{text}</p>
    </a>
  );
};
export default NavRow;
