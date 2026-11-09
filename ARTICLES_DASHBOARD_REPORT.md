# تقرير صفحة إدارة المقالات

تم إنشاء صفحة إدارة المقالات على المسار `/dashboard/articles` بنفس Dashboard Shell الحالي، مع إضافة رابط Articles إلى Sidebar وتحديث `public/manus-routes.json`.

الصفحة تستخدم Component CRUD المشترك `app/dashboard/about/components/AboutCrudPage.jsx`، لذلك تشترك مع صفحات About في الجدول والـ Modal والبحث والـ pagination ورسائل loading وempty وerror وsuccess.

## الحقول والعمليات

يعرض الجدول ID وImage وTitle وDescription وDate وActions. الصورة تظهر كصورة مصغرة، والوصف الطويل يظهر مختصرًا داخل الجدول ويمكن قراءة النص كاملًا من View Modal. يدعم كل صف العرض والتعديل والحذف، مع تأكيد قبل الحذف.

نموذج الإضافة والتعديل يحتوي على `image` كرابط URL، و`title`، و`description` كحقل نص طويل، و`date` كحقل تاريخ. استخدمت رابط الصورة لأن المشروع الحالي يعرض `item.image` كرابط مباشر، ولا يوجد في الواجهة أو الملفات المتاحة endpoint رفع ملفات مستقل يمكن افتراضه. لم تتم إضافة `FormData` أو upload endpoint غير موثق.

## API

تم الحفاظ على endpoints المطلوبة كما هي:

- `GET /articles`
- `POST /articles`
- `PUT /articles/:id`
- `DELETE /articles/:id`

يتم بناء الروابط عبر `apiUrl()` من `NEXT_PUBLIC_BASE_URL`، مع إرسال access token الحالي في Authorization header. لا توجد بيانات وهمية ولا تغييرات على Backend.

## البحث والترتيب

البحث يعمل محليًا على العنوان والوصف وجميع الأعمدة النصية، مع فلتر تاريخ اختياري. يتم ترتيب النتائج من الأحدث إلى الأقدم اعتمادًا على حقل `date`، وتظهر pagination عندما يتجاوز عدد النتائج حجم الصفحة.

## الاختبارات

نجح `npm run build`، وتم توليد `/dashboard/articles` بنجاح. نجح `npx tsc --noEmit`. لا توجد أخطاء lint في الملفات الجديدة، مع بقاء تحذيرات المشروع السابقة، بالإضافة إلى تحذير الصورة المصغرة المعتاد من Next.js لأن URL الصور قد يكون خارجيًا وغير معروف في `next.config`.

لم يكن Backend متاحًا على `localhost:3001` أثناء التنفيذ، لذلك لم يمكن تشغيل CRUD فعلي على بيانات حقيقية. يجب اختبار POST وPUT وDELETE بعد تشغيل NestJS والتأكد من أن DTOs تقبل `image` كنص URL، وهو المتوافق مع Entity والاستخدام الحالي في الواجهة العامة.
