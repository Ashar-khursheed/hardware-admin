import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { useCookies } from 'react-cookie';
import AccountContext from '.'
import request from '../../Utils/AxiosUtils';
import { selfData } from '../../Utils/AxiosUtils/API';
import { useRouter } from 'next/navigation';

const AccountProvider = (props) => {
    const router = useRouter();
    const [cookies] = useCookies(["uat_multikart"]);
    const [role, setRole] = useState('')
    const { data, refetch, isLoading } = useQuery([selfData, cookies.uat_multikart], () => request({ url: selfData },router), {
        enabled: false, select: (res) => { return res?.data }
    });
    const [accountData, setAccountData] = useState()
    const [accountContextData, setAccountContextData] = useState({
        name: "",
        image: {}
    })

    useEffect(() => {
        cookies.uat_multikart && refetch()
    }, [cookies.uat_multikart])

    useEffect(() => {
        if (data) {
            localStorage.setItem("role", JSON.stringify(data?.role))
            setRole(data?.role?.name)
        }
        setAccountData(data)
    }, [isLoading, cookies.uat_multikart])

    return (
        <AccountContext.Provider value={{ ...props, accountData, setAccountData, accountContextData, setAccountContextData, role, setRole }}>
            {props.children}
        </AccountContext.Provider>
    )
}
export default AccountProvider