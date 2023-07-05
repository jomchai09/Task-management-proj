import "./item.css";
export default function item(props) {
  const { data, deleteTask, editTasks } = props;
  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <div className="button-container">
        <button className="btn" onClick={() => deleteTask(data.id)}>
          ลบ
        </button>
        <button className="btn" onClick={() => editTasks(data.id)}>
          แก้ไข
        </button>
      </div>
    </div>
  );
}
