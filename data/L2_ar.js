/* الترجمة العربية لسلايدات الوحدة 2: الكود النظيف وأنماط التصميم الإنشائية
   المدرس: د. بيداء لعلع — 30 شريحة كاملة (L2-S001 إلى L2-S030)
   معيار: 100% SVG line-art · صفر إيموجيات
*/
window.TOC_AR = window.TOC_AR || {};
window.TOC_AR["L2"] = window.TOC_AR["L2"] || {};

window.TOC_AR["L2"]["L2-S001"] = { ar: [
  "البرمجة المتقدمة (Advanced Programming)",
  "المحاضرة الثانية (Lecture 2)",
  "الكود النظيف وأنماط التصميم الإنشائية (Clean Code & Creational Design Patterns)",
  "المدرس: د. بيداء لعلع"
] };
window.TOC_AR["L2-S001"] = window.TOC_AR["L2"]["L2-S001"];

window.TOC_AR["L2"]["L2-S002"] = { ar: [
  "أهداف التعلم للمحاضرة الثانية (Learning Objectives)",
  "- التعرف على المشاكل الشائعة الناتجة عن التصميم البرمجي الرديء.",
  "- فهم فلسفة ومفهوم الكود النظيف (Clean Code) وأهميته لاستدامة المشاريع.",
  "- دراسة سيناريوهات واقعية لتطور البرمجيات وتآكلها.",
  "- استيعاب مفهوم أنماط التصميم (Design Patterns) وتصنيفاتها الثلاثة.",
  "- إتقان نمط السينغلتون (Singleton Pattern) ونمط المصنع (Factory Pattern) فهماً وتطبيقاً برمجياً."
] };
window.TOC_AR["L2-S002"] = window.TOC_AR["L2"]["L2-S002"];

window.TOC_AR["L2"]["L2-S003"] = { ar: [
  "مشاكل التصميم البرمجي الرديء (Common Problems in Poor Software Design)",
  "- الصلابة (Rigidity): صعوبة إجراء أي تغيير لأن التعديل البسيط يجر سلسلة تعديلات متتالية في أصناف أخرى.",
  "- الهشاشة (Fragility): كسر أجزاء غير متوقعة من النظام في أماكن لا علاقة لها بالكود المعدل.",
  "- عدم القابلية للنقل (Immobility): صعوبة إعادة استخدام أجزاء من الكود في مشاريع أخرى لارتباطها الشديد ببيئتها الحالية.",
  "- اللزوجة (Viscosity): سهولة عمل ترقيعات برمجية خاطئة وسريعة مقابل صعوبة اتباع الأسلوب المعماري السليم."
] };
window.TOC_AR["L2-S003"] = window.TOC_AR["L2"]["L2-S003"];

window.TOC_AR["L2"]["L2-S004"] = { ar: [
  "فلسفة الكود النظيف (Clean Software Philosophy)",
  "- البرمجيات الجيدة لا تقتصر على جعل الكود يعمل فقط؛ بل تتعلق بكيفية تصميمه وسهولة صيانته.",
  "- مقولة معمارية شهيرة: أي أحمق يمكنه كتابة كود يفهمه الحاسوب، لكن المبرمجين الجيدين يكتبون كوداً يفهمه البشر.",
  "- الكود النظيف سهل القراءة، واضح النوايا، يمر بجميع الاختبارات، ويحتوي على أقل قدر ممكن من التكرار (DRY: Don't Repeat Yourself)."
] };
window.TOC_AR["L2-S004"] = window.TOC_AR["L2"]["L2-S004"];

window.TOC_AR["L2"]["L2-S005"] = { ar: [
  "سيناريو واقعي: تآكل البرمجيات (Real Scenario: Software Rot)",
  "- يبدأ المشروع بكود صغير وأنيق في مرحلته الأولى.",
  "- مع توالي طلبات التغيير المستعجلة والترقيعات السريعة دون إعادة هيكلة (Refactoring)، يتراكم الدين الفني (Technical Debt).",
  "- بمرور الوقت، يصبح الفريق خائفاً من لمس الكود القديم خشية انهيار النظام بأكمله.",
  "- في النهاية، تصبح تكلفة الصيانة أعلى من تكلفة إعادة بناء النظام من الصفر!"
] };
window.TOC_AR["L2-S005"] = window.TOC_AR["L2"]["L2-S005"];

window.TOC_AR["L2"]["L2-S006"] = { ar: [
  "تطور البرمجيات (Software Evolution)",
  "- التغيير هو الحقيقة الثابتة الوحيدة في عالم البرمجيات (Change is Inevitable).",
  "- تتغير متطلبات العملاء، بيئات التشغيل، قوانين الأعمال، وتكنولوجيا العتاد باستمرار.",
  "- التصميم البرمجي الناجح هو الذي يتوقع التغيير ويحتويه بمرونة عبر التجريد وفصل المسؤوليات."
] };
window.TOC_AR["L2-S006"] = window.TOC_AR["L2"]["L2-S006"];

window.TOC_AR["L2"]["L2-S007"] = { ar: [
  "مدخل إلى أنماط التصميم (Introduction to Design Patterns)",
  "- نمط التصميم هو حل قياسي ومجرب وقابل لإعادة الاستخدام لمشكلة متكررة شائعة في تصميم البرمجيات.",
  "- ليس قطعة كود جاهزة للنسخ واللصق، بل هو قالب أو مخطط مفاهيمي يوضح كيفية حل المشكلة في سياقات برمجية مختلفة.",
  "- يمثل خلاصة تجارب وحكمة أفضل مهندسي البرمجيات عبر عقود من الممارسة العملية."
] };
window.TOC_AR["L2-S007"] = window.TOC_AR["L2"]["L2-S007"];

window.TOC_AR["L2"]["L2-S008"] = { ar: [
  "تاريخ أنماط التصميم وكتاب عصابة الأربعة (History of Design Patterns: GoF)",
  "- نشأت الفكرة في الأصل في العمارة والبناء المدني بواسطة المهندس المعماري كريستوفر ألكسندر.",
  "- تم تبني الفكرة في هندسة البرمجيات في عام 1994 عند نشر الكتاب التاريخي:",
  "  * Design Patterns: Elements of Reusable Object-Oriented Software.",
  "- مؤلفو الكتاب الأربعة يُعرفون تاريخياً باسم عصابة الأربعة (Gang of Four - GoF):",
  "  * إريك غاما (Erich Gamma)",
  "  * ريتشارد هيلم (Richard Helm)",
  "  * رالف جونسون (Ralph Johnson)",
  "  * جون فليسيدس (John Vlissides)",
  "- وثق الكتاب 23 نمطاً كلاسيكياً أصبحت المعيار العالمي لتصميم البرمجيات الكائنية."
] };
window.TOC_AR["L2-S008"] = window.TOC_AR["L2"]["L2-S008"];

window.TOC_AR["L2"]["L2-S009"] = { ar: [
  "تصنيفات أنماط التصميم الثلاثة (Categories of Design Patterns)",
  "1. الأنماط الإنشائية (Creational Patterns): تختص بآليات إنشاء الكائنات وتجريد عملية التجسيد في الذاكرة.",
  "2. الأنماط الهيكلية (Structural Patterns): تختص بكيفية تجميع وربط الأصناف والكائنات لتكوين هياكل برمجية أكبر وأكثر مرونة.",
  "3. الأنماط السلوكية (Behavioral Patterns): تختص بتوزيع المسؤوليات وتنظيم خوارزميات التفاعل وتدفق الاتصال بين الكائنات."
] };
window.TOC_AR["L2-S009"] = window.TOC_AR["L2"]["L2-S009"];

window.TOC_AR["L2"]["L2-S010"] = { ar: [
  "الأنماط الإنشائية (Creational Patterns Overview)",
  "- الهدف: التحكم في كيفية إنشاء الكائنات وتجريد كود الإنشاء بعيداً عن الكود المستدعي.",
  "- المشكلة مع المعامل new المباشر: ربط الصنف المستدعي بالصنف الملموس برباط وثيق (Tight Coupling)، مما ينتهك مبدأي OCP و DIP.",
  "- الأنماط الإنشائية الخمسة الكلاسيكية:",
  "  * Singleton: نسخة وحيدة عامة في الذاكرة.",
  "  * Factory Method: تفويض إنشاء الكائن إلى فئات فرعية.",
  "  * Abstract Factory: إنشاء عائلات من الكائنات المترابطة دون تحديد فئاتها الملموسة.",
  "  * Builder: بناء كائنات معقدة خطوة بخطوة وفصل البناء عن التمثيل.",
  "  * Prototype: استنساخ كائنات موجودة لتفادي كلفة الإنشاء من الصفر."
] };
window.TOC_AR["L2-S010"] = window.TOC_AR["L2"]["L2-S010"];

window.TOC_AR["L2"]["L2-S011"] = { ar: [
  "نظرة عامة على الأنماط الهيكلية (Structural Patterns Overview)",
  "- تركز على كيفية تركيب وتجميع الأصناف والكائنات لتشكيل بنى برمجية واسعة النطاق.",
  "- تضمن أنه عند تعديل جزء في الهيكل، لا يتطلب ذلك تعديل كامل البنية.",
  "- تشمل 7 أنماط مشهورة: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy.",
  "- تدرس بالتفصيل في المحاضرة الثالثة (L3)."
] };
window.TOC_AR["L2-S011"] = window.TOC_AR["L2"]["L2-S011"];

window.TOC_AR["L2"]["L2-S012"] = { ar: [
  "نظرة عامة على الأنماط السلوكية (Behavioral Patterns Overview)",
  "- تركز على تدفق التحكم، الاتصال، وتوزيع المسؤوليات بين الكائنات المختلفة.",
  "- تسهل إدارة الخوارزميات وتغيير السلوكيات وقت التشغيل دون كسر التماسك.",
  "- تشمل 11 نمطاً مشهوراً منها: Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor.",
  "- تدرس بالتفصيل في المحاضرة الرابعة (L4)."
] };
window.TOC_AR["L2-S012"] = window.TOC_AR["L2"]["L2-S012"];

window.TOC_AR["L2"]["L2-S013"] = { ar: [
  "الأنماط الإنشائية وإدارة الكائنات (Creational Patterns & Object Lifecycle)",
  "- بدلاً من الإنشاء المبعثر للكائنات عبر الكلمة new في شتى ملفات المشروع، تجمع الأنماط الإنشائية منطق التجسيد في مكان واحد.",
  "- الفوائد المعمارية:",
  "  * إخفاء الفئات الملموسة عن العميل (Information Hiding).",
  "  * تسهيل إضافة أنواع جديدة من الكائنات دون تعديل الشيفرات المستدعية (تحقيق OCP).",
  "  * إعادة استخدام الكائنات وترشيد استهلاك الذاكرة (كما في Singleton و Prototype)."
] };
window.TOC_AR["L2-S013"] = window.TOC_AR["L2"]["L2-S013"];

window.TOC_AR["L2"]["L2-S014"] = { ar: [
  "نمط النسخة المفردة (Singleton Pattern — Intent)",
  "- الغرض والنية المعمارية (Intent):",
  "  * ضمان أن الصنف يمتلك نسخة واحدة فقط في الذاكرة طوال دورة حياة التطبيق (Ensure a class has only one instance).",
  "  * توفير نقطة وصول عامة وعالمية إلى هذه النسخة (Provide a global point of access).",
  "- المبدأ الأساسي: حماية الموارد المشتركة ومنع هدر الذاكرة بإنشاء نسخ متعددة لنفس الخدمة المركزية."
] };
window.TOC_AR["L2-S014"] = window.TOC_AR["L2"]["L2-S014"];

window.TOC_AR["L2"]["L2-S015"] = { ar: [
  "هيكلية نمط السينغلتون (Singleton Structure & Mechanics)",
  "- كيف نمنع المطورين من استدعاء new MyClass()؟",
  "  1. باني خاص (Private Constructor): جعل مشيد الصنف private لمنع إنشاء نسخ من خارج الصنف نهائياً.",
  "  2. متحول ساكن خاص (Private Static Field): لتخزين النسخة الوحيدة من الصنف في الذاكرة.",
  "  3. دالة أو خاصية ساكنة عامة (Public Static Method/Property): مثل GetInstance() أو Instance، تفحص إذا كانت النسخة موجودة تعيدها، وإن لم تكن قد أُنشئت بعد تقوم بإنشائها لأول مرة فقط (Lazy Initialization)."
] };
window.TOC_AR["L2-S015"] = window.TOC_AR["L2"]["L2-S015"];

window.TOC_AR["L2"]["L2-S016"] = { ar: [
  "متى نستخدم نمط السينغلتون؟ (When to Use Singleton)",
  "- عندما تتطلب طبيعة النظام وجود كائن واحد حصري لتنسيق العمليات عبر التطبيق.",
  "- أمثلة واقعية واستخدامات نموذجية:",
  "  * مدير سجل الأحداث (Logger / Logging Service).",
  "  * مجمع الاتصال بقاعدة البيانات (Database Connection Pool).",
  "  * كائن إعدادات التطبيق المقروءة من ملف JSON أو XML (Configuration Settings).",
  "  * نظام إدارة الطابعات (Print Spooler / Hardware Controller)."
] };
window.TOC_AR["L2-S016"] = window.TOC_AR["L2"]["L2-S016"];

window.TOC_AR["L2"]["L2-S017"] = { ar: [
  "تطبيق نمط السينغلتون في لغة C# (Singleton Implementation in C#)",
  "```csharp",
  "public class DatabaseConnection {",
  "    private static DatabaseConnection _instance;",
  "    private DatabaseConnection() {",
  "        // باني خاص لمنع الإنشاء الخارجي",
  "    }",
  "    public static DatabaseConnection GetInstance() {",
  "        if (_instance == null) {",
  "            _instance = new DatabaseConnection();",
  "        }",
  "        return _instance;",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L2-S017"] = window.TOC_AR["L2"]["L2-S017"];

window.TOC_AR["L2"]["L2-S018"] = { ar: [
  "مجالات استخدام السينغلتون وسيناريوهات العمل (Where Is Singleton Used?)",
  "- إدارة الموارد المشتركة والعتاد (Shared Hardware Resources).",
  "- أنظمة التخزين المؤقت (In-Memory Caching Systems).",
  "- خدمات الدخول والمصادقة الموحدة (Session / Auth Manager).",
  "- مجمعات الكائنات والمسارات (Thread Pools & Object Pools)."
] };
window.TOC_AR["L2-S018"] = window.TOC_AR["L2"]["L2-S018"];

window.TOC_AR["L2"]["L2-S019"] = { ar: [
  "مخطط فئات UML لنمط السينغلتون (Singleton UML Diagram)",
  "- الصنف Singleton في المخطط يحتوي:",
  "  * حقل ساكن خاص: `- instance: Singleton` (علامة السالب تعني private، وتسطير الاسم يعني static).",
  "  * باني خاص: `- Singleton()` لمنع الإنشاء عبر new.",
  "  * دالة ساكنة عامة: `+ getInstance(): Singleton` (علامة الزائد تعني public).",
  "  * دوال أعمال عامة إضافية: `+ doSomething()`."
] };
window.TOC_AR["L2-S019"] = window.TOC_AR["L2"]["L2-S019"];

window.TOC_AR["L2"]["L2-S020"] = { ar: [
  "السينغلتون وتعدد الخيوط (Singleton Pattern & Thread Safety in C#)",
  "- المشكلة في البيئات متعددة المسارات (Multi-threaded Environment):",
  "  * إذا وصل خيطان (Threads) في نفس اللحظة وفحصا الشرط `if (_instance == null)`، فسيجدانه صحيحاً كلاهما!",
  "  * النتيجة: سيقوم كل خيط بإنشاء كائن جديد، ونفقد صفة النسخة الوحيدة ويحدث تضارب في الذاكرة!",
  "- الحل: استخدام آلية القفل (Locking Mechanism / Thread-Safe Singleton):",
  "```csharp",
  "private static readonly object _lock = new object();",
  "public static DatabaseConnection GetInstance() {",
  "    lock (_lock) {",
  "        if (_instance == null) {",
  "            _instance = new DatabaseConnection();",
  "        }",
  "    }",
  "    return _instance;",
  "}",
  "```"
] };
window.TOC_AR["L2-S020"] = window.TOC_AR["L2"]["L2-S020"];

window.TOC_AR["L2"]["L2-S021"] = { ar: [
  "أمثلة عملية على السينغلتون (Singleton Practical Examples)",
  "- نظام تسجيل الأحداث (Logger Example):",
  "  * كتابة الرسائل التحذيرية والأخطاء في ملف مركزي موحد.",
  "- مدير التكوين والإعدادات (Configuration Manager):",
  "  * قراءة ملف الإعدادات appsettings.json مرة واحدة عند بدء التشغيل وتوفيره لكافة الأصناف دون إعادة قراءة الملف من القرص الصلب في كل مرة."
] };
window.TOC_AR["L2-S021"] = window.TOC_AR["L2"]["L2-S021"];

window.TOC_AR["L2"]["L2-S022"] = { ar: [
  "دراسة حالة كود السينغلتون (Detailed Singleton Case Study)",
  "- تطبيق كود C# متكامل يحتوي الحقول الساكنة، المشيد الخاص، ودالة الوصول المحمية بالقفل.",
  "- اختبار استدعاء الدالة من أماكن متعددة والتأكد من تطابق مراجع الكائنات عبر `object.ReferenceEquals(c1, c2)`.",
  "- النتيجة تكون دائماً True، مما يثبت أن كلا المرجعين يشيران إلى نفس المساحة التخزينية في الـ Heap."
] };
window.TOC_AR["L2-S022"] = window.TOC_AR["L2"]["L2-S022"];

window.TOC_AR["L2"]["L2-S023"] = { ar: [
  "نمط المصنع (Factory Pattern Overview)",
  "- نمط إنشائي يهدف إلى فصل وتجريد عملية إنشاء الكائنات عن الكود المستدعي.",
  "- المشكلة البرمجية بدون مصنع:",
  "  * استخدام عبارات switch أو if-else المتشعبة لإنشاء كائنات بناءً على نوع محدد.",
  "  * كلما أردنا إضافة نوع جديد، نضطر لتعديل الكود القائم، مما ينتهك مبدأ الفتح والإغلاق (OCP) ويرفع الارتباط (Tight Coupling).",
  "- الحل عبر نمط المصنع: تفويض مسؤولية الإنشاء إلى صنف مصنع مستقل يعيد واجهة مشتركة."
] };
window.TOC_AR["L2-S023"] = window.TOC_AR["L2"]["L2-S023"];

window.TOC_AR["L2"]["L2-S024"] = { ar: [
  "هيكلية نمط المصنع ومخطط UML (Factory Pattern Structure)",
  "- المكونات المعمارية لنمط المصنع:",
  "  1. المنتج المجرد (Product Interface / Abstract Class): العقد البرمجي المشترك لجميع الكائنات المنتجة (مثل INotification).",
  "  2. المنتجات الملموسة (Concrete Products): الأصناف الفعلية التي تطبق الواجهة (EmailNotification, SmsNotification, PushNotification).",
  "  3. صنف المصنع (Factory Class / Creator): الصنف الذي يحتوي الدالة الإنشائية (CreateNotification) ويعيد مرجعاً من نوع المنتج المجرد."
] };
window.TOC_AR["L2-S024"] = window.TOC_AR["L2"]["L2-S024"];

window.TOC_AR["L2"]["L2-S025"] = { ar: [
  "متى نستخدم نمط المصنع؟ (When to Use Factory Pattern)",
  "- عندما لا يعرف الصنف المستدعي مسبقاً الفئات الملموسة للكائنات التي سيحتاج لإنشائها.",
  "- عندما تكون عملية إنشاء الكائن معقدة وتحتوي خطوات تهيئة متعددة نرغب في تجميعها وتوحيدها.",
  "- عندما نريد عزل كود العميل عن التغييرات المستقبلية وإتاحة إضافة منتجات جديدة دون كسر الكود القديم.",
  "- لتطبيق مبدأ المسؤولية الواحدة (SRP) بحصر قرارات الإنشاء في مكان مخصص."
] };
window.TOC_AR["L2-S025"] = window.TOC_AR["L2"]["L2-S025"];

window.TOC_AR["L2"]["L2-S026"] = { ar: [
  "مثال تطبيقي: مصنع الإشعارات (Notification Factory Example)",
  "- الواجهة المشتركة: `INotification` وتحتوي دالة `Send(string message)`.",
  "- الأصناف الملموسة:",
  "  * EmailNotification: ترسل عبر خادم البريد SMTP.",
  "  * SmsNotification: ترسل عبر بوابة رسائل الهاتف المحمول.",
  "  * PushNotification: ترسل عبر خوادم إشعارات الهواتف الذكية (Firebase).",
  "- صنف المصنع NotificationFactory يحتوي دالة CreateNotification(type)."
] };
window.TOC_AR["L2-S026"] = window.TOC_AR["L2"]["L2-S026"];

window.TOC_AR["L2"]["L2-S027"] = { ar: [
  "مخطط UML لمصنع الإشعارات (Notification Factory UML)",
  "- يوضح المخطط العلاقة بين:",
  "  * العميل (Client) يعتمد على NotificationFactory و INotification.",
  "  * NotificationFactory ينشئ (Creates) كائنات تطبق INotification.",
  "  * أصناف Email, SMS, Push ترث وتطبق واجهة INotification وتعتبر Concrete Products.",
  "- العميل لا يرتبط مباشرة بأي من الأصناف الملموسة الثلاثة."
] };
window.TOC_AR["L2-S027"] = window.TOC_AR["L2"]["L2-S027"];

window.TOC_AR["L2"]["L2-S028"] = { ar: [
  "كود واجهة الإشعارات وتطبيقاتها في C# (C# Interface Implementation)",
  "```csharp",
  "public interface INotification {",
  "    void Send(string message);",
  "}",
  "public class EmailNotification : INotification {",
  "    public void Send(string message) {",
  "        Console.WriteLine(\"Sending Email: \" + message);",
  "    }",
  "}",
  "public class SmsNotification : INotification {",
  "    public void Send(string message) {",
  "        Console.WriteLine(\"Sending SMS: \" + message);",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L2-S028"] = window.TOC_AR["L2"]["L2-S028"];

window.TOC_AR["L2"]["L2-S029"] = { ar: [
  "كود صنف المصنع واستخدام العميل (Factory Implementation & Client Code)",
  "```csharp",
  "public class NotificationFactory {",
  "    public static INotification CreateNotification(string type) {",
  "        switch (type.ToLower()) {",
  "            case \"email\": return new EmailNotification();",
  "            case \"sms\": return new SmsNotification();",
  "            default: throw new ArgumentException(\"Invalid type\");",
  "        }",
  "    }",
  "}",
  "// كود العميل:",
  "INotification notify = NotificationFactory.CreateNotification(\"email\");",
  "notify.Send(\"Hello Clean Architecture\");",
  "```"
] };
window.TOC_AR["L2-S029"] = window.TOC_AR["L2"]["L2-S029"];

window.TOC_AR["L2"]["L2-S030"] = { ar: [
  "مقارنة: الكود بدون مصنع مقابل الكود مع نمط المصنع (Without vs With Factory)",
  "- بدون نمط المصنع (Without Factory):",
  "  * العميل يستخدم new لإنشاء الصنف الملموس مباشرة.",
  "  * ارتباط وثيق (Tightly Coupled) بين العميل وكل الأصناف.",
  "  * تكرار كود التحقق والإنشاء في أماكن متعددة.",
  "  * انتهاك مبدأ الفتح والإغلاق (OCP) ومبدأ المسؤولية الواحدة (SRP).",
  "- مع نمط المصنع (With Factory):",
  "  * العميل يعتمد فقط على الواجهة والمصنع.",
  "  * ارتباط ضعيف ومرن (Loosely Coupled).",
  "  * تمركز منطق الإنشاء في مكان موحد وسهل الصيانة والاختبار.",
  "  * تحقيق كامل لمبادئ SOLID وتيسير إضافة منتجات جديدة."
] };
window.TOC_AR["L2-S030"] = window.TOC_AR["L2"]["L2-S030"];
