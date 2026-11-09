# تقرير إدارة رسائل التواصل

تم إنشاء صفحة إدارة رسائل التواصل داخل Dashboard على المسار `/dashboard/contacts`، مع إضافة رابط `Contact Messages` إلى Sidebar وتحديث `public/manus-routes.json`.

الصفحة تستخدم `AboutCrudPage` المشترك، ولذلك تحتوي على جدول Responsive وSearch وPagination وحالات Loading وEmpty وError وSuccess، بالإضافة إلى View وEdit وDelete Modals وزر Add Contact.

## الحقول

تم الالتزام بالحقول الموجودة في Entity `ContactUs`:

- `id`
- `name`
- `email`
- `phoneNumber`
- `message`

## API

تم ربط الصفحة بالـ endpoints كما وردت في Controller:

- `GET /contacts`
- `POST /contacts`
- `PUT /contacts/:id`
- `DELETE /contacts/:id`

تستخدم الطلبات طبقة `aboutCrud` الموجودة، والتي تعتمد على `NEXT_PUBLIC_BASE_URL` وترسل access token الحالي في Authorization header. Responses الإضافة والتعديل التي تحتوي على `message` و`contact` لا تؤثر على إعادة تحميل الجدول؛ بعد نجاح العملية يتم استدعاء GET مرة أخرى للحصول على البيانات الحالية.

لم يتم تعديل Controller أو Entity أو أي جزء من Backend، ولم تتم إضافة بيانات ثابتة أو Mock Data.

## الاختبارات

نجح `npm run build` وتم توليد `/dashboard/contacts` بنجاح. نجح `npx tsc --noEmit`. نجح lint بدون أخطاء، مع بقاء تحذيرات المشروع الحالية.

لم يكن Backend متاحًا أثناء التنفيذ، لذلك لم يمكن تنفيذ CRUD فعلي ببيانات قاعدة البيانات داخل بيئة التنفيذ. الصفحة مربوطة بالـ Controller والحقول المحددة وجاهزة للاستخدام عند تشغيل NestJS.
