import { ButtonProps } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ icon, classNameIcon, classNameButton, colorIcon, label }: ButtonProps) {
  return (
    <button className={classNameButton}>
      <div className="flex gap-5 justify-center items-center">
        <FontAwesomeIcon icon={icon} className={classNameIcon} style={{ color: colorIcon }} />
        <p>{label}</p>
      </div>
    </button>
  );
}

export default Button;
