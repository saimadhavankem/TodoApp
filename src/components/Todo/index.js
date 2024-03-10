import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import "./index.css";

const Todo = (props) => {
  const { details, onDelete, onUpdate } = props;
  const { id, title, count } = details;
  const onDeleteClick = () => {
    onDelete(id);
  };
  const onUpdateClick = () => {
    onUpdate(id);
  };
  return (
    <li>
      <p>
        {title} <span>(Updated {count} Times)</span>
      </p>
      <div>
        <HiOutlinePencilSquare onClick={onUpdateClick} size="19px" />
        <IoClose onClick={onDeleteClick} size="19px" className="icon" />
      </div>
    </li>
  );
};

export default Todo;
