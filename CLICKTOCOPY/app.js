const btn = document.querySelector(".btn");
const copong = document.querySelector(".copong");
const btngen = document.querySelector(".btngen");

// สร้างฟังก์ชัน generateUniqueValue โดยใช้ Set เพื่อเก็บค่าที่มีอยู่แล้ว
function generateUniqueValue(existingValues, length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let newValue = "";

  do {
    newValue = "";
    for (let i = 0; i < length; i++) {
      newValue += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  } while (existingValues.has(newValue)); // ทำซ้ำไปเรื่อยๆ จนกว่าค่าที่สร้างจะไม่ซ้ำกับค่าที่มีอยู่แล้ว

  return newValue;
}

document.addEventListener("DOMContentLoaded", function () {
  const existingValues = new Set(); // สร้าง Set เพื่อเก็บค่าที่มีอยู่แล้ว
  const copongInput = document.querySelector(".copong");
  const generatedValue = generateUniqueValue(existingValues, 10); // สร้างค่าที่ไม่ซ้ำกันขนาด 10 ตัวอักษร
  existingValues.add(generatedValue); // เพิ่มค่าที่สร้างเข้า Set
  copongInput.value = generatedValue; // ใส่ค่าที่สร้างเข้าใน input element ที่มี class เป็น copong
});
// เรียกใช้งานฟังก์ชัน generateUniqueValue

btngen.addEventListener("click", function () {
  const existingValues = new Set(); // สร้าง Set เพื่อเก็บค่าที่มีอยู่แล้ว
  const copongInput = document.querySelector(".copong");
  const generatedValue = generateUniqueValue(existingValues, 10); // สร้างค่าที่ไม่ซ้ำกันขนาด 10 ตัวอักษร
  existingValues.add(generatedValue); // เพิ่มค่าที่สร้างเข้า Set
  copongInput.value = generatedValue;
});

btn.addEventListener("click", (e) => {
  copong.select();
  copong.setSelectionRange(0, 999999);
  navigator.clipboard.writeText(copong.value);
  btn.textContent = "คัดลอกคูปองแล้ว!!";
});

copong.addEventListener("input", function () {
  btn.textContent = "คัดลอก";
});
