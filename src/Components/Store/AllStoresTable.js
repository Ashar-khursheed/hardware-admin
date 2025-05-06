import { Approved, store } from "../../Utils/AxiosUtils/API";
import TableWarper from "../../Utils/HOC/TableWarper";
import ShowTable from "../Table/ShowTable";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";
import { useContext } from "react";
import SettingContext from "@/Helper/SettingContext";

const AllRoles = ({ data, ...props }) => {
  const [edit, destroy] = usePermissionCheck(["edit", "destroy"]);
  const { settingObj } = useContext(SettingContext); 
  const language = settingObj?.general?.default_language?.locale

  const headerObj = {
    checkBox: true,
    isSerialNo: false,
    isOption: edit == false && destroy == false ? false : true,
    noEdit: edit ? false : true,
    optionHead: { title: "Action" ,show:"seller/store" },
    column: [
      { title: "logo", apiKey: "store_logo", type: 'image',NameWithRound: true},
      { title: "store_name", apiKey: "store_name", sorting: true, sortBy: "desc" },
      { title: "name", apiKey: "name" },
      { title: "created_at", apiKey: "created_at", sorting: true, sortBy: "desc", type: "date" },
      { title: "approved", apiKey: "is_approved", type: 'switch', url: `${store}${Approved}` }
    ],
    data: data || []
  };
  headerObj.data.filter((element) => element.name = element?.vendor?.name)
  if (!data) return null;

  return <>
    <ShowTable {...props} headerData={headerObj} lang={language}/>
  </>
};

export default TableWarper(AllRoles);
