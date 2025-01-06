"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AddUserModal() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    profession: "",
    experience: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("age", formData.age);
    data.append("profession", formData.profession);
    data.append("experience", formData.experience);
    data.append("file", formData.file);

    try {
      const res = await fetch(
        "https://json-api.uz/api/project/fn1-fullstack/upload",
        {
          method: "POST",
          body: data,
        }
      );
      if (res.ok) {
        alert("Foydalanuvchi muvaffaqiyatli qo'shildi!");
        setFormData({
          fullName: "",
          age: "",
          profession: "",
          experience: "",
          file: null,
        });
      } else {
        console.error("Xatolik yuz berdi");
      }
    } catch (error) {
      console.error("Server bilan bog'lanishda xatolik:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
       

      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
   

      <div className="relative z-10 bg-white p-6 rounded-md shadow-md w-[400px]">
      <a href="/api/users"><Button className="text-red-500 flex right-10">X</Button></a>
        <h2 className="text-xl font-semibold mb-4">Ma'lumotlarni kiriting</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Ism-familiya*"
              className="w-full border rounded px-3 py-2"
              required
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Yosh*"
              className="w-full border rounded px-3 py-2"
              required
            />
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              placeholder="Kasbi*"
              className="w-full border rounded px-3 py-2"
              required
            />
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Tajriba*"
              className="w-full border rounded px-3 py-2"
              required
            />
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="bg-blue-500 text-white px-3 py-2 rounded">
                RASM YUKLASH
              </div>
              {formData.file && (
                <span className="text-sm">{formData.file.name}</span>
              )}
            </label>
          </div>
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={() =>
                setFormData({
                  fullName: "",
                  age: "",
                  profession: "",
                  experience: "",
                  file: null,
                })
              }
              className="text-red-500 hover:underline"
            >
              BEKOR QILISH
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              TASDIQLASH
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
