import { IconType } from "react-icons";

const PersonalityIcon: IconType = ({ size, color, ...props }) => (
  <img
    src="/images/personality.svg"
    alt="Personality"
    style={{
      width: typeof size === "number" ? `${size}px` : size || "1em",
      height: typeof size === "number" ? `${size}px` : size || "1em",
    }}
    {...(props as React.ImgHTMLAttributes<HTMLImageElement>)}
  />
);

export default PersonalityIcon;
