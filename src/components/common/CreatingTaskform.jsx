/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const CreatingTaskform = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
    console.log("Loaded employees from storage:", storedEmployees);
  }, []); // Load employees when component mounts

  const [title, setTasktitle] = useState("");
  const [taskdesc, setTaskdesc] = useState("");
  const [taskdate, setTaskdate] = useState("");
  const [Assignto, setAssignto] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Ensure employees data exists
    if (!employees || employees.length === 0) {
      alert("No employees found in local storage.");
      return;
    }

    // Create new task object
    const newTask = {
      title,
      taskdesc,
      taskdate,
      category,
      active: true,
      completed: false,
      failed: false,
    };

    // Update employee list with the new task
    let employeeFound = false;
    const updatedEmployees = employees.map((employee) => {
      if (employee.name === Assignto) {
        employeeFound = true;
        return {
          ...employee,
          tasks: [...(employee.tasks || []), newTask], // Ensure tasks array exists
        };
      }
      return employee;
    });

    // Check if employee was found before updating local storage
    if (!employeeFound) {
      alert(`Employee ${Assignto} not found.`);
      return;
    }

    // Update state and local storage
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    alert("Task created successfully!");

    // Reset form fields
    setAssignto("");
    setCategory("");
    setTaskdate("");
    setTasktitle("");
    setTaskdesc("");
  };

  return (
    <div>
      <div className="h-full mt-7 rounded">
        <form
          onSubmit={submitHandler}
          className="flex flex-wrap w-full items-start bg-slate-900 bg-opacity-50 justify-between p-3"
        >
          <div className="w-1/2 px-3 py-5">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Title</h3>
              <input
                required
                value={title}
                onChange={(e) => setTasktitle(e.target.value)}
                className="text-sm py-1 px-2 w-4/5 h-9 rounded outline-none bg-transparent border-[1px]"
                type="text"
                placeholder="Task Title"
              />
            </div>
            <h3 className="text-sm text-gray-300 pt-3 mb-0.5">Deadline</h3>
            <input
              required
              value={taskdate}
              onChange={(e) => setTaskdate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 h-9 rounded outline-none bg-transparent border-[1px]"
              type="date"
            />
            <div>
              <h3 className="text-sm text-gray-300 pt-3 mb-0.5">Assign To</h3>
              <input
                required
                value={Assignto}
                onChange={(e) => setAssignto(e.target.value)}
                className="text-sm py-1 px-2 w-4/5 h-9 rounded outline-none bg-transparent border-[1px]"
                type="text"
                placeholder="Employee name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 pt-3 mb-1">Category</h3>
              <input
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="text-sm py-1 px-2 w-4/5 h-9 rounded outline-none bg-transparent border-[1px]"
                type="text"
                placeholder="design, dev, more"
              />
            </div>
          </div>
          <div className="w-1/2 px-3 py-5">
            <div className="flex flex-col items-start">
              <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
              <textarea
                value={taskdesc}
                onChange={(e) => setTaskdesc(e.target.value)}
                className="w-full h-44 text-sm py-3 px-4 rounded outline-none bg-transparent border-[1px]"
              ></textarea>
              <div className="w-full p-3 flex justify-center align-middle">
                <button type="submit"
                  id="createtaskbtnadmin"
                  className="text-black p-3 bg-emerald-300 bg-opacity-50 rounded-2xl"
                >
                  Create Task
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatingTaskform;
