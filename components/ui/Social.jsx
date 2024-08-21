import Link from "next/link";

import {
  FaGithub,
  FaLinkedin ,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaFacebook />, path: "" },
  { icon: <FaTwitter />, path: "" },
  { icon: <FaInstagram />, path: "" },
];
const Social = ({ containerStyles, iconStyle }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyle}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
