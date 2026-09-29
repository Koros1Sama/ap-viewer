/* الترجمة العربية لسلايدات الوحدة 3: أنماط التصميم الهيكلية
   المدرس: د. بيداء لعلع — 67 شريحة كاملة (L3-S001 إلى L3-S067)
   معيار: 100% SVG line-art · صفر إيموجيات
*/
window.TOC_AR = window.TOC_AR || {};
window.TOC_AR["L3"] = window.TOC_AR["L3"] || {};

window.TOC_AR["L3"]["L3-S001"] = { ar: [
  "البرمجة المتقدمة (Advanced Programming)",
  "المحاضرة الثالثة (Lecture 3)",
  "أنماط التصميم الهيكلية (Structural Design Patterns)"
] };
window.TOC_AR["L3-S001"] = window.TOC_AR["L3"]["L3-S001"];

window.TOC_AR["L3"]["L3-S002"] = { ar: [
  "أهداف التعلم (Learning Objectives)",
  "بنهاية هذه المحاضرة، ستكون قادراً على:",
  "- فهم ماهية أنماط التصميم الهيكلية (Structural Design Patterns).",
  "- توضيح أسباب الحاجة إليها في الأنظمة البرمجية.",
  "- فهم دور لغة النمذجة الموحدة (UML) في أنماط التصميم.",
  "- تحديد وتطبيق أربعة أنماط هيكلية رئيسية: المهايئ (Adapter)، الواجهة (Facade)، الوكيل (Proxy)، والمزخرف (Decorator)."
] };
window.TOC_AR["L3-S002"] = window.TOC_AR["L3"]["L3-S002"];

window.TOC_AR["L3"]["L3-S003"] = { ar: [
  "أنماط التصميم الهيكلية (Structural Design Patterns)",
  "- أنماط التصميم الهيكلية هي حلول تصميمية تصف كيفية دمج وتركيب الأصناف والكائنات لإنشاء أنظمة برمجية أكبر حجماً، مرنة، وقابلة للصيانة.",
  "- تساعد المطورين على:",
  "  * إعادة استخدام الكود الحالي (Reuse existing code).",
  "  * تقليل الاعتماديات والترابط بين الأجزاء (Reduce dependencies).",
  "  * تحسين المرونة والتكيف مع التغيير (Improve flexibility).",
  "  * تبسيط الأنظمة البرمجية المعقدة (Simplify complex systems)."
] };
window.TOC_AR["L3-S003"] = window.TOC_AR["L3"]["L3-S003"];

window.TOC_AR["L3"]["L3-S004"] = { ar: [
  "تشبيه واقعي (Real-Life Analogy)",
  "- تخيل عملية بناء منزل:",
  "- يحتوي المنزل على: أبواب، نوافذ، جدران، سقف، شبكة كهرباء، وشبكة سباكة.",
  "- التحدي الحقيقي ليس في تصنيع كل جزء على حدة؛ بل التحدي هو ربط وتوصيل كل هذه المكونات معاً بشكل صحيح وآمن.",
  "- الأنظمة البرمجية تطابق هذا التشبيه تماماً.",
  "- تساعدنا أنماط التصميم الهيكلية على تنظيم وإدارة هذه الروابط البرمجية بفعالية."
] };
window.TOC_AR["L3-S004"] = window.TOC_AR["L3"]["L3-S004"];

window.TOC_AR["L3"]["L3-S005"] = { ar: [
  "خصائص الأنماط الهيكلية (Characteristics of Structural Patterns)",
  "- تركز الأنماط الهيكلية على:",
  "  * العلاقات بين الكيانات (Relationships).",
  "  * التركيب والتجميع (Composition).",
  "  * تعاون الكائنات (Object Collaboration).",
  "  * المرونة (Flexibility).",
  "  * إعادة استخدام الكود (Code Reuse).",
  "- تعتمد غالباً على:",
  "  * الواجهات البرمجية (Interfaces).",
  "  * الوراثة (Inheritance).",
  "  * التركيب (Composition).",
  "- تفضل معظم الأنماط الهيكلية التركيب على الوراثة (Composition over Inheritance)."
] };
window.TOC_AR["L3-S005"] = window.TOC_AR["L3"]["L3-S005"];

window.TOC_AR["L3"]["L3-S006"] = { ar: [
  "التركيب مقابل الوراثة (Composition vs Inheritance)",
  "- الوراثة (Inheritance):",
  "  * تمثل علاقة نوعية «هو جزء من / نوع من» (IS-A Relationship).",
  "  * مثال: الكلب هو حيوان (Dog is an Animal).",
  "- التركيب (Composition):",
  "  * يمثل علاقة امتلاك واحتواء «يمتلك / يحتوي على» (HAS-A Relationship).",
  "  * مثال: السيارة تمتلك محركاً (Car has an Engine)."
] };
window.TOC_AR["L3-S006"] = window.TOC_AR["L3"]["L3-S006"];

window.TOC_AR["L3"]["L3-S007"] = { ar: [
  "مقدمة سيناريوهات الأنماط الهيكلية (Before We Start...)",
  "فكر في المواقف والسيناريوهات اليومية التالية:",
  "1. قمت بشراء شاحن هاتف جديد، لكن قابسه لا يطابق مقبس الجدار في منزلك.",
  "2. تريد مشاهدة فيلم بنقرة زر واحدة بدلاً من تشغيل وضبط عدة أجهزة منفصلة يدوياً.",
  "3. تريد حماية حسابك البنكي من الوصول غير المصرح به والتحقق من الهوية مسبقاً.",
  "4. تريد إضافة نكهات وإضافات مخصصة إلى فنجان قهوتك دون تعديل الوصفة الأساسية لتحضير القهوة.",
  "- على الرغم من تنوع هذه الحالات، إلا أنها جميعاً تدور حول كيفية عمل المكونات المتوفرة معاً بتناغم.",
  "- توفر أنماط التصميم الهيكلية حلولاً معمارية أنيقة لهذه المشكلات."
] };
window.TOC_AR["L3-S007"] = window.TOC_AR["L3"]["L3-S007"];

window.TOC_AR["L3"]["L3-S008"] = { ar: [
  "جدول مقارنة الأنماط الهيكلية (Structural Patterns Overview)",
  "النمط | الغرض الأساسي | التشبيه الواقعي",
  "- المهايئ (Adapter): يجعل الواجهات غير المتوافقة تعمل معاً بتناغم | مهايئ قابس الكهرباء (Power Adapter).",
  "- الواجهة (Facade): يوفر واجهة واحدة موحدة ومبسطة لنظام فرعي معقد | جهاز التحكم عن بعد للتلفاز (TV Remote Control).",
  "- الوكيل (Proxy): يتحكم في الوصول إلى كائن آخر ويدير التعامل معه | بطاقة الصراف الآلي (ATM Card).",
  "- المزخرف (Decorator): يضيف ميزات ومسؤوليات جديدة ديناميكياً | إضافات ونكهات القهوة (Coffee Toppings).",
  "- كل نمط يحل مشكلة هيكلية فريدة ومحددة.",
  "- اختيار النمط المناسب يعتمد حصراً على طبيعة المشكلة البرمجية وليس على التفضيل الشخصي للمطور."
] };
window.TOC_AR["L3-S008"] = window.TOC_AR["L3"]["L3-S008"];

window.TOC_AR["L3"]["L3-S009"] = { ar: [
  "كيف تعمل الأنماط الهيكلية (How Structural Patterns Work)",
  "- بدلاً من تعديل وإعادة كتابة الأصناف الحالية القائمة في النظام، تقوم أنماط التصميم الهيكلية بإعادة تنظيم العلاقات والروابط بين هذه الأصناف.",
  "- هذا النهج يحمي الشيفرات المستقرة من الأعطال ويدعم مبدأ المفتوح/المغلق (Open/Closed Principle)."
] };
window.TOC_AR["L3-S009"] = window.TOC_AR["L3"]["L3-S009"];

window.TOC_AR["L3"]["L3-S010"] = { ar: [
  "أكثر علاقات لغة النمذجة الموحدة شيوعاً (The Most Common UML Relationships)",
  "العلاقة | الرمز (Symbol) | المعنى البرمجي",
  "- الاقتران (Association) | خط مستمر مصمت (─────) | كائن يستخدم كائناً آخر (One object uses another).",
  "- الاعتمادية (Dependency) | خط متقطع بسهم مفتوح (- - - >) | استخدام مؤقت أو عابر كمعامل في دالة (Temporary usage).",
  "- الوراثة (Inheritance) | خط مستمر بمثلث فارغ مغلق (───▷) | علاقة نوعية «هو نوع من» (IS-A relationship).",
  "- التحقيق/التنفيذ (Realization) | خط متقطع بمثلث فارغ مغلق (- -▷) | صنف يطبق واجهة برمجية (Implements an interface).",
  "- التجميع الضعيف (Aggregation) | خط بماسة بيضاء فارغة (◇────) | علاقة احتواء واشتراك ضعيفة (HAS-A - weak ownership).",
  "- التركيب القوي (Composition) | خط بماسة سوداء مصمتة (◆────) | علاقة احتواء وتملك قوية تفنى بفناء الحاوي (HAS-A - strong ownership)."
] };
window.TOC_AR["L3-S010"] = window.TOC_AR["L3"]["L3-S010"];

window.TOC_AR["L3"]["L3-S011"] = { ar: [
  "نمط المهايئ (Adapter Pattern)",
  "شريحة عنوان فاصلة للنمط الأول من أنماط التصميم الهيكلية."
] };
window.TOC_AR["L3-S011"] = window.TOC_AR["L3"]["L3-S011"];

window.TOC_AR["L3"]["L3-S012"] = { ar: [
  "نمط المهايئ (Adapter Pattern)",
  "- نمط المهايئ هو نمط تصميم هيكلي يسمح للواجهات البرمجية غير المتوافقة بالعمل والتواصل معاً.",
  "- يعمل كجسر بين صنفين مختلفين عن طريق تحويل واجهة صنف إلى الواجهة الأخرى التي يتوقعها العميل (Client).",
  "- التعريف المبسط:",
  "  * المهايئ = مترجم (Adapter = Translator).",
  "  * يقوم بترجمة وتحويل الطلبات القادمة من واجهة إلى صيغة تفهمها الواجهة الأخرى."
] };
window.TOC_AR["L3-S012"] = window.TOC_AR["L3"]["L3-S012"];

window.TOC_AR["L3"]["L3-S013"] = { ar: [
  "مثال واقعي على نمط المهايئ (Adapter Design Pattern - Real-Life Example)",
  "- مهايئ قابس الكهرباء (Power Plug Adapter):",
  "- تخيل أنك اشتريت حاسوباً محمولاً من أوروبا، وقابس الشاحن الخاص به ثلاثي أو ثنائي بنمط أوروبي لا يتطابق مع مقبس الجدار في بلدك.",
  "- هل تقوم بـ:",
  "  * استبدال الحاسوب المحمول بالكامل؟ بالتأكيد لا.",
  "  * تكسير واستبدال مقبس الجدار في المنزل؟ بالتأكيد لا.",
  "- الحل الطبيعي: تستخدم مهايئاً بسيطاً (Power Adapter).",
  "- يقوم المهايئ بتحويل شكل التوصيل من نمط لآخر دون إحداث أي تعديل في الحاسوب أو مقبس الجدار.",
  "- الفكرة الجوهرية: المهايئ يغير طريقة التوصيل، ولا يغير الأجهزة نفسها (Changes the connection, not the devices)."
] };
window.TOC_AR["L3-S013"] = window.TOC_AR["L3"]["L3-S013"];

window.TOC_AR["L3"]["L3-S014"] = { ar: [
  "مقدمة سيناريو نمط المهايئ (Legacy Email Service)",
  "- لنفترض أن لدينا صنف قديم ومستقر لإرسال البريد الإلكتروني يسمى (LegacyEmailService).",
  "- تم استخدام هذا الصنف بنجاح في المؤسسة لسنوات طويلة ويعمل بكفاءة تامة.",
  "- لا يوجد أي مبرر منطقي لتعديله أو المخاطرة بإعادة كتابته.",
  "- في تطبيقنا البرمجي الجديد (New Application):",
  "  * يتوقع التطبيق من أي خدمة مراسلة أن تطبق الواجهة الموحدة: IMessageService."
] };
window.TOC_AR["L3-S014"] = window.TOC_AR["L3"]["L3-S014"];

window.TOC_AR["L3"]["L3-S015"] = { ar: [
  "عدم توافق الواجهات (Interface Incompatibility)",
  "- لاحظ الفرق البرمجي بين الطرفين:",
  "- الدالة المتوقعة في التطبيق الجديد:",
  "  * Send()",
  "- الدالة الموجودة فعلياً في الصنف القديم:",
  "  * SendEmail()",
  "- أسماء الدوال وتواقيعها مختلفة تماماً.",
  "- بالتالي: الواجهات البرمجية غير متوافقة برمجياً ولا يمكن استدعاؤها مباشرة (Interfaces are incompatible)."
] };
window.TOC_AR["L3-S015"] = window.TOC_AR["L3"]["L3-S015"];

window.TOC_AR["L3"]["L3-S016"] = { ar: [
  "حل المشكلة باستخدام نمط المهايئ (Adapter Pattern Solution)",
  "- الحل المعماري:",
  "- نقوم بإنشاء صنف وسيط جديد يسمى: EmailAdapter.",
  "- يقوم هذا المهايئ بما يلي:",
  "  1. يطبق الواجهة المتوقعة من التطبيق: IMessageService.",
  "  2. يحتفظ بمرجع داخلي للصنف القديم: LegacyEmailService.",
  "  3. يترجم استدعاء دالة Send() ليقوم داخلياً باستدعاء دالة SendEmail()."
] };
window.TOC_AR["L3-S016"] = window.TOC_AR["L3"]["L3-S016"];

window.TOC_AR["L3"]["L3-S017"] = { ar: [
  "مخطط مسار نمط المهايئ (Adapter Pattern Flow)",
  "- التطبيق (Application / Client)",
  "  │ يستدعي دالة Send() الموحدة",
  "  ▼",
  "- الواجهة البرمجية (IMessageService - Target Interface)",
  "  ▲ يحقق الواجهة",
  "  │",
  "- صنف المهايئ (EmailAdapter)",
  "  │ يمتلك مرجعاً ويترجم الاستدعاء إلى SendEmail()",
  "  ▼",
  "- الخدمة القديمة الأصلية (LegacyEmailService - Adaptee)"
] };
window.TOC_AR["L3-S017"] = window.TOC_AR["L3"]["L3-S017"];

window.TOC_AR["L3"]["L3-S018"] = { ar: [
  "مخطط أصناف لغة النمذجة الموحدة لنمط المهايئ (Adapter Pattern – UML Class Diagram)",
  "- المكونات المشاركة (Participants):",
  "  * العميل (Client): الصنف المستفيد الذي يطلب تنفيذ العملية.",
  "  * الهدف (Target Interface): الواجهة المعيارية التي يتوقعها العميل وتحتوي على الدالة `Request()`.",
  "  * المهايئ (Adapter): الصنف المحول الذي يحقق واجهة Target ويحتفظ بمرجع لكائن Adaptee، ويحول استدعاء `Request()` إلى `SpecificRequest()`.",
  "  * المتكيف عليه (Adaptee): الصنف الحالي ذو الواجهة غير المتوافقة والذي يحتوي على الدالة الفعلية `SpecificRequest()`."
] };
window.TOC_AR["L3-S018"] = window.TOC_AR["L3"]["L3-S018"];

window.TOC_AR["L3"]["L3-S019"] = { ar: [
  "مثال تطبيقي واقعي: نظام المدفوعات الإلكترونية (Adapter Pattern - Real Example: Payment System)",
  "مخطط معماري لربط بوابات الدفع الإلكتروني بنظام متجر إلكتروني عبر المهايئات."
] };
window.TOC_AR["L3-S019"] = window.TOC_AR["L3"]["L3-S019"];

window.TOC_AR["L3"]["L3-S020"] = { ar: [
  "تدفق تنفيذ نمط المهايئ في نظام الدفع (Adapter Design Pattern Flow)",
  "- كود العميل (Client)",
  "  │ يستدعي دالة الدفع المعيارية: Pay()",
  "  ▼",
  "- المهايئ (Adapter)",
  "  │ يحول الاستدعاء ويطلب الدالة المخصصة: MakePayment()",
  "  ▼",
  "- خدمة الدفع القديمة أو الخارجية (LegacyPaymentService)"
] };
window.TOC_AR["L3-S020"] = window.TOC_AR["L3"]["L3-S020"];

window.TOC_AR["L3"]["L3-S021"] = { ar: [
  "ربط المنظومتين عبر المهايئ (Decoupled Architecture with Adapter)",
  "- المهايئ يقوم بربط النظامين معاً.",
  "- النتيجة المعمارية الأهم: لا كود العميل (Client) ولا الصنف القديم (Legacy class) يحتاجان إلى أدنى تعديل.",
  "- المخطط الهيكلي:",
  "  * العميل (Client) ──> يعتمد على الواجهة IPaymentProcessor",
  "  * المهايئ (PaymentAdapter) ──▷ يحقق الواجهة IPaymentProcessor",
  "  * المهايئ (PaymentAdapter) ──> يمتلك مرجعاً لـ LegacyPaymentService"
] };
window.TOC_AR["L3-S021"] = window.TOC_AR["L3"]["L3-S021"];

window.TOC_AR["L3"]["L3-S022"] = { ar: [
  "تصميم واجهة معالجة المدفوعات (Interface Design for Payment Processing)",
  "- المشكلة والتحدي التصميمي:",
  "- تخيل أنك تطور نظاماً لمتجر إلكتروني عبر الإنترنت (Online Shopping System).",
  "- لجعل تطبيقك مرناً وقابلاً للتوسع، قمت بتصميم الواجهة البرمجية المعيارية التالية:",
  "```csharp",
  "public interface IPaymentProcessor",
  "{",
  "    void Pay(double amount);",
  "}",
  "```"
] };
window.TOC_AR["L3-S022"] = window.TOC_AR["L3"]["L3-S022"];

window.TOC_AR["L3"]["L3-S023"] = { ar: [
  "طلب دمج مزود دفع جديد: Stripe (Adapter Pattern Introduction)",
  "- متطلب جديد من إدارة النظام:",
  "- تقرر الشركة دمج بوابة الدفع العالمية Stripe في النظام.",
  "- توفر شركة Stripe مكتبتها الخاصة التي تحتوي على الصنف التالي:",
  "```csharp",
  "public class StripeGateway",
  "{",
  "    public void ProcessStripePayment(double totalAmount)",
  "    {",
  "        Console.WriteLine(\"Processing payment via Stripe: $\" + totalAmount);",
  "    }",
  "}",
  "```",
  "- المشكلة المؤسفة: صنف StripeGateway لا ينفذ واجهتنا IPaymentProcessor، واسم الدالة عنده ProcessStripePayment بدلاً من Pay."
] };
window.TOC_AR["L3-S023"] = window.TOC_AR["L3"]["L3-S023"];

window.TOC_AR["L3"]["L3-S024"] = { ar: [
  "إضافة مزود دفع ثانٍ: PayPal (Adding a New Payment Provider)",
  "- متطلب إضافي لاحق:",
  "- لاحقاً، قررت إدارة المتجر دعم بوابة PayPal أيضاً لإتاحة خيارات دفع متعددة للزبائن.",
  "- أصبح لدينا الآن مزودا دفع مختلفان كلياً:",
  "- صنف بوابة PayPal يمتلك أيضاً واجهة ودالة مختلفة باسم:",
  "  * SendPayment(double amount)",
  "- كل مزود دفع خارجي يأتي بواجهة وتواقيع دوال خاصة به تختلف عن الآخر."
] };
window.TOC_AR["L3-S024"] = window.TOC_AR["L3"]["L3-S024"];

window.TOC_AR["L3"]["L3-S025"] = { ar: [
  "النهج السيئ في معالجة بوابات الدفع (Bad Payment Processing Approach)",
  "المزود | اسم الدالة في مكتبته الخاصة",
  "- Stripe | ProcessStripePayment()",
  "- PayPal | SendPayment()",
  "- تطبيقنا الأساسي | Pay()",
  "- الحل السيئ وغير المقبول برمجياً (Bad Solution):",
  "- تعديل كود العميل والاعتماد على جمل الشرط (if / else أو switch):",
  "  * إذا كان المزود Stripe، استدعِ ProcessStripePayment.",
  "  * إذا كان المزود PayPal، استدعِ SendPayment.",
  "- عيوب هذا الحل:",
  "  * انتهاك صريح لمبدأ Open/Closed Principle (OCP).",
  "  * تضخم كود العميل وزيادة ترابطه الوثيق بالمكتبات الخارجية.",
  "  * صعوبة الاختبار والصيانة، وأي بوابة جديدة تتطلب إعادة فتح واختبار كود العميل كاملاً."
] };
window.TOC_AR["L3-S025"] = window.TOC_AR["L3"]["L3-S025"];

window.TOC_AR["L3"]["L3-S026"] = { ar: [
  "الحل الأفضل: نمط المهايئ (Adapter Design Pattern - Better Solution)",
  "- بدلاً من تعديل كود العميل وإقحام الشروط، نقوم بإنشاء صنف مهايئ (Adapter) مستقل لكل مزود دفع خارجي.",
  "- المخطط المعماري للحل:",
  "  * الواجهة المعيارية: IPaymentProcessor",
  "  * المهايئ الأول: StripeAdapter (يحقق IPaymentProcessor ويمتلك StripeGateway)",
  "  * المهايئ الثاني: PayPalAdapter (يحقق IPaymentProcessor ويمتلك PayPalGateway)",
  "- النتيجة: كلا المهايئين يقدمان نفس الواجهة الموحدة لكود العميل."
] };
window.TOC_AR["L3-S026"] = window.TOC_AR["L3"]["L3-S026"];

window.TOC_AR["L3"]["L3-S027"] = { ar: [
  "تطبيق مهايئ بوابة Stripe بلغة C# (Stripe Adapter Implementation)",
  "```csharp",
  "public class StripeAdapter : IPaymentProcessor",
  "{",
  "    private readonly StripeGateway _stripeGateway;",
  "",
  "    public StripeAdapter(StripeGateway stripeGateway)",
  "    {",
  "        _stripeGateway = stripeGateway;",
  "    }",
  "",
  "    public void Pay(double amount)",
  "    {",
  "        _stripeGateway.ProcessStripePayment(amount);",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L3-S027"] = window.TOC_AR["L3"]["L3-S027"];

window.TOC_AR["L3"]["L3-S028"] = { ar: [
  "تطبيق مهايئ بوابة PayPal بلغة C# (PayPal Adapter Implementation)",
  "```csharp",
  "public class PayPalAdapter : IPaymentProcessor",
  "{",
  "    private readonly PayPalGateway _payPalGateway;",
  "",
  "    public PayPalAdapter(PayPalGateway payPalGateway)",
  "    {",
  "        _payPalGateway = payPalGateway;",
  "    }",
  "",
  "    public void Pay(double amount)",
  "    {",
  "        _payPalGateway.SendPayment(amount);",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L3-S028"] = window.TOC_AR["L3"]["L3-S028"];

window.TOC_AR["L3"]["L3-S029"] = { ar: [
  "كود العميل بعد تطبيق نمط المهايئ (Adapter Pattern in Payment Processing - Client Code)",
  "- كود العميل لا يتواصل نهائياً بشكل مباشر مع مكتبات Stripe أو PayPal.",
  "- مسار التنفيذ الأول:",
  "  * العميل يستدعي: `Pay(250)` على كائن StripeAdapter.",
  "  * يقوم StripeAdapter باستدعاء: `ProcessStripePayment(250)` على كائن StripeGateway.",
  "- مسار التنفيذ الثاني:",
  "  * العميل يستدعي: `Pay(250)` على كائن PayPalAdapter.",
  "  * يقوم PayPalAdapter باستدعاء: `SendPayment(250)` على كائن PayPalGateway.",
  "- الفائدة: العميل يتعامل مع واجهة برمجية موحدة وبسيطة بغض النظر عن المزود الفعلي."
] };
window.TOC_AR["L3-S029"] = window.TOC_AR["L3"]["L3-S029"];

window.TOC_AR["L3"]["L3-S030"] = { ar: [
  "دواعي ومتى يجب استخدام نمط المهايئ (When to Use the Adapter Pattern)",
  "- استخدم نمط المهايئ في الحالات التالية:",
  "  1. عند وجود صنفين يمتلكان واجهات برمجية غير متوافقة وتريد منهما العمل معاً.",
  "  2. عند دمج مكتبات أو واجهات برمجية خارجية لأطراف ثالثة (Third-party libraries or APIs).",
  "  3. عند التعامل مع أنظمة عتيقة ومستقرة (Legacy systems) وتريد تجنب المخاطرة بتعديل كودها القديم.",
  "  4. عند الرغبة في إعادة استخدام أصناف قائمة في تطبيق برمجي جديد يفرض واجهات مختلفة.",
  "  5. لتوفير واجهة معيارية موحدة لعدة تطبيقات وتنفيذات مختلفة.",
  "- القاعدة الذهبية: استخدم المهايئ عندما تحتاج لجعل أصناف موجودة مسبقاً تعمل معاً دون تعديل شيفراتها المصدرية."
] };
window.TOC_AR["L3-S030"] = window.TOC_AR["L3"]["L3-S030"];

window.TOC_AR["L3"]["L3-S031"] = { ar: [
  "متى يجب تجنب استخدام نمط المهايئ (When Not to Use the Adapter Pattern)",
  "- لا تستخدم نمط المهايئ في الحالات التالية:",
  "  1. إذا كانت الواجهات البرمجية متوافقة بالفعل ولا يوجد أي تعارض بينها.",
  "  2. إذا كان بإمكانك تعديل الصنف القائم بسهولة وأمان دون التأثير على أجزاء أخرى من النظام.",
  "  3. إذا كان إجراء تعديل وتحسين بسيط في الكود (Simple Refactoring) يحل المشكلة مباشرة.",
  "  4. إذا كان إضافة صنف المهايئ سيتسبب في تعقيد لا مبرر له في النظام.",
  "- خلاصة معمارية: استخدم المهايئ حصراً لحل مشكلة عدم توافق الواجهات، وليس كبديل عن التصميم النظيف الجيد."
] };
window.TOC_AR["L3-S031"] = window.TOC_AR["L3"]["L3-S031"];

window.TOC_AR["L3"]["L3-S032"] = { ar: [
  "نمط الواجهة (Facade Pattern)",
  "شريحة عنوان فاصلة للنمط الهيكلي الثاني: نمط الواجهة (Façade Pattern)."
] };
window.TOC_AR["L3-S032"] = window.TOC_AR["L3"]["L3-S032"];

window.TOC_AR["L3"]["L3-S033"] = { ar: [
  "دوافع ومبررات نمط الواجهة (Facade Pattern Motivation)",
  "- السيناريو الواقعي:",
  "- تخيل أنك تريد مشاهدة فيلم سينمائي في المنزل.",
  "- بدون وجود واجهة موحدة، يتعين عليك تنفيذ الخطوات المتتالية التالية يدوياً:",
  "  1. تشغيل شاشة التلفاز (Turn on TV).",
  "  2. تشغيل نظام الصوت المحيطي (Turn on Sound System).",
  "  3. تشغيل مشغل الوسائط أو البث (Turn on Media Player).",
  "  4. ضبط قناة الإدخال الصحيحة (Select HDMI Input).",
  "  5. خفت إضاءة الغرفة (Dim Lights).",
  "- هذا عبء عمل وتنسيق كبير لإنجاز مهمة واحدة بسيطة.",
  "- السؤال المعماري: هل يمكن تبسيط هذه الخطوات؟",
  "- نعم، عبر إنشاء كائن وسيط وحيد ينجز كافة هذه المهام بنقرة زر واحدة."
] };
window.TOC_AR["L3-S033"] = window.TOC_AR["L3"]["L3-S033"];

window.TOC_AR["L3"]["L3-S034"] = { ar: [
  "السيناريو البرمجي: نظام المتجر الإلكتروني (Software Scenario: Online Shopping System)",
  "- سيناريو برمجي مؤسسي:",
  "- نفترض أننا نبني نظاماً لمتجر إلكتروني عبر الإنترنت.",
  "- عندما ينقر العميل على زر «إتمام الطلب» (Place Order)، يجب على النظام تنفيذ سلسلة العمليات التالية تلقائياً:",
  "  1. التحقق من صلاحية الطلب (Validate order).",
  "  2. معالجة عملية الدفع المالي (Process payment).",
  "  3. تحديث مخزون المنتجات (Update inventory).",
  "  4. إنشاء الفاتورة الضريبية (Create invoice).",
  "  5. إرسال بريد إلكتروني بتأكيد الطلب للزبون (Send confirmation email).",
  "- خمسة أنظمة فرعية مستقلة تشترك في إنجاز هذه المعاملة الواحدة.",
  "- بدون استخدام الواجهة: يضطر كود العميل للاتصال بالخدمات الخمس مباشرة، مما يجعله معقداً ومفرط الترابط."
] };
window.TOC_AR["L3-S034"] = window.TOC_AR["L3"]["L3-S034"];

window.TOC_AR["L3"]["L3-S035"] = { ar: [
  "المشكلة المعمارية: الترابط الوثيق المباشر (The Problem with Direct Service Coupling)",
  "- تشريح المشكلة البرمجية:",
  "- العميل (Client) يرتبط مباشرة بـ:",
  "  ├── OrderService",
  "  ├── PaymentService",
  "  ├── InventoryService",
  "  ├── InvoiceService",
  "  └── EmailService",
  "- يجب على كود العميل أن يعرف بدقة:",
  "  * أي خدمة يجب استدعاؤها.",
  "  * الترتيب الصارم والصحيح لتنفيذ العمليات.",
  "  * كيفية عمل وتفاصيل كل خدمة على حدة.",
  "- الآثار السلبية الكارثية:",
  "  * ترابط وثيق ومفرط (Tight coupling).",
  "  * كود عميل بالغ التعقيد والهشاشة.",
  "  * صعوبة بالغة في الصيانة والاختبار والتطوير."
] };
window.TOC_AR["L3-S035"] = window.TOC_AR["L3"]["L3-S035"];

window.TOC_AR["L3"]["L3-S036"] = { ar: [
  "حل نمط الواجهة: صنف ShoppingFacade (Facade Design Pattern Solution)",
  "- الحل المعماري الأنيق:",
  "- نقوم بإنشاء صنف وسيط وحيد يسمى: ShoppingFacade.",
  "- يتواصل العميل حصراً مع صنف الواجهة (ShoppingFacade).",
  "- المسار المعماري:",
  "  * العميل (Client) ──> يستدعي ShoppingFacade",
  "  * صنف ShoppingFacade ──> يدير وينسق العمليات مع الخدمات الخمس الداخلية.",
  "- الفكرة الجوهرية للمصمم:",
  "  * صنف الواجهة يعرف أدق تفاصيل النظام الفرعي.",
  "  * العميل لا يعرف شيئاً عن الأنظمة الفرعية وتعقيداتها (The Facade knows the subsystem; the client does not)."
] };
window.TOC_AR["L3-S036"] = window.TOC_AR["L3"]["L3-S036"];

window.TOC_AR["L3"]["L3-S037"] = { ar: [
  "المشاركون في نمط الواجهة (Facade Design Pattern Participants)",
  "المشارك (Participant) | المسؤولية البرمجية (Responsibility)",
  "- العميل (Client) | يطلب تنفيذ عملية عالية المستوى (High-level operation).",
  "- الواجهة (Facade) | يبسط وينسق الوصول إلى منظومة النظام الفرعي.",
  "- أصناف النظام الفرعي (Subsystem Classes) | تؤدي العمل الفعلي والمهام المتخصصة المنخفضة.",
  "- الهيكل في UML:",
  "  * Client ──> يتصل بـ ShoppingFacade",
  "  * ShoppingFacade ──> يمتلك أسهم توجيه إلى: OrderService, PaymentService, InventoryService, InvoiceService, EmailService."
] };
window.TOC_AR["L3-S037"] = window.TOC_AR["L3"]["L3-S037"];

window.TOC_AR["L3"]["L3-S038"] = { ar: [
  "مخطط أصناف لغة النمذجة الموحدة لنمط الواجهة (Facade Pattern - UML Class Diagram)",
  "- مخطط UML يوضح:",
  "  * صنف العميل (Client) في الأعلى يرتبط بصنف الواجهة فقط.",
  "  * صنف Facade يحتوي على مراجع للأصناف الفرعية الخمسة (Association).",
  "  * حزمة الأنظمة الفرعية (Subsystem Package) تضم: OrderService, PaymentService, InventoryService, InvoiceService, EmailService.",
  "- يوضح المخطط انعدام أي علاقة مباشرة بين العميل والأنظمة الفرعية."
] };
window.TOC_AR["L3-S038"] = window.TOC_AR["L3"]["L3-S038"];

window.TOC_AR["L3"]["L3-S039"] = { ar: [
  "الخطوة الأولى: إنشاء أصناف النظم الفرعية (Step 1 – Create the Subsystems)",
  "```csharp",
  "public class OrderService",
  "{",
  "    public void ValidateOrder() => Console.WriteLine(\"Order validated.\");",
  "}",
  "",
  "public class PaymentService",
  "{",
  "    public void ProcessPayment() => Console.WriteLine(\"Payment processed.\");",
  "}",
  "",
  "public class InventoryService",
  "{",
  "    public void UpdateStock() => Console.WriteLine(\"Stock updated.\");",
  "}",
  "",
  "public class InvoiceService",
  "{",
  "    public void CreateInvoice() => Console.WriteLine(\"Invoice created.\");",
  "}",
  "",
  "public class EmailService",
  "{",
  "    public void SendConfirmation() => Console.WriteLine(\"Email sent.\");",
  "}",
  "```"
] };
window.TOC_AR["L3-S039"] = window.TOC_AR["L3"]["L3-S039"];

window.TOC_AR["L3"]["L3-S040"] = { ar: [
  "الخطوة الثانية: إنشاء صنف الواجهة (Step 2 – Create the Facade)",
  "- يحتوي صنف الواجهة على مراجع لكافة أصناف النظم الفرعية:",
  "```csharp",
  "public class ShoppingFacade",
  "{",
  "    private readonly OrderService _orderService;",
  "    private readonly PaymentService _paymentService;",
  "    private readonly InventoryService _inventoryService;",
  "    private readonly InvoiceService _invoiceService;",
  "    private readonly EmailService _emailService;",
  "",
  "    public ShoppingFacade()",
  "    {",
  "        _orderService = new OrderService();",
  "        _paymentService = new PaymentService();",
  "        _inventoryService = new InventoryService();",
  "        _invoiceService = new InvoiceService();",
  "        _emailService = new EmailService();",
  "    }",
  "    // يتبع: الدالة عالية المستوى...",
  "}",
  "```"
] };
window.TOC_AR["L3-S040"] = window.TOC_AR["L3"]["L3-S040"];

window.TOC_AR["L3"]["L3-S041"] = { ar: [
  "الخطوة الثالثة: توفير الدالة عالية المستوى (Step 3 – High-Level Operation Method)",
  "- نقوم الآن بإنشاء دالة واحدة بسيطة وعالية المستوى لإتمام الطلب بالكامل:",
  "```csharp",
  "    public void PlaceOrder()",
  "    {",
  "        Console.WriteLine(\"Processing order via Facade...\");",
  "        _orderService.ValidateOrder();",
  "        _paymentService.ProcessPayment();",
  "        _inventoryService.UpdateStock();",
  "        _invoiceService.CreateInvoice();",
  "        _emailService.SendConfirmation();",
  "        Console.WriteLine(\"Order completed successfully!\");",
  "    }",
  "```"
] };
window.TOC_AR["L3-S041"] = window.TOC_AR["L3"]["L3-S041"];

window.TOC_AR["L3"]["L3-S042"] = { ar: [
  "مثال تشغيل كود العميل باستخدام الواجهة (Facade Design Pattern Example)",
  "- كود العميل غاية في البساطة والنظافة:",
  "```csharp",
  "class Program",
  "{",
  "    static void Main()",
  "    {",
  "        ShoppingFacade shopping = new ShoppingFacade();",
  "        shopping.PlaceOrder();",
  "    }",
  "}",
  "```",
  "- النتيجة في شاشة الكونسول:",
  "  * Processing order via Facade...",
  "  * Order validated.",
  "  * Payment processed.",
  "  * Stock updated.",
  "  * Invoice created.",
  "  * Email sent.",
  "  * Order completed successfully!"
] };
window.TOC_AR["L3-S042"] = window.TOC_AR["L3"]["L3-S042"];

window.TOC_AR["L3"]["L3-S043"] = { ar: [
  "كود العميل بدون استخدام الواجهة - للمقارنة (Client Without Facade)",
  "- انظر إلى الفوضى والتعقيد عندما يتفاعل العميل مباشرة مع كافة الخدمات:",
  "```csharp",
  "class Program",
  "{",
  "    static void Main()",
  "    {",
  "        OrderService order = new OrderService();",
  "        PaymentService payment = new PaymentService();",
  "        InventoryService inventory = new InventoryService();",
  "        InvoiceService invoice = new InvoiceService();",
  "        EmailService email = new EmailService();",
  "",
  "        order.ValidateOrder();",
  "        payment.ProcessPayment();",
  "        inventory.UpdateStock();",
  "        invoice.CreateInvoice();",
  "        email.SendConfirmation();",
  "    }",
  "}",
  "```",
  "- مساوئ هذا النهج: 5 كائنات مختلفة، 5 استدعاءات يدوية، وترابط وثيق كارثي."
] };
window.TOC_AR["L3-S043"] = window.TOC_AR["L3"]["L3-S043"];

window.TOC_AR["L3"]["L3-S044"] = { ar: [
  "مخطط التتابع الزمني لنمط الواجهة (Sequence Diagram - Facade Execution)",
  "- التسلسل الزمني للاستدعاءات:",
  "  1. العميل (Client) ── PlaceOrder() ──> الواجهة (ShoppingFacade)",
  "  2. الواجهة ── ValidateOrder() ──> OrderService",
  "  3. الواجهة ── ProcessPayment() ──> PaymentService",
  "  4. الواجهة ── UpdateStock() ──> InventoryService",
  "  5. الواجهة ── CreateInvoice() ──> InvoiceService",
  "  6. الواجهة ── SendConfirmation() ──> EmailService",
  "- يوضح المخطط أن الواجهة هي المنسق والمحرك الوحيد لكافة الاستدعاءات الخلفية."
] };
window.TOC_AR["L3-S044"] = window.TOC_AR["L3"]["L3-S044"];

window.TOC_AR["L3"]["L3-S045"] = { ar: [
  "إرشادات وضوابط استخدام نمط الواجهة (Facade Design Pattern Usage Guidelines)",
  "- متى يجب استخدام نمط Facade؟",
  "  1. عندما يكون النظام الفرعي معقداً للغاية ويحتوي على أصناف مترابطة متعددة.",
  "  2. عندما يتواصل العميل مع أصناف كثيرة وتريد تقليل نقاط الاتصال والترابط.",
  "  3. عندما تريد تبسيط واجهة برمجة التطبيقات (API Simplification).",
  "  4. عندما تريد إخفاء التفاصيل التنفيذية المنخفضة عن كود الواجهة.",
  "  5. عندما تريد توفير نقطة دخول موحدة ونظيفة لحزمة أو طبقة معمارية كاملة.",
  "- متى يجب تجنب استخدام نمط Facade؟",
  "  1. إذا كان النظام الفرعي بسيطاً بالأصل ولا يحتاج لتبسيط.",
  "  2. إذا كان العميل يحتاج للوصول المباشر والتخصيص الدقيق لكامل وظائف النظم الفرعية.",
  "  3. إذا كانت إضافة الواجهة مجرد طبقة إضافية فارغة لا تقدم أي تبسيط حقيقي."
] };
window.TOC_AR["L3-S045"] = window.TOC_AR["L3"]["L3-S045"];

window.TOC_AR["L3"]["L3-S046"] = { ar: [
  "نمط الوكيل (Proxy Pattern)",
  "شريحة عنوان فاصلة للنمط الهيكلي الثالث: نمط الوكيل (Proxy Pattern)."
] };
window.TOC_AR["L3-S046"] = window.TOC_AR["L3"]["L3-S046"];

window.TOC_AR["L3"]["L3-S047"] = { ar: [
  "نمط الوكيل (Proxy Pattern)",
  "- يوفر نمط الوكيل بديلاً أو نائباً أو غلافاً (Placeholder or Surrogate) لكائن آخر للتحكم الصارم في الوصول إليه.",
  "- بدلاً من أن يتواصل العميل مباشرة مع الكائن الحقيقي (Real Object)، يتواصل حصراً مع الوكيل (Proxy).",
  "- يتخذ الوكيل القرار المناسب بكيفية ومتى يتم توجيه الطلب إلى الكائن الحقيقي وإنجاز المهمة."
] };
window.TOC_AR["L3-S047"] = window.TOC_AR["L3"]["L3-S047"];

window.TOC_AR["L3"]["L3-S048"] = { ar: [
  "دوافع ومبررات نمط الوكيل (Proxy Pattern Motivation)",
  "- في كثير من السيناريوهات البرمجية، يكون الوصول المباشر إلى الكائن غير مرغوب فيه أو محفوفاً بالمخاطر.",
  "- دواعي استخدام الوكيل:",
  "  1. الأمان والتحقق من الصلاحيات (Security & Protection).",
  "  2. تحسين الأداء وترشيد الموارد (Performance Optimization).",
  "  3. التحميل الكسول وتأجيل الإنشاء (Lazy Loading).",
  "  4. تسجيل ومراقبة العمليات (Logging & Auditing).",
  "  5. الوصول إلى كائنات بعيدة عبر الشبكة (Remote Access).",
  "  6. التخزين المؤقت للنتائج المكلفة (Caching).",
  "- بدلاً من السماح بالوصول المباشر، نضع كائناً وسيطاً أمامه يسمى الوكيل (Proxy)."
] };
window.TOC_AR["L3-S048"] = window.TOC_AR["L3"]["L3-S048"];

window.TOC_AR["L3"]["L3-S049"] = { ar: [
  "مثال واقعي: بطاقة الصراف الآلي (ATM Card Real-Life Example)",
  "العالم الواقعي | نمط الوكيل (Proxy Pattern)",
  "- بطاقة الصراف الآلي (ATM Card) | الوكيل (Proxy)",
  "- الحساب البنكي الفعلي (Bank Account) | الكائن الحقيقي (Real Object)",
  "- العميل أو الزبون (Customer) | العميل البرمجي (Client)",
  "- التحليل الواقعي:",
  "- لسحب النقود، لا يمكنك الدخول مباشرة إلى خزنة البنك أو قاعدة بيانات الحسابات.",
  "- بدلاً من ذلك، تستخدم بطاقة الصراف الآلي وجهاز الصراف.",
  "- تقوم البطاقة بـ:",
  "  * التحقق من هويتك وصلاحية البطاقة.",
  "  * التحقق من الرمز السري (PIN).",
  "  * السماح بالوصول أو رفض العملية.",
  "  * بعد استيفاء الشروط فقط، تتواصل مع حسابك البنكي الفعلي لخصم المبلغ."
] };
window.TOC_AR["L3-S049"] = window.TOC_AR["L3"]["L3-S049"];

window.TOC_AR["L3"]["L3-S050"] = { ar: [
  "مخطط أصناف لغة النمذجة الموحدة لنمط الوكيل (Proxy Pattern - UML Class Diagram)",
  "- المكونات الأساسية في المخطط:",
  "  * الواجهة المعيارية (Subject Interface): تحدد الدوال المشتركة لكلا الصنفين.",
  "  * الكائن الحقيقي (Real Subject): الصنف الأصلي المنفذ للخدمة الأساسية الحساسة.",
  "  * الوكيل (Proxy): الصنف البديل الذي يحقق نفس الواجهة ويحتفظ بمرجع داخلي للكائن الحقيقي.",
  "  * العميل (Client): يتعامل فقط مع واجهة Subject دون أن يدري إن كان الكائن وكيلاً أم حقيقياً."
] };
window.TOC_AR["L3-S050"] = window.TOC_AR["L3"]["L3-S050"];

window.TOC_AR["L3"]["L3-S051"] = { ar: [
  "مخطط أصناف نظام الحساب البنكي (Proxy Design Pattern Example - Banking System)",
  "المشارك (Participant) | المسؤولية البرمجية (Responsibility)",
  "- العميل (Client) | يستخدم الخدمة المصرفية للسحب المالي.",
  "- الواجهة (IBankAccount) | الواجهة المشتركة التي تعرف عقد دالة السحب Withdraw().",
  "- صنف الوكيل (BankAccountProxy) | يتحقق من مصادقة الهوية ويتحكم بالوصول للكائن الفعلي.",
  "- الكائن الحقيقي (BankAccount) | ينفذ عملية السحب المالي الفعلية ويعدل الرصيد.",
  "- علاقات المخطط:",
  "  * العميل ──> يعتمد على IBankAccount",
  "  * كلا من BankAccount و BankAccountProxy ──▷ يحققان IBankAccount",
  "  * BankAccountProxy ──> يمتلك مرجعاً لـ BankAccount (علاقة Has-A)"
] };
window.TOC_AR["L3-S051"] = window.TOC_AR["L3"]["L3-S051"];

window.TOC_AR["L3"]["L3-S052"] = { ar: [
  "الخطوتان الأولى والثانية: واجهة الموضوع والكائن الحقيقي (Subject Interface & Real Subject)",
  "- الخطوة 1: إنشاء واجهة الموضوع (IBankAccount):",
  "```csharp",
  "public interface IBankAccount",
  "{",
  "    void Withdraw(double amount);",
  "}",
  "```",
  "- الخطوة 2: إنشاء الكائن الحقيقي (BankAccount):",
  "```csharp",
  "public class BankAccount : IBankAccount",
  "{",
  "    private double _balance = 1000;",
  "",
  "    public void Withdraw(double amount)",
  "    {",
  "        if (amount <= _balance)",
  "        {",
  "            _balance -= amount;",
  "            Console.WriteLine(\"Withdrawn: $\" + amount + \", Remaining Balance: $\" + _balance);",
  "        }",
  "        else",
  "        {",
  "            Console.WriteLine(\"Insufficient funds!\");",
  "        }",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L3-S052"] = window.TOC_AR["L3"]["L3-S052"];

window.TOC_AR["L3"]["L3-S053"] = { ar: [
  "الخطوة الثالثة: إنشاء صنف الوكيل بلغة C# (Step 3 – Create the Proxy)",
  "```csharp",
  "public class BankAccountProxy : IBankAccount",
  "{",
  "    private BankAccount _realAccount;",
  "    private bool _isAuthenticated;",
  "",
  "    public BankAccountProxy(string password)",
  "    {",
  "        // التحقق من صحة كلمة المرور لضبط المصادقة",
  "        if (password == \"secret123\")",
  "            _isAuthenticated = true;",
  "        else",
  "            _isAuthenticated = false;",
  "    }",
  "",
  "    public void Withdraw(double amount)",
  "    {",
  "        if (!_isAuthenticated)",
  "        {",
  "            Console.WriteLine(\"Access Denied: Invalid Authentication!\");",
  "            return;",
  "        }",
  "",
  "        if (_realAccount == null)",
  "            _realAccount = new BankAccount(); // التحميل الكسول (Lazy Loading)",
  "",
  "        _realAccount.Withdraw(amount);",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L3-S053"] = window.TOC_AR["L3"]["L3-S053"];

window.TOC_AR["L3"]["L3-S054"] = { ar: [
  "إرشادات وضوابط استخدام نمط الوكيل (Proxy Pattern Usage Guidelines)",
  "- متى يجب استخدام نمط الوكيل (Proxy)؟",
  "  1. للتحكم في الوصول إلى كائن حساس أو حمايته أمنياً (Access Control & Security).",
  "  2. لتأجيل إنشاء الكائنات الثقيلة والمكلفة برمجياً لحين الحاجة إليها (Lazy Loading).",
  "  3. لتخزين نتائج العمليات المكلفة مؤقتاً لتسريع الاستجابة (Caching).",
  "  4. لتسجيل وتتبع العمليات وطلبات الوصول (Logging & Monitoring).",
  "  5. لتمثيل كائنات تعمل على خوادم بعيدة عبر الشبكة بشفافية (Remote Services).",
  "- متى يجب تجنب استخدام نمط الوكيل؟",
  "  1. إذا كان الوصول المباشر للكائن مقبولاً وآمناً ولا يحتاج لأي رقابة.",
  "  2. إذا لم تكن هناك حاجة لأي معالجة إضافية أو تدقيق مسبق.",
  "  3. إذا كان الكائن خفيف الحجم ورخيص التكلفة في الذاكرة ولا يحتاج لتحميل كسول.",
  "  4. إذا كان إضافة الوكيل سيزيد من تعقيد النظام بلا عائد وظيفي ملموس.",
  "- الخلاصة المعمارية: استخدم الوكيل فقط عندما تحتاج لضبط، تحسين، أو تأمين الوصول إلى كائن آخر."
] };
window.TOC_AR["L3-S054"] = window.TOC_AR["L3"]["L3-S054"];

window.TOC_AR["L3"]["L3-S055"] = { ar: [
  "نمط المزخرف (Decorator Pattern)",
  "شريحة عنوان فاصلة للنمط الهيكلي الرابع: نمط المزخرف (Decorator Pattern)."
] };
window.TOC_AR["L3-S055"] = window.TOC_AR["L3"]["L3-S055"];

window.TOC_AR["L3"]["L3-S056"] = { ar: [
  "نمط المزخرف (Decorator Pattern)",
  "- يسمح نمط المزخرف بإضافة سلوك ومسؤوليات جديدة لكائن معين بشكل ديناميكي أثناء وقت التشغيل (Dynamically at runtime) دون تعديل شيفرته المصدرية الأصلية.",
  "- بدلاً من تعديل الصنف الأصلي أو اللجوء للوراثة المعقدة، تتم إضافة الميزات عبر تغليف الكائن (Wrapping) داخل كائن مزخرف أو أكثر.",
  "- النتيجة: الكائن يحتفظ بهويته الأصلية مع اكتسابه قدرات إضافية مرنة."
] };
window.TOC_AR["L3-S056"] = window.TOC_AR["L3"]["L3-S056"];

window.TOC_AR["L3"]["L3-S057"] = { ar: [
  "دوافع نمط المزخرف: محرر النصوص (Decorator Pattern Motivation - Text Editor)",
  "- السيناريو الواقعي التوضيحي:",
  "- تخيل أنك تبني محرر نصوص يشبه Microsoft Word.",
  "- في البداية، يدعم المحرر عرض النصوص العادية فقط (Plain Text):",
  "  * Hello World",
  "- لاحقاً، طلب المستخدمون خيارات تنسيق إضافية:",
  "  * خط عريض (Bold)",
  "  * خط مائل (Italic)",
  "  * سطر سفلي (Underline)",
  "  * تمييز لوني (Highlight)",
  "- السؤال المعماري الحاسم: هل يجب علينا تعديل صنف النص الأصلي في كل مرة نطلب فيها خيار تنسيق جديد؟",
  "- الإجابة القاطعة: بالتأكيد لا."
] };
window.TOC_AR["L3-S057"] = window.TOC_AR["L3"]["L3-S057"];

window.TOC_AR["L3"]["L3-S058"] = { ar: [
  "معضلة الانفجار التوافقي (Decorator Pattern Problem - Combinations)",
  "- لنفترض أن لدينا كائن نص عادي: Hello World.",
  "- يريد المستخدمون تطبيق تركيبات وتوافيق مختلفة من التنسيقات:",
  "  * خط عريض فقط (Bold)",
  "  * خط مائل فقط (Italic)",
  "  * سطر سفلي فقط (Underline)",
  "  * خط عريض + مائل (Bold + Italic)",
  "  * خط عريض + سطر سفلي (Bold + Underline)",
  "  * خط مائل + سطر سفلي (Italic + Underline)",
  "  * خط عريض + مائل + سطر سفلي (Bold + Italic + Underline)",
  "- عدد التركيبات المحتملة يتزايد بشكل أسي تضاعفي (Combinatorial Explosion).",
  "- النقاش المعماري: هل يعقل أن ننشئ صنفاً برمجياً مستقلاً لكل تركيبة محتملة؟ قطعاً لا."
] };
window.TOC_AR["L3-S058"] = window.TOC_AR["L3"]["L3-S058"];

window.TOC_AR["L3"]["L3-S059"] = { ar: [
  "الحل السيئ: محاولة حل المشكلة بالوراثة (Bad Solution - Inheritance)",
  "- محاولة استخدام شجرة الوراثة لحل المشكلة:",
  "  * الصنف الأب: PlainText",
  "  * الأبناء المباشرون: BoldText, ItalicText, UnderlineText",
  "- لتغطية التوافيق، سنضطر لاشتقاق أصناف إضافية:",
  "  * BoldItalicText",
  "  * BoldUnderlineText",
  "  * ItalicUnderlineText",
  "  * BoldItalicUnderlineText",
  "- المشاكل القاتلة لهذا الحل:",
  "  1. انفجار هائل في عدد الأصناف الفرعية (Too many subclasses).",
  "  2. صعوبة بالغة في الصيانة والتعديل (Difficult maintenance).",
  "  3. صعوبة التوسع وإضافة ميزات جديدة.",
  "  4. انتهاك صريح لمبدأ المفتوح/المغلق (Violates Open/Closed Principle)."
] };
window.TOC_AR["L3-S059"] = window.TOC_AR["L3"]["L3-S059"];

window.TOC_AR["L3"]["L3-S060"] = { ar: [
  "الحل الأنيق: استخدام نمط المزخرف (Decorator Pattern Solution)",
  "- الحل المعماري الموصى به: تطبيق نمط المزخرف.",
  "- بنية التغليف المتداخل:",
  "  * العميل (Client)",
  "    │",
  "    ▼",
  "  * المزخرف الخارجي: مزخرف التسطير (UnderlineDecorator)",
  "    │ يغلف",
  "    ▼",
  "  * المزخرف الأوسط: المزخرف المائل (ItalicDecorator)",
  "    │ يغلف",
  "    ▼",
  "  * المزخرف الداخلي: المزخرف العريض (BoldDecorator)",
  "    │ يغلف",
  "    ▼",
  "  * الكائن الأساسي الأصلي: النص العادي (PlainText)",
  "- الفكرة الجوهرية: كل مزخرف يضيف مسؤولية واحدة محددة فقط (Single Responsibility)."
] };
window.TOC_AR["L3-S060"] = window.TOC_AR["L3"]["L3-S060"];

window.TOC_AR["L3"]["L3-S061"] = { ar: [
  "مخطط ومشاركو نمط المزخرف (Decorator Pattern Participants & UML)",
  "المشارك (Participant) | المسؤولية البرمجية (Responsibility)",
  "- الواجهة المشتركة (IText) | العقد المعياري الذي يحدد دالة Render().",
  "- المكون الملموس (PlainText) | الكائن الأساسي الأصلي الذي يحمل البيانات.",
  "- المزخرف الأساسي (TextDecorator) | صنف مجرد يحقق الواجهة ويحتفظ بمرجع لكائن IText.",
  "- المزخرفات الملموسة (Concrete Decorators) | الأصناف التي تضيف ميزات التنسيق (Bold, Italic, Underline).",
  "- هيكل مخطط UML:",
  "  * IText ──▷ ينفذه PlainText و TextDecorator",
  "  * TextDecorator ──> يمتلك مرجعاً لـ IText (علاقة تركيب Has-A)",
  "  * BoldDecorator و ItalicDecorator و UnderlineDecorator ──▷ يرثون من TextDecorator"
] };
window.TOC_AR["L3-S061"] = window.TOC_AR["L3"]["L3-S061"];

window.TOC_AR["L3"]["L3-S062"] = { ar: [
  "مخطط أصناف وبنية الذاكرة لنمط المزخرف (Decorator Pattern - UML Class Diagram & Memory)",
  "- مخطط UML يوضح:",
  "  * الواجهة المعيارية: IText بدالة `+ Render(): string`.",
  "  * الصنف الأصلي: PlainText بدالة `+ Render()`.",
  "  * الصنف الأساسي: TextDecorator يحتوي على `protected IText _text` وينفذ `Render()` بالتفويض.",
  "  * الأصناف المشتقة: BoldDecorator و ItalicDecorator و UnderlineDecorator تتجاوز `Render()` لإضافة وسوم التنسيق.",
  "- بنية الذاكرة العنقودية:",
  "  * كل مزخرف يشير إلى كائن IText الذي يليه في الذاكرة وصولاً إلى PlainText."
] };
window.TOC_AR["L3-S062"] = window.TOC_AR["L3"]["L3-S062"];

window.TOC_AR["L3"]["L3-S063"] = { ar: [
  "الخطوتان الأولى والثانية: واجهة المكون والمكون الملموس (Component Interface & Concrete Component)",
  "- الخطوة 1: واجهة المكون (IText):",
  "```csharp",
  "public interface IText",
  "{",
  "    string Render();",
  "}",
  "```",
  "- الخطوة 2: المكون الملموس الأصلي (PlainText):",
  "```csharp",
  "public class PlainText : IText",
  "{",
  "    private readonly string _content;",
  "",
  "    public PlainText(string content)",
  "    {",
  "        _content = content;",
  "    }",
  "",
  "    public string Render()",
  "    {",
  "        return _content;",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L3-S063"] = window.TOC_AR["L3"]["L3-S063"];

window.TOC_AR["L3"]["L3-S064"] = { ar: [
  "الخطوة الثالثة: صنف المزخرف الأساسي (Step 3 – Base Decorator Class)",
  "- الصنف الأساسي المجرد للمزخرفات (TextDecorator):",
  "```csharp",
  "public abstract class TextDecorator : IText",
  "{",
  "    protected readonly IText _text;",
  "",
  "    public TextDecorator(IText text)",
  "    {",
  "        _text = text;",
  "    }",
  "",
  "    public virtual string Render()",
  "    {",
  "        return _text.Render(); // التفويض الافتراضي للمكون الداخلي",
  "    }",
  "}",
  "```",
  "- خصائص معمارية هامة:",
  "  * الصنف مجرد (abstract) ولا يمكن إنشاء كائنات منه مباشرة.",
  "  * يطبق الواجهة IText ويحتفظ بمرجع داخلي لكائن IText.",
  "  * يقوم بالتفويض الافتراضي لدالة Render()."
] };
window.TOC_AR["L3-S064"] = window.TOC_AR["L3"]["L3-S064"];

window.TOC_AR["L3"]["L3-S065"] = { ar: [
  "الخطوتان الرابعة والخامسة: المزخرفات الملموسة (Steps 4 & 5 – Concrete Decorators)",
  "- الخطوة 4: مزخرف الخط العريض (BoldDecorator):",
  "```csharp",
  "public class BoldDecorator : TextDecorator",
  "{",
  "    public BoldDecorator(IText text) : base(text) { }",
  "",
  "    public override string Render()",
  "    {",
  "        return \"<b>\" + base.Render() + \"</b>\";",
  "    }",
  "}",
  "```",
  "- الخطوة 5: مزخرف الخط المائل (ItalicDecorator):",
  "```csharp",
  "public class ItalicDecorator : TextDecorator",
  "{",
  "    public ItalicDecorator(IText text) : base(text) { }",
  "",
  "    public override string Render()",
  "    {",
  "        return \"<i>\" + base.Render() + \"</i>\";",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L3-S065"] = window.TOC_AR["L3"]["L3-S065"];

window.TOC_AR["L3"]["L3-S066"] = { ar: [
  "كود العميل وتركيب المزخرفات بالتداخل (Decorator Pattern Example - Client Code)",
  "```csharp",
  "class Program",
  "{",
  "    static void Main()",
  "    {",
  "        // 1. إنشاء كائن النص العادي",
  "        IText text = new PlainText(\"Hello World\");",
  "        Console.WriteLine(text.Render()); // Hello World",
  "",
  "        // 2. إضافة التنسيق العريض ديناميكياً",
  "        IText boldText = new BoldDecorator(text);",
  "        Console.WriteLine(boldText.Render()); // <b>Hello World</b>",
  "",
  "        // 3. دمج وتركيب عدة تنسيقات معاً بسلسلة واحدة",
  "        IText multiDecorated = new UnderlineDecorator(",
  "                                   new ItalicDecorator(",
  "                                       new BoldDecorator(text)));",
  "        Console.WriteLine(multiDecorated.Render()); // <u><i><b>Hello World</b></i></u>",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L3-S066"] = window.TOC_AR["L3"]["L3-S066"];

window.TOC_AR["L3"]["L3-S067"] = { ar: [
  "إرشادات وضوابط استخدام نمط المزخرف (Decorator Pattern Usage Guidelines)",
  "- متى يجب استخدام نمط المزخرف (Decorator)؟",
  "  1. عندما تحتاج إلى إضافة مسؤوليات وسلوكيات إضافية لكائن ما بشكل ديناميكي دون التأثير على سائر الكائنات الأخرى.",
  "  2. لتجنب الانفجار التوافقي والتضخم الهائل في عدد الأصناف الفرعية الناجم عن الوراثة (Avoid Subclass Explosion).",
  "  3. عندما تتطلب متطلبات النظام تركيبات وتوافيق متعددة ومتغيرة من الخصائص.",
  "  4. لتوسيع وتطوير كائنات الأصناف المغلقة للتعديل دون كسر مبدأ Open/Closed Principle.",
  "  5. عندما تكون الميزات قابلة للإضافة والإزالة بشكل مستقل في وقت التشغيل.",
  "- متى يجب تجنب استخدام نمط المزخرف؟",
  "  1. إذا كان سلوك الصنف ثابتاً تماماً ولا يحتاج لأي تغييرات أو إضافات مستقبلية.",
  "  2. إذا كانت الوراثة البسيطة كافية وتحل المشكلة بصنف أو صنفين فقط دون تعقيد.",
  "  3. إذا كان المطلوب تنويعاً واحداً ثابتاً للكائن ولا توجد احتمالات للتوافيق.",
  "  4. إذا كانت إضافة طبقات المزخرفات ستجعل تتبع وتصحيح الأخطاء (Debugging) معقداً بلا داعٍ.",
  "- الخلاصة المعمارية: استخدم المزخرف عندما تحتاج لتمديد وتوسيع سلوك الكائنات بمرونة ديناميكية في وقت التشغيل."
] };
window.TOC_AR["L3-S067"] = window.TOC_AR["L3"]["L3-S067"];
