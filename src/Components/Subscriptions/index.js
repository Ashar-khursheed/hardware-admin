import TableWarper from '../../Utils/HOC/TableWarper'
import ShowTable from '../Table/ShowTable';
import Loader from '../CommonComponent/Loader';

const AllSubscriptionTable = ({ data, ...props }) => {
    const headerObj = {
        isSerialNo:false,
        column: [
            { title: "email", apiKey: "email", sorting: true, sortBy: "desc", },
            { title: "created_at", apiKey: "created_at", sorting: true, sortBy: "desc", type: "date" },
        ],
        data: data || []
    };
    if (!data) return <Loader />;
    return <>
        <ShowTable {...props} headerData={headerObj} />
    </>
}

export default TableWarper(AllSubscriptionTable)