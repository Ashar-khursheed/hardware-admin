import TableWarper from "@/Utils/HOC/TableWarper";
import ShowTable from "../Table/ShowTable";
import usePermissionCheck from "@/Utils/Hooks/usePermissionCheck";

const AllRoles = ({ data, ...props }) => {
  const [edit, destroy] = usePermissionCheck(["edit", "destroy"]);
  const headerObj = {
    checkBox: true,
    isSerialNo:false,
    isOption: edit == false && destroy == false ? false : true,
    optionHead: { title: "Action" },
    column: [
      { title: "name", apiKey: "name", sorting: true, sortBy: "desc" },
      { title: "created_at", apiKey: "created_at", sorting: true, sortBy: "desc", type: "date" }
    ],
    data: data || []
  };
  if (!data) return null;
  return <>

    <ShowTable {...props} headerData={headerObj} />
  </>
};

export default TableWarper(AllRoles);
