import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import ShowModal from "../../Elements/Alerts&Modals/Modal";
import Btn from "../../Elements/Buttons/Btn";
import { useTranslation } from "react-i18next";

const DeleteButton = ({ id, mutate, noImage }) => {

  const { t } = useTranslation("common");
  const [modal, setModal] = useState(false);
  return (
    <>
      {id && mutate && (
        <>
          {noImage ? (
            <Btn className="btn-outline" title="delete" onClick={() => { setModal(true); }} />
          ) : (
            <a>
              <RiDeleteBinLine className="text-danger" onClick={() => { setModal(true); }} />
            </a>
          )}
        </>
      )}
      <ShowModal open={modal} close={false} setModal={setModal} buttons={
        <>
          <Btn title="no" onClick={() => { setModal(false); }} className="btn-md btn-outline fw-bold" />
          <Btn title="yes" onClick={() => { mutate(id); setModal(false); }} className="btn-theme btn-md fw-bold" />
        </>
      }>
        <div className="remove-box">
          <div className="remove-icon">
            <RiDeleteBinLine className="icon-box" />
          </div>
          <h2>{t("delete_item")}?</h2>
          <p>{t("deleted_message")}{" "}</p>
        </div>
      </ShowModal>
    </>
  );
};

export default DeleteButton;
