import TableWarper from "../../Utils/HOC/TableWarper";
import ShowTable from "../Table/ShowTable";
import Loader from "../CommonComponent/Loader";
import usePermissionCheck from "@/Utils/Hooks/usePermissionCheck";

const AllReviewsTable = ({ data, ...props }) => {
  const [destroy] = usePermissionCheck(["destroy"]);

  const headerObj = {
    checkBox: true,
    isOption: destroy == false ? false : true,
    optionHead: { title: "Action" },
    isSerialNo:false,
    column: [
      {title: "image",apiKey: "product_thumbnail",type: "image",class: "sm-width",},
      {title: "customer_name",apiKey: "consumer",sortBy: "desc",subKey: ["name"],},
      { title: "product_name", apiKey: "product", subKey: ["name"] },
      { title: "rating", apiKey: "rating", type: "rating", sorting: true },
      {title: "created_at",apiKey: "created_at",sorting: true,sortBy: "desc",type: "date",},
    ],
    data: data || [],
  };
  headerObj.data?.map(
    (element) =>
      (element.product_thumbnail = element?.product?.product_thumbnail)
  );
  if (!data) return <Loader />;
  return (
    <>
      <ShowTable {...props} headerData={headerObj} />
    </>
  );
};

export default TableWarper(AllReviewsTable);
