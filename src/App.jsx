import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, clearAll, update } from "../src/store/cartSlice";
import Modal from "./Modal";

const App = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.cart.value);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add({ name, age: Number(age) }));
    setName("");
    setAge("");
  };

  const handleUpdate = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleUpdateSubmit = (updatedStudent) => {
    dispatch(update(updatedStudent));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-300 to-red-600 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Students
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 mx-auto">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            className="input input-bordered input-secondary w-full max-w-xs bg-transparent"
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            required
            className="bg-transparent input input-bordered input-error w-full max-w-xs"
          />
          <button
            type="submit"
            className="btn btn-active btn-secondary w-full"
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => dispatch(clearAll())}
            className="btn btn-active btn-error w-full"
          >
            Clear
          </button>
        </form>
        <ul className="mt-4 space-y-2">
          {students.length === 0 ? (
            <li className="text-center text-gray-500">Talabalar yo'q</li>
          ) : (
            students.map((student) => (
              <li
                key={student.id}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow hover:shadow-md transition duration-200"
              >
                <span className="font-semibold">{student.name}</span>
                <span className="text-gray-600">({student.age})</span>
                <button
                  onClick={() => dispatch(remove({ id: student.id }))}
                  className="btn btn-outline btn-error"
                >
                  Delete
                </button>
                <button
                  className="btn btn-outline btn-warning"
                  onClick={() => handleUpdate(student)}
                >
                  Update
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={handleUpdateSubmit}
        student={selectedStudent}
      />
    </div>
  );
};

export default App;
