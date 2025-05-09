
let permissionArrayList;
const ISSERVER = typeof window === "undefined";

if(!ISSERVER){
   permissionArrayList =   localStorage.getItem("account_multikart") && JSON.parse(localStorage.getItem("account_multikart"))?.permissions || []
}else{
  permissionArrayList = []
}
export  function checkPermission(dynamicValue) {
  if (typeof dynamicValue === "string") {
    return permissionArrayList?.some((obj) => obj.name === dynamicValue);
  } else if (Array.isArray(dynamicValue)) {
    return dynamicValue.every((value) =>
      permissionArrayList.some((obj) => obj.name === value)
    );
  } else {
    return false;
  }
}
