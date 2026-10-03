/* الترجمة العربية لسلايدات الوحدة 6: هندسة الـ APIs وتكامل الأنظمة
   المدرس: د. بيداء لعلع — 43 شريحة كاملة (L6-S001 إلى L6-S043)
   معيار: 100% SVG line-art · صفر إيموجيات
*/
window.TOC_AR = window.TOC_AR || {};
window.TOC_AR["L6"] = window.TOC_AR["L6"] || {};

window.TOC_AR["L6"]["L6-S001"] = {
  "ar": [
    "البرمجة المتقدمة (Advanced Programming)",
    "المحاضرة السابعة (Lecture 7)",
    "واجهات REST APIs عبر ASP.NET Core (REST APIs with ASP.NET Core)"
  ]
};
window.TOC_AR["L6-S001"] = window.TOC_AR["L6"]["L6-S001"];

window.TOC_AR["L6"]["L6-S002"] = {
  "ar": [
    "مقدمة إلى واجهات برمجة التطبيقات (Introduction to APIs):",
    "- الاختصار API يعني: واجهة برمجة التطبيقات (Application Programming Interface).",
    "- واجهة برمجة التطبيقات (API) هي آلية تتيح لنظامين برمجcontracts) محدد مسبقا.",
    "- مثال من الواقع الحقيقي (Real-world Example):",
    "  * تخيل مطعما (Imagine a restaurant):",
    "    - الزبون / العميل (Customer)",
    "    - النادل (Waiter) ويمثل واجهة البرمجة (API)",
    "    - المطبخ (Kitchen) ويمثل النظام الداخلي (System)",
    "- الزبون لا يدخل إلى المطبخ؛ النادل ينقل الطلبات ويعيد النتائج (The customer does not enter the kitchen. The waiter transfers requests and returns results)."
  ]
};
window.TOC_AR["L6-S002"] = window.TOC_AR["L6"]["L6-S002"];

window.TOC_AR["L6"]["L6-S003"] = {
  "ar": [
    "المعمارية الحديثة للأنظمة (Modern architecture):",
    "- هيكلية تدفق الطبقات:",
    "  * العميل (Client)",
    "  * طبقة واجهة البرمجة (API Layer)",
    "  * طبقة التطبيق (Application Layer)",
    "  * طبقة البنية التحتية (Infrastructure Layer)",
    "  * طبقة المجال (Domain Layer)",
    "- الفوائد والمزايا (Benefits):",
    "  * قابلية الصيانة (Maintainability)",
    "  * قابلية التوسع (Scalability)",
    "  * قابلية الاختبار (Testability)",
    "  * المرونة (Flexibility)"
  ]
};
window.TOC_AR["L6-S003"] = window.TOC_AR["L6"]["L6-S003"];

window.TOC_AR["L6"]["L6-S004"] = {
  "ar": [
    "أمثلة واقعية على واجهات برمجة التطبيقات (Real World API Examples):",
    "- واجهة الدفع الإلكتروني (Payment API):",
    "  * المتجر الإلكتروني (Online Store) -> واجهة برمجة الدفع (Payment API) -> البنك (Bank).",
    "- واجهة الخرائط (Map API):",
    "  * تطبيق التوصيل (Delivery Application) -> واجهة برمجة الخرائط (Maps API) -> خدمة تحديد المواقع (Location Service)."
  ]
};
window.TOC_AR["L6-S004"] = window.TOC_AR["L6"]["L6-S004"];

window.TOC_AR["L6"]["L6-S005"] = {
  "ar": [
    "أنواع واجهات برمجة التطبيقات (Types of APIs):",
    "- يمكن تصنيف واجهات برمجة التطبيقات بطرق مختلفة (APIs can be classified in different ways):",
    "1. بناء على الإتاحة ونطاق الوصول (Based on Availability):",
    "   * واجهات البرمجة العامة (Public APIs)",
    "   * واجهات البرمجة الخاصة / الداخلية (Private APIs / Internal APIs)",
    "   * واجهات البرمجة للشركاء (Partner APIs)",
    "2. بناء على التقنية والبروتوكول المعماري (Based on Technology):",
    "   * واجهات REST (REST API)",
    "   * واجهات SOAP (SOAP API)",
    "   * واجهات GraphQL (GraphQL API)",
    "   * واجهات gRPC (gRPC API)"
  ]
};
window.TOC_AR["L6-S005"] = window.TOC_AR["L6"]["L6-S005"];

window.TOC_AR["L6"]["L6-S006"] = {
  "ar": [
    "واجهات البرمجة العامة (Public API):",
    "- واجهة برمجة متاحة للمطورين الخارجيين (An API available for external developers).",
    "- أمثلة (Examples):",
    "  * واجهات الطقس (Weather APIs)",
    "  * واجهات الدفع الإلكتروني (Payment APIs)",
    "  * واجهات منصات التواصل الاجتماعي (Social Media APIs)",
    "- المزايا (Advantages):",
    "  * سهولة التكامل والربط (Easy integration)",
    "  * إتاحة وبناء التطوير الخارجي (Allows external development)",
    "- التحديات (Challenges):",
    "  * الأمان وحماية الموارد (Security)",
    "  * تحديد سقف ومعدل الطلبات (Rate limiting)",
    "  * إدارة مفاتيح الوصول البرمجية (API keys management)"
  ]
};
window.TOC_AR["L6-S006"] = window.TOC_AR["L6"]["L6-S006"];

window.TOC_AR["L6"]["L6-S007"] = {
  "ar": [
    "واجهات البرمجة الخاصة / الداخلية (Private/Internal API):",
    "- تُستخدم حصريا داخل المنظمة الواحدة (Used inside an organization).",
    "- مثال (Example): الأنظمة المصرفية الداخلية للبنوك (Bank internal systems):",
    "  * تطبيق الهاتف المصرفي (Mobile Banking) -> واجهة برمجة داخلية (Internal API) -> النظام المصرفي الأساسي (Core Banking System).",
    "- المزايا (Advantages):",
    "  * تحكم وسيطرة كاملة (Full control)",
    "  * أمان وموثوقية أعلى (Higher security)"
  ]
};
window.TOC_AR["L6-S007"] = window.TOC_AR["L6"]["L6-S007"];

window.TOC_AR["L6"]["L6-S008"] = {
  "ar": [
    "واجهات البرمجة للشركاء (Partner API):",
    "- واجهة برمجة تتم مشاركتها مع شركات موثوقة ومحددة فقط (API shared with trusted companies).",
    "- مثال (Example):",
    "  * البنك (Bank) -> واجهة برمجة مزود الدفع (Payment Provider API) -> الشركة الخارجية (External Company).",
    "- مجالات الاستخدام (Used for):",
    "  * التكامل بين الأعمال التجارية (Business integration)",
    "  * تبادل البيانات المعتمدة (Data exchange)"
  ]
};
window.TOC_AR["L6-S008"] = window.TOC_AR["L6"]["L6-S008"];

window.TOC_AR["L6"]["L6-S009"] = {
  "ar": [
    "واجهات REST API (Representational State Transfer):",
    "- النمط المعماري REST هو أسلوب معماري لبناء واجهات برمجة تطبيقات الويب (REST is an architectural style for building web APIs).",
    "- تعتمد REST على ما يلي (REST uses):",
    "  * بروتوكول HTTP (HTTP Protocol)",
    "  * الموارد (Resources)",
    "  * الاتصال عديم الحالة (Stateless communication)",
    "  * صيغة بيانات JSON (JSON data format)",
    "- مثال (Example):",
    "  * `GET /api/users`"
  ]
};
window.TOC_AR["L6-S009"] = window.TOC_AR["L6"]["L6-S009"];

window.TOC_AR["L6"]["L6-S010"] = {
  "ar": [
    "مبادئ نمط REST الأساسية (REST Principles):",
    "1. الاعتماد على الموارد (Resource Based):",
    "   * كل شيء في النظام هو مورد (Everything is a resource).",
    "   * أمثلة: `/users` و `/products` و `/orders`",
    "2. انعدام الحالة (Stateless):",
    "   * كل طلب يحتوي على جميع المعلومات اللازمة لمعالجته (Each request contains all information).",
    "   * مثال: طلب `GET /orders` مع ترويسة `Authorization: Bearer Token`.",
    "   * الخادم لا يتذكر الطلبات السابقة ولا يحتفظ بحالة الجلسة (Server does not remember previous requests).",
    "3. فصل العميل عن الخادم (Client-Server Separation):",
    "   * الواجهة الأمامية والواجهة الخلفية مستقلتان تماما (Frontend and backend are independent).",
    "   * المخطط: العميل في React -> واجهة برمجة REST API -> الواجهة الخلفية في NET Backend."
  ]
};
window.TOC_AR["L6-S010"] = window.TOC_AR["L6"]["L6-S010"];

window.TOC_AR["L6"]["L6-S011"] = {
  "ar": [
    "واجهات SOAP API (Simple Object Access Protocol):",
    "- بروتوكول SOAP هو بروتوكول اتصال أقدم لواجهات البرمجة (SOAP is an older API protocol).",
    "- الخصائص والميزات (Characteristics):",
    "  * معتمد على لغة XML كصيغة للبيانات (XML based).",
    "  * معايير بروتوكولية صارمة ومحددة (Strict standards).",
    "  * معايير أمان مدمجة في صلب البروتوكول (Built-in security standards).",
    "- مثال على البيانات (Example):",
    "  * `<Customer><Name>Ali</Name></Customer>`",
    "- مجالات الاستخدام (Used in):",
    "  * البنوك والقطاع المصرفي (Banking)",
    "  * القطاعات والأنظمة الحكومية (Government)",
    "  * الأنظمة المؤسسية الضخمة (Enterprise systems)"
  ]
};
window.TOC_AR["L6-S011"] = window.TOC_AR["L6"]["L6-S011"];

window.TOC_AR["L6"]["L6-S012"] = {
  "ar": [
    "مقارنة بين REST و SOAP (REST vs SOAP):",
    "- جدول المقارنة التفصيلي:",
    "  * صيغة البيانات (Data Format): في REST تكون JSON، بينما في SOAP تكون XML.",
    "  * الأداء والسرعة (Performance): في REST سريع (Fast)، بينما في SOAP أبطأ (Slower).",
    "  * مستوى التعقيد (Complexity): في REST بسيط (Simple)، بينما في SOAP معقد (Complex).",
    "  * المرونة (Flexibility): في REST عالية (High)، بينما في SOAP منخفضة (Low).",
    "  * الأمان (Security): في REST على مستوى التطبيق (Application level)، بينما في SOAP معايير مدمجة (Built-in standards).",
    "  * مجالات الاستخدام (Usage): في REST للتطبيقات الحديثة (Modern Apps)، بينما في SOAP للأنظمة المؤسسية (Enterprise)."
  ]
};
window.TOC_AR["L6-S012"] = window.TOC_AR["L6"]["L6-S012"];

window.TOC_AR["L6"]["L6-S013"] = {
  "ar": [
    "واجهات GraphQL API:",
    "- تتيح GraphQL للعميل طلب واسترجاع البيانات المطلوبة بدقة تامة فقط (GraphQL allows clients to request exactly the required data).",
    "- المقارنة التطبيقية بين GraphQL و REST:",
    "  * في GraphQL:",
    "    - الطلب (Request):",
    "      `{ user { name } }`",
    "    - الاستجابة (Response):",
    "      `{ \"name\": \"Ahmed\" }`",
    "  * في REST:",
    "    - الطلب (Request): `GET /users/1`",
    "    - الاستجابة (Response):",
    "      `{ \"name\": \"Ahmed\", \"email\": \"test@test.com\", \"address\": \"Yemen\" }`",
    "  * الملاحظة: قد يكون العميل بحاجة إلى الاسم فقط (Maybe the client needs only the name)."
  ]
};
window.TOC_AR["L6-S013"] = window.TOC_AR["L6"]["L6-S013"];

window.TOC_AR["L6"]["L6-S014"] = {
  "ar": [
    "مقارنة بين REST و GraphQL (REST vs GraphQL):",
    "- جدول المقارنة التفصيلي:",
    "  * جلب البيانات (Data fetching): في REST عبر نقاط نهاية ثابتة (Fixed endpoints)، بينما في GraphQL عبر استعلامات مرنة (Flexible queries).",
    "  * الإفراط في جلب البيانات (Over fetching): في REST وارد ومحتمل (Possible)، بينما في GraphQL منخفض ومحدود (Reduced).",
    "  * منحنى التعلم (Learning): في REST سهل (Easy)، بينما في GraphQL أكثر تعقيدا (More complex).",
    "  * التخزين المؤقت (Caching): في REST سهل (Easy)، بينما في GraphQL أكثر تعقيدا (More complex).",
    "  * الانتشار والاستخدام (Usage): في REST الأكثر شيوعا (Most common)، بينما في GraphQL للتطبيقات الحديثة (Modern applications)."
  ]
};
window.TOC_AR["L6-S014"] = window.TOC_AR["L6"]["L6-S014"];

window.TOC_AR["L6"]["L6-S015"] = {
  "ar": [
    "واجهات gRPC API (Google Remote Procedure Call):",
    "- تقنية gRPC هي إطار عمل حديث لبناء واجهات برمجة عالية الأداء تتيح لخدمة استدعاء دوال في خدمة أخرى كما لو كانت دوال محلية (allows one service to call methods on another service as if they were local functions).",
    "- بدلا من إرسال طلبات HTTP التقليدية بنصوص JSON كما في واجهات REST، تعتمد gRPC على:",
    "  * بروتوكول HTTP/2 كبروتوكول للاتصال (HTTP/2 as the communication protocol).",
    "  * مخازن البروتوكول Protocol Buffers (Protobuf) كصيغة للبيانات (Protocol Buffers (Protobuf) as the data format).",
    "  * التسلسل الثنائي لتحقيق اتصال فائق السرعة (Binary serialization for faster communication).",
    "- تم تطوير gRPC في الأصل بواسطة شركة Google وهي الآن مشروع مفتوح المصدر يُستخدم على نطاق واسع في الاتصال بين الأنظمة الموزعة (distributed systems)."
  ]
};
window.TOC_AR["L6-S015"] = window.TOC_AR["L6"]["L6-S015"];

window.TOC_AR["L6"]["L6-S016"] = {
  "ar": [
    "المقارنة البرمجية والمعمارية بين REST و gRPC:",
    "- في واجهات REST: يرسل العميل طلبات HTTP ويستقبل استجابات JSON:",
    "  * مثال: طلب `GET /api/users/10`",
    "  * الاستجابة: `{ \"id\": 10, \"name\": \"Ahmed\" }`",
    "- في واجهات gRPC: يستدعي العميل دالة عن بعد مباشرة:",
    "  * كود الاستدعاء:",
    "    `var user = client.GetUser(new UserRequest { Id = 10 });`",
    "- يعتمد الاتصال على عقد محدد مسبقا باستخدام ملف .proto (The communication is based on a predefined contract using a .proto file).",
    "- المعمارية المعروضة (Architecture):",
    "  * العميل (Client)",
    "  * بروتوكول النقل (HTTP/2)",
    "  * خدمة gRPC على الخادم (gRPC Service)",
    "  * رسائل ثنائية مشفرة بـ Protobuf (Protobuf Binary Messages)"
  ]
};
window.TOC_AR["L6-S016"] = window.TOC_AR["L6"]["L6-S016"];

window.TOC_AR["L6"]["L6-S017"] = {
  "ar": [
    "مثال عملي على ملف تعريف Protobuf (Protobuf example):",
    "- كود ملف العقد البرمجي:",
    "  syntax = \"proto3\";",
    "  package banking;",
    "  service AccountService {",
    "      rpc GetAccount(AccountRequest) returns(AccountResponse);",
    "      rpc TransferMoney(TransferRequest) returns(TransactionResponse);",
    "  }",
    "  message AccountRequest {",
    "      string accountNumber = 1;",
    "  }",
    "  message AccountResponse {",
    "      string accountNumber = 1;",
    "      string customerName = 2;",
    "      double balance = 3;",
    "  }",
    "  ......",
    "- التوضيح: تعريف خدمة الحسابات البنكية ودوالها ورسائل الطلب والاستجابة مع ترقيم الحقول الثنائية (Field Tags)."
  ]
};
window.TOC_AR["L6-S017"] = window.TOC_AR["L6"]["L6-S017"];

window.TOC_AR["L6"]["L6-S018"] = {
  "ar": [
    "مسار تدفق الطلبات: REST مقابل gRPC:",
    "- في واجهات REST (REST API):",
    "  * المتحكم (Controller)",
    "  * كائن نقل البيانات النصي (JSON DTO)",
    "  * طبقة الخدمة (Service)",
    "- في واجهات gRPC (gRPC):",
    "  * عقد ملف البروتوكول (.proto Contract)",
    "  * الأصناف المولدة آليا (Generated Classes)",
    "  * خدمة gRPC على الخادم (gRPC Service)",
    "  * خدمة التطبيق (Application Service)"
  ]
};
window.TOC_AR["L6-S018"] = window.TOC_AR["L6"]["L6-S018"];

window.TOC_AR["L6"]["L6-S019"] = {
  "ar": [
    "أفعال وطرق بروتوكول HTTP (HTTP Methods):",
    "- اتصال واجهات برمجة التطبيقات يستخدم أفعال HTTP (API communication uses HTTP methods).",
    "- جدول الأفعال والغرض منها وأمثلتها:",
    "  * فعل GET: استرجاع البيانات (Retrieve data) — مثال بسيط: جلب مستخدم (Get a user).",
    "  * فعل POST: إنشاء بيانات جديدة (Create new data) — مثال بسيط: إنشاء مستخدم جديد (Create a new user).",
    "  * فعل PUT: تحديث واستبدال كامل المورد (Update an entire resource) — مثال بسيط: استبدال جميع معلومات المستخدم (Replace all user information).",
    "  * فعل PATCH: تحديث وتعديل جزء من المورد (Update part of a resource) — مثال بسيط: تحديث البريد الإلكتروني للمستخدم فقط (Update only the user's email).",
    "  * فعل DELETE: حذف البيانات (Delete data) — مثال بسيط: حذف مستخدم (Delete a user)."
  ]
};
window.TOC_AR["L6-S019"] = window.TOC_AR["L6"]["L6-S019"];

window.TOC_AR["L6"]["L6-S020"] = {
  "ar": [
    "1. فعل الاسترجاع GET:",
    "- الغرض (Purpose): استرجاع وجلب البيانات من الخادم (Retrieve data from the server).",
    "- مثال عملي (Example):",
    "  * الطلب (Request): `GET /api/users/1`",
    "  * الاستجابة (Response):",
    "    `{ \"id\": 1, \"name\": \"Ahmed\", \"email\": \"ahmed@test.com\" }`",
    "- حالة الاستخدام (Example): عرض الملف الشخصي للمستخدم (Display a user's profile)."
  ]
};
window.TOC_AR["L6-S020"] = window.TOC_AR["L6"]["L6-S020"];

window.TOC_AR["L6"]["L6-S021"] = {
  "ar": [
    "2. فعل الإنشاء POST:",
    "- الغرض (Purpose): إنشاء مورد جديد (Create a new resource).",
    "- مثال عملي (Example):",
    "  * الطلب (Request): `POST /api/users`",
    "  * جسم الطلب (Body):",
    "    `{ \"name\": \"Ahmed\", \"email\": \"ahmed@test.com\" }`",
    "  * الاستجابة (Response):",
    "    `{ \"id\": 5, \"name\": \"Ahmed\", \"email\": \"ahmed@test.com\" }`",
    "- حالة الاستخدام (Example): تسجيل مستخدم جديد (Register a new user)."
  ]
};
window.TOC_AR["L6-S021"] = window.TOC_AR["L6"]["L6-S021"];

window.TOC_AR["L6"]["L6-S022"] = {
  "ar": [
    "3. فعل الاستبدال الكامل PUT:",
    "- الغرض (Purpose): استبدال مورد قائم بالكامل ببيانات جديدة (Replace an existing resource with new data).",
    "- مثال عملي (Example):",
    "  * بيانات المستخدم الحالية (Current user):",
    "    `{ \"name\": \"Ahmed\", \"email\": \"old@test.com\" }`",
    "  * الطلب (Request): `PUT /api/users/1`",
    "  * جسم الطلب (Body):",
    "    `{ \"name\": \"Ahmed Ali\", \"email\": \"new@test.com\" }`",
    "  * النتيجة (Result):",
    "    `{ \"name\": \"Ahmed Ali\", \"email\": \"new@test.com\" }`",
    "- حالة الاستخدام (Example): تعديل وتحديث كامل معلومات المستخدم (Edit all user information)."
  ]
};
window.TOC_AR["L6-S022"] = window.TOC_AR["L6"]["L6-S022"];

window.TOC_AR["L6"]["L6-S023"] = {
  "ar": [
    "4. فعل التعديل الجزئي PATCH:",
    "- الغرض (Purpose): تحديث وتعديل حقول محددة فقط (Update only specific fields).",
    "- مثال عملي (Example):",
    "  * بيانات المستخدم الحالية (Current user):",
    "    `{ \"name\": \"Ahmed\", \"email\": \"old@test.com\" }`",
    "  * الطلب (Request): `PATCH /api/users/1`",
    "  * جسم الطلب (Body):",
    "    `{ \"email\": \"new@test.com\" }`",
    "  * النتيجة (Result):",
    "    `{ \"name\": \"Ahmed\", \"email\": \"new@test.com\" }`",
    "- حالة الاستخدام (Example): تغيير البريد الإلكتروني للمستخدم فقط (Change only the user's email)."
  ]
};
window.TOC_AR["L6-S023"] = window.TOC_AR["L6"]["L6-S023"];

window.TOC_AR["L6"]["L6-S024"] = {
  "ar": [
    "5. فعل الحذف DELETE:",
    "- الغرض (Purpose): إزالة وحذف مورد (Remove a resource).",
    "- مثال عملي (Example):",
    "  * الطلب (Request): `DELETE /api/users/1`",
    "  * الاستجابة (Response): `204 No Content`",
    "- حالة الاستخدام (Example): حذف حساب مستخدم (Delete a user account)."
  ]
};
window.TOC_AR["L6-S024"] = window.TOC_AR["L6"]["L6-S024"];

window.TOC_AR["L6"]["L6-S025"] = {
  "ar": [
    "فئات رموز حالة بروتوكول HTTP (HTTP Status Code Categories):",
    "- جدول الفئات الرقمية المئوية:",
    "  * الفئة 1xx: إعلامية (Informational) — الوصف: تم استلام الطلب، ومعالجة الطلب مستمرة (Request received, processing continues).",
    "  * الفئة 2xx: نجاح (Success) — الوصف: تمت معالجة الطلب بنجاح تام (The request was successfully processed).",
    "  * الفئة 3xx: إعادة توجيه (Redirection) — الوصف: يلزم اتخاذ إجراء إضافي لإكمال الطلب (Additional action is required to complete the request).",
    "  * الفئة 4xx: خطأ من جانب العميل (Client Error) — الوصف: أرسل العميل طلبا غير صالح (The client sent an invalid request).",
    "  * الفئة 5xx: خطأ من جانب الخادم (Server Error) — الوصف: فشل الخادم أثناء معالجة طلب صالح (The server failed while processing a valid request)."
  ]
};
window.TOC_AR["L6-S025"] = window.TOC_AR["L6"]["L6-S025"];

window.TOC_AR["L6"]["L6-S026"] = {
  "ar": [
    "أهم رموز الحالة الشائعة التي يجب على كل مطور معرفتها (Common Status Codes Every Developer Should Know):",
    "- جدول رموز الحالة وحالات استخدامها:",
    "  * 200 OK: استرجاع البيانات بنجاح (Data retrieved successfully).",
    "  * 201 Created: تم إنشاء مورد جديد بنجاح (New resource created).",
    "  * 204 No Content: نجاح عملية الحذف بدون محتوى (Delete successful).",
    "  * 400 Bad Request: طلب غير صالح أو غير صحيح (Invalid request).",
    "  * 401 Unauthorized: المستخدم غير مصادق عليه / لم يسجل دخوله (User not authenticated).",
    "  * 403 Forbidden: المستخدم مصادق عليه ولكنه غير مسموح له بالوصول (User authenticated but not allowed).",
    "  * 404 Not Found: المورد المطلوب غير موجود (Resource doesn't exist).",
    "  * 409 Conflict: تعارض أو تكرار في البيانات (Duplicate/conflicting data).",
    "  * 500 Internal Server Error: فشل غير متوقع في جانب الخادم (Unexpected server-side failure).",
    "  * 503 Service Unavailable: الخادم غير متاح ومؤقتا خارج الخدمة (Server temporarily unavailable)."
  ]
};
window.TOC_AR["L6-S026"] = window.TOC_AR["L6"]["L6-S026"];

window.TOC_AR["L6"]["L6-S027"] = {
  "ar": [
    "معالجة الأخطاء في واجهات البرمجة (API Error Handling):",
    "- يجب على واجهة البرمجة الجيدة إرجاع أخطاء قياسية موحدة (Good API should return standard errors).",
    "- الممارسة السيئة (Bad):",
    "  `{ \"error\": \"SQL Exception\" }`",
    "  * المشكلة (Problem): تكشف التفاصيل الداخلية للنظام (Exposes internal details).",
    "- الممارسة الأفضل (Better):",
    "  `{`",
    "    `\"status\": 400,`",
    "    `\"message\": \"Invalid request\",`",
    "    `\"errors\": [ \"Email is required\" ]`",
    "  `}`"
  ]
};
window.TOC_AR["L6-S027"] = window.TOC_AR["L6"]["L6-S027"];

window.TOC_AR["L6"]["L6-S028"] = {
  "ar": [
    "التهديدات الأمنية الشائعة لواجهات البرمجة (Common API Security Threats):",
    "1. مشاكل المصادقة (Authentication Problems):",
    "   * مثال (Example): كلمات المرور الضعيفة (Weak passwords).",
    "   * سبل الحماية والوقاية (Protection):",
    "     - استخدام رموز JWT",
    "     - استخدام إطار عمل OAuth",
    "     - تفعيل التحقق متعدد العوامل (MFA)",
    "2. مشاكل التفويض والصلاحيات (Authorization Problems):",
    "   * مثال (Example): مستخدم عادي يصل إلى واجهات مخصصة للمدير (User accessing Admin APIs).",
    "   * سبل الحماية والوقاية (Protection):",
    "     - استخدام نظام الأدوار (Roles)",
    "     - تطبيق السياسات الأمنية (Policies)"
  ]
};
window.TOC_AR["L6-S028"] = window.TOC_AR["L6"]["L6-S028"];

window.TOC_AR["L6"]["L6-S029"] = {
  "ar": [
    "التهديدات الأمنية الشائعة لواجهات البرمجة (Common API Security Threats):",
    "3. هجمات الحقن (Injection Attacks):",
    "   * مثال (Example): حقن استعلامات إس كيو إل (SQL Injection).",
    "   * سبل الحماية والوقاية (Protection):",
    "     - الاستعلامات ذات المعاملات الوسيطة (Parameterized queries)",
    "     - استخدام محركات تخطيط الكائنات العلائقية (ORM - Object-Relational Mapping)",
    "4. كشف البيانات الحساسة (Data Exposure):",
    "   * مثال (Example): إعادة كلمات المرور في الاستجابة (Returning passwords).",
    "   * سبل الحماية والوقاية (Protection):",
    "     - استخدام كائنات نقل البيانات (DTO)",
    "     - تصفية وفلترة البيانات (Data filtering)"
  ]
};
window.TOC_AR["L6-S029"] = window.TOC_AR["L6"]["L6-S029"];

window.TOC_AR["L6"]["L6-S030"] = {
  "ar": [
    "المقارنة بين المصادقة والتفويض (Authentication vs Authorization):",
    "- المصادقة (Authentication):",
    "  * السؤال الجوهري: من أنت؟ (Who are you?)",
    "  * أمثلة (Examples):",
    "    - اسم المستخدم وكلمة المرور (Username/password)",
    "    - بصمة الإصبع (Fingerprint)",
    "    - رمز الويب (JWT)",
    "- التفويض (Authorization):",
    "  * السؤال الجوهري: ماذا يمكنك أن تفعل؟ وما هي صلاحياتك؟ (What can you do?)",
    "  * أمثلة (Example):",
    "    - المدير (Admin): إنشاء مستخدم جديد (Create User).",
    "    - المستخدم العادي (User): عرض الملف الشخصي فقط (View Profile)."
  ]
};
window.TOC_AR["L6-S030"] = window.TOC_AR["L6"]["L6-S030"];

window.TOC_AR["L6"]["L6-S031"] = {
  "ar": [
    "المصادقة باسم المستخدم وكلمة المرور (Username and Password Authentication):",
    "- النهج التقليدي (Traditional approach):",
    "  * المستخدم (User) يرسل اسم المستخدم وكلمة المرور (Username / Password) -> خادم المصادقة (Authentication Server) -> منح حق الوصول (Access Granted).",
    "- المشاكل والمخاطر (Problems):",
    "  * سرقة كلمات المرور (Password theft)",
    "  * هجمات القوة الغاشمة والتخمين (Brute force attacks)",
    "- الحلول المقترحة (Solutions):",
    "  * تجزئة كلمات المرور (Hashing)",
    "  * إضافة الملح التشفيري (Salt)",
    "  * المصادقة متعددة العوامل (MFA - Multi-Factor Authentication)"
  ]
};
window.TOC_AR["L6-S031"] = window.TOC_AR["L6"]["L6-S031"];

window.TOC_AR["L6"]["L6-S032"] = {
  "ar": [
    "تجزئة كلمات المرور (Password Hashing):",
    "- تحذير صارم: لا تقم أبدا بتخزين كلمة المرور بصيغة نص صريح (Never store: Password123).",
    "- الممارسة الصحيحة: قم بتخزين القيمة المجزأة فقط (Store: 8f2a8b91c....).",
    "- مسار العملية (Process):",
    "  * كلمة المرور الأصلية (Password) -> خوارزمية التجزئة (Hash Algorithm) -> القيمة المجزأة المخزنة (Stored Hash)."
  ]
};
window.TOC_AR["L6-S032"] = window.TOC_AR["L6"]["L6-S032"];

window.TOC_AR["L6"]["L6-S033"] = {
  "ar": [
    "المصادقة بواسطة رموز الويب القياسية (JWT Authentication):",
    "- التعريف: الاختصار JWT يعني رمز ويب بصيغة جيسون (JWT = JSON Web Token).",
    "- مسار وتدفق العمل (Flow):",
    "  * تسجيل الدخول (Login)",
    "  * التحقق من المستخدم (Validate User)",
    "  * توليد رمز الـ JWT على الخادم (Generate JWT)",
    "  * العميل يقوم بتخزين الرمز محليا (Client stores Token)",
    "  * إرسال الرمز مع كل طلب لاحق (Send Token with Requests)",
    "- مثال على الترويسة الأمنية (Example):",
    "  * `Authorization: Bearer eyJhbGc...`"
  ]
};
window.TOC_AR["L6-S033"] = window.TOC_AR["L6"]["L6-S033"];

window.TOC_AR["L6"]["L6-S034"] = {
  "ar": [
    "إطار عمل التفويض المفتوح (OAuth 2.0):",
    "- إطار OAuth هو إطار عمل مخصص للتفويض (OAuth is an authorization framework).",
    "- مثال (Example): تسجيل الدخول باستخدام حساب جوجل (Login with Google).",
    "- تدفق العمل (Flow):",
    "  * التطبيق (Application) -> مزود الهوية كـ جوجل (Google) -> رمز الوصول (Access Token) -> واجهة برمجة التطبيقات (API).",
    "- مجالات الاستخدام (Used for):",
    "  * وصول تطبيقات الطرف الثالث (Third-party access)",
    "  * تسجيل الدخول عبر الشبكات الاجتماعية (Social login)"
  ]
};
window.TOC_AR["L6-S034"] = window.TOC_AR["L6"]["L6-S034"];

window.TOC_AR["L6"]["L6-S035"] = {
  "ar": [
    "مقارنة بين تسجيل الدخول التقليدي وإطار OAuth (Traditional Login vs OAuth):",
    "- جدول المقارنة التفصيلي:",
    "  * مشاركة كلمة المرور: في التقليدي تتم مشاركة كلمة المرور مع كل تطبيق (Share your password with every application)، بينما في OAuth تبقى كلمة المرور حصرا لدى مزود الهوية مثل جوجل (Password stays with the identity provider).",
    "  * مستوى المخاطر الأمنية: في التقليدي مخاطر أمنية أعلى (Higher security risk)، بينما في OAuth أكثر أمانا (More secure).",
    "  * إدارة الصلاحيات: في التقليدي يصعب إدارة وتحديد الصلاحيات (Difficult to manage permissions)، بينما في OAuth تتوفر صلاحيات دقيقة ومفصلة عبر الـ Scopes (Fine-grained permissions).",
    "  * تخزين كلمات المرور: في التقليدي قد تُخزن كلمة المرور لدى تطبيقات متعددة (Password may be stored by multiple apps)، بينما في OAuth تستلم التطبيقات رموزا بدلا من كلمات المرور (Apps receive tokens instead of passwords)."
  ]
};
window.TOC_AR["L6-S035"] = window.TOC_AR["L6"]["L6-S035"];

window.TOC_AR["L6"]["L6-S036"] = {
  "ar": [
    "أفضل الممارسات الأمنية لحماية واجهات البرمجة (API Security Best Practices):",
    "1. فرض بروتوكول الاتصال المشفر HTTPS: لتشفير حركة البيانات وحمايتها من التنصت (Encrypt communication).",
    "2. المصادقة والتحقق من الهوية (Authentication): باستخدام تقنيات JWT أو OAuth.",
    "3. التفويض وإدارة الصلاحيات (Authorization): عبر تطبيق الأدوار والسياسات (Roles and policies).",
    "4. التحقق من صحة المدخلات (Input Validation): لفحص وتدقيق كافة المدخلات القادمة من العميل.",
    "5. تحديد معدل وسقف الطلبات (Rate Limiting): لحماية الخادم، مثال: السماح بـ 100 طلب في الدقيقة (100 requests/minute).",
    "6. تسجيل السجلات والمراقبة المستمرة (Logging and Monitoring): لتتبع الأنشطة واكتشاف الأخطاء والهجمات."
  ]
};
window.TOC_AR["L6-S036"] = window.TOC_AR["L6"]["L6-S036"];

window.TOC_AR["L6"]["L6-S037"] = {
  "ar": [
    "إدارة إصدارات واجهات البرمجة (API Versioning):",
    "- تتغير واجهات البرمجة وتتطور مع مرور الوقت (APIs change over time).",
    "- مثال على الإصدارات (Example):",
    "  * الإصدار الأول: `/api/v1/users`",
    "  * الإصدار الثاني: `/api/v2/users`",
    "- الفوائد والمزايا (Benefits):",
    "  * التوافقية العكسية مع التطبيقات القديمة (Backward compatibility).",
    "  * التحديثات الآمنة دون تعطيل الأنظمة القائمة (Safe updates)."
  ]
};
window.TOC_AR["L6-S037"] = window.TOC_AR["L6"]["L6-S037"];

window.TOC_AR["L6"]["L6-S038"] = {
  "ar": [
    "توثيق واجهات برمجة التطبيقات (API Documentation):",
    "- واجهة البرمجة هي عقد محدد وملزم (API is a contract).",
    "- الأدوات المستخدمة (Tools):",
    "  * أدوات Swagger ومواصفة OpenAPI (Swagger / OpenAPI).",
    "- ما يوفره التوثيق للمطورين (Provides):",
    "  * نقاط النهاية ومسارات الخدمة (Endpoints).",
    "  * المعاملات والمدخلات المطلوبة (Parameters).",
    "  * أمثلة توضيحية على الطلب والاستجابة (Examples).",
    "  * إمكانية التجربة والاختبار المباشر (Testing)."
  ]
};
window.TOC_AR["L6-S038"] = window.TOC_AR["L6"]["L6-S038"];

window.TOC_AR["L6"]["L6-S039"] = {
  "ar": [
    "اختبار واجهات برمجة التطبيقات (API Testing):",
    "- الأدوات المستخدمة (Tools):",
    "  * أداة بوستمان (Postman).",
    "- استخدامات أداة Postman (Used for):",
    "  * اختبار الطلبات والاستجابات (Testing requests).",
    "  * الأتمتة البرمجية للاختبارات (Automation).",
    "- أنواع الاختبارات (Testing Types):",
    "  * اختبارات الوحدة (Unit Testing): لاختبار المنطق البرمجي الداخلي (Test logic).",
    "  * اختبارات التكامل (Integration Testing): لاختبار واجهة البرمجة بشكل كامل ومتكامل (Test complete API)."
  ]
};
window.TOC_AR["L6-S039"] = window.TOC_AR["L6"]["L6-S039"];

window.TOC_AR["L6"]["L6-S040"] = {
  "ar": [
    "مثال عملي مبسط على مصادقة واجهة البرمجة عبر JWT (Simple API Authentication Example):",
    "- السيناريو المفترض (Scenario):",
    "  * لدينا واجهة برمجة لإدارة الطلاب (We have a Student Management API).",
    "  * يُتاح لأي شخص تسجيل الدخول (Anyone can log in).",
    "  * يُسمح فقط للمستخدمين المصادق عليهم بإضافة طالب جديد (Only authenticated users can add a student).",
    "- الخطوة 1: تسجيل دخول المستخدم (Step 1: User Login):",
    "  * يرسل العميل اسم المستخدم وكلمة المرور (The client sends a username and password).",
    "  * الطلب (Request): `POST /api/auth/login`",
    "  * جسم الطلب (Body):",
    "    `{ \"username\": \"admin\", \"password\": \"123456\" }`"
  ]
};
window.TOC_AR["L6-S040"] = window.TOC_AR["L6"]["L6-S040"];

window.TOC_AR["L6"]["L6-S041"] = {
  "ar": [
    "الخطوة 2: الخادم يصادق على هوية المستخدم (Step 2: Server Authenticates the User):",
    "- يقوم الخادم بالإجراءات التالية (The server):",
    "  * فحص اسم المستخدم (Checks the username).",
    "  * التحقق من صحة كلمة المرور (Verifies the password).",
    "  * توليد رمز JWT إذا كانت بيانات الاعتماد صالحة (Generates a JWT token if the credentials are valid).",
    "- الخطوة 3: استجابة الخادم (Step 3: Server Response):",
    "  * نص الاستجابة:",
    "    `{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\" }`",
    "  * يقوم العميل بتخزين هذا الرمز لديه محليا (The client stores this token)."
  ]
};
window.TOC_AR["L6-S041"] = window.TOC_AR["L6"]["L6-S041"];

window.TOC_AR["L6"]["L6-S042"] = {
  "ar": [
    "الخطوة 4: الوصول إلى واجهة برمجة محمية (Step 4: Access a Protected API):",
    "- يريد العميل الآن إضافة طالب جديد (The client wants to add a new student).",
    "- الطلب المرسل (Request):",
    "  * المسار: `POST /api/students`",
    "  * الترويسة الأمنية (Header):",
    "    `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`",
    "  * جسم الطلب (Body):",
    "    `{ \"name\": \"Ahmed\", \"age\": 22 }`"
  ]
};
window.TOC_AR["L6-S042"] = window.TOC_AR["L6"]["L6-S042"];

window.TOC_AR["L6"]["L6-S043"] = {
  "ar": [
    "الخطوة 5: الخادم يتحقق من صحة الرمز (Step 5: Server Verifies the Token):",
    "- يقوم الخادم بفحص النقاط التالية (The server checks):",
    "  * هل الرمز موجود في الطلب؟ (Is the token present?)",
    "  * هل الرمز صالح وسليم؟ (Is the token valid?)",
    "  * هل انتهت صلاحية الرمز؟ (Has the token expired?)",
    "  * هل يمتلك المستخدم الصلاحية المطلوبة؟ (Does the user have permission?)",
    "- إذا كانت جميع الشروط صالحة ومستوفاة (If everything is valid):",
    "  * رمز الاستجابة: `201 Created`",
    "  * نص الاستجابة:",
    "    `{ \"message\": \"Student created successfully.\" }`"
  ]
};
window.TOC_AR["L6-S043"] = window.TOC_AR["L6"]["L6-S043"];

