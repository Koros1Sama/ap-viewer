/* ═══════════════════════════════════════════════════════════
   interactive.js — محرك ونماذج الشرح التفاعلي المعماري بالـ SVG
   مقرر البرمجة المتقدمة (AP) — د. بيداء لعلع
   1. استوديو مبادئ SOLID المعمارية وتفكيك الارتباط الوثيق (SOLID Architecture Studio)
   2. النموذج الكانوني: جوهر أنماط التصميم وعائلاتها الثلاث (The Visual Triad)
   3. أطلس ومحاكي مخططات UML لجميع أنماط المنهج وعلاقاتها المشروحة (Curriculum UML Studio)
   معيار 100% SVG متجهي عالي الدقة · صفر إيموجيات (Zero Emojis Standard)
   ═══════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ═══════════════════════════════════════════════════════════
   القسم التأسيسي: استوديو مبادئ SOLID المعمارية وتفكيك الارتباط الوثيق
   مقرر البرمجة المتقدمة (AP) — د. بيداء لعلع (الوحدة 1)
   معيار 100% SVG متجهي عالي الدقة · صفر إيموجيات (Zero Emojis Standard)
   ═══════════════════════════════════════════════════════════ */

  function getSolidSvgDefs() {
    return `
      <defs>
        <filter id="solid-glow-acc" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="rgba(14, 165, 233, 0.45)"/>
        </filter>
        <filter id="solid-glow-ok" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="rgba(16, 185, 129, 0.45)"/>
        </filter>
        <filter id="solid-glow-err" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="7" flood-color="rgba(239, 68, 68, 0.55)"/>
        </filter>
        <marker id="solid-arrow-acc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <polyline points="2 1, 9 5, 2 9" fill="none" stroke="var(--acc)" stroke-width="1.8" stroke-linecap="round"/>
        </marker>
        <marker id="solid-arrow-err" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <polyline points="2 1, 9 5, 2 9" fill="none" stroke="var(--err)" stroke-width="1.8" stroke-linecap="round"/>
        </marker>
        <marker id="solid-arrow-ok" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <polyline points="2 1, 9 5, 2 9" fill="none" stroke="var(--ok)" stroke-width="1.8" stroke-linecap="round"/>
        </marker>
        <marker id="solid-realize-ok" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="9" markerHeight="9" orient="auto">
          <polygon points="1 1, 11 6, 1 11" fill="var(--sf)" stroke="var(--ok)" stroke-width="1.6"/>
        </marker>
        <marker id="solid-realize-acc" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="9" markerHeight="9" orient="auto">
          <polygon points="1 1, 11 6, 1 11" fill="var(--sf)" stroke="var(--acc)" stroke-width="1.6"/>
        </marker>
        <style>
          svg { direction: ltr !important; }
          text { stroke: none !important; font-family: var(--fa); -webkit-font-smoothing: antialiased; direction: ltr !important; unicode-bidi: isolate !important; }
          .mono { font-family: var(--fm); direction: ltr !important; unicode-bidi: isolate !important; }
          .ar-txt { direction: rtl !important; unicode-bidi: isolate !important; font-family: var(--fa) !important; }
          .solid-flow { animation: solidDashFlow 1.2s linear infinite; }
          @keyframes solidDashFlow { to { stroke-dashoffset: -20; } }
          .solid-pulse { animation: solidPulseAnim 1.6s ease-in-out infinite alternate; }
          @keyframes solidPulseAnim { 0% { opacity: 0.7; } 100% { opacity: 1; } }
        </style>
      </defs>
    `;
  }

  const SOLID_PRINCIPLES_DATA = [
    {
      id: "srp",
      letter: "S",
      name_en: "Single Responsibility Principle",
      name_ar: "مبدأ المسؤولية الواحدة",
      short_rule: "سبب واحد فقط للتغيير",
      slide: "L1-S020",
      badge: "S · المسؤولية الواحدة",
      actor: "Single Actor (فاعل ومستفيد واحد)",
      law: "يجب أن يمتلك الصنف سبباً واحداً فقط للتغيير (A class should have only one reason to change).",
      metaphor: "سكين الجيب السويسري مقابل طقم أدوات جراحية متخصصة: دمج فتاحة العلب والمقص والسكين في مقبض واحد يجعلك إذا أردت استبدال شفرة تالفة قد تفسد المقص أو تجرح يدك. في البرمجة: كل صنف هو أداة دقيقة لغرض واحد فقط.",
      explanation: "صاغ روبرت مارتن (Uncle Bob) هذا المبدأ ليعني أن الصنف يجب أن يكون مسؤولاً تجاه فاعل ومستفيد واحد فقط (Single Actor / Stakeholder). عندما يجمع صنف Employee بين حساب الرواتب (للـ CFO) وإعداد التقارير (للـ COO) والحفظ (للـ CTO)، فإن أي تعديل تطلبه المالية يهدد بكسر تقارير العمليات دون قصد، ويحدث تضارب دمج (Merge Conflicts) بين فرق التطوير.",
      examTrap: "الوقفة الامتحانية المؤكدة لدكتورة المادة: 1. تركز د. بيداء على أن المسؤولية الواحدة لا تعني 'دالة واحدة'، بل تعني 'دافع وسبب واحد للتغيير' (Single Reason to Change / Single Actor). 2. سيناريو صنف Employee وتأثر دالة regularHours() هو المثال الرسمي في الامتحان: تعديل حساب الساعات الإضافية للمالية يفسد تقارير الموارد البشرية. 3. الحل المعماري هو استخراج أصناف متخصصة: PayrollCalculator, HoursReporter, EmployeeRepository.",
      codeBad: `// كود منتهك لـ SRP: كائن الإله يخدم فاعلين متناقضين في صنف واحد!
public class Employee {
    public string Name { get; set; }
    public decimal RegularHours { get; set; }

    // يخدم المدير المالي (CFO)
    public decimal CalculatePay() {
        return RegularHours * 50; 
    }

    // يخدم مدير العمليات (COO) - يعتمد على نفس المنطق
    public string ReportHours() {
        return $"تقرير ساعات العمل: {RegularHours}";
    }

    // يخدم مسؤول قواعد البيانات (CTO)
    public void SaveToDatabase() {
        Console.WriteLine("حفظ في قاعدة البيانات SQL Server");
    }
}`,
      codeGood: `// كود سليم محقق لـ SRP: كل صنف يخدم فاعلاً واحداً وله سبب تغيير وحيد
public class Employee {
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal RegularHours { get; set; }
}

// 1. مسؤولية الحسابات المالية فقط (CFO)
public class PayrollCalculator {
    public decimal CalculatePay(Employee emp) => emp.RegularHours * 50;
}

// 2. مسؤولية تقارير الموارد البشرية فقط (COO)
public class HoursReporter {
    public string Report(Employee emp) => $"ساعات الموظف: {emp.RegularHours}";
}

// 3. مسؤولية استمرارية البيانات فقط (CTO)
public class EmployeeRepository {
    public void Save(Employee emp) => Console.WriteLine($"حفظ الموظف {emp.Id} في SQL");
}`
    },
    {
      id: "ocp",
      letter: "O",
      name_en: "Open / Closed Principle",
      name_ar: "مبدأ الفتح والإغلاق",
      short_rule: "مفتوح للتوسيع · مغلق للتعديل",
      slide: "L1-S023",
      badge: "O · الفتح والإغلاق",
      actor: "Bertrand Meyer (1988)",
      law: "الكيانات البرمجية (Classes, Modules, Functions) يجب أن تكون مفتوحة للتوسيع (Open for Extension) ومغلقة أمام التعديل (Closed for Modification).",
      metaphor: "الهاتف الذكي ومتاجر التطبيقات: لا تحتاج إلى فك ولحام اللوحة الأم للهاتف كلما أردت إضافة تطبيق جديد؛ يوفر نظام التشغيل واجهات برمجة مفتوحة للإضافات (Extension) مع بقاء النواة الصلبة مغلقة ومحمية من التعديل (Closed).",
      explanation: "الهدف المعماري الاستراتيجي لـ OCP هو حماية الشيفرات المستقرة والمختبرة من التعديل المستمر. كل تعديل في ملف موجود يفتح الباب للأخطاء الارتدادية (Regression Bugs) ويتطلب إعادة اختبار النظام بالكامل. التحقيق المعماري يتم عبر التجريد (Abstractions) وتعددية الأشكال (Polymorphism) وفصل الواجهات.",
      examTrap: "الوقفة الامتحانية المؤكدة لدكتورة المادة: 1. واضع المبدأ هو برتراند ماير عام 1988. 2. الرائحة البرمجية الفاضحة لانتهاك OCP هي عبارات switch أو سلاسل if-else على نوع الكائن لإضافة سلوك جديد. 3. في سيناريو تقرير الويب والتقرير المطبوع (L1-S024)، المكون الذي لا يجب أن يتأثر أبداً عند إضافة ميزة جديدة هو منطق الأعمال الداخلي (The Interactor).",
      codeBad: `// كود منتهك لـ OCP: كلما أضفنا طريقة دفع نضطر لفتح هذا الصنف وتعديل الـ switch!
public class PaymentProcessor {
    public void ProcessPayment(string type, decimal amount) {
        if (type == "CreditCard") {
            Console.WriteLine("خصم من البطاقة: " + amount);
        } else if (type == "PayPal") {
            Console.WriteLine("تحويل عبر باي بال: " + amount);
        } else if (type == "Crypto") {
            // فتحنا الكود القديم وكسرنا OCP لإضافة العملات الرقمية!
            Console.WriteLine("معاملة بلوكتشين: " + amount);
        }
    }
}`,
      codeGood: `// كود سليم محقق لـ OCP: معمارية قابلة للتوسع اللانهائي دون لمس الكود القديم
public interface IPaymentMethod {
    bool Pay(decimal amount);
}

public class CreditCardPayment : IPaymentMethod {
    public bool Pay(decimal amount) => true;
}

public class PayPalPayment : IPaymentMethod {
    public bool Pay(decimal amount) => true;
}

// توسيع جديد (Extension): صنف مستقل لا يمس الشيفرات القائمة!
public class CryptoPayment : IPaymentMethod {
    public bool Pay(decimal amount) => true;
}

// الصنف الأساسي مغلق ومستقر تماماً
public class PaymentProcessor {
    public bool Checkout(IPaymentMethod method, decimal amount) {
        return method.Pay(amount); // تعددية الأشكال
    }
}`
    },
    {
      id: "lsp",
      letter: "L",
      name_en: "Liskov Substitution Principle",
      name_ar: "مبدأ استبدال لسكوف",
      short_rule: "الابن يحل محل الأب دون كسر البرنامج",
      slide: "L1-S027",
      badge: "L · استبدال لسكوف",
      actor: "Barbara Liskov (1987)",
      law: "الأصناف المشتقة يجب أن تكون قابلة للاستبدال محل أصنافها الأساسية دون كسر صحة البرنامج أو تغيير سلوكه المتوقع (Subtypes must be substitutable for their base types).",
      metaphor: "البطاريات القياسية (AA Batteries): يمكنك استبدال بطارية Duracell ببطارية Energizer داخل جهاز التحكم وسيعمل بشكل طبيعي تماماً. لكن إذا صنعت شركة بطارية بنفس الحجم ولكنها تفرغ 220 فولت أو تنفجر عند التشغيل، فهذا انتهاك صارخ لمبدأ الاستبدال!",
      explanation: "الوراثة ليست مجرد إعادة استخدام لأسماء الدوال، بل هي التزام بعقد سلوكي كامل (Behavioral Subtyping). الصنف الابن لا يجوز أن يضع شروطاً مسبقة أشد (Preconditions) أو يضع شروطاً لاحقة أضعف (Postconditions)، ولا يجوز له رمي استثناءات غير متوقعة في دوال الأب. إذا كان العميل يضطر لفحص نوع الابن لمعاملته معاملة استثنائية، فهذا انتهاك لـ LSP.",
      examTrap: "الوقفة الامتحانية المؤكدة لدكتورة المادة: 1. أشهر مثال امتحاني: وراثة البطريق (Penguin) من الطائر (Bird) مع احتواء Bird على دالة Fly()، أو وراثة المربع (Square) من المستطيل (Rectangle). 2. رمي NotSupportedException أو NotImplementedException داخل الصنف المشتق علامة مؤكدة على انتهاك LSP. 3. استخدام if (x is BusinessLicense) في تطبيق الفواتير يمثل انتهاكاً لـ LSP، والحل هو تعددية الأشكال الملتزمة بالعقد المجرد.",
      codeBad: `// كود منتهك لـ LSP: البطريق يرث من الطائر لكنه لا يستطيع الطيران!
public class Bird {
    public virtual void Fly() => Console.WriteLine("الطائر يحلق في الهواء");
}

public class Penguin : Bird {
    public override void Fly() {
        // رمي استثناء يكسر كود العميل الذي يتعامل مع Bird!
        throw new NotSupportedException("البطاريق لا تطير!");
    }
}

// كود العميل ينهار وقت التشغيل (Runtime Failure):
// void MakeBirdFly(Bird b) { b.Fly(); } -> ينفجر مع Penguin!`,
      codeGood: `// كود سليم محقق لـ LSP: هيكل وراثة دقيق يفصل القدرات السلوكية
public abstract class Bird {
    public abstract void Move();
}

public class FlyingBird : Bird {
    public override void Move() => Fly();
    public virtual void Fly() => Console.WriteLine("طيران في الجو");
}

public class Penguin : Bird {
    public override void Move() => Swim();
    public void Swim() => Console.WriteLine("سباحة سريعة في الماء");
}

// تطبيق التراخيص المعتمد في سلايد د. بيداء (L1-S028):
public abstract class License {
    public abstract decimal CalcFee();
}
public class PersonalLicense : License {
    public override decimal CalcFee() => 50m;
}
public class BusinessLicense : License {
    public override decimal CalcFee() => 300m;
}`
    },
    {
      id: "isp",
      letter: "I",
      name_en: "Interface Segregation Principle",
      name_ar: "مبدأ فصل الواجهات",
      short_rule: "واجهات صغيرة مركزة · لا دوال غير مستخدمة",
      slide: "L1-S030",
      badge: "I · فصل الواجهات",
      actor: "Role Interfaces (عقود التخصص)",
      law: "لا ينبغي إجبار العملاء على الاعتماد على دوال وواجهات لا يستخدمونها (Clients should not be forced to depend on methods they do not use).",
      metaphor: "منافذ الحاسوب المتخصصة: شاشتك تحتاج منفذ HDMI، والفأرة تحتاج منفذ USB، وسماعاتك تحتاج منفذ Audio Jack. تخيل لو أجبرتك الشركة على منفذ هجين عملاق واحد يجمع كل هذه الأسلاك في كابل واحد ضخم، فستضطر لشراء مقابس وهمية محولة فقط لتوصيل فأرة بسيطة!",
      explanation: "الواجهات المتضخمة الشاملة (Fat / Polluted Interfaces) تفرض على الفئات المنفذة تضمين دوال فارغة أو رمي أخطاء. والأسوأ من ذلك: إذا تغير توقيع دالة في الواجهة المتضخمة، تضطر جميع الأصناف الأخرى لإعادة الترجمة (Recompilation) والنشر، حتى لو كانت لا تستخدم تلك الدالة نهائياً. الحل هو تفتيت الواجهة إلى واجهات أدوار صغيرة (Role Interfaces).",
      examTrap: "الوقفة الامتحانية المؤكدة لدكتورة المادة: 1. مثال المحاضرة المعتمد: واجهة IWorker ودوال Work() و Eat() و Sleep(). 2. إجبار الصنف RobotWorker على تطبيق دالتي Eat و Sleep يمثل انتهاكاً لـ ISP. 3. فوائد ISP الأربعة في الامتحان: تقليل الارتباط (Loose Coupling)، سهولة الصيانة، تفادي الأكواد الوهمية، ومنع إعادة الترجمة غير المبررة للأصناف المنفصلة.",
      codeBad: `// كود منتهك لـ ISP: واجهة متضخمة تجبر الروبوت على الأكل والنوم!
public interface IWorker {
    void Work();
    void Eat();
    void Sleep();
}

public class RobotWorker : IWorker {
    public void Work() => Console.WriteLine("الروبوت يلحم الهياكل");
    
    // إجبار على دوال وهمية أو رمي استثناءات تلوث التصميم
    public void Eat() => throw new NotImplementedException("الروبوت لا يأكل!");
    public void Sleep() => throw new NotImplementedException("الروبوت لا ينام!");
}`,
      codeGood: `// كود سليم محقق لـ ISP: واجهات تخصصية دقيقة (Role Interfaces)
public interface IWorkable {
    void Work();
}

public interface IFeedable {
    void Eat();
}

// الصنف البشري يطبق كل الواجهات التي تناسب طبيعته
public class HumanWorker : IWorkable, IFeedable {
    public void Work() => Console.WriteLine("إنجاز المهام المكتبية");
    public void Eat() => Console.WriteLine("تناول وجبة الغداء");
}

// الروبوت يطبق حصراً ما يحتاجه دون سطر كود زائد أو وهمي!
public class RobotWorker : IWorkable {
    public void Work() => Console.WriteLine("تشغيل خط الإنتاج الآلي");
}`
    },
    {
      id: "dip",
      letter: "D",
      name_en: "Dependency Inversion Principle",
      name_ar: "مبدأ قلب الاعتمادية",
      short_rule: "الاعتماد على التجريد · لا على التفاصيل الملموسة",
      slide: "L1-S034",
      badge: "D · قلب الاعتمادية",
      actor: "Robert C. Martin / Clean Arch",
      law: "1. الوحدات عالية المستوى لا ينبغي أن تعتمد على الوحدات منخفضة المستوى؛ كلاهما يجب أن يعتمد على التجريدات. 2. التجريدات لا ينبغي أن تعتمد على التفاصيل؛ بل التفاصيل هي التي يجب أن تعتمد على التجريدات.",
      metaphor: "مقبس الكهرباء الجداري (Wall Socket): مصباح غرفتك (وحدة عليا) لا يلحم أسلاكه النحاسية مباشرة بمولدات محطة الكهرباء في أطراف المدينة (وحدة دنيا). كلاهما يعتمد على عقد تجريدي موحد وهو مقبس الجدار القياسي ذو الفولتية الثابتة. يمكنك استبدال المصباح، أو تغيير محطة الكهرباء إلى طاقة شمسية، دون أن يتأثر الطرف الآخر إطلاقاً!",
      explanation: "في التصميم التقليدي الرديء، تتدفق التبعيات من الأعلى للأسفل: منطق الأعمال (OrderService) ينشئ بنفسه كائنات قواعد البيانات (SqlDatabase) ومزودات البريد (SmtpClient). مبدأ DIP يقلب هذا الاتجاه: منطق الأعمال يعرف فقط واجهة مثل IMessageService، ومزود البريد ينفذ هذه الواجهة. والنتيجة: سهولة اختبار منطق الأعمال عبر Mocking دون الحاجة لسيرفر بريد حقيقي، وسهولة استبدال التقنيات.",
      examTrap: "الوقفة الامتحانية المؤكدة لدكتورة المادة: 1. تعريف الوحدات عالية المستوى: هي التي تحتوي قواعد ومنطق الأعمال (Business Logic). والمنخفضة: هي التفاصيل التقنية و I/O وقواعد البيانات. 2. استثناء DIP الواقعي (L1-S035): لا بد في النهاية من إنشاء كائنات ملموسة؛ ويتم حصر هذا الاستثناء في نقطة معزولة واحدة تسمى جذر التركيب (Composition Root / DI Container) أو مصانع الكائنات (Abstract Factory).",
      codeBad: `// كود منتهك لـ DIP: صنف الطلبات يرتبط وثيقاً بخادم بريد محدد (Tight Coupling)
public class OrderService {
    // ارتباط مباشر وملموس بتفاصيل منخفضة المستوى
    private SmtpEmailClient _mailer = new SmtpEmailClient();

    public void CompleteOrder(int orderId) {
        Console.WriteLine($"تم اعتماد الطلب {orderId}");
        _mailer.SendEmail("admin@store.com", "طلب جديد"); // عاجز عن الاختبار بدون SMTP حقيقي!
    }
}`,
      codeGood: `// كود سليم محقق لـ DIP: حقن التبعيات والاعتماد على التجريد (Dependency Injection)
public interface INotificationChannel {
    void Send(string to, string message);
}

// تنفيذات ملموسة منخفضة المستوى تعتمد على الواجهة
public class EmailNotifier : INotificationChannel {
    public void Send(string to, string message) => Console.WriteLine("إرسال بريد SMTP: " + message);
}

public class SmsNotifier : INotificationChannel {
    public void Send(string to, string message) => Console.WriteLine("إرسال رسالة SMS: " + message);
}

// الوحدة عالية المستوى تعتمد على التجريد وتستقبل التبعية عبر المنشئ (Constructor Injection)
public class OrderService {
    private readonly INotificationChannel _notifier;

    public OrderService(INotificationChannel notifier) {
        _notifier = notifier; // حقن التبعية (DI)
    }

    public void CompleteOrder(int orderId) {
        Console.WriteLine($"تم اعتماد الطلب {orderId}");
        _notifier.Send("admin@store.com", "طلب جديد");
    }
}`
    }
  ];

  /* ───────────────────────────────────────────────────────────
     1. الدالة التوليدية للتاب 1: مصفوفة مبادئ SOLID المتجهة (The Matrix)
     ─────────────────────────────────────────────────────────── */
  function buildSolidMatrixSvg(activeId) {
    const svgW = 860;
    const svgH = 320;
    const colW = 154;
    const gap = 12;
    const startX = 25;
    const startY = 20;
    const cardH = 280;

    let columnsMarkup = "";

    SOLID_PRINCIPLES_DATA.forEach((p, idx) => {
      const cx = startX + idx * (colW + gap);
      const isActive = p.id === activeId;
      const strokeCol = isActive ? "var(--acc)" : "var(--ln)";
      const strokeW = isActive ? "2.4" : "1.4";
      const bgCol = isActive ? "color-mix(in srgb, var(--acc) 12%, var(--sf2))" : "var(--sf2)";
      const glowFilter = isActive ? 'filter="url(#solid-glow-acc)"' : "";
      const badgeBg = isActive ? "var(--acc)" : "var(--sf)";
      const badgeTextCol = isActive ? "#ffffff" : "var(--ink)";

      // Vector glyph for each principle
      let glyph = "";
      if (p.id === "srp") {
        glyph = `
          <g transform="translate(${cx + 42}, 145)">
            <rect x="0" y="0" width="30" height="42" rx="4" fill="var(--sf)" stroke="${isActive ? 'var(--acc)' : 'var(--ln)'}" stroke-width="1.4"/>
            <line x1="6" y1="10" x2="24" y2="10" stroke="${isActive ? 'var(--acc)' : 'var(--ink-m)'}" stroke-width="1.5"/>
            <line x1="6" y1="18" x2="20" y2="18" stroke="${isActive ? 'var(--acc)' : 'var(--ink-m)'}" stroke-width="1.5"/>
            <line x1="6" y1="26" x2="16" y2="26" stroke="${isActive ? 'var(--acc)' : 'var(--ink-m)'}" stroke-width="1.5"/>

            <rect x="40" y="0" width="30" height="42" rx="4" fill="var(--sf)" stroke="${isActive ? 'var(--ok)' : 'var(--ln)'}" stroke-width="1.4"/>
            <line x1="46" y1="10" x2="64" y2="10" stroke="${isActive ? 'var(--ok)' : 'var(--ink-m)'}" stroke-width="1.5"/>
            <line x1="46" y1="18" x2="60" y2="18" stroke="${isActive ? 'var(--ok)' : 'var(--ink-m)'}" stroke-width="1.5"/>
            <line x1="46" y1="26" x2="56" y2="26" stroke="${isActive ? 'var(--ok)' : 'var(--ink-m)'}" stroke-width="1.5"/>
          </g>
        `;
      } else if (p.id === "ocp") {
        glyph = `
          <g transform="translate(${cx + 36}, 145)">
            <rect x="0" y="8" width="46" height="34" rx="4" fill="var(--sf)" stroke="${isActive ? 'var(--acc)' : 'var(--ln)'}" stroke-width="1.4"/>
            <path d="M 15 8 L 15 3 C 15 0, 31 0, 31 3 L 31 8" fill="none" stroke="${isActive ? 'var(--acc)' : 'var(--ln)'}" stroke-width="1.4"/>
            <circle cx="23" cy="22" r="3" fill="${isActive ? 'var(--acc)' : 'var(--ink-m)'}"/>

            <!-- Plug-in connector expanding -->
            <path d="M 46 25 L 66 25" stroke="${isActive ? 'var(--ok)' : 'var(--acc)'}" stroke-width="2" stroke-dasharray="3 2"/>
            <rect x="66" y="16" width="16" height="18" rx="3" fill="var(--sf)" stroke="${isActive ? 'var(--ok)' : 'var(--acc)'}" stroke-width="1.4"/>
          </g>
        `;
      } else if (p.id === "lsp") {
        glyph = `
          <g transform="translate(${cx + 35}, 145)">
            <rect x="0" y="0" width="32" height="42" rx="4" fill="var(--sf)" stroke="${isActive ? 'var(--acc)' : 'var(--ln)'}" stroke-width="1.4"/>
            <rect x="10" y="-5" width="12" height="5" rx="1.5" fill="${isActive ? 'var(--acc)' : 'var(--ln)'}"/>
            <text x="16" y="25" text-anchor="middle" fill="${isActive ? 'var(--acc)' : 'var(--ink-m)'}" font-size="9" font-weight="700">Base</text>

            <path d="M 37 15 L 47 15 M 47 27 L 37 27" stroke="${isActive ? 'var(--ok)' : 'var(--ln)'}" stroke-width="1.6" stroke-linecap="round"/>

            <rect x="52" y="0" width="32" height="42" rx="4" fill="var(--sf)" stroke="${isActive ? 'var(--ok)' : 'var(--ln)'}" stroke-width="1.4"/>
            <rect x="62" y="-5" width="12" height="5" rx="1.5" fill="${isActive ? 'var(--ok)' : 'var(--ok)'}"/>
            <text x="68" y="25" text-anchor="middle" fill="${isActive ? 'var(--ok)' : 'var(--ink-m)'}" font-size="9" font-weight="700">Sub</text>
          </g>
        `;
      } else if (p.id === "isp") {
        glyph = `
          <g transform="translate(${cx + 42}, 145)">
            <!-- Three specialized tailored ports -->
            <rect x="0" y="0" width="70" height="11" rx="2" fill="var(--sf)" stroke="${isActive ? 'var(--acc)' : 'var(--ln)'}" stroke-width="1.2"/>
            <circle cx="12" cy="5.5" r="2" fill="${isActive ? 'var(--acc)' : 'var(--ink-m)'}"/>
            <text x="38" y="9" font-size="7.5" font-weight="700" fill="var(--ink-m)" class="mono">IWorkable</text>

            <rect x="0" y="16" width="70" height="11" rx="2" fill="var(--sf)" stroke="${isActive ? 'var(--ok)' : 'var(--ln)'}" stroke-width="1.2"/>
            <circle cx="12" cy="21.5" r="2" fill="${isActive ? 'var(--ok)' : 'var(--ink-m)'}"/>
            <text x="38" y="25" font-size="7.5" font-weight="700" fill="var(--ink-m)" class="mono">IFeedable</text>

            <rect x="0" y="32" width="70" height="11" rx="2" fill="var(--sf)" stroke="${isActive ? 'var(--warn)' : 'var(--ln)'}" stroke-width="1.2"/>
            <circle cx="12" cy="37.5" r="2" fill="${isActive ? 'var(--warn)' : 'var(--ink-m)'}"/>
            <text x="38" y="41" font-size="7.5" font-weight="700" fill="var(--ink-m)" class="mono">ISleepable</text>
          </g>
        `;
      } else if (p.id === "dip") {
        glyph = `
          <g transform="translate(${cx + 36}, 140)">
            <!-- Top Box -->
            <rect x="18" y="0" width="46" height="15" rx="3" fill="var(--sf)" stroke="${isActive ? 'var(--acc)' : 'var(--ln)'}" stroke-width="1.2"/>
            <text x="41" y="11" text-anchor="middle" font-size="7.5" font-weight="700" fill="var(--ink)">High-Level</text>

            <!-- Down arrow to Interface -->
            <line x1="41" y1="15" x2="41" y2="24" stroke="var(--acc)" stroke-width="1.5" marker-end="url(#solid-arrow-acc)"/>

            <!-- Central Interface Diamond -->
            <polygon points="41,25 56,33 41,41 26,33" fill="var(--sf2)" stroke="${isActive ? 'var(--ok)' : 'var(--acc)'}" stroke-width="1.4"/>
            <text x="41" y="35" text-anchor="middle" font-size="6.5" font-weight="700" fill="var(--acc-b)">Interface</text>

            <!-- Upward Inverted arrow from Low-Level -->
            <line x1="41" y1="52" x2="41" y2="43" stroke="var(--ok)" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#solid-realize-ok)"/>

            <!-- Bottom Box -->
            <rect x="18" y="52" width="46" height="15" rx="3" fill="var(--sf)" stroke="${isActive ? 'var(--ok)' : 'var(--ln)'}" stroke-width="1.2"/>
            <text x="41" y="63" text-anchor="middle" font-size="7.5" font-weight="700" fill="var(--ink)">Low-Level</text>
          </g>
        `;
      }

      columnsMarkup += `
        <g id="solid-col-${p.id}" style="cursor: pointer;">
          <!-- Card Background -->
          <rect x="${cx}" y="${startY}" width="${colW}" height="${cardH}" rx="10"
                fill="${bgCol}" stroke="${strokeCol}" stroke-width="${strokeW}" ${glowFilter}/>

          <!-- Top Principle Letter Badge -->
          <circle cx="${cx + colW / 2}" cy="${startY + 38}" r="22" fill="${badgeBg}" stroke="${isActive ? 'var(--acc-b)' : 'var(--ln)'}" stroke-width="1.4"/>
          <text x="${cx + colW / 2}" cy="${startY + 46}" text-anchor="middle" fill="${badgeTextCol}"
                font-size="21" font-weight="800" class="mono">${p.letter}</text>

          <!-- Acronym -->
          <text x="${cx + colW / 2}" cy="${startY + 80}" text-anchor="middle" fill="var(--acc-b)"
                font-size="11.5" font-weight="700" class="mono">${p.id.toUpperCase()}</text>

          <!-- Arabic Principle Name -->
          <text x="${cx + colW / 2}" cy="${startY + 102}" text-anchor="middle" fill="var(--ink)"
                font-size="11" font-weight="800" class="ar-txt">${p.name_ar}</text>

          <line x1="${cx + 14}" y1="${startY + 116}" x2="${cx + colW - 14}" y2="${startY + 116}" stroke="var(--ln)" stroke-width="1"/>

          <!-- Visual Metaphor Glyph -->
          ${glyph}

          <!-- Golden Rule text -->
          <text x="${cx + colW / 2}" cy="${startY + 218}" text-anchor="middle" fill="var(--ink)"
                font-size="9.5" font-weight="700" class="ar-txt">${p.short_rule}</text>

          <!-- Slide ref pill -->
          <rect x="${cx + 22}" y="${startY + 238}" width="${colW - 44}" height="22" rx="4"
                fill="var(--sf)" stroke="${isActive ? 'var(--acc)' : 'var(--ln)'}" stroke-width="1"/>
          <text x="${cx + colW / 2}" cy="${startY + 253}" text-anchor="middle" fill="${isActive ? 'var(--acc-b)' : 'var(--ink-m)'}"
                font-size="9.5" font-weight="700" class="mono">${p.slide}</text>
        </g>
      `;
    });

    return `
      <svg viewBox="0 0 ${svgW} ${svgH}" dir="ltr" direction="ltr" class="int-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        ${getSolidSvgDefs()}
        ${columnsMarkup}
      </svg>
    `;
  }

  /* ───────────────────────────────────────────────────────────
     2. الدالة التوليدية للتاب 2: محاكي تفكيك كائن الإله (SRP Simulator)
     ─────────────────────────────────────────────────────────── */
  function buildSrpSimulationSvg(isRefactored) {
    const svgW = 860;
    const svgH = 390;

    if (!isRefactored) {
      // ─── Before: God Object (OrderManager) ───
      return `
        <svg viewBox="0 0 ${svgW} ${svgH}" dir="ltr" direction="ltr" class="int-svg" fill="none"
             stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
          ${getSolidSvgDefs()}

          <!-- Background subtle grid -->
          <g stroke="var(--ln)" stroke-width="0.8" opacity="0.3">
            <line x1="30" y1="190" x2="830" y2="190" stroke-dasharray="3 5"/>
            <line x1="210" y1="20" x2="210" y2="350" stroke-dasharray="3 5"/>
            <line x1="650" y1="20" x2="650" y2="350" stroke-dasharray="3 5"/>
          </g>

          <!-- External Actor 1: CFO (Finance) -->
          <g transform="translate(25, 75)">
            <rect x="0" y="0" width="160" height="60" rx="8" fill="var(--sf2)" stroke="var(--warn)" stroke-width="1.6"/>
            <text x="80" y="26" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="800" class="ar-txt">المدير المالي (CFO)</text>
            <text x="80" y="44" text-anchor="middle" fill="var(--warn)" font-size="9" font-weight="700" class="mono">Actor: Finance Dept</text>
            <line x1="160" y1="30" x2="230" y2="90" stroke="var(--warn)" stroke-width="1.8" marker-end="url(#solid-arrow-acc)"/>
          </g>

          <!-- External Actor 2: CTO (DBA) -->
          <g transform="translate(25, 205)">
            <rect x="0" y="0" width="160" height="60" rx="8" fill="var(--sf2)" stroke="var(--err)" stroke-width="1.6"/>
            <text x="80" y="26" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="800" class="ar-txt">مسؤول البيانات (CTO)</text>
            <text x="80" y="44" text-anchor="middle" fill="var(--err)" font-size="9" font-weight="700" class="mono">Actor: Database Admins</text>
            <line x1="160" y1="30" x2="230" y2="225" stroke="var(--err)" stroke-width="1.8" marker-end="url(#solid-arrow-err)"/>
          </g>

          <!-- External Actor 3: Invoicing Dept -->
          <g transform="translate(675, 75)">
            <rect x="0" y="0" width="160" height="60" rx="8" fill="var(--sf2)" stroke="var(--warn)" stroke-width="1.6"/>
            <text x="80" y="26" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="800" class="ar-txt">قسم الفواتير (Accounts)</text>
            <text x="80" y="44" text-anchor="middle" fill="var(--warn)" font-size="9" font-weight="700" class="mono">Actor: Invoicing Staff</text>
            <line x1="0" y1="30" x2="-45" y2="90" stroke="var(--warn)" stroke-width="1.8" marker-end="url(#solid-arrow-acc)"/>
          </g>

          <!-- External Actor 4: Customer Support -->
          <g transform="translate(675, 205)">
            <rect x="0" y="0" width="160" height="60" rx="8" fill="var(--sf2)" stroke="var(--acc)" stroke-width="1.6"/>
            <text x="80" y="26" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="800" class="ar-txt">خدمة العملاء (Support)</text>
            <text x="80" y="44" text-anchor="middle" fill="var(--acc-b)" font-size="9" font-weight="700" class="mono">Actor: Notifications</text>
            <line x1="0" y1="30" x2="-45" y2="225" stroke="var(--acc)" stroke-width="1.8" marker-end="url(#solid-arrow-acc)"/>
          </g>

          <!-- Central Monolith: OrderManager (God Object) -->
          <g transform="translate(230, 30)">
            <rect x="0" y="0" width="400" height="270" rx="12"
                  fill="color-mix(in srgb, var(--err) 8%, var(--sf2))"
                  stroke="var(--err)" stroke-width="2.2" filter="url(#solid-glow-err)"/>

            <rect x="0" y="0" width="400" height="38" rx="12" fill="color-mix(in srgb, var(--err) 20%, var(--sf2))"/>
            <text x="200" y="24" text-anchor="middle" fill="var(--err)" font-size="12" font-weight="800" class="mono">
              OrderManager (God Object - كائن الإله المتضخم)
            </text>

            <!-- 4 Tangled internal boxes -->
            <!-- Box 1: Calculation -->
            <rect x="15" y="50" width="175" height="90" rx="6" fill="var(--sf)" stroke="var(--err)" stroke-width="1.2"/>
            <text x="25" y="70" fill="var(--err)" font-size="10.5" font-weight="800" class="mono">+ CalculateTotal()</text>
            <text x="25" y="90" fill="var(--ink)" font-size="9.5" font-weight="700" class="ar-txt">حساب الضرائب والخصومات</text>
            <text x="25" y="115" fill="var(--ink-m)" font-size="8.5" font-weight="700" class="ar-txt">مملوك لـ: الإدارة المالية</text>

            <!-- Box 2: Invoicing -->
            <rect x="210" y="50" width="175" height="90" rx="6" fill="var(--sf)" stroke="var(--err)" stroke-width="1.2"/>
            <text x="220" y="70" fill="var(--err)" font-size="10.5" font-weight="800" class="mono">+ GeneratePdfInvoice()</text>
            <text x="220" y="90" fill="var(--ink)" font-size="9.5" font-weight="700" class="ar-txt">تنسيق وطباعة الفاتورة</text>
            <text x="220" y="115" fill="var(--ink-m)" font-size="8.5" font-weight="700" class="ar-txt">مملوك لـ: قسم المحاسبة</text>

            <!-- Box 3: Persistence -->
            <rect x="15" y="160" width="175" height="90" rx="6" fill="var(--sf)" stroke="var(--err)" stroke-width="1.2"/>
            <text x="25" y="180" fill="var(--err)" font-size="10.5" font-weight="800" class="mono">+ SaveToDatabase()</text>
            <text x="25" y="200" fill="var(--ink)" font-size="9.5" font-weight="700" class="ar-txt">استعلامات وجداول SQL</text>
            <text x="25" y="225" fill="var(--ink-m)" font-size="8.5" font-weight="700" class="ar-txt">مملوك لـ: مسؤولي البيانات</text>

            <!-- Box 4: Email -->
            <rect x="210" y="160" width="175" height="90" rx="6" fill="var(--sf)" stroke="var(--err)" stroke-width="1.2"/>
            <text x="220" y="180" fill="var(--err)" font-size="10.5" font-weight="800" class="mono">+ SendEmail()</text>
            <text x="220" y="200" fill="var(--ink)" font-size="9.5" font-weight="700" class="ar-txt">اتصال بخادم SMTP والبريد</text>
            <text x="220" y="225" fill="var(--ink-m)" font-size="8.5" font-weight="700" class="ar-txt">مملوك لـ: خدمة العملاء</text>

            <!-- Tangled criss-crossing internal lines -->
            <line x1="100" y1="140" x2="295" y2="160" stroke="#ef4444" stroke-width="1.6" stroke-dasharray="4 3"/>
            <line x1="295" y1="140" x2="100" y2="160" stroke="#ef4444" stroke-width="1.6" stroke-dasharray="4 3"/>
            <circle cx="200" cy="150" r="5" fill="#ef4444"/>
            <text x="200" y="153" text-anchor="middle" fill="#ffffff" font-size="7" font-weight="800">X</text>
          </g>

          <!-- Bottom Warning Banner -->
          <g transform="translate(60, 325)">
            <rect x="0" y="0" width="740" height="42" rx="8"
                  fill="color-mix(in srgb, var(--err) 12%, var(--sf))"
                  stroke="var(--err)" stroke-width="1.4"/>
            <text x="370" y="26" text-anchor="middle" fill="var(--err)" font-size="11" font-weight="800" class="ar-txt">
              انتهاك صارخ لـ SRP: أي تعديل في خادم SMTP قد يفسد حسابات الضريبة! وتعديل فريقين معاً يسبب تضارب دمج (Merge Conflicts).
            </text>
          </g>
        </svg>
      `;
    } else {
      // ─── After: Clean Responsibility (Decoupled Services) ───
      return `
        <svg viewBox="0 0 ${svgW} ${svgH}" dir="ltr" direction="ltr" class="int-svg" fill="none"
             stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
          ${getSolidSvgDefs()}

          <!-- Central Entity: Order (Data Only) -->
          <g transform="translate(330, 20)">
            <rect x="0" y="0" width="200" height="68" rx="8"
                  fill="var(--sf2)" stroke="var(--acc)" stroke-width="2" filter="url(#solid-glow-acc)"/>
            <text x="100" y="26" text-anchor="middle" fill="var(--ink)" font-size="12" font-weight="800" class="mono">Order (Entity)</text>
            <line x1="0" y1="36" x2="200" y2="36" stroke="var(--ln)" stroke-width="1"/>
            <text x="100" y="53" text-anchor="middle" fill="var(--acc-b)" font-size="9.5" font-weight="700" class="ar-txt">بيانات وحالة الطلب فقط (POCO)</text>
          </g>

          <!-- Flow arrows down to 3 dedicated services -->
          <path d="M 360 88 L 160 150" stroke="var(--ok)" stroke-width="2" stroke-dasharray="6 4" class="solid-flow" marker-end="url(#solid-arrow-ok)"/>
          <path d="M 430 88 L 430 150" stroke="var(--ok)" stroke-width="2" stroke-dasharray="6 4" class="solid-flow" marker-end="url(#solid-arrow-ok)"/>
          <path d="M 500 88 L 700 150" stroke="var(--ok)" stroke-width="2" stroke-dasharray="6 4" class="solid-flow" marker-end="url(#solid-arrow-ok)"/>

          <!-- 1. Left Service: InvoiceService -->
          <g transform="translate(45, 150)">
            <rect x="0" y="0" width="230" height="120" rx="8"
                  fill="var(--sf2)" stroke="var(--ok)" stroke-width="1.8"/>
            <rect x="0" y="0" width="230" height="28" rx="8" fill="color-mix(in srgb, var(--ok) 15%, var(--sf2))"/>
            <text x="115" y="19" text-anchor="middle" fill="var(--ok)" font-size="11" font-weight="800" class="mono">InvoiceService</text>

            <text x="15" y="48" fill="var(--ink)" font-size="10" font-weight="700" class="mono">+ CalculateTotal(Order)</text>
            <text x="15" y="68" fill="var(--ink)" font-size="10" font-weight="700" class="mono">+ GeneratePdf(Order)</text>
            <line x1="12" y1="80" x2="218" y2="80" stroke="var(--ln)" stroke-width="1"/>
            <text x="115" y="102" text-anchor="middle" fill="var(--acc-b)" font-size="9" font-weight="700" class="ar-txt">الفاعل الوحيد: الإدارة المالية (CFO)</text>
          </g>

          <!-- 2. Middle Service: OrderRepository -->
          <g transform="translate(315, 150)">
            <rect x="0" y="0" width="230" height="120" rx="8"
                  fill="var(--sf2)" stroke="var(--ok)" stroke-width="1.8"/>
            <rect x="0" y="0" width="230" height="28" rx="8" fill="color-mix(in srgb, var(--ok) 15%, var(--sf2))"/>
            <text x="115" y="19" text-anchor="middle" fill="var(--ok)" font-size="11" font-weight="800" class="mono">OrderRepository</text>

            <text x="15" y="48" fill="var(--ink)" font-size="10" font-weight="700" class="mono">+ Save(Order)</text>
            <text x="15" y="68" fill="var(--ink)" font-size="10" font-weight="700" class="mono">+ GetById(id): Order</text>
            <line x1="12" y1="80" x2="218" y2="80" stroke="var(--ln)" stroke-width="1"/>
            <text x="115" y="102" text-anchor="middle" fill="var(--acc-b)" font-size="9" font-weight="700" class="ar-txt">الفاعل الوحيد: مسؤولو البيانات (CTO)</text>
          </g>

          <!-- 3. Right Service: EmailNotifier -->
          <g transform="translate(585, 150)">
            <rect x="0" y="0" width="230" height="120" rx="8"
                  fill="var(--sf2)" stroke="var(--ok)" stroke-width="1.8"/>
            <rect x="0" y="0" width="230" height="28" rx="8" fill="color-mix(in srgb, var(--ok) 15%, var(--sf2))"/>
            <text x="115" y="19" text-anchor="middle" fill="var(--ok)" font-size="11" font-weight="800" class="mono">EmailNotifier</text>

            <text x="15" y="48" fill="var(--ink)" font-size="10" font-weight="700" class="mono">+ SendConfirmation(Order)</text>
            <text x="15" y="68" fill="var(--ink)" font-size="10" font-weight="700" class="mono">+ SendTracking(Order)</text>
            <line x1="12" y1="80" x2="218" y2="80" stroke="var(--ln)" stroke-width="1"/>
            <text x="115" y="102" text-anchor="middle" fill="var(--acc-b)" font-size="9" font-weight="700" class="ar-txt">الفاعل الوحيد: خدمة العملاء (Support)</text>
          </g>

          <!-- Bottom Success Banner -->
          <g transform="translate(60, 315)">
            <rect x="0" y="0" width="740" height="46" rx="8"
                  fill="color-mix(in srgb, var(--ok) 14%, var(--sf))"
                  stroke="var(--ok)" stroke-width="1.4"/>
            <text x="370" y="28" text-anchor="middle" fill="var(--ok)" font-size="11" font-weight="800" class="ar-txt">
              معمارية SRP النظيفة: كل صنف له سبب واحد فقط للتغيير (Single Reason to Change) ويخدم فاعلاً واحداً. استقلالية تامة وصفر تضارب في Git!
            </text>
          </g>
        </svg>
      `;
    }
  }

  /* ───────────────────────────────────────────────────────────
     3. الدالة التوليدية للتاب 3: محاكي الفتح والإغلاق (OCP Simulator)
     ─────────────────────────────────────────────────────────── */
  function buildOcpSimulationSvg(isOcpGood, activeMethod, isSimulating) {
    const svgW = 860;
    const svgH = 390;

    if (!isOcpGood) {
      // ─── Violating OCP (Switch / If-else Monolith) ───
      return `
        <svg viewBox="0 0 ${svgW} ${svgH}" dir="ltr" direction="ltr" class="int-svg" fill="none"
             stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
          ${getSolidSvgDefs()}

          <g transform="translate(180, 30)">
            <rect x="0" y="0" width="500" height="260" rx="10"
                  fill="color-mix(in srgb, var(--err) 8%, var(--sf2))"
                  stroke="var(--err)" stroke-width="2.2" filter="url(#solid-glow-err)"/>

            <rect x="0" y="0" width="500" height="38" rx="10" fill="color-mix(in srgb, var(--err) 20%, var(--sf2))"/>
            <text x="250" y="24" text-anchor="middle" fill="var(--err)" font-size="12" font-weight="800" class="mono">
              PaymentProcessor (منتهك لـ OCP - Closed for Extension!)
            </text>

            <!-- Code Simulation inside box -->
            <g transform="translate(30, 55)">
              <text x="0" y="20" fill="var(--ink)" font-size="11" font-weight="700" class="mono">public void Process(string type, decimal amount) {</text>
              <text x="20" y="42" fill="var(--ink-m)" font-size="10.5" font-weight="700" class="mono">switch (type) {</text>
              <text x="40" y="64" fill="var(--ok)" font-size="10.5" font-weight="700" class="mono">case "CreditCard": PayViaVisa(); break;</text>
              <text x="40" y="86" fill="var(--ok)" font-size="10.5" font-weight="700" class="mono">case "PayPal": PayViaPayPal(); break;</text>
              <text x="40" y="108" fill="var(--ok)" font-size="10.5" font-weight="700" class="mono">case "Crypto": PayViaBtc(); break;</text>
              
              <!-- Red highlighted modification row -->
              <rect x="35" y="118" width="400" height="26" rx="4" fill="color-mix(in srgb, var(--err) 25%, var(--sf))" stroke="var(--err)" stroke-width="1.2"/>
              <text x="40" y="135" fill="var(--err)" font-size="10.5" font-weight="800" class="mono">case "ApplePay": PayViaApple(); break; // فتح الملف والتعديل!</text>

              <text x="20" y="166" fill="var(--ink-m)" font-size="10.5" font-weight="700" class="mono">}</text>
              <text x="0" y="188" fill="var(--ink)" font-size="11" font-weight="700" class="mono">}</text>
            </g>
          </g>

          <!-- Bottom Warning Banner -->
          <g transform="translate(60, 315)">
            <rect x="0" y="0" width="740" height="46" rx="8"
                  fill="color-mix(in srgb, var(--err) 12%, var(--sf))"
                  stroke="var(--err)" stroke-width="1.4"/>
            <text x="370" y="28" text-anchor="middle" fill="var(--err)" font-size="11" font-weight="800" class="ar-txt">
              انتهاك OCP: إضافة وسيلة ApplePay أجبرتنا على فتح ملف PaymentProcessor والتعديل فيه مباشرة، مما يهدد استقرار الكود القديم!
            </text>
          </g>
        </svg>
      `;
    } else {
      // ─── Good OCP: Abstraction & Polymorphism ───
      const methods = [
        { id: "credit", name: "CreditCardPayment", desc: "بطاقة ائتمانية" },
        { id: "paypal", name: "PayPalPayment", desc: "محفظة باي بال" },
        { id: "crypto", name: "CryptoPayment", desc: "عملات رقمية" },
        { id: "applepay", name: "ApplePayPayment", desc: "آبل باي (إضافة جديدة)" },
      ];

      return `
        <svg viewBox="0 0 ${svgW} ${svgH}" dir="ltr" direction="ltr" class="int-svg" fill="none"
             stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
          ${getSolidSvgDefs()}

          <!-- 1. Core High-Level Module: PaymentProcessor (Closed for Modification) -->
          <g transform="translate(35, 75)">
            <rect x="0" y="0" width="260" height="190" rx="10"
                  fill="var(--sf2)" stroke="var(--acc)" stroke-width="2.2" filter="url(#solid-glow-acc)"/>
            <rect x="0" y="0" width="260" height="34" rx="10" fill="color-mix(in srgb, var(--acc) 18%, var(--sf2))"/>
            <text x="130" y="22" text-anchor="middle" fill="var(--ink)" font-size="12" font-weight="800" class="mono">PaymentProcessor</text>

            <rect x="25" y="44" width="210" height="24" rx="5" fill="color-mix(in srgb, var(--ok) 18%, var(--sf))" stroke="var(--ok)" stroke-width="1.2"/>
            <text x="130" y="60" text-anchor="middle" fill="var(--ok)" font-size="9" font-weight="800" class="ar-txt">مغلق للتعديل (Closed for Mod)</text>

            <text x="15" y="95" fill="var(--ink)" font-size="10" font-weight="700" class="mono">+ Checkout(IPaymentMethod, amt)</text>
            <text x="25" y="118" fill="var(--ink-m)" font-size="9.5" font-weight="700" class="mono">{ return method.Pay(amt); }</text>
            
            <line x1="15" y1="135" x2="245" y2="135" stroke="var(--ln)" stroke-width="1"/>
            <text x="130" y="156" text-anchor="middle" fill="var(--acc-b)" font-size="9" font-weight="700" class="ar-txt">يعتمد فقط على العقد المجرد</text>
            <text x="130" y="174" text-anchor="middle" fill="var(--ink-m)" font-size="8.5" font-weight="700" class="ar-txt">تعددية الأشكال (Polymorphism)</text>
          </g>

          <!-- Arrow from PaymentProcessor to IPaymentMethod -->
          <line x1="295" y1="170" x2="350" y2="170" stroke="var(--acc)" stroke-width="2" marker-end="url(#solid-arrow-acc)"/>

          <!-- 2. The Abstraction Interface: IPaymentMethod -->
          <g transform="translate(355, 110)">
            <rect x="0" y="0" width="200" height="120" rx="10"
                  fill="color-mix(in srgb, var(--acc) 12%, var(--sf2))"
                  stroke="var(--acc-b)" stroke-width="2"/>
            <text x="100" y="24" text-anchor="middle" fill="var(--acc-b)" font-size="10" font-weight="700" class="mono">&lt;&lt;interface&gt;&gt;</text>
            <text x="100" y="44" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="800" class="mono">IPaymentMethod</text>
            <line x1="0" y1="56" x2="200" y2="56" stroke="var(--ln)" stroke-width="1.2"/>
            <text x="15" y="80" fill="var(--ok)" font-size="10.5" font-weight="800" class="mono">+ Pay(decimal): bool</text>
            <text x="100" y="106" text-anchor="middle" fill="var(--ink-m)" font-size="8.5" font-weight="700" class="ar-txt">عقد برمجيات مفتوح للتوسيع</text>
          </g>

          <!-- 3. Concrete Implementations (Plugins) -->
          ${methods
            .map((m, idx) => {
              const my = 28 + idx * 72;
              const isSelected = m.id === activeMethod;
              const strokeColor = isSelected ? "var(--ok)" : "var(--ln)";
              const strokeWidth = isSelected ? "2.2" : "1.4";
              const bgColor = isSelected ? "color-mix(in srgb, var(--ok) 15%, var(--sf2))" : "var(--sf2)";
              const flowClass = isSelected && isSimulating ? 'stroke="var(--ok)" stroke-dasharray="6 4" class="solid-flow"' : 'stroke="var(--ln)" stroke-dasharray="4 3"';

              return `
                <g id="ocp-plug-${m.id}" transform="translate(605, ${my})">
                  <!-- Realization Line to Interface -->
                  <path d="M 0 32 L -50 ${165 - my}" fill="none" ${flowClass} stroke-width="1.8" marker-end="url(#solid-realize-ok)"/>

                  <rect x="0" y="0" width="225" height="62" rx="8"
                        fill="${bgColor}" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
                  <text x="18" y="24" fill="${isSelected ? "var(--ok)" : "var(--ink)"}" font-size="10.5" font-weight="800" class="mono">${m.name}</text>
                  <text x="18" y="44" fill="var(--ink-m)" font-size="9" font-weight="700" class="ar-txt">${m.desc}</text>
                  ${isSelected ? `<circle cx="205" cy="31" r="5" fill="var(--ok)" class="solid-pulse"/>` : ""}
                </g>
              `;
            })
            .join("")}

          <!-- Bottom Success Banner -->
          <g transform="translate(60, 330)">
            <rect x="0" y="0" width="740" height="42" rx="8"
                  fill="color-mix(in srgb, var(--ok) 14%, var(--sf))"
                  stroke="var(--ok)" stroke-width="1.4"/>
            <text x="370" y="26" text-anchor="middle" fill="var(--ok)" font-size="11" font-weight="800" class="ar-txt">
              ${isSimulating ? "جاري المعالجة الحية: تدفق الدفع يتم بسلاسة عبر الواجهة المجردة دون مساس بالصنف الأساسي!" : "عمارة OCP: إضافة أي وسيلة دفع جديدة تتم بإنشاء صنف مستقل يطبق IPaymentMethod دون فتح ملف المعالج نهائياً!"}
            </text>
          </g>
        </svg>
      `;
    }
  }

  /* ───────────────────────────────────────────────────────────
     4. الدالة التوليدية للتاب 4: محاكي قلب الاعتمادية وحقن التبعيات (DIP)
     ─────────────────────────────────────────────────────────── */
  function buildDipSimulationSvg(isDecoupled, activeChannel, isNotifying) {
    const svgW = 860;
    const svgH = 390;

    if (!isDecoupled) {
      // ─── Tightly Coupled Violation ───
      return `
        <svg viewBox="0 0 ${svgW} ${svgH}" dir="ltr" direction="ltr" class="int-svg" fill="none"
             stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
          ${getSolidSvgDefs()}

          <!-- Top High-Level: OrderService -->
          <g transform="translate(265, 30)">
            <rect x="0" y="0" width="330" height="100" rx="8"
                  fill="color-mix(in srgb, var(--err) 8%, var(--sf2))"
                  stroke="var(--err)" stroke-width="2.2" filter="url(#solid-glow-err)"/>
            <rect x="0" y="0" width="330" height="28" rx="8" fill="color-mix(in srgb, var(--err) 20%, var(--sf2))"/>
            <text x="165" y="19" text-anchor="middle" fill="var(--err)" font-size="11.5" font-weight="800" class="mono">OrderService (High-Level Module)</text>

            <text x="15" y="52" fill="var(--ink)" font-size="10.5" font-weight="700" class="mono">private SmtpClient _smtp = new SmtpClient();</text>
            <text x="15" y="72" fill="var(--ink)" font-size="10.5" font-weight="700" class="mono">private TwilioSms _sms = new TwilioSms();</text>
            <text x="165" y="92" text-anchor="middle" fill="var(--err)" font-size="9" font-weight="800" class="ar-txt">ارتباط مباشر بالتقنيات منخفضة المستوى!</text>
          </g>

          <!-- Thick Red Arrows pointing DOWN -->
          <line x1="360" y1="130" x2="220" y2="215" stroke="var(--err)" stroke-width="2.4" marker-end="url(#solid-arrow-err)"/>
          <line x1="500" y1="130" x2="640" y2="215" stroke="var(--err)" stroke-width="2.4" marker-end="url(#solid-arrow-err)"/>

          <!-- Bottom Concrete 1: SmtpClient -->
          <g transform="translate(80, 215)">
            <rect x="0" y="0" width="280" height="85" rx="8"
                  fill="var(--sf2)" stroke="var(--err)" stroke-width="1.6"/>
            <text x="140" y="26" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="800" class="mono">SmtpClient (Low-Level Detail)</text>
            <line x1="0" y1="36" x2="280" y2="36" stroke="var(--ln)" stroke-width="1"/>
            <text x="140" y="58" text-anchor="middle" fill="var(--ink-m)" font-size="9.5" font-weight="700" class="ar-txt">تفاصيل منافذ SMTP وخادم الإيميل</text>
            <text x="140" y="74" text-anchor="middle" fill="var(--err)" font-size="8.5" font-weight="700" class="ar-txt">تغيير المزود يكسر OrderService!</text>
          </g>

          <!-- Bottom Concrete 2: TwilioSms -->
          <g transform="translate(500, 215)">
            <rect x="0" y="0" width="280" height="85" rx="8"
                  fill="var(--sf2)" stroke="var(--err)" stroke-width="1.6"/>
            <text x="140" y="26" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="800" class="mono">TwilioSms (Low-Level Detail)</text>
            <line x1="0" y1="36" x2="280" y2="36" stroke="var(--ln)" stroke-width="1"/>
            <text x="140" y="58" text-anchor="middle" fill="var(--ink-m)" font-size="9.5" font-weight="700" class="ar-txt">مفاتيح API وبروتوكولات الرسائل القصيرة</text>
            <text x="140" y="74" text-anchor="middle" fill="var(--err)" font-size="8.5" font-weight="700" class="ar-txt">عاجز عن اختبار Unit Testing بدون إنترنت!</text>
          </g>

          <!-- Bottom Warning Banner -->
          <g transform="translate(60, 325)">
            <rect x="0" y="0" width="740" height="44" rx="8"
                  fill="color-mix(in srgb, var(--err) 12%, var(--sf))"
                  stroke="var(--err)" stroke-width="1.4"/>
            <text x="370" y="27" text-anchor="middle" fill="var(--err)" font-size="10.5" font-weight="800" class="ar-txt">
              انتهاك DIP: الطبقة العليا تعتمد على التفاصيل الدنيا! الأسهم متجهة للأسفل، والاختبارات الموكينغ (Mocking) مستحيلة.
            </text>
          </g>
        </svg>
      `;
    } else {
      // ─── Decoupled DIP (Inverted Arrows pointing to Abstraction) ───
      const channels = [
        { id: "email", name: "EmailNotifier", desc: "خادم البريد (SMTP)" },
        { id: "sms", name: "SmsNotifier", desc: "بوابة الرسائل (SMS)" },
        { id: "telegram", name: "TelegramNotifier", desc: "بوت تيليجرام (Telegram)" },
      ];

      return `
        <svg viewBox="0 0 ${svgW} ${svgH}" dir="ltr" direction="ltr" class="int-svg" fill="none"
             stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
          ${getSolidSvgDefs()}

          <!-- Top DI Container Note (Composition Root) -->
          <g transform="translate(30, 30)">
            <rect x="0" y="0" width="190" height="70" rx="8" fill="var(--sf)" stroke="var(--ok)" stroke-width="1.4"/>
            <text x="95" y="24" text-anchor="middle" fill="var(--ok)" font-size="10" font-weight="800" class="mono">DI Container (جذر التركيب)</text>
            <text x="95" y="44" text-anchor="middle" fill="var(--ink-m)" font-size="8.5" font-weight="700" class="ar-txt">حقن ${activeChannel.toUpperCase()} عبر المنشئ</text>
            <path d="M 190 35 L 260 50" stroke="var(--ok)" stroke-width="1.8" stroke-dasharray="4 3" marker-end="url(#solid-arrow-ok)"/>
          </g>

          <!-- Top High-Level: OrderService (Depends on Abstraction) -->
          <g transform="translate(265, 20)">
            <rect x="0" y="0" width="330" height="85" rx="8"
                  fill="var(--sf2)" stroke="var(--acc)" stroke-width="2" filter="url(#solid-glow-acc)"/>
            <rect x="0" y="0" width="330" height="26" rx="8" fill="color-mix(in srgb, var(--acc) 18%, var(--sf2))"/>
            <text x="165" y="18" text-anchor="middle" fill="var(--ink)" font-size="11.5" font-weight="800" class="mono">OrderService (High-Level Module)</text>

            <text x="15" y="48" fill="var(--ok)" font-size="10.5" font-weight="800" class="mono">public OrderService(INotificationChannel ch)</text>
            <text x="165" y="72" text-anchor="middle" fill="var(--acc-b)" font-size="9" font-weight="700" class="ar-txt">يعتمد 100% على التجريد (Abstractions)</text>
          </g>

          <!-- Downward arrow from OrderService to Interface -->
          <line x1="430" y1="105" x2="430" y2="145" stroke="var(--acc)" stroke-width="2" marker-end="url(#solid-arrow-acc)"/>

          <!-- Central Interface: INotificationChannel -->
          <g transform="translate(275, 145)">
            <rect x="0" y="0" width="310" height="75" rx="8"
                  fill="color-mix(in srgb, var(--acc) 14%, var(--sf2))"
                  stroke="var(--acc-b)" stroke-width="2.2"/>
            <text x="155" y="20" text-anchor="middle" fill="var(--acc-b)" font-size="9.5" font-weight="700" class="mono">&lt;&lt;interface&gt;&gt;</text>
            <text x="155" y="38" text-anchor="middle" fill="var(--ink)" font-size="12" font-weight="800" class="mono">INotificationChannel</text>
            <line x1="0" y1="46" x2="310" y2="46" stroke="var(--ln)" stroke-width="1"/>
            <text x="155" y="63" text-anchor="middle" fill="var(--ok)" font-size="10" font-weight="800" class="mono">+ Send(to, msg): void</text>
          </g>

          <!-- Bottom 3 Concrete Channels with INVERTED ARROWS (Pointing UPWARD!) -->
          ${channels
            .map((c, idx) => {
              const cx = 45 + idx * 265;
              const isSelected = c.id === activeChannel;
              const strokeColor = isSelected ? "var(--ok)" : "var(--ln)";
              const strokeWidth = isSelected ? "2.2" : "1.4";
              const bgColor = isSelected ? "color-mix(in srgb, var(--ok) 15%, var(--sf2))" : "var(--sf2)";
              const flowClass = isSelected && isNotifying ? 'stroke="var(--ok)" stroke-dasharray="6 4" class="solid-flow"' : 'stroke="var(--ln)" stroke-dasharray="4 3"';

              // Target point on interface bottom edge
              const targetX = 330 + idx * 100;

              return `
                <g id="dip-chan-${c.id}" transform="translate(${cx}, 265)">
                  <!-- Inverted Arrow pointing UP to Interface -->
                  <path d="M 125 0 L ${targetX - cx} -45" fill="none" ${flowClass} stroke-width="1.8" marker-end="url(#solid-realize-ok)"/>

                  <rect x="0" y="0" width="240" height="60" rx="8"
                        fill="${bgColor}" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
                  <text x="120" y="25" text-anchor="middle" fill="${isSelected ? "var(--ok)" : "var(--ink)"}" font-size="11" font-weight="800" class="mono">${c.name}</text>
                  <text x="120" y="45" text-anchor="middle" fill="var(--ink-m)" font-size="9" font-weight="700" class="ar-txt">${c.desc}</text>
                  ${isSelected ? `<circle cx="220" cy="30" r="5" fill="var(--ok)" class="solid-pulse"/>` : ""}
                </g>
              `;
            })
            .join("")}

          <!-- Bottom Success Banner -->
          <g transform="translate(60, 342)">
            <rect x="0" y="0" width="740" height="38" rx="8"
                  fill="color-mix(in srgb, var(--ok) 14%, var(--sf))"
                  stroke="var(--ok)" stroke-width="1.4"/>
            <text x="370" y="24" text-anchor="middle" fill="var(--ok)" font-size="10.5" font-weight="800" class="ar-txt">
              ${isNotifying ? "تم الإرسال بنجاح! تم حقن القناة عبر المنشئ دون أن يعرف OrderService أي تفاصيل ملموسة." : "قلب الاعتمادية المكتمل: الأسهم انقلبت للأعلى نحو الواجهة المجردة! كلاهما يعتمد على التجريد."}
            </text>
          </g>
        </svg>
      `;
    }
  }

  /* ───────────────────────────────────────────────────────────
     كائن النموذج التأسيسي: استوديو مبادئ SOLID المعمارية
     ─────────────────────────────────────────────────────────── */
  const SOLID_STUDIO_MODEL = {
    id: "solid-architecture-studio",
    module: "L1",
    module_title: "الوحدة 1 · مبادئ SOLID المعمارية",
    ref: "L1-S005",
    title_ar: "استوديو مبادئ SOLID المعمارية وتفكيك الارتباط الوثيق",
    title_en: "SOLID Architecture Studio & Decoupling Simulator",
    desc_ar: "استوديو معماري تفاعلي يشرح مبادئ SOLID الخمسة مع محاكاة بصرية لتفكيك كائن الإله (God Object) إلى فئات مستقلة (SRP)، وتوسيع السلوك بلا تعديل (OCP)، وحل الارتباط الوثيق عبر حقن التبعيات (DIP).",
    badge: "مبادئ العمارة · SOLID Studio",
    tip: "وقفة امتحانية مؤكدة: تركز د. بيداء في أسئلة SOLID على: 1. SRP تعني سبب واحد للتغيير (Single Reason to Change). 2. OCP تعني مفتوح للتوسيع مغلق للتعديل. 3. DIP تعني أن الطبقات العليا والدنيا تعتمد على التجريد (Interfaces) وليس على الفئات الملموسة.",

    render: function (card, utils) {
      const { el, clear, svgNode, iconSvg, slideRefAttrs, ICONS } = utils;

      let activeSolidTab = "matrix"; // "matrix" | "srp" | "ocp" | "dip"
      let activePrincipleId = "srp"; // For Matrix tab drilldown

      // SRP State
      let srpRefactored = false;

      // OCP State
      let ocpGood = true;
      let ocpActiveMethod = "applepay";
      let ocpSimulating = false;

      // DIP State
      let dipDecoupled = true;
      let dipActiveChannel = "telegram";
      let dipNotifying = false;

      const tabsBar = el("div", { class: "int-tabs-bar" });
      const solidTabs = [
        { id: "matrix", label: "1. مصفوفة مبادئ SOLID الخمسة" },
        { id: "srp", label: "2. محاكي SRP (تفكيك كائن الإله)" },
        { id: "ocp", label: "3. محاكي OCP (التوسيع بلا تعديل)" },
        { id: "dip", label: "4. محاكي DIP (حقن التبعيات)" },
      ];

      const stageWrap = el("div", { class: "int-stage-wrap" });

      function renderCurrentTab() {
        clear(stageWrap);

        // ═════════════════════════════════════════════════════════
        // TAB 1: مصفوفة مبادئ SOLID الخمسة
        // ═════════════════════════════════════════════════════════
        if (activeSolidTab === "matrix") {
          const pane = el("div", { class: "int-pane" });

          pane.appendChild(
            el(
              "div",
              { class: "int-tip" },
              el("span", { class: "wt" }, "دستور العمارة النظيفة (Robert C. Martin / Uncle Bob):"),
              "صاغ روبرت مارتن مبادئ SOLID الخمسة لتكون الركائز الهندسية التي تمنع تعفن البرمجيات (Software Rot) وتنقذ المشاريع من الروائح التصميمية الأربعة: الصلابة (Rigidity)، الهشاشة (Fragility)، عدم القدرة على التنقل (Immobility)، واللزوجة (Viscosity). انقر على أي مبدأ في المصفوفة بالأسفل لمعاينته بالتفصيل:",
            ),
          );

          // Principles Pills for direct selection
          const pillsWrap = el("div", { class: "int-sim-pills", style: "margin-bottom: 12px;" });
          SOLID_PRINCIPLES_DATA.forEach((p) => {
            const isSel = p.id === activePrincipleId;
            pillsWrap.appendChild(
              el(
                "button",
                {
                  class: "int-toggle-btn" + (isSel ? " on" : ""),
                  onclick: () => {
                    activePrincipleId = p.id;
                    renderCurrentTab();
                  },
                },
                el("span", { class: "mono", style: "font-weight: 800; margin-left: 4px;" }, p.letter),
                p.name_ar,
              ),
            );
          });
          pane.appendChild(pillsWrap);

          // SVG Matrix
          const svgBox = el("div", { class: "int-svg-wrap" });
          svgBox.innerHTML = buildSolidMatrixSvg(activePrincipleId);
          // Attach click listeners to SVG column groups
          SOLID_PRINCIPLES_DATA.forEach((p) => {
            const colEl = svgBox.querySelector(`#solid-col-${p.id}`);
            if (colEl) {
              colEl.addEventListener("click", () => {
                activePrincipleId = p.id;
                renderCurrentTab();
              });
            }
          });
          pane.appendChild(svgBox);

          // Detailed Drilldown Card for selected principle
          const currP = SOLID_PRINCIPLES_DATA.find((p) => p.id === activePrincipleId) || SOLID_PRINCIPLES_DATA[0];

          const detailCard = el(
            "div",
            {
              style:
                "margin-top: 18px; padding: 18px; border-radius: 10px; background: var(--sf2); border: 1.5px solid var(--ln);",
            },
            el(
              "div",
              { style: "display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;" },
              el(
                "div",
                { style: "display: flex; align-items: center; gap: 8px;" },
                el("span", { class: "lec-badge", style: "background: var(--acc); color: #fff; font-weight: 800; font-size: 13px;" }, currP.letter),
                el("span", { style: "font-weight: 800; font-size: 14px; color: var(--ink);" }, currP.name_ar),
                el("span", { class: "mono", style: "color: var(--ink-m); font-size: 12px;" }, `(${currP.name_en})`),
              ),
              el("span", { class: "ref-chip" }, currP.actor),
            ),
            el(
              "div",
              { class: "int-tip", style: "margin-bottom: 10px;" },
              el("span", { class: "wt" }, "النص المعماري الصارم:"),
              currP.law,
            ),
            el(
              "div",
              { class: "int-tip", style: "margin-bottom: 10px;" },
              el("span", { class: "wt" }, "التشبيه الفيزيائي الواقعي (The Metaphor):"),
              currP.metaphor,
            ),
            el(
              "div",
              {
                class: "int-tip",
                style: "border-color: color-mix(in srgb, var(--warn) 35%, transparent); background: color-mix(in srgb, var(--warn) 8%, var(--sf)); margin-bottom: 14px;",
              },
              el("span", { class: "wt", style: "color: var(--warn);" }, "الوقفة الامتحانية الخاصة بالمبدأ:"),
              currP.examTrap,
            ),
            el("div", { class: "int-code-block" }, `// 1. الكود المنتهك للمبدأ (Anti-pattern):\n${currP.codeBad}\n\n// 2. الكود السليم المحقق للمبدأ (Clean Architecture):\n${currP.codeGood}`),
            el(
              "div",
              { style: "margin-top: 14px;" },
              el(
                "a",
                { class: "int-slide-ref-btn", ...slideRefAttrs(currP.slide) },
                iconSvg("slides"),
                `انتقل إلى سلايد شرح المبدأ في المنهج (${currP.slide})`,
              ),
            ),
          );
          pane.appendChild(detailCard);

          stageWrap.appendChild(pane);
        }

        // ═════════════════════════════════════════════════════════
        // TAB 2: محاكي SRP (تفكيك كائن الإله)
        // ═════════════════════════════════════════════════════════
        else if (activeSolidTab === "srp") {
          const pane = el("div", { class: "int-pane" });

          pane.appendChild(
            el(
              "div",
              { class: "int-tip" },
              el("span", { class: "wt" }, "مبدأ المسؤولية الواحدة (SRP - Single Responsibility Principle):"),
              "الصنف يجب أن يمتلك سبباً واحداً فقط للتغيير (Single Reason to Change) ويكون مسؤولاً تجاه فاعل ومستفيد واحد (Single Actor). كائن الإله (God Object) يجمع حساب الضرائب، تنسيق الفواتير، تخزين قواعد البيانات، وإرسال البريد في ملف واحد؛ مما يؤدي إلى تضارب الدمج (Merge Conflicts) وتعديلات غير مقصودة تكسر أقساماً أخرى.",
            ),
          );

          // Interactive controls
          const controls = el("div", { class: "int-sim-controls" });
          controls.appendChild(
            el(
              "div",
              { class: "int-sim-label" },
              svgNode(ICONS.interactive),
              "بدّل بين حالة كائن الإله وحالة المعمارية المفككة لملاحظة الفارق:",
            ),
          );

          const pills = el("div", { class: "int-sim-pills" });
          pills.appendChild(
            el(
              "button",
              {
                class: "int-toggle-btn" + (!srpRefactored ? " on" : ""),
                onclick: () => {
                  srpRefactored = false;
                  renderCurrentTab();
                },
              },
              iconSvg(!srpRefactored ? "alert" : "cross"),
              "قبل: كائن الإله المتشابك (God Object · OrderManager)",
            ),
          );
          pills.appendChild(
            el(
              "button",
              {
                class: "int-toggle-btn" + (srpRefactored ? " on" : ""),
                onclick: () => {
                  srpRefactored = true;
                  renderCurrentTab();
                },
              },
              iconSvg(srpRefactored ? "check" : "target"),
              "بعد: التفكيك المعماري النظيف (Clean SRP Architecture)",
            ),
          );
          controls.appendChild(pills);
          pane.appendChild(controls);

          // Metrics comparison row
          const metricsRow = el(
            "div",
            { class: "int-metrics-row", style: "margin: 12px 0;" },
            el(
              "div",
              { class: "int-metric-chip" },
              el("div", { class: "int-metric-title" }, "درجة التماسك (Cohesion)"),
              el("div", { class: "int-metric-val", style: `color: ${srpRefactored ? 'var(--ok)' : 'var(--err)'};` }, srpRefactored ? "تماسك مرتفع (High)" : "تماسك منخفض (Low)"),
              el("div", { class: "int-metric-desc" }, srpRefactored ? "كل صنف يركز على مهمة واحدة بدقة" : "مهام متعددة وغير متجانسة محشورة معاً"),
            ),
            el(
              "div",
              { class: "int-metric-chip" },
              el("div", { class: "int-metric-title" }, "أسباب التغيير (Reasons to Change)"),
              el("div", { class: "int-metric-val", style: `color: ${srpRefactored ? 'var(--ok)' : 'var(--warn)'};` }, srpRefactored ? "سبب واحد لكل صنف" : "4 أسباب وفاعلين مختلفين"),
              el("div", { class: "int-metric-desc" }, srpRefactored ? "تغيير البريد لا يمس الفاتورة" : "تعديل المالية يهدد تقارير المحاسبة"),
            ),
            el(
              "div",
              { class: "int-metric-chip" },
              el("div", { class: "int-metric-title" }, "مخاطر الدمج (Merge Conflicts)"),
              el("div", { class: "int-metric-val", style: `color: ${srpRefactored ? 'var(--ok)' : 'var(--err)'};` }, srpRefactored ? "صفر تصادم (Zero)" : "خطر تصادم دائم (High)"),
              el("div", { class: "int-metric-desc" }, srpRefactored ? "كل فريق يعمل في ملف مستقل" : "جميع الفرق تعدل نفس الملف بالتوازي"),
            ),
          );
          pane.appendChild(metricsRow);

          // SVG Visual
          const svgBox = el("div", { class: "int-svg-wrap" });
          svgBox.innerHTML = buildSrpSimulationSvg(srpRefactored);
          pane.appendChild(svgBox);

          // C# Code Implementation Block
          const srpData = SOLID_PRINCIPLES_DATA.find((p) => p.id === "srp");
          pane.appendChild(
            el(
              "div",
              { class: "int-code-block" },
              srpRefactored
                ? `// كود C# بعد التفكيك وتطبيق SRP (Clean Cohesive Architecture):\n${srpData.codeGood}`
                : `// كود C# المنتهك لـ SRP قبل التفكيك (God Object):\n${srpData.codeBad}`,
            ),
          );

          // Quick Slide Jump
          pane.appendChild(
            el(
              "div",
              { style: "margin-top: 14px;" },
              el(
                "a",
                { class: "int-slide-ref-btn", ...slideRefAttrs("L1-S020") },
                iconSvg("slides"),
                "راجع سلايدات SRP وسيناريو الموظف الرسمي (L1-S020 إلى L1-S022)",
              ),
            ),
          );

          stageWrap.appendChild(pane);
        }

        // ═════════════════════════════════════════════════════════
        // TAB 3: محاكي OCP (التوسيع بلا تعديل)
        // ═════════════════════════════════════════════════════════
        else if (activeSolidTab === "ocp") {
          const pane = el("div", { class: "int-pane" });

          pane.appendChild(
            el(
              "div",
              { class: "int-tip" },
              el("span", { class: "wt" }, "مبدأ الفتح والإغلاق (OCP - Open/Closed Principle):"),
              "صاغه برتراند ماير عام 1988: الكيانات البرمجية يجب أن تكون مفتوحة للتوسيع (Open for Extension) ومغلقة أمام التعديل (Closed for Modification). عندما نعتمد على الواجهات وتعددية الأشكال، نستطيع إضافة وسائل دفع جديدة تماماً (مثل ApplePay أو Crypto) بمجرد كتابة فئة جديدة تنفذ الواجهة IPaymentMethod دون فتح ملف معالج الدفع القديم أو تعديل سطر واحد فيه!",
            ),
          );

          // Controls: Mode + Method selection + Simulation Action
          const controls = el("div", { class: "int-sim-controls" });

          // Row 1: Mode Toggle
          const modeRow = el("div", { class: "int-sim-pills", style: "margin-bottom: 8px;" });
          modeRow.appendChild(
            el(
              "button",
              {
                class: "int-toggle-btn" + (ocpGood ? " on" : ""),
                onclick: () => {
                  ocpGood = true;
                  renderCurrentTab();
                },
              },
              iconSvg(ocpGood ? "check" : "target"),
              "المعمارية السليمة (OCP: Abstraction & Plugins)",
            ),
          );
          modeRow.appendChild(
            el(
              "button",
              {
                class: "int-toggle-btn" + (!ocpGood ? " on" : ""),
                onclick: () => {
                  ocpGood = false;
                  renderCurrentTab();
                },
              },
              iconSvg(!ocpGood ? "alert" : "cross"),
              "النهج المنتهك لـ OCP (Switch / If-Else Modifying Core)",
            ),
          );
          controls.appendChild(modeRow);

          // Row 2: Payment Methods pills (only if ocpGood)
          if (ocpGood) {
            const methodPills = el("div", { class: "int-sim-pills" });
            const mList = [
              { id: "credit", label: "بطاقة بنكية (CreditCard)" },
              { id: "paypal", label: "باي بال (PayPal)" },
              { id: "crypto", label: "عملات رقمية (Crypto)" },
              { id: "applepay", label: "آبل باي (ApplePay - جديد)" },
            ];
            mList.forEach((m) => {
              methodPills.appendChild(
                el(
                  "button",
                  {
                    class: "int-toggle-btn" + (ocpActiveMethod === m.id ? " on" : ""),
                    onclick: () => {
                      ocpActiveMethod = m.id;
                      renderCurrentTab();
                    },
                  },
                  iconSvg("target"),
                  m.label,
                ),
              );
            });
            controls.appendChild(methodPills);

            // Simulation Action Button
            const actions = el(
              "div",
              { class: "int-sim-actions", style: "margin-top: 10px;" },
              el(
                "button",
                {
                  class: "int-action-btn",
                  style: "background: var(--ok); color: var(--bg); border-color: var(--ok); font-weight: 800; padding: 7px 18px;",
                  onclick: () => {
                    ocpSimulating = true;
                    renderCurrentTab();
                    setTimeout(() => {
                      ocpSimulating = false;
                      renderCurrentTab();
                    }, 1800);
                  },
                },
                iconSvg("interactive"),
                `محاكاة معالجة دفع $250.00 عبر (${ocpActiveMethod.toUpperCase()})`,
              ),
            );
            controls.appendChild(actions);
          }
          pane.appendChild(controls);

          // SVG Visual
          const svgBox = el("div", { class: "int-svg-wrap" });
          svgBox.innerHTML = buildOcpSimulationSvg(ocpGood, ocpActiveMethod, ocpSimulating);
          pane.appendChild(svgBox);

          // Code block
          const ocpData = SOLID_PRINCIPLES_DATA.find((p) => p.id === "ocp");
          pane.appendChild(
            el(
              "div",
              { class: "int-code-block" },
              ocpGood
                ? `// كود C# المحقق لـ OCP (توسيع لا نهائي عبر الواجهات وتعددية الأشكال):\n${ocpData.codeGood}`
                : `// كود C# المنتهك لـ OCP (تعديل إجباري في الكود القديم عند إضافة وسيلة جديدة):\n${ocpData.codeBad}`,
            ),
          );

          // Quick Slide Jump
          pane.appendChild(
            el(
              "div",
              { style: "margin-top: 14px;" },
              el(
                "a",
                { class: "int-slide-ref-btn", ...slideRefAttrs("L1-S023") },
                iconSvg("slides"),
                "راجع سلايد مبدأ OCP وسيناريو التقرير المطبوع (L1-S023 إلى L1-S026)",
              ),
            ),
          );

          stageWrap.appendChild(pane);
        }

        // ═════════════════════════════════════════════════════════
        // TAB 4: محاكي DIP (حقن التبعيات)
        // ═════════════════════════════════════════════════════════
        else if (activeSolidTab === "dip") {
          const pane = el("div", { class: "int-pane" });

          pane.appendChild(
            el(
              "div",
              { class: "int-tip" },
              el("span", { class: "wt" }, "مبدأ قلب الاعتمادية (DIP - Dependency Inversion Principle):"),
              "الوحدات عالية المستوى (High-level modules: Business Logic) لا يجوز أن تعتمد مباشرة على الوحدات منخفضة المستوى (Low-level details: SMTP, SMS, Database)؛ كلاهما يجب أن يعتمد على التجريد (Abstractions). لاحظ في المحاكي كيف تنقلب الأسهم نحو الواجهة المشتركة INotificationChannel بدلاً من الاتجاه الهابط المباشر.",
            ),
          );

          // Controls
          const controls = el("div", { class: "int-sim-controls" });

          // Row 1: Mode toggle
          const modeRow = el("div", { class: "int-sim-pills", style: "margin-bottom: 8px;" });
          modeRow.appendChild(
            el(
              "button",
              {
                class: "int-toggle-btn" + (dipDecoupled ? " on" : ""),
                onclick: () => {
                  dipDecoupled = true;
                  renderCurrentTab();
                },
              },
              iconSvg(dipDecoupled ? "check" : "target"),
              "قلب الاعتمادية وحقن التبعيات (Decoupled with DI)",
            ),
          );
          modeRow.appendChild(
            el(
              "button",
              {
                class: "int-toggle-btn" + (!dipDecoupled ? " on" : ""),
                onclick: () => {
                  dipDecoupled = false;
                  renderCurrentTab();
                },
              },
              iconSvg(!dipDecoupled ? "alert" : "cross"),
              "ارتباط مباشر وثيق (Tightly Coupled - كود معيب)",
            ),
          );
          controls.appendChild(modeRow);

          // Row 2: Channel selector (only if decoupled)
          if (dipDecoupled) {
            const chanPills = el("div", { class: "int-sim-pills" });
            const cList = [
              { id: "email", label: "قناة البريد (EmailNotifier)" },
              { id: "sms", label: "قناة الرسائل (SmsNotifier)" },
              { id: "telegram", label: "قناة تيليجرام (TelegramNotifier)" },
            ];
            cList.forEach((c) => {
              chanPills.appendChild(
                el(
                  "button",
                  {
                    class: "int-toggle-btn" + (dipActiveChannel === c.id ? " on" : ""),
                    onclick: () => {
                      dipActiveChannel = c.id;
                      renderCurrentTab();
                    },
                  },
                  iconSvg("target"),
                  c.label,
                ),
              );
            });
            controls.appendChild(chanPills);

            // Simulation Action Button
            const actions = el(
              "div",
              { class: "int-sim-actions", style: "margin-top: 10px;" },
              el(
                "button",
                {
                  class: "int-action-btn",
                  style: "background: var(--acc); color: var(--bg); border-color: var(--acc); font-weight: 800; padding: 7px 18px;",
                  onclick: () => {
                    dipNotifying = true;
                    renderCurrentTab();
                    setTimeout(() => {
                      dipNotifying = false;
                      renderCurrentTab();
                    }, 1800);
                  },
                },
                iconSvg("interactive"),
                `إرسال إشعار فوري بحقن قناة (${dipActiveChannel.toUpperCase()})`,
              ),
            );
            controls.appendChild(actions);
          }
          pane.appendChild(controls);

          // SVG Visual
          const svgBox = el("div", { class: "int-svg-wrap" });
          svgBox.innerHTML = buildDipSimulationSvg(dipDecoupled, dipActiveChannel, dipNotifying);
          pane.appendChild(svgBox);

          // Code block
          const dipData = SOLID_PRINCIPLES_DATA.find((p) => p.id === "dip");
          pane.appendChild(
            el(
              "div",
              { class: "int-code-block" },
              dipDecoupled
                ? `// كود C# المحقق لـ DIP (حقن التبعية عبر المنشئ Constructor Injection):\n${dipData.codeGood}`
                : `// كود C# المنتهك لـ DIP (ارتباط مباشر وثيق بـ new SmtpClient):\n${dipData.codeBad}`,
            ),
          );

          // Quick Slide Jump
          pane.appendChild(
            el(
              "div",
              { style: "margin-top: 14px;" },
              el(
                "a",
                { class: "int-slide-ref-btn", ...slideRefAttrs("L1-S034") },
                iconSvg("slides"),
                "راجع سلايد مبدأ DIP واستثناء جذر التركيب (L1-S034 إلى L1-S035)",
              ),
            ),
          );

          stageWrap.appendChild(pane);
        }
      }

      // Build Navigation Tabs
      solidTabs.forEach((t) => {
        const btn = el(
          "button",
          {
            class: "int-tab-btn" + (activeSolidTab === t.id ? " active" : ""),
            onclick: () => {
              activeSolidTab = t.id;
              tabsBar.querySelectorAll(".int-tab-btn").forEach((b) => b.classList.remove("active"));
              btn.classList.add("active");
              renderCurrentTab();
            },
          },
          t.label,
        );
        tabsBar.appendChild(btn);
      });

      card.appendChild(tabsBar);
      card.appendChild(stageWrap);
      renderCurrentTab();
    },
  };

  /* ═══════════════════════════════════════════════════════════
     القسم الأول: مجسمات الثلاثية البصرية الحركية (The Visual Triad)
     ═══════════════════════════════════════════════════════════ */

  /* ───────────────────────────────────────────────────────────
     1. محاكي النمط الهيكلي: محوّل المقابس والواجهات (Adapter Simulator)
     ─────────────────────────────────────────────────────────── */
  function buildAdapterSvg(isAdapted) {
    const svgW = 860;
    const svgH = 380;

    const plugX = isAdapted ? 215 : 155;
    const adapterX = 350;
    const socketX = 525;
    const bulbX = 735;
    const bulbY = 190;

    const bulbGlow = isAdapted
      ? `<radialGradient id="bulb-light" cx="50%" cy="50%" r="50%">
           <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.9"/>
           <stop offset="35%" stop-color="#f59e0b" stop-opacity="0.45"/>
           <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
         </radialGradient>
         <circle cx="${bulbX}" cy="${bulbY}" r="80" fill="url(#bulb-light)" class="int-anim-glow"/>
         <g stroke="#fbbf24" stroke-width="2" stroke-linecap="round" opacity="0.8" class="int-anim-rays">
           <line x1="${bulbX}" y1="${bulbY - 62}" x2="${bulbX}" y2="${bulbY - 80}"/>
           <line x1="${bulbX + 44}" y1="${bulbY - 44}" x2="${bulbX + 57}" y2="${bulbY - 57}"/>
           <line x1="${bulbX + 62}" y1="${bulbY}" x2="${bulbX + 80}" y2="${bulbY}"/>
           <line x1="${bulbX + 44}" y1="${bulbY + 44}" x2="${bulbX + 57}" y2="${bulbY + 57}"/>
           <line x1="${bulbX}" y1="${bulbY + 62}" x2="${bulbX}" y2="${bulbY + 80}"/>
           <line x1="${bulbX - 44}" y1="${bulbY + 44}" x2="${bulbX - 57}" y2="${bulbY + 57}"/>
           <line x1="${bulbX - 62}" y1="${bulbY}" x2="${bulbX - 80}" y2="${bulbY}"/>
           <line x1="${bulbX - 44}" y1="${bulbY - 44}" x2="${bulbX - 57}" y2="${bulbY - 57}"/>
         </g>`
      : "";

    const bulbFilamentColor = isAdapted ? "#ffffff" : "#64748b";
    const bulbGlassFill = isAdapted ? "#fef3c7" : "var(--sf2)";

    const sparkGraphics = !isAdapted
      ? `<g class="int-anim-spark">
           <path d="M 320 170 L 335 155 L 330 175 L 350 160 L 335 185 L 345 180 L 325 205"
                 fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                 filter="url(#int-glow-red)"/>
           <path d="M 335 190 L 355 175 L 345 195 L 365 185"
                 fill="none" stroke="#f87171" stroke-width="2" stroke-linecap="round"/>
           <rect x="220" y="45" width="420" height="38" rx="8"
                 fill="color-mix(in srgb, var(--err) 15%, var(--sf))"
                 stroke="var(--err)" stroke-width="1.4"/>
           <text x="430" y="69" text-anchor="middle" fill="var(--err)"
                 font-size="12" font-weight="700" stroke="none">
             تصادم واجهات (Interface Mismatch): الفيش مسطح والمقبس دائري!
           </text>
         </g>`
      : `<g>
           <rect x="210" y="45" width="440" height="38" rx="8"
                 fill="color-mix(in srgb, var(--ok) 15%, var(--sf))"
                 stroke="var(--ok)" stroke-width="1.4"/>
           <text x="430" y="69" text-anchor="middle" fill="var(--ok)"
                 font-size="12" font-weight="700" stroke="none">
             تكامل ناجح: نمط المحوّل (Adapter) وفّق الواجهتين دون كسر أي منهما!
           </text>
         </g>`;

    const adapterGraphic = isAdapted
      ? `<g transform="translate(${adapterX}, 130)">
           <rect x="0" y="0" width="135" height="120" rx="10"
                 fill="color-mix(in srgb, var(--acc) 14%, var(--sf2))"
                 stroke="var(--acc)" stroke-width="2.2" filter="url(#int-glow-acc)"/>
           <path d="M 12 40 L 45 40 L 85 30 L 122 30" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="5 3"/>
           <path d="M 12 80 L 45 80 L 85 90 L 122 90" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="5 3"/>
           <circle cx="45" cy="40" r="3.5" fill="#38bdf8" stroke="none"/>
           <circle cx="85" cy="30" r="3.5" fill="#38bdf8" stroke="none"/>
           <circle cx="45" cy="80" r="3.5" fill="#38bdf8" stroke="none"/>
           <circle cx="85" cy="90" r="3.5" fill="#38bdf8" stroke="none"/>
           <rect x="0" y="32" width="9" height="16" rx="2" fill="#0f172a" stroke="var(--acc)" stroke-width="1.2"/>
           <rect x="0" y="72" width="9" height="16" rx="2" fill="#0f172a" stroke="var(--acc)" stroke-width="1.2"/>
           <rect x="135" y="24" width="32" height="12" rx="6" fill="#f59e0b" stroke="#b45309" stroke-width="1.4"/>
           <rect x="135" y="84" width="32" height="12" rx="6" fill="#f59e0b" stroke="#b45309" stroke-width="1.4"/>
           <rect x="135" y="54" width="28" height="12" rx="6" fill="#f59e0b" stroke="#b45309" stroke-width="1.4"/>
           <text x="68" y="65" text-anchor="middle" fill="var(--acc-b)"
                 font-size="11" font-weight="700" font-family="var(--fm)" stroke="none">
             SocketAdapter
           </text>
         </g>`
      : `<g transform="translate(${adapterX + 15}, 285)" opacity="0.5">
           <rect x="0" y="0" width="105" height="42" rx="6"
                 fill="var(--sf2)" stroke="var(--ln)" stroke-dasharray="4 3"/>
           <text x="52" y="26" text-anchor="middle" fill="var(--ink-m)" font-size="10.5" stroke="none">
             المحوّل مفصول
           </text>
         </g>`;

    const currentWireFlow = isAdapted
      ? `<path d="M 40 190 L ${plugX} 190" fill="none" stroke="#10b981" stroke-width="3"
               stroke-dasharray="8 6" class="int-anim-flow"/>
         <path d="M ${socketX + 105} 190 L ${bulbX - 25} 190" fill="none" stroke="#10b981" stroke-width="3"
               stroke-dasharray="8 6" class="int-anim-flow"/>`
      : `<path d="M 40 190 L ${plugX} 190" fill="none" stroke="#64748b" stroke-width="3"/>
         <path d="M ${socketX + 105} 190 L ${bulbX - 25} 190" fill="none" stroke="#64748b" stroke-width="3"/>`;

    return `
      <svg viewBox="0 0 ${svgW} ${svgH}" class="int-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="int-glow-acc" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="rgba(14, 165, 233, 0.45)"/>
          </filter>
          <filter id="int-glow-red" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="rgba(239, 68, 68, 0.6)"/>
          </filter>
          <style>
            text { stroke: none !important; font-family: var(--fa); -webkit-font-smoothing: antialiased; }
            .int-anim-flow { animation: intFlowDash 1.2s linear infinite; }
            @keyframes intFlowDash { to { stroke-dashoffset: -28; } }
            .int-anim-glow { animation: intBulbPulse 1.8s ease-in-out infinite alternate; }
            @keyframes intBulbPulse { 0% { opacity: 0.65; transform: scale(0.97); } 100% { opacity: 1; transform: scale(1.03); } }
            .int-anim-spark { animation: intSparkJitter 0.18s steps(2, start) infinite; }
            @keyframes intSparkJitter { 0% { transform: translate(0, 0); opacity: 0.9; } 50% { transform: translate(-2px, 1px); opacity: 0.4; } 100% { transform: translate(1px, -1px); opacity: 1; } }
          </style>
        </defs>

        <g stroke="var(--ln)" stroke-width="0.8" opacity="0.3">
          <line x1="20" y1="190" x2="${svgW - 20}" y2="190" stroke-dasharray="3 5"/>
          <line x1="160" y1="40" x2="160" y2="340" stroke-dasharray="3 5"/>
          <line x1="430" y1="40" x2="430" y2="340" stroke-dasharray="3 5"/>
          <line x1="680" y1="40" x2="680" y2="340" stroke-dasharray="3 5"/>
        </g>

        ${sparkGraphics}

        <!-- 1. LEFT SIDE: CLIENT DEVICE / US 2-PIN FLAT PLUG -->
        <g id="int-client-plug">
          ${currentWireFlow}
          <rect x="${plugX - 25}" y="178" width="25" height="24" rx="4" fill="#334155" stroke="var(--ln)"/>
          <rect x="${plugX}" y="145" width="90" height="90" rx="12"
                fill="var(--sf2)" stroke="var(--ln)" stroke-width="2"/>
          <rect x="${plugX + 10}" y="155" width="22" height="70" rx="4" fill="var(--sf)" opacity="0.6"/>
          <rect x="${plugX + 90}" y="160" width="34" height="14" rx="3" fill="#fbbf24" stroke="#b45309" stroke-width="1.2"/>
          <rect x="${plugX + 90}" y="206" width="34" height="14" rx="3" fill="#fbbf24" stroke="#b45309" stroke-width="1.2"/>
          <circle cx="${plugX + 114}" cy="167" r="2.5" fill="#0f172a" stroke="none"/>
          <circle cx="${plugX + 114}" cy="213" r="2.5" fill="#0f172a" stroke="none"/>
          <text x="${plugX + 45}" y="195" text-anchor="middle" fill="var(--ink)"
                font-size="11.5" font-weight="700" stroke="none">الفيش الأصلي</text>
          <text x="${plugX + 45}" y="255" text-anchor="middle" fill="var(--ink-m)" font-size="10" font-family="var(--fm)" stroke="none">Adaptee: US 2-Pin</text>
        </g>

        <!-- 2. CENTER: THE ADAPTER (INTERMEDIARY BLOCK) -->
        ${adapterGraphic}

        <!-- 3. RIGHT SIDE: TARGET WALL SOCKET (EUROPEAN 3-PIN ROUND) -->
        <g id="int-target-socket">
          <rect x="${socketX}" y="120" width="115" height="140" rx="16"
                fill="var(--sf2)" stroke="var(--ln)" stroke-width="2.2"/>
          <circle cx="${socketX + 57}" cy="190" r="46" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.5"/>
          <circle cx="${socketX + 42}" cy="178" r="6" fill="#0f172a" stroke="var(--ln)" stroke-width="1.5"/>
          <circle cx="${socketX + 72}" cy="178" r="6" fill="#0f172a" stroke="var(--ln)" stroke-width="1.5"/>
          <circle cx="${socketX + 57}" cy="214" r="6" fill="#0f172a" stroke="var(--ln)" stroke-width="1.5"/>
          <circle cx="${socketX + 57}" cy="132" r="3" fill="var(--ln)" stroke="none"/>
          <circle cx="${socketX + 57}" cy="248" r="3" fill="var(--ln)" stroke="none"/>
          <text x="${socketX + 57}" y="280" text-anchor="middle" fill="var(--ink)"
                font-size="11.5" font-weight="700" stroke="none">مقبس الجدار</text>
          <text x="${socketX + 57}" y="296" text-anchor="middle" fill="var(--ink-m)" font-size="10" font-family="var(--fm)" stroke="none">Target: EU 3-Round</text>
        </g>

        <!-- 4. FAR RIGHT: THE EDISON LIGHT BULB (LOAD / RECEIVER) -->
        <g id="int-light-bulb">
          ${bulbGlow}
          <rect x="${bulbX - 16}" y="234" width="32" height="18" rx="3" fill="#64748b" stroke="var(--ln)"/>
          <line x1="${bulbX - 14}" y1="239" x2="${bulbX + 14}" y2="239" stroke="#475569" stroke-width="1.5"/>
          <line x1="${bulbX - 14}" y1="245" x2="${bulbX + 14}" y2="245" stroke="#475569" stroke-width="1.5"/>
          <ellipse cx="${bulbX}" cy="254" rx="9" ry="4" fill="#334155" stroke="none"/>
          <path d="M ${bulbX - 16} 234 C ${bulbX - 28} 210, ${bulbX - 44} 190, ${bulbX - 44} 165 C ${bulbX - 44} 135, ${bulbX - 25} 115, ${bulbX} 115 C ${bulbX + 25} 115, ${bulbX + 44} 135, ${bulbX + 44} 165 C ${bulbX + 44} 190, ${bulbX + 28} 210, ${bulbX + 16} 234 Z"
                fill="${bulbGlassFill}" stroke="${isAdapted ? '#f59e0b' : 'var(--ln)'}" stroke-width="2.2"/>
          <line x1="${bulbX - 10}" y1="230" x2="${bulbX - 8}" y2="175" stroke="#94a3b8" stroke-width="1.5"/>
          <line x1="${bulbX + 10}" y1="230" x2="${bulbX + 8}" y2="175" stroke="#94a3b8" stroke-width="1.5"/>
          <path d="M ${bulbX - 8} 175 Q ${bulbX} 150 ${bulbX + 8} 175"
                fill="none" stroke="${bulbFilamentColor}" stroke-width="2.5" stroke-linecap="round"/>
          <text x="${bulbX}" y="280" text-anchor="middle" fill="var(--ink)"
                font-size="11.5" font-weight="700" stroke="none">المصباح (النظام الهدف)</text>
          <text x="${bulbX}" y="296" text-anchor="middle"
                fill="${isAdapted ? 'var(--ok)' : 'var(--err)'}" font-size="10" font-weight="600" stroke="none">
            ${isAdapted ? "مضيء ومكتمل (Active 220V)" : "مقطوع وغير متصل (0V)"}
          </text>
        </g>
      </svg>
    `;
  }

  /* ───────────────────────────────────────────────────────────
     2. محاكي النمط الإنشائي: نواة النسخة المفردة بالذاكرة (Singleton Forge)
     ─────────────────────────────────────────────────────────── */
  function buildSingletonSvg(activeClient) {
    const svgW = 860;
    const svgH = 380;
    const coreX = 430;
    const coreY = 190;

    const clients = [
      { id: "c1", name: "Client 1", service: "OrderService", x: 130, y: 100, active: activeClient === "c1" },
      { id: "c2", name: "Client 2", service: "AuthService", x: 130, y: 280, active: activeClient === "c2" },
      { id: "c3", name: "Client 3", service: "PaymentService", x: 730, y: 190, active: activeClient === "c3" },
    ];

    let laserTraces = "";
    clients.forEach((c) => {
      const color = c.active ? "var(--acc)" : "var(--ln)";
      const sw = c.active ? "3" : "1.5";
      const dash = c.active ? 'stroke-dasharray="6 4" class="int-anim-flow"' : "";

      laserTraces += `
        <path d="M ${c.x + (c.x > coreX ? -65 : 65)} ${c.y} Q ${coreX + (c.x > coreX ? 70 : -70)} ${c.y}, ${coreX} ${coreY}"
              fill="none" stroke="${color}" stroke-width="${sw}" ${dash}/>
      `;
    });

    return `
      <svg viewBox="0 0 ${svgW} ${svgH}" class="int-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="ram-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#0284c7" stop-opacity="0.8"/>
            <stop offset="60%" stop-color="#0284c7" stop-opacity="0.25"/>
            <stop offset="100%" stop-color="#0284c7" stop-opacity="0"/>
          </radialGradient>
          <style>
            text { stroke: none !important; font-family: var(--fa); -webkit-font-smoothing: antialiased; }
          </style>
        </defs>

        ${laserTraces}

        <!-- 1. CENTRAL RAM CORE -->
        <g id="int-ram-core">
          <circle cx="${coreX}" cy="${coreY}" r="95" fill="url(#ram-core-glow)" stroke="none"/>
          <circle cx="${coreX}" cy="${coreY}" r="78" stroke="var(--acc)" stroke-width="1.8"
                  stroke-dasharray="9 6" opacity="0.75" class="int-anim-flow"/>
          <polygon points="${coreX},${coreY - 55} ${coreX + 50},${coreY - 26} ${coreX + 50},${coreY + 26} ${coreX},${coreY + 55} ${coreX - 50},${coreY + 26} ${coreX - 50},${coreY - 26}"
                   fill="var(--sf2)" stroke="var(--acc)" stroke-width="2.5" filter="url(#int-glow-acc)"/>
          <line x1="${coreX - 25}" y1="${coreY}" x2="${coreX + 25}" y2="${coreY}" stroke="var(--acc-b)" stroke-width="2"/>
          <line x1="${coreX}" y1="${coreY - 25}" x2="${coreX}" y2="${coreY + 25}" stroke="var(--acc-b)" stroke-width="2"/>
          <circle cx="${coreX}" cy="${coreY}" r="7" fill="var(--acc)" stroke="none"/>

          <text x="${coreX}" y="${coreY - 72}" text-anchor="middle" fill="var(--ink)"
                font-size="12" font-weight="700" stroke="none">
            النسخة المفردة في الذاكرة (Singleton)
          </text>
          <rect x="${coreX - 65}" y="${coreY + 68}" width="130" height="24" rx="6"
                fill="var(--sf)" stroke="var(--acc)" stroke-width="1.2"/>
          <text x="${coreX}" y="${coreY + 84}" text-anchor="middle" fill="var(--acc-b)"
                font-size="10.5" font-weight="600" font-family="var(--fm)" stroke="none">
            RAM: 0x7FFE_04A2
          </text>
        </g>

        <!-- 2. CLIENT NODES -->
        ${clients
          .map(
            (c) => `
          <g transform="translate(${c.x - 75}, ${c.y - 34})">
            <rect x="0" y="0" width="150" height="68" rx="9"
                  fill="${c.active ? "color-mix(in srgb, var(--acc) 14%, var(--sf2))" : "var(--sf)"}"
                  stroke="${c.active ? "var(--acc)" : "var(--ln)"}" stroke-width="${c.active ? "2.2" : "1.4"}"/>
            <rect x="0" y="0" width="150" height="22" rx="8" fill="var(--sf2)" opacity="0.6"/>
            <circle cx="12" cy="11" r="2.5" fill="#ef4444" stroke="none"/>
            <circle cx="20" cy="11" r="2.5" fill="#f59e0b" stroke="none"/>
            <circle cx="28" cy="11" r="2.5" fill="#10b981" stroke="none"/>
            <text x="85" y="15" text-anchor="middle" fill="var(--ink)"
                  font-size="10" font-weight="700" font-family="var(--fm)" stroke="none">
              ${c.service}
            </text>
            <text x="75" y="42" text-anchor="middle" fill="var(--ink)"
                  font-size="10.5" font-weight="600" stroke="none">
              ${c.name}
            </text>
            <text x="75" y="58" text-anchor="middle"
                  fill="${c.active ? "var(--ok)" : "var(--ink-m)"}" font-size="9" font-family="var(--fm)" stroke="none">
              ${c.active ? "Ref: 0x7FFE_04A2" : "Waiting..."}
            </text>
          </g>
        `,
          )
          .join("")}
      </svg>
    `;
  }

  /* ───────────────────────────────────────────────────────────
     3. محاكي النمط السلوكي: رادار البث والمراقب (Observer Live Radar)
     ─────────────────────────────────────────────────────────── */
  function buildObserverSvg(isBroadcasting, subscribedMap, eventCount) {
    const svgW = 860;
    const svgH = 410;
    const towerX = 430;
    const towerY = 195;

    const radarWaves = isBroadcasting
      ? `<g class="int-anim-radar-wave">
           <circle cx="${towerX}" cy="115" r="50" stroke="var(--ok)" stroke-width="2.5" opacity="0.8" fill="none"/>
           <circle cx="${towerX}" cy="115" r="115" stroke="var(--ok)" stroke-width="2" opacity="0.6" fill="none"/>
           <circle cx="${towerX}" cy="115" r="185" stroke="var(--ok)" stroke-width="1.6" opacity="0.4" fill="none"/>
           <circle cx="${towerX}" cy="115" r="260" stroke="var(--ok)" stroke-width="1.2" opacity="0.25" fill="none"/>
         </g>`
      : "";

    const isMobileSub = subscribedMap.mobile !== false;
    const isLaptopSub = subscribedMap.laptop !== false;
    const isWatchSub = subscribedMap.watch !== false;
    const isFaxSub = subscribedMap.fax === true;

    return `
      <svg viewBox="0 0 ${svgW} ${svgH}" class="int-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="int-glow-beacon" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="rgba(239, 68, 68, 0.9)"/>
          </filter>
          <style>
            text { stroke: none !important; font-family: var(--fa); -webkit-font-smoothing: antialiased; text-rendering: geometricPrecision; }
            .mono-txt { font-family: var(--fm); }
            .int-anim-radar-wave circle { animation: intRadarExpand 1.6s ease-out infinite; }
            @keyframes intRadarExpand {
              0% { transform: scale(0.3); opacity: 0.95; transform-origin: ${towerX}px 115px; }
              100% { transform: scale(1.35); opacity: 0; transform-origin: ${towerX}px 115px; }
            }
          </style>
        </defs>

        ${radarWaves}

        <!-- 1. CENTER BROADCAST TOWER: THE SUBJECT -->
        <g id="int-radar-tower">
          <polygon points="${towerX - 32},${towerY + 80} ${towerX + 32},${towerY + 80} ${towerX + 10},${towerY - 30} ${towerX - 10},${towerY - 30}"
                   fill="var(--sf2)" stroke="var(--ln)" stroke-width="2"/>
          <line x1="${towerX - 25}" y1="${towerY + 50}" x2="${towerX + 25}" y2="${towerY + 50}" stroke="var(--ln)" stroke-width="1.5"/>
          <line x1="${towerX - 18}" y1="${towerY + 20}" x2="${towerX + 18}" y2="${towerY + 20}" stroke="var(--ln)" stroke-width="1.5"/>
          <line x1="${towerX - 12}" y1="${towerY - 10}" x2="${towerX + 12}" y2="${towerY - 10}" stroke="var(--ln)" stroke-width="1.5"/>
          <line x1="${towerX - 30}" y1="${towerY + 80}" x2="${towerX + 18}" y2="${towerY + 20}" stroke="var(--ln)" stroke-width="1.2" opacity="0.6"/>
          <line x1="${towerX + 30}" y1="${towerY + 80}" x2="${towerX - 18}" y2="${towerY + 20}" stroke="var(--ln)" stroke-width="1.2" opacity="0.6"/>
          <line x1="${towerX - 18}" y1="${towerY + 20}" x2="${towerX + 10}" y2="${towerY - 30}" stroke="var(--ln)" stroke-width="1.2" opacity="0.6"/>
          <line x1="${towerX + 18}" y1="${towerY + 20}" x2="${towerX - 10}" y2="${towerY - 30}" stroke="var(--ln)" stroke-width="1.2" opacity="0.6"/>

          <line x1="${towerX}" y1="${towerY - 30}" x2="${towerX}" y2="115" stroke="var(--ink)" stroke-width="3"/>
          <path d="M ${towerX - 26} 135 Q ${towerX} 122 ${towerX + 26} 135"
                fill="none" stroke="var(--acc)" stroke-width="3.5" stroke-linecap="round"/>
          <line x1="${towerX}" y1="126" x2="${towerX}" y2="136" stroke="var(--acc)" stroke-width="2"/>

          <circle cx="${towerX}" cy="115" r="6" fill="#ef4444" filter="url(#int-glow-beacon)" stroke="none"/>
          <circle cx="${towerX}" cy="115" r="2" fill="#ffffff" stroke="none"/>

          <rect x="${towerX - 100}" y="${towerY + 95}" width="200" height="28" rx="7"
                fill="var(--sf2)" stroke="var(--acc)" stroke-width="1.4"/>
          <text x="${towerX}" y="${towerY + 114}" text-anchor="middle" fill="var(--ink)"
                font-size="12" font-weight="700" stroke="none">
            برج البث والناشر (Subject)
          </text>
          
          <rect x="${towerX - 110}" y="${towerY + 128}" width="220" height="22" rx="5"
                fill="var(--sf)" stroke="var(--ln)" stroke-width="1"/>
          <text x="${towerX}" y="${towerY + 143}" text-anchor="middle" fill="var(--acc-b)"
                font-size="9.5" font-weight="600" class="mono-txt" stroke="none">
            NotifyObservers() · تم إرسال ${eventCount} أحداث
          </text>
        </g>

        <!-- DEVICE 1: SMARTPHONE (TOP-LEFT) -->
        <g id="dev-mobile" transform="translate(60, 40)" opacity="${isMobileSub ? "1" : "0.55"}">
          <rect x="0" y="0" width="170" height="115" rx="16"
                fill="var(--sf2)" stroke="${isBroadcasting && isMobileSub ? "var(--ok)" : isMobileSub ? "var(--acc)" : "var(--ln)"}"
                stroke-width="${isBroadcasting && isMobileSub ? "2.4" : "1.6"}"/>
          <rect x="65" y="6" width="40" height="7" rx="3.5" fill="#0f172a" stroke="none"/>
          <circle cx="98" cy="9.5" r="1.5" fill="#1e293b" stroke="none"/>

          <text x="85" y="32" text-anchor="middle" fill="var(--ink)"
                font-size="11.5" font-weight="700" stroke="none">الهاتف الذكي</text>
          <text x="85" y="47" text-anchor="middle" fill="var(--ink-m)"
                font-size="9.5" font-weight="500" class="mono-txt" stroke="none">MobileAppObserver</text>

          <rect x="15" y="58" width="140" height="24" rx="6"
                fill="${!isMobileSub ? "color-mix(in srgb, var(--sf) 90%, transparent)" : isBroadcasting ? "color-mix(in srgb, var(--ok) 20%, var(--sf))" : "var(--sf)"}"
                stroke="${!isMobileSub ? "var(--ln)" : isBroadcasting ? "var(--ok)" : "var(--acc)"}" stroke-width="1.2"/>
          <text x="85" y="74" text-anchor="middle"
                fill="${!isMobileSub ? "var(--ink-m)" : isBroadcasting ? "var(--ok)" : "var(--acc-b)"}"
                font-size="9.5" font-weight="600" stroke="none">
            ${!isMobileSub ? "ملغي (غير مشترك)" : isBroadcasting ? "تم استلام الحدث!" : "مشترك · في الانتظار"}
          </text>

          <text x="85" y="98" text-anchor="middle" fill="var(--ink-m)"
                font-size="8.5" font-weight="500" class="mono-txt" stroke="none">+ Update(OrderEvent)</text>
          <line x1="65" y1="107" x2="105" y2="107" stroke="var(--ln)" stroke-width="2.5" stroke-linecap="round"/>
        </g>

        <!-- DEVICE 2: LAPTOP (BOTTOM-LEFT) -->
        <g id="dev-laptop" transform="translate(60, 235)" opacity="${isLaptopSub ? "1" : "0.55"}">
          <rect x="5" y="0" width="160" height="92" rx="7"
                fill="var(--sf2)" stroke="${isBroadcasting && isLaptopSub ? "var(--ok)" : isLaptopSub ? "var(--acc)" : "var(--ln)"}"
                stroke-width="${isBroadcasting && isLaptopSub ? "2.4" : "1.6"}"/>
          <rect x="6" y="1" width="158" height="15" rx="6" fill="var(--sf)" opacity="0.7"/>
          <circle cx="16" cy="8.5" r="2.2" fill="#ef4444" stroke="none"/>
          <circle cx="23" cy="8.5" r="2.2" fill="#f59e0b" stroke="none"/>
          <circle cx="30" cy="8.5" r="2.2" fill="#10b981" stroke="none"/>

          <text x="85" y="34" text-anchor="middle" fill="var(--ink)"
                font-size="11.5" font-weight="700" stroke="none">حاسوب الويب</text>
          <text x="85" y="48" text-anchor="middle" fill="var(--ink-m)"
                font-size="9.5" font-weight="500" class="mono-txt" stroke="none">WebDashboardObserver</text>

          <rect x="15" y="56" width="140" height="22" rx="5"
                fill="${!isLaptopSub ? "color-mix(in srgb, var(--sf) 90%, transparent)" : isBroadcasting ? "color-mix(in srgb, var(--ok) 20%, var(--sf))" : "var(--sf)"}"
                stroke="${!isLaptopSub ? "var(--ln)" : isBroadcasting ? "var(--ok)" : "var(--acc)"}" stroke-width="1.2"/>
          <text x="85" y="71" text-anchor="middle"
                fill="${!isLaptopSub ? "var(--ink-m)" : isBroadcasting ? "var(--ok)" : "var(--acc-b)"}"
                font-size="9.5" font-weight="600" stroke="none">
            ${!isLaptopSub ? "ملغي (غير مشترك)" : isBroadcasting ? "تم استلام الحدث!" : "مشترك · في الانتظار"}
          </text>

          <polygon points="0,96 170,96 155,106 15,106" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.5"/>
          <rect x="70" y="99" width="30" height="5" rx="1.5" fill="var(--sf2)"/>
          <text x="85" y="122" text-anchor="middle" fill="var(--ink-m)"
                font-size="8.5" font-weight="500" class="mono-txt" stroke="none">+ Update(OrderEvent)</text>
        </g>

        <!-- DEVICE 3: SMARTWATCH (TOP-RIGHT) -->
        <g id="dev-watch" transform="translate(630, 40)" opacity="${isWatchSub ? "1" : "0.55"}">
          <rect x="62" y="-12" width="46" height="15" rx="4" fill="var(--sf)" stroke="var(--ln)"/>
          <rect x="62" y="112" width="46" height="15" rx="4" fill="var(--sf)" stroke="var(--ln)"/>

          <rect x="0" y="0" width="170" height="115" rx="20"
                fill="var(--sf2)" stroke="${isBroadcasting && isWatchSub ? "var(--ok)" : isWatchSub ? "var(--acc)" : "var(--ln)"}"
                stroke-width="${isBroadcasting && isWatchSub ? "2.4" : "1.6"}"/>
          <rect x="170" y="32" width="6" height="18" rx="2.5" fill="#64748b" stroke="none"/>

          <text x="85" y="32" text-anchor="middle" fill="var(--ink)"
                font-size="11.5" font-weight="700" stroke="none">الساعة الذكية</text>
          <text x="85" y="47" text-anchor="middle" fill="var(--ink-m)"
                font-size="9.5" font-weight="500" class="mono-txt" stroke="none">WatchNotifier</text>

          <rect x="15" y="58" width="140" height="24" rx="6"
                fill="${!isWatchSub ? "color-mix(in srgb, var(--sf) 90%, transparent)" : isBroadcasting ? "color-mix(in srgb, var(--ok) 20%, var(--sf))" : "var(--sf)"}"
                stroke="${!isWatchSub ? "var(--ln)" : isBroadcasting ? "var(--ok)" : "var(--acc)"}" stroke-width="1.2"/>
          <text x="85" y="74" text-anchor="middle"
                fill="${!isWatchSub ? "var(--ink-m)" : isBroadcasting ? "var(--ok)" : "var(--acc-b)"}"
                font-size="9.5" font-weight="600" stroke="none">
            ${!isWatchSub ? "ملغي (غير مشترك)" : isBroadcasting ? "تم استلام الحدث!" : "مشترك · في الانتظار"}
          </text>
          <text x="85" y="98" text-anchor="middle" fill="var(--ink-m)"
                font-size="8.5" font-weight="500" class="mono-txt" stroke="none">+ Update(OrderEvent)</text>
        </g>

        <!-- DEVICE 4: LEGACY PRINTER / FAX (BOTTOM-RIGHT) -->
        <g id="dev-fax" transform="translate(630, 235)" opacity="${isFaxSub ? "1" : "0.55"}">
          <rect x="45" y="-8" width="80" height="14" rx="2" fill="#e2e8f0" stroke="var(--ln)"/>
          <line x1="55" y1="-2" x2="115" y2="-2" stroke="#94a3b8" stroke-dasharray="3 3"/>

          <rect x="0" y="4" width="170" height="92" rx="8"
                fill="var(--sf)" stroke="${isBroadcasting && isFaxSub ? "var(--ok)" : isFaxSub ? "var(--acc)" : "var(--ln)"}"
                stroke-width="${isBroadcasting && isFaxSub ? "2.4" : "1.6"}"/>
          <rect x="25" y="16" width="120" height="6" rx="2" fill="#0f172a" stroke="none"/>

          <text x="85" y="40" text-anchor="middle" fill="var(--ink)"
                font-size="11.5" font-weight="700" stroke="none">طابعة قديمة (فاكس)</text>
          <text x="85" y="54" text-anchor="middle" fill="var(--ink-m)"
                font-size="9" font-weight="500" class="mono-txt" stroke="none">LegacyHardware (ملغي)</text>

          <rect x="15" y="62" width="140" height="22" rx="5"
                fill="${!isFaxSub ? "color-mix(in srgb, var(--sf) 90%, transparent)" : isBroadcasting ? "color-mix(in srgb, var(--ok) 20%, var(--sf))" : "var(--sf)"}"
                stroke="${!isFaxSub ? "var(--ln)" : isBroadcasting ? "var(--ok)" : "var(--acc)"}" stroke-width="1.2"/>
          <text x="85" y="77" text-anchor="middle"
                fill="${!isFaxSub ? "var(--ink-m)" : isBroadcasting ? "var(--ok)" : "var(--acc-b)"}"
                font-size="9" font-weight="600" stroke="none">
            ${!isFaxSub ? "غير مشترك · يتجاهل الإشارة" : isBroadcasting ? "تم استلام الحدث!" : "مشترك في الانتظار"}
          </text>

          <text x="85" y="112" text-anchor="middle" fill="var(--ink-m)"
                font-size="8.5" font-weight="500" class="mono-txt" stroke="none">
            ${isFaxSub ? "+ Update(OrderEvent)" : "لا يستجيب للبث (Detached)"}
          </text>
        </g>
      </svg>
    `;
  }

  /* ───────────────────────────────────────────────────────────
     كائن النموذج الأول: الثلاثية البصرية الحركية (The Visual Triad)
     ─────────────────────────────────────────────────────────── */
  const GOF_TRIAD_MODEL = {
    id: "gof-patterns-triad",
    module: "L2-L4",
    module_title: "الوحدات 2-4 · GoF Patterns",
    ref: "L2-S009",
    title_ar: "جوهر أنماط التصميم وعائلاتها الثلاث الكبرى (The Visual Triad)",
    title_en: "The Visual Triad: Creational · Structural · Behavioral Patterns",
    desc_ar:
      "أنماط التصميم (Design Patterns) هي حلول معمارية مستوحاة من العالم الفيزيائي لحل معضلات برمجية شائعة. هذا المحاكي البصري يوضح لك بالرسم المتجهي الفيزيائي كيف يشرح الشكل المفهوم المعماري فوراً: كيف تُخلق الكائنات بالذاكرة (الإنشائية)، كيف تُوفّق الواجهات (الهيكلية)، وكيف تتخاطب الكائنات وتوزع الأحداث (السلوكية).",
    badge: "النموذج الكانوني · Master Showcase",
    tip: "وقفة امتحانية حاسمة: تؤكد د. بيداء لعلع على الفروق الجوهرية بين العائلات الثلاث: الإنشائية (Creational) تتعامل مع ولادة الكائن وإدارته بالذاكرة وتفادي التكرار (Singleton/Factory)، الهيكلية (Structural) توفق بين هياكل وواجهات الكائنات دون كسرها (Adapter/Decorator)، والسلوكية (Behavioral) تدير تدفق الرسائل والأحداث بين الكائنات المنفصلة (Observer/Strategy).",

    render: function (card, utils) {
      const { el, clear, svgNode, iconSvg, slideRefAttrs, ICONS } = utils;

      let activeFamilyTab = "behavioral";
      let isAdapted = false;
      let activeSingletonClient = "c1";
      let isBroadcasting = false;
      let observerSubscribed = { mobile: true, laptop: true, watch: true, fax: false };
      let observerEventCount = 0;

      const tabsBar = el("div", { class: "int-tabs-bar" });
      const tabs = [
        { id: "behavioral", label: "1. السلوكية · رادار المراقب (Observer)" },
        { id: "structural", label: "2. الهيكلية · محوّل المقبس (Adapter)" },
        { id: "creational", label: "3. الإنشائية · السينغلتون (Singleton)" },
        { id: "matrix", label: "4. مصفوفة المقارنة المعمارية" },
      ];

      const stageWrap = el("div", { class: "int-stage-wrap" });

      function renderActiveTab() {
        clear(stageWrap);

        // TAB: BEHAVIORAL (OBSERVER)
        if (activeFamilyTab === "behavioral") {
          const pane = el("div", { class: "int-pane" });
          pane.appendChild(
            el(
              "div",
              { class: "int-tip" },
              el("span", { class: "wt" }, "السر من الشكل (The Visual Metaphor):"),
              "الأنماط السلوكية تدير كيف تتخاطب الكائنات وتوزع الأحداث. فيزيائياً: برج اتصالات وبث إذاعي (Subject) يطلق موجات رادار دائرية. الأجهزة المشتركة الحقيقية (الهاتف، اللابتوب، الساعة) تلتقط الإشارة فوراً وتضيء شاشاتها مع إشعار استلام، بينما الأجهزة الملغية (الفاكس) تتجاهل الإشارة وتمر الموجة دون تأثير. البرج لا يعرف شيئاً عن أسرار كل جهاز، فقط يطلق الحدث (Loose Coupling)!",
            ),
          );

          const controls = el("div", { class: "int-sim-controls" });
          controls.appendChild(
            el(
              "div",
              { class: "int-sim-label" },
              svgNode(ICONS.interactive),
              "حدد الأجهزة المشتركة ثم انقر على زر إطلاق وبث الحدث:",
            ),
          );

          const pills = el("div", { class: "int-sim-pills" });
          const devKeys = [
            { id: "mobile", name: "الهاتف الذكي" },
            { id: "laptop", name: "حاسوب الويب" },
            { id: "watch", name: "الساعة الذكية" },
            { id: "fax", name: "الفاكس القديم" },
          ];
          devKeys.forEach((d) => {
            const isSub = observerSubscribed[d.id] !== false;
            pills.appendChild(
              el(
                "button",
                {
                  class: "int-toggle-btn" + (isSub ? " on" : ""),
                  onclick: () => {
                    observerSubscribed[d.id] = !isSub;
                    renderActiveTab();
                  },
                },
                iconSvg(isSub ? "check" : "cross"),
                `${d.name} (${isSub ? "مشترك" : "ملغي"})`,
              ),
            );
          });
          controls.appendChild(pills);

          const actions = el(
            "div",
            { class: "int-sim-actions" },
            el(
              "button",
              {
                class: "int-action-btn",
                style: "background: var(--acc); color: var(--bg); border-color: var(--acc); font-weight: 700; padding: 7px 18px;",
                onclick: () => {
                  isBroadcasting = true;
                  observerEventCount++;
                  renderActiveTab();
                  setTimeout(() => {
                    isBroadcasting = false;
                    renderActiveTab();
                  }, 1800);
                },
              },
              iconSvg("interactive"),
              "إطلاق حدث وبث الإشارة (Notify: OrderPlaced)",
            ),
          );
          controls.appendChild(actions);
          pane.appendChild(controls);

          const svgBox = el("div", { class: "int-svg-wrap" });
          svgBox.innerHTML = buildObserverSvg(isBroadcasting, observerSubscribed, observerEventCount);
          pane.appendChild(svgBox);

          pane.appendChild(
            el(
              "div",
              { class: "int-metrics-row" },
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "علاقة الارتباط المعماري"),
                el("span", { class: "int-metric-val", style: "color: var(--ok);" }, "Loose Coupling (ارتباط مفكك)"),
                el("span", { class: "int-metric-desc" }, "البرج لا يعتمد على كود الأجهزة المستقبلة"),
              ),
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "الأجهزة المستجيبة للحدث"),
                el(
                  "span",
                  { class: "int-metric-val" },
                  `${Object.values(observerSubscribed).filter((v) => v !== false).length} من أصل 4 أجهزة`,
                ),
                el("span", { class: "int-metric-desc" }, "يمكن إضافة مراقب جديد برمجياً دون تعديل كود البرج"),
              ),
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "المبدأ المعماري المتحقق"),
                el("span", { class: "int-metric-val", style: "color: var(--acc-b);" }, "Open / Closed Principle"),
                el("span", { class: "int-metric-desc" }, "مفتوح لإضافة مراقبين ومغلق لتعديل الناشر"),
              ),
            ),
          );

          stageWrap.appendChild(pane);
        }

        // TAB: STRUCTURAL (ADAPTER)
        else if (activeFamilyTab === "structural") {
          const pane = el("div", { class: "int-pane" });

          pane.appendChild(
            el(
              "div",
              { class: "int-tip" },
              el("span", { class: "wt" }, "السر من الشكل (The Visual Metaphor):"),
              "الأنماط الهيكلية تهتم بتوصيل وتركيب الكائنات. فيزيائياً: جهاز بفيش أمريكي ثنائي مسطح (Adaptee) لا يمكنه الدخول في مقبس جدار أوروبي ثلاثي دائري (Target). الحل المعماري ليس تكسير الجدار ولا قص أسلاك الجهاز، بل وضع قطعة وسيطة تسمى المحوّل (Adapter) تحوّل الواجهة وتسمح بتدفق التيار الكهربائي وإضاءة المصباح!",
            ),
          );

          const controls = el(
            "div",
            { class: "int-sim-controls" },
            el(
              "div",
              { class: "int-sim-label" },
              svgNode(ICONS.interactive),
              "لوحة التحكم التفاعلية في الدائرة الكهربائية المعمارية:",
            ),
            el(
              "div",
              { class: "int-sim-actions", style: "border-top: none; padding-top: 0;" },
              el(
                "button",
                {
                  class: "int-toggle-btn" + (isAdapted ? " on" : ""),
                  onclick: () => {
                    isAdapted = !isAdapted;
                    renderActiveTab();
                  },
                },
                iconSvg(isAdapted ? "check" : "cross"),
                isAdapted ? "المحوّل مركب (انقر لفصل المحوّل)" : "تركيب المحوّل (Plug In Adapter)",
              ),
              el(
                "span",
                { style: "font-size: 0.82rem; color: var(--ink-m); margin-inline-start: 10px;" },
                isAdapted ? "النتيجة: الدائرة مكتملة وتترجم المكالمات" : "النتيجة: شرارات كهربائية لعدم توافق الواجهات",
              ),
            ),
          );
          pane.appendChild(controls);

          const svgBox = el("div", { class: "int-svg-wrap" });
          svgBox.innerHTML = buildAdapterSvg(isAdapted);
          pane.appendChild(svgBox);

          pane.appendChild(
            el(
              "div",
              { class: "int-metrics-row" },
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "الهدف المطلوب (Target)"),
                el("span", { class: "int-metric-val", style: "font-size: 0.95rem; color: var(--acc-b);" }, "ISocket / Wall 220V"),
                el("span", { class: "int-metric-desc" }, "الواجهة التي يتوقعها النظام الخارجي"),
              ),
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "الكائن الموجود لدينا (Adaptee)"),
                el("span", { class: "int-metric-val", style: "font-size: 0.95rem; color: var(--warn);" }, "USDevice / Plug 110V"),
                el("span", { class: "int-metric-desc" }, "فئة جاهزة ذات واجهة مختلفة وغير متوافقة"),
              ),
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "المحوّل الوسيط (Adapter)"),
                el("span", { class: "int-metric-val", style: "font-size: 0.95rem; color: var(--ok);" }, "SocketAdapter : ISocket"),
                el("span", { class: "int-metric-desc" }, "يغلف الكائن ويترجم الاستدعاء دون تعديل الأصل"),
              ),
            ),
          );

          stageWrap.appendChild(pane);
        }

        // TAB: CREATIONAL (SINGLETON)
        else if (activeFamilyTab === "creational") {
          const pane = el("div", { class: "int-pane" });

          pane.appendChild(
            el(
              "div",
              { class: "int-tip" },
              el("span", { class: "wt" }, "السر من الشكل (The Visual Metaphor):"),
              "الأنماط الإنشائية تتحكم في كيفية وولادة الكائنات في الذاكرة (RAM). بدون هذا النمط: كل جزء في البرنامج يولد كائناً جديداً (new DBConnection)، مما يهدر الذاكرة ويحدث تصادماً في البيانات. مع نمط Singleton: توجد نواة طاقة مركزية واحدة في الذاكرة بعنوان ثابت (0x7FFE_04A2)، ومهما تعدد العملاء الطالبون للكائن، توجههم المعمارية جميعاً لنفس العنوان الفيزيائي!",
            ),
          );

          const controls = el(
            "div",
            { class: "int-sim-controls" },
            el(
              "div",
              { class: "int-sim-label" },
              svgNode(ICONS.interactive),
              "انقر لاختبار استدعاء الكائن من مختلف عملاء النظام وتحقق من عنوان الذاكرة:",
            ),
            el(
              "div",
              { class: "int-sim-pills" },
              el(
                "button",
                {
                  class: "int-toggle-btn" + (activeSingletonClient === "c1" ? " on" : ""),
                  onclick: () => {
                    activeSingletonClient = "c1";
                    renderActiveTab();
                  },
                },
                iconSvg("slides"),
                "طلب من Client 1 (OrderService)",
              ),
              el(
                "button",
                {
                  class: "int-toggle-btn" + (activeSingletonClient === "c2" ? " on" : ""),
                  onclick: () => {
                    activeSingletonClient = "c2";
                    renderActiveTab();
                  },
                },
                iconSvg("slides"),
                "طلب من Client 2 (AuthService)",
              ),
              el(
                "button",
                {
                  class: "int-toggle-btn" + (activeSingletonClient === "c3" ? " on" : ""),
                  onclick: () => {
                    activeSingletonClient = "c3";
                    renderActiveTab();
                  },
                },
                iconSvg("slides"),
                "طلب من Client 3 (PaymentService)",
              ),
            ),
          );
          pane.appendChild(controls);

          const svgBox = el("div", { class: "int-svg-wrap" });
          svgBox.innerHTML = buildSingletonSvg(activeSingletonClient);
          pane.appendChild(svgBox);

          pane.appendChild(
            el(
              "div",
              { class: "int-metrics-row" },
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "عدد النسخ الفعلية في الذاكرة"),
                el("span", { class: "int-metric-val" }, "1 نسخة فقط"),
                el("span", { class: "int-metric-desc" }, "مشاركة آمنة وموفرة لموارد النظام"),
              ),
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "عنوان الذاكرة المشترك"),
                el("span", { class: "int-metric-val", style: "color: var(--ok);" }, "0x7FFE_04A2"),
                el("span", { class: "int-metric-desc" }, "نفس المرجع لكل من يستدعي GetInstance()"),
              ),
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "استهلاك الذاكرة"),
                el("span", { class: "int-metric-val" }, "4 KB (مقارنة بـ 60 KB دون النمط)"),
                el("span", { class: "int-metric-desc" }, "تفادي تسريب الذاكرة وتعارض الاتصالات"),
              ),
            ),
          );

          stageWrap.appendChild(pane);
        }

        // TAB: SYNTHESIS MATRIX & EXAM TRAPS
        else if (activeFamilyTab === "matrix") {
          const pane = el("div", { class: "int-pane" });

          pane.appendChild(
            el(
              "div",
              { class: "int-code-block", style: "font-family: var(--fa); direction: rtl; text-align: right; line-height: 2;" },
              `مصفوفة مقارنة عائلات أنماط التصميم (The GoF Triad Synthesis):

1. الأنماط الإنشائية (Creational Patterns):
• السؤال الجوهري: كيف يولد الكائن في الذاكرة ومن المسؤول عن تكوينه؟
• الاستعارة البصرية: نواة طاقة مركزية مفردة (Singleton) أو خط تصنيع آلي وقالب معتمد (Factory).
• أشهر أنماط المقرر: Singleton (L2-S014), Factory Method (L2-S023).
• فخ الامتحان: الخلط بين إنشاء كائن جديد وبين تعديل كائن قائم. الإنشائية تنتهي مهمتها فور استقرار الكائن في الذاكرة.

2. الأنماط الهيكلية (Structural Patterns):
• السؤال الجوهري: كيف تتركب الكائنات وتتوافق مع بعضها لبناء هيكل أكبر؟
• الاستعارة البصرية: محوّل مقبس الجدار (Adapter) أو طبقات التغليف المتداخلة (Decorator).
• أشهر أنماط المقرر: Adapter (L3-S011), Facade (L3-S032), Proxy (L3-S046), Decorator (L3-S055).
• فخ الامتحان: د. بيداء تطلب التمييز بين Adapter (يغير الواجهة لتمكين التوافق) و Decorator (يضيف مسؤوليات جديدة بنفس الواجهة) و Facade (يبسط واجهة نظام معقد كامل).

3. الأنماط السلوكية (Behavioral Patterns):
• السؤال الجوهري: كيف تتخاطب الكائنات وتوزع المسؤوليات وتتدفق الأحداث بينها؟
• الاستعارة البصرية: برج الرادار والبث الإذاعي (Observer) أو بطاقات خطة العمل المتغيرة (Strategy).
• أشهر أنماط المقرر: Strategy (L4-S002), Observer (L4-S016).
• فخ الامتحان: الخلط بين Strategy (تغيير الخوارزمية في وقت التشغيل) و State (تغيير السلوك بناء على الحالة الداخلية للكائن).`,
            ),
          );

          const slideRow = el(
            "div",
            { style: "display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px;" },
            el(
              "a",
              { class: "int-slide-ref-btn", ...slideRefAttrs("L2-S009") },
              iconSvg("slides"),
              "سلايد تصنيف الأنماط (L2-S009)",
            ),
            el(
              "a",
              { class: "int-slide-ref-btn", ...slideRefAttrs("L2-S014") },
              iconSvg("slides"),
              "سلايد نمط Singleton (L2-S014)",
            ),
            el(
              "a",
              { class: "int-slide-ref-btn", ...slideRefAttrs("L3-S011") },
              iconSvg("slides"),
              "سلايد نمط Adapter (L3-S011)",
            ),
            el(
              "a",
              { class: "int-slide-ref-btn", ...slideRefAttrs("L4-S016") },
              iconSvg("slides"),
              "سلايد نمط Observer (L4-S016)",
            ),
          );
          pane.appendChild(slideRow);

          stageWrap.appendChild(pane);
        }
      }

      tabs.forEach((t) => {
        const btn = el(
          "button",
          {
            class: "int-tab-btn" + (activeFamilyTab === t.id ? " active" : ""),
            onclick: () => {
              activeFamilyTab = t.id;
              tabsBar.querySelectorAll(".int-tab-btn").forEach((b) => b.classList.remove("active"));
              btn.classList.add("active");
              renderActiveTab();
            },
          },
          t.label,
        );
        tabsBar.appendChild(btn);
      });

      card.appendChild(tabsBar);
      card.appendChild(stageWrap);
      renderActiveTab();
    },
  };

  /* ═══════════════════════════════════════════════════════════
     القسم الثاني: أطلس ومحاكي مخططات UML لجميع أنماط المقرر وعلاقاتها
     ═══════════════════════════════════════════════════════════ */

  // ترويسة الـ DEFS العامة لجميع مخططات UML لضمان صحة الأسهم والمعايير
  function getUmlDefs() {
    return `
      <defs>
        <!-- Realization (implements): رأس مثلث مفرغ بخط متقطع -->
        <marker id="uml-realize" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="9" markerHeight="9" orient="auto">
          <polygon points="1 1, 11 6, 1 11" fill="var(--sf)" stroke="var(--ink)" stroke-width="1.6"/>
        </marker>
        <!-- Generalization (extends): رأس مثلث مفرغ بخط متصل -->
        <marker id="uml-generalize" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="9" markerHeight="9" orient="auto">
          <polygon points="1 1, 11 6, 1 11" fill="var(--sf)" stroke="var(--ink)" stroke-width="1.6"/>
        </marker>
        <!-- Dependency / Association: سهم مفتوح -->
        <marker id="uml-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <polyline points="2 1, 9 5, 2 9" fill="none" stroke="var(--acc)" stroke-width="1.8" stroke-linecap="round"/>
        </marker>
        <!-- Aggregation: معين مفرغ (HAS-A ضعيف) -->
        <marker id="uml-diamond-hollow" viewBox="0 0 14 14" refX="0" refY="7" markerWidth="10" markerHeight="10" orient="auto">
          <polygon points="0 7, 7 1, 14 7, 7 13" fill="var(--sf)" stroke="var(--acc)" stroke-width="1.6"/>
        </marker>
        <!-- Composition: معين مصمت (HAS-A قوي دورة حياة ملتصقة) -->
        <marker id="uml-diamond-solid" viewBox="0 0 14 14" refX="0" refY="7" markerWidth="10" markerHeight="10" orient="auto">
          <polygon points="0 7, 7 1, 14 7, 7 13" fill="var(--acc)" stroke="var(--acc)" stroke-width="1.6"/>
        </marker>
        <style>
          svg { direction: ltr !important; }
          text { stroke: none !important; font-family: var(--fa); -webkit-font-smoothing: antialiased; direction: ltr !important; unicode-bidi: isolate !important; }
          .mono { font-family: var(--fm); direction: ltr !important; unicode-bidi: isolate !important; }
          .ar-txt { direction: rtl !important; unicode-bidi: isolate !important; font-family: var(--fa) !important; }
        </style>
      </defs>
    `;
  }

  // 1. مخطط علاقات UML السبعة الأكثر شيوعاً في المنهج (L3-S010)
  function buildUmlRelationsSvg() {
    return `
      <svg viewBox="0 0 860 400" dir="ltr" direction="ltr" class="int-svg int-uml-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        ${getUmlDefs()}
        <!-- Table Background Header -->
        <rect x="20" y="20" width="820" height="360" rx="10" fill="var(--sf2)" stroke="var(--ln)" stroke-width="1.5"/>
        <line x1="20" y1="65" x2="840" y2="65" stroke="var(--ln)" stroke-width="1.5"/>
        
        <!-- Column Separators (Col 1: 20-180, Col 2: 180-340, Col 3: 340-840) -->
        <line x1="180" y1="20" x2="180" y2="380" stroke="var(--ln)" stroke-width="1.2"/>
        <line x1="340" y1="20" x2="340" y2="380" stroke="var(--ln)" stroke-width="1.2"/>

        <!-- Header Titles -->
        <text x="100" y="48" text-anchor="middle" fill="var(--acc-b)" font-size="12" font-weight="700">العلاقة (Relationship)</text>
        <text x="260" y="48" text-anchor="middle" fill="var(--acc-b)" font-size="12" font-weight="700">الرمز في UML (Notation)</text>
        <text x="590" y="48" text-anchor="middle" fill="var(--acc-b)" font-size="12" font-weight="700">المعنى البرمجي في كود C# والمنهج</text>

        <!-- Row 1: Association -->
        <g transform="translate(0, 70)">
          <text x="100" y="28" text-anchor="middle" fill="var(--ink)" font-size="11.5" font-weight="700">الاقتران (Association)</text>
          <text x="100" y="45" text-anchor="middle" fill="var(--ink-m)" font-size="9.5" class="mono">ClassA ──> ClassB</text>
          <!-- Vector Arrow -->
          <line x1="205" y1="35" x2="315" y2="35" stroke="var(--acc)" stroke-width="2" marker-end="url(#uml-arrow)"/>
          <text x="360" y="32" fill="var(--ink)" font-size="10.5" font-weight="600">كائن يستخدم كائناً آخر أو يحتفظ به كحقل دائم في الصنف (One uses another).</text>
          <line x1="20" y1="52" x2="840" y2="52" stroke="var(--ln-s)" stroke-width="1"/>
        </g>

        <!-- Row 2: Aggregation -->
        <g transform="translate(0, 122)">
          <text x="100" y="28" text-anchor="middle" fill="var(--ink)" font-size="11.5" font-weight="700">التجميع (Aggregation)</text>
          <text x="100" y="45" text-anchor="middle" fill="var(--ink-m)" font-size="9.5" class="mono">Has-A (ضعيف)</text>
          <!-- Vector Arrow with Hollow Diamond -->
          <line x1="205" y1="35" x2="315" y2="35" stroke="var(--acc)" stroke-width="2" marker-start="url(#uml-diamond-hollow)" marker-end="url(#uml-arrow)"/>
          <text x="360" y="24" fill="var(--ink)" font-size="10.5" font-weight="600">علاقة ملكية مستقلة: الكائن المحتوى يمكنه العيش بمفرده دون الكائن الحاوي.</text>
          <text x="360" y="42" fill="var(--ink-m)" font-size="9.5">مثال: القسم يمتلك أستاذاً (Department ◇──> Professor). إذا حُذف القسم، يبقى الأستاذ حياً.</text>
          <line x1="20" y1="52" x2="840" y2="52" stroke="var(--ln-s)" stroke-width="1"/>
        </g>

        <!-- Row 3: Composition -->
        <g transform="translate(0, 174)">
          <text x="100" y="28" text-anchor="middle" fill="var(--ink)" font-size="11.5" font-weight="700">التركيب (Composition)</text>
          <text x="100" y="45" text-anchor="middle" fill="var(--ink-m)" font-size="9.5" class="mono">Has-A (قوي ملتصق)</text>
          <!-- Vector Arrow with Solid Diamond -->
          <line x1="205" y1="35" x2="315" y2="35" stroke="var(--acc)" stroke-width="2" marker-start="url(#uml-diamond-solid)" marker-end="url(#uml-arrow)"/>
          <text x="360" y="24" fill="var(--ink)" font-size="10.5" font-weight="600">ملكية تامة ودورة حياة ملتصقة: الكائن التابع يولد ويموت مع الكائن الحاوي حصراً.</text>
          <text x="360" y="42" fill="var(--ink-m)" font-size="9.5">مثال: المنزل والغرفة (House ◆──> Room). إذا هُدم المنزل، تنعدم الغرف تماماً.</text>
          <line x1="20" y1="52" x2="840" y2="52" stroke="var(--ln-s)" stroke-width="1"/>
        </g>

        <!-- Row 4: Inheritance -->
        <g transform="translate(0, 226)">
          <text x="100" y="28" text-anchor="middle" fill="var(--ink)" font-size="11.5" font-weight="700">الوراثة (Inheritance)</text>
          <text x="100" y="45" text-anchor="middle" fill="var(--ink-m)" font-size="9.5" class="mono">Generalization (IS-A)</text>
          <!-- Solid Line + Hollow Triangle -->
          <line x1="205" y1="35" x2="315" y2="35" stroke="var(--ink)" stroke-width="2" marker-end="url(#uml-generalize)"/>
          <text x="360" y="32" fill="var(--ink)" font-size="10.5" font-weight="600">اشتقاق صنف فرعي من صنف أب (Dog ──▷ Animal). سهم مستمر ورأس مثلث مفرغ.</text>
          <line x1="20" y1="52" x2="840" y2="52" stroke="var(--ln-s)" stroke-width="1"/>
        </g>

        <!-- Row 5: Realization -->
        <g transform="translate(0, 278)">
          <text x="100" y="28" text-anchor="middle" fill="var(--ink)" font-size="11.5" font-weight="700">تطبيق الواجهة (Realization)</text>
          <text x="100" y="45" text-anchor="middle" fill="var(--ink-m)" font-size="9.5" class="mono">implements Interface</text>
          <!-- Dashed Line + Hollow Triangle -->
          <line x1="205" y1="35" x2="315" y2="35" stroke="var(--ink)" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#uml-realize)"/>
          <text x="360" y="32" fill="var(--ink)" font-size="10.5" font-weight="600">صنف ينفذ عقداً برمجياً (Car - - - ▷ IVehicle). خط متقطع ورأس مثلث مفرغ.</text>
          <line x1="20" y1="52" x2="840" y2="52" stroke="var(--ln-s)" stroke-width="1"/>
        </g>

        <!-- Row 6: Dependency -->
        <g transform="translate(0, 330)">
          <text x="100" y="24" text-anchor="middle" fill="var(--ink)" font-size="11.5" font-weight="700">التبعية (Dependency)</text>
          <text x="100" y="39" text-anchor="middle" fill="var(--ink-m)" font-size="9.5" class="mono">Uses-A (مؤقت)</text>
          <!-- Dashed Line + Open Arrow -->
          <line x1="205" y1="28" x2="315" y2="28" stroke="var(--acc)" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#uml-arrow)"/>
          <text x="360" y="30" fill="var(--ink)" font-size="10.5" font-weight="600">استخدام مؤقت كمعامل داخل دالة دون تخزينه كحقل دائم (Method parameter).</text>
        </g>
      </svg>
    `;
  }

  // 2. نمط السينغلتون Singleton UML (L2-S019)
  function buildUmlSingletonSvg() {
    return `
      <svg viewBox="0 0 860 360" dir="ltr" direction="ltr" class="int-svg int-uml-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        ${getUmlDefs()}

        <!-- Client Class -->
        <g transform="translate(70, 95)">
          <rect x="0" y="0" width="160" height="80" rx="8" fill="var(--sf2)" stroke="var(--ln)" stroke-width="1.8"/>
          <text x="80" y="28" text-anchor="middle" fill="var(--ink)" font-size="12" font-weight="700" class="mono">Client</text>
          <line x1="0" y1="40" x2="160" y2="40" stroke="var(--ln)" stroke-width="1.2"/>
          <text x="80" y="62" text-anchor="middle" fill="var(--ink-m)" font-size="10" class="mono">+ DoWork(): void</text>
        </g>

        <!-- Client Dependency Arrow to Singleton -->
        <path d="M 230 135 L 340 135" stroke="var(--acc)" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#uml-arrow)"/>
        <rect x="235" y="108" width="100" height="22" rx="4" fill="var(--sf2)" stroke="var(--ln)" stroke-width="1"/>
        <text x="285" y="123" text-anchor="middle" fill="var(--acc-b)" font-size="9.5" font-weight="700" class="ar-txt">يستدعي GetInstance()</text>

        <!-- Singleton Class (Canonical 3 Compartments) -->
        <g transform="translate(340, 65)">
          <rect x="0" y="0" width="270" height="155" rx="8" fill="var(--sf2)" stroke="var(--acc)" stroke-width="2.2"/>
          <!-- Compartment 1: Name -->
          <text x="135" y="28" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700" class="mono">Singleton</text>
          <line x1="0" y1="40" x2="270" y2="40" stroke="var(--ln)" stroke-width="1.2"/>

          <!-- Compartment 2: Static Attribute (Underlined) -->
          <text x="15" y="62" fill="var(--ink)" font-size="10.5" font-weight="600" class="mono">- instance: Singleton</text>
          <!-- Underline indicates STATIC in UML -->
          <line x1="15" y1="66" x2="155" y2="66" stroke="var(--ink)" stroke-width="1.2"/>
          <line x1="0" y1="80" x2="270" y2="80" stroke="var(--ln)" stroke-width="1.2"/>

          <!-- Compartment 3: Methods -->
          <text x="15" y="102" fill="var(--err)" font-size="10.5" font-weight="600" class="mono">- Singleton()</text>
          <text x="15" y="126" fill="var(--ok)" font-size="10.5" font-weight="600" class="mono">+ GetInstance(): Singleton</text>
          <!-- Underline for static method -->
          <line x1="15" y1="130" x2="190" y2="130" stroke="var(--ok)" stroke-width="1.2"/>
          <text x="15" y="146" fill="var(--ink-m)" font-size="10" class="mono">+ DoSomething(): void</text>
        </g>

        <!-- Self-Association Loop (Instance holds reference to itself) -->
        <path d="M 610 90 L 675 90 L 675 165 L 610 165" stroke="var(--acc)" stroke-width="1.8" marker-end="url(#uml-arrow)"/>
        <text x="682" y="132" fill="var(--acc-b)" font-size="10" font-weight="600" class="mono">- instance</text>

        <!-- Pedagogical Callout Badges -->
        <g transform="translate(100, 260)">
          <rect x="0" y="0" width="660" height="70" rx="8" fill="color-mix(in srgb, var(--acc) 10%, var(--sf))" stroke="var(--acc)" stroke-dasharray="4 3"/>
          <text x="330" y="26" text-anchor="middle" fill="var(--acc-b)" font-size="11" font-weight="700" class="ar-txt">
            أسرار مخطط Singleton في الامتحانات:
          </text>
          <text x="330" y="48" text-anchor="middle" fill="var(--ink)" font-size="10" class="ar-txt">
            1. علامة السالب (-) تعني Private (المنشئ والحقل خاصان). 2. التسطير يعني عضو ساكن (Static). 3. علامة (+) تعني دالة عامة عالمية.
          </text>
        </g>
      </svg>
    `;
  }

  // 3. نمط المصنع Factory Method UML (L2-S027)
  function buildUmlFactorySvg() {
    return `
      <svg viewBox="0 0 860 380" dir="ltr" direction="ltr" class="int-svg int-uml-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        ${getUmlDefs()}

        <!-- Client Box -->
        <g transform="translate(40, 60)">
          <rect x="0" y="0" width="160" height="70" rx="8" fill="var(--sf2)" stroke="var(--ln)" stroke-width="1.6"/>
          <text x="80" y="28" text-anchor="middle" fill="var(--ink)" font-size="12" font-weight="700" class="mono">Client</text>
          <line x1="0" y1="38" x2="160" y2="38" stroke="var(--ln)"/>
          <text x="80" y="58" text-anchor="middle" fill="var(--ink-m)" font-size="10" class="mono">+ SendAlert()</text>
        </g>

        <!-- Factory Class -->
        <g transform="translate(40, 185)">
          <rect x="0" y="0" width="240" height="90" rx="8" fill="var(--sf2)" stroke="var(--acc)" stroke-width="2"/>
          <text x="120" y="28" text-anchor="middle" fill="var(--ink)" font-size="12" font-weight="700" class="mono">NotificationFactory</text>
          <line x1="0" y1="40" x2="240" y2="40" stroke="var(--ln)"/>
          <text x="15" y="68" fill="var(--ok)" font-size="10" font-weight="600" class="mono">+ Create(type): INotification</text>
        </g>

        <!-- Client calls Factory -->
        <path d="M 120 130 L 120 185" stroke="var(--acc)" stroke-width="1.8" marker-end="url(#uml-arrow)"/>

        <!-- INotification Interface (Target Product) -->
        <g transform="translate(460, 40)">
          <rect x="0" y="0" width="250" height="85" rx="8" fill="var(--sf2)" stroke="var(--acc)" stroke-width="2"/>
          <text x="125" y="22" text-anchor="middle" fill="var(--acc-b)" font-size="10" font-weight="600" class="mono">&lt;&lt;interface&gt;&gt;</text>
          <text x="125" y="42" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700" class="mono">INotification</text>
          <line x1="0" y1="52" x2="250" y2="52" stroke="var(--ln)"/>
          <text x="125" y="72" text-anchor="middle" fill="var(--acc-b)" font-size="10.5" font-weight="600" class="mono">+ Send(msg: string): void</text>
        </g>

        <!-- Factory Creates Product (Dependency Arrow) -->
        <path d="M 280 230 L 585 230 L 585 125" stroke="var(--acc)" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#uml-arrow)"/>
        <rect x="365" y="206" width="135" height="22" rx="4" fill="var(--sf2)" stroke="var(--ln)" stroke-width="1"/>
        <text x="432" y="221" text-anchor="middle" fill="var(--acc-b)" font-size="10" font-weight="700" class="ar-txt">&lt;&lt;creates&gt;&gt; يُنشئ منتجاً</text>

        <!-- Concrete Products implementing INotification -->
        <g transform="translate(340, 260)">
          <rect x="0" y="0" width="150" height="60" rx="6" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.5"/>
          <text x="75" y="26" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="700" class="mono">EmailNotification</text>
          <text x="75" y="46" text-anchor="middle" fill="var(--ok)" font-size="9.5" class="mono">+ Send(msg)</text>
        </g>

        <g transform="translate(510, 260)">
          <rect x="0" y="0" width="150" height="60" rx="6" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.5"/>
          <text x="75" y="26" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="700" class="mono">SMSNotification</text>
          <text x="75" y="46" text-anchor="middle" fill="var(--ok)" font-size="9.5" class="mono">+ Send(msg)</text>
        </g>

        <g transform="translate(680, 260)">
          <rect x="0" y="0" width="150" height="60" rx="6" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.5"/>
          <text x="75" y="26" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="700" class="mono">PushNotification</text>
          <text x="75" y="46" text-anchor="middle" fill="var(--ok)" font-size="9.5" class="mono">+ Send(msg)</text>
        </g>

        <!-- Realization Lines (- - - ▷) from Concrete to Interface -->
        <path d="M 415 260 L 415 180 L 585 180 L 585 125" stroke="var(--ink)" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#uml-realize)"/>
        <path d="M 585 260 L 585 180" stroke="var(--ink)" stroke-width="1.8" stroke-dasharray="6 4"/>
        <path d="M 755 260 L 755 180 L 585 180" stroke="var(--ink)" stroke-width="1.8" stroke-dasharray="6 4"/>
      </svg>
    `;
  }

  // 4. نمط المهايئ Adapter Pattern UML (L3-S018)
  function buildUmlAdapterSvg() {
    return `
      <svg viewBox="0 0 860 380" dir="ltr" direction="ltr" class="int-svg int-uml-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        ${getUmlDefs()}

        <!-- Client Class -->
        <g transform="translate(40, 75)">
          <rect x="0" y="0" width="140" height="75" rx="8" fill="var(--sf2)" stroke="var(--ln)" stroke-width="1.8"/>
          <text x="70" y="28" text-anchor="middle" fill="var(--ink)" font-size="12" font-weight="700" class="mono">Client</text>
          <line x1="0" y1="40" x2="140" y2="40" stroke="var(--ln)"/>
          <text x="70" y="60" text-anchor="middle" fill="var(--ink-m)" font-size="10" class="mono">+ Pay(): void</text>
        </g>

        <!-- ITarget Interface -->
        <g transform="translate(290, 40)">
          <rect x="0" y="0" width="240" height="85" rx="8" fill="var(--sf2)" stroke="var(--acc)" stroke-width="2"/>
          <text x="120" y="22" text-anchor="middle" fill="var(--acc-b)" font-size="10" font-weight="600" class="mono">&lt;&lt;interface&gt;&gt;</text>
          <text x="120" y="42" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700" class="mono">IPaymentProcessor</text>
          <line x1="0" y1="52" x2="240" y2="52" stroke="var(--ln)"/>
          <text x="120" y="72" text-anchor="middle" fill="var(--acc-b)" font-size="10.5" font-weight="600" class="mono">+ ProcessPayment(amount)</text>
        </g>

        <!-- Client calls Target Interface -->
        <path d="M 180 85 L 290 85" stroke="var(--acc)" stroke-width="2" marker-end="url(#uml-arrow)"/>

        <!-- Adapter Class -->
        <g transform="translate(270, 205)">
          <rect x="0" y="0" width="280" height="110" rx="8" fill="var(--sf2)" stroke="var(--ok)" stroke-width="2.2"/>
          <text x="140" y="26" text-anchor="middle" fill="var(--ink)" font-size="12.5" font-weight="700" class="mono">StripeAdapter</text>
          <line x1="0" y1="36" x2="280" y2="36" stroke="var(--ln)"/>
          <text x="15" y="58" fill="var(--acc-b)" font-size="10" font-weight="600" class="mono">- _stripeService: StripeApi</text>
          <line x1="0" y1="70" x2="280" y2="70" stroke="var(--ln)"/>
          <text x="15" y="94" fill="var(--ok)" font-size="10" font-weight="600" class="mono">+ ProcessPayment(amount)</text>
        </g>

        <!-- Realization: Adapter implements Target Interface (- - - ▷) -->
        <path d="M 410 205 L 410 125" stroke="var(--ink)" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#uml-realize)"/>

        <!-- Adaptee Class (External / Legacy System) -->
        <g transform="translate(630, 205)">
          <rect x="0" y="0" width="200" height="90" rx="8" fill="var(--sf)" stroke="var(--warn)" stroke-width="2"/>
          <text x="100" y="26" text-anchor="middle" fill="var(--ink)" font-size="12" font-weight="700" class="mono">StripeApi (Adaptee)</text>
          <line x1="0" y1="38" x2="200" y2="38" stroke="var(--ln)"/>
          <text x="100" y="65" text-anchor="middle" fill="var(--warn)" font-size="10" font-weight="600" class="mono">+ ChargeCreditCard(cents)</text>
        </g>

        <!-- Aggregation / Composition Arrow: Adapter HAS-A Adaptee -->
        <path d="M 550 250 L 630 250" stroke="var(--acc)" stroke-width="2" marker-start="url(#uml-diamond-hollow)" marker-end="url(#uml-arrow)"/>
        <rect x="545" y="222" width="80" height="20" rx="4" fill="var(--sf2)" stroke="var(--ln)" stroke-width="1"/>
        <text x="585" y="236" text-anchor="middle" fill="var(--acc-b)" font-size="9.5" font-weight="700" class="ar-txt">تفويض (Delegates)</text>
      </svg>
    `;
  }

  // 5. نمط الواجهة Facade Pattern UML (L3-S038)
  function buildUmlFacadeSvg() {
    return `
      <svg viewBox="0 0 860 380" dir="ltr" direction="ltr" class="int-svg int-uml-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        ${getUmlDefs()}

        <!-- Client Class -->
        <g transform="translate(340, 20)">
          <rect x="0" y="0" width="180" height="60" rx="8" fill="var(--sf2)" stroke="var(--ln)" stroke-width="1.8"/>
          <text x="90" y="26" text-anchor="middle" fill="var(--ink)" font-size="12" font-weight="700" class="mono">Client (Web / App)</text>
          <text x="90" y="46" text-anchor="middle" fill="var(--ink-m)" font-size="9.5" class="mono">+ Checkout()</text>
        </g>

        <!-- Client calls Facade -->
        <path d="M 430 80 L 430 115" stroke="var(--acc)" stroke-width="2" marker-end="url(#uml-arrow)"/>

        <!-- Facade Class -->
        <g transform="translate(280, 115)">
          <rect x="0" y="0" width="300" height="85" rx="8" fill="var(--sf2)" stroke="var(--ok)" stroke-width="2.4"/>
          <text x="150" y="26" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700" class="mono">ShoppingFacade</text>
          <line x1="0" y1="36" x2="300" y2="36" stroke="var(--ln)"/>
          <text x="150" y="62" text-anchor="middle" fill="var(--ok)" font-size="10.5" font-weight="600" class="mono">+ PlaceOrder(cartId, payment): void</text>
        </g>

        <!-- Subsystems Cluster Below -->
        <path d="M 430 200 L 430 230" stroke="var(--acc)" stroke-width="1.8"/>
        <path d="M 120 230 L 740 230" stroke="var(--acc)" stroke-width="1.8"/>

        <!-- Subsystem 1: OrderService -->
        <path d="M 120 230 L 120 265" stroke="var(--acc)" stroke-width="1.8" marker-end="url(#uml-arrow)"/>
        <g transform="translate(45, 265)">
          <rect x="0" y="0" width="150" height="60" rx="6" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.5"/>
          <text x="75" y="26" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="700" class="mono">OrderService</text>
          <text x="75" y="46" text-anchor="middle" fill="var(--ink-m)" font-size="9.5" class="mono">+ CreateOrder()</text>
        </g>

        <!-- Subsystem 2: PaymentService -->
        <path d="M 325 230 L 325 265" stroke="var(--acc)" stroke-width="1.8" marker-end="url(#uml-arrow)"/>
        <g transform="translate(250, 265)">
          <rect x="0" y="0" width="150" height="60" rx="6" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.5"/>
          <text x="75" y="26" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="700" class="mono">PaymentService</text>
          <text x="75" y="46" text-anchor="middle" fill="var(--ink-m)" font-size="9.5" class="mono">+ ProcessPayment()</text>
        </g>

        <!-- Subsystem 3: InventoryService -->
        <path d="M 535 230 L 535 265" stroke="var(--acc)" stroke-width="1.8" marker-end="url(#uml-arrow)"/>
        <g transform="translate(460, 265)">
          <rect x="0" y="0" width="150" height="60" rx="6" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.5"/>
          <text x="75" y="26" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="700" class="mono">InventoryService</text>
          <text x="75" y="46" text-anchor="middle" fill="var(--ink-m)" font-size="9.5" class="mono">+ CheckStock()</text>
        </g>

        <!-- Subsystem 4: EmailService -->
        <path d="M 740 230 L 740 265" stroke="var(--acc)" stroke-width="1.8" marker-end="url(#uml-arrow)"/>
        <g transform="translate(665, 265)">
          <rect x="0" y="0" width="150" height="60" rx="6" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.5"/>
          <text x="75" y="26" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="700" class="mono">EmailService</text>
          <text x="75" y="46" text-anchor="middle" fill="var(--ink-m)" font-size="9.5" class="mono">+ SendReceipt()</text>
        </g>
      </svg>
    `;
  }

  // 6. نمط الوكيل Proxy Pattern UML (L3-S050)
  function buildUmlProxySvg() {
    return `
      <svg viewBox="0 0 860 380" dir="ltr" direction="ltr" class="int-svg int-uml-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        ${getUmlDefs()}

        <!-- Client Class -->
        <g transform="translate(40, 65)">
          <rect x="0" y="0" width="140" height="70" rx="8" fill="var(--sf2)" stroke="var(--ln)" stroke-width="1.8"/>
          <text x="70" y="28" text-anchor="middle" fill="var(--ink)" font-size="12" font-weight="700" class="mono">Client</text>
          <line x1="0" y1="38" x2="140" y2="38" stroke="var(--ln)"/>
          <text x="70" y="58" text-anchor="middle" fill="var(--ink-m)" font-size="10" class="mono">+ PlayVideo()</text>
        </g>

        <!-- Client calls ISubject Interface -->
        <path d="M 180 85 L 310 85" stroke="var(--acc)" stroke-width="2" marker-end="url(#uml-arrow)"/>

        <!-- ISubject Interface (Common Interface) -->
        <g transform="translate(310, 40)">
          <rect x="0" y="0" width="240" height="85" rx="8" fill="var(--sf2)" stroke="var(--acc)" stroke-width="2"/>
          <text x="120" y="22" text-anchor="middle" fill="var(--acc-b)" font-size="10" font-weight="600" class="mono">&lt;&lt;interface&gt;&gt;</text>
          <text x="120" y="42" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700" class="mono">IVideoService</text>
          <line x1="0" y1="52" x2="240" y2="52" stroke="var(--ln)"/>
          <text x="120" y="72" text-anchor="middle" fill="var(--acc-b)" font-size="10.5" font-weight="600" class="mono">+ GetVideo(id): Video</text>
        </g>

        <!-- Proxy Class (Caching / Security Layer) -->
        <g transform="translate(130, 205)">
          <rect x="0" y="0" width="280" height="115" rx="8" fill="var(--sf2)" stroke="var(--ok)" stroke-width="2.2"/>
          <text x="140" y="26" text-anchor="middle" fill="var(--ink)" font-size="12" font-weight="700" class="mono">CachedVideoProxy</text>
          <line x1="0" y1="36" x2="280" y2="36" stroke="var(--ln)"/>
          <text x="15" y="56" fill="var(--acc-b)" font-size="9.5" font-weight="600" class="mono">- _realService: RealVideoService</text>
          <text x="15" y="74" fill="var(--ink-m)" font-size="9.5" class="mono">- _cache: Dictionary</text>
          <line x1="0" y1="84" x2="280" y2="84" stroke="var(--ln)"/>
          <text x="15" y="103" fill="var(--ok)" font-size="10" font-weight="600" class="mono">+ GetVideo(id): Video</text>
        </g>

        <!-- RealSubject Class (Heavy Original Service) -->
        <g transform="translate(540, 205)">
          <rect x="0" y="0" width="260" height="95" rx="8" fill="var(--sf)" stroke="var(--ln)" stroke-width="2"/>
          <text x="130" y="26" text-anchor="middle" fill="var(--ink)" font-size="12" font-weight="700" class="mono">RealVideoService</text>
          <line x1="0" y1="36" x2="260" y2="36" stroke="var(--ln)"/>
          <text x="130" y="65" text-anchor="middle" fill="var(--ink-m)" font-size="10" class="mono">+ GetVideo(id): Video (Heavy)</text>
        </g>

        <!-- Realization Lines to ISubject -->
        <path d="M 270 205 L 270 165 L 430 165 L 430 125" stroke="var(--ink)" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#uml-realize)"/>
        <path d="M 670 205 L 670 165 L 430 165" stroke="var(--ink)" stroke-width="1.8" stroke-dasharray="6 4"/>

        <!-- Aggregation: Proxy HAS-A RealSubject -->
        <path d="M 410 255 L 540 255" stroke="var(--acc)" stroke-width="2" marker-start="url(#uml-diamond-hollow)" marker-end="url(#uml-arrow)"/>
        <!-- Clean Pill Badge for Label -->
        <rect x="425" y="228" width="100" height="22" rx="4" fill="var(--sf2)" stroke="var(--ln)" stroke-width="1"/>
        <text x="475" y="243" text-anchor="middle" fill="var(--acc-b)" font-size="10" font-weight="700" class="ar-txt">يتحكم في الوصول</text>
      </svg>
    `;
  }

  // 7. نمط المزخرف Decorator Pattern UML (L3-S062)
  function buildUmlDecoratorSvg() {
    return `
      <svg viewBox="0 0 860 380" dir="ltr" direction="ltr" class="int-svg int-uml-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        ${getUmlDefs()}

        <!-- Component Interface (IText) -->
        <g transform="translate(330, 25)">
          <rect x="0" y="0" width="200" height="80" rx="8" fill="var(--sf2)" stroke="var(--acc)" stroke-width="2"/>
          <text x="100" y="22" text-anchor="middle" fill="var(--acc-b)" font-size="10" font-weight="600" class="mono">&lt;&lt;interface&gt;&gt;</text>
          <text x="100" y="42" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700" class="mono">IText</text>
          <line x1="0" y1="52" x2="200" y2="52" stroke="var(--ln)"/>
          <text x="100" y="70" text-anchor="middle" fill="var(--acc-b)" font-size="10.5" font-weight="600" class="mono">+ Render(): string</text>
        </g>

        <!-- ConcreteComponent (PlainText) -->
        <g transform="translate(60, 150)">
          <rect x="0" y="0" width="200" height="70" rx="8" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.8"/>
          <text x="100" y="26" text-anchor="middle" fill="var(--ink)" font-size="12" font-weight="700" class="mono">PlainText</text>
          <line x1="0" y1="36" x2="200" y2="36" stroke="var(--ln)"/>
          <text x="100" y="55" text-anchor="middle" fill="var(--ok)" font-size="10" class="mono">+ Render() => "Text"</text>
        </g>

        <!-- Realization: PlainText implements IText -->
        <path d="M 160 150 L 160 65 L 330 65" stroke="var(--ink)" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#uml-realize)"/>

        <!-- Base Decorator (TextDecorator - Abstract) -->
        <g transform="translate(480, 140)">
          <rect x="0" y="0" width="260" height="95" rx="8" fill="var(--sf2)" stroke="var(--acc)" stroke-width="2.2"/>
          <text x="130" y="20" text-anchor="middle" fill="#f59e0b" font-size="9.5" font-weight="600" class="mono">&lt;&lt;abstract&gt;&gt;</text>
          <text x="130" y="38" text-anchor="middle" fill="var(--ink)" font-size="12.5" font-weight="700" class="mono">TextDecorator</text>
          <line x1="0" y1="46" x2="260" y2="46" stroke="var(--ln)"/>
          <text x="15" y="64" fill="var(--acc-b)" font-size="10" font-weight="600" class="mono"># _text: IText</text>
          <line x1="0" y1="72" x2="260" y2="72" stroke="var(--ln)"/>
          <text x="15" y="88" fill="var(--ink-m)" font-size="10" class="mono">+ Render() => _text.Render()</text>
        </g>

        <!-- Realization: TextDecorator implements IText -->
        <path d="M 610 140 L 610 65 L 530 65" stroke="var(--ink)" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#uml-realize)"/>

        <!-- Aggregation: TextDecorator HAS-A IText (The Dual Relationship!) -->
        <path d="M 480 180 L 370 180 L 370 105" stroke="var(--acc)" stroke-width="2" marker-start="url(#uml-diamond-hollow)" marker-end="url(#uml-arrow)"/>
        <rect x="375" y="157" width="130" height="22" rx="4" fill="var(--sf2)" stroke="var(--ln)" stroke-width="1"/>
        <text x="440" y="172" text-anchor="middle" fill="var(--acc-b)" font-size="9.5" font-weight="700" class="ar-txt">HAS-A (يحتوي مرجعاً)</text>

        <!-- Concrete Decorators (BoldDecorator & ItalicDecorator) -->
        <g transform="translate(390, 280)">
          <rect x="0" y="0" width="165" height="60" rx="6" fill="var(--sf)" stroke="var(--ok)" stroke-width="1.8"/>
          <text x="82" y="24" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="700" class="mono">BoldDecorator</text>
          <text x="82" y="44" text-anchor="middle" fill="var(--ok)" font-size="9.5" class="mono">+ Render() => &lt;b&gt;</text>
        </g>

        <g transform="translate(580, 280)">
          <rect x="0" y="0" width="165" height="60" rx="6" fill="var(--sf)" stroke="var(--ok)" stroke-width="1.8"/>
          <text x="82" y="24" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="700" class="mono">ItalicDecorator</text>
          <text x="82" y="44" text-anchor="middle" fill="var(--ok)" font-size="9.5" class="mono">+ Render() => &lt;i&gt;</text>
        </g>

        <!-- Generalization: Concrete Decorators inherit from Base Decorator -->
        <path d="M 472 280 L 472 260 L 610 260 L 610 235" stroke="var(--ink)" stroke-width="1.8" marker-end="url(#uml-generalize)"/>
        <path d="M 662 280 L 662 260 L 610 260" stroke="var(--ink)" stroke-width="1.8"/>
      </svg>
    `;
  }

  // 8. نمط الاستراتيجية Strategy Pattern UML (L4-S008)
  function buildUmlStrategySvg() {
    return `
      <svg viewBox="0 0 860 380" dir="ltr" direction="ltr" class="int-svg int-uml-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        ${getUmlDefs()}

        <!-- Context Class (ShoppingCart) -->
        <g transform="translate(40, 55)">
          <rect x="0" y="0" width="280" height="125" rx="8" fill="var(--sf2)" stroke="var(--acc)" stroke-width="2.2"/>
          <text x="140" y="28" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700" class="mono">ShoppingCart (Context)</text>
          <line x1="0" y1="38" x2="280" y2="38" stroke="var(--ln)"/>
          <text x="15" y="58" fill="var(--acc-b)" font-size="10" font-weight="600" class="mono">- _strategy: IPaymentStrategy</text>
          <line x1="0" y1="68" x2="280" y2="68" stroke="var(--ln)"/>
          <text x="15" y="88" fill="var(--ink)" font-size="10" class="mono">+ SetPaymentStrategy(strategy)</text>
          <text x="15" y="108" fill="var(--ok)" font-size="10" font-weight="600" class="mono">+ Checkout(): void</text>
        </g>

        <!-- IPaymentStrategy Interface -->
        <g transform="translate(490, 45)">
          <rect x="0" y="0" width="260" height="85" rx="8" fill="var(--sf2)" stroke="var(--acc)" stroke-width="2"/>
          <text x="130" y="22" text-anchor="middle" fill="var(--acc-b)" font-size="10" font-weight="600" class="mono">&lt;&lt;interface&gt;&gt;</text>
          <text x="130" y="42" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700" class="mono">IPaymentStrategy</text>
          <line x1="0" y1="52" x2="260" y2="52" stroke="var(--ln)"/>
          <text x="130" y="72" text-anchor="middle" fill="var(--acc-b)" font-size="10.5" font-weight="600" class="mono">+ Pay(amount: double): void</text>
        </g>

        <!-- Aggregation: Context HAS-A Strategy -->
        <path d="M 320 90 L 490 90" stroke="var(--acc)" stroke-width="2" marker-start="url(#uml-diamond-hollow)" marker-end="url(#uml-arrow)"/>
        <rect x="355" y="65" width="100" height="22" rx="4" fill="var(--sf2)" stroke="var(--ln)" stroke-width="1"/>
        <text x="405" y="80" text-anchor="middle" fill="var(--acc-b)" font-size="10" font-weight="700" class="ar-txt">يحتوي استراتيجية</text>

        <!-- Concrete Strategies implementing IPaymentStrategy -->
        <g transform="translate(340, 240)">
          <rect x="0" y="0" width="150" height="60" rx="6" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.6"/>
          <text x="75" y="26" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="700" class="mono">CreditCardPayment</text>
          <text x="75" y="46" text-anchor="middle" fill="var(--ok)" font-size="9.5" class="mono">+ Pay(amount)</text>
        </g>

        <g transform="translate(510, 240)">
          <rect x="0" y="0" width="150" height="60" rx="6" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.6"/>
          <text x="75" y="26" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="700" class="mono">PayPalPayment</text>
          <text x="75" y="46" text-anchor="middle" fill="var(--ok)" font-size="9.5" class="mono">+ Pay(amount)</text>
        </g>

        <g transform="translate(680, 240)">
          <rect x="0" y="0" width="150" height="60" rx="6" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.6"/>
          <text x="75" y="26" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="700" class="mono">CryptoPayment</text>
          <text x="75" y="46" text-anchor="middle" fill="var(--ok)" font-size="9.5" class="mono">+ Pay(amount)</text>
        </g>

        <!-- Realization Lines (- - - ▷) -->
        <path d="M 415 240 L 415 180 L 620 180 L 620 130" stroke="var(--ink)" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#uml-realize)"/>
        <path d="M 585 240 L 585 180" stroke="var(--ink)" stroke-width="1.8" stroke-dasharray="6 4"/>
        <path d="M 755 240 L 755 180 L 620 180" stroke="var(--ink)" stroke-width="1.8" stroke-dasharray="6 4"/>
      </svg>
    `;
  }

  // 9. نمط المراقب Observer Pattern UML (L4-S024)
  function buildUmlObserverSvg() {
    return `
      <svg viewBox="0 0 860 380" dir="ltr" direction="ltr" class="int-svg int-uml-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        ${getUmlDefs()}

        <!-- Subject Class (Publisher) -->
        <g transform="translate(40, 50)">
          <rect x="0" y="0" width="280" height="135" rx="8" fill="var(--sf2)" stroke="var(--acc)" stroke-width="2.2"/>
          <text x="140" y="26" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700" class="mono">CoffeeShop (Subject)</text>
          <line x1="0" y1="36" x2="280" y2="36" stroke="var(--ln)"/>
          <text x="15" y="56" fill="var(--acc-b)" font-size="10" font-weight="600" class="mono">- _observers: List&lt;IObserver&gt;</text>
          <text x="15" y="72" fill="var(--ink-m)" font-size="10" class="mono">- _orderStatus: string</text>
          <line x1="0" y1="80" x2="280" y2="80" stroke="var(--ln)"/>
          <text x="15" y="98" fill="var(--ink)" font-size="10" class="mono">+ Attach(observer: IObserver)</text>
          <text x="15" y="114" fill="var(--ink)" font-size="10" class="mono">+ Detach(observer: IObserver)</text>
          <text x="15" y="130" fill="var(--ok)" font-size="10" font-weight="600" class="mono">+ NotifyObservers(): void</text>
        </g>

        <!-- IObserver Interface (Subscriber Interface) -->
        <g transform="translate(500, 50)">
          <rect x="0" y="0" width="250" height="85" rx="8" fill="var(--sf2)" stroke="var(--acc)" stroke-width="2"/>
          <text x="125" y="22" text-anchor="middle" fill="var(--acc-b)" font-size="10" font-weight="600" class="mono">&lt;&lt;interface&gt;&gt;</text>
          <text x="125" y="42" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700" class="mono">IObserver</text>
          <line x1="0" y1="52" x2="250" y2="52" stroke="var(--ln)"/>
          <text x="125" y="72" text-anchor="middle" fill="var(--acc-b)" font-size="10.5" font-weight="600" class="mono">+ Update(status: string): void</text>
        </g>

        <!-- Aggregation: Subject HAS-A list of Observers -->
        <path d="M 320 90 L 500 90" stroke="var(--acc)" stroke-width="2" marker-start="url(#uml-diamond-hollow)" marker-end="url(#uml-arrow)"/>
        <rect x="360" y="65" width="105" height="22" rx="4" fill="var(--sf2)" stroke="var(--ln)" stroke-width="1"/>
        <text x="412" y="80" text-anchor="middle" fill="var(--acc-b)" font-size="10" font-weight="700" class="ar-txt">0..* (قائمة مراقبين)</text>

        <!-- Concrete Observers -->
        <g transform="translate(350, 240)">
          <rect x="0" y="0" width="150" height="65" rx="6" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.6"/>
          <text x="75" y="24" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="700" class="mono">CustomerObserver</text>
          <line x1="0" y1="34" x2="150" y2="34" stroke="var(--ln)"/>
          <text x="75" y="52" text-anchor="middle" fill="var(--ok)" font-size="9.5" class="mono">+ Update(status)</text>
        </g>

        <g transform="translate(520, 240)">
          <rect x="0" y="0" width="150" height="65" rx="6" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.6"/>
          <text x="75" y="24" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="700" class="mono">BaristaObserver</text>
          <line x1="0" y1="34" x2="150" y2="34" stroke="var(--ln)"/>
          <text x="75" y="52" text-anchor="middle" fill="var(--ok)" font-size="9.5" class="mono">+ Update(status)</text>
        </g>

        <g transform="translate(690, 240)">
          <rect x="0" y="0" width="150" height="65" rx="6" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.6"/>
          <text x="75" y="24" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="700" class="mono">SMSNotifierObserver</text>
          <line x1="0" y1="34" x2="150" y2="34" stroke="var(--ln)"/>
          <text x="75" y="52" text-anchor="middle" fill="var(--ok)" font-size="9.5" class="mono">+ Update(status)</text>
        </g>

        <!-- Realization Lines (- - - ▷) -->
        <path d="M 425 240 L 425 180 L 625 180 L 625 135" stroke="var(--ink)" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#uml-realize)"/>
        <path d="M 595 240 L 595 180" stroke="var(--ink)" stroke-width="1.8" stroke-dasharray="6 4"/>
        <path d="M 765 240 L 765 180 L 625 180" stroke="var(--ink)" stroke-width="1.8" stroke-dasharray="6 4"/>
      </svg>
    `;
  }

  /* ───────────────────────────────────────────────────────────
     بيانات شروح مخططات الـ UML المعتمدة في المنهج
     ─────────────────────────────────────────────────────────── */
  const UML_TABS_DATA = [
    {
      id: "relations",
      label: "العلاقات السبعة (L3-S010)",
      title: "العلاقات السبعة الأكثر شيوعاً في لغة النمذجة الموحدة (UML Relationships)",
      ref: "L3-S010",
      desc: "تعتمد أنماط التصميم بالكامل على ضبط العلاقات بين الكائنات. يوضح هذا المخطط الفروق المعمارية الستة الكبرى المعتمدة في اختبارات د. بيداء لعلع، خاصة الفرق بين التجميع والتركيب وتطبيق الواجهة.",
      examTip: "سؤال متكرر: ما الفرق بين Aggregation و Composition؟ في التجميع (معين مفرغ)، يعيش الكائن التابع مستقلاً (Department و Teacher). في التركيب (معين مصمت)، يرتبط الكائن التابع وجودياً بالحاوي وينعدم بانعدامه (House و Room).",
      buildSvg: buildUmlRelationsSvg,
      code: `// 1. Association: صنف يستخدم صنفاً آخر
public class Order { private Customer _customer; }

// 2. Aggregation: كائن يعيش بمفرده (معين مفرغ)
public class Department {
    private List<Teacher> _teachers; // إذا حُذف القسم، يبقى المعلمون في النظام
}

// 3. Composition: ملكية تامة ودورة حياة ملتصقة (معين مصمت)
public class House {
    private Room _room = new Room(); // تولد مع البيت وتنعدم بهدمه
}

// 4. Inheritance: وراثة (IS-A) سهم مصمت ومثلث مفرغ
public class Dog : Animal {}

// 5. Realization: تنفيذ واجهة (خط متقطع ومثلث مفرغ)
public class Car : IVehicle {}`,
    },
    {
      id: "singleton",
      label: "1. السينغلتون (L2-S019)",
      title: "مخطط فئات نمط السينغلتون (Singleton UML Diagram)",
      ref: "L2-S019",
      desc: "يوضح مخطط Singleton كيف يضمن الصنف وجود نسخة واحدة فقط في الذاكرة عبر حقل ساكن خاص (- instance) ومنشئ خاص (- Singleton) لمنع استخدام new من الخارج، مع توفير دالة عامة ساكنة (+ GetInstance) كنقطة وصول وحيدة.",
      examTip: "فخ امتحاني: لماذا كُتب اسم المنشئ مسبوقاً بإشارة السالب (-)؟ لأن المنشئ يجب أن يكون Private حتى يمنع أي كود خارجي من استدعاء new وإفساد معمارية النسخة المفردة.",
      buildSvg: buildUmlSingletonSvg,
      code: `public class Singleton {
    // 1. حقل ساكن خاص (Private Static Field) - تحته خط في UML
    private static Singleton _instance;

    // 2. منشئ خاص (Private Constructor) - مسبوق بإشارة (-)
    private Singleton() {}

    // 3. دالة ساكنة عامة (Public Static Method) - نقطة الوصول
    public static Singleton GetInstance() {
        if (_instance == null) {
            _instance = new Singleton();
        }
        return _instance;
    }
}`,
    },
    {
      id: "factory",
      label: "2. المصنع (L2-S027)",
      title: "مخطط فئات نمط المصنع (Factory Method Pattern UML)",
      ref: "L2-S027",
      desc: "يفصل نمط المصنع بين كود العميل وعملية إنشاء الكائنات الملموسة. العميل يعتمد فقط على واجهة المنتج المشتركة (INotification) والمصنع (NotificationFactory)، بينما تُنشأ الأصناف الملموسة ديناميكياً بناءً على الطلب.",
      examTip: "السر المعماري: يحقق هذا النمط مبدأ التبعية العكسية (DIP) ومبدأ Open/Closed، حيث يمكن إضافة نوع إشعار رابع (مثل WhatsApp) دون تعديل سطر واحد في كود العميل المستدعي.",
      buildSvg: buildUmlFactorySvg,
      code: `public interface INotification {
    void Send(string message);
}

public class EmailNotification : INotification {
    public void Send(string msg) => Console.WriteLine("Email: " + msg);
}

public class NotificationFactory {
    public static INotification CreateNotification(string type) {
        return type.ToLower() switch {
            "email" => new EmailNotification(),
            "sms"   => new SMSNotification(),
            "push"  => new PushNotification(),
            _ => throw new ArgumentException("نوع غير معروف")
        };
    }
}`,
    },
    {
      id: "adapter",
      label: "3. المهايئ (L3-S018)",
      title: "مخطط فئات نمط المهايئ (Adapter Pattern UML Class Diagram)",
      ref: "L3-S018",
      desc: "يحقق المهايئ علاقتين متزامنتين: ينفذ الواجهة المعيارية المتوقعة (implements IPaymentProcessor) ليكون متوافقاً نوعياً مع العميل، ويحتوي مرجعاً لنظام المزود الخارجي (has-a StripeApi) ليفوض المكالمات المترجمة إليه.",
      examTip: "سؤال الاختبار: ما هو المشارك الذي يغير الواجهة؟ الجواب هو Adapter، حيث يترجم استدعاء ProcessPayment(amount) المتوقع إلى استدعاء ChargeCreditCard(cents) الخاص بالمزود القديم.",
      buildSvg: buildUmlAdapterSvg,
      code: `// Target: الواجهة التي يتوقعها نظامنا
public interface IPaymentProcessor {
    void ProcessPayment(double amount);
}

// Adaptee: صنف المزود الخارجي الجاهز بواجهة مختلفة
public class StripeApi {
    public void ChargeCreditCard(int cents) { /* ... */ }
}

// Adapter: المحول الذي يربط بينهما
public class StripeAdapter : IPaymentProcessor {
    private readonly StripeApi _stripe; // Aggregation: Has-A
    public StripeAdapter(StripeApi stripe) { _stripe = stripe; }
    
    public void ProcessPayment(double amount) {
        int cents = (int)(amount * 100);
        _stripe.ChargeCreditCard(cents); // تفويض وترجمة
    }
}`,
    },
    {
      id: "facade",
      label: "4. الواجهة (L3-S038)",
      title: "مخطط فئات نمط الواجهة (Facade Pattern UML Class Diagram)",
      ref: "L3-S038",
      desc: "يقوم نمط Facade بوضع واجهة بسيطة وعالية المستوى أمام مجموعة معقدة من الأنظمة الفرعية (Subsystems). العميل يتعامل فقط مع دالة واحدة مثل PlaceOrder، والواجهة هي المسؤولة عن تنسيق الاتصال مع أصناف الدفع والمخزون والفواتير.",
      examTip: "الفرق في الامتحان: Facade يبسط الواجهة لنظام كامل دون إضافة سلوكيات جديدة معقدة، بينما Adapter يوفق بين واجهتين غير متوافقتين.",
      buildSvg: buildUmlFacadeSvg,
      code: `public class ShoppingFacade {
    private readonly OrderService _order = new();
    private readonly PaymentService _payment = new();
    private readonly InventoryService _inventory = new();
    private readonly EmailService _email = new();

    public void PlaceOrder(int cartId, double amount) {
        _inventory.CheckStock(cartId);
        _payment.ProcessPayment(amount);
        _order.CreateOrder(cartId);
        _email.SendReceipt("تم الشراء بنجاح");
    }
}`,
    },
    {
      id: "proxy",
      label: "5. الوكيل (L3-S050)",
      title: "مخطط فئات نمط الوكيل (Proxy Pattern UML Class Diagram)",
      ref: "L3-S050",
      desc: "يشترك الوكيل (Proxy) والصنف الحقيقي (RealSubject) في نفس الواجهة (IVideoService). يحتفظ الوكيل بمرجع للكائن الحقيقي ليتحكم في الوصول إليه، سواء لإضافة كاش تخزيني مؤقت (Caching Proxy)، أو فحص الصلاحيات (Security Proxy)، أو التحميل الكسول (Lazy Loading).",
      examTip: "الفرق الجوهري: Proxy لا يغير الواجهة ولا يضيف ميزات للمحتوى، بل يتحكم في توقيت وطريقة الوصول للكائن الأصلي المكلف.",
      buildSvg: buildUmlProxySvg,
      code: `public interface IVideoService {
    Video GetVideo(int id);
}

public class RealVideoService : IVideoService {
    public Video GetVideo(int id) {
        // اتصال مكلف بقاعدة البيانات والسيرفر
        return DownloadFromDatabase(id);
    }
}

public class CachedVideoProxy : IVideoService {
    private readonly RealVideoService _realService = new();
    private readonly Dictionary<int, Video> _cache = new();

    public Video GetVideo(int id) {
        if (!_cache.ContainsKey(id)) {
            _cache[id] = _realService.GetVideo(id); // كاشينج
        }
        return _cache[id];
    }
}`,
    },
    {
      id: "decorator",
      label: "6. المزخرف (L3-S062)",
      title: "مخطط فئات نمط المزخرف (Decorator Pattern UML Class Diagram)",
      ref: "L3-S062",
      desc: "النموذج الكانوني للعلاقة المزدوجة في لغة UML: الصنف المجرد TextDecorator ينفذ الواجهة IText (IS-A للتوافق النوعي)، وفي الوقت نفسه يحتوي مرجعاً لكائن من نفس الواجهة IText (HAS-A للتفويض وإضافة الزخرفة).",
      examTip: "قاعدة الذهب في اختبار د. بيداء: المزخرف يحقق IS-A و HAS-A في آن واحد لنفس الواجهة! هذا ما يمكنه من تغليف كائن مغلّف آخر إلى ما لا نهاية.",
      buildSvg: buildUmlDecoratorSvg,
      code: `public interface IText { string Render(); }

public class PlainText : IText {
    public string Render() => "مرحبا بك";
}

// المزخرف الأساسي: يجمع IS-A و HAS-A
public abstract class TextDecorator : IText {
    protected readonly IText _text; // HAS-A
    public TextDecorator(IText text) { _text = text; }
    public virtual string Render() => _text.Render();
}

public class BoldDecorator : TextDecorator {
    public BoldDecorator(IText text) : base(text) {}
    public override string Render() => "<b>" + base.Render() + "</b>";
}`,
    },
    {
      id: "strategy",
      label: "7. الاستراتيجية (L4-S008)",
      title: "مخطط فئات نمط الاستراتيجية (Strategy Pattern UML Class Diagram)",
      ref: "L4-S008",
      desc: "يفصل نمط Strategy مجموعة من الخوارزميات البديلة (مثل طرق الدفع: بطاقة، باي بال، عملات رقمية) داخل أصناف مستقلة تنفذ واجهة موحدة (IPaymentStrategy)، مما يسمح لصنف السياق (ShoppingCart) بتبديل طريقة الحساب ديناميكياً في وقت التشغيل.",
      examTip: "فخ امتحاني: الخلط بين Strategy و State. نمط Strategy يغير خوارزمية العمل بقرار خارجي من العميل، بينما نمط State يغير سلوك الكائن تلقائياً نتيجة تغير حالته الداخلية.",
      buildSvg: buildUmlStrategySvg,
      code: `public interface IPaymentStrategy {
    void Pay(double amount);
}

public class PayPalPayment : IPaymentStrategy {
    public void Pay(double amount) => Console.WriteLine("مدفوع عبر باي بال: " + amount);
}

public class ShoppingCart {
    private IPaymentStrategy _strategy; // Aggregation
    public void SetStrategy(IPaymentStrategy strategy) => _strategy = strategy;
    public void Checkout(double amount) => _strategy.Pay(amount);
}`,
    },
    {
      id: "observer",
      label: "8. المراقب (L4-S024)",
      title: "مخطط فئات نمط المراقب (Observer Pattern UML Class Diagram)",
      ref: "L4-S024",
      desc: "يوضح مخطط Observer علاقة 1-إلى-متعدد (One-to-Many Dependency). الصنف الحاوي (Subject) يمتلك قائمة من نوع الواجهة (List<IObserver>)، وعند تغير الحالة يستدعي دالة Update() على كل كائن مسجل، دون أن يعرف النوع الفعلي لكل مشترك.",
      examTip: "السر في UML: السهم بين Subject و IObserver يحمل علامة المعين المفرغ (◇) مع تعدد (0..*) للدلالة على أن الناشر يحتفظ بمجموعة مراقبين في قائمة ديناميكية.",
      buildSvg: buildUmlObserverSvg,
      code: `public interface IObserver {
    void Update(string status);
}

public class CoffeeShop {
    // Subject يحتفظ بقائمة من المشتركين
    private readonly List<IObserver> _observers = new();
    
    public void Attach(IObserver observer) => _observers.Add(observer);
    public void Detach(IObserver observer) => _observers.Remove(observer);
    
    public void NotifyObservers(string status) {
        foreach (var obs in _observers) {
            obs.Update(status); // إخطار الجميع
        }
    }
}`,
    },
  ];

  /* ───────────────────────────────────────────────────────────
     كائن النموذج الثاني: استوديو مخططات UML المعمارية
     ─────────────────────────────────────────────────────────── */
  const CURRICULUM_UML_MODEL = {
    id: "curriculum-uml-studio",
    module: "L2-L4",
    module_title: "الوحدات 2-4 · مخططات UML",
    ref: "L3-S010",
    title_ar: "أطلس مخططات UML المعمارية لأنماط المقرر وعلاقاتها المشروحة",
    title_en: "Curriculum UML Class Diagrams & OOP Architecture Atlas",
    desc_ar:
      "استوديو تفاعلي شامل يجمع كافة مخططات فئات UML المعتمدة في سلايدات د. بيداء لعلع لأنماط التصميم والعلاقات الأكثر شيوعاً (The Most Common UML Relationships)، مع شرح مرئي مفصل لكل سهم وعلاقة (Inheritance, Implementation, Aggregation, Composition, Dependency)، ودلالة علامات الرؤية (+ للعام، - للخاص، # للمحمي)، والتسطير للدوال والحقول الساكنة (Static)، مع المقارنة المباشرة بالسلايد الرسمي وكود C#.",
    badge: "مخططات المنهج · UML Studio",
    tip: "وقفة امتحانية مؤكدة: د. بيداء لعلع تركز بشدة في الاختبارات النهائية على دلالات الأسهم في UML: السهم ذو الخط المتقطع برأس مثلث مفرغ يعني Realization (تطبيق واجهة)، والمعين المفرغ يعني Aggregation (امتلاك ضعيف Has-A)، والمعين المصمت يعني Composition (امتلاك قوي ودورة حياة ملتصقة)، والتسطير يعني عضو ساكن (Static).",

    render: function (card, utils) {
      const { el, clear, svgNode, iconSvg, slideRefAttrs, ICONS } = utils;

      let activeUmlTab = "relations";

      const tabsBar = el("div", { class: "int-tabs-bar" });
      const stageWrap = el("div", { class: "int-stage-wrap" });

      function renderCurrentUml() {
        clear(stageWrap);
        const data = UML_TABS_DATA.find((t) => t.id === activeUmlTab) || UML_TABS_DATA[0];

        const pane = el("div", { class: "int-pane" });

        // 1. Description & Exam Tip
        pane.appendChild(
          el(
            "div",
            { class: "int-tip" },
            el("span", { class: "wt" }, "الشرح المعماري للمخطط:"),
            data.desc,
          ),
        );

        if (data.examTip) {
          pane.appendChild(
            el(
              "div",
              {
                class: "int-tip",
                style: "border-color: color-mix(in srgb, var(--warn) 35%, transparent); background: color-mix(in srgb, var(--warn) 8%, var(--sf));",
              },
              el("span", { class: "wt", style: "color: var(--warn);" }, "وقفة امتحانية خاصة بالمخطط:"),
              data.examTip,
            ),
          );
        }

        // 2. SVG UML Diagram
        const svgBox = el("div", { class: "int-svg-wrap" });
        svgBox.innerHTML = data.buildSvg();
        pane.appendChild(svgBox);

        // 3. C# Code Implementation Block
        pane.appendChild(
          el(
            "div",
            { class: "int-code-block" },
            `// كود C# المعتمد المقابل لمخطط UML أعلاه:\n${data.code}`,
          ),
        );

        // 4. Quick Slide Jump Button
        if (data.ref) {
          pane.appendChild(
            el(
              "div",
              { style: "margin-top: 14px;" },
              el(
                "a",
                { class: "int-slide-ref-btn", ...slideRefAttrs(data.ref) },
                iconSvg("slides"),
                `انتقل مباشرة إلى سلايد الشرح في المنهج (${data.ref})`,
              ),
            ),
          );
        }

        stageWrap.appendChild(pane);
      }

      // Build Navigation Tabs
      UML_TABS_DATA.forEach((t) => {
        const btn = el(
          "button",
          {
            class: "int-tab-btn" + (activeUmlTab === t.id ? " active" : ""),
            onclick: () => {
              activeUmlTab = t.id;
              tabsBar.querySelectorAll(".int-tab-btn").forEach((b) => b.classList.remove("active"));
              btn.classList.add("active");
              renderCurrentUml();
            },
          },
          t.label,
        );
        tabsBar.appendChild(btn);
      });

      card.appendChild(tabsBar);
      card.appendChild(stageWrap);
      renderCurrentUml();
    },
  };

  /* ═══════════════════════════════════════════════════════════
     القسم الرابع: محراب العمارة النظيفة والحلقات الأربع وتدفق الطلبات
     الوحدة L5: Clean Architecture, Enterprise Layers & Dependency Rule
     المدرس: د. بيداء لعلع · معيار 100% SVG متجهي · صفر إيموجيات
     ═══════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════
   CLEAN_ARCH_STUDIO_MODEL — نموذج العمارة النظيفة والحلقات الأربع
   مقرر البرمجة المتقدمة (AP) — د. بيداء لعلع
   الوحدة 5: العمارة النظيفة، التزامن، والأنظمة الحديثة
   معيار 100% SVG متجهي عالي الدقة · صفر إيموجيات (Zero Emojis Standard)
   ═══════════════════════════════════════════════════════════ */

  /* ───────────────────────────────────────────────────────────
     1. دالة بناء مخطط الحلقات الأربع وقاعدة التبعية (Tab 1 SVG)
     ─────────────────────────────────────────────────────────── */
  function buildCleanArchCirclesSvg(activeLayerId) {
    const svgW = 900;
    const svgH = 520;
    const cx = 290;
    const cy = 260;

    const rFrameworks = 235;
    const rAdapters = 175;
    const rUseCases = 115;
    const rEntities = 60;

    const isAll = !activeLayerId || activeLayerId === "all";
    const isEnt = activeLayerId === "entities";
    const isUc = activeLayerId === "usecases";
    const isAdap = activeLayerId === "adapters";
    const isFw = activeLayerId === "frameworks";

    const opFw = isAll || isFw ? 1 : 0.35;
    const opAdap = isAll || isAdap ? 1 : 0.35;
    const opUc = isAll || isUc ? 1 : 0.35;
    const opEnt = isAll || isEnt ? 1 : 0.35;

    const swFw = isFw ? 3.5 : 2;
    const swAdap = isAdap ? 3.5 : 2;
    const swUc = isUc ? 3.5 : 2;
    const swEnt = isEnt ? 4 : 2.5;

    const layerInfo = {
      all: {
        badge: "دستور العمارة النظيفة",
        badgeCol: "var(--acc-b)",
        titleAr: "الحلقات الأربع متحدة المركز وقاعدة التبعية",
        titleEn: "Clean Architecture 4 Concentric Circles",
        project: "BankingSystem.sln (Multi-Project Solution)",
        depRule: "التبعيات تتجه حصراً إلى الداخل (Inward Dependencies Only)",
        desc: "هندسة برمجية تفصل منطق الأعمال النقي عن التفاصيل التقنية. الكود الأكثر استقراراً وأهمية في المركز، والتقنيات القابلة للاستبدال في الأطراف.",
        items: [
          "المركز: الكيانات (Entities) — قواعد أعمال المؤسسة العامة",
          "الحلقة 2: حالات الاستخدام (Use Cases) — تنسيق تدفق العمليات",
          "الحلقة 3: محولات الواجهات (Adapters) — ترجمة البيانات بين الطبقات",
          "الحلقة 4: الأطر الخارجية (Frameworks) — أدوات الويب وقواعد البيانات"
        ],
        examTip: "سؤال مؤكد لدكتورة بيداء: 'ارسم دوائر العمارة النظيفة، وسمّ كل طبقة، مع تحديد موضع كل من: Entity, Use Case, Controller, DbContext، ومسار سهم التبعية'."
      },
      entities: {
        badge: "الحلقة 1 · قلب المنظومة",
        badgeCol: "#f59e0b",
        titleAr: "الكيانات وقواعد أعمال المؤسسة",
        titleEn: "Enterprise Business Rules · Entities",
        project: "Banking.Domain.csproj",
        depRule: "صفر تبعيات خارجية (Zero External Dependencies)",
        desc: "تغلف مفاهيم الأعمال الجوهرية (Account, Customer, Money). تحتوي على النموذج الغني (Rich Domain Model) وتفرض القيود وحماية الحالة دون أي اعتماد على أطر خارجية.",
        items: [
          "الكيانات (Entities) المزودة بهوية وسلوك حقيقي",
          "كائنات القيمة (Value Objects) غير القابلة للتعديل",
          "قواعد وتحققات الأعمال (Business Invariants)",
          "استثناءات وأحداث النطاق (Domain Exceptions & Events)"
        ],
        examTip: "تحذر د. بيداء: 'مشروع Domain لا يعرف شيئاً إطلاقاً عن SQL أو Entity Framework Core أو Web API. كتابة using Microsoft.EntityFrameworkCore هنا خطأ معماري فادح!'"
      },
      usecases: {
        badge: "الحلقة 2 · منسق العمليات",
        badgeCol: "#ef4444",
        titleAr: "حالات الاستخدام ومنطق التطبيق",
        titleEn: "Application Business Rules · Use Cases",
        project: "Banking.Application.csproj",
        depRule: "تعتمد فقط وحصراً على: Banking.Domain",
        desc: "تنسق تدفق البيانات من وإلى الكيانات لتنفيذ سيناريوهات الاستخدام للعميل. تصيغ عقود وواجهات المستودعات (Interfaces) دون معرفة تفاصيل تخزينها.",
        items: [
          "خدمات حالات الاستخدام (TransferMoneyUseCase, AccountService)",
          "عقود وواجهات المستودعات (IAccountRepository, ICustomerRepository)",
          "كائنات نقل البيانات المجردة (Request & Response DTOs)",
          "واجهات الخدمات الخارجية (IEmailSender, ISmsNotification)"
        ],
        examTip: "سؤال علل الشهير: 'لماذا تُعرّف واجهة IAccountRepository في Application وليس في Infrastructure؟' الجواب: لعكس اتجاه التبعية (DIP) لتصبح البنية التحتية خادمة للتطبيق."
      },
      adapters: {
        badge: "الحلقة 3 · مترجم البيانات",
        badgeCol: "#10b981",
        titleAr: "محولات الواجهات والتحويل",
        titleEn: "Interface Adapters · Controllers & Repos",
        project: "Banking.API.Controllers / Banking.Infrastructure.Data",
        depRule: "تعتمد على: Banking.Application و Banking.Domain",
        desc: "تحول البيانات من الصيغة الأكثر ملاءمة لحالات الاستخدام إلى الصيغة الأنسب للأنظمة الخارجية كواجهات الويب أو خوادم قواعد البيانات.",
        items: [
          "المتحكمات (Web API Controllers) المحولة لطلبات HTTP",
          "تطبيقات المستودعات (SqlAccountRepository) المحولة إلى استعلامات",
          "العارضات ومنسقات الاستجابة (Presenters & ViewModels)",
          "محولات بوابات الدفع والرسائل الخارجية (Payment Gateways)"
        ],
        examTip: "تؤكد د. بيداء أن المتحكم (Controller) لا يحتوي على أي منطق أعمال أو شروط رصيد، بل ينحصر دوره في استقبال DTO واستدعاء الخدمة وإرجاع النتيجة."
      },
      frameworks: {
        badge: "الحلقة 4 · المحيط التقني",
        badgeCol: "#0ea5e9",
        titleAr: "الأطر والأنظمة والبرمجيات الخارجية",
        titleEn: "Frameworks & Drivers · Infrastructure & Web",
        project: "Banking.Infrastructure.csproj / Banking.API.csproj",
        depRule: "تعتمد على الحلقات الداخلية لتحقيق التكامل والربط",
        desc: "قشرة النظام الخارجية التي تحتوي على كافة التفاصيل التنفيذية والأدوات التقنية. هذه الحلقة هي الأسهل استبدالاً دون التأثير على أي سطر في منطق الأعمال الداخلي.",
        items: [
          "إطار عمل الويب: ASP.NET Core Kestrel & Routing",
          "محرك وقواعد البيانات: Microsoft SQL Server, PostgreSQL",
          "مكتبات تعيين الكائنات: Entity Framework Core DbContext",
          "التوثيق والخدمات السحابية: Swagger, Redis, Azure/AWS"
        ],
        examTip: "قاعدة د. بيداء الذهبية: 'قواعد البيانات وأطر الويب مجرد تفاصيل تقنية (Technical Details) ملحقة، وليست مركز النظام البرمجي'."
      }
    };

    const cur = layerInfo[activeLayerId] || layerInfo.all;

    return `
      <svg viewBox="0 0 ${svgW} ${svgH}" class="int-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" dir="ltr" direction="ltr">
        <defs>
          <filter id="int-glow-sky" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="rgba(14, 165, 233, 0.6)"/>
          </filter>
          <filter id="int-glow-green" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="rgba(16, 185, 129, 0.6)"/>
          </filter>
          <filter id="int-glow-red" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="rgba(239, 68, 68, 0.6)"/>
          </filter>
          <filter id="int-glow-amber" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="7" flood-color="rgba(245, 158, 11, 0.75)"/>
          </filter>
          <marker id="int-arrow-in" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/>
          </marker>
          <style>
            text { stroke: none !important; font-family: var(--fa); -webkit-font-smoothing: antialiased; }
            .mono-txt { font-family: var(--fm); }
            .int-anim-flow { animation: intFlowDash 1.2s linear infinite; }
            @keyframes intFlowDash { to { stroke-dashoffset: -20; } }
            .int-pulse-core { animation: intCorePulse 2.4s ease-in-out infinite alternate; transform-origin: ${cx}px ${cy}px; }
            @keyframes intCorePulse { 0% { transform: scale(0.98); } 100% { transform: scale(1.02); } }
          </style>
        </defs>

        <!-- LEFT HALF: CONCENTRIC CIRCLES -->
        <g stroke="var(--ln)" stroke-width="0.8" opacity="0.25">
          <line x1="${cx - rFrameworks - 15}" y1="${cy}" x2="${cx + rFrameworks + 15}" y2="${cy}" stroke-dasharray="3 5"/>
          <line x1="${cx}" y1="${cy - rFrameworks - 15}" x2="${cx}" y2="${cy + rFrameworks + 15}" stroke-dasharray="3 5"/>
        </g>

        <!-- LAYER 4: FRAMEWORKS & DRIVERS (BLUE) -->
        <g id="ring-frameworks" opacity="${opFw}" style="cursor: pointer; transition: all 0.3s ease;">
          <circle cx="${cx}" cy="${cy}" r="${rFrameworks}"
                  fill="color-mix(in srgb, var(--acc) 9%, var(--sf))"
                  stroke="#0284c7" stroke-width="${swFw}" ${isFw ? 'filter="url(#int-glow-sky)"' : ""}/>
          <text x="${cx}" y="${cy - rFrameworks + 20}" text-anchor="middle" fill="#38bdf8"
                font-size="11" font-weight="800">الحلقة 4: الأطر والمحركات الخارجية (Frameworks &amp; Drivers)</text>
          <text x="${cx}" y="${cy + rFrameworks - 12}" text-anchor="middle" fill="#0284c7"
                font-size="9.5" font-weight="700" class="mono-txt">ASP.NET Core Web API · SQL Server · EF Core · Swagger · Redis</text>
        </g>

        <!-- LAYER 3: INTERFACE ADAPTERS (GREEN) -->
        <g id="ring-adapters" opacity="${opAdap}" style="cursor: pointer; transition: all 0.3s ease;">
          <circle cx="${cx}" cy="${cy}" r="${rAdapters}"
                  fill="color-mix(in srgb, var(--ok) 11%, var(--sf2))"
                  stroke="#059669" stroke-width="${swAdap}" ${isAdap ? 'filter="url(#int-glow-green)"' : ""}/>
          <text x="${cx}" y="${cy - rAdapters + 18}" text-anchor="middle" fill="#34d399"
                font-size="10.5" font-weight="800">الحلقة 3: محولات الواجهات (Interface Adapters)</text>
          <text x="${cx}" y="${cy + rAdapters - 10}" text-anchor="middle" fill="#059669"
                font-size="9" font-weight="700" class="mono-txt">Controllers · Presenters · Gateways · SqlAccountRepository</text>
        </g>

        <!-- LAYER 2: USE CASES / APPLICATION (RED/CORAL) -->
        <g id="ring-usecases" opacity="${opUc}" style="cursor: pointer; transition: all 0.3s ease;">
          <circle cx="${cx}" cy="${cy}" r="${rUseCases}"
                  fill="color-mix(in srgb, var(--err) 12%, var(--sf))"
                  stroke="#dc2626" stroke-width="${swUc}" ${isUc ? 'filter="url(#int-glow-red)"' : ""}/>
          <text x="${cx}" y="${cy - rUseCases + 17}" text-anchor="middle" fill="#f87171"
                font-size="10" font-weight="800">الحلقة 2: حالات الاستخدام (Use Cases)</text>
          <text x="${cx}" y="${cy + rUseCases - 8}" text-anchor="middle" fill="#f87171"
                font-size="8.5" font-weight="700" class="mono-txt">Application Services · DTOs · IRepository</text>
        </g>

        <!-- LAYER 1: DOMAIN / ENTITIES (AMBER CORE) -->
        <g id="ring-entities" opacity="${opEnt}" class="int-pulse-core" style="cursor: pointer; transition: all 0.3s ease;">
          <circle cx="${cx}" cy="${cy}" r="${rEntities}"
                  fill="color-mix(in srgb, var(--warn) 22%, var(--sf2))"
                  stroke="#d97706" stroke-width="${swEnt}" ${isEnt || isAll ? 'filter="url(#int-glow-amber)"' : ""}/>
          <circle cx="${cx}" cy="${cy}" r="14" fill="#f59e0b" opacity="0.3" stroke="none"/>
          <text x="${cx}" y="${cy - 8}" text-anchor="middle" fill="#fbbf24"
                font-size="12" font-weight="800">الكيانات</text>
          <text x="${cx}" y="${cy + 8}" text-anchor="middle" fill="#fef3c7"
                font-size="9" font-weight="800" class="mono-txt">Entities</text>
          <text x="${cx}" y="${cy + 22}" text-anchor="middle" fill="#f59e0b"
                font-size="8" font-weight="700">قواعد الأعمال</text>
        </g>

        <!-- INWARD DEPENDENCY ARROWS -->
        <g id="dep-arrows" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" opacity="0.85">
          <line x1="${cx}" y1="${cy - rFrameworks + 30}" x2="${cx}" y2="${cy - rEntities - 8}"
                stroke-dasharray="5 3" class="int-anim-flow" marker-end="url(#int-arrow-in)"/>
          <line x1="${cx}" y1="${cy + rFrameworks - 25}" x2="${cx}" y2="${cy + rEntities + 8}"
                stroke-dasharray="5 3" class="int-anim-flow" marker-end="url(#int-arrow-in)"/>
          <line x1="${cx - rFrameworks + 15}" y1="${cy}" x2="${cx - rEntities - 8}" y2="${cy}"
                stroke-dasharray="5 3" class="int-anim-flow" marker-end="url(#int-arrow-in)"/>
          <line x1="${cx + rFrameworks - 15}" y1="${cy}" x2="${cx + rEntities + 8}" y2="${cy}"
                stroke-dasharray="5 3" class="int-anim-flow" marker-end="url(#int-arrow-in)"/>

          <line x1="${cx - 155}" y1="${cy - 155}" x2="${cx - 55}" y2="${cy - 55}"
                stroke-dasharray="4 3" class="int-anim-flow" marker-end="url(#int-arrow-in)" stroke="#f59e0b"/>
          <line x1="${cx + 155}" y1="${cy - 155}" x2="${cx + 55}" y2="${cy - 55}"
                stroke-dasharray="4 3" class="int-anim-flow" marker-end="url(#int-arrow-in)" stroke="#f59e0b"/>
          <line x1="${cx - 155}" y1="${cy + 155}" x2="${cx - 55}" y2="${cy + 55}"
                stroke-dasharray="4 3" class="int-anim-flow" marker-end="url(#int-arrow-in)" stroke="#f59e0b"/>
          <line x1="${cx + 155}" y1="${cy + 155}" x2="${cx + 55}" y2="${cy + 55}"
                stroke-dasharray="4 3" class="int-anim-flow" marker-end="url(#int-arrow-in)" stroke="#f59e0b"/>
        </g>

        <!-- Top Rule Banner -->
        <rect x="35" y="10" width="510" height="26" rx="6" fill="var(--sf)" stroke="var(--ln)" stroke-width="1"/>
        <text x="290" y="27" text-anchor="middle" fill="var(--acc-b)" font-size="10.5" font-weight="800">
          قاعدة التبعية الذهبية (The Dependency Rule): كود المصدري يشير حصراً إلى الداخل نحو النطاق
        </text>

        <!-- RIGHT HALF: ARCHITECTURAL INSPECTOR PANEL -->
        <g id="inspector-card" transform="translate(565, 12)">
          <rect x="0" y="0" width="320" height="496" rx="12"
                fill="var(--sf2)" stroke="var(--ln)" stroke-width="1.4"/>

          <rect x="0" y="0" width="320" height="44" rx="12"
                fill="color-mix(in srgb, ${cur.badgeCol} 15%, var(--sf))"
                stroke="color-mix(in srgb, ${cur.badgeCol} 40%, var(--ln))" stroke-width="1"/>
          <rect x="12" y="11" width="6" height="22" rx="3" fill="${cur.badgeCol}"/>
          <text x="26" y="27" fill="${cur.badgeCol}" font-size="11.5" font-weight="800">${cur.badge}</text>

          <text x="16" y="70" fill="var(--ink)" font-size="13" font-weight="800">${cur.titleAr}</text>
          <text x="16" y="88" fill="var(--ink-m)" font-size="10" font-weight="600" class="mono-txt">${cur.titleEn}</text>

          <rect x="16" y="102" width="288" height="26" rx="5"
                fill="var(--sf)" stroke="var(--ln)" stroke-width="1"/>
          <text x="26" y="119" fill="var(--acc-b)" font-size="9.5" font-weight="700" class="mono-txt">
            .NET Project: ${cur.project}
          </text>

          <rect x="16" y="136" width="288" height="42" rx="6"
                fill="color-mix(in srgb, var(--ok) 10%, var(--sf))"
                stroke="var(--ok)" stroke-width="1.2"/>
          <text x="26" y="153" fill="var(--ok)" font-size="9.5" font-weight="800">اتجاه التبعية المسموح برمجياً:</text>
          <text x="26" y="169" fill="var(--ink)" font-size="9" font-weight="700">${cur.depRule}</text>

          <rect x="16" y="186" width="288" height="66" rx="6"
                fill="var(--sf)" stroke="var(--ln-s)" stroke-width="1"/>
          <text x="26" y="204" fill="var(--ink)" font-size="9" font-weight="700">المسؤولية المعمارية للطبقة:</text>
          <foreignObject x="26" y="210" width="268" height="40">
            <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 8.5px; line-height: 1.5; color: var(--ink); font-family: var(--fa); font-weight: 600; text-align: right; direction: rtl;">
              ${cur.desc}
            </div>
          </foreignObject>

          <text x="16" y="272" fill="var(--acc-b)" font-size="10" font-weight="800">أبرز المكونات والكائنات داخل هذه الطبقة:</text>
          ${cur.items.map((it, idx) => `
            <g transform="translate(16, ${284 + idx * 26})">
              <rect x="0" y="0" width="288" height="22" rx="4" fill="var(--sf)" stroke="var(--ln-s)" stroke-width="0.8"/>
              <circle cx="10" cy="11" r="3" fill="${cur.badgeCol}"/>
              <foreignObject x="18" y="2" width="262" height="18">
                <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 8px; color: var(--ink); font-family: var(--fa); font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; direction: rtl; text-align: right;">
                  ${it}
                </div>
              </foreignObject>
            </g>
          `).join("")}

          <g transform="translate(16, 396)">
            <rect x="0" y="0" width="288" height="88" rx="7"
                  fill="color-mix(in srgb, var(--warn) 10%, var(--sf))"
                  stroke="var(--warn)" stroke-width="1.2"/>
            <text x="12" y="18" fill="var(--warn)" font-size="9.5" font-weight="800">وقفة امتحانية مؤكدة (د. بيداء لعلع):</text>
            <foreignObject x="12" y="24" width="264" height="60">
              <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 8.2px; line-height: 1.55; color: var(--ink); font-family: var(--fa); font-weight: 600; text-align: right; direction: rtl;">
                ${cur.examTip}
              </div>
            </foreignObject>
          </g>
        </g>
      </svg>
    `;
  }

  /* ───────────────────────────────────────────────────────────
     2. دالة بناء محاكي مسار الطلب خطوة بخطوة (Tab 2 SVG)
     ─────────────────────────────────────────────────────────── */
  function buildRequestFlowSvg(activeStepIndex) {
    const svgW = 900;
    const svgH = 390;
    const step = activeStepIndex || 0;

    const nodes = [
      {
        id: "client",
        x: 20,
        y: 130,
        w: 130,
        h: 145,
        title: "العميل / المتصفح",
        sub: "HTTP Postman / Web",
        badge: "External Client",
        badgeCol: "#64748b",
        desc: "POST /api/accounts/transfer",
        layer: "محيط خارجي"
      },
      {
        id: "controller",
        x: 195,
        y: 130,
        w: 145,
        h: 145,
        title: "المتحكم",
        sub: "AccountsController",
        badge: "Presentation · API",
        badgeCol: "#0ea5e9",
        desc: "استقبال DTO وفحص الصحة",
        layer: "الحلقة 4 · Web API"
      },
      {
        id: "service",
        x: 385,
        y: 130,
        w: 150,
        h: 145,
        title: "خدمة التطبيق",
        sub: "AccountService",
        badge: "Application · UseCase",
        badgeCol: "#ef4444",
        desc: "تنسيق التحويل وطلب الكيان",
        layer: "الحلقة 2 · Use Cases"
      },
      {
        id: "entity",
        x: 580,
        y: 130,
        w: 140,
        h: 145,
        title: "كيان الحساب",
        sub: "Account (Domain)",
        badge: "Domain · Entity Core",
        badgeCol: "#f59e0b",
        desc: "سحب وإيداع وقواعد الرصيد",
        layer: "الحلقة 1 · النواة"
      },
      {
        id: "repo",
        x: 760,
        y: 130,
        w: 120,
        h: 145,
        title: "المستودع وقاعدة البيانات",
        sub: "SqlRepo & SQL Server",
        badge: "Infrastructure · DB",
        badgeCol: "#10b981",
        desc: "حفظ المعاملة عبر EF Core",
        layer: "الحلقة 4 · Data Access"
      }
    ];

    const wire01 = step === 0;
    const wire12 = step === 1;
    const wire23 = step === 2;
    const wire24 = step === 3;

    const isNode0Active = step === 0;
    const isNode1Active = step === 0;
    const isNode2Active = step === 1;
    const isNode3Active = step === 2;
    const isNode4Active = step === 3;

    const stepHeaders = [
      {
        title: "الخطوة 1: استلام الطلب والتحقق الشكلي (Controller Layer)",
        boundary: "العبور من المتصفح الخارجي إلى المتحكم Web API Controller",
        proj: "Banking.API",
        col: "#0ea5e9"
      },
      {
        title: "الخطوة 2: تنسيق المعالجة وحالات الاستخدام (Application Service)",
        boundary: "العبور إلى داخل طبقة التطبيق عبر واجهة IAccountService",
        proj: "Banking.Application",
        col: "#ef4444"
      },
      {
        title: "الخطوة 3: تنفيذ وحماية قواعد الأعمال في النواة (Rich Domain Entity)",
        boundary: "الوصول إلى قلب النظام النابض: كيان الحساب Account.cs",
        proj: "Banking.Domain",
        col: "#f59e0b"
      },
      {
        title: "الخطوة 4: التخزين عبر نمط المستودع وحقن التبعيات (Infrastructure & SQL)",
        boundary: "تطبيق التجريد وحفظ المعاملة في قاعدة بيانات SQL Server",
        proj: "Banking.Infrastructure",
        col: "#10b981"
      }
    ];

    const curHead = stepHeaders[step] || stepHeaders[0];

    return `
      <svg viewBox="0 0 ${svgW} ${svgH}" class="int-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" dir="ltr" direction="ltr">
        <defs>
          <filter id="int-pulse-step" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="rgba(245, 158, 11, 0.7)"/>
          </filter>
          <filter id="int-glow-wire" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="rgba(16, 185, 129, 0.7)"/>
          </filter>
          <style>
            text { stroke: none !important; font-family: var(--fa); -webkit-font-smoothing: antialiased; }
            .mono-txt { font-family: var(--fm); }
            .int-pipe-pulse { animation: intPipeDash 0.9s linear infinite; }
            @keyframes intPipeDash { to { stroke-dashoffset: -24; } }
            .int-node-active { animation: intActiveBounce 1.8s ease-in-out infinite alternate; }
            @keyframes intActiveBounce { 0% { transform: translateY(0); } 100% { transform: translateY(-3px); } }
          </style>
        </defs>

        <!-- TOP STATUS BANNER -->
        <g id="step-banner" transform="translate(20, 15)">
          <rect x="0" y="0" width="860" height="70" rx="10"
                fill="var(--sf2)" stroke="${curHead.col}" stroke-width="1.6"/>
          <rect x="15" y="16" width="6" height="38" rx="3" fill="${curHead.col}"/>
          <text x="32" y="36" fill="${curHead.col}" font-size="13" font-weight="800">${curHead.title}</text>
          <text x="32" y="58" fill="var(--ink)" font-size="10" font-weight="700">
            الحدود المعمارية: ${curHead.boundary} · المشروع: <tspan class="mono-txt" fill="var(--acc-b)">${curHead.proj}</tspan>
          </text>
          <rect x="740" y="18" width="105" height="34" rx="6" fill="var(--sf)" stroke="var(--ln)" stroke-width="1"/>
          <text x="792" y="39" text-anchor="middle" fill="${curHead.col}" font-size="11" font-weight="800" class="mono-txt">
            STEP ${step + 1} / 4
          </text>
        </g>

        <!-- CONNECTING WIRES & PIPES -->
        <!-- Wire 0 -> 1: Client -> Controller -->
        <path d="M 150 200 L 195 200" fill="none"
              stroke="${wire01 ? "#38bdf8" : "var(--ln)"}"
              stroke-width="${wire01 ? "4" : "2"}"
              stroke-dasharray="${wire01 ? "6 4" : "none"}"
              class="${wire01 ? "int-pipe-pulse" : ""}"/>
        ${wire01 ? `<circle cx="172" cy="200" r="5" fill="#38bdf8" stroke="none"/>` : ""}

        <!-- Wire 1 -> 2: Controller -> Service -->
        <path d="M 340 200 L 385 200" fill="none"
              stroke="${wire12 ? "#ef4444" : "var(--ln)"}"
              stroke-width="${wire12 ? "4" : "2"}"
              stroke-dasharray="${wire12 ? "6 4" : "none"}"
              class="${wire12 ? "int-pipe-pulse" : ""}"/>
        ${wire12 ? `<circle cx="362" cy="200" r="5" fill="#ef4444" stroke="none"/>` : ""}

        <!-- Wire 2 -> 3: Service -> Entity -->
        <path d="M 535 200 L 580 200" fill="none"
              stroke="${wire23 ? "#f59e0b" : "var(--ln)"}"
              stroke-width="${wire23 ? "4" : "2"}"
              stroke-dasharray="${wire23 ? "6 4" : "none"}"
              class="${wire23 ? "int-pipe-pulse" : ""}"/>
        ${wire23 ? `<circle cx="557" cy="200" r="5" fill="#f59e0b" stroke="none"/>` : ""}

        <!-- Wire 2 -> 4: Service to Repository/SQL -->
        <path d="M 460 275 L 460 305 L 820 305 L 820 275" fill="none"
              stroke="${wire24 ? "#10b981" : "var(--ln)"}"
              stroke-width="${wire24 ? "4" : "2"}"
              stroke-dasharray="${wire24 ? "6 4" : "none"}"
              class="${wire24 ? "int-pipe-pulse" : ""}"/>
        <text x="640" y="320" text-anchor="middle"
              fill="${wire24 ? "#10b981" : "var(--ink-m)"}" font-size="9" font-weight="700">
          استدعاء المستودع: await _repo.SaveAsync(account) ──► التخزين في SQL Server
        </text>

        <!-- 5 PIPELINE NODES -->
        <!-- Node 0: Client -->
        <g id="node-client" class="${isNode0Active ? "int-node-active" : ""}">
          <rect x="${nodes[0].x}" y="${nodes[0].y}" width="${nodes[0].w}" height="${nodes[0].h}" rx="10"
                fill="var(--sf2)" stroke="${isNode0Active ? "#38bdf8" : "var(--ln)"}"
                stroke-width="${isNode0Active ? "2.6" : "1.2"}"/>
          <rect x="${nodes[0].x + 10}" y="${nodes[0].y + 10}" width="${nodes[0].w - 20}" height="20" rx="4"
                fill="var(--sf)" stroke="var(--ln-s)" stroke-width="1"/>
          <text x="${nodes[0].x + nodes[0].w / 2}" y="${nodes[0].y + 24}" text-anchor="middle"
                fill="var(--ink-m)" font-size="8.5" font-weight="700">${nodes[0].badge}</text>
          <text x="${nodes[0].x + nodes[0].w / 2}" y="${nodes[0].y + 55}" text-anchor="middle"
                fill="var(--ink)" font-size="11.5" font-weight="800">${nodes[0].title}</text>
          <text x="${nodes[0].x + nodes[0].w / 2}" y="${nodes[0].y + 72}" text-anchor="middle"
                fill="var(--acc-b)" font-size="9" font-weight="600" class="mono-txt">${nodes[0].sub}</text>
          <line x1="${nodes[0].x + 15}" y1="${nodes[0].y + 85}" x2="${nodes[0].x + nodes[0].w - 15}" y2="${nodes[0].y + 85}" stroke="var(--ln-s)" stroke-width="1"/>
          <text x="${nodes[0].x + nodes[0].w / 2}" y="${nodes[0].y + 104}" text-anchor="middle"
                fill="var(--ink)" font-size="8.5" font-weight="700">${nodes[0].desc}</text>
          <text x="${nodes[0].x + nodes[0].w / 2}" y="${nodes[0].y + 125}" text-anchor="middle"
                fill="#38bdf8" font-size="8" font-weight="800" class="mono-txt">{ fromId: 1, toId: 2 }</text>
        </g>

        <!-- Node 1: Controller -->
        <g id="node-controller" class="${isNode1Active ? "int-node-active" : ""}">
          <rect x="${nodes[1].x}" y="${nodes[1].y}" width="${nodes[1].w}" height="${nodes[1].h}" rx="10"
                fill="color-mix(in srgb, var(--acc) ${isNode1Active ? "14%" : "4%"}, var(--sf2))"
                stroke="${isNode1Active ? "#0ea5e9" : "var(--ln)"}"
                stroke-width="${isNode1Active ? "2.8" : "1.2"}"
                ${isNode1Active ? 'filter="url(#int-glow-wire)"' : ""}/>
          <rect x="${nodes[1].x + 10}" y="${nodes[1].y + 10}" width="${nodes[1].w - 20}" height="20" rx="4"
                fill="var(--sf)" stroke="var(--ln-s)" stroke-width="1"/>
          <text x="${nodes[1].x + nodes[1].w / 2}" y="${nodes[1].y + 24}" text-anchor="middle"
                fill="#0ea5e9" font-size="8.5" font-weight="800">${nodes[1].badge}</text>
          <text x="${nodes[1].x + nodes[1].w / 2}" y="${nodes[1].y + 55}" text-anchor="middle"
                fill="var(--ink)" font-size="11.5" font-weight="800">${nodes[1].title}</text>
          <text x="${nodes[1].x + nodes[1].w / 2}" y="${nodes[1].y + 72}" text-anchor="middle"
                fill="var(--acc-b)" font-size="9" font-weight="600" class="mono-txt">${nodes[1].sub}</text>
          <line x1="${nodes[1].x + 15}" y1="${nodes[1].y + 85}" x2="${nodes[1].x + nodes[1].w - 15}" y2="${nodes[1].y + 85}" stroke="var(--ln-s)" stroke-width="1"/>
          <text x="${nodes[1].x + nodes[1].w / 2}" y="${nodes[1].y + 104}" text-anchor="middle"
                fill="var(--ink)" font-size="8.5" font-weight="700">${nodes[1].desc}</text>
          <text x="${nodes[1].x + nodes[1].w / 2}" y="${nodes[1].y + 125}" text-anchor="middle"
                fill="#0ea5e9" font-size="8.5" font-weight="800">تفويض التنفيذ للخدمة</text>
        </g>

        <!-- Node 2: AccountService (Use Case) -->
        <g id="node-service" class="${isNode2Active ? "int-node-active" : ""}">
          <rect x="${nodes[2].x}" y="${nodes[2].y}" width="${nodes[2].w}" height="${nodes[2].h}" rx="10"
                fill="color-mix(in srgb, var(--err) ${isNode2Active ? "14%" : "4%"}, var(--sf2))"
                stroke="${isNode2Active ? "#ef4444" : "var(--ln)"}"
                stroke-width="${isNode2Active ? "2.8" : "1.2"}"
                ${isNode2Active ? 'filter="url(#int-glow-wire)"' : ""}/>
          <rect x="${nodes[2].x + 10}" y="${nodes[2].y + 10}" width="${nodes[2].w - 20}" height="20" rx="4"
                fill="var(--sf)" stroke="var(--ln-s)" stroke-width="1"/>
          <text x="${nodes[2].x + nodes[2].w / 2}" y="${nodes[2].y + 24}" text-anchor="middle"
                fill="#ef4444" font-size="8.5" font-weight="800">${nodes[2].badge}</text>
          <text x="${nodes[2].x + nodes[2].w / 2}" y="${nodes[2].y + 55}" text-anchor="middle"
                fill="var(--ink)" font-size="11.5" font-weight="800">${nodes[2].title}</text>
          <text x="${nodes[2].x + nodes[2].w / 2}" y="${nodes[2].y + 72}" text-anchor="middle"
                fill="#f87171" font-size="9" font-weight="600" class="mono-txt">${nodes[2].sub}</text>
          <line x1="${nodes[2].x + 15}" y1="${nodes[2].y + 85}" x2="${nodes[2].x + nodes[2].w - 15}" y2="${nodes[2].y + 85}" stroke="var(--ln-s)" stroke-width="1"/>
          <text x="${nodes[2].x + nodes[2].w / 2}" y="${nodes[2].y + 104}" text-anchor="middle"
                fill="var(--ink)" font-size="8.5" font-weight="700">${nodes[2].desc}</text>
          <text x="${nodes[2].x + nodes[2].w / 2}" y="${nodes[2].y + 125}" text-anchor="middle"
                fill="#ef4444" font-size="8.5" font-weight="800" class="mono-txt">IAccountRepository (DIP)</text>
        </g>

        <!-- Node 3: Account (Domain Entity) -->
        <g id="node-entity" class="${isNode3Active ? "int-node-active" : ""}">
          <rect x="${nodes[3].x}" y="${nodes[3].y}" width="${nodes[3].w}" height="${nodes[3].h}" rx="10"
                fill="color-mix(in srgb, var(--warn) ${isNode3Active ? "20%" : "5%"}, var(--sf2))"
                stroke="${isNode3Active ? "#f59e0b" : "var(--ln)"}"
                stroke-width="${isNode3Active ? "3" : "1.2"}"
                ${isNode3Active ? 'filter="url(#int-pulse-step)"' : ""}/>
          <rect x="${nodes[3].x + 10}" y="${nodes[3].y + 10}" width="${nodes[3].w - 20}" height="20" rx="4"
                fill="var(--sf)" stroke="var(--ln-s)" stroke-width="1"/>
          <text x="${nodes[3].x + nodes[3].w / 2}" y="${nodes[3].y + 24}" text-anchor="middle"
                fill="#f59e0b" font-size="8.5" font-weight="800">${nodes[3].badge}</text>
          <text x="${nodes[3].x + nodes[3].w / 2}" y="${nodes[3].y + 55}" text-anchor="middle"
                fill="var(--ink)" font-size="11.5" font-weight="800">${nodes[3].title}</text>
          <text x="${nodes[3].x + nodes[3].w / 2}" y="${nodes[3].y + 72}" text-anchor="middle"
                fill="#fbbf24" font-size="9" font-weight="700" class="mono-txt">${nodes[3].sub}</text>
          <line x1="${nodes[3].x + 15}" y1="${nodes[3].y + 85}" x2="${nodes[3].x + nodes[3].w - 15}" y2="${nodes[3].y + 85}" stroke="var(--ln-s)" stroke-width="1"/>
          <text x="${nodes[3].x + nodes[3].w / 2}" y="${nodes[3].y + 104}" text-anchor="middle"
                fill="var(--ink)" font-size="8.5" font-weight="700">${nodes[3].desc}</text>
          <text x="${nodes[3].x + nodes[3].w / 2}" y="${nodes[3].y + 125}" text-anchor="middle"
                fill="#f59e0b" font-size="8.5" font-weight="800">Rich Domain Model</text>
        </g>

        <!-- Node 4: SqlAccountRepository & DB -->
        <g id="node-repo" class="${isNode4Active ? "int-node-active" : ""}">
          <rect x="${nodes[4].x}" y="${nodes[4].y}" width="${nodes[4].w}" height="${nodes[4].h}" rx="10"
                fill="color-mix(in srgb, var(--ok) ${isNode4Active ? "16%" : "4%"}, var(--sf2))"
                stroke="${isNode4Active ? "#10b981" : "var(--ln)"}"
                stroke-width="${isNode4Active ? "2.8" : "1.2"}"
                ${isNode4Active ? 'filter="url(#int-glow-wire)"' : ""}/>
          <rect x="${nodes[4].x + 6}" y="${nodes[4].y + 10}" width="${nodes[4].w - 12}" height="20" rx="4"
                fill="var(--sf)" stroke="var(--ln-s)" stroke-width="1"/>
          <text x="${nodes[4].x + nodes[4].w / 2}" y="${nodes[4].y + 24}" text-anchor="middle"
                fill="#10b981" font-size="8" font-weight="800">${nodes[4].badge}</text>
          <text x="${nodes[4].x + nodes[4].w / 2}" y="${nodes[4].y + 55}" text-anchor="middle"
                fill="var(--ink)" font-size="10.5" font-weight="800">المستودع وقاعدة البيانات</text>
          <text x="${nodes[4].x + nodes[4].w / 2}" y="${nodes[4].y + 72}" text-anchor="middle"
                fill="#34d399" font-size="8.5" font-weight="600" class="mono-txt">EF Core &amp; SQL</text>
          <line x1="${nodes[4].x + 10}" y1="${nodes[4].y + 85}" x2="${nodes[4].x + nodes[4].w - 10}" y2="${nodes[4].y + 85}" stroke="var(--ln-s)" stroke-width="1"/>
          <text x="${nodes[4].x + nodes[4].w / 2}" y="${nodes[4].y + 104}" text-anchor="middle"
                fill="var(--ink)" font-size="8" font-weight="700">SaveChangesAsync()</text>
          <text x="${nodes[4].x + nodes[4].w / 2}" y="${nodes[4].y + 125}" text-anchor="middle"
                fill="#10b981" font-size="8.5" font-weight="800" class="mono-txt">UPDATE Accounts</text>
        </g>

        <!-- RESPONSE RETURN PATH (BOTTOM) -->
        <g id="return-flow" opacity="${step === 3 ? "1" : "0.45"}">
          <path d="M 820 275 L 820 345 L 85 345 L 85 275" fill="none"
                stroke="${step === 3 ? "var(--ok)" : "var(--ln)"}"
                stroke-width="${step === 3 ? "2.5" : "1.2"}"
                stroke-dasharray="6 4"
                class="${step === 3 ? "int-pipe-pulse" : ""}"/>
          <circle cx="450" cy="345" r="4" fill="${step === 3 ? "var(--ok)" : "var(--ln)"}"/>
          <text x="450" y="365" text-anchor="middle"
                fill="${step === 3 ? "var(--ok)" : "var(--ink-m)"}"
                font-size="10" font-weight="700">
            مسار عودة الاستجابة: HTTP 200 OK (TransferCompletedResponse) يعود للعميل بعد اكتمال الحفظ
          </text>
        </g>
      </svg>
    `;
  }

  /* ───────────────────────────────────────────────────────────
     3. دالة بناء مخطط UML لنمط المستودع وعزل البيانات (Tab 3 SVG)
     ─────────────────────────────────────────────────────────── */
  function buildRepositoryUmlSvg(mode) {
    const svgW = 900;
    const svgH = 430;

    const isTest = mode === "testing";
    const isAnti = mode === "antipattern";

    if (isAnti) {
      return `
        <svg viewBox="0 0 ${svgW} ${svgH}" class="int-svg int-uml-svg" fill="none"
             stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" dir="ltr" direction="ltr">
          <defs>
            <marker id="uml-arrow-err" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ef4444"/>
            </marker>
            <style>
              text { stroke: none !important; font-family: var(--fa); -webkit-font-smoothing: antialiased; }
              .mono { font-family: var(--fm); }
            </style>
          </defs>

          <!-- Warning Banner Top -->
          <rect x="30" y="15" width="840" height="42" rx="8"
                fill="color-mix(in srgb, var(--err) 12%, var(--sf))"
                stroke="var(--err)" stroke-width="1.6"/>
          <text x="450" y="36" text-anchor="middle" fill="var(--err)" font-size="12" font-weight="800">
            النمط المضاد السيئ (Anti-Pattern): الارتباط المباشر بالصنف الملموس وخرق قاعدة التبعية
          </text>
          <text x="450" y="50" text-anchor="middle" fill="var(--ink)" font-size="9.5" font-weight="700">
            خدمة التطبيق OrderService ترتبط مباشرة بمستودع SqlOrderRepository وخادم SQL Server دون وجود أي واجهة تجريد!
          </text>

          <!-- Class 1: OrderService (Tightly Coupled) -->
          <g transform="translate(60, 95)">
            <rect x="0" y="0" width="280" height="230" rx="8" fill="var(--sf2)" stroke="var(--err)" stroke-width="2"/>
            <rect x="0" y="0" width="280" height="34" rx="8" fill="color-mix(in srgb, var(--err) 15%, var(--sf))"/>
            <text x="140" y="22" text-anchor="middle" fill="var(--err)" font-size="12" font-weight="800">OrderService</text>
            <text x="140" y="48" text-anchor="middle" fill="var(--ink-m)" font-size="9" class="mono">طبقة منطق الأعمال (Business)</text>
            <line x1="0" y1="58" x2="280" y2="58" stroke="var(--ln)" stroke-width="1"/>
            
            <rect x="8" y="68" width="264" height="42" rx="4" fill="color-mix(in srgb, var(--err) 20%, var(--sf))" stroke="var(--err)" stroke-width="1"/>
            <text x="16" y="85" fill="#f87171" font-size="10" font-weight="800" class="mono">- repo: SqlOrderRepository</text>
            <text x="16" y="102" fill="var(--err)" font-size="8.5" font-weight="700">عيب معماري: اعتماد صلب على الصنف الملموس!</text>
            
            <line x1="0" y1="120" x2="280" y2="120" stroke="var(--ln)" stroke-width="1"/>
            <text x="16" y="145" fill="var(--ink)" font-size="10" font-weight="700" class="mono">+ CreateOrder(OrderDto dto): void</text>
            <text x="16" y="172" fill="var(--ink)" font-size="10" font-weight="700" class="mono">+ CancelOrder(int id): void</text>
            <text x="16" y="198" fill="var(--ink)" font-size="10" font-weight="700" class="mono">+ CalculateDiscount(int id): decimal</text>
          </g>

          <!-- Fatal Coupling Arrow -->
          <g>
            <path d="M 340 185 L 530 185" fill="none" stroke="#ef4444" stroke-width="3" marker-end="url(#uml-arrow-err)"/>
            <rect x="360" y="145" width="150" height="30" rx="6" fill="var(--sf)" stroke="var(--err)" stroke-width="1.2"/>
            <text x="435" y="164" text-anchor="middle" fill="var(--err)" font-size="9" font-weight="800">
              Direct Hard Dependency
            </text>
            <text x="435" y="210" text-anchor="middle" fill="#ef4444" font-size="9" font-weight="800">
              تبعية مباشرة تخرق مبدأ DIP!
            </text>
          </g>

          <!-- Class 2: SqlOrderRepository (Concrete) -->
          <g transform="translate(540, 95)">
            <rect x="0" y="0" width="300" height="230" rx="8" fill="var(--sf2)" stroke="var(--err)" stroke-width="2"/>
            <rect x="0" y="0" width="300" height="34" rx="8" fill="color-mix(in srgb, var(--err) 15%, var(--sf))"/>
            <text x="150" y="22" text-anchor="middle" fill="var(--err)" font-size="12" font-weight="800">SqlOrderRepository</text>
            <text x="150" y="48" text-anchor="middle" fill="var(--ink-m)" font-size="9" class="mono">طبقة الوصول للبيانات (Data Access)</text>
            <line x1="0" y1="58" x2="300" y2="58" stroke="var(--ln)" stroke-width="1"/>
            
            <text x="16" y="80" fill="var(--ink)" font-size="10" font-weight="700" class="mono">- _sqlConnection: SqlConnection</text>
            <text x="16" y="105" fill="var(--ink)" font-size="10" font-weight="700" class="mono">- _dbContext: AppDbContext</text>
            
            <line x1="0" y1="120" x2="300" y2="120" stroke="var(--ln)" stroke-width="1"/>
            <text x="16" y="145" fill="var(--ink)" font-size="10" font-weight="700" class="mono">+ GetById(int id): Order</text>
            <text x="16" y="172" fill="var(--ink)" font-size="10" font-weight="700" class="mono">+ Insert(Order order): void</text>
            <text x="16" y="198" fill="var(--ink)" font-size="10" font-weight="700" class="mono">+ Update(Order order): void</text>
          </g>

          <!-- Bottom Consequences Box -->
          <g transform="translate(60, 345)">
            <rect x="0" y="0" width="780" height="65" rx="8" fill="var(--sf)" stroke="var(--ln)" stroke-width="1"/>
            <text x="20" y="24" fill="var(--err)" font-size="10.5" font-weight="800">عواقب هذا النمط المضاد (تحذيرات د. بيداء لعلع):</text>
            <text x="20" y="44" fill="var(--ink)" font-size="9.5" font-weight="700">
              1. يستحيل اختبار OrderService بدون خادم SQL حقيقي جاهز · 2. استبدال محرك التخزين يفرض تعديل كود الأعمال · 3. التعديلات في بنية الجداول تنعكس وتكسر كامل الطبقات (Transitive Dependency).
            </text>
          </g>
        </svg>
      `;
    }

    const isTestingMode = isTest;

    return `
      <svg viewBox="0 0 ${svgW} ${svgH}" class="int-svg int-uml-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" dir="ltr" direction="ltr">
        <defs>
          <marker id="uml-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--ink)"/>
          </marker>
          <marker id="uml-realize" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
            <polygon points="1,1 11,6 1,11" fill="var(--sf2)" stroke="var(--ok)" stroke-width="1.8"/>
          </marker>
          <style>
            text { stroke: none !important; font-family: var(--fa); -webkit-font-smoothing: antialiased; }
            .mono { font-family: var(--fm); }
            .int-realize-dash { stroke-dasharray: 6 4; animation: intRealizeAnim 1.6s linear infinite; }
            @keyframes intRealizeAnim { to { stroke-dashoffset: -20; } }
          </style>
        </defs>

        <!-- BOUNDARY 1: APPLICATION LAYER (CORE DOMAIN) -->
        <g id="box-application">
          <rect x="30" y="35" width="410" height="375" rx="10"
                fill="color-mix(in srgb, var(--acc) 6%, var(--sf))"
                stroke="var(--acc)" stroke-width="1.4" stroke-dasharray="6 4"/>
          <rect x="45" y="24" width="220" height="24" rx="5" fill="var(--sf2)" stroke="var(--acc)" stroke-width="1.2"/>
          <text x="155" y="40" text-anchor="middle" fill="var(--acc-b)" font-size="10" font-weight="800">
            Banking.Application (المستوى العالي)
          </text>

          <!-- Class: OrderService (Use Case Interactor) -->
          <g transform="translate(48, 65)">
            <rect x="0" y="0" width="170" height="175" rx="6" fill="var(--sf2)" stroke="var(--ln)" stroke-width="1.6"/>
            <rect x="0" y="0" width="170" height="30" rx="6" fill="var(--sf)"/>
            <text x="85" y="20" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="800">OrderService</text>
            <line x1="0" y1="30" x2="170" y2="30" stroke="var(--ln)" stroke-width="1"/>
            
            <text x="10" y="52" fill="var(--acc-b)" font-size="8.5" font-weight="700" class="mono">- _repo: IOrderRepo</text>
            <line x1="0" y1="68" x2="170" y2="68" stroke="var(--ln)" stroke-width="1"/>
            
            <text x="10" y="92" fill="var(--ink)" font-size="8.5" font-weight="700" class="mono">+ CreateOrder(dto)</text>
            <text x="10" y="116" fill="var(--ink)" font-size="8.5" font-weight="700" class="mono">+ CancelOrder(id)</text>
            <text x="10" y="140" fill="var(--ink)" font-size="8.5" font-weight="700" class="mono">+ GetOrder(id)</text>
            <text x="85" y="165" text-anchor="middle" fill="var(--ok)" font-size="8" font-weight="800">يعتمد على التجريد فقط!</text>
          </g>

          <!-- Interface: <<interface>> IOrderRepository -->
          <g transform="translate(250, 65)">
            <rect x="0" y="0" width="175" height="175" rx="6"
                  fill="color-mix(in srgb, var(--ok) 10%, var(--sf2))"
                  stroke="var(--ok)" stroke-width="2"/>
            <rect x="0" y="0" width="175" height="38" rx="6" fill="color-mix(in srgb, var(--ok) 18%, var(--sf))"/>
            <text x="87" y="16" text-anchor="middle" fill="var(--ok)" font-size="9" font-weight="800" class="mono">&lt;&lt;interface&gt;&gt;</text>
            <text x="87" y="32" text-anchor="middle" fill="var(--ok)" font-size="11" font-weight="800">IOrderRepository</text>
            <line x1="0" y1="38" x2="175" y2="38" stroke="var(--ok)" stroke-width="1"/>
            
            <text x="10" y="58" fill="var(--ink-m)" font-size="8" font-weight="600" class="mono">(No Attributes / Pure Contract)</text>
            <line x1="0" y1="70" x2="175" y2="70" stroke="var(--ok)" stroke-width="0.8"/>
            
            <text x="10" y="94" fill="var(--ink)" font-size="8.5" font-weight="700" class="mono">+ GetByIdAsync(id)</text>
            <text x="10" y="118" fill="var(--ink)" font-size="8.5" font-weight="700" class="mono">+ SaveAsync(order)</text>
            <text x="10" y="142" fill="var(--ink)" font-size="8.5" font-weight="700" class="mono">+ DeleteAsync(id)</text>
            <text x="87" y="165" text-anchor="middle" fill="var(--acc-b)" font-size="8" font-weight="800">صاحبة العقد والطلب</text>
          </g>

          <!-- Association Arrow: OrderService -> IOrderRepository -->
          <line x1="218" y1="140" x2="248" y2="140" stroke="var(--ink)" stroke-width="2" marker-end="url(#uml-arrow)"/>
          <text x="233" y="130" text-anchor="middle" fill="var(--ink-m)" font-size="8.5" font-weight="700">uses</text>

          <!-- In-Depth Note inside Application -->
          <g transform="translate(48, 255)">
            <rect x="0" y="0" width="377" height="140" rx="6" fill="var(--sf2)" stroke="var(--ln-s)" stroke-width="1"/>
            <text x="14" y="24" fill="var(--acc-b)" font-size="10" font-weight="800">سر العمارة النظيفة (The Dependency Inversion Magic):</text>
            <foreignObject x="14" y="32" width="350" height="98">
              <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 8.5px; line-height: 1.6; color: var(--ink); font-family: var(--fa); font-weight: 600; text-align: right; direction: rtl;">
                طبقة التطبيق تمتلك متطلبات حالات الاستخدام، لذا فهي التي تعلن واجهة <code style="font-family: var(--fm); color: var(--ok);">IOrderRepository</code>.
                الطبقات الخارجية الملموسة هي التي تأتي وتطبق هذه الواجهة. بذلك يصبح اتجاه سهم الكود مشيراً <strong style="color: var(--ok);">للداخل حصراً</strong> نحو التطبيق!
              </div>
            </foreignObject>
          </g>
        </g>

        <!-- BOUNDARY 2: INFRASTRUCTURE / TESTING LAYER (EXTERNAL ADAPTERS) -->
        <g id="box-infrastructure">
          <rect x="465" y="35" width="410" height="375" rx="10"
                fill="color-mix(in srgb, ${isTestingMode ? "var(--warn)" : "var(--ok)"} 6%, var(--sf))"
                stroke="${isTestingMode ? "var(--warn)" : "var(--ok)"}" stroke-width="1.4" stroke-dasharray="6 4"/>
          <rect x="480" y="24" width="260" height="24" rx="5" fill="var(--sf2)"
                stroke="${isTestingMode ? "var(--warn)" : "var(--ok)"}" stroke-width="1.2"/>
          <text x="610" y="40" text-anchor="middle" fill="${isTestingMode ? "var(--warn)" : "var(--ok)"}" font-size="10" font-weight="800">
            ${isTestingMode ? "Banking.UnitTests (مشروع الاختبارات المعزولة)" : "Banking.Infrastructure (المستوى المنخفض المنفذ)"}
          </text>

          ${!isTestingMode ? `
            <!-- PRODUCTION MODE: SqlOrderRepository -->
            <g transform="translate(485, 65)">
              <rect x="0" y="0" width="190" height="175" rx="6" fill="var(--sf2)" stroke="var(--ok)" stroke-width="2"/>
              <rect x="0" y="0" width="190" height="30" rx="6" fill="color-mix(in srgb, var(--ok) 15%, var(--sf))"/>
              <text x="95" y="20" text-anchor="middle" fill="var(--ok)" font-size="11" font-weight="800">SqlOrderRepository</text>
              <line x1="0" y1="30" x2="190" y2="30" stroke="var(--ok)" stroke-width="1"/>
              
              <text x="10" y="52" fill="var(--ink)" font-size="8.5" font-weight="700" class="mono">- _context: AppDbContext</text>
              <line x1="0" y1="68" x2="190" y2="68" stroke="var(--ok)" stroke-width="0.8"/>
              
              <text x="10" y="92" fill="var(--ink)" font-size="8.5" font-weight="700" class="mono">+ GetByIdAsync(id)</text>
              <text x="10" y="116" fill="var(--ink)" font-size="8.5" font-weight="700" class="mono">+ SaveAsync(order)</text>
              <text x="10" y="140" fill="var(--ink)" font-size="8.5" font-weight="700" class="mono">+ DeleteAsync(id)</text>
              <text x="95" y="165" text-anchor="middle" fill="#059669" font-size="8" font-weight="800">تطبيق حقيقي بـ EF Core</text>
            </g>

            <!-- SQL Server Engine Component -->
            <g transform="translate(710, 85)">
              <rect x="0" y="0" width="145" height="135" rx="8" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.4"/>
              <path d="M 20 25 C 20 15, 125 15, 125 25 C 125 35, 20 35, 20 25 Z" fill="#0284c7" opacity="0.3"/>
              <ellipse cx="72" cy="28" rx="45" ry="12" fill="var(--sf2)" stroke="#0284c7" stroke-width="1.6"/>
              <text x="72" y="32" text-anchor="middle" fill="#0284c7" font-size="10" font-weight="800">SQL Server</text>
              <text x="72" y="65" text-anchor="middle" fill="var(--ink)" font-size="9" font-weight="700">قاعدة البيانات</text>
              <text x="72" y="85" text-anchor="middle" fill="var(--ink-m)" font-size="8" class="mono">Relational Tables</text>
              <text x="72" y="115" text-anchor="middle" fill="var(--acc-b)" font-size="8" font-weight="800">أداة تفصيلية خارجية</text>
            </g>
            <line x1="675" y1="150" x2="710" y2="150" stroke="#0284c7" stroke-width="2"/>
          ` : `
            <!-- TESTING MODE: MockOrderRepository -->
            <g transform="translate(485, 65)">
              <rect x="0" y="0" width="200" height="175" rx="6" fill="var(--sf2)" stroke="var(--warn)" stroke-width="2"/>
              <rect x="0" y="0" width="200" height="30" rx="6" fill="color-mix(in srgb, var(--warn) 15%, var(--sf))"/>
              <text x="100" y="20" text-anchor="middle" fill="var(--warn)" font-size="11" font-weight="800">MockOrderRepository</text>
              <line x1="0" y1="30" x2="200" y2="30" stroke="var(--warn)" stroke-width="1"/>
              
              <text x="10" y="52" fill="var(--ink)" font-size="8.5" font-weight="700" class="mono">- _orders: List&lt;Order&gt;</text>
              <line x1="0" y1="68" x2="200" y2="68" stroke="var(--warn)" stroke-width="0.8"/>
              
              <text x="10" y="92" fill="var(--ink)" font-size="8.5" font-weight="700" class="mono">+ GetByIdAsync(id)</text>
              <text x="10" y="116" fill="var(--ink)" font-size="8.5" font-weight="700" class="mono">+ SaveAsync(order)</text>
              <text x="10" y="140" fill="var(--ink)" font-size="8.5" font-weight="700" class="mono">+ DeleteAsync(id)</text>
              <text x="100" y="165" text-anchor="middle" fill="var(--warn)" font-size="8" font-weight="800">محاكاة وهمية في الذاكرة (Mock)</text>
            </g>

            <!-- Test Runner Component -->
            <g transform="translate(710, 85)">
              <rect x="0" y="0" width="145" height="135" rx="8" fill="var(--sf)" stroke="var(--warn)" stroke-width="1.4"/>
              <text x="72" y="32" text-anchor="middle" fill="var(--warn)" font-size="11" font-weight="800">xUnit / Moq</text>
              <text x="72" y="60" text-anchor="middle" fill="var(--ink)" font-size="9" font-weight="700">سرعة الفحص:</text>
              <text x="72" y="82" text-anchor="middle" fill="var(--ok)" font-size="12" font-weight="800" class="mono">2 ms</text>
              <text x="72" y="115" text-anchor="middle" fill="var(--ok)" font-size="8" font-weight="800">صفر اتصال بالشبكة!</text>
            </g>
            <line x1="685" y1="150" x2="710" y2="150" stroke="var(--warn)" stroke-width="2"/>
          `}

          <!-- REALIZATION ARROW: SqlOrderRepository -> IOrderRepository -->
          <line x1="485" y1="150" x2="428" y2="150"
                stroke="var(--ok)" stroke-width="2.5"
                class="int-realize-dash"
                marker-end="url(#uml-realize)"/>
          <rect x="428" y="110" width="55" height="22" rx="4" fill="var(--sf2)" stroke="var(--ok)" stroke-width="1"/>
          <text x="455" y="125" text-anchor="middle" fill="var(--ok)" font-size="8" font-weight="800">Realization</text>

          <!-- Infrastructure Details Box -->
          <g transform="translate(485, 255)">
            <rect x="0" y="0" width="370" height="140" rx="6" fill="var(--sf2)" stroke="var(--ln-s)" stroke-width="1"/>
            <text x="14" y="24" fill="${isTestingMode ? "var(--warn)" : "var(--ok)"}" font-size="10" font-weight="800">
              ${isTestingMode ? "ميزة الاختبار الثورية المعزولة (Testability):" : "تطبيق مبدأ قلب التبعية (DIP Verified):"}
            </text>
            <foreignObject x="14" y="32" width="342" height="98">
              <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 8.5px; line-height: 1.6; color: var(--ink); font-family: var(--fa); font-weight: 600; text-align: right; direction: rtl;">
                ${isTestingMode
                  ? "بفضل نمط المستودع، تم استبدال خادم SQL Server بكائن وهمي في الذاكرة (Mock). تم تنفيذ اختبارات حالة الاستخدام في 2 ميلي ثانية دون اشتراط تثبيت قاعدة بيانات، ودون تلويث للجداول، وبموثوقية 100%!"
                  : "لاحظ رأس السهم المفرغ (Realization): مشروع البنية التحتية يستورد مشروع التطبيق لتحقيق الواجهة. قاعدة البيانات أصبحت أداة خادمة للتطبيق يمكن استبدالها بـ MongoDB أو PostgreSQL دون تعديل سطر واحد في الدومين."}
              </div>
            </foreignObject>
          </g>
        </g>
      </svg>
    `;
  }

  /* ───────────────────────────────────────────────────────────
     4. كائن نموذج العمارة النظيفة: CLEAN_ARCH_STUDIO_MODEL
     ─────────────────────────────────────────────────────────── */
  const CLEAN_ARCH_STUDIO_MODEL = {
    id: "clean-architecture-studio",
    module: "L5",
    module_title: "الوحدة 5 · العمارة النظيفة (Clean Architecture)",
    ref: "L5-S004",
    title_ar: "محراب العمارة النظيفة والحلقات متحدة المركز وتدفق الطلبات",
    title_en: "Clean Architecture Concentric Rings & Request Flow Studio",
    desc_ar:
      "محاكي بصري معماري يفكك طبقات العمارة النظيفة (Clean Architecture) والحلقات الأربع متحدة المركز، مع تتبع تدفق الطلب خطوة بخطوة من واجهة المستخدم إلى قلب الدومين وقاعدة البيانات عبر نمط المستودع (Repository Pattern).",
    badge: "العمارة النظيفة · Clean Architecture",
    tip: "وقفة امتحانية مؤكدة: د. بيداء تركز على قاعدة التبعية الذهبية (The Dependency Rule): 'تبعيات الكود تتجه دائماً وحصراً إلى الداخل (Inward) نحو الـ Domain/Entities'. قلب النظام لا يعرف شيئاً عن الـ Frameworks أو قاعدة البيانات أو الـ UI.",

    render: function (card, utils) {
      const { el, clear, svgNode, iconSvg, slideRefAttrs, ICONS } = utils;

      let activeTab = "rings";
      let activeLayerId = "all";
      let activeStepIndex = 0;
      let activeRepoMode = "production";
      let autoPlayInterval = null;

      const tabsBar = el("div", { class: "int-tabs-bar" });
      const stageWrap = el("div", { class: "int-stage-wrap" });

      const tabs = [
        { id: "rings", label: "1. الحلقات الأربع وقاعدة التبعية" },
        { id: "flow", label: "2. تتبع مسار الطلب خطوة بخطوة (Request Flow)" },
        { id: "repo", label: "3. نمط المستودع وعزل قواعد البيانات (Repository)" }
      ];

      function renderCurrentTab() {
        if (autoPlayInterval) {
          clearInterval(autoPlayInterval);
          autoPlayInterval = null;
        }

        clear(stageWrap);

        // ═══════════════════════════════════════════════════════
        // TAB 1: CONCENTRIC RINGS & DEPENDENCY RULE
        // ═══════════════════════════════════════════════════════
        if (activeTab === "rings") {
          const pane = el("div", { class: "int-pane" });

          pane.appendChild(
            el(
              "div",
              { class: "int-tip" },
              el("span", { class: "wt" }, "الجوهر المعماري للحلقات الأربع (Concentric Rings):"),
              "تتكون العمارة النظيفة من أربع حلقات متحدة المركز لكل منها مسؤولية حصرية. كلما اتجهنا نحو المركز، زادت أهمية واستقرار الكود وتجريده (Domain/Entities). كلما اتجهنا نحو الأطراف الخارجية، زادت التفاصيل التقنية سهلة الاستبدال (Web/SQL). قاعدة التبعية تحسم الأمر: الأسهم تتجه حصراً إلى الداخل، ولا يحق للطبقة الداخلية معرفة أي شيء عن الطبقة الخارجية إطلاقاً!",
            )
          );

          // Controls Bar: Layer Selector Pills
          const controls = el("div", { class: "int-sim-controls" });
          controls.appendChild(
            el(
              "div",
              { class: "int-sim-label" },
              svgNode(ICONS.interactive),
              "انقر على إحدى الحلقات المعمارية لعزلها وفحص قواعدها ومشاريعها البرمجية:",
            )
          );

          const pills = el("div", { class: "int-sim-pills" });
          const layerPills = [
            { id: "all", name: "عرض شامل للحلقات الأربع" },
            { id: "entities", name: "1. الكيانات (Entities)" },
            { id: "usecases", name: "2. حالات الاستخدام (Use Cases)" },
            { id: "adapters", name: "3. محولات الواجهات (Adapters)" },
            { id: "frameworks", name: "4. الأطر والأنظمة الخارجية (Frameworks)" }
          ];

          layerPills.forEach((p) => {
            const isSel = activeLayerId === p.id;
            pills.appendChild(
              el(
                "button",
                {
                  class: "int-toggle-btn" + (isSel ? " on" : ""),
                  onclick: () => {
                    activeLayerId = p.id;
                    renderCurrentTab();
                  }
                },
                iconSvg(isSel ? "check" : "target"),
                p.name
              )
            );
          });
          controls.appendChild(pills);
          pane.appendChild(controls);

          // SVG Diagram
          const svgBox = el("div", { class: "int-svg-wrap" });
          svgBox.innerHTML = buildCleanArchCirclesSvg(activeLayerId);
          pane.appendChild(svgBox);

          // Metrics Row
          const metricsMap = {
            all: {
              stability: "متدرج من الأطراف نحو النواة",
              dep: "Inward Only (نحو المركز فقط)",
              replace: "عزل تام 100% بين الأعمال والتقنية",
              rule: "Separation of Concerns (SoC)"
            },
            entities: {
              stability: "أعلى درجات الاستقرار والتجريد",
              dep: "صفر تبعيات (Zero Dependencies)",
              replace: "مستقلة عن أي إطار أو قاعدة بيانات",
              rule: "Rich Domain Model & Encapsulation"
            },
            usecases: {
              stability: "استقرار عالي ومستقل عن الويب وSQL",
              dep: "تعتمد فقط وحصراً على Domain",
              replace: "تحتوي على واجهات المستودعات (Interfaces)",
              rule: "Single Responsibility & DIP"
            },
            adapters: {
              stability: "طبقة وسيطة مرنة لتحويل البيانات",
              dep: "تعتمد على Application و Domain",
              replace: "تحويل طلبات HTTP وDTOs إلى استعلامات",
              rule: "Adapter Pattern & Interface Translation"
            },
            frameworks: {
              stability: "أدنى استقرار (سريعة التغير والتبديل)",
              dep: "تعتمد على الحلقات الداخلية لحقن التبعيات",
              replace: "قابلة للاستبدال الكامل دون لمس النطاق",
              rule: "Dependency Injection & Inversion of Control"
            }
          };

          const curM = metricsMap[activeLayerId] || metricsMap.all;

          pane.appendChild(
            el(
              "div",
              { class: "int-metrics-row" },
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "مستوى الاستقرار والتجريد (Stability)"),
                el("span", { class: "int-metric-val", style: "color: var(--ok);" }, curM.stability),
                el("span", { class: "int-metric-desc" }, "يزداد الاستقرار والأمان كلما اقتربنا من النواة المركزية")
              ),
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "اتجاه التبعية المسموح برمجياً"),
                el("span", { class: "int-metric-val", style: "color: var(--acc-b);" }, curM.dep),
                el("span", { class: "int-metric-desc" }, "قاعدة التبعية الذهبية: Source code dependencies point inward")
              ),
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "استقلالية التقنية وقابلية الاستبدال"),
                el("span", { class: "int-metric-val", style: "color: var(--warn);" }, curM.replace),
                el("span", { class: "int-metric-desc" }, "قواعد الأعمال لا تتأثر مطلقاً بتغيير قاعدة البيانات")
              ),
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "المبدأ المعماري الحاكم"),
                el("span", { class: "int-metric-val" }, curM.rule),
                el("span", { class: "int-metric-desc" }, "معايير تصميم برمجيات المؤسسات المتقدمة")
              )
            )
          );

          // C# Multi-Project Dependencies Snippet
          pane.appendChild(
            el(
              "div",
              { class: "int-code-block" },
              `// اعتماديات المشاريع في حل .NET المعياري للعمارة النظيفة (Project References):
// 1. مشروع النواة Banking.Domain.csproj:
// <ItemGroup>
//   <!-- لا يعتمد على أي مشروع آخر إطلاقاً - صفر تبعيات! -->
// </ItemGroup>

// 2. مشروع التطبيق Banking.Application.csproj:
// <ItemGroup>
//   <ProjectReference Include="..\\Banking.Domain\\Banking.Domain.csproj" />
// </ItemGroup>

// 3. مشروع البنية التحتية Banking.Infrastructure.csproj:
// <ItemGroup>
//   <ProjectReference Include="..\\Banking.Application\\Banking.Application.csproj" />
//   <PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="8.0.0" />
// </ItemGroup>

// 4. مشروع واجهة الويب Banking.API.csproj (نقطة الربط والتسجيل):
// <ItemGroup>
//   <ProjectReference Include="..\\Banking.Application\\Banking.Application.csproj" />
//   <ProjectReference Include="..\\Banking.Infrastructure\\Banking.Infrastructure.csproj" />
// </ItemGroup>`
            )
          );

          // Slide References
          pane.appendChild(
            el(
              "div",
              { style: "display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px;" },
              el(
                "a",
                { class: "int-slide-ref-btn", ...slideRefAttrs("L5-S004") },
                iconSvg("slides"),
                "سلايد العمارة النظيفة (L5-S004)"
              ),
              el(
                "a",
                { class: "int-slide-ref-btn", ...slideRefAttrs("L5-S022") },
                iconSvg("slides"),
                "قاعدة التبعية الذهبية (L5-S022)"
              ),
              el(
                "a",
                { class: "int-slide-ref-btn", ...slideRefAttrs("L5-S026") },
                iconSvg("slides"),
                "اعتماديات المشاريع (L5-S026)"
              )
            )
          );

          stageWrap.appendChild(pane);
        }

        // ═══════════════════════════════════════════════════════
        // TAB 2: REQUEST FLOW SIMULATOR (STEP-BY-STEP)
        // ═══════════════════════════════════════════════════════
        else if (activeTab === "flow") {
          const pane = el("div", { class: "int-pane" });

          pane.appendChild(
            el(
              "div",
              { class: "int-tip" },
              el("span", { class: "wt" }, "محاكي تدفق الطلب عبر الحدود المعمارية (Request Flow):"),
              "تتبع رحلة طلب مصرفي حقيقي (تحويل أموال TransferMoney) من لحظة وصوله عبر HTTP من المتصفح، مروراً بالمتحكم (Controller) الذي يفوض التنفيذ لخدمة التطبيق (Use Case)، ثم استدعاء النواة (Entity) لتنفيذ قواعد الرصيد والسحب، وانتهاءً بتثبيت المعاملة عبر المستودع في قاعدة بيانات SQL Server، ثم عودة الاستجابة للعميل.",
            )
          );

          // Stepper Controls Bar
          const controls = el("div", { class: "int-sim-controls" });
          controls.appendChild(
            el(
              "div",
              { class: "int-sim-label" },
              svgNode(ICONS.interactive),
              "تحكم في خطوات رحلة الطلب المعمارية أو شغّل المحاكاة التلقائية:",
            )
          );

          const stepPills = el("div", { class: "int-sim-pills" });
          const stepNames = [
            "الخطوة 1: استلام الطلب (Controller)",
            "الخطوة 2: تنسيق المعالجة (Use Case)",
            "الخطوة 3: قواعد الأعمال (Entity)",
            "الخطوة 4: حفظ البيانات (SQL DB)"
          ];

          stepNames.forEach((sName, sIdx) => {
            const isCur = activeStepIndex === sIdx;
            stepPills.appendChild(
              el(
                "button",
                {
                  class: "int-toggle-btn" + (isCur ? " on" : ""),
                  onclick: () => {
                    activeStepIndex = sIdx;
                    renderCurrentTab();
                  }
                },
                iconSvg(isCur ? "check" : "target"),
                sName
              )
            );
          });
          controls.appendChild(stepPills);

          // Actions Row (Prev, Next, Auto Play)
          const actions = el("div", { class: "int-sim-actions" });
          actions.appendChild(
            el(
              "button",
              {
                class: "int-action-btn",
                onclick: () => {
                  activeStepIndex = (activeStepIndex - 1 + 4) % 4;
                  renderCurrentTab();
                }
              },
              iconSvg("chevronRight"),
              "الخطوة السابقة"
            )
          );
          actions.appendChild(
            el(
              "button",
              {
                class: "int-action-btn",
                style: "background: var(--acc); color: var(--bg); border-color: var(--acc); font-weight: 800;",
                onclick: () => {
                  activeStepIndex = (activeStepIndex + 1) % 4;
                  renderCurrentTab();
                }
              },
              iconSvg("chevronLeft"),
              "الخطوة التالية"
            )
          );
          actions.appendChild(
            el(
              "button",
              {
                class: "int-action-btn",
                onclick: () => {
                  let nextStep = activeStepIndex;
                  autoPlayInterval = setInterval(() => {
                    nextStep = (nextStep + 1) % 4;
                    activeStepIndex = nextStep;
                    renderCurrentTab();
                    if (nextStep === 3) {
                      clearInterval(autoPlayInterval);
                      autoPlayInterval = null;
                    }
                  }, 1600);
                }
              },
              iconSvg("interactive"),
              "تشغيل تلقائي متسلسل (Auto Play)"
            )
          );
          controls.appendChild(actions);
          pane.appendChild(controls);

          // SVG Pipeline
          const svgBox = el("div", { class: "int-svg-wrap" });
          svgBox.innerHTML = buildRequestFlowSvg(activeStepIndex);
          pane.appendChild(svgBox);

          // Step Code Snippet & Analysis
          const stepCodes = [
            `// [الخطوة 1: استلام الطلب والتحقق الشكلي]
// الملف: Banking.API/Controllers/AccountsController.cs (طبقة العرض والـ API)
[ApiController]
[Route("api/[controller]")]
public class AccountsController : ControllerBase {
    private readonly IAccountService _accountService;

    // حقن التبعيات: المتحكم يعتمد على تجريد الخدمة
    public AccountsController(IAccountService accountService) => _accountService = accountService;

    [HttpPost("transfer")]
    public async Task<IActionResult> Transfer([FromBody] TransferRequestDto dto) {
        // 1. التحقق الشكلي السطحي من صيغة الطلب
        if (!ModelState.IsValid) return BadRequest(ModelState);

        // 2. تفويض المعالجة لخدمة التطبيق (Use Case) دون كتابة أي منطق أعمال هنا
        await _accountService.TransferMoneyAsync(dto.FromAccountId, dto.ToAccountId, dto.Amount);
        return Ok(new { message = "تم التحويل المصرفي بنجاح" });
    }
}`,
            `// [الخطوة 2: تنسيق المعالجة وحالات الاستخدام]
// الملف: Banking.Application/Services/AccountService.cs (طبقة التطبيق)
public class AccountService : IAccountService {
    private readonly IAccountRepository _repo;

    // الخدمة تعتمد حصراً على واجهة المستودع المجردة وتجهل EF Core تماماً
    public AccountService(IAccountRepository repo) => _repo = repo;

    public async Task TransferMoneyAsync(int fromId, int toId, decimal amount) {
        // 1. تحميل الكيانات من المستودع عبر الواجهة المجردة
        var fromAccount = await _repo.GetByIdAsync(fromId)
            ?? throw new AccountNotFoundException(fromId);
        var toAccount = await _repo.GetByIdAsync(toId)
            ?? throw new AccountNotFoundException(toId);

        // 2. توجيه واستدعاء سلوك الكيان (Domain Business Rules)
        fromAccount.Withdraw(amount);
        toAccount.Deposit(amount);

        // 3. تأكيد حفظ الحالة المعدلة عبر المستودع
        await _repo.SaveAsync(fromAccount);
        await _repo.SaveAsync(toAccount);
    }
}`,
            `// [الخطوة 3: تنفيذ وحماية قواعد الأعمال في النواة المركزية]
// الملف: Banking.Domain/Entities/Account.cs (طبقة النطاق والكيانات - قلب النظام)
public class Account {
    public int Id { get; private set; }
    public decimal Balance { get; private set; }
    public AccountStatus Status { get; private set; }

    // النموذج الغني (Rich Domain Model): منطق الأعمال محصن داخل الكيان
    public void Withdraw(decimal amount) {
        if (amount <= 0)
            throw new InvalidAmountException("المبلغ المطلوب سحبه يجب أن يكون موجباً");
        if (Status != AccountStatus.Active)
            throw new InactiveAccountException("لا يمكن السحب من حساب مصرفي مجمد");
        if (amount > Balance)
            throw new InsufficientFundsException("الرصيد غير كافٍ لإتمام عملية التحويل");

        Balance -= amount; // تعديل محمي للحالة الداخلية
    }

    public void Deposit(decimal amount) {
        if (amount <= 0)
            throw new InvalidAmountException("المبلغ المودع يجب أن يكون موجباً");
        Balance += amount;
    }
}`,
            `// [الخطوة 4: التخزين عبر نمط المستودع وحقن التبعيات]
// الملف: Banking.Infrastructure/Repositories/SqlAccountRepository.cs (طبقة البنية التحتية)
public class SqlAccountRepository : IAccountRepository {
    private readonly AppDbContext _context;

    public SqlAccountRepository(AppDbContext context) => _context = context;

    public async Task<Account?> GetByIdAsync(int id) =>
        await _context.Accounts.FindAsync(id);

    public async Task SaveAsync(Account account) {
        _context.Accounts.Update(account);
        // توليد استعلام UPDATE وتنفيذه على قاعدة بيانات SQL Server
        await _context.SaveChangesAsync();
    }
}`
          ];

          pane.appendChild(
            el(
              "div",
              { class: "int-code-block" },
              stepCodes[activeStepIndex]
            )
          );

          // Slide Jump Button
          pane.appendChild(
            el(
              "div",
              { style: "margin-top: 14px;" },
              el(
                "a",
                { class: "int-slide-ref-btn", ...slideRefAttrs("L5-S064") },
                iconSvg("slides"),
                "سلايد دورة حياة الطلب الخماسية (L5-S064)"
              )
            )
          );

          stageWrap.appendChild(pane);
        }

        // ═══════════════════════════════════════════════════════
        // TAB 3: REPOSITORY PATTERN & DATABASE ISOLATION
        // ═══════════════════════════════════════════════════════
        else if (activeTab === "repo") {
          const pane = el("div", { class: "int-pane" });

          pane.appendChild(
            el(
              "div",
              { class: "int-tip" },
              el("span", { class: "wt" }, "نمط المستودع وقلب التبعية (Repository Pattern & DIP):"),
              "السر المعماري الأكبر في العمارة النظيفة: طبقة التطبيق هي التي تحدد وتملك الواجهة المجردة IOrderRepository. وطبقة البنية التحتية هي التي تستورد التطبيق لتطبق الواجهة (Realization). هذا الترتيب الهندسي يعكس اتجاه سهم التبعية ليصبح مشيراً للداخل، ويعزل قاعدة البيانات ويسمح باستبدال SQL Server بكائن محاكاة وهمي (Mock) لتشغيل اختبارات الوحدة في جزء من الألف من الثانية!",
            )
          );

          // Mode Controls
          const controls = el("div", { class: "int-sim-controls" });
          controls.appendChild(
            el(
              "div",
              { class: "int-sim-label" },
              svgNode(ICONS.interactive),
              "اختر البيئة المعمارية لمقارنة تدفق التبعيات في UML:",
            )
          );

          const modePills = el("div", { class: "int-sim-pills" });
          const modes = [
            { id: "production", name: "بيئة الإنتاج الحقيقية (SQL Server + EF Core)" },
            { id: "testing", name: "بيئة اختبارات الوحدة السريعة (Mock In-Memory)" },
            { id: "antipattern", name: "المقارنة المعمارية: النمط التقليدي المنتهك (Anti-Pattern)" }
          ];

          modes.forEach((m) => {
            const isCur = activeRepoMode === m.id;
            modePills.appendChild(
              el(
                "button",
                {
                  class: "int-toggle-btn" + (isCur ? " on" : ""),
                  onclick: () => {
                    activeRepoMode = m.id;
                    renderCurrentTab();
                  }
                },
                iconSvg(isCur ? "check" : "target"),
                m.name
              )
            );
          });
          controls.appendChild(modePills);
          pane.appendChild(controls);

          // SVG UML Diagram
          const svgBox = el("div", { class: "int-svg-wrap" });
          svgBox.innerHTML = buildRepositoryUmlSvg(activeRepoMode);
          pane.appendChild(svgBox);

          // Metrics Row
          pane.appendChild(
            el(
              "div",
              { class: "int-metrics-row" },
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "مبدأ قلب التبعية (Dependency Inversion)"),
                el("span", { class: "int-metric-val", style: "color: var(--ok);" }, activeRepoMode === "antipattern" ? "منتهك ومكسور!" : "متحقق 100% (DIP)"),
                el("span", { class: "int-metric-desc" }, "الطبقات العليا تعتمد على التجريدات لا الأصناف الملموسة")
              ),
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "سرعة تشغيل الاختبارات (Test Execution Speed)"),
                el("span", { class: "int-metric-val", style: "color: var(--acc-b);" }, activeRepoMode === "testing" ? "2 ميلي ثانية (0.002s)" : activeRepoMode === "production" ? "4500 ميلي ثانية (4.5s)" : "بطيء وغير معزول"),
                el("span", { class: "int-metric-desc" }, "عزل تام عن بطء الشبكة وعمليات القرص في اختبارات الوحدة")
              ),
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "استبدال محرك التخزين (DB Independence)"),
                el("span", { class: "int-metric-val", style: "color: var(--warn);" }, activeRepoMode === "antipattern" ? "مستحيل دون كسر كود الأعمال" : "فوري (MongoDB / PostgreSQL / SQL)"),
                el("span", { class: "int-metric-desc" }, "كود الخدمة لا يعلم ولا يبالي بنوع محرك التخزين")
              )
            )
          );

          // C# Code Snippet for Repository & DI
          pane.appendChild(
            el(
              "div",
              { class: "int-code-block" },
              `// كود C# الكامل لتطبيق نمط المستودع وحقن التبعيات واختبار الوحدة:
// 1. العقد المجرد في طبقة التطبيق (Banking.Application):
public interface IOrderRepository {
    Task<Order?> GetByIdAsync(int id);
    Task SaveAsync(Order order);
}

// 2. التحقيق الملموس في طبقة البنية التحتية (Banking.Infrastructure):
public class SqlOrderRepository : IOrderRepository {
    private readonly AppDbContext _context;
    public SqlOrderRepository(AppDbContext context) => _context = context;
    public async Task<Order?> GetByIdAsync(int id) => await _context.Orders.FindAsync(id);
    public async Task SaveAsync(Order order) {
        _context.Orders.Update(order);
        await _context.SaveChangesAsync();
    }
}

// 3. تسجيل التبعية في مشغل النظام (Banking.API/Program.cs):
builder.Services.AddScoped<IOrderRepository, SqlOrderRepository>();

// 4. كائن المحاكاة السريع في مشروع اختبارات الوحدة (Banking.UnitTests):
// var mockRepo = new Mock<IOrderRepository>();
// mockRepo.Setup(r => r.GetByIdAsync(1)).ReturnsAsync(new Order(1, "CustomerA"));
// var service = new OrderService(mockRepo.Object);
// ينفذ الاختبار في 2ms دون فتح أي اتصال بقاعدة بيانات!`
            )
          );

          // Slide Jump Buttons
          pane.appendChild(
            el(
              "div",
              { style: "display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px;" },
              el(
                "a",
                { class: "int-slide-ref-btn", ...slideRefAttrs("L5-S058") },
                iconSvg("slides"),
                "سلايد واجهات المستودعات (L5-S058)"
              ),
              el(
                "a",
                { class: "int-slide-ref-btn", ...slideRefAttrs("L5-S061") },
                iconSvg("slides"),
                "سلايد تحسين قابلية الاختبار بـ Mock (L5-S061)"
              ),
              el(
                "a",
                { class: "int-slide-ref-btn", ...slideRefAttrs("L5-S063") },
                iconSvg("slides"),
                "علل: لماذا توضع الواجهة في Application؟ (L5-S063)"
              )
            )
          );

          stageWrap.appendChild(pane);
        }
      }

      // Build Top Tabs
      tabs.forEach((t) => {
        const btn = el(
          "button",
          {
            class: "int-tab-btn" + (activeTab === t.id ? " active" : ""),
            onclick: () => {
              activeTab = t.id;
              tabsBar.querySelectorAll(".int-tab-btn").forEach((b) => b.classList.remove("active"));
              btn.classList.add("active");
              renderCurrentTab();
            }
          },
          t.label
        );
        tabsBar.appendChild(btn);
      });

      card.appendChild(tabsBar);
      card.appendChild(stageWrap);
      renderCurrentTab();
    }
  };

  console.log("CLEAN_ARCH_STUDIO_MODEL fully defined.");

  /* ═══════════════════════════════════════════════════════════
     القسم الخامس: استوديو التزامن ومحاكي القفل الميت وأجيال الذاكرة
     الوحدة L7: Concurrency, Deadlocks & Memory Management
     المدرس: د. بيداء لعلع · معيار 100% SVG متجهي · صفر إيموجيات
     ═══════════════════════════════════════════════════════════ */

  /* ───────────────────────────────────────────────────────────
     1. دالة بناء SVG المخطط الزمني للتزامن (Concurrency Timeline)
     ─────────────────────────────────────────────────────────── */
  function buildConcurrencyTimelineSvg(params) {
    const { mode = "all", isRunning = false, progress = 0.5 } = params || {};
    const svgW = 860;
    const svgH = 430;

    const needleX = 210 + Math.max(0, Math.min(1, progress)) * 600;

    const showSync = mode === "all" || mode === "sync";
    const showThread = mode === "all" || mode === "thread";
    const showAsync = mode === "all" || mode === "async";

    return `
      <svg viewBox="0 0 ${svgW} ${svgH}" class="int-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" direction="ltr">
        <defs>
          <filter id="int-needle-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="rgba(14, 165, 233, 0.8)"/>
          </filter>
          <pattern id="hatch-block" width="12" height="12" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="12" stroke="#ef4444" stroke-width="2.5" opacity="0.35"/>
          </pattern>
          <pattern id="hatch-thread-wait" width="12" height="12" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="12" stroke="#f59e0b" stroke-width="2.2" opacity="0.35"/>
          </pattern>
          <style>
            text { stroke: none !important; -webkit-font-smoothing: antialiased; }
            .mono { font-family: var(--fm); }
            .bold { font-weight: 800; }
            .semi { font-weight: 700; }
          </style>
        </defs>

        <!-- Time Axis Grid Lines -->
        <g stroke="var(--ln)" stroke-width="1" opacity="0.4" stroke-dasharray="3 4">
          <line x1="210" y1="35" x2="210" y2="400"/>
          <line x1="360" y1="35" x2="360" y2="400"/>
          <line x1="510" y1="35" x2="510" y2="400"/>
          <line x1="660" y1="35" x2="660" y2="400"/>
          <line x1="810" y1="35" x2="810" y2="400"/>
        </g>

        <!-- Time Labels (Header) -->
        <g fill="var(--ink-m)" font-size="11" font-weight="700" class="mono" text-anchor="middle">
          <text x="210" y="24">0.0s</text>
          <text x="360" y="24">1.0s</text>
          <text x="510" y="24">2.0s</text>
          <text x="660" y="24">3.0s</text>
          <text x="810" y="24">4.0s (اكتمال المهمة)</text>
        </g>

        <!-- ════════ 1. TRACK: SYNCHRONOUS BLOCKING ════════ -->
        <g opacity="${showSync ? "1" : "0.22"}" transform="translate(0, 40)">
          <!-- Label Card -->
          <rect x="18" y="0" width="180" height="98" rx="8" fill="var(--sf2)" stroke="var(--ln)" stroke-width="1.4"/>
          <rect x="26" y="8" width="6" height="82" rx="3" fill="#ef4444"/>
          <text x="40" y="28" fill="var(--ink)" font-size="12" font-weight="800" text-anchor="start" direction="rtl" unicode-bidi="isolate">
            1. متزامن (Sync Blocking)
          </text>
          <text x="40" y="47" fill="var(--ink-m)" font-size="10" font-weight="700" text-anchor="start" direction="rtl" unicode-bidi="isolate">
            مسلك UI Thread محبوس 3 ثوانٍ
          </text>
          <rect x="40" y="58" width="145" height="24" rx="4" fill="color-mix(in srgb, var(--err) 18%, var(--sf))" stroke="var(--err)" stroke-width="1"/>
          <text x="112" y="74" fill="var(--err)" font-size="9.5" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            حالة الواجهة: متجمدة (Frozen)
          </text>

          <!-- Swimlane Container -->
          <rect x="210" y="8" width="600" height="82" rx="8" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.2"/>

          <!-- Phase 1: 0.0 - 0.5s Active Call -->
          <rect x="210" y="16" width="75" height="66" rx="6" fill="color-mix(in srgb, var(--acc) 25%, var(--sf2))" stroke="var(--acc)" stroke-width="1.4"/>
          <text x="247" y="45" fill="var(--acc-b)" font-size="10" font-weight="800" text-anchor="middle" class="mono">GetData()</text>
          <text x="247" y="62" fill="var(--ink-m)" font-size="8.5" font-weight="700" text-anchor="middle" direction="rtl" unicode-bidi="isolate">بدء الطلب</text>

          <!-- Phase 2: 0.5 - 3.5s BLOCKED FREEZE (Hatched Red) -->
          <rect x="285" y="16" width="450" height="66" rx="6" fill="url(#hatch-block)" stroke="var(--err)" stroke-width="1.8"/>
          <rect x="330" y="27" width="360" height="26" rx="6" fill="var(--sf2)" stroke="var(--err)" stroke-width="1.2"/>
          <circle cx="346" cy="40" r="5" fill="var(--err)"/>
          <text x="515" y="44" fill="var(--err)" font-size="11" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            المسلك معلق بالكامل ينتظر الشبكة (3.0s Thread Blocked)
          </text>
          <text x="510" y="70" fill="var(--ink-m)" font-size="9" font-weight="700" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            المعالج خامل، والواجهة متوقفة ولا تستجيب لنقرات المستخدم!
          </text>

          <!-- Phase 3: 3.5 - 4.0s Process Response -->
          <rect x="735" y="16" width="75" height="66" rx="6" fill="color-mix(in srgb, var(--ok) 25%, var(--sf2))" stroke="var(--ok)" stroke-width="1.4"/>
          <text x="772" y="45" fill="var(--ok)" font-size="9.5" font-weight="800" text-anchor="middle" class="mono">Process()</text>
          <text x="772" y="62" fill="var(--ink-m)" font-size="8.5" font-weight="700" text-anchor="middle" direction="rtl" unicode-bidi="isolate">معالجة ورد</text>
        </g>

        <!-- ════════ 2. TRACK: DEDICATED THREADS ════════ -->
        <g opacity="${showThread ? "1" : "0.22"}" transform="translate(0, 160)">
          <!-- Label Card -->
          <rect x="18" y="0" width="180" height="98" rx="8" fill="var(--sf2)" stroke="var(--ln)" stroke-width="1.4"/>
          <rect x="26" y="8" width="6" height="82" rx="3" fill="#f59e0b"/>
          <text x="40" y="28" fill="var(--ink)" font-size="12" font-weight="800" text-anchor="start" direction="rtl" unicode-bidi="isolate">
            2. مسالك يدوية (new Thread)
          </text>
          <text x="40" y="47" fill="var(--ink-m)" font-size="10" font-weight="700" text-anchor="start" direction="rtl" unicode-bidi="isolate">
            حجز مسلك OS مكرس لكل طلب
          </text>
          <rect x="40" y="58" width="145" height="24" rx="4" fill="color-mix(in srgb, var(--warn) 18%, var(--sf))" stroke="var(--warn)" stroke-width="1"/>
          <text x="112" y="74" fill="var(--warn)" font-size="9.5" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            عبء ذاكرة عالي (1MB Stack)
          </text>

          <!-- Swimlane Container -->
          <rect x="210" y="8" width="600" height="82" rx="8" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.2"/>

          <!-- Sub-track A: UI Thread (Runs free) -->
          <rect x="215" y="14" width="590" height="26" rx="4" fill="color-mix(in srgb, var(--ok) 12%, var(--sf2))" stroke="var(--ln)" stroke-width="1"/>
          <text x="225" y="31" fill="var(--ok)" font-size="9.5" font-weight="800" text-anchor="start" direction="rtl" unicode-bidi="isolate">
            مسلك الواجهة (UI Thread 1): متجاوب وحر طوال الوقت
          </text>

          <!-- Sub-track B: Worker Thread 2 (Heavy creation + Blocked wait) -->
          <!-- Spawn & Context Switch Overhead -->
          <rect x="285" y="46" width="45" height="38" rx="4" fill="color-mix(in srgb, var(--warn) 30%, var(--sf2))" stroke="var(--warn)" stroke-width="1.4"/>
          <text x="307" y="65" fill="var(--warn)" font-size="8" font-weight="800" text-anchor="middle" class="mono">OS Call</text>
          <text x="307" y="77" fill="var(--ink-m)" font-size="7.5" font-weight="700" text-anchor="middle" direction="rtl" unicode-bidi="isolate">+1MB</text>

          <!-- Blocked Worker Thread -->
          <rect x="330" y="46" width="405" height="38" rx="4" fill="url(#hatch-thread-wait)" stroke="var(--warn)" stroke-width="1.4"/>
          <text x="532" y="69" fill="var(--warn)" font-size="10" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            مسلك عامل إضافي محبوس بالذاكرة ينتظر الـ I/O (Thread.Sleep / Blocking)
          </text>

          <!-- Finish -->
          <rect x="735" y="46" width="70" height="38" rx="4" fill="color-mix(in srgb, var(--ok) 25%, var(--sf2))" stroke="var(--ok)" stroke-width="1.4"/>
          <text x="770" y="69" fill="var(--ok)" font-size="9" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">إنهاء المسلك</text>
        </g>

        <!-- ════════ 3. TRACK: ASYNC / AWAIT & THREADPOOL ════════ -->
        <g opacity="${showAsync ? "1" : "0.22"}" transform="translate(0, 280)">
          <!-- Label Card -->
          <rect x="18" y="0" width="180" height="98" rx="8" fill="var(--sf2)" stroke="var(--ln)" stroke-width="1.4"/>
          <rect x="26" y="8" width="6" height="82" rx="3" fill="#10b981"/>
          <text x="40" y="28" fill="var(--ink)" font-size="12" font-weight="800" text-anchor="start" direction="rtl" unicode-bidi="isolate">
            3. غير متزامن (async / await)
          </text>
          <text x="40" y="47" fill="var(--ink-m)" font-size="10" font-weight="700" text-anchor="start" direction="rtl" unicode-bidi="isolate">
            آلة الحالة والتحرير التلقائي
          </text>
          <rect x="40" y="58" width="145" height="24" rx="4" fill="color-mix(in srgb, var(--ok) 18%, var(--sf))" stroke="var(--ok)" stroke-width="1"/>
          <text x="112" y="74" fill="var(--ok)" font-size="9.5" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            أقصى كفاءة وإنتاجية (Throughput)
          </text>

          <!-- Swimlane Container -->
          <rect x="210" y="8" width="600" height="82" rx="8" fill="var(--sf)" stroke="var(--ln)" stroke-width="1.2"/>

          <!-- Phase 1: 0.0 - 0.5s Async Call Entry -->
          <rect x="210" y="16" width="75" height="66" rx="6" fill="color-mix(in srgb, var(--acc) 25%, var(--sf2))" stroke="var(--acc)" stroke-width="1.4"/>
          <text x="247" y="45" fill="var(--acc-b)" font-size="9.5" font-weight="800" text-anchor="middle" class="mono">await Call()</text>
          <text x="247" y="62" fill="var(--ink-m)" font-size="8.5" font-weight="700" text-anchor="middle" direction="rtl" unicode-bidi="isolate">تسليم المهمة</text>

          <!-- Phase 2: 0.5 - 3.5s THREAD RELEASED TO POOL (Zero Threads Blocked!) -->
          <rect x="285" y="16" width="450" height="66" rx="6" fill="color-mix(in srgb, var(--ok) 10%, var(--sf2))" stroke="var(--ok)" stroke-width="1.6" stroke-dasharray="6 4"/>
          <rect x="310" y="26" width="400" height="26" rx="6" fill="var(--sf2)" stroke="var(--ok)" stroke-width="1.2"/>
          <circle cx="326" cy="39" r="5" fill="var(--ok)"/>
          <text x="515" y="43" fill="var(--ok)" font-size="11" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            تحرير المسلك فوراً وإعادته للـ ThreadPool (0 مسالك محبوسة!)
          </text>
          <text x="510" y="69" fill="var(--ink-m)" font-size="9.5" font-weight="700" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            كارت الشبكة (IOCP) ينفذ جلب البيانات دون أي استهلاك لمعالج أو مسالك مسجلة
          </text>

          <!-- Phase 3: 3.5 - 4.0s ThreadPool Resumes Execution -->
          <rect x="735" y="16" width="75" height="66" rx="6" fill="color-mix(in srgb, var(--acc) 25%, var(--sf2))" stroke="var(--acc)" stroke-width="1.4"/>
          <text x="772" y="45" fill="var(--acc-b)" font-size="9.5" font-weight="800" text-anchor="middle" class="mono">Resume()</text>
          <text x="772" y="62" fill="var(--ink-m)" font-size="8.5" font-weight="700" text-anchor="middle" direction="rtl" unicode-bidi="isolate">مسلك من الحوض</text>
        </g>

        <!-- ════════ TIME SCANNING NEEDLE ════════ -->
        ${
          isRunning
            ? `
          <g transform="translate(${needleX}, 0)" filter="url(#int-needle-glow)">
            <line x1="0" y1="28" x2="0" y2="395" stroke="#38bdf8" stroke-width="2.6" stroke-linecap="round"/>
            <polygon points="-6,28 6,28 0,38" fill="#38bdf8"/>
            <circle cx="0" cy="210" r="5" fill="#38bdf8"/>
            <rect x="-35" y="5" width="70" height="20" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
            <text x="0" y="19" fill="#ffffff" font-size="10" font-weight="800" text-anchor="middle" class="mono">${(progress * 4.0).toFixed(1)}s</text>
          </g>
        `
            : ""
        }

        <!-- Bottom Timeline Labels -->
        <g fill="var(--ink-m)" font-size="10" font-weight="700" class="mono" text-anchor="middle">
          <text x="210" y="418">0.0s (بدء)</text>
          <text x="360" y="418">1.0s</text>
          <text x="510" y="418">2.0s</text>
          <text x="660" y="418">3.0s</text>
          <text x="810" y="418">4.0s (نهاية)</text>
        </g>
      </svg>
    `;
  }

  /* ───────────────────────────────────────────────────────────
     2. دالة بناء SVG محاكي القفل الميت وشروط كوفمان (Deadlock Simulator)
     ─────────────────────────────────────────────────────────── */
  function buildDeadlockSimulatorSvg(params) {
    const { mode = "deadlock" } = params || {};
    const svgW = 860;
    const svgH = 430;

    const isDeadlock = mode === "deadlock";
    const isOrdered = mode === "ordered";
    const isTimeout = mode === "timeout";

    let centerBadgeFill, centerStroke, centerTitle, centerSub;
    if (isDeadlock) {
      centerBadgeFill = "color-mix(in srgb, var(--err) 16%, var(--sf2))";
      centerStroke = "var(--err)";
      centerTitle = "DEADLOCK! قفل ميت دائري";
      centerSub = "حلقة انتظار دائري: المسلكان متجمدان للأبد!";
    } else if (isOrdered) {
      centerBadgeFill = "color-mix(in srgb, var(--ok) 16%, var(--sf2))";
      centerStroke = "var(--ok)";
      centerTitle = "تنفيذ آمن وخالٍ من الأقفال الميتة";
      centerSub = "ترتيب الأقفال الصارم (A ثم B) كسر الدائرة!";
    } else {
      centerBadgeFill = "color-mix(in srgb, var(--warn) 16%, var(--sf2))";
      centerStroke = "var(--warn)";
      centerTitle = "تراجع آمن بانتهاء المهلة (Timeout)";
      centerSub = "كسر شرط الاحتجاز والانتظار (TryEnter 500ms)";
    }

    return `
      <svg viewBox="0 0 ${svgW} ${svgH}" class="int-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" direction="ltr">
        <defs>
          <filter id="int-glow-deadlock" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="rgba(239, 68, 68, 0.7)"/>
          </filter>
          <filter id="int-glow-ok" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="rgba(16, 185, 129, 0.6)"/>
          </filter>
          <marker id="arr-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#10b981"/>
          </marker>
          <marker id="arr-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#ef4444"/>
          </marker>
          <marker id="arr-cyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#38bdf8"/>
          </marker>
          <marker id="arr-warn" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#f59e0b"/>
          </marker>
          <style>
            text { stroke: none !important; -webkit-font-smoothing: antialiased; }
            .mono { font-family: var(--fm); }
            .flow-red { stroke-dasharray: 6 5; animation: dashRed 1s linear infinite; }
            @keyframes dashRed { to { stroke-dashoffset: -22; } }
            .flow-cyan { stroke-dasharray: 6 5; animation: dashCyan 1.2s linear infinite; }
            @keyframes dashCyan { to { stroke-dashoffset: -22; } }
            .pulse-card { animation: pulseDanger 1.8s ease-in-out infinite alternate; }
            @keyframes pulseDanger { 0% { transform: scale(0.99); } 100% { transform: scale(1.01); } }
          </style>
        </defs>

        <!-- Background Grid Marks -->
        <g stroke="var(--ln)" stroke-width="0.8" opacity="0.25">
          <line x1="430" y1="20" x2="430" y2="410" stroke-dasharray="4 6"/>
          <line x1="20" y1="215" x2="840" y2="215" stroke-dasharray="4 6"/>
        </g>

        <!-- ════════ TOP RESOURCE: LOCK A ════════ -->
        <g transform="translate(325, 20)">
          <rect x="0" y="0" width="210" height="92" rx="10"
                fill="var(--sf2)" stroke="${isDeadlock ? "#10b981" : isOrdered ? "var(--ok)" : "var(--acc)"}" stroke-width="1.8"/>
          <!-- Padlock Icon -->
          <g transform="translate(16, 26)">
            <rect x="0" y="12" width="26" height="22" rx="4" fill="${isDeadlock || isOrdered ? "#10b981" : "var(--acc)"}" opacity="0.2"/>
            <rect x="0" y="12" width="26" height="22" rx="4" stroke="${isDeadlock || isOrdered ? "#10b981" : "var(--acc)"}" stroke-width="1.8"/>
            <path d="M 5 12 V 6 A 8 8 0 0 1 21 6 V 12" fill="none" stroke="${isDeadlock || isOrdered ? "#10b981" : "var(--acc)"}" stroke-width="2.2"/>
            <circle cx="13" cy="23" r="2.5" fill="${isDeadlock || isOrdered ? "#10b981" : "var(--acc)"}"/>
          </g>
          <text x="54" y="34" fill="var(--ink)" font-size="12" font-weight="800" text-anchor="start" direction="rtl" unicode-bidi="isolate">
            المورد: القفل A (Lock A)
          </text>
          <text x="54" y="52" fill="var(--acc-b)" font-size="10.5" font-weight="700" class="mono" text-anchor="start">
            private readonly object _lockA
          </text>
          <rect x="54" y="62" width="142" height="20" rx="4"
                fill="${isDeadlock ? "color-mix(in srgb, var(--ok) 20%, var(--sf))" : "var(--sf)"}"
                stroke="var(--ln)" stroke-width="1"/>
          <text x="125" y="76" fill="${isDeadlock ? "var(--ok)" : "var(--ink-m)"}" font-size="9" font-weight="700" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            ${isDeadlock ? "محتجز بواسطة: Thread 1" : isOrdered ? "حجز تتابعي نظيف" : "متاح / محرر"}
          </text>
        </g>

        <!-- ════════ BOTTOM RESOURCE: LOCK B ════════ -->
        <g transform="translate(325, 318)">
          <rect x="0" y="0" width="210" height="92" rx="10"
                fill="var(--sf2)" stroke="${isDeadlock ? "#10b981" : isOrdered ? "var(--ok)" : "var(--warn)"}" stroke-width="1.8"/>
          <!-- Padlock Icon -->
          <g transform="translate(16, 26)">
            <rect x="0" y="12" width="26" height="22" rx="4" fill="${isDeadlock ? "#10b981" : "var(--acc)"}" opacity="0.2"/>
            <rect x="0" y="12" width="26" height="22" rx="4" stroke="${isDeadlock ? "#10b981" : "var(--acc)"}" stroke-width="1.8"/>
            <path d="M 5 12 V 6 A 8 8 0 0 1 21 6 V 12" fill="none" stroke="${isDeadlock ? "#10b981" : "var(--acc)"}" stroke-width="2.2"/>
            <circle cx="13" cy="23" r="2.5" fill="${isDeadlock ? "#10b981" : "var(--acc)"}"/>
          </g>
          <text x="54" y="34" fill="var(--ink)" font-size="12" font-weight="800" text-anchor="start" direction="rtl" unicode-bidi="isolate">
            المورد: القفل B (Lock B)
          </text>
          <text x="54" y="52" fill="var(--acc-b)" font-size="10.5" font-weight="700" class="mono" text-anchor="start">
            private readonly object _lockB
          </text>
          <rect x="54" y="62" width="142" height="20" rx="4"
                fill="${isDeadlock ? "color-mix(in srgb, var(--ok) 20%, var(--sf))" : "var(--sf)"}"
                stroke="var(--ln)" stroke-width="1"/>
          <text x="125" y="76" fill="${isDeadlock ? "var(--ok)" : "var(--ink-m)"}" font-size="9" font-weight="700" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            ${isDeadlock ? "محتجز بواسطة: Thread 2" : isOrdered ? "حجز تتابعي نظيف" : "أطلقه T2 بالمهلة"}
          </text>
        </g>

        <!-- ════════ LEFT NODE: THREAD 1 ════════ -->
        <g transform="translate(35, 125)">
          <rect x="0" y="0" width="220" height="180" rx="12"
                fill="var(--sf2)" stroke="${isDeadlock ? "var(--err)" : "var(--ok)"}" stroke-width="2"/>
          <rect x="0" y="0" width="220" height="34" rx="12" fill="color-mix(in srgb, var(--acc) 18%, var(--sf2))"/>
          <circle cx="18" cy="17" r="4.5" fill="var(--acc)"/>
          <text x="32" y="22" fill="var(--ink)" font-size="12" font-weight="800" text-anchor="start" direction="rtl" unicode-bidi="isolate">
            المسلك الأول (Thread 1)
          </text>

          <!-- Code Call Stack Box -->
          <g transform="translate(10, 44)" font-size="9.5" class="mono">
            <rect x="0" y="0" width="200" height="88" rx="6" fill="#090b10" stroke="var(--ln)" stroke-width="1"/>
            <text x="10" y="20" fill="#38bdf8" font-weight="800">lock (_lockA) {</text>
            <text x="22" y="38" fill="#10b981" font-weight="800">// 1. حجز A بنجاح (Acquired)</text>
            <text x="22" y="56" fill="${isDeadlock ? "#ef4444" : "#38bdf8"}" font-weight="800">
              lock (_lockB) {
            </text>
            <text x="34" y="74" fill="${isDeadlock ? "#ef4444" : "#10b981"}" font-weight="700">
              ${isDeadlock ? "// 3. ينتظر B (معلق!)" : "// 2. ينفذ ويحرر"}
            </text>
          </g>

          <!-- Status Footer -->
          <rect x="10" y="142" width="200" height="26" rx="5"
                fill="${isDeadlock ? "color-mix(in srgb, var(--err) 20%, var(--sf))" : "color-mix(in srgb, var(--ok) 20%, var(--sf))"}"
                stroke="${isDeadlock ? "var(--err)" : "var(--ok)"}" stroke-width="1.2"/>
          <text x="110" y="159" fill="${isDeadlock ? "var(--err)" : "var(--ok)"}" font-size="9.5" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            ${isDeadlock ? "معلق: ينتظر Lock B للأبد" : "اكتمل بنجاح وحرر الأقفال"}
          </text>
        </g>

        <!-- ════════ RIGHT NODE: THREAD 2 ════════ -->
        <g transform="translate(605, 125)">
          <rect x="0" y="0" width="220" height="180" rx="12"
                fill="var(--sf2)" stroke="${isDeadlock ? "var(--err)" : "var(--ok)"}" stroke-width="2"/>
          <rect x="0" y="0" width="220" height="34" rx="12" fill="color-mix(in srgb, var(--acc) 18%, var(--sf2))"/>
          <circle cx="18" cy="17" r="4.5" fill="var(--acc)"/>
          <text x="32" y="22" fill="var(--ink)" font-size="12" font-weight="800" text-anchor="start" direction="rtl" unicode-bidi="isolate">
            المسلك الثاني (Thread 2)
          </text>

          <!-- Code Call Stack Box -->
          <g transform="translate(10, 44)" font-size="9.5" class="mono">
            <rect x="0" y="0" width="200" height="88" rx="6" fill="#090b10" stroke="var(--ln)" stroke-width="1"/>
            ${
              isDeadlock
                ? `
              <text x="10" y="20" fill="#f59e0b" font-weight="800">lock (_lockB) { // عكس الترتيب!</text>
              <text x="22" y="38" fill="#10b981" font-weight="800">// 2. حجز B بنجاح (Acquired)</text>
              <text x="22" y="56" fill="#ef4444" font-weight="800">lock (_lockA) {</text>
              <text x="34" y="74" fill="#ef4444" font-weight="700">// 4. ينتظر A (معلق!)</text>
            `
                : isOrdered
                  ? `
              <text x="10" y="20" fill="#38bdf8" font-weight="800">lock (_lockA) { // نفس الترتيب</text>
              <text x="22" y="38" fill="#38bdf8" font-weight="800">// ينتظر A نظيفاً دون حجز B</text>
              <text x="22" y="56" fill="#10b981" font-weight="800">lock (_lockB) {</text>
              <text x="34" y="74" fill="#10b981" font-weight="700">// يحجز B بعد انتهاء T1</text>
            `
                  : `
              <text x="10" y="20" fill="#f59e0b" font-weight="800">lock (_lockB) {</text>
              <text x="22" y="38" fill="#38bdf8" font-weight="800">if (Monitor.TryEnter(_lockA, 500))</text>
              <text x="34" y="56" fill="#f59e0b" font-weight="700">else { // مهلة 500ms انتهت!</text>
              <text x="44" y="74" fill="#10b981" font-weight="800">Release(_lockB); // حرر وتراجع</text>
            `
            }
          </g>

          <!-- Status Footer -->
          <rect x="10" y="142" width="200" height="26" rx="5"
                fill="${isDeadlock ? "color-mix(in srgb, var(--err) 20%, var(--sf))" : isOrdered ? "color-mix(in srgb, var(--ok) 20%, var(--sf))" : "color-mix(in srgb, var(--warn) 20%, var(--sf))"}"
                stroke="${isDeadlock ? "var(--err)" : isOrdered ? "var(--ok)" : "var(--warn)"}" stroke-width="1.2"/>
          <text x="110" y="159" fill="${isDeadlock ? "var(--err)" : isOrdered ? "var(--ok)" : "var(--warn)"}" font-size="9.5" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            ${isDeadlock ? "معلق: ينتظر Lock A للأبد" : isOrdered ? "اكتمل بنجاح بعد T1" : "تراجع بمهلة 500ms وحرر B"}
          </text>
        </g>

        <!-- ════════ DIRECTED EDGES & RELATION VECTORS ════════ -->
        ${
          isDeadlock
            ? `
          <!-- T1 Holds Lock A (Solid Green Arrow) -->
          <path d="M 220 125 C 240 85, 280 65, 325 65" fill="none" stroke="#10b981" stroke-width="2.6" marker-end="url(#arr-green)"/>
          <rect x="235" y="65" width="85" height="18" rx="4" fill="var(--sf2)" stroke="#10b981" stroke-width="1"/>
          <text x="277" y="78" fill="#10b981" font-size="8.5" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">T1 يحتجز A</text>

          <!-- T1 Wants Lock B (Dashed Red Flowing Arrow) -->
          <path d="M 220 305 C 240 345, 280 365, 325 365" fill="none" stroke="#ef4444" stroke-width="2.8" class="flow-red" marker-end="url(#arr-red)"/>
          <rect x="235" y="348" width="85" height="18" rx="4" fill="var(--sf2)" stroke="#ef4444" stroke-width="1"/>
          <text x="277" y="361" fill="#ef4444" font-size="8.5" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">T1 يطلب B (معلق)</text>

          <!-- T2 Holds Lock B (Solid Green Arrow) -->
          <path d="M 640 305 C 620 345, 580 365, 535 365" fill="none" stroke="#10b981" stroke-width="2.6" marker-end="url(#arr-green)"/>
          <rect x="540" y="348" width="85" height="18" rx="4" fill="var(--sf2)" stroke="#10b981" stroke-width="1"/>
          <text x="582" y="361" fill="#10b981" font-size="8.5" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">T2 يحتجز B</text>

          <!-- T2 Wants Lock A (Dashed Red Flowing Arrow) -->
          <path d="M 640 125 C 620 85, 580 65, 535 65" fill="none" stroke="#ef4444" stroke-width="2.8" class="flow-red" marker-end="url(#arr-red)"/>
          <rect x="540" y="65" width="85" height="18" rx="4" fill="var(--sf2)" stroke="#ef4444" stroke-width="1"/>
          <text x="582" y="78" fill="#ef4444" font-size="8.5" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">T2 يطلب A (معلق)</text>
        `
            : isOrdered
              ? `
          <!-- Strict Ordering Flow: Both go through Lock A then Lock B in sequence -->
          <path d="M 255 160 C 280 110, 310 80, 325 70" fill="none" stroke="#10b981" stroke-width="2.4" marker-end="url(#arr-green)"/>
          <path d="M 430 112 L 430 148" fill="none" stroke="#10b981" stroke-width="2.4" marker-end="url(#arr-green)"/>
          <path d="M 430 270 L 430 318" fill="none" stroke="#10b981" stroke-width="2.4" marker-end="url(#arr-green)"/>
          <path d="M 605 160 C 580 110, 550 80, 535 70" fill="none" stroke="#38bdf8" stroke-width="2.2" stroke-dasharray="5 4" marker-end="url(#arr-cyan)"/>
        `
              : `
          <!-- Timeout Flow -->
          <path d="M 220 125 C 240 85, 280 65, 325 65" fill="none" stroke="#10b981" stroke-width="2.4" marker-end="url(#arr-green)"/>
          <path d="M 640 305 C 620 345, 580 365, 535 365" fill="none" stroke="#f59e0b" stroke-width="2.4" stroke-dasharray="6 3" marker-end="url(#arr-warn)"/>
          <path d="M 605 180 C 560 140, 500 115, 470 112" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 4"/>
        `
        }

        <!-- ════════ CENTER NOTIFICATION BADGE ════════ -->
        <g transform="translate(295, 150)" ${isDeadlock ? 'filter="url(#int-glow-deadlock)" class="pulse-card"' : isOrdered ? 'filter="url(#int-glow-ok)"' : ""}>
          <rect x="0" y="0" width="270" height="128" rx="14"
                fill="${centerBadgeFill}" stroke="${centerStroke}" stroke-width="2"/>
          <circle cx="135" cy="32" r="16" fill="${centerStroke}" opacity="0.2"/>
          <circle cx="135" cy="32" r="7" fill="${centerStroke}"/>
          <text x="135" y="65" fill="${centerStroke}" font-size="12" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            ${centerTitle}
          </text>
          <text x="135" y="85" fill="var(--ink)" font-size="10" font-weight="700" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            ${centerSub}
          </text>
          <rect x="20" y="96" width="230" height="22" rx="4" fill="var(--sf2)" stroke="var(--ln)" stroke-width="1"/>
          <text x="135" y="111" fill="var(--ink-m)" font-size="8.8" font-weight="700" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            ${isDeadlock ? "الحل الحاسم: فرض ترتيب حجز الأقفال الموحد" : isOrdered ? "شرط الانتظار الدائري مكسور تماماً" : "تم تفادي القفل الميت عبر التراجع الآمن"}
          </text>
        </g>
      </svg>
    `;
  }

  /* ───────────────────────────────────────────────────────────
     3. دالة بناء SVG محاكي أجيال الذاكرة (GC Generations Simulator)
     ─────────────────────────────────────────────────────────── */
  function buildGcGenerationsSvg(params) {
    const {
      gen0 = [],
      gen1 = [],
      gen2 = [],
      gcCounts = { gen0: 0, gen1: 0, gen2: 0 },
    } = params || {};

    const svgW = 860;
    const svgH = 430;

    function renderObjectCard(obj, x, y, w, h) {
      if (!obj) {
        return `
          <g transform="translate(${x}, ${y})">
            <rect x="0" y="0" width="${w}" height="${h}" rx="6"
                  fill="var(--sf2)" stroke="var(--ln)" stroke-width="1" stroke-dasharray="4 3" opacity="0.4"/>
            <text x="${w / 2}" y="${h / 2 + 4}" fill="var(--ink-m)" font-size="9" font-weight="700" text-anchor="middle" direction="rtl" unicode-bidi="isolate">حيز شاغر</text>
          </g>
        `;
      }

      const isAlive = obj.alive !== false;
      const strokeCol = isAlive ? "var(--ok)" : "var(--err)";
      const bgCol = isAlive
        ? "color-mix(in srgb, var(--ok) 14%, var(--sf2))"
        : "color-mix(in srgb, var(--err) 12%, var(--sf2))";

      return `
        <g transform="translate(${x}, ${y})">
          <rect x="0" y="0" width="${w}" height="${h}" rx="6"
                fill="${bgCol}" stroke="${strokeCol}" stroke-width="${isAlive ? "1.5" : "1.2"}"
                ${!isAlive ? 'stroke-dasharray="4 3"' : ""}/>
          <circle cx="10" cy="12" r="3.5" fill="${strokeCol}"/>
          <text x="18" y="15" fill="var(--ink)" font-size="9.5" font-weight="800" text-anchor="start" class="mono">${obj.name}</text>
          <text x="18" y="29" fill="var(--ink-m)" font-size="8.5" font-weight="700" text-anchor="start" class="mono">${obj.size} KB · Gen ${obj.gen}</text>
          <rect x="6" y="36" width="${w - 12}" height="16" rx="3"
                fill="${isAlive ? "color-mix(in srgb, var(--ok) 25%, var(--sf))" : "color-mix(in srgb, var(--err) 25%, var(--sf))"}"/>
          <text x="${w / 2}" y="47" fill="${strokeCol}" font-size="8.5" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            ${isAlive ? "حي (مرجعي)" : "قمامة (ميت)"}
          </text>
        </g>
      `;
    }

    const slotW = 125;
    const slotH = 58;
    const slotGap = 12;

    return `
      <svg viewBox="0 0 ${svgW} ${svgH}" class="int-svg" fill="none"
           stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" direction="ltr">
        <defs>
          <filter id="int-gc-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="rgba(16, 185, 129, 0.45)"/>
          </filter>
          <marker id="arr-root-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#10b981"/>
          </marker>
          <style>
            text { stroke: none !important; -webkit-font-smoothing: antialiased; }
            .mono { font-family: var(--fm); }
            .flow-line { stroke-dasharray: 4 3; animation: flowDash 1.2s linear infinite; }
            @keyframes flowDash { to { stroke-dashoffset: -14; } }
          </style>
        </defs>

        <!-- ════════ LEFT COLUMN: GC ROOTS PANEL ════════ -->
        <g transform="translate(18, 20)">
          <rect x="0" y="0" width="195" height="390" rx="10"
                fill="var(--sf2)" stroke="var(--ln)" stroke-width="1.4"/>
          <rect x="0" y="0" width="195" height="36" rx="10" fill="color-mix(in srgb, var(--acc) 18%, var(--sf2))"/>
          <circle cx="16" cy="18" r="4.5" fill="var(--acc)"/>
          <text x="28" y="23" fill="var(--ink)" font-size="11.5" font-weight="800" text-anchor="start" direction="rtl" unicode-bidi="isolate">
            جذور الذاكرة (GC Roots)
          </text>

          <text x="14" y="55" fill="var(--ink-m)" font-size="9" font-weight="700" text-anchor="start" direction="rtl" unicode-bidi="isolate">
            المراجع النشطة التي تحافظ على بقاء الكائنات:
          </text>

          <!-- Root 1: Stack Variable -->
          <g transform="translate(10, 70)">
            <rect x="0" y="0" width="175" height="48" rx="6" fill="var(--sf)" stroke="var(--ok)" stroke-width="1.2"/>
            <circle cx="12" cy="16" r="3.5" fill="var(--ok)"/>
            <text x="22" y="19" fill="var(--ink)" font-size="10" font-weight="800" class="mono">Stack: currentUser</text>
            <text x="22" y="36" fill="var(--ok)" font-size="8.5" font-weight="700" direction="rtl" unicode-bidi="isolate">يشير لكائنات حية في Gen 0</text>
          </g>

          <!-- Root 2: Active Order DTO -->
          <g transform="translate(10, 130)">
            <rect x="0" y="0" width="175" height="48" rx="6" fill="var(--sf)" stroke="var(--ok)" stroke-width="1.2"/>
            <circle cx="12" cy="16" r="3.5" fill="var(--ok)"/>
            <text x="22" y="19" fill="var(--ink)" font-size="10" font-weight="800" class="mono">Stack: cartOrder</text>
            <text x="22" y="36" fill="var(--ok)" font-size="8.5" font-weight="700" direction="rtl" unicode-bidi="isolate">ناجٍ يرتقي إلى Gen 1</text>
          </g>

          <!-- Root 3: CPU Register -->
          <g transform="translate(10, 190)">
            <rect x="0" y="0" width="175" height="48" rx="6" fill="var(--sf)" stroke="var(--acc)" stroke-width="1.2"/>
            <circle cx="12" cy="16" r="3.5" fill="var(--acc)"/>
            <text x="22" y="19" fill="var(--ink)" font-size="10" font-weight="800" class="mono">CPU Reg: RDX/RCX</text>
            <text x="22" y="36" fill="var(--acc-b)" font-size="8.5" font-weight="700" direction="rtl" unicode-bidi="isolate">مؤشر معالج فائق السرعة</text>
          </g>

          <!-- Root 4: Static Reference -->
          <g transform="translate(10, 250)">
            <rect x="0" y="0" width="175" height="52" rx="6" fill="var(--sf)" stroke="#a78bfa" stroke-width="1.2"/>
            <circle cx="12" cy="16" r="3.5" fill="#a78bfa"/>
            <text x="22" y="19" fill="var(--ink)" font-size="10" font-weight="800" class="mono">Static: AppConfig</text>
            <text x="22" y="36" fill="#a78bfa" font-size="8.5" font-weight="700" direction="rtl" unicode-bidi="isolate">كائن دائم في Gen 2</text>
          </g>

          <!-- Root Explanation Chip -->
          <g transform="translate(10, 314)">
            <rect x="0" y="0" width="175" height="66" rx="6" fill="color-mix(in srgb, var(--acc) 10%, var(--sf))" stroke="var(--ln)" stroke-width="1"/>
            <text x="88" y="20" fill="var(--acc-b)" font-size="9" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">خوارزمية Mark &amp; Sweep:</text>
            <text x="88" y="38" fill="var(--ink-m)" font-size="8" font-weight="700" text-anchor="middle" direction="rtl" unicode-bidi="isolate">أي كائن ينقطع عنه مسار</text>
            <text x="88" y="52" fill="var(--err)" font-size="8.5" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">الجذور يُعد ميتاً ويُكنس فوراً!</text>
          </g>
        </g>

        <!-- ════════ RIGHT AREA: THREE GENERATION HEAPS ════════ -->

        <!-- ── 1. GENERATION 0 (EPHEMERAL / SHORT-LIVED) ── -->
        <g transform="translate(225, 20)">
          <rect x="0" y="0" width="615" height="118" rx="10"
                fill="var(--sf2)" stroke="var(--ln)" stroke-width="1.4"/>
          <!-- Header -->
          <rect x="0" y="0" width="615" height="32" rx="10" fill="color-mix(in srgb, var(--acc) 12%, var(--sf2))"/>
          <text x="14" y="21" fill="var(--ink)" font-size="11.5" font-weight="800" text-anchor="start" direction="rtl" unicode-bidi="isolate">
            الجيل 0 (Gen 0) · كائنات حديثة وقصيرة الأجل (Short-Lived)
          </text>
          <rect x="360" y="6" width="110" height="20" rx="4" fill="var(--sf)" stroke="var(--ln)" stroke-width="1"/>
          <text x="415" y="19" fill="var(--acc-b)" font-size="8.8" font-weight="700" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            تخصيص: ${gen0.length}/4 كائنات
          </text>
          <rect x="480" y="6" width="125" height="20" rx="4" fill="color-mix(in srgb, var(--ok) 18%, var(--sf))" stroke="var(--ok)" stroke-width="1"/>
          <text x="542" y="19" fill="var(--ok)" font-size="8.8" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            فحص فائق السرعة (&lt;1ms)
          </text>

          <!-- 4 Object Slots -->
          ${[0, 1, 2, 3].map((i) => renderObjectCard(gen0[i], 12 + i * (slotW + slotGap), 44, slotW, slotH)).join("")}
        </g>

        <!-- Transition Arrow Gen 0 -> Gen 1 (Promotion) -->
        <g transform="translate(520, 142)">
          <line x1="0" y1="0" x2="0" y2="12" stroke="var(--ok)" stroke-width="2" marker-end="url(#arr-root-green)"/>
          <text x="10" y="9" fill="var(--ok)" font-size="8.5" font-weight="800" text-anchor="start" direction="rtl" unicode-bidi="isolate">ترقية الناجين (Promotion)</text>
        </g>

        <!-- ── 2. GENERATION 1 (BUFFER ZONE) ── -->
        <g transform="translate(225, 156)">
          <rect x="0" y="0" width="615" height="118" rx="10"
                fill="var(--sf2)" stroke="var(--ln)" stroke-width="1.4"/>
          <!-- Header -->
          <rect x="0" y="0" width="615" height="32" rx="10" fill="color-mix(in srgb, var(--ok) 12%, var(--sf2))"/>
          <text x="14" y="21" fill="var(--ink)" font-size="11.5" font-weight="800" text-anchor="start" direction="rtl" unicode-bidi="isolate">
            الجيل 1 (Gen 1) · منطقة وسيطة للناجين (Buffer Zone)
          </text>
          <rect x="360" y="6" width="110" height="20" rx="4" fill="var(--sf)" stroke="var(--ln)" stroke-width="1"/>
          <text x="415" y="19" fill="var(--ok)" font-size="8.8" font-weight="700" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            حجم: ${gen1.length}/4 كائنات
          </text>
          <rect x="480" y="6" width="125" height="20" rx="4" fill="color-mix(in srgb, var(--warn) 18%, var(--sf))" stroke="var(--warn)" stroke-width="1"/>
          <text x="542" y="19" fill="var(--warn)" font-size="8.8" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            فحص متوسط (~5ms)
          </text>

          <!-- 4 Object Slots -->
          ${[0, 1, 2, 3].map((i) => renderObjectCard(gen1[i], 12 + i * (slotW + slotGap), 44, slotW, slotH)).join("")}
        </g>

        <!-- Transition Arrow Gen 1 -> Gen 2 (Promotion) -->
        <g transform="translate(520, 278)">
          <line x1="0" y1="0" x2="0" y2="12" stroke="var(--ok)" stroke-width="2" marker-end="url(#arr-root-green)"/>
          <text x="10" y="9" fill="var(--ok)" font-size="8.5" font-weight="800" text-anchor="start" direction="rtl" unicode-bidi="isolate">ترقية إلى المعمر (Gen 2)</text>
        </g>

        <!-- ── 3. GENERATION 2 (LONG-LIVED & LOH) ── -->
        <g transform="translate(225, 292)">
          <rect x="0" y="0" width="615" height="118" rx="10"
                fill="var(--sf2)" stroke="var(--ln)" stroke-width="1.4"/>
          <!-- Header -->
          <rect x="0" y="0" width="615" height="32" rx="10" fill="color-mix(in srgb, #a78bfa 15%, var(--sf2))"/>
          <text x="14" y="21" fill="var(--ink)" font-size="11.5" font-weight="800" text-anchor="start" direction="rtl" unicode-bidi="isolate">
            الجيل 2 (Gen 2 &amp; LOH) · كائنات طويلة البقاء ومعمرة (Long-Lived &amp; Statics)
          </text>
          <rect x="360" y="6" width="110" height="20" rx="4" fill="var(--sf)" stroke="var(--ln)" stroke-width="1"/>
          <text x="415" y="19" fill="#a78bfa" font-size="8.8" font-weight="700" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            حجم: ${gen2.length}/4 كائنات
          </text>
          <rect x="480" y="6" width="125" height="20" rx="4" fill="color-mix(in srgb, var(--err) 18%, var(--sf))" stroke="var(--err)" stroke-width="1"/>
          <text x="542" y="19" fill="var(--err)" font-size="8.8" font-weight="800" text-anchor="middle" direction="rtl" unicode-bidi="isolate">
            تنظيف مكلف (Full GC ~45ms)
          </text>

          <!-- 4 Object Slots -->
          ${[0, 1, 2, 3].map((i) => renderObjectCard(gen2[i], 12 + i * (slotW + slotGap), 44, slotW, slotH)).join("")}
        </g>

        <!-- Connector Arrows from GC Roots to Live Objects -->
        <g opacity="0.75">
          ${
            gen0[0] && gen0[0].alive
              ? `
            <path d="M 185 115 C 205 115, 220 85, 235 85" fill="none" stroke="#10b981" stroke-width="1.8" class="flow-line" marker-end="url(#arr-root-green)"/>
          `
              : ""
          }
          ${
            gen1[0] && gen1[0].alive
              ? `
            <path d="M 185 175 C 210 175, 220 200, 235 200" fill="none" stroke="#10b981" stroke-width="1.8" class="flow-line" marker-end="url(#arr-root-green)"/>
          `
              : ""
          }
          ${
            gen2[0] && gen2[0].alive
              ? `
            <path d="M 185 295 C 210 295, 220 335, 235 335" fill="none" stroke="#a78bfa" stroke-width="1.8" class="flow-line" marker-end="url(#arr-root-green)"/>
          `
              : ""
          }
        </g>
      </svg>
    `;
  }

  /* ───────────────────────────────────────────────────────────
     كائن النموذج الثالث: استوديو التزامن ومحاكي القفل الميت وأجيال الذاكرة
     ─────────────────────────────────────────────────────────── */
  const CONCURRENCY_MEMORY_STUDIO_MODEL = {
    id: "concurrency-memory-studio",
    module: "L7",
    module_title: "الوحدة 7 · التزامن والذاكرة (Async & Memory)",
    ref: "L7-S006",
    title_ar: "استوديو التزامن ومحاكي القفل الميت وأجيال الذاكرة (CLR GC)",
    title_en: "Concurrency Timeline, Deadlock Simulator & Memory Generations",
    desc_ar:
      "محاكي بصري تفاعلي للمخطط الزمني للبرمجة المتزامنة وغير المتزامنة (async/await)، وتجربة القفل الميت (Deadlock) فيزيائياً مع شروط كوفمان، ومحاكاة دورة حياة الكائنات وترقيتها عبر أجيال مجمع النفايات الثلاثة (Gen 0, Gen 1, Gen 2).",
    badge: "التزامن والذاكرة · Async & GC Studio",
    tip:
      "وقفة امتحانية مؤكدة: تركز د. بيداء على: 1. async/await لا تنشئ بالضرورة Thread جديداً بل تحرر Thread الحالي لخدمة طلبات أخرى. 2. القفل الميت يتطلب شروط كوفمان الأربعة وأهم حل هو ترتيب حجز الموارد (Resource Ordering). 3. كائنات Gen 0 تنظف فوراً، والناجون يرتقون إلى Gen 1 ثم Gen 2 (الكائنات طويلة البقاء).",

    render: function (card, utils) {
      const { el, clear, svgNode, iconSvg, slideRefAttrs, ICONS } = utils;

      let activeStudioTab = "timeline";

      // Tab 1 state: Timeline
      let timelineMode = "all";
      let isTimelineRunning = false;
      let timelineProgress = 0.5;
      let timelineTimer = null;

      // Tab 2 state: Deadlock
      let deadlockMode = "deadlock";

      // Tab 3 state: GC
      const initialGen0 = [
        { id: 1, name: "tempBuffer", gen: 0, size: 16, alive: false },
        { id: 2, name: "currentUser", gen: 0, size: 32, alive: true },
        { id: 3, name: "jsonResponse", gen: 0, size: 48, alive: false },
      ];
      const initialGen1 = [
        { id: 4, name: "cartSession", gen: 1, size: 64, alive: true },
      ];
      const initialGen2 = [
        { id: 5, name: "AppSingleton", gen: 2, size: 48, alive: true },
        { id: 6, name: "SqlDbPool", gen: 2, size: 128, alive: true },
      ];

      let gen0Objects = JSON.parse(JSON.stringify(initialGen0));
      let gen1Objects = JSON.parse(JSON.stringify(initialGen1));
      let gen2Objects = JSON.parse(JSON.stringify(initialGen2));
      let gcStats = { gen0: 0, gen1: 0, gen2: 0 };
      let heapUsedKb = 336;
      let lastPauseMs = 0.4;
      let lastGcAction = "initial";

      const tabsBar = el("div", { class: "int-tabs-bar" });
      const stageWrap = el("div", { class: "int-stage-wrap" });

      function renderActiveTab() {
        clear(stageWrap);

        // ═══════════════════════════════════════════════════════════
        // TAB 1: TIMELINE (Sync vs Thread vs Async)
        // ═══════════════════════════════════════════════════════════
        if (activeStudioTab === "timeline") {
          const pane = el("div", { class: "int-pane" });

          pane.appendChild(
            el(
              "div",
              { class: "int-tip" },
              el("span", { class: "wt" }, "السر من المخطط الزمني (The Timeline Metaphor):"),
              "في النمط المتزامن يتجمد مسلك الواجهة (UI Thread) طوال فترة انتظار عمليات الشبكة أو القرص دون عمل مفيد. أما النمط متعدد المسالك الكلاسيكي فيحجز مسلكاً كاملاً من نظام التشغيل (1MB مكدس) لكل طلب مما يخنق السيرفر عند تزايد المستخدمين. بينما في النمط الحديث (async/await)، يتحرر المسلك فوراً ويعود لحوض المسالك (ThreadPool) لخدمة طلبات أخرى، بينما تنتظر أجهزة الإدخال/الإخراج (IOCP) اكتمال العملية دون استهلاك أي مسلك معالج!",
            ),
          );

          // Simulator Controls
          const controls = el("div", { class: "int-sim-controls" });
          controls.appendChild(
            el(
              "div",
              { class: "int-sim-label" },
              svgNode(ICONS.interactive),
              "اختر نمط العرض وشغّل محاكاة الزمن لمشاهدة استجابة المسالك:",
            ),
          );

          const pills = el("div", { class: "int-sim-pills" });
          const modes = [
            { id: "all", label: "المقارنة الشاملة (All Modes)" },
            { id: "sync", label: "النمط المتزامن (Sync Blocking)" },
            { id: "thread", label: "تعدد المسالك (Dedicated Threads)" },
            { id: "async", label: "غير المتزامن (async / await)" },
          ];
          modes.forEach((m) => {
            pills.appendChild(
              el(
                "button",
                {
                  class: "int-toggle-btn" + (timelineMode === m.id ? " on" : ""),
                  onclick: () => {
                    timelineMode = m.id;
                    renderActiveTab();
                  },
                },
                timelineMode === m.id ? iconSvg("check") : iconSvg("target"),
                m.label,
              ),
            );
          });
          controls.appendChild(pills);

          const actions = el("div", { class: "int-sim-actions" });
          actions.appendChild(
            el(
              "button",
              {
                class: "int-action-btn",
                style: isTimelineRunning
                  ? "background: var(--warn); color: var(--bg); border-color: var(--warn); font-weight: 700; padding: 6px 16px;"
                  : "background: var(--acc); color: var(--bg); border-color: var(--acc); font-weight: 700; padding: 6px 16px;",
                onclick: () => {
                  if (isTimelineRunning) {
                    clearInterval(timelineTimer);
                    isTimelineRunning = false;
                    renderActiveTab();
                  } else {
                    isTimelineRunning = true;
                    timelineProgress = 0.0;
                    renderActiveTab();
                    timelineTimer = setInterval(() => {
                      timelineProgress += 0.04;
                      if (timelineProgress >= 1.0) {
                        timelineProgress = 1.0;
                        clearInterval(timelineTimer);
                        isTimelineRunning = false;
                      }
                      renderActiveTab();
                    }, 120);
                  }
                },
              },
              iconSvg(isTimelineRunning ? "clock" : "interactive"),
              isTimelineRunning ? "إيقاف المحاكاة مؤقتاً" : "تشغيل محاكاة الزمن (0s -> 4s)",
            ),
          );
          actions.appendChild(
            el(
              "button",
              {
                class: "int-action-btn",
                onclick: () => {
                  if (timelineTimer) clearInterval(timelineTimer);
                  isTimelineRunning = false;
                  timelineProgress = 0.5;
                  renderActiveTab();
                },
              },
              iconSvg("back"),
              "إعادة ضبط المخطط (Reset)",
            ),
          );
          controls.appendChild(actions);
          pane.appendChild(controls);

          // SVG Timeline
          const svgBox = el("div", { class: "int-svg-wrap" });
          svgBox.innerHTML = buildConcurrencyTimelineSvg({
            mode: timelineMode,
            isRunning: isTimelineRunning,
            progress: timelineProgress,
          });
          pane.appendChild(svgBox);

          // Real-time Metrics Row
          const currentSec = (timelineProgress * 4.0).toFixed(1);
          let uiStatusText = "متجاوبة بالكامل";
          let uiStatusColor = "var(--ok)";
          let threadConsText = "0 مسالك أثناء الانتظار";

          if (
            timelineMode === "sync" ||
            (timelineMode === "all" && timelineProgress > 0.12 && timelineProgress < 0.88)
          ) {
            uiStatusText = "متجمدة تماماً 0% (UI Freeze)";
            uiStatusColor = "var(--err)";
            threadConsText = "1 مسلك معلق ومجمد";
          }

          pane.appendChild(
            el(
              "div",
              { class: "int-metrics-row" },
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "الزمن المنقضي بالمحاكاة"),
                el("span", { class: "int-metric-val", style: "color: var(--acc-b);" }, `${currentSec} ثانية`),
                el("span", { class: "int-metric-desc" }, "موضع مؤشر الفحص الزمني الحالي"),
              ),
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "استجابة واجهة المستخدم"),
                el("span", { class: "int-metric-val", style: `color: ${uiStatusColor};` }, uiStatusText),
                el("span", { class: "int-metric-desc" }, "هل تتجاوب الشاشة مع نقرات المستخدم؟"),
              ),
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "استهلاك المسالك أثناء انتظار I/O"),
                el("span", { class: "int-metric-val" }, threadConsText),
                el("span", { class: "int-metric-desc" }, "في async/await يتحرر المسلك للـ ThreadPool"),
              ),
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "القاعدة المعمارية (L7-S006)"),
                el("span", { class: "int-metric-val", style: "color: var(--ok);" }, "Non-blocking Scalability"),
                el("span", { class: "int-metric-desc" }, "async/await تحرر المسلك ولا تنشئ مسلكاً جديداً للانتظار"),
              ),
            ),
          );

          // Code block
          pane.appendChild(
            el(
              "div",
              { class: "int-code-block" },
              `// كود المقارنة من سلايدات د. بيداء لعلع (L7-S003 & L7-S007):

// 1. الكود المتزامن المجمد (Synchronous - Blocks Thread for 3 seconds):
public string DownloadDataSync() {
    using var client = new WebClient();
    return client.DownloadString("https://api.example.com"); // المسلك يتجمد 3 ثوانٍ!
}

// 2. الكود غير المتزامن المحرر (Asynchronous - Releases Thread to ThreadPool):
public async Task<string> DownloadDataAsync() {
    using var client = new HttpClient();
    // عند الوصول لـ await: يتحرر المسلك الحالي فوراً لخدمة زوار آخرين!
    // وعند وصول الرد من كارت الشبكة، يتولى الـ ThreadPool إكمال الكود.
    return await client.GetStringAsync("https://api.example.com");
}`,
            ),
          );

          // Jump button
          pane.appendChild(
            el(
              "div",
              { style: "margin-top: 14px;" },
              el(
                "a",
                { class: "int-slide-ref-btn", ...slideRefAttrs("L7-S006") },
                iconSvg("slides"),
                "انتقل إلى سلايد الشرح في المنهج (L7-S006 · لماذا نحتاج البرمجة غير المتزامنة؟)",
              ),
            ),
          );

          stageWrap.appendChild(pane);
        }

        // ═══════════════════════════════════════════════════════════
        // TAB 2: DEADLOCK SIMULATOR & COFFMAN CONDITIONS
        // ═══════════════════════════════════════════════════════════
        else if (activeStudioTab === "deadlock") {
          const pane = el("div", { class: "int-pane" });

          pane.appendChild(
            el(
              "div",
              { class: "int-tip" },
              el("span", { class: "wt" }, "السر المعماري للقفل الميت (Deadlock Architecture):"),
              "القفل الميت (Deadlock) لا يحدث صدفة، بل يتطلب فيزيائياً اجتماع شروط كوفمان الأربعة (Coffman Conditions) معاً: الاستبعاد المتبادل، الاحتجاز والانتظار، عدم انتزاع المورد، والانتظار الدائري. إذا كسرت شرطاً واحداً فقط، يستحيل أن يحدث القفل الميت! والحل المعتمد لدى د. بيداء لعلع هو فرض ترتيب حجز عالمي موحد للأقفال (Strict Lock Ordering): كافة المسالك تطلب Lock A أولاً ثم Lock B دائماً.",
            ),
          );

          // Simulator Controls
          const controls = el("div", { class: "int-sim-controls" });
          controls.appendChild(
            el(
              "div",
              { class: "int-sim-label" },
              svgNode(ICONS.interactive),
              "جرّب سيناريو القفل الميت ثم فعّل الحلول المعمارية لمشاهدة كسر الحلقة الدائرية:",
            ),
          );

          const pills = el("div", { class: "int-sim-pills" });
          const scenarios = [
            { id: "deadlock", label: "إحداث القفل الميت (Deadlock Scenario)", icon: "cross" },
            { id: "ordered", label: "الحل: ترتيب حجز الأقفال (Strict Lock Ordering)", icon: "check" },
            { id: "timeout", label: "حل المهلة الزمنية (Monitor.TryEnter Timeout)", icon: "clock" },
          ];
          scenarios.forEach((s) => {
            pills.appendChild(
              el(
                "button",
                {
                  class: "int-toggle-btn" + (deadlockMode === s.id ? " on" : ""),
                  onclick: () => {
                    deadlockMode = s.id;
                    renderActiveTab();
                  },
                },
                iconSvg(s.icon),
                s.label,
              ),
            );
          });
          controls.appendChild(pills);
          pane.appendChild(controls);

          // SVG Diagram
          const svgBox = el("div", { class: "int-svg-wrap" });
          svgBox.innerHTML = buildDeadlockSimulatorSvg({ mode: deadlockMode });
          pane.appendChild(svgBox);

          // Coffman Checklist
          const isDeadlock = deadlockMode === "deadlock";

          pane.appendChild(
            el(
              "div",
              { class: "int-sim-controls", style: "margin-top: 14px; margin-bottom: 18px;" },
              el(
                "div",
                { class: "int-sim-label", style: "color: var(--ink);" },
                iconSvg("terminal"),
                "لوحة فحص شروط كوفمان الأربعة (Coffman Conditions Checklist):",
              ),
              el(
                "div",
                { class: "int-metrics-row", style: "margin-bottom: 0;" },
                el(
                  "div",
                  { class: "int-metric-chip" },
                  el("span", { class: "int-metric-title" }, "1. الاستبعاد المتبادل (Mutual Exclusion)"),
                  el("span", { class: "int-metric-val", style: "color: var(--ok);" }, "متحقق دائماً"),
                  el("span", { class: "int-metric-desc" }, "القفل بطبيعته لا يدخله إلا مسلك واحد"),
                ),
                el(
                  "div",
                  { class: "int-metric-chip" },
                  el("span", { class: "int-metric-title" }, "2. الاحتجاز والانتظار (Hold and Wait)"),
                  el(
                    "span",
                    { class: "int-metric-val", style: isDeadlock ? "color: var(--err);" : "color: var(--ok);" },
                    isDeadlock ? "متحقق وقاتل" : "مكسور (Broken)",
                  ),
                  el(
                    "span",
                    { class: "int-metric-desc" },
                    isDeadlock ? "T1 يحتجز A وينتظر B، و T2 يحتجز B وينتظر A" : "T2 لا يحتجز B أثناء انتظار A",
                  ),
                ),
                el(
                  "div",
                  { class: "int-metric-chip" },
                  el("span", { class: "int-metric-title" }, "3. عدم انتزاع المورد (No Preemption)"),
                  el("span", { class: "int-metric-val", style: "color: var(--ok);" }, "متحقق"),
                  el("span", { class: "int-metric-desc" }, "نظام التشغيل لا ينتزع القفل قسراً من المسلك"),
                ),
                el(
                  "div",
                  { class: "int-metric-chip" },
                  el(
                    "span",
                    { class: "int-metric-title" },
                    "4. الانتظار الدائري (Circular Wait)",
                  ),
                  el(
                    "span",
                    { class: "int-metric-val", style: isDeadlock ? "color: var(--err);" : "color: var(--ok);" },
                    isDeadlock ? "متحقق (دائرة مغلقة)" : "مكسور تماماً (Broken)",
                  ),
                  el(
                    "span",
                    { class: "int-metric-desc" },
                    isDeadlock ? "حلقة دائرية مغلقة بين المسلكين" : "الترتيب الموحد قضى على أي حلقة دائرية",
                  ),
                ),
              ),
            ),
          );

          // Code Block
          pane.appendChild(
            el(
              "div",
              { class: "int-code-block" },
              isDeadlock
                ? `// كود الكارثة: انعكاس ترتيب الأقفال (Lock Order Inversion) مسبباً للقفل الميت (L7-S028):
private readonly object _lockA = new object();
private readonly object _lockB = new object();

// المسلك الأول (Thread 1): يطلب A ثم B
void Thread1Method() {
    lock (_lockA) {
        Thread.Sleep(100); // محاكاة عمل
        lock (_lockB) { /* معلق للأبد بانتظار B! */ }
    }
}

// المسلك الثاني (Thread 2): يطلب B ثم A (عكس الترتيب كارثي!)
void Thread2Method() {
    lock (_lockB) {
        Thread.Sleep(100); // محاكاة عمل
        lock (_lockA) { /* معلق للأبد بانتظار A! */ }
    }
}`
                : `// الحل المعماري المعتمد: فرض ترتيب موحد للأقفال في كامل النظام (L7-S029):
private readonly object _lockA = new object();
private readonly object _lockB = new object();

// المسلك الأول والمسلك الثاني يلتزمان بنفس الترتيب الصارم: دائماً Lock A ثم Lock B:
void SafeThread1() {
    lock (_lockA) {
        lock (_lockB) {
            // تنفيذ سليم 100% دون أي خطر قفل ميت!
        }
    }
}

void SafeThread2() {
    lock (_lockA) { // ينتظر A بأمان دون احتجاز أي مورد آخر!
        lock (_lockB) {
            // ينفذ بعد اكتمال المسلك الأول مباشرة
        }
    }
}`,
            ),
          );

          // Jump button
          pane.appendChild(
            el(
              "div",
              { style: "margin-top: 14px;" },
              el(
                "a",
                { class: "int-slide-ref-btn", ...slideRefAttrs("L7-S027") },
                iconSvg("slides"),
                "انتقل إلى سلايد الشرح في المنهج (L7-S027 · حالة الجمود المميت Deadlock)",
              ),
            ),
          );

          stageWrap.appendChild(pane);
        }

        // ═══════════════════════════════════════════════════════════
        // TAB 3: GC GENERATIONS SIMULATOR (Gen 0, Gen 1, Gen 2)
        // ═══════════════════════════════════════════════════════════
        else if (activeStudioTab === "gc") {
          const pane = el("div", { class: "int-pane" });

          pane.appendChild(
            el(
              "div",
              { class: "int-tip" },
              el("span", { class: "wt" }, "السر المعماري لأجيال جامع القمامة (Generational GC):"),
              "يقسم الـ CLR ذاكرة الركام إلى 3 أجيال بناءً على الفرضية الإحصائية: الكائنات الحديثة تموت سريعاً (مثل متغيرات الدوال)، بينما الكائنات التي تنجو من عدة دورات من المرجح أن تعيش طويلاً. تنظيف الجيل 0 يتم في أجزاء من المللي ثانية دون أن يشعر المستخدم، بينما تنظيف الجيل 2 (Full GC) مكلف جداً ويتطلب إيقاف التطبيق (Stop-the-World). كل كائن حي ينجو من فحص جيل يرتقي للجيل التالي!",
            ),
          );

          // Controls
          const controls = el("div", { class: "int-sim-controls" });
          controls.appendChild(
            el(
              "div",
              { class: "int-sim-label" },
              svgNode(ICONS.interactive),
              "تحكم بدورة حياة الكائنات بالذاكرة وشغّل جامع القمامة لمشاهدة الترقية والكنس:",
            ),
          );

          const actions = el("div", { class: "int-sim-actions" });

          // Allocate Button
          actions.appendChild(
            el(
              "button",
              {
                class: "int-action-btn",
                style: "background: var(--acc); color: var(--bg); border-color: var(--acc); font-weight: 700; padding: 6px 14px;",
                onclick: () => {
                  if (gen0Objects.length >= 4) {
                    gen0Objects = [
                      { id: Date.now(), name: "newOrderDto", gen: 0, size: 24, alive: true },
                      { id: Date.now() + 1, name: "tempBuffer", gen: 0, size: 16, alive: false },
                    ];
                  } else {
                    gen0Objects.push(
                      { id: Date.now(), name: "userProfile", gen: 0, size: 32, alive: true },
                      { id: Date.now() + 1, name: "tempParseStr", gen: 0, size: 16, alive: false },
                    );
                  }
                  lastGcAction = "allocate";
                  heapUsedKb = 160 + gen0Objects.length * 30 + gen1Objects.length * 50 + gen2Objects.length * 80;
                  renderActiveTab();
                },
              },
              iconSvg("interactive"),
              "تخصيص كائنات جديدة في Gen 0 (new Objects)",
            ),
          );

          // Collect Gen 0
          actions.appendChild(
            el(
              "button",
              {
                class: "int-action-btn",
                style: "background: var(--sf2); color: var(--ok); border-color: var(--ok); font-weight: 700; padding: 6px 14px;",
                onclick: () => {
                  const survivors = gen0Objects.filter((o) => o.alive);
                  survivors.forEach((s) => (s.gen = 1));
                  gen1Objects = gen1Objects.concat(survivors).slice(-4);
                  gen0Objects = [];
                  gcStats.gen0++;
                  lastPauseMs = (Math.random() * 0.5 + 0.3).toFixed(1);
                  lastGcAction = "collect0";
                  heapUsedKb = 120 + gen1Objects.length * 50 + gen2Objects.length * 80;
                  renderActiveTab();
                },
              },
              iconSvg("check"),
              "تشغيل تنظيف Gen 0 (كنس وترقية الناجين)",
            ),
          );

          // Collect Gen 1
          actions.appendChild(
            el(
              "button",
              {
                class: "int-action-btn",
                style: "background: var(--sf2); color: var(--warn); border-color: var(--warn); font-weight: 700; padding: 6px 14px;",
                onclick: () => {
                  const gen1Survivors = gen1Objects.filter((o) => o.alive);
                  gen1Survivors.forEach((s) => (s.gen = 2));
                  gen2Objects = gen2Objects.concat(gen1Survivors).slice(-4);
                  gen1Objects = [];
                  const gen0Survivors = gen0Objects.filter((o) => o.alive);
                  gen0Survivors.forEach((s) => (s.gen = 1));
                  gen1Objects = gen0Survivors;
                  gen0Objects = [];
                  gcStats.gen0++;
                  gcStats.gen1++;
                  lastPauseMs = (Math.random() * 2.5 + 3.5).toFixed(1);
                  lastGcAction = "collect1";
                  heapUsedKb = 100 + gen2Objects.length * 80;
                  renderActiveTab();
                },
              },
              iconSvg("clock"),
              "تنظيف Gen 1 (ترقية إلى Gen 2)",
            ),
          );

          // Full GC
          actions.appendChild(
            el(
              "button",
              {
                class: "int-action-btn",
                style: "background: var(--sf2); color: var(--err); border-color: var(--err); font-weight: 700; padding: 6px 14px;",
                onclick: () => {
                  gen0Objects = [];
                  gen1Objects = [];
                  gen2Objects = gen2Objects.filter((o) => o.alive);
                  gcStats.gen0++;
                  gcStats.gen1++;
                  gcStats.gen2++;
                  lastPauseMs = (Math.random() * 15 + 35).toFixed(1);
                  lastGcAction = "fullgc";
                  heapUsedKb = 80 + gen2Objects.length * 60;
                  renderActiveTab();
                },
              },
              iconSvg("cross"),
              "تنظيف شامل Full GC (Gen 0+1+2 مكلف)",
            ),
          );

          // Reset
          actions.appendChild(
            el(
              "button",
              {
                class: "int-action-btn",
                onclick: () => {
                  gen0Objects = JSON.parse(JSON.stringify(initialGen0));
                  gen1Objects = JSON.parse(JSON.stringify(initialGen1));
                  gen2Objects = JSON.parse(JSON.stringify(initialGen2));
                  gcStats = { gen0: 0, gen1: 0, gen2: 0 };
                  heapUsedKb = 336;
                  lastPauseMs = 0.4;
                  lastGcAction = "reset";
                  renderActiveTab();
                },
              },
              iconSvg("back"),
              "إعادة ضبط الذاكرة (Reset)",
            ),
          );

          controls.appendChild(actions);
          pane.appendChild(controls);

          // SVG Diagram
          const svgBox = el("div", { class: "int-svg-wrap" });
          svgBox.innerHTML = buildGcGenerationsSvg({
            gen0: gen0Objects,
            gen1: gen1Objects,
            gen2: gen2Objects,
            lastAction: lastGcAction,
            gcCounts: gcStats,
            heapUsedKb: heapUsedKb,
            pauseMs: lastPauseMs,
          });
          pane.appendChild(svgBox);

          // Metrics Row
          pane.appendChild(
            el(
              "div",
              { class: "int-metrics-row" },
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "مرات تنظيف Gen 0 (سريع جداً)"),
                el("span", { class: "int-metric-val", style: "color: var(--ok);" }, `${gcStats.gen0} مرات`),
                el("span", { class: "int-metric-desc" }, "فحص الكائنات المؤقتة (&lt;1ms)"),
              ),
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "مرات تنظيف Gen 1 (متوسط)"),
                el("span", { class: "int-metric-val", style: "color: var(--warn);" }, `${gcStats.gen1} مرات`),
                el("span", { class: "int-metric-desc" }, "فحص منطقة الناجين الوسيطة"),
              ),
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "مرات التنظيف الشامل Full GC (Gen 2)"),
                el("span", { class: "int-metric-val", style: "color: var(--err);" }, `${gcStats.gen2} مرات`),
                el("span", { class: "int-metric-desc" }, "إيقاف التطبيق وضغط الركام (Stop-the-World)"),
              ),
              el(
                "div",
                { class: "int-metric-chip" },
                el("span", { class: "int-metric-title" }, "حجم الذاكرة الركامية النشطة"),
                el("span", { class: "int-metric-val", style: "color: var(--acc-b);" }, `${heapUsedKb} KB`),
                el("span", { class: "int-metric-desc" }, `زمن التوقف الأخير: ${lastPauseMs} ms`),
              ),
            ),
          );

          // Code block
          pane.appendChild(
            el(
              "div",
              { class: "int-code-block" },
              `// معمارية إدارة الذاكرة وواجهة IDisposable من سلايدات د. بيداء (L7-S038 & L7-S040):

// 1. كائنات قصيرة الأجل (تولد وتموت في Gen 0 فور انتهاء نطاق الدالة):
public void ProcessUserRequest() {
    var tempDto = new RequestDto(); // يخصص في Gen 0
    tempDto.Validate();
} // بمجرد الخروج من الدالة: ينقطع مؤشر الـ Stack ويصبح tempDto قمامة جاهزة للكنس في Gen 0!

// 2. تحرير الموارد غير المدارة عبر IDisposable و using:
public class DatabaseManager : IDisposable {
    private SqlConnection _connection; // مورد غير مدار (Unmanaged Resource)
    
    public void Dispose() {
        _connection?.Dispose(); // إغلاق المقبض فوراً لمنع تسريب الذاكرة!
    }
}`,
            ),
          );

          // Jump button
          pane.appendChild(
            el(
              "div",
              { style: "margin-top: 14px;" },
              el(
                "a",
                { class: "int-slide-ref-btn", ...slideRefAttrs("L7-S038") },
                iconSvg("slides"),
                "انتقل إلى سلايد الشرح في المنهج (L7-S038 · أجيال مجمع النفايات Generational GC)",
              ),
            ),
          );

          stageWrap.appendChild(pane);
        }
      }

      // Studio Navigation Tabs
      const studioTabs = [
        { id: "timeline", label: "1. المخطط الزمني: متزامن مقابل غير متزامن (Timeline)" },
        { id: "deadlock", label: "2. محاكي القفل الميت وشروط كوفمان (Deadlock Simulator)" },
        { id: "gc", label: "3. محاكي أجيال مجمع النفايات (GC Generations: Gen 0, 1, 2)" },
      ];

      studioTabs.forEach((tab) => {
        const btn = el(
          "button",
          {
            class: "int-tab-btn" + (activeStudioTab === tab.id ? " active" : ""),
            onclick: () => {
              activeStudioTab = tab.id;
              tabsBar.querySelectorAll(".int-tab-btn").forEach((b) => b.classList.remove("active"));
              btn.classList.add("active");
              renderActiveTab();
            },
          },
          tab.label,
        );
        tabsBar.appendChild(btn);
      });

      card.appendChild(tabsBar);
      card.appendChild(stageWrap);
      renderActiveTab();
    },
  };

  /* ───────────────────────────────────────────────────────────
     تصدير مصفوفة النماذج التفاعلية المعمارية (window.TOC_INTERACTIVE)
     ─────────────────────────────────────────────────────────── */
  window.TOC_INTERACTIVE = [
    SOLID_STUDIO_MODEL,
    GOF_TRIAD_MODEL,
    CURRICULUM_UML_MODEL,
    CLEAN_ARCH_STUDIO_MODEL,
    CONCURRENCY_MEMORY_STUDIO_MODEL,
  ];
})();

