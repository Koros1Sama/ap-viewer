/* الترجمة العربية لسلايدات الوحدة 1: أسس البرمجة المتقدمة ومبادئ SOLID
   المدرس: د. بيداء لعلع — 35 شريحة كاملة (L1-S001 إلى L1-S035)
   معيار: 100% SVG line-art · صفر إيموجيات
*/
window.TOC_AR = window.TOC_AR || {};
window.TOC_AR["L1"] = window.TOC_AR["L1"] || {};

window.TOC_AR["L1"]["L1-S001"] = { ar: [
  "البرمجة المتقدمة (Advanced Programming)",
  "المحاضرة الأولى (Lecture 1)"
] };
window.TOC_AR["L1-S001"] = window.TOC_AR["L1"]["L1-S001"];

window.TOC_AR["L1"]["L1-S002"] = { ar: [
  "لماذا ندرس هذا المقرر؟ (Why Are We Studying This Course?)",
  "- يبدأ العديد من الطلاب بتعلم البرمجة من خلال تطوير تطبيقات صغيرة وبسيطة مثل:",
  "  * آلة حاسبة (calculator)",
  "  * نظام درجات الطلاب (student grades system)",
  "  * نظام إدارة مكتبة (library management system)",
  "- في حين أن هذه المشاريع مفيدة لفهم أساسيات البرمجة، إلا أنها لا تعكس تعقيد أنظمة البرمجيات في العالم الحقيقي.",
  "- تطبيقات البرمجيات الحديثة مثل فيسبوك (Facebook)، وأمازون (Amazon)، والأنظمة المصرفية (banking systems)، وأنظمة معلومات الجامعات (university information systems) هي أنظمة واسعة النطاق (large-scale systems) تخدم ملايين المستخدمين وتعالج كميات هائلة من البيانات.",
  "- يتطلب تطوير مثل هذه الأنظمة مفاهيم برمجة متقدمة، وتقنيات تصميم برمجي فعالة، وفهماً قوياً لمبادئ هندسة البرمجيات."
] };
window.TOC_AR["L1-S002"] = window.TOC_AR["L1"]["L1-S002"];

window.TOC_AR["L1"]["L1-S003"] = { ar: [
  "لماذا ندرس هذا المقرر؟ (Why Are We Studying This Course?)",
  "- اليوم، لا تبحث الشركات فقط عن مبرمجين يمكنهم كتابة الكود البرمجي.",
  "- بل تسعى لتوظيف محترفين يمكنهم تصميم، وتطوير، وصيانة حلول برمجية معقدة.",
  "- تشمل هذه الأدوار الوظيفية:",
  "  * مهندسو البرمجيات (Software Engineers)",
  "  * مطورو الواجهات الخلفية (Backend Developers)",
  "  * معماريو الحلول (Solution Architects)",
  "  * مهندسو الذكاء الاصطناعي (AI Engineers)",
  "- للنجاح في هذه المسارات المهنية، يجب على الطلاب اكتساب مهارات برمجة متقدمة تمكنهم من بناء أنظمة برمجية:",
  "  * قابلة للتوسع (Scalable)",
  "  * فعالة وعالية الكفاءة (Efficient)",
  "  * آمنة (Secure)",
  "  * قابلة للصيانة (Maintainable)"
] };
window.TOC_AR["L1-S003"] = window.TOC_AR["L1"]["L1-S003"];

window.TOC_AR["L1"]["L1-S004"] = { ar: [
  "هدف المقرر (Course Goal)",
  "- تم تصميم هذا المقرر من أجل:",
  "  * تحويل الطلاب من مبرمجين إلى مهندسي برمجيات قادرين على بناء تطبيقات ذكية حديثة (modern intelligent applications).",
  "  * فهم كيفية تصميم وتطوير الأنظمة البرمجية الاحترافية ودمجها مع التقنيات الحديثة مثل:",
  "    - واجهات برمجة التطبيقات (APIs)",
  "    - الحوسبة السحابية (Cloud)",
  "    - الأتمتة (Automation)",
  "    - الذكاء الاصطناعي (Artificial Intelligence)"
] };
window.TOC_AR["L1-S004"] = window.TOC_AR["L1"]["L1-S004"];

window.TOC_AR["L1"]["L1-S005"] = { ar: [
  "خارطة طريق المقرر (Course Roadmap)",
  "- الوحدة الأولى: أسس البرمجة (Module 1 - Programming Foundations)",
  "  * البرمجة كائنية التوجه ومبادئ سوليد (OOP & SOLID)",
  "- الوحدة الثانية: الكود النظيف وإعادة الهيكلة وأنماط التصميم (Module 2 – Clean Code & Refactoring / Design Patterns)",
  "  * الكود النظيف وإعادة الهيكلة (Clean Code & Refactoring)",
  "  * أنماط التصميم (Design Patterns):",
  "    - الأنماط الإنشائية (Creational): Factory Method, Singleton",
  "    - الأنماط الهيكلية (Structural): Adapter, Facade, Proxy, Decorator",
  "    - الأنماط السلوكية (Behavioral): Strategy, Observer",
  "- الوحدة الثالثة: تطوير الواجهات الخلفية (Module 3 - Backend Development)",
  "  * العمارة النظيفة وحقن التبعيات (Clean Architecture & Dependency Injection)",
  "  * البرمجة غير المتزامنة، التزامن وتعدد الخيوط (Asynchronous Programming, Concurrency & Multithreading)",
  "  * إدارة الذاكرة (Memory Management)",
  "  * واجهات برمجة التطبيقات وخدمات RESTful (APIs & RESTful Services)",
  "- الوحدة الرابعة: الأنظمة الحديثة (Module 4 - Modern Systems)",
  "  * الخدمات المصغرة (Microservices)",
  "  * هندسة الذكاء الاصطناعي ونظم توليد الاسترجاع المعزز (AI Engineering & RAG)",
  "  * الأتمتة (Automation)"
] };
window.TOC_AR["L1-S005"] = window.TOC_AR["L1"]["L1-S005"];

window.TOC_AR["L1"]["L1-S006"] = { ar: [
  "نظام التقييم وتوزيع الدرجات (Assessment)",
  "- الواجبات والتكاليف (Assignments): 5%",
  "- العرض التقديمي (Presentation): 5%",
  "- الحضور والمواظبة (Attendance): 5%",
  "- المعمل / الجزء العملي (Lab): 20%",
  "- الامتحان النصفي (Midterm): 15%",
  "- الامتحان النهائي (Final): 50%"
] };
window.TOC_AR["L1-S006"] = window.TOC_AR["L1"]["L1-S006"];

window.TOC_AR["L1"]["L1-S007"] = { ar: [
  "المراجع والكتب المعتمدة (Books & References)",
  "- الكتب المرجعية (Books):",
  "  * كتاب Pro C# 12 with .NET 8",
  "  * كتاب Clean Code",
  "  * كتاب Clean Architecture",
  "  * كتاب Head First Design Patterns",
  "  * كتاب ASP.NET Core in Action",
  "- التوثيق والمواقع الإلكترونية (Documentation & References):",
  "  * التوثيق الرسمي لمنصة دوت نت من مايكروسوفت (Microsoft Learn .NET Documentation)",
  "  * التوثيق الرسمي للغة سي شارب (C# Documentation)",
  "  * موقع أنماط التصميم وإعادة الهيكلة: refactoring.guru/design-patterns",
  "  * موقع w3schools.com"
] };
window.TOC_AR["L1-S007"] = window.TOC_AR["L1"]["L1-S007"];

window.TOC_AR["L1"]["L1-S008"] = { ar: [
  "ما هي البرمجة؟ (What is Programming?)",
  "- البرمجة هي عملية إنشاء تعليمات يمكن للحاسوب تنفيذها (process of creating instructions that a computer can execute).",
  "- دورة العمل الأساسية: المدخلات ← المعالجة ← المخرجات (Input → Processing → Output)",
  "- مثال توضيحي (Example):",
  "  * درجات الطالب (Student Marks)",
  "  * ↓",
  "  * حساب المعدل (Calculate Average)",
  "  * ↓",
  "  * عرض المعدل التراكمي (Display GPA)",
  "- البرمجة تحل المشكلات من خلال كتابة الكود البرمجي (Programming solves problems through code)."
] };
window.TOC_AR["L1-S008"] = window.TOC_AR["L1"]["L1-S008"];

window.TOC_AR["L1"]["L1-S009"] = { ar: [
  "البرمجة المتقدمة (Advanced Programming)",
  "- تركز البرمجة المتقدمة على تصميم وتطوير أنظمة برمجية قابلة للتوسع، وقابلة للصيانة، وعالية الجودة.",
  "- تؤكد على معمارية البرمجيات (software architecture)، وممارسات الكود النظيف (clean code practices)، وأنماط التصميم (design patterns)، ومبادئ التطوير الحديثة.",
  "- الأهداف الرئيسية (Key Goals):",
  "  * جودة الكود (Code Quality): كتابة كود نظيف، ومقروء، وسهل الفهم.",
  "  * إعادة الاستخدام (Reusability): تطوير مكونات برمجية يمكن إعادة استخدامها عبر تطبيقات مختلفة.",
  "  * قابلية الصيانة (Maintainability): جعل تعديل البرمجيات وتحسينها بمرور الوقت أكثر سهولة.",
  "  * القابلية للتوسع (Scalability): تصميم أنظمة قادرة على التعامل مع تزايد أعداد المستخدمين وأعباء العمل.",
  "  * القابلية للامتداد (Extensibility): إضافة ميزات جديدة بأقل قدر ممكن من التأثير على الكود القائم."
] };
window.TOC_AR["L1-S009"] = window.TOC_AR["L1"]["L1-S009"];

window.TOC_AR["L1"]["L1-S010"] = { ar: [
  "منصة دوت نت (.NET)",
  "- .NET هي منصة لتطوير البرمجيات أنشأتها Microsoft لبناء أنواع مختلفة من التطبيقات.",
  "- توفر المنصة ما يلي (It provides):",
  "  * بيئة تشغيل (Runtime Environment)",
  "  * مكتبات برمجية (Libraries)",
  "  * أدوات تطوير (Development Tools)",
  "- أنواع التطبيقات التي تُبنى باستخدام منصة .NET:",
  "  * تطبيقات الويب (Web Applications)",
  "  * تطبيقات سطح المكتب (Desktop Applications)",
  "  * تطبيقات الهواتف المحمولة (Mobile Applications)",
  "  * الخدمات السحابية (Cloud Services)",
  "  * تطبيقات الذكاء الاصطناعي (AI Applications)"
] };
window.TOC_AR["L1-S010"] = window.TOC_AR["L1"]["L1-S010"];

window.TOC_AR["L1"]["L1-S011"] = { ar: [
  "محرك تشغيل اللغة المشتركة (Common Language Runtime - CLR)",
  "- يعد محرك CLR محرك التنفيذ الأساسي لمنصة .NET. وهو يدير تنفيذ البرنامج ويوفر خدمات وقت التشغيل الجوهرية لضمان عمل التطبيقات بأمان وكفاءة.",
  "- المسؤوليات الرئيسية لمحرك CLR (Main Responsibilities of CLR):",
  "  * جمع القمامة وإدارة الذاكرة (Garbage Collection - GC):",
  "    - يدير الذاكرة تلقائياً (Automatically manages memory).",
  "    - يزيل الكائنات غير المستخدمة من الذاكرة (Removes unused objects from memory).",
  "    - يمنع تسريب الذاكرة ويحسن الأداء (Prevents memory leaks and improves performance).",
  "  * سلامة الأنواع والتحقق (Type Safety & Verification):",
  "    - يضمن استخدام المتغيرات والكائنات بالشكل الصحيح.",
  "    - يمنع التحويلات غير الصالحة بين الأنواع (Prevents invalid type conversions).",
  "    - يعزز موثوقية التطبيق وأمانه (Enhances application reliability and security).",
  "  * معالجة الاستثناءات (Exception Handling):",
  "    - يوفر طريقة مهيكلة لاكتشاف الأخطاء ومعالجتها (Provides a structured way to detect and handle errors).",
  "    - يمنع انهيارات التطبيق غير المتوقعة (Prevents unexpected application crashes).",
  "    - يحسن استقرار وثبات النظام (Improves system stability)."
] };
window.TOC_AR["L1-S011"] = window.TOC_AR["L1"]["L1-S011"];

window.TOC_AR["L1"]["L1-S012"] = { ar: [
  "البرمجة كائنية التوجه: الصنف مقابل الكائن (Object Oriented Programming)",
  "- الصنف (The Class - The Blueprint / المخطط):",
  "  * يمثل المخطط الهندسي أو القالب الذي يحدد بنية البيانات والعمليات.",
  "  ```csharp",
  "  class Student {",
  "      public string Name;",
  "      public void Register() { }",
  "  }",
  "  ```",
  "- الكائن (The Object - The Instance / النسخة المادية الملموسة):",
  "  * يمثل النسخة المادية الملموسة المحجوزة في الذاكرة انطلاقاً من المخطط (كما يُبنى صرح الجامعة الفعلي استناداً إلى المخطط الهندسي الورقي).",
  "  ```csharp",
  "  Student s = new Student();",
  "  s.Name = \"Ahmed\";",
  "  s.Register();",
  "  ```"
] };
window.TOC_AR["L1-S012"] = window.TOC_AR["L1"]["L1-S012"];

window.TOC_AR["L1"]["L1-S013"] = { ar: [
  "مبادئ البرمجة كائنية التوجه (Principles of OOP)",
  "- الكبسلة (Encapsulation) = إخفاء البيانات داخل الأصناف (Hide data inside classes).",
  "- التجريد (Abstraction) = إظهار ما هو ضروري فقط (Show only what’s necessary).",
  "- الوراثة (Inheritance) = إعادة استخدام ميزات الصنف الأب (Reuse parent features).",
  "- تعددية الأشكال (Polymorphism) = نفس الدالة، بسلوك مختلف (Same method, different behavior).",
  "- تساعدنا هذه المفاهيم في بناء برمجيات تكون أسهل في الصيانة والتوسيع (easier to maintain and extend)."
] };
window.TOC_AR["L1-S013"] = window.TOC_AR["L1"]["L1-S013"];

window.TOC_AR["L1"]["L1-S014"] = { ar: [
  "الكبسلة (Encapsulation)",
  "- الكبسلة (Encapsulation): الكبسلة هي فعلياً الخطوة الأولى في البرمجة كائنية التوجه. إنها تجمع متغيرات البيانات ذات الصلة (وتسمى الخصائص properties) والدوال (وتسمى methods) في وحدات فردية (تسمى كائنات objects) لتقليل تعقيد الكود المصدري وزيادة قابليته لإعادة الاستخدام.",
  "- مثال برمجي لصنف الحساب البنكي (BankAccount Code Example):",
  "  ```csharp",
  "  class BankAccount",
  "  {",
  "      private decimal balance;",
  "",
  "      public void Deposit(decimal amount)",
  "      {",
  "          if (amount > 0)",
  "              balance += amount;",
  "      }",
  "",
  "      public void Withdraw(decimal amount)",
  "      {",
  "          if (amount <= balance)",
  "              balance -= amount;",
  "      }",
  "",
  "      public decimal GetBalance()",
  "      {",
  "          return balance;",
  "      }",
  "  }",
  "  ```"
] };
window.TOC_AR["L1-S014"] = window.TOC_AR["L1"]["L1-S014"];

window.TOC_AR["L1"]["L1-S015"] = { ar: [
  "التجريد (Abstraction)",
  "- التجريد (Abstraction): يحتوي التجريد جوهرياً على تفاصيل العمل الداخلية لكود البرمجة كائنية التوجه ويخفيها لإنشاء واجهات برمجية أبسط (create simpler interfaces).",
  "- مثال برمجي لبوابة الدفع (IPaymentGateway Code Example):",
  "  * تعريف واجهة العقد البرمجي (Interface):",
  "    ```csharp",
  "    public interface IPaymentGateway",
  "    {",
  "        void Pay(decimal amount);",
  "    }",
  "    ```",
  "  * التنفيذ الفعلي لبوابة PayPalGateway:",
  "    ```csharp",
  "    public class PayPalGateway : IPaymentGateway",
  "    {",
  "        public void Pay(decimal amount)",
  "        {",
  "            Console.WriteLine(\"Processing PayPal Payment\");",
  "        }",
  "    }",
  "    ```",
  "  * استخدام الواجهة المبسطة في الكود المستدعي:",
  "    ```csharp",
  "    IPaymentGateway payment = new PayPalGateway();",
  "    payment.Pay(100);",
  "    ```"
] };
window.TOC_AR["L1-S015"] = window.TOC_AR["L1"]["L1-S015"];

window.TOC_AR["L1"]["L1-S016"] = { ar: [
  "الوراثة (Inheritance)",
  "- الوراثة (Inheritance): الوراثة هي آلية البرمجة كائنية التوجه للتخلص من الكود المكرر الزائد (eliminating redundant code). وتعني أن الخصائص والدوال ذات الصلة يمكن تجميعها في كائن واحد يمكن إعادة استخدامه بشكل متكرر – دون تكرار كتابة الكود مراراً وتكراراً.",
  "- مثال برمجي لهيكل الموظفين (Employee Hierarchy Code Example):",
  "  * الصنف الأب الأساسي (Base Class):",
  "    ```csharp",
  "    class Employee",
  "    {",
  "        public string Name { get; set; }",
  "",
  "        public void Login()",
  "        {",
  "            Console.WriteLine(\"Logged In\");",
  "        }",
  "    }",
  "    ```",
  "  * صنف المدير المشتق (Derived Class - Manager):",
  "    ```csharp",
  "    class Manager : Employee",
  "    {",
  "        public void ApproveRequest()",
  "        {",
  "            Console.WriteLine(\"Request Approved\");",
  "        }",
  "    }",
  "    ```",
  "  * صنف المطور المشتق (Derived Class - Developer):",
  "    ```csharp",
  "    class Developer : Employee",
  "    {",
  "        public void WriteCode()",
  "        {",
  "            Console.WriteLine(\"Writing Code...\");",
  "        }",
  "    }",
  "    ```"
] };
window.TOC_AR["L1-S016"] = window.TOC_AR["L1"]["L1-S016"];

window.TOC_AR["L1"]["L1-S017"] = { ar: [
  "تعددية الأشكال (Polymorphism)",
  "- تعددية الأشكال (Polymorphism): تعددية الأشكال، وتعني أشكالاً متعددة (many forms)، هي التقنية المستخدمة في البرمجة كائنية التوجه لتقديم المتغيرات والدوال والكائنات في أشكال وصيغ متعددة.",
  "- مثال برمجي لنظام الإشعارات (INotification Code Example):",
  "  * واجهة الإشعار العامة (Interface):",
  "    ```csharp",
  "    public interface INotification",
  "    {",
  "        void Send(string message);",
  "    }",
  "    ```",
  "  * التنفيذات المتعددة للدالة Send:",
  "    ```csharp",
  "    public class PushNotification : INotification",
  "    {",
  "        public void Send(string message)",
  "        {",
  "            Console.WriteLine($\"Push Notification: {message}\");",
  "        }",
  "    }",
  "",
  "    public class SmsNotification : INotification",
  "    {",
  "        public void Send(string message)",
  "        {",
  "            Console.WriteLine($\"SMS: {message}\");",
  "        }",
  "    }",
  "",
  "    public class EmailNotification : INotification",
  "    {",
  "        public void Send(string message)",
  "        {",
  "            Console.WriteLine($\"Email: {message}\");",
  "        }",
  "    }",
  "    ```",
  "  * الاستخدام متعدد الأشكال وقت التشغيل (Usage):",
  "    ```csharp",
  "    INotification notification = new EmailNotification();",
  "    notification.Send(\"Order Confirmed\");",
  "    ```"
] };
window.TOC_AR["L1-S017"] = window.TOC_AR["L1"]["L1-S017"];

window.TOC_AR["L1"]["L1-S018"] = { ar: [
  "محددات الوصول في سي شارب (Access Modifiers in C#)",
  "- تحدد محددات الوصول الأماكن التي يمكن من خلالها الوصول إلى الأصناف والدوال والمتغيرات.",
  "- إنها تتحكم في مستوى الرؤية وإمكانية الوصول (control visibility).",
  "- المحددات الرئيسية الأربعة (Main modifiers):",
  "  * public ← متاح لوصول الجميع (Everyone can access).",
  "  * private ← متاح داخل هذا الصنف فقط (Only this class).",
  "  * protected ← متاح داخل هذا الصنف + الأصناف المشتقة منه (This class + child classes).",
  "  * internal ← متاح داخل نفس المشروع فقط (Same project only)."
] };
window.TOC_AR["L1-S018"] = window.TOC_AR["L1"]["L1-S018"];

window.TOC_AR["L1"]["L1-S019"] = { ar: [
  "مبادئ سوليد (SOLID)",
  "- SOLID هي مجموعة من مبادئ التصميم الهندسي للبرمجيات (collection of design principles).",
  "- الهدف الأساسي (Goal):",
  "  * إنشاء أنظمة برمجية مرنة وقابلة للصيانة (Create flexible and maintainable systems)."
] };
window.TOC_AR["L1-S019"] = window.TOC_AR["L1"]["L1-S019"];

window.TOC_AR["L1"]["L1-S020"] = { ar: [
  "مبدأ المسؤولية الواحدة (S — Single Responsibility Principle)",
  "- نص المبدأ: يجب أن يمتلك الصنف سبباً واحداً فقط للتغيير (A class should have only one reason to change).",
  "- مثال سيئ (Bad Example):",
  "  * صنف الطالب (Student class) يقوم بعدة مهام غير متجانسة:",
  "    - يحفظ البيانات (Saves data)",
  "    - يطبع التقارير (Prints reports)",
  "    - يرسل البريد الإلكتروني (Sends email)",
  "- مثال جيد (Good Example):",
  "  * تخصيص أصناف منفصلة لكل مسؤولية مستقلة (Separate classes for each responsibility)."
] };
window.TOC_AR["L1-S020"] = window.TOC_AR["L1"]["L1-S020"];

window.TOC_AR["L1"]["L1-S021"] = { ar: [
  "مبدأ المسؤولية الواحدة: دراسة حالة سيناريو الموظف (S — Single Responsibility Principle)",
  "- يحتوي صنف الموظف (Employee class) على ثلاث دوال تستخدمها أقسام إدارية مختلفة:",
  "  * calculatePay() ← قسم المحاسبة / الإدارة المالية (CFO)",
  "  * reportHours() ← قسم الموارد البشرية / إدارة العمليات (COO)",
  "  * save() ← مسؤولو قواعد البيانات / الإدارة التقنية (CTO)",
  "- نظراً لأن كل هذه المسؤوليات مجمعة داخل صنف واحد، فإن التعديلات التي يطلبها قسم معين قد تؤثر عن غير قصد على الأقسام الأخرى (unintentionally affect others).",
  "- مثال تفصيلي للمشكلة (Example):",
  "  * تستخدم كل من دالتي calculatePay() و reportHours() دالة داخلية مشتركة تسمى regularHours().",
  "  * عندما تطلب المحاسبة تعديلاً في طريقة الحساب، يقوم المطور بتعديل كود regularHours().",
  "  * تعمل حسابات الرواتب بنجاح، لكن تقارير ساعات الموارد البشرية تصبح غير دقيقة لأنها تعتمد على نفس الدالة المشتركة.",
  "- المخطط التوضيحي (Diagram): يوضح ارتباط فاعلين مختلفين (CFO, COO, CTO) بصنف واحد (Employee) يضم الدوال (+ calculatePay, + reportHours, + save)."
] };
window.TOC_AR["L1-S021"] = window.TOC_AR["L1"]["L1-S021"];

window.TOC_AR["L1"]["L1-S022"] = { ar: [
  "مبدأ المسؤولية الواحدة: تضارب الدمج والحل المعماري (S — Single Responsibility Principle)",
  "- قضية أخرى هي تضارب الدمج (merge conflicts): قد تقوم فرق عمل مختلفة بتعديل نفس صنف Employee لأسباب مختلفة، مما يرفع مخاطر حدوث أخطاء أثناء دمج الكود البرمجي.",
  "- الدرس المستفاد (Lesson):",
  "  * وفقاً لمبدأ المسؤولية الواحدة (SRP)، يجب فصل الكود الذي يخدم فاعلين مختلفين (different actors) في أصناف مستقلة تماماً.",
  "- بدلاً من صنف واحد متضخم (Instead of):",
  "  ```csharp",
  "  Employee",
  "  {",
  "      calculatePay();",
  "      reportHours();",
  "      save();",
  "  }",
  "  ```",
  "- استخدم أصنافاً متخصصة ومستقلة (Use):",
  "  * PayrollCalculator",
  "  * HoursReporter",
  "  * EmployeeRepository",
  "- مخططات الحل (Solution Diagrams):",
  "  * تجزئة العمليات: أصناف PayCalculator (+ calculatePay) و HourReporter (+ reportHours) و EmployeeSaver (+ saveEmployee) وجميعها ترتبط بصنف بيانات الموظف المشترك (Employee Data).",
  "  * نمط الواجهة (Employee Facade): استخدام صنف Facade وسيط لتوجيه استدعاءات (+ calculatePay, + reportHours, + save) إلى الأصناف المتخصصة دون خلط المسؤوليات."
] };
window.TOC_AR["L1-S022"] = window.TOC_AR["L1"]["L1-S022"];

window.TOC_AR["L1"]["L1-S023"] = { ar: [
  "مبدأ الفتح والإغلاق (O — Open Closed Principle)",
  "- تمت صياغة مبدأ الفتح والإغلاق (OCP) في عام 1988 بواسطة العالم برتراند ماير (Bertrand Meyer).",
  "- ينص المبدأ حرفياً على:",
  "  * يجب أن يكون المكون البرمجي مفتوحاً للامتداد ولكن مغلقاً أمام التعديل (A software artifact should be open for extension but closed for modification)."
] };
window.TOC_AR["L1-S023"] = window.TOC_AR["L1"]["L1-S023"];

window.TOC_AR["L1"]["L1-S024"] = { ar: [
  "مبدأ الفتح والإغلاق: سيناريو التقرير المالي (O — Open Closed Principle)",
  "- تخيل نظاماً يعرض ملخصاً مالياً على صفحة ويب، حيث يمكن التمرير خلال البيانات وتظهر الأرقام السالبة باللون الأحمر.",
  "- لاحقاً، يطلب أصحاب المصلحة تقريراً مطبوعاً يحتوي على نفس المعلومات، على أن يدعم التقرير المطبوع:",
  "  * تقسيم وترقيم الصفحات (pagination)",
  "  * الترويسات (headers) والتذييلات (footers)",
  "  * تسميات الأعمدة (column labels)",
  "  * عرض الأرقام السالبة بين أقواس بدلاً من النص الأحمر",
  "- التحدي المعماري: إضافة هذه الميزة الجديدة بأقل قدر ممكن من التعديل على الكود القائم.",
  "- تحقق المعمارية الجيدة ذلك من خلال تطبيق مبدأين أساسيين:",
  "  * مبدأ المسؤولية الواحدة (SRP): فصل المسؤوليات التي تتغير لأسباب ودوافع مختلفة.",
  "  * مبدأ قلب الاعتمادية (DIP): تنظيم التبعيات بحيث يكون منطق الأعمال عالي المستوى مستقلاً تماماً عن تفاصيل التنفيذ منخفضة المستوى."
] };
window.TOC_AR["L1-S024"] = window.TOC_AR["L1"]["L1-S024"];

window.TOC_AR["L1"]["L1-S025"] = { ar: [
  "مبدأ الفتح والإغلاق: الحل المعماري بتفكيك المكونات (O — Open Closed Principle)",
  "- الحل المعماري هو فصل النظام إلى مكونات تخصصية (components):",
  "  * المتحكم (Controller): يستقبل طلبات المستخدم وينسق تدفق العمل.",
  "  * المتفاعل (Interactor): يحتوي على قواعد العمل الأساسية ويعالج البيانات المالية.",
  "  * قاعدة البيانات (Database): تتولى تخزين البيانات واسترجاعها.",
  "  * المقدمون (Presenters): ينسقون البيانات لتناسب صيغ مخرجات محددة.",
  "  * العروض (Views): تعرض الناتج النهائي للمستخدم (سواء كانت صفحة ويب أو تقريراً مطبوعاً).",
  "- ينتج المتفاعل (Interactor) بيانات جاهزة للتقرير، بينما يتولى مختلف الـ Presenters والـ Views معالجة صيغ الإخراج المتباينة.",
  "- يتيح ذلك إضافة طرق عرض جديدة (مثل التقارير المطبوعة، أو ملفات PDF، أو صفحات الويب) دون تعديل منطق الأعمال الأساسي إطلاقاً.",
  "- الفائدة الرئيسية (Key Benefit): من خلال فصل المسؤوليات والتبعيات، يمكن تنفيذ المتطلبات الجديدة بأثر ضئيل أو معدوم على الكود القائم، مما يجعل النظام أسهل في الصيانة والاختبار والتوسع."
] };
window.TOC_AR["L1-S025"] = window.TOC_AR["L1"]["L1-S025"];

window.TOC_AR["L1"]["L1-S026"] = { ar: [
  "مبدأ الفتح والإغلاق: التدرج الهرمي للاعتمادية (O — Open Closed Principle)",
  "- يعد مبدأ OCP القوة الدافعة الأساسية وراء معمارية وهندسة الأنظمة البرمجية.",
  "- الهدف المعماري: جعل النظام سهل الامتداد والتوسع دون تكبد تأثير كبير أو تكاليف باهظة ناتجة عن التغيير (without incurring a high impact of change).",
  "- يتحقق هذا الهدف من خلال:",
  "  * تجزئة النظام وتقسيمه إلى مكونات مستقلة (components).",
  "  * ترتيب تلك المكونات في تسلسل هرمي للاعتمادية (dependency hierarchy) يحمي المكونات ذات المستوى الأعلى من التغييرات التي تحدث في المكونات ذات المستوى الأدنى."
] };
window.TOC_AR["L1-S026"] = window.TOC_AR["L1"]["L1-S026"];

window.TOC_AR["L1"]["L1-S027"] = { ar: [
  "مبدأ استبدال لسكوف (L — Liskov Substitution Principle)",
  "- يجب أن تكون الأصناف المشتقة قادرة على استبدال الأصناف الأساسية دون كسر السلوك (without breaking behavior).",
  "- يجب أن يكون الصنف الفرعي (Subclass) قابلاً للاستبدال محل صنفه الأساسي (Base Class).",
  "- يجب أن تحافظ الوراثة على السلوك المتوقع (Inheritance should preserve expected behavior).",
  "- إذا أدى استبدال كائن الصنف الأب بكائن الصنف الابن إلى كسر عمل البرنامج، فإن ذلك يعد انتهاكاً لمبدأ LSP.",
  "- مثال توضيحي (Example):",
  "  * صنف الطائر (Bird)",
  "  * ↓",
  "  * عصفور دوري (Sparrow) [سليم / يطير بنجاح]",
  "  * بطريق (Penguin) [مخالف / لا يستطيع الطيران (Cannot Fly)]",
  "- تصميم الوراثة السيئ يتسبب في مشاكل برمجية معقدة."
] };
window.TOC_AR["L1-S027"] = window.TOC_AR["L1"]["L1-S027"];

window.TOC_AR["L1"]["L1-S028"] = { ar: [
  "مبدأ استبدال لسكوف: دراسة حالة التراخيص والمعمارية (L — Liskov Substitution Principle)",
  "- يتوافق هذا التصميم مع مبدأ LSP لأن سلوك تطبيق الفواتير (Billing application) لا يعتمد، بأي شكل من الأشكال، على أي من النوعين الفرعيين اللذين يستخدمهما.",
  "- كلا النوعين الفرعيين قابلان للاستبدال الكامل محل نوع الترخيص الأساسي (License type).",
  "- يمكن لمبدأ LSP، بل ويجب عليه، أن يمتد إلى مستوى معمارية النظام (level of architecture).",
  "- فالانتهاك البسيط لقابلية الاستبدال يمكن أن يتسبب في تلويث معمارية النظام بكم هائل من الآليات الاستثنائية الإضافية (polluted with extra mechanisms).",
  "- المخطط المعماري (UML Diagram):",
  "  * تطبيق الفواتير (Billing) يعتمد على الواجهة المجردة <I> License ذات الدالة (+ calcFee()).",
  "  * الصنفان المشتقان: ترخيص الأفراد (Personal License) وترخيص الشركات (Business License - users) يشتقان من License ويحققان متطلبات العقد بسلاسة."
] };
window.TOC_AR["L1-S028"] = window.TOC_AR["L1"]["L1-S028"];

window.TOC_AR["L1"]["L1-S029"] = { ar: [
  "مبدأ استبدال لسكوف: الكود البرمجي لنموذج التراخيص (L — Liskov Substitution Principle: Code)",
  "- التنفيذ البرمجي لنموذج التراخيص وتطبيق الفواتير المتوافق مع LSP:",
  "  * الصنف الأساسي المجرد (Base Class):",
  "    ```csharp",
  "    public abstract class License",
  "    {",
  "        public abstract decimal CalcFee();",
  "    }",
  "    ```",
  "  * الأصناف المشتقة (Derived Classes):",
  "    ```csharp",
  "    public class PersonalLicense : License",
  "    {",
  "        public override decimal CalcFee()",
  "        {",
  "            return 50m;",
  "        }",
  "    }",
  "",
  "    public class BusinessLicense : License",
  "    {",
  "        public override decimal CalcFee()",
  "        {",
  "            return 200m;",
  "        }",
  "    }",
  "    ```",
  "  * صنف العميل المستدعي (Client Class):",
  "    ```csharp",
  "    public class BillingApplication",
  "    {",
  "        public void GenerateBill(License license)",
  "        {",
  "            decimal fee = license.CalcFee();",
  "            Console.WriteLine($\"Fee = {fee}\");",
  "        }",
  "    }",
  "    ```",
  "  * الاستخدام وقت التشغيل (Usage):",
  "    ```csharp",
  "    BillingApplication billing = new BillingApplication();",
  "",
  "    License personal = new PersonalLicense();",
  "    billing.GenerateBill(personal);",
  "",
  "    License business = new BusinessLicense();",
  "    billing.GenerateBill(business);",
  "    ```"
] };
window.TOC_AR["L1-S029"] = window.TOC_AR["L1"]["L1-S029"];

window.TOC_AR["L1"]["L1-S030"] = { ar: [
  "مبدأ فصل الواجهات (I — Interface Segregation Principle)",
  "- نص المبدأ: لا ينبغي إجبار العملاء على الاعتماد على دوال لا يستخدمونها (Clients should not be forced to depend on methods they do not use).",
  "- فكرة مبدأ ISP هي إبقاء الواجهات صغيرة ومركزة في وظائفها (keep interfaces small and focused).",
  "- الواجهات الكبيرة والضخمة تجبر الأصناف على تنفيذ دوال غير ضرورية، مما يؤدي إلى تصميم رديء ومشاكل صيانة معقدة."
] };
window.TOC_AR["L1-S030"] = window.TOC_AR["L1"]["L1-S030"];

window.TOC_AR["L1"]["L1-S031"] = { ar: [
  "مبدأ فصل الواجهات: التصميم السيئ (I — Interface Segregation Principle: Bad Design)",
  "- تصميم سيئ ينتهك ISP (Bad Design):",
  "- واجهة مفردة تحتوي على دوال غير مترابطة في طبيعتها (A single interface contains unrelated methods):",
  "  ```csharp",
  "  public interface IWorker",
  "  {",
  "      void Work();",
  "      void Eat();",
  "      void Sleep();",
  "  }",
  "  ```",
  "- يُجبر الروبوت على تنفيذ دوال لا يحتاج إليها بطبيعتها (A robot is forced to implement methods it does not need):",
  "  ```csharp",
  "  public class Robot : IWorker",
  "  {",
  "      public void Work() { }",
  "",
  "      public void Eat()",
  "      {",
  "          throw new NotImplementedException();",
  "      }",
  "",
  "      public void Sleep()",
  "      {",
  "          throw new NotImplementedException();",
  "      }",
  "  }",
  "  ```"
] };
window.TOC_AR["L1-S031"] = window.TOC_AR["L1"]["L1-S031"];

window.TOC_AR["L1"]["L1-S032"] = { ar: [
  "مبدأ فصل الواجهات: التصميم الجيد بتجزئة الواجهات (I — Interface Segregation Principle: Good Design)",
  "- التصميم الجيد المتوافق مع ISP (Good Design):",
  "- تجزئة وتقسيم الواجهة الكبيرة إلى واجهات أصغر وأكثر تخصصاً (Split into smaller, specialized interfaces):",
  "  ```csharp",
  "  public interface IWorkable",
  "  {",
  "      void Work();",
  "  }",
  "",
  "  public interface IEatable",
  "  {",
  "      void Eat();",
  "  }",
  "",
  "  public interface ISleepable",
  "  {",
  "      void Sleep();",
  "  }",
  "  ```",
  "- تنفيذ الواجهات المطلوبة فقط وفق الحاجة الفعلية لكل صنف (Implement only the required interfaces):",
  "  ```csharp",
  "  public class Human : IWorkable, IEatable, ISleepable",
  "  {",
  "      public void Work() { }",
  "      public void Eat() { }",
  "      public void Sleep() { }",
  "  }",
  "",
  "  public class Robot : IWorkable",
  "  {",
  "      public void Work() { }",
  "  }",
  "  ```"
] };
window.TOC_AR["L1-S032"] = window.TOC_AR["L1"]["L1-S032"];

window.TOC_AR["L1"]["L1-S033"] = { ar: [
  "مبدأ فصل الواجهات: الفوائد المعمارية (I — Interface Segregation Principle: Benefits)",
  "- الفوائد المترتبة على تطبيق مبدأ ISP (Benefits):",
  "  * واجهات أصغر وأكثر تركيزاً (Smaller and more focused interfaces).",
  "  * خفض درجة الاقتران والارتباط بين مكونات النظام (Reduced coupling).",
  "  * صيانة وتوسيع أسهل وأكثر سلاسة للبرمجيات (Easier maintenance and extension).",
  "  * تنفذ الأصناف فقط ما تحتاجه وتستخدمه بالفعل (Classes implement only what they actually need)."
] };
window.TOC_AR["L1-S033"] = window.TOC_AR["L1"]["L1-S033"];

window.TOC_AR["L1"]["L1-S034"] = { ar: [
  "مبدأ قلب الاعتمادية: المفهوم والاستثناء المعماري (D — Dependency Inversion Principle)",
  "- وفقاً للعمارة النظيفة (Clean Architecture)، فإن الهدف من مبدأ قلب الاعتمادية (DIP) هو أن تعتمد قواعد الأعمال عالية المستوى على التجريدات (الواجهات interfaces)، وليس على التنفيذات الملموسة (concrete implementations).",
  "- ومع ذلك، هناك استثناء مهم واحد (one important exception):",
  "  * في مرحلة ما، يجب حتماً إنشاء كائنات ملموسة (At some point, concrete objects must be created).",
  "  * لا يمكن للنظام أن يعمل بالاعتماد على الواجهات فقط؛ بل يجب إنشاء نسخ حقيقية من التنفيذات الفعلية في مكان ما (actual implementations must be instantiated somewhere)."
] };
window.TOC_AR["L1-S034"] = window.TOC_AR["L1"]["L1-S034"];

window.TOC_AR["L1"]["L1-S035"] = { ar: [
  "مبدأ قلب الاعتمادية: التطبيق البرمجي وحقن التبعية (D — Dependency Inversion Principle: Code)",
  "- التطبيق البرمجي لمبدأ قلب الاعتمادية (DIP Implementation):",
  "  * التجريد المشترك (Abstraction / Interface):",
  "    ```csharp",
  "    public interface IMessageService",
  "    {",
  "        void Send(string message);",
  "    }",
  "    ```",
  "  * التنفيذ الملموس منخفض المستوى (Concrete Implementation):",
  "    ```csharp",
  "    public class EmailService : IMessageService",
  "    {",
  "        public void Send(string message)",
  "        {",
  "            Console.WriteLine(message);",
  "        }",
  "    }",
  "    ```",
  "  * الصنف عالي المستوى المحقون بالتجريد (High-level Class with Constructor Injection):",
  "    ```csharp",
  "    public class Notification",
  "    {",
  "        private IMessageService service;",
  "",
  "        public Notification(IMessageService service)",
  "        {",
  "            this.service = service;",
  "        }",
  "",
  "        public void Notify(string message)",
  "        {",
  "            service.Send(message);",
  "        }",
  "    }",
  "    ```",
  "  * نقطة تكوين وإنشاء الكائنات الفعلية (Composition Root / Program.Main):",
  "    ```csharp",
  "    class Program",
  "    {",
  "        static void Main()",
  "        {",
  "            IMessageService service = new EmailService();",
  "",
  "            Notification notification = new Notification(service);",
  "",
  "            notification.Notify(\"Hello\");",
  "        }",
  "    }",
  "    ```"
] };
window.TOC_AR["L1-S035"] = window.TOC_AR["L1"]["L1-S035"];
