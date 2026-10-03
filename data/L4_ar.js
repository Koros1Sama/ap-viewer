/* الترجمة العربية لسلايدات الوحدة 4: أنماط التصميم السلوكية
   المدرس: د. بيداء لعلع — 36 شريحة كاملة (L4-S001 إلى L4-S036)
   معيار: 100% SVG line-art · صفر إيموجيات
*/
window.TOC_AR = window.TOC_AR || {};
window.TOC_AR["L4"] = window.TOC_AR["L4"] || {};

window.TOC_AR["L4"]["L4-S001"] = { ar: [
  "البرمجة المتقدمة (Advanced Programming)",
  "المحاضرة 4 (Lecture 4)",
  "أنماط التصميم السلوكية (Behavioral Design Patterns)"
] };
window.TOC_AR["L4-S001"] = window.TOC_AR["L4"]["L4-S001"];

window.TOC_AR["L4"]["L4-S002"] = { ar: [
  "نمط الاستراتيجية (Strategy Pattern)"
] };
window.TOC_AR["L4-S002"] = window.TOC_AR["L4"]["L4-S002"];

window.TOC_AR["L4"]["L4-S003"] = { ar: [
  "نمط الاستراتيجية (Strategy Pattern)",
  "- نمط الاستراتيجية هو نمط تصميم سلوكي يعرّف عائلة من الخوارزميات، ويغلّف كل واحدة منها في صنف منفصل، ويجعلها قابلة للتبديل في وقت التشغيل (interchangeable at runtime).",
  "- بدلاً من كتابة جميع الخوارزميات داخل صنف واحد، يتم وضع كل خوارزمية في صنفها الخاص.",
  "- يمكن للعميل (client) اختيار الخوارزمية التي سيستخدمها أثناء تشغيل البرنامج."
] };
window.TOC_AR["L4-S003"] = window.TOC_AR["L4"]["L4-S003"];

window.TOC_AR["L4"]["L4-S004"] = { ar: [
  "الدافع (Motivation)",
  "- تخيل أنك تطور نظام تسوق عبر الإنترنت (Online Shopping System).",
  "- يمكن للعملاء الدفع باستخدام:",
  "  * فيزا (Visa)",
  "  * ماستركارد (MasterCard)",
  "  * بايبال (PayPal)",
  "  * أبل باي (Apple Pay)",
  "  * نقداً (Cash)",
  "- عملاء مختلفون يفضلون طرق دفع مختلفة.",
  "- كيف ينبغي لنا تصميم نظام الدفع؟"
] };
window.TOC_AR["L4-S004"] = window.TOC_AR["L4"]["L4-S004"];

window.TOC_AR["L4"]["L4-S005"] = { ar: [
  "صنف خدمة الدفع (PaymentService)",
  "```csharp",
  "public class PaymentService",
  "{",
  "    public void Pay(string paymentType, double amount)",
  "    {",
  "        if (paymentType == \"Visa\")",
  "        {",
  "            Console.WriteLine(\"Paid using Visa\");",
  "        }",
  "        else if (paymentType == \"PayPal\")",
  "        {",
  "            Console.WriteLine(\"Paid using PayPal\");",
  "        }",
  "        else if (paymentType == \"ApplePay\")",
  "        {",
  "            Console.WriteLine(\"Paid using Apple Pay\");",
  "        }",
  "        else if (paymentType == \"Cash\")",
  "        {",
  "            Console.WriteLine(\"Paid using Cash\");",
  "        }",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L4-S005"] = window.TOC_AR["L4"]["L4-S005"];

window.TOC_AR["L4"]["L4-S006"] = { ar: [
  "مشاكل هذا الحل (Problems with This Solution)",
  "- افترض أننا أضفنا غداً:",
  "  * جوجل باي (Google Pay)",
  "  * سامسونج باي (Samsung Pay)",
  "  * العملات الرقمية (Cryptocurrency)",
  "- كل طريقة دفع جديدة تتطلب تعديل الصنف نفسه.",
  "- المشاكل (Problems):",
  "  * انتهاك مبدأ المفتوح/المغلق (Violates the Open/Closed Principle - OCP)",
  "  * جمل شرطية كبيرة (Large if-else statements)",
  "  * اختبار صعب (Difficult testing)",
  "  * صيانة صعبة (Difficult maintenance)",
  "  * صعوبة في التوسعة (Hard to extend)"
] };
window.TOC_AR["L4-S006"] = window.TOC_AR["L4"]["L4-S006"];

window.TOC_AR["L4"]["L4-S007"] = { ar: [
  "فكرة نمط الاستراتيجية (Strategy Pattern Idea)",
  "- بدلاً من وضع جميع خوارزميات الدفع في صنف واحد،",
  "- أنشئ صنفاً واحداً لكل طريقة دفع.",
  "  Payment Strategy",
  "  ▲",
  "  ┌─────────────┼─────────────┐",
  "  │             │             │",
  "  Visa        PayPal       ApplePay",
  "- كل صنف يطبق نفس الواجهة (same interface).",
  "- يختار التطبيق ببساطة الاستراتيجية المناسبة."
] };
window.TOC_AR["L4-S007"] = window.TOC_AR["L4"]["L4-S007"];

window.TOC_AR["L4"]["L4-S008"] = { ar: [
  "نمط الاستراتيجية – مخطط أصناف UML (Strategy Pattern – UML Class Diagram)",
  "- واجهة استراتيجية الدفع (<<interface>> IPaymentStrategy):",
  "  * `+ Pay(amount: double): void`",
  "- الاستراتيجيات الملموسة التي تطبق الواجهة (Concrete Strategies):",
  "  * VisaPayment: `+ Pay(amount: double): void`",
  "  * PayPalPayment: `+ Pay(amount: double): void`",
  "  * ApplePayPayment: `+ Pay(amount: double): void`",
  "  * CashPayment: `+ Pay(amount: double): void`",
  "- صنف السياق ShoppingCart (Context):",
  "  * حقل خاص: `- strategy: IPaymentStrategy`",
  "  * منشئ الصنف: `+ ShoppingCart(strategy: IPaymentStrategy)`",
  "  * دالة إتمام الدفع: `+ Checkout(amount: double): void`",
  "- العميل (Client):",
  "  * يرتبط بصنف ShoppingCart بعلاقة تبعية (dashed arrow).",
  "- العلاقات في المخطط:",
  "  * علاقة تحقيق/تنفيذ (Realization - خط متقطع ومثلث مجوف) من الأصناف الملموسة الأربعة إلى واجهة IPaymentStrategy.",
  "  * علاقة تجميع (Aggregation - ماسة سوداء) تربط صنف ShoppingCart بواجهة IPaymentStrategy."
] };
window.TOC_AR["L4-S008"] = window.TOC_AR["L4"]["L4-S008"];

window.TOC_AR["L4"]["L4-S009"] = { ar: [
  "بنية نمط الاستراتيجية (Structure of Strategy Pattern)",
  "- يتألف نمط الاستراتيجية من ثلاثة مشاركين رئيسيين (three main participants):",
  "  1. الاستراتيجية (Strategy):",
  "     - واجهة تعرّف الخوارزمية (An interface that defines the algorithm).",
  "     - مثال: IPaymentStrategy",
  "  2. الاستراتيجية الملموسة (Concrete Strategy):",
  "     - تطبيقات وتنفيذات مختلفة للخوارزمية (Different implementations of the algorithm).",
  "     - أمثلة: VisaPayment, PayPalPayment, CashPayment"
] };
window.TOC_AR["L4-S009"] = window.TOC_AR["L4"]["L4-S009"];

window.TOC_AR["L4"]["L4-S010"] = { ar: [
  "3. السياق (Context)",
  "- الصنف الذي يستخدم الاستراتيجية المختارة (The class that uses the selected strategy).",
  "- مثال: ShoppingCart",
  "- السياق لا يعرف كيف تعمل عملية الدفع (The Context does not know how payment works).",
  "- هو فقط يعرف أن كل استراتيجية دفع توفر دالة ()Pay."
] };
window.TOC_AR["L4-S010"] = window.TOC_AR["L4"]["L4-S010"];

window.TOC_AR["L4"]["L4-S011"] = { ar: [
  "الخطوة 1 – واجهة الاستراتيجية (Step 1 – Strategy Interface)",
  "```csharp",
  "public interface IPaymentStrategy",
  "{",
  "    void Pay(double amount);",
  "}",
  "```"
] };
window.TOC_AR["L4-S011"] = window.TOC_AR["L4"]["L4-S011"];

window.TOC_AR["L4"]["L4-S012"] = { ar: [
  "الخطوة 2 – الاستراتيجيات الملموسة (Step 2 – Concrete Strategies)",
  "```csharp",
  "public class VisaPayment : IPaymentStrategy",
  "{",
  "    public void Pay(double amount)",
  "    {",
  "        Console.WriteLine($\"Paid ${amount} using Visa.\");",
  "    }",
  "}",
  "```",
  "```csharp",
  "public class PayPalPayment : IPaymentStrategy",
  "{",
  "    public void Pay(double amount)",
  "    {",
  "        Console.WriteLine($\"Paid ${amount} using PayPal.\");",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L4-S012"] = window.TOC_AR["L4"]["L4-S012"];

window.TOC_AR["L4"]["L4-S013"] = { ar: [
  "الخطوة 3 – صنف السياق (Step 3 – Context Class)",
  "```csharp",
  "public class ShoppingCart",
  "{",
  "    private readonly IPaymentStrategy strategy;",
  "",
  "    public ShoppingCart(IPaymentStrategy strategy)",
  "    {",
  "        this.strategy = strategy;",
  "    }",
  "",
  "    public void Checkout(double amount)",
  "    {",
  "        strategy.Pay(amount);",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L4-S013"] = window.TOC_AR["L4"]["L4-S013"];

window.TOC_AR["L4"]["L4-S014"] = { ar: [
  "كود العميل (Client Code)",
  "```csharp",
  "class Program",
  "{",
  "    static void Main()",
  "    {",
  "        ShoppingCart cart =",
  "            new ShoppingCart(new VisaPayment());",
  "",
  "        cart.Checkout(100);",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L4-S014"] = window.TOC_AR["L4"]["L4-S014"];

window.TOC_AR["L4"]["L4-S015"] = { ar: [
  "استخدم نمط الاستراتيجية عندما: (Use Strategy Pattern when:)",
  "- تحل خوارزميات متعددة نفس المشكلة (Multiple algorithms solve the same problem).",
  "- تتغير الخوارزميات بشكل متكرر (Algorithms change frequently).",
  "- تريد تجنب جمل if-else أو switch.",
  "- يجب أن تكون الخوارزميات قابلة للتبديل في وقت التشغيل (Algorithms should be interchangeable at runtime).",
  "- يتطلب عملاء مختلفون سلوكيات مختلفة (Different clients require different behaviors).",
  "أمثلة (Examples):",
  "- بوابات الدفع (Payment gateways)",
  "- حساب تكلفة الشحن (Shipping cost calculation)",
  "- حساب الضرائب (Tax calculation)",
  "- ضغط البيانات (Data compression)",
  "- خوارزميات الترتيب (Sorting algorithms)",
  "- طرق المصادقة (Authentication methods)"
] };
window.TOC_AR["L4-S015"] = window.TOC_AR["L4"]["L4-S015"];

window.TOC_AR["L4"]["L4-S016"] = { ar: [
  "نمط المراقب (Observer Pattern)"
] };
window.TOC_AR["L4-S016"] = window.TOC_AR["L4"]["L4-S016"];

window.TOC_AR["L4"]["L4-S017"] = { ar: [
  "الدافع (Motivation)",
  "- تخيل:",
  "  * إشعارات فيسبوك (Facebook Notifications)",
  "  * مشتركو يوتيوب (YouTube Subscribers)",
  "  * تطبيقات الطقس (Weather Applications)",
  "  * تطبيقات سوق الأسهم (Stock Market Apps)",
  "- كلما تغير شيء ما...",
  "- يجب أن يعرف كل مهتم تلقائياً.",
  "- دون الاتصال بالجميع يدوياً.",
  "- هذا بالضبط ما يفعله نمط المراقب (Observer)."
] };
window.TOC_AR["L4-S017"] = window.TOC_AR["L4"]["L4-S017"];

window.TOC_AR["L4"]["L4-S018"] = { ar: [
  "مثال من الواقع (Real Life Example)",
  "- قناة يوتيوب (YouTube Channel):",
  "  * أنت تشترك في قناة.",
  "  * عندما يتم رفع فيديو جديد:",
  "    - تتلقى إشعاراً على الفور.",
  "  * القناة لا تعرف هويتك شخصياً.",
  "  * هي تعرف فقط:",
  "    \"أخطر جميع المشتركين.\" (\"Notify all subscribers.\")",
  "- هذا هو نمط المراقب (Observer Pattern)."
] };
window.TOC_AR["L4-S018"] = window.TOC_AR["L4"]["L4-S018"];

window.TOC_AR["L4"]["L4-S019"] = { ar: [
  "السيناريو (Scenario)",
  "- تخيل مقهى حديثاً. يقوم العميل بتقديم طلب. في البداية، تكون حالة الطلب:",
  "  * قيد الإعداد... (Preparing...)",
  "- بعد بضع دقائق، ينتهي صانع القهوة (barista) من إعداد المشروب. تتغير حالة الطلب إلى:",
  "  * جاهز (Ready)",
  "- بمجرد أن يصبح الطلب جاهزاً (Ready)، يجب إخطار عدة أنظمة تلقائياً:",
  "  * شاشة عرض الطلبات (Order Display Screen)",
  "  * تطبيق الهاتف للعميل (Customer Mobile App)",
  "  * خدمة إشعارات الرسائل القصيرة (SMS Notification Service)",
  "  * خدمة إشعارات البريد الإلكتروني (Email Notification Service)",
  "  * نظام التحليلات (Analytics System)",
  "- لا ينبغي للمقهى الاتصال بكل خدمة يدوياً.",
  "- بدلاً من ذلك، يعلن ببساطة: \"الطلب جاهز.\" (\"The order is ready.\")",
  "- يتلقى كل نظام مهتم الإشعار تلقائياً.",
  "- هذا بالضبط ما يفعله نمط المراقب (Observer Pattern)."
] };
window.TOC_AR["L4-S019"] = window.TOC_AR["L4"]["L4-S019"];

window.TOC_AR["L4"]["L4-S020"] = { ar: [
  "المشكلة (The Problem)",
  "- بدون نمط المراقب، قد يبدو الكود هكذا:",
  "```csharp",
  "public class CoffeeShop",
  "{",
  "    private OrderDisplay display = new();",
  "    private SmsService sms = new();",
  "    private MobileApp app = new();",
  "    private AnalyticsService analytics = new();",
  "",
  "    public void OrderReady(string orderNumber)",
  "    {",
  "        display.Update(orderNumber);",
  "        sms.Send(orderNumber);",
  "        app.Notify(orderNumber);",
  "        analytics.Save(orderNumber);",
  "    }",
  "}",
  "```",
  "المشاكل (Problems):",
  "- ترابط وثيق (Tight coupling)",
  "- صعوبة إضافة خدمات جديدة (Difficult to add new services)",
  "- كل إشعار جديد يتطلب تعديل صنف CoffeeShop",
  "- ينتهك مبدأ المفتوح/المغلق (Violates the Open/Closed Principle)"
] };
window.TOC_AR["L4-S020"] = window.TOC_AR["L4"]["L4-S020"];

window.TOC_AR["L4"]["L4-S021"] = { ar: [
  "الحل (The Solution)",
  "- بدلاً من معرفة كل خدمة، يحتفظ المقهى (Coffee Shop) بقائمة من المراقبين فقط.",
  "- كلما أصبح الطلب جاهزاً:",
  "  Notify All Observers (إخطار جميع المراقبين)",
  "- كل مراقب يقرر ما يجب فعله."
] };
window.TOC_AR["L4-S021"] = window.TOC_AR["L4"]["L4-S021"];

window.TOC_AR["L4"]["L4-S022"] = { ar: [
  "نمط المراقب (Observer Pattern)",
  "- يعرّف نمط المراقب تبعية واحد-إلى-متعدد (one-to-many dependency) بين الكائنات بحيث عندما تتغير حالة كائن واحد، يتم إخطار جميع الكائنات المعتمدة عليه تلقائياً."
] };
window.TOC_AR["L4-S022"] = window.TOC_AR["L4"]["L4-S022"];

window.TOC_AR["L4"]["L4-S023"] = { ar: [
  "المشاركون (Participants)",
  "1. الموضوع (Subject):",
  "   - CoffeeOrder",
  "   - مسؤول عن:",
  "     * تسجيل المراقبين (Register observers)",
  "     * حذف المراقبين (Remove observers)",
  "     * إخطار المراقبين (Notify observers)",
  "2. المراقب (Observer):",
  "   - IObserver",
  "   - يعرّف دالة ()Update.",
  "3. المراقبون الملموسون (Concrete Observers):",
  "   - OrderDisplay",
  "   - CustomerApp",
  "   - SmsService",
  "   - EmailService",
  "   - AnalyticsService",
  "   - كل مراقب ينفذ إجراءً مختلفاً بعد تلقي الإشعار."
] };
window.TOC_AR["L4-S023"] = window.TOC_AR["L4"]["L4-S023"];

window.TOC_AR["L4"]["L4-S024"] = { ar: [
  "نمط المراقب – مخطط أصناف UML (Observer Pattern – UML Class Diagram)",
  "- تبعية واحد-إلى-متعدد بين الموضوع والمراقبين (One-to-Many dependency between Subject and Observers)",
  "- واجهة المراقب (<<interface>> Observer):",
  "  * `+ Update() : void`",
  "- المراقبون الملموسون (ConcreteObserverA, ConcreteObserverB, ConcreteObserverC, ConcreteObserverN):",
  "  * حقل الحالة: `- observerState: State`",
  "  * الدالة: `+ Update() : void`",
  "- صنف الموضوع (Subject):",
  "  * الحقول: `- observers: List<Observer>`, `- subjectState: State`",
  "  * الدوال:",
  "    + Attach(o: Observer) : void",
  "    + Detach(o: Observer) : void",
  "    + Notify() : void",
  "    + SetState(s: State) : void",
  "    + GetState() : State",
  "- ملاحظة الموضوع (Subject Note):",
  "  * يحتفظ بقائمة من المراقبين. عندما تتغير حالته، يخطر جميع المراقبين المسجلين.",
  "- دليل الرموز (Legend):",
  "  * مثلث فارغ: وراثة/تحقيق (Inheritance / implements)",
  "  * خط متصل: اقتران (Association)",
  "  * ماسة سوداء: تجميع (Aggregation / has-a)",
  "  * 1: واحد (One)",
  "  * *: متعدد (Many)"
] };
window.TOC_AR["L4-S024"] = window.TOC_AR["L4"]["L4-S024"];

window.TOC_AR["L4"]["L4-S025"] = { ar: [
  "نمط المراقب – مثال مقهى القهوة (Observer Pattern – Coffee Shop Example)",
  "مخطط أصناف UML (UML Class Diagram)",
  "- واجهة المراقب (<<interface>> IObserver):",
  "  * `+ Update(order: CoffeeOrder) : void`",
  "  * ملاحظة: تعرّف عملية Update التي يجب على جميع المراقبين الملموسين تنفيذها.",
  "- المراقبون الملموسون (Concrete Observers):",
  "  * OrderDisplay: `- displayId: string`, `+ Update(order: CoffeeOrder) : void`",
  "  * CustomerApp: `- userId: string`, `+ Update(order: CoffeeOrder) : void`",
  "  * SmsService: `- phoneNumber: string`, `+ Update(order: CoffeeOrder) : void`",
  "  * EmailService: `- email: string`, `+ Update(order: CoffeeOrder) : void`",
  "  * AnalyticsService: `- serviceName: string`, `+ Update(order: CoffeeOrder) : void`",
  "- صنف الموضوع CoffeeOrder (Subject):",
  "  * الحقول: `- observers: List<IObserver>`, `- orderNumber: string`, `- status: OrderStatus`",
  "  * الدوال:",
  "    + Attach(observer: IObserver) : void",
  "    + Detach(observer: IObserver) : void",
  "    + Notify() : void",
  "    + SetStatus(status: OrderStatus) : void",
  "  * ملاحظة: CoffeeOrder هو الموضوع (Subject). يحتفظ بقائمة من المراقبين ويخطرهم كلما تغيرت حالة الطلب."
] };
window.TOC_AR["L4-S025"] = window.TOC_AR["L4"]["L4-S025"];

window.TOC_AR["L4"]["L4-S026"] = { ar: [
  "الخطوة 1 — إنشاء واجهة المراقب (Step 1 — Create the Observer Interface)",
  "```csharp",
  "public interface IObserver",
  "{",
  "    void Update(string orderNumber);",
  "}",
  "```"
] };
window.TOC_AR["L4-S026"] = window.TOC_AR["L4"]["L4-S026"];

window.TOC_AR["L4"]["L4-S027"] = { ar: [
  "الخطوة 2 — إنشاء الموضوع (Step 2 — Create the Subject)",
  "```csharp",
  "public class CoffeeOrder",
  "{",
  "    private List<IObserver> observers = new();",
  "",
  "    public void Attach(IObserver observer)",
  "    {",
  "        observers.Add(observer);",
  "    }",
  "",
  "    public void Detach(IObserver observer)",
  "    {",
  "        observers.Remove(observer);",
  "    }",
  "",
  "    public void Notify(string orderNumber)",
  "    {",
  "        foreach (var observer in observers)",
  "        {",
  "            observer.Update(orderNumber);",
  "        }",
  "    }",
  "",
  "    public void OrderReady(string orderNumber)",
  "    {",
  "        Console.WriteLine($\"Order {orderNumber} is ready.\");",
  "",
  "        Notify(orderNumber);",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L4-S027"] = window.TOC_AR["L4"]["L4-S027"];

window.TOC_AR["L4"]["L4-S028"] = { ar: [
  "الخطوة 3 — إنشاء المراقبين (Step 3 — Create Observers)",
  "شاشة العرض (Order Display)",
  "```csharp",
  "public class OrderDisplay : IObserver",
  "{",
  "    public void Update(string orderNumber)",
  "    {",
  "        Console.WriteLine($\"Display: Order {orderNumber} is ready.\");",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L4-S028"] = window.TOC_AR["L4"]["L4-S028"];

window.TOC_AR["L4"]["L4-S029"] = { ar: [
  "تطبيق الهاتف للعميل (Customer Mobile App)",
  "```csharp",
  "public class CustomerApp : IObserver",
  "{",
  "    public void Update(string orderNumber)",
  "    {",
  "        Console.WriteLine($\"Mobile App: Your order {orderNumber} is ready.\");",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L4-S029"] = window.TOC_AR["L4"]["L4-S029"];

window.TOC_AR["L4"]["L4-S030"] = { ar: [
  "خدمة الرسائل القصيرة (SMS Service)",
  "```csharp",
  "public class SmsService : IObserver",
  "{",
  "    public void Update(string orderNumber)",
  "    {",
  "        Console.WriteLine($\"SMS sent for order {orderNumber}.\");",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L4-S030"] = window.TOC_AR["L4"]["L4-S030"];

window.TOC_AR["L4"]["L4-S031"] = { ar: [
  "خدمة التحليلات (Analytics Service)",
  "```csharp",
  "public class AnalyticsService : IObserver",
  "{",
  "    public void Update(string orderNumber)",
  "    {",
  "        Console.WriteLine($\"Analytics updated for order {orderNumber}.\");",
  "    }",
  "}",
  "```"
] };
window.TOC_AR["L4-S031"] = window.TOC_AR["L4"]["L4-S031"];

window.TOC_AR["L4"]["L4-S032"] = { ar: [
  "كود العميل (Client Code)",
  "```csharp",
  "CoffeeOrder order = new CoffeeOrder();",
  "",
  "order.Attach(new OrderDisplay());",
  "order.Attach(new CustomerApp());",
  "order.Attach(new SmsService());",
  "order.Attach(new AnalyticsService());",
  "",
  "order.OrderReady(\"A102\");",
  "```"
] };
window.TOC_AR["L4-S032"] = window.TOC_AR["L4"]["L4-S032"];

window.TOC_AR["L4"]["L4-S033"] = { ar: [
  "إضافة مراقب جديد (Adding a New Observer)",
  "- افترض أن المدير يريد إرسال رسائل بريد إلكتروني كلما كان الطلب جاهزاً.",
  "- أنشئ مراقباً جديداً (Create a new observer):",
  "```csharp",
  "public class EmailService : IObserver",
  "{",
  "    public void Update(string orderNumber)",
  "    {",
  "        Console.WriteLine($\"Email sent for order {orderNumber}.\");",
  "    }",
  "}",
  "```",
  "- سجّله (Register it):",
  "```csharp",
  "order.Attach(new EmailService());",
  "```",
  "- ملاحظة: يبقى صنف CoffeeOrder دون أي تغيير. هذا يوضح مبدأ المفتوح/المغلق (Open/Closed Principle)."
] };
window.TOC_AR["L4-S033"] = window.TOC_AR["L4"]["L4-S033"];

window.TOC_AR["L4"]["L4-S034"] = { ar: [
  "جدول مقارنة الأنماط (Pattern Comparison Table)",
  "النمط (Pattern) | الفئة (Category) | المشكلة (Problem) | الحل (Solution) | مبادئ SOLID | الفكرة الجوهرية (Key Idea)",
  "- Singleton | Creational | إنشاء نسخ متعددة من صنف قد يسبب سلوكاً غير متسق أو هدراً في الموارد | ضمان وجود نسخة واحدة فقط وتوفير نقطة وصول عامة | SRP, OCP (عند استخدامه بشكل مناسب) | كائن واحد مشترك للتطبيق بأكمله.",
  "- Factory Method | Creational | كود العميل يعتمد على أصناف ملموسة ويجب عليه تحديد أي كائن سينشئه | تفويض إنشاء الكائن إلى دالة مصنع تعيد تجريداً | OCP, DIP | إنشاء كائنات دون كشف الأصناف الملموسة.",
  "- Adapter | Structural | الأصناف الحالية تمتلك واجهات غير متوافقة ولا يمكنها العمل معاً | تحويل واجهة إلى واجهة أخرى يتوقعها العميل | OCP, DIP | جعل الأصناف غير المتوافقة تتعاون معاً.",
  "- Facade | Structural | نظام فرعي معقد ويصعب على العملاء استخدامه مباشرة | توفير واجهة بسيطة وموحدة للنظام الفرعي | SRP, DIP | إخفاء التعقيد خلف نقطة دخول واحدة.",
  "- Decorator | Structural | الحاجة لسلوكيات جديدة دون تعديل الأصناف الحالية أو إنشاء فئات فرعية كثيرة | تغليف كائن بأصناف مزخرفة تضيف مسؤوليات ديناميكياً | OCP, SRP | إضافة وظائف في وقت التشغيل.",
  "- Proxy | Structural | يجب التحكم في الوصول المباشر إلى كائن، أو تأجيله، أو تأمينه | وضع كائن وكيل بين العميل والكائن الحقيقي | OCP, SRP | التحكم في الوصول إلى كائن آخر.",
  "- Observer | Behavioral | كائنات كثيرة تحتاج لأن تُخطر تلقائياً عند تغير حالة كائن آخر | الاحتفاظ بقائمة من المراقبين وإخطارهم كلما تغير الموضوع | OCP, DIP | إخطار تلقائي من نمط واحد-إلى-متعدد.",
  "- Strategy | Behavioral | توجد خوارزميات متعددة ويجب على العميل التبديل بينها دون تغيير كوده | تغليف كل خوارزمية في صنف استراتيجية منفصل واختيار واحدة وقت التشغيل | OCP, DIP | استبدال الخوارزميات ديناميكياً."
] };
window.TOC_AR["L4-S034"] = window.TOC_AR["L4"]["L4-S034"];

window.TOC_AR["L4"]["L4-S035"] = { ar: [
  "سؤال بسيط تسأله لنفسك (Easy Question to Ask Yourself)",
  "النمط (Pattern) | سؤال بسيط تسأله لنفسك (Easy Question to Ask Yourself)",
  "- Singleton | هل يجب أن تكون هناك نسخة واحدة فقط؟ (Should there be only one instance?)",
  "- Factory Method | من الذي ينبغي عليه إنشاء الكائن؟ (Who should create the object?)",
  "- Adapter | هل يمكن لهذين الصنفين غير المتوافقين العمل معاً؟ (Can these two incompatible classes work together?)",
  "- Facade | هل يمكنني إخفاء هذا النظام الفرعي المعقد؟ (Can I hide this complex subsystem?)",
  "- Decorator | هل يمكنني إضافة ميزات دون تعديل الصنف؟ (Can I add features without modifying the class?)",
  "- Proxy | هل ينبغي التحكم في الوصول إلى هذا الكائن؟ (Should access to this object be controlled?)",
  "- Observer | هل يجب إخطار عدة كائنات عندما يتغير شيء ما؟ (Should many objects be notified when something changes?)",
  "- Strategy | هل يمكنني تغيير الخوارزمية في وقت التشغيل؟ (Can I change the algorithm at runtime?)"
] };
window.TOC_AR["L4-S035"] = window.TOC_AR["L4"]["L4-S035"];

window.TOC_AR["L4"]["L4-S036"] = { ar: [
  "الأنماط ومبادئ SOLID (Patterns and SOLID Principles)",
  "مبدأ SOLID | الأنماط المطبقة (Patterns That Apply) | لماذا؟ (Why?)",
  "- SRP (المسؤولية الأحادية) | Singleton, Facade, Decorator, Proxy | كل صنف يمتلك مسؤولية واحدة محددة جيداً.",
  "- OCP (المفتوح/المغلق) | Factory Method, Adapter, Decorator, Proxy, Observer, Strategy | تتم إضافة السلوك الجديد عبر توسيع الأصناف بدلاً من تعديل الأصناف الحالية.",
  "- LSP (استبدال لسكوف) | Factory Method, Decorator, Proxy, Strategy | الأصناف المشتقة أو التطبيقات يمكن أن تحل محل تجريداتها.",
  "- ISP (فصل الواجهات) | Observer, Strategy, Adapter | واجهات صغيرة ومركزة تمنع الاعتماديات غير الضرورية.",
  "- DIP (عكس التبعية) | Factory Method, Adapter, Facade, Observer, Strategy | العملاء يعتمدون على التجريدات بدلاً من التطبيقات الملموسة."
] };
window.TOC_AR["L4-S036"] = window.TOC_AR["L4"]["L4-S036"];
