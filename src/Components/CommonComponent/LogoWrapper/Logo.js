import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import SettingContext from "../../../Helper/SettingContext";

const Logo = () => {
  const { state, settingObj } = useContext(SettingContext);
  return (
    <Link href="/dashboard">
      {state?.setLightLogo?.original_url ? <Image className="for-white" src={`${state?.setLightLogo?.original_url}`} alt="Light Logo" width={1300} height={500} priority /> :<h2 className="text-white">{settingObj?.general?.site_name || ''}</h2>}
    </Link>
  );
};

export default Logo;
