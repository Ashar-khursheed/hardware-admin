import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import ShowModal from "../../Elements/Alerts&Modals/Modal";
import Btn from "../../Elements/Buttons/Btn";
import useDeleteAll from "../../Utils/Hooks/useDeleteAll";
import { useTranslation } from "react-i18next";

const TableDeleteOption = ({ url, setIsCheck, isCheck }) => {

  const { t } = useTranslation('common');
  const [modal, setModal] = useState(false);
  const { data, mutate, isLoading } = useDeleteAll(url, setIsCheck);
  const handleDelete = (deleteIds) => {
    mutate(deleteIds);
  };
  useEffect(() => {
    if (data) {
      data?.status == 200 && setModal(false);
    }
  }, [isLoading]);
  return (
    <>
      <a
        className="align-items-center btn btn-outline btn-sm d-flex"
        onClick={() => setModal(true)}
      >
        <RiDeleteBinLine /> {t("delete")}
      </a>
      <ShowModal
        open={modal}
        close={false}
        setModal={setModal}
        buttons={
          <>
            <Btn
              title="no"
              onClick={() => {
                setModal(false);
              }}
              className="btn-md btn-outline fw-bold"
            />
            <Btn
              title="yes"
              className="btn-theme btn-md fw-bold"
              onClick={() => {
                handleDelete(isCheck);
              }}
              loading={Number(isLoading)}
            />
          </>
        }
      >
        <div className="remove-box">
          <div className="remove-icon">
            <RiDeleteBinLine className="icon-box" />
          </div>
          <h2 className="mt-2">{t("delete_item")}</h2>
          <p>{t("deleted_message")}{" "}</p>
        </div>
      </ShowModal>
    </>
  );
};

export default TableDeleteOption;
