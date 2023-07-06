import "./item.css";
import { BsTrash } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
export default function item(props) {
  const { data, deleteTask, editTasks } = props;
  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <div className="button-container">
        <BsTrash className="btn" onClick={() => deleteTask(data.id)} />
        <AiFillEdit className="btn" onClick={() => editTasks(data.id)} />
      </div>
    </div>
  );
}
