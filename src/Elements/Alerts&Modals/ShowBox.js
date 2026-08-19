import { useTranslation } from "react-i18next";
import { BiCheckShield, BiError } from "react-icons/bi";

const ShowBox = ({ showBoxMessage }) => {
  const { t } = useTranslation("common");
  if (!showBoxMessage) return null;

  // Safely handle both string and object error payloads
  const isObject = typeof showBoxMessage === "object";
  const message = isObject ? showBoxMessage.message : showBoxMessage;
  const isSuccess = isObject && showBoxMessage.type === "success";

  return (
    <div className={isSuccess ? "success-box" : "error-box"}>
      {isSuccess ? <BiCheckShield /> : <BiError />}
      <div>
        <h4>{isSuccess ? t("Success") : t("ThereWasAProblem")}</h4>
        <p>{t(message)}</p>
      </div>
    </div>
  );
};

export default ShowBox;
