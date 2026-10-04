/* ═══════════════════════════════════════════════════════════
   بنك أسئلة ونماذج الاختبار النهائي — البرمجة المتقدمة
   المدرس: د. بيداء لعلع — 104 سؤال معياري عالي الدقة (MCQ وصح/خطأ)
   معيار الجودة: خيارات متوازنة الطول (منع انحياز الخيار الأطول) + فخاخ وتفسيرات علمية + صفر إيموجيات
   ═══════════════════════════════════════════════════════════ */
window.TOC_MODELS = window.TOC_MODELS || [];
window.TOC_MODELS.push({
  "id": "ap_theory_final",
  "kind": "نظري",
  "title_ar": "بنك أسئلة ونماذج البرمجة المتقدمة النهائي — د. بيداء لعلع",
  "short_label": "بنك النهائي",
  "origin_ar": "بنك أسئلة معياري شامل فائق الدقة مبني وفق سلايدات واختبارات الدكتورة بيداء لعلع الرسمية (مبادئ SOLID، أنماط التصميم العشرة، العمارة النظيفة، واجهات APIs، التزامن والذاكرة، والنظم الموزعة). مدقق لغوياً ومنهجياً مع خيارات متوازنة الطول وصفر إيموجيات ووقفات امتحانية تكتيكية تضمن حل أي سؤال مشابه.",
  "questions": [
    {
      "type": "mcq",
      "ref": "L1-S020",
      "q_ar": "تحتوي فئة OrderManager على دوال لحساب الضرائب، وحفظ الطلب في قاعدة البيانات، وإرسال بريد إلكتروني للعميل. ما هو المبدأ المنتهك مباشرة في هذا التصميم؟",
      "q_en": "An OrderManager class contains methods to calculate tax, save orders to the database, and send emails to customers. Which principle is directly violated?",
      "opts": [
        {
          "ar": "مبدأ الاستبدال لليسكوف (LSP)",
          "en": "Liskov Substitution Principle (LSP)",
          "ok": false,
          "why": "ينتهك LSP عند كسر الوراثة وسلوك الفئة المشتقة، بينما المشكلة هنا هي تضخم مسؤوليات فئة واحدة."
        },
        {
          "ar": "مبدأ المسؤولية الأحادية (SRP)",
          "en": "Single Responsibility Principle (SRP)",
          "ok": true,
          "why": "الفئة تجمع ثلاث مسؤوليات متباينة (حسابات، قاعدة بيانات، مراسلات)، وتمتلك أكثر من سبب واحد للتغيير."
        },
        {
          "ar": "مبدأ فصل الواجهات (ISP)",
          "en": "Interface Segregation Principle (ISP)",
          "ok": false,
          "why": "يختص ISP بالواجهات البرمجية المنتفخة وإجبار المشتركين على دوال لا يحتاجونها، وليس بالفئات الملموسة."
        },
        {
          "ar": "مبدأ المفتوح والمغلق (OCP)",
          "en": "Open/Closed Principle (OCP)",
          "ok": false,
          "why": "يختص OCP بالتوسعة عبر التجريد بدلاً من تعديل الكود القديم، بينما العيب هنا تجميع منطق متعدد."
        }
      ],
      "tip": "وقفة امتحانية قناصة: إذا رأيت فئة واحدة تجمع مهام متعددة (حساب + قاعدة بيانات + إيميل)، فالمنتهك فوراً هو SRP بسبب تشتت المسؤوليات وتعدد أسباب التغيير.",
      "n": 1
    },
    {
      "type": "mcq",
      "ref": "L1-S023",
      "q_ar": "نظام دفع يستخدم جملة switch معقدة للتحقق من نوع البطاقة (Visa, MasterCard, PayPal). كلما أضيف نوع جديد، نضطر لتعديل نفس الدالة القديمة. ما هو الحل المعماري الأنسب وفق SOLID؟",
      "q_en": "A payment system uses a complex switch statement checking card types. Adding a new card forces modifying the existing method. What is the best SOLID solution?",
      "opts": [
        {
          "ar": "دمج جميع شروط الفحص داخل فئة واحدة متضخمة تحقق SRP",
          "en": "Consolidate all conditions into one fat class following SRP",
          "ok": false,
          "why": "دمج الشروط في فئة واحدة يزيد التعقيد وينتهك SRP و OCP معاً بدلاً من حل المشكلة."
        },
        {
          "ar": "تحويل كافة الفئات إلى فئات ساكنة وتجنب استخدام الواجهات",
          "en": "Convert all classes to static and avoid using interfaces",
          "ok": false,
          "why": "الفئات الساكنة تمنع التعددية الشكلية وتلغي المرونة وتجعل النظام مستحيل الاختبار والتوسعة."
        },
        {
          "ar": "تحويل الحالات إلى واجهة موحدة وفئات مشتقة تحقق OCP",
          "en": "Extract an interface and derived classes following OCP",
          "ok": true,
          "why": "تطبيق التعددية الشكلية (Polymorphism) عبر واجهة IPaymentMethod يتيح إضافة أنواع جديدة دون لمس الكود القديم."
        },
        {
          "ar": "تطبيق مبدأ فصل الواجهات وتقسيم خوارزمية الدفع لدوال متعددة",
          "en": "Apply ISP by splitting the payment algorithm into methods",
          "ok": false,
          "why": "تقسيم الدوال داخل نفس الكلاس لا يمنع تعديل الكود القديم عند إضافة وسيلة دفع جديدة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: جمل switch أو if-else المتراكمة على أنواع الكائنات هي العلامة الكلاسيكية لانتهاك OCP، وعلاجها هو التعددية الشكلية عبر واجهة موحدة.",
      "n": 2
    },
    {
      "type": "mcq",
      "ref": "L1-S027",
      "q_ar": "فئة Rectangle تحتوي على خصائص Width و Height. ترث منها فئة Square وتقوم بضبط الضلعين معاً عند تغيير أي منهما، مما كسر خوارزمية حساب المساحة. أي مبدأ يصف هذا الخلل؟",
      "q_en": "A Rectangle class has Width and Height. A Square class inherits from it and modifies both sides together, breaking area calculation. Which principle describes this flaw?",
      "opts": [
        {
          "ar": "انتهاك مبدأ المسؤولية الأحادية (SRP)",
          "en": "Violation of Single Responsibility Principle",
          "ok": false,
          "why": "الفئتان مسؤوليتهما واضحة (تمثيل أشكال هندسية)، ولكن المشكلة هي علاقة الوراثة غير السليمة."
        },
        {
          "ar": "انتهاك مبدأ عكس التبعية المعماري (DIP)",
          "en": "Violation of Dependency Inversion Principle",
          "ok": false,
          "why": "المشكلة في وراثة السلوك وليست في الاعتماد على فئات منخفضة المستوى بدلاً من التجريد."
        },
        {
          "ar": "انتهاك مبدأ فصل الواجهات البرمجية (ISP)",
          "en": "Violation of Interface Segregation Principle",
          "ok": false,
          "why": "لا توجد واجهة متضخمة مجبرة على دوال فارغة، بل علاقة وراثة كسرت الشروط المسبقة واللاحقة."
        },
        {
          "ar": "انتهاك مبدأ الاستبدال لليسكوف (LSP)",
          "en": "Violation of Liskov Substitution Principle",
          "ok": true,
          "why": "الفئة الابن Square لا يمكن أن تحل محل الفئة الأب Rectangle دون الإخلال بالسلوك والنتائج المتوقعة للبرنامج."
        }
      ],
      "tip": "وقفة امتحانية قناصة: مثال Rectangle و Square ومثال Bird و Penguin هما المثالان الامتحانيان الرسميان للدكتورة على انتهاك مبدأ ليسكوف (LSP).",
      "n": 3
    },
    {
      "type": "mcq",
      "ref": "L1-S030",
      "q_ar": "واجهة برمجية IMultiDevice تضم دوال: Print و Scan و Fax. عند كتابة فئة SimplePrinter، اضطر المطور لترك Scan و Fax فارغتين مع رمي استثناء. ما المبدأ المنتهك؟",
      "q_en": "An interface IMultiDevice has Print, Scan, Fax. A SimplePrinter class must implement it, leaving Scan and Fax throwing NotImplementedException. Which principle is violated?",
      "opts": [
        {
          "ar": "مبدأ فصل الواجهات البرمجية الدقيقة (ISP)",
          "en": "Interface Segregation Principle (ISP)",
          "ok": true,
          "why": "إجبار العميل على الاعتماد على واجهة متضخمة تحتوي على دوال لا يحتاجها يمثل انتهاكاً صريحاً لمبدأ ISP."
        },
        {
          "ar": "مبدأ المسؤولية الأحادية للكيانات (SRP)",
          "en": "Single Responsibility Principle (SRP)",
          "ok": false,
          "why": "ينطبق SRP على الفئات الملموسة لتحديد أسباب التغيير، بينما المشكلة هنا في تصميم عقد الواجهة."
        },
        {
          "ar": "مبدأ الاستبدال والتوافق السلوكي (LSP)",
          "en": "Liskov Substitution Principle (LSP)",
          "ok": false,
          "why": "رمي الاستثناء هو نتيجة للواجهة الملوثة، لكن أصل العيب المعماري هو انتفاخ الواجهة (Fat Interface)."
        },
        {
          "ar": "مبدأ المفتوح والمغلق في التوسعة (OCP)",
          "en": "Open/Closed Principle (OCP)",
          "ok": false,
          "why": "لا يرتبط العيب بتوسيع الكود وإغلاقه، بل بإرغام المطور على تنفيذ دوال لا تدعمها أجهزته."
        }
      ],
      "tip": "وقفة امتحانية قناصة: ظهور استثناء NotImplementedException داخل دوال واجهة غير مدعومة يعني مباشرة انتهاك ISP، والحل تجزئتها لواجهات دورية (IPrinter, IScanner).",
      "n": 4
    },
    {
      "type": "mcq",
      "ref": "L1-S034",
      "q_ar": "تعتمد فئة OrderService داخل بانيها على إنشاء نسخة مباشرة: new SqlOrderRepository(). لماذا يعتبر هذا التصميم انتهاكاً لمبدأ DIP؟",
      "q_en": "OrderService directly creates an instance: new SqlOrderRepository() in its constructor. Why is this a violation of DIP?",
      "opts": [
        {
          "ar": "لأن الفئة لا تحتوي على دوال كافية لمعالجة الأخطاء والبيانات",
          "en": "Because the class lacks error handling and data methods",
          "ok": false,
          "why": "معالجة الأخطاء مسألة برمجية داخلية وليست جوهر مبادئ هندسة التبعيات المعمارية."
        },
        {
          "ar": "لأن وحدة المستوى العالي اعتمدت على تفاصيل منخفضة المستوى",
          "en": "Because high-level module depends on low-level detail",
          "ok": true,
          "why": "ينص DIP على أن الوحدات العليا والدنيا يجب أن تعتمد كلاهما على التجريدات (Abstractions) عبر حقن IOrderRepository."
        },
        {
          "ar": "لأن استخدام الكلمة new ممنوع كلياً في البرمجة كائنية التوجه",
          "en": "Because using new is completely forbidden in OOP languages",
          "ok": false,
          "why": "الكلمة new مستخدمة لإنشاء الكائنات، لكن حظرها يقتصر على ربط الخدمات المعمارية بالأنواع الملموسة."
        },
        {
          "ar": "لأن طبقة قاعدة البيانات يجب أن ترث مباشرة من طبقة الأعمال",
          "en": "Because database layer must inherit from business layer",
          "ok": false,
          "why": "الوراثة بين الطبقات ممارسة خاطئة تؤدي لترابط شديد يخالف العمارة النظيفة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: استخدام كلمة new لإنشاء خدمات التخزين أو الشبكة داخل كلاسات الأعمال هو التوقيع الحرفي لانتهاك DIP والترابط الوثيق (Tight Coupling).",
      "n": 5
    },
    {
      "type": "mcq",
      "ref": "L1-S011",
      "q_ar": "ما هو المكوّن في بيئة تشغيل .NET (CLR) المسؤول عن تحويل شفرة لغة الوسيط العامة (CIL/IL) إلى لغة الآلة الأصلية (Native Code) أثناء التنفيذ؟",
      "q_en": "Which component in the .NET CLR is responsible for converting CIL/IL code into Native Machine Code during execution?",
      "opts": [
        {
          "ar": "جامع النفايات التلقائي للذاكرة (Garbage Collector)",
          "en": "Garbage Collector (GC)",
          "ok": false,
          "why": "جامع النفايات يدير تخصيص وتحرير ذاكرة الكومة (Heap) ولا علاقة له بترجمة التعليمات البرمجية."
        },
        {
          "ar": "نظام التحقق من الأمان والأذونات (Security Engine)",
          "en": "Security and Verification Engine",
          "ok": false,
          "why": "يتحقق من سلامة الأنواع وصلاحيات الوصول، ولكنه لا ينتج كوداً ثنائياً للتنفيذ."
        },
        {
          "ar": "المترجم الفوري في الوقت المناسب (JIT Compiler)",
          "en": "Just-In-Time (JIT) Compiler",
          "ok": true,
          "why": "يقوم مترجم JIT داخل CLR بتحويل كود IL إلى شفرة الآلة المناسبة للمعالج ونظام التشغيل لحظة الاستدعاء."
        },
        {
          "ar": "مترجم لغة سي شارب المصدري (Roslyn Compiler)",
          "en": "Roslyn C# Source Compiler",
          "ok": false,
          "why": "يترجم كود C# المصدري إلى كود IL عند البناء المسبق، وليس إلى لغة الآلة أثناء التشغيل."
        }
      ],
      "tip": "وقفة امتحانية قناصة: تسلسل التنفيذ في دوت نت: كود C# -> مترجم Roslyn -> كود IL -> بيئة CLR مع مترجم JIT -> لغة الآلة Native Machine Code.",
      "n": 6
    },
    {
      "type": "mcq",
      "ref": "L1-S012",
      "q_ar": "ما الفرق المعماري الجوهري بين الصنف (Class) والكائن (Object) في البرمجة كائنية التوجه؟",
      "q_en": "What is the fundamental architectural difference between a Class and an Object in OOP?",
      "opts": [
        {
          "ar": "الصنف يخزن في المكدس دوماً بينما الكائن يخزن في الكومة حصراً",
          "en": "Class always in Stack while Object exclusively in Heap",
          "ok": false,
          "why": "الصنف هو تعريف منطقي للنوع، بينما بيانات الكائن كمرجع تخزن في الكومة مع عنوان بالمكدس."
        },
        {
          "ar": "الصنف يدعم الوراثة فقط بينما الكائن يدعم تعدد الأشكال فقط",
          "en": "Class supports inheritance only while Object supports polymorphism",
          "ok": false,
          "why": "مفاهيم OOP كالوراثة وتعدد الأشكال تطبق على مستوى تعريف الأصناف وتتجسد في سلوك الكائنات."
        },
        {
          "ar": "الصنف يُنشأ أثناء وقت التشغيل بينما الكائن يُعرّف وقت الترجمة",
          "en": "Class created at runtime while Object defined at compile time",
          "ok": false,
          "why": "العكس تماماً؛ الصنف يُترجم مسبقاً، بينما الكائنات تُنشأ ديناميكياً أثناء وقت التشغيل."
        },
        {
          "ar": "الصنف هو المخطط البرمجي بينما الكائن هو النسخة الفعلية بالذاكرة",
          "en": "Class is the blueprint while Object is the memory instance",
          "ok": true,
          "why": "الصنف يحدد البنية والخصائص، بينما الكائن هو تجسيد حي يحتل مساحة فعلية في الذاكرة ويمتلك حالة محددة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: احفظ التعريف القياسي للدكتورة: Class = Blueprint/Template، أما Object = Concrete Instance in memory with state and identity.",
      "n": 7
    },
    {
      "type": "mcq",
      "ref": "L1-S014",
      "q_ar": "أي مفهوم من مفاهيم OOP يركز على إخفاء التفاصيل الداخلية وحماية حالة الكائن عبر تقييد الوصول المباشر للمتغيرات؟",
      "q_en": "Which OOP concept focuses on hiding internal details and protecting object state by restricting direct access to variables?",
      "opts": [
        {
          "ar": "التغليف وحماية البيانات (Encapsulation)",
          "en": "Encapsulation",
          "ok": true,
          "why": "التغليف يجمع البيانات والعمليات في وحدة واحدة ويخفي المتغيرات بحقول private ويكشفها عبر خصائص ومحددات وصول."
        },
        {
          "ar": "تعدد الأشكال البرمجي (Polymorphism)",
          "en": "Polymorphism",
          "ok": false,
          "why": "تعدد الأشكال يسمح بمعاملة الكائنات المشتقة كأنها من الفئة الأساسية وتنفيذ سلوكيات مختلفة."
        },
        {
          "ar": "الوراثة وإعادة الاستخدام (Inheritance)",
          "en": "Inheritance",
          "ok": false,
          "why": "الوراثة تختص ببناء فئات جديدة بناءً على فئات موجودة ومشاركة الخصائص والوظائف."
        },
        {
          "ar": "التجريد وإخفاء التعقيد (Abstraction)",
          "en": "Abstraction",
          "ok": false,
          "why": "التجريد يركز على إظهار الميزات الضرورية فقط للعميل، بينما التغليف يركز على آليات إخفاء التفاصيل وحمايتها."
        }
      ],
      "tip": "وقفة امتحانية قناصة: التغليف (Encapsulation) = حماية الحالة وإخفاء البيانات (Data Hiding)، بينما التجريد (Abstraction) = إخفاء التعقيد وإظهار الواجهة الضرورية.",
      "n": 8
    },
    {
      "type": "mcq",
      "ref": "L1-S017",
      "q_ar": "عندما تقوم فئة مشتقة بإعادة تعريف دالة معرفة بالكلمة virtual في الفئة الأساسية باستخدام الكلمة override، فما المفهوم المطبق هنا؟",
      "q_en": "When a derived class redefines a virtual method from the base class using the override keyword, which concept is applied?",
      "opts": [
        {
          "ar": "التحميل الزائد أثناء وقت الترجمة (Method Overloading)",
          "en": "Compile-time Method Overloading",
          "ok": false,
          "why": "التحميل الزائد يكون لدوال بنفس الاسم ومعاملات مختلفة داخل نفس الفئة ويحدد وقت الترجمة."
        },
        {
          "ar": "تعدد الأشكال أثناء وقت التشغيل (Runtime Polymorphism)",
          "en": "Runtime Polymorphism (Method Overriding)",
          "ok": true,
          "why": "تجاوز الدوال (Method Overriding) عبر virtual و override يحدد الدالة المطلوب تنفيذها ديناميكياً أثناء التشغيل وفق نوع الكائن الفعلي."
        },
        {
          "ar": "التغليف وحماية المتغيرات الحساسة (Encapsulation)",
          "en": "Encapsulation and variable protection",
          "ok": false,
          "why": "لا يتعلق التغليف بتغيير سلوك الدوال في الفئات الموروثة."
        },
        {
          "ar": "الربط الثابت المبكر للدوال (Static Early Binding)",
          "en": "Static Early Method Binding",
          "ok": false,
          "why": "الدوال الافتراضية تعتمد الربط المتأخر الديناميكي (Dynamic Late Binding) عبر جدول vtable."
        }
      ],
      "tip": "وقفة امتحانية قناصة: Overloading = نفس الاسم بمعاملات مختلفة في نفس الكلاس (Compile-time)؛ Overriding = دالة virtual يتم تجاوزها بـ override في الابن (Runtime Polymorphism).",
      "n": 9
    },
    {
      "type": "mcq",
      "ref": "L1-S018",
      "q_ar": "ما هو محدد الوصول (Access Modifier) في C# الذي يتيح الوصول للعنصر فقط داخل نفس الفئة أو الفئات المشتقة منها؟",
      "q_en": "Which access modifier in C# allows access to a member only within the same class or its derived classes?",
      "opts": [
        {
          "ar": "الداخلي ضمن نفس التجميعة (internal)",
          "en": "Internal",
          "ok": false,
          "why": "محدد internal يسمح بالوصول لأي فئة تقع داخل نفس ملف التجميعة (Assembly) حتى لو لم تكن مشتقة."
        },
        {
          "ar": "الخاص المقصور على الفئة ذاتها (private)",
          "en": "Private",
          "ok": false,
          "why": "محدد private يمنع وصول الفئات المشتقة تماماً ويقصره على جسم نفس الفئة المعرفة."
        },
        {
          "ar": "المحمي الخاص بالفئات المشتقة (protected)",
          "en": "Protected",
          "ok": true,
          "why": "محدد protected يمنع الوصول الخارجي ويحصره داخل نفس الفئة وفروعها الموروثة في شجرة الوراثة."
        },
        {
          "ar": "العام المتاح لكافة عناصر النظام (public)",
          "en": "Public",
          "ok": false,
          "why": "محدد public يفتح الوصول لكافة الأجزاء دون أي قيود وراثة أو تجميعة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: private = نفس الكلاس فقط · protected = الكلاس وأبناؤه فقط · internal = نفس الـ Assembly · public = متاح للجميع.",
      "n": 10
    },
    {
      "type": "tf",
      "ref": "L1-S020",
      "q_ar": "ينص مبدأ المسؤولية الأحادية (SRP) على أن الفئة يجب أن تحتوي على دالة برمجية واحدة فقط.",
      "q_en": "The Single Responsibility Principle (SRP) states that a class should contain only one method.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ المبدأ ينص على امتلاك سبب واحد فقط للتغيير (Single Reason to Change) وليس دالة واحدة."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة في الأصل؛ الفئة يمكن أن تحتوي على عدة دوال مترابطة تصب جميعها في خدمة مسؤولية وظيفية متماسكة واحدة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: انتبه من الخدعة اللفظية: Single Responsibility تعني سبباً واحداً للتغيير ومسؤولية وظيفية متماسكة، ولا تعني كتابة دالة واحدة في الفئة.",
      "n": 11
    },
    {
      "type": "tf",
      "ref": "L1-S023",
      "q_ar": "ينص مبدأ المفتوح والمغلق (OCP) على أن الكيانات البرمجية يجب أن تكون مفتوحة للتعديل ومغلقة أمام التوسعة.",
      "q_en": "The Open/Closed Principle (OCP) states that software entities should be open for modification and closed for extension.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ النص المعتمد هو العكس تماماً: مفتوحة للتوسعة ومغلقة أمام التعديل."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ النص الصحيح هو Open for extension, Closed for modification لمنع كسر الكود المستقر عند إضافة ميزات جديدة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: هذه أشهر خدعة تقلبها الدكتورة في الامتحان النصفي والنهائي: OCP = مفتوح للتوسعة (Extension) ومغلق أمام التعديل (Modification).",
      "n": 12
    },
    {
      "type": "tf",
      "ref": "L1-S027",
      "q_ar": "وفقاً لمبدأ ليسكوف (LSP)، يجب أن تكون الفئات المشتقة قادرة على استبدال فئاتها الأساسية دون الإخلال بسلامة وصحة البرنامج.",
      "q_en": "According to LSP, subtypes must be substitutable for their base types without altering program correctness.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ هذا هو التعريف القياسي لمبدأ باربرا ليسكوف لضمان توافق سلوك الفئات الفرعية مع عقود الآباء."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "المبدأ يشترط بدقة أن تحل الفئات الفرعية محل الأساسية دون مفاجآت أو استثناءات سلوكية غير متوقعة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: تعريف LSP الدقيق: Subtypes must be substitutable for their base types without altering correctness.",
      "n": 13
    },
    {
      "type": "tf",
      "ref": "L1-S030",
      "q_ar": "يشجع مبدأ فصل الواجهات (ISP) على تصميم واجهات عامة وشاملة تضم كافة وظائف النظام لتقليل عدد ملفات الواجهات.",
      "q_en": "The Interface Segregation Principle (ISP) encourages designing comprehensive interfaces containing all system functions.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ هذا يولد واجهات متضخمة وملوثة (Fat Interfaces) تنتهك المبدأ بشكل صريح."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ يطالب المبدأ بتفكيك الواجهات إلى واجهات دقيقة ومتخصصة لكل عميل (Role Interfaces) حتى لا يجبر على دوال لا يحتاجها."
        }
      ],
      "tip": "وقفة امتحانية قناصة: مبدأ ISP يحارب الواجهات المنتفخة (Fat Interfaces) ويشجع الواجهات المتخصصة الصغيرة الموجهة لكل عميل.",
      "n": 14
    },
    {
      "type": "tf",
      "ref": "L1-S034",
      "q_ar": "في مبدأ عكس التبعية (DIP)، يجب أن تعتمد التجريدات على التفاصيل البرمجية الملموسة لتسهيل تعديلها.",
      "q_en": "In DIP, abstractions should depend upon concrete details to make them easier to modify.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ القاعدة المعمارية تنص على أن التفاصيل هي التي تعتمد على التجريدات، وليس العكس."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ تنص القاعدة الحتمية لـ DIP على: Abstractions should not depend upon details; Details should depend upon abstractions."
        }
      ],
      "tip": "وقفة امتحانية قناصة: فخ عكس الكلمات: التجريد (Abstractions) لا يعتمد أبداً على التفاصيل، بل التفاصيل الملموسة هي التي تعتمد على التجريدات.",
      "n": 15
    },
    {
      "type": "mcq",
      "ref": "L2-S010",
      "q_ar": "ما هو المحور الأساسي الذي تركز عليه فئة أنماط التصميم الإنشائية (Creational Design Patterns)؟",
      "q_en": "What is the primary focus of Creational Design Patterns in software architecture?",
      "opts": [
        {
          "ar": "كيفية تركيب الأصناف وربطها في هياكل برمجية أكبر",
          "en": "Class composition and assembling larger structures",
          "ok": false,
          "why": "هذا هو المحور الحصري لأنماط التصميم الهيكلية (Structural Patterns)."
        },
        {
          "ar": "إدارة الاتصال والتفاعل وتوزيع المسؤوليات بين الكائنات",
          "en": "Communication and assignment of responsibilities",
          "ok": false,
          "why": "هذا هو المحور الحصري لأنماط التصميم السلوكية (Behavioral Patterns)."
        },
        {
          "ar": "تحسين سرعة معالجة الذاكرة وحماية مسالك التنفيذ المتزامنة",
          "en": "Optimizing memory processing and thread safety",
          "ok": false,
          "why": "هذه قضايا إدارة تزامن وعتاد وليست تصنيفاً في عصابة الأربعة (GoF)."
        },
        {
          "ar": "آليات إنشاء الكائنات وتغليف منطق تكوينها البرمجي",
          "en": "Object creation mechanisms and instantiation logic",
          "ok": true,
          "why": "الأنماط الإنشائية تعنى بكيفية إنشاء الكائنات بطريقة تفصل النظام عن تفاصيل الإنشاء وتجعله مرناً."
        }
      ],
      "tip": "وقفة امتحانية قناصة: احفظ ثلاثي تصنيف GoF: الإنشائية (Creation) = إنشاء الكائنات · الهيكلية (Structural) = تركيب الأصناف · السلوكية (Behavioral) = التفاعل والمسؤوليات.",
      "n": 16
    },
    {
      "type": "mcq",
      "ref": "L2-S014",
      "q_ar": "أي نمط تصميم يضمن وجود نسخة واحدة فقط من الفئة، مع توفير نقطة وصول عالمية موحدة لها طوال تشغيل التطبيق؟",
      "q_en": "Which design pattern ensures that a class has only one instance, while providing a global access point to it?",
      "opts": [
        {
          "ar": "نمط المفرد الإنشائي (Singleton Pattern)",
          "en": "Singleton Pattern",
          "ok": true,
          "why": "المفرد يضمن عدم تكرار الإنشاء عبر باني خاص وخاصية ثابتة توفر النسخة المشتركة لكافة أجزاء النظام."
        },
        {
          "ar": "نمط طريقة المصنع (Factory Method)",
          "en": "Factory Method Pattern",
          "ok": false,
          "why": "يفوض إنشاء الكائنات للفئات المشتقة ولا يمنع إنشاء نسخ متعددة."
        },
        {
          "ar": "نمط الواجهة الموحدة (Façade Pattern)",
          "en": "Façade Pattern",
          "ok": false,
          "why": "نمط هيكلي يبسط التعامل مع نظام فرعي معقد ولا يتحكم في عدد نسخ الكائن."
        },
        {
          "ar": "نمط النموذج الأولي (Prototype Pattern)",
          "en": "Prototype Pattern",
          "ok": false,
          "why": "ينشئ كائنات جديدة عبر استنساخ كائن أصلي موجود مسبقاً (Cloning)."
        }
      ],
      "tip": "وقفة امتحانية قناصة: مفتاحا نمط المفرد (Singleton) في نص أي سؤال هما دائماً: 'only one instance' و 'global access point'.",
      "n": 17
    },
    {
      "type": "mcq",
      "ref": "L2-S016",
      "q_ar": "ما هي المتطلبات البرمجية الثلاثة لتنفيذ نمط المفرد (Singleton) بشكل سليم وآمن في لغة C#؟",
      "q_en": "What are the three core implementation requirements for a proper Singleton in C#?",
      "opts": [
        {
          "ar": "باني عام، واجهة استاتيكية مجردة، ومتغير عام للقراءة فقط",
          "en": "Public constructor, abstract static interface, public variable",
          "ok": false,
          "why": "الباني العام يدمر النمط فوراً لأنه يسمح لأي عميل باستدعاء new وإنشاء نسخ جديدة."
        },
        {
          "ar": "باني خاص، متغير استاتيكي خاص للنسخة، وخاصية عامة للوصول",
          "en": "Private constructor, private static instance, public accessor",
          "ok": true,
          "why": "الباني الخاص يمنع new، والمتغير الاستاتيكي يحفظ النسخة الوحيدة، والخاصية العامة تعيدها عند الطلب."
        },
        {
          "ar": "فئة ساكنة تمنع الوراثة كلياً وتعتمد على دوال معالجة عامة",
          "en": "Static class preventing inheritance with public methods",
          "ok": false,
          "why": "الفئة الساكنة لا تعتبر نمط Singleton لأنها لا تدعم الوراثة ولا تنفيذ الواجهات أو التهيئة الكسولة."
        },
        {
          "ar": "باني محمي، مصفوفة كائنات ديناميكية، ودالة تفريغ ذاكرة",
          "en": "Protected constructor, dynamic object array, flush method",
          "ok": false,
          "why": "الباني المحمي يسمح للفئات المشتقة بإنشاء نسخ متعددة ويفسد قيد النسخة الوحيدة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: شروط Singleton الحتمية: Private Constructor لمنع new + Static Instance Property لنقطة الوصول الموحدة.",
      "n": 18
    },
    {
      "type": "mcq",
      "ref": "L2-S023",
      "q_ar": "أي نمط تصميم يعرّف واجهة لإنشاء كائن، ولكنه يترك للفئات الفرعية المشتقة حرية تحديد الفئة الملموسة التي سيتم إنشاؤها؟",
      "q_en": "Which pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate?",
      "opts": [
        {
          "ar": "نمط المصنع المجرد (Abstract Factory Pattern)",
          "en": "Abstract Factory Pattern",
          "ok": false,
          "why": "المصنع المجرد ينشئ عائلات كاملة من المنتجات المترابطة وليس منتجاً فردياً مفوضاً لفئة فرعية."
        },
        {
          "ar": "نمط الباني المعماري (Builder Pattern)",
          "en": "Builder Pattern",
          "ok": false,
          "why": "الباني يركز على تجميع كائن معقد خطوة بخطوة عبر واجهة متسلسلة وليس عبر تفويض فئات مشتقة."
        },
        {
          "ar": "نمط طريقة المصنع (Factory Method Pattern)",
          "en": "Factory Method Pattern",
          "ok": true,
          "why": "طريقة المصنع تفوض إنشاء الكائن الملموس للفئات المشتقة عبر دالة مجردة تنفذها كل فئة ابن."
        },
        {
          "ar": "نمط المفرد التشاركي (Singleton Pattern)",
          "en": "Singleton Pattern",
          "ok": false,
          "why": "المفرد يتحكم بعدد النسخ لنفس الفئة ولا يفوض منطق الإنشاء لفئات مشتقة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: عبارة 'subclasses decide which class to instantiate' تعني حصراً نمط Factory Method (الباني الافتراضي).",
      "n": 19
    },
    {
      "type": "mcq",
      "ref": "L2-S028",
      "q_ar": "ما هو الفرق المعماري الدقيق بين نمط طريقة المصنع (Factory Method) ونمط المصنع المجرد (Abstract Factory)؟",
      "q_en": "What is the exact architectural difference between Factory Method and Abstract Factory?",
      "opts": [
        {
          "ar": "المصنع ينشئ كائنات بالذاكرة والمجرد ينشئ واجهات برمجية فقط",
          "en": "Factory Method creates in memory, Abstract Factory only interfaces",
          "ok": false,
          "why": "كلا النمطين ينشئ كائنات ملموسة وظيفية في الذاكرة لتنفيذ متطلبات النظام."
        },
        {
          "ar": "المصنع مخصص لتطبيقات الويب والمجرد مخصص لتطبيقات الحواسيب",
          "en": "Factory Method for web apps, Abstract Factory for desktop",
          "ok": false,
          "why": "أنماط التصميم مفاهيم معمارية عامة لا ترتبط بنوع المنصة أو بيئة التشغيل."
        },
        {
          "ar": "المصنع يتطلب بانيات خاصة والمجرد يعتمد دوماً على بانيات عامة",
          "en": "Factory Method requires private constructors, Abstract Factory public",
          "ok": false,
          "why": "قيود الباني الخاص ترتبط بنمط المفرد Singleton وليس بأنماط المصانع."
        },
        {
          "ar": "المصنع يركز على منتج واحد بالوراثة والمجرد على عائلات منتجات",
          "en": "Factory Method on single product, Abstract Factory on families",
          "ok": true,
          "why": "طريقة المصنع تعتمد الوراثة لإنشاء منتج واحد، بينما المصنع المجرد يعتمد التركيب لإنشاء عائلة منتجات متوافقة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: Factory Method = منتج واحد عبر الوراثة (Subclasses) · Abstract Factory = عائلات منتجات مترابطة (Families of related objects).",
      "n": 20
    },
    {
      "type": "tf",
      "ref": "L2-S007",
      "q_ar": "نمط التصميم (Design Pattern) هو كود برمجي جاهز للنسخ واللصق مباشرة داخل مشروعك البرمجي.",
      "q_en": "A Design Pattern is a finished piece of code that can be copied and pasted directly into your program.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ نمط التصميم ليس كوداً جاهزاً بل وصف أو قالب مجرب لحل مشكلة شائعة."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ نمط التصميم هو حل معماري عام ومجرد يتم تخصيصه وكتابته برمجياً بما يناسب متطلبات البرنامج."
        }
      ],
      "tip": "وقفة امتحانية قناصة: Design Pattern is NOT a library or copy-paste code; it is a proven conceptual template to solve a recurring design problem.",
      "n": 21
    },
    {
      "type": "tf",
      "ref": "L2-S014",
      "q_ar": "نستخدم نمط المفرد (Singleton) عندما نحتاج لإتاحة استبدال الخوارزميات ديناميكياً أثناء وقت التشغيل.",
      "q_en": "We use the Singleton Pattern when algorithms should be interchangeable at runtime.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ تبديل الخوارزميات وقت التشغيل هو الوظيفة الحصرية لنمط الاستراتيجية (Strategy)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ الهدف من Singleton هو ضمان وجود نسخة واحدة فقط في الذاكرة بنقطة وصول موحدة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: ركّز في التبادل الذي تكرره الدكتورة: تعريف Strategy (تبديل الخوارزميات وقت التشغيل) يُنسب خطأً لـ Singleton أو Decorator.",
      "n": 22
    },
    {
      "type": "tf",
      "ref": "L2-S023",
      "q_ar": "يعتمد نمط طريقة المصنع (Factory Method) على تفويض إنشاء الكائنات لفئات فرعية عبر دالة مخصصة.",
      "q_en": "Factory Method pattern relies on delegating object creation to subclasses via a dedicated method.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ الفئة الأساسية تعلن عن الدالة المجردة، والفئات المشتقة تنفذها لتعيد النوع الملموس المناسب."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "المبدأ الأساسي لطريقة المصنع هو تفويض اتخاذ قرار التجسيد للفئات الفرعية."
        }
      ],
      "tip": "وقفة امتحانية قناصة: Factory Method = Virtual Constructor حيث الفئة الأب تفوض الإنشاء للفئات المشتقة.",
      "n": 23
    },
    {
      "type": "mcq",
      "ref": "L3-S006",
      "q_ar": "ما هي القاعدة المعمارية الأساسية التي تفضلها وترتكز عليها معظم أنماط التصميم الهيكلية (Structural Patterns)؟",
      "q_en": "What fundamental architectural principle do most Structural Design Patterns favor and rely upon?",
      "opts": [
        {
          "ar": "تفضيل التركيب على الوراثة (Composition over Inheritance)",
          "en": "Favor Composition over Inheritance",
          "ok": true,
          "why": "الأنماط الهيكلية تعتمد على ربط الكائنات كأجزاء مكوّنة بمرونة في وقت التشغيل بدلاً من العلاقات الصلبة للوراثة."
        },
        {
          "ar": "تفضيل الوراثة المتعددة لتجميع أكبر عدد من الخصائص المشتركة",
          "en": "Favor Multiple Inheritance to aggregate shared features",
          "ok": false,
          "why": "الوراثة المتعددة تسبب تعقيداً شديداً (مشكلة الماسة Diamond Problem) وتزيد الترابط بدلاً من تقليله."
        },
        {
          "ar": "استخدام الفئات الساكنة لعزل البيانات ومنع إنشاء الكائنات",
          "en": "Use static classes to isolate data and prevent instances",
          "ok": false,
          "why": "الفئات الساكنة تلغي التعددية الشكلية وتمنع تكوين الهياكل البرمجية المرنة."
        },
        {
          "ar": "الاعتماد الحصري على التعديل المباشر للكود المصدري القديم",
          "en": "Rely exclusively on modifying existing source code",
          "ok": false,
          "why": "هذا ينتهك مبدأ OCP ويدمر استقرار الأنظمة البرمجية القائمة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: الشعار الذهبي للأنماط الهيكلية (Structural Patterns): 'Favor object composition over class inheritance'.",
      "n": 24
    },
    {
      "type": "mcq",
      "ref": "L3-S012",
      "q_ar": "تريد دمج مكتبة رسائل قديمة (LegacyXmlLogger) في نظام حديث يعتمد واجهة IJsonLogger دون تعديل شفرة المكتبة القديمة. ما النمط الأنسب؟",
      "q_en": "You want to integrate a LegacyXmlLogger into a modern system expecting IJsonLogger without modifying the legacy code. Which pattern?",
      "opts": [
        {
          "ar": "نمط الواجهة الموحدة (Façade Pattern)",
          "en": "Façade Pattern",
          "ok": false,
          "why": "الواجهة الموحدة تهدف لتبسيط التعامل مع نظام فرعي معقد متعدد الفئات، وليس حل عدم تطابق واجهة فئة واحدة."
        },
        {
          "ar": "نمط المحول الهيكلي (Adapter Pattern)",
          "en": "Adapter Pattern",
          "ok": true,
          "why": "المحول مصمم حصراً للتوفيق بين واجهتين غير متوافقتين عبر تغليف الفئة القديمة وتوفير الواجهة التي يتوقعها العميل."
        },
        {
          "ar": "نمط الوكيل الحامي (Proxy Pattern)",
          "en": "Proxy Pattern",
          "ok": false,
          "why": "الوكيل يوفر نفس واجهة الكائن الأصلي للتحكم في الوصول أو التحميل الكسول، ولا يحول الواجهات."
        },
        {
          "ar": "نمط المزخرف الإضافي (Decorator Pattern)",
          "en": "Decorator Pattern",
          "ok": false,
          "why": "المزخرف يضيف مسؤوليات وسلوكيات جديدة لنفس الواجهة، ولا يحل مشكلة تعارض أسماء ومعايير الدوال."
        }
      ],
      "tip": "وقفة امتحانية قناصة: الكلمات المفتاحية لنمط المحول (Adapter): 'incompatible interface'، 'legacy system'، 'wrapper' لتعديل الواجهة وتوفيقها.",
      "n": 25
    },
    {
      "type": "mcq",
      "ref": "L3-S036",
      "q_ar": "يحتوي نظام متجر إلكتروني على خدمات معقدة متعددة: AuthService و PaymentService و InventoryService و ShippingService. وتريد تزويد تطبيق الجوال بواجهة موحدة بسيطة تختصر هذا التعقيد. ما النمط المناسب؟",
      "q_en": "An e-commerce system has complex subsystems: Auth, Payment, Inventory, Shipping. You want to provide a simplified unified interface for mobile. Which pattern?",
      "opts": [
        {
          "ar": "نمط المحول المترجم (Adapter Pattern)",
          "en": "Adapter Pattern",
          "ok": false,
          "why": "المحول يتعامل مع فئة مفردة غير متوافقة الواجهة، بينما هنا المطلوب تبسيط نظام فرعي متعدد الخدمات."
        },
        {
          "ar": "نمط المراقب التفاعلي (Observer Pattern)",
          "en": "Observer Pattern",
          "ok": false,
          "why": "المراقب يختص بنشر التحديثات للمشتركين عند تغير الحالة، وليس توفير واجهة دخول مبسطة للنظام."
        },
        {
          "ar": "نمط الواجهة الموحدة (Façade Pattern)",
          "en": "Façade Pattern",
          "ok": true,
          "why": "الواجهة الموحدة تقدم واجهة عليا مبسطة لنظام فرعي معقد تخفي تفاصيل التنسيق بين الخدمات المتعددة خلف نقطة نداء واحدة."
        },
        {
          "ar": "نمط طريقة المصنع (Factory Method)",
          "en": "Factory Method Pattern",
          "ok": false,
          "why": "طريقة المصنع تفوض إنشاء الكائنات للفئات المشتقة ولا تختص بتبسيط واجهات النظم الفرعية."
        }
      ],
      "tip": "وقفة امتحانية قناصة: عندما يذكر السؤال نظاماً فرعياً معقداً من عدة خدمات والهدف تزويد العميل بواجهة موحدة بسيطة: الإجابة دائماً هي Façade.",
      "n": 26
    },
    {
      "type": "mcq",
      "ref": "L3-S047",
      "q_ar": "نظام يتعامل مع مستندات محمية بكلمات سر وملفات ضخمة. تريد منع استهلاك الذاكرة إلا عند الطلب، والتحقق من صلاحيات المستخدم قبل تحميل الملف. ما النمط الأنسب؟",
      "q_en": "A system deals with password-protected documents and huge files. You want lazy loading and access control before loading. Which pattern?",
      "opts": [
        {
          "ar": "نمط المزخرف الديناميكي (Decorator Pattern)",
          "en": "Decorator Pattern",
          "ok": false,
          "why": "المزخرف يركز على إلحاق سلوكيات إضافية بالعميل، بينما الوكيل يتحكم في دورة حياة والوصول للكائن الأصلي."
        },
        {
          "ar": "نمط الاستراتيجية المتغيرة (Strategy Pattern)",
          "en": "Strategy Pattern",
          "ok": false,
          "why": "الاستراتيجية تختص بتبديل خوارزميات المعالجة وقت التشغيل ولا توفر نائباً للتحكم بكائن آخر."
        },
        {
          "ar": "نمط المفرد العام (Singleton Pattern)",
          "en": "Singleton Pattern",
          "ok": false,
          "why": "المفرد يضمن نسخة واحدة للنظام ككل ولا يوفر حماية أمنية أو تحميلاً كسولاً للملفات المتعددة."
        },
        {
          "ar": "نمط الوكيل الهيكلي (Proxy Pattern)",
          "en": "Proxy Pattern",
          "ok": true,
          "why": "الوكيل يوفر عنصراً نائباً (Surrogate) يتحكم في الوصول (Protection Proxy) ويؤجل إنشاء الملف الضخم حتى الحاجة (Virtual Proxy)."
        }
      ],
      "tip": "وقفة امتحانية قناصة: مفاتيح نمط الوكيل (Proxy): 'placeholder / surrogate'، 'access control / security'، 'lazy loading' لتأجيل تحميل الكائنات الثقيلة.",
      "n": 27
    },
    {
      "type": "mcq",
      "ref": "L3-S056",
      "q_ar": "تريد إضافة ميزات جديدة لكائن (مثل تغليف نص بتشفير ثم ضغط ثم توقيع رقمي) ديناميكياً أثناء وقت التشغيل دون استخدام الوراثة المتعددة. ما النمط المناسب؟",
      "q_en": "You want to attach new features to an object (e.g., encryption, compression, digital signature) dynamically at runtime without inheritance. Which pattern?",
      "opts": [
        {
          "ar": "نمط المزخرف المغلف (Decorator Pattern)",
          "en": "Decorator Pattern",
          "ok": true,
          "why": "المزخرف يلف الكائن بطبقات متتالية تنفذ نفس الواجهة، مما يتيح تركيب المسؤوليات بمرونة أثناء التشغيل."
        },
        {
          "ar": "نمط المحول الوظيفي (Adapter Pattern)",
          "en": "Adapter Pattern",
          "ok": false,
          "why": "المحول يغير الواجهة لتطابق متطلبات العميل، بينما المزخرف يحافظ على نفس الواجهة ويضيف إليها سلوكاً."
        },
        {
          "ar": "نمط الواجهة الموحدة (Façade Pattern)",
          "en": "Façade Pattern",
          "ok": false,
          "why": "الواجهة الموحدة تبسط واجهة نظام فرعي ولا تغلف كائناً لإضافة سلوكيات متسلسلة له."
        },
        {
          "ar": "نمط الوكيل البعيد (Proxy Pattern)",
          "en": "Proxy Pattern",
          "ok": false,
          "why": "الوكيل يتحكم بالوصول للكائن الأصلي ولا يهدف لتجميع ميزات وسلوكيات جديدة كالتشفير والضغط."
        }
      ],
      "tip": "وقفة امتحانية قناصة: مفتاح نمط المزخرف (Decorator): 'attach responsibilities dynamically at runtime'، وتركيب الميزات عبر التغليف المتتابع (Wrapping).",
      "n": 28
    },
    {
      "type": "mcq",
      "ref": "L3-S038",
      "q_ar": "ما هو الفرق المعماري الدقيق بين نمط المحول (Adapter) ونمط الواجهة الموحدة (Façade)؟",
      "q_en": "What is the exact architectural difference between the Adapter pattern and the Façade pattern?",
      "opts": [
        {
          "ar": "المحول نمط إنشائي بينما الواجهة الموحدة نمط هيكلي في تصنيف GoF",
          "en": "Adapter is creational while Façade is structural in GoF",
          "ok": false,
          "why": "كلا النمطين ينتميان حصراً إلى فئة الأنماط الهيكلية (Structural Patterns)."
        },
        {
          "ar": "المحول يوفق واجهة غير متوافقة والواجهة الموحدة تبسط نظاماً معقداً",
          "en": "Adapter adapts incompatible interface, Façade simplifies subsystem",
          "ok": true,
          "why": "الهدف من Adapter هو التوافقية (Compatibility)، بينما الهدف من Façade هو التبسيط وتقليل التعقيد (Simplification)."
        },
        {
          "ar": "المحول يتطلب إنشاء نسخ متعددة والواجهة الموحدة تعمل كفئة مفردة حصراً",
          "en": "Adapter requires multiple instances, Façade strictly a singleton",
          "ok": false,
          "why": "الواجهة الموحدة يمكن أن تكون Singleton أحياناً لكنه ليس شرطاً معمارياً لازماً لتعريف النمط."
        },
        {
          "ar": "المحول يغير منطق الأعمال الداخلي والواجهة الموحدة تغير أسماء الدوال فقط",
          "en": "Adapter alters business logic, Façade only renames methods",
          "ok": false,
          "why": "المحول لا يغير منطق الأعمال بل يترجم الاستدعاءات، والواجهة الموحدة تنسق استدعاء عدة فئات."
        }
      ],
      "tip": "وقفة امتحانية قناصة: المعادلة الذهبية للتفريق: Adapter = Compatibility (توفيق واجهة قائمة) · Façade = Simplification (تبسيط نظام فرعي معقد).",
      "n": 29
    },
    {
      "type": "tf",
      "ref": "L3-S012",
      "q_ar": "يتيح نمط المحول (Adapter) لكائنين ذوي واجهات برمجية غير متوافقة أن يعملا معاً بسلاسة.",
      "q_en": "The Adapter pattern allows two objects with incompatible interfaces to work together seamlessly.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ هذا هو الهدف الجوهري لنمط Adapter حيث يعمل كوسيط مترجم بين الواجهتين."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "المحول مصمم تحديداً لحل مشكلة عدم التوافق بين العقود والواجهات البرمجية."
        }
      ],
      "tip": "وقفة امتحانية قناصة: احفظ التعريف القياسي: Adapter converts the interface of a class into another interface clients expect.",
      "n": 30
    },
    {
      "type": "tf",
      "ref": "L3-S056",
      "q_ar": "نستخدم نمط المزخرف (Decorator) عندما يُراد جعل الخوارزميات قابلة للتبديل أثناء وقت التشغيل.",
      "q_en": "We use the Decorator Pattern when algorithms should be interchangeable at runtime.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ تبديل الخوارزميات وقت التشغيل هو وظيفة نمط الاستراتيجية (Strategy Pattern)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ وظيفة Decorator هي إلحاق سلوكيات إضافية بالكائن ديناميكياً، بينما تبديل الخوارزميات هو اختصاص Strategy."
        }
      ],
      "tip": "وقفة امتحانية قناصة: هذا السؤال نصي مأخوذ من الاختبار النصفي الرسمي للدكتورة بيداء: Decorator يضيف سلوكيات، و Strategy يبدل خوارزميات.",
      "n": 31
    },
    {
      "type": "tf",
      "ref": "L3-S047",
      "q_ar": "يوفر نمط الوكيل (Proxy) واجهة برمجية مختلفة تماماً عن واجهة الكائن الأصلي لتبسيط استخدامها.",
      "q_en": "The Proxy pattern provides a completely different interface from the real subject to simplify its use.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ الوكيل يجب حتماً أن ينفذ نفس الواجهة تماماً ليكون نائباً شفافاً للكائن الحقيقي."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ الوكيل والكائن الأصلي ينفذان نفس الواجهة المشتركة حتى لا يشعر العميل بأي اختلاف عند التعامل مع الوكيل."
        }
      ],
      "tip": "وقفة امتحانية قناصة: فخ دقيق: Proxy ينفذ نفس واجهة RealSubject تماماً؛ النمط الذي يوفر واجهة مبسطة مختلفة هو Façade.",
      "n": 32
    },
    {
      "type": "mcq",
      "ref": "L4-S003",
      "q_ar": "يدعم متجر إلكتروني طرق دفع متعددة: CreditCard, PayPal, Crypto. وتريد إتاحة اختيار وتغيير خوارزمية الدفع أثناء وقت التشغيل دون التأثير على كود سلة الشراء. ما النمط المناسب؟",
      "q_en": "An e-commerce store supports multiple payment methods: CreditCard, PayPal, Crypto. You want algorithms interchangeable at runtime. Which pattern?",
      "opts": [
        {
          "ar": "نمط المراقب التنبيهي (Observer Pattern)",
          "en": "Observer Pattern",
          "ok": false,
          "why": "المراقب يختص ببث الإشعارات وتنبيه المشتركين عند تغير الحالة، ولا يختص بتبديل خوارزميات الحساب."
        },
        {
          "ar": "نمط طريقة القالب (Template Method)",
          "en": "Template Method Pattern",
          "ok": false,
          "why": "طريقة القالب تعتمد الوراثة وتثبت هيكل الخوارزمية في الفئة الأساسية دون مرونة تبديلها ككائن مستقل وقت التشغيل."
        },
        {
          "ar": "نمط الاستراتيجية السلوكي (Strategy Pattern)",
          "en": "Strategy Pattern",
          "ok": true,
          "why": "الاستراتيجية تعرّف عائلة من خوارزميات الدفع وتغلف كلاً منها في فئة مستقلة وتجعلها قابلة للتبديل ديناميكياً."
        },
        {
          "ar": "نمط الأمر التنفيذي (Command Pattern)",
          "en": "Command Pattern",
          "ok": false,
          "why": "الأمر يغلف طلباً لإجراء معين ويدعم التراجع (Undo)، ولا يهدف لتعريف عائلة خوارزميات قابلة للتبديل."
        }
      ],
      "tip": "وقفة امتحانية قناصة: الكلمات الذهبية لنمط الاستراتيجية (Strategy): 'family of algorithms'، 'interchangeable at runtime'، واختيار استراتيجية المعالجة بديناميكية.",
      "n": 33
    },
    {
      "type": "mcq",
      "ref": "L4-S022",
      "q_ar": "نظام تداول أسهم يحتاج لتنبيه وتحديث شاشات عرض متعددة وتطبيقات جوال فور تغير سعر أي سهم بشكل تلقائي. ما هو النمط الأنسب لتنفيذ هذه العلاقة؟",
      "q_en": "A stock market system must automatically notify multiple displays and mobile apps whenever a stock price changes. Which pattern?",
      "opts": [
        {
          "ar": "نمط المفرد الإنشائي (Singleton Pattern)",
          "en": "Singleton Pattern",
          "ok": false,
          "why": "المفرد يضمن نسخة واحدة ولا يوفر آلية اشتراك وبث إشعارات ديناميكية عند تغير الأسعار."
        },
        {
          "ar": "نمط المزخرف الهيكلي (Decorator Pattern)",
          "en": "Decorator Pattern",
          "ok": false,
          "why": "المزخرف يضيف مسؤوليات جديدة لكائن، ولا ينشئ علاقة نشر واشتراك بين كائنات متعددة."
        },
        {
          "ar": "نمط المحول التوافقي (Adapter Pattern)",
          "en": "Adapter Pattern",
          "ok": false,
          "why": "المحول يوفق واجهات غير متوافقة ولا يختص بإرسال تنبيهات التحديث اللحظي."
        },
        {
          "ar": "نمط المراقب السلوكي (Observer Pattern)",
          "en": "Observer Pattern",
          "ok": true,
          "why": "المراقب يعرّف علاقة واحد إلى متعدد (One-to-Many)، حيث يرسل الناشر (Subject) إشعاراً تلقائياً لكافة المشتركين (Observers) عند تغير حالته."
        }
      ],
      "tip": "وقفة امتحانية قناصة: مفاتيح نمط المراقب (Observer): 'one-to-many dependency'، 'notify dependents automatically'، علاقة الناشر والمشتركين (Publisher / Subscribers).",
      "n": 34
    },
    {
      "type": "mcq",
      "ref": "L4-S010",
      "q_ar": "برنامج رسم وتصميم يدعم ميزات التراجع عن الإجراءات (Undo) وإعادة تنفيذها (Redo) وجدولة العمليات. ما نمط التصميم الأنسب لتحقيق ذلك؟",
      "q_en": "A graphic software supports Undo, Redo, and request queueing. Which design pattern is most suitable?",
      "opts": [
        {
          "ar": "نمط الأمر السلوكي (Command Pattern)",
          "en": "Command Pattern",
          "ok": true,
          "why": "الأمر يغلف كل طلب ككائن مستقل يحتوي على دالتي Execute و Undo مما يسهل حفظ تاريخ العمليات والتراجع عنها."
        },
        {
          "ar": "نمط الاستراتيجية (Strategy Pattern)",
          "en": "Strategy Pattern",
          "ok": false,
          "why": "الاستراتيجية تبدل خوارزميات المعالجة لكنها لا تحتفظ بحالة الطلبات السابقة أو تاريخ التراجع."
        },
        {
          "ar": "نمط الحالة الداخلية (State Pattern)",
          "en": "State Pattern",
          "ok": false,
          "why": "نمط الحالة يغير سلوك الكائن عند تغير حالته الداخلية ولكنه لا يدير طابور أوامر التراجع وإعادة التنفيذ."
        },
        {
          "ar": "نمط طريقة المصنع (Factory Method)",
          "en": "Factory Method Pattern",
          "ok": false,
          "why": "طريقة المصنع نمط إنشائي لإنتاج الكائنات ولا يدير تنفيذ الأوامر وسجل التاريخ البرمجي."
        }
      ],
      "tip": "وقفة امتحانية قناصة: مفاتيح نمط الأمر (Command): 'encapsulate request as object'، 'Undo/Redo support'، 'queuing and logging requests'.",
      "n": 35
    },
    {
      "type": "mcq",
      "ref": "L4-S015",
      "q_ar": "مستند يمر بثلاث مراحل: مسودة (Draft)، قيد المراجعة (Moderation)، ومنشور (Published). يتغير سلوك دالة Publish() جذرياً وفق المرحلة الحالية. ما النمط المطبق؟",
      "q_en": "A document passes through: Draft, Moderation, Published. The behavior of Publish() changes dramatically based on current phase. Which pattern?",
      "opts": [
        {
          "ar": "نمط الاستراتيجية (Strategy Pattern)",
          "en": "Strategy Pattern",
          "ok": false,
          "why": "في الاستراتيجية، العميل هو من يختار الخوارزمية المستقلة، بينما في نمط الحالة تنتقل الحالات ذاتياً وتعرف بعضها."
        },
        {
          "ar": "نمط الحالة السلوكي (State Pattern)",
          "en": "State Pattern",
          "ok": true,
          "why": "نمط الحالة يسمح للكائن بتغيير سلوكه عندما تتغير حالته الداخلية، ويبدو الكائن للعميل وكأنه غير فئته الأصلية."
        },
        {
          "ar": "نمط الواجهة الموحدة (Façade Pattern)",
          "en": "Façade Pattern",
          "ok": false,
          "why": "الواجهة الموحدة تبسط نظاماً معقداً ولا تمثل آلة حالات منتهية (Finite State Machine)."
        },
        {
          "ar": "نمط الوكيل الحامي (Proxy Pattern)",
          "en": "Proxy Pattern",
          "ok": false,
          "why": "الوكيل يتحكم في وصول الكائن ولا يغير سلوك الدوال بناءً على دورة حياة داخلية متغيرة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: مفتاح نمط الحالة (State): 'alters behavior when internal state changes'، آلة حالات منتهية (Finite State Machine) تنتقل تلقائياً.",
      "n": 36
    },
    {
      "type": "tf",
      "ref": "L4-S003",
      "q_ar": "يعرّف نمط الاستراتيجية (Strategy) عائلة من الخوارزميات، ويغلف كل منها، ويجعلها قابلة للتبديل أثناء وقت التشغيل.",
      "q_en": "The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ هذا هو التعريف القياسي الحرفي لنمط الاستراتيجية في كتاب GoF وسلايدات د. بيداء."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "الاستراتيجية مخصصة تحديداً لعزل الخوارزميات وتبديلها في وقت التشغيل دون تعديل الكائن الأصلي."
        }
      ],
      "tip": "وقفة امتحانية قناصة: احفظ التعريف الحرفي: Strategy defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime.",
      "n": 37
    },
    {
      "type": "tf",
      "ref": "L4-S022",
      "q_ar": "في نمط المراقب (Observer)، يرتبط كائن الناشر (Subject) بشكل وثيق ومباشر بجميع فئات المراقبين الملموسة.",
      "q_en": "In the Observer pattern, the Subject is tightly coupled to all concrete observer classes.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ الناشر يعتمد فقط على واجهة مجردة مشتركة (IObserver) محققاً ترابطاً ضعيفاً (Loose Coupling)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ الميزة الكبرى لنمط المراقب هي فك الترابط (Loose Coupling)؛ فالناشر لا يعرف سوى واجهة IObserver."
        }
      ],
      "tip": "وقفة امتحانية قناصة: فخ الترابط: نمط Observer يحقق ترابطاً ضعيفاً (Loose Coupling) بين الناشر والمشتركين عبر واجهة تجريدية موحدة.",
      "n": 38
    },
    {
      "type": "mcq",
      "ref": "L5-S022",
      "q_ar": "وفقاً لقاعدة التبعية (The Dependency Rule) في العمارة النظيفة (Clean Architecture)، كيف يجب أن تتجه تبعيات الكود المصدري بين الدوائر متحدة المركز؟",
      "q_en": "According to the Dependency Rule in Clean Architecture, how must source code dependencies point between concentric circles?",
      "opts": [
        {
          "ar": "من الدوائر الداخلية نحو الدوائر الخارجية وقواعد البيانات",
          "en": "From inner circles to outer circles and databases",
          "ok": false,
          "why": "هذا يعكس مبدأ العمارة النظيفة تماماً ويدمر استقلالية منطق الأعمال الداخلي عن تفاصيل التخزين."
        },
        {
          "ar": "في كلا الاتجاهين المتبادلين لضمان سرعة نقل ومعالجة البيانات",
          "en": "In both directions to ensure fast data communication",
          "ok": false,
          "why": "التبعية الدائرية وثنائية الاتجاه ممنوعة قطيعاً في هندسة البرمجيات النظيفة لتجنب الترابط الوثيق."
        },
        {
          "ar": "من الدوائر الخارجية إلى الدوائر الداخلية نحو المركز حصراً",
          "en": "From outer circles to inner circles toward the center",
          "ok": true,
          "why": "تنص قاعدة التبعية الحتمية على أن كود الطبقات الخارجية يعتمد على الطبقات الداخلية الأكثر تجريداً، والداخل لا يعرف الخارج."
        },
        {
          "ar": "بين الطبقات المتجاورة أفقياً فقط دون الرجوع لطبقة النطاق",
          "en": "Between horizontally adjacent layers only without domain",
          "ok": false,
          "why": "كافة المسارات المعمارية يجب أن تصب في النهاية باتجاه طبقة النطاق المركزية (Domain)."
        }
      ],
      "tip": "وقفة امتحانية قناصة: قاعدة التبعية (The Dependency Rule): السهم يشير دائماً إلى الداخل (Inward: Outer -> Inner). الطبقات الداخلية لا تعرف أي شيء عن الطبقات الخارجية.",
      "n": 39
    },
    {
      "type": "mcq",
      "ref": "L5-S027",
      "q_ar": "أي طبقة في العمارة النظيفة تقع في أعمق نقطة بالمركز، وتحتوي على الكيانات (Entities) وقواعد الأعمال العامة دون أي اعتماديات خارجية؟",
      "q_en": "Which layer in Clean Architecture lies at the innermost center, containing Entities and enterprise rules with zero external dependencies?",
      "opts": [
        {
          "ar": "طبقة التطبيق وحالات الاستخدام (Application Layer)",
          "en": "Application Layer",
          "ok": false,
          "why": "تحتوي Application على حالات الاستخدام (Use Cases) وتنسيق تدفق البيانات، وتقع في الحلقة التالية المحيطة بالنطاق."
        },
        {
          "ar": "طبقة البنية التحتية والبيانات (Infrastructure Layer)",
          "en": "Infrastructure Layer",
          "ok": false,
          "why": "تقع Infrastructure في الحلقات الخارجية وتتعامل مع قواعد البيانات والمكتبات الخارجية وتعتمد على الطبقات الداخلية."
        },
        {
          "ar": "طبقة العرض والواجهات البرمجية (Presentation Layer)",
          "en": "Presentation Layer",
          "ok": false,
          "why": "طبقة Presentation تقع في أقصى الخارج وتضم المتحكمات وشاشات المستخدم ونقاط نهاية API."
        },
        {
          "ar": "طبقة النطاق وجوهر الأعمال (Domain Layer)",
          "en": "Domain Layer",
          "ok": true,
          "why": "طبقة النطاق هي قلب النظام المستقل تماماً عن أي أطر عمل أو قواعد بيانات أو واجهات مستخدم، وتضم الكيانات الأساسية."
        }
      ],
      "tip": "وقفة امتحانية قناصة: الكيانات (Entities) وقواعد الأعمال العامة توضع حصراً في المركز: طبقة النطاق (Domain Layer)، وهي مستقلة 100%.",
      "n": 40
    },
    {
      "type": "mcq",
      "ref": "L5-S051",
      "q_ar": "أي طبقة في العمارة النظيفة تكون مسؤولة عن إدارة حالات الاستخدام (Use Cases) وتنسيق حركة البيانات بين الكيانات والواجهات التجريدية؟",
      "q_en": "Which layer in Clean Architecture is responsible for managing Application Use Cases and orchestrating data flow?",
      "opts": [
        {
          "ar": "طبقة التطبيق وحالات الاستخدام (Application Layer)",
          "en": "Application Layer",
          "ok": true,
          "why": "تحتوي طبقة التطبيق على منطق حالات استخدام النظام (Use Cases / Commands / Queries / DTOs) وتوجه العمليات."
        },
        {
          "ar": "طبقة النطاق وقواعد الكيانات (Domain Layer)",
          "en": "Domain Layer",
          "ok": false,
          "why": "تقتصر Domain على قواعد الكيانات المستقلة عن حالات استخدام تطبيق بعينه."
        },
        {
          "ar": "طبقة البنية التحتية والعتاد (Infrastructure Layer)",
          "en": "Infrastructure Layer",
          "ok": false,
          "why": "البنية التحتية تنفذ العمليات التقنية (SQL, Files, Email) ولا تقود منطق حالات الاستخدام."
        },
        {
          "ar": "طبقة العرض ونقاط الاتصال (Presentation Layer)",
          "en": "Presentation Layer",
          "ok": false,
          "why": "طبقة العرض تستقبل طلبات المستخدم من المتصفح وتمررها لطبقة التطبيق لمعالجتها."
        }
      ],
      "tip": "وقفة امتحانية قناصة: حالات الاستخدام (Use Cases) ومنطق التطبيق (Application Business Rules) تتبع حصراً طبقة Application.",
      "n": 41
    },
    {
      "type": "mcq",
      "ref": "L5-S058",
      "q_ar": "وفقاً لمنهج د. بيداء لعلع، أين يتم وضع واجهة المستودع التجريدية (مثل IUserRepository) في العمارة النظيفة ولماذا؟",
      "q_en": "According to Dr. Baidaa's syllabus, where is the repository interface (e.g., IUserRepository) placed in Clean Architecture and why?",
      "opts": [
        {
          "ar": "في طبقة البنية التحتية (Infrastructure) لأنها تتعامل مع قواعد البيانات",
          "en": "In Infrastructure layer as it deals with databases",
          "ok": false,
          "why": "وضع الواجهة في Infrastructure يجبر طبقة Application على الاعتماد على طبقة خارجية فينكسر مبدأ التبعية للداخل."
        },
        {
          "ar": "في طبقة التطبيق (Application) لأنها تحدد العقد لحالات الاستخدام",
          "en": "In Application layer as contract for Use Cases",
          "ok": true,
          "why": "طبقة Application تحدد العقد التجريدي الذي تحتاجه لحالات الاستخدام، وتفوض تنفيذه لطبقة Infrastructure تطبيقاً لـ DIP."
        },
        {
          "ar": "في طبقة النطاق (Domain) لأنها تحتوي على كافة الكيانات والواجهات",
          "en": "In Domain layer because it contains all entities",
          "ok": false,
          "why": "في هذا المنهج المعتمد، تُعزل واجهات المستودعات في Application لتظل Domain مقتصرة على الكيانات النقية."
        },
        {
          "ar": "في طبقة العرض (Presentation) لكي تتمكن المتحكمات من استدعائها",
          "en": "In Presentation layer so controllers can call it",
          "ok": false,
          "why": "المتحكمات لا تعرف تفاصيل قواعد البيانات ويحظر وضع واجهات المستودعات في طبقة العرض."
        }
      ],
      "tip": "وقفة امتحانية قناصة: السؤال الذهبي المتكرر للدكتورة: واجهة المستودع (IUserRepository) توضع في Application، بينما تطبيقها الفعلي (UserRepository) يوضع في Infrastructure.",
      "n": 42
    },
    {
      "type": "mcq",
      "ref": "L5-S074",
      "q_ar": "أين يجب أن يقع التنفيذ الفعلي الملموس لواجهة المستودع (مثل SqlUserRepository و EF Core DbContext) في العمارة النظيفة؟",
      "q_en": "Where must the concrete implementation of the repository interface (e.g., SqlUserRepository & EF DbContext) reside in Clean Architecture?",
      "opts": [
        {
          "ar": "في طبقة النطاق المركزية النظيفة (Domain Layer)",
          "en": "Domain Layer",
          "ok": false,
          "why": "يحظر تماماً تضمين أي كود SQL أو مكتبات خارجية في طبقة النطاق للحفاظ على نقائها."
        },
        {
          "ar": "في طبقة التطبيق وحالات الاستخدام (Application Layer)",
          "en": "Application Layer",
          "ok": false,
          "why": "طبقة Application تعتمد على الواجهات التجريدية فقط ولا تعرف التفاصيل التقنية لقواعد البيانات."
        },
        {
          "ar": "في طبقة البنية التحتية والتقنيات (Infrastructure Layer)",
          "en": "Infrastructure Layer",
          "ok": true,
          "why": "كافة التفاصيل التقنية للاتصال بقواعد البيانات واستخدام مكتبات خارجية مثل Entity Framework توضع في Infrastructure."
        },
        {
          "ar": "في طبقة واجهة المستخدم والعرض (Presentation Layer)",
          "en": "Presentation Layer",
          "ok": false,
          "why": "طبقة Presentation مخصصة لمعالجة طلبات HTTP والواجهات الرسومية ولا تتعامل مع جداول SQL مباشرة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: قاعدة التكامل: الواجهة Interface في Application · التنفيذ الملموس Implementation مع EF Core في Infrastructure.",
      "n": 43
    },
    {
      "type": "mcq",
      "ref": "L5-S085",
      "q_ar": "ما هو المكوّن أو الطبقة المسؤولة عن استقبال طلبات HTTP وتحويلها إلى كائنات DTO ثم استدعاء أوامر حالات الاستخدام في العمارة النظيفة؟",
      "q_en": "Which component or layer is responsible for receiving HTTP requests, mapping them to DTOs, and calling Use Cases?",
      "opts": [
        {
          "ar": "طبقة النطاق وقواعد الأعمال (Domain Layer / Entities)",
          "en": "Domain Layer / Entities",
          "ok": false,
          "why": "طبقة النطاق لا تعرف شيئاً عن بروتوكول HTTP أو طلبات الشبكة أو كائنات DTO."
        },
        {
          "ar": "طبقة البنية التحتية والتخزين (Infrastructure Layer)",
          "en": "Infrastructure Layer",
          "ok": false,
          "why": "البنية التحتية تنفذ عمليات التخزين والتكامل ولا تستقبل طلبات المتصفح الواردة."
        },
        {
          "ar": "إطار عمل حقن التبعيات وحيداً (DI Container Engine)",
          "en": "DI Container Engine alone",
          "ok": false,
          "why": "محرك DI يقوم بحل وحقن الكائنات ولكنه ليس المكون البرمجي الذي يحلل مسارات URL ويستقبل الطلبات."
        },
        {
          "ar": "طبقة العرض والمتحكمات (Presentation Layer / Controllers)",
          "en": "Presentation Layer / Controllers",
          "ok": true,
          "why": "المتحكمات (Controllers) ونقاط نهاية API تمثل حلقة الوصل بين بروتوكول HTTP الخارجي ومنطق حالات الاستخدام الداخلي."
        }
      ],
      "tip": "وقفة امتحانية قناصة: المتحكمات (Controllers) في طبقة Presentation: تستقبل طلبات HTTP، تتحقق من صحة المدخلات، وتفوض العمل لطبقة Application.",
      "n": 44
    },
    {
      "type": "mcq",
      "ref": "L5-S065",
      "q_ar": "ما هي فترة الحياة (DI Lifetime) في ASP.NET Core التي تقوم بإنشاء نسخة جديدة من الخدمة مع كل طلب حقن فردي عبر باني الكلاس؟",
      "q_en": "Which DI lifetime in ASP.NET Core creates a new instance of the service every time it is injected?",
      "opts": [
        {
          "ar": "فترة الحياة العابرة اللحظية (Transient Lifetime)",
          "en": "Transient Lifetime",
          "ok": true,
          "why": "الخدمات المعرفة بـ Transient يُعاد إنشاؤها في كل مرة يُطلب فيها حقنها، وهي مثالية للخدمات خفيفة الوزن وعديمة الحالة."
        },
        {
          "ar": "فترة الحياة المحصورة بالطلب (Scoped Lifetime)",
          "en": "Scoped Lifetime",
          "ok": false,
          "why": "الخدمة تنشأ مرة واحدة فقط لكل طلب عميل HTTP وتتشارك بين كافة الكلاسات التي تطلبها داخل نفس الطلب."
        },
        {
          "ar": "فترة الحياة المفردة للتطبيق (Singleton Lifetime)",
          "en": "Singleton Lifetime",
          "ok": false,
          "why": "الخدمة تنشأ مرة واحدة فقط عند أول طلب وتظل حية في الذاكرة طوال فترة تشغيل التطبيق بالكامل."
        },
        {
          "ar": "فترة الحياة الساكنة الدائمة (Static Lifetime)",
          "en": "Static Lifetime",
          "ok": false,
          "why": "لا يوجد خيار رسمي في حاوية ASP.NET Core يسمى Static Lifetime."
        }
      ],
      "tip": "وقفة امتحانية قناصة: ثلاثي فترات حياة DI: Transient = نسخة جديدة مع كل حقن · Scoped = نسخة واحدة لكل طلب HTTP · Singleton = نسخة واحدة للأبد.",
      "n": 45
    },
    {
      "type": "mcq",
      "ref": "L5-S067",
      "q_ar": "لماذا يُسجل كائن سياق قاعدة البيانات (EF Core DbContext) عادةً بفترة حياة Scoped في تطبيقات ASP.NET Core؟",
      "q_en": "Why is EF Core DbContext typically registered with a Scoped lifetime in ASP.NET Core applications?",
      "opts": [
        {
          "ar": "لأن DbContext آمن تماماً ضد تضارب مسالك التنفيذ المتزامنة",
          "en": "Because DbContext is thread-safe across concurrent threads",
          "ok": false,
          "why": "DbContext ليس آمناً مع الخيوط المتزامنة (Not Thread-Safe)، ولذلك يُحظر تسجيله كـ Singleton."
        },
        {
          "ar": "لتوفير نسخة واحدة لكل طلب HTTP تضمن وحدة العمل وعزل البيانات",
          "en": "To provide one instance per HTTP request for Unit of Work",
          "ok": true,
          "why": "فترة Scoped تتيح مشاركة سياق المعاملة وتتبع التغييرات طوال معالجة الطلب، مع تدميره وتحرير الاتصال عند انتهاء الطلب."
        },
        {
          "ar": "لمنع استهلاك الذاكرة عبر إعادة إنشائه مع كل استدعاء لدالة",
          "en": "To prevent memory usage by recreating it on each method call",
          "ok": false,
          "why": "إعادة إنشائه مع كل دالة هو سلوك Transient ويفسد تتبع التغييرات لوحدة العمل (Unit of Work)."
        },
        {
          "ar": "للسماح للعميل بالاحتفاظ بنفس الاتصال بقاعدة البيانات مدى الحياة",
          "en": "To allow clients to keep database connection alive forever",
          "ok": false,
          "why": "الاحتفاظ بالاتصال للأبد يسبب تسريب اتصالات ويعطل قاعدة البيانات."
        }
      ],
      "tip": "وقفة امتحانية قناصة: DbContext يسجل دائماً بـ Scoped؛ لأنه يمثل وحدة عمل (Unit of Work) للطلب، ولأنه ليس Thread-Safe فيحظر جعله Singleton.",
      "n": 46
    },
    {
      "type": "mcq",
      "ref": "L5-S069",
      "q_ar": "ما هو الخطر المعماري الناتج عن حقن خدمة محصورة النطاق (Scoped Service مثل DbContext) داخل خدمة مفردة (Singleton Service)؟",
      "q_en": "What is the architectural hazard of injecting a Scoped service into a Singleton service?",
      "opts": [
        {
          "ar": "إعادة بناء تطبيق الويب بالكامل وتوقف محرك Kestrel عن العمل",
          "en": "Rebuilding the web app completely and stopping Kestrel server",
          "ok": false,
          "why": "التطبيق لا يعيد بناء نفسه برمجياً، بل يقع الخطأ أثناء وقت التشغيل بسبب احتجاز الموارد."
        },
        {
          "ar": "تحويل قاعدة البيانات تلقائياً من نمط علائقي إلى نمط NoSQL",
          "en": "Automatically converting relational database to NoSQL format",
          "ok": false,
          "why": "لا علاقة لحقن التبعيات بنوع محرك قاعدة البيانات أو تحويل جداولها."
        },
        {
          "ar": "فخ الاحتجاز (Captive Dependency) مسبباً تسريباً وتضارباً في البيانات",
          "en": "Captive Dependency causing memory leak and concurrency issues",
          "ok": true,
          "why": "الخدمة المفردة ستحتجز نسخة Scoped طوال حياة التطبيق، مما يحولها عملياً إلى Singleton ويسبب كسر عزل البيانات وتضارب المسالك."
        },
        {
          "ar": "إجبار كافة المتحكمات على العمل بالنمط المتزامن الإجرائي القديم",
          "en": "Forcing all controllers to run in procedural synchronous mode",
          "ok": false,
          "why": "المتحكمات تستمر في العمل غير المتزامن ولكنها ستواجه استثناءات تشغيلية."
        }
      ],
      "tip": "وقفة امتحانية قناصة: فخ الاحتجاز (Captive Dependency): حقن خدمة Scoped داخل Singleton خطأ معماري فادح لأن الـ Singleton يحتجزها للأبد!",
      "n": 47
    },
    {
      "type": "tf",
      "ref": "L5-S022",
      "q_ar": "في العمارة النظيفة، يمكن لطبقة النطاق (Domain) أن تعتمد مباشرة على طبقة البنية التحتية (Infrastructure) لتسريع حفظ البيانات.",
      "q_en": "In Clean Architecture, the Domain layer can directly depend on the Infrastructure layer to speed up saving data.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ طبقة النطاق مستقلة تماماً ومحرم عليها الاعتماد على أي طبقة خارجية."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ تنص قاعدة التبعية على أن التبعيات تتجه للداخل فقط؛ فالبنية التحتية هي التي تعتمد على النطاق وليس العكس."
        }
      ],
      "tip": "وقفة امتحانية قناصة: قاعدة مطلقة: طبقة Domain لا تعتمد على أي طبقة أخرى إطلاقاً (Zero Dependencies). أي خيار يقول عكس ذلك هو خيار خاطئ.",
      "n": 48
    },
    {
      "type": "tf",
      "ref": "L5-S094",
      "q_ar": "في المعمارية السليمة، يجب أن تحتوي المتحكمات (Controllers) على كامل منطق الأعمال والتحقق المالي للنظام.",
      "q_en": "In proper architecture, Controllers should contain all business logic and financial validations.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ هذا يولد متحكمات سمينة (Fat Controllers) تنتهك مبدأ SRP وتخلط العرض بالأعمال."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ يجب أن تظل المتحكمات نحيفة (Thin Controllers)، ويتم تفويض منطق الأعمال لحالات الاستخدام في طبقة التطبيق."
        }
      ],
      "tip": "وقفة امتحانية قناصة: سؤال امتحاني نصي للدكتورة بيداء: Controllers يجب ألا تحتوي على منطق الأعمال (Business Logic) بل تفوضه لطبقة Application.",
      "n": 49
    },
    {
      "type": "tf",
      "ref": "L5-S065",
      "q_ar": "تتيح حاوية حقن التبعيات (DI) تقليل الترابط الوثيق بين فئات النظام وتسهيل كتابة اختبارات الوحدة (Unit Testing).",
      "q_en": "Dependency Injection helps loosely couple system classes and facilitates Unit Testing.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ حقن التجريدات يتيح استبدال الخدمات الحقيقية بكائنات وهمية (Mock Objects) أثناء الاختبار المستقل."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "الفائدة الكبرى لـ DI هي فك الترابط المباشر والسماح باختبار كل وحدة برمجية في معزل عن البنية التحتية."
        }
      ],
      "tip": "وقفة امتحانية قناصة: الفائدة المزدوجة لحقن التبعيات (DI): Loose Coupling (فك الترابط) + High Testability (سهولة الاختبار باختبارات الوحدة).",
      "n": 50
    },
    {
      "type": "mcq",
      "ref": "L6-S008",
      "q_ar": "ما هي الخاصية المعمارية الأساسية لخدمات الويب المبنية على معمارية REST (Representational State Transfer)؟",
      "q_en": "What is the core architectural constraint of web services built on REST architecture?",
      "opts": [
        {
          "ar": "الاعتماد الحصري على تنسيق XML واستخدام بروتوكول SOAP فقط",
          "en": "Exclusive reliance on XML format and SOAP protocol only",
          "ok": false,
          "why": "خدمات REST تدعم تنسيقات متعددة أبرزها JSON، بينما XML الصارم هو سمة بروتوكول SOAP."
        },
        {
          "ar": "الاحتفاظ بجلسة اتصال حية ودائمة بالذاكرة لكل متصفح زائر",
          "en": "Maintaining persistent in-memory session for each client",
          "ok": false,
          "why": "هذا يعاكس قيد Statelessness تماماً ويحد من قابلية التوسع الأفقي للسيرفرات."
        },
        {
          "ar": "توفير نقطة نهاية واحدة موحدة لكافة العمليات والاستعلامات",
          "en": "Providing a single endpoint for all operations and queries",
          "ok": false,
          "why": "نقطة النهاية الواحدة هي سمة معمارية GraphQL (/graphql)، بينما REST تعتمد على مسارات متعددة للموارد."
        },
        {
          "ar": "عديمة الحالة (Stateless) بحيث يحتوي كل طلب على كافة بياناته",
          "en": "Statelessness where each request contains all context",
          "ok": true,
          "why": "تنص قيود REST الستة على أن السيرفر لا يخزن أي حالة جلسة للعميل بين الطلبات المتتالية."
        }
      ],
      "tip": "وقفة امتحانية قناصة: القيد الجوهري لـ REST: عديمة الحالة (Stateless)؛ فكل طلب HTTP مستقل تماماً ويحمل بيانات اعتماده ومصادقته.",
      "n": 51
    },
    {
      "type": "mcq",
      "ref": "L6-S014",
      "q_ar": "أي بروتوكول أو نمط واجهات يعتمد على تنسيق ثنائي مضغوط (Protocol Buffers) ومبني فوق HTTP/2 لدعم الأداء الفائق والتدفق ثنائي الاتجاه؟",
      "q_en": "Which API style uses binary Protocol Buffers over HTTP/2 supporting multiplexing and bidirectional streaming?",
      "opts": [
        {
          "ar": "واجهات استدعاء الإجراءات عن بُعد من جوجل (gRPC)",
          "en": "Google Remote Procedure Call (gRPC)",
          "ok": true,
          "why": "تعتمد gRPC على Protobuf لتسلسل البيانات الثنائية وتستفيد من مزايا HTTP/2 لتحقيق أقل زمن تأخير بين الخوادم."
        },
        {
          "ar": "بروتوكول الوصول البسيط للكائنات المعتمد على XML (SOAP)",
          "en": "Simple Object Access Protocol (SOAP)",
          "ok": false,
          "why": "يعتمد SOAP على نصوص XML الثقيلة وعقود WSDL وبنيته أبطأ بكثير من التسلسل الثنائي."
        },
        {
          "ar": "لغة الاستعلام المرنة لواجهات الويب الحديثة (GraphQL)",
          "en": "GraphQL Query Language for Web APIs",
          "ok": false,
          "why": "تعتمد GraphQL على نصوص JSON للاستعلام والاستجابة ولا تستخدم Protobuf الثنائي."
        },
        {
          "ar": "الواجهات البرمجية التقليدية لنقل الحالة التمثيلية (REST)",
          "en": "Representational State Transfer (REST APIs)",
          "ok": false,
          "why": "تستخدم REST نصوص JSON أو XML عبر HTTP/1.1 أو HTTP/2 دون استخدام Protocol Buffers كمعيار إجباري."
        }
      ],
      "tip": "وقفة امتحانية قناصة: مفاتيح gRPC: 'Protocol Buffers (Protobuf)'، 'Binary serialization'، 'HTTP/2'، 'High performance & Streaming'.",
      "n": 52
    },
    {
      "type": "mcq",
      "ref": "L6-S018",
      "q_ar": "تواجه مشكلة جلب بيانات زائدة لا تحتاجها (Over-fetching) وجلب بيانات ناقصة تتطلب عدة طلبات (Under-fetching). ما هو الحل المعماري؟",
      "q_en": "You face Over-fetching and Under-fetching data issues across mobile endpoints. What is the architectural solution?",
      "opts": [
        {
          "ar": "التحول إلى بروتوكول SOAP واستخدام ملفات تعريف WSDL الصارمة",
          "en": "Switch to SOAP protocol using strict WSDL definitions",
          "ok": false,
          "why": "بروتوكول SOAP ينقل رسائل XML كاملة وثقيلة ويزيد من حجم البيانات المنقولة عبر الشبكة."
        },
        {
          "ar": "اعتماد واجهات GraphQL التي تتيح للعميل تحديد الحقول بدقة",
          "en": "Adopt GraphQL allowing clients to request exact fields",
          "ok": true,
          "why": "تسمح GraphQL للعميل بطلب الحقول التي يحتاجها فقط في استعلام واحد، مما يقضي على الإفراط والنقص في نقل البيانات."
        },
        {
          "ar": "استخدام أسلوب المصادقة الأساسية وتشفير نصوص الطلب بـ Base64",
          "en": "Use Basic Authentication and encode requests in Base64",
          "ok": false,
          "why": "المصادقة تختص بالتحقق من الهوية ولا علاقة لها بحجم أو بنية البيانات المسترجعة."
        },
        {
          "ar": "تحويل كافة دوال السيرفر للعمل بنمط الاستدعاء المتزامن البطيء",
          "en": "Convert all server methods to synchronous execution mode",
          "ok": false,
          "why": "التزامن البرمجي يقلل أداء السيرفر ولا يحل مشكلة بنية وحجم استجابة JSON."
        }
      ],
      "tip": "وقفة امتحانية قناصة: حل مشكلتي (Over-fetching & Under-fetching) هو حصراً: GraphQL؛ لأن العميل هو من يحدد الحقول المطلوبة بدقة.",
      "n": 53
    },
    {
      "type": "mcq",
      "ref": "L6-S022",
      "q_ar": "ماذا يعني مصطلح (Idempotent Method) في بروتوكول HTTP وأي الدوال التالية تنطبق عليها هذه الخاصية بشكل قياسي؟",
      "q_en": "What does the term Idempotent mean in HTTP, and which of the following methods is standardly idempotent?",
      "opts": [
        {
          "ar": "إنشاء مورد جديد برقم فريد مع كل طلب متكرر، مثل دالة POST",
          "en": "Creating new resource with unique ID on each request, like POST",
          "ok": false,
          "why": "هذا هو السلوك غير العكوس (Non-Idempotent)، ودالة POST تنشئ مدخلاً جديداً مع كل إرسال متكرر."
        },
        {
          "ar": "حظر التخزين المؤقت وحذف كافة سجلات النظام، مثل دالة OPTIONS",
          "en": "Banning caching and deleting system records, like OPTIONS",
          "ok": false,
          "why": "دالة OPTIONS تستعلم عن طرق الاتصال المتاحة ولا تعدل أو تحذف أي سجلات في السيرفر."
        },
        {
          "ar": "تنفيذ الطلب عدة مرات ينتج نفس الأثر الجانبي، مثل دالة PUT",
          "en": "Multiple identical requests yield same side-effect, e.g., PUT",
          "ok": true,
          "why": "الدالة العكوسة تعطي نفس النتيجة على حالة السيرفر عند تكرارها؛ وPUT و DELETE و GET دوال Idempotent، بينما POST ليست كذلك."
        },
        {
          "ar": "تحديث حقل واحد فقط دون لمس بقية الحقول، مثل دالة TRACE",
          "en": "Updating single field without touching others, like TRACE",
          "ok": false,
          "why": "تحديث الحقول الجزئية هو وظيفة PATCH، بينما TRACE مخصصة لتشخيص مسار الشبكة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: جدول الدوال العكوسة (Idempotent): GET و PUT و DELETE هي دوال Idempotent (نفس الأثر مهما تكررت) · دالة POST ليست Idempotent.",
      "n": 54
    },
    {
      "type": "mcq",
      "ref": "L6-S028",
      "q_ar": "مما يتكون رمز الويب المشفر (JSON Web Token - JWT) وما الأجزاء الثلاثة التي تفصل بينها النقاط (Dots) في بنيته؟",
      "q_en": "What are the three dot-separated components that make up a JSON Web Token (JWT)?",
      "opts": [
        {
          "ar": "اسم المستخدم، وكلمة المرور المشفرة، ورقم المعرف السري",
          "en": "Username, hashed password, secret ID number",
          "ok": false,
          "why": "رمز JWT لا يحتوي أبداً على كلمة المرور، ويحظر تخزين البيانات الحساسة داخل حمولته القابلة لفك التشفير."
        },
        {
          "ar": "نطاق الخادم، وعنوان IP للعميل، والمفتاح العام للتشفير",
          "en": "Server domain, client IP address, public encryption key",
          "ok": false,
          "why": "هذه بيانات شبكة عادية ولا تمثل البنية القياسية لرمز JWT المصادق عليه."
        },
        {
          "ar": "رمز المصادقة، وتاريخ الإصدار، وشهادة الأمان الموقعة رقمياً",
          "en": "Authentication code, issue date, signed certificate",
          "ok": false,
          "why": "تاريخ الإصدار يوضع داخل قسم الحمولة كأحد المطالبات وليس كجزء هيكلي منفصل من أجزاء التوكن الثلاثة."
        },
        {
          "ar": "الترويسة، والحمولة، والتوقيع الرقمي (Header, Payload, Signature)",
          "en": "Header, Payload, Signature",
          "ok": true,
          "why": "الترويسة تحدد نوع الرمز والخوارزمية، والحمولة تضم المطالبات (Claims)، والتوقيع يضمن عدم التلاعب بالبيانات."
        }
      ],
      "tip": "وقفة امتحانية قناصة: بنية JWT الثلاثية الحتمية: Header . Payload . Signature. التوقيع الرقمي يضمن السلامة واكتشاف التلاعب (Tamper-evident).",
      "n": 55
    },
    {
      "type": "tf",
      "ref": "L6-S022",
      "q_ar": "تعتبر دالة POST في بروتوكول HTTP دالة عكوسة (Idempotent) لأن تكرار استدعائها لا يؤثر على قاعدة البيانات.",
      "q_en": "The HTTP POST method is idempotent because calling it repeatedly does not affect the database.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ تكرار POST ينشئ موارد متعددة ومكررة في السيرفر، ولذلك فهي غير عكوسة (Non-Idempotent)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ POST ليست Idempotent لأن كل استدعاء يغير حالة النظام وينشئ سجلاً جديداً."
        }
      ],
      "tip": "وقفة امتحانية قناصة: قاعدة امتحانية ثابتة: POST ليست Idempotent على الإطلاق · PUT و DELETE و GET هي دوال Idempotent.",
      "n": 56
    },
    {
      "type": "mcq",
      "ref": "L7-S005",
      "q_ar": "لديك عملية حسابية مكثفة لمعالجة وضغط آلاف الصور على معالج متعدد الأنوية (Multi-core). ما نوع هذا العمل وما المعالجة المثلى له؟",
      "q_en": "You have an intensive image compression task on a multi-core CPU. What type of workload is this and how to optimize it?",
      "opts": [
        {
          "ar": "عمل مقيد بالمعالج (CPU-Bound) والأفضل تشغيله بالتوازي",
          "en": "CPU-Bound workload optimized using Parallel processing",
          "ok": true,
          "why": "العمليات الحسابية المكثفة تستهلك دورات المعالج وتستفيد مباشرة من التوازي الحقيقي بتشغيل خيوط متعددة عبر Task.Run أو Parallel.For."
        },
        {
          "ar": "عمل مقيد بالإدخال والإخراج (I/O-Bound) والأفضل تشغيله بـ async",
          "en": "I/O-Bound workload optimized using non-blocking async",
          "ok": false,
          "why": "معالجة الصور لا تعتمد على انتظار أقراص أو شبكة، بل تستهلك قدرة المعالج الحسابية وتعتبر CPU-Bound."
        },
        {
          "ar": "عمل يعتمد على الذاكرة الساكنة ويجب تنفيذه داخل الخيط الرئيسي",
          "en": "Static memory task that must run on the main UI thread",
          "ok": false,
          "why": "تشغيل عمليات ثقيلة على الخيط الرئيسي (Main Thread) يجمد واجهة المستخدم ويؤدي لتوقف التطبيق."
        },
        {
          "ar": "عمل أحادي الإجراء لا يمكن توزيعه على أكثر من نواة معالجة",
          "en": "Single-step task that cannot be split across cores",
          "ok": false,
          "why": "معالجة الصور عملية قابلة للتجزئة التلقائية وتستفيد من كامل أنوية المعالج المتاحة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: CPU-Bound (حسابات، تشفير، معالجة صور) = Parallel / Multi-core · I/O-Bound (قاعدة بيانات، ملفات، شبكة) = Asynchronous / async-await.",
      "n": 57
    },
    {
      "type": "mcq",
      "ref": "L7-S014",
      "q_ar": "ما هو الفارق المعماري الجوهري بين قفل المزامنة lock (Monitor) وأداة المزامنة Mutex في بيئة .NET؟",
      "q_en": "What is the key architectural difference between lock (Monitor) and Mutex in .NET?",
      "opts": [
        {
          "ar": "القفل lock يسمح لعدة خيوط بالدخول بينما Mutex يسمح بخيط واحد",
          "en": "lock allows multiple threads, Mutex strictly allows one",
          "ok": false,
          "why": "كلا النمطين يوفران إقصاءً متبادلاً (Mutual Exclusion) يسمح بدخول خيط واحد فقط في المرة الواحدة."
        },
        {
          "ar": "القفل lock محصور بنفس العملية بينما Mutex يعمل عبر عمليات متعددة",
          "en": "lock limited to single process, Mutex across multiple processes",
          "ok": true,
          "why": "القفل lock خفيف وسريع ويزامن مسالك نفس التطبيق، بينما Mutex كائن على مستوى نظام التشغيل يزامن بين عدة تطبيقات مختلفة."
        },
        {
          "ar": "القفل lock مخصص لذاكرة الكومة و Mutex مخصص لذاكرة المكدس",
          "en": "lock for Heap memory, Mutex strictly for Stack memory",
          "ok": false,
          "why": "المزامنة تحمي الموارد والبيانات المشتركة ولا ترتبط بتقسيم مساحة الذاكرة المجردة."
        },
        {
          "ar": "القفل lock يعتمد على العتاد بينما Mutex يعتمد على المترجم فقط",
          "en": "lock relies on hardware, Mutex relies on compiler only",
          "ok": false,
          "why": "أداة Interlocked هي التي تعتمد على تعليمات العتاد الذرية، بينما Mutex يعتمد على نواة نظام التشغيل."
        }
      ],
      "tip": "وقفة امتحانية قناصة: احفظ هذا الفارق الامتحاني الحاسم: lock / Monitor = مزامنة داخل نفس البرنامج (Same Process) · Mutex = مزامنة بين عدة برامج مختلفة (Cross-Process).",
      "n": 58
    },
    {
      "type": "mcq",
      "ref": "L7-S018",
      "q_ar": "أي أداة مزامنة في C# تُستخدم عندما تريد السماح لعدد محدد من الخيوط المتزامنة (مثلاً 5 خيوط معاً) بالوصول لمورد مشترك في نفس الوقت؟",
      "q_en": "Which synchronization primitive in C# limits concurrent access to a resource to a specific number of threads (e.g., 5)?",
      "opts": [
        {
          "ar": "القفل التبادلي الحصري الفردي (lock / Monitor)",
          "en": "lock / Monitor primitive",
          "ok": false,
          "why": "القفل يسمح بخيط واحد فقط بالدخول ويحجب كافة الخيوط الأخرى حتى خروجه."
        },
        {
          "ar": "أداة العمليات الذرية السريعة (Interlocked)",
          "en": "Interlocked atomic operations",
          "ok": false,
          "why": "تقتصر Interlocked على تعديل المتغيرات الرقمية البسيطة مثل الزيادة والنقصان الذريين دون حماية بلوك كود كامل."
        },
        {
          "ar": "إشارة المرور المنظمة للمسالك (Semaphore / SemaphoreSlim)",
          "en": "Semaphore / SemaphoreSlim",
          "ok": true,
          "why": "تتحكم أداة Semaphore بعدد الخيوط المسموح لها بالدخول المتزامن عبر عداد داخلي (Count) يتناقص بالدخول ويتزايد بالخروج."
        },
        {
          "ar": "حاجز كسر الدوائر للموزعات (Circuit Breaker)",
          "en": "Circuit Breaker pattern",
          "ok": false,
          "why": "حاجز الدوائر نمط مرونة للشبكات الموزعة وليس أداة مزامنة خيوط تشغيلية داخل نظام التشغيل."
        }
      ],
      "tip": "وقفة امتحانية قناصة: عندما يطلب السؤال السماح لـ (N concurrent threads) بالدخول معاً، فالإجابة حتماً هي Semaphore / SemaphoreSlim.",
      "n": 59
    },
    {
      "type": "mcq",
      "ref": "L7-S032",
      "q_ar": "ما هو الفارق الجوهري في إدارة الذاكرة بين المكدس (Stack) والكومة (Heap) في بيئة تشغيل دوت نت؟",
      "q_en": "What is the fundamental difference between Stack and Heap memory in .NET runtime?",
      "opts": [
        {
          "ar": "المكدس يخزن الكائنات الضخمة والكومة تخزن المتغيرات الأولية فقط",
          "en": "Stack stores huge objects, Heap stores primitives only",
          "ok": false,
          "why": "العكس تماماً؛ المكدس محدود الحجم، بينما الكائنات الضخمة تُخصص في الكومة وتحديداً في قسم LOH."
        },
        {
          "ar": "المكدس تتم إدارته بواسطة GC والكومة تحرر يدوياً عبر المبرمج",
          "en": "Stack managed by GC, Heap manually freed by developers",
          "ok": false,
          "why": "في C# الكومة تدار آلياً بواسطة GC ولا يتطلب المطور تحرير الذاكرة يدوياً كما في لغة C++."
        },
        {
          "ar": "المكدس مشترك بين كافة الخيوط والكومة خاصة بكل خيط مستقل",
          "en": "Stack shared across threads, Heap private to each thread",
          "ok": false,
          "why": "العكس تماماً؛ كل خيط يمتلك المكدس الخاص به، بينما الكومة مشتركة بين كافة خيوط نفس العملية."
        },
        {
          "ar": "المكدس سريع ومنظم بـ LIFO للمحليات والكومة للديناميكيات بـ GC",
          "en": "Stack is fast LIFO for locals, Heap dynamic managed by GC",
          "ok": true,
          "why": "المكدس يدير متغيرات الدوال المحلية ويفرغ تلقائياً بانتهاء الدالة، بينما الكومة تخزن الكائنات وتدار بواسطة جامع النفايات GC."
        }
      ],
      "tip": "وقفة امتحانية قناصة: المكدس (Stack) = سريع، LIFO، خاص بكل خيط، المتغيرات المحلية · الكومة (Heap) = ديناميكي، مشترك بين الخيوط، الكائنات، يدار بـ GC.",
      "n": 60
    },
    {
      "type": "tf",
      "ref": "L7-S038",
      "q_ar": "في جامع النفايات (Garbage Collector) لدوت نت، يتم فحص وتفريغ كائنات الجيل الثاني (Gen 2) بوتيرة أسرع وأكثر تكراراً من الجيل صفر (Gen 0).",
      "q_en": "In .NET GC, Generation 2 (Gen 2) objects are collected more frequently than Generation 0 (Gen 0).",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ الجيل صفر (Gen 0) هو الأسرع والأكثر تفريغاً (تفريغ لحظي للكائنات المؤقتة القصيرة)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ Gen 0 يفرغ باستمرار لكفاءته العالية، بينما تفريغ Gen 2 (Full GC) مكلف جداً ونادر الحدوث."
        }
      ],
      "tip": "وقفة امتحانية قناصة: تدرج أجيال الـ GC: Gen 0 يفرغ بأعلى وتيرة (Most Frequent) · Gen 2 يفرغ بأقل وتيرة (Least Frequent / Full GC).",
      "n": 61
    },
    {
      "type": "mcq",
      "ref": "L8-S018",
      "q_ar": "أي نمط من أنماط مرونة النظم الموزعة يمنع تكرار إرسال الطلبات إلى خدمة خارجية معطلة لحماية النظام من الانهيار التتابعي عبر حالات (Closed, Open, Half-Open)؟",
      "q_en": "Which distributed resilience pattern stops requests to a failing service to prevent cascading failures using Closed, Open, Half-Open states?",
      "opts": [
        {
          "ar": "نمط قاطع الدائرة التلقائي (Circuit Breaker Pattern)",
          "en": "Circuit Breaker Pattern",
          "ok": true,
          "why": "قاطع الدائرة يكتشف تجاوز عتبة الأخطاء ويفتح الدائرة ليفشل فوراً دون انتظار المهلة، ثم يختبر تعافي الخدمة تدريجياً في وضع Half-Open."
        },
        {
          "ar": "نمط إعادة المحاولة مع التراجع (Retry with Backoff)",
          "en": "Retry Pattern with Exponential Backoff",
          "ok": false,
          "why": "إعادة المحاولة تكرر إرسال الطلبات وتزيد الضغط على الخدمة المنهارة إذا لم تكن محمية بقاطع دائرة."
        },
        {
          "ar": "نمط الحاجز العازل للموارد (Bulkhead Pattern)",
          "en": "Bulkhead Pattern",
          "ok": false,
          "why": "الحاجز يعزل مسابح الموارد (Thread Pools) حتى لا يستهلك قسم واحد كامل موارد التطبيق."
        },
        {
          "ar": "نمط تحديد وتحديد معدل الطلبات (Rate Limiting)",
          "en": "Rate Limiting Pattern",
          "ok": false,
          "why": "تحديد المعدل يهدف لمنع إغراق الخادم بالطلبات من عميل واحد ولا يراقب حالة تعافي الأنظمة الخارجية."
        }
      ],
      "tip": "وقفة امتحانية قناصة: حالات نمط قاطع الدائرة (Circuit Breaker): Closed (طبيعي) -> Open (معطل ويفشل فوراً) -> Half-Open (تجربة تعافي الخدمة).",
      "n": 62
    },
    {
      "type": "mcq",
      "ref": "L8-S024",
      "q_ar": "في وسائط الرسائل الموزعة (Message Brokers مثل RabbitMQ و Kafka)، ما الفرق بين طابور الرسائل (Queue) وموضوع النشر (Topic)؟",
      "q_en": "In Message Brokers, what is the difference between a Message Queue and a Topic?",
      "opts": [
        {
          "ar": "الطابور متزامن إجباري والموضوع غير متزامن اختياري دائماً",
          "en": "Queue is strictly synchronous, Topic is optional async",
          "ok": false,
          "why": "كلا النمطين في وسيط الرسائل غير متزامنين ويحققان تفكيك الترابط الزمني."
        },
        {
          "ar": "الطابور يرسل الرسالة لمستهلك واحد والموضوع يبثها لكافة المشتركين",
          "en": "Queue delivers to single consumer, Topic broadcasts to subscribers",
          "ok": true,
          "why": "طابور الرسائل يعتمد نمط نقطة لنقطة (Point-to-Point)، بينما الموضوع يعتمد نمط النشر والاشتراك (Publish/Subscribe)."
        },
        {
          "ar": "الطابور يخزن البيانات بذاكرة RAM والموضوع يحفظها بالقرص فقط",
          "en": "Queue stores in RAM only, Topic persists on hard disk",
          "ok": false,
          "why": "كلا النمطين يمكن تهيئتهما للتخزين المؤقت بالذاكرة أو التثبيت الدائم على القرص."
        },
        {
          "ar": "الطابور مخصص لقواعد البيانات والموضوع مخصص لتطبيقات الويب",
          "en": "Queue for databases, Topic for web applications only",
          "ok": false,
          "why": "أنماط وسيط الرسائل معمارية عامة لا ترتبط بنوع التطبيق أو طريقة استهلاكه."
        }
      ],
      "tip": "وقفة امتحانية قناصة: Queue = Point-to-Point (مستهلك واحد يستهلك الرسالة) · Topic = Publish/Subscribe (نسخة تصل لكل المشتركين).",
      "n": 63
    },
    {
      "type": "mcq",
      "ref": "L8-S038",
      "q_ar": "ما هي المراحل الثلاث الأساسية في بنية التوليد المعزز بالاسترجاع (Retrieval-Augmented Generation - RAG) في تطبيقات الذكاء الاصطناعي؟",
      "q_en": "What are the three core architectural phases of Retrieval-Augmented Generation (RAG)?",
      "opts": [
        {
          "ar": "تدريب النموذج من الصفر، وتعديل الأوزان، وتوزيع الأنوية",
          "en": "Training model from scratch, fine-tuning weights, core sharding",
          "ok": false,
          "why": "الميزة الكبرى لـ RAG هي تجنب التدريب المكلف (No Pre-training) عبر الاستعانة ببيانات خارجية لحظية."
        },
        {
          "ar": "ضغط الصور، وتحويل النصوص إلى أكواد ثنائية، وتشفير الاتصال",
          "en": "Image compression, converting text to binary, network encryption",
          "ok": false,
          "why": "هذه مهام وسائط ومعالجة عامة لا تمثل مراحل بنية استرجاع وتوليد الذكاء الاصطناعي."
        },
        {
          "ar": "استيعاب وتقطيع البيانات، واسترجاع السياق، وتوليد الإجابة بالنموذج",
          "en": "Data Ingestion & Chunking, Retrieval, and LLM Generation",
          "ok": true,
          "why": "تبدأ المعمارية باستيعاب البيانات وتقطيعها وتضمينها، ثم البحث عن السياق المتشابه بالسؤال، وتزويد النموذج اللغوي به لتوليد إجابة موثوقة."
        },
        {
          "ar": "ترجمة اللغات، وفحص قواعد الإملاء، وإلغاء الجلسات المنتهية",
          "en": "Language translation, spell checking, terminating sessions",
          "ok": false,
          "why": "مراحل RAG ترتكز على قواعد البيانات المتجهية والتضمين الرياضي لتعزيز دقة النموذج اللغوي."
        }
      ],
      "tip": "وقفة امتحانية قناصة: دورة حياة RAG: 1. Ingestion (تقطيع Chunking وتضمين Embedding) -> 2. Retrieval (بحث تشابه بقواعد المتجهات Vector DB) -> 3. Generation (التوليد بالسياق).",
      "n": 64
    },
    {
      "type": "tf",
      "ref": "L8-S018",
      "q_ar": "عندما يكون قاطع الدائرة في الحالة المفتوحة (Open State)، فإنه يمرر كافة الطلبات إلى الخادم الخارجي للتحقق من سلامته.",
      "q_en": "When the Circuit Breaker is in the Open state, it forwards all requests to the remote server to test its health.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ عندما يكون قاطع الدائرة Open فإنه يمنع أي طلب ويفشل فوراً (Fail Fast) دون لمس الخادم."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ اختبار تعافي الخادم يتم فقط عند الانتقال إلى وضع نصف المفتوح (Half-Open) عبر إرسال عينة محدودة من الطلبات."
        }
      ],
      "tip": "وقفة امتحانية قناصة: فخ حالات قاطع الدائرة: Open = يفشل فوراً ولا يمرر أي طلب إطلاقاً · Half-Open = يمرر عدداً محدوداً من الطلبات التجريبية لفحص التعافي.",
      "n": 65
    },
    {
      "type": "tf",
      "ref": "L8-S035",
      "q_ar": "تساعد معمارية RAG في منع هلوسة النماذج اللغوية الكبيرة (Hallucinations) عبر تزويدها بسياق موثوق ومستخرج من مستندات خاصة.",
      "q_en": "RAG architecture helps prevent LLM hallucinations by grounding responses in retrieved factual context.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ هذا هو الهدف الرئيسي لـ RAG حيث يجبر النموذج على الإجابة استناداً إلى الوثائق المسترجعة بدقة بدلاً من التخمين."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "الاسترجاع المعزز يقيد النموذج اللغوي ببيانات موثوقة ومحدثة ويقضي على الإجابات الخاطئة المختلقة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: الهدف الرئيسي لتقنية RAG: مكافحة الهلوسة (Preventing Hallucinations) ودمج البيانات الخاصة دون الحاجة لإعادة تدريب النموذج.",
      "n": 66
    },
    {
      "type": "mcq",
      "ref": "L1-S016",
      "q_ar": "أي علاقة في البرمجة كائنية التوجه تمثل علاقة 'هو نوع من' (is-a relationship) وتتيح إعادة استخدام الكود؟",
      "q_en": "Which relationship in OOP represents an 'is-a relationship' and enables code reuse?",
      "opts": [
        {
          "ar": "علاقة التكوين والتضمين (Composition)",
          "en": "Composition relationship",
          "ok": false,
          "why": "التكوين يعبر عن علاقة احتواء 'يمتلك' (has-a) مثل Car has an Engine."
        },
        {
          "ar": "علاقة التجميع البسيطة (Aggregation)",
          "en": "Aggregation relationship",
          "ok": false,
          "why": "التجميع يمثل علاقة ملكية غير ملزمة ومستقلة دورة الحياة وليس علاقة تصنيف نوعي."
        },
        {
          "ar": "علاقة الارتباط اللحظي (Association)",
          "en": "Association relationship",
          "ok": false,
          "why": "الارتباط علاقة استخدام عامة بين كائنين مستقلين دون علاقة وراثة."
        },
        {
          "ar": "علاقة الوراثة البرمجية (Inheritance)",
          "en": "Inheritance relationship",
          "ok": true,
          "why": "الوراثة تعبر عن علاقة كينونة (Car is a Vehicle) وترث الخصائص والوظائف العامة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: قاعدة العلاقات: Inheritance = 'is-a' · Composition / Aggregation = 'has-a'.",
      "n": 67
    },
    {
      "type": "mcq",
      "ref": "L1-S010",
      "q_ar": "ما هو الدور الرئيسي لبيئة تشغيل اللغة المشتركة (Common Language Runtime - CLR) في منصة .NET؟",
      "q_en": "What is the primary role of the Common Language Runtime (CLR) in the .NET platform?",
      "opts": [
        {
          "ar": "إدارة تشغيل الكود المدار وتوفير جمع النفايات والأمان",
          "en": "Managing managed code execution, GC, and security",
          "ok": true,
          "why": "الـ CLR هو المحرك الافتراضي الذي يشرف على إدارة الذاكرة، فحص الأمان، ومعالجة الاستثناءات أثناء التشغيل."
        },
        {
          "ar": "تحرير وتصميم واجهات المستخدم الرسومية في بيئة الويب",
          "en": "Designing and editing graphical user interfaces",
          "ok": false,
          "why": "تصميم الواجهات مسؤولية أطر العمل مثل ASP.NET أو Blazor وليس محرك CLR."
        },
        {
          "ar": "إدارة اتصالات الشبكة واستضافة خدمات الموزعات السحابية",
          "en": "Managing network sockets and hosting cloud services",
          "ok": false,
          "why": "هذه وظائف خوادم الويب (Kestrel/IIS) ومكتبات الشبكة الخارجية."
        },
        {
          "ar": "تخزين الجداول العلائقية والتحقق من صحة مفاتيح SQL",
          "en": "Storing relational tables and validating SQL keys",
          "ok": false,
          "why": "إدارة الجداول والمفاتيح اختصاص نظام إدارة قواعد البيانات (DBMS) مثل SQL Server."
        }
      ],
      "tip": "وقفة امتحانية قناصة: CLR = بيئة تشغيل الكود المدار (Managed Code Execution Environment) المسؤولة عن الذاكرة والأمان والترجمة.",
      "n": 68
    },
    {
      "type": "tf",
      "ref": "L1-S015",
      "q_ar": "يركز مفهوم التجريد (Abstraction) على إظهار التفاصيل الداخلية المعقدة للمستخدم لزيادة الشفافية.",
      "q_en": "Abstraction focuses on showing complex internal details to users for transparency.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ التجريد يركز على إخفاء التفاصيل غير الضرورية وإظهار الواجهة الأساسية فقط."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ الهدف من Abstraction هو إخفاء التعقيد وتبسيط الاستخدام (Hiding complexity, showing essential features)."
        }
      ],
      "tip": "وقفة امتحانية قناصة: التجريد (Abstraction) = إخفاء التعقيد وإظهار الأساسيات فقط وليس كشف التفاصيل.",
      "n": 69
    },
    {
      "type": "mcq",
      "ref": "L2-S005",
      "q_ar": "ماذا يسمى العيب البرمجي (Code Smell) عندما تحتوي دالة معينة على مئات أسطر الكود وتقوم بمهام متعددة؟",
      "q_en": "What code smell is present when a single method contains hundreds of lines performing multiple tasks?",
      "opts": [
        {
          "ar": "حسد الميزات والخصائص (Feature Envy)",
          "en": "Feature Envy code smell",
          "ok": false,
          "why": "حسد الميزات يحدث عندما تستخدم دالة في فئة معينة بيانات فئة أخرى أكثر من بيانات فئتها الخاصة."
        },
        {
          "ar": "الدالة الطويلة المعقدة (Long Method)",
          "en": "Long Method code smell",
          "ok": true,
          "why": "الدالة الطويلة تصعب القراءة والصيانة وتعتبر من أشهر عيوب الكود التي تعالج باستخلاص الدوال (Extract Method)."
        },
        {
          "ar": "هوس الأنواع الأولية (Primitive Obsession)",
          "en": "Primitive Obsession code smell",
          "ok": false,
          "why": "هوس الأنواع الأولية هو استخدام string و int لتمثيل مفاهيم معقدة مثل العملة أو رقم الهاتف بدلاً من فئات مخصصة."
        },
        {
          "ar": "الفئة الكسولة عديمة الفائدة (Lazy Class)",
          "en": "Lazy Class code smell",
          "ok": false,
          "why": "الفئة الكسولة هي فئة لا تؤدي عملاً كافياً يبرر وجودها في المشروع."
        }
      ],
      "tip": "وقفة امتحانية قناصة: أشهر روائح الكود (Code Smells): Long Method = دالة مفرطة الطول · Large Class = فئة متضخمة · Feature Envy = دالة تعتمد على بيانات كلاس خارجي.",
      "n": 70
    },
    {
      "type": "mcq",
      "ref": "L2-S006",
      "q_ar": "ما هي عملية إعادة هيكلة الكود (Refactoring) وما هدفها الأساسي؟",
      "q_en": "What is Refactoring and what is its primary objective?",
      "opts": [
        {
          "ar": "إضافة ميزات وظيفية جديدة يطلبها العميل لتسريع التسليم",
          "en": "Adding new functional features requested by customers",
          "ok": false,
          "why": "إضافة ميزات جديدة تسمى تطوير ميزات (Feature Development) وليست إعادة هيكلة."
        },
        {
          "ar": "إعادة كتابة الكود بلغة برمجة مختلفة كلياً لتحسين السرعة",
          "en": "Rewriting code in completely different programming language",
          "ok": false,
          "why": "هذا يسمى نقل المنصة (Porting/Migration) وليس إعادة هيكلة داخلية لنفس النظام."
        },
        {
          "ar": "تحسين البنية الداخلية للكود دون تغيير سلوكه الخارجي",
          "en": "Improving internal code structure without changing external behavior",
          "ok": true,
          "why": "إعادة الهيكلة ترفع قابلية القراءة والصيانة وتقلل التعقيد دون إضافة ميزات جديدة أو تغيير النتائج المرئية."
        },
        {
          "ar": "حذف اختبارات الوحدة القديمة لتقليل زمن بناء المشروع",
          "en": "Deleting old unit tests to reduce project build time",
          "ok": false,
          "why": "حذف الاختبارات ممارسة خطيرة تدمر موثوقية النظام وتعطل مراقبة جودة الكود."
        }
      ],
      "tip": "وقفة امتحانية قناصة: تعريف Refactoring الحرفي: Improving internal structure without altering external behavior.",
      "n": 71
    },
    {
      "type": "tf",
      "ref": "L2-S018",
      "q_ar": "يساعد تطبيق القفل المزدوج (Double-Checked Locking) في نمط Singleton على ضمان أمان الخيوط مع تجنب استهلاك الأداء.",
      "q_en": "Double-Checked Locking in Singleton ensures thread safety while avoiding performance overhead.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ القفل المزدوج يتحقق من عدم وجود النسخة قبل وبعد أخذ القفل لمنع حجز القفل في كل عملية قراءة لاحقة."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "هذه هي التقنية القياسية المعتمدة في البيئات متعددة الخيوط لتحقيق أقصى كفاءة وأمان تزامن."
        }
      ],
      "tip": "وقفة امتحانية قناصة: نمط Double-Checked Locking في Singleton يحقق Thread-Safety مع أعلى سرعة ممكنة.",
      "n": 72
    },
    {
      "type": "mcq",
      "ref": "L3-S060",
      "q_ar": "أي نمط تصميم هيكلي يستخدم لتمثيل هياكل شجرية تمثل علاقة الجزء بالكل (Part-Whole Hierarchies) ومعاملة الأفراد والمجموعات بأسلوب موحد؟",
      "q_en": "Which structural pattern represents Part-Whole hierarchies and treats individual objects and compositions uniformly?",
      "opts": [
        {
          "ar": "نمط الجسر الهيكلي (Bridge Pattern)",
          "en": "Bridge Pattern",
          "ok": false,
          "why": "الجسر يفصل التجريد عن التنفيذ ليتطورا بشكل مستقل ولا يمثل هياكل شجرية هرمية."
        },
        {
          "ar": "نمط المزخرف (Decorator Pattern)",
          "en": "Decorator Pattern",
          "ok": false,
          "why": "المزخرف يضيف مسؤوليات متسلسلة لكائن فردي ولا يدير شجرة ملفات أو بنية فرع وأوراق."
        },
        {
          "ar": "نمط الواجهة الموحدة (Façade Pattern)",
          "en": "Façade Pattern",
          "ok": false,
          "why": "الواجهة الموحدة تبسط نظاماً فرعياً معقداً ولا تمثل تراكيب شجرية هرمية موحدة الواجهة."
        },
        {
          "ar": "نمط التركيب الشجري (Composite Pattern)",
          "en": "Composite Pattern",
          "ok": true,
          "why": "نمط Composite ينظم الكائنات في بنية شجرية ويتيح معاملة العقد الفردية (Leaves) والعقد المركبة (Containers) بنفس الطريقة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: مفتاح نمط التركيب (Composite): 'tree structures'، 'part-whole hierarchies'، ومعاملة الأوراق والمجموعات بشكل موحد.",
      "n": 73
    },
    {
      "type": "mcq",
      "ref": "L3-S064",
      "q_ar": "أي نمط تصميم هيكلي يفصل التجريد (Abstraction) عن التنفيذ (Implementation) بحيث يمكن لكل منهما أن يتغير ويتطور بشكل مستقل؟",
      "q_en": "Which structural pattern decouples an abstraction from its implementation so that the two can vary independently?",
      "opts": [
        {
          "ar": "نمط الجسر المعماري (Bridge Pattern)",
          "en": "Bridge Pattern",
          "ok": true,
          "why": "الجسر يمنع الانفجار التجميعي للأصناف (Cartesian explosion) عبر وضع جسر تجريدي يربط التجريد بتنفيذه."
        },
        {
          "ar": "نمط المحول التوافقي (Adapter Pattern)",
          "en": "Adapter Pattern",
          "ok": false,
          "why": "المحول يوفق بين واجهتين موجودتين مسبقاً بعد كتابتهما، بينما الجسر يصمم مسبقاً لفصل التجريد عن التنفيذ."
        },
        {
          "ar": "نمط الوكيل الحامي (Proxy Pattern)",
          "en": "Proxy Pattern",
          "ok": false,
          "why": "الوكيل يوفر بديلاً للتحكم في الوصول لنفس الفئة ولا يفصل التجريد عن التنفيذ المستقل."
        },
        {
          "ar": "نمط المفرد الإنشائي (Singleton Pattern)",
          "en": "Singleton Pattern",
          "ok": false,
          "why": "المفرد نمط إنشائي يتحكم في عدد النسخ ولا يتعامل مع فصل التجريد عن آليات التنفيذ."
        }
      ],
      "tip": "وقفة امتحانية قناصة: مفتاح نمط الجسر (Bridge): 'decouple abstraction from implementation so that both vary independently'.",
      "n": 74
    },
    {
      "type": "tf",
      "ref": "L3-S036",
      "q_ar": "يعمل نمط الواجهة الموحدة (Façade) كبوابة إجبارية وحيدة، بحيث يمنع العملاء نهائياً من الوصول المباشر لفئات النظام الفرعي.",
      "q_en": "The Façade pattern acts as an enforced barrier, completely preventing clients from directly accessing subsystem classes.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ الواجهة الموحدة تقدم تسهيلاً وتبسيطاً اختيارياً، ولكنها لا تمنع الوصول المباشر إذا احتاجه العميل."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ Façade لا يحبس النظام الفرعي؛ يمكن للعميل المتقدم تجاوز Façade واستدعاء الخدمات الفرعية مباشرة عند الحاجة لتخصيص دقيق."
        }
      ],
      "tip": "وقفة امتحانية قناصة: فخ دقيق: Façade يوفر واجهة مبسطة مريحة، لكنه لا يغلق النظام الفرعي قسرياً بوجه العملاء المحترفين.",
      "n": 75
    },
    {
      "type": "mcq",
      "ref": "L4-S028",
      "q_ar": "أي نمط تصميم سلوكي يعرّف الهيكل العام لخوارزمية في فئة أساسية، مع تأجيل تنفيذ بعض خطواتها المحددة للفئات المشتقة؟",
      "q_en": "Which behavioral pattern defines the skeleton of an algorithm in a base class, deferring some steps to subclasses?",
      "opts": [
        {
          "ar": "نمط الاستراتيجية (Strategy Pattern)",
          "en": "Strategy Pattern",
          "ok": false,
          "why": "الاستراتيجية تعتمد التركيب وتبدل الخوارزمية بالكامل ككائن مستقل، بينما طريقة القالب تعتمد الوراثة وتثبت الهيكل العام."
        },
        {
          "ar": "نمط طريقة القالب (Template Method Pattern)",
          "en": "Template Method Pattern",
          "ok": true,
          "why": "طريقة القالب تثبت خوارزمية المعالجة وتترك خطوات محددة كدوال مجردة أو افتراضية تنفذها الفئات الفرعية (مبدأ هوليوود)."
        },
        {
          "ar": "نمط الأمر التنفيذي (Command Pattern)",
          "en": "Command Pattern",
          "ok": false,
          "why": "الأمر يغلف طلباً ككائن لتمريره أو وضعه في طابور ولا يختص ببناء قوالب خوارزميات موروثة."
        },
        {
          "ar": "نمط المراقب التفاعلي (Observer Pattern)",
          "en": "Observer Pattern",
          "ok": false,
          "why": "المراقب يختص ببث الإشعارات وتحديث المشتركين عند تغير الحالة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: مفتاح طريقة القالب (Template Method): 'skeleton of an algorithm'، تثبيت الخطوات وتفويض التفاصيل بالوراثة (Hollywood Principle: Don't call us, we'll call you).",
      "n": 76
    },
    {
      "type": "tf",
      "ref": "L4-S015",
      "q_ar": "في نمط الحالة (State)، يمكن للكائن أن يغير سلوكه تلقائياً أثناء وقت التشغيل بمجرد تغير حالته الداخلية.",
      "q_en": "In the State pattern, an object can alter its behavior automatically at runtime when its internal state changes.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ هذا هو التعريف الدقيق لنمط State حيث يتصرف الكائن وكأنه قام بتغيير فئته البرمجية."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "نمط الحالة مبني خصيصاً لنمذجة آلة الحالات (State Machine) وتغيير السلوك ديناميكياً بتغير الحالة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: تعريف نمط الحالة (State): 'allows an object to alter its behavior when its internal state changes'.",
      "n": 77
    },
    {
      "type": "mcq",
      "ref": "L5-S012",
      "q_ar": "ما هي المشكلة المعمارية الأبرز في الأنظمة أحادية الكتلة (Monolithic Architecture) مقارنة بالخدمات المصغرة (Microservices)؟",
      "q_en": "What is the primary architectural drawback of Monolithic Architecture compared to Microservices?",
      "opts": [
        {
          "ar": "التعقيد الشديد في إدارة الاتصالات الشبكية والمزامنة بين السيرفرات",
          "en": "Extreme complexity in network communication and syncing",
          "ok": false,
          "why": "هذا العيب هو سمة الأنظمة الموزعة والخدمات المصغرة (Microservices) وليس الأنظمة الأحادية."
        },
        {
          "ar": "صعوبة إنشاء واجهات مستخدم رسومية تدعم متصفحات الويب الحديثة",
          "en": "Difficulty in creating GUI that supports modern web browsers",
          "ok": false,
          "why": "الأنظمة الأحادية تدعم واجهات الويب بسهولة وتتميز ببساطة هيكلها الأولي."
        },
        {
          "ar": "الترابط الوثيق وصعوبة التوسع الجزئي وحاجة النظام لإعادة نشر كاملة",
          "en": "Tight coupling, hard partial scaling, full redeployment",
          "ok": true,
          "why": "أي تعديل بسيط في نظام Monolith يتطلب إعادة بناء واختبار ونشر النظام بالكامل، كما يتعذر توسيع خدمة واحدة دون توسيع التطبيق كله."
        },
        {
          "ar": "حظر استخدام قواعد البيانات العلائقية مثل SQL Server و Oracle",
          "en": "Prohibiting relational databases like SQL Server or Oracle",
          "ok": false,
          "why": "الأنظمة الأحادية مبنية أساساً على قواعد البيانات العلائقية المركزية المشتركة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: مقارنة معمارية: Monolith = نشر واحد وتطوير أولي بسيط لكن ترابط وثيق وصعوبة توسع جزئي · Microservices = استقلالية وتوسع مرن لكن تعقيد شبكي وتناسق مؤجل.",
      "n": 78
    },
    {
      "type": "tf",
      "ref": "L5-S045",
      "q_ar": "تعتمد طبقة النطاق (Domain layer) في العمارة النظيفة بشكل مباشر على مكتبة Entity Framework Core لإدارة الجداول.",
      "q_en": "In Clean Architecture, the Domain layer depends directly on Entity Framework Core to manage tables.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ طبقة النطاق نقية تماماً ومستقلة عن أي أطر عمل خارجية مثل EF Core."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ مكتبة EF Core و DbContext توضع حصراً في طبقة البنية التحتية (Infrastructure)، ويحظر تلويث النطاق بها."
        }
      ],
      "tip": "وقفة امتحانية قناصة: سؤال امتحاني مكرر للدكتورة بيداء: Domain layer لا تعتمد على Entity Framework ولا على أي مكتبة خارجية (Pure C# POCOs).",
      "n": 79
    },
    {
      "type": "mcq",
      "ref": "L6-S024",
      "q_ar": "ما هو الفارق الجوهري بين استخدام دالة PUT ودالة PATCH عند تحديث مورد على خادم RESTful API؟",
      "q_en": "What is the key difference between PUT and PATCH when updating a resource in a RESTful API?",
      "opts": [
        {
          "ar": "دالة PUT مخصصة للقراءة فقط ودالة PATCH مخصصة للحذف النهائي",
          "en": "PUT is read-only while PATCH is strictly for deletion",
          "ok": false,
          "why": "القراءة هي وظيفة GET والحذف هو وظيفة DELETE؛ كلاهما PUT و PATCH مخصصان للتحديث."
        },
        {
          "ar": "دالة PUT لا تدعم الأمان وتتطلب PATCH شهادة SSL مشفرة دوماً",
          "en": "PUT lacks security, PATCH strictly requires SSL certificate",
          "ok": false,
          "why": "تأمين الاتصال عبر HTTPS ينطبق على كافة دوال HTTP دون تمييز."
        },
        {
          "ar": "دالة PUT غير عكوسة إطلاقاً بينما PATCH عكوسة في جميع الحالات",
          "en": "PUT is never idempotent while PATCH is strictly idempotent",
          "ok": false,
          "why": "العكس تماماً؛ PUT عكوسة قياسياً (Idempotent)، بينما PATCH قد لا تكون عكوسة حسب منطق التعديل."
        },
        {
          "ar": "دالة PUT تستبدل المورد بالكامل بينما PATCH تحدث حقولاً جزئية فقط",
          "en": "PUT replaces entire resource, PATCH updates partial fields",
          "ok": true,
          "why": "المعيار القياسي لـ REST ينص على أن PUT استبدال كامل للمحتوى (Full Replacement)، بينما PATCH تحديث جزئي لبعض الخصائص (Partial Update)."
        }
      ],
      "tip": "وقفة امتحانية قناصة: الفرق بين PUT و PATCH: PUT = Full Replacement (استبدال كلي وعكوسة Idempotent) · PATCH = Partial Update (تعديل جزئي للحقول المطلوبة فقط).",
      "n": 80
    },
    {
      "type": "tf",
      "ref": "L6-S032",
      "q_ar": "في معيار المصادقة والتفويض OAuth 2.0، يمتلك رمز الوصول (Access Token) فترة حياة طويلة تمتد لعدة سنوات لتجنب تجديده.",
      "q_en": "In OAuth 2.0, the Access Token typically has a long lifetime spanning several years to avoid refresh.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ رمز الوصول (Access Token) قصير الأجل جداً (دقائق أو ساعات) لأسباب أمنية مشددة."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ رمز الوصول Access Token قصير الأجل لحماية النظام عند سرقته، بينما رمز التجديد (Refresh Token) هو الذي يمتلك فترة صلاحية أطول."
        }
      ],
      "tip": "وقفة امتحانية قناصة: أمان OAuth 2.0: Access Token = قصير الأجل (Short-lived) لحماية الموارد · Refresh Token = طويل الأجل يُستخدم لطلب Access Token جديد.",
      "n": 81
    },
    {
      "type": "mcq",
      "ref": "L7-S010",
      "q_ar": "ما هو الفارق الجوهري بين التزامن (Concurrency) والتوازي (Parallelism) في علوم الحاسوب وهندسة البرمجيات؟",
      "q_en": "What is the key difference between Concurrency and Parallelism in computer science?",
      "opts": [
        {
          "ar": "التزامن هو إدارة عدة مهام متداخلة والتوازي تنفيذها الفعلي معاً",
          "en": "Concurrency manages overlapping tasks, Parallelism executes simultaneously",
          "ok": true,
          "why": "التزامن هو التعامل مع عدة أشياء في فترات زمنية متداخلة (Dealing with a lot of things at once)، والتوازي هو تنفيذها لحظياً في نفس الوقت الفيزيائي على أنوية متعددة (Doing a lot of things at once)."
        },
        {
          "ar": "التزامن يتطلب معالجاً بثماني أنوية والتوازي يعمل على معالج أحادي",
          "en": "Concurrency requires eight cores, Parallelism on single core",
          "ok": false,
          "why": "العكس؛ التزامن يمكن أن يعمل على نواة واحدة عبر تبديل السياق (Time-slicing)، بينما التوازي يتطلب أنوية عتادية متعددة حتماً."
        },
        {
          "ar": "التزامن خاص بقواعد البيانات والتوازي خاص بمتصفحات الويب فقط",
          "en": "Concurrency for databases, Parallelism for web browsers",
          "ok": false,
          "why": "كلاهما مفهومان حوسبيان عامان ينطبقان على كافة مستويات البرمجيات والأنظمة."
        },
        {
          "ar": "التزامن يعتمد على البرمجة المتزامنة والتوازي يعتمد على الدوال الساكنة",
          "en": "Concurrency uses synchronous code, Parallelism uses static methods",
          "ok": false,
          "why": "التزامن والتوازي كلاهما يستفيد من البرمجة غير المتزامنة وتعدد المسالك."
        }
      ],
      "tip": "وقفة امتحانية قناصة: قاعدة روب بايك الشهيرة: Concurrency is about structure (dealing with lots of things) · Parallelism is about execution (doing lots of things at the exact same physical time).",
      "n": 82
    },
    {
      "type": "tf",
      "ref": "L7-S022",
      "q_ar": "تتشارك كافة مسالك التنفيذ (Threads) التابعة لنفس العملية (Process) مساحة ذاكرة الكومة (Heap) المشتركة.",
      "q_en": "All threads belonging to the same process share the common Heap memory space.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ الخيوط في نفس العملية تتشارك الكومة والمتغيرات العامة، ولكن كل خيط يمتلك مكدسه الخاص (Private Stack)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "مشاركة مساحة الكومة بين المسالك هي ميزة السرعة ومصدر خطر تضارب البيانات في نفس الوقت مما يستدعي المزامنة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: تشريح العملية والمسالك: Heap = مشتركة بين كافة خيوط نفس العملية · Stack = خاص ومستقل لكل خيط (Thread-private).",
      "n": 83
    },
    {
      "type": "mcq",
      "ref": "L8-S042",
      "q_ar": "في معمارية RAG، ما وظيفة نماذج التضمين (Embedding Models) وقواعد البيانات المتجهية (Vector Databases)؟",
      "q_en": "In RAG architecture, what is the role of Embedding Models and Vector Databases?",
      "opts": [
        {
          "ar": "ضغط ملفات PDF وتحويلها إلى جداول علائقية تقليدية بـ SQL",
          "en": "Compressing PDFs and converting to relational SQL tables",
          "ok": false,
          "why": "قواعد المتجهات لا تعتمد نموذج الجداول العلائقية التقليدية، بل تخزن متجهات عددية عالية الأبعاد."
        },
        {
          "ar": "تحويل النصوص إلى متجهات دلالية وإجراء بحث التشابه الهندسي",
          "en": "Convert text to semantic vectors and perform similarity search",
          "ok": true,
          "why": "نماذج التضمين تحول النصوص لأرقام هندسية تمثل المعنى، وتتيح قواعد المتجهات العثور على أكثر المقاطع تشابهاً رياضياً بسؤال المستخدم."
        },
        {
          "ar": "تدريب أوزان النموذج اللغوي بالكامل لتعديل معرفته التأسيسية",
          "en": "Training all LLM weights to update foundational knowledge",
          "ok": false,
          "why": "نماذج التضمين لا تعيد تدريب النموذج اللغوي الأساسي، بل تستخرج المعنى الدلالي للمستندات فقط."
        },
        {
          "ar": "تشفير اتصالات الشبكة والتأكد من صحة شهادات الأمان الرقمية",
          "en": "Encrypting network traffic and verifying digital certificates",
          "ok": false,
          "why": "التشفير وظيفة بروتوكول TLS ولا علاقة له بالبحث الدلالي في تطبيقات الذكاء الاصطناعي."
        }
      ],
      "tip": "وقفة امتحانية قناصة: دورة التضمين: Embedding Model = يحول النص إلى أرقام متجهات دلالية (Vectors) · Vector DB = تجري بحث التشابه (Cosine Similarity) لاسترجاع أفضل سياق.",
      "n": 84
    },
    {
      "type": "tf",
      "ref": "L8-S020",
      "q_ar": "يُستخدم نمط إعادة المحاولة (Retry Pattern) لمعالجة كافة أنواع الأخطاء البرمجية بما فيها أخطاء المدخلات غير الصالحة كـ (400 Bad Request).",
      "q_en": "The Retry pattern is used for all errors including client validation errors like 400 Bad Request.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ إعادة المحاولة مخصصة حصراً للأخطاء العابرة المؤقتة (Transient Errors) مثل انقطاع الشبكة اللحظي."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ أخطاء 400 و 401 أخطاء دائمة وتكرار إرسالها سينتج نفس الخطأ ويهدر موارد النظام؛ يُستخدم Retry فقط للأخطاء العابرة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: قاعدة ذهبية: Retry Pattern يُستخدم حصراً للأخطاء العابرة المؤقتة (Transient Errors مثل 503 أو Network Blip)، ويحظر استخدامه لأخطاء العميل الدائمة (400 Bad Request).",
      "n": 85
    },
    {
      "type": "mcq",
      "ref": "L1-S012",
      "q_ar": "ما هو الفارق الأساسي في إدارة الذاكرة بين أنواع القيمة (Value Types) وأنواع المرجع (Reference Types) في C#؟",
      "q_en": "What is the primary memory difference between Value Types and Reference Types in C#?",
      "opts": [
        {
          "ar": "أنواع القيمة تدار بواسطة جامع النفايات والأنواع المرجعية تحرر يدوياً",
          "en": "Value types managed by GC, Reference freed manually",
          "ok": false,
          "why": "جامع النفايات يدير ذاكرة الكومة الخاصة بأنواع المرجع، بينما المكدس يفرغ تلقائياً بانتهاء نطاق الدالة."
        },
        {
          "ar": "أنواع القيمة تدعم الوراثة المتعددة وأنواع المرجع تمنع الوراثة كلياً",
          "en": "Value types support multiple inheritance, Reference prevent it",
          "ok": false,
          "why": "أنواع القيمة (structs) في C# لا تدعم الوراثة من أصناف أخرى إطلاقاً، بعكس أصناف المرجع."
        },
        {
          "ar": "أنواع القيمة تخزن بالمكدس مباشرة وأنواع المرجع بالكومة",
          "en": "Value types stored directly in Stack, Reference in Heap",
          "ok": true,
          "why": "أنواع القيمة (struct, int) تخزن قيمتها مباشرة في المكدس، بينما أنواع المرجع (class) تخزن عنواناً يؤشر لكائن بالكومة."
        },
        {
          "ar": "أنواع القيمة تتطلب تخصيصاً مسبقاً والأنواع المرجعية تتطلب دوال ساكنة",
          "en": "Value types require pre-allocation, Reference require statics",
          "ok": false,
          "why": "لا علاقة للأنواع المرجعية بكون الدوال ساكنة أو غير ساكنة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: قاعدة الذاكرة: Value Types (struct, enum, primitives) = Stack · Reference Types (class, interface, string, delegate) = Heap.",
      "n": 86
    },
    {
      "type": "tf",
      "ref": "L1-S034",
      "q_ar": "مبدأ عكس التبعية (DIP) وحقن التبعيات (DI) هما مصطلحان متطابقان تماماً لنفس المفهوم البرمجي.",
      "q_en": "Dependency Inversion Principle (DIP) and Dependency Injection (DI) are completely identical terms.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ DIP هو مبدأ معماري عالي المستوى، بينما DI هو أسلوب وتقنية برمجية لتنفيذ هذا المبدأ."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ DIP هو المبدأ العام في SOLID، بينما Inversion of Control (IoC) هو النمط المعماري، و DI هو وسيلة التطبيق بحقن المنشئ."
        }
      ],
      "tip": "وقفة امتحانية قناصة: فخ المصطلحات: DIP = Principle (المبدأ المعماري) · IoC = Pattern (النمط) · DI = Technique (تقنية الحقن عبر الباني).",
      "n": 87
    },
    {
      "type": "mcq",
      "ref": "L2-S019",
      "q_ar": "لماذا يفضل استخدام النوع الكسول Lazy<T> لتنفيذ نمط Singleton في لغة C# الحديثة؟",
      "q_en": "Why is Lazy<T> preferred for implementing the Singleton pattern in modern C#?",
      "opts": [
        {
          "ar": "يقوم بتحويل الكائن إلى فئة ساكنة تحذف دورة حياة المتغيرات",
          "en": "Converts the object to a static class deleting lifecycles",
          "ok": false,
          "why": "الكائن يظل كائناً عادياً يدعم الواجهات والوراثة ولا يتحول إلى فئة ساكنة."
        },
        {
          "ar": "يسمح بإنشاء نسخ متعددة من الكائن في أوقات متباعدة من التنفيذ",
          "en": "Allows creating multiple instances at spaced execution times",
          "ok": false,
          "why": "المفرد يمنع النسخ المتعددة نهائياً، و Lazy<T> يضمن بقاء النسخة وحيدة طوال تشغيل التطبيق."
        },
        {
          "ar": "يمنع جامع النفايات من الوصول لذاكرة الكائن وحذفه عند الخمول",
          "en": "Prevents garbage collector from accessing object memory",
          "ok": false,
          "why": "جامع النفايات يتعامل مع كائن Lazy بشكل طبيعي وفق قواعد إدارة الكومة."
        },
        {
          "ar": "يوفر أمان الخيوط تلقائياً ويؤجل إنشاء النسخة حتى أول استدعاء",
          "en": "Provides thread-safety automatically and defers creation",
          "ok": true,
          "why": "كائن Lazy<T> يضمن بطبيعته الأمان متعدد الخيوط (Thread-safe) دون الحاجة لكتابة أقفال يدوية، ويمنع إنشاء الكائن حتى استخدامه الفعلي."
        }
      ],
      "tip": "وقفة امتحانية قناصة: ميزة Lazy<T> في Singleton: Thread-safe out-of-the-box (آمن تزامنياً تلقائياً) + Lazy Initialization (تأجيل الإنشاء حتى الطلب).",
      "n": 88
    },
    {
      "type": "mcq",
      "ref": "L2-S029",
      "q_ar": "أي نمط تصميم إنشائي يفصل عملية بناء كائن معقد عن تمثيله النهائي، متيحاً نفس خطوات البناء لإنتاج تمثيلات متباينة؟",
      "q_en": "Which creational pattern separates the construction of a complex object from its representation, producing different representations?",
      "opts": [
        {
          "ar": "نمط الباني الإنشائي (Builder Pattern)",
          "en": "Builder Pattern",
          "ok": true,
          "why": "الباني يركز على تجميع كائن معقد خطوة بخطوة (Step-by-Step construction) عبر Director و ConcreteBuilders."
        },
        {
          "ar": "نمط النموذج الأولي (Prototype Pattern)",
          "en": "Prototype Pattern",
          "ok": false,
          "why": "النموذج الأولي ينشئ الكائنات عبر استنساخ كائن أصلي موجود مسبقاً وليس تجميعه خطوة بخطوة."
        },
        {
          "ar": "نمط طريقة المصنع (Factory Method)",
          "en": "Factory Method Pattern",
          "ok": false,
          "why": "طريقة المصنع تنشئ كائناً بدفعة واحدة عبر تفويض دالة مجردة للفئات المشتقة."
        },
        {
          "ar": "نمط المفرد التشاركي (Singleton Pattern)",
          "en": "Singleton Pattern",
          "ok": false,
          "why": "المفرد يتحكم بعدد النسخ ولا يختص ببناء وتجميع الكائنات المعقدة ذات المعاملات الكثيرة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: مفتاح نمط الباني (Builder): 'step-by-step construction of complex objects'، حل مشكلة البانيات المتضخمة (Telescoping Constructor).",
      "n": 89
    },
    {
      "type": "tf",
      "ref": "L2-S028",
      "q_ar": "يعتمد نمط المصنع المجرد (Abstract Factory) على توفير واجهة لإنشاء عائلات كاملة من الكائنات المترابطة دون تحديد فئاتها الملموسة.",
      "q_en": "Abstract Factory provides an interface for creating families of related objects without specifying concrete classes.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ هذا هو التعريف القياسي للمصنع المجرد لإنتاج منتجات متوافقة معاً (مثل أزرار وقوائم نظام Mac أو Windows)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "الهدف الجوهري للمصنع المجرد هو إنتاج عائلات كاملة متجانسة من المنتجات البرمجية."
        }
      ],
      "tip": "وقفة امتحانية قناصة: احفظ التعريف الحرفي: Abstract Factory = 'families of related or dependent objects without specifying their concrete classes'.",
      "n": 90
    },
    {
      "type": "mcq",
      "ref": "L3-S050",
      "q_ar": "ما هو نوع الوكيل (Proxy) المستخدم لتأجيل إنشاء كائن ضخم ومستهلك للموارد (مثل صورة عالية الدقة) حتى اللحظة الفعلية لطلبه؟",
      "q_en": "Which type of Proxy is used to delay creating a resource-intensive object (like a high-res image) until it is actually requested?",
      "opts": [
        {
          "ar": "الوكيل الحامي للصلاحيات والأمان (Protection Proxy)",
          "en": "Protection Proxy",
          "ok": false,
          "why": "الوكيل الحامي يتحقق من أذونات المستخدم وصلاحياته قبل تمرير الطلب للكائن الحقيقي."
        },
        {
          "ar": "الوكيل الافتراضي للتحميل الكسول (Virtual Proxy)",
          "en": "Virtual Proxy",
          "ok": true,
          "why": "الوكيل الافتراضي ينشئ كائناً خفيفاً ويؤجل استدعاء new وإنشاء الكائن الثقيل في الذاكرة حتى يتم استدعاء دالة الرسم أو العرض."
        },
        {
          "ar": "الوكيل البعيد للاتصال الشبكي (Remote Proxy)",
          "en": "Remote Proxy",
          "ok": false,
          "why": "الوكيل البعيد يمثل نائباً محلياً لكائن يعيش في خادم أو مساحة ذاكرة مختلفة عبر الشبكة."
        },
        {
          "ar": "الوكيل المؤقت للنتائج المتكررة (Caching Proxy)",
          "en": "Caching Proxy",
          "ok": false,
          "why": "وكيل التخزين المؤقت يحتفظ بنتائج العمليات الحسابية المتكررة لتسريع الإجابة دون إعادة حسابها."
        }
      ],
      "tip": "وقفة امتحانية قناصة: أنواع الوكيل (Proxy Types): Virtual = تحميل كسول (Lazy Loading) · Protection = صلاحيات وأمان · Remote = شبكة وخوادم · Caching = حفظ النتائج.",
      "n": 91
    },
    {
      "type": "tf",
      "ref": "L3-S058",
      "q_ar": "في نمط المزخرف (Decorator)، يجب أن تنفذ فئة المزخرف نفس الواجهة التي ينفذها الكائن المغلف بالكامل.",
      "q_en": "In the Decorator pattern, the decorator class must implement the exact same interface as the wrapped object.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ تطابق الواجهة يسمح للمزخرف بالحلول محل الكائن الأصلي بشفافية وتمرير الاستدعاء مع إضافة السلوك الجديد."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "تنفيذ نفس الواجهة هو الركيزة الهيكلية التي تتيح تسلسل التغليف (Chaining of Decorators)."
        }
      ],
      "tip": "وقفة امتحانية قناصة: شرط المزخرف الأساسي: Decorator implements Component interface AND holds a reference to a Component instance.",
      "n": 92
    },
    {
      "type": "mcq",
      "ref": "L4-S018",
      "q_ar": "ما هو الفارق الجوهري بين نمط الاستراتيجية (Strategy) ونمط الحالة (State) على الرغم من تطابق مخطط أصنافهما (UML)؟",
      "q_en": "What is the key difference between Strategy and State patterns despite their identical UML diagrams?",
      "opts": [
        {
          "ar": "الاستراتيجية نمط إنشائي والحالة نمط هيكلي في تصنيف GoF الرسمي",
          "en": "Strategy is creational while State is structural in GoF",
          "ok": false,
          "why": "كلا النمطين ينتميان حصراً إلى فئة الأنماط السلوكية (Behavioral Patterns)."
        },
        {
          "ar": "الاستراتيجية تتطلب وراثة متعددة والحالة تتطلب فئات ساكنة فقط",
          "en": "Strategy requires multiple inheritance, State static classes",
          "ok": false,
          "why": "كلا النمطين يعتمدان على التعددية الشكلية وتمرير الواجهات التجريدية."
        },
        {
          "ar": "الاستراتيجية يختارها العميل خارجياً والحالة تنتقل ذاتياً بين الحالات",
          "en": "Strategy chosen by client externally, State transitions internally",
          "ok": true,
          "why": "في Strategy، العميل يمرر الخوارزمية المستقلة للكائن؛ أما في State، فالحالات تعرف بعضها وتنتقل تلقائياً بناءً على شروط داخلية."
        },
        {
          "ar": "الاستراتيجية تغير الواجهة الخارجية والحالة تغير نوع قاعدة البيانات",
          "en": "Strategy alters external interface, State alters database type",
          "ok": false,
          "why": "كلا النمطين يحافظان على نفس الواجهة للعميل ولا يتدخلان في تقنيات قواعد البيانات."
        }
      ],
      "tip": "وقفة امتحانية قناصة: الفارق بين Strategy و State: Strategy = العميل يحدد الخوارزمية المستقلة · State = الكائن يتنقل ذاتياً بين حالات تعرف بعضها.",
      "n": 93
    },
    {
      "type": "tf",
      "ref": "L4-S025",
      "q_ar": "في لغة C#، توفر الأحداث والمفوضات (Events & Delegates) آلية لغوية مدمجة لتنفيذ نمط المراقب (Observer Pattern).",
      "q_en": "In C#, Events and Delegates provide a built-in language mechanism to implement the Observer Pattern.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ المفوضات والأحداث تمثل التطبيق الأصلي المباشر لنمط Observer في منصة .NET للاشتراك والبث."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "الاشتراك بالحدث عبر += وإلغاؤه بـ -= يجسد تماماً دوال Attach و Detach لنمط المراقب."
        }
      ],
      "tip": "وقفة امتحانية قناصة: C# Events & Delegates = Built-in Observer Pattern في بيئة الدوت نت.",
      "n": 94
    },
    {
      "type": "mcq",
      "ref": "L5-S032",
      "q_ar": "ما الفرق المعماري في طبقة النطاق (Domain) بين الكيان (Entity) وكائن القيمة (Value Object)؟",
      "q_en": "What is the architectural difference between an Entity and a Value Object in the Domain layer?",
      "opts": [
        {
          "ar": "الكيان يخزن بقواعد البيانات وكائن القيمة يخزن بملفات التكوين فقط",
          "en": "Entity stored in database, Value Object in config files only",
          "ok": false,
          "why": "كلاهما يخزن في قاعدة البيانات؛ كائن القيمة يدمج كأعمدة تابعة لجدول الكيان الأصلي (Owned Entity)."
        },
        {
          "ar": "الكيان مخصص لحالات الاستخدام وكائن القيمة مخصص لعرض الشاشات",
          "en": "Entity for use cases, Value Object strictly for UI display",
          "ok": false,
          "why": "كلاهما ينتميان لطبقة النطاق (Domain) ويعبران عن مفاهيم الأعمال الجوهرية."
        },
        {
          "ar": "الكيان قابل للتعديل وكائن القيمة يدعم التعددية الشكلية بالوراثة",
          "en": "Entity is mutable, Value Object supports polymorphism inheritance",
          "ok": false,
          "why": "كائنات القيمة غير قابلة للتعديل (Immutable) وتعتمد مقارنة المساواة الهيكلية لقيمها."
        },
        {
          "ar": "الكيان يمتلك معرفاً فريداً مميزاً وكائن القيمة يحدد بخصائصه فقط",
          "en": "Entity has unique identity (ID), Value Object defined by properties",
          "ok": true,
          "why": "الكيان (مثل User) يتميز بمعرف Id لا يتغير حتى لو تغيرت بياناته، بينما كائن القيمة (مثل Address أو Money) يعرف بقيم حقوله ولا يمتلك Id خاصاً."
        }
      ],
      "tip": "وقفة امتحانية قناصة: قاعدة DDD في النطاق: Entity = يمتلك هوية ومعرف فريد (Identity / ID) · Value Object = بلا هوية، غير قابل للتعديل (Immutable)، ويتطابق بتطابق كافة حقوله.",
      "n": 95
    },
    {
      "type": "mcq",
      "ref": "L5-S055",
      "q_ar": "لماذا تُستخدم كائنات نقل البيانات (Data Transfer Objects - DTOs) لنقل البيانات بين طبقات العمارة النظيفة والعميل؟",
      "q_en": "Why are Data Transfer Objects (DTOs) used to pass data between Clean Architecture layers and clients?",
      "opts": [
        {
          "ar": "لعزل الكيانات الداخلية وحماية تفاصيل قاعدة البيانات من كشفها للعميل",
          "en": "To isolate internal entities and avoid exposing database schema",
          "ok": true,
          "why": "كائنات DTO تنقل فقط الحقول المطلوبة للواجهة، وتمنع كشف حقول الأمان الخاصة بالكيانات (مثل كلمات السر) وتفكك الارتباط."
        },
        {
          "ar": "لأن أطر عمل الويب لا تستطيع معالجة الكائنات ذات الخصائص العامة",
          "en": "Because web frameworks cannot serialize public property objects",
          "ok": false,
          "why": "أطر العمل قادرة على تسلسل الكيانات، لكن تمريرها مباشرة يمثل خطراً أمنياً وتصميماً رديئاً."
        },
        {
          "ar": "لتسريع استعلامات SQL عبر تحويل نصوص JSON تلقائياً إلى جداول",
          "en": "To accelerate SQL queries by auto-converting JSON to tables",
          "ok": false,
          "why": "كائنات DTO مجرد هياكل بيانات لنقل المعلومات ولا تؤثر على محرك استعلامات SQL."
        },
        {
          "ar": "لإجبار كافة المتحكمات على استخدام النمط الإنشائي لطريقة المصنع",
          "en": "To force all controllers to use the Factory Method pattern",
          "ok": false,
          "why": "لا ترتبط كائنات DTO بأنماط إنشاء المصانع."
        }
      ],
      "tip": "وقفة امتحانية قناصة: وظيفة DTOs: عزل وحماية كيانات النطاق (Encapsulate Domain Entities) ونقل البيانات الضرورية فقط للعميل.",
      "n": 96
    },
    {
      "type": "mcq",
      "ref": "L6-S026",
      "q_ar": "ما هو رمز الحالة في بروتوكول HTTP (Status Code) الذي يجب أن يعيده الخادم عند نجاح إنشاء مورد جديد في قاعدة البيانات؟",
      "q_en": "Which HTTP Status Code must the server return when a new resource is successfully created in the database?",
      "opts": [
        {
          "ar": "رمز تم الطلب بنجاح (200 OK)",
          "en": "200 OK status code",
          "ok": false,
          "why": "رمز 200 يشير لنجاح عام للطلب (مثل القراءة أو التعديل)، لكن المعيار الأفضل للإنشاء هو 201."
        },
        {
          "ar": "رمز تم الإنشاء بنجاح (201 Created)",
          "en": "201 Created status code",
          "ok": true,
          "why": "رمز 201 يشير صراحة لنجاح إنشاء مورد جديد، وعادة ما يُرفق معه ترويسة Location تشير لرابط المورد المنشأ حديثاً."
        },
        {
          "ar": "رمز تم التنفيذ بلا محتوى (204 No Content)",
          "en": "204 No Content status code",
          "ok": false,
          "why": "رمز 204 يعاد عند نجاح العملية دون إرجاع أي بيانات في جسم الاستجابة (مثل دالة DELETE)."
        },
        {
          "ar": "رمز الطلب غير صالح ومرفوض (400 Bad Request)",
          "en": "400 Bad Request status code",
          "ok": false,
          "why": "رمز 400 يشير لفشل الطلب بسبب خطأ في مدخلات العميل."
        }
      ],
      "tip": "وقفة امتحانية قناصة: رموز HTTP القياسية: 200 = نجاح عام (OK) · 201 = تم إنشاء مورد (Created) · 204 = نجاح بلا محتوى (No Content) · 400 = خطأ مدخلات · 401 = غير مسجل دخول · 403 = ممنوع الصلاحية · 404 = غير موجود.",
      "n": 97
    },
    {
      "type": "tf",
      "ref": "L6-S030",
      "q_ar": "يتم تشفير حمولة رمز الويب (JWT Payload) تلقائياً بحيث يستحيل على أي متصفح قراءة محتويات الحقول والمطالبات بداخله.",
      "q_en": "The JWT Payload is automatically encrypted so that no browser can read the claims inside it.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ حمولة JWT تكون مشفرة بـ Base64Url فقط (Encoded وليس Encrypted)، ويمكن لأي شخص فكها وقراءتها بسهولة."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ التوقيع الرقمي يحمي الرمز من التعديل والتلاعب (Tampering)، لكنه لا يخفي محتواه؛ لذا يُحظر تخزين كلمات السر في الحمولة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: فخ أمني متكرر: JWT موقع رقمياً (Signed) وليس مشفراً (Encrypted)؛ بيانات الحمولة مقروءة للجميع، والتوقيع يمنع التلاعب فقط.",
      "n": 98
    },
    {
      "type": "mcq",
      "ref": "L7-S016",
      "q_ar": "ما هي الظاهرة الخطيرة الناتجة عن قيام خيطين بحجز موردين وطلب كل منهما المورد الذي بحوزة الآخر إلى ما لا نهاية؟",
      "q_en": "What dangerous concurrency phenomenon occurs when two threads hold resources and wait indefinitely for each other's resource?",
      "opts": [
        {
          "ar": "حالة التسابق على البيانات (Race Condition)",
          "en": "Race Condition concurrency issue",
          "ok": false,
          "why": "حالة التسابق تحدث عند تعديل عدة خيوط لنفس المورد معاً مما ينتج بيانات غير صحيحة، ولكنها لا تجمد النظام كلياً في انتظار دائم."
        },
        {
          "ar": "طفحان ذاكرة المكدس للعملية (Stack Overflow)",
          "en": "Stack Overflow memory error",
          "ok": false,
          "why": "طفحان المكدس ينتج عن الاستدعاء التكراري اللانهائي للدوال (Infinite Recursion) وليس عن حجز أقفال التزامن."
        },
        {
          "ar": "حالة القفل الميت والجمود التام (Deadlock)",
          "en": "Deadlock concurrency condition",
          "ok": true,
          "why": "القفل الميت يحدث عند توفر الشروط الأربعة لكوفمان (وخاصة الانتظار الدائري Circular Wait)، مما يجمد الخيوط المتنافسة للأبد."
        },
        {
          "ar": "حالة تجويع المعالج المؤقت (CPU Throttling)",
          "en": "CPU Throttling condition",
          "ok": false,
          "why": "خنق المعالج آلية عتادية لخفض حرارة المعالج ولا علاقة لها بأقفال المزامنة البرمجية."
        }
      ],
      "tip": "وقفة امتحانية قناصة: Deadlock = جمود متبادل دائم بين الخيوط لحجز الموارد (Circular Wait) · Race Condition = تضارب نتائج بسبب الوصول المتزامن غير المحمي.",
      "n": 99
    },
    {
      "type": "mcq",
      "ref": "L7-S028",
      "q_ar": "ما الذي يحدث للخيط في بيئة ASP.NET Core عند استخدام الكلمات المفتاحية async و await أثناء انتظار استعلام قاعدة بيانات خارجي؟",
      "q_en": "What happens to the thread in ASP.NET Core when using async and await while waiting for an external database query?",
      "opts": [
        {
          "ar": "يظل الخيط محجوزاً ومجمداً في حالة انتظار نائم حتى تنتهي قاعدة البيانات",
          "en": "Thread remains blocked and asleep waiting for database",
          "ok": false,
          "why": "هذا هو السلوك المتزامن القديم (Synchronous Blocking) الذي يسبب استنزاف مجمع الخيوط (Thread Pool Starvation)."
        },
        {
          "ar": "يتم إنشاء عملية نظام تشغيل مستقلة فوراً لمعالجة كل استعلام",
          "en": "A separate OS process is spawned to handle each query",
          "ok": false,
          "why": "إنشاء عمليات جديدة مكلف جداً وغير وارد في معالجة طلبات الويب غير المتزامنة."
        },
        {
          "ar": "يتم إغلاق اتصال المتصفح وتحويل العميل لصفحة خطأ حتى وصول الرد",
          "en": "Browser connection is closed and client redirected to error page",
          "ok": false,
          "why": "اتصال المتصفح يظل معلقاً وينتظر الاستجابة بشكل طبيعي دون انقطاع."
        },
        {
          "ar": "يتحرر الخيط ويعود لمجمع الخيوط (ThreadPool) لخدمة طلبات عملاء آخرين",
          "en": "Thread is released to ThreadPool to serve other client requests",
          "ok": true,
          "why": "البرمجة غير المتزامنة لعمليات I/O تحرر خيط المعالجة بالاعتماد على منافذ إكمال العتاد (IOCP)، وعند عودة النتيجة يكمل خيط متاح المعالجة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: الفائدة العظمى لـ async/await في خوادم الويب: تحرير خيوط السيرفر لمجمع ThreadPool لخدمة آلاف المستخدمين دون حجز خيوط في انتظار I/O.",
      "n": 100
    },
    {
      "type": "tf",
      "ref": "L7-S035",
      "q_ar": "تتسبب استدعاءات Task.Result أو Task.Wait() على خيوط واجهة المستخدم أو خوادم الويب القديمة في حدوث قفل ميت (Deadlock).",
      "q_en": "Calling Task.Result or Task.Wait() on UI or legacy ASP.NET threads can cause a Deadlock.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ حجز الخيط بشكل متزامن بانتظار مهمة تحتاج نفس خيط المزامنة (SynchronizationContext) لإكمالها يسبب Deadlock كلاسيكياً."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "هذه من أشهر القواعد الامتحانية: يُحظر استخدام Sync-over-Async (مثل .Result) لتفادي تجمد النظام والقفل الميت."
        }
      ],
      "tip": "وقفة امتحانية قناصة: قاعدة ذهبية: Async all the way! استخدام .Result أو .Wait() يحجب الخيط ويسبب Deadlock محتماً في بيئات تزامن السياق.",
      "n": 101
    },
    {
      "type": "mcq",
      "ref": "L8-S014",
      "q_ar": "ما هو المبدأ في معمارية النظم الموزعة الذي ينص على أن كافة العقد ستصل لنفس حالة البيانات الموحدة في النهاية ولكن بعد مرور فارق زمني طفيف؟",
      "q_en": "Which distributed systems principle states that all nodes will eventually achieve the same data state after a slight delay?",
      "opts": [
        {
          "ar": "التناسق المؤجل والتوافقي في النهاية (Eventual Consistency)",
          "en": "Eventual Consistency",
          "ok": true,
          "why": "التناسق المؤجل هو الركيزة الأساسية للأنظمة الموزعة وفق نظرية CAP، حيث يتم تفضيل التوافرية العالية وقبول فارق زمني طفيف لتزامن البيانات."
        },
        {
          "ar": "التناسق اللحظي الصارم عبر كافة الخوادم (Strict Consistency)",
          "en": "Strict Instantaneous Consistency",
          "ok": false,
          "why": "التناسق الصارم يتطلب أقفالاً مركزية تعطل الأنظمة الموزعة عند حدوث انقطاع في الشبكة."
        },
        {
          "ar": "المعاملات الخطية أحادية المعالج (Linear Transactions)",
          "en": "Single-core Linear Transactions",
          "ok": false,
          "why": "المعاملات الخطية تنتمي لقواعد البيانات المركزية القديمة وتتعارض مع التوزيع الجغرافي."
        },
        {
          "ar": "العزل التام والتدمير الفوري للبيانات القديمة (Immediate Purge)",
          "en": "Immediate Purge and complete isolation",
          "ok": false,
          "why": "عزل وتدمير البيانات ليس نمط تناسق بل إجراء تفريغ ذاكرة."
        }
      ],
      "tip": "وقفة امتحانية قناصة: قاعدة النظم الموزعة: Eventual Consistency = البيانات تتناسق في النهاية (Eventual) لتفادي إيقاف النظام وتحقيق التوافرية العالية (High Availability).",
      "n": 102
    },
    {
      "type": "mcq",
      "ref": "L8-S045",
      "q_ar": "ما هو المقياس الرياضي الأكثر استخداماً لحساب درجة التشابه الدلالي بين متجهات النصوص في قواعد البيانات المتجهية داخل معمارية RAG؟",
      "q_en": "Which mathematical metric is most commonly used to measure semantic similarity between text vectors in RAG Vector Databases?",
      "opts": [
        {
          "ar": "المسافة الجغرافية لنظام تحديد المواقع (GPS Distance)",
          "en": "GPS Geographic Coordinates Distance",
          "ok": false,
          "why": "إحداثيات GPS مخصصة للمواقع على الخريطة ولا علاقة لها بالدلالات اللغوية للنصوص."
        },
        {
          "ar": "تشابه جيب التمام بين المتجهات (Cosine Similarity)",
          "en": "Cosine Similarity metric",
          "ok": true,
          "why": "يقيس تشابه جيب التمام زاوية الاتجاه بين متجهين متعددي الأبعاد، مما يعكس التشابه الدلالي بغض النظر عن طول النص."
        },
        {
          "ar": "حساب عدد الحروف الهجائية المتطابقة (Character Count)",
          "en": "Identical Character Count matching",
          "ok": false,
          "why": "مطابقة الحروف مطابقة نصية سطحية تعجز عن فهم المعنى الدلالي للمفردات المترادفة."
        },
        {
          "ar": "الانحراف المعياري لترددات شبكة الاتصال (Network Jitter)",
          "en": "Standard deviation of network frequencies",
          "ok": false,
          "why": "هذا مقياس لفيزياء شبكات الاتصال ولا يرتبط بنماذج الذكاء الاصطناعي."
        }
      ],
      "tip": "وقفة امتحانية قناصة: مقياس البحث الدلالي في RAG: تشابه جيب التمام (Cosine Similarity) أو المسافة الإقليدية (Euclidean Distance / Dot Product).",
      "n": 103
    },
    {
      "type": "tf",
      "ref": "L8-S022",
      "q_ar": "يقوم نمط الحاجز (Bulkhead Pattern) بعزل موارد النظام في مسابح معزولة حتى لا يؤدي تعطل خدمة تابعة واحدة إلى استنزاف كامل خيوط الخادم.",
      "q_en": "The Bulkhead Pattern isolates system resources into pools so a failing dependency does not exhaust all server threads.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ استعير الاسم من حواجز السفن المعزولة لمنع غرق السفينة بأكملها عند تسرب الماء في قسم واحد."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "عزل الموارد (Resource Isolation) هو الجوهر الحرفي لنمط Bulkhead في أطر عمل المرونة مثل Polly."
        }
      ],
      "tip": "وقفة امتحانية قناصة: نمط Bulkhead (الحاجز): مستوحى من حواجز السفن لعزل الخيوط والموارد (Thread Pool Isolation) ومنع غرق النظام بأكمله.",
      "n": 104
    }
  ]
});
