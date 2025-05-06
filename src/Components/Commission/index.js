import TableWarper from '../../Utils/HOC/TableWarper'
import ShowTable from '../Table/ShowTable'
import Loader from '../CommonComponent/Loader'

const AllCommissionTable = ({ data, ...props }) => {
    const headerObj = {
        checkBox: false,
        isOption: false,
        isSerialNo:false,
        optionHead: { title: "Action" },
        column: [
            { title: "order_id", apiKey: "order", subKey: ["order_number"] },
            { title: "store_name", apiKey: "store", subKey: ["store_name"] },
            { title: "admin_commission", apiKey: "admin_commission", type: "price" },
            { title: "vendor_commission", apiKey: "vendor_commission", type: "price" },
            { title: "created_at", apiKey: "created_at", sorting: true, sortBy: "desc", type: "date" }
        ],
        data: data || []
    };
    if (!data) return <Loader />;
    return <>
        <ShowTable {...props} headerData={headerObj} />
    </>
}

export default TableWarper(AllCommissionTable)