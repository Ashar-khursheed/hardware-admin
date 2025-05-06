import TableWarper from "../../Utils/HOC/TableWarper";
import ShowTable from "../Table/ShowTable";
import Loader from "../CommonComponent/Loader";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";

const AllUsersTable = ({ data, ...props }) => {
  const [edit, destroy] = usePermissionCheck(["edit", "destroy"]);
  const headerObj = {
    checkBox: true,
    isOption: edit == false && destroy == false ? false : true,
    noEdit: edit ? false : true,
    isSerialNo: false,
    optionHead: { title: "Action" },
    column: [
      { title: "avatar", apiKey: "profile_image", type: 'image', class: "sm-width", NameWithRound:true},
      { title: "name", apiKey: "name", sorting: true, sortBy: "desc" },
      { title: "email", apiKey: "email", sorting: true, sortBy: "desc" },
      { title: "role", apiKey: "role", subKey: ["name"] },
      { title: "created_at", apiKey: "created_at", sorting: true, sortBy: "desc", type: "date" },
      { title: "status", apiKey: "status", type: 'switch' }
    ],
    data: data || []
  };
  if (!data) return <Loader />;
  return <>
    <ShowTable {...props} headerData={headerObj} />
  </>
};

export default TableWarper(AllUsersTable);
