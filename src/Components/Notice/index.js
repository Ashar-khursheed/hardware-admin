import TableWarper from "../../Utils/HOC/TableWarper";
import ShowTable from "../Table/ShowTable";
import Loader from "../CommonComponent/Loader";
import usePermissionCheck from "@/Utils/Hooks/usePermissionCheck";
import { useContext } from "react";
import SettingContext from "@/Helper/SettingContext";

const AllNoticeTable = ({ data, ...props }) => {
  const [edit, destroy] = usePermissionCheck(["edit", "destroy"]);
  const { settingObj } = useContext(SettingContext); 
  const language = settingObj?.general?.default_language?.locale

  const headerObj = {
    checkBox: true,
    isOption: edit == false && destroy == false ? false : true,
    isSerialNo: false,
    noEdit: edit ? false : true,
    optionHead: { title: "Action" },
    column: [
      { title: "title", apiKey: "title", sorting: true, sortBy: "desc" },
      { title: "priority", apiKey: "priority" },
      {title: "created_at",apiKey: "created_at",sorting: true,sortBy: "desc",type: "date",},
    ],
    data: data || [],
  };

  let refunds = headerObj?.data?.filter((element) => {
    element.priority = element.priority ? (<div className={"status-" + element.priority}><span>{element.priority}</span></div>) : ("-");
    return element;
  });
  headerObj.data = headerObj ? refunds : [];
  if (!data) return <Loader />;
  return (
    <>
      <ShowTable {...props} headerData={headerObj} lang={language}/>
    </>
  );
};

export default TableWarper(AllNoticeTable);
