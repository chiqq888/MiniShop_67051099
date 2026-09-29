# MiniShop Dashboard

MiniShop เป็นเว็บตัวอย่างร้านค้าออนไลน์สำหรับฝึกใช้ Tailwind CSS ในการจัดหน้าเว็บและทำ Responsive Design พัฒนาด้วย Vite, Vanilla JavaScript และ Tailwind CSS โดยแบ่งเป็นหน้า Dashboard, Products และ Profile

## เทคโนโลยีที่ใช้

- HTML สำหรับโครงสร้างแต่ละหน้า
- Tailwind CSS สำหรับสี ระยะห่าง Flexbox, Grid และ Responsive Design
- JavaScript สำหรับค้นหาและกรองสินค้า หน้าต่างรายละเอียดสินค้า และจำนวนสินค้าในตะกร้า
- Vite สำหรับรันเว็บระหว่างพัฒนาและสร้างไฟล์สำหรับใช้งานจริง

## วิธีติดตั้งและรัน

ต้องติดตั้ง Node.js และ npm ก่อน จากนั้นเปิด Terminal ในโฟลเดอร์ `minishop-dashboard` แล้วรัน:

```bash
npm install
npm run dev
```

เปิด URL ที่ Terminal แสดง โดยปกติคือ `http://localhost:5173/` หน้าแรกจะแสดง Dashboard

คำสั่งอื่นที่ใช้ได้:

```bash
npm run build    # สร้างไฟล์สำหรับใช้งานจริงใน dist/
npm run preview  # ทดลองเปิดไฟล์ที่ build แล้ว
```

## หน้าต่าง ๆ

| หน้า | รายละเอียด |
| --- | --- |
| Dashboard | แสดงการ์ดสรุปจำนวนสินค้า คำสั่งซื้อ รายได้ และตารางคำสั่งซื้อล่าสุด |
| Products | แสดงสินค้า 4 รายการ ได้แก่ Laptop, Headphones, Backpack และ Smart Watch พร้อมช่องค้นหาและตัวกรองหมวดหมู่ |
| Profile | แสดงข้อมูลผู้ใช้และการ์ด Account Summary |

Sidebar ใช้ลิงก์ไปยังแต่ละหน้าและแสดงสถานะของหน้าที่กำลังเปิด Layout จะปรับตามขนาดหน้าจอ เช่น การ์ดสินค้าจะแสดง 1, 2 หรือ 4 คอลัมน์ตามพื้นที่ที่มี

## การใช้งานหน้า Products

1. พิมพ์ชื่อสินค้าในช่อง **Search products** หรือเลือกหมวดหมู่เพื่อกรองรายการ
2. กด **Add to Cart** บนการ์ดเพื่อเปิดหน้าต่างรายละเอียดสินค้า
3. ปรับจำนวนด้วยปุ่ม `−` และ `+` แล้วกด **Add to Cart** ในหน้าต่าง
4. จำนวนสินค้าบนไอคอนตะกร้าจะเพิ่มขึ้นและถูกเก็บไว้ใน `localStorage` จึงยังแสดงจำนวนเดิมหลังรีเฟรชหน้า

## โครงสร้างไฟล์หลัก

```text
minishop-dashboard/
├── index.html          # หน้าแรก (Dashboard)
├── src/
│   ├── dashboard.html  # หน้า Dashboard ที่ Sidebar ลิงก์ไป
│   ├── products.html   # หน้า Products
│   ├── profile.html    # หน้า Profile
│   ├── main.js         # การทำงานของ Sidebar และหน้า Products
│   ├── style.css       # นำเข้า Tailwind และสไตล์เพิ่มเติม
│   └── assets/         # รูปสินค้าและไอคอน
├── public/              # ไฟล์สาธารณะ เช่น favicon
├── vite.config.js       # ตั้งค่า Tailwind และการ build หลายหน้า
└── package.json
```

## ขอบเขตของโปรเจกต์

ข้อมูลคำสั่งซื้อ ตัวเลขสรุป และข้อมูล Profile เป็นข้อมูลตัวอย่าง ปุ่ม **Edit Profile** และไอคอน Search/User บน Header ยังไม่ได้เชื่อมกับฟังก์ชัน ระบบตะกร้าเก็บและแสดงเฉพาะจำนวนสินค้าในเครื่องผู้ใช้ ยังไม่มีหน้าตะกร้า ขั้นตอนชำระเงิน ฐานข้อมูล หรือ Backend

โปรเจกต์นี้จัดทำเพื่อการเรียนรู้ Tailwind CSS และการสร้างหน้าเว็บด้วย Vite แบบ Vanilla JavaScript

## จัดทำโดย

**Ratchatapong Atteephok**  
รหัสนักศึกษา **67051099**
