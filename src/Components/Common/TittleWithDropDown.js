import Pluralize from "@/Utils/CustomFunctions/Pluralize";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import ImportExport from "../Table/ImportExport";
import Btn from "@/Elements/Buttons/Btn";

const TittleWithDropDown = ({
  pathName,
  moduleName,
  importExport,
  noDropDown,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t } = useTranslation("common");
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const router = useRouter();

  return (
    <div className="title-header option-title">
      <h5>{t(moduleName)}</h5>
      {/* {!noDropDown && (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="action-dropdown">
          <DropdownToggle caret className="btn-sm btn-outline">
            {t("action")}
          </DropdownToggle>
          <DropdownMenu end>
            {importExport && (
              <ImportExport
                Dropdown
                importExport={importExport}
                moduleName={Pluralize(moduleName)}
              />
            )}
            {pathName && (
              <DropdownItem onClick={() => router.push(pathName)}>
                {t("create")}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      )} */}


      {!noDropDown && (
        <div className="action-dropdown">
          <Btn className={`btn-sm btn-outline action-dropdown-button ${dropdownOpen ? "show" : ''}`} onClick={toggle} color="transparent">
            {t("action")}
          </Btn>
          <ul className="action-dropdown-list" end>
            {importExport && (
              <ImportExport
                Dropdown
                importExport={importExport}
                moduleName={Pluralize(moduleName)}
              />
            )}
            { pathName && (
              <DropdownItem onClick={() => router.push(pathName)}>
                {t("create")}
              </DropdownItem>
            ) }
          </ul>
        </div>
      )}
    </div>
  );
};

export default TittleWithDropDown;
