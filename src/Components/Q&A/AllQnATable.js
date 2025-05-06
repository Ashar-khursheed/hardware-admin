import TableWarper from "../../Utils/HOC/TableWarper";
import ShowTable from "../Table/ShowTable";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";

const AllQnATable = ({ data, ...props }) => {
  const [edit, destroy] = usePermissionCheck(["edit", "destroy"], "question_and_answer");
  const headerObj = {
    checkBox: true,
    isOption: edit == false && destroy == false ? false : true,
    noEdit: true,
    isSerialNo: false,
    optionHead: { title: "Action" },
    column: [
      { title: "Question", apiKey: "question" },
      { title: "product_name", apiKey: "productName" },
      { title: "created_at", apiKey: "created_at", sorting: true, sortBy: "desc", type: "date" },
      { title: "status", apiKey: "status" ,sorting: true, sortBy: "desc"},
    ],
    data: data || [],
  };
  headerObj.data = headerObj.data.map((element) => {
    element.status = element?.answer ? (
      <div className="status-approved">
        <span>Replied</span>
      </div>
    ) : (
      <div className="status-pending">
        <span>Pending</span>
      </div>
    );

    element.productName = element.product?.name || "Not Found";
    return element;
  });
  // headerObj.data.filter((element) => element.status = element?.answer ? <div className="status-approved"><span>Replied</span></div> : < div className="status-pending" > <span>Pending</span></div >)
  if (!data) return null;
  return (
    <>
      <ShowTable {...props} headerData={headerObj} keyInPermission={"question_and_answer"} />
    </>
  );
};

export default TableWarper(AllQnATable);
