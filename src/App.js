import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [myTasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shoping",
      day: "Feb 7th at 4:00pm",
      reminder: false,
    },
  ]);

  // delete Task
  const deleteTask = (id) => {
    setTasks(myTasks.filter((task) => task.id !== id));
  };

  // toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      myTasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {myTasks.length > 0 ? (
        <Tasks
          tasks={myTasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
