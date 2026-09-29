/* الترجمة العربية لسلايدات الوحدة 4: أنماط التصميم السلوكية
   المدرس: د. بيداء لعلع — 36 شريحة كاملة (L4-S001 إلى L4-S036)
   معيار: 100% SVG line-art · صفر إيموجيات
*/
window.TOC_AR = window.TOC_AR || {};
window.TOC_AR["L4"] = window.TOC_AR["L4"] || {};

window.TOC_AR["L4"]["L4-S001"] = { ar: [
  "البرمجة المتقدمة (Advanced Programming)",
  "المحاضرة الرابعة (Lecture 4)",
  "أنماط التصميم السلوكية (Behavioral Design Patterns)"
] };
window.TOC_AR["L4-S001"] = window.TOC_AR["L4"]["L4-S001"];

window.TOC_AR["L4"]["L4-S002"] = { ar: [
  "نمط الاستراتيجية (Strategy Pattern)",
  "شريحة عنوان فاصلة للنمط الأول من أنماط التصميم السلوكية."
] };
window.TOC_AR["L4-S002"] = window.TOC_AR["L4"]["L4-S002"];

window.TOC_AR["L4"]["L4-S003"] = { ar: [
  "نمط الاستراتيجية (Strategy Pattern)",
  "- نمط الاستراتيجية هو نمط تصميم سلوكي يعرّف عائلة من الخوارزميات (Family of algorithms)، ويغلف كل خوارزمية منها داخل صنف منفصل ومستقل، ويجعل هذه الخوارزميات قابلة للتبديل فيما بينها أثناء وقت التشغيل (Interchangeable at runtime).",
  "- بدلاً من حشر وكتابة كافة الخوارزميات داخل صنف واحد، يتم وضع كل خوارزمية في صنفها الخاص.",
  "- يمكن لكود العميل اختيار الخوارزمية التي يرغب في استخدامها ديناميكياً أثناء تشغيل البرنامج."
] };
window.TOC_AR["L4-S003"] = window.TOC_AR["L4"]["L4-S003"];

window.TOC_AR["L4"]["L4-S004"] = { ar: [
  "دوافع تصميم نظام الدفع (Motivation for Payment System Design)",
  "- السيناريو الواقعي:",
  "- تخيل أنك تطور نظاماً لمتجر إلكتروني عبر الإنترنت (Online Shopping System).",
  "- يمكن للعملاء والزبائن سداد قيمة مشترياتهم عبر طرق دفع متعددة:",
  "  * بطاقات فيزا (Visa)",
  "  * بطاقات ماستركارد (MasterCard)",
  "  * حسابات بايبال (PayPal)",
  "  * خدمة آبل باي (Apple Pay)",
  "  * الدفع نقداً عند الاستلام (Cash)",
  "- لكل زبون طريقته المفضلة في السداد.",
  "- السؤال المعماري الحاسم: كيف يجب علينا تصميم وبرمجة نظام الدفع ليتعامل مع هذا التنوع بمرونة؟"
] };
window.TOC_AR["L4-S004"] = window.TOC_AR["L4"]["L4-S004"];

window.TOC_AR["L4"]["L4-S005"] = { ar: [
  "الحل السيئ: صنف خدمة الدفع التقليدي (Strategy Pattern Example - Bad Solution)",
  "- كود صنف PaymentService باستخدام جمل الشرط التقليدية (if-else chain):",
  "- المشكلة البرمجية:",
  "  * تعتمد الدالة `Pay(string paymentType, double amount)` على سلسلة شروط متتالية.",
  "  * إذا كان paymentType يساوي Visa، ينفذ كود فيزا.",
  "  * وإلا إذا كان يساوي PayPal، ينفذ كود بايبال.",
  "  * وإلا إذا كان يساوي Cash، ينفذ كود الدفع النقدي.",
  "- هذا النهج شائع جداً بين المبرمجين المبتدئين لكنه بالغ الجمود والهشاشة وينتهك مبادئ التصميم النظيف."
] };
window.TOC_AR["L4-S005"] = window.TOC_AR["L4"]["L4-S005"];

window.TOC_AR["L4"]["L4-S006"] = { ar: [
  "مشاكل وعيوب هذا الحل (Problems with This Solution)",
  "- لنفترض أن إدارة الشركة طلبت منا غداً إضافة خيارات جديدة:",
  "  * قوقل باي (Google Pay)",
  "  * سامسونج باي (Samsung Pay)",
  "  * العملات الرقمية المشفرة (Cryptocurrency)",
  "- كل طريقة دفع جديدة ستجبرنا حتماً على فتح نفس الصنف وتعديل كوده الداخلي.",
  "- المشاكل والآثار السلبية المترتبة:",
  "  1. انتهاك صريح وفادح لمبدأ المفتوح/المغلق (Violates Open/Closed Principle - OCP).",
  "  2. كود متضخم مليء بجمل الشروط المعقدة والمتشابكة (Large if-else statements).",
  "  3. صعوبة بالغة في كتابة اختبارات الوحدة (Difficult unit testing).",
  "  4. صعوبة ومخاطر عالية في الصيانة والتعديل (Difficult maintenance).",
  "  5. انعدام المرونة وصعوبة التوسع وإضافة ميزات جديدة (Hard to extend)."
] };
window.TOC_AR["L4-S006"] = window.TOC_AR["L4"]["L4-S006"];

window.TOC_AR["L4"]["L4-S007"] = { ar: [
  "الفكرة الجوهرية لنمط الاستراتيجية (Strategy Pattern Core Idea)",
  "- الحل المعماري الرصين:",
  "- بدلاً من حشر كافة خوارزميات الدفع داخل صنف واحد، نقوم بإنشاء صنف مستقل ومخصص لكل طريقة دفع.",
  "- الهيكل المقترح:",
  "  * الواجهة المعيارية: استراتيجية الدفع (Payment Strategy Interface)",
  "    ▲",
  "    ┌─────────────┼─────────────┐",
  "    │             │             │",
  "    Visa        PayPal       ApplePay",
  "- كل صنف يحقق نفس الواجهة المشتركة.",
  "- التطبيق ببساطة يختار الاستراتيجية المطلوبة ويسندها للسياق دون أي شروط."
] };
window.TOC_AR["L4-S007"] = window.TOC_AR["L4"]["L4-S007"];

window.TOC_AR["L4"]["L4-S008"] = { ar: [
  "مخطط أصناف لغة النمذجة الموحدة لنمط الاستراتيجية (Strategy Pattern - UML Class Diagram)",
  "- المكونات الأساسية في المخطط:",
  "  * سياق الاستخدام (Context): صنف سلة التسوق (ShoppingCart).",
  "  * واجهة الاستراتيجية (Strategy Interface): الواجهة IPaymentStrategy بدالة `+ Pay(amount: double)`.",
  "  * الاستراتيجيات الملموسة (Concrete Strategies):",
  "    - صنف VisaPayment",
  "    - صنف PayPalPayment",
  "    - صنف CashPayment",
  "- العلاقات:",
  "  * ShoppingCart يمتلك مرجعاً لواجهة IPaymentStrategy (علاقة تركيب/اقتران).",
  "  * الأصناف الثلاثة تحقق واجهة IPaymentStrategy (علاقة Realization)."
] };
window.TOC_AR["L4-S008"] = window.TOC_AR["L4"]["L4-S008"];

window.TOC_AR["L4"]["L4-S009"] = { ar: [
  "هيكل ومشاركو نمط الاستراتيجية (Structure & Participants of Strategy Pattern)",
  "- يتألف نمط الاستراتيجية من ثلاثة مشاركين رئيسيين:",
  "  1. الاستراتيجية (Strategy):",
  "     - واجهة برمجية موحدة تحدد العقد المشترك للخوارزمية.",
  "     - مثال: الواجهة IPaymentStrategy.",
  "  2. الاستراتيجيات الملموسة (Concrete Strategies):",
  "     - تطبيقات وتنفيذات مختلفة ومتنوعة للخوارزمية.",
  "     - أمثلة: VisaPayment, PayPalPayment, CashPayment.",
  "  3. السياق (Context):",
  "     - الصنف المستفيد الذي يستخدم الاستراتيجية المختارة لتنفيذ مهمته.",
  "     - مثال: صنف سلة التسوق ShoppingCart."
] };
window.TOC_AR["L4-S009"] = window.TOC_AR["L4"]["L4-S009"];

window.TOC_AR["L4"]["L4-S010"] = { ar: [
  "دور صنف السياق في نمط الاستراتيجية (Strategy Pattern Context)",
  "- الصنف السياقي (Context Class - ShoppingCart):",
  "  * يمثل الصنف الذي يعتمد على الاستراتيجية المحددة لإنجاز مهمته.",
  "- خاصية معمارية جوهرية:",
  "  * صنف السياق لا يعرف على الإطلاق كيف تعمل عملية الدفع تفصيلياً (Does not know how payment works).",
  "  * كل ما يعرفه السياق هو أن أي استراتيجية دفع متوافقة توفر دالة تسمى: `Pay()`.",
  "- هذا التجريد الكامل يحرر السياق من التبعيات ويجعله منيعاً ضد التغييرات في بوابات الدفع."
] };
window.TOC_AR["L4-S010"] = window.TOC_AR["L4"]["L4-S010"];

window.TOC_AR["L4"]["L4-S011"] = { ar: [
  "الخطوة الأولى: إنشاء واجهة الاستراتيجية (Step 1 – Strategy Interface)",
  "- واجهة استراتيجية الدفع المعيارية:",
  "```csharp",
  "public interface IPaymentStrategy",
  "{",
  "    void Pay(double amount);",
  "}",
  "```",
  "- خصائص الواجهة البرمجية:",
  "  * تحدد العقد الذي يجب أن تلتزم به كافة طرق الدفع الحالية والمستقبلية.",
  "  * تعلن عن دالة وحيدة: `void Pay(double amount)` تأخذ المبلغ المالي المطلوب كمعامل."
] };
window.TOC_AR["L4-S011"] = window.TOC_AR["L4"]["L4-S011"];

window.TOC_AR["L4"]["L4-S012"] = { ar: [
  "الخطوة الثانية: إنشاء الاستراتيجيات الملموسة (Step 2 – Concrete Strategies)",
  "```csharp",
  "public class VisaPayment : IPaymentStrategy",
  "{",
  "    public void Pay(double amount)",
  "    {",
  "        Console.WriteLine(\"Paid $\" + amount + \" using Visa Card.\");",
  "    }",
  "}",
  "",
  "public class PayPalPayment : IPaymentStrategy",
  "{",
  "    public void Pay(double amount)",
  "    {",
  "        Console.WriteLine(\"Paid $\" + amount + \" using PayPal.\");",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L4-S012"] = window.TOC_AR["L4"]["L4-S012"];

window.TOC_AR["L4"]["L4-S013"] = { ar: [
  "الخطوة الثالثة: صنف السياق - سلة التسوق (Step 3 – Context Class)",
  "```csharp",
  "public class ShoppingCart",
  "{",
  "    private IPaymentStrategy _paymentStrategy;",
  "",
  "    // 1. التعيين عبر حقن المنشئ (Constructor Injection)",
  "    public ShoppingCart(IPaymentStrategy paymentStrategy)",
  "    {",
  "        _paymentStrategy = paymentStrategy;",
  "    }",
  "",
  "    // 2. إمكانية تبديل الاستراتيجية أثناء التشغيل (Setter Injection)",
  "    public void SetPaymentStrategy(IPaymentStrategy paymentStrategy)",
  "    {",
  "        _paymentStrategy = paymentStrategy;",
  "    }",
  "",
  "    public void Checkout(double amount)",
  "    {",
  "        _paymentStrategy.Pay(amount);",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L4-S013"] = window.TOC_AR["L4"]["L4-S013"];

window.TOC_AR["L4"]["L4-S014"] = { ar: [
  "كود العميل وتبديل الاستراتيجيات أثناء التشغيل (Strategy Pattern Example - Client Code)",
  "```csharp",
  "class Program",
  "{",
  "    static void Main()",
  "    {",
  "        // 1. الشراء باستخدام استراتيجية فيزا",
  "        ShoppingCart cart1 = new ShoppingCart(new VisaPayment());",
  "        cart1.Checkout(150); // Paid $150 using Visa Card.",
  "",
  "        // 2. الشراء باستخدام استراتيجية بايبال لنفس السلة أو سلة جديدة",
  "        ShoppingCart cart2 = new ShoppingCart(new PayPalPayment());",
  "        cart2.Checkout(200); // Paid $200 using PayPal.",
  "",
  "        // 3. تبديل الاستراتيجية لحظياً لنفس الكائن",
  "        cart1.SetPaymentStrategy(new PayPalPayment());",
  "        cart1.Checkout(50);  // Paid $50 using PayPal.",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L4-S014"] = window.TOC_AR["L4"]["L4-S014"];

window.TOC_AR["L4"]["L4-S015"] = { ar: [
  "حالات واستخدامات نمط الاستراتيجية (When to Use Strategy Pattern)",
  "- متى يجب استخدام نمط الاستراتيجية؟",
  "  1. عند وجود عدة خوارزميات أو حلول بديلة لحل نفس المسألة وتريد التبديل بينها بمرونة.",
  "  2. عندما تتغير الخوارزميات وتتطور وتتعدد بشكل مستمر ومتكرر.",
  "  3. للتخلص النهائي من جمل الشروط المعقدة والمتشابكة (Avoid if-else or switch chains).",
  "  4. عندما تحتاج إلى جعل الخوارزمية قابلة للتبديل ديناميكياً أثناء وقت التشغيل (Interchangeable at runtime).",
  "  5. عندما يتطلب عملاء مختلفون سلوكيات وحسابات متباينة لنفس العملية.",
  "- أمثلة وتطبيقات واقعية شهيرة لنمط الاستراتيجية:",
  "  * بوابات الدفع الإلكتروني (Payment Gateways).",
  "  * حساب تكاليف الشحن (Shipping Cost Calculation: أرامكس، فيدكس، دي إتش إل).",
  "  * احتساب الضرائب والرسوم (Tax Calculation بحسب قوانين كل دولة).",
  "  * خوارزميات ضغط البيانات (Data Compression: Zip, Rar, Gzip).",
  "  * خوارزميات الفرز والترتيب (Sorting Algorithms: QuickSort, MergeSort).",
  "  * طرق مصادقة وتسجيل دخول المستخدمين (Authentication: Password, OTP, Google OAuth, Biometric)."
] };
window.TOC_AR["L4-S015"] = window.TOC_AR["L4"]["L4-S015"];

window.TOC_AR["L4"]["L4-S016"] = { ar: [
  "نمط المراقب (Observer Pattern)",
  "شريحة عنوان فاصلة للنمط السلوكي الثاني: نمط المراقب (Observer Pattern)."
] };
window.TOC_AR["L4-S016"] = window.TOC_AR["L4"]["L4-S016"];

window.TOC_AR["L4"]["L4-S017"] = { ar: [
  "دوافع ومبررات نمط المراقب (Observer Pattern Motivation)",
  "- تخيل الأنظمة التفاعلية التالية في حياتنا اليومية:",
  "  * إشعارات فيسبوك (Facebook Notifications).",
  "  * مشتركو قنوات يوتيوب (YouTube Subscribers).",
  "  * تطبيقات الطقس وتحديثات درجات الحرارة (Weather Applications).",
  "  * تطبيقات البورصة وأسعار الأسهم (Stock Market Apps).",
  "- المبدأ المشترك بينها جميعاً:",
  "  * كلما حدث تغيير في حالة معينة (نشر منشور، رفع فيديو، تغير الطقس، هبوط سهم)...",
  "  * يجب على جميع المهتمين والمشتركين أن يعلموا بهذا التغيير فوراً وتلقائياً.",
  "  * دون الحاجة للاتصال بكل شخص يدوياً أو سؤاله في كل ثانية.",
  "- هذا هو بالضبط العمل التلقائي الذي ينجزه نمط المراقب (Observer)."
] };
window.TOC_AR["L4-S017"] = window.TOC_AR["L4"]["L4-S017"];

window.TOC_AR["L4"]["L4-S018"] = { ar: [
  "مثال واقعي: قناة يوتيوب والمشتركون (Observer Pattern Real Life Example)",
  "- قناة يوتيوب (YouTube Channel):",
  "  * تقوم بالاشتراك في قناة يوتيوب معينة وتفعيل زر التنبيهات.",
  "  * عندما يقوم صاحب القناة برفع فيديو جديد:",
  "    - تتلقى أنت وجميع المشتركين إشعاراً فورياً على هواتفكم فوراً.",
  "  * لاحظ أن صاحب القناة لا يعرف هويتك الشخصية ولا رقم هاتفك ولا أين تسكن.",
  "  * كل ما تعرفه القناة وتفعله هو أمر وحيد:",
  "    - «أرسل إشعاراً لكافة المشتركين المسجلين في قائمتي».",
  "- هذه هي الآلية الصريحة لنمط المراقب: فك الترابط التام بين الناشر والمشتركين."
] };
window.TOC_AR["L4-S018"] = window.TOC_AR["L4"]["L4-S018"];

window.TOC_AR["L4"]["L4-S019"] = { ar: [
  "سيناريو مقهى القهوة الحديث (Observer Pattern Scenario - Coffee Shop)",
  "- سيناريو برمجي واقعي لتطبيق النمط:",
  "- تخيل مقهى عصرياً يطلب فيه الزبون كوباً من القهوة.",
  "- في البداية، تكون حالة الطلب (Order Status): «قيد التحضير» (Preparing...).",
  "- بعد دقائق، ينتهي صانع القهوة (Barista) من إعداد المشروب، وتتغير حالة الطلب إلى: «جاهز» (Ready).",
  "- بمجرد تحول حالة الطلب إلى «جاهز»، يجب إخطار وتحديث عدة أنظمة فرعية تلقائياً في نفس اللحظة:",
  "  1. شاشة عرض الطلبات المعلقة في المقهى (Order Display Screen).",
  "  2. تطبيق الهاتف المحمول الخاص بالزبون (Customer Mobile App).",
  "  3. خدمة إرسال الرسائل النصية القصيرة (SMS Notification Service).",
  "  4. خدمة إرسال البريد الإلكتروني (Email Notification Service).",
  "  5. نظام التحليلات والإحصاءات للمقهى (Analytics System).",
  "- لا ينبغي لصانع القهوة أو صنف الطلب الاتصال بكل خدمة يدوياً.",
  "- بدلاً من ذلك، يعلن الطلب ببساطة: «الطلب جاهز»، فتقوم كافة الأنظمة المهتمة باستلام الإشعار والتصرف بناءً عليه تلقائياً."
] };
window.TOC_AR["L4-S019"] = window.TOC_AR["L4"]["L4-S019"];

window.TOC_AR["L4"]["L4-S020"] = { ar: [
  "المشكلة المعمارية: الترابط الوثيق في صنف المقهى (The Problem with Tight Coupling in CoffeeShop Class)",
  "- بدون تطبيق نمط المراقب، يكتب كود صنف CoffeeShop أو الطلب كالتالي:",
  "  * يمتلك مراجع مباشرة للأصناف الخمسة.",
  "  * يستدعي كل خدمة يدوياً بالاسم داخل دالة إتمام الطلب.",
  "- الكوارث المعمارية المترتبة:",
  "  1. ترابط وثيق ومفرط (Tight coupling) بين صنف الطلب وجميع خدمات الإشعار.",
  "  2. صعوبة بالغة في إضافة أي خدمة إشعار جديدة مستقبلاً.",
  "  3. كل إضافة أو تعديل لخدمة إشعار يجبر المطور على فتح وتعديل صنف CoffeeShop.",
  "  4. انتهاك صريح لمبدأ المفتوح/المغلق (Violates Open/Closed Principle) ومبدأ المسؤولية الأحادية (SRP)."
] };
window.TOC_AR["L4-S020"] = window.TOC_AR["L4"]["L4-S020"];

window.TOC_AR["L4"]["L4-S021"] = { ar: [
  "حل نمط المراقب: القائمة الديناميكية (Observer Pattern Solution)",
  "- الحل المعماري لفك الترابط:",
  "- بدلاً من معرفة كل خدمة على حدة بالاسم، يحتفظ صنف الطلب بقائمة واحدة مجردة من المراقبين (List of Observers).",
  "- كلما تحول الطلب إلى حالة «جاهز» (Ready):",
  "  * يقوم الطلب بخطوة واحدة وحيدة: إخطار كافة المراقبين المسجلين في القائمة (Notify All Observers).",
  "- كل مراقب مسجل في القائمة يستقبل الإشعار وهو من يقرر بمفرده ما الذي يجب عليه فعله.",
  "- النتيجة: صنف الطلب مفصول تماماً عن تفاصيل وأنواع خدمات الإشعار."
] };
window.TOC_AR["L4-S021"] = window.TOC_AR["L4"]["L4-S021"];

window.TOC_AR["L4"]["L4-S022"] = { ar: [
  "التعريف الصارم لنمط المراقب (Observer Pattern Formal Definition)",
  "- نمط المراقب هو نمط تصميم سلوكي يعرّف علاقة تبعية من نمط «واحد إلى متعدد» (One-to-Many dependency) بين مجموعة من الكائنات.",
  "- بموجب هذه العلاقة:",
  "  * عندما تتغير الحالة الداخلية لكائن واحد (الموضوع - Subject)...",
  "  * يتم إخطار وتحديث كافة الكائنات التابعة له المعتمدة عليه (المراقبون - Observers) تلقائياً ودون تدخل يدوي.",
  "- الكلمات المفتاحية للتعريف:",
  "  * علاقة واحد إلى متعدد (One-to-Many).",
  "  * تحديث تلقائي (Notified and updated automatically)."
] };
window.TOC_AR["L4-S022"] = window.TOC_AR["L4"]["L4-S022"];

window.TOC_AR["L4"]["L4-S023"] = { ar: [
  "المشاركون في نمط المراقب (Observer Pattern Participants)",
  "- يتكون نمط المراقب من ثلاثة عناصر رئيسية:",
  "  1. الموضوع (Subject):",
  "     - صنف طلب القهوة (CoffeeOrder).",
  "     - مسؤول عن: تسجيل المراقبين الجدد (Register/Attach)، حذف المراقبين (Remove/Detach)، وإخطار المراقبين (Notify).",
  "  2. المراقب التجريدي (Observer Interface):",
  "     - الواجهة البرمجية الموحدة: IObserver.",
  "     - تحدد وتعلن عن دالة التحديث الإجبارية: Update().",
  "  3. المراقبون الملموسون (Concrete Observers):",
  "     - الأصناف المنفذة للواجهة: OrderDisplay, CustomerApp, SmsService, EmailService, AnalyticsService.",
  "     - ينفذ كل مراقب سلوكه الخاص عند استلام نداء التحديث."
] };
window.TOC_AR["L4-S023"] = window.TOC_AR["L4"]["L4-S023"];

window.TOC_AR["L4"]["L4-S024"] = { ar: [
  "مخطط أصناف لغة النمذجة الموحدة لنمط المراقب (Observer Pattern – UML Class Diagram)",
  "- بنية مخطط UML القياسي:",
  "  * الموضوع (Subject):",
  "    - يحتوي على قائمة خاصة: `observers: List<IObserver>`",
  "    - يحتوي على الدوال: `+ Attach(IObserver)`, `+ Detach(IObserver)`, `+ Notify()`",
  "  * الواجهة (<<interface>> IObserver):",
  "    - تحتوي على الدالة التجريدية: `+ Update()`",
  "  * الموضوع الملموس (ConcreteSubject / CoffeeOrder): يرث من Subject ويغير حالته عبر `+ OrderReady()`",
  "  * المراقبون الملموسون (ConcreteObserver): يحققون IObserver وينفذون دالة `+ Update()`.",
  "- العلاقة بين Subject و IObserver: علاقة تجميع/تركيب بنهاية ماسية ورمز تعددية (0..*)."
] };
window.TOC_AR["L4-S024"] = window.TOC_AR["L4"]["L4-S024"];

window.TOC_AR["L4"]["L4-S025"] = { ar: [
  "مخطط هيكلية نظام مقهى القهوة (Observer Pattern – Coffee Shop Example Diagram)",
  "- مخطط معماري تطبيقي يوضح:",
  "  * صنف الطلب المركزي: CoffeeOrder (يمثل دور Subject).",
  "  * قائمة المشتركين المرتبطين به:",
  "    ├── OrderDisplay (شاشة العرض)",
  "    ├── CustomerApp (تطبيق الزبون)",
  "    ├── SmsService (خدمة الرسائل)",
  "    └── AnalyticsService (نظام التحليلات)",
  "- استدعاء دالة `OrderReady()` في CoffeeOrder يفعل تلقائياً استدعاء دالة `Update()` في الخدمات الأربع معاً."
] };
window.TOC_AR["L4-S025"] = window.TOC_AR["L4"]["L4-S025"];

window.TOC_AR["L4"]["L4-S026"] = { ar: [
  "الخطوة الأولى: إنشاء واجهة المراقب (Step 1 – Create the Observer Interface)",
  "- واجهة المراقب المعيارية بلغة C#:",
  "```csharp",
  "public interface IObserver",
  "{",
  "    void Update(string orderNumber);",
  "}",
  "```",
  "- خصائص الواجهة البرمجية:",
  "  * تحدد العقد الذي يجب أن يلتزم به أي نظام يرغب في استقبال تنبيهات الطلبات.",
  "  * تعلن عن دالة وحيدة: `void Update(string orderNumber)` تستقبل رقم الطلب كمعامل لتحديد المعاملة الجاهزة."
] };
window.TOC_AR["L4-S026"] = window.TOC_AR["L4"]["L4-S026"];

window.TOC_AR["L4"]["L4-S027"] = { ar: [
  "الخطوة الثانية: إنشاء صنف الموضوع - طلب القهوة (Step 2 – Create the Subject)",
  "```csharp",
  "public class CoffeeOrder",
  "{",
  "    private readonly List<IObserver> _observers = new List<IObserver>();",
  "    private readonly string _orderNumber;",
  "",
  "    public CoffeeOrder(string orderNumber)",
  "    {",
  "        _orderNumber = orderNumber;",
  "    }",
  "",
  "    // 1. تسجيل وإرفاق مراقب جديد",
  "    public void Attach(IObserver observer)",
  "    {",
  "        _observers.Add(observer);",
  "    }",
  "",
  "    // 2. إلغاء اشتراك مراقب",
  "    public void Detach(IObserver observer)",
  "    {",
  "        _observers.Remove(observer);",
  "    }",
  "",
  "    // 3. إخطار كافة المراقبين المسجلين",
  "    public void Notify()",
  "    {",
  "        foreach (var observer in _observers)",
  "        {",
  "            observer.Update(_orderNumber);",
  "        }",
  "    }",
  "",
  "    // دالة تغيير الحالة وإطلاق الحدث",
  "    public void OrderReady()",
  "    {",
  "        Console.WriteLine(\"Order \" + _orderNumber + \" is ready!\");",
  "        Notify();",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L4-S027"] = window.TOC_AR["L4"]["L4-S027"];

window.TOC_AR["L4"]["L4-S028"] = { ar: [
  "الخطوة الثالثة: إنشاء المراقبين - شاشة عرض الطلبات (Step 3 – Create Observers: Order Display)",
  "- المراقب الأول: شاشة العرض بالمحل (OrderDisplay):",
  "```csharp",
  "public class OrderDisplay : IObserver",
  "{",
  "    public void Update(string orderNumber)",
  "    {",
  "        Console.WriteLine(\"Display Screen: Order \" + orderNumber + \" is ready for pickup.\");",
  "    }",
  "}",
  "```",
  "- يطبق الصنف واجهة IObserver ويعرض في دالة Update رسالة موجهة للشاشة الكبيرة في صالة الاستلام."
] };
window.TOC_AR["L4-S028"] = window.TOC_AR["L4"]["L4-S028"];

window.TOC_AR["L4"]["L4-S029"] = { ar: [
  "الخطوة الثالثة: إنشاء المراقبين - تطبيق هاتف العميل (Step 3 – Create Observers: Customer App)",
  "- المراقب الثاني: تطبيق الهاتف المحمول (CustomerApp):",
  "```csharp",
  "public class CustomerApp : IObserver",
  "{",
  "    public void Update(string orderNumber)",
  "    {",
  "        Console.WriteLine(\"Mobile App: Push Notification -> Your order \" + orderNumber + \" is ready!\");",
  "    }",
  "}",
  "```",
  "- يطبق الصنف واجهة IObserver ويحاكي إرسال إشعار لحظي (Push Notification) لهاتف الزبون."
] };
window.TOC_AR["L4-S029"] = window.TOC_AR["L4"]["L4-S029"];

window.TOC_AR["L4"]["L4-S030"] = { ar: [
  "الخطوة الثالثة: إنشاء المراقبين - خدمة الرسائل القصيرة (Step 3 – Create Observers: SMS Service)",
  "- المراقب الثالث: خدمة رسائل SMS الخلوية (SmsService):",
  "```csharp",
  "public class SmsService : IObserver",
  "{",
  "    public void Update(string orderNumber)",
  "    {",
  "        Console.WriteLine(\"SMS Gateway: Sending SMS -> Order \" + orderNumber + \" is ready.\");",
  "    }",
  "}",
  "```",
  "- يطبق الصنف واجهة IObserver ويحاكي الاتصال ببوابة الرسائل القصيرة لإبلاغ الزبائن غير المتصلين بالإنترنت."
] };
window.TOC_AR["L4-S030"] = window.TOC_AR["L4"]["L4-S030"];

window.TOC_AR["L4"]["L4-S031"] = { ar: [
  "الخطوة الثالثة: إنشاء المراقبين - نظام التحليلات والإحصاءات (Step 3 – Create Observers: Analytics)",
  "- المراقب الرابع: نظام التحليلات للمقهى (AnalyticsService):",
  "```csharp",
  "public class AnalyticsService : IObserver",
  "{",
  "    public void Update(string orderNumber)",
  "    {",
  "        Console.WriteLine(\"Analytics System: Logging completion timestamp for order \" + orderNumber + \".\");",
  "    }",
  "}",
  "```",
  "- يطبق الصنف واجهة IObserver ويقوم بتسجيل الطابع الزمني لإنجاز الطلب لأغراض تقارير الأداء والمراقبة الإدارية."
] };
window.TOC_AR["L4-S031"] = window.TOC_AR["L4"]["L4-S031"];

window.TOC_AR["L4"]["L4-S032"] = { ar: [
  "كود العميل وتشغيل نظام المراقبين (Observer Pattern Example - Client Code)",
  "```csharp",
  "class Program",
  "{",
  "    static void Main()",
  "    {",
  "        // 1. إنشاء الموضوع (Subject)",
  "        CoffeeOrder order = new CoffeeOrder(\"ORD-101\");",
  "",
  "        // 2. إنشاء المراقبين وتسجيلهم في قائمة الطلب",
  "        order.Attach(new OrderDisplay());",
  "        order.Attach(new CustomerApp());",
  "        order.Attach(new SmsService());",
  "        order.Attach(new AnalyticsService());",
  "",
  "        // 3. إعلان جاهزية الطلب وبث الإشعارات لجميع المسجلين",
  "        order.OrderReady();",
  "    }",
  "}",
  "```",
  "- المخرجات في شاشة الكونسول:",
  "  * Order ORD-101 is ready!",
  "  * Display Screen: Order ORD-101 is ready for pickup.",
  "  * Mobile App: Push Notification -> Your order ORD-101 is ready!",
  "  * SMS Gateway: Sending SMS -> Order ORD-101 is ready.",
  "  * Analytics System: Logging completion timestamp for order ORD-101."
] };
window.TOC_AR["L4-S032"] = window.TOC_AR["L4"]["L4-S032"];

window.TOC_AR["L4"]["L4-S033"] = { ar: [
  "إضافة مراقب جديد وإثبات مبدأ OCP (Adding a New Observer - Demonstrating OCP)",
  "- متطلب إداري جديد:",
  "- يطلب مدير المقهى إرسال بريد إلكتروني تلقائياً للزبون فور جاهزية طلبه.",
  "- خطوات التنفيذ السلسة في ظل نمط المراقب:",
  "  1. إنشاء صنف مراقب جديد يحقق واجهة IObserver:",
  "```csharp",
  "public class EmailService : IObserver",
  "{",
  "    public void Update(string orderNumber)",
  "    {",
  "        Console.WriteLine(\"Email Service: Sent email confirmation for order \" + orderNumber);",
  "    }",
  "}",
  "```",
  "  2. تسجيله ببساطة في كود العميل: `order.Attach(new EmailService());`",
  "- البرهان المعماري الأهم: صنف CoffeeOrder ظل ثابتاً بدون تعديل حرف واحد (Remains unchanged)، مما يثبت التطبيق العملي الكامل لمبدأ Open/Closed Principle."
] };
window.TOC_AR["L4-S033"] = window.TOC_AR["L4"]["L4-S033"];

window.TOC_AR["L4"]["L4-S034"] = { ar: [
  "جدول المقارنة الشامل لكافة أنماط التصميم (Comprehensive Design Patterns Overview)",
  "النمط | الفئة | المشكلة التي يعالجها | الحل البرمجي | مبادئ SOLID المحققة | الفكرة الجوهرية",
  "- المنفرد (Singleton) | إنشائي | تعدد النسخ يهدر الموارد ويحدث تضارباً في الحالة | ضمان وجود نسخة وحيدة ونقطة وصول عالمية | SRP, OCP | كائن واحد مشترك للتطبيق بالكامل.",
  "- طريقة المصنع (Factory Method) | إنشائي | اعتماد العميل على أصناف ملموسة محددة مسبقاً | تفويض إنشاء الكائنات لدالة مصنع تعيد تجريداً | OCP, DIP | إنشاء الكائنات دون كشف أصنافها الملموسة.",
  "- المهايئ (Adapter) | هيكلي | عدم توافق الواجهات بين أصناف قائمة | تحويل واجهة إلى الواجهة التي يتوقعها العميل | OCP, DIP | جعل الأصناف غير المتوافقة تتعاون معاً.",
  "- الواجهة (Facade) | هيكلي | تعقيد النظام الفرعي وتشتت العميل بين أصنافه | توفير واجهة موحدة ومبسطة وعالية المستوى | SRP, DIP | إخفاء التعقيد خلف نقطة دخول وحيدة.",
  "- المزخرف (Decorator) | هيكلي | الحاجة لميزات إضافية مع تجنب انفجار الأصناف بالوراثة | تغليف الكائن ديناميكياً بمزخرفات تضيف مسؤوليات | OCP, SRP | إضافة وظائف وسلوكيات أثناء وقت التشغيل.",
  "- الوكيل (Proxy) | هيكلي | الحاجة للتحكم في الوصول أو تأجيل الإنشاء أو الحماية | وضع كائن بديل أو نائب بين العميل والكائن الحقيقي | OCP, SRP | التحكم والوساطة في الوصول إلى كائن آخر.",
  "- المراقب (Observer) | سلوكي | حاجة كائنات متعددة لمعرفة تغير حالة كائن آخر تلقائياً | إدارة قائمة مراقبين وبث إشعار Notify عند التغيير | OCP, DIP | إشعار تلقائي من نمط واحد إلى متعدد.",
  "- الاستراتيجية (Strategy) | سلوكي | وجود خوارزميات متعددة والحاجة للتبديل بينها بدون if-else | تغليف كل خوارزمية في صنف واختيارها وقت التشغيل | OCP, DIP | استبدال وتبديل الخوارزميات ديناميكياً."
] };
window.TOC_AR["L4-S034"] = window.TOC_AR["L4"]["L4-S034"];

window.TOC_AR["L4"]["L4-S035"] = { ar: [
  "مصفوفة الأسئلة التشخيصية لاختيار النمط (Design Pattern Decision Questions)",
  "النمط التصميمي | السؤال الذهبي البسيط الذي تسأله لنفسك لتحديده فوراً",
  "- المنفرد (Singleton) | هل يجب أن توجد نسخة وحيدة فقط من هذا الصنف في التطبيق بالكامل؟",
  "- طريقة المصنع (Factory Method) | من هو المسؤول عن إنشاء وتهيئة هذا الكائن وتحديد نوعه؟",
  "- المهايئ (Adapter) | هل يمكنني جعل هذين الصنفين غير المتوافقين يعملان معاً دون تعديلهما؟",
  "- الواجهة (Facade) | هل يمكنني إخفاء هذا النظام الفرعي المعقد وتبسيطه للعميل بواجهة واحدة؟",
  "- المزخرف (Decorator) | هل يمكنني إضافة ميزات وسلوكيات لهذا الكائن دون تعديل صنفه أو اللجوء للوراثة؟",
  "- الوكيل (Proxy) | هل يجب علي التحكم في الوصول إلى هذا الكائن أو تأجيل إنشائه أو تأمينه؟",
  "- المراقب (Observer) | هل ينبغي إخطار وتنبيه كائنات متعددة تلقائياً عندما يتغير شيء ما في هذا الكائن؟",
  "- الاستراتيجية (Strategy) | هل يمكنني تغيير وتبديل هذه الخوارزمية ديناميكياً أثناء وقت التشغيل؟"
] };
window.TOC_AR["L4-S035"] = window.TOC_AR["L4"]["L4-S035"];

window.TOC_AR["L4"]["L4-S036"] = { ar: [
  "أنماط التصميم ومبادئ SOLID الخمسة (Patterns and SOLID Principles Mapping)",
  "مبدأ SOLID | الأنماط التصميمية التي تحققه وتجسده | التعليل المعماري والبرمجي",
  "- مبدأ المسؤولية الأحادية (SRP) | Singleton, Facade, Decorator, Proxy | كل صنف يمتلك مسؤولية واحدة محددة ومبرراً وحيداً للتعديل.",
  "- مبدأ المفتوح/المغلق (OCP) | Factory Method, Adapter, Decorator, Proxy, Observer, Strategy | إضافة سلوكيات وميزات جديدة بتوسيع الأصناف دون تعديل الأكواد القائمة المستقرة.",
  "- مبدأ استبدال لسكوف (LSP) | Factory Method, Decorator, Proxy, Strategy | الأصناف المشتقة والتحقيقات الملموسة تحل محل تجريداتها وواجهاتها دون كسر سلوك البرنامج.",
  "- مبدأ فصل الواجهات (ISP) | Observer, Strategy, Adapter | استخدام واجهات برمجية صغيرة ومحددة ومركزة يمنع إجبار العميل على الاعتماد على دوال لا يحتاجها.",
  "- مبدأ عكس التبعية (DIP) | Factory Method, Adapter, Facade, Observer, Strategy | اعتماد كود العميل والأنظمة عالية المستوى على التجريدات (الواجهات) بدلاً من الأصناف الملموسة المنخفضة."
] };
window.TOC_AR["L4-S036"] = window.TOC_AR["L4"]["L4-S036"];
