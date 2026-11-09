# تقرير إدارة Service Requests

تم إنشاء صفحة إدارة طلبات الخدمات داخل Dashboard على المسار `/dashboard/service-requests`، مع إضافة رابط Service Requests إلى Sidebar وتحديث `public/manus-routes.json`.

الصفحة تستخدم CRUD Component المشترك، وتدعم عرض الطلبات والبحث والإضافة والتعديل والحذف والتأكيد قبل الحذف، مع View وEdit Modals وحالات Loading وEmpty وError وSuccess وPagination.

## الحقول

تم الالتزام بالـ DTO المرسل:

- `id`
- `name`
- `companyName`
- `email`
- `phoneNumber`
- `message`

## API

تم ربط الصفحة بالـ endpoints التالية دون تغيير:

- `GET /service-requests`
- `POST /service-requests`
- `PUT /service-requests/:id`
- `DELETE /service-requests/:id`

الطلبات تستخدم طبقة API المشتركة و`NEXT_PUBLIC_BASE_URL` وAuthorization token الحالي. بعد كل عملية CRUD يتم إعادة تحميل البيانات تلقائيًا من Backend.

## الاختبارات

نجح `npm run build` وتم توليد `/dashboard/service-requests` بنجاح. نجح `npx tsc --noEmit`. لا توجد أخطاء lint في الملفات الجديدة، مع بقاء تحذيرات المشروع الموجودة مسبقًا.

لم يكن Backend متاحًا أثناء التنفيذ، لذلك لم يمكن تنفيذ CRUD فعلي ببيانات قاعدة البيانات داخل بيئة التنفيذ. الصفحة مربوطة بالـ Controller والـ DTO المرسلين دون تعديل Backend أو استخدام Mock Data.
