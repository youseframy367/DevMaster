# تقرير Dashboard Overview

تم تحويل الصفحة الرئيسية لـ Dashboard من شاشة التحقق من تسجيل الدخول إلى Overview تحليلي متكامل على المسار `/dashboard`.

## API Integration

تم إنشاء `app/lib/dashboard.js` لخدمة مستقلة تجلب البيانات من:

- `GET /dashboard/overview`

ويتم بناء الرابط باستخدام `NEXT_PUBLIC_BASE_URL` عبر `apiUrl()`، مع إرسال access token الحالي في Authorization header. الخدمة تدعم response مباشر أو response مغلف داخل `data`، وتتعامل مع رسائل الأخطاء القادمة من Backend.

## الصفحة

تحتوي الصفحة على:

- Header بعنوان Dashboard Overview ووصف وتاريخ اليوم.
- زر Refresh يعيد طلب البيانات دون طلبات إضافية غير ضرورية.
- سبع Statistics Cards مبنية بالكامل على قيم API:
  - Total Articles
  - Total Comments
  - Total Contacts
  - Total Jobs
  - Job Applications
  - Total Products
  - Service Requests
- روابط من كل بطاقة إلى صفحة الإدارة الخاصة بها.
- Latest Service Requests مع حد أقصى 10 سجلات.
- Latest Contact Messages مع حد أقصى 10 سجلات.
- بحث بصري واضح عبر الجداول، ورسائل Empty State عند عدم وجود سجلات.
- View Details Modal يعرض كل بيانات الطلب أو الرسالة.
- روابط mailto للإيميلات.
- روابط tel فقط لأرقام الهواتف التي تجتاز validation بسيطًا.
- Initials avatar عند عدم وجود صورة.
- Truncation للرسائل الطويلة مع tooltip عبر `title`.
- Skeleton loaders أثناء التحميل.
- Error state احترافي مع Try Again.
- Responsive tables مع horizontal scrolling على الشاشات الصغيرة.

## الحفاظ على المشروع

تم الحفاظ على Dashboard Layout وSidebar وحماية current-user، ولم يتم تعديل Backend أو الصفحات الأخرى.

## الاختبارات

- `npm run build`: ناجح.
- `npx tsc --noEmit`: ناجح.
- `npm run lint`: لا توجد أخطاء، مع بقاء تحذيرات المشروع الحالية.
- تم التحقق من وجود endpoint `/dashboard/overview` وعدم hardcode لإحصائيات API.
