import React, { useContext } from 'react'
import TableWarper from '../../Utils/HOC/TableWarper'
import ShowTable from '../Table/ShowTable';
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";
import SettingContext from '@/Helper/SettingContext';

const AllPagesTable = ({ data, ...props }) => {
    const [edit, destroy] = usePermissionCheck(["edit", "destroy"]);
    const { settingObj } = useContext(SettingContext);
    const language = settingObj?.general?.default_language?.locale;

    const headerObj = {
        checkBox: true,
        isOption: edit == false && destroy == false ? false : true,
        isSerialNo:false,
        noEdit: edit ? false : true,
        optionHead: { title: "Action" },
        column: [
            { title: "title", apiKey: "title", sorting: true, sortBy: "desc" },
            { title: "created_at", apiKey: "created_at", sorting: true, sortBy: "desc", type: "date" },
            { title: "status", apiKey: "status", type: "switch" }
        ],
        data: data || []
    };
    if (!data) return null;
    return <>
        <ShowTable {...props} headerData={headerObj} lang={language}/>
    </>
}

export default TableWarper(AllPagesTable)