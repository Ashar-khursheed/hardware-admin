import TableWarper from "../../Utils/HOC/TableWarper";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";
import ShowTable from "../Table/ShowTable";

const AllLanguagesTable = ({ data, ...props }) => {
  const [edit, destroy] = usePermissionCheck(["edit", "destroy"]);
  const headerObj = {
    checkBox: true,
    isSerialNo: false,
    isOption: edit == false && destroy == false ? false : true,
    noEdit: edit ? false : true,
    optionHead: { title: "action" },
    column: [
      { title: "name", apiKey: "name", sorting: true, sortBy: "desc" },
      { title: "Locale", apiKey: "locale", sorting: true, sortBy: "desc" },
      { title: "status", apiKey: "status", type: "switch" },
    ],
    data: data || [],
  };
  if (!data) return null;

  return (
    <>
      <ShowTable {...props} headerData={headerObj} />
    </>
  );
};

export default TableWarper(AllLanguagesTable);
