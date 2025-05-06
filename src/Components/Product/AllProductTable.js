import { useContext,useEffect } from "react";
import { Approved, product } from "../../Utils/AxiosUtils/API";
import TableWarper from "../../Utils/HOC/TableWarper";
import ShowTable from "../Table/ShowTable";
import Loader from "../CommonComponent/Loader";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";
import placeHolderImage from "../../../public/assets/images/placeholder.png";
import AccountContext from "../../Helper/AccountContext";

import { useTranslation } from "react-i18next";
import SettingContext from "@/Helper/SettingContext";

const AllProductTable = ({ data, ...props }) => {
  
  const { t } = useTranslation( 'common');
  const [edit, destroy] = usePermissionCheck(["edit", "destroy"]);
  const { role, setRole } = useContext(AccountContext) 
  const { settingObj } = useContext(SettingContext); 
  const language = settingObj?.general?.default_language?.locale

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      const parsedRole = JSON.parse(storedRole);
      setRole(parsedRole.name);
    }
  }, [])
  const headerObj = {
    checkBox: true,
    isOption: edit == false && destroy == false ? false : true,
    noEdit: edit ? false : true,
    isSerialNo:false,
    optionHead: { title: "Action",show:"product",  type: 'download',modalTitle: t("download") },
    column: [
      { title: "image", apiKey: "product_thumbnail", type: 'image', placeHolderImage: placeHolderImage },
      { title: "name", apiKey: "name", sorting: true, sortBy: "desc" },
      { title: "sku", apiKey: "sku", sorting: true, sortBy: "desc" },
      { title: "price", apiKey: "sale_price", sorting: true, sortBy: "desc", type: 'price' },
      { title: "stock", apiKey: "stock_status", type: 'stock_status' },
      { title: "store", apiKey: "store", subKey: ["store_name"] },
      { title: "approved", apiKey: "is_approved", type: 'switch', url: `${product}${Approved}` },
      { title: "status", apiKey: "status", type: 'switch' }
    ],
    data: data || []
  };
  headerObj.data.map((element) => element.sale_price = element?.sale_price)

  let pro = headerObj?.column?.filter((elem) => {
    return role == 'vendor' ? elem.title !== 'Approved' : elem;
  });
  headerObj.column = headerObj ? pro : [];
  if (!data) return <Loader />;
  return <>
    <ShowTable {...props} headerData={headerObj} lang={language}/>
  </>
};

export default TableWarper(AllProductTable);
