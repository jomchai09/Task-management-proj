import "./App.css";
import Header from "./components/Header";
import Addform from "./components/Addform";
import Item from "./components/Item";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "บอกจารโก้ว่าใส่เสื้อช็อปได้" },
    { id: 2, title: "เจ๊ติ๋มปิดวันพฤหัส" },
  ]);
  const [title, setTitle] = useState("");
  const [editId, setEditid] = useState(null);
  function deleteTask(id) {
    const result = tasks.filter((Item) => Item.id !== id);
    setTasks(result);
  }
  function editTasks(id) {
    setEditid(id);
    const editTask = tasks.find((Item) => Item.id === id);
    setTitle(editTask.title);
  }

  //ตัวกดบันทึก
  function saveTask(e) {
    e.preventDefault();
    if (!title) {
      alert("กรุณาป้อนข้อมูลด้วยครับ");
    } else if (editId) {
      //อัพเดทข้อมูล
      const updateTask = tasks.map((item) => {
        //รายการใดมีรหัสตรงกับหัสที่แก้ไขให้เปลี่ยนแปลง props title
        if (item.id === editId) {
          return { ...item, title: title };
        }
        return item;
      });
      setTasks(updateTask);
      setTitle("");
      setEditid(null);
    } else {
      //เพิ่มรายการใหม่
      const NewTask = {
        id: Math.floor(Math.random() * 1000),
        title: title,
      };
      setTasks([...tasks, NewTask]);
    }
  }
  return (
    <div className="App">
      <Header />
      <div className="Container">
        <Addform
          title={title}
          setTitle={setTitle}
          saveTask={saveTask}
          editId={editId}
        />
        <section>
          {tasks.map((data) => (
            <Item
              key={data.id}
              data={data}
              deleteTask={deleteTask}
              editTasks={editTasks}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
