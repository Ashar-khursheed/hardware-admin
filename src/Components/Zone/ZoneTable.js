import TableWarper from "@/Utils/HOC/TableWarper";
import usePermissionCheck from "@/Utils/Hooks/usePermissionCheck";
import React, { useContext } from "react";
import ShowTable from "../Table/ShowTable";
import SettingContext from "@/Helper/SettingContext";

const ZoneTable = ({ data, ...props }) => {
  const [edit, destroy] = usePermissionCheck(["edit", "destroy"]);
  const { settingObj } = useContext(SettingContext); 
  const language = settingObj?.general?.default_language?.locale

  const headerObj = {
    checkBox: true,
    isSerialNo: false,
    isOption: edit == false && destroy == false ? false : true,
    noEdit: edit ? false : true,
    optionHead: { title: "action" },
    column: [
      { title: "name", apiKey: "name", sorting: true, sortBy: "desc" },
      { title: "status", apiKey: "status", type: "switch" },
      {
        title: "created_at",
        apiKey: "created_at",
        sorting: true,
        sortBy: "desc",
        type: "date",
      },
    ],
    data: data || [],
  };
  if (!data) return null;

  return (
    <>
      <ShowTable {...props} headerData={headerObj} lang={language} />
    </>
  );
};

export default TableWarper(ZoneTable);
