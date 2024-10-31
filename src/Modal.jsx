import React from "react";

const Modal = ({ isOpen, onClose, onUpdate, student }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const age = e.target.age.value;
    onUpdate({ ...student, name, age: Number(age) });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Talabani Yangilash</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            defaultValue={student.name}
            required
            className="border border-gray-300 rounded p-2 w-full mb-4"
          />
          <input
            type="number"
            name="age"
            defaultValue={student.age}
            required
            className="border border-gray-300 rounded p-2 w-full mb-4"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition duration-200"
            >
              Yangilash
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white rounded p-2 hover:bg-red-600 transition duration-200"
            >
              Yopish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
