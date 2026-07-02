# Hybrid Mobile Profile

แอป Expo (React Native) สำหรับแสดงโปรไฟล์ส่วนตัว — รูป, ชื่อ-นามสกุล, รหัสนักศึกษา, คณะ/หลักสูตร และปุ่มติดต่อ (Email, GitHub, Facebook)

ใช้ Expo SDK 54 + Expo Router

## เริ่มใช้งาน

```bash
npm install
npx expo start
```

จากนั้นเปิดในมือถือผ่าน Expo Go, emulator, หรือกด `w` เพื่อเปิดในเว็บเบราว์เซอร์

## แก้ไขข้อมูลโปรไฟล์

ข้อมูลทั้งหมด (ชื่อ, รหัสนักศึกษา, คณะ, ลิงก์ติดต่อ) แก้ได้ที่ [`app/(tabs)/index.tsx`](app/(tabs)/index.tsx)

รูปโปรไฟล์อยู่ที่ [`assets/images/profile.png`](assets/images/profile.png) — เปลี่ยนรูปได้โดยนำไฟล์ใหม่มาทับ (ต้องใช้ชื่อไฟล์เดิม)
