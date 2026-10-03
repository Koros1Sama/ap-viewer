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
  "مشاكل شائعة في التصميم البرمجي الرديء (Common Problems in Poor Software Design)",
  "- مع نمو المشاريع البرمجية، يواجه المطورون غالباً:",
  "  * تكرار الكود (Duplicate Code).",
  "  * الأصناف الضخمة (Large Classes).",
  "  * الارتباط الوثيق (Tight Coupling).",
  "  * صعوبة الاختبار (Difficult Testing).",
  "  * صعوبة الصيانة (Difficult Maintenance).",
  "  * صعوبة التوسيع (Difficult Extension).",
  "- هذه المشاكل تزيد من تكلفة التطوير وتقلل من جودة البرمجيات."
] };
window.TOC_AR["L2-S003"] = window.TOC_AR["L2"]["L2-S003"];

window.TOC_AR["L2"]["L2-S004"] = { ar: [
  "فلسفة البرمجيات الجيدة (Good Software Philosophy)",
  "- البرمجيات الجيدة لا تقتصر فقط على جعل الكود يعمل:",
  "  * (Good software is not only about making it work)",
  "- بل تتعلق بجعل الكود قابلاً للتغيير والتعديل بسهولة:",
  "  * (It is about making it easy to change)",
  "- الكود الذي يعمل لكنه معقد وصعب التعديل هو كود رديء هندسياً، لأن التغيير حتمي ومستمر في أي نظام برمجي."
] };
window.TOC_AR["L2-S004"] = window.TOC_AR["L2"]["L2-S004"];

window.TOC_AR["L2"]["L2-S005"] = { ar: [
  "سيناريو واقعي: متجر التسوق الإلكتروني (Real Scenario: Online Shopping System)",
  "- تخيل نظام متجر إلكتروني (Online Shopping System):",
  "- في البداية، يدعم النظام وسيلتي دفع فقط:",
  "  * Visa",
  "  * PayPal",
  "- لاحقاً، تطلب الشركة دعم وسائل دفع إضافية:",
  "  * MasterCard",
  "  * Apple Pay",
  "  * Google Pay",
  "  * Crypto Payment (الدفع بالعملات المشفرة)",
  "- التحدي المعماري الكبير:",
  "  * هل ستعدل الكود القائم في كل مرة يُطلب فيها وسيلة دفع جديدة؟",
  "  * ماذا لو كانت مئات الملفات في النظام تعتمد على هذا الكود؟"
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
  "نمط السينغلتون (Singleton Definition)",
  "- نمط السينغلتون هو نمط تصميم إنشائي (creational design pattern) يتيح لك ضمان أن الفئة تمتلك نسخة واحدة فقط، مع توفير نقطة وصول عامة عالمية لهذه النسخة (global access point to this instance)."
] };
window.TOC_AR["L2-S015"] = window.TOC_AR["L2"]["L2-S015"];

window.TOC_AR["L2"]["L2-S016"] = { ar: [
  "نمط السينغلتون (Singleton Pattern)",
  "- يحل نمط السينغلتون مشكلتين في نفس الوقت، مما يجعله ينتهك مبدأ المسؤولية الأحادية (Single Responsibility Principle):",
  "  1. ضمان أن الفئة تمتلك نسخة واحدة فقط (Ensure that a class has just a single instance).",
  "  2. توفير نقطة وصول عامة عالمية لتلك النسخة (Provide a global access point to that instance)."
] };
window.TOC_AR["L2-S016"] = window.TOC_AR["L2"]["L2-S016"];

window.TOC_AR["L2"]["L2-S017"] = { ar: [
  "نمط السينغلتون — الخطوتان المشتركتان (Singleton Pattern)",
  "- تشترك جميع تطبيقات نمط السينغلتون في هاتين الخطوتين:",
  "  1. جعل المشيد الافتراضي خاصاً (private): لمنع الكائنات الأخرى من استخدام المعامل new مع فئة السينغلتون.",
  "  2. إنشاء دالة إنشاء ساكنة (static creation method) تعمل كبديل للمشيد: تقوم هذه الدالة في الخفاء باستدعاء المشيد الخاص لإنشاء الكائن وحفظه في حقل ساكن (static field). وجميع الاستدعاءات التالية لهذه الدالة تعيد الكائن المحفوظ مسبقاً (cached object)."
] };
window.TOC_AR["L2-S017"] = window.TOC_AR["L2"]["L2-S017"];

window.TOC_AR["L2"]["L2-S018"] = { ar: [
  "أين يُستخدم نمط السينغلتون؟ (Where Is Singleton Used?)",
  "- تشمل الأمثلة الشائعة ما يلي:",
  "  * مسجل الأحداث (Logger).",
  "  * مدير التكوين والإعدادات (Configuration Manager).",
  "  * إعدادات التطبيق (Application Settings).",
  "  * مدير الذاكرة المؤقتة (Cache Manager).",
  "  * منسق طابور الطباعة (Printer Spooler).",
  "  * مدير الاتصال بقاعدة البيانات في بعض المعماريات (Database Connection Manager in some architectures)."
] };
window.TOC_AR["L2-S018"] = window.TOC_AR["L2"]["L2-S018"];

window.TOC_AR["L2"]["L2-S019"] = { ar: [
  "مخطط UML لنمط السينغلتون (Singleton Pattern – UML Diagram)",
  "- فئة السينغلتون (Singleton Class):",
  "  * حقل ساكن خاص: `- instance: Singleton (static, private)`",
  "  * مُنشئ خاص: `- Singleton() (private)` — المشيد خاص لمنع إنشاء كائنات من فئات أخرى.",
  "  * دالة ساكنة عامة: `+ getInstance(): Singleton (static)` — توفر نقطة وصول عامة للنسخة الوحيدة.",
  "  * دالة عمليات عامة: `+ someOperation(): void`",
  "- فئة العميل (Client Class):",
  "  * `+ main(): void`",
  "  * `+ doSomething(): void`",
  "  * علاقة استخدام (uses) بين Client و Singleton.",
  "- كود دالة الوصول الموضحة في المخطط:",
  "```csharp",
  "public static Singleton getInstance() {",
  "    if (instance == null)",
  "        instance = new Singleton();",
  "    return instance;",
  "}",
  "```",
  "- النقاط الجوهرية (Key Points):",
  "  * الفئة تمتلك نسخة واحدة فقط (The class has only one instance).",
  "  * المشيد خاص (The constructor is private).",
  "  * النسخة خاصة وساكنة (The instance is private and static).",
  "  * دالة ساكنة عامة توفر وصولاً عاماً للنسخة (A public static method provides global access).",
  "- الغرض المعماري (Intent): ضمان امتلاك الفئة لنسخة واحدة فقط، وتوفير نقطة وصول عامة إليها."
] };
window.TOC_AR["L2-S019"] = window.TOC_AR["L2"]["L2-S019"];

window.TOC_AR["L2"]["L2-S020"] = { ar: [
  "كود تطبيق نمط السينغلتون بلغة C# (C# Code)",
  "```csharp",
  "public sealed class Singleton",
  "{",
  "    private static Singleton instance;",
  "",
  "    private Singleton()",
  "    {",
  "    }",
  "",
  "    public static Singleton GetInstance()",
  "    {",
  "        if (instance == null)",
  "        {",
  "            instance = new Singleton();",
  "        }",
  "",
  "        return instance;",
  "    }",
  "}",
  "```",
  "- تفكيك وترجمة عناصر الكود سطر بسطر:",
  "  * `public sealed class Singleton`: فئة عامة مغلقة (sealed) لمنع الوراثة منها وحماية نمط النسخة الواحدة.",
  "  * `private static Singleton instance;`: متغير ساكن خاص لتخزين المرجع الوحيد لكائن السينغلتون.",
  "  * `private Singleton() { }`: مُنشئ (Constructor) خاص يمنع استخدام المعامل new من خارج الفئة نهائياً.",
  "  * `public static Singleton GetInstance()`: دالة ساكنة عامة تُستدعى عبر اسم الفئة للحصول على النسخة.",
  "  * `if (instance == null) { instance = new Singleton(); }`: التحقق الكسول؛ إذا لم يكن الكائن قد أُنشئ بعد يتم إنشاؤه لأول مرة.",
  "  * `return instance;`: إرجاع النسخة المحفوظة."
] };
window.TOC_AR["L2-S020"] = window.TOC_AR["L2"]["L2-S020"];

window.TOC_AR["L2"]["L2-S021"] = { ar: [
  "أمثلة استخدام السينغلتون وحالات عدم استخدامه (Examples)",
  "- استخدم نمط السينغلتون لفئات مثل (Use Singleton for classes such as):",
  "  * الاتصال بقاعدة البيانات (Database Connection).",
  "  * مسجل الأحداث (Logger).",
  "  * مدير التكوين (Configuration Manager).",
  "  * مدير الذاكرة المؤقتة (Cache Manager).",
  "  * مدير الطابعة (Printer Manager).",
  "  * إعدادات التطبيق (Application Settings).",
  "- لا تستخدم نمط السينغلتون لفئات تتطلب بطبيعتها كائنات متعددة مثل (Do not use Singleton for classes that naturally require multiple objects):",
  "  * الطالب (Student).",
  "  * الموظف (Employee).",
  "  * المنتج (Product).",
  "  * العميل (Customer).",
  "  * الطلب (Order)."
] };
window.TOC_AR["L2-S021"] = window.TOC_AR["L2"]["L2-S021"];

window.TOC_AR["L2"]["L2-S022"] = { ar: [
  "مثال تطبيقي كامل على السينغلتون واختبار النسخة (Example — Configuration & Program)",
  "```csharp",
  "using System;",
  "",
  "public sealed class Configuration",
  "{",
  "    private static Configuration instance;",
  "",
  "    private Configuration()",
  "    {",
  "        Console.WriteLine(\"Loading configuration file...\");",
  "        DatabaseName = \"UniversityDB\";",
  "    }",
  "",
  "    public string DatabaseName { get; private set; }",
  "",
  "    public static Configuration GetInstance()",
  "    {",
  "        if (instance == null)",
  "        {",
  "            instance = new Configuration();",
  "        }",
  "",
  "        return instance;",
  "    }",
  "}",
  "",
  "class Program",
  "{",
  "    static void Main()",
  "    {",
  "        Configuration c1 = Configuration.GetInstance();",
  "        Configuration c2 = Configuration.GetInstance();",
  "",
  "        Console.WriteLine(c1.DatabaseName);",
  "        Console.WriteLine(c2.DatabaseName);",
  "",
  "        Console.WriteLine(Object.ReferenceEquals(c1, c2));",
  "    }",
  "}",
  "```",
  "- تفكيك وترجمة الكود ومخرجاته:",
  "  * فئة Configuration: تمثل كائن إعدادات النظام، ويقوم مشيدها الخاص بطباعة رسالة تحميل الإعدادات وتعيين اسم قاعدة البيانات `DatabaseName = \"UniversityDB\"`.",
  "  * فئة Program والتابع Main: تقوم بطلب النسخة مرتين وتخزين المرجع في متغيرين مستقلين `c1` و `c2`.",
  "  * `Object.ReferenceEquals(c1, c2)`: تفحص هل المتغيران يشيران إلى نفس الكائن تماماً في الذاكرة (Heap)، وتطبع: `True`.",
  "  * جملة `Loading configuration file...` تُطبع مرة واحدة فقط، مما يثبت أن المشيد لم يُستدعَ إلا مرة واحدة."
] };
window.TOC_AR["L2-S022"] = window.TOC_AR["L2"]["L2-S022"];

window.TOC_AR["L2"]["L2-S023"] = { ar: [
  "نمط المصنع (Factory Pattern)",
  "- رسم توضيحي تمهيدي لنمط المصنع (Factory Metaphor):",
  "  * تشبيه معمارية المصنع بمركز إدارة اللوجستيات (Logistics) الذي يشرف على نقل البضائع.",
  "  * يتفرع العمل إلى نوعين رئيسيين من النقل: النقل البري (Road Logistics) عبر الشاحنات، والنقل البحري (Sea Logistics) عبر السفن.",
  "  * العميل يطلب نقل البضاعة دون الحاجة لمعرفة التفاصيل الهندسية الداخلية لكل وسيلة نقل."
] };
window.TOC_AR["L2-S023"] = window.TOC_AR["L2"]["L2-S023"];

window.TOC_AR["L2"]["L2-S024"] = { ar: [
  "نمط المصنع (Factory Pattern)",
  "- طريقة المصنع (Factory Method) هي نمط تصميم إنشائي يوفر واجهة لإنشاء الكائنات في فئة أساسية (superclass)، ولكنه يسمح للفئات الفرعية (subclasses) بتعديل وتغيير نوع الكائنات التي سيتم إنشاؤها (alter the type of objects that will be created).",
  "- بدلاً من إنشاء الكائنات بشكل مباشر، تفوض طريقة المصنع مسؤولية إنشاء الكائن إلى دالة أو فئة مخصصة (delegates the responsibility of object creation to a dedicated method or class)، مما يعزز الترابط المرن المفكك وقابلية التوسع (promoting loose coupling and scalability).",
  "- تحدد طريقة المصنع دالة يجب استخدامها لإنشاء الكائنات بدلاً من استخدام الاستدعاء المباشر للمشيد عبر المعامل new (instead of using a direct constructor call). ويمكن للفئات الفرعية إعادة تعريف هذه الدالة (override this method) لتغيير فئة الكائنات التي سيتم إنشاؤها.",
  "- يُعد هذا النمط مفيداً بشكل خاص في السيناريوهات التي يكون فيها منطق إنشاء الكائنات معقداً أو يختلف بناءً على شروط معينة (instantiation logic is complex or varies based on certain conditions)."
] };
window.TOC_AR["L2-S024"] = window.TOC_AR["L2"]["L2-S024"];

window.TOC_AR["L2"]["L2-S025"] = { ar: [
  "متى نستخدمه؟ (When to Use It)",
  "- فئات فرعية غير معروفة مسبقاً (Unknown Subclasses): عندما لا يعرف الكود البرمجي لديك مسبقاً الأنواع الدقيقة التي يحتاج للتعامل معها (When your code doesn't know ahead of time which exact types it needs to work with).",
  "- تحكم مركزي موحد (Centralized Control): عندما ترغب في تجميع منطق الإنشاء المعقد أو إدارة دورة حياة الكائنات في مكان واحد (consolidate complex creation logic or object lifecycle management in one place).",
  "- اختبارات الوحدة (Unit Testing): عندما تحتاج إلى استبدال التبعيات بكائنات وهمية بسهولة لأغراض الاختبار (substitute dependencies with mock objects easily)."
] };
window.TOC_AR["L2-S025"] = window.TOC_AR["L2"]["L2-S025"];

window.TOC_AR["L2"]["L2-S026"] = { ar: [
  "نمط المصنع (المصنع البسيط) — مثال الإشعارات (Factory Pattern - Notification Example)",
  "- مخطط ومكونات مصنع الإشعارات:",
  "  * الواجهة `<<interface>> INotification`: تحتوي العقد `+ Send(): void`.",
  "  * المنتجات الملموسة (Concrete Products):",
  "    1. `EmailNotification`: تطبق `+ Send(): void // send email`.",
  "    2. `SmsNotification`: تطبق `+ Send(): void // send sms`.",
  "    3. `WhatsAppNotification`: تطبق `+ Send(): void // send whatsapp message`.",
  "  * صنف المصنع `NotificationFactory`: يحتوي دالة `+ CreateNotification(type: string): INotification` مع جملة switch تفحص النوع (email, sms, whatsapp) وترجع الكائن المناسب أو ترمي Exception للأنواع غير الصالحة.",
  "- مثال الاستخدام (Usage Example):",
  "```csharp",
  "NotificationFactory factory = new NotificationFactory();",
  "INotification notification = factory.CreateNotification(\"email\");",
  "notification.Send(); // Outputs: send email",
  "",
  "notification = factory.CreateNotification(\"sms\");",
  "notification.Send(); // Outputs: send sms",
  "",
  "notification = factory.CreateNotification(\"whatsapp\");",
  "notification.Send(); // Outputs: send whatsapp message",
  "```",
  "- آلية العمل خطوة بخطوة (How it works):",
  "  1. العميل يستدعي دالة الإنشاء: `CreateNotification(\"email\")`.",
  "  2. المصنع يفحص النوع داخل جملة switch.",
  "  3. المصنع ينشئ ويعيد الكائن المناسب (`EmailNotification`).",
  "  4. العميل يستلم الكائن من نوع الواجهة `INotification` ويستخدمه باستدعاء `Send()`."
] };
window.TOC_AR["L2-S026"] = window.TOC_AR["L2"]["L2-S026"];

window.TOC_AR["L2"]["L2-S027"] = { ar: [
  "مخطط فئات UML لنمط طريقة المصنع (Factory Method Pattern – UML Diagram)",
  "- شجرة المنتجات (Products Hierarchy):",
  "  * المنتج المجرد `<<abstract>> Product`: يحتوي دالة العمليات `+ operation(): void`.",
  "  * المنتجات الملموسة `ConcreteProductA` و `ConcreteProductB`: تطبق دالة `+ operation(): void`.",
  "- شجرة المنشئات (Creators Hierarchy):",
  "  * المنشئ المجرد `<<abstract>> Creator`: يحتوي دالة القالب `+ templateMethod(): void` ودالة المصنع المحمية `# factoryMethod(): Product`.",
  "  * دالة templateMethod() تستخدم factoryMethod() لإنشاء كائن Product.",
  "  * المنشئ الملموس `ConcreteCreatorA`: يعيد تعريف دالة المصنع لترجع `new ConcreteProductA()`.",
  "  * المنشئ الملموس `ConcreteCreatorB`: يعيد تعريف دالة المصنع لترجع `new ConcreteProductB()`.",
  "- القاعدة المعمارية: المنشئ الملموس (ConcreteCreator) يعيد تعريف (overrides) دالة factoryMethod() ليرجع نسخة من ConcreteProduct."
] };
window.TOC_AR["L2-S027"] = window.TOC_AR["L2"]["L2-S027"];

window.TOC_AR["L2"]["L2-S028"] = { ar: [
  "مثال كود C#: واجهة الإشعار وفئات المنتجات الملموسة (Example — INotification)",
  "```csharp",
  "public interface INotification",
  "{",
  "    void Send();",
  "}",
  "",
  "public class EmailNotification : INotification",
  "{",
  "    public void Send()",
  "    {",
  "        Console.WriteLine(\"Email Sent\");",
  "    }",
  "}",
  "",
  "public class SmsNotification : INotification",
  "{",
  "    public void Send()",
  "    {",
  "        Console.WriteLine(\"SMS Sent\");",
  "    }",
  "}",
  "",
  "public class WhatsAppNotification : INotification",
  "{",
  "    public void Send()",
  "    {",
  "        Console.WriteLine(\"WhatsApp Message Sent\");",
  "    }",
  "}",
  "```",
  "- تفكيك وترجمة الكود سطر بسطر:",
  "  * `public interface INotification`: الواجهة العامة التي تحدد العقد المشترك بدالة `void Send()`.",
  "  * `EmailNotification`: تطبق الواجهة وتطبع عند الاستدعاء: `Email Sent`.",
  "  * `SmsNotification`: تطبق الواجهة وتطبع عند الاستدعاء: `SMS Sent`.",
  "  * `WhatsAppNotification`: تطبق الواجهة وتطبع عند الاستدعاء: `WhatsApp Message Sent`."
] };
window.TOC_AR["L2-S028"] = window.TOC_AR["L2"]["L2-S028"];

window.TOC_AR["L2"]["L2-S029"] = { ar: [
  "مثال كود C#: فئة المصنع واستخدام العميل في Main (Example — NotificationFactory & Program)",
  "```csharp",
  "public class NotificationFactory",
  "{",
  "    public INotification CreateNotification(string type)",
  "    {",
  "        switch (type.ToLower())",
  "        {",
  "            case \"email\":",
  "                return new EmailNotification();",
  "",
  "            case \"sms\":",
  "                return new SmsNotification();",
  "",
  "            case \"whatsapp\":",
  "                return new WhatsAppNotification();",
  "",
  "            default:",
  "                throw new Exception(\"Invalid Notification Type\");",
  "        }",
  "    }",
  "}",
  "",
  "class Program",
  "{",
  "    static void Main()",
  "    {",
  "        NotificationFactory factory = new NotificationFactory();",
  "",
  "        INotification notification = factory.CreateNotification(\"sms\");",
  "",
  "        notification.Send();",
  "    }",
  "}",
  "```",
  "- تفكيك وترجمة الكود ومخرجاته:",
  "  * فئة NotificationFactory: تحتوي دالة `CreateNotification` التي تأخذ النوع النصي وتحوله لحروف صغيرة وتستخدم switch لإرجاع الكائن المناسب من نوع الواجهة `INotification`.",
  "  * إذا كان النوع غير معروف، يتم رمي استثناء: `throw new Exception(\"Invalid Notification Type\")`.",
  "  * في التابع Main: يتم إنشاء المصنع، وطلب إشعار من نوع `\"sms\"`، ثم استدعاء `notification.Send()`، فيكون الناتج المطبوع على الشاشة: `SMS Sent`."
] };
window.TOC_AR["L2-S029"] = window.TOC_AR["L2"]["L2-S029"];

window.TOC_AR["L2"]["L2-S030"] = { ar: [
  "مقارنة تطبيقية: الكود بدون مصنع مقابل الكود مع المصنع (Example — Without vs With Factory)",
  "- الكود بدون مصنع (Without Factory):",
  "```csharp",
  "INotification notification;",
  "",
  "if(type==\"email\")",
  "    notification = new EmailNotification();",
  "",
  "else if(type==\"sms\")",
  "    notification = new SmsNotification();",
  "",
  "else",
  "    notification = new WhatsAppNotification();",
  "",
  "notification.Send();",
  "```",
  "- الكود مع نمط المصنع (With Factory):",
  "```csharp",
  "NotificationFactory factory = new NotificationFactory();",
  "",
  "INotification notification = factory.CreateNotification(type);",
  "",
  "notification.Send();",
  "```",
  "- الفارق الجوهري الموضح في الشريحة:",
  "  * بدون مصنع: كود العميل يتضمن شروط if-else ويتصل مباشرة بالأصناف الملموسة عبر new، مما يجعله وثيق الارتباط وصعب التعديل.",
  "  * مع المصنع: كود العميل يختزل في سطرين نظيفين بالاعتماد فقط على كائن المصنع والواجهة المشتركة `INotification`."
] };
window.TOC_AR["L2-S030"] = window.TOC_AR["L2"]["L2-S030"];
