# تقرير Comments Management

تم إنشاء صفحة إدارة التعليقات داخل Dashboard على المسار `/dashboard/comments`، مع إضافة رابط Comments إلى Sidebar وتحديث `public/manus-routes.json`.

الصفحة تستخدم نفس `DashboardLayout` و`AboutCrudPage` المشتركين مع صفحات About والمقالات، لذلك تحافظ على نفس الألوان والتدرجات والخطوط والـ responsive behavior.

## الحقول والعمليات

يتم عرض ID والصورة والاسم والوظيفة ونص التعليق داخل جدول. يوجد زر `Add Comment`، وتتوفر أيقونات View وEdit وDelete لكل صف. العرض والتعديل يتمان داخل Modal، والحذف يتطلب تأكيدًا من المستخدم. بعد الإضافة أو التعديل أو الحذف يعاد جلب `/comments` تلقائيًا دون Refresh كامل للصفحة.

نموذج التعليق يستخدم الحقول الحالية المستخدمة في الموقع العام:

- `image`
- `name`
- `job`
- `description`

حقل الصورة يتعامل مع URL كما هو مستخدم في الصفحة العامة، مع صورة افتراضية من `/icon/logoWhite.svg` عند عدم وجود الصورة أو فشل تحميلها.

## API

تم استخدام طبقة `aboutCrud` الحالية مع endpoints:

- `GET /comments`
- `POST /comments`
- `PUT /comments/:id`
- `DELETE /comments/:id`

تستخدم الطلبات `NEXT_PUBLIC_BASE_URL` و`Authorization: Bearer <accessToken>`، ولم تتم إضافة بيانات Mock أو تعديل Backend.

## الاختبارات

نجح `npx tsc --noEmit`. ونجح `npm run build`، وتم توليد `/dashboard/comments` بنجاح. نجح lint بدون أخطاء، مع بقاء تحذيرات المشروع الحالية، ويظهر تحذير الصور المعتاد من Next.js بسبب استخدام `<img>` مع روابط قد تكون خارجية.

لم يكن Backend متاحًا أثناء التنفيذ لتشغيل CRUD فعلي ببيانات قاعدة البيانات، لكن الصفحة مربوطة بالـ API الحقيقي ولا تحتوي على بيانات ثابتة.
