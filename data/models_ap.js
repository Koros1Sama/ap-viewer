/* ═══════════════════════════════════════════════════════════
   بنك أسئلة ونماذج الاختبار النهائي — البرمجة المتقدمة
   المدرس: د. بيداء لعلع — 325 سؤال اختيار من متعدد تفاعلية
   توزيع الوحدات: L1 (35س) · L2 (30س) · L3 (45س) · L4 (35س) · L5 (60س) · L6 (40س) · L7 (40س) · L8 (40س)
   معيار الجودة: خيارات ثنائية اللغة (en/ar) + تفسير علمي دقيق + صفر إيموجيات
   ═══════════════════════════════════════════════════════════ */
window.TOC_MODELS = window.TOC_MODELS || [];
window.TOC_MODELS.push({
  "id": "ap_theory_final",
  "kind": "نظري",
  "title_ar": "بنك أسئلة ونماذج البرمجة المتقدمة النهائي — د. بيداء لعلع",
  "short_label": "بنك النهائي",
  "origin_ar": "بنك أسئلة معياري شامل مولّد ومطوّر بالذكاء الاصطناعي بدقة تامة وفق السلايدات والمحاضرات الرسمية المعتمدة للدكتورة بيداء لعلع (أنماط التصميم 23، مبادئ SOLID، العمارة النظيفة، التزامن، وإدارة الذاكرة)، مع تدقيق علمي وتفسير لكل خيار ووقفة امتحانية لكل سؤال.",
  "questions": [
    {
      "n": 1,
      "type": "mcq",
      "ref": "L1-S001",
      "q_ar": "ما هو المحور الأساسي الذي يركز عليه مقرر البرمجة المتقدمة مقارنة بمساقات البرمجة التأسيسية؟",
      "q_en": "What is the primary focus of the Advanced Programming course compared to foundational programming courses?",
      "opts": [
        {
          "ar": "حفظ الكلمات المفتاحية وقواعد كتابة الحلقات التكرارية والمصفوفات البسيطة.",
          "ok": false,
          "why": "هذه أساسيات البرمجة للمبتدئين وليست جوهر البرمجة المتقدمة.",
          "en": "Memorizing keywords and syntax for loops and simple arrays."
        },
        {
          "ar": "بناء أنظمة برمجية قابلة للصيانة والتوسع وإعادة الاستخدام وفق مبادئ هندسية ومعمارية معتمدة.",
          "ok": true,
          "why": "البرمجة المتقدمة تهدف لنقل الطالب من مجرد كتابة كود وظيفي إلى مهندس يصمم بنى تحتية مرنة وقابلة للصيانة والتوسع.",
          "en": "Building maintainable, extensible, and reusable software systems following established architectural and engineering principles."
        },
        {
          "ar": "التركيز الحصري على تصميم واجهات المستخدم الرسومية وتحسين مظهر الشاشات.",
          "ok": false,
          "why": "البرمجة المتقدمة تركز على البنية المعمارية ومنطق الأعمال الداخلي وأنماط التصميم وليس مجرد الواجهات.",
          "en": "Focusing exclusively on graphical user interface (GUI) design and screen aesthetics."
        },
        {
          "ar": "الاعتماد على البرمجة الإجرائية التقليدية وتجنب استخدام الكائنات والمفاهيم المجردة.",
          "ok": false,
          "why": "البرمجة المتقدمة ترتكز بالكامل على البرمجة كائنية التوجه وتجريداتها المعمارية.",
          "en": "Relying on traditional procedural programming while avoiding objects and abstract concepts."
        }
      ],
      "tip": "وقفة امتحانية: تذكر أن البرمجة المتقدمة ليست مجرد كتابة كود يعمل، بل كتابة كود نظيف يقاوم التغيير وقابل للتوسع والصيانة."
    },
    {
      "n": 2,
      "type": "mcq",
      "ref": "L1-S002",
      "q_ar": "لماذا لا تعكس التطبيقات الصغيرة البسيطة (مثل الآلة الحاسبة) التحديات الحقيقية في هندسة البرمجيات؟",
      "q_en": "Why do small applications (like a simple calculator) fail to reflect real software engineering challenges?",
      "opts": [
        {
          "ar": "لأن التطبيقات البسيطة لا تحتاج لمعالج دقيق أو نظام تشغيل لتعمل.",
          "ok": false,
          "why": "أي تطبيق برمجي يحتاج بيئة تشغيل ومعالج لتنفيذه.",
          "en": "Because simple applications do not require a microprocessor or operating system to run."
        },
        {
          "ar": "لأنها صغيرة الحجم وثابتة المتطلبات، بينما الأنظمة الحقيقية ضخمة ومتغيرة باستمرار وتتطلب كوداً قابلاً للتطور والصيانة.",
          "ok": true,
          "why": "التحدي الحقيقي في المشاريع الواقعية يكمن في إدارة التغيير والتعقيد وتكلفة الصيانة المستمرة.",
          "en": "Because they are small-scale with static requirements, whereas real-world systems are large, continuously evolving, and require evolvable and maintainable code."
        },
        {
          "ar": "لأن البرمجة المتقدمة لا تدعم العمليات الحسابية أو المتغيرات الرقمية.",
          "ok": false,
          "why": "البرمجة المتقدمة تدعم كافة العمليات الأساسية ولكنها تبني فوقها هياكل معقدة.",
          "en": "Because advanced programming does not support arithmetic operations or numeric variables."
        },
        {
          "ar": "لأن البرمجيات الصغيرة تكتب فقط بلغات منخفضة المستوى مثل لغة التجميع.",
          "ok": false,
          "why": "التطبيقات الصغيرة يمكن كتابتها بأي لغة برمجة عالية المستوى.",
          "en": "Because small applications are written only in low-level languages like Assembly."
        }
      ],
      "tip": "وقفة امتحانية: التحدي الأكبر في الأنظمة الحقيقية هو تكلفة الصيانة ومقاومة التصميم للتغيير (Maintainability & Evolution)."
    },
    {
      "n": 3,
      "type": "mcq",
      "ref": "L1-S003",
      "q_ar": "ما الميزة التنافسية الكبرى التي تبحث عنها شركات التقنية الحديثة في مهندس البرمجيات المتقدم؟",
      "q_en": "What major competitive advantage do modern tech companies look for in an advanced software engineer?",
      "opts": [
        {
          "ar": "القدرة على كتابة أكبر عدد ممكن من أسطر الكود بأسرع وقت دون تخطيط.",
          "ok": false,
          "why": "كثرة أسطر الكود دون تخطيط تؤدي للتعقيد والديون الفنية وتعتبر ممارسة سيئة.",
          "en": "The ability to write the largest number of code lines in the shortest time without planning."
        },
        {
          "ar": "القدرة على تصميم معماريات برمجية مرنة ومفككة الترابط يمكن صيانتها وتوسيعها بأقل تكلفة ومخاطر.",
          "ok": true,
          "why": "الشركات تبحث عن مهندسين يقللون كلفة الصيانة ويصممون نظماً تقبل التغيير السريع دون انهيار.",
          "en": "The ability to design flexible, loosely coupled software architectures that can be maintained and extended with minimal cost and risk."
        },
        {
          "ar": "تجنب استخدام المكونات الجاهزة والمكتبات وكتابة كل شيء من الصفر دوماً.",
          "ok": false,
          "why": "إعادة اختراع العجلة يعطل الإنتاج ويهدر الموارد بعكس مبدأ إعادة الاستخدام.",
          "en": "Avoiding third-party components and libraries, and always writing everything from scratch."
        },
        {
          "ar": "حفظ جميع خوارزميات الترتيب والبحث دون فهم معايير جودة التصميم.",
          "ok": false,
          "why": "الخوارزميات مهمة ولكن تصميم النظام وإدارته المعمارية هو العامل الحاسم في بقاء المشروع.",
          "en": "Memorizing all sorting and searching algorithms without understanding design quality metrics."
        }
      ],
      "tip": "وقفة امتحانية: قابلية الصيانة (Maintainability) تستحوذ على أكثر من 70% من تكلفة دورة حياة أي نظام برمجي."
    },
    {
      "n": 4,
      "type": "mcq",
      "ref": "L1-S004",
      "q_ar": "ما الهدف النهائي لخارطة مقرر البرمجة المتقدمة للدكتورة بيداء لعلع؟",
      "q_en": "What is the ultimate goal of the Advanced Programming course roadmap by Dr. Baydaa La'la?",
      "opts": [
        {
          "ar": "إتقان أوامر نظام التشغيل وموجه الأوامر فقط.",
          "ok": false,
          "why": "المقرر يتعلق بهندسة البرمجيات والتصميم المعماري وليس مجرد سطر الأوامر.",
          "en": "Mastering operating system commands and command-line prompts only."
        },
        {
          "ar": "تمكين المطور من إتقان مبادئ SOLID وأنماط التصميم المعمارية والعمارة النظيفة لبناء أنظمة برمجية احترافية.",
          "ok": true,
          "why": "الهدف الشامل هو تحويل الطالب إلى مهندس برمجيات يمتلك أدوات التصميم النظيف والعمارة الحديثة.",
          "en": "Enabling developers to master SOLID principles, architectural design patterns, and Clean Architecture to build professional software systems."
        },
        {
          "ar": "التحول التام للبرمجة بلغة التجميع (Assembly Language) لتحسين السرعة المطلقة.",
          "ok": false,
          "why": "المقرر يركز على اللغات الكائنية الحديثة مثل C# ومنصة .NET.",
          "en": "Switching completely to Assembly language programming for absolute execution speed."
        },
        {
          "ar": "إلغاء التعامل مع قواعد البيانات نهائياً في المشاريع البرمجية.",
          "ok": false,
          "why": "المقرر يعلم كيفية تجريد قواعد البيانات وليس إلغاءها.",
          "en": "Completely eliminating database interactions from software projects."
        }
      ],
      "tip": "وقفة امتحانية: المحاور الثلاثة الكبرى للمقرر: مبادئ SOLID، أنماط التصميم (GoF)، والعمارة النظيفة (Clean Architecture)."
    },
    {
      "n": 5,
      "type": "mcq",
      "ref": "L1-S005",
      "q_ar": "وفقاً لخارطة المنهج، تحت أي تصنيف تندرج أنماط Singleton و Factory Method؟",
      "q_en": "According to the course roadmap, under which category do Singleton and Factory Method patterns fall?",
      "opts": [
        {
          "ar": "أنماط التصميم الهيكلية (Structural Patterns).",
          "ok": false,
          "why": "الأنماط الهيكلية تهتم بتجميع الكائنات مثل Adapter و Facade.",
          "en": "Structural Design Patterns."
        },
        {
          "ar": "أنماط التصميم الإنشائية (Creational Patterns).",
          "ok": true,
          "why": "أنماط Creational مسؤولة عن آليات إنشاء الكائنات وتجريد عملية التكوين.",
          "en": "Creational Design Patterns."
        },
        {
          "ar": "أنماط التصميم السلوكية (Behavioral Patterns).",
          "ok": false,
          "why": "الأنماط السلوكية تنظم تدفق التحكم والمسؤوليات مثل Strategy و Observer.",
          "en": "Behavioral Design Patterns."
        },
        {
          "ar": "أنماط البنية التحتية وقواعد البيانات فقط.",
          "ok": false,
          "why": "هذه تصنيفات معمارية أخرى وليست تصنيفات أنماط تصميم عصابة الأربعة.",
          "en": "Infrastructure and database patterns only."
        }
      ],
      "tip": "وقفة امتحانية: تذكر تصنيف GoF الثلاثي: Creational (إنشائي)، Structural (هيكلي)، Behavioral (سلوكي)."
    },
    {
      "n": 6,
      "type": "mcq",
      "ref": "L1-S006",
      "q_ar": "ما هو المعيار الأكاديمي الحاكم للتقييم في مقرر البرمجة المتقدمة؟",
      "q_en": "What is the primary academic assessment criterion in the Advanced Programming course?",
      "opts": [
        {
          "ar": "حفظ تعريفات الشرائح نصياً دون القدرة على تشخيص انتهاكات التصميم في الكود.",
          "ok": false,
          "why": "المقرر يركز على الفهم الهندسي والقدرة على التحليل واكتشاف الأخطاء المعمارية.",
          "en": "Rote memorization of slide definitions without the ability to diagnose design violations in code."
        },
        {
          "ar": "الجمع بين الاختبارات النظرية الصارمة وتقييم المشروع التطبيقي العملي القائم على الأنماط والعمارة النظيفة.",
          "ok": true,
          "why": "التقييم يوازن بين الاستيعاب النظري العميق للمفاهيم والتطبيق الهندسي المتقن.",
          "en": "Combining rigorous theoretical examinations with practical project evaluation based on design patterns and Clean Architecture."
        },
        {
          "ar": "الاعتماد فقط على الحضور والغياب دون أي تقييم برمجيات.",
          "ok": false,
          "why": "المقرر تخصصي يعتمد على مخرجات هندسية صريحة واختبارات قياسية.",
          "en": "Relying solely on attendance without evaluating any software deliverables."
        },
        {
          "ar": "كتابة برنامج بلغة C القديمة بدون كائنات.",
          "ok": false,
          "why": "المقرر كائني بالكامل.",
          "en": "Writing a legacy C program without objects."
        }
      ],
      "tip": "وقفة امتحانية: الاختبارات تركز دائماً على أسئلة تحليل السيناريوهات: 'ما المشكلة في هذا الكود؟' و'أي نمط يحل هذه المشكلة؟'."
    },
    {
      "n": 7,
      "type": "mcq",
      "ref": "L1-S007",
      "q_ar": "أي من المراجع التالية يُعد المرجع المعماري الأبرز لمبادئ SOLID والعمارة النظيفة في المقرر؟",
      "q_en": "Which reference serves as the primary architectural resource for SOLID principles and Clean Architecture in the course?",
      "opts": [
        {
          "ar": "كتاب 'Clean Architecture' لروبرت مارتن (Uncle Bob).",
          "ok": true,
          "why": "هو المرجع الأصلي لصياغة مبادئ SOLID والعمارة النظيفة المعتمدة في المقرر.",
          "en": "'Clean Architecture' book by Robert C. Martin (Uncle Bob)."
        },
        {
          "ar": "كتيب إرشادات تثبيت نظام ويندوز فقط.",
          "ok": false,
          "why": "لا علاقة له بهندسة البرمجيات وتصميم النظم.",
          "en": "Windows installation guide only."
        },
        {
          "ar": "قاموس أكسفورد للمصطلحات العامة.",
          "ok": false,
          "why": "مرجع لغوي وليس هندسياً برمجياً.",
          "en": "Oxford English Dictionary for general terms."
        },
        {
          "ar": "دليل صيانة اللوحات الإلكترونية المطبوعة.",
          "ok": false,
          "why": "مجال عتادي وليس برمجياً.",
          "en": "Printed circuit board maintenance handbook."
        }
      ],
      "tip": "وقفة امتحانية: روبرت مارتن (Robert C. Martin) هو واضع اختصار مبادئ SOLID ومؤلف كتاب Clean Architecture."
    },
    {
      "n": 8,
      "type": "mcq",
      "ref": "L1-S008",
      "q_ar": "ما هو التعريف الأساسي للبرمجة الحاسوبية (Programming)؟",
      "q_en": "What is the foundational definition of computer programming?",
      "opts": [
        {
          "ar": "عملية صيانة الأجهزة والأسلاك الكهربائية للحاسوب.",
          "ok": false,
          "why": "هذه هندسة إلكترونية وعتادية وليست برمجة.",
          "en": "The process of hardware maintenance and electrical wiring for computers."
        },
        {
          "ar": "عملية كتابة مجموعة من التعليمات المتسلسلة والمنطقية التي ينفذها الحاسوب لتحقيق مهمة أو حل مشكلة معينة.",
          "ok": true,
          "why": "البرمجة هي إعطاء الحاسوب أوامر يفهمها وينفذها بدقة للوصول إلى النتيجة المطلوبة.",
          "en": "The process of writing a sequence of logical instructions executed by a computer to accomplish a specific task or solve a problem."
        },
        {
          "ar": "توليد صور ورسوم عشوائية باستخدام الطابعات الرقمية.",
          "ok": false,
          "why": "البرمجة علم حوسبة وتوجيه منطقي للبيانات.",
          "en": "Generating random images and graphics using digital printers."
        },
        {
          "ar": "إيقاف عمل المعالج لتوفير الطاقة الكهربائية.",
          "ok": false,
          "why": "هذا وضع خمول وليس عملية برمجة.",
          "en": "Halting the processor to conserve electrical power."
        }
      ],
      "tip": "وقفة امتحانية: البرمجة تبدأ من كتابة تعليمات، لكن هندسة البرمجيات ترفعها لتنظيم أنظمة ضخمة ومستدامة."
    },
    {
      "n": 9,
      "type": "mcq",
      "ref": "L1-S009",
      "q_ar": "كيف تميز البرمجة المتقدمة نفسها عن البرمجة للمبتدئين من منظور هيكل الكود؟",
      "q_en": "How does Advanced Programming distinguish itself from beginner programming in terms of code structure?",
      "opts": [
        {
          "ar": "بوضع كامل شفرة البرنامج داخل دالة Main() واحدة بطول آلاف الأسطر.",
          "ok": false,
          "why": "هذا يسمى الكود المعكروني (Spaghetti Code) وأسوأ ممارسة برمجية.",
          "en": "By placing the entire program code inside a single Main() method spanning thousands of lines."
        },
        {
          "ar": "بتطبيق التفكيك المعياري، إخفاء البيانات، تقليل الترابط (Loose Coupling)، ورفع التماسك (High Cohesion).",
          "ok": true,
          "why": "هذه هي الأعمدة الهندسية التي تجعل النظام قابلاً للفهم والاختبار والتطوير المستقل.",
          "en": "By applying modular decomposition, data hiding, loose coupling, and high cohesion."
        },
        {
          "ar": "بالاستغناء التام عن الدوال والفئات والاعتماد على القفز المباشر عبر goto.",
          "ok": false,
          "why": "جملة goto مدمرة لهيكلية البرامج ومحرمة معمارياً.",
          "en": "By completely eliminating functions and classes and relying on direct branching via goto."
        },
        {
          "ar": "بإلغاء المتغيرات والتعامل الحصري مع الذاكرة عبر مؤشرات عشوائية.",
          "ok": false,
          "why": "هذا يكسر أمان الأنواع ويسبب انهيار النظام.",
          "en": "By eliminating variables and dealing exclusively with memory via arbitrary pointers."
        }
      ],
      "tip": "وقفة امتحانية: المبدأان الذهبيان في جودة البرمجيات: Loose Coupling (ترابط مفكك) و High Cohesion (تماسك عالٍ)."
    },
    {
      "n": 10,
      "type": "mcq",
      "ref": "L1-S010",
      "q_ar": "ما هي منصة .NET وما المكونات الأساسية التي توفرها للمطورين؟",
      "q_en": "What is the .NET platform and what core components does it provide to developers?",
      "opts": [
        {
          "ar": "نظام تشغيل مغلق ومخصص للخوادم العملاقة فقط دون مكتبات.",
          "ok": false,
          "why": ".NET منصة تطوير تعمل عبر أنظمة متعددة وليست نظام تشغيل.",
          "en": "A closed operating system dedicated solely to mainframe servers without libraries."
        },
        {
          "ar": "منصة تطوير شاملة توفر بيئة تشغيل (CLR)، مكتبات قياسية غنية (BCL)، وأدوات لبناء تطبيقات الويب والموبايل والسطح والسحابة.",
          "ok": true,
          "why": ".NET بيئة متكاملة تتيح للمطورين بناء كافة أنواع التطبيقات بالاعتماد على محرك ومكتبات موحدة.",
          "en": "A comprehensive development platform providing a runtime environment (CLR), rich class libraries (BCL), and tools for building web, mobile, desktop, and cloud applications."
        },
        {
          "ar": "قاعدة بيانات علائقية لتخزين الجداول فقط مثل SQL Server.",
          "ok": false,
          "why": ".NET منصة برمجية كاملة وليست محرك قواعد بيانات.",
          "en": "A relational database management system for storing tables only, like SQL Server."
        },
        {
          "ar": "أداة لضغط الملفات وتقليل حجم الصور.",
          "ok": false,
          "why": ".NET إطار عمل تطويري ضخم من مايكروسوفت.",
          "en": "A tool for compressing files and reducing image sizes."
        }
      ],
      "tip": "وقفة امتحانية: منصة .NET تتكون من ركيزتين: Runtime Environment (بيئة التشغيل CLR) و Base Class Libraries (المكتبات)."
    },
    {
      "n": 11,
      "type": "mcq",
      "ref": "L1-S011",
      "q_ar": "ما هي الوظيفة الجوهرية لمترجم JIT (Just-In-Time) داخل بيئة تشغيل CLR؟",
      "q_en": "What is the core function of the JIT (Just-In-Time) compiler within the CLR runtime?",
      "opts": [
        {
          "ar": "تحويل كود C# المصدري مباشرة إلى نص HTML لعرضه على المتصفح.",
          "ok": false,
          "why": "مترجم C# (Roslyn) يحول الكود إلى MSIL وليس إلى HTML.",
          "en": "Converting C# source code directly into HTML text for browser rendering."
        },
        {
          "ar": "ترجمة لغة مايكروسوفت الوسيطة (MSIL/IL) إلى شفرة الآلة الثنائية الأصلية (Native Machine Code) الخاصة بالمعالج أثناء التشغيل.",
          "ok": true,
          "why": "المترجم JIT يقوم بالترجمة في وقت التشغيل الفعلي ليضمن الاستفادة القصوى من معمارية المعالج الحالية.",
          "en": "Translating Microsoft Intermediate Language (MSIL/IL) into native machine code specific to the host CPU during execution."
        },
        {
          "ar": "حذف المتغيرات غير المستخدمة من ملفات القرص الصلب نهائياً.",
          "ok": false,
          "why": "JIT مترجم شفرات وليس أداة تنظيف ملفات.",
          "en": "Permanently deleting unused variables from hard disk files."
        },
        {
          "ar": "فحص سرعة شبكة الإنترنت قبل تشغيل التطبيق.",
          "ok": false,
          "why": "لا علاقة له بسرعة الاتصال.",
          "en": "Checking internet connection speed prior to running the application."
        }
      ],
      "tip": "وقفة امتحانية: مسار الترجمة في .NET: Source Code -> C# Compiler -> MSIL/IL -> JIT Compiler (داخل CLR) -> Native Code."
    },
    {
      "n": 12,
      "type": "mcq",
      "ref": "L1-S012",
      "q_ar": "ما الفارق الدقيق بين الفئة (Class) والكائن (Object) في البرمجة كائنية التوجه؟",
      "q_en": "What is the precise distinction between a Class and an Object in Object-Oriented Programming?",
      "opts": [
        {
          "ar": "الكائن هو المخطط النظري (Blueprint)، بينما الفئة هي النسخة الفعلية المحجوزة في الذاكرة.",
          "ok": false,
          "why": "هذا العكس تماماً؛ الفئة هي المخطط والكائن هو النسخة الفعلية.",
          "en": "An Object is the blueprint, while a Class is the actual instance allocated in memory."
        },
        {
          "ar": "الفئة هي المخطط أو القالب المعرفي (Blueprint)، بينما الكائن هو نسخة حقيقية وملموسة (Instance) محجوزة في الذاكرة ومبنية وفق ذلك القالب.",
          "ok": true,
          "why": "الفئة تحدد الخصائص والوظائف كتعريف، واستدعاء new ينشئ الكائن ككيان فعلي في الذاكرة.",
          "en": "A Class is the blueprint or conceptual template, while an Object is a concrete, tangible instance allocated in memory based on that blueprint."
        },
        {
          "ar": "لا يوجد أي فرق بينهما؛ هما مسميان مترادفان تماماً لنفس المفهوم في الذاكرة.",
          "ok": false,
          "why": "الفرق جوهري بين القالب (Class) والنسخة المحجوزة في الذاكرة (Object).",
          "en": "There is no difference; they are completely synonymous terms for the same concept in memory."
        },
        {
          "ar": "الفئة تستهلك مساحة دائمة في الذاكرة العشوائية بينما الكائن لا يستهلك أي بايت.",
          "ok": false,
          "why": "الكائن هو من يحجز مساحة في كومة الذاكرة لتخزين حالته وبياناته.",
          "en": "A Class consumes permanent RAM space while an Object consumes zero bytes."
        }
      ],
      "tip": "وقفة امتحانية: Class = المخطط الهندسي (Blueprint)؛ Object = المبنى الحقيقي المشيد على الأرض (Instance in Memory)."
    },
    {
      "n": 13,
      "type": "mcq",
      "ref": "L1-S013",
      "q_ar": "ما هي الأركان الأربعة الأساسية التي تقوم عليها البرمجة كائنية التوجه (OOP Pillars)؟",
      "q_en": "What are the four foundational pillars of Object-Oriented Programming (OOP)?",
      "opts": [
        {
          "ar": "التجميع، الربط، التحميل، والتنفيذ.",
          "ok": false,
          "why": "هذه مراحل تشغيل وتنفيذ برامج وليست مبادئ OOP.",
          "en": "Compilation, Linking, Loading, and Execution."
        },
        {
          "ar": "التغليف (Encapsulation)، التجريد (Abstraction)، الوراثة (Inheritance)، وتعدد الأشكال (Polymorphism).",
          "ok": true,
          "why": "هذه هي الأعمدة الأربعة المعيارية للبرمجة كائنية التوجه.",
          "en": "Encapsulation, Abstraction, Inheritance, and Polymorphism."
        },
        {
          "ar": "الإدخال، المعالجة، الإخراج، والتخزين.",
          "ok": false,
          "why": "هذه دورة معالجة البيانات العامة للحاسوب.",
          "en": "Input, Processing, Output, and Storage."
        },
        {
          "ar": "التسلسل، التكرار، الاختيار، والقفز الشرطي.",
          "ok": false,
          "why": "هذه هياكل التحكم في البرمجة الهيكلية التقليدية.",
          "en": "Sequence, Iteration, Selection, and Conditional Branching."
        }
      ],
      "tip": "وقفة امتحانية: احفظ الأعمدة الأربعة بالإنجليزية والعربية: Encapsulation, Abstraction, Inheritance, Polymorphism."
    },
    {
      "n": 14,
      "type": "mcq",
      "ref": "L1-S014",
      "q_ar": "ما هو الهدف المعماري الرئيسي لمبدأ التغليف (Encapsulation) في هندسة الفئات؟",
      "q_en": "What is the main architectural goal of Encapsulation in class engineering?",
      "opts": [
        {
          "ar": "جعل جميع حقول وبيانات الفئة عامة (public) لتمكين أي كلاس من تعديلها بحرية.",
          "ok": false,
          "why": "هذا ينقض التغليف تماماً ويؤدي لفوضى في البيانات وتلف تكامل الكائن.",
          "en": "Making all class fields and data public so that any class can modify them freely."
        },
        {
          "ar": "إخفاء الحالة الداخلية للكائن وحماية بياناته من التعديل العشوائي، والتحكم بالوصول إليها عبر خصائص ودوال محددة.",
          "ok": true,
          "why": "التغليف يضمن أن الكائن وحده هو المسؤول عن التحقق من صحة بياناته وحمايتها (Information Hiding).",
          "en": "Hiding an object's internal state, protecting data from unauthorized modification, and controlling access via specific properties and methods."
        },
        {
          "ar": "إلغاء استخدام محددات الوصول لتسهيل كتابة الكود بسرعة.",
          "ok": false,
          "why": "التغليف يعتمد أساساً على محددات الوصول لحظر الوصول المباشر.",
          "en": "Eliminating access modifiers to speed up code writing."
        },
        {
          "ar": "دمج جميع الفئات في ملف برمجي واحد مضغوط.",
          "ok": false,
          "why": "التغليف حماية حالة وليس مجرد تجميع ملفات.",
          "en": "Merging all classes into a single compressed source file."
        }
      ],
      "tip": "وقفة امتحانية: التغليف = Data Hiding + Controlled Access عبر الـ Properties والـ Getters/Setters مع قواعد التحقق."
    },
    {
      "n": 15,
      "type": "mcq",
      "ref": "L1-S015",
      "q_ar": "كيف يحقق مبدأ التجريد (Abstraction) إدارة التعقيد في الأنظمة الكبيرة؟",
      "q_en": "How does Abstraction manage complexity in large software systems?",
      "opts": [
        {
          "ar": "بكتابة تفاصيل التنفيذ التقنية المعقدة في كل دالة يستدعيها المستخدم.",
          "ok": false,
          "why": "هذا يعقد استخدام النظام ويكشف ما يجب إخفاؤه.",
          "en": "By exposing complex technical implementation details in every method called by the user."
        },
        {
          "ar": "بإظهار الوظائف الأساسية والجوهرية فقط للمستخدم وإخفاء التفاصيل وآليات التنفيذ المعقدة خلف واجهات بسيطة.",
          "ok": true,
          "why": "التجريد يركز على (ماذا يفعل الكائن - What) بدلاً من (كيف يفعل ذلك داخلياً - How)، مما يقلل العبء الذهني على المطور.",
          "en": "By exposing only essential and core functionalities to the client while hiding complex implementation details behind simple interfaces."
        },
        {
          "ar": "بإلغاء استخدام الواجهات والفئات المجردة في لغات البرمجة.",
          "ok": false,
          "why": "الواجهات (Interfaces) هي الأداة الكبرى لتحقيق التجريد.",
          "en": "By eliminating interfaces and abstract classes from programming languages."
        },
        {
          "ar": "بإجبار العميل على معرفة مسارات السجلات والأجهزة العتادية مباشرة.",
          "ok": false,
          "why": "هذا ينافي التجريد تماماً.",
          "en": "By forcing the client to know hardware registers and device paths directly."
        }
      ],
      "tip": "وقفة امتحانية: الفرق بين التغليف والتجريد: التغليف (إخفاء البيانات لحمايتها)؛ التجريد (إخفاء التعقيد لتبسيط التعامل)."
    },
    {
      "n": 16,
      "type": "mcq",
      "ref": "L1-S016",
      "q_ar": "ما هي الفائدة الأساسية للوراثة (Inheritance) وما هو الخطر المعماري المرتبط بسوء استخدامها؟",
      "q_en": "What is the primary benefit of Inheritance and what is the architectural risk associated with its misuse?",
      "opts": [
        {
          "ar": "الفائدة: إخفاء البيانات؛ الخطر: تسريع وقت التنفيذ أكثر من اللازم.",
          "ok": false,
          "why": "الوراثة لا تهدف لإخفاء البيانات بل مشاركتها.",
          "en": "Benefit: Data hiding; Risk: Excessively speeding up execution time."
        },
        {
          "ar": "الفائدة: إعادة استخدام الكود وتكوين تسلسل هرمي؛ الخطر: إنشاء ترابط صلب وثيق (Tight Coupling) وانكسار الفئات المشتقة عند تعديل الأساسية.",
          "ok": true,
          "why": "الوراثة تشكل علاقة صلبة (White-Box Reuse)؛ إذا تغير الكلاس الأساسي قد تنهار كل الكلاسات الموروثة منه.",
          "en": "Benefit: Code reuse and establishing a hierarchy; Risk: Creating tight coupling and breaking derived classes when the base class changes."
        },
        {
          "ar": "الفائدة: إلغاء الحاجة لكتابة دوال جديدة نهائياً؛ الخطر: تقليل حجم البرنامج.",
          "ok": false,
          "why": "الوراثة تتطلب تخصيص سلوكيات بالفئات المشتقة.",
          "en": "Benefit: Eliminating the need to write new methods; Risk: Reducing the program size."
        },
        {
          "ar": "الفائدة: تحويل الكائنات إلى نصوص؛ الخطر: فقدان الذاكرة العشوائية.",
          "ok": false,
          "why": "هذا وصف لعمليات التسلسل وليس الوراثة.",
          "en": "Benefit: Converting objects to text; Risk: Losing system RAM."
        }
      ],
      "tip": "وقفة امتحانية: القاعدة الهندسية الحديثة: 'فضّل التكوين على الوراثة' (Favor Composition over Inheritance) لتجنب الترابط الصلب."
    },
    {
      "n": 17,
      "type": "mcq",
      "ref": "L1-S017",
      "q_ar": "ما هو مفهوم تعدد الأشكال (Polymorphism) وكيف يتم تطبيقه في لغة C#؟",
      "q_en": "What is the concept of Polymorphism and how is it implemented in C#?",
      "opts": [
        {
          "ar": "تكرار نفس الكود البرمجي في فئات متعددة بأسماء مختلفة.",
          "ok": false,
          "why": "هذا تكرار كود (Duplication) ينتهك مبدأ DRY.",
          "en": "Duplicating the same code across multiple classes with different names."
        },
        {
          "ar": "قدرة كائنات مختلفة على الاستجابة لنفس استدعاء الدالة بسلوكيات مخصصة لكل نوع، عبر الكلمات virtual و override أو عبر الواجهات.",
          "ok": true,
          "why": "تعدد الأشكال يسمح بمعالجة كائنات متنوعة تشترك في فئة أساسية أو واجهة واحدة بطريقة موحدة ولكن بسلوك مخصص.",
          "en": "The ability of different objects to respond to the same method invocation with type-specific behaviors, implemented via virtual/override keywords or interfaces."
        },
        {
          "ar": "منع الفئات المشتقة من كتابة دوال خاصة بها.",
          "ok": false,
          "why": "الفئات المشتقة حرة في إضافة سلوكياتها الخاصة.",
          "en": "Preventing derived classes from implementing their own methods."
        },
        {
          "ar": "تغيير نوع المتغير أثناء وقت التشغيل بشكل عشوائي دون قيود.",
          "ok": false,
          "why": "هذا كسر لأمان الأنواع وليس تعدد الأشكال الكائني المنضبط.",
          "en": "Randomly mutating variable types at runtime without constraints."
        }
      ],
      "tip": "وقفة امتحانية: في C# لتحقيق Runtime Polymorphism نستخدم virtual في الفئة الأساسية و override في الفئة المشتقة."
    },
    {
      "n": 18,
      "type": "mcq",
      "ref": "L1-S018",
      "q_ar": "في لغة C#، ما هو محدد الوصول الذي يجعل العضو متاحاً فقط داخل نفس المشروع (Assembly) ومحجوباً عن المشاريع الخارجية؟",
      "q_en": "In C#, which access modifier makes a member accessible only within the same assembly/project and hidden from external projects?",
      "opts": [
        {
          "ar": "private",
          "ok": false,
          "why": "private يجعله محصوراً داخل نفس الفئة فقط وليس كامل المشروع.",
          "en": "private"
        },
        {
          "ar": "internal",
          "ok": true,
          "why": "internal يحدد نطاق الرؤية داخل نفس ملف التجميع البرمجي (Assembly) ويمنع الوصول من خارجه.",
          "en": "internal"
        },
        {
          "ar": "protected",
          "ok": false,
          "why": "protected يجعله متاحاً للفئات المشتقة فقط حتى لو كانت في مشروع آخر.",
          "en": "protected"
        },
        {
          "ar": "public",
          "ok": false,
          "why": "public يجعله متاحاً للجميع في كل المشاريع.",
          "en": "public"
        }
      ],
      "tip": "وقفة امتحانية: الوضع الافتراضي للفئات في C# هو internal؛ بينما الوضع الافتراضي لأعضاء الفئات (الحقول والدوال) هو private."
    },
    {
      "n": 19,
      "type": "mcq",
      "ref": "L1-S019",
      "q_ar": "ما هو الهدف الاستراتيجي الجامع لمبادئ التصميم الخمسة المعروفة بـ SOLID؟",
      "q_en": "What is the overarching strategic goal of the five design principles known as SOLID?",
      "opts": [
        {
          "ar": "تسريع وقت إقلاع الحاسوب وتقليل استهلاك بطاقة الشاشة.",
          "ok": false,
          "why": "هذه مهام متعلقة بنظام التشغيل والعتاد.",
          "en": "Speeding up computer boot time and reducing GPU consumption."
        },
        {
          "ar": "جعل الأنظمة البرمجية أكثر قابلية للفهم، الصيانة، التوسعة، والاختبار، وحمايتها من التفكك عند تطور المتطلبات.",
          "ok": true,
          "why": "مبادئ SOLID وُضعت لمكافحة أعراض التصميم السيئ وتسهيل إدارة التغيير في المشاريع طويلة الأجل.",
          "en": "Making software systems more understandable, maintainable, extensible, and testable, while protecting them from decay as requirements evolve."
        },
        {
          "ar": "إلغاء التعامل مع لغات البرمجة كائنية التوجه.",
          "ok": false,
          "why": "مبادئ SOLID صُممت خصيصاً للبرمجة كائنية التوجه.",
          "en": "Eliminating object-oriented programming languages."
        },
        {
          "ar": "تقليل عدد ملفات المشروع إلى ملف واحد فقط.",
          "ok": false,
          "why": "SOLID تزيد من تقسيم الكود وتنظيمه في فئات صغيرة متخصصة.",
          "en": "Reducing project file count to a single file."
        }
      ],
      "tip": "وقفة امتحانية: SOLID اختصار لـ: SRP, OCP, LSP, ISP, DIP."
    },
    {
      "n": 20,
      "type": "mcq",
      "ref": "L1-S020",
      "q_ar": "ما هو النص المعياري لمبدأ المسؤولية الأحادية (Single Responsibility Principle - SRP)؟",
      "q_en": "What is the standard definition of the Single Responsibility Principle (SRP)?",
      "opts": [
        {
          "ar": "يجب أن تحتوي كل فئة على دالة واحدة فقط لا غير.",
          "ok": false,
          "why": "SRP لا يحدد عدد الدوال، بل يحدد تماسك المسؤولية الوظيفية.",
          "en": "A class must contain only a single method."
        },
        {
          "ar": "يجب أن تمتلك الفئة سبباً واحداً فقط للتغيير (A class should have only one reason to change).",
          "ok": true,
          "why": "إذا كان للفئة أكثر من سبب للتغيير، فهذا يعني أنها تتحمل أكثر من مسؤولية ويجب تفكيكها.",
          "en": "A class should have only one reason to change."
        },
        {
          "ar": "يجب أن تتولى الفئة مسؤولية النظام بالكامل من قاعدة البيانات إلى واجهة المستخدم.",
          "ok": false,
          "why": "هذا تعريف الكائن المتضخم أحادي الكتلة (Monolithic Class / The Blob) وهو انتهاك صارخ لمبدأ SRP.",
          "en": "A class should be responsible for the entire system, from database to UI."
        },
        {
          "ar": "يجب أن يكون لكل مطور في الفريق ملف برمجي واحد فقط يعمل عليه.",
          "ok": false,
          "why": "المبدأ يتعلق بمسؤولية الفئة البرمجية وليس بتنظيم مهام المطورين.",
          "en": "Each team developer must have only one code file to work on."
        }
      ],
      "tip": "وقفة امتحانية: 'سبب واحد للتغيير' = مسؤولية واحدة متماسكة وموجهة لجهة مستفيدة واحدة (Single Actor)."
    },
    {
      "n": 21,
      "type": "mcq",
      "ref": "L1-S021",
      "q_ar": "إذا كانت فئة OrderService تحسب إجمالي الطلب، وتتصل بقاعدة بيانات SQL لحفظه، وترسل بريداً إلكترونياً للعميل، فما المبدأ المنتهك؟",
      "q_en": "If an OrderService class calculates order totals, connects to SQL to save it, and sends confirmation emails, which principle is violated?",
      "opts": [
        {
          "ar": "مبدأ إحلال لسكوف (LSP).",
          "ok": false,
          "why": "LSP يتعلق بعلاقات الوراثة والتوافق بين الفئة الأساسية والمشتقة.",
          "en": "Liskov Substitution Principle (LSP)."
        },
        {
          "ar": "مبدأ المسؤولية الأحادية (SRP).",
          "ok": true,
          "why": "الفئة لديها ثلاثة أسباب للتغيير: تغيير منطق الحساب، تغيير نوع قاعدة البيانات، أو تغيير مزود خدمة البريد الإلكتروني.",
          "en": "Single Responsibility Principle (SRP)."
        },
        {
          "ar": "مبدأ فصل الواجهات (ISP).",
          "ok": false,
          "why": "ISP يتعلق بتضخم الواجهات وليس بتعدد مسؤوليات الفئة الخرسانية.",
          "en": "Interface Segregation Principle (ISP)."
        },
        {
          "ar": "مبدأ الاستنساخ الأولي (Prototype).",
          "ok": false,
          "why": "هذا نمط تصميم إنشائي وليس مبدأ من مبادئ SOLID.",
          "en": "Prototype Principle."
        }
      ],
      "tip": "وقفة امتحانية: علامة انتهاك SRP: وجود دوال أعمال تجارية مع دوال اتصال بقواعد بيانات أو تنسيق إشعارات داخل نفس الفئة."
    },
    {
      "n": 22,
      "type": "mcq",
      "ref": "L1-S022",
      "q_ar": "ما هو الحل المعماري الصحيح لتصحيح فئة تنتهك مبدأ المسؤولية الأحادية (SRP)؟",
      "q_en": "What is the correct architectural solution to fix a class violating SRP?",
      "opts": [
        {
          "ar": "دمج الكود في دالة واحدة طويلة لإخفاء المشكلة.",
          "ok": false,
          "why": "هذا يزيد الطين بلة ويزيد الكود تعقيداً وهشاشة.",
          "en": "Merging the code into a single long method to conceal the problem."
        },
        {
          "ar": "تفكيك الفئة إلى فئات متعددة متخصصة، مثل OrderCalculator لمنطق الحسابات، OrderRepository للتخزين، و EmailService للإشعارات.",
          "ok": true,
          "why": "بهذا التقسيم تصبح كل فئة مسؤولة عن وظيفة محددة ولها سبب واحد فقط للتعديل والتطوير.",
          "en": "Decomposing the class into specialized classes, such as OrderCalculator for calculation logic, OrderRepository for persistence, and EmailService for notifications."
        },
        {
          "ar": "تحويل جميع المتغيرات إلى متغيرات عامة ساكنة (public static).",
          "ok": false,
          "why": "المتغيرات الساكنة تكسر التغليف وتخلق ترابطاً سيئاً بين أجزاء النظام.",
          "en": "Converting all variables into public static variables."
        },
        {
          "ar": "حذف الفئة بالكامل والاستغناء عن حفظ البيانات والإشعارات.",
          "ok": false,
          "why": "الحل يكون بهيكلة المسؤوليات وليس بإلغاء وظائف النظام المطلوبة.",
          "en": "Deleting the class entirely and abandoning data persistence and notifications."
        }
      ],
      "tip": "وقفة امتحانية: تطبيق SRP يقلل من حجم الفئات ويسهل اختبار كل وحدة (Unit Testing) بشكل مستقل وموثوق."
    },
    {
      "n": 23,
      "type": "mcq",
      "ref": "L1-S023",
      "q_ar": "ما المعنى الدقيق لقاعدة مبدأ المفتوح والمغلق (Open/Closed Principle - OCP)؟",
      "q_en": "What is the precise meaning of the Open/Closed Principle (OCP)?",
      "opts": [
        {
          "ar": "الكود مفتوح للجميع لقراءته ومغلق أمام التشغيل على خوادم الويب.",
          "ok": false,
          "why": "المبدأ لا يتعلق بتراخيص البرمجيات مفتوحة المصدر أو حقوق النشر.",
          "en": "Code is open for everyone to read and closed to execution on web servers."
        },
        {
          "ar": "الكيانات البرمجية يجب أن تكون مفتوحة للتوسعة (Open for Extension) ومغلقة للتعديل (Closed for Modification).",
          "ok": true,
          "why": "يجب أن نكون قادرين على إضافة ميزات جديدة للنظام دون تعديل الشفرات القديمة التي تم اختبارها وتثبيتها.",
          "en": "Software entities should be open for extension but closed for modification."
        },
        {
          "ar": "يجب فتح الاتصال بقاعدة البيانات في بداية الدالة وإغلاقه في نهايتها.",
          "ok": false,
          "why": "هذا تنظيم لموارد الإدخال والإخراج وليس مبدأ OCP المعماري.",
          "en": "Database connections must be opened at the beginning of a method and closed at the end."
        },
        {
          "ar": "أن تكون جميع الفئات مفتوحة للتوريث وغير قابلة للاستدعاء.",
          "ok": false,
          "why": "ليس هذا معنى المبدأ المعماري.",
          "en": "All classes must be open for inheritance and non-invocable."
        }
      ],
      "tip": "وقفة امتحانية: OCP: Open for Extension (أضف كوداً جديداً) · Closed for Modification (لا تعدل الكود القديم المستقر)."
    },
    {
      "n": 24,
      "type": "mcq",
      "ref": "L1-S024",
      "q_ar": "ما هي الرائحة البرمجية (Code Smell) الكلاسيكية التي تشير غالباً إلى انتهاك مبدأ OCP؟",
      "q_en": "What is the classic code smell that often indicates a violation of the Open/Closed Principle (OCP)?",
      "opts": [
        {
          "ar": "وجود تعليقات توضيحية متعددة داخل الكود.",
          "ok": false,
          "why": "التعليقات التوضيحية ليست مؤشراً لانتهاك OCP.",
          "en": "Having multiple explanatory comments inside the code."
        },
        {
          "ar": "تراكم جمل switch أو تفرعات if-else المتتالية للتحقق من أنواع الكائنات لإجراء العمليات الحسابية.",
          "ok": true,
          "why": "كلما أضفنا نوعاً جديداً نضطر لفتح الكود وتعديل جمل switch، مما ينتهك إغلاق الكود أمام التعديل.",
          "en": "Cascading switch statements or consecutive if-else blocks checking object types to perform operations."
        },
        {
          "ar": "استخدام الواجهات والتجريدات في تعريف المتغيرات.",
          "ok": false,
          "why": "استخدام الواجهات هو الحل لمبدأ OCP وليس علامة انتهاكه.",
          "en": "Using interfaces and abstractions when declaring variables."
        },
        {
          "ar": "تسمية المتغيرات بأسماء واضحة باللغة الإنجليزية.",
          "ok": false,
          "why": "هذه ممارسة كود نظيف ممتازة.",
          "en": "Naming variables with clear English identifiers."
        }
      ],
      "tip": "وقفة امتحانية: إذا رأيت switch (type) في سؤال امتحان، فالحل هو Polymorphism والمبدأ المنتهك هو OCP."
    },
    {
      "n": 25,
      "type": "mcq",
      "ref": "L1-S025",
      "q_ar": "كيف يتم تطبيق مبدأ OCP عند حساب الخصومات لعملاء من فئات مختلفة (Regular, Premium, VIP)؟",
      "q_en": "How is OCP correctly applied when calculating discounts for different customer types (Regular, Premium, VIP)?",
      "opts": [
        {
          "ar": "بإضافة شروط if إضافية في الدالة الرئيسية كلما ظهرت فئة عملاء جديدة.",
          "ok": false,
          "why": "هذا كسر صريح لـ OCP لأنه يفرض تعديل نفس الدالة مع كل نوع جديد.",
          "en": "By adding more if conditions into the main method whenever a new customer type is introduced."
        },
        {
          "ar": "بإنشاء واجهة IDiscountStrategy وفئات مشتقة لكل نوع عميل تنفذ حساب الخصم الخاص بها عبر التعددية (Polymorphism).",
          "ok": true,
          "why": "عند إضافة فئة عملاء جديدة (مثل SuperVIP)، ننشئ فئة جديدة فقط دون لمس أو تعديل الفئات القديمة إطلاقاً.",
          "en": "By creating an IDiscountStrategy interface and derived classes for each customer type that compute discounts polymorphically."
        },
        {
          "ar": "بحساب الخصم في قاعدة البيانات وحذف الكود من التطبيق.",
          "ok": false,
          "why": "نقل الخطأ لقاعدة البيانات لا يعتبر حلاً معمارياً لتصميم الكود.",
          "en": "By computing the discount inside the database and removing the code from the application."
        },
        {
          "ar": "بإلغاء الخصومات لجميع العملاء وتطبيق سعر موحد.",
          "ok": false,
          "why": "هذا إلغاء لمتطلبات العمل وليس تصميماً برمجياً.",
          "en": "By eliminating customer discounts entirely and enforcing a fixed price."
        }
      ],
      "tip": "وقفة امتحانية: تطبيق OCP يتحقق عبر: Abstraction + Interfaces + Polymorphism."
    },
    {
      "n": 26,
      "type": "mcq",
      "ref": "L1-S026",
      "q_ar": "لماذا يُعد مبدأ OCP من أهم الدوافع المعمارية في الأنظمة الضخمة ومكتبات البرمجيات؟",
      "q_en": "Why is OCP considered one of the most important architectural drivers in large systems and software libraries?",
      "opts": [
        {
          "ar": "لأنه يمنع المطورين من تحميل حزم برمجية خارجية.",
          "ok": false,
          "why": "OCP لا يتعارض مع استخدام الحزم الخارجية.",
          "en": "Because it prevents developers from downloading third-party packages."
        },
        {
          "ar": "لأنه يحمي الأجزاء المستقرة والمختبرة من الأعطال غير المتوقعة (Regression Bugs) عند إضافة ميزات جديدة.",
          "ok": true,
          "why": "عندما لا تعدل الكود القديم، تضمن بنسبة 100% أن الوظائف السابقة لن تنكسر بظهور أخطاء تراجعية.",
          "en": "Because it protects stable, well-tested code from regression bugs when new features are added."
        },
        {
          "ar": "لأنه يقلل من سرعة تنفيذ خوارزميات التشفير.",
          "ok": false,
          "why": "المبدأ تنظيمي ولا علاقة له بإبطاء التشفير.",
          "en": "Because it slows down cryptographic algorithm execution."
        },
        {
          "ar": "لأنه يجبر البرنامج على العمل على معالج واحد فقط.",
          "ok": false,
          "why": "لا علاقة له بالمعالجات.",
          "en": "Because it restricts the program to running on a single CPU core."
        }
      ],
      "tip": "وقفة امتحانية: الفائدة العظمى لـ OCP هي منع أخطاء التراجع (Regression Bugs) وتقليل وقت إعادة الاختبار الكامل."
    },
    {
      "n": 27,
      "type": "mcq",
      "ref": "L1-S027",
      "q_ar": "ما هو جوهر مبدأ إحلال لسكوف (Liskov Substitution Principle - LSP)؟",
      "q_en": "What is the core essence of the Liskov Substitution Principle (LSP)?",
      "opts": [
        {
          "ar": "يجب استبدال جميع الدوال القديمة بدوال جديدة كل 6 أشهر.",
          "ok": false,
          "why": "هذا تنظيم إداري لا علاقة له بعلوم الحاسوب.",
          "en": "All deprecated methods must be replaced with new methods every 6 months."
        },
        {
          "ar": "يجب أن تكون الكائنات المشتقة (Subtypes) قابلة للحلول محل كائنات الفئة الأساسية (Base Type) دون التأثير على صحة وسلوك البرنامج.",
          "ok": true,
          "why": "إذا كان البرنامج يتوقع كائناً أساسياً وتلقى كائناً مشتقاً، يجب أن يعمل البرنامج بنفس الاتساق ودون استثناءات غير متوقعة.",
          "en": "Subtypes must be substitutable for their base types without altering the correctness or behavior of the program."
        },
        {
          "ar": "يجب وراثة أكبر عدد ممكن من الفئات لتحقيق أقصى درجات التوريث.",
          "ok": false,
          "why": "الإفراط في الوراثة يسبب ترابطاً صلبياً مدبراً للنظام.",
          "en": "Classes should inherit from as many classes as possible to maximize inheritance."
        },
        {
          "ar": "يجب ألا تحتوي الفئة المشتقة على أي دوال جديدة غير موجودة في الأساسية.",
          "ok": false,
          "why": "الفئة المشتقة يمكنها إضافة وظائف إضافية بشرط عدم الإخلال بعقد الفئة الأساسية.",
          "en": "Derived classes must not contain any new methods that do not exist in the base class."
        }
      ],
      "tip": "وقفة امتحانية: LSP: إذا كان S مشتقاً من T، فيجب أن نتمكن من استبدال T بـ S دون كسر صحة البرنامج."
    },
    {
      "n": 28,
      "type": "mcq",
      "ref": "L1-S028",
      "q_ar": "في المثال الشهير لانتهاك LSP، لماذا تفشل وراثة المربع (Square) من المستطيل (Rectangle) برمجياً؟",
      "q_en": "In the famous LSP violation example, why does inheriting Square from Rectangle fail programmatically?",
      "opts": [
        {
          "ar": "لأن لغة C# تحرم الأشكال الهندسية وتمنع تعريفها كفئات.",
          "ok": false,
          "why": "كافة لغات البرمجة تتيح تمثيل النماذج الهندسية.",
          "en": "Because C# prohibits geometric shapes from being defined as classes."
        },
        {
          "ar": "لأن تغيير عرض المستطيل يجب ألا يؤثر على طوله، بينما في المربع تعديل العرض يفرض تعديل الطول قسراً، مما يكسر توقعات دوال حساب المساحة.",
          "ok": true,
          "why": "دالة حساب مساحة المستطيل تتوقع استقلالية الطول عن العرض؛ فرض تطابقهما في المربع المشتق يكسر عقد الفئة الأساسية وسلوكها المنطقي.",
          "en": "Because changing a rectangle's width must not alter its height, whereas in a square mutating width forces mutating height, breaking client assumptions and area calculations."
        },
        {
          "ar": "لأن المربع لا يمتلك مساحة هندسية محددة رياضياً.",
          "ok": false,
          "why": "المربع له مساحة رياضية معروفة تماماً.",
          "en": "Because a square does not have a mathematically defined geometric area."
        },
        {
          "ar": "لأن المربع يستهلك ضعف ذاكرة المستطيل في كومة الذاكرة.",
          "ok": false,
          "why": "المشكلة في انتهاك السلوك والعقد (Behavioral Inconsistency) وليست في استهلاك الذاكرة.",
          "en": "Because a square consumes twice as much heap memory as a rectangle."
        }
      ],
      "tip": "وقفة امتحانية: العلاقات الواقعية (IS-A) في العالم الحقيقي لا تعني بالضرورة صحة الوراثة البرمجية إذا اختلف السلوك."
    },
    {
      "n": 29,
      "type": "mcq",
      "ref": "L1-S029",
      "q_ar": "ما هي العلامة الصريحة في الكود التي تؤكد حدوث انتهاك لمبدأ LSP عند استدعاء دالة موروثة؟",
      "q_en": "What explicit code smell confirms a violation of LSP when calling an inherited method?",
      "opts": [
        {
          "ar": "إرجاع قيمة نصية بدلاً من رقم عشري بشكل مقصود.",
          "ok": false,
          "why": "هذا خطأ في توقيع الدالة ويكتشفه المترجم مسبقاً.",
          "en": "Deliberately returning a string instead of a floating-point number."
        },
        {
          "ar": "رمي استثناء NotImplementedException أو رمي استثناء غير متوقع يخبر العميل بأن هذه الدالة غير مدعومة في الفئة المشتقة.",
          "ok": true,
          "why": "إذا كانت الفئة المشتقة تعجز عن تنفيذ سلوك أساسي موروث وترمي استثناءً، فهذا دليل قاطع على عدم إمكانية استبدالها بالفئة الأصلية.",
          "en": "Throwing NotImplementedException or an unexpected exception indicating the inherited method is unsupported in the derived class."
        },
        {
          "ar": "طباعة رسالة نجاح في نافذة الكونسول.",
          "ok": false,
          "why": "الطباعة لا تدل على انتهاك المبدأ.",
          "en": "Printing a success message to the console window."
        },
        {
          "ar": "استخدام الكلمة المفتاحية override لتعديل السلوك بنجاح.",
          "ok": false,
          "why": "override هي الأداة الشرعية للتعددية السليمة.",
          "en": "Using the override keyword to modify behavior successfully."
        }
      ],
      "tip": "وقفة امتحانية: كلما رأيت `throw new NotImplementedException();` داخل فئة مشتقة، فهناك انتهاك مؤكد لـ LSP و ISP."
    },
    {
      "n": 30,
      "type": "mcq",
      "ref": "L1-S030",
      "q_ar": "ما هو المبدأ الأساسي الذي ينص عليه مبدأ فصل الواجهات (Interface Segregation Principle - ISP)؟",
      "q_en": "What is the core rule stated by the Interface Segregation Principle (ISP)?",
      "opts": [
        {
          "ar": "يجب أن تكون جميع الواجهات مكتوبة بلغة برمجية واحدة فقط.",
          "ok": false,
          "why": "المبدأ يتعلق بحجم وتخصص الواجهة وليس بلغة كتابتها.",
          "en": "All interfaces must be written in a single programming language."
        },
        {
          "ar": "لا ينبغي إجبار أي عميل على الاعتماد على واجهات وطرق لا يحتاج لاستخدامها (Fat/Polluted Interfaces).",
          "ok": true,
          "why": "الواجهات الضخمة والملوثة تجبر الفئات المنفذة على حمل أعباء ودوال زائدة لا تعنيها، مما يرفع الترابط والهشاشة.",
          "en": "Clients should not be forced to depend on interfaces or methods they do not use (fat/polluted interfaces)."
        },
        {
          "ar": "يجب جمع كافة وظائف المؤسسة داخل واجهة برمجية واحدة مركزية ضخمة.",
          "ok": false,
          "why": "هذا نقيض مبدأ ISP تماماً ويسمى Fat Interface.",
          "en": "All enterprise capabilities must be grouped into a single monolithic central interface."
        },
        {
          "ar": "يجب حذف الواجهات من المشاريع واستخدام الفئات الخرسانية فقط.",
          "ok": false,
          "why": "الواجهات أساسية لتحقيق التجريد وعكس التبعية.",
          "en": "Interfaces should be deleted from projects in favor of concrete classes only."
        }
      ],
      "tip": "وقفة امتحانية: ISP: 'Many small, client-specific interfaces are better than one general-purpose fat interface'."
    },
    {
      "n": 31,
      "type": "mcq",
      "ref": "L1-S031",
      "q_ar": "إذا كانت الواجهة IMultiFunctionDevice تحتوي على دوال Print و Scan و Fax، وكانت طابعة بسيطة تحتاج Print فقط، فما المشكلة المعمارية؟",
      "q_en": "If IMultiFunctionDevice contains Print, Scan, and Fax, and a simple printer only needs Print, what is the architectural problem?",
      "opts": [
        {
          "ar": "الطابعة ستعمل بأقصى كفاءة لأنها تمتلك كافة الدوال الجاهزة.",
          "ok": false,
          "why": "الطابعة لا تدعم Scan أو Fax وستضطر لكتابة شفرات وهمية.",
          "en": "The printer will operate at peak efficiency because it has all methods pre-implemented."
        },
        {
          "ar": "الطابعة البسيطة ستُجبر على تنفيذ Scan و Fax برمي استثناءات أو كتابة دوال فارغة، مما ينتهك مبدأ ISP.",
          "ok": true,
          "why": "الواجهة أصبحت ملوثة (Polluted Interface) وأجبرت العميل على الاعتماد على أشياء لا يحتاجها.",
          "en": "The simple printer will be forced to implement Scan and Fax with empty stubs or thrown exceptions, violating ISP."
        },
        {
          "ar": "لا توجد أي مشكلة لأن لغة C# تملأ الدوال الفارغة تلقائياً بذكاء اصطناعي.",
          "ok": false,
          "why": "المترجم لا يملأ الدوال الفارغة تلقائياً.",
          "en": "There is no issue because C# automatically populates empty methods using AI."
        },
        {
          "ar": "المشكلة في سرعة الاتصال بالشبكة المحلية فقط.",
          "ok": false,
          "why": "المشكلة معمارية برمجية في تصميم الواجهات.",
          "en": "The problem is strictly limited to local network connection speed."
        }
      ],
      "tip": "وقفة امتحانية: الحل المعماري لانتهاك ISP هو تفكيك الواجهة الضخمة إلى واجهات صغيرة دقيقة: IPrinter, IScanner, IFax."
    },
    {
      "n": 32,
      "type": "mcq",
      "ref": "L1-S032",
      "q_ar": "كيف يؤثر انتهاك مبدأ فصل الواجهات (ISP) سلباً على دورة إعادة بناء البرمجيات (Recompilation & Redeployment)؟",
      "q_en": "How does violating ISP negatively impact software recompilation and redeployment cycles?",
      "opts": [
        {
          "ar": "يجعل حجم ملفات التجميع مساوياً للصفر بايت.",
          "ok": false,
          "why": "الملفات ستبقى موجودة وبحجم أكبر.",
          "en": "It causes compiled assembly file sizes to drop to zero bytes."
        },
        {
          "ar": "أي تعديل في دالة داخل الواجهة الضخمة (مثل Scan) سيجبر جميع الفئات والعملاء (حتى من يستخدم Print فقط) على إعادة البناء والاختبار والنشر.",
          "ok": true,
          "why": "الترابط الزائد في الواجهات يسبب سلسلة من عمليات إعادة الترجمة والنشر غير المبررة للكود الذي لم يتغير.",
          "en": "Any change to a method in the bloated interface (like Scan) forces all implementing classes and clients (even those only using Print) to recompile, retest, and redeploy."
        },
        {
          "ar": "يمنع تشغيل بيئة التشغيل CLR نهائياً على أجهزة المستخدمين.",
          "ok": false,
          "why": "التطبيق سيعمل لكن تكلفة صيانته وبنائه ستتضاعف.",
          "en": "It completely prevents the CLR runtime from executing on client machines."
        },
        {
          "ar": "يحذف المستودعات السحابية من خوادم GitHub.",
          "ok": false,
          "why": "لا علاقة له بالاستضافة.",
          "en": "It deletes cloud repositories from GitHub servers."
        }
      ],
      "tip": "وقفة امتحانية: الواجهات الدقيقة تعزل التغييرات: تعديل مواصفات الفاكس لا يمس ولا يعيد ترجمة كود الطابعة إطلاقاً."
    },
    {
      "n": 33,
      "type": "mcq",
      "ref": "L1-S033",
      "q_ar": "ما العلاقة الوثيقة بين مبدأ فصل الواجهات (ISP) ومبدأ المسؤولية الأحادية (SRP)؟",
      "q_en": "What is the close relationship between Interface Segregation Principle (ISP) and Single Responsibility Principle (SRP)?",
      "opts": [
        {
          "ar": "لا توجد أي علاقة بينهما فهما مبدآن متناقضان تماماً.",
          "ok": false,
          "why": "مبادئ SOLID تتكامل مع بعضها البعض ولا تتناقض.",
          "en": "There is no relationship as they are completely contradictory principles."
        },
        {
          "ar": "مبدأ ISP هو الوجه الآخر لمبدأ SRP ولكن على مستوى عقود الواجهات (Interfaces)، بحيث تركز كل واجهة على دور واحد محدد ومتماسك.",
          "ok": true,
          "why": "كما أن SRP يمنع الفئات الخرسانية متعددة المسؤوليات، فإن ISP يمنع الواجهات متعددة المسؤوليات.",
          "en": "ISP is the counterpart of SRP applied at the interface level, ensuring each interface focuses on a single, cohesive role."
        },
        {
          "ar": "مبدأ ISP يلغي تطبيق مبدأ SRP في المشاريع المتوسطة.",
          "ok": false,
          "why": "كلاهما يُطبق معاً لتحقيق أقصى درجات النظافة المعمارية.",
          "en": "ISP nullifies the application of SRP in medium-sized projects."
        },
        {
          "ar": "مبدأ SRP يطبق فقط في لغة جافا ومبدأ ISP يطبق في لغة بايثون.",
          "ok": false,
          "why": "مبادئ SOLID عالمية ومستقلة عن لغات البرمجة.",
          "en": "SRP is applied only in Java, while ISP is applied only in Python."
        }
      ],
      "tip": "وقفة امتحانية: SRP يطبق على الفئات لتحديد سبب التغيير؛ ISP يطبق على الواجهات لتحديد دور العميل (Role Interfaces)."
    },
    {
      "n": 34,
      "type": "mcq",
      "ref": "L1-S034",
      "q_ar": "ما هو النص المعماري الدقيق لمبدأ عكس التبعية (Dependency Inversion Principle - DIP)؟",
      "q_en": "What is the precise architectural definition of the Dependency Inversion Principle (DIP)?",
      "opts": [
        {
          "ar": "يجب أن تعتمد الوحدات عالية المستوى على الوحدات منخفضة المستوى بشكل صريح ومباشر.",
          "ok": false,
          "why": "هذا التصميم السيئ التقليدي الذي يسبب الترابط الوثيق (Tight Coupling).",
          "en": "High-level modules must depend directly and explicitly on low-level modules."
        },
        {
          "ar": "الوحدات عالية المستوى يجب ألا تعتمد على الوحدات منخفضة المستوى، كلاهما يجب أن يعتمد على التجريدات؛ والتجريدات لا تعتمد على التفاصيل بل التفاصيل تعتمد على التجريدات.",
          "ok": true,
          "why": "هذا هو التعريف الكامل لمبدأ DIP؛ قلب اتجاه التبعية ليكون موجهاً نحو الواجهات المجردة.",
          "en": "High-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions."
        },
        {
          "ar": "يجب عكس ترتيب كتابة الدوال في الملف لتبدأ من الأسفل إلى الأعلى.",
          "ok": false,
          "why": "المبدأ فكري معماري يتعلق بالتبعية المنطقية وليس بترتيب أسطر الملف.",
          "en": "Method declaration order must be inverted from bottom to top."
        },
        {
          "ar": "يجب حذف جميع الواجهات والتجريدات لتسريع التنفيذ المباشر.",
          "ok": false,
          "why": "DIP يرتكز كلياً على وجود التجريدات والواجهات.",
          "en": "All interfaces and abstractions must be removed to accelerate direct execution."
        }
      ],
      "tip": "وقفة امتحانية: High-Level Modules (منطق الأعمال) و Low-Level Modules (قواعد البيانات والشبكة) كلاهما يعتمد على Abstractions."
    },
    {
      "n": 35,
      "type": "mcq",
      "ref": "L1-S035",
      "q_ar": "إذا استدعت فئة UserService التعليمة `new SmtpEmailSender()` داخل منشئها، فما هو الخلل المعماري وما هو الحل وفق DIP؟",
      "q_en": "If UserService calls `new SmtpEmailSender()` inside its constructor, what is the architectural flaw and what is the DIP fix?",
      "opts": [
        {
          "ar": "الخلل: استخدام لغة C#؛ الحل: التحول للبرمجة بلغة C.",
          "ok": false,
          "why": "المشكلة في التصميم البرمجي وليست في لغة C# الحديثة.",
          "en": "Flaw: Using C#; Fix: Switching to C programming."
        },
        {
          "ar": "الخلل: ارتباط صلب بفئة منخفضة المستوى مما يمنع اختبار الوحدة واستبدال الخدمة؛ الحل: حقن واجهة IEmailSender عبر المنشئ (Constructor Injection).",
          "ok": true,
          "why": "حقن الواجهة يفك الترابط، ويتيح تمرير خدمة إيميل حقيقية في الإنتاج أو خدمة وهمية (Mock) أثناء اختبارات الوحدة.",
          "en": "Flaw: Hard-coded tight coupling to a low-level concrete class preventing unit testing and service substitution; Fix: Injecting an IEmailSender interface via Constructor Injection."
        },
        {
          "ar": "الخلل: بطء إرسال الإيميلات عبر SMTP؛ الحل: حذف خدمة الإيميل بالكامل من النظام.",
          "ok": false,
          "why": "هذا لا يحل مشكلة التبعية المعمارية في تصميم الكود.",
          "en": "Flaw: Slow SMTP email delivery; Fix: Removing the email service completely from the system."
        },
        {
          "ar": "الخلل: عدم استخدام متغير عام ساكن؛ الحل: جعل SmtpEmailSender كائناً عاماً لجميع الفئات.",
          "ok": false,
          "why": "المتغير العام الساكن يزيد من خفاء التبعية ولا يحل المشكلة.",
          "en": "Flaw: Not using a global static variable; Fix: Making SmtpEmailSender a global object for all classes."
        }
      ],
      "tip": "وقفة امتحانية: الكلمة new داخل الفئات عالية المستوى هي العدو الأول لمبدأ DIP وقابلية الاختبار (Testability)."
    },
    {
      "n": 36,
      "type": "mcq",
      "ref": "L2-S001",
      "q_ar": "ما هو المحور الرئيسي للمحاضرة الثانية من مقرر البرمجة المتقدمة؟",
      "q_en": "What is the primary focus of Lecture 2 in the Advanced Programming course?",
      "opts": [
        {
          "ar": "شرح أوامر استعلامات SQL المتقدمة والمعاملات المالية في البنوك.",
          "ok": false,
          "why": "المحاضرة تركز على تصميم الكود وأنماط التصميم الإنشائية وليس على قواعد البيانات.",
          "en": "Explaining advanced SQL queries and banking financial transactions."
        },
        {
          "ar": "تشخيص مشاكل التصميم السيئ، ومفاهيم أنماط التصميم (Design Patterns) وتفصيل الأنماط الإنشائية وخاصة Singleton و Factory Method.",
          "ok": true,
          "why": "المحاضرة مكرسة لفهم جودة التصميم وأنماط التصميم الإنشائية وتطبيقاتها المعمارية.",
          "en": "Diagnosing poor design symptoms, design pattern concepts, and detailing Creational Patterns, specifically Singleton and Factory Method."
        },
        {
          "ar": "تصميم واجهات المستخدم باستخدام تقنيات CSS3 و JavaScript الحديثة.",
          "ok": false,
          "why": "المساق تخصصي في هندسة البرمجيات الخلفية والتصميم الكائني.",
          "en": "Designing user interfaces using modern CSS3 and JavaScript techniques."
        },
        {
          "ar": "إدارة شبكات الحاسوب وبروتوكولات التوجيه الداخلي.",
          "ok": false,
          "why": "موضوعات شبكات وليست برمجة متقدمة.",
          "en": "Computer network management and internal routing protocols."
        }
      ],
      "tip": "وقفة امتحانية: المحاضرة 2 تؤسس لفهم أنماط GoF مع التركيز الكامل على Creational Patterns."
    },
    {
      "n": 37,
      "type": "mcq",
      "ref": "L2-S002",
      "q_ar": "ما هي الأهداف التعليمية الأساسية لدراسة أنماط التصميم (Design Patterns) في هندسة البرمجيات؟",
      "q_en": "What are the core learning objectives of studying Design Patterns in software engineering?",
      "opts": [
        {
          "ar": "حفظ أسماء الأنماط بالإنجليزية دون معرفة متى نطبق كل نمط.",
          "ok": false,
          "why": "الهدف هو الفهم المعماري للقدرة على حل المشكلات الحقيقية.",
          "en": "Memorizing pattern names in English without knowing when to apply each."
        },
        {
          "ar": "اكتساب لغة تخاطب معمارية موحدة بين المهندسين، وإعادة استخدام حلول مجربة ومثبتة للمشاكل المتكررة في التصميم.",
          "ok": true,
          "why": "أنماط التصميم توفر مصطلحات قياسية (Vocabulary) وحلولاً معمارية مثبتة لمشاكل شائعة تواجه مطوري الأنظمة.",
          "en": "Acquiring a shared architectural vocabulary among engineers and reusing proven, battle-tested solutions for recurring design problems."
        },
        {
          "ar": "إلغاء الحاجة لاختبار البرمجيات أو كتابة التوثيق الفني.",
          "ok": false,
          "why": "الأنماط تحسن جودة التصميم ولكنها لا تلغي الاختبار والتوثيق.",
          "en": "Eliminating the need for software testing and technical documentation."
        },
        {
          "ar": "إجبار المطور على استخدام جميع الأنماط الـ 23 في مشروع برمجي واحد.",
          "ok": false,
          "why": "استخدام الأنماط دون حاجة يؤدي للتعقيد المفرط (Over-Engineering).",
          "en": "Forcing developers to use all 23 patterns in a single software project."
        }
      ],
      "tip": "وقفة امتحانية: أنماط التصميم توفر: Common Vocabulary (لغة مشتركة) + Proven Solutions (حلول مجربة ومثبتة)."
    },
    {
      "n": 38,
      "type": "mcq",
      "ref": "L2-S003",
      "q_ar": "أي من الأعراض التالية يُعبر عن 'الصلابة والجمود' (Rigidity) في التصميم البرمجي السيئ؟",
      "q_en": "Which of the following symptoms represents 'Rigidity' in poor software design?",
      "opts": [
        {
          "ar": "سهولة تعديل الكود ونشره في ثوانٍ معدودة دون أي عوائق.",
          "ok": false,
          "why": "هذه مرونة عالية تعكس تصميماً ممتازاً.",
          "en": "Ease of modifying and deploying code within seconds without obstacles."
        },
        {
          "ar": "صعوبة إجراء أي تغيير في النظام لأن التعديل البسيط يفرض سلسلة متتالية من التعديلات في وحدات برمجية أخرى مرتبطة به.",
          "ok": true,
          "why": "الجمود (Rigidity) يعني أن النظام يقاوم التغيير، وكل تعديل صغير يجر وراءه شلالاً من التعديلات الإجبارية.",
          "en": "Difficulty in modifying the system because a single change cascades into a series of required modifications across coupled modules."
        },
        {
          "ar": "استهلاك البرنامج لكميات ضئيلة جداً من طاقة بطارية الجهاز.",
          "ok": false,
          "why": "هذا تحسين لكفاءة الطاقة وليس عرضاً لتصميم سيئ.",
          "en": "The software consuming negligible device battery power."
        },
        {
          "ar": "توقف البرنامج عن العمل فجأة بسبب انقطاع التيار الكهربائي.",
          "ok": false,
          "why": "هذا عطل فيزيائي خارج عن طبيعة هيكل الكود.",
          "en": "The program crashing abruptly due to a power outage."
        }
      ],
      "tip": "وقفة امتحانية: Rigidity (الصلابة) = التعديل الواحد يتطلب سلسلة تعديلات متتالية في أجزاء أخرى من الكود."
    },
    {
      "n": 39,
      "type": "mcq",
      "ref": "L2-S004",
      "q_ar": "ما هو التوصيف العلمي الدقيق لعرض 'الهشاشة' (Fragility) في الشفرات البرمجية؟",
      "q_en": "What is the precise scientific description of 'Fragility' in software code?",
      "opts": [
        {
          "ar": "انكسار وانهيار أجزاء برمجية في النظام ليس لها أي علاقة منطقية أو مفاهيمية بالجزء الذي تم تعديله للتو.",
          "ok": true,
          "why": "الهشاشة (Fragility) تعني أن النظام يفقد اتزانه وتظهر فيه أعطال في أماكن بعيدة وغير متوقعة عند تعديل ميزة ما.",
          "en": "The tendency of the software to break in areas that have no conceptual or logical relationship to the part just modified."
        },
        {
          "ar": "عدم قدرة الكود على تخزين الصور عالية الدقة.",
          "ok": false,
          "why": "لا علاقة لهذا العرض بنوعية البيانات المخزنة.",
          "en": "Inability of code to store high-resolution images."
        },
        {
          "ar": "حذف ملفات المشروع تلقائياً بمجرد إغلاق المحرر.",
          "ok": false,
          "why": "هذا خلل في بيئة التطوير وليس مفهوماً معمارياً للهشاشة.",
          "en": "Automatic deletion of project files upon closing the code editor."
        },
        {
          "ar": "زيادة سرعة استجابة الخادم مع زيادة عدد المستخدمين.",
          "ok": false,
          "why": "هذا قابلية توسع ممتازة.",
          "en": "Server response speed increasing as the number of users grows."
        }
      ],
      "tip": "وقفة امتحانية: Fragility (الهشاشة) = التعديل في ميزة 'أ' يكسر ميزة 'ب' غير المرتبطة بها نهائياً."
    },
    {
      "n": 40,
      "type": "mcq",
      "ref": "L2-S005",
      "q_ar": "ماذا يعني عرض 'عدم القدرة على التنقل' (Immobility) في تقييم جودة بنية البرمجيات؟",
      "q_en": "What does 'Immobility' mean in assessing software architectural quality?",
      "opts": [
        {
          "ar": "عدم إمكانية تشغيل البرنامج على أجهزة الهواتف الذكية الحديثة.",
          "ok": false,
          "why": "Immobility مصطلح معماري يتعلق بإعادة استخدام الكود وليس بدعم منصات الجوال.",
          "en": "Inability to run the software on modern smartphones."
        },
        {
          "ar": "استحالة أو صعوبة عزل جزء مفيد من الكود لإعادة استخدامه في مشروع آخر بسبب شدة التصاقه وترابطه الوثيق مع بيئته الحالية.",
          "ok": true,
          "why": "الكود يصبح ثابتاً وغير قابل للنقل لأن استخراجه يتطلب نقل كم هائل من التبعيات غير الضرورية معه.",
          "en": "Inability or difficulty of isolating useful parts of code for reuse in other projects due to tight coupling and entanglements with its current environment."
        },
        {
          "ar": "بطء حركة مؤشر الفأرة داخل نافذة البرنامج الرئيسية.",
          "ok": false,
          "why": "هذا عطل في العتاد أو الرسوميات.",
          "en": "Sluggish mouse pointer movement within the main application window."
        },
        {
          "ar": "تشفير الكود المصدري ومنع نسخه احتياطياً.",
          "ok": false,
          "why": "هذا إجراء أمني لا علاقة له بـ Immobility.",
          "en": "Encrypting source code and preventing backups."
        }
      ],
      "tip": "وقفة امتحانية: Immobility (عدم التنقل) = صعوبة استخراج وإعادة استخدام الكود المفيد في مشاريع أخرى لشدة ترابطه."
    },
    {
      "n": 41,
      "type": "mcq",
      "ref": "L2-S006",
      "q_ar": "ما هو مفهوم 'اللزوجة' (Viscosity) كأحد أعراض التصميم البرمجي السيئ؟",
      "q_en": "What is 'Viscosity' as a symptom of poor software design?",
      "opts": [
        {
          "ar": "زيادة حجم الملفات التنفيذية بسبب ضغط البيانات التالفة.",
          "ok": false,
          "why": "هذا حجم تخزين ولا يعبر عن مفهوم اللزوجة المعماري.",
          "en": "Increased executable file size due to corrupted data compression."
        },
        {
          "ar": "الحالة التي يكون فيها تطبيق الحلول البرمجية النظيفة المتوافقة مع التصميم أصعب بكثير من اللجوء إلى الحيل البرمجية الرديئة (Hacks).",
          "ok": true,
          "why": "اللزوجة تجعل المطور يفضل كتابة كود عشوائي سريع وسيء لأن الحفاظ على التصميم الأصلي أصبح معقداً وبطيئاً للغاية.",
          "en": "The condition where doing things in accordance with the design is much harder than taking shortcuts or writing dirty hacks."
        },
        {
          "ar": "توقف الشاشة عن التحديث أثناء تحميل البيانات من الخادم.",
          "ok": false,
          "why": "هذا تجميد لواجهة المستخدم (UI Freeze).",
          "en": "The screen freezing during data fetching from the server."
        },
        {
          "ar": "عدم توافق النظام مع لغة البرمجة بايثون.",
          "ok": false,
          "why": "لا علاقة له بلغات البرمجة.",
          "en": "Incompatibility of the system with the Python programming language."
        }
      ],
      "tip": "وقفة امتحانية: أعراض التصميم السيئ الأربعة: Rigidity (صلابة)، Fragility (هشاشة)، Immobility (جمود تنقل)، Viscosity (لزوجة)."
    },
    {
      "n": 42,
      "type": "mcq",
      "ref": "L2-S007",
      "q_ar": "ما هو التعريف الدقيق لنمط التصميم (Design Pattern) في هندسة البرمجيات؟",
      "q_en": "What is the exact definition of a Design Pattern in software engineering?",
      "opts": [
        {
          "ar": "قطعة كود برمجية كاملة وجاهزة يتم نسخها ولصقها مباشرة في أي مشروع دون أي تعديل.",
          "ok": false,
          "why": "نمط التصميم ليس كوداً جاهزاً للنسخ واللصق (Not a copy-paste code or library).",
          "en": "A complete piece of code that can be copied and pasted directly into any project without changes."
        },
        {
          "ar": "مخطط وصفي عام وحل مجرب ومعياري لمشكلة تصميمية شائعة تتكرر باستمرار في سياقات هندسية مختلفة.",
          "ok": true,
          "why": "نمط التصميم هو قالب فكري وهندسي يوجه المطور لكيفية حل المشكلة وتركيب الكائنات في لغته الخاصة.",
          "en": "A general, reusable description and standard proven solution to a commonly occurring design problem within a given context."
        },
        {
          "ar": "خوارزمية رياضية دقيقة لحساب الأعداد الأولية بسرعة فائقة.",
          "ok": false,
          "why": "الخوارزميات تحل مسائل حسابية، بينما الأنماط تحل مشاكل هيكلية وتصميمية في الكود.",
          "en": "A precise mathematical algorithm for computing prime numbers rapidly."
        },
        {
          "ar": "ملف تكوين بصيغة JSON لربط الخادم بقواعد البيانات.",
          "ok": false,
          "why": "الأنماط مفاهيم كائنية وليست ملفات إعداد.",
          "en": "A JSON configuration file linking servers to databases."
        }
      ],
      "tip": "وقفة امتحانية: الفرق الجوهري: الخوارزمية (مجموعة خطوات لحل مسألة محددة)؛ نمط التصميم (مخطط عام لحل مشكلة معمارية متكررة)."
    },
    {
      "n": 43,
      "type": "mcq",
      "ref": "L2-S008",
      "q_ar": "من هم مؤلفو كتاب أنماط التصميم الأصلي لعام 1994 المعروفون بعصابة الأربعة (Gang of Four - GoF)؟",
      "q_en": "Who are the authors of the original 1994 Design Patterns book known as the Gang of Four (GoF)?",
      "opts": [
        {
          "ar": "بيل غيتس، ستيف جوبز، لينوس تورفالدس، ومارك زوكربيرغ.",
          "ok": false,
          "why": "هؤلاء رواد ومؤسسو شركات تقنية وليسوا مؤلفي كتاب أنماط GoF.",
          "en": "Bill Gates, Steve Jobs, Linus Torvalds, and Mark Zuckerberg."
        },
        {
          "ar": "إريك غاما، ريتشارد هيلم، رالف جونسون، وجون فليسيدس (Gamma, Helm, Johnson, Vlissides).",
          "ok": true,
          "why": "هؤلاء هم العلماء الأربعة مؤلفو كتاب 'Design Patterns: Elements of Reusable Object-Oriented Software'.",
          "en": "Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides (GoF)."
        },
        {
          "ar": "روبرت مارتن، مارتن فاولر، كينت بيك، وتيم بيرنرز لي.",
          "ok": false,
          "why": "هؤلاء علماء ورواد في الكود النظيف والتطوير الرشيق والويب.",
          "en": "Robert Martin, Martin Fowler, Kent Beck, and Tim Berners-Lee."
        },
        {
          "ar": "آلان تورنغ، جون فون نيومان، آدا لوفليس، ودينيس ريتشي.",
          "ok": false,
          "why": "هؤلاء مؤسسو علوم الحاسوب ولغات البرمجة التأسيسية.",
          "en": "Alan Turing, John von Neumann, Ada Lovelace, and Dennis Ritchie."
        }
      ],
      "tip": "وقفة امتحانية: اختصار GoF يشير حصراً إلى الرباعي: Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides (1994)."
    },
    {
      "n": 44,
      "type": "mcq",
      "ref": "L2-S009",
      "q_ar": "كم عدداً من أنماط التصميم القياسية وثقها كتاب عصابة الأربعة (GoF)، وإلى كم فئة قُسمت؟",
      "q_en": "How many standard design patterns were documented in the GoF book, and into how many categories were they divided?",
      "opts": [
        {
          "ar": "10 أنماط مقسمة إلى فئتين فقط.",
          "ok": false,
          "why": "عدد الأنماط أكبر من ذلك بكثير.",
          "en": "10 patterns divided into 2 categories only."
        },
        {
          "ar": "23 نمطاً معمارياً مقسمة إلى 3 فئات رئيسية: إنشائية، هيكلية، وسلوكية.",
          "ok": true,
          "why": "كتاب GoF وثق 23 نمطاً كلاسيكياً موزعة على التصنيفات الثلاثة: Creational (5), Structural (7), Behavioral (11).",
          "en": "23 design patterns categorized into 3 main groups: Creational, Structural, and Behavioral."
        },
        {
          "ar": "50 نمطاً مقسمة إلى 5 فئات متطابقة.",
          "ok": false,
          "why": "العدد الكلاسيكي المعتمد في GoF هو 23 نمطاً.",
          "en": "50 patterns divided into 5 identical categories."
        },
        {
          "ar": "100 نمط مخصصة حصرياً للغات التجميع القديمة.",
          "ok": false,
          "why": "الأنماط وُضعت للبرمجة كائنية التوجه.",
          "en": "100 patterns dedicated exclusively to legacy assembly languages."
        }
      ],
      "tip": "وقفة امتحانية: إجمالي أنماط GoF هو 23 نمطاً: 5 إنشائية (Creational)، 7 هيكلية (Structural)، و 11 سلوكية (Behavioral)."
    },
    {
      "n": 45,
      "type": "mcq",
      "ref": "L2-S010",
      "q_ar": "ما هو الاختصاص الحصري لأنماط التصميم الإنشائية (Creational Design Patterns)؟",
      "q_en": "What is the exclusive domain of Creational Design Patterns?",
      "opts": [
        {
          "ar": "تنظيم كيفية اتصال التطبيق بالأقمار الصناعية وشبكات 5G.",
          "ok": false,
          "why": "هذه اتصالات شبكية عتادية.",
          "en": "Managing how applications communicate with satellites and 5G networks."
        },
        {
          "ar": "تجريد وضبط آليات إنشاء الكائنات بطريقة تفصل العميل عن التفاصيل الملموسة لتكوينها وتوفر أقصى مرونة.",
          "ok": true,
          "why": "الأنماط الإنشائية تعالج مشكلة الإنشاء المباشر لكائنات (new) وتجعل النظام مستقلاً عن كيفية إنشاء وتركيب منتجاته.",
          "en": "Abstracting and controlling object instantiation mechanisms to decouple clients from concrete creation details and maximize flexibility."
        },
        {
          "ar": "تحديد كيفية ترتيب الدوال داخل الذاكرة المخبأة للمعالج.",
          "ok": false,
          "why": "هذه من مهام المترجم ونظام التشغيل.",
          "en": "Determining how methods are arranged within CPU cache memory."
        },
        {
          "ar": "حذف الفئات غير المستخدمة أثناء تشغيل البرنامج.",
          "ok": false,
          "why": "هذه مهمة جامع القمامة (Garbage Collector).",
          "en": "Purging unused classes while the program is executing."
        }
      ],
      "tip": "وقفة امتحانية: Creational Patterns تجيب دائماً على سؤال: 'كيف ننشئ الكائنات بمرونة دون الارتباط بفئاتها الخرسانية؟'."
    },
    {
      "n": 46,
      "type": "mcq",
      "ref": "L2-S011",
      "q_ar": "أي من الأنماط التالية يُعد مثالاً على نمط هيكلي (Structural) وليس إنشائياً؟",
      "q_en": "Which of the following patterns is an example of a Structural pattern and NOT Creational?",
      "opts": [
        {
          "ar": "Singleton",
          "ok": false,
          "why": "Singleton نمط إنشائي (Creational).",
          "en": "Singleton"
        },
        {
          "ar": "Adapter",
          "ok": true,
          "why": "Adapter نمط هيكلي (Structural) يختص بتركيب الفئات ومطابقة الواجهات غير المتوافقة.",
          "en": "Adapter"
        },
        {
          "ar": "Factory Method",
          "ok": false,
          "why": "Factory Method نمط إنشائي (Creational).",
          "en": "Factory Method"
        },
        {
          "ar": "Builder",
          "ok": false,
          "why": "Builder نمط إنشائي (Creational).",
          "en": "Builder"
        }
      ],
      "tip": "وقفة امتحانية: احفظ الأنماط الإنشائية الخمسة: Singleton, Factory Method, Abstract Factory, Builder, Prototype."
    },
    {
      "n": 47,
      "type": "mcq",
      "ref": "L2-S012",
      "q_ar": "بماذا تتميز أنماط التصميم السلوكية (Behavioral Patterns) عن الفئتين الإنشائية والهيكلية؟",
      "q_en": "How do Behavioral Design Patterns distinguish themselves from Creational and Structural categories?",
      "opts": [
        {
          "ar": "بأنها تركز حصرياً على طريقة تخزين البيانات في ملفات القرص الصلب.",
          "ok": false,
          "why": "هذه عمليات إدخال وإخراج وتخزين.",
          "en": "By focusing exclusively on data storage within hard disk files."
        },
        {
          "ar": "بتركيزها على توزيع المسؤوليات، إدارة تدفق التحكم، وخوارزميات التفاعل والتواصل المرن بين الكائنات.",
          "ok": true,
          "why": "الأنماط السلوكية تعنى بالسلوك والديناميكية وحركة البيانات بين الكائنات مثل Strategy و Observer.",
          "en": "By focusing on assigning responsibilities, control flow, algorithms, and flexible communication between objects."
        },
        {
          "ar": "بأنها تتطلب كتابة كود بلغة الآلة الثنائية فقط.",
          "ok": false,
          "why": "الأنماط تنفذ بأي لغة كائنية عالية المستوى.",
          "en": "By requiring code written exclusively in binary machine code."
        },
        {
          "ar": "بأنها تمنع استخدام الوراثة في البرامج تماماً.",
          "ok": false,
          "why": "بعض الأنماط السلوكية تعتمد على الوراثة مثل Template Method.",
          "en": "By completely banning the use of inheritance in programs."
        }
      ],
      "tip": "وقفة امتحانية: Creational (إنشاء كائنات) · Structural (تركيب وتجميع هياكل) · Behavioral (سلوك وتفاعل وتواصل)."
    },
    {
      "n": 48,
      "type": "mcq",
      "ref": "L2-S013",
      "q_ar": "ما المشكلة الكبرى في استخدام الكلمة المفتاحية `new` بشكل مباشر وعشوائي في كامل طبقات الكود؟",
      "q_en": "What is the major problem with using the `new` keyword directly and arbitrarily throughout the codebase?",
      "opts": [
        {
          "ar": "تسبب إيقاف بطاقة الرسوميات عن العمل فوراً.",
          "ok": false,
          "why": "لا علاقة مباشرة لـ new ببطاقة الرسوميات.",
          "en": "It causes the graphics card to stop functioning immediately."
        },
        {
          "ar": "تربط الكود بفئات ملموسة محددة (Concrete Classes)، مما يخلق ترابطاً صلبياً وثيقاً (Tight Coupling) يمنع التوسع واختبار الوحدة.",
          "ok": true,
          "why": "استخدام new المباشر يجعل من المستحيل استبدال الفئة بنوع آخر أو بمحاكي وهمي (Mock) دون تعديل الكود الأصلي.",
          "en": "It couples code to specific concrete classes, creating tight coupling that impedes extensibility and unit testing."
        },
        {
          "ar": "تمنع المترجم من اكتشاف الأخطاء الإملائية.",
          "ok": false,
          "why": "المترجم يكتشف الأخطاء في جميع الأحوال.",
          "en": "It prevents the compiler from detecting typos."
        },
        {
          "ar": "تؤدي لحذف الملفات المصدرية من المشروع.",
          "ok": false,
          "why": "كلام غير منطقي برمجياً.",
          "en": "It leads to deleting source files from the project."
        }
      ],
      "tip": "وقفة امتحانية: القاعدة المعمارية: 'New is Glue' — كل استخدام لـ new يلتصق بفئة محددة ويكسر التجريد؛ والحل هو الأنماط الإنشائية."
    },
    {
      "n": 49,
      "type": "mcq",
      "ref": "L2-S014",
      "q_ar": "ما هو الغرض المعماري الأساسي لنمط الوحيد (Singleton Design Pattern)؟",
      "q_en": "What is the primary architectural purpose of the Singleton Design Pattern?",
      "opts": [
        {
          "ar": "السماح بإنشاء ملايين النسخ من الكائن لتسريع معالجة البيانات الضخمة.",
          "ok": false,
          "why": "هذا عكس وظيفة Singleton تماماً؛ النمط يضمن وجود نسخة واحدة فقط.",
          "en": "Allowing the creation of millions of instances to accelerate big data processing."
        },
        {
          "ar": "ضمان أن الفئة تمتلك نسخة واحدة فقط طوال فترة تشغيل التطبيق، مع توفير نقطة وصول عالمية وموحدة لهذه النسخة.",
          "ok": true,
          "why": "هذا هو التعريف الكلاسيكي لنمط Singleton؛ حصر الكائن في نسخة مفردة لضبط الموارد المشتركة.",
          "en": "Ensuring that a class has only one instance throughout the application lifecycle, and providing a unified global access point to it."
        },
        {
          "ar": "تدمير كافة الكائنات الموجودة في الذاكرة كل 10 دقائق.",
          "ok": false,
          "why": "هذه مهمة إدارة دورة حياة خاصة وليست نمط Singleton.",
          "en": "Destroying all objects in memory every 10 minutes."
        },
        {
          "ar": "منع المستخدمين من تسجيل الدخول إلى النظام.",
          "ok": false,
          "why": "لا علاقة له بصلاحيات الدخول.",
          "en": "Preventing users from logging into the system."
        }
      ],
      "tip": "وقفة امتحانية: هدفان مقدسان لـ Singleton: 1. Single Instance (نسخة واحدة فقط) · 2. Global Access Point (نقطة وصول عالمية)."
    },
    {
      "n": 50,
      "type": "mcq",
      "ref": "L2-S015",
      "q_ar": "ما هي الخطوة الأولى والإلزامية برمجياً لمنع أي كود خارجي من إنشاء نسخ متعددة من فئة Singleton؟",
      "q_en": "What is the mandatory first programming step to prevent external code from creating multiple instances of a Singleton class?",
      "opts": [
        {
          "ar": "جعل منشئ الفئة عاماً (public constructor) لتمكين الجميع من الوصول إليه.",
          "ok": false,
          "why": "المنشئ العام يسمح للجميع باستدعاء new وإنشاء مئات النسخ.",
          "en": "Making the constructor public so everyone can access it."
        },
        {
          "ar": "تعريف منشئ الفئة كمنشئ خاص (Private Constructor) لمنع استخدام الكلمة new من خارج الفئة.",
          "ok": true,
          "why": "بجعل المنشئ private، تصبح الفئة نفسها هي الجهة الوحيدة القادرة على استدعائه والتحكم في إنشاء نسختها.",
          "en": "Defining a private constructor to prevent instantiating the class with 'new' from outside."
        },
        {
          "ar": "حذف اسم الفئة من ملف المشروع.",
          "ok": false,
          "why": "هذا يسبب خطأ في الترجمة (Syntax Error).",
          "en": "Deleting the class name from the project file."
        },
        {
          "ar": "جعل جميع دوال الفئة ترجع قيمة null دائماً.",
          "ok": false,
          "why": "هذا يعطل الفئة بالكامل.",
          "en": "Making all class methods always return null."
        }
      ],
      "tip": "وقفة امتحانية: أول خطوة لتطبيق نمط Singleton في أي لغة برمجة هي: جعل المنشئ خاصاً (Private Constructor)."
    },
    {
      "n": 51,
      "type": "mcq",
      "ref": "L2-S016",
      "q_ar": "كيف يوفر كلاس Singleton نقطة الوصول العالمية للنسخة الوحيدة في لغة C#؟",
      "q_en": "How does a Singleton class provide the global access point to its single instance in C#?",
      "opts": [
        {
          "ar": "عبر متغير عام غير ساكن يتطلب استدعاء new في كل شاشة.",
          "ok": false,
          "why": "هذا يتناقض مع فكرة النسخة الواحدة.",
          "en": "Via an instance public field requiring a 'new' call on every screen."
        },
        {
          "ar": "عبر دالة أو خاصية ساكنة عامة (Public Static Property/Method مثل Instance أو GetInstance()) تُرجع الحقل الساكن الوحيد.",
          "ok": true,
          "why": "الأعضاء الساكنة (static) تنتمي للفئة ككل وتتيح الوصول إليها من أي مكان عبر `ClassName.Instance` دون إنشاء كائن جديد.",
          "en": "Via a public static property or method (such as Instance or GetInstance()) returning the unique static field."
        },
        {
          "ar": "عبر حفظ كائن في ملف نصي على القرص الصلب وقراءته يدوياً.",
          "ok": false,
          "why": "الوصول يكون عبر الذاكرة المباشرة بسرعة وكفاءة.",
          "en": "By serializing the object into a text file on the hard drive and reading it manually."
        },
        {
          "ar": "عبر إرسال رسالة بريد إلكتروني تحتوي على عنوان الكائن.",
          "ok": false,
          "why": "غير صحيح إطلاقاً.",
          "en": "By sending an email message containing the memory address of the object."
        }
      ],
      "tip": "وقفة امتحانية: الوصول للنسخة الوحيدة يكون دائماً عبر: `Singleton.GetInstance()` أو `Singleton.Instance`."
    },
    {
      "n": 52,
      "type": "mcq",
      "ref": "L2-S017",
      "q_ar": "ما هي المشكلة التي تظهر في نمط Singleton التقليدي البسيط عند تشغيله في بيئة متعددة الخيوط (Multi-threaded)؟",
      "q_en": "What problem arises in a naive Singleton implementation in a multi-threaded environment?",
      "opts": [
        {
          "ar": "انخفاض دقة ألوان الشاشة الرئيسية للنظام.",
          "ok": false,
          "why": "لا علاقة لهذا ببيئة تعدد الخيوط والذاكرة.",
          "en": "Degradation of display color depth in the application."
        },
        {
          "ar": "حالة تسابق (Race Condition) قد تؤدي إلى دخول خيطين في نفس اللحظة إلى فحص `if (instance == null)` وإنشاء نسختين مختلفتين في الذاكرة.",
          "ok": true,
          "why": "إذا وصل خيطان قبل تهيئة الكائن، سينشئ كلاهما كائناً جديداً، مما يكسر مبدأ النسخة الواحدة تماماً.",
          "en": "A race condition where two threads evaluate 'if (instance == null)' simultaneously, creating two distinct instances in memory."
        },
        {
          "ar": "توقف المعالج عن العمل بشكل نهائي.",
          "ok": false,
          "why": "هذا خطأ منطقي في البرمجيات وليس احتراقاً للمعالج.",
          "en": "The processor halts permanently."
        },
        {
          "ar": "تحويل لغة البرنامج إلى لغة أخرى تلقائياً.",
          "ok": false,
          "why": "لا علاقة له بالترجمة.",
          "en": "The program language automatically translates into another language."
        }
      ],
      "tip": "وقفة امتحانية: الخطر الأكبر في Singleton الساذج هو: Race Condition بين الـ Threads وكسر شرط النسخة الوحيدة."
    },
    {
      "n": 53,
      "type": "mcq",
      "ref": "L2-S018",
      "q_ar": "ما هي التقنية البرمجية المعتمدة لحل مشكلة تعدد الخيوط بكفاءة عالية في نمط Singleton؟",
      "q_en": "What is the standard programming technique to solve the multi-threading issue efficiently in Singleton?",
      "opts": [
        {
          "ar": "إلغاء استخدام الخيوط المتعددة في كامل نظام التشغيل.",
          "ok": false,
          "why": "التطبيقات الحديثة تعتمد بالضرورة على تعدد الخيوط لضمان الأداء وسرعة الاستجابة.",
          "en": "Disabling multithreading across the entire operating system."
        },
        {
          "ar": "تقنية القفل المزدوج المحكم (Double-Check Locking) أو استخدام كائن `Lazy<T>` الجاهز والمؤمن في بيئة .NET.",
          "ok": true,
          "why": "Double-Check Locking يتحقق من الـ null قبل حجز القفل وبعده لتجنب تكلفة القفل الباهظة في كل استدعاء، بينما `Lazy<T>` يضمن Thread-safety تلقائياً.",
          "en": "Double-checked locking pattern or using the built-in thread-safe Lazy<T> in .NET."
        },
        {
          "ar": "حذف المنشئ الخاص وجعله عاماً مجدداً.",
          "ok": false,
          "why": "هذا يكسر النمط بالكامل.",
          "en": "Removing the private constructor and making it public again."
        },
        {
          "ar": "إعادة تشغيل الخادم بعد كل طلب مستخدم.",
          "ok": false,
          "why": "هذا يدمر توفر الخدمة وينافي العمارة السليمة.",
          "en": "Rebooting the server after each client request."
        }
      ],
      "tip": "وقفة امتحانية: في .NET الحديث، الطريقة المثلى والأنظف لإنشاء Singleton آمن للخيوط وكَسول (Thread-safe Lazy) هي استخدام `Lazy<T>`."
    },
    {
      "n": 54,
      "type": "mcq",
      "ref": "L2-S019",
      "q_ar": "أي من الحالات التالية يمثل استخداماً واقعياً ومبرراً معمارياً لتطبيق نمط Singleton؟",
      "q_en": "Which of the following scenarios represents a valid and architecturally justified use of the Singleton pattern?",
      "opts": [
        {
          "ar": "تمثيل سلة التسوق الخاصة بكل عميل على حدة في متجر إلكتروني.",
          "ok": false,
          "why": "سلة التسوق خاصة بكل مستخدم وتتطلب نسخاً متعددة؛ جعلها Singleton سيخلط طلبات جميع مستخدمي الموقع في سلة واحدة!",
          "en": "Representing each customer's individual shopping cart in an e-commerce platform."
        },
        {
          "ar": "خدمة تسجيل أحداث النظام المركزية (Centralized Logger) أو مدير ملفات الإعدادات العامة (Configuration Manager).",
          "ok": true,
          "why": "هذه موارد مشتركة للنظام بأكمله، ووجود نسخة مركزية واحدة يضمن اتساق السجلات وتوفير الذاكرة.",
          "en": "A centralized logging service (Logger) or a global configuration manager (ConfigurationManager)."
        },
        {
          "ar": "إنشاء كائنات تفاصيل الفاتورة لكل منتج يشتريه العميل.",
          "ok": false,
          "why": "عناصر الفاتورة متعددة ومستقلة لكل طلب.",
          "en": "Instantiating invoice line-item objects for every product purchased by a customer."
        },
        {
          "ar": "تعريف المتغيرات المحلية المؤقتة داخل الحلقات التكرارية.",
          "ok": false,
          "why": "المتغيرات المؤقتة مكانها المكدس (Stack) وليس Singleton.",
          "en": "Declaring temporary local variables inside iteration loops."
        }
      ],
      "tip": "وقفة امتحانية: فخ شائع في الامتحانات: سلة التسوق (Shopping Cart) وحساب المستخدم (User Profile) لا يمكن أبداً أن تكون Singleton!"
    },
    {
      "n": 55,
      "type": "mcq",
      "ref": "L2-S020",
      "q_ar": "في مخطط فئات UML لنمط Singleton، ما هي السمة المميزة لتمثيل دالة `GetInstance()` والحقل `instance`؟",
      "q_en": "In the UML class diagram for Singleton, what is the distinctive characteristic for `GetInstance()` and `instance`?",
      "opts": [
        {
          "ar": "توضع تحتهما علامة خط سفلي (Underline) للدلالة على أنهما أعضاء ساكنة (Static Members).",
          "ok": true,
          "why": "في معايير تدوين UML، يرمز الخط السفلي (Underline) تحت الخاصية أو الدالة إلى أنها تتبع الفئة ككل (Static) وليست مرتبطة بنسخة معينة.",
          "en": "They are underlined to denote that they are static members."
        },
        {
          "ar": "تكتب الحروف بألوان فسفورية براقة.",
          "ok": false,
          "why": "UML لغة نمذجة معيارية لا تعتمد على الألوان.",
          "en": "The letters are rendered in glowing fluorescent colors."
        },
        {
          "ar": "توضع علامة تعجب حمراء بجانب اسم الدالة.",
          "ok": false,
          "why": "ليست من معايير UML.",
          "en": "A red exclamation mark is placed next to the method name."
        },
        {
          "ar": "ترسم الدالة خارج صندوق الفئة في زاوية الصفحة.",
          "ok": false,
          "why": "جميع الأعضاء توضع داخل الصندوق الخاص بالفئة.",
          "en": "The method is drawn outside the class box in the corner of the diagram."
        }
      ],
      "tip": "وقفة امتحانية: قاعدة UML المعيارية: الخط السفلي (Underline) تحت أي حقل أو دالة يعني مباشرة أنها Static!"
    },
    {
      "n": 56,
      "type": "mcq",
      "ref": "L2-S021",
      "q_ar": "لماذا يصنف بعض مهندسي البرمجيات نمط Singleton كنمط مضاد (Anti-Pattern) عند الإفراط في استخدامه؟",
      "q_en": "Why do some software engineers classify Singleton as an Anti-Pattern when overused?",
      "opts": [
        {
          "ar": "لأنه يجعل الكود أصغر حجماً وأسهل في القراءة.",
          "ok": false,
          "why": "صغر الحجم ليس سبباً لاعتباره نمطاً مضاداً.",
          "en": "Because it makes the codebase smaller and easier to read."
        },
        {
          "ar": "لأنه يُدخل حالة عامة مشتركة (Global State)، يخفي التبعيات داخل الدوال، ويجعل كتابة اختبارات الوحدة المعزولة (Unit Tests) أمراً بالغ الصعوبة.",
          "ok": true,
          "why": "الـ Singleton يتصرف كمتغير عام مقنع، مما يؤدي لتداخل البيانات بين الاختبارات وصعوبة استبداله بكائنات محاكاة (Mocks).",
          "en": "Because it introduces mutable global state, hides class dependencies, and makes isolated unit testing extremely difficult."
        },
        {
          "ar": "لأنه يمنع الحاسوب من الاتصال بالإنترنت أثناء وقت التشغيل.",
          "ok": false,
          "why": "لا علاقة له بالشبكة.",
          "en": "Because it disconnects the computer from the internet during runtime."
        },
        {
          "ar": "لأنه يزيد من سرعة استجابة المعالج أكثر من الحدود المسموحة.",
          "ok": false,
          "why": "هذا ليس عيباً معمارياً.",
          "en": "Because it increases processor responsiveness beyond allowed limits."
        }
      ],
      "tip": "وقفة امتحانية: أسباب اعتبار Singleton كـ Anti-pattern: 1. Global State · 2. Hidden Dependencies · 3. Hard to Unit Test."
    },
    {
      "n": 57,
      "type": "mcq",
      "ref": "L2-S022",
      "q_ar": "في لغة C#، ما هو السطر البرمجي الأصح لتطبيق نمط Singleton آمن للخيوط وكَسول (Thread-safe Lazy Singleton)؟",
      "q_en": "In C#, what is the correct code pattern for a modern thread-safe Lazy Singleton?",
      "opts": [
        {
          "ar": "`public static Singleton instance = new Singleton();` مع منشئ عام.",
          "ok": false,
          "why": "هذا Eager Loading غير كَسول ومنشئه عام يكسر النمط.",
          "en": "`public static Singleton instance = new Singleton();` with a public constructor."
        },
        {
          "ar": "`private static readonly Lazy<Singleton> instance = new Lazy<Singleton>(() => new Singleton());` مع منشئ خاص.",
          "ok": true,
          "why": "هذا هو المعيار الصناعي الحديث في C#؛ حيث يوفر كائن `Lazy<T>` أمان الخيوط التلقائي والتحميل الكسول عند أول طلب.",
          "en": "`private static readonly Lazy<Singleton> instance = new Lazy<Singleton>(() => new Singleton());` with a private constructor."
        },
        {
          "ar": "`public Singleton() { instance = this; }`",
          "ok": false,
          "why": "هذا يسمح بإنشاء نسخ متعددة ويسحق النسخة القديمة مع كل new.",
          "en": "`public Singleton() { instance = this; }`"
        },
        {
          "ar": "`private void MakeSingleton() { return; }`",
          "ok": false,
          "why": "دالة فارغة لا تنفذ النمط إطلاقاً.",
          "en": "`private void MakeSingleton() { return; }`"
        }
      ],
      "tip": "وقفة امتحانية: استخدام `Lazy<T>` يجمع بين ميزتين حاسمتين: Lazy Initialization (الإنشاء عند أول طلب) و Thread-Safety التلقائية."
    },
    {
      "n": 58,
      "type": "mcq",
      "ref": "L2-S023",
      "q_ar": "ما هو الدافع المعماري الأساسي لاستخدام نمط المصنع (Factory Pattern)؟",
      "q_en": "What is the core architectural motivation for using the Factory Pattern?",
      "opts": [
        {
          "ar": "إلغاء الحاجة لإنشاء كائنات في الذاكرة العشوائية نهائياً.",
          "ok": false,
          "why": "البرامج الكائنية تحتاج حتماً لإنشاء كائنات لتعمل.",
          "en": "Completely eliminating the need to instantiate objects in heap memory."
        },
        {
          "ar": "فصل وتجريد مسؤولية إنشاء الكائنات عن الكود الذي يستخدمها، لتقليل الترابط وجعل النظام مفتوحاً للتوسع ومغلقاً للتعديل.",
          "ok": true,
          "why": "المصنع يعزل عملية استدعاء new في مكان مركزي واحد، بحيث يعتمد العميل على واجهة مجردة بدلاً من الفئات الملموسة.",
          "en": "Decoupling and abstracting object creation from client code to reduce coupling and satisfy the Open/Closed Principle."
        },
        {
          "ar": "تحويل جميع الفئات المشتقة إلى فئات مغلقة (sealed).",
          "ok": false,
          "why": "المصنع يعتمد على التعددية والاشتقاق.",
          "en": "Converting all derived classes into sealed classes."
        },
        {
          "ar": "تسريع عملية كتابة أسطر الكود للمبرمجين المبتدئين.",
          "ok": false,
          "why": "الأنماط تخدم التصميم المستدام وليس مجرد سرعة الكتابة المؤقتة.",
          "en": "Speeding up code typing speed for junior developers."
        }
      ],
      "tip": "وقفة امتحانية: نمط المصنع يطبق مبدأين من مبادئ SOLID: OCP (إضافة منتجات جديدة) و DIP (الاعتماد على الواجهات)."
    },
    {
      "n": 59,
      "type": "mcq",
      "ref": "L2-S024",
      "q_ar": "ما الفارق الجوهري بين المصنع البسيط (Simple Factory) ونمط طريقة المصنع الرسمي (Factory Method)؟",
      "q_en": "What is the fundamental difference between Simple Factory and the official Factory Method pattern?",
      "opts": [
        {
          "ar": "المصنع البسيط مكتوب بلغة C# بينما Factory Method مكتوب بلغة جافا فقط.",
          "ok": false,
          "why": "كلاهما يمكن تنفيذه بأي لغة برمجة كائنية.",
          "en": "Simple Factory is written in C#, whereas Factory Method is strictly written in Java."
        },
        {
          "ar": "المصنع البسيط يستخدم فئة واحدة بداخلها شرط switch لإنشاء الكائنات (وينتهك OCP)، بينما Factory Method يعرف واجهة إنشاء ويفوض الفئات المشتقة لتحديد النوع الملموس (ويحقق OCP).",
          "ok": true,
          "why": "Simple Factory مجرد أسلوب برمجي (Idiom)؛ بينما Factory Method هو نمط GoF رسمي يعتمد على الوراثة والتعددية.",
          "en": "Simple Factory uses a single class with a switch-case statement (violating OCP), while Factory Method defines an interface and lets subclasses decide which concrete class to instantiate (satisfying OCP)."
        },
        {
          "ar": "المصنع البسيط ينشئ واجهات رسومية بينما Factory Method ينشئ قواعد بيانات.",
          "ok": false,
          "why": "كلاهما يختص بإنشاء كائنات برمجية عامة.",
          "en": "Simple Factory creates user interfaces, while Factory Method creates databases."
        },
        {
          "ar": "لا يوجد أي فرق على الإطلاق فهما اسمان لنفس الكود.",
          "ok": false,
          "why": "الفارق المعماري بينهما جوهري وكبير وخاصة في تطبيق مبدأ Open/Closed.",
          "en": "There is no difference whatsoever; they are identical concepts."
        }
      ],
      "tip": "وقفة امتحانية: Simple Factory: فئة خرسانية تحتوي switch · Factory Method: فئة أساسية مجردة تفوض الإنشاء للفئات الفرعية."
    },
    {
      "n": 60,
      "type": "mcq",
      "ref": "L2-S025",
      "q_ar": "متى يكون استخدام نمط طريقة المصنع (Factory Method) هو الخيار الهندسي الأنسب؟",
      "q_en": "When is the Factory Method pattern the most appropriate engineering choice?",
      "opts": [
        {
          "ar": "عندما تكون الفئات والمنتجات ثابتة نهائياً ولن تتم إضافة أي منتج جديد في مستقبل النظام.",
          "ok": false,
          "why": "في هذه الحالة البسيطة يكفي استخدام Simple Factory أو حتى new المباشر.",
          "en": "When product types are fixed and no new products will ever be added."
        },
        {
          "ar": "عندما لا يعلم الكود مسبقاً الأنواع الدقيقة للفئات التي سيتعامل معها، ويريد منح المطورين مرونة لتوسيع وإضافة منتجات جديدة دون تعديل الكود القديم.",
          "ok": true,
          "why": "Factory Method صُمم خصيصاً للأنظمة والمكتبات القابلة للتوسعة المستقبلية (Extensible Frameworks).",
          "en": "When client code does not know beforehand the exact concrete types it must create, and developers need flexibility to add new products without modifying existing code."
        },
        {
          "ar": "عندما نريد حصر النظام في نسخة واحدة فقط من الكائن.",
          "ok": false,
          "why": "هذه مهمة نمط Singleton وليس Factory Method.",
          "en": "When the system needs to restrict an object to a single shared instance."
        },
        {
          "ar": "عندما نريد ضغط حجم الذاكرة المستخدمة بواسطة كائنات دقيقة مكررة.",
          "ok": false,
          "why": "هذه مهمة نمط Flyweight.",
          "en": "When compressing memory footprint for thousands of repeated fine-grained objects."
        }
      ],
      "tip": "وقفة امتحانية: نختار Factory Method عندما نتوقع إضافة أنواع جديدة من المنتجات في المستقبل دون مساس بالكود القائم."
    },
    {
      "n": 61,
      "type": "mcq",
      "ref": "L2-S026",
      "q_ar": "في مثال نظام الإشعارات (Notification System)، إذا أردنا إضافة إشعار WhatsApp عبر Simple Factory، فما العيب المعماري الذي سيحدث؟",
      "q_en": "In the Notification System example, if we add WhatsApp via Simple Factory, what architectural flaw occurs?",
      "opts": [
        {
          "ar": "سنضطر إلى فتح فئة NotificationFactory وتعديل كود switch بإضافة `case 'whatsapp'`، مما ينتهك مبدأ Open/Closed (OCP).",
          "ok": true,
          "why": "كل إضافة تتطلب تعديل الكود المختبر مسبقاً، مما يخلق مخاطر إدخال أخطاء جديدة في الإشعارات القديمة.",
          "en": "We must modify NotificationFactory by adding `case 'whatsapp'` to the switch statement, violating the Open/Closed Principle (OCP)."
        },
        {
          "ar": "سيتوقف خادم البريد الإلكتروني عن إرسال الرسائل فوراً.",
          "ok": false,
          "why": "الخلل في نظافة التصميم وقابلية الصيانة وليس في بروتوكول البريد.",
          "en": "The email server will instantly cease sending outgoing messages."
        },
        {
          "ar": "ستقوم بيئة CLR برمي استثناء StackOverflowException.",
          "ok": false,
          "why": "إضافة شرط لا تسبب طفحان المكدس.",
          "en": "The CLR runtime will throw a StackOverflowException."
        },
        {
          "ar": "لن يتمكن المترجم من بناء ملف المشروع.",
          "ok": false,
          "why": "الكود سيُترجم ولكنه تصميم هش وقابل للكسر.",
          "en": "The compiler will fail to build the project."
        }
      ],
      "tip": "وقفة امتحانية: انتهاك OCP هو العيب الأكبر لـ Simple Factory؛ وعلاجه هو الانتقال إلى Factory Method."
    },
    {
      "n": 62,
      "type": "mcq",
      "ref": "L2-S027",
      "q_ar": "ما هي المكونات الأربعة الأساسية في مخطط فئات UML لنمط Factory Method؟",
      "q_en": "What are the four primary participants in the Factory Method pattern UML class diagram?",
      "opts": [
        {
          "ar": "Client, Server, Database, Cache.",
          "ok": false,
          "why": "هذه مكونات معمارية للأنظمة الموزعة وليست عناصر نمط Factory Method.",
          "en": "Client, Server, Database, Cache."
        },
        {
          "ar": "Creator (الفئة المنشئة الأساسية), ConcreteCreator (المنشئ الملموس), Product (واجهة المنتج), ConcreteProduct (المنتج الملموس).",
          "ok": true,
          "why": "هذه هي الأطراف الأربعة القياسية لنمط Factory Method كما وثقها كتاب GoF.",
          "en": "Creator, ConcreteCreator, Product, and ConcreteProduct."
        },
        {
          "ar": "Subject, Observer, ConcreteSubject, ConcreteObserver.",
          "ok": false,
          "why": "هذه أطراف نمط المراقب (Observer Pattern).",
          "en": "Subject, Observer, ConcreteSubject, ConcreteObserver."
        },
        {
          "ar": "Context, Strategy, ConcreteStrategyA, ConcreteStrategyB.",
          "ok": false,
          "why": "هذه أطراف نمط الاستراتيجية (Strategy Pattern).",
          "en": "Context, Strategy, ConcreteStrategyA, ConcreteStrategyB."
        }
      ],
      "tip": "وقفة امتحانية: أطراف Factory Method: Product (Interface) + ConcreteProducts / Creator (Abstract) + ConcreteCreators."
    },
    {
      "n": 63,
      "type": "mcq",
      "ref": "L2-S028",
      "q_ar": "كيف تحقق واجهة المنتج `INotification` التجريد وفك الترابط في نمط Factory Method؟",
      "q_en": "How does the `INotification` product interface achieve abstraction and loose coupling in Factory Method?",
      "opts": [
        {
          "ar": "بإجبار جميع المطورين على كتابة الكود داخل واجهة المستخدم مباشرة.",
          "ok": false,
          "why": "هذا يخلط الطبقات ويزيد الترابط سوءاً.",
          "en": "By forcing all developers to write code directly within the UI."
        },
        {
          "ar": "بتعريف عقد موحد للدالة `Send(message)`، بحيث يتعامل كود النظام مع الواجهة فقط دون أن يعرف أو يهتم بما إذا كان الإشعار SMS أو Email.",
          "ok": true,
          "why": "العميل يستدعي `notification.Send()` معتمداً على التجريد، والتنفيذ الفعلي يتحدد ديناميكياً في وقت التشغيل.",
          "en": "By defining a unified contract for `Send(message)`, allowing client code to depend only on the interface without caring whether the notification is SMS or Email."
        },
        {
          "ar": "بحفظ الرسائل في ملف نصي دون إرسالها للعملاء.",
          "ok": false,
          "why": "الواجهة عقد وظيفي لتنفيذ الإرسال الفعلي.",
          "en": "By persisting messages into a text file without delivering them to clients."
        },
        {
          "ar": "بمنع الفئات الملموسة من وراثة أي خصائص جديدة.",
          "ok": false,
          "why": "الواجهات تسمح لكل فئة ملموسة بتنفيذ تفاصيلها بحرية.",
          "en": "By disallowing concrete classes from inheriting any new properties."
        }
      ],
      "tip": "وقفة امتحانية: التجريد (Abstraction) يجعل الكود يعتمد على ماذا يفعل الشيء (Send) وليس كيف يفعله داخلياً (Smtp/Twilio)."
    },
    {
      "n": 64,
      "type": "mcq",
      "ref": "L2-S029",
      "q_ar": "في كود C# لنمط Factory Method، كيف يتم تعريف دالة المصنع داخل الفئة المنشئة الأساسية `NotificationCreator`؟",
      "q_en": "In C# Factory Method code, how is the factory method declared in the base `NotificationCreator` class?",
      "opts": [
        {
          "ar": "`public INotification CreateNotification() { return new EmailNotification(); }` كدالة ملموسة ثابتة.",
          "ok": false,
          "why": "هذا ربط صلب بالبريد الإلكتروني ويلغي مبدأ تفويض الفئات الفرعية.",
          "en": "`public INotification CreateNotification() { return new EmailNotification(); }` as a concrete method."
        },
        {
          "ar": "`public abstract INotification CreateNotification();` كدالة مجردة تجبر الفئات المشتقة على تنفيذها وإرجاع المنتج المناسب.",
          "ok": true,
          "why": "هذا هو جوهر Factory Method؛ إعلان دالة إنشاء مجردة (Virtual/Abstract Constructor) تفوض القرار للفئات المشتقة.",
          "en": "`public abstract INotification CreateNotification();` as an abstract method forcing subclasses to implement it and return the concrete product."
        },
        {
          "ar": "`private static void CreateNotification() { }`",
          "ok": false,
          "why": "الدوال الخاصة والساكنة لا يمكن وراثتها أو إعادة تعريفها (override).",
          "en": "`private static void CreateNotification() { }`"
        },
        {
          "ar": "`public void SendNotification();`",
          "ok": false,
          "why": "دالة المصنع وظيفتها إنشاء وإرجاع كائن المنتج وليست دالة إرسال عادية.",
          "en": "`public void SendNotification();`"
        }
      ],
      "tip": "وقفة امتحانية: توقيع دالة Factory Method: تكون دالة مجردة `public abstract IProduct CreateProduct();` وتنفذ بـ override."
    },
    {
      "n": 65,
      "type": "mcq",
      "ref": "L2-S030",
      "q_ar": "ما الميزة الكبرى التي تتحقق عندما نطلب إضافة نوع إشعار جديد (مثل PushNotification) في نظام يعتمد على Factory Method؟",
      "q_en": "What major advantage is achieved when adding a new notification type (like PushNotification) in a Factory Method system?",
      "opts": [
        {
          "ar": "الحاجة لإعادة برمجة النظام بالكامل واختبار جميع الإشعارات السابقة.",
          "ok": false,
          "why": "هذا العيب المعماري للنظم القديمة وهو ما جاء النمط لعلاجه.",
          "en": "The requirement to rewrite the entire system and retest all existing notification channels."
        },
        {
          "ar": "إمكانية إضافة فئة `PushNotification` وفئة `PushNotificationCreator` جديدتين دون لمس أو تعديل أو إعادة اختبار سطر واحد في الكود القديم المستقر.",
          "ok": true,
          "why": "هذا هو التطبيق المثالي لمبدأ Open/Closed Principle؛ النظام مفتوح لتوسيع ميزاته ومغلق أمام تعديل كوده السابق.",
          "en": "The ability to add new `PushNotification` and `PushNotificationCreator` classes without modifying or retesting a single line of existing, stable code."
        },
        {
          "ar": "حذف خوادم الرسائل القديمة لتوفير المساحة.",
          "ok": false,
          "why": "لا يتم حذف أي شيء من الوظائف المستقرة.",
          "en": "Deleting legacy messaging servers to free up storage."
        },
        {
          "ar": "تقليل سرعة معالجة الرسائل بنسبة 50%.",
          "ok": false,
          "why": "إضافة فئة جديدة لا تؤثر إطلاقاً على أداء الفئات الأخرى.",
          "en": "Reducing message processing throughput by 50%."
        }
      ],
      "tip": "وقفة امتحانية: في Factory Method: كل منتج جديد = ConcreteProduct جديد + ConcreteCreator جديد فقط، مع بقاء الكود القديم سليماً ومغلقاً 100%."
    },
    {
      "n": 66,
      "type": "mcq",
      "ref": "L3-S002",
      "q_ar": "ما هو التعريف والهدف المعماري الأساسي لأنماط التصميم الهيكلية (Structural Design Patterns)؟",
      "q_en": "What is the primary architectural definition and goal of Structural Design Patterns?",
      "opts": [
        {
          "ar": "التركيز على كيفية إدارة خيوط المعالجة في بيئات الحوسبة السحابية.",
          "ok": false,
          "why": "هذه حوسبة موزعة وتزامن وليست الأنماط الهيكلية.",
          "en": "Focusing on managing thread concurrency in cloud computing environments."
        },
        {
          "ar": "تنظيم كيفية تجميع وربط الفئات والكائنات لتكوين هياكل برمجية أكبر مع الحفاظ على مرونتها وكفاءتها وتفكيك ترابطها.",
          "ok": true,
          "why": "الأنماط الهيكلية تعنى بكيفية تركيب الكائنات وربط الفئات معاً (Composition) لتشكيل نظم أكبر دون فقدان المرونة.",
          "en": "Organizing how classes and objects are composed into larger structures while keeping them flexible, efficient, and loosely coupled."
        },
        {
          "ar": "توليد كود لغة الآلة الثنائية تلقائياً من ملفات التكوين.",
          "ok": false,
          "why": "هذه مهمة المترجم.",
          "en": "Automatically generating binary machine code from configuration files."
        },
        {
          "ar": "إلغاء استخدام لغات البرمجة كائنية التوجه.",
          "ok": false,
          "why": "الأنماط الهيكلية كائنية بالكامل.",
          "en": "Abolishing object-oriented programming languages."
        }
      ],
      "tip": "وقفة امتحانية: الأنماط الهيكلية تجيب على: 'كيف نركب الكائنات والفئات معاً لتشكيل هياكل مرنة؟' (Structure & Composition)."
    },
    {
      "n": 67,
      "type": "mcq",
      "ref": "L3-S004",
      "q_ar": "ما هو التشبيه الواقعي الأنسب لمفهوم نمط المحول (Adapter) في الحياة اليومية؟",
      "q_en": "What is the best real-life analogy for the Adapter pattern in everyday life?",
      "opts": [
        {
          "ar": "قاطع الدائرة الكهربائية الذي يفصل التيار عند زيادة الحمل.",
          "ok": false,
          "why": "هذا تشبيه لنمط قاطع الدائرة (Circuit Breaker).",
          "en": "A circuit breaker that trips when electrical load exceeds limits."
        },
        {
          "ar": "محول القابس الكهربائي (Travel Adapter) الذي يسمح بتوصيل قابس ثلاثي بريطاني في مقبس جداري أوروبي ثنائي.",
          "ok": true,
          "why": "المحول يطابق بين طرفين غير متوافقين دون تغيير القابس الأصلي ودون هدم المقبس الجداري.",
          "en": "A power plug adapter (travel adapter) that connects a 3-pin UK plug into a 2-pin European wall socket."
        },
        {
          "ar": "مرآة السيارة الجانبية التي تعكس الأجسام المقتربة.",
          "ok": false,
          "why": "هذا تشبيه للرؤية وليس لمواءمة واجهات.",
          "en": "A car's side mirror reflecting approaching vehicles."
        },
        {
          "ar": "عداد السرعة في لوحة قيادة السيارة.",
          "ok": false,
          "why": "هذا تشبيه لعرض البيانات.",
          "en": "The speedometer on a car dashboard."
        }
      ],
      "tip": "وقفة امتحانية: Adapter = محول السفر؛ لا يغير الكهرباء ولا القابس بل يوفق بين الواجهتين غير المتوافقتين."
    },
    {
      "n": 68,
      "type": "mcq",
      "ref": "L3-S005",
      "q_ar": "أي من الخصائص التالية تُعد سمة جوهرية تشترك فيها الأنماط الهيكلية؟",
      "q_en": "Which of the following characteristics is a core trait shared by structural patterns?",
      "opts": [
        {
          "ar": "الاعتماد الحصري على المتغيرات العامة الساكنة لربط الكائنات.",
          "ok": false,
          "why": "المتغيرات الساكنة تكسر التغليف وترفع الترابط.",
          "en": "Exclusively relying on global static variables to interconnect objects."
        },
        {
          "ar": "الاعتماد على الواجهات المجردة ومراجع الكائنات لتحقيق تكوين مرن أثناء وقت التشغيل (Runtime Composition).",
          "ok": true,
          "why": "الأنماط الهيكلية تفضل الربط الديناميكي عبر الواجهات والمراجع بدلاً من الربط الجامد بالوراثة.",
          "en": "Relying on abstract interfaces and object references to achieve flexible composition at runtime."
        },
        {
          "ar": "إلغاء استخدام المؤشرات ومحددات الوصول في الكود.",
          "ok": false,
          "why": "محددات الوصول أساسية لحماية البنية الهيكلية.",
          "en": "Eliminating pointers and access modifiers from the code."
        },
        {
          "ar": "حذف قواعد البيانات من النظام لتوفير موارد الخادم.",
          "ok": false,
          "why": "لا علاقة له بالبنية الهيكلية للكائنات.",
          "en": "Deleting databases from the system to conserve server resources."
        }
      ],
      "tip": "وقفة امتحانية: الأنماط الهيكلية تستخدم الواجهات (Interfaces) ومراجع الكائنات (Object References) لتركيب النظم."
    },
    {
      "n": 69,
      "type": "mcq",
      "ref": "L3-S006",
      "q_ar": "لماذا يُعتبر مبدأ 'فضّل التكوين على الوراثة' (Favor Composition over Inheritance) ركيزة معمارية كبرى؟",
      "q_en": "Why is 'Favor Composition over Inheritance' considered a major architectural pillar?",
      "opts": [
        {
          "ar": "لأن الوراثة ممنوعة تماماً في لغة C# الحديثة.",
          "ok": false,
          "why": "الوراثة مدعومة في C# ولكن يوصى باستخدامها بحذر وعند الحاجة الحقيقية فقط.",
          "en": "Because inheritance is completely prohibited in modern C#."
        },
        {
          "ar": "لأن الوراثة تربط الفئات برباط صلب وقت الترجمة وتكسر التغليف (White-box)، بينما التكوين يوفر مرونة ديناميكية في وقت التشغيل ويحفظ التغليف (Black-box).",
          "ok": true,
          "why": "التكوين يتيح تبديل سلوكيات الكائن وتكوينه أثناء التشغيل، بينما الوراثة تجعل التعديل في الفئة الأساسية خطراً على كافة المشتقات.",
          "en": "Because inheritance tightly couples classes at compile-time and breaks encapsulation (white-box reuse), whereas composition provides runtime flexibility and preserves encapsulation (black-box reuse)."
        },
        {
          "ar": "لأن التكوين يستهلك ذاكرة أقل بنسبة 90% دائماً.",
          "ok": false,
          "why": "الميزة معمارية في المرونة وتفكيك الترابط وليست مجرد ضغط ذاكرة.",
          "en": "Because composition always consumes 90% less memory."
        },
        {
          "ar": "لأن الوراثة تجعل بناء الملفات التنفيذية مستحيلاً.",
          "ok": false,
          "why": "المترجم يبني الوراثة بشكل طبيعي تماماً.",
          "en": "Because inheritance makes building executables impossible."
        }
      ],
      "tip": "وقفة امتحانية: الوراثة = White-Box Reuse (صلبة وتكشف الأسرار)؛ التكوين = Black-Box Reuse (مرنة ومغلفة كلياً)."
    },
    {
      "n": 70,
      "type": "mcq",
      "ref": "L3-S008",
      "q_ar": "أي من الأنماط التالية يركز على توفير واجهة موحدة ومبسطة لمجموعة من الأنظمة الفرعية المعقدة؟",
      "q_en": "Which pattern focuses on providing a unified and simplified interface to a complex set of subsystems?",
      "opts": [
        {
          "ar": "نمط المحول (Adapter).",
          "ok": false,
          "why": "المحول يطابق واجهة مفردة غير متوافقة.",
          "en": "Adapter Pattern."
        },
        {
          "ar": "نمط الواجهة (Facade).",
          "ok": true,
          "why": "Facade يغلف عدة خدمات وأنظمة فرعية خلف واجهة واحدة بسيطة وعالية المستوى.",
          "en": "Facade Pattern."
        },
        {
          "ar": "نمط السينغلتون (Singleton).",
          "ok": false,
          "why": "Singleton يضمن وجود نسخة واحدة فقط من الكائن.",
          "en": "Singleton Pattern."
        },
        {
          "ar": "نمط المصنع (Factory Method).",
          "ok": false,
          "why": "Factory Method يختص بإنشاء الكائنات.",
          "en": "Factory Method Pattern."
        }
      ],
      "tip": "وقفة امتحانية: Facade = واجهة موحدة لمجموعة أنظمة معقدة؛ Adapter = تحويل واجهة كائن قديم ليطابق واجهة جديدة."
    },
    {
      "n": 71,
      "type": "mcq",
      "ref": "L3-S010",
      "q_ar": "في مخطط فئات UML، ما الفارق المعماري الدقيق بين علاقة التجميع (Aggregation) وعلاقة التكوين (Composition)؟",
      "q_en": "In UML, what is the precise architectural difference between Aggregation and Composition?",
      "opts": [
        {
          "ar": "لا يوجد أي فرق بينهما فهما نفس العلاقة تماماً.",
          "ok": false,
          "why": "الفرق جوهري في دورة حياة الكائنات والملكية.",
          "en": "There is no difference; they represent the exact same relationship."
        },
        {
          "ar": "في التجميع (Aggregation) تكون العلاقة ضعيفة (◇) والكائن المحتوى يمكنه العيش بمفرده؛ بينما في التكوين (Composition) تكون العلاقة قوية وحصرية (◆) وفناء الكائن الحاوي يعني حتماً فناء الكائنات المحتواة.",
          "ok": true,
          "why": "مثال التجميع: القسم والأساتذة (إذا أُغلق القسم يبقى الأستاذ حياً)؛ ومثال التكوين: الفاتورة وبنودها (إذا حذفت الفاتورة فنيت بنودها).",
          "en": "In Aggregation (open diamond ◇), the relationship is weak and part objects can exist independently; in Composition (filled diamond ◆), the relationship is strong and exclusive, so destroying the whole destroys the parts."
        },
        {
          "ar": "التجميع يستخدم فقط مع قواعد البيانات والتكوين يستخدم مع واجهات الويب.",
          "ok": false,
          "why": "كلاهما علاقات نمذجة كائنية عامة في UML.",
          "en": "Aggregation applies only to databases, while Composition applies to web interfaces."
        },
        {
          "ar": "التجميع ينتهي بمثلث فارغ والتكوين بخط متقطع.",
          "ok": false,
          "why": "المثلث للوراثة والخط المتقطع للاعتمادية؛ التجميع بماسة فارغة والتكوين بماسة مصمتة.",
          "en": "Aggregation ends with a hollow triangle and Composition with a dashed line."
        }
      ],
      "tip": "وقفة امتحانية: Aggregation = ماسة فارغة (◇) وحياة مستقلة؛ Composition = ماسة مصمتة (◆) وملكية حصرية وموت مشترك."
    },
    {
      "n": 72,
      "type": "mcq",
      "ref": "L3-S012",
      "q_ar": "ما هي المشكلة المعمارية المحددة التي صُمم نمط المحول (Adapter Pattern) لحلها؟",
      "q_en": "What specific architectural problem was the Adapter Pattern designed to solve?",
      "opts": [
        {
          "ar": "عدم وجود مساحة كافية على القرص الصلب لتثبيت البرنامج.",
          "ok": false,
          "why": "هذه مشكلة تخزين عتادية.",
          "en": "Insufficient hard drive storage to install the application."
        },
        {
          "ar": "عدم توافق الواجهات (Interface Incompatibility) بين فئة يحتاجها النظام وبين الواجهة المعيارية التي يتوقعها كود العميل الحالي.",
          "ok": true,
          "why": "المحول يسمح لكود العميل باستدعاء مكتبة خارجية أو كود قديم دون تعديل كود العميل ودون تعديل المكتبة الخارجية.",
          "en": "Interface incompatibility between a needed service/library and the standard interface expected by the existing client code."
        },
        {
          "ar": "بطء سرعة استجابة خوادم البريد الإلكتروني.",
          "ok": false,
          "why": "لا علاقة للمحول بسرعة الشبكة.",
          "en": "Slow response latency from mail servers."
        },
        {
          "ar": "تشفير كلمات المرور باستخدام خوارزميات قديمة.",
          "ok": false,
          "why": "هذه وظيفة خوارزميات التشفير وليس المحول.",
          "en": "Password encryption using deprecated hashing algorithms."
        }
      ],
      "tip": "وقفة امتحانية: الكلمة المفتاحية لـ Adapter هي: 'Incompatible Interfaces' (عدم توافق الواجهات)."
    },
    {
      "n": 73,
      "type": "mcq",
      "ref": "L3-S013",
      "q_ar": "من هي الأطراف الأربعة الرئيسية المشاركة في بنية نمط المحول (Adapter Pattern)؟",
      "q_en": "Who are the four primary participants in the Adapter Pattern structure?",
      "opts": [
        {
          "ar": "Creator, ConcreteCreator, Product, ConcreteProduct.",
          "ok": false,
          "why": "هذه أطراف نمط Factory Method.",
          "en": "Creator, ConcreteCreator, Product, ConcreteProduct."
        },
        {
          "ar": "Client, Target Interface, Adapter, Adaptee.",
          "ok": true,
          "why": "هذه هي الأطراف الأربعة المعيارية لنمط المحول كما نص كتاب GoF.",
          "en": "Client, Target Interface, Adapter, and Adaptee."
        },
        {
          "ar": "Subject, Observer, ConcreteSubject, ConcreteObserver.",
          "ok": false,
          "why": "هذه أطراف نمط Observer.",
          "en": "Subject, Observer, ConcreteSubject, ConcreteObserver."
        },
        {
          "ar": "Context, Strategy, ConcreteStrategyA, ConcreteStrategyB.",
          "ok": false,
          "why": "هذه أطراف نمط Strategy.",
          "en": "Context, Strategy, ConcreteStrategyA, ConcreteStrategyB."
        }
      ],
      "tip": "وقفة امتحانية: Client (يطلب Target) -> Adapter (ينفذ Target ويحتوي Adaptee) -> Adaptee (الكائن الأصلي غير المتوافق)."
    },
    {
      "n": 74,
      "type": "mcq",
      "ref": "L3-S015",
      "q_ar": "عند دمج خدمة دفع خارجية مثل PayPal في متجر إلكتروني، لماذا تظهر مشكلة عدم توافق الواجهات؟",
      "q_en": "When integrating PayPal into an e-commerce store, why does interface incompatibility arise?",
      "opts": [
        {
          "ar": "لأن باي بال لا يدعم التعامل بالعملات النقدية إطلاقاً.",
          "ok": false,
          "why": "باي بال يدعم كافة العملات العالمية.",
          "en": "Because PayPal does not support monetary transactions at all."
        },
        {
          "ar": "لأن المتجر يتوقع استدعاء دالة `ProcessPayment(amount)` بينما مكتبة PayPal توفر دوال بأسماء وتوقيعات مختلفة مثل `SendPayment(credentials, total)`.",
          "ok": true,
          "why": "المكتبات الخارجية صممت بواجهاتها الخاصة، ولا يمكن تعديل كودها المصدري ليتطابق مع واجهة متجرك؛ وهنا تكمن الحاجة للمحول.",
          "en": "Because the store expects `ProcessPayment(amount)`, while PayPal's third-party library exposes methods with different signatures, such as `SendPayment(credentials, total)`."
        },
        {
          "ar": "لأن لغة البرمجة C# لا يمكنها إجراء اتصالات بشبكة الإنترنت.",
          "ok": false,
          "why": "C# تدعم كافة بروتوكولات الشبكة.",
          "en": "Because C# cannot initiate outbound network sockets."
        },
        {
          "ar": "لأن المتجر الإلكتروني يجب أن يعمل بدون كهرباء.",
          "ok": false,
          "why": "كلام غير منطقي.",
          "en": "Because online stores must function without electricity."
        }
      ],
      "tip": "وقفة امتحانية: عدم توافق الواجهات يعني: اختلاف في أسماء الدوال، عدد المعاملات، أو أنواع البيانات المرجعة."
    },
    {
      "n": 75,
      "type": "mcq",
      "ref": "L3-S016",
      "q_ar": "كيف يقوم كائن `Adapter` بحل مشكلة عدم التوافق بين العميل والمكتبة الخارجية؟",
      "q_en": "How does the `Adapter` object solve the incompatibility between Client and external library?",
      "opts": [
        {
          "ar": "بحذف الكود الخارجي وإعادة كتابة خوارزميات البنك بالكامل من الصفر داخل المتجر.",
          "ok": false,
          "why": "هذا مكلف جداً ومستحيل بالنسبة لخدمات خارجية كبرى.",
          "en": "By discarding the external library and rewriting payment gateway algorithms from scratch inside the store."
        },
        {
          "ar": "بتنفيذ الواجهة الهدف (Target Interface) التي يفهمها العميل، والاحتفاظ بمرجع داخلي لكائن Adaptee، وترجمة الاستدعاء الوارد إلى استدعاء يفهمه Adaptee.",
          "ok": true,
          "why": "المحول يعمل كمترجم فوري؛ يستقبل الطلب بصيغة العميل ويمرره للخدمة الخارجية بصيغتها الخاصة.",
          "en": "By implementing the Target Interface expected by the client, maintaining an internal reference to the Adaptee, and translating client calls into Adaptee-compatible invocations."
        },
        {
          "ar": "بإجبار العميل على كتابة جمل شرطية لفحص نوع البنك قبل كل عملية دفع.",
          "ok": false,
          "why": "هذا يعيدنا لمشكلة الترابط الوثيق وانتهاك مبدأ OCP.",
          "en": "By requiring clients to evaluate conditional statements before every payment transaction."
        },
        {
          "ar": "بتحويل لغة البرنامج إلى لغة الآلة الثنائية.",
          "ok": false,
          "why": "هذه مهمة المترجم وليست مهمة نمط المحول.",
          "en": "By converting the source code into raw binary machine instructions."
        }
      ],
      "tip": "وقفة امتحانية: Adapter يلف (Wraps) كائن Adaptee وينفذ (Implements) واجهة Target."
    },
    {
      "n": 76,
      "type": "mcq",
      "ref": "L3-S018",
      "q_ar": "في مخطط فئات UML لنمط محول الكائنات (Object Adapter)، ما نوع العلاقة بين `Adapter` و `Adaptee`؟",
      "q_en": "In the Object Adapter UML class diagram, what type of relationship exists between `Adapter` and `Adaptee`?",
      "opts": [
        {
          "ar": "علاقة وراثة صريحة (Inheritance / Generalization).",
          "ok": false,
          "why": "هذه في Class Adapter الذي يستخدم الوراثة المتعددة ونادراً ما يُستخدم.",
          "en": "Direct inheritance (Inheritance / Generalization)."
        },
        {
          "ar": "علاقة تكوين أو ارتباط (Composition / Association) حيث يحتوي Adapter على مرجع لكائن Adaptee كمتغير خاص.",
          "ok": true,
          "why": "Object Adapter يعتمد على التكوين (Composition) وهو الأسلوب المعياري الأكثر مرونة وأماناً في لغات مثل C# و Java.",
          "en": "Composition or Association, where the Adapter holds a private instance reference to the Adaptee."
        },
        {
          "ar": "علاقة تبعية عشوائية دون أي مرجع دائم.",
          "ok": false,
          "why": "المحول يمتلك مرجعاً دائماً للكائن غير المتوافق.",
          "en": "Transient dependency without any persistent reference."
        },
        {
          "ar": "لا توجد أي علاقة بينهما في المخطط.",
          "ok": false,
          "why": "وجود الرابط هو أساس عمل المحول.",
          "en": "There is no relationship between them in the diagram."
        }
      ],
      "tip": "وقفة امتحانية: Object Adapter يستخدم Composition (يحمل مرجعاً لـ Adaptee)؛ Class Adapter يستخدم Multiple Inheritance."
    },
    {
      "n": 77,
      "type": "mcq",
      "ref": "L3-S020",
      "q_ar": "ما هو الفارق بين محول الفئات (Class Adapter) ومحول الكائنات (Object Adapter)؟",
      "q_en": "What is the difference between Class Adapter and Object Adapter?",
      "opts": [
        {
          "ar": "Class Adapter يعمل على أجهزة الحاسوب و Object Adapter يعمل على الهواتف فقط.",
          "ok": false,
          "why": "لا علاقة له بنوع الجهاز.",
          "en": "Class Adapter runs on PCs, while Object Adapter runs only on smartphones."
        },
        {
          "ar": "Class Adapter يرث من الفئة الأصلية (يستخدم الوراثة المتعددة)، بينما Object Adapter يحتوي على كائن من الفئة الأصلية (يستخدم التكوين).",
          "ok": true,
          "why": "Class Adapter غير ممكن في لغات مثل C# و Java لأنها لا تدعم الوراثة المتعددة من الفئات، ولذلك Object Adapter هو المعتمد عملياً.",
          "en": "Class Adapter inherits from the Adaptee (using multiple inheritance), whereas Object Adapter wraps an instance of the Adaptee (using composition)."
        },
        {
          "ar": "Class Adapter مجاني بينما Object Adapter يتطلب رخصة تجارية.",
          "ok": false,
          "why": "أنماط التصميم مفاهيم معمارية عامة.",
          "en": "Class Adapter is open source, whereas Object Adapter requires a commercial license."
        },
        {
          "ar": "كلاهما متطابقان تماماً ولا يوجد أي فرق برمجي.",
          "ok": false,
          "why": "الفارق المعماري بين الوراثة والتكوين فارق حاسم.",
          "en": "They are completely identical with zero architectural distinction."
        }
      ],
      "tip": "وقفة امتحانية: في C# نستخدم دائماً Object Adapter لأن C# لا تدعم الوراثة المتعددة للفئات (Multiple Class Inheritance)."
    },
    {
      "n": 78,
      "type": "mcq",
      "ref": "L3-S024",
      "q_ar": "عند الرغبة في إضافة مزود دفع جديد (مثل Stripe) إلى جانب PayPal، كيف يحمينا نمط Adapter من انتهاك OCP؟",
      "q_en": "When adding a new payment provider (like Stripe), how does the Adapter pattern protect against OCP violation?",
      "opts": [
        {
          "ar": "بإلغاء بوابة PayPal واستبدالها بالكامل ببوابة Stripe.",
          "ok": false,
          "why": "المتجر يحتاج لدعم كافة البوابات معاً دون حذف القديم.",
          "en": "By deleting the PayPal gateway and replacing it entirely with Stripe."
        },
        {
          "ar": "بإنشاء محول جديد `StripeAdapter` ينفذ نفس الواجهة `IPaymentProcessor`، دون لمس أو تعديل كود العميل أو كود PayPal القديم.",
          "ok": true,
          "why": "نظام الدفع يتوسع بإضافة محولات جديدة فقط، مع بقاء الكود القديم مغلقاً ومستقراً ومحمياً من الأعطال.",
          "en": "By introducing a new `StripeAdapter` implementing the common `IPaymentProcessor` interface, without modifying or touching client code or existing PayPal code."
        },
        {
          "ar": "بتعديل شفرات خوادم شركة Stripe لتطابق أسماء دوال متجرنا.",
          "ok": false,
          "why": "لا نملك صلاحية تعديل خوادم الشركات العالمية.",
          "en": "By altering Stripe's remote API servers to match our local method signatures."
        },
        {
          "ar": "بإجبار المشتري على دفع نقدي يدوي في مقر الشركة.",
          "ok": false,
          "why": "هذا هروب من المشكلة البرمجية.",
          "en": "By mandating in-person cash payments at company headquarters."
        }
      ],
      "tip": "وقفة امتحانية: نمط Adapter يحقق مبدأ Open/Closed Principle (OCP) بدرجة امتياز عند دمج واجهات خارجية متعددة."
    },
    {
      "n": 79,
      "type": "mcq",
      "ref": "L3-S025",
      "q_ar": "ما هو النهج السيئ الشائع (Bad Approach) الذي يتبعه المبرمج المبتدئ للتعامل مع بوابات دفع متعددة بدون Adapter؟",
      "q_en": "What is the common bad approach used by beginner programmers to handle multiple payment gateways without Adapter?",
      "opts": [
        {
          "ar": "استخدام الواجهات والتجريدات المعمارية.",
          "ok": false,
          "why": "هذا الحل الهندسي السليم وليس النهج السيئ.",
          "en": "Using architectural abstractions and interfaces."
        },
        {
          "ar": "كتابة شروط `if (gateway == 'paypal') paypal.Send() else if (gateway == 'stripe') stripe.Charge()` متناثرة في كل مكان بالكود.",
          "ok": true,
          "why": "هذا النهج يخلق ترابطاً وثيقاً مع كل مكتبة خارجية، ويكسر OCP، ويفرض تعديل كل الشاشات عند إضافة أي بوابة جديدة.",
          "en": "Scattering `if (gateway == 'paypal') paypal.Send() else if (gateway == 'stripe') stripe.Charge()` branches throughout client code."
        },
        {
          "ar": "الاعتماد على نمط Factory Method لإنشاء الكائنات.",
          "ok": false,
          "why": "المصنع ممارسة ممتازة تتكامل مع المحولات.",
          "en": "Relying on the Factory Method pattern to instantiate objects."
        },
        {
          "ar": "كتابة اختبارات وحدة آلية للتحقق من الرصيد.",
          "ok": false,
          "why": "اختبارات الوحدة ممارسة احترافية ممتازة.",
          "en": "Writing automated unit tests to verify account balances."
        }
      ],
      "tip": "وقفة امتحانية: علامة غياب Adapter: وجود استدعاءات مباشرة لمكتبات خارجية متباينة داخل جمل switch/if في منطق الأعمال."
    },
    {
      "n": 80,
      "type": "mcq",
      "ref": "L3-S027",
      "q_ar": "في كود `StripeAdapter` في C#، ماذا تتضمن دالة `ProcessPayment(decimal amount)` داخلياً؟",
      "q_en": "In a C# `StripeAdapter`, what does the `ProcessPayment(decimal amount)` method contain internally?",
      "opts": [
        {
          "ar": "كوداً يتصل بقاعدة البيانات ويحذف سجل العميل.",
          "ok": false,
          "why": "المحول يختص بتفويض استدعاء الدفع وليس بحذف البيانات.",
          "en": "Code connecting to the database and dropping the customer record."
        },
        {
          "ar": "استدعاءً لدالة كائن Stripe الأصلية (مثل `_stripeService.MakeTransaction(amount, 'USD')`) وإرجاع النتيجة بالصيغة المتوقعة.",
          "ok": true,
          "why": "وظيفة المحول هي تفويض الاستدعاء للكائن غير المتوافق مع توفيق المعاملات والأنواع.",
          "en": "An internal call delegating to Stripe's native method (e.g., `_stripeService.MakeTransaction(amount, \"USD\")`) and adapting the returned result."
        },
        {
          "ar": "حلقة تكرار لانهائية لانتظار رد البنك بشكل متزامن ومعطل.",
          "ok": false,
          "why": "هذا يعطل الخادم وممارسة برمجية سيئة.",
          "en": "An infinite loop blocking execution while awaiting bank confirmation."
        },
        {
          "ar": "طباعة نص فارغ على الشاشة دون أي استدعاء خارجي.",
          "ok": false,
          "why": "المحول يجب أن ينفذ العملية المطلوبة فعلياً.",
          "en": "Printing an empty string to the console without calling external services."
        }
      ],
      "tip": "وقفة امتحانية: كود المحول يكون بسيطاً جداً: ترجمة المعاملات وتفويض النداء (Delegation) للكائن الحقيقي Adaptee."
    },
    {
      "n": 81,
      "type": "mcq",
      "ref": "L3-S031",
      "q_ar": "متى يُنصح بعدم استخدام نمط المحول (When NOT to use Adapter Pattern)؟",
      "q_en": "When is it recommended NOT to use the Adapter Pattern?",
      "opts": [
        {
          "ar": "عندما تختلف أسماء الدوال في مكتبة خارجية لا نملك شفرتها المصدرية.",
          "ok": false,
          "why": "هذه هي الحالة النموذجية الإلزامية لاستخدام Adapter.",
          "en": "When method signatures differ in an external library whose source code we do not own."
        },
        {
          "ar": "عندما نكون نحن من يصمم ويبني كلا الطرفين (العميل والخدمة) من الصفر، حيث يكون من الأفضل والأبسط توحيد الواجهات مباشرة من البداية.",
          "ok": true,
          "why": "إذا كان الكود بالكامل تحت سيطرتنا، فالأصح هندسياً هو تصميم واجهات متوافقة أصلاً بدلاً من إدخال طبقات تحويل زائدة تعقد النظام.",
          "en": "When we are designing and building both client and service from scratch, making it cleaner to standardize interfaces directly from the start."
        },
        {
          "ar": "عندما نريد حماية النظام من الاختراق الأمني.",
          "ok": false,
          "why": "المحول لا يتعارض مع الأمان.",
          "en": "When the goal is securing the system against cyberattacks."
        },
        {
          "ar": "عند كتابة تطبيقات الويب في بيئة .NET.",
          "ok": false,
          "why": "المحول يُستخدم بكثرة في تطبيقات الويب.",
          "en": "When authoring web applications within the .NET ecosystem."
        }
      ],
      "tip": "وقفة امتحانية: لا تستخدم Adapter إذا كنت تملك الكودين وتستطيع توحيد واجهتهما مباشرة؛ استخدمه للكود القديم أو المكتبات الخارجية."
    },
    {
      "n": 82,
      "type": "mcq",
      "ref": "L3-S036",
      "q_ar": "ما هو الهدف المعماري الرئيسي لنمط الواجهة (Facade Design Pattern)؟",
      "q_en": "What is the primary architectural goal of the Facade Design Pattern?",
      "opts": [
        {
          "ar": "تحويل واجهة غير متوافقة إلى واجهة أخرى لمطابقة كائن مفرد.",
          "ok": false,
          "why": "هذا تعريف نمط المحول (Adapter) وليس Facade.",
          "en": "Converting an incompatible interface into another to match a single object."
        },
        {
          "ar": "توفير واجهة موحدة، مبسطة، وعالية المستوى لمجموعة معقدة ومتشابكة من الفئات والأنظمة الفرعية (Subsystems).",
          "ok": true,
          "why": "الـ Facade يقدم واجهة سهلة تغطي على تعقيدات وتشعبات المكتبات الداخلية وتفكك ترابط العميل معها.",
          "en": "Providing a unified, simplified, and higher-level interface to a complex and intricate subsystem or set of classes."
        },
        {
          "ar": "منع إنشاء أكثر من نسخة واحدة من النظام بأكمله.",
          "ok": false,
          "why": "هذا تعريف نمط Singleton.",
          "en": "Preventing the instantiation of more than one instance of the entire system."
        },
        {
          "ar": "إضافة سلوكيات جديدة للكائنات أثناء وقت التشغيل.",
          "ok": false,
          "why": "هذا تعريف نمط Decorator.",
          "en": "Dynamically adding new behaviors to objects at runtime."
        }
      ],
      "tip": "وقفة امتحانية: Facade = مدخل وحيد مبسط وموحد يخفي وراءه شبكة معقدة من الأنظمة الفرعية (Subsystems)."
    },
    {
      "n": 83,
      "type": "mcq",
      "ref": "L3-S034",
      "q_ar": "في سيناريو متجر إلكتروني معقد (Online Shopping)، ما المشكلة في جعل العميل يتعامل مباشرة مع الخدمات الفرعية بدون Facade؟",
      "q_en": "In an e-commerce scenario, what is the problem with having the client interact directly with subsystems without Facade?",
      "opts": [
        {
          "ar": "أن العميل سيضطر لمعرفة والتعامل مع فئات Inventory, Payment, Invoice, Shipping وتنسيق ترتيب استدعائها الصحيح بنفسه، مما يخلق ترابطاً وثيقاً معقداً.",
          "ok": true,
          "why": "الترابط المباشر يجهد العميل، ويكرر كود التنسيق في عدة شاشات، وأي تعديل في إحدى الخدمات يكسر كود العميل.",
          "en": "The client must know and interact with Inventory, Payment, Invoice, and Shipping classes directly, orchestrating invocation order and creating complex tight coupling."
        },
        {
          "ar": "أن المتجر سيفقد كافة منتجاته الرقمية المخزنة.",
          "ok": false,
          "why": "لا علاقة له بفقدان المنتجات.",
          "en": "The store will lose all its digital inventory records."
        },
        {
          "ar": "أن بطاقة الشبكة ستتوقف عن العمل بسبب كثرة الفئات.",
          "ok": false,
          "why": "المشكلة في جودة الكود والترابط المعماري.",
          "en": "The network card will fail due to excessive class declarations."
        },
        {
          "ar": "أن لغة C# تمنع استدعاء أكثر من خدمتين في نفس الوقت.",
          "ok": false,
          "why": "C# تتيح استدعاء أي عدد من الخدمات.",
          "en": "C# disallows invoking more than two services concurrently."
        }
      ],
      "tip": "وقفة امتحانية: بدون Facade = Tight Coupling بين العميل وعشرات الأنظمة الفرعية؛ مع Facade = العميل ينادي دالة واحدة منسقة."
    },
    {
      "n": 84,
      "type": "mcq",
      "ref": "L3-S038",
      "q_ar": "في مخطط UML لنمط Facade، كيف تكون العلاقة بين فئة `Facade` والأنظمة الفرعية `Subsystems`؟",
      "q_en": "In the Facade UML diagram, what is the relationship between the `Facade` class and the `Subsystems`?",
      "opts": [
        {
          "ar": "وراثة متتالية حيث ترث Facade من جميع الأنظمة الفرعية معاً.",
          "ok": false,
          "why": "Facade لا ترث من الأنظمة الفرعية.",
          "en": "Multiple inheritance where Facade inherits from all subsystems simultaneously."
        },
        {
          "ar": "علاقة ارتباط أو تكوين (Association/Composition)، حيث تمتلك Facade مراجع للأنظمة الفرعية وتنسق العمل بينها.",
          "ok": true,
          "why": "فئة Facade تملك كائنات الخدمات (Inventory, Payment, Shipping) وتستدعي دوالها بالترتيب المنطقي السليم.",
          "en": "Association or Composition, where the Facade holds references to subsystem components and orchestrates interactions among them."
        },
        {
          "ar": "لا توجد أي علاقة بينهما إطلاقاً في المخطط.",
          "ok": false,
          "why": "الـ Facade مبنية بالكامل لتنسيق هذه الأنظمة.",
          "en": "There is no relationship between them in the UML diagram."
        },
        {
          "ar": "علاقة تنافس على نفس المورد الذاكري المحدود.",
          "ok": false,
          "why": "ليست علاقة UML معمارية.",
          "en": "Contention for the same scarce heap memory resource."
        }
      ],
      "tip": "وقفة امتحانية: Facade لا تلغي الأنظمة الفرعية ولا تعزلها تماماً، بل تقدم مساراً مبسطاً لمن يريد تنفيذ عمليات شائعة دون تعقيد."
    },
    {
      "n": 85,
      "type": "mcq",
      "ref": "L3-S041",
      "q_ar": "ما هي العملية عالية المستوى (High-Level Operation) التي تقدمها فئة `OrderFacade` للعميل في المتجر؟",
      "q_en": "What high-level operation does the `OrderFacade` class provide to the client in an e-commerce store?",
      "opts": [
        {
          "ar": "إجبار العميل على كتابة استعلامات SQL بنفسه.",
          "ok": false,
          "why": "هذا كسر تام للتجريد والعمارة النظيفة.",
          "en": "Forcing the client to write low-level SQL queries manually."
        },
        {
          "ar": "دالة موحدة واحدة مثل `PlaceOrder(orderRequest)` تتكفل داخلياً بفحص المخزون، معالجة الدفع، إنشاء الفاتورة، وجدولة الشحن.",
          "ok": true,
          "why": "العميل يستدعي أمراً واحداً بسيطاً، والواجهة تتولى كامل التنسيق المعقد خلف الستار.",
          "en": "A single high-level method like `PlaceOrder(orderRequest)` that internally orchestrates stock verification, payment processing, invoice generation, and shipping scheduling."
        },
        {
          "ar": "دالة لإعادة تشغيل خادم الويب عند كل طلب شراء.",
          "ok": false,
          "why": "هذا يعطل الخادم.",
          "en": "A method to restart the web server upon every purchase request."
        },
        {
          "ar": "دالة ترجع نصاً ثابتاً دون تنفيذ أي شيء حقيقي.",
          "ok": false,
          "why": "الواجهة تنفذ العمليات الحقيقية عبر الأنظمة الفرعية.",
          "en": "A method that returns a static literal without executing any real logic."
        }
      ],
      "tip": "وقفة امتحانية: فئة Facade تحول 10 خطوات معقدة ومتشابكة إلى دالة واحدة عالية المستوى وسهلة الاستخدام."
    },
    {
      "n": 86,
      "type": "mcq",
      "ref": "L3-S045",
      "q_ar": "هل يمنع نمط Facade العميل المتقدم من الوصول إلى الأنظمة الفرعية واستخدامها مباشرة إذا احتاج لتخصيص دقيق؟",
      "q_en": "Does the Facade pattern prevent an advanced client from accessing subsystems directly if low-level customization is needed?",
      "opts": [
        {
          "ar": "نعم، النمط يشفر الأنظمة الفرعية ويحظر الوصول إليها نهائياً من أي كود خارجي.",
          "ok": false,
          "why": "الـ Facade ليست جداراً نارياً مغلقاً؛ هي مجرد واجهة مبسطة للمهام الشائعة.",
          "en": "Yes, the pattern encapsulates and strictly locks out subsystems from external code."
        },
        {
          "ar": "لا، نمط Facade يوفر تبسيطاً للمهام الشائعة، لكنه يترك الأنظمة الفرعية متاحة للعملاء الذين يحتاجون لتحكم منخفض المستوى وتخصيص دقيق.",
          "ok": true,
          "why": "هذه إحدى أعظم مزايا Facade؛ التبسيط دون التضحية بالقدرة على الوصول المباشر عند الضرورة.",
          "en": "No, Facade provides a simplified interface for common tasks while keeping subsystem classes accessible for clients requiring granular, low-level control."
        },
        {
          "ar": "نعم، لأن لغة البرمجة تحذف الفئات الفرعية بمجرد إنشاء Facade.",
          "ok": false,
          "why": "الفئات الفرعية تظل موجودة وتعمل بشكل مستقل.",
          "en": "Yes, because the compiler deletes subsystem classes once a Facade is defined."
        },
        {
          "ar": "النمط يمنع الوصول في أيام العطلات الأسبوعية فقط.",
          "ok": false,
          "why": "غير صحيح برمجياً.",
          "en": "The pattern restricts access during weekends only."
        }
      ],
      "tip": "وقفة امتحانية: Facade لا تغلق الوصول للأنظمة الفرعية؛ هي تقدم خياراً مبسطاً لمن يريد، مع بقاء الأنظمة الأصلية متاحة لمن يحتاج تفاصيل إضافية."
    },
    {
      "n": 87,
      "type": "mcq",
      "ref": "L3-S047",
      "q_ar": "ما هو الغرض المعماري الأساسي لنمط الوكيل (Proxy Design Pattern)؟",
      "q_en": "What is the primary architectural purpose of the Proxy Design Pattern?",
      "opts": [
        {
          "ar": "تسريع دوران مروحة المعالج لتقليل درجة الحرارة.",
          "ok": false,
          "why": "هذه وظيفة عتادية لنظام التبريد.",
          "en": "Accelerating cooling fan rotation speed to lower CPU temperatures."
        },
        {
          "ar": "توفير كائن بديل أو نائب (Surrogate/Placeholder) للتحكم في الوصول إلى كائن حقيقي آخر وإدارته وحمايته.",
          "ok": true,
          "why": "الوكيل يعترض الطلبات الموجهة للكائن الحقيقي ليطبق عمليات مثل التحقق الأمني، التحميل الكسول، أو التسجيل قبل تمرير الطلب.",
          "en": "Providing a surrogate or placeholder object to control, manage, and protect access to another real object."
        },
        {
          "ar": "حذف الفئات غير الموروثة من المشروع.",
          "ok": false,
          "why": "ليس من وظائف الوكيل.",
          "en": "Deleting uninherited classes from the software project."
        },
        {
          "ar": "تحويل نصوص الشاشة من الإنجليزية إلى العربية.",
          "ok": false,
          "why": "هذه ترجمة نصية (Localization) وليست وظيفة نمط الوكيل.",
          "en": "Translating UI text strings from English to Arabic."
        }
      ],
      "tip": "وقفة امتحانية: Proxy = كائن نائب يتحكم في الوصول للكائن الحقيقي (Access Control & Management)."
    },
    {
      "n": 88,
      "type": "mcq",
      "ref": "L3-S048",
      "q_ar": "في أي الحالات التالية يكون تطبيق نمط الوكيل الافتراضي (Virtual Proxy) مبرراً هندسياً؟",
      "q_en": "In which scenario is the use of a Virtual Proxy architecturally justified?",
      "opts": [
        {
          "ar": "عندما يكون إنشاء الكائن سريعاً جداً ولا يستهلك أي ذاكرة.",
          "ok": false,
          "why": "في هذه الحالة البسيطة لا حاجة لأي وكيل.",
          "en": "When object instantiation is instantaneous and uses negligible memory."
        },
        {
          "ar": "عندما يكون الكائن الحقيقي مكلفاً جداً في الإنشاء واستهلاك الموارد (مثل صورة عالية الدقة أو اتصال ضخم)، فنستخدم الوكيل لتأجيل إنشائه حتى لحظة الحاجة الفعلية (Lazy Loading).",
          "ok": true,
          "why": "الوكيل الافتراضي ينشئ كائناً خفيفاً أولاً، ولا يحمل البيانات الثقيلة إلا عندما يستدعي المستخدم دالة العرض فعلياً.",
          "en": "When the real object is resource-intensive or slow to instantiate (e.g., high-resolution image, heavyweight connection), and the proxy defers creation until actual demand (Lazy Loading)."
        },
        {
          "ar": "عندما نريد منع جميع المستخدمين من استخدام النظام نهائياً.",
          "ok": false,
          "why": "الهدف هو تحسين الأداء وتجربة الاستخدام وليس التعطيل.",
          "en": "When blocking all users permanently from system access."
        },
        {
          "ar": "عندما نريد تكرار الكائن 1000 مرة في الذاكرة.",
          "ok": false,
          "why": "هذا يهدر الذاكرة وينافي الغرض المعماري.",
          "en": "When duplicating an object 1,000 times in memory."
        }
      ],
      "tip": "وقفة امتحانية: Virtual Proxy = التحميل الكسول (Lazy Loading) للكائنات الثقيلة والباهظة في الذاكرة والشبكة."
    },
    {
      "n": 89,
      "type": "mcq",
      "ref": "L3-S050",
      "q_ar": "ما هي القاعدة المعمارية الذهبية في تصميم واجهات كائن الوكيل (Proxy) والكائن الحقيقي (RealSubject)؟",
      "q_en": "What is the golden architectural rule in designing interfaces for Proxy and RealSubject?",
      "opts": [
        {
          "ar": "يجب أن يمتلك الوكيل واجهة مختلفة تماماً عن الكائن الحقيقي لكي لا يشتبه العميل بهما.",
          "ok": false,
          "why": "إذا اختلفت الواجهة أصبح النمط Adapter وليس Proxy!",
          "en": "The proxy must implement an entirely different interface to prevent client confusion."
        },
        {
          "ar": "يجب أن ينفذ كائن الوكيل (Proxy) والكائن الحقيقي (RealSubject) نفس الواجهة المشتركة (Subject Interface) تماماً، بحيث يمكن للعميل استخدام الوكيل كبديل شفاف دون أن يلاحظ أي فرق.",
          "ok": true,
          "why": "هذا هو التماثل المعماري في Proxy؛ العميل يعتقد أنه يتعامل مع الكائن الحقيقي بينما هو يتعامل مع الوكيل الشفاف.",
          "en": "Both Proxy and RealSubject must implement the exact same Subject interface, allowing the client to use the proxy transparently without knowing the difference."
        },
        {
          "ar": "يجب أن يرث الوكيل من فئة Thread في نظام التشغيل.",
          "ok": false,
          "why": "الوكيل نمط كائني عام ولا يشترط كونه Thread.",
          "en": "The proxy must inherit directly from the OS Thread class."
        },
        {
          "ar": "يجب كتابة كود الوكيل بلغة برمجية مغايرة للغة الكائن الحقيقي.",
          "ok": false,
          "why": "الكود يكتب بنفس بيئة التطوير.",
          "en": "The proxy must be written in a different programming language than the RealSubject."
        }
      ],
      "tip": "وقفة امتحانية: الفرق الجوهري: Adapter يغير الواجهة لتطابق العميل؛ Proxy ينفذ نفس الواجهة بالضبط للتحكم في الوصول."
    },
    {
      "n": 90,
      "type": "mcq",
      "ref": "L3-S052",
      "q_ar": "ما الدور الذي يؤديه وكيل الحماية (Protection Proxy) في هندسة أمن البرمجيات؟",
      "q_en": "What role does a Protection Proxy play in software security engineering?",
      "opts": [
        {
          "ar": "إطفاء جهاز الحاسوب عند كتابة كلمة مرور خاطئة.",
          "ok": false,
          "why": "هذا إجراء عتادي متطرف وليس وكيل حماية برمجياً.",
          "en": "Powering off the machine when an incorrect password is entered."
        },
        {
          "ar": "فحص هوية المستخدم وصلاحياته وأدواره الأمنية (Role-Based Access Control) قبل السماح بتمرير الطلب لتنفيذه على الكائن الحقيقي.",
          "ok": true,
          "why": "Protection Proxy يعزل منطق التحقق الأمني عن منطق الأعمال الأصلي؛ إذا كان المستخدم يملك الصلاحية مرر الطلب، وإلا رمى استثناء Unauthorized.",
          "en": "Verifying user identity, permissions, and security roles (Role-Based Access Control) before delegating method calls to the RealSubject."
        },
        {
          "ar": "تشفير القرص الصلب بالكامل.",
          "ok": false,
          "why": "هذه مهمة برمجيات التشفير بنظام التشغيل.",
          "en": "Encrypting the entire physical hard disk."
        },
        {
          "ar": "منع وصول خيوط المعالجة إلى الذاكرة المؤقتة.",
          "ok": false,
          "why": "لا علاقة له بالذاكرة المخبأة.",
          "en": "Blocking thread access to CPU cache memory."
        }
      ],
      "tip": "وقفة امتحانية: أنواع Proxy الثلاثة الشائعة: 1. Virtual (تأجيل التحميل) · 2. Protection (فحص الصلاحيات والأمان) · 3. Logging/Remote (سجلات وشبكة)."
    },
    {
      "n": 91,
      "type": "mcq",
      "ref": "L3-S056",
      "q_ar": "ما هو الهدف المعماري الأساسي لنمط المزيّن (Decorator Design Pattern)؟",
      "q_en": "What is the primary architectural goal of the Decorator Design Pattern?",
      "opts": [
        {
          "ar": "تغيير واجهة الكائن لتناسب عميلاً لا يفهمها.",
          "ok": false,
          "why": "هذا تعريف نمط المحول (Adapter).",
          "en": "Altering an object's interface to suit an incompatible client."
        },
        {
          "ar": "إضافة مسؤوليات وخصائص وسلوكيات جديدة للكائن بشكل ديناميكي ومرن أثناء وقت التشغيل، كبديل مرن للوراثة الصلبة.",
          "ok": true,
          "why": "المزيّن يلتف حول الكائن الأصلي ويضيف ميزات جديدة أثناء التشغيل دون الحاجة لإنشاء فئات فرعية جامدة.",
          "en": "Attaching additional responsibilities, properties, and behaviors to an object dynamically at runtime as a flexible alternative to subclassing."
        },
        {
          "ar": "توفير نسخة وحيدة من الفئة في الذاكرة.",
          "ok": false,
          "why": "هذا تعريف نمط Singleton.",
          "en": "Ensuring a single unique instance of a class exists in memory."
        },
        {
          "ar": "إلغاء استخدام الخصائص والدوال في لغة C#.",
          "ok": false,
          "why": "النمط يعتمد كلياً على الخصائص والدوال.",
          "en": "Eliminating properties and methods from C#."
        }
      ],
      "tip": "وقفة امتحانية: Decorator يضيف سلوكاً إضافياً (Dynamic Responsibilities) أثناء وقت التشغيل دون تغيير الواجهة."
    },
    {
      "n": 92,
      "type": "mcq",
      "ref": "L3-S058",
      "q_ar": "ما هي مشكلة 'الانفجار الفئوي' (Class Explosion) التي تظهر عند محاولة توسيع الكائنات بالوراثة بدلاً من Decorator؟",
      "q_en": "What is the 'Class Explosion' problem that occurs when attempting to extend objects via inheritance instead of Decorator?",
      "opts": [
        {
          "ar": "تدمير المعالج بسبب الحرارة الناتجة عن الوراثة.",
          "ok": false,
          "why": "كلام غير منطقي.",
          "en": "Hardware thermal throttling caused by deep inheritance trees."
        },
        {
          "ar": "تضخم هائل ومتسارع في عدد الفئات الفرعية لتغطية كل توليفة ممكنة من الميزات والخيارات (مثل فئة لكل تركيبة من إضافات القهوة).",
          "ok": true,
          "why": "إذا كان لديك 5 إضافات، فإن الوراثة تتطلب إنشاء عشرات الفئات لتغطية كل الاحتمالات؛ بينما المزيّن يحلها بـ 5 فئات مزينة فقط يتم تركيبها بمرونة.",
          "en": "An exponential explosion of subclasses created to cover every permutation of optional features (e.g., a class for each coffee add-on combination)."
        },
        {
          "ar": "حذف ملفات المشروع تلقائياً من نظام الملفات.",
          "ok": false,
          "why": "لا علاقة له بنظام الملفات.",
          "en": "Automated deletion of source files from the filesystem."
        },
        {
          "ar": "توقف لغة C# عن دعم البرمجة الكائنية.",
          "ok": false,
          "why": "غير صحيح إطلاقاً.",
          "en": "C# terminating runtime support for object-oriented programming."
        }
      ],
      "tip": "وقفة امتحانية: Class Explosion = تضخم عدد الفئات بالوراثة الصلبة؛ وحلها المعماري المباشر هو: Decorator Pattern."
    },
    {
      "n": 93,
      "type": "mcq",
      "ref": "L3-S060",
      "q_ar": "كيف يحل نمط المزيّن (Decorator) مشكلة خيارات وإضافات المنتجات (مثل القهوة) دون وراثة متفرعة؟",
      "q_en": "How does the Decorator pattern solve the product addons problem (like coffee options) without branched inheritance?",
      "opts": [
        {
          "ar": "بإلغاء بيع الإضافات والزام العميل بنوع واحد فقط.",
          "ok": false,
          "why": "هذا إلغاء لمتطلبات العمل.",
          "en": "By discontinuing optional add-ons and forcing clients to purchase a single base option."
        },
        {
          "ar": "بإنشاء مزينات مستقلة (مثل MilkDecorator, SugarDecorator) تلتف حول كائن القهوة الأساسي وتضيف سعرها وسلوكها أثناء وقت التشغيل.",
          "ok": true,
          "why": "يمكن للعميل لف القهوة بالحليب ثم لف الناتج بالسكر `new Sugar(new Milk(new SimpleCoffee()))` بمرونة تامة ولا نهائية.",
          "en": "By creating independent decorators (e.g., MilkDecorator, SugarDecorator) that wrap the core coffee object and layer their behavior and cost dynamically at runtime."
        },
        {
          "ar": "بحفظ كود الإضافات في ملفات وورد على جهاز المستخدم.",
          "ok": false,
          "why": "غير صحيح برمجياً.",
          "en": "By saving add-on code into Microsoft Word documents on client machines."
        },
        {
          "ar": "بتحويل لغة البرنامج إلى لغة الآلة مباشرة.",
          "ok": false,
          "why": "هذه مهمة المترجم.",
          "en": "By translating the application directly into machine code."
        }
      ],
      "tip": "وقفة امتحانية: في Decorator: يمكنك تجميع وتغليف الميزات في سلاسل متداخلة أثناء وقت التشغيل بكل حرية."
    },
    {
      "n": 94,
      "type": "mcq",
      "ref": "L3-S062",
      "q_ar": "ما هي المكونات الأربعة الأساسية في مخطط فئات UML لنمط Decorator؟",
      "q_en": "What are the four primary participants in the Decorator pattern UML class diagram?",
      "opts": [
        {
          "ar": "Client, Facade, SubsystemA, SubsystemB.",
          "ok": false,
          "why": "هذه أطراف نمط Facade.",
          "en": "Client, Facade, SubsystemA, SubsystemB."
        },
        {
          "ar": "Component (الواجهة الموحدة), ConcreteComponent (المكون الأساسي الأصلي), BaseDecorator (المزيّن الأساسي الحاوي), ConcreteDecorators (المزينات الملموسة).",
          "ok": true,
          "why": "هذه هي الأطراف القياسية الأربعة لنمط المزيّن المعتمدة في GoF.",
          "en": "Component, ConcreteComponent, BaseDecorator, and ConcreteDecorators."
        },
        {
          "ar": "Target, Adapter, Adaptee, Client.",
          "ok": false,
          "why": "هذه أطراف نمط Adapter.",
          "en": "Target, Adapter, Adaptee, Client."
        },
        {
          "ar": "Subject, Observer, ConcreteSubject, ConcreteObserver.",
          "ok": false,
          "why": "هذه أطراف نمط Observer.",
          "en": "Subject, Observer, ConcreteSubject, ConcreteObserver."
        }
      ],
      "tip": "وقفة امتحانية: BaseDecorator ينفذ واجهة Component وفي نفس الوقت يمتلك مرجعاً لكائن من نوع Component (Is-A + Has-A معاً)!"
    },
    {
      "n": 95,
      "type": "mcq",
      "ref": "L3-S064",
      "q_ar": "ما هي السمة المعمارية الفريدة في كلاس `BaseDecorator` التي تجعله يجمع بين الوراثة والتكوين في آن واحد؟",
      "q_en": "What unique architectural trait allows `BaseDecorator` to combine inheritance and composition simultaneously?",
      "opts": [
        {
          "ar": "أنه يرث من نظام التشغيل مباشرة دون واجهات.",
          "ok": false,
          "why": "لا علاقة له بنظام التشغيل.",
          "en": "It inherits directly from the operating system kernel without interfaces."
        },
        {
          "ar": "أنه ينفذ واجهة `Component` (علاقة Is-A) وفي نفس الوقت يحتوي على حقل داخلي من نوع `Component` (علاقة Has-A) ليمرر الطلبات إليه.",
          "ok": true,
          "why": "هذا الجمع العبقري يسمح للمزيّن بأن يتصرف كأنه المكون الأصلي أمام العميل، مع قدرته على الالتفاف حول أي مكون آخر وإضافة سلوك له.",
          "en": "It implements the `Component` interface ('is-a') while simultaneously aggregating an internal reference to a `Component` ('has-a') to delegate requests."
        },
        {
          "ar": "أنه يحتوي على منشئ خاص يمنع إنشاء أي كائن منه.",
          "ok": false,
          "why": "المنشئ يستقبل كائن Component لتغليفه.",
          "en": "It has a private constructor preventing any instantiation."
        },
        {
          "ar": "أنه يحذف المتغيرات الساكنة من الذاكرة العشوائية.",
          "ok": false,
          "why": "ليس من خصائص المزيّن.",
          "en": "It purges static variables from RAM."
        }
      ],
      "tip": "وقفة امتحانية: فخ متكرر: Decorator يجمع بين Is-A (ينفذ الواجهة ليتطابق معها) و Has-A (يحتوي المكون ليزيّنه)."
    },
    {
      "n": 96,
      "type": "mcq",
      "ref": "L3-S065",
      "q_ar": "ما هو أشهر تطبيق عملي واقعي لنمط Decorator في مكتبات بيئة .NET الرسمية؟",
      "q_en": "What is the most famous real-world application of the Decorator pattern in official .NET libraries?",
      "opts": [
        {
          "ar": "أداة كتابة الأوامر في شاشة الكونسول `Console.WriteLine`.",
          "ok": false,
          "why": "هذه دالة إدخال وإخراج بسيطة.",
          "en": "The console output utility `Console.WriteLine`."
        },
        {
          "ar": "فئات تدفق البيانات (Streams) مثل `GZipStream(CryptoStream(FileStream))` لتزيين قراءة الملفات بالتشفير والضغط التلقائي.",
          "ok": true,
          "why": "مكتبة System.IO في .NET مبنية بالكامل على نمط Decorator؛ حيث يلتف كائن تدفق حول آخر لإضافة ضغط أو تشفير بسلاسة تامة.",
          "en": "Stream classes such as `GZipStream(CryptoStream(FileStream))` wrapping I/O streams with automated compression and encryption."
        },
        {
          "ar": "خوارزمية جمع رقمين في دالة Math.Add.",
          "ok": false,
          "why": "عملية حسابية أولية.",
          "en": "The two-number addition algorithm in Math.Add."
        },
        {
          "ar": "أداة فحص سرعة كابل الشبكة المحلي.",
          "ok": false,
          "why": "أداة فحص عتادية.",
          "en": "The Ethernet cable diagnostic utility."
        }
      ],
      "tip": "وقفة امتحانية: مكتبات الـ Streams في Java و .NET هي الدليل القياسي على نمط Decorator: Stream يزيّن Stream آخر."
    },
    {
      "n": 97,
      "type": "mcq",
      "ref": "L3-S067",
      "q_ar": "ما هو الفارق الحاسم بين الأنماط الهيكلية الأربعة: Adapter و Facade و Proxy و Decorator في الاختبار النهائي؟",
      "q_en": "What is the decisive difference between Adapter, Facade, Proxy, and Decorator for the final exam?",
      "opts": [
        {
          "ar": "Adapter للطباعة، Facade للشبكات، Proxy للحسابات، و Decorator للألوان.",
          "ok": false,
          "why": "تصنيف غير علمي إطلاقاً.",
          "en": "Adapter is for printing, Facade for networking, Proxy for calculation, and Decorator for styling."
        },
        {
          "ar": "Adapter: يغير الواجهة لتناسب العميل؛ Facade: يقدم واجهة جديدة مبسطة لأنظمة معقدة؛ Proxy: يحتفظ بنفس الواجهة للتحكم بالوصول؛ Decorator: يحتفظ بنفس الواجهة لإضافة ميزات وسلوكيات جديدة.",
          "ok": true,
          "why": "هذه هي المقارنة المعمارية الذهبية الأكثر وروداً في اختبارات الدكتورة بيداء لعلع.",
          "en": "Adapter converts an incompatible interface; Facade simplifies access to complex subsystems; Proxy keeps the same interface to control access; Decorator keeps the same interface to dynamically add behaviors."
        },
        {
          "ar": "جميع هذه الأنماط متطابقة تماماً ويمكن استبدال أي منها بالآخر عشوائياً.",
          "ok": false,
          "why": "لكل نمط قصد معماري (Intent) مختلف تماماً.",
          "en": "All these patterns are structurally identical and interchangeable."
        },
        {
          "ar": "Adapter إنشائي، Facade سلوكي، Proxy هيكلي، و Decorator غير معترف به.",
          "ok": false,
          "why": "جميع هذه الأنماط الأربعة هيكلية (Structural) بالكامل.",
          "en": "Adapter is Creational, Facade is Behavioral, Proxy is Structural, and Decorator is unofficial."
        }
      ],
      "tip": "وقفة امتحانية: المعادلة الذهبية: Adapter (تغيير واجهة) · Facade (تبسيط واجهة) · Proxy (تحكم بالوصول) · Decorator (إضافة سلوك ديناميكي)."
    },
    {
      "n": 98,
      "type": "mcq",
      "ref": "L3-S001",
      "q_ar": "ما هو المفهوم الهيكلي الأساسي الذي يربط بين كائنات النظام في الأنماط الهيكلية؟",
      "q_en": "What is the core structural concept connecting system objects in structural patterns?",
      "opts": [
        {
          "ar": "إلغاء المراجع بين الكائنات والاعتماد على الملفات النصية فقط.",
          "ok": false,
          "why": "الملفات النصية بطيئة ولا تحقق التكوين الكائني في الذاكرة.",
          "en": "Eliminating object references and relying solely on text files."
        },
        {
          "ar": "تركيب الكائنات وتجميعها (Object Composition) لتوفير وظائف جديدة دون كسر استقلالية كل كائن.",
          "ok": true,
          "why": "الأنماط الهيكلية تعتمد على تركيب الكائنات عبر المراجع لتحقيق وظائف معقدة بمرونة عالية.",
          "en": "Object Composition to provide new functionality while preserving the autonomy and decoupling of each object."
        },
        {
          "ar": "تكرار نفس الكود في جميع الفئات.",
          "ok": false,
          "why": "هذا ينتهك مبدأ DRY.",
          "en": "Duplicating the same code across all classes."
        },
        {
          "ar": "إجبار جميع الكائنات على أن تكون ساكنة (static).",
          "ok": false,
          "why": "الكائنات الساكنة تحد من المرونة وتخلق حالة عامة صلبة.",
          "en": "Forcing all objects to be static."
        }
      ],
      "tip": "وقفة امتحانية: الأنماط الهيكلية تتميز بالاعتماد على Object Composition كبديل مرن للتوريث الصلب."
    },
    {
      "n": 99,
      "type": "mcq",
      "ref": "L3-S007",
      "q_ar": "كيف تساعد العلاقات الهيكلية في حل مشكلة النظم البرمجية المعقدة؟",
      "q_en": "How do structural relationships help solve complexity in software systems?",
      "opts": [
        {
          "ar": "بتحويل كافة العمليات إلى دوال عشوائية.",
          "ok": false,
          "why": "العشوائية تدمر النظام.",
          "en": "By converting all operations into random functions."
        },
        {
          "ar": "بفصل الهياكل الكبيرة إلى أجزاء مستقلة ومترابطة بعلاقات واضحة ومحددة المسؤوليات.",
          "ok": true,
          "why": "التقسيم المعياري المنضبط يساعد في فهم وصيانة النظام بشكل مستقل.",
          "en": "By decomposing monolithic structures into independent components connected by clear, well-defined responsibilities."
        },
        {
          "ar": "بإلغاء استخدام محددات الوصول.",
          "ok": false,
          "why": "محددات الوصول تحمي تكامل الكائنات.",
          "en": "By abolishing the use of access modifiers."
        },
        {
          "ar": "بمنع استدعاء الدوال المتداخلة.",
          "ok": false,
          "why": "الاستدعاء المتداخل طبيعي في البرمجة الكائنية.",
          "en": "By prohibiting nested method invocations."
        }
      ],
      "tip": "وقفة امتحانية: التنظيم الهيكلي هو المفتاح للسيطرة على تعقيد الأنظمة البرمجية الضخمة."
    },
    {
      "n": 100,
      "type": "mcq",
      "ref": "L3-S014",
      "q_ar": "ما الذي يمثله طرف Target في نمط المحول (Adapter)؟",
      "q_en": "What does the Target participant represent in the Adapter pattern?",
      "opts": [
        {
          "ar": "الكائن الخارجي غير المتوافق مع النظام.",
          "ok": false,
          "why": "الكائن غير المتوافق يسمى Adaptee.",
          "en": "The external incompatible third-party object."
        },
        {
          "ar": "الواجهة الخاصة بالمجال (Domain-specific interface) التي يتوقعها ويستخدمها كود العميل مباشرة.",
          "ok": true,
          "why": "Target هي الواجهة المعيارية التي صمم العميل ليتعامل معها حصراً.",
          "en": "The domain-specific interface that client code expects and consumes directly."
        },
        {
          "ar": "ملف قاعدة البيانات المخزن على السيرفر.",
          "ok": false,
          "why": "Target واجهة برمجية وليست قاعدة بيانات.",
          "en": "The database file stored on the server."
        },
        {
          "ar": "مترجم لغة C# داخل نظام التشغيل.",
          "ok": false,
          "why": "Target واجهة مجردة داخل الكود المصدري.",
          "en": "The C# compiler within the operating system."
        }
      ],
      "tip": "وقفة امتحانية: احفظ دور Target: هو الواجهة المعيارية التي يتوقع كود العميل التخاطب معها."
    },
    {
      "n": 101,
      "type": "mcq",
      "ref": "L3-S019",
      "q_ar": "في نظام معالجة المدفوعات، إذا كانت دالة واجهة العميل هي Pay(decimal amount)، فكيف يتصرف المحول؟",
      "q_en": "In a payment processing system, if the client interface method is Pay(decimal amount), how does the Adapter behave?",
      "opts": [
        {
          "ar": "يرفض تنفيذ الدالة ويرمي استثناء فورياً.",
          "ok": false,
          "why": "المحول وجد لينفذ العملية بنجاح.",
          "en": "Refuses to execute the method and immediately throws an exception."
        },
        {
          "ar": "يستقبل استدعاء Pay ويقوم داخلياً باستدعاء الدالة المقابلة في المكتبة الخارجية مثل MakeTransaction(amount, currency).",
          "ok": true,
          "why": "المحول يقوم بمواءمة المدخلات واستدعاء الدالة الأصلية في الكائن غير المتوافق.",
          "en": "Receives the Pay call and internally invokes the corresponding method in the third-party library, such as MakeTransaction(amount, currency)."
        },
        {
          "ar": "يحفظ المبلغ في الذاكرة دون إرساله للبنك.",
          "ok": false,
          "why": "المحول مفوض فعلي للعملية.",
          "en": "Stores the amount in memory without sending it to the bank."
        },
        {
          "ar": "يقوم بإيقاف تطبيق العميل عن العمل.",
          "ok": false,
          "why": "غير صحيح إطلاقاً.",
          "en": "Terminates the client application."
        }
      ],
      "tip": "وقفة امتحانية: دور المحول هو التوفيق الدقيق بين توقيع دالة العميل وتوقيع دالة الكائن غير المتوافق."
    },
    {
      "n": 102,
      "type": "mcq",
      "ref": "L3-S022",
      "q_ar": "لماذا يُعد تصميم واجهة موحدة IPaymentProcessor أمراً جوهرياً لنجاح تطبيق نمط Adapter؟",
      "q_en": "Why is designing a unified IPaymentProcessor interface essential for successful Adapter pattern application?",
      "opts": [
        {
          "ar": "لأنه يجبر البنوك على تغيير خوادمها لتطابق متطلبات المتجر.",
          "ok": false,
          "why": "البنوك لا تغير خوادمها من أجل تطبيق فردي.",
          "en": "Because it forces banks to modify their servers to match store requirements."
        },
        {
          "ar": "لأنه يفصل كود العميل عن تفاصيل المزودين ويسمح بإضافة أو استبدال أي بوابة دفع جديدة عبر محولها الخاص دون تعديل العميل.",
          "ok": true,
          "why": "الواجهة الموحدة تمثل العقد المعماري الثابت الذي يحمي كود العميل من تقلبات المزودين الخارجيين.",
          "en": "Because it decouples client code from provider details and allows adding or replacing any new payment gateway via its adapter without modifying the client."
        },
        {
          "ar": "لأنه يمنع حدوث الأخطاء النحوية في لغة C#.",
          "ok": false,
          "why": "الواجهة عقد برمجي ولا علاقة لها بأخطاء النحو.",
          "en": "Because it prevents syntax errors in C#."
        },
        {
          "ar": "لأنه يجعل عمليات الدفع مجانية للمستخدمين.",
          "ok": false,
          "why": "لا علاقة له بالرسوم التجارية.",
          "en": "Because it makes payment operations free for users."
        }
      ],
      "tip": "وقفة امتحانية: الواجهة الموحدة هي العقد الثابت؛ والمحولات هي التفاصيل القابلة للتغيير والتبديل."
    },
    {
      "n": 103,
      "type": "mcq",
      "ref": "L3-S026",
      "q_ar": "ما نوع العلاقة بين كلاس PayPalAdapter وكلاس PayPalService في محول الكائنات (Object Adapter)؟",
      "q_en": "What type of relationship exists between PayPalAdapter and PayPalService in an Object Adapter?",
      "opts": [
        {
          "ar": "وراثة كاملة حيث يرث المحول كافة خصائص باي بال.",
          "ok": false,
          "why": "هذا في محول الفئات (Class Adapter).",
          "en": "Full inheritance where the adapter inherits all properties of PayPal."
        },
        {
          "ar": "علاقة احتواء وتكوين (Composition)، حيث يمتلك المحول حقلاً خاصاً يحتوي كائن الخدمة `private readonly PayPalService _service`.",
          "ok": true,
          "why": "محول الكائنات يعتمد على التكوين عبر الاحتفاظ بمرجع للكائن الخارجي وتفويض العمليات إليه.",
          "en": "A composition/containment relationship, where the adapter holds a private field containing the service object: `private readonly PayPalService _service`."
        },
        {
          "ar": "علاقة تنافس على نفس المفتاح الأجنبي في قاعدة البيانات.",
          "ok": false,
          "why": "ليست علاقة جداول بيانات.",
          "en": "A contention relationship over the same foreign key in the database."
        },
        {
          "ar": "لا توجد أي علاقة برمجية بينهما.",
          "ok": false,
          "why": "المحول يحتاج لمرجع الكائن الخارجي حتماً.",
          "en": "There is no programmatic relationship between them."
        }
      ],
      "tip": "وقفة امتحانية: في Object Adapter: يمرر الكائن الخارجي للمحول عبر المنشئ (Constructor Injection)."
    },
    {
      "n": 104,
      "type": "mcq",
      "ref": "L3-S029",
      "q_ar": "ما الفائدة الأمنية والتنظيمية من عزل كود المزود الخارجي داخل فئة Adapter منفصلة؟",
      "q_en": "What is the security and organizational benefit of isolating external provider code inside an Adapter class?",
      "opts": [
        {
          "ar": "إخفاء كود المشروع بالكامل عن محركات البحث.",
          "ok": false,
          "why": "لا علاقة له بمحركات البحث.",
          "en": "Hiding the entire project code from search engines."
        },
        {
          "ar": "حصر التعديلات ومفاتيح الربط وسجلات الخطأ الخاصة بالمزود الخارجي في فئة واحدة، مما يسهل مراقبتها وتحديثها دون تلويث منطق الأعمال.",
          "ok": true,
          "why": "العزل يحقق التماسك العالي (High Cohesion) ويمنع تسرب تفاصيل المزود إلى بقية أجزاء النظام.",
          "en": "Confining changes, integration keys, and error logs of the external provider to a single class, facilitating monitoring and updates without polluting business logic."
        },
        {
          "ar": "إلغاء الحاجة لتأمين الاتصال بشهادات SSL.",
          "ok": false,
          "why": "التأمين الشبكي إلزامي دائماً.",
          "en": "Eliminating the need for securing connections with SSL certificates."
        },
        {
          "ar": "تسريع عملية التجميع بنسبة 100%.",
          "ok": false,
          "why": "الميزة في التنظيم والصيانة وليس سرعة التجميع.",
          "en": "Speeding up the compilation process by 100%."
        }
      ],
      "tip": "وقفة امتحانية: المحول يوفر عازلاً (Buffer) يحمي كود النظام الداخلي من أي تغييرات مستقبلية في الـ API الخارجي."
    },
    {
      "n": 105,
      "type": "mcq",
      "ref": "L3-S035",
      "q_ar": "في غياب نمط الواجهة (Facade)، ماذا يحدث إذا تغيرت طريقة استدعاء دالة المخزون CheckStock في النظام الفرعي؟",
      "q_en": "In the absence of Facade, what happens if the method signature of CheckStock in the subsystem changes?",
      "opts": [
        {
          "ar": "سيتعين على المطور البحث وتعديل كافة الشاشات ووحدات التحكم التي استدعت تلك الدالة مباشرة في كل مكان بالنظام.",
          "ok": true,
          "why": "غياب Facade يسبب ترابطاً وثيقاً مع الكود الخارجي، مما يجعل أي تعديل بسيط في الخدمة الفرعية يكسر عشرات الأماكن في كود العميل.",
          "en": "The developer must locate and modify all screens and controllers that directly invoked that method across the entire system."
        },
        {
          "ar": "سيقوم نظام التشغيل بتعديل الكود تلقائياً وتصحيح الخطأ.",
          "ok": false,
          "why": "نظام التشغيل لا يعدل الأكواد البرمجية.",
          "en": "The operating system automatically modifies the code and fixes the error."
        },
        {
          "ar": "لن يتأثر النظام إطلاقاً وستستمر المعالجة بشكل سليم.",
          "ok": false,
          "why": "تغير توقيع الدالة يسبب أخطاء ترجمة حتمية في كل مكان يستدعيها.",
          "en": "The system will not be affected at all and processing will continue normally."
        },
        {
          "ar": "سيتم مسح بيانات قاعدة البيانات بالكامل.",
          "ok": false,
          "why": "المشكلة في ترابط الكود وليس مسح البيانات.",
          "en": "The entire database will be erased."
        }
      ],
      "tip": "وقفة امتحانية: مع Facade: تعديل النظام الفرعي يتطلب تعديل سطر واحد فقط داخل فئة Facade، بينما كود العميل يظل سليماً 100%."
    },
    {
      "n": 106,
      "type": "mcq",
      "ref": "L3-S039",
      "q_ar": "في نمط Facade، ما هي المسؤولية الأساسية للأنظمة الفرعية (Subsystems)؟",
      "q_en": "In the Facade pattern, what is the primary responsibility of the Subsystems?",
      "opts": [
        {
          "ar": "معرفة فئة Facade والاعتماد عليها في تنفيذ وظائفها.",
          "ok": false,
          "why": "الأنظمة الفرعية لا تعرف أي شيء عن فئة Facade ولا تعتمد عليها.",
          "en": "Knowing the Facade class and relying on it to execute their functions."
        },
        {
          "ar": "تنفيذ العمليات والمهام الوظيفية الدقيقة المتخصصة بشكل مستقل تماماً، دون معرفة وجود فئة Facade.",
          "ok": true,
          "why": "الأنظمة الفرعية تنفذ مهامها الخاصة (مثل الدفع، الشحن، المخزون) وتجهل تماماً وجود Facade فوقها.",
          "en": "Executing specialized, fine-grained functional tasks completely independently, without any knowledge of the Facade class."
        },
        {
          "ar": "إلغاء التعامل مع كود العميل بشكل نهائي.",
          "ok": false,
          "why": "العميل المتقدم يمكنه استخدامها مباشرة إن أراد.",
          "en": "Permanently stopping all interaction with client code."
        },
        {
          "ar": "توفير واجهات رسومية ملونة للمستخدمين.",
          "ok": false,
          "why": "الأنظمة الفرعية خدمات معالجة خلفية.",
          "en": "Providing colorful graphical user interfaces to users."
        }
      ],
      "tip": "وقفة امتحانية: قاعدة معمارية: الأنظمة الفرعية (Subsystems) لا تحتفظ بأي مرجع لـ Facade ولا تعرف بوجودها."
    },
    {
      "n": 107,
      "type": "mcq",
      "ref": "L3-S047",
      "q_ar": "كيف يختلف نمط الوكيل (Proxy) عن نمط الواجهة (Facade) من حيث الهدف والتعامل مع الكائنات؟",
      "q_en": "How does Proxy differ from Facade in terms of intent and object handling?",
      "opts": [
        {
          "ar": "Facade يتعامل مع كائن واحد فقط بينما Proxy يتعامل مع مئات الأنظمة الفرعية.",
          "ok": false,
          "why": "العكس تماماً؛ Facade ينسق مجموعة أنظمة بينما Proxy يمثل كائناً واحداً.",
          "en": "Facade handles only a single object, while Proxy handles hundreds of subsystems."
        },
        {
          "ar": "Proxy يمثل كائناً واحداً وينفذ نفس واجهته للتحكم في الوصول إليه؛ بينما Facade يمثل مجموعة أنظمة فرعية معقدة ويقدم واجهة جديدة ومبسطة لها.",
          "ok": true,
          "why": "هذا فارق جوهري حاسم: Proxy بديل لكائن مفرد بنفس الواجهة؛ Facade واجهة جديدة مبسطة لشبكة خدمات.",
          "en": "Proxy represents a single object and implements its same interface to control access to it; while Facade represents a complex set of subsystems and provides a new simplified interface for them."
        },
        {
          "ar": "كلاهما متطابقان تماماً ولا يوجد أي فرق معماري.",
          "ok": false,
          "why": "الفرق شاسع في القصد والهيكلية.",
          "en": "Both are completely identical and have no architectural difference."
        },
        {
          "ar": "Proxy نمط إنشائي و Facade نمط سلوكي.",
          "ok": false,
          "why": "كلاهما نمطان هيكليان (Structural).",
          "en": "Proxy is a creational pattern and Facade is a behavioral pattern."
        }
      ],
      "tip": "وقفة امتحانية: Proxy = كائن واحد + نفس الواجهة؛ Facade = عدة أنظمة فرعية + واجهة جديدة مبسطة."
    },
    {
      "n": 108,
      "type": "mcq",
      "ref": "L3-S051",
      "q_ar": "في نمط الوكيل، متى يقوم كائن VirtualProxy بإنشاء الكائن الحقيقي RealSubject في الذاكرة؟",
      "q_en": "In the Proxy pattern, when does a VirtualProxy instantiate the RealSubject in memory?",
      "opts": [
        {
          "ar": "فور تشغيل البرنامج وقبل أن يطلبه أي مستخدم.",
          "ok": false,
          "why": "هذا Eager Loading وهو ما صُمم الوكيل لتجنبه.",
          "en": "Immediately upon application startup before any user requests it."
        },
        {
          "ar": "عند أول استدعاء فعلي لإحدى الدوال التي تتطلب الكائن الحقيقي (On-Demand / Lazy Initialization).",
          "ok": true,
          "why": "الوكيل الافتراضي يؤجل حجز الموارد والذاكرة حتى اللحظة الدقيقة التي يحتاج فيها المستخدم لتلك البيانات.",
          "en": "Upon the first actual invocation of a method that requires the real object (On-Demand / Lazy Initialization)."
        },
        {
          "ar": "بعد إغلاق التطبيق وخروج المستخدم.",
          "ok": false,
          "why": "بعد الإغلاق يتم تفريغ الذاكرة بالكامل.",
          "en": "After the application is closed and the user exits."
        },
        {
          "ar": "عندما تنخفض سرعة الإنترنت فقط.",
          "ok": false,
          "why": "الإنشاء يعتمد على استدعاء الدالة البرمجية.",
          "en": "Only when internet speed drops."
        }
      ],
      "tip": "وقفة امتحانية: Virtual Proxy ينفذ Lazy Initialization: فحص null ثم الإنشاء عند أول طلب."
    },
    {
      "n": 109,
      "type": "mcq",
      "ref": "L3-S057",
      "q_ar": "ما هو الدافع المعماري الرئيسي لاختيار نمط المزيّن (Decorator) بدلاً من التوسيع عبر الوراثة (Inheritance)؟",
      "q_en": "What is the main architectural motivation for choosing Decorator over inheritance?",
      "opts": [
        {
          "ar": "لأن الوراثة تجعل تشغيل البرامج مستحيلاً على الخوادم الحديثة.",
          "ok": false,
          "why": "الوراثة مدعومة بشكل طبيعي.",
          "en": "Because inheritance makes running programs impossible on modern servers."
        },
        {
          "ar": "لتمكين إضافة أو إزالة الخصائص والمسؤوليات أثناء وقت التشغيل وبشكل تركيبي مرن، وتجنب تفرع الفئات الصلبة وتضخمها.",
          "ok": true,
          "why": "المزيّن يتيح تشكيل توليفات متباينة من الميزات ديناميكياً أثناء تشغيل التطبيق دون كتابة فئات جديدة لكل حالة.",
          "en": "To enable adding or removing responsibilities dynamically at runtime via flexible composition, avoiding rigid class hierarchy explosion."
        },
        {
          "ar": "لإلغاء الحاجة للواجهات في لغة البرمجة.",
          "ok": false,
          "why": "المزيّن يعتمد بقوة على الواجهة المشتركة Component.",
          "en": "To eliminate the need for interfaces in programming languages."
        },
        {
          "ar": "لتحويل الكود إلى تطبيق موبايل تلقائياً.",
          "ok": false,
          "why": "لا علاقة له بنوع التطبيق.",
          "en": "To automatically convert code into a mobile application."
        }
      ],
      "tip": "وقفة امتحانية: Decorator = إضافة ميزات وقت التشغيل (Runtime Flexibility) وتفادي تضخم الفئات بالوراثة."
    },
    {
      "n": 110,
      "type": "mcq",
      "ref": "L3-S066",
      "q_ar": "عند تنفيذ كود المزيّن في C#: `ICoffee coffee = new MilkDecorator(new SimpleCoffee());` ماذا يحدث عند استدعاء `coffee.GetCost()`؟",
      "q_en": "In C# Decorator code: `ICoffee coffee = new MilkDecorator(new SimpleCoffee());`, what happens when calling `coffee.GetCost()`?",
      "opts": [
        {
          "ar": "يتم إرجاع سعر الحليب فقط ويتم تجاهل سعر القهوة الأصلي.",
          "ok": false,
          "why": "المزيّن يضيف إلى السعر الأصلي ولا يلغيه.",
          "en": "Only the price of milk is returned, ignoring the original coffee price."
        },
        {
          "ar": "يقوم MilkDecorator باستدعاء GetCost() للكائن المغلف SimpleCoffee ثم يضيف إليها سعر الحليب ويرجع المجموع الكلي.",
          "ok": true,
          "why": "هذه هي آلية عمل المزيّن: تفويض الاستدعاء للكائن الداخلي ثم إضافة السلوك الخاص به.",
          "en": "MilkDecorator calls GetCost() on the wrapped SimpleCoffee object, adds the milk cost to it, and returns the total sum."
        },
        {
          "ar": "يرمي البرنامج استثناء بسبب تداخل الكائنات.",
          "ok": false,
          "why": "الكود متوافق تماماً ومبني وفق النمط المعياري.",
          "en": "The application throws an exception due to object nesting."
        },
        {
          "ar": "يتم حذف كائن القهوة من الذاكرة فوراً.",
          "ok": false,
          "why": "الكائن يظل حياً داخل المزيّن.",
          "en": "The coffee object is immediately deleted from memory."
        }
      ],
      "tip": "وقفة امتحانية: مسار التنفيذ في Decorator: Call Decorator -> Delegate to Wrapped Component -> Add Decorator Logic -> Return Result."
    },
    {
      "n": 111,
      "type": "mcq",
      "ref": "L4-S001",
      "q_ar": "ما هو الاختصاص المعماري الحصري لأنماط التصميم السلوكية (Behavioral Design Patterns)؟",
      "q_en": "What is the exclusive architectural domain of Behavioral Design Patterns?",
      "opts": [
        {
          "ar": "تنظيم كيفية تخصيص مساحة الذاكرة للكائنات على مكدس النظام (Stack).",
          "ok": false,
          "why": "هذه إدارة ذاكرة منخفضة المستوى تخص بيئة التشغيل CLR.",
          "en": "Managing how memory space is allocated for objects on the system stack."
        },
        {
          "ar": "تنظيم خوارزميات التفاعل، إدارة تدفق السيطرة، وتوزيع المسؤوليات المعقدة بين الكائنات لفك الترابط بينها.",
          "ok": true,
          "why": "الأنماط السلوكية تعنى بحركة البيانات والتفاعل الديناميكي وتوزيع الأدوار بين الكائنات دون ربط صلب.",
          "en": "Organizing interaction algorithms, managing control flow, and distributing complex responsibilities among objects to decouple them."
        },
        {
          "ar": "توليد ملفات التكوين التلقائية لخوادم السحابة.",
          "ok": false,
          "why": "ليست من وظائف الأنماط السلوكية.",
          "en": "Generating automatic configuration files for cloud servers."
        },
        {
          "ar": "إلغاء التعامل مع لغات البرمجة كائنية التوجه.",
          "ok": false,
          "why": "الأنماط السلوكية من صميم البرمجة كائنية التوجه.",
          "en": "Eliminating interaction with object-oriented programming languages."
        }
      ],
      "tip": "وقفة امتحانية: الأنماط السلوكية تجيب على: 'كيف تتواصل الكائنات وتتوزع المسؤوليات وتتدفق القرارات بمرونة؟'."
    },
    {
      "n": 112,
      "type": "mcq",
      "ref": "L4-S003",
      "q_ar": "ما هو الهدف المعماري الأساسي لنمط الاستراتيجية (Strategy Design Pattern)؟",
      "q_en": "What is the primary architectural goal of the Strategy Design Pattern?",
      "opts": [
        {
          "ar": "ضمان عدم إنشاء أكثر من نسخة واحدة من الكائن طوال حياة التطبيق.",
          "ok": false,
          "why": "هذا تعريف نمط Singleton الإنشائي.",
          "en": "Ensuring that no more than one instance of an object is created throughout the application lifecycle."
        },
        {
          "ar": "تعريف عائلة من الخوارزميات، تغليف كل واحدة منها داخل فئة مستقلة، وجعلها قابلة للتبديل فيما بينها أثناء وقت التشغيل دون تأثير على العميل.",
          "ok": true,
          "why": "هذا هو التعريف الكلاسيكي الدقيق لنمط Strategy؛ عزل الخوارزميات وتبديلها ديناميكياً.",
          "en": "Defining a family of algorithms, encapsulating each one in a separate class, and making them interchangeable at runtime without impacting the client."
        },
        {
          "ar": "تحويل واجهة غير متوافقة لتطابق متطلبات عميل محدد.",
          "ok": false,
          "why": "هذا تعريف نمط المحول (Adapter).",
          "en": "Converting an incompatible interface to match the requirements of a specific client."
        },
        {
          "ar": "مراقبة التغيرات في قواعد البيانات وتحديث واجهة المستخدم.",
          "ok": false,
          "why": "هذا نمط المراقب (Observer).",
          "en": "Monitoring database changes and updating the user interface."
        }
      ],
      "tip": "وقفة امتحانية: Strategy = عائلة خوارزميات مغلفة في فئات مستقلة وقابلة للتبديل أثناء التشغيل (Interchangeable at Runtime)."
    },
    {
      "n": 113,
      "type": "mcq",
      "ref": "L4-S004",
      "q_ar": "في نظام الدفع الإلكتروني (Payment System)، ما هو الدافع المعماري الرئيسي لاختيار نمط Strategy؟",
      "q_en": "In a payment system, what is the core architectural motivation for choosing Strategy?",
      "opts": [
        {
          "ar": "إجبار العميل على الدفع بطريقة واحدة ثابتة لا تتغير.",
          "ok": false,
          "why": "الأنظمة الحديثة تحتاج لدعم طرق دفع متعددة.",
          "en": "Forcing the client to pay using a single fixed method that never changes."
        },
        {
          "ar": "الحاجة لدعم طرق دفع متباينة (بطاقة ائتمان، باي بال، عملات رقمية) مع إمكانية إضافة طرق جديدة مستقبلاً دون تعديل كود سلة الشراء.",
          "ok": true,
          "why": "نمط Strategy يعزل خوارزمية كل طريقة دفع في كلاس منفصل، مما يسمح باختيارها أو تبديلها بمرونة تامة.",
          "en": "The need to support diverse payment methods (credit card, PayPal, cryptocurrencies) with the ability to add new methods in the future without modifying shopping cart code."
        },
        {
          "ar": "إلغاء التعامل مع البنوك نهائياً.",
          "ok": false,
          "why": "كلام غير واقعي برمجياً.",
          "en": "Permanently stopping interactions with banks."
        },
        {
          "ar": "تسريع عملية اتصال المودم بالإنترنت.",
          "ok": false,
          "why": "لا علاقة له بالعتاد.",
          "en": "Speeding up modem internet connection."
        }
      ],
      "tip": "وقفة امتحانية: مثال الدفع هو المثال المعياري الكلاسيكي للدكتورة بيداء لعلع لشرح نمط Strategy."
    },
    {
      "n": 114,
      "type": "mcq",
      "ref": "L4-S006",
      "q_ar": "ما هي المشكلة المعمارية الكبرى الناتجة عن كتابة منطق الدفع داخل دالة سلة الشراء باستخدام جملة `switch(paymentType)`؟",
      "q_en": "What is the major architectural flaw of implementing payment logic inside shopping cart via `switch(paymentType)`?",
      "opts": [
        {
          "ar": "انتهاك مبدأ المسؤولية الأحادية (SRP) ومبدأ المفتوح والمغلق (OCP)، حيث تصبح فئة السلة مسؤولة عن كافة تفاصيل الدفع وتتطلب التعديل مع كل وسيلة جديدة.",
          "ok": true,
          "why": "جملة switch تخلط منطق السلة مع تفاصيل البنوك، وتجبرنا على فتح وتعديل الكود القديم عند إضافة وسيلة دفع جديدة.",
          "en": "Violating Single Responsibility Principle (SRP) and Open/Closed Principle (OCP), making the cart class responsible for all payment details and requiring modification for every new method."
        },
        {
          "ar": "توقف لغة C# عن ترجمة الملفات التي تحتوي جمل switch.",
          "ok": false,
          "why": "المترجم يترجم switch بشكل طبيعي؛ الخلل في التصميم المعماري وليس في الترجمة.",
          "en": "C# stopping compilation of files containing switch statements."
        },
        {
          "ar": "حذف بيانات العملاء من الذاكرة العشوائية تلقائياً.",
          "ok": false,
          "why": "لا علاقة له بحذف البيانات.",
          "en": "Automatically deleting customer data from RAM."
        },
        {
          "ar": "زيادة حجم قاعدة البيانات إلى أضعاف مضاعفة.",
          "ok": false,
          "why": "المشكلة في بنية الكود المصدري وليس في حجم قاعدة البيانات.",
          "en": "Increasing database size exponentially."
        }
      ],
      "tip": "وقفة امتحانية: Switch on Type داخل كلاس الأعمال = انتهاك صريح لـ OCP و SRP؛ والحل هو استبدالها بـ Strategy Pattern."
    },
    {
      "n": 115,
      "type": "mcq",
      "ref": "L4-S007",
      "q_ar": "كيف يعالج نمط الاستراتيجية (Strategy) مشكلة التفرعات الشرطية المعقدة؟",
      "q_en": "How does the Strategy pattern resolve complex conditional branching?",
      "opts": [
        {
          "ar": "بحذف الشروط وترك البرنامج يختار طريقة عشوائية.",
          "ok": false,
          "why": "هذا يدمر منطق الأعمال المالي.",
          "en": "By deleting conditions and letting the program choose a random method."
        },
        {
          "ar": "باستخراج كل خوارزمية ووضعها في فئة خرسانية مستقلة تنفذ واجهة موحدة، وتفويض التنفيذ للكائن المحقون ديناميكياً.",
          "ok": true,
          "why": "بدلاً من فحص النوع بجمل شرطية، يعتمد السياق على التعددية (Polymorphism) واستدعاء دالة الواجهة مباشرة.",
          "en": "By extracting each algorithm into an independent concrete class implementing a unified interface, and delegating execution to the dynamically injected object."
        },
        {
          "ar": "بإجبار المطور على استخدام لغة بايثون بدلاً من C#.",
          "ok": false,
          "why": "النمط كائني عام ويعمل في كافة اللغات.",
          "en": "By forcing the developer to use Python instead of C#."
        },
        {
          "ar": "بتحويل الخوارزميات إلى استعلامات SQL معقدة.",
          "ok": false,
          "why": "الخوارزميات مكانها طبقة التطبيق والأعمال وليس قاعدة البيانات.",
          "en": "By converting algorithms into complex SQL queries."
        }
      ],
      "tip": "وقفة امتحانية: استبدال جمل الشرط (Replace Conditional with Polymorphism) هو جوهر نمط Strategy."
    },
    {
      "n": 116,
      "type": "mcq",
      "ref": "L4-S008",
      "q_ar": "ما هي المكونات الثلاثة الأساسية في مخطط فئات UML لنمط Strategy؟",
      "q_en": "What are the three core participants in the Strategy pattern UML class diagram?",
      "opts": [
        {
          "ar": "Client, Adapter, Adaptee.",
          "ok": false,
          "why": "هذه أطراف نمط Adapter.",
          "en": "Client, Adapter, Adaptee."
        },
        {
          "ar": "Context (فئة السياق), Strategy (واجهة الاستراتيجية), ConcreteStrategies (الاستراتيجيات الملموسة).",
          "ok": true,
          "why": "هذه هي الأطراف الثلاثة المعيارية لنمط Strategy في كتاب GoF.",
          "en": "Context, Strategy (Interface), ConcreteStrategies."
        },
        {
          "ar": "Creator, ConcreteCreator, Product.",
          "ok": false,
          "why": "هذه أطراف نمط Factory Method.",
          "en": "Creator, ConcreteCreator, Product."
        },
        {
          "ar": "Subject, Observer, ConcreteObserver.",
          "ok": false,
          "why": "هذه أطراف نمط Observer.",
          "en": "Subject, Observer, ConcreteObserver."
        }
      ],
      "tip": "وقفة امتحانية: احفظ ثالوث Strategy: Context (يملك الواجهة) · Strategy (Interface) · ConcreteStrategies (تنفذ الواجهة)."
    },
    {
      "n": 117,
      "type": "mcq",
      "ref": "L4-S010",
      "q_ar": "ما هو دور كلاس السياق `Context` في نمط الاستراتيجية؟",
      "q_en": "What is the role of the `Context` class in the Strategy pattern?",
      "opts": [
        {
          "ar": "تنفيذ خوارزميات التشفير المعقدة بنفسه.",
          "ok": false,
          "why": "الخوارزميات تنفذ داخل ConcreteStrategies وليس داخل Context.",
          "en": "Executing complex encryption algorithms itself."
        },
        {
          "ar": "الاحتفاظ بمرجع لكائن الاستراتيجية المحددة، وتوفير واجهة للعميل لضبط أو تبديل الاستراتيجية، وتفويض العمليات الحسابية إليها.",
          "ok": true,
          "why": "فئة Context تدير العملية العامة (مثل دورة الطلب في السلة) وتفوض تنفيذ الخوارزمية الخاصة للاستراتيجية المحقونة فيها.",
          "en": "Maintaining a reference to a Strategy object, providing an interface for the client to set or swap the strategy, and delegating calculations to it."
        },
        {
          "ar": "منع إنشاء كائنات جديدة في الذاكرة.",
          "ok": false,
          "why": "ليس من مهام Context.",
          "en": "Preventing creation of new objects in memory."
        },
        {
          "ar": "توليد كود الواجهات الرسومية للمستخدمين.",
          "ok": false,
          "why": "Context فئة أعمال خلفية.",
          "en": "Generating GUI code for users."
        }
      ],
      "tip": "وقفة امتحانية: Context لا يعرف تفاصيل الخوارزمية؛ هو يعرف فقط واجهة Strategy ويفوض العمل إليها (Delegation)."
    },
    {
      "n": 118,
      "type": "mcq",
      "ref": "L4-S011",
      "q_ar": "كيف يجب تصميم واجهة الاستراتيجية `IPaymentStrategy` لتحقيق أقصى قدر من المرونة والتجريد؟",
      "q_en": "How should the `IPaymentStrategy` interface be designed for maximum flexibility and abstraction?",
      "opts": [
        {
          "ar": "بتعريف دوال مخصصة لكل وسيلة دفع مثل `PayWithVisa` و `PayWithPayPal` داخل نفس الواجهة.",
          "ok": false,
          "why": "هذا ينتهك التجريد ويلوث الواجهة (Fat Interface) ويجبر كل وسيلة على تنفيذ دوال لا تخصها.",
          "en": "By defining specific methods for each payment method such as `PayWithVisa` and `PayWithPayPal` within the same interface."
        },
        {
          "ar": "بتعريف دالة موحدة ومجردة مثل `Pay(decimal amount)` تلتزم بها كافة وسائل الدفع دون تفاصيل خاصة بمزود معين.",
          "ok": true,
          "why": "الواجهة المعيارية الموحدة تتيح للسياق استدعاء دالة واحدة بغض النظر عن الوسيلة المحددة في وقت التشغيل.",
          "en": "By defining a unified abstract method like `Pay(decimal amount)` adhered to by all payment methods without provider-specific details."
        },
        {
          "ar": "بحذف الدالة وجعل الواجهة فارغة تماماً.",
          "ok": false,
          "why": "الواجهة يجب أن تعلن عقد التنفيذ المطلوب.",
          "en": "By deleting the method and leaving the interface completely empty."
        },
        {
          "ar": "بإجبار الواجهة على أن ترث من فئة Exception.",
          "ok": false,
          "why": "الاستراتيجية ليست استثناءً برمجياً.",
          "en": "By forcing the interface to inherit from Exception class."
        }
      ],
      "tip": "وقفة امتحانية: واجهة Strategy يجب أن تكون بسيطة ومجردة (Common Contract) مثل `void Pay(decimal amount);`."
    },
    {
      "n": 119,
      "type": "mcq",
      "ref": "L4-S012",
      "q_ar": "ما هي السمة المشتركة بين جميع فئات الاستراتيجيات الملموسة (Concrete Strategies) مثل `CreditCardPayment` و `PayPalPayment`؟",
      "q_en": "What common trait do all Concrete Strategies share?",
      "opts": [
        {
          "ar": "أنها تشترك في نفس المفتاح السري للحساب البنكي.",
          "ok": false,
          "why": "البيانات الأمنية منفصلة لكل وسيلة.",
          "en": "They share the exact same bank account secret key."
        },
        {
          "ar": "أنها تنفذ جميعاً نفس الواجهة `IPaymentStrategy`، مما يجعلها متطابقة في التوقيع وقابلة للحلول محل بعضها بسلاسة تامة.",
          "ok": true,
          "why": "التوافق مع نفس العقد هو ما يتيح لـ Context تبديل أي فئة بأخرى دون أن يشعر بأي تغيير في توقيع الاستدعاء.",
          "en": "They all implement the same `IPaymentStrategy` interface, making their signatures identical and allowing them to seamlessly substitute one another."
        },
        {
          "ar": "أنها ترث من بعضها البعض وراثة تسلسلية طويلة.",
          "ok": false,
          "why": "الاستراتيجيات شقيقات مستقلات ينفذن نفس الواجهة ولا يرثن من بعضهن.",
          "en": "They inherit from each other in a long hierarchical chain."
        },
        {
          "ar": "أنها تعمل فقط عند إيقاف تشغيل الخادم.",
          "ok": false,
          "why": "تعمل أثناء وقت التشغيل الفعلي.",
          "en": "They only function when the server is powered off."
        }
      ],
      "tip": "وقفة امتحانية: فئات Concrete Strategies تعتبر 'شقيقات' (Siblings)؛ مستقلات تماماً، ولكنهن ينفذن نفس الواجهة المشتركة."
    },
    {
      "n": 120,
      "type": "mcq",
      "ref": "L4-S014",
      "q_ar": "في لغة C#، كيف يتم تمكين العميل من تبديل طريقة الدفع أثناء وقت التشغيل (Runtime Algorithm Swapping)؟",
      "q_en": "In C#, how is the client enabled to swap payment algorithms at runtime in Strategy?",
      "opts": [
        {
          "ar": "بإعادة تشغيل التطبيق بالكامل وتغيير الكود المصدري يدوياً.",
          "ok": false,
          "why": "التبديل أثناء التشغيل لا يتطلب إعادة تشغيل ولا تعديل كود.",
          "en": "By restarting the application entirely and manually modifying source code."
        },
        {
          "ar": "بتوفير دالة تعيين داخل السياق مثل `cart.SetPaymentStrategy(new PayPalPayment())` تسمح بتمرير استراتيجية جديدة في أي لحظة.",
          "ok": true,
          "why": "دالة التعيين (Setter Injection) أو التمرير بالمنشئ تسمح بتغيير الكائن المحقون ديناميكياً أثناء تشغيل التطبيق.",
          "en": "By providing a setter method in Context like `cart.SetPaymentStrategy(new PayPalPayment())` allowing a new strategy to be passed at any moment."
        },
        {
          "ar": "بحذف كائن سلة الشراء وإنشاء سلة جديدة لكل منتج.",
          "ok": false,
          "why": "السياق يبقى ثابتاً وتتغير الاستراتيجية بداخله فقط.",
          "en": "By deleting the shopping cart object and creating a new cart for every product."
        },
        {
          "ar": "بإيقاف الاتصال بالشبكة.",
          "ok": false,
          "why": "لا علاقة له بالشبكة.",
          "en": "By disabling network connectivity."
        }
      ],
      "tip": "وقفة امتحانية: ميزة Strategy الكبرى هي إمكانية تبديل السلوك في وقت التشغيل عبر دالة `SetStrategy(IStrategy)`."
    },
    {
      "n": 121,
      "type": "mcq",
      "ref": "L4-S015",
      "q_ar": "ما الميزة المعمارية لنمط Strategy مقارنة بنمط الحالة (State Pattern) رغم تشابه مخططات فئات UML بينهما؟",
      "q_en": "What is the architectural difference between Strategy and State patterns despite their similar UML diagrams?",
      "opts": [
        {
          "ar": "Strategy يطبق في لغات الويب فقط بينما State يطبق في لغات الموبايل.",
          "ok": false,
          "why": "كلاهما نمطان كائنيان قياسيان في كافة اللغات.",
          "en": "Strategy is only applied in web languages, whereas State is applied only in mobile languages."
        },
        {
          "ar": "في Strategy يختار العميل الخوارزمية صراحة ويمررها للسياق؛ بينما في State تنتقل الحالة وتتغير سلوكيات الكائن تلقائياً من الداخل تبعاً لمدخلات وأحداث الكائن.",
          "ok": true,
          "why": "فارق القصد المعماري: Strategy للعميل الذي يريد اختيار خوارزمية؛ State لتغيير سلوك الكائن تلقائياً عند تغير حالته الداخلية (مثل دورة حياة الطلب).",
          "en": "In Strategy, the client explicitly chooses and passes the algorithm to Context; in State, state transitions and behavior changes happen automatically from within based on object events and inputs."
        },
        {
          "ar": "State نمط إنشائي و Strategy نمط هيكلي.",
          "ok": false,
          "why": "كلاهما نمطان سلوكيان (Behavioral).",
          "en": "State is a creational pattern and Strategy is a structural pattern."
        },
        {
          "ar": "لا يوجد أي فرق على الإطلاق فهما نفس النمط تماماً.",
          "ok": false,
          "why": "الفرق في القصد المعماري (Intent) وآلية انتقال التحكم.",
          "en": "There is no difference at all; they are the exact same pattern."
        }
      ],
      "tip": "وقفة امتحانية: فخ امتحان متكرر: Strategy يحددها العميل من الخارج؛ State تتغير تلقائياً من الداخل بناءً على الحالة."
    },
    {
      "n": 122,
      "type": "mcq",
      "ref": "L4-S022",
      "q_ar": "ما هو الهدف المعماري الأساسي لنمط المراقب (Observer Design Pattern)؟",
      "q_en": "What is the primary architectural goal of the Observer Design Pattern?",
      "opts": [
        {
          "ar": "تسجيل كافة ضغطات المفاتيح للمستخدمين سراً.",
          "ok": false,
          "why": "هذا برنامج تجسس وليس نمط تصميم برمجي.",
          "en": "Secretly logging all user keystrokes."
        },
        {
          "ar": "تعريف علاقة تبعية من نوع واحد إلى متعدد (One-to-Many)، بحيث إذا تغيرت حالة كائن معين (Subject)، يتم إشعار وتحديث جميع الكائنات التابعة له (Observers) تلقائياً.",
          "ok": true,
          "why": "النمط يؤسس لنموذج النشر والاشتراك (Publish-Subscribe) الفعال والمفكك للترابط.",
          "en": "Defining a one-to-many dependency relationship so that when one object (Subject) changes state, all its dependents (Observers) are notified and updated automatically."
        },
        {
          "ar": "حفظ البيانات في الذاكرة المؤقتة لمنع استهلاك مساحة القرص.",
          "ok": false,
          "why": "هذا تخزين مؤقت (Caching).",
          "en": "Caching data in temporary memory to avoid disk space usage."
        },
        {
          "ar": "تحويل واجهة الفئات القديمة لتطابق واجهة الفئات الحديثة.",
          "ok": false,
          "why": "هذا نمط المحول (Adapter).",
          "en": "Converting legacy class interfaces to match modern class interfaces."
        }
      ],
      "tip": "وقفة امتحانية: Observer = One-to-Many Dependency: تغير واحد في Subject يتبعه إشعار تلقائي لكافة الـ Observers."
    },
    {
      "n": 123,
      "type": "mcq",
      "ref": "L4-S018",
      "q_ar": "ما هو التشبيه الواقعي الأنسب لنمط المراقب (Observer) في الحياة اليومية؟",
      "q_en": "What is the best real-life analogy for the Observer pattern in daily life?",
      "opts": [
        {
          "ar": "الاشتراك في الصحف والمجلات؛ حيث يشترك القراء في الجريدة، وتصل النسخة الجديدة تلقائياً لكل مشترك فور صدورها دون أن يذهب بنفسه لمقر الجريدة كل دقيقة للسؤال.",
          "ok": true,
          "why": "تشبيه النشر والاشتراك الكلاسيكي؛ المشتركون يسجلون أنفسهم (Attach)، والناشر يوزع التحديث للجميع (Notify) عند وقوع الحدث.",
          "en": "Newspaper/magazine subscriptions; readers subscribe, and new issues are delivered automatically to each subscriber without visiting the headquarters every minute to inquire."
        },
        {
          "ar": "شراء سيارة جديدة من المعرض وتسديد ثمنها نقداً.",
          "ok": false,
          "why": "هذه معاملة بيع فردية.",
          "en": "Buying a new car from a showroom and paying cash."
        },
        {
          "ar": "قفل باب المنزل بالمفتاح الحديدي.",
          "ok": false,
          "why": "هذا تشبيه للحماية أو القفل (Lock).",
          "en": "Locking a house door with an iron key."
        },
        {
          "ar": "حساب مساحة الدائرة الرياضية.",
          "ok": false,
          "why": "هذه عملية حسابية.",
          "en": "Calculating mathematical circle area."
        }
      ],
      "tip": "وقفة امتحانية: بدلاً من أن يظل العميل يسأل (Polling: هل انتهى الطلب؟)، الموضوع هو من يبث الإشعار (Push Notification)."
    },
    {
      "n": 124,
      "type": "mcq",
      "ref": "L4-S020",
      "q_ar": "في مثال المقهى (Coffee Shop)، ما المشكلة في جعل كلاس المقهى يستدعي خدمات `SmsService` و `DisplayService` بشكل مباشر وصلب؟",
      "q_en": "In the Coffee Shop example, what is the problem with having CoffeeShop call `SmsService` and `DisplayService` directly?",
      "opts": [
        {
          "ar": "أن القهوة ستبرد قبل أن تصل للزبون.",
          "ok": false,
          "why": "هذا حدث واقعي ولا علاقة له بجودة كود النظام.",
          "en": "The coffee will get cold before reaching the customer."
        },
        {
          "ar": "الترابط الوثيق (Tight Coupling) وانتهاك مبدأ OCP؛ فإذا أردنا إضافة خدمة إشعار بريد أو تطبيق موبايل، سنضطر لتعديل وإعادة اختبار كود المقهى الأساسي في كل مرة.",
          "ok": true,
          "why": "كلاس المقهى أصبح معتمداً على تفاصيل الخدمات الفرعية، مما يجعله هشاً ومعقداً وصعب الصيانة.",
          "en": "Tight Coupling and violation of OCP; adding email notifications or a mobile app forces modifying and re-testing core CoffeeShop code every time."
        },
        {
          "ar": "أن لغة C# تمنع إرسال الرسائل القصيرة إطلاقاً.",
          "ok": false,
          "why": "C# تدعم كافة وسائل الاتصال.",
          "en": "C# strictly prohibits sending SMS messages."
        },
        {
          "ar": "أن استهلاك الذاكرة سيصل للحد الأقصى فوراً.",
          "ok": false,
          "why": "المشكلة في نظافة التصميم والمعمارية.",
          "en": "Memory consumption will immediately reach maximum capacity."
        }
      ],
      "tip": "وقفة امتحانية: الترابط المباشر بين الناشر والمستمعين يكسر OCP و DIP؛ والحل هو إدخال نمط Observer."
    },
    {
      "n": 125,
      "type": "mcq",
      "ref": "L4-S021",
      "q_ar": "كيف يحل نمط المراقب (Observer) مشكلة الترابط الوثيق في كلاس المقهى؟",
      "q_en": "How does the Observer pattern solve the tight coupling problem in the CoffeeShop class?",
      "opts": [
        {
          "ar": "بإلغاء إرسال الإشعارات للزبائن نهائياً.",
          "ok": false,
          "why": "هذا إلغاء لمتطلب رئيسي في المشروع.",
          "en": "By permanently cancelling sending notifications to customers."
        },
        {
          "ar": "بجعل المقهى (Subject) يحتفظ بقائمة عامة من واجهة مجردة `IObserver`، واستدعاء دالة `Update` للجميع دون معرفة الأنواع الملموسة للخدمات.",
          "ok": true,
          "why": "المقهى لا يعرف هل المراقب هو SMS أو شاشة عرض أو تطبيق جوال؛ هو يرسل الإشعار للواجهة التجريدية فقط.",
          "en": "By making CoffeeShop (Subject) maintain a generic list of abstract `IObserver`, calling `Update` on all observers without knowing their concrete service types."
        },
        {
          "ar": "بحفظ أسماء الزبائن في ملف نصي على القرص الصلب.",
          "ok": false,
          "why": "هذا تخزين ولا يحل الترابط البرمجي.",
          "en": "By saving customer names in a text file on the hard drive."
        },
        {
          "ar": "بتحويل المقهى إلى فئة مغلقة (sealed).",
          "ok": false,
          "why": "لا يحل مشكلة الإشعارات.",
          "en": "By converting CoffeeShop into a sealed class."
        }
      ],
      "tip": "وقفة امتحانية: Subject يعتمد فقط على `List<IObserver>`؛ وبذلك يتحقق فك الترابط التام (Loose Coupling)."
    },
    {
      "n": 126,
      "type": "mcq",
      "ref": "L4-S023",
      "q_ar": "من هم الأطراف الأربعة الأساسية في بنية نمط المراقب (Observer Pattern)؟",
      "q_en": "Who are the four primary participants in the Observer Pattern structure?",
      "opts": [
        {
          "ar": "Client, Facade, Subsystem, Adapter.",
          "ok": false,
          "why": "هذه أطراف أنماط هيكلية.",
          "en": "Client, Facade, Subsystem, Adapter."
        },
        {
          "ar": "Subject (الموضوع الأساسي), ConcreteSubject (الموضوع الملموس), Observer (واجهة المراقب), ConcreteObserver (المراقبون الملموسون).",
          "ok": true,
          "why": "هذه هي الأطراف الأربعة المعيارية لنمط المراقب وفق وثيقة GoF.",
          "en": "Subject, ConcreteSubject, Observer (Interface), ConcreteObserver."
        },
        {
          "ar": "Creator, ConcreteCreator, Product, ConcreteProduct.",
          "ok": false,
          "why": "هذه أطراف نمط Factory Method.",
          "en": "Creator, ConcreteCreator, Product, ConcreteProduct."
        },
        {
          "ar": "Context, State, ConcreteStateA, ConcreteStateB.",
          "ok": false,
          "why": "هذه أطراف نمط State.",
          "en": "Context, State, ConcreteStateA, ConcreteStateB."
        }
      ],
      "tip": "وقفة امتحانية: ثنائيات Observer: Subject & ConcreteSubject (الناشرون) / Observer & ConcreteObservers (المشتركون)."
    },
    {
      "n": 127,
      "type": "mcq",
      "ref": "L4-S024",
      "q_ar": "ما هي الدوال الثلاث الإلزامية التي يجب أن يوفرها كلاس الموضوع `Subject` لإدارة المراقبين؟",
      "q_en": "What are the three mandatory methods that a `Subject` class must provide to manage observers?",
      "opts": [
        {
          "ar": "`Start()`, `Stop()`, `Restart()`",
          "ok": false,
          "why": "هذه دوال إدارة خدمات أو خيوط معالجة.",
          "en": "`Start()`, `Stop()`, `Restart()`"
        },
        {
          "ar": "`Attach(IObserver)` (إضافة مراقب), `Detach(IObserver)` (إلغاء اشتراك مراقب), و `Notify()` (إشعار كافة المراقبين).",
          "ok": true,
          "why": "هذه هي العمليات الحيوية الثلاث لدورة حياة نمط Observer لإدارة قائمة المشتركين وبث التحديثات.",
          "en": "`Attach(IObserver)` (add observer), `Detach(IObserver)` (remove observer), and `Notify()` (notify all observers)."
        },
        {
          "ar": "`Read()`, `Write()`, `Delete()`",
          "ok": false,
          "why": "هذه عمليات إدارة ملفات أو قواعد بيانات.",
          "en": "`Read()`, `Write()`, `Delete()`"
        },
        {
          "ar": "`Encrypt()`, `Decrypt()`, `Sign()`",
          "ok": false,
          "why": "هذه دوال تشفير وأمان.",
          "en": "`Encrypt()`, `Decrypt()`, `Sign()`"
        }
      ],
      "tip": "وقفة امتحانية: احفظ الثلاثي المقدس لـ Subject: Attach (تسجيل) · Detach (إلغاء) · Notify (بث الإشعار للجميع)."
    },
    {
      "n": 128,
      "type": "mcq",
      "ref": "L4-S026",
      "q_ar": "ما هو التوقيع البرمجي القياسي لدالة واجهة المراقب `IObserver` في لغة C#؟",
      "q_en": "What is the standard method signature in the `IObserver` interface in C#?",
      "opts": [
        {
          "ar": "`public void InitializeDatabase();`",
          "ok": false,
          "why": "لا علاقة للمراقب بتهيئة قواعد البيانات.",
          "en": "`public void InitializeDatabase();`"
        },
        {
          "ar": "`void Update(string state);` أو `void Update(Order order);`",
          "ok": true,
          "why": "واجهة المراقب تعلن دالة التحديث التي يستدعيها Subject لتمرير الحالة الجديدة أو كائن التغيير.",
          "en": "`void Update(string state);` or `void Update(Order order);`"
        },
        {
          "ar": "`private int CalculateTax();`",
          "ok": false,
          "why": "الواجهات لا تحتوي دوال خاصة لحساب الضرائب.",
          "en": "`private int CalculateTax();`"
        },
        {
          "ar": "`public static void Main();`",
          "ok": false,
          "why": "دالة المدخل الرئيسية للتطبيق وليست دالة مراقب.",
          "en": "`public static void Main();`"
        }
      ],
      "tip": "وقفة امتحانية: دالة واجهة المراقب هي دائماً: `Update(...)` وهي الدالة التي يناديها Subject داخل حلقة `Notify()`."
    },
    {
      "n": 129,
      "type": "mcq",
      "ref": "L4-S028",
      "q_ar": "في مثال المقهى، ماذا تتضمن دالة `Notify()` داخل كلاس `CoffeeShop` برمجياً؟",
      "q_en": "In the Coffee Shop example, what does the `Notify()` method inside `CoffeeShop` contain programmatically?",
      "opts": [
        {
          "ar": "حذف كافة الطلبات من السجلات لحماية الخصوصية.",
          "ok": false,
          "why": "الهدف هو التبليغ وليس الحذف.",
          "en": "Deleting all orders from logs to protect privacy."
        },
        {
          "ar": "حلقة تكرار (foreach) تمر على كافة كائنات المراقبين المسجلين في القائمة وتستدعي دالة `observer.Update(orderInfo)` لكل منهم.",
          "ok": true,
          "why": "دالة Notify تدور على كل مراقب مسجل وتستدعي دالة Update الخاصة به لتبلغه بالحدث الجديد.",
          "en": "A foreach loop iterating over all registered observer objects in the list and invoking `observer.Update(orderInfo)` for each."
        },
        {
          "ar": "إيقاف خيط التنفيذ لمدة ساعتين.",
          "ok": false,
          "why": "هذا يعطل النظام.",
          "en": "Pausing execution thread for two hours."
        },
        {
          "ar": "إعادة بناء ملفات الـ DLL الخاصة بالمشروع.",
          "ok": false,
          "why": "غير صحيح برمجياً.",
          "en": "Rebuilding project DLL files."
        }
      ],
      "tip": "وقفة امتحانية: كود دالة Notify: `foreach (var obs in _observers) obs.Update(message);`."
    },
    {
      "n": 130,
      "type": "mcq",
      "ref": "L4-S030",
      "q_ar": "عندما ينفذ كلاس `SmsService` واجهة `IObserver`، كيف يستجيب لاستدعاء دالة `Update`؟",
      "q_en": "When `SmsService` implements `IObserver`, how does it respond to the `Update` call?",
      "opts": [
        {
          "ar": "يقوم بإرسال رسالة نصية SMS إلى هاتف الزبون لإعلامه بأن طلبه أصبح جاهزاً للاستلام.",
          "ok": true,
          "why": "كل مراقب ملموس ينفذ رد فعله الخاص بالحدث؛ فخدمة الـ SMS ترسل رسالة، وشاشة العرض تحدث الرسوميات، وهكذا.",
          "en": "Sends an SMS message to the customer's phone notifying them that their order is ready for pickup."
        },
        {
          "ar": "يقوم بحذف رقم هاتف الزبون من قائمة الاتصالات.",
          "ok": false,
          "why": "هذا تصرف تخريبي.",
          "en": "Deletes the customer's phone number from the contacts list."
        },
        {
          "ar": "يقوم بالاعتراض على رسالة المقهى ورمي استثناء دائم.",
          "ok": false,
          "why": "المراقب متلقي للحدث ومستجيب له.",
          "en": "Rejects the coffee shop message and throws a persistent exception."
        },
        {
          "ar": "يقوم بإطفاء شاشة العرض الرئيسية للمقهى.",
          "ok": false,
          "why": "شاشة العرض لها كلاس مراقب مستقل خاص بها.",
          "en": "Turns off the main coffee shop display screen."
        }
      ],
      "tip": "وقفة امتحانية: كل ConcreteObserver يفسر دالة Update بطريقته المستقلة تماماً عن بقية المراقبين."
    },
    {
      "n": 131,
      "type": "mcq",
      "ref": "L4-S033",
      "q_ar": "ما الميزة المعمارية الكبرى عندما نقرر إضافة مراقب جديد (مثل `EmailNotificationService`) إلى نظام المقهى؟",
      "q_en": "What is the major architectural advantage when adding a new observer (like `EmailNotificationService`) to the coffee shop?",
      "opts": [
        {
          "ar": "نضطر لتعديل كود المقهى بالكامل وإضافة متغيرات جديدة بداخله.",
          "ok": false,
          "why": "هذا في التصميم السيئ التقليدي.",
          "en": "We are forced to modify the entire CoffeeShop code and introduce new variables inside it."
        },
        {
          "ar": "نقوم ببساطة بإنشاء كلاس `EmailNotificationService` جديد ينفذ `IObserver` وتسجيله عبر `shop.Attach(emailService)` دون تعديل سطر واحد في كود المقهى الأصلي.",
          "ok": true,
          "why": "هذا هو التطبيق الصارم لمبدأ Open/Closed Principle؛ المقهى مفتوح لمراقبين جدد ومغلق أمام التعديل الداخلي.",
          "en": "We simply create a new `EmailNotificationService` class implementing `IObserver` and register it via `shop.Attach(emailService)` without modifying a single line of original CoffeeShop code."
        },
        {
          "ar": "يتطلب الأمر شراء خادم حاسوبي جديد حصراً.",
          "ok": false,
          "why": "إضافة فئة برمجية لا تتطلب عتاداً جديداً.",
          "en": "It strictly requires purchasing a new server computer."
        },
        {
          "ar": "يجب تحويل كافة المراقبين الآخرين إلى فئات ساكنة.",
          "ok": false,
          "why": "غير صحيح برمجياً.",
          "en": "All other observers must be converted to static classes."
        }
      ],
      "tip": "وقفة امتحانية: نمط Observer يحقق مبدأ OCP بامتياز: يمكنك إضافة 100 مراقب جديد دون مساس بكود Subject."
    },
    {
      "n": 132,
      "type": "mcq",
      "ref": "L4-S034",
      "q_ar": "ما الفارق الأساسي بين آلية الدفع (Push Model) وآلية السحب (Pull Model) في نمط المراقب؟",
      "q_en": "What is the key difference between Push and Pull models in the Observer pattern?",
      "opts": [
        {
          "ar": "Push يستخدم للبريد الإلكتروني و Pull يستخدم للرسائل القصيرة فقط.",
          "ok": false,
          "why": "هذا توصيف وسائل إرسال وليس الفارق المعماري لتدفق البيانات.",
          "en": "Push is used only for email, and Pull is used only for SMS."
        },
        {
          "ar": "في Push يرسل Subject كافة تفاصيل الحدث كمعاملات داخل دالة `Update(data)`؛ بينما في Pull يرسل Subject إشعاراً بسيطاً ويقوم المراقب بسحب واستعلام التفاصيل التي يحتاجها بنفسه.",
          "ok": true,
          "why": "Push يفرض البيانات على الكل؛ بينما Pull يمنح المراقب حرية اختيار واستعلام ما يهمه فقط من الكائن الأصلي.",
          "en": "In Push, Subject passes all event details as parameters inside `Update(data)`; in Pull, Subject sends a minimal notification and the Observer queries/pulls needed details itself."
        },
        {
          "ar": "Push مجاني بينما Pull يتطلب دفع رسوم ترخيص.",
          "ok": false,
          "why": "لا علاقة له بالرسوم.",
          "en": "Push is free, whereas Pull requires paying licensing fees."
        },
        {
          "ar": "كلاهما متطابقان تماماً ولا يوجد أي فرق في تدفق البيانات.",
          "ok": false,
          "why": "الفارق المعماري محوري في تصميم أداء الأنظمة الموزعة.",
          "en": "Both are completely identical with no difference in data flow."
        }
      ],
      "tip": "وقفة امتحانية: Push = الناشر يدفع كافة البيانات في الاستدعاء؛ Pull = الناشر يبلغ فقط، والمراقب يسحب ما يلزمه."
    },
    {
      "n": 133,
      "type": "mcq",
      "ref": "L4-S035",
      "q_ar": "عند الحاجة لتنفيذ عملية ما مع إمكانية دعم التراجع عنها (Undo/Redo) وحفظها في سجل تاريخي، ما النمط السلوكي الأنسب؟",
      "q_en": "When needing to execute an operation with Undo/Redo support and history logging, which behavioral pattern is best?",
      "opts": [
        {
          "ar": "نمط الاستراتيجية (Strategy).",
          "ok": false,
          "why": "Strategy يركز على تبديل الخوارزميات وليس حفظ تاريخ الطلبات والتراجع.",
          "en": "Strategy Pattern."
        },
        {
          "ar": "نمط الأمر (Command Design Pattern).",
          "ok": true,
          "why": "نمط Command يغلف الطلب ككائن مستقل يحتوي دالة `Execute()` ودالة `Undo()`، مما يسمح بحفظه في طابور أو مكدس للتراجع.",
          "en": "Command Design Pattern."
        },
        {
          "ar": "نمط السينغلتون (Singleton).",
          "ok": false,
          "why": "Singleton يضمن نسخة واحدة فقط.",
          "en": "Singleton Pattern."
        },
        {
          "ar": "نمط المزيّن (Decorator).",
          "ok": false,
          "why": "Decorator يضيف سلوكيات هيكلية وليس إدارة عمليات التراجع.",
          "en": "Decorator Pattern."
        }
      ],
      "tip": "وقفة امتحانية: الكلمات المفتاحية لنمط Command: 'Undo / Redo', 'Action Queuing', 'Encapsulate Request as Object'."
    },
    {
      "n": 134,
      "type": "mcq",
      "ref": "L4-S036",
      "q_ar": "ما هي العلاقة الرابطة بين أنماط التصميم ومبادئ SOLID وفق أسئلة الدكتور بيداء لعلع؟",
      "q_en": "What is the connective relationship between Design Patterns and SOLID principles in Dr. Baydaa's exams?",
      "opts": [
        {
          "ar": "أنماط التصميم تلغي مبادئ SOLID وتستبدلها بحلول عشوائية.",
          "ok": false,
          "why": "أنماط التصميم هي في الواقع تجسيد وتطبيق عملي مباشر لمبادئ SOLID.",
          "en": "Design patterns abolish SOLID principles and replace them with arbitrary solutions."
        },
        {
          "ar": "أنماط التصميم هي قوالب معمارية مجربة وُضعت خصيصاً لتطبيق وتحقيق مبادئ SOLID عملياً في الشفرات البرمجية ومكافحة أعراض التصميم السيئ.",
          "ok": true,
          "why": "كل نمط تصميم صُمم ليحقق واحداً أو أكثر من مبادئ SOLID (مثل تحقيق Strategy و Factory لـ OCP و DIP).",
          "en": "Design patterns are proven architectural templates formulated specifically to implement SOLID principles practically in code and eliminate code smells."
        },
        {
          "ar": "مبادئ SOLID مخصصة للعتاد وأنماط التصميم مخصصة للبرمجيات.",
          "ok": false,
          "why": "كلاهما مخصصان حصرياً لهندسة البرمجيات الكائنية.",
          "en": "SOLID principles are for hardware, while design patterns are for software."
        },
        {
          "ar": "لا توجد أي صلة علمية أو مفاهيمية بينهما إطلاقاً.",
          "ok": false,
          "why": "الربط بينهما هو الركيزة الأساسية لأسئلة الفاينل.",
          "en": "There is no scientific or conceptual connection between them whatsoever."
        }
      ],
      "tip": "وقفة امتحانية: المعادلة الذهبية: مبادئ SOLID هي (الفلسفة والأهداف)؛ وأنماط التصميم هي (أدوات التطبيق العملية)."
    },
    {
      "n": 135,
      "type": "mcq",
      "ref": "L4-S003",
      "q_ar": "ما هي المشكلة التي تنشأ عندما تتعدد طرق تنفيذ خوارزمية واحدة داخل نفس الفئة؟",
      "q_en": "What problem arises when multiple implementations of an algorithm exist within the same class?",
      "opts": [
        {
          "ar": "تضخم الفئة وتشعبها بجمل شرطية معقدة وصعوبة صيانتها واختبارها.",
          "ok": true,
          "why": "تعدد الخوارزميات داخل فئة واحدة يكسر مبدأ المسؤولية الأحادية ويرفع درجة التعقيد والترابط.",
          "en": "Class bloat, branching with complex conditionals, and poor maintainability and testability."
        },
        {
          "ar": "حذف الفئة تلقائياً من ملفات المشروع.",
          "ok": false,
          "why": "الفئة لا تُحذف تلقائياً.",
          "en": "Automatic deletion of the class from project files."
        },
        {
          "ar": "توقف المعالج عن العمل.",
          "ok": false,
          "why": "المعالج ينفذ الأوامر بشكل طبيعي ولكن التصميم يكون رديئاً.",
          "en": "The processor stops working."
        },
        {
          "ar": "انخفاض دقة ألوان الشاشة.",
          "ok": false,
          "why": "لا علاقة له بالرسوميات.",
          "en": "Screen color accuracy degrades."
        }
      ],
      "tip": "وقفة امتحانية: عندما تجد فئة تحتوي خوارزميات متعددة لنفس الغرض، فالحل المعماري هو استخراجها بنمط Strategy."
    },
    {
      "n": 136,
      "type": "mcq",
      "ref": "L4-S005",
      "q_ar": "في مثال نظام الدفع، ما هي الخصائص التي تحتاجها خوارزمية الدفع ببطاقة الائتمان مقارنة بـ PayPal؟",
      "q_en": "In the payment system example, what attributes does CreditCard payment require compared to PayPal?",
      "opts": [
        {
          "ar": "كلاهما يتطلبان بالضبط نفس اسم المستخدم وكلمة المرور دون أي فرق.",
          "ok": false,
          "why": "بطاقة الائتمان تتطلب رقم البطاقة وتاريخ الانتهاء ورمز CVV، بينما باي بال يتطلب بريداً إلكترونياً وكلمة مرور.",
          "en": "Both require the exact same username and password without any difference."
        },
        {
          "ar": "بطاقة الائتمان تحتاج رقم البطاقة و CVV وتاريخ الصلاحية، بينما PayPal يحتاج البريد الإلكتروني والمصادقة؛ مما يؤكد ضرورة تغليف كل خوارزمية في فئة مستقلة ببياناتها الخاصة.",
          "ok": true,
          "why": "اختلاف متطلبات البيانات يثبت أن تغليفهما في كلاسات منفصلة يحمي التغليف ويمنع تشويه كائن السلة ببيانات لا تخصه.",
          "en": "Credit card requires card number, CVV, and expiry date, while PayPal requires email and authentication; emphasizing the need to encapsulate each algorithm in an independent class with its own data."
        },
        {
          "ar": "لا تتطلب أي بيانات إطلاقاً وتتم العملية سحرياً.",
          "ok": false,
          "why": "العمليات المالية تتطلب بيانات اعتماد دقيقة.",
          "en": "They require no data at all and the operation happens magically."
        },
        {
          "ar": "بطاقة الائتمان لا يمكن برمجتها بلغة C#.",
          "ok": false,
          "why": "C# تدعم كافة بوابات الدفع الإلكتروني.",
          "en": "Credit cards cannot be programmed in C#."
        }
      ],
      "tip": "وقفة امتحانية: تغليف الخوارزمية في Strategy يسمح لكل كلاس بالاحتفاظ ببياناته الخاصة دون إثقال فئة Context."
    },
    {
      "n": 137,
      "type": "mcq",
      "ref": "L4-S009",
      "q_ar": "كيف ترتبط فئة `Context` بواجهة `Strategy` في مخطط UML؟",
      "q_en": "How is the `Context` class associated with the `Strategy` interface in UML?",
      "opts": [
        {
          "ar": "علاقة وراثة كاملة حيث ترث Context من Strategy.",
          "ok": false,
          "why": "Context لا يرث من Strategy بل يحتويه.",
          "en": "Full inheritance relationship where Context inherits from Strategy."
        },
        {
          "ar": "علاقة احتواء وتكوين (Composition/Aggregation) حيث يمتلك Context حقلاً من نوع واجهة Strategy.",
          "ok": true,
          "why": "Context يمتلك مرجعاً لـ Strategy ويفوض العمليات إليها، مما يجسد مبدأ فضّل التكوين على الوراثة.",
          "en": "A composition/aggregation relationship where Context holds a field of the Strategy interface type."
        },
        {
          "ar": "علاقة تبعية عشوائية دون أي مرجع دائم.",
          "ok": false,
          "why": "Context يحتفظ بالمرجع طوال فترة تنفيذ العملية.",
          "en": "An arbitrary dependency relationship without any permanent reference."
        },
        {
          "ar": "لا يوجد أي خط يربط بينهما في المخطط.",
          "ok": false,
          "why": "الرابط بينهما هو جوهر النمط.",
          "en": "There is no line connecting them in the diagram."
        }
      ],
      "tip": "وقفة امتحانية: في UML نمط Strategy: يرتبط Context بواجهة Strategy عبر سهم ارتباط ينتهي بـ `Strategy`."
    },
    {
      "n": 138,
      "type": "mcq",
      "ref": "L4-S013",
      "q_ar": "في كود C# لنمط Strategy، كيف تستدعي فئة `ShoppingCart` عملية الدفع؟",
      "q_en": "In C# Strategy code, how does `ShoppingCart` invoke the payment operation?",
      "opts": [
        {
          "ar": "`_paymentStrategy.Pay(amount);` عبر تفويض النداء لواجهة الاستراتيجية المحقونة.",
          "ok": true,
          "why": "السياق لا ينفذ كود الدفع بنفسه بل يفوضه مباشرة لكائن الاستراتيجية الحالي.",
          "en": "`_paymentStrategy.Pay(amount);` by delegating the invocation to the injected strategy interface."
        },
        {
          "ar": "`new SqlDatabase().Insert(amount);` كاستدعاء مباشر لقاعدة البيانات.",
          "ok": false,
          "why": "هذا يكسر التجريد والعمارة النظيفة.",
          "en": "`new SqlDatabase().Insert(amount);` as a direct database call."
        },
        {
          "ar": "`Thread.Sleep(5000);`",
          "ok": false,
          "why": "هذا تعليق للخيط وليس تنفيذاً للدفع.",
          "en": "`Thread.Sleep(5000);`"
        },
        {
          "ar": "`Console.ReadLine();`",
          "ok": false,
          "why": "هذه قراءة مدخلات وليست عملية دفع.",
          "en": "`Console.ReadLine();`"
        }
      ],
      "tip": "وقفة امتحانية: دالة الدفع في Context تختصر في سطر واحد: `_strategy.Execute();` (Pure Delegation)."
    },
    {
      "n": 139,
      "type": "mcq",
      "ref": "L4-S017",
      "q_ar": "ما المشكلة المعمارية في أسلوب الاستطلاع الدوري (Polling) لمعرفة تحديثات حالة كائن ما؟",
      "q_en": "What is the architectural flaw of Polling to check object state updates?",
      "opts": [
        {
          "ar": "أنه يستهلك موارد المعالج والشبكة بلا طائل في استعلامات متكررة معظمها يعود بدون أي تغيير، مع تأخر لحظة اكتشاف التحديث.",
          "ok": true,
          "why": "الـ Polling يجعل المستمع يسأل باستمرار 'هل هناك جديد؟' مما يهدر الموارد؛ بينما Observer يدفع التحديث فور وقوعه (Push).",
          "en": "It wastes CPU and network resources on repetitive queries that mostly return no change, while introducing delay in detecting updates."
        },
        {
          "ar": "أنه يمنع المستخدمين من تسجيل الدخول نهائياً.",
          "ok": false,
          "why": "لا علاقة له بتسجيل الدخول.",
          "en": "It permanently blocks users from logging in."
        },
        {
          "ar": "أنه يحذف قواعد البيانات من الخوادم السحابية.",
          "ok": false,
          "why": "لا علاقة له بحذف البيانات.",
          "en": "It deletes databases from cloud servers."
        },
        {
          "ar": "أنه يجعل كتابة الأكواد أسهل بكثير.",
          "ok": false,
          "why": "الـ Polling أسلوب ساذج ومهدر للموارد.",
          "en": "It makes code writing much easier."
        }
      ],
      "tip": "وقفة امتحانية: نمط Observer يقضي على مشكلة الـ Polling عبر الانتقال من Pull إلى Push المبني على الأحداث."
    },
    {
      "n": 140,
      "type": "mcq",
      "ref": "L4-S019",
      "q_ar": "في سيناريو المقهى، إذا تم طلب قهوة تأخذ 10 دقائق للتحضير، كيف يتصرف النظام المعتمد على Observer؟",
      "q_en": "In the coffee shop scenario, if an order takes 10 minutes, how does the Observer-based system behave?",
      "opts": [
        {
          "ar": "يقوم الزبون بالوقوف أمام الباريستا وسؤاله كل 5 ثوانٍ عما إذا كانت القهوة جاهزة.",
          "ok": false,
          "why": "هذا تشبيه للـ Polling السيئ والمهدر للوقت والجهد.",
          "en": "The customer stands in front of the barista asking every 5 seconds if the coffee is ready."
        },
        {
          "ar": "يحصل الزبون على جهاز منبه أو يسجل رقم هاتفه (Attach)، ويذهب للجلوس بحرية، وفور انتهاء التحضير يطلق النظام إشارة التنبيه لكافة المسجلين (Notify).",
          "ok": true,
          "why": "هذا هو التجسيد المثالي لنمط Observer؛ عدم حجب الزبون وإخطاره فورياً بالحدث عند جهوزيته.",
          "en": "The customer receives a pager or registers their phone number (Attach) and sits comfortably; once ready, the system emits a notification signal to all registered subscribers (Notify)."
        },
        {
          "ar": "يقوم المقهى بإلغاء الطلب بعد دقيقة واحدة تلقائياً.",
          "ok": false,
          "why": "كلام غير منطقي.",
          "en": "The coffee shop automatically cancels the order after one minute."
        },
        {
          "ar": "يتم إغلاق المقهى حتى يتم الانتهاء من كوب القهوة.",
          "ok": false,
          "why": "كلام غير منطقي.",
          "en": "The coffee shop closes until the cup of coffee is completed."
        }
      ],
      "tip": "وقفة امتحانية: في Observer: المشترك حر ومفكك الترابط، والناشر هو المسؤول عن إرسال الإشعار عند وقوع الحدث."
    },
    {
      "n": 141,
      "type": "mcq",
      "ref": "L4-S022",
      "q_ar": "ماذا يعني أن نمط المراقب (Observer) يوفر اقتراناً ضعيفاً (Loose Coupling) بين الناشر والمشتركين؟",
      "q_en": "What does it mean that the Observer pattern provides Loose Coupling between Subject and Observers?",
      "opts": [
        {
          "ar": "أن Subject لا يمكنه الاتصال بالإنترنت.",
          "ok": false,
          "why": "لا علاقة له باتصال الإنترنت.",
          "en": "That Subject cannot connect to the internet."
        },
        {
          "ar": "أن Subject لا يعرف عن المراقبين سوى أنهم ينفذون واجهة `IObserver`، دون أن يعرف فئاتهم الملموسة أو طريقة تنفيذهم للدالة.",
          "ok": true,
          "why": "الموضوع يجهل تفاصيل المراقبين، مما يسمح بتعديل أو إضافة مراقبين جدد دون أي تأثير على كود الموضوع الأصلي.",
          "en": "Subject knows nothing about observers except that they implement the `IObserver` interface, without knowing their concrete classes or implementation details."
        },
        {
          "ar": "أن المراقبين يستهلكون طاقة أقل في الذاكرة العشوائية.",
          "ok": false,
          "why": "الميزة معمارية في استقلالية الشفرات البرمجية.",
          "en": "That observers consume less energy in RAM."
        },
        {
          "ar": "أن الكائنات تنفصل عن بعضها البعض وتفقد البيانات.",
          "ok": false,
          "why": "Loose Coupling يعني المرونة والاستقلالية وليس فقدان البيانات.",
          "en": "That objects disconnect from each other and lose data."
        }
      ],
      "tip": "وقفة امتحانية: Loose Coupling يعني: التفاعل عبر الواجهات المجردة دون معرفة التفاصيل الملموسة."
    },
    {
      "n": 142,
      "type": "mcq",
      "ref": "L4-S025",
      "q_ar": "في مثال المقهى العملي، ما هي قائمة البيانات التي يحتفظ بها كلاس `CoffeeShop` داخلياً؟",
      "q_en": "In the practical coffee shop example, what data collection does `CoffeeShop` maintain internally?",
      "opts": [
        {
          "ar": "`private List<IObserver> _observers = new List<IObserver>();`",
          "ok": true,
          "why": "الموضوع يحتفظ بقائمة من مراجع واجهة المراقبين لتسجيلهم وحذفهم والتكرار عليهم عند الإشعار.",
          "en": "`private List<IObserver> _observers = new List<IObserver>();`"
        },
        {
          "ar": "`public string[] allPasswords;`",
          "ok": false,
          "why": "لا يحتفظ بكلمات مرور المستخدمين.",
          "en": "`public string[] allPasswords;`"
        },
        {
          "ar": "`private int[] numbers;`",
          "ok": false,
          "why": "القائمة مخصصة للمراقبين وليس للأرقام.",
          "en": "`private int[] numbers;`"
        },
        {
          "ar": "`public Dictionary<int, Thread> threads;`",
          "ok": false,
          "why": "النمط كائني وليس جدول خيوط.",
          "en": "`public Dictionary<int, Thread> threads;`"
        }
      ],
      "tip": "وقفة امتحانية: البنية التحتية لـ Subject هي دائماً تجميعة لكائنات تنفذ واجهة المراقب: `List<IObserver>`."
    },
    {
      "n": 143,
      "type": "mcq",
      "ref": "L4-S027",
      "q_ar": "ماذا تفعل دالة `Attach(IObserver observer)` داخل كلاس الموضوع `Subject`؟",
      "q_en": "What does `Attach(IObserver observer)` do inside the `Subject` class?",
      "opts": [
        {
          "ar": "تقوم بحذف المراقب من الذاكرة العشوائية نهائياً.",
          "ok": false,
          "why": "هذا دور دالة Detach أو جامع القمامة.",
          "en": "Permanently deletes the observer from RAM."
        },
        {
          "ar": "تقوم بإضافة كائن المراقب الممرر إلى قائمة المشتركين `_observers.Add(observer)` لتلقي الإشعارات المستقبلية.",
          "ok": true,
          "why": "دالة Attach هي عملية الاشتراك (Subscribe) لتسجيل المستمع في قائمة انتظار التحديثات.",
          "en": "Adds the passed observer object to the subscriber list `_observers.Add(observer)` to receive future notifications."
        },
        {
          "ar": "تقوم بإيقاف تشغيل الخادم.",
          "ok": false,
          "why": "غير صحيح برمجياً.",
          "en": "Shuts down the server."
        },
        {
          "ar": "تقوم بتشفير رسائل البريد الإلكتروني.",
          "ok": false,
          "why": "ليست من وظائف دالة Attach.",
          "en": "Encrypts email messages."
        }
      ],
      "tip": "وقفة امتحانية: Attach = Subscribe (تسجيل مراقب)؛ Detach = Unsubscribe (إلغاء اشتراك مراقب)."
    },
    {
      "n": 144,
      "type": "mcq",
      "ref": "L4-S031",
      "q_ar": "ماذا تفعل دالة `Detach(IObserver observer)` داخل كلاس الموضوع `Subject`؟",
      "q_en": "What does `Detach(IObserver observer)` do inside the `Subject` class?",
      "opts": [
        {
          "ar": "تقوم بإلغاء تسجيل المراقب وحذفه من قائمة المشتركين `_observers.Remove(observer)` ليتوقف عن استلام الإشعارات.",
          "ok": true,
          "why": "دالة Detach تسمح للمراقب بالانسحاب من قائمة الإشعارات في أي وقت أثناء وقت التشغيل.",
          "en": "Unregisters the observer and removes it from the subscriber list `_observers.Remove(observer)` to stop receiving notifications."
        },
        {
          "ar": "تقوم بحذف الكائن الأصلي ومسح كافة الطلبات.",
          "ok": false,
          "why": "الـ Detach يحذف المشترك فقط من القائمة.",
          "en": "Deletes the original object and erases all orders."
        },
        {
          "ar": "تقوم بإنشاء 10 مراقبين جدد بدلاً منه.",
          "ok": false,
          "why": "هذا عكس وظيفة الإلغاء.",
          "en": "Creates 10 new observers in its place."
        },
        {
          "ar": "تقوم بإعادة تشغيل بيئة CLR.",
          "ok": false,
          "why": "غير صحيح برمجياً.",
          "en": "Restarts the CLR runtime."
        }
      ],
      "tip": "وقفة امتحانية: دالة Detach تضمن إمكانية إلغاء الاشتراك الديناميكي ومنع تسريب الذاكرة (Memory Leaks)."
    },
    {
      "n": 145,
      "type": "mcq",
      "ref": "L4-S032",
      "q_ar": "كيف يساعد نمط المراقب (Observer) في دعم معمارية الأنظمة الموجهة بالأحداث (Event-Driven Architecture)؟",
      "q_en": "How does the Observer pattern support Event-Driven Architecture?",
      "opts": [
        {
          "ar": "بإلغاء استخدام بروتوكول HTTP في الشبكات.",
          "ok": false,
          "why": "لا علاقة له ببروتوكولات النقل.",
          "en": "By eliminating the use of HTTP protocol in networks."
        },
        {
          "ar": "بتمكين الأنظمة من التفاعل اللحظي مع الأحداث فور وقوعها ونشرها للمهتمين دون الحاجة للتنسيق المركزي الصارم.",
          "ok": true,
          "why": "نمط المراقب هو النواة الأساسية لنموذج النشر والاشتراك (Pub/Sub) الذي تقوم عليه كافة الأنظمة الموجهة بالأحداث.",
          "en": "By enabling systems to react in real-time to events as they occur and broadcasting them to interested parties without rigid central orchestration."
        },
        {
          "ar": "بإجبار جميع المطورين على استخدام نفس قاعدة البيانات.",
          "ok": false,
          "why": "الأنظمة الموجهة بالأحداث مفككة ومستقلة.",
          "en": "By forcing all developers to use the exact same database."
        },
        {
          "ar": "بمنع تشغيل أكثر من تطبيق واحد على نفس الجهاز.",
          "ok": false,
          "why": "غير صحيح برمجياً.",
          "en": "By preventing running more than one application on the same machine."
        }
      ],
      "tip": "وقفة امتحانية: أحداث لغة C# ومفتاح `event` و `delegate` مبنية بالكامل في جوهرها على نمط Observer!"
    },
    {
      "n": 146,
      "type": "mcq",
      "ref": "L5-S002",
      "q_ar": "ما هو الهدف الجوهري لدراسة معمارية البرمجيات والعمارة النظيفة (Clean Architecture)؟",
      "q_en": "What is the core goal of studying Software Architecture and Clean Architecture?",
      "opts": [
        {
          "ar": "حفظ أسماء المجلدات الافتراضية في نظام التشغيل.",
          "ok": false,
          "why": "المعمارية علم هيكلة النظم وليست إدارة مجلدات نظام التشغيل.",
          "en": "Memorizing default folder names in the operating system."
        },
        {
          "ar": "بناء أنظمة قابلة للصيانة، التوسع، الاختبار، ومستقلة عن قواعد البيانات وأطر العمل الخارجية.",
          "ok": true,
          "why": "العمارة النظيفة تجعل منطق الأعمال هو القلب المستقل للنظام، مع بقاء أطر العمل وقواعد البيانات مجرد تفاصيل خارجية.",
          "en": "Building maintainable, scalable, testable systems that are independent of databases and external frameworks."
        },
        {
          "ar": "إلغاء الحاجة لكتابة كود برمجي واستبداله بالذكاء الاصطناعي كلياً.",
          "ok": false,
          "why": "العمارة تتطلب تصميماً هندسياً دقيقاً من المطور.",
          "en": "Eliminating the need to write code and replacing it entirely with AI."
        },
        {
          "ar": "تسريع وقت تشغيل ألعاب الفيديو على بطاقات الرسوميات.",
          "ok": false,
          "why": "مجال العمارة يختص بنظم وتطبيقات الأعمال الشاملة.",
          "en": "Speeding up video game startup time on GPUs."
        }
      ],
      "tip": "وقفة امتحانية: Clean Architecture تجعل كود الأعمال مستقلاً عن: Frameworks, UI, Database, External Agencies."
    },
    {
      "n": 147,
      "type": "mcq",
      "ref": "L5-S004",
      "q_ar": "ما هو التعريف الدقيق لمعمارية البرمجيات (Software Architecture)؟",
      "q_en": "What is the precise definition of Software Architecture?",
      "opts": [
        {
          "ar": "شكل الأزرار والألوان المستخدمة في واجهة الموقع الإلكتروني.",
          "ok": false,
          "why": "هذا تصميم واجهة مستخدم (UI Design) وليس معمارية نظام.",
          "en": "The shape of buttons and colors used in a website interface."
        },
        {
          "ar": "الهيكل التنظيمي العام للنظام، متضمناً مكوناته البرمجية، العلاقات والحدود بينها، والمبادئ الموجهة لتطوره.",
          "ok": true,
          "why": "المعمارية هي المخطط الاستراتيجي الكبير الذي يحدد كيفية تقسيم النظام إلى طبقات ومشاريع وكيف تتفاعل مع بعضها.",
          "en": "The overall organizational structure of the system, including its software components, their relationships and boundaries, and principles guiding its evolution."
        },
        {
          "ar": "سعة ذاكرة الوصول العشوائي المثبتة داخل صندوق الحاسوب.",
          "ok": false,
          "why": "هذا عتاد حاسوبي فيزيائي.",
          "en": "The RAM capacity installed inside the computer case."
        },
        {
          "ar": "برنامج مكافحة الفيروسات المثبت على الخادم.",
          "ok": false,
          "why": "برنامج تطبيقي حمايتي وليس معمارية برمجية.",
          "en": "The antivirus software installed on the server."
        }
      ],
      "tip": "وقفة امتحانية: العمارة تهتم بالقرارات الهيكلية الكبرى التي يصعب ويُكلف تغييرها لاحقاً في المشروع."
    },
    {
      "n": 148,
      "type": "mcq",
      "ref": "L5-S005",
      "q_ar": "أي من الخصائص التالية تُعد من سمات المعمارية البرمجية الجيدة (Good Architecture Qualities)؟",
      "q_en": "Which of the following is a quality of good software architecture?",
      "opts": [
        {
          "ar": "الترابط الوثيق الشديد بين كافة طبقات النظام لسرعة الاستدعاء المباشر.",
          "ok": false,
          "why": "الترابط الوثيق (Tight Coupling) هو العيب الأكبر لأي معمارية سيئة.",
          "en": "Extreme tight coupling across all system layers for faster direct invocation."
        },
        {
          "ar": "قابلية الاختبار (Testability)، سهولة الصيانة (Maintainability)، المرونة وقابلية التوسع (Scalability).",
          "ok": true,
          "why": "المعمارية الجيدة تسمح باختبار منطق الأعمال بمعزل عن قواعد البيانات والواجهات، وتقبل التطور والتوسع بسهولة.",
          "en": "Testability, Maintainability, Flexibility, and Scalability."
        },
        {
          "ar": "دمج كامل شفرة النظام داخل مشروع تنفيذي واحد غير قابل للتجزئة.",
          "ok": false,
          "why": "التفكيك إلى مشاريع متعددة هو أساس العمارة الحديثة.",
          "en": "Merging the entire system code into a single indivisible executable project."
        },
        {
          "ar": "الاعتماد الدائم على نوع واحد محدد من قواعد البيانات دون إمكانية استبداله.",
          "ok": false,
          "why": "المعمارية الجيدة تجرد الوصول لقواعد البيانات.",
          "en": "Permanent reliance on one specific database engine without any replacement possibility."
        }
      ],
      "tip": "وقفة امتحانية: أهم مؤشر لجودة المعمارية: هل يمكنك اختبار منطق الأعمال دون تشغيل قاعدة بيانات أو واجهة مستخدم؟"
    },
    {
      "n": 149,
      "type": "mcq",
      "ref": "L5-S006",
      "q_ar": "ماذا يقصد بمبدأ فصل الاهتمامات (Separation of Concerns - SoC) في هندسة النظم؟",
      "q_en": "What is meant by Separation of Concerns (SoC) in systems engineering?",
      "opts": [
        {
          "ar": "فصل المطورين عن بعضهم ومنعهم من التواصل أثناء العمل.",
          "ok": false,
          "why": "SoC مبدأ تنظيمي للكود وليس للموظفين.",
          "en": "Separating developers from each other and preventing communication during work."
        },
        {
          "ar": "تقسيم البرنامج إلى أقسام متميزة، بحيث يعالج كل قسم اهتماماً أو مسؤولية برمجية محددة ومستقلة (مثل فصل العرض عن الأعمال عن التخزين).",
          "ok": true,
          "why": "مبدأ SoC يضمن عدم تداخل المسؤوليات، مما يجعل كل جزء متخصصاً ومستقلاً وأسهل في التطوير والفحص.",
          "en": "Dividing a program into distinct sections, where each section addresses a separate concern or responsibility (e.g., separating presentation, business, and storage)."
        },
        {
          "ar": "حذف اهتمامات الأمان لتسريع معالجة البيانات.",
          "ok": false,
          "why": "الأمان ركيزة لا يمكن حذفها.",
          "en": "Deleting security concerns to accelerate data processing."
        },
        {
          "ar": "إجبار المستخدم على تسجيل الدخول مرتين متتاليتين.",
          "ok": false,
          "why": "إجراء تحقق أمني ولا علاقة له بـ SoC.",
          "en": "Forcing the user to log in twice consecutively."
        }
      ],
      "tip": "وقفة امتحانية: SoC هو الأساس الفلسفي الذي تبنى عليه كافة المعماريات الطبقية (Layered & Clean Architecture)."
    },
    {
      "n": 150,
      "type": "mcq",
      "ref": "L5-S007",
      "q_ar": "ما هو الهيكل التقليدي للعمارة متعددة الطبقات (Traditional N-Tier Architecture)؟",
      "q_en": "What is the structure of traditional N-Tier architecture?",
      "opts": [
        {
          "ar": "Presentation Layer -> Business Logic Layer (BLL) -> Data Access Layer (DAL) -> Database.",
          "ok": true,
          "why": "هذا هو الترتيب الهرمي الكلاسيكي؛ العرض يستدعي منطق الأعمال، والأعمال تستدعي طبقة الوصول للبيانات، والأخيرة تتصل بقاعدة البيانات.",
          "en": "Presentation Layer -> Business Logic Layer (BLL) -> Data Access Layer (DAL) -> Database."
        },
        {
          "ar": "Database -> UI -> Presentation -> Application.",
          "ok": false,
          "why": "ترتيب مقلوب وغير منطقي.",
          "en": "Database -> UI -> Presentation -> Application."
        },
        {
          "ar": "Domain -> Infrastructure -> Presentation -> Storage.",
          "ok": false,
          "why": "هذا خليط غير صحيح للمصطلحات.",
          "en": "Domain -> Infrastructure -> Presentation -> Storage."
        },
        {
          "ar": "طبقة واحدة موحدة تشمل كافة الأكواد دفعة واحدة.",
          "ok": false,
          "why": "هذا المونوليث غير المعياري وليس N-Tier.",
          "en": "A single unified layer containing all code at once."
        }
      ],
      "tip": "وقفة امتحانية: في N-Tier التقليدي: التدفق هرمي من الأعلى للأسفل: Presentation -> BLL -> DAL -> DB."
    },
    {
      "n": 151,
      "type": "mcq",
      "ref": "L5-S009",
      "q_ar": "في العمارة التقليدية N-Tier، ما اتجاه التبعية (Dependency Direction) المعتمد بين الطبقات؟",
      "q_en": "In traditional N-Tier architecture, what is the dependency direction between layers?",
      "opts": [
        {
          "ar": "من الأسفل إلى الأعلى حيث تعتمد قاعدة البيانات على واجهة المستخدم.",
          "ok": false,
          "why": "قاعدة البيانات لا تعرف أي شيء عن واجهات المستخدم.",
          "en": "Bottom-to-top where the database depends on the user interface."
        },
        {
          "ar": "من الأعلى إلى الأسفل باتجاه قاعدة البيانات (Top-to-Bottom towards the Database).",
          "ok": true,
          "why": "طبقة العرض تعتمد على الأعمال، والأعمال تعتمد مباشرة على طبقة البيانات؛ فكل شيء يتجه نحو قاعدة البيانات في القاع.",
          "en": "Top-to-bottom pointing towards the database (Top-to-Bottom towards the Database)."
        },
        {
          "ar": "تبعية دائرية عشوائية بين جميع الطبقات.",
          "ok": false,
          "why": "التبعيات الدائرية ممنوعة معمارياً وتسبب أخطاء بناء.",
          "en": "Arbitrary circular dependency among all layers."
        },
        {
          "ar": "لا توجد أي تبعيات بين الطبقات إطلاقاً.",
          "ok": false,
          "why": "في N-Tier توجد تبعيات مباشرة صلبة.",
          "en": "There are no dependencies between layers whatsoever."
        }
      ],
      "tip": "وقفة امتحانية: في N-Tier التقليدي: التبعية موجهة للأسفل نحو قاعدة البيانات (Database-Centric)."
    },
    {
      "n": 152,
      "type": "mcq",
      "ref": "L5-S010",
      "q_ar": "ما هي العلة الكبرى في العمارة المرتكزة حول قاعدة البيانات (Database-Centric Architecture)؟",
      "q_en": "What is the major flaw in Database-Centric Architecture?",
      "opts": [
        {
          "ar": "أن قواعد البيانات تستهلك كهرباء أكثر من اللازم.",
          "ok": false,
          "why": "ليست علة معمارية برمجية.",
          "en": "Databases consume excessive electricity."
        },
        {
          "ar": "أن منطق الأعمال أصبح أسيراً ومعتمداً على مخطط وتفاصيل قاعدة البيانات (Data Models/SQL)، وأي تعديل في الجداول يكسر كود الأعمال مباشرة.",
          "ok": true,
          "why": "البيزنس يجب أن يقود التكنولوجيا وليس العكس؛ ارتكاز النظام حول الجداول يجعل تغيير تقنية التخزين أو اختبار منطق الأعمال أمراً شديد الصعوبة.",
          "en": "Business logic becomes tightly coupled to and dependent on database schema details (Data Models/SQL), so any table modification directly breaks business code."
        },
        {
          "ar": "أنها لا تسمح بإنشاء حسابات مستخدمين جديدة.",
          "ok": false,
          "why": "الحسابات تنشأ بشكل طبيعي.",
          "en": "It does not allow creating new user accounts."
        },
        {
          "ar": "أنها ممنوعة بموجب قوانين الإنترنت الدولية.",
          "ok": false,
          "why": "ليست قوانين دولية بل ممارسات هندسية.",
          "en": "It is prohibited under international internet laws."
        }
      ],
      "tip": "وقفة امتحانية: المشكلة: Business Logic يعتمد على Data Access؛ والنتيجة: ارتهان الأعمال لتقنيات التخزين."
    },
    {
      "n": 153,
      "type": "mcq",
      "ref": "L5-S013",
      "q_ar": "ما هي 'التبعية الانتقالية' (Transitive Dependency) التي تعاني منها طبقة العرض في العمارة التقليدية N-Tier؟",
      "q_en": "What is the 'Transitive Dependency' problem that the Presentation layer suffers from in traditional N-Tier?",
      "opts": [
        {
          "ar": "انتقال الفيروسات من جهاز العميل إلى الخادم.",
          "ok": false,
          "why": "هذا أمن شبكات عتادي وليس تبعية برمجية.",
          "en": "Transmission of viruses from client machine to server."
        },
        {
          "ar": "بما أن Presentation تعتمد على BLL، و BLL تعتمد على DAL، فإن Presentation تصبح بالتبعية معتمدة بشكل غير مباشر على تفاصيل وحزم قاعدة البيانات.",
          "ok": true,
          "why": "إذا كان A يعتمد على B و B يعتمد على C، فإن A يرتبط بـ C انتقالياً؛ مما يلوث الواجهة بتفاصيل التخزين.",
          "en": "Since Presentation depends on BLL and BLL depends on DAL, Presentation transitively and indirectly depends on database details and packages."
        },
        {
          "ar": "انتقال البيانات عبر الألياف الضوئية السريعة.",
          "ok": false,
          "why": "هذا وسيط نقل فيزيائي.",
          "en": "Data transmission over high-speed optical fibers."
        },
        {
          "ar": "إلغاء التبعيات وتحويل الكود إلى كود نظيف تلقائياً.",
          "ok": false,
          "why": "هذا عكس المشكلة.",
          "en": "Eliminating dependencies and automatically converting code into clean code."
        }
      ],
      "tip": "وقفة امتحانية: Transitive Dependency: Presentation -> BLL -> DAL تجعل واجهة المستخدم مرتبطة بحزم قاعدة البيانات!"
    },
    {
      "n": 154,
      "type": "mcq",
      "ref": "L5-S014",
      "q_ar": "ما هو الفارق الجوهري بين المعمارية المرتكزة على البيانات (Database-Centric) والمعمارية المرتكزة على المجال (Domain-Centric)؟",
      "q_en": "What is the fundamental difference between Database-Centric and Domain-Centric architectures?",
      "opts": [
        {
          "ar": "Database-Centric مجانية و Domain-Centric مدفوعة الثمن.",
          "ok": false,
          "why": "أنماط معمارية وليست برامج تجارية.",
          "en": "Database-Centric is free, while Domain-Centric is paid."
        },
        {
          "ar": "في الأولى قاعدة البيانات هي المركز وقواعد الأعمال تفصيل ثانوي تابع لها؛ بينما في الثانية مجال الأعمال (Domain) هو المركز المستقل وقاعدة البيانات مجرد تفصيل خارجي خادم له.",
          "ok": true,
          "why": "في Domain-Centric: قواعد الأعمال هي الأهم والأبقى، وتصمم باستقلالية تامة عن كيفية تخزينها سواء في SQL أو NoSQL.",
          "en": "In the former, the database is central and business rules are secondary dependents; in the latter, the business domain is the independent core and the database is an external servant detail."
        },
        {
          "ar": "الأولى تعمل على ويندوز والثانية على لينكس فقط.",
          "ok": false,
          "why": "المعمارية مستقلة عن أنظمة التشغيل.",
          "en": "The former runs on Windows and the latter on Linux only."
        },
        {
          "ar": "لا يوجد أي فرق بينهما فهما نفس الشيء.",
          "ok": false,
          "why": "الفارق المعماري هو أساس الثورة البرمجية الحديثة.",
          "en": "There is no difference between them; they are the exact same thing."
        }
      ],
      "tip": "وقفة امتحانية: التحول المعماري الأكبر: من Database-Centric (الجداول أولاً) إلى Domain-Centric (قواعد الأعمال أولاً)."
    },
    {
      "n": 155,
      "type": "mcq",
      "ref": "L5-S016",
      "q_ar": "في التصميم الموجه بالمجال (DDD)، ما هو 'مجال الأعمال' (Business Domain) في النظم الكائنية؟",
      "q_en": "In Domain-Driven Design (DDD), what is the 'Business Domain' in object-oriented systems?",
      "opts": [
        {
          "ar": "اسم النطاق وعنوان الموقع الإلكتروني (مثل www.example.com).",
          "ok": false,
          "why": "هذا اسم نطاق ويب (DNS Domain) وليس مجال الأعمال المؤسسي.",
          "en": "The domain name and website URL (such as www.example.com)."
        },
        {
          "ar": "العالم الحقيقي للنشاط التجاري والمفاهيم والقواعد والسياسات والعمليات التي يعمل النظام البرمجي لحلها وخدمتها (مثل الحسابات البنكية، سلات الشراء، الشحن).",
          "ok": true,
          "why": "الـ Business Domain هو جوهر النشاط المؤسسي والمنطق التجاري الحقيقي المستقل عن أي تقنية حاسوبية.",
          "en": "The real-world business sphere, concepts, rules, policies, and processes that the software solves and serves (such as bank accounts, shopping carts, shipping)."
        },
        {
          "ar": "مساحة القرص الصلب المخصصة لحفظ ملفات النظام.",
          "ok": false,
          "why": "هذا تخصيص مساحة تخزين عتادي.",
          "en": "Hard drive disk space allocated to store system files."
        },
        {
          "ar": "نوع لغة البرمجة التي يتم كتابة الكود بها.",
          "ok": false,
          "why": "المجال يصف عالم الأعمال وليس لغات البرمجة.",
          "en": "The programming language type used to write the code."
        }
      ],
      "tip": "وقفة امتحانية: Domain = قلب النشاط التجاري وقواعده التي تظل صحيحة حتى لو استغنينا عن الحواسيب واستخدمنا الورق."
    },
    {
      "n": 156,
      "type": "mcq",
      "ref": "L5-S019",
      "q_ar": "ما هي العمارة النظيفة (Clean Architecture) التي ابتكرها روبرت مارتن (Uncle Bob)؟",
      "q_en": "What is Clean Architecture introduced by Robert C. Martin (Uncle Bob)?",
      "opts": [
        {
          "ar": "برنامج لتنظيف الملفات المؤقتة وسجل التصفح من حاسوب المطور.",
          "ok": false,
          "why": "العمارة النظيفة فلسفة تصميم وهيكلة برمجيات وليست أداة تنظيف حاسوب.",
          "en": "Software for cleaning temporary files and browsing history from developer machines."
        },
        {
          "ar": "معمارية برمجية تنظم النظام في طبقات متحدة المركز تحكمها قاعدة التبعية للداخل، لفصل قواعد الأعمال عن أطر العمل والواجهات وقواعد البيانات.",
          "ok": true,
          "why": "العمارة النظيفة تجعل النظام مستقلاً عن الأطر الخارجية، وقابلاً للاختبار بسهولة، ومحمياً من تقلبات التقنيات المحيطة.",
          "en": "A software architecture organizing the system into concentric layers governed by the inward dependency rule, decoupling business rules from frameworks, UIs, and databases."
        },
        {
          "ar": "إلغاء استخدام محددات الوصول في لغة C#.",
          "ok": false,
          "why": "العمارة تعتمد على محددات الوصول لحماية الطبقات.",
          "en": "Eliminating access modifiers in C#."
        },
        {
          "ar": "كتابة كامل كود النظام داخل ملف برمجي واحد نظيف وخالٍ من التعليقات.",
          "ok": false,
          "why": "العمارة النظيفة تعتمد على تقسيم الكود إلى مشاريع متعددة متخصصة.",
          "en": "Writing the entire system code inside a single clean file free of comments."
        }
      ],
      "tip": "وقفة امتحانية: ركائز Clean Architecture: Independent of Frameworks, Testable, Independent of UI, Independent of Database."
    },
    {
      "n": 157,
      "type": "mcq",
      "ref": "L5-S022",
      "q_ar": "ما هو النص الصارم لقاعدة التبعية الذهبية (The Dependency Rule) في العمارة النظيفة؟",
      "q_en": "What is the strict statement of The Dependency Rule in Clean Architecture?",
      "opts": [
        {
          "ar": "يجب أن تتجه شفرات التبعية دائماً إلى الخارج نحو واجهات المستخدم.",
          "ok": false,
          "why": "هذا يكسر العمارة النظيفة بالكامل.",
          "en": "Source code dependencies must always point outward toward user interfaces."
        },
        {
          "ar": "يجب أن تتجه شفرات ومراجع التبعية دائماً وأبداً إلى الداخل فقط نحو قواعد الأعمال (Dependencies Point Inward).",
          "ok": true,
          "why": "الطبقات الداخلية لا تعرف أي شيء عن الطبقات الخارجية؛ لا يجوز لطبقة داخلية أن تذكر اسم أي فئة أو واجهة موجودة في طبقة خارجية.",
          "en": "Source code dependencies must always and exclusively point inward toward business rules (Dependencies Point Inward)."
        },
        {
          "ar": "يجب أن تعتمد كل طبقة على الطبقة المجاورة لها في كلا الاتجاهين المتبادلين.",
          "ok": false,
          "why": "التبعيات التبادلية تخلق ترابطاً وثيقاً وتمنع البناء المستقل.",
          "en": "Each layer must depend on its adjacent layer bidirectionally."
        },
        {
          "ar": "قاعدة التبعية اختيارية ويمكن تجاهلها في أيام الاختبارات.",
          "ok": false,
          "why": "هي القانون الحاسم والمطلق للعمارة النظيفة.",
          "en": "The dependency rule is optional and can be ignored during test days."
        }
      ],
      "tip": "وقفة امتحانية: القانون الحاسم: Dependencies Must Point Inward! الطبقات الداخلية لا تعرف شيئاً عن الطبقات الخارجية إطلاقاً."
    },
    {
      "n": 158,
      "type": "mcq",
      "ref": "L5-S024",
      "q_ar": "لماذا نفضل تقسيم النظام في .NET إلى مشاريع مستقلة (Multiple Projects / Class Libraries) في Clean Architecture؟",
      "q_en": "Why do we prefer splitting the system into multiple projects (Class Libraries) in Clean Architecture?",
      "opts": [
        {
          "ar": "لزيادة استهلاك مساحة القرص الصلب وإبهار العميل بحجم المجلدات.",
          "ok": false,
          "why": "التقسيم لأسباب معمارية تنظيمية وليس لإهدار المساحة.",
          "en": "To increase disk space consumption and impress the client with folder sizes."
        },
        {
          "ar": "لفرض قاعدة التبعية على مستوى المترجم (Compile-Time Enforcement)؛ فإذا حاولت طبقة داخلية استيراد طبقة خارجية يرفض المترجم البناء فوراً.",
          "ok": true,
          "why": "وجود مشاريع منفصلة يمنع المطور من كسر العمارة بالخطأ؛ لأن مراجع المشاريع تمنع الاستيراد المعاكس برمجياً.",
          "en": "To enforce the dependency rule at compile-time (Compile-Time Enforcement); if an inner layer attempts to import an outer layer, the compiler immediately rejects the build."
        },
        {
          "ar": "لأن لغة C# لا تدعم إنشاء أكثر من 5 كلاسات في المشروع الواحد.",
          "ok": false,
          "why": "المشروع الواحد يدعم آلاف الفئات.",
          "en": "Because C# does not support creating more than 5 classes per project."
        },
        {
          "ar": "لتأخير وقت تسليم المشروع للشركة.",
          "ok": false,
          "why": "التقسيم يسرع العمل الجماعي ويقلل تضارب الشفرات.",
          "en": "To delay project delivery time to the company."
        }
      ],
      "tip": "وقفة امتحانية: تقسيم المشاريع يتيح: Compile-Time Protection؛ المترجم يمنع أي خرق لقاعدة التبعية فوراً."
    },
    {
      "n": 159,
      "type": "mcq",
      "ref": "L5-S026",
      "q_ar": "في حل العمارة النظيفة النموذجي بـ .NET، ما هو اتجاه مراجع المشاريع (Project References) الصحيح؟",
      "q_en": "In a standard .NET Clean Architecture solution, what is the correct project reference direction?",
      "opts": [
        {
          "ar": "Domain يشير إلى Application و Application يشير إلى Presentation.",
          "ok": false,
          "why": "هذا اتجاه خاطئ تماماً وينتهك قاعدة التبعية.",
          "en": "Domain references Application, and Application references Presentation."
        },
        {
          "ar": "Domain لا يشير إلى أي مشروع؛ Application يشير إلى Domain؛ و Infrastructure و Presentation يشيران إلى Application و Domain.",
          "ok": true,
          "why": "Domain في القلب المستقل (0 مراجع)، Application فوقه يشير إليه، والطبقات الخارجية تشير للداخل.",
          "en": "Domain references no other project; Application references Domain; and Infrastructure and Presentation reference Application and Domain."
        },
        {
          "ar": "جميع المشاريع تشير إلى بعضها البعض في حلقة دائرية مغلقة.",
          "ok": false,
          "why": "المترجم يرفض التبعيات الدائرية (Circular Dependencies).",
          "en": "All projects reference each other in a closed circular loop."
        },
        {
          "ar": "Infrastructure يشير إلى Presentation و Presentation يشير إلى لا شيء.",
          "ok": false,
          "why": "هذا يعكس هيكل العمارة النظيفة السليم.",
          "en": "Infrastructure references Presentation, and Presentation references nothing."
        }
      ],
      "tip": "وقفة امتحانية: مراجع المشاريع: Domain = صفر مراجع · Application = يشير إلى Domain فقط · Outer Layers = تشير للداخل."
    },
    {
      "n": 160,
      "type": "mcq",
      "ref": "L5-S027",
      "q_ar": "ما هو التوصيف المعماري الدقيق لطبقة النطاق (Domain Layer) في العمارة النظيفة؟",
      "q_en": "What is the exact architectural description of the Domain Layer in Clean Architecture?",
      "opts": [
        {
          "ar": "الطبقة الخارجية المسؤولة عن تصميم صفحات HTML ورسومات الموقع.",
          "ok": false,
          "why": "هذه طبقة العرض والواجهة.",
          "en": "The external layer responsible for designing HTML pages and website graphics."
        },
        {
          "ar": "قلب ومركز النظام النابض، والطبقة الأعمق التي تحتوي الكيانات المؤسسية، كائنات القيمة، وقواعد الأعمال المستقلة.",
          "ok": true,
          "why": "طبقة النطاق هي جوهر المشروع وأثمن ما فيه، وتمثل منطق النشاط المؤسسي الصرف.",
          "en": "The core heartbeat of the system and the innermost layer containing enterprise entities, value objects, and independent business rules."
        },
        {
          "ar": "طبقة الاتصال بسيرفرات قواعد البيانات وكتابة جمل SQL.",
          "ok": false,
          "why": "هذه طبقة البنية التحتية.",
          "en": "The layer responsible for connecting to database servers and writing SQL statements."
        },
        {
          "ar": "طبقة تنسيق وإرسال رسائل البريد الإلكتروني للعملاء.",
          "ok": false,
          "why": "هذه خدمات خارجية في البنية التحتية.",
          "en": "The layer responsible for formatting and sending emails to clients."
        }
      ],
      "tip": "وقفة امتحانية: Domain Layer = The Heart of the Software System (قلب النظام ومستودع قواعد الأعمال)."
    },
    {
      "n": 161,
      "type": "mcq",
      "ref": "L5-S031",
      "q_ar": "ما هي المسؤولية الحصرية التي تختص بها طبقة النطاق (Domain Layer) دون غيرها؟",
      "q_en": "What exclusive responsibility belongs to the Domain Layer alone?",
      "opts": [
        {
          "ar": "التحقق من صحة بروتوكول HTTP ورؤوس الرسائل الشبكية.",
          "ok": false,
          "why": "هذه مسؤولية طبقة العرض والـ Controllers.",
          "en": "Validating HTTP protocol and network message headers."
        },
        {
          "ar": "تطبيق وإنفاذ قواعد العمل الجوهرية (Core Business Rules) وحماية تكامل وصحة حالة الكيانات المؤسسية دائماً.",
          "ok": true,
          "why": "قواعد الأعمال مثل 'لا يمكن سحب رصيد يتجاوز الحد المسموح' أو 'لا يمكن إلغاء طلب بعد شحنه' مكانها الوحيد هو كائنات النطاق.",
          "en": "Enforcing core business rules and preserving the integrity and validity of enterprise entity states at all times."
        },
        {
          "ar": "توليد ملفات PDF وتنسيق خطوط الطباعة.",
          "ok": false,
          "why": "هذه تفاصيل عرض وخدمات بنية تحتية.",
          "en": "Generating PDF files and formatting print fonts."
        },
        {
          "ar": "تأمين اتصالات الجدار الناري بالخوادم البعيدة.",
          "ok": false,
          "why": "مهام شبكات وبنية تحتية.",
          "en": "Securing firewall connections with remote servers."
        }
      ],
      "tip": "وقفة امتحانية: قواعد العمل المؤسسية المستقلة (Core Business Rules) مكانها الحصري داخل الكيانات في طبقة النطاق."
    },
    {
      "n": 162,
      "type": "mcq",
      "ref": "L5-S033",
      "q_ar": "في البرمجة الكائنية الموجهة بالمجال، ما الذي يميز 'الكيان' (Entity) عن بقية الكائنات؟",
      "q_en": "In Domain-Driven Design, what distinguishes an 'Entity' from other objects?",
      "opts": [
        {
          "ar": "أن الكيان لا يمتلك أي خصائص أو دوال إطلاقاً.",
          "ok": false,
          "why": "الكيان يمتلك خصائص وسلوكيات وقواعد عمل.",
          "en": "An entity possesses no properties or methods whatsoever."
        },
        {
          "ar": "أن الكيان يمتلك هوية مميزة فريدة (Unique Identifier مثل Id) تميزه طوال دورة حياته، حتى لو تغيرت جميع خصائصه وبياناته الأخرى.",
          "ok": true,
          "why": "العميل يظل هو نفس العميل برقم هويته (Id) حتى لو غير اسمه وعنوانه ورقم هاتفه.",
          "en": "An entity possesses a unique identifier (such as Id) that distinguishes it throughout its lifecycle, even if all other attributes and data change."
        },
        {
          "ar": "أن الكيان يُحذف من الذاكرة كل 5 ثوانٍ.",
          "ok": false,
          "why": "دورة حياته تحددها منطق الأعمال.",
          "en": "An entity is deleted from memory every 5 seconds."
        },
        {
          "ar": "أن الكيان يكتب فقط بلغة بايثون.",
          "ok": false,
          "why": "مفاهيم الكيانات عامة في كافة اللغات.",
          "en": "An entity can only be written in Python."
        }
      ],
      "tip": "وقفة امتحانية: Entity = يمتلك هوية فريدة مميزة (Identity / Id)؛ المساواة فيه تعتمد على تطابق الـ Id وليس القيم."
    },
    {
      "n": 163,
      "type": "mcq",
      "ref": "L5-S034",
      "q_ar": "ما الفارق المعماري الحاسم بين كيان النطاق (Domain Entity) ونموذج جدول قاعدة البيانات (Database Model)؟",
      "q_en": "What is the critical architectural difference between a Domain Entity and a Database Model?",
      "opts": [
        {
          "ar": "لا يوجد أي فرق على الإطلاق فهما نفس الكائن في الذاكرة.",
          "ok": false,
          "why": "الخلط بينهما هو العيب الأكبر لمعمارية N-Tier التقليدية.",
          "en": "There is no difference at all; they are the exact same object in memory."
        },
        {
          "ar": "كيان النطاق يركز على السلوك وقواعد العمل والتغليف المحمي؛ بينما نموذج قاعدة البيانات مجرد هيكل بيانات مسطح (Data Structure) مصمم ليلائم جداول SQL والتخزين.",
          "ok": true,
          "why": "الكيان يعبر عن منطق الأعمال ويحمي حالته بدوال؛ بينما موديل قاعدة البيانات مصمم للمفاتيح الخارجية والأعمدة وجداول SQL.",
          "en": "Domain entity focuses on behavior, business rules, and protected encapsulation; while database model is merely a flat data structure designed to suit SQL tables and storage."
        },
        {
          "ar": "كيان النطاق لا يمكنه تخزين الأرقام الصحيحة.",
          "ok": false,
          "why": "يخزن كافة أنواع البيانات.",
          "en": "Domain entity cannot store integers."
        },
        {
          "ar": "نموذج قاعدة البيانات يوضع دائماً داخل طبقة النطاق.",
          "ok": false,
          "why": "موديل قاعدة البيانات مكانه طبقة البنية التحتية.",
          "en": "Database model is always placed inside the domain layer."
        }
      ],
      "tip": "وقفة امتحانية: Domain Entity = سلوك وتغليف وقواعد أعمال · Database Model = أعمدة جداول ومفاتيح تخزين مسطحة."
    },
    {
      "n": 164,
      "type": "mcq",
      "ref": "L5-S036",
      "q_ar": "ما هو التوصيف الدقيق لنموذج النطاق الفقير (Anemic Domain Model) ولماذا يُعد نمطاً مضاداً (Anti-Pattern)؟",
      "q_en": "What is an Anemic Domain Model and why is it considered an Anti-Pattern?",
      "opts": [
        {
          "ar": "هو نموذج يحتوي على آلاف الدوال المعقدة دون أي بيانات.",
          "ok": false,
          "why": "هذا كائن وظيفي وليس فقيراً.",
          "en": "A model containing thousands of complex methods without any data."
        },
        {
          "ar": "هو كائن يحتوي خصائص فقط مع `get` و `set` عامة بالكامل وخالٍ من أي سلوك أو قواعد عمل، مما يكسر التغليف ويشتت منطق الأعمال في طبقات الخدمات.",
          "ok": true,
          "why": "الأنيمك موديل مجرد كيس بيانات غبي (Bag of Getters/Setters)، يترك أي كود خارجي يعدل حالته عشوائياً، وهو نقض صريح لمبادئ OOP.",
          "en": "An object containing only properties with public getters/setters, devoid of behaviors or business rules, breaking encapsulation and scattering business logic across service layers."
        },
        {
          "ar": "هو نموذج يعمل فقط عندما تكون سرعة المعالج ضعيفة.",
          "ok": false,
          "why": "تسمية معمارية ولا علاقة لها بسرعة المعالج.",
          "en": "A model that only works when CPU clock speed is low."
        },
        {
          "ar": "هو كائن مشفر لا يمكن قراءة بياناته.",
          "ok": false,
          "why": "ليس له علاقة بالتشفير.",
          "en": "An encrypted object whose data cannot be read."
        }
      ],
      "tip": "وقفة امتحانية: Anemic Domain Model = كائن مجرد من السلوك بخصائص public setters عامة؛ ويعد Anti-Pattern صريحاً."
    },
    {
      "n": 165,
      "type": "mcq",
      "ref": "L5-S037",
      "q_ar": "كيف يعالج 'نموذج النطاق الغني' (Rich Domain Model) عيوب النموذج الفقير؟",
      "q_en": "How does a 'Rich Domain Model' resolve the shortcomings of an anemic model?",
      "opts": [
        {
          "ar": "بحذف الكيانات واستبدالها بنصوص نصية بسيطة.",
          "ok": false,
          "why": "هذا يزيد الفوضى البرمجية.",
          "en": "By deleting entities and replacing them with plain text strings."
        },
        {
          "ar": "بإغلاق الخصائص بمحددات وصول خاصة (`private set`) وتوفير دوال صريحة تحمل معنى في لغة الأعمال تنفذ قواعد التحقق قبل تعديل الحالة.",
          "ok": true,
          "why": "النموذج الغني يجمع البيانات مع السلوك الذي يعمل عليها؛ فلا يمكن تغيير رصيد الحساب أو حالة الطلب إلا عبر دوال الكيان المنضبطة.",
          "en": "By protecting properties with private setters (`private set`) and providing explicit business-meaningful methods that enforce validations before mutating state."
        },
        {
          "ar": "بإجبار المطور على فتح كافة الخصائص للتعديل المباشر من واجهة المستخدم.",
          "ok": false,
          "why": "هذا يعيدنا للنموذج الفقير.",
          "en": "By forcing developers to expose all properties for direct modification from the UI."
        },
        {
          "ar": "بربط الكيان مباشرة بمكتبة Entity Framework Core.",
          "ok": false,
          "why": "طبقة النطاق يجب أن تظل مستقلة تماماً عن EF Core.",
          "en": "By binding the entity directly to Entity Framework Core library."
        }
      ],
      "tip": "وقفة امتحانية: Rich Domain Model = Private Setters + Business Methods تتحقق من القواعد قبل تغيير الحالة."
    },
    {
      "n": 166,
      "type": "mcq",
      "ref": "L5-S040",
      "q_ar": "في كلاس `Order` بنموذج نطاق غني، كيف يتم تطبيق عملية إلغاء الطلب بشكل سليم ومحمي؟",
      "q_en": "In a Rich Domain Model `Order` class, how is order cancellation correctly implemented?",
      "opts": [
        {
          "ar": "عبر تعديل مباشر من واجهة المستخدم: `order.Status = 'Cancelled';` دون أي قيود.",
          "ok": false,
          "why": "هذا أسلوب النموذج الفقير الذي يتيح إلغاء طلبات تم شحنها مسبقاً!",
          "en": "Via direct mutation from UI: `order.Status = 'Cancelled';` without restrictions."
        },
        {
          "ar": "عبر استدعاء دالة صريحة `order.CancelOrder()` تتحقق أولاً مما إذا كان الطلب قد تم شحنه، وترمي استثناءً إذا خالف قواعد العمل، ثم تغير الحالة.",
          "ok": true,
          "why": "الكيان نفسه هو المسؤول عن حماية تكامل حالته وقواعد عمله (Tell, Don't Ask).",
          "en": "Via an explicit method call `order.CancelOrder()` that first checks if the order has been shipped, throws an exception if business rules are violated, then updates status."
        },
        {
          "ar": "بحذف كائن الطلب من الذاكرة فوراً بواسطة أمر garbage collection.",
          "ok": false,
          "why": "الإلغاء تغيير حالة في السجل التجاري وليس حذفا فيزيائيا من الذاكرة.",
          "en": "By deleting the order object immediately using a garbage collection command."
        },
        {
          "ar": "بإرسال رسالة في الواتساب دون تعديل الكائن.",
          "ok": false,
          "why": "العملية يجب أن تثبت برمجياً في الكيان.",
          "en": "By sending a WhatsApp message without modifying the object."
        }
      ],
      "tip": "وقفة امتحانية: Tell, Don't Ask: اطلب من الكائن تنفيذ العملية عبر دالته وهو من يتحقق من قواعده بنفسه."
    },
    {
      "n": 167,
      "type": "mcq",
      "ref": "L5-S045",
      "q_ar": "ما هي الحزم والمكتبات الخارجية المسموح بتثبيتها واستيرادها داخل مشروع طبقة النطاق (Domain Layer)؟",
      "q_en": "What external packages and libraries are allowed to be imported inside the Domain Layer project?",
      "opts": [
        {
          "ar": "حزم Microsoft.EntityFrameworkCore وحزم ASP.NET Core MVC وحزم الاتصال بـ SQL Server.",
          "ok": false,
          "why": "محظور تماماً؛ استيراد هذه الحزم يدمر استقلالية النطاق وينتهك Clean Architecture.",
          "en": "Microsoft.EntityFrameworkCore packages, ASP.NET Core MVC packages, and SQL Server connection packages."
        },
        {
          "ar": "لا شيء تقريباً (صفر تبعيات خارجية)؛ يجب أن تكون مكتبة C# نقية ومعزولة تماماً عن أي أطر عمل أو قواعد بيانات.",
          "ok": true,
          "why": "قاعدة ذهبية مطلقة: طبقة النطاق يجب أن تظل كوداً خالصاً (Plain Old C# Objects - POCO) لا يعتمد على أي تقنية خارجية.",
          "en": "Almost none (zero external dependencies); it must be a pure C# class library completely isolated from frameworks or databases."
        },
        {
          "ar": "حزم تنزيل الفيديوهات ومحركات الألعاب ثلاثية الأبعاد.",
          "ok": false,
          "why": "لا علاقة لها بمجال الأعمال.",
          "en": "Video downloading packages and 3D game engines."
        },
        {
          "ar": "حزم تشغيل خادم الويب Kestrel فقط.",
          "ok": false,
          "why": "الخوادم مكانها طبقة العرض والبنية التحتية.",
          "en": "Kestrel web server runtime packages only."
        }
      ],
      "tip": "وقفة امتحانية: قاعدة امتحانية حاسمة: Domain Layer = Zero Dependencies! لا EF Core ولا ASP.NET Core ولا SQL!"
    },
    {
      "n": 168,
      "type": "mcq",
      "ref": "L5-S048",
      "q_ar": "ما هو 'كائن القيمة' (Value Object) في التصميم الموجه بالمجال وما الفارق بينه وبين الكيان (Entity)؟",
      "q_en": "What is a 'Value Object' in DDD and how does it differ from an Entity?",
      "opts": [
        {
          "ar": "كائن القيمة يمتلك معرفاً فريداً Id بينما الكيان لا يمتلك معرفاً.",
          "ok": false,
          "why": "العكس تماماً؛ الكيان هو من يمتلك Id.",
          "en": "A value object has a unique Id, while an entity has no Id."
        },
        {
          "ar": "كائن القيمة كائن غير قابل للتعديل (Immutable) لا يمتلك هوية مستقلة (No Id)، وتتحدد مساواته بتطابق كافة قيمه الداخلية (مثل كائن Money أو Address).",
          "ok": true,
          "why": "ورقتان نقديتان فئة 100 ريال متساويتان لأن قيمتهما واحدة دون النظر لأي هوية مستقلة؛ هذا هو Value Object.",
          "en": "A value object is an immutable object with no independent identity (No Id), whose equality is determined by matching all internal values (such as Money or Address)."
        },
        {
          "ar": "كائن القيمة مخصص حصرياً للاتصال بالإنترنت.",
          "ok": false,
          "why": "كائن بيانات ومجال بحت.",
          "en": "A value object is exclusively dedicated to internet connectivity."
        },
        {
          "ar": "كائن القيمة يوضع دائماً في طبقة العرض والـ Controllers.",
          "ok": false,
          "why": "مكانه الأصيل داخل طبقة النطاق Domain Layer.",
          "en": "A value object is always placed in the Presentation layer and Controllers."
        }
      ],
      "tip": "وقفة امتحانية: Entity = له هوية مميزة (Id) · Value Object = بلا هوية (No Id)، غير قابل للتعديل (Immutable)، وتطابقه بقيم حقوله."
    },
    {
      "n": 169,
      "type": "mcq",
      "ref": "L5-S051",
      "q_ar": "ما هو التوصيف المعماري لطبقة التطبيق (Application Layer) في العمارة النظيفة؟",
      "q_en": "What is the architectural description of the Application Layer in Clean Architecture?",
      "opts": [
        {
          "ar": "الطبقة المسؤولة عن تثبيت نظام التشغيل على الأجهزة.",
          "ok": false,
          "why": "هذه إدارة نظم وعتاد.",
          "en": "The layer responsible for installing operating systems on hardware."
        },
        {
          "ar": "طبقة تنسيق تدفق العمليات وحالات الاستخدام (Use Cases / Application Services)، وتحويل البيانات وتنظيم الأوامر دون احتواء منطق أعمال جوهري.",
          "ok": true,
          "why": "طبقة التطبيق تعمل كالمايسترو الذي ينسق حركة الكيانات وجلبها من المستودعات وإرجاع النتائج للواجهة.",
          "en": "The layer orchestrating workflow and use cases (Use Cases / Application Services), data transformation, and command coordination without holding core business logic."
        },
        {
          "ar": "الطبقة المسؤولة عن كتابة استعلامات SQL المعقدة وتصميم الجداول.",
          "ok": false,
          "why": "هذه طبقة البنية التحتية.",
          "en": "The layer responsible for writing complex SQL queries and designing tables."
        },
        {
          "ar": "طبقة تصميم أزرار وقوائم الموقع الإلكتروني.",
          "ok": false,
          "why": "هذه طبقة العرض Presentation.",
          "en": "The layer designing website buttons and menus."
        }
      ],
      "tip": "وقفة امتحانية: Application Layer = منسق حالات الاستخدام (Use Cases Orchestrator)؛ تعرف 'ماذا تفعل' وتفوض 'كيف تنفذ'."
    },
    {
      "n": 170,
      "type": "mcq",
      "ref": "L5-S054",
      "q_ar": "ما هي المسؤوليات الرئيسية لطبقة التطبيق (Application Layer)؟",
      "q_en": "What are the main responsibilities of the Application Layer?",
      "opts": [
        {
          "ar": "توليد أكواد CSS وتنسيق خطوط الشاشة.",
          "ok": false,
          "why": "مسؤولية واجهة المستخدم.",
          "en": "Generating CSS styles and formatting screen fonts."
        },
        {
          "ar": "تنفيذ سيناريوهات حالات الاستخدام، تعريف واجهات المستودعات، تنظيم كائنات DTOs، والتحقق من صحة مدخلات الطلبات.",
          "ok": true,
          "why": "طبقة التطبيق تدير السيناريوهات الوظيفية (مثل 'تحويل أموال'، 'تسجيل طلب جديد') وتربط بين النطاق والبنية التحتية.",
          "en": "Executing use case scenarios, defining repository interfaces, organizing DTOs, and validating request inputs."
        },
        {
          "ar": "الاتصال المباشر بمقابس الشبكة وبطاقات التخزين الفيزيائية.",
          "ok": false,
          "why": "مهام نظام تشغيل وبنية تحتية منخفضة المستوى.",
          "en": "Directly connecting to network sockets and physical storage cards."
        },
        {
          "ar": "حذف قواعد البيانات وإعادة تهيئتها عند كل طلب.",
          "ok": false,
          "why": "غير صحيح برمجياً.",
          "en": "Dropping and reinitializing databases on every request."
        }
      ],
      "tip": "وقفة امتحانية: محتويات طبقة التطبيق: Use Cases, Application Services, DTOs, Repository Interfaces, CQRS Handlers."
    },
    {
      "n": 171,
      "type": "mcq",
      "ref": "L5-S057",
      "q_ar": "ما هي كائنات نقل البيانات (Data Transfer Objects - DTOs) وما الغرض المعماري منها؟",
      "q_en": "What are Data Transfer Objects (DTOs) and what is their architectural purpose?",
      "opts": [
        {
          "ar": "كائنات مخصصة لتشغيل الفيديوهات الصوتية داخل المتصفح.",
          "ok": false,
          "why": "لا علاقة لها بتشغيل الوسائط.",
          "en": "Objects dedicated to playing audio videos in browsers."
        },
        {
          "ar": "كائنات بيانات مسطحة خفيفة الوزن تُستخدم لنقل البيانات بأمان عبر حدود الطبقات والشبكة، دون كشف كيانات النطاق الداخلية للواجهة الخارجية.",
          "ok": true,
          "why": "الـ DTO يعزل الكيانات المؤسسية، ويمنع تسريب تفاصيل النطاق الحساسة (مثل كلمة المرور أو الخصائص الداخلية) إلى شاشات العميل.",
          "en": "Lightweight flat data objects used to safely transfer data across layer boundaries and networks, without exposing internal domain entities to the outside."
        },
        {
          "ar": "قواعد بيانات صغيرة مدمجة داخل الذاكرة المخبأة للمعالج.",
          "ok": false,
          "why": "الـ DTO مجرد فئة بيانات خفيفة (POCO).",
          "en": "Small databases embedded within processor cache memory."
        },
        {
          "ar": "أدوات لتشفير بطاقات الائتمان العتادية.",
          "ok": false,
          "why": "ليست أجهزة تشفير.",
          "en": "Hardware credit card encryption tools."
        }
      ],
      "tip": "وقفة امتحانية: DTO = كائن لنقل البيانات فقط (Flat Data Structure) لحماية كيانات الـ Domain ومنع كشفها للعميل مباشرة."
    },
    {
      "n": 172,
      "type": "mcq",
      "ref": "L5-S058",
      "q_ar": "أين يجب أن يتم تعريف واجهات المستودعات (Repository Interfaces مثل `IOrderRepository`) في العمارة النظيفة؟",
      "q_en": "Where should Repository Interfaces (like `IOrderRepository`) be defined in Clean Architecture?",
      "opts": [
        {
          "ar": "في طبقة البنية التحتية (Infrastructure Layer) بجانب كود SQL.",
          "ok": false,
          "why": "وضع الواجهة في البنية التحتية ينتهك قاعدة التبعية ويجبر التطبيق على الاعتماد على البنية التحتية!",
          "en": "In the Infrastructure Layer next to SQL code."
        },
        {
          "ar": "في طبقة التطبيق (Application Layer) أو طبقة النطاق (Domain Layer)، لتحديد احتياجات النظام كعقد مجرد دون تفاصيل التنفيذ.",
          "ok": true,
          "why": "وفق مبدأ عكس التبعية (DIP): طبقة التطبيق تعلن ما تحتاجه من دوال عبر الواجهة، والبنية التحتية تأتي لاحقاً لتنفذها.",
          "en": "In the Application Layer or Domain Layer, specifying system requirements as an abstract contract without implementation details."
        },
        {
          "ar": "في طبقة العرض (Presentation Layer) داخل كود المتحكمات.",
          "ok": false,
          "why": "المتحكمات لا تعرف تفاصيل المستودعات مباشرة.",
          "en": "In the Presentation Layer inside controller code."
        },
        {
          "ar": "على خادم خارجي مستقل عن المشروع البرمجي.",
          "ok": false,
          "why": "الواجهات تُكتب داخل الكود المصدري للمشروع.",
          "en": "On an external server independent of the software project."
        }
      ],
      "tip": "وقفة امتحانية: سؤال مفضل للدكتورة بيداء: الواجهة `IOrderRepository` توضع في Application/Domain؛ وتنفيذها يوضع في Infrastructure!"
    },
    {
      "n": 173,
      "type": "mcq",
      "ref": "L5-S061",
      "q_ar": "كيف يسهم نمط المستودع (Repository Pattern) في تسهيل كتابة اختبارات الوحدة (Unit Testing) في طبقة التطبيق؟",
      "q_en": "How does the Repository Pattern facilitate Unit Testing in the Application Layer?",
      "opts": [
        {
          "ar": "بإلغاء الحاجة لكتابة أي اختبارات لأن الكود يصبح معصوماً من الأخطاء.",
          "ok": false,
          "why": "الاختبارات ضرورية دائماً ولا يوجد كود معصوم.",
          "en": "By eliminating the need to write tests because code becomes infallible."
        },
        {
          "ar": "بإتاحة استبدال المستودع الحقيقي بمستودع محاكاة وهمي (Mock/InMemory Repository) ينفذ نفس الواجهة، مما يسمح باختبار منطق التطبيق دون الحاجة لقاعدة بيانات حقيقية.",
          "ok": true,
          "why": "اعتماد خدمة التطبيق على الواجهة `IOrderRepository` يسمح بحقن كائن وهمي في ثوانٍ، مما يجعل الاختبار سريعاً ومستقلاً ومعزولاً.",
          "en": "By enabling substituting the real repository with a mock/in-memory repository implementing the same interface, allowing application logic testing without a real database."
        },
        {
          "ar": "بتسريع الاتصال بسيرفرات مايكروسوفت أزور السحابية.",
          "ok": false,
          "why": "الاختبارات النظيفة تجري محلياً دون شبكة سحابية.",
          "en": "By speeding up connections to Microsoft Azure cloud servers."
        },
        {
          "ar": "بحذف الكود المصدري بعد انتهاء الاختبار.",
          "ok": false,
          "why": "كلام غير منطقي.",
          "en": "By deleting source code after test execution."
        }
      ],
      "tip": "وقفة امتحانية: الاعتماد على واجهات المستودعات يتيح استخدام مكتبات المحاكاة (مثل Moq) لاختبار التطبيق في أجزاء من الثانية دون اتصال حقيقي بقاعدة البيانات."
    },
    {
      "n": 174,
      "type": "mcq",
      "ref": "L5-S063",
      "q_ar": "لماذا يُعتبر وضع تنفيذ المستودع (Repository Implementation) داخل طبقة التطبيق خطأ معمارياً فادحاً؟",
      "q_en": "Why is placing Repository Implementation inside the Application Layer a grave architectural error?",
      "opts": [
        {
          "ar": "لأن لغة C# تحرم كتابة أكثر من 10 أسطر في ملف الخدمة.",
          "ok": false,
          "why": "لا توجد قيود على عدد الأسطر.",
          "en": "Because C# prohibits writing more than 10 lines in a service file."
        },
        {
          "ar": "لأنه يلوث طبقة التطبيق بحزم ومكتبات قاعدة البيانات (مثل Entity Framework Core و SQL)، مما يكسر قاعدة التبعية ويعيدنا لمشكلة ارتهان الأعمال بالتكنولوجيا.",
          "ok": true,
          "why": "طبقة التطبيق يجب أن تظل مجردة ونقية؛ وضع كود EF Core داخلها يجعل تغيير قاعدة البيانات أمراً مستحيلاً دون المساس بمنطق التطبيق.",
          "en": "Because it pollutes Application with database libraries (e.g., Entity Framework Core and SQL), violating the Dependency Rule and coupling business to technology."
        },
        {
          "ar": "لأنه يؤدي لمسح شاشة المستخدم بالكامل.",
          "ok": false,
          "why": "المشكلة معمارية تتعلق بنظافة الهيكل وقابلية الصيانة.",
          "en": "Because it clears the user screen entirely."
        },
        {
          "ar": "لأنه يمنع المستخدم من الدفع الإلكتروني.",
          "ok": false,
          "why": "التطبيق سيعمل لكن تصميمه سيكون هشاً وسيئاً.",
          "en": "Because it prevents users from electronic payment."
        }
      ],
      "tip": "وقفة امتحانية: القاعدة الصارمة: Application يحتوي Interfaces فقط؛ و Infrastructure يحتوي Implementations مع EF Core و SQL."
    },
    {
      "n": 175,
      "type": "mcq",
      "ref": "L5-S066",
      "q_ar": "ما هو الدور المعماري الأساسي لطبقة البنية التحتية (Infrastructure Layer) في العمارة النظيفة؟",
      "q_en": "What is the primary architectural role of the Infrastructure Layer in Clean Architecture?",
      "opts": [
        {
          "ar": "استقبال نقرات الفأرة وأوامر لوحة المفاتيح من المستخدم مباشرة.",
          "ok": false,
          "why": "هذه مهمة واجهة المستخدم وطبقة العرض.",
          "en": "Receiving mouse clicks and keyboard commands directly from the user."
        },
        {
          "ar": "تنفيذ كافة التفاصيل التقنية والمادية والتواصل مع العالم الخارجي (قواعد البيانات، بوابات الدفع، خوادم البريد، نظام الملفات).",
          "ok": true,
          "why": "البنية التحتية هي المنفذ الخرساني؛ تحتوي كل ما يتعلق بالتكنولوجيا الملموسة والمكتبات الخارجية لتنفيذ الواجهات المجردة للطبقات الداخلية.",
          "en": "Implementing all technical and physical details and communicating with the outside world (databases, payment gateways, mail servers, file system)."
        },
        {
          "ar": "تعريف القواعد المحاسبية والقانونية للمؤسسة التجارية.",
          "ok": false,
          "why": "هذه قواعد أعمال مكانها الحصري طبقة النطاق.",
          "en": "Defining accounting and legal rules for the commercial enterprise."
        },
        {
          "ar": "إلغاء الاتصال بالإنترنت أثناء ساعات العمل الرسمية.",
          "ok": false,
          "why": "لا علاقة له بالموضوع.",
          "en": "Disconnecting internet access during official working hours."
        }
      ],
      "tip": "وقفة امتحانية: Infrastructure Layer = حيث تعيش التفاصيل التكنولوجية الصعبة (EF Core, SQL, SMTP, Stripe, AWS)."
    },
    {
      "n": 176,
      "type": "mcq",
      "ref": "L5-S071",
      "q_ar": "أي من المكونات البرمجية التالية ينتمي حصرياً ومكانياً إلى طبقة البنية التحتية (Infrastructure Layer)؟",
      "q_en": "Which of the following software components belongs strictly to the Infrastructure Layer?",
      "opts": [
        {
          "ar": "كيان `Customer` المؤسسي وقواعد التحقق من صحة بريده الإلكتروني.",
          "ok": false,
          "why": "الكيانات مكانها طبقة النطاق (Domain Layer).",
          "en": "Enterprise `Customer` entity and its email validation rules."
        },
        {
          "ar": "سياق قاعدة البيانات `ApplicationDbContext` الخاص بـ Entity Framework Core وتنفيذ المستودع `SqlOrderRepository`.",
          "ok": true,
          "why": "كل ما يرتبط بأدوات EF Core، اتصالات SQL، وسياق قاعدة البيانات مكانه الطبيعي هو البنية التحتية.",
          "en": "Entity Framework Core `ApplicationDbContext` and repository implementation `SqlOrderRepository`."
        },
        {
          "ar": "وحدة التحكم بالويب `OrderController` وتوجيهات المسارات `[HttpGet]`.",
          "ok": false,
          "why": "المتحكمات مكانها طبقة العرض (Presentation Layer).",
          "en": "Web controller `OrderController` and route attributes `[HttpGet]`."
        },
        {
          "ar": "حالة الاستخدام `TransferMoneyUseCase` ومعالج الأوامر.",
          "ok": false,
          "why": "حالات الاستخدام مكانها طبقة التطبيق (Application Layer).",
          "en": "Use case `TransferMoneyUseCase` and command handlers."
        }
      ],
      "tip": "وقفة امتحانية: سياق EF Core `DbContext` مكانه الحصري والأبدي داخل مشروع Infrastructure Layer!"
    },
    {
      "n": 177,
      "type": "mcq",
      "ref": "L5-S076",
      "q_ar": "كيف تحقق طبقة البنية التحتية مبدأ عكس التبعية (DIP) بالنسبة لطبقة التطبيق؟",
      "q_en": "How does the Infrastructure Layer fulfill the Dependency Inversion Principle (DIP) relative to Application?",
      "opts": [
        {
          "ar": "بإجبار طبقة التطبيق على استيراد حزم SQL Server المباشرة.",
          "ok": false,
          "why": "هذا ينقض مبدأ DIP تماماً.",
          "en": "By forcing Application to import SQL Server packages directly."
        },
        {
          "ar": "بجعل طبقة البنية التحتية هي من تعتمد على طبقة التطبيق لتنفيذ واجهاتها المعرفة مسبقاً (مثل تنفيذ `SqlOrderRepository` لـ `IOrderRepository`).",
          "ok": true,
          "why": "التبعية انقلبت؛ فبدلاً من أن يعتمد التطبيق على كود قاعدة البيانات، أصبحت فئات قاعدة البيانات هي من تعتمد على عقود التطبيق وتنفذها.",
          "en": "By making Infrastructure depend on Application to implement its pre-defined interfaces (e.g., `SqlOrderRepository` implementing `IOrderRepository`)."
        },
        {
          "ar": "بحذف الواجهات من كامل النظام البرمجي.",
          "ok": false,
          "why": "DIP يرتكز كلياً على وجود الواجهات المجردة.",
          "en": "By deleting interfaces from the entire software system."
        },
        {
          "ar": "بإيقاف تشغيل الخادم الخارجي لقاعدة البيانات.",
          "ok": false,
          "why": "لا علاقة له بتشغيل السيرفر.",
          "en": "By shutting down the external database server."
        }
      ],
      "tip": "وقفة امتحانية: انعكاس التبعية: Infrastructure -> Application (البنية التحتية تنفذ عقود التطبيق وتشير إليه، وليس العكس)."
    },
    {
      "n": 178,
      "type": "mcq",
      "ref": "L5-S080",
      "q_ar": "ما الذي يُحظر تماماً وجوده أو كتابته داخل طبقة البنية التحتية (Infrastructure Layer)؟",
      "q_en": "What is strictly forbidden to be included or written inside the Infrastructure Layer?",
      "opts": [
        {
          "ar": "كود الاتصال بقاعدة البيانات وحزم EF Core.",
          "ok": false,
          "why": "هذا هو مكانها الأصيل والصحيح معمارياً.",
          "en": "Database connection code and EF Core packages."
        },
        {
          "ar": "قواعد ومنطق الأعمال الجوهرية للشركة (Core Business Rules)، أو التحكم في سير تدفق حالات الاستخدام.",
          "ok": true,
          "why": "البنية التحتية خادم تقني صامت ينفذ الأوامر الفنية فقط؛ ولا يجوز أن تقرر أي قواعد تجارية تخص المؤسسة.",
          "en": "Core business rules of the enterprise, or orchestration of use case workflows."
        },
        {
          "ar": "كود إرسال البريد الإلكتروني عبر خادم خارجي.",
          "ok": false,
          "why": "إرسال البريد خدمة بنية تحتية نموذجية.",
          "en": "Email delivery code via an external server."
        },
        {
          "ar": "إعدادات الربط مع بوابات الدفع الإلكترونية.",
          "ok": false,
          "why": "بوابات الدفع مكانها البنية التحتية.",
          "en": "Configuration settings for payment gateway integrations."
        }
      ],
      "tip": "وقفة امتحانية: البنية التحتية توفر 'التنفيذ التقني' فقط؛ وممنوع تماماً وضع قواعد أعمال (Business Logic) بداخلها."
    },
    {
      "n": 179,
      "type": "mcq",
      "ref": "L5-S082",
      "q_ar": "ما هو التوصيف المعماري الدقيق لطبقة العرض والواجهة (Presentation Layer) في العمارة النظيفة؟",
      "q_en": "What is the precise architectural description of the Presentation Layer in Clean Architecture?",
      "opts": [
        {
          "ar": "الطبقة الأعمق التي تحتفظ بقواعد بيانات المؤسسة السرية.",
          "ok": false,
          "why": "الطبقة الأعمق هي Domain وليس Presentation.",
          "en": "The innermost layer holding confidential enterprise databases."
        },
        {
          "ar": "الطبقة الخارجية الأبعد ونقطة الدخول الرئيسية للنظام، المسؤولة عن التفاعل مع المستخدم والعملاء الخارجيين واستقبال الطلبات وإرجاع الاستجابات.",
          "ok": true,
          "why": "طبقة العرض تمثل واجهة النظام للعالم الخارجي؛ سواء كانت Web API, MVC Controllers, Razor Pages, أو سطر أوامر CLI.",
          "en": "The outermost layer and entry point of the system, responsible for interacting with users and external clients, handling requests, and returning responses."
        },
        {
          "ar": "الطبقة التي تنفذ خوارزميات التشفير المعقدة للقرص الصلب.",
          "ok": false,
          "why": "هذه خدمات بنية تحتية وأمان.",
          "en": "The layer executing complex disk encryption algorithms."
        },
        {
          "ar": "الطبقة المسؤولة عن صيانة عتاد الخادم المادي.",
          "ok": false,
          "why": "هذه صيانة فيزيائية خارج البرمجيات.",
          "en": "The layer responsible for maintaining physical server hardware."
        }
      ],
      "tip": "وقفة امتحانية: Presentation Layer = Entry Point of the Application (نقطة دخول الطلبات واستقبال العملاء)."
    },
    {
      "n": 180,
      "type": "mcq",
      "ref": "L5-S088",
      "q_ar": "ما هي المسؤولية الحقيقية لوحدات التحكم (Controllers) في إطار عمل ASP.NET Core Web API؟",
      "q_en": "What is the true responsibility of Controllers in ASP.NET Core Web API?",
      "opts": [
        {
          "ar": "معالجة العمليات الحسابية وقواعد العمل المعقدة والاتصال المباشر بقاعدة البيانات.",
          "ok": false,
          "why": "هذا يجعل المتحكم سميناً (Fat Controller) وينتهك كافة مبادئ التصميم النظيف.",
          "en": "Handling arithmetic calculations, complex business rules, and direct database access."
        },
        {
          "ar": "استقبال طلب HTTP، التحقق الأولي من صحة المدخلات، توجيه الطلب لحالة الاستخدام في Application Layer، ثم إرجاع استجابة HTTP المناسبة (مثل 200 OK أو 400 Bad Request).",
          "ok": true,
          "why": "المتحكم مجرد منسق مرور شبكي (Thin Controller) يستقبل الطلب ويسلمه لطبقة التطبيق ويرد بالنتيجة.",
          "en": "Receiving HTTP requests, validating input data, dispatching the request to Application use cases, and returning appropriate HTTP responses (e.g. 200 OK, 400 Bad Request)."
        },
        {
          "ar": "تصميم جداول SQL وتحديد المفاتيح الأساسية والخارجية.",
          "ok": false,
          "why": "هذه مسؤولية قواعد البيانات والبنية التحتية.",
          "en": "Designing SQL tables and defining primary and foreign keys."
        },
        {
          "ar": "إطفاء الخادم عند وقوع استثناء برمجي.",
          "ok": false,
          "why": "المتحكم يتعامل مع الاستثناءات ويرجع كود الخطأ المناسب.",
          "en": "Shutting down the server when a software exception occurs."
        }
      ],
      "tip": "وقفة امتحانية: الشعار المعماري للمتحكمات: 'Keep Controllers Thin' (اجعل المتحكمات نحيفة وخالية من كود الأعمال)."
    },
    {
      "n": 181,
      "type": "mcq",
      "ref": "L5-S092",
      "q_ar": "ما هو الدور الاستراتيجي الحاسم لملف `Program.cs` في مشروع Presentation Layer بتطبيقات .NET الحديثة؟",
      "q_en": "What is the critical strategic role of `Program.cs` in the Presentation project in modern .NET?",
      "opts": [
        {
          "ar": "حفظ أسماء الموظفين وكلمات مرورهم في ملف نصي مكشوف.",
          "ok": false,
          "why": "هذا خرق أمني مدمر.",
          "en": "Storing employee names and passwords in an exposed text file."
        },
        {
          "ar": "نقطة انطلاق التطبيق وتكوين حاوية حقن التبعيات (DI Container) وربط الواجهات بتنفيذاتها من كافة الطبقات، وبناء خط أنابيب معالجة الطلبات (HTTP Middleware Pipeline).",
          "ok": true,
          "why": "ملف Program.cs هو المجمع المركزي (Composition Root) الذي يربط أجزاء النظام كافة ويجهز الحاوية قبل بدء استقبال المستخدمين.",
          "en": "Application entry point, configuring the DI container, binding interfaces to implementations across all layers, and constructing the HTTP middleware pipeline."
        },
        {
          "ar": "توليد كود الـ HTML الثابت فقط دون أي إعدادات.",
          "ok": false,
          "why": "Program.cs ملف C# تنفيذي وتهيئة متكاملة للخدمات.",
          "en": "Generating static HTML code only without any configurations."
        },
        {
          "ar": "حذف الملفات المؤقتة من نظام التشغيل.",
          "ok": false,
          "why": "ليس من مهام ملف إعداد التطبيق.",
          "en": "Deleting temporary files from the operating system."
        }
      ],
      "tip": "وقفة امتحانية: Program.cs = Composition Root (جذر التركيب) حيث يتم تسجيل كافة خدمات وعقود النظام في حاوية DI."
    },
    {
      "n": 182,
      "type": "mcq",
      "ref": "L5-S094",
      "q_ar": "لماذا يُحظر وضع قواعد الأعمال والتحقق التجاري المعقد داخل وحدات التحكم (Controllers)؟",
      "q_en": "Why is putting business rules inside Controllers strictly forbidden?",
      "opts": [
        {
          "ar": "لأن لغة C# تمنع جمل if داخل الكنترولر.",
          "ok": false,
          "why": "المترجم يسمح بذلك ولكنها جريمة معمارية.",
          "en": "Because C# prohibits if statements inside controllers."
        },
        {
          "ar": "لأن ذلك يجعل منطق الأعمال رهيناً ببروتوكول HTTP والويب، مما يمنع إعادة استخدامه في تطبيقات أخرى (مثل تطبيق موبايل أو تطبيق سطح مكتب) ويجعل اختباره معقداً وبطيئاً.",
          "ok": true,
          "why": "منطق الأعمال يجب أن يظل مستقلاً داخل النطاق والتطبيق؛ وضعه في الكنترولر يجعله مستحيلاً في إعادة الاستخدام وصعباً في الاختبار المعزول.",
          "en": "Because it couples business logic to HTTP and web protocols, preventing its reuse in other clients (e.g. mobile or desktop apps) and making testing slow and complex."
        },
        {
          "ar": "لأن ذلك يرفع سعر فاتورة الإنترنت الشهرية.",
          "ok": false,
          "why": "لا علاقة له بالإنترنت.",
          "en": "Because it raises the monthly internet bill."
        },
        {
          "ar": "لأن الكنترولر يمسح بيانات السيرفر تلقائياً.",
          "ok": false,
          "why": "كلام غير منطقي.",
          "en": "Because the controller automatically erases server data."
        }
      ],
      "tip": "وقفة امتحانية: إذا كتبت قواعد العمل في الكنترولر، فلن تتمكن من إعادة استخدامها إذا قررت إضافة تطبيق موبايل للمشروع لاحقاً!"
    },
    {
      "n": 183,
      "type": "mcq",
      "ref": "L5-S097",
      "q_ar": "ما هي حاوية حقن التبعيات (Dependency Injection Container) المدمجة في ASP.NET Core؟",
      "q_en": "What is the built-in Dependency Injection Container in ASP.NET Core?",
      "opts": [
        {
          "ar": "أداة لضغط الملفات وتقليل حجم حزم البرمجيات.",
          "ok": false,
          "why": "ليست أداة ضغط ملفات.",
          "en": "A tool for compressing files and reducing software package size."
        },
        {
          "ar": "محرك ومصنع مركزي لإدارة دورات حياة الكائنات والخدمات، وحل تبعيات الفئات وتمريرها تلقائياً للمنشئات عند طلبها (IoC Container).",
          "ok": true,
          "why": "الحاوية تتولى إنشاء الكائنات وحقنها والتخلص منها عند انتهاء دورة حياتها، مما يحرر المطور من استدعاء new اليدوي.",
          "en": "A centralized factory and engine managing object and service lifetimes, resolving class dependencies, and auto-injecting them into constructors (IoC Container)."
        },
        {
          "ar": "قاعدة بيانات صغيرة لتخزين صور المستخدمين الشخصية.",
          "ok": false,
          "why": "ليست قاعدة بيانات.",
          "en": "A small database for storing user profile pictures."
        },
        {
          "ar": "جدار ناري لحجب الهجمات السيبرانية من الشبكة الخارجية.",
          "ok": false,
          "why": "الحاوية آلية برمجية داخلية لإدارة الكائنات.",
          "en": "A firewall blocking cyber attacks from external networks."
        }
      ],
      "tip": "وقفة امتحانية: DI Container = الحاوية الذكية التي تنشئ الكائنات وتحقنها عبر المنشئ (Constructor Injection) تلقائياً."
    },
    {
      "n": 184,
      "type": "mcq",
      "ref": "L5-S098",
      "q_ar": "ما هي دورات حياة الخدمات الثلاث الأساسية (Service Lifetimes) التي تدعمها حاوية .NET DI؟",
      "q_en": "What are the three core service lifetimes supported by the .NET DI Container?",
      "opts": [
        {
          "ar": "Past, Present, Future.",
          "ok": false,
          "why": "هذه أزمنة نحوية وليست دورات حياة برمجية.",
          "en": "Past, Present, Future."
        },
        {
          "ar": "العابر (Transient)، المقيد بالنطاق (Scoped)، والمفرد (Singleton).",
          "ok": true,
          "why": "هذه هي دورات الحياة المعيارية الثلاث في ASP.NET Core لإدارة وقت إنشاء وبقاء ومشاركة الكائنات في الذاكرة.",
          "en": "Transient, Scoped, and Singleton."
        },
        {
          "ar": "Public, Private, Protected.",
          "ok": false,
          "why": "هذه محددات وصول للأعضاء (Access Modifiers).",
          "en": "Public, Private, Protected."
        },
        {
          "ar": "Read, Write, Execute.",
          "ok": false,
          "why": "هذه أذونات وصلاحيات ملفات نظام التشغيل.",
          "en": "Read, Write, Execute."
        }
      ],
      "tip": "وقفة امتحانية: احفظ الثلاثي القياسي لدورات حياة الخدمات في .NET: Transient, Scoped, Singleton."
    },
    {
      "n": 185,
      "type": "mcq",
      "ref": "L5-S100",
      "q_ar": "ما الفارق الزمني والذاكري الدقيق بين خدمة `Transient` وخدمة `Scoped` في ASP.NET Core؟",
      "q_en": "What is the exact distinction between `Transient` and `Scoped` service lifetimes in ASP.NET Core?",
      "opts": [
        {
          "ar": "Transient تنشئ نسخة جديدة تماماً في كل مرة يُطلب فيها الكائن؛ بينما Scoped تنشئ نسخة واحدة فقط لكل طلب شبكي (HTTP Request) ويُعاد استخدامها داخل نفس الطلب.",
          "ok": true,
          "why": "هذا هو التوصيف المعياري؛ Transient عابرة تتجدد دائماً، بينما Scoped تعيش طوال فترة معالجة نفس طلب الويب وتشارك بين خدماته.",
          "en": "Transient creates a brand-new instance every time it is requested; Scoped creates a single instance per HTTP request and reuses it throughout that request."
        },
        {
          "ar": "Transient تعمل في الذاكرة و Scoped تعمل على القرص الصلب.",
          "ok": false,
          "why": "كلاهما يعملان داخل كومة الذاكرة المدارة (Heap).",
          "en": "Transient runs in RAM and Scoped runs on hard disk."
        },
        {
          "ar": "Transient مخصصة للشركات و Scoped للأفراد.",
          "ok": false,
          "why": "تصنيف برمجي تقني لا علاقة له بالأشخاص.",
          "en": "Transient is dedicated to enterprises and Scoped to individuals."
        },
        {
          "ar": "لا يوجد أي فرق بينهما فهما ينشئان نسخة واحدة دائمة طوال تشغيل التطبيق.",
          "ok": false,
          "why": "الذي ينشئ نسخة واحدة دائمة طوال التطبيق هو Singleton.",
          "en": "There is no difference; both create a single permanent instance throughout application runtime."
        }
      ],
      "tip": "وقفة امتحانية: Transient = نسخة جديدة عند كل طلب حقن · Scoped = نسخة واحدة لكل HTTP Request وتتشارك داخل نفس الطلب."
    },
    {
      "n": 186,
      "type": "mcq",
      "ref": "L5-S101",
      "q_ar": "ما هي كارثة 'التبعية الأسيرة' (Captive Dependency) في حاوية حقن التبعيات؟",
      "q_en": "What is the 'Captive Dependency' trap in dependency injection containers?",
      "opts": [
        {
          "ar": "توقف خادم قاعدة البيانات بسبب نفاد سعة التخزين.",
          "ok": false,
          "why": "مشكلة عتادية في سعة القرص.",
          "en": "Database server shutdown due to running out of disk storage."
        },
        {
          "ar": "حقن خدمة ذات دورة حياة قصيرة (مثل Scoped DbContext) داخل خدمة ذات دورة حياة أطول (مثل Singleton)، مما يجعل الكائن القصير أسيراً ومحتجزاً للأبد في الذاكرة.",
          "ok": true,
          "why": "الكائن Scoped سيتحول قسراً إلى كائن دائم، مما يسبب تسريب ذاكرة وأخطاء تضارب خيوط كارثية (Concurrency Exceptions) لأن DbContext ليس Thread-safe.",
          "en": "Injecting a short-lived service (such as Scoped DbContext) into a longer-lived service (such as Singleton), keeping the short-lived object captive in memory forever."
        },
        {
          "ar": "نسيان كتابة الكلمة المفتاحية async قبل الدالة.",
          "ok": false,
          "why": "هذا خطأ برمجي بسيط في التزامن.",
          "en": "Forgetting to write the async keyword before a method."
        },
        {
          "ar": "تشفير كلمات المرور باستخدام خوارزميات قديمة.",
          "ok": false,
          "why": "هذه مشكلة أمنية أخرى.",
          "en": "Encrypting passwords using obsolete algorithms."
        }
      ],
      "tip": "وقفة امتحانية: فخ الفاينل الأكبر: Captive Dependency = حقن Scoped داخل Singleton! النتيجة: تسريب ذاكرة وانهيار DbContext بالتزامن."
    },
    {
      "n": 187,
      "type": "mcq",
      "ref": "L5-S102",
      "q_ar": "ما هو المسار التسلسلي المنطقي الكامل لتدفق تنفيذ الطلب (Execution Flow) في العمارة النظيفة؟",
      "q_en": "What is the complete sequential request execution flow in Clean Architecture?",
      "opts": [
        {
          "ar": "Database -> Domain -> Presentation -> Application.",
          "ok": false,
          "why": "المسار يبدأ دائماً من طلب العميل في Presentation.",
          "en": "Database -> Domain -> Presentation -> Application."
        },
        {
          "ar": "Presentation (Controller) -> Application (Use Case) -> Domain (Entity Logic) -> Infrastructure (Database Save via Repository) -> Application -> Presentation Response.",
          "ok": true,
          "why": "يبدأ الطلب من الكنترولر، يمر للتطبيق، يتعامل مع كيانات النطاق وقواعدها، يحفظ عبر البنية التحتية، ثم تعاد الاستجابة للعميل.",
          "en": "Presentation (Controller) -> Application (Use Case) -> Domain (Entity Logic) -> Infrastructure (Database Save via Repository) -> Application -> Presentation Response."
        },
        {
          "ar": "Infrastructure -> Application -> Presentation -> Domain.",
          "ok": false,
          "why": "ترتيب مقلوب وغير متوافق مع استقبال طلبات الويب.",
          "en": "Infrastructure -> Application -> Presentation -> Domain."
        },
        {
          "ar": "Presentation مباشرة إلى Database ثم الخروج.",
          "ok": false,
          "why": "هذا تخطي للطبقات وكسر للعمارة النظيفة.",
          "en": "Presentation directly to Database then exit."
        }
      ],
      "tip": "وقفة امتحانية: مسار الطلب: Presentation -> Application -> Domain -> Infrastructure (عبر الواجهة) -> العودة بالرد كـ DTO."
    },
    {
      "n": 188,
      "type": "mcq",
      "ref": "L5-S103",
      "q_ar": "عند تلخيص العمارة النظيفة في كلمة واحدة لكل طبقة من الداخل للخارج، ما هو الترتيب الصحيح؟",
      "q_en": "Summarizing Clean Architecture from inside out in one word per layer, what is the correct order?",
      "opts": [
        {
          "ar": "قاعدة البيانات -> الشاشة -> الخادم -> الذاكرة.",
          "ok": false,
          "why": "هذه مكونات مادية وليست طبقات العمارة النظيفة.",
          "en": "Database -> Screen -> Server -> Memory."
        },
        {
          "ar": "Domain (القلب وقواعد الأعمال) -> Application (تنسيق الحالات) -> Infrastructure (التنفيذ الفني) & Presentation (الواجهة والعميل).",
          "ok": true,
          "why": "هذا هو الترتيب المركزي المعياري الدائري للعمارة النظيفة من الداخل إلى أبعد طبقة في الخارج.",
          "en": "Domain (Core & Rules) -> Application (Orchestration) -> Infrastructure (Technical) & Presentation (UI & Client)."
        },
        {
          "ar": "UI -> Controller -> Model -> View.",
          "ok": false,
          "why": "هذا نمط MVC للواجهات وليس طبقات Clean Architecture.",
          "en": "UI -> Controller -> Model -> View."
        },
        {
          "ar": "Frontend -> Backend -> DevOps -> QA.",
          "ok": false,
          "why": "هذه أدوار وظيفية لفرق العمل.",
          "en": "Frontend -> Backend -> DevOps -> QA."
        }
      ],
      "tip": "وقفة امتحانية: الترتيب الدائري من المركز للخارج: 1. Domain · 2. Application · 3. Infrastructure & Presentation."
    },
    {
      "n": 189,
      "type": "mcq",
      "ref": "L5-S104",
      "q_ar": "متى يكون استخدام العمارة النظيفة (Clean Architecture) مبرراً وموصى به هندسياً؟",
      "q_en": "When is adopting Clean Architecture architecturally justified and recommended?",
      "opts": [
        {
          "ar": "في المشاريع الجامعية الصغيرة التي تكتب في ساعتين وتُسلَّم لمرة واحدة دون أي صيانة مستقبلية.",
          "ok": false,
          "why": "استخدامها في البرامج متناهية الصغر يعتبر تعقيداً مفرطاً (Over-Engineering).",
          "en": "In small university assignments written in two hours and submitted once with no future maintenance."
        },
        {
          "ar": "في الأنظمة المتوسطة والضخمة ذات قواعد الأعمال المعقدة، والأنظمة المؤسسية (Enterprise) التي يتوقع لها البقاء والتطور لسنوات وتتطلب اختبارات مستمرة وصيانة مستدامة.",
          "ok": true,
          "why": "تكلفة إعداد العمارة النظيفة تؤتي ثمارها في المشاريع الحقيقية المعقدة وطويلة الأجل بفضل سهولة التعديل والاختبار المستقل.",
          "en": "In medium-to-large enterprise systems with complex business rules, expected to evolve over years and requiring continuous testing and sustainable maintenance."
        },
        {
          "ar": "عند كتابة سكربت تشغيلي بسيط لنقل ملف من مجلد إلى مجلد.",
          "ok": false,
          "why": "السكربتات البسيطة لا تحتاج لعمارة نظيفة متعددة المشاريع.",
          "en": "When writing a simple operational script to copy a file from folder to folder."
        },
        {
          "ar": "فقط عندما نجبر على استخدام قواعد بيانات NoSQL.",
          "ok": false,
          "why": "العمارة النظيفة تعمل مع كافة أنواع قواعد البيانات ومستقلة عنها.",
          "en": "Only when forced to use NoSQL databases."
        }
      ],
      "tip": "وقفة امتحانية: Clean Architecture ممتازة لـ: Enterprise Systems, Complex Domain Logic, Long-term Projects; ولكنها Over-engineering للسكربتات البسيطة."
    },
    {
      "n": 190,
      "type": "mcq",
      "ref": "L5-S008",
      "q_ar": "ما هي الميزة التاريخية التي قدمتها معمارية N-Tier مقارنة بالأنظمة المتجانسة السابقة لها؟",
      "q_en": "What historical advantage did N-Tier architecture offer compared to previous monolithic systems?",
      "opts": [
        {
          "ar": "فصل منطق العرض عن كود قاعدة البيانات بشكل منطقي وتسهيل تنظيم كود المشاريع الكبيرة نسبياً.",
          "ok": true,
          "why": "N-Tier كانت خطوة تطورية هامة لفصل الواجهات عن التخزين بدلاً من وضع كل شيء في شاشة واحدة.",
          "en": "Logically separating presentation logic from database code and facilitating codebase organization for larger projects."
        },
        {
          "ar": "إلغاء الحاجة لشبكات الإنترنت كلياً.",
          "ok": false,
          "why": "الشبكات عنصر ضروري.",
          "en": "Eliminating the need for internet networks entirely."
        },
        {
          "ar": "تسريع استجابة المعالج لأقصى سرعة فيزيائية.",
          "ok": false,
          "why": "هذا تطوير عتادي.",
          "en": "Accelerating CPU responsiveness to maximum physical speed."
        },
        {
          "ar": "منع المستخدمين من حذف حساباتهم.",
          "ok": false,
          "why": "هذه سياسة عمل.",
          "en": "Preventing users from deleting their accounts."
        }
      ],
      "tip": "وقفة امتحانية: N-Tier كانت بداية الفصل المنطقي (SoC)، لكن عيبها كان بقاء قاعدة البيانات في المركز."
    },
    {
      "n": 191,
      "type": "mcq",
      "ref": "L5-S011",
      "q_ar": "كيف يؤثر الاعتماد المباشر على قاعدة البيانات داخل طبقة منطق الأعمال (BLL) على اختبارات الوحدة؟",
      "q_en": "How does direct database dependency in BLL impact unit tests?",
      "opts": [
        {
          "ar": "يجعل تشغيل الاختبارات يستلزم وجود خادم قاعدة بيانات حقيقي، مما يجعلها بطيئة، هشة، ومعقدة الإعداد.",
          "ok": true,
          "why": "الارتباط بقاعدة بيانات حقيقية يبطئ الاختبارات من أجزاء من الثانية إلى دقائق ويجعلها غير معزولة.",
          "en": "It forces tests to require a live database server, making them slow, brittle, and cumbersome to configure."
        },
        {
          "ar": "يحول كافة الاختبارات إلى اختبارات ناجحة تلقائياً.",
          "ok": false,
          "why": "الارتباط بالبيانات يسبب فشل الاختبارات عند تضارب السجلات.",
          "en": "It automatically converts all tests into passing tests."
        },
        {
          "ar": "يحذف ملفات الاختبار من المشروع.",
          "ok": false,
          "why": "لا علاقة له بحذف الملفات.",
          "en": "It deletes test files from the project."
        },
        {
          "ar": "يزيد من سرعة تنفيذ الاختبارات 1000 مرة.",
          "ok": false,
          "why": "الاتصال بقاعدة البيانات يبطئ الاختبارات ولا يسرعها.",
          "en": "It increases test execution speed by 1000x."
        }
      ],
      "tip": "وقفة امتحانية: الارتباط الصلب بقاعدة البيانات هو العدو الأكبر لسرعة وموثوقية اختبارات الوحدة (Unit Tests)."
    },
    {
      "n": 192,
      "type": "mcq",
      "ref": "L5-S017",
      "q_ar": "ما هي الخطوة المعمارية الأساسية للتحول من المعمارية المرتكزة على البيانات إلى المعمارية المرتكزة على المجال؟",
      "q_en": "What is the primary architectural step to transition from Database-Centric to Domain-Centric architecture?",
      "opts": [
        {
          "ar": "عكس التبعيات بحيث تعتمد قاعدة البيانات على واجهات معرّفة داخل النطاق والتطبيق بدلاً من اعتماد الأعمال على الجداول.",
          "ok": true,
          "why": "تطبيق مبدأ Dependency Inversion هو الجسر الذي ينقل النظام إلى Domain-Centric.",
          "en": "Inverting dependencies so that database code depends on interfaces declared within domain and application, rather than business logic depending on tables."
        },
        {
          "ar": "حذف قواعد البيانات واستبدالها بالطباعة الورقية.",
          "ok": false,
          "why": "غير صحيح إطلاقاً.",
          "en": "Deleting databases and replacing them with paper printouts."
        },
        {
          "ar": "إعادة كتابة الكود بلغة التجميع.",
          "ok": false,
          "why": "لا علاقة له بلغة التجميع.",
          "en": "Rewriting the code in Assembly language."
        },
        {
          "ar": "شراء خوادم حاسوبية جديدة فقط دون تعديل الكود.",
          "ok": false,
          "why": "التحول معماري برمجي في شفرة النظام.",
          "en": "Purchasing new computer servers without modifying any code."
        }
      ],
      "tip": "وقفة امتحانية: قلب التبعيات (Dependency Inversion) هو المفتاح السحري للتحول نحو Domain-Centric Architecture."
    },
    {
      "n": 193,
      "type": "mcq",
      "ref": "L5-S023",
      "q_ar": "في مخطط الدوائر متحدة المركز للعمارة النظيفة، ماذا تمثل الأسهم المتجهة دائماً للداخل؟",
      "q_en": "In the concentric circles diagram of Clean Architecture, what do the inward-pointing arrows represent?",
      "opts": [
        {
          "ar": "اتجاه تدفق الكهرباء في دوائر المعالج.",
          "ok": false,
          "why": "المخطط برمجي منطقي وليس دائرة كهربائية.",
          "en": "The direction of electric current flow in CPU circuits."
        },
        {
          "ar": "اتجاه كود ومراجع التبعية (Source Code Dependencies)، حيث تشير الطبقات الخارجية إلى الداخلية فقط.",
          "ok": true,
          "why": "الأسهم ترمز إلى أن الكود الخارجي يعرف الداخلي، والداخلي يجهل الخارجي تماماً.",
          "en": "The direction of source code dependencies, where outer layers only point to inner layers."
        },
        {
          "ar": "اتجاه مسار رحلات الطيران الدولية.",
          "ok": false,
          "why": "لا علاقة له بالطيران.",
          "en": "The route direction of international airline flights."
        },
        {
          "ar": "اتجاه نقل الملفات عبر البلوتوث.",
          "ok": false,
          "why": "لا علاقة له بنقل الملفات.",
          "en": "The direction of Bluetooth file transfer."
        }
      ],
      "tip": "وقفة امتحانية: الأسهم في Clean Architecture تشير إلى الداخل حصراً: Outer Layers -> Inner Layers."
    },
    {
      "n": 194,
      "type": "mcq",
      "ref": "L5-S029",
      "q_ar": "أي من المكونات التالية يُعد من المكونات التكتيكية للتصميم الموجه بالمجال (DDD) داخل طبقة النطاق؟",
      "q_en": "Which component is a DDD tactical pattern within the Domain Layer?",
      "opts": [
        {
          "ar": "Controllers و Views و Razor Pages.",
          "ok": false,
          "why": "هذه مكونات طبقة العرض Presentation.",
          "en": "Controllers, Views, and Razor Pages."
        },
        {
          "ar": "Entities (الكيانات), Value Objects (كائنات القيمة), و Domain Events (أحداث المجال).",
          "ok": true,
          "why": "هذه هي اللبنات الأساسية التكتيكية لبناء مجال الأعمال في DDD.",
          "en": "Entities, Value Objects, and Domain Events."
        },
        {
          "ar": "SQL Tables و Stored Procedures.",
          "ok": false,
          "why": "هذه كائنات قاعدة بيانات تتبع البنية التحتية.",
          "en": "SQL Tables and Stored Procedures."
        },
        {
          "ar": "HTTP Middlewares و Cookies.",
          "ok": false,
          "why": "هذه أدوات ويب تتبع طبقة العرض.",
          "en": "HTTP Middlewares and Cookies."
        }
      ],
      "tip": "وقفة امتحانية: مكونات Domain الأساسية في DDD: Entities, Value Objects, Domain Events, Domain Exceptions."
    },
    {
      "n": 195,
      "type": "mcq",
      "ref": "L5-S035",
      "q_ar": "لماذا نقوم بإنشاء كلاس `Order` في النطاق وكلاس منفصل `OrderTable` في البنية التحتية لـ EF Core؟",
      "q_en": "Why do we create an `Order` class in Domain and a separate `OrderTable` class in Infrastructure for EF Core?",
      "opts": [
        {
          "ar": "لإضاعة الوقت وزيادة أسطر الكود عمداً.",
          "ok": false,
          "why": "الفصل يحقق هدفاً معمارياً جوهرياً.",
          "en": "To intentionally waste time and increase lines of code."
        },
        {
          "ar": "لعزل كائن الأعمال النقي وحمايته بقواعد التحقق والتغليف، وترك فئة التخزين لتهتم بقيود الجداول والمفاتيح وقواعد البيانات.",
          "ok": true,
          "why": "الفصل يحمي كائن النطاق من تلوثه بخصائص التخزين (مثل Foreign Keys والـ Annotations الخاصة بـ EF).",
          "en": "To isolate the pure business entity with validation and encapsulation, leaving the storage class to handle table schemas, foreign keys, and database constraints."
        },
        {
          "ar": "لأن لغة C# تمنع حفظ الكيانات في قواعد البيانات.",
          "ok": false,
          "why": "الكيانات تُحفظ بعد تحويلها (Mapping).",
          "en": "Because C# prohibits persisting entities to databases."
        },
        {
          "ar": "لتقليل استهلاك كهرباء الشاشة.",
          "ok": false,
          "why": "لا علاقة له بالشاشات.",
          "en": "To reduce screen power consumption."
        }
      ],
      "tip": "وقفة امتحانية: الفصل بين Domain Entity و Database Table Entity يضمن النقاء المعماري الكامل للنطاق."
    },
    {
      "n": 196,
      "type": "mcq",
      "ref": "L5-S039",
      "q_ar": "لماذا يجب ألا تتسرب قواعد التحقق من الأعمال (Business Invariants) إلى خارج كائنات النطاق؟",
      "q_en": "Why must business invariants never leak outside Domain entities?",
      "opts": [
        {
          "ar": "لأن تسربها يجعل الكيان أنيمك فقيراً، ويشتت قواعد العمل ويكررها في خدمات متعددة، مما يسبب تضارب وتلف البيانات عند أي تعديل.",
          "ok": true,
          "why": "الكيان يجب أن يضمن سلامة حالته بنفسه (Self-Validating) لضمان عدم وجوده في حالة غير صالحة أبداً.",
          "en": "Because leaking them creates an anemic model, scattering and duplicating business rules across multiple services, leading to inconsistencies and data corruption upon updates."
        },
        {
          "ar": "لأن ذلك يؤدي لإلغاء اتصال الإنترنت.",
          "ok": false,
          "why": "لا علاقة له بالإنترنت.",
          "en": "Because that causes internet disconnection."
        },
        {
          "ar": "لأن ذلك يمنع المترجم من بناء المشروع.",
          "ok": false,
          "why": "المترجم لا يدرك تسرب القواعد؛ المشكلة معمارية.",
          "en": "Because that prevents the compiler from building the project."
        },
        {
          "ar": "لأن قواعد العمل سرية للغاية وممنوع كتابتها.",
          "ok": false,
          "why": "قواعد العمل هي جوهر النظام ولكن مكانها داخل الكيان.",
          "en": "Because business rules are top secret and forbidden to write."
        }
      ],
      "tip": "وقفة امتحانية: حماية قواعد العمل داخل الكيان تمنع خلق كائنات بحالة تالفة (Invalid State)."
    },
    {
      "n": 197,
      "type": "mcq",
      "ref": "L5-S043",
      "q_ar": "في مثال الحساب البنكي (BankAccount)، كيف يطبق كائن النطاق قاعدة سحب الأموال `Withdraw(decimal amount)`؟",
      "q_en": "In the BankAccount example, how does the domain entity apply the `Withdraw(decimal amount)` rule?",
      "opts": [
        {
          "ar": "يقوم بالسحب مباشرة دون فحص الرصيد حتى لو أصبح بالسالب.",
          "ok": false,
          "why": "هذا يكسر قواعد العمل البنكية.",
          "en": "Withdraws directly without checking balance, even if it goes negative."
        },
        {
          "ar": "يتحقق أولاً: إذا كان المبلغ سالباً أو يتجاوز الرصيد المتاح يرمي استثناء `InsufficientFundsException`، وإلا يخصم المبلغ من الرصيد الداخلي المحمي.",
          "ok": true,
          "why": "هذا هو تطبيق النموذج الغني؛ الدالة تحمي تكامل الحساب وترفض أي سحب غير قانوني ذاتياً.",
          "en": "Validates first: if the amount is negative or exceeds available balance, throws `InsufficientFundsException`; otherwise deducts the amount from the protected internal balance."
        },
        {
          "ar": "يقوم بالاتصال بمدير البنك هاتفياً في كل عملية سحب.",
          "ok": false,
          "why": "التحقق برمجي فوري وآلي.",
          "en": "Calls the bank manager by phone on every withdrawal."
        },
        {
          "ar": "يقوم بحذف حساب العميل نهائياً من النظام.",
          "ok": false,
          "why": "هذا ليس سلوك سحب أموال.",
          "en": "Permanently deletes the customer account from the system."
        }
      ],
      "tip": "وقفة امتحانية: دالة الكيان الغني تتحقق من الشروط المسبقة (Guard Clauses) قبل تعديل أي حقل داخلي."
    },
    {
      "n": 198,
      "type": "mcq",
      "ref": "L5-S050",
      "q_ar": "ما هي جمل الحماية (Guard Clauses) في منشئات كائنات النطاق وما فائدتها؟",
      "q_en": "What are Guard Clauses in Domain entity constructors and what is their benefit?",
      "opts": [
        {
          "ar": "شفرات توضع في نهاية البرنامج لحذف السجلات القديمة.",
          "ok": false,
          "why": "جمل الحماية توضع في بداية المنشئات والدوال.",
          "en": "Code placed at program termination to delete obsolete records."
        },
        {
          "ar": "شروط فحص مبكرة تفحص المدخلات (مثل التأكد من أن الاسم ليس فارغاً والرصيد ليس سالباً) وترمي استثناء فورياً لمنع إنشاء كائن بحالة غير صالحة.",
          "ok": true,
          "why": "Guard Clauses تضمن عدم دخول أي كائن للحياة في الذاكرة وهو بحالة غير متوافقة مع قواعد النشاط التجاري.",
          "en": "Early assertion checks validating inputs (e.g., non-empty name, non-negative balance) that throw immediate exceptions to prevent instantiating invalid objects."
        },
        {
          "ar": "كلمات سرية لفتح شاشات المشرفين.",
          "ok": false,
          "why": "ليست كلمات مرور.",
          "en": "Secret passcodes to open administrator screens."
        },
        {
          "ar": "أوامر لإيقاف عمل جدار الحماية بنظام التشغيل.",
          "ok": false,
          "why": "لا علاقة له بجدار الحماية.",
          "en": "Commands to disable the OS firewall."
        }
      ],
      "tip": "وقفة امتحانية: Guard Clauses: 'Fail Fast' — ارمِ استثناءً مبكراً عند أول مدخل غير سليم لحماية تكامل الكيان."
    },
    {
      "n": 199,
      "type": "mcq",
      "ref": "L5-S055",
      "q_ar": "في تقسيم مجلدات طبقة التطبيق (Application Layer)، ماذا يوضع عادة داخل مجلد `UseCases` أو `Features`؟",
      "q_en": "In Application Layer folder structure, what is typically placed inside `UseCases` or `Features`?",
      "opts": [
        {
          "ar": "ملفات تكوين قواعد بيانات SQL Server ومفاتيح الربط.",
          "ok": false,
          "why": "هذه تتبع طبقة البنية التحتية.",
          "en": "SQL Server configuration files and connection strings."
        },
        {
          "ar": "فئات الخدمات ومعالجات الأوامر والاستعلامات (Commands and Queries) الخاصة بكل سيناريو استخدام في النظام.",
          "ok": true,
          "why": "كل حالة استخدام (مثل CreateOrder, GetOrderById) توضع في مجلد يضم معالجها وكائنات DTO الخاصة بها.",
          "en": "Service classes, command handlers, and query handlers (Commands and Queries) for each system use case scenario."
        },
        {
          "ar": "صور وخلفيات شاشات الموقع.",
          "ok": false,
          "why": "هذه أصول واجهة المستخدم (Assets).",
          "en": "Website images and background wallpapers."
        },
        {
          "ar": "ملفات التجميع الثنائية التنفيذية dll.",
          "ok": false,
          "why": "هذه مخرجات بناء المترجم.",
          "en": "Binary executable assembly DLL files."
        }
      ],
      "tip": "وقفة امتحانية: تنظيم طبقة التطبيق إما حسب النمط الكلاسيكي (Services) أو النمط المعياري الحديث (Vertical Slices / Features)."
    },
    {
      "n": 200,
      "type": "mcq",
      "ref": "L5-S059",
      "q_ar": "في سيناريو 'تحويل أموال' (TransferMoney) داخل طبقة التطبيق، ما هي الخطوات التي ينسقها كلاس `TransferService`؟",
      "q_en": "In a 'TransferMoney' scenario in Application Layer, what steps does `TransferService` orchestrate?",
      "opts": [
        {
          "ar": "جلب حساب المصدر والهدف من `IAccountRepository`، استدعاء دوال السحب والإيداع على كيانات النطاق، ثم حفظ التغييرات وإشعار الخدمات.",
          "ok": true,
          "why": "خدمة التطبيق تنسق العملية بالكامل: جلب الكيانات، تطبيق دوال النطاق، وحفظ النتيجة عبر المستودع.",
          "en": "Fetching source and target accounts via `IAccountRepository`, calling withdraw and deposit on domain entities, saving changes, and notifying services."
        },
        {
          "ar": "كتابة كود HTML وإرساله مباشرة للعميل.",
          "ok": false,
          "why": "هذا دور طبقة العرض.",
          "en": "Writing HTML code and sending it directly to the client."
        },
        {
          "ar": "فتح اتصال شبكي مباشر بقاعدة البيانات وكتابة جمل SQL يدوياً.",
          "ok": false,
          "why": "التطبيق يعتمد على الواجهة المجردة للمستودع دون SQL.",
          "en": "Opening a direct network connection to database and writing raw SQL statements manually."
        },
        {
          "ar": "إيقاف خادم البنك حتى يتم التأكد هاتفياً.",
          "ok": false,
          "why": "غير صحيح برمجياً.",
          "en": "Halting the bank server until phone confirmation is obtained."
        }
      ],
      "tip": "وقفة امتحانية: Application Service = Orchestrator: لا تحسب الرصيد بنفسها بل تأمر الكيان بالسحب والإيداع ثم تأمر المستودع بالحفظ."
    },
    {
      "n": 201,
      "type": "mcq",
      "ref": "L5-S070",
      "q_ar": "عندما ينفذ كلاس `SqlOrderRepository` في البنية التحتية واجهة `IOrderRepository`، كيف يتعامل مع EF Core؟",
      "q_en": "When `SqlOrderRepository` in Infrastructure implements `IOrderRepository`, how does it interact with EF Core?",
      "opts": [
        {
          "ar": "يحقن سياق `ApplicationDbContext` عبر المنشئ ويستخدم دوال LINQ و DbSet لتنفيذ عمليات الحفظ والاسترجاع من قاعدة البيانات.",
          "ok": true,
          "why": "المستودع في البنية التحتية يترجم أوامر الواجهة المجردة إلى استعلامات LINQ فعلية ينفذها EF Core على قاعدة البيانات.",
          "en": "Injects `ApplicationDbContext` via constructor and uses LINQ and DbSet methods to execute database persistence and queries."
        },
        {
          "ar": "يرفض التعامل مع EF Core ويعتمد على بطاقات الذاكرة القديمة.",
          "ok": false,
          "why": "EF Core هو أداة ORM القياسية في بيئة .NET.",
          "en": "Rejects EF Core and relies on legacy memory cards."
        },
        {
          "ar": "يقوم بحذف الجداول مع كل عملية استرجاع.",
          "ok": false,
          "why": "المستودع يسترجع البيانات ويحافظ عليها.",
          "en": "Deletes tables upon every query operation."
        },
        {
          "ar": "يقوم بإرسال رسائل صوتية للمستخدمين.",
          "ok": false,
          "why": "المستودع مختص بالبيانات.",
          "en": "Sends voice messages to users."
        }
      ],
      "tip": "وقفة امتحانية: مستودع البنية التحتية هو المكان الوحيد الذي يستدعي `_context.Orders.Add()` و `_context.SaveChangesAsync()`."
    },
    {
      "n": 202,
      "type": "mcq",
      "ref": "L5-S079",
      "q_ar": "ما هي الطريقة القياسية المعتمدة في .NET لتسجيل خدمات البنية التحتية بحاوية التبعيات دون فضح تفاصيلها للواجهة؟",
      "q_en": "What is the standard .NET approach to register Infrastructure services in the DI container cleanly?",
      "opts": [
        {
          "ar": "كتابة دالة امتداد (Extension Method) مثل `AddInfrastructureServices(this IServiceCollection services)` واستدعاؤها في Program.cs.",
          "ok": true,
          "why": "دوال الامتداد تعزل تفاصيل تسجيل EF Core والمستودعات داخل مشروع البنية التحتية، وتجعل Program.cs يكتفي باستدعاء سطر واحد نظيف.",
          "en": "Writing an extension method like `AddInfrastructureServices(this IServiceCollection services)` and calling it in Program.cs."
        },
        {
          "ar": "نسخ كود البنية التحتية بالكامل ولصقه داخل واجهة المستخدم.",
          "ok": false,
          "why": "هذا يدمر العمارة النظيفة.",
          "en": "Copying the entire infrastructure code and pasting it inside the UI."
        },
        {
          "ar": "حذف حاوية التبعيات واستخدام المتغيرات العامة الساكنة.",
          "ok": false,
          "why": "ممارسة سيئة جداً.",
          "en": "Deleting the DI container and using global static variables."
        },
        {
          "ar": "إعادة بناء حل المشروع بدون ملف Program.cs.",
          "ok": false,
          "why": "ملف Program.cs إلزامي لتشغيل تطبيقات .NET.",
          "en": "Rebuilding the solution without Program.cs."
        }
      ],
      "tip": "وقفة امتحانية: Clean Architecture Best Practice: كل طبقة توفر دالة `Add[Layer]Services()` خاصة بها لتسجيل تبعياتها."
    },
    {
      "n": 203,
      "type": "mcq",
      "ref": "L5-S086",
      "q_ar": "في بنية مشروع Presentation Layer، ما الذي يجب أن يحتويه مجلد `Controllers`؟",
      "q_en": "In the Presentation Layer project structure, what should the `Controllers` folder contain?",
      "opts": [
        {
          "ar": "فئات التحكم الخاصة بواجهات الويب (API Controllers) التي ترث من `ControllerBase` وتستقبل طلبات HTTP.",
          "ok": true,
          "why": "المتحكمات هي مسؤولة استقبال طلبات الويب وتوجيهها لحالات الاستخدام.",
          "en": "API controller classes inheriting from `ControllerBase` that handle incoming HTTP requests."
        },
        {
          "ar": "جداول قواعد البيانات ومفاتيح التخزين.",
          "ok": false,
          "why": "مكانها البنية التحتية.",
          "en": "Database tables and storage keys."
        },
        {
          "ar": "كيانات الأعمال وقواعد التغليف.",
          "ok": false,
          "why": "مكانها النطاق.",
          "en": "Business entities and encapsulation rules."
        },
        {
          "ar": "أدوات فحص جودة خطوط الشبكة.",
          "ok": false,
          "why": "أدوات شبكية وليست متحكمات برمجة.",
          "en": "Network cable quality testing tools."
        }
      ],
      "tip": "وقفة امتحانية: في ASP.NET Core Web API: المتحكمات ترث من `ControllerBase` وتحتوي على وسوم المسارات `[Route]` و `[ApiController]`."
    },
    {
      "n": 204,
      "type": "mcq",
      "ref": "L5-S090",
      "q_ar": "ما هي أكواد استجابة HTTP (Status Codes) التي يجب أن يرجعها Controller عند نجاح إنشاء عنصر جديد، وعند وجود خطأ في البيانات؟",
      "q_en": "What HTTP status codes should a Controller return on successful creation and on validation error?",
      "opts": [
        {
          "ar": "دائماً يرجع 200 OK في كافة الحالات حتى لو وقع خطأ فادح.",
          "ok": false,
          "why": "إرجاع 200 عند حدوث خطأ ممارسة سيئة تخادع العميل وتخالف معايير REST.",
          "en": "Always returns 200 OK in all scenarios even if a fatal error occurs."
        },
        {
          "ar": "يرجع `201 Created` عند نجاح الإنشاء، ويرجع `400 Bad Request` عند وجود خطأ في صحة البيانات المدخلة.",
          "ok": true,
          "why": "هذا هو الالتزام الصارم بمعايير RESTful API في هندسة واجهات الويب.",
          "en": "Returns `201 Created` on successful creation, and `400 Bad Request` on input validation errors."
        },
        {
          "ar": "يرجع 500 Internal Server Error دائماً.",
          "ok": false,
          "why": "كود 500 يدل على انهيار غير معالج بالخادم.",
          "en": "Always returns 500 Internal Server Error."
        },
        {
          "ar": "يرجع 404 Not Found عند نجاح إنشاء العنصر.",
          "ok": false,
          "why": "كود 404 يعني أن المورد غير موجود.",
          "en": "Returns 404 Not Found upon successful creation."
        }
      ],
      "tip": "وقفة امتحانية: معايير REST في Controllers: نجاح إنشاء = 201 Created · خطأ مدخلات = 400 Bad Request · غير موجود = 404 Not Found."
    },
    {
      "n": 205,
      "type": "mcq",
      "ref": "L5-S099",
      "q_ar": "كيف يتم حقن التبعيات (Dependency Injection) داخل فئات الكنترولر في ASP.NET Core بشكل نظيف؟",
      "q_en": "How are dependencies cleanly injected into Controller classes in ASP.NET Core?",
      "opts": [
        {
          "ar": "عبر استدعاء الكلمة `new` داخل دوال الكنترولر في كل طلب.",
          "ok": false,
          "why": "هذا ينقض حقن التبعيات ويربط الكود بالخرسانات.",
          "en": "Via invoking the `new` keyword inside controller actions on every request."
        },
        {
          "ar": "عبر حقن الواجهات في منشئ الكنترولر (Constructor Injection)، حيث تقوم حاوية DI بتمرير النسخة المناسبة تلقائياً عند إنشاء الكنترولر.",
          "ok": true,
          "why": "حقن المنشئ هو الأسلوب المعياري الموصى به في .NET، ويجعل التبعيات صريحة وقابلة للاختبار المعزول.",
          "en": "Via Constructor Injection into the controller constructor, where the DI container automatically passes the appropriate instance when instantiating the controller."
        },
        {
          "ar": "عبر قراءة التبعيات من ملف نصي على سطح المكتب.",
          "ok": false,
          "why": "غير صحيح برمجياً.",
          "en": "Via reading dependencies from a text file on Desktop."
        },
        {
          "ar": "عبر تمرير التبعيات كمعاملات في رابط URL بالمتصفح.",
          "ok": false,
          "why": "الرابط يستقبل معاملات المستخدم وليس خدمات النظام.",
          "en": "Via passing dependencies as query parameters in browser URL."
        }
      ],
      "tip": "وقفة امتحانية: الأسلوب القياسي لحقن التبعيات في .NET هو: Constructor Injection."
    },
    {
      "n": 206,
      "type": "mcq",
      "ref": "L6-S002",
      "q_ar": "ما هو التعريف الدقيق لمفهوم واجهة برمجة التطبيقات (API) وفق المعمارية البرمجية؟",
      "q_en": "What is the precise definition of an Application Programming Interface (API) in software architecture?",
      "opts": [
        {
          "ar": "قاعدة بيانات علائقية لتخزين جداول المستخدمين والصلاحيات فقط.",
          "ok": false,
          "why": "قواعد البيانات مخازن بيانات وليست واجهات تواصل وتكامل بين البرمجيات.",
          "en": "A relational database used solely for storing user tables and permissions."
        },
        {
          "ar": "عقد برمجي مجرد وآلية اتصال تتيح لنظامين برمجcontracts) محدد وموثق دون كشف التنفيذ الداخلي.",
          "ok": true,
          "why": "الـ API هو عقد ومترجم يحدد قواعد تبادل الرسائل والوظائف بين البرمجيات المستقلة.",
          "en": "An abstract software contract and communication mechanism that allows two systems to interact via defined interfaces without exposing internal implementations."
        },
        {
          "ar": "شاشة مستخدم رسومية مصممة للتحكم في الطابعات الملحقة بالحاسوب.",
          "ok": false,
          "why": "الـ API واجهة برمجية للأنظمة وليست واجهة مستخدم رسومية (GUI).",
          "en": "A graphical user interface designed for managing computer peripheral printers."
        },
        {
          "ar": "بروتوكول تشفير فيزيائي مدمج داخل كابلات الشبكة السلكية.",
          "ok": false,
          "why": "الـ API مفهوم برمجي في طبقة التطبيقات وليس عتاداً شبكياً.",
          "en": "A physical encryption protocol embedded inside wired network cables."
        }
      ],
      "tip": "وقفة امتحانية: الـ API هو عقد مجرد (Contract) يحدد: ما هي الطلبات المقبولة، ما هي المدخلات، وما هو شكل الاستجابة المتوقعة."
    },
    {
      "n": 207,
      "type": "mcq",
      "ref": "L6-S002",
      "q_ar": "كيف تمثل استعارة المطعم الشهيرة (العميل والنادل والمطبخ) دور الـ API في هندسة البرمجيات؟",
      "q_en": "How does the restaurant metaphor (customer, waiter, kitchen) illustrate the role of an API in software engineering?",
      "opts": [
        {
          "ar": "المطبخ يمثل العميل، والنادل يمثل قاعدة البيانات، والزبون يمثل واجهة الـ API.",
          "ok": false,
          "why": "الترتيب معكوس وغير صحيح.",
          "en": "The kitchen represents the client, the waiter is the database, and customer is the API."
        },
        {
          "ar": "الزبون يمثل العميل (Client)، والنادل يمثل الـ API الذي ينقل الطلبات ويعيد النتائج، والمطبخ يمثل النظام الخلفي (Backend).",
          "ok": true,
          "why": "النادل يعزل العميل عن فوضى وتعقيد المطبخ الداخلي، تماماً كما يعزل الـ API العميل عن تعقيد الخادم.",
          "en": "The customer represents the Client, the waiter represents the API transmitting requests and returning results, and kitchen is the Backend."
        },
        {
          "ar": "النادل يلغي الحاجة لوجود مطبخ تماماً في المطعم.",
          "ok": false,
          "why": "النادل مجرد وسيط، وبدونه أو بدون مطبخ لا توجد وجبة.",
          "en": "The waiter completely eliminates the need for having a kitchen in the restaurant."
        },
        {
          "ar": "العميل يدخل المطبخ بنفسه ويطبخ الطعام مباشرة دون أي وسيط.",
          "ok": false,
          "why": "هذا يناقض فكرة التغليف والعزل التي يوفرها النادل والـ API.",
          "en": "The customer enters the kitchen directly and cooks food without any intermediary."
        }
      ],
      "tip": "وقفة امتحانية: فائدة الـ API هي حماية النظام الخلفي وإخفاء تفاصيل المعالجة الداخلية وتوفير واجهة تفاعل قياسية وآمنة."
    },
    {
      "n": 208,
      "type": "mcq",
      "ref": "L6-S002",
      "q_ar": "هل يشترط في الأنظمة المتكاملة عبر واجهات الـ APIs أن تكون مكتوبة بنفس لغة البرمجة وتعمل على نفس نظام التشغيل؟",
      "q_en": "Must systems integrating via APIs be written in the same programming language and run on the same operating system?",
      "opts": [
        {
          "ar": "نعم، يشترط تطابق لغة البرمجة ونظام التشغيل في الطرفين بالكامل.",
          "ok": false,
          "why": "الـ API صُمم أساساً لكسر هذا القيد.",
          "en": "Yes, identical programming languages and operating systems are strictly required."
        },
        {
          "ar": "لا، فالـ APIs تعتمد على بروتوكولات قياسية وصيغ بيانات حيادية (مثل HTTP و JSON) مستقلة عن المنصة.",
          "ok": true,
          "why": "استقلالية المنصة (Platform Independence) هي إحدى أعظم ميزات الـ APIs الحديثة.",
          "en": "No, because APIs rely on standard protocols and platform-neutral formats (like HTTP and JSON)."
        },
        {
          "ar": "نعم، ولكن فقط إذا كان الخادم يعمل بنظام لينكس والعميل بنظام ويندوز.",
          "ok": false,
          "why": "البروتوكولات المحايدة تعمل عبر كافة أنظمة التشغيل بلا تمييز.",
          "en": "Yes, but only if the server runs on Linux and the client runs on Windows."
        },
        {
          "ar": "نعم، لأن البيانات لا يمكن نقلها شبكياً بين لغات برمجة مختلفة.",
          "ok": false,
          "why": "البيانات تنقل بتنسيقات قياسية يفهمها الجميع مثل JSON و XML و Protobuf.",
          "en": "Yes, because data cannot be transmitted over networks between different languages."
        }
      ],
      "tip": "وقفة امتحانية: واجهات الـ APIs تحقق Platform Independence؛ تطبيق بـ Flutter بلغة Dart يتحدث بسهولة مع خادم C# وقاعدة Oracle."
    },
    {
      "n": 209,
      "type": "mcq",
      "ref": "L6-S003",
      "q_ar": "في المعمارية الحديثة متعددة الطبقات (Modern Layered Architecture)، ما هو الدور المنوط بـ API Layer؟",
      "q_en": "In modern layered architecture, what is the specific responsibility assigned to the API Layer?",
      "opts": [
        {
          "ar": "تخزين البيانات الدائمة وكتابة استعلامات SQL المعقدة مباشرة.",
          "ok": false,
          "why": "هذه مسؤولية طبقة البنية التحتية (Infrastructure).",
          "en": "Persisting permanent data and executing complex SQL queries directly."
        },
        {
          "ar": "استقبال طلبات العملاء الخارجية، فحص صحة المدخلات الأولية، والتوثيق، ثم تفويض التنفيذ لطبقات الأعمال.",
          "ok": true,
          "why": "طبقة الـ API هي بوابة الدخول والمترجم وليست مكاناً لتنفيذ منطق الأعمال الجوهري.",
          "en": "Receiving external client requests, validating initial inputs, authenticating, and dispatching execution to application layers."
        },
        {
          "ar": "تحديد القواعد المحاسبية الجوهرية للشركة وسياسات التسعير.",
          "ok": false,
          "why": "مكان قواعد الأعمال الجوهرية هو طبقة المجال (Domain Layer).",
          "en": "Defining core accounting rules and corporate pricing policies."
        },
        {
          "ar": "إدارة بطاقات الشاشات والذاكرة العشوائية للخادم.",
          "ok": false,
          "why": "هذه وظيفة نظام التشغيل والعتاد.",
          "en": "Managing display cards and RAM memory of the physical server."
        }
      ],
      "tip": "وقفة امتحانية: قاعدة معمارية ذهبية: No Business Logic in API Layer (لا يُكتب منطق الأعمال أبداً في طبقة الـ API أو الـ Controllers)."
    },
    {
      "n": 210,
      "type": "mcq",
      "ref": "L6-S004",
      "q_ar": "لماذا تلجأ المتاجر الإلكترونية لاستخدام Payment APIs (مثل Stripe أو PayPal) بدلاً من معالجة وتخزين بطاقات الائتمان بنفسها؟",
      "q_en": "Why do e-commerce stores integrate Payment APIs (like Stripe or PayPal) instead of processing and storing credit cards themselves?",
      "opts": [
        {
          "ar": "لأن لغات البرمجة الحديثة لا تدعم قراءة الأرقام المكونة من 16 خانة.",
          "ok": false,
          "why": "لغات البرمجة تدعم كافة أنواع الأرقام والسلاسل.",
          "en": "Because modern programming languages cannot read 16-digit numbers."
        },
        {
          "ar": "للتهرب من التراخيص الأمنية المعقدة (معايير PCI-DSS) ونقل المخاطر القانونية والمالية لجهات مالية متخصصة ومؤمنة.",
          "ok": true,
          "why": "تخزين ومعالجة البطاقات يتطلب بنية أمنية بالغة الصرامة والتكلفة، والـ Payment API يفوض هذه المسؤولية للوسيط المالي.",
          "en": "To bypass rigorous PCI-DSS security compliance and transfer legal/financial fraud risks to specialized, certified financial processors."
        },
        {
          "ar": "لأن المتجر يريد إبطاء سرعة إتمام عمليات الشراء للعملاء.",
          "ok": false,
          "why": "المتاجر تسعى دائماً لتسريع وتسهيل الدفع.",
          "en": "Because the store desires to slow down checkout completion speed."
        },
        {
          "ar": "لأن البنوك تحظر على المتاجر البيع بالبطاقات الإلكترونية إطلاقاً.",
          "ok": false,
          "why": "البنوك توفر بوابات الدفع خصيصاً لتمكين التجارة الإلكترونية.",
          "en": "Because banks prohibit e-commerce stores from accepting electronic cards altogether."
        }
      ],
      "tip": "وقفة امتحانية: القيمة الهندسية لدمج الـ APIs: الأمان الصارم، تفويض الاختصاصات المعقدة، وتقليص تكلفة التشغيل ووقت الطرح في السوق."
    },
    {
      "n": 211,
      "type": "mcq",
      "ref": "L6-S005",
      "q_ar": "ما هو التصنيف الثلاثي لواجهات برمجة التطبيقات بناءً على نطاق الوصول والإتاحة المؤسسية؟",
      "q_en": "What is the threefold classification of APIs based on accessibility and organizational scope?",
      "opts": [
        {
          "ar": "واجهات سريعة، واجهات بطيئة، وواجهات متوسطة.",
          "ok": false,
          "why": "هذا تقييم أداء وليس تصنيف إتاحة ووصول.",
          "en": "Fast APIs, slow APIs, and medium APIs."
        },
        {
          "ar": "واجهات عامة (Public)، واجهات خاصة/داخلية (Private/Internal)، وواجهات الشركاء (Partner APIs).",
          "ok": true,
          "why": "هذا هو التصنيف الإداري والتنظيمي المعتمد في السلايدات لهندسة الواجهات.",
          "en": "Public APIs, Private/Internal APIs, and Partner APIs."
        },
        {
          "ar": "واجهات سطح المكتب، واجهات السيرفر، وواجهات الطابعات.",
          "ok": false,
          "why": "تصنيف عتادي خاطئ.",
          "en": "Desktop APIs, server APIs, and printer APIs."
        },
        {
          "ar": "واجهات نصية، واجهات رقمية، وواجهات كائنية.",
          "ok": false,
          "why": "تصنيف أنواع بيانات وليس واجهات.",
          "en": "Textual APIs, numeric APIs, and object-oriented APIs."
        }
      ],
      "tip": "وقفة امتحانية: تصنيف الـ APIs له بعدان: 1) حسب نطاق الإتاحة (Public, Private, Partner)، 2) حسب المعمارية (REST, SOAP, GraphQL, gRPC)."
    },
    {
      "n": 212,
      "type": "mcq",
      "ref": "L6-S006",
      "q_ar": "لماذا تفرض الواجهات العامة (Public APIs) استخدام مفاتيح الوصول (API Keys) وآليات تقييد الاستهلاك (Rate Limiting)؟",
      "q_en": "Why do Public APIs enforce the use of API Keys and Rate Limiting mechanisms?",
      "opts": [
        {
          "ar": "لتشفير اتصال الأسلاك النحاسية بين الخادم وجدار الحماية.",
          "ok": false,
          "why": "التشفير وظيفة TLS/HTTPS وليس مفاتيح API.",
          "en": "To encrypt copper wire connections between server and firewall."
        },
        {
          "ar": "لتتبع حجم استهلاك المطورين، فرض الفواتير، وحماية السيرفر من هجمات الإغراق وهدر الموارد (DDoS / Abuse).",
          "ok": true,
          "why": "الواجهات العامة مكشوفة للإنترنت، وبدون Rate Limiting ومفاتيح تتبع ينهار الخادم تحت وطأة الطلبات المتكررة.",
          "en": "To track developer usage quotas, enforce monetization billing, and protect servers from resource exhaustion and DDoS abuse."
        },
        {
          "ar": "لإجبار المطورين على كتابة الكود بنظام التشغيل ويندوز حصراً.",
          "ok": false,
          "why": "مفاتيح الـ API محايدة ولا علاقة لها بنظام التشغيل.",
          "en": "To force developers to write code exclusively on Windows OS."
        },
        {
          "ar": "لحذف حسابات المستخدمين الخاملين تلقائياً كل 10 دقائق.",
          "ok": false,
          "why": "الـ Rate Limiting يراقب معدل الطلبات في الثانية أو الدقيقة فقط.",
          "en": "To delete inactive user accounts automatically every 10 minutes."
        }
      ],
      "tip": "وقفة امتحانية: الـ Rate Limiting يحدد سقفاً أعلى للطلبات لكل مفتاح أو IP (مثال: 60 طلب في الدقيقة) ويرجع الكود 429 Too Many Requests."
    },
    {
      "n": 213,
      "type": "mcq",
      "ref": "L6-S007",
      "q_ar": "ما هي الفائدة المعمارية والأمنية الكبرى لاعتماد الواجهات الخاصة (Private / Internal APIs) داخل المؤسسات؟",
      "q_en": "What is the major architectural and security benefit of adopting Private/Internal APIs within enterprises?",
      "opts": [
        {
          "ar": "عدم تعريض نقاط النهاية وقواعد البيانات الحساسة للإنترنت المفتوح، وتقليص مساحة سطح الهجوم.",
          "ok": true,
          "why": "الواجهات الخاصة تعمل داخل الشبكة المعزولة للمؤسسة، مما يمنع وصول القراصنة المباشر إلى المنظومات الجوهرية.",
          "en": "Shielding endpoints and sensitive databases from the public internet, thereby drastically reducing attack surface."
        },
        {
          "ar": "إتاحة تحميل كافة بيانات العملاء للجمهور مجاناً دون قيود.",
          "ok": false,
          "why": "الواجهة الخاصة سرية ومحصورة بالأنظمة الداخلية.",
          "en": "Making all customer data downloadable to the public freely without restriction."
        },
        {
          "ar": "الاستغناء عن كلمات المرور في جميع حسابات الموظفين.",
          "ok": false,
          "why": "الأنظمة الداخلية تطبق مصادقة صارمة أيضاً.",
          "en": "Eliminating passwords completely across all staff accounts."
        },
        {
          "ar": "تسريع حركة مراوح التبريد في أجهزة السيرفرات السحابية.",
          "ok": false,
          "why": "مفهوم برمجي ومعماري وليس تحكماً ميكانيكياً.",
          "en": "Accelerating cooling fan rotation speed in cloud servers."
        }
      ],
      "tip": "وقفة امتحانية: Private APIs تسمح بتطوير وتغيير بنية قواعد البيانات الداخلية بحرية كاملة طالما أن عقد الواجهة الداخلية ثابت."
    },
    {
      "n": 214,
      "type": "mcq",
      "ref": "L6-S008",
      "q_ar": "بماذا تتميز واجهات الشركاء (Partner APIs) عن كل من الواجهات العامة والخاصة؟",
      "q_en": "How do Partner APIs differ from both Public and Private APIs?",
      "opts": [
        {
          "ar": "أنها مجانية ومفتوحة للعامة دون أي تسجيل أو موافقة مسبقة.",
          "ok": false,
          "why": "هذا تعريف الواجهات العامة (Public).",
          "en": "They are free and publicly open without registration or prior approval."
        },
        {
          "ar": "أنها مخصصة لجهات أعمال وشركاء محددين بموجب اتفاقيات وتصاريح رسمية (B2B)، مع معايير أمان وتشفير متبادل (mTLS).",
          "ok": true,
          "why": "واجهات الشركاء تجمع بين فتح التكامل التجاري للشركاء وضبط الأمان عبر عقود ومصادقة مشددة.",
          "en": "They are designated for specific business partners under B2B agreements, enforcing strict mutual authentication (mTLS) and custom SLAs."
        },
        {
          "ar": "أنها تعمل بدون كهرباء أو اتصال بالإنترنت.",
          "ok": false,
          "why": "مستحيل عملياً.",
          "en": "They operate without electricity or network connectivity."
        },
        {
          "ar": "أنها محصورة فقط داخل نفس الملف البرمجي للجهاز الشخصي للمبرمج.",
          "ok": false,
          "why": "واجهات الشركاء تربط بين شركات ومؤسسات متباعدة.",
          "en": "They are restricted only inside the same code file on the developer's PC."
        }
      ],
      "tip": "وقفة امتحانية: واجهات الشركاء (Partner APIs) هي عصب تكامل الأعمال B2B، مثل ربط شركات الشحن بمتاجر أمازون."
    },
    {
      "n": 215,
      "type": "mcq",
      "ref": "L6-S009",
      "q_ar": "من الناحية الأكاديمية والهندسية، هل يُعتبر REST بروتوكولاً رسمياً أم نمطاً معمارياً؟",
      "q_en": "Academically and architecturally speaking, is REST considered a formal protocol or an architectural style?",
      "opts": [
        {
          "ar": "بروتوكول صارم تم اعتماده من منظمة ISO بملف قياسي إلزامي.",
          "ok": false,
          "why": "REST ليس بروتوكولاً له مواصفات إلزامية مغلقة.",
          "en": "A rigid protocol formally certified by ISO with mandatory specifications."
        },
        {
          "ar": "نمط معماري (Architectural Style) ومجموعة إرشادات تصميمية صاغها روي فيلدينغ عام 2000 لاستثمار إمكانيات بروتوكول HTTP.",
          "ok": true,
          "why": "REST يمثل أسلوباً معمارياً يستند لمبادئ توجيهية، ولا يفرض قواعد نقل جديدة بل يعتمد على بنية الويب الأصلية.",
          "en": "An architectural style and set of design constraints formulated by Roy Fielding in 2000 to leverage HTTP capabilities."
        },
        {
          "ar": "لغة برمجة نصية مثل JavaScript و Python.",
          "ok": false,
          "why": "REST نمط تصميم وليس لغة برمجة.",
          "en": "A scripting programming language like JavaScript or Python."
        },
        {
          "ar": "خوارزمية لضغط وتشفير الملفات الصوتية.",
          "ok": false,
          "why": "لا علاقة له بالصوتيات.",
          "en": "An algorithm for compressing and encrypting audio files."
        }
      ],
      "tip": "وقفة امتحانية: فخ كلاسيكي في الاختبارات: هل REST بروتوكول؟ الجواب: خطأ؛ REST هو نمط معماري (Architectural Style) بينما SOAP هو بروتوكول (Protocol)."
    },
    {
      "n": 216,
      "type": "mcq",
      "ref": "L6-S010",
      "q_ar": "وفقاً لمبادئ معمارية REST، كيف يجب تسمية روابط الموارد (Resource URIs) بشكل نظيف ومعياري؟",
      "q_en": "According to REST architectural principles, how should Resource URIs be cleanly and standardly named?",
      "opts": [
        {
          "ar": "استخدام الأفعال الحركية الصريحة مثل `/getAllUsers` و `/deleteOrderById`.",
          "ok": false,
          "why": "استخدام الأفعال في الروابط أسلوب RPC ويخالف مبدأ التوجه نحو الموارد في REST.",
          "en": "Using explicit action verbs like `/getAllUsers` and `/deleteOrderById`."
        },
        {
          "ar": "استخدام الأسماء بصيغة الجمع لتمثيل الموارد (مثل `/api/users` و `/api/orders/15`) وترك تحديد العملية لفعل HTTP.",
          "ok": true,
          "why": "المبدأ الأول في REST: الموارد أسماء (Nouns)، والعمليات تحددها أفعال HTTP (GET, POST, PUT, DELETE).",
          "en": "Using plural nouns to represent resources (e.g. `/api/users` and `/api/orders/15`), delegating actions to HTTP verbs."
        },
        {
          "ar": "كتابة الروابط كاستعلامات SQL كاملة مثل `/SELECT * FROM Users`.",
          "ok": false,
          "why": "كارثة أمنية وتصميمية فادحة.",
          "en": "Writing URIs as full SQL queries like `/SELECT * FROM Users`."
        },
        {
          "ar": "تشفير الرابط برموز ثنائية سداسية عشرية غير قابلة للقراءة.",
          "ok": false,
          "why": "الروابط في REST يجب أن تكون واضحة وقابلة للقراءة للبشر والأنظمة.",
          "en": "Encoding the URI into unreadable binary hexadecimal strings."
        }
      ],
      "tip": "وقفة امتحانية: في REST: المورد اسم بصيغة الجمع `/products`، وفعل HTTP يحدد العملية: `GET /products` (جلب)، `POST /products` (إضافة)."
    },
    {
      "n": 217,
      "type": "mcq",
      "ref": "L6-S010",
      "q_ar": "ماذا يعني مبدأ انعدام الحالة (Statelessness) في معمارية REST وما فائدته الكبرى في التوسع السحابي؟",
      "q_en": "What does the Statelessness principle mean in REST architecture, and what is its major cloud scalability benefit?",
      "opts": [
        {
          "ar": "الخادم لا يحتفظ ببيانات جلسة العميل بين الطلبات؛ فكل طلب يحمل معه بيانات المصادقة والسياق كاملاً.",
          "ok": true,
          "why": "انعدام الحالة يلغي الحاجة لربط العميل بسيرفر معين، مما يسمح لموزع الأحمال (Load Balancer) بتوجيه أي طلب لأي خادم.",
          "en": "The server retains no client session context between requests; each request contains complete authentication and execution context."
        },
        {
          "ar": "حذف قاعدة البيانات بالكامل بمجرد خروج المستخدم من المتصفح.",
          "ok": false,
          "why": "قاعدة البيانات تحتفظ بالبيانات الدائمة؛ انعدام الحالة يخص جلسة الخادم (Session State).",
          "en": "Deleting the database entirely once the user closes their browser."
        },
        {
          "ar": "منع المستخدمين من إرسال أكثر من طلب واحد فقط في اليوم.",
          "ok": false,
          "why": "لا علاقة له بعدد الطلبات المسموحة.",
          "en": "Preventing users from sending more than a single request per day."
        },
        {
          "ar": "أن تطبيق العميل لا يمكنه عرض الصور أو الألوان.",
          "ok": false,
          "why": "غير صحيح على الإطلاق.",
          "en": "That the client application cannot display images or colors."
        }
      ],
      "tip": "وقفة امتحانية: انعدام الحالة (Statelessness) يمكن النظام من التوسع الأفقي (Horizontal Scaling) دون الحاجة لجلسات مثبتة (Sticky Sessions)."
    },
    {
      "n": 218,
      "type": "mcq",
      "ref": "L6-S011",
      "q_ar": "ما هي صيغة تمثيل ونقل البيانات الحصرية التي يعتمد عليها بروتوكول SOAP؟",
      "q_en": "What is the exclusive data representation and transport format supported by the SOAP protocol?",
      "opts": [
        {
          "ar": "صيغة JSON الخفيفة فقط.",
          "ok": false,
          "why": "SOAP لا يدعم JSON إطلاقاً.",
          "en": "Lightweight JSON format only."
        },
        {
          "ar": "صيغة XML حصراً، مع ملفات عقد WSDL ومخططات XSD للتحقق من هيكل الرسالة.",
          "ok": true,
          "why": "بروتوكول SOAP مقيد تاريخياً وهيكلياً بلغة الوسوم المتوسعة (XML).",
          "en": "Exclusively XML format, governed by WSDL contract definitions and XSD schemas."
        },
        {
          "ar": "ملفات PDF الثنائية.",
          "ok": false,
          "why": "PDF نسق وثائق وليس صيغة تبادل بيانات بروتوكولية.",
          "en": "Binary PDF documents."
        },
        {
          "ar": "لغة التجميع Assembly فقط.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "Low-level Assembly code only."
        }
      ],
      "tip": "وقفة امتحانية: SOAP = XML Only! إذا ذُكرت صيغة JSON في خيارات SOAP فالإجابة خاطئة فوراً."
    },
    {
      "n": 219,
      "type": "mcq",
      "ref": "L6-S012",
      "q_ar": "في أي السيناريوهات الواقعية المعاصرة لا يزال استخدام بروتوكول SOAP مفضلاً على REST؟",
      "q_en": "In which modern real-world scenarios is using the SOAP protocol still preferred over REST?",
      "opts": [
        {
          "ar": "تطبيقات الألعاب الجماعية السريعة على الهواتف الذكية.",
          "ok": false,
          "why": "الألعاب تحتاج لبروتوكولات خفيفة جداً مثل WebSockets أو UDP.",
          "en": "High-speed multiplayer mobile gaming applications."
        },
        {
          "ar": "المنظومات المصرفية والمالية شديدة التعقيد التي تتطلب معايير أمان الرسالة (WS-Security) وعمليات ACID الموزعة الصارمة.",
          "ok": true,
          "why": "SOAP يوفر معيار WS-Security لتشفير أجزاء محددة من الرسالة داخل نفق العبور المالي وضمان معاملات ACID المعقدة.",
          "en": "Complex financial and enterprise banking systems demanding message-level security (WS-Security) and strict distributed ACID transactions."
        },
        {
          "ar": "المدونات الشخصية ومواقع الطقس البسيطة.",
          "ok": false,
          "why": "REST هو الخيار البديهي والبسيط للمدونات والطقس.",
          "en": "Personal blogs and simple weather websites."
        },
        {
          "ar": "المواقع التي تستهدف متصفحات الويب الضعيفة وأجهزة إنترنت الأشياء.",
          "ok": false,
          "why": "SOAP ثقيل ويستهلك موارد معالجة وباندويث عالي.",
          "en": "Websites targeting low-end browsers and IoT devices."
        }
      ],
      "tip": "وقفة امتحانية: تفوق SOAP يقتصر على: 1) WS-Security (تشفير الرسالة نفسها)، 2) المعاملات المالية الموزعة، 3) العقود الصارمة (WSDL)."
    },
    {
      "n": 220,
      "type": "mcq",
      "ref": "L6-S013",
      "q_ar": "ما هي السمة الهندسية الفريدة التي تميز واجهات GraphQL مقارنة بنقاط نهاية REST المتعددة؟",
      "q_en": "What unique architectural characteristic distinguishes GraphQL APIs compared to multiple REST endpoints?",
      "opts": [
        {
          "ar": "تعتمد على نقطة نهاية واحدة موحدة (Single Endpoint عادة `/graphql`) وتتيح للعميل استعلام الحقول المطلوبة بدقة.",
          "ok": true,
          "why": "في GraphQL يرسل العميل استعلامه المخصص لنقطة نهاية وحيدة، فيرجع الخادم البيانات بالهيكل المطلوب تماماً.",
          "en": "It operates via a single unified endpoint (typically `/graphql`), allowing the client to request precisely the exact fields needed."
        },
        {
          "ar": "إنشاء رابط URL مستقل لكل حرف أبجدي يتم إرساله.",
          "ok": false,
          "why": "هذا تشويش هندسي لا وجود له.",
          "en": "Creating a distinct URL endpoint for every individual alphabet letter."
        },
        {
          "ar": "إلغاء لغة الاستعلامات وقراءة البيانات من شاشات الفيديو.",
          "ok": false,
          "why": "GraphQL هي لغة استعلام صريحة (Graph Query Language).",
          "en": "Abolishing query languages and reading data off video displays."
        },
        {
          "ar": "إجبار العميل على استقبال كافة جداول قاعدة البيانات دفعة واحدة.",
          "ok": false,
          "why": "GraphQL صُمم خصيصاً لمنع جلب البيانات الزائدة.",
          "en": "Forcing the client to receive all database tables simultaneously in one payload."
        }
      ],
      "tip": "وقفة امتحانية: في REST: عدة روابط لكل مورد (`/users`, `/posts`, `/comments`). في GraphQL: نقطة نهاية واحدة (`/graphql`) واستعلام يحدد المطلوب."
    },
    {
      "n": 221,
      "type": "mcq",
      "ref": "L6-S014",
      "q_ar": "ما هو المقصود بمشكلة الإفراط في جلب البيانات (Over-fetching) في معمارية REST، وكيف تحلها GraphQL؟",
      "q_en": "What is meant by the Over-fetching problem in REST, and how does GraphQL solve it?",
      "opts": [
        {
          "ar": "انقطاع الإنترنت أثناء تحميل الصفحة؛ وحلها بالاتصال السلكي.",
          "ok": false,
          "why": "المشكلة في حجم البيانات المرتجعة وليست في جودة الخط الفيزيائي.",
          "en": "Internet disconnection during page load, solved by ethernet cable."
        },
        {
          "ar": "إرجاع الخادم لكائن ضخم يحوي عشرات الحقول بينما التطبيق يحتاج حقلين فقط؛ وتحلها GraphQL بطلب الحقول المحددة فقط.",
          "ok": true,
          "why": "Over-fetching يهدر حزم البيانات وبطارية الهاتف؛ وفي GraphQL يحدد العميل في الاستعلام الحقول المطلوبة فقط فتصل وحدها.",
          "en": "The server returning a bloated object with dozens of fields when the UI only needs two; GraphQL solves it by fetching only requested fields."
        },
        {
          "ar": "طلب ملف غير موجود في السيرفر والرد بكود 404.",
          "ok": false,
          "why": "هذا خطأ مورد مفقود وليس Over-fetching.",
          "en": "Requesting a nonexistent file and returning 404."
        },
        {
          "ar": "إرسال 100 بريد إلكتروني في نفس اللحظة لنفس العميل.",
          "ok": false,
          "why": "إرسال البريد لا علاقة له بجلب بيانات الـ API.",
          "en": "Dispatching 100 emails simultaneously to the same recipient."
        }
      ],
      "tip": "وقفة امتحانية: Over-fetching = الخادم يعيد بيانات أكثر مما تحتاج. Under-fetching = الخادم يعيد بيانات غير كافية فتضطر لإرسال عدة طلبات."
    },
    {
      "n": 222,
      "type": "mcq",
      "ref": "L6-S014",
      "q_ar": "ما هو المقصود بمشكلة نقص جلب البيانات (Under-fetching) في واجهات REST التقليدية؟",
      "q_en": "What is meant by the Under-fetching problem in traditional REST APIs?",
      "opts": [
        {
          "ar": "إفراغ سلة المهملات على القرص الصلب بالخطأ.",
          "ok": false,
          "why": "لا علاقة له بنظام تشغيل المطور.",
          "en": "Accidentally emptying the recycle bin on the hard drive."
        },
        {
          "ar": "عدم كفاية نقطة نهاية واحدة لتلبية متطلبات الشاشة، مما يضطر العميل لإرسال طلبات متتالية متعددة (N+1 Requests) لربط البيانات.",
          "ok": true,
          "why": "في REST لعرض بيانات المستخدم مع مشترياته تحتاج لطلب `/users/1` ثم طلب `/orders?userId=1`، بينما GraphQL يدمجهما باستعلام واحد.",
          "en": "A single endpoint failing to deliver enough data for a screen, forcing the client to fire multiple sequential HTTP requests (N+1 problem)."
        },
        {
          "ar": "فشل الاتصال بقاعدة البيانات بسبب نقص سعة التخزين.",
          "ok": false,
          "why": "هذا عطل في الخادم وليس مشكلة Under-fetching المعمارية.",
          "en": "Database connection failure triggered by storage exhaustion."
        },
        {
          "ar": "تشفير كلمة المرور بخوارزمية ضعيفة.",
          "ok": false,
          "why": "قضية أمنية منفصلة.",
          "en": "Hashing passwords using an outdated cipher."
        }
      ],
      "tip": "وقفة امتحانية: GraphQL تقضي على مشكلتي Over-fetching و Under-fetching بضربة واحدة عبر مرونة لغة الاستعلام المخصصة."
    },
    {
      "n": 223,
      "type": "mcq",
      "ref": "L6-S015",
      "q_ar": "ما هي الركيزتان التقنيتان اللتان تمنحان إطار gRPC سرعته الفائقة وتفوقه على واجهات REST؟",
      "q_en": "What are the two core technical pillars that grant gRPC its extreme performance over REST APIs?",
      "opts": [
        {
          "ar": "استخدام نصوص HTML وبروتوكول FTP لنقل الرسائل.",
          "ok": false,
          "why": "بروتوكولات قديمة وبطيئة جداً.",
          "en": "Utilizing HTML text and FTP protocol for message transfers."
        },
        {
          "ar": "الترميز الثنائي المضغوط Protocol Buffers وبروتوكول النقل فائق السرعة HTTP/2 مع تعدد الإرسال (Multiplexing).",
          "ok": true,
          "why": "gRPC يدمج بين صيغة Protobuf الثنائية المضغوطة وبين قدرات HTTP/2 في تعدد القنوات والبث المتزامن باتجاهين.",
          "en": "Compact binary serialization with Protocol Buffers combined with high-speed HTTP/2 transport and multiplexing."
        },
        {
          "ar": "الاعتماد الحصري على لغة Visual Basic في البرمجة.",
          "ok": false,
          "why": "gRPC متعدد اللغات والمنصات ومطور من Google.",
          "en": "Exclusive reliance on Visual Basic language."
        },
        {
          "ar": "إلغاء المعالجات الحسابية في الخوادم السحابية.",
          "ok": false,
          "why": "مستحيل حاسوبياً.",
          "en": "Bypassing arithmetic processors on cloud servers."
        }
      ],
      "tip": "وقفة امتحانية: معادلة gRPC الذهبية: Protobuf (Binary Payload) + HTTP/2 (Multiplexing & Streaming) = سرعة أعلى بمعدل 7 إلى 10 أضعاف مقارنة بـ REST."
    },
    {
      "n": 224,
      "type": "mcq",
      "ref": "L6-S016",
      "q_ar": "أين يكمن مجال الاستخدام الأساسي والمثالي لتقنية gRPC في المعماريات الحديثة؟",
      "q_en": "Where does the primary and ideal use case for gRPC lie in modern software architectures?",
      "opts": [
        {
          "ar": "التواصل المباشر مع متصفحات الويب القديمة لعرض صفحات المقالات.",
          "ok": false,
          "why": "متصفحات الويب لا تدعم مزايا gRPC و HTTP/2 الكاملة بسهولة وتتطلب وسيط gRPC-Web.",
          "en": "Direct communication with legacy web browsers rendering static article pages."
        },
        {
          "ar": "الاتصال الداخلي فائق السرعة والتردد بين خوادم الخدمات المصغرة (Internal Microservices Communication) وأنظمة إنترنت الأشياء.",
          "ok": true,
          "why": "gRPC صُمم لشبكات الخدمات الخلفية (Backend-to-Backend) حيث الكفاءة والسرعة المنخفضة وزمن الاستجابة الحرج هو الأهم.",
          "en": "High-throughput, ultra-low latency internal microservices communication and real-time IoT backend telemetry."
        },
        {
          "ar": "إرسال رسائل التليجرام اليدوية للأصدقاء فقط.",
          "ok": false,
          "why": "استخدام تطبيقي لا يصف معمارية الأنظمة.",
          "en": "Sending manual Telegram chat messages to friends only."
        },
        {
          "ar": "حفظ ملفات الإكسل على الفلاش ميموري.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "Storing Excel spreadsheets onto a USB flash drive."
        }
      ],
      "tip": "وقفة امتحانية: النمط المعماري الشائع: REST أو GraphQL للواجهات الخارجية (Client-to-Backend)، و gRPC للتواصل الداخلي بين الميكروسيرفس (Service-to-Service)."
    },
    {
      "n": 225,
      "type": "mcq",
      "ref": "L6-S017",
      "q_ar": "في ملفات تعريف العقود الثنائية (`.proto`) الخاصة بـ gRPC، ما هي وظيفة الأرقام المكتوبة بعد علامة التساوي (مثل `string name = 2;`)؟",
      "q_en": "In gRPC contract definition files (`.proto`), what is the purpose of the numbers following the equal sign (e.g. `string name = 2;`)?",
      "opts": [
        {
          "ar": "إنها القيمة الافتراضية الابتدائية التي ستخزن في المتغير عند إنشائه.",
          "ok": false,
          "why": "هذا فخ شائع؛ فالأرقام ليست قيماً ابتدائية إطلاقاً.",
          "en": "They denote the initial default value assigned to the variable upon creation."
        },
        {
          "ar": "إنها معرّفات الحقول الثنائية (Field Tags / Numbers) المستخدمة لترميز وتمييز الحقل في التدفق الثنائي بدلاً من إرسال اسمه النصي.",
          "ok": true,
          "why": "الأرقام هي بطاقات تعريف ثنائية (Tags)؛ عند الإرسال يرسل الرقم 2 بدلاً من كلمة 'name'، مما يوفر مساحة النقل الشبكي بشكل هائل.",
          "en": "They are binary Field Tags used to identify fields in the binary byte stream instead of sending literal string names."
        },
        {
          "ar": "إنها عدد الثواني المسموح بها لقراءة هذا الحقل قبل انتهاء المهلة.",
          "ok": false,
          "why": "لا علاقة لها بزمن الاستجابة أو المهل (Timeouts).",
          "en": "They specify the timeout duration in seconds allowed for reading this field."
        },
        {
          "ar": "إنها أرقام أسطر الكود البرمجي في ملف C# النهائي.",
          "ok": false,
          "why": "أرقام الحقول هي مواصفات ترميز ثنائية مستقلة عن لغة البرمجة.",
          "en": "They indicate line numbers in the generated C# source file."
        }
      ],
      "tip": "وقفة امتحانية: فخ امتحاني خطير: `int32 id = 1;` الرقم 1 هنا هو Field Tag وليس القيمة الافتراضية؛ وتغيير هذا الرقم يكسر التوافق الثنائي."
    },
    {
      "n": 226,
      "type": "mcq",
      "ref": "L6-S019",
      "q_ar": "ما هو الفرق المعماري الدقيق بين أفعال HTTP الآمنة (Safe Methods) والأفعال عديمة التأثير التراكمي (Idempotent Methods)؟",
      "q_en": "What is the precise architectural distinction between Safe HTTP Methods and Idempotent HTTP Methods?",
      "opts": [
        {
          "ar": "الآمنة لا تتطلب اتصالاً بالشبكة، وعديمة التأثير تتطلب كابل ألياف ضوئية.",
          "ok": false,
          "why": "تفسير عتادي ساذج وغير علمي.",
          "en": "Safe requires no network, while idempotent requires fiber optic cables."
        },
        {
          "ar": "الفعل الآمن (Safe) لا يعدل حالة المورد على السيرفر (قراءة فقط مثل GET)، بينما الفعل عديم التأثير التراكمي (Idempotent) يمكن تنفيذه عدة مرات بنفس النتيجة المتبقية على السيرفر (مثل PUT و DELETE).",
          "ok": true,
          "why": "الآمن = قراءة بلا تعديل (Read-only). الـ Idempotent = تكرار الطلب N مرة يترك حالة الخادم مماثلة لتنفيذه مرة واحدة.",
          "en": "Safe methods do not alter server resource state (read-only like GET), whereas Idempotent methods can be executed multiple times yielding the same final server state (like PUT and DELETE)."
        },
        {
          "ar": "الفعل الآمن هو POST حصراً، والفعل عديم التأثير هو PATCH فقط.",
          "ok": false,
          "why": "POST ليس آمناً وليس Idempotent، و PATCH قد لا يكون Idempotent في بعض الحالات.",
          "en": "Safe method is exclusively POST, and idempotent is PATCH only."
        },
        {
          "ar": "كلا المصطلحين مترادفان تماماً ولا يوجد أي فرق علمي بينهما.",
          "ok": false,
          "why": "هناك فارق جوهري؛ فكل فعل آمن هو بالضرورة Idempotent، ولكن ليس كل فعل Idempotent آمناً (مثل DELETE يعدل الحالة لكنه Idempotent).",
          "en": "Both terms are identical synonyms with no distinction."
        }
      ],
      "tip": "وقفة امتحانية: احفظ هذا الجدول: GET (Safe + Idempotent)، PUT (Not Safe + Idempotent)، DELETE (Not Safe + Idempotent)، POST (Not Safe + Not Idempotent)."
    },
    {
      "n": 227,
      "type": "mcq",
      "ref": "L6-S021",
      "q_ar": "لماذا يُصنف فعل `POST` في معايير HTTP على أنه غير عديم التأثير التراكمي (Non-Idempotent)؟",
      "q_en": "Why is the `POST` method categorized under HTTP standards as Non-Idempotent?",
      "opts": [
        {
          "ar": "لأنه يحذف كافة الموارد من قاعدة البيانات في كل مرة يتم استدعاؤه.",
          "ok": false,
          "why": "الحذف وظيفة DELETE وليس POST.",
          "en": "Because it wipes all resources from the database on every invocation."
        },
        {
          "ar": "لأن تكرار إرسال نفس طلب `POST` عدة مرات يؤدي لإنشاء موارد جديدة متعددة مكررة وتغيير حالة الخادم في كل مرة.",
          "ok": true,
          "why": "إذا ضغط العميل 'شراء' 3 مرات بطلب POST، فسيتم إنشاء 3 طلبات شراء مختلفة وتخصم القيمة ثلاث مرات.",
          "en": "Because executing the same `POST` request multiple times creates multiple duplicate resources and mutates server state each time."
        },
        {
          "ar": "لأنه لا يقبل إرسال جسم طلب (Body) إطلاقاً.",
          "ok": false,
          "why": "POST يعتمد أساساً على وجود Request Body لنقل بيانات الكيان الجديد.",
          "en": "Because it never accepts a request body."
        },
        {
          "ar": "لأنه يعمل فقط في أيام العطلات الأسبوعية.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "Because it only functions on weekends."
        }
      ],
      "tip": "وقفة امتحانية: تكرار `POST /orders` ينشئ طلباً جديداً بكل ضغطة، لذا تتطلب أنظمة الدفع مفتاح عدم التكرار (Idempotency Key) لحمايتها."
    },
    {
      "n": 228,
      "type": "mcq",
      "ref": "L6-S022",
      "q_ar": "ما هو الفارق الدلالي والمعماري الدقيق بين استخدام فعلي `PUT` و `PATCH` لتحديث الموارد؟",
      "q_en": "What is the precise semantic and architectural distinction between using `PUT` and `PATCH` for resource updates?",
      "opts": [
        {
          "ar": "كلاهما متطابقان تماماً ويمكن استبدال أحدهما بالآخر بلا أي أثر جانبي.",
          "ok": false,
          "why": "هناك فارق جوهري في حجم ونوع التحديث.",
          "en": "Both are identical and fully interchangeable with zero side effects."
        },
        {
          "ar": "`PUT` مخصص للاستبدال والتحديث الكامل لكافة حقول المورد (Full Replacement)، بينما `PATCH` مخصص للتحديث الجزئي لبعض الحقول المحددة (Partial Update).",
          "ok": true,
          "why": "في PUT ترسل الكائن كاملاً، وما لا ترسله قد يعود لقيمته الافتراضية. في PATCH ترسل فقط الحقول المراد تغييرها (مثل تعديل البريد فقط).",
          "en": "`PUT` is designated for full resource replacement, whereas `PATCH` is intended for partial updates of specific fields."
        },
        {
          "ar": "`PUT` يستخدم فقط لقراءة البيانات، و `PATCH` يستخدم لحذف الجداول.",
          "ok": false,
          "why": "القراءة وظيفة GET والحذف وظيفة DELETE.",
          "en": "`PUT` is for data reads only, and `PATCH` is for table dropping."
        },
        {
          "ar": "`PATCH` مخصص لملفات الصور فقط و `PUT` للنصوص.",
          "ok": false,
          "why": "الأفعال تتعامل مع كافة صيغ البيانات بلا تخصيص لأنواع معينة.",
          "en": "`PATCH` is strictly for image files while `PUT` is for strings."
        }
      ],
      "tip": "وقفة امتحانية: سؤال مفضل: تعديل كلمة المرور أو تحديث اسم المستخدم فقط دون بقية البيانات يفضل هندسياً بـ PATCH، أما استبدال الملف الشخصي كاملاً فبـ PUT."
    },
    {
      "n": 229,
      "type": "mcq",
      "ref": "L6-S024",
      "q_ar": "عند نجاح معالجة طلب حذف مورد عبر `DELETE /api/users/42` دون إرجاع أي محتوى في جسم الاستجابة، ما هو كود الحالة القياسي الموصى به؟",
      "q_en": "Upon successfully processing a resource deletion via `DELETE /api/users/42` with no response body returned, what is the recommended HTTP status code?",
      "opts": [
        {
          "ar": "`404 Not Found` لأن المورد لم يعد موجوداً.",
          "ok": false,
          "why": "كود 404 خطأ عميل، بينما العملية تمت بنجاح هنا.",
          "en": "`404 Not Found` because the resource is no longer there."
        },
        {
          "ar": "`204 No Content`، والذي يعني نجاح المعالجة وعدم وجود محتوى لإرجاعه في جسم الرد.",
          "ok": true,
          "why": "الكود 204 هو الاستجابة القياسية في معايير REST لعمليات الحذف الناجحة التي لا تعيد بيانات.",
          "en": "`204 No Content`, indicating successful execution with an empty response payload."
        },
        {
          "ar": "`500 Internal Server Error`.",
          "ok": false,
          "why": "كود 500 يعني انهياراً بالخادم.",
          "en": "`500 Internal Server Error`."
        },
        {
          "ar": "`301 Moved Permanently`.",
          "ok": false,
          "why": "كود إعادة توجيه مسار وليس نجاح حذف.",
          "en": "`301 Moved Permanently`."
        }
      ],
      "tip": "وقفة امتحانية: أكواد نجاح REST الشهيرة: `200 OK` (جلب أو تعديل مع بيانات)، `201 Created` (إنشاء عنصر)، `204 No Content` (حذف ناجح بلا بيانات)."
    },
    {
      "n": 230,
      "type": "mcq",
      "ref": "L6-S025",
      "q_ar": "إلى أي فئة تنتمي أكواد استجابة HTTP التي تبدأ بالرقم 4 (4xx)، وماذا تعني عموماً؟",
      "q_en": "To which category do HTTP status codes starting with 4 (4xx) belong, and what do they generally indicate?",
      "opts": [
        {
          "ar": "استجابات إعلامية تجريبية (Informational).",
          "ok": false,
          "why": "الاستجابات الإعلامية هي 1xx.",
          "en": "Informational responses (1xx)."
        },
        {
          "ar": "أخطاء من جانب العميل (Client Errors) مثل إدخال بيانات غير صالحة أو غياب التصاريح.",
          "ok": true,
          "why": "فئة 4xx تدل دائماً على أن الخلل صادر من جهة الطالب (العميل).",
          "en": "Client Errors, indicating invalid input parameters, authentication missing, or forbidden operations."
        },
        {
          "ar": "أخطاء انهيار داخلية بالخادم (Server Errors).",
          "ok": false,
          "why": "انهيار الخادم يندرج تحت فئة 5xx.",
          "en": "Internal server crash errors (5xx)."
        },
        {
          "ar": "عمليات إعادة توجيه إلى عناوين أخرى (Redirection).",
          "ok": false,
          "why": "إعادة التوجيه تندرج تحت 3xx.",
          "en": "Redirection operations (3xx)."
        }
      ],
      "tip": "وقفة امتحانية: احفظ نطاقات HTTP: `1xx` إعلامية، `2xx` نجاح، `3xx` إعادة توجيه، `4xx` خطأ عميل، `5xx` خطأ خادم."
    },
    {
      "n": 231,
      "type": "mcq",
      "ref": "L6-S026",
      "q_ar": "ما هو الفارق الجوهري والامتحاني الدقيق بين الكودين `401 Unauthorized` و `403 Forbidden`؟",
      "q_en": "What is the crucial and exact distinction between status codes `401 Unauthorized` and `403 Forbidden`?",
      "opts": [
        {
          "ar": "كلاهما يعني نفس المعنى تماماً ويتم رميهما عشوائياً.",
          "ok": false,
          "why": "هناك فارق قانوني ومعماري صارم بينهما.",
          "en": "Both carry identical semantics and are thrown randomly."
        },
        {
          "ar": "`401` يعني فشل أو غياب المصادقة (من أنت؟ لم تقدم توكن صالح)، بينما `403` يعني أن هوية المستخدم معروفة وموثقة ولكنه لا يملك الصلاحية للوصول لهذا المورد المحدد.",
          "ok": true,
          "why": "401 يخص الـ Authentication (إثبات الهوية)، بينما 403 يخص الـ Authorization (امتلاك الصلاحية).",
          "en": "`401` signifies authentication failure (who are you? invalid or missing token), whereas `403` indicates the user identity is known but lacks required authorization."
        },
        {
          "ar": "`401` يظهر فقط عند انقطاع الكهرباء، و `403` عند حذف السيرفر.",
          "ok": false,
          "why": "أوصاف خيالية غير صحيحة.",
          "en": "`401` appears on power outage, and `403` on server deletion."
        },
        {
          "ar": "`401` كود خاص بالخادم و `403` كود خاص بقواعد البيانات.",
          "ok": false,
          "why": "كلاهما كودا HTTP قياسيان لطبقة الويب.",
          "en": "`401` is for web servers and `403` is for databases."
        }
      ],
      "tip": "وقفة امتحانية: 401 = Who are you? (Authentication Error). 403 = You cannot enter here! (Authorization Error)."
    },
    {
      "n": 232,
      "type": "mcq",
      "ref": "L6-S026",
      "q_ar": "متى يجب على الـ API إرجاع كود الاستجابة `429 Too Many Requests`؟",
      "q_en": "When should an API return the HTTP status code `429 Too Many Requests`?",
      "opts": [
        {
          "ar": "عندما يقوم العميل بتسجيل الخروج من الحساب طواعية.",
          "ok": false,
          "why": "تسجيل الخروج يعيد 200 أو 204.",
          "en": "When a client voluntarily logs out of their account."
        },
        {
          "ar": "عندما يتجاوز العميل السقف المسموح به من الطلبات خلال فترة زمنية محددة تطبيقاً لسياسة Rate Limiting.",
          "ok": true,
          "why": "كود 429 هو المعيار الدولي لإشعار العميل بأنه استهلك حصته المسموحة (Rate Limit Exceeded) ويجب عليه الانتظار.",
          "en": "When a client exceeds their permitted request rate quota over a defined duration per Rate Limiting policy."
        },
        {
          "ar": "عندما ينسى المستخدم كلمة المرور الخاصة به.",
          "ok": false,
          "why": "نسيان كلمة المرور يتم التعامل معه بواجهات الاسترجاع.",
          "en": "When a user forgets their account password."
        },
        {
          "ar": "عند نجاح تحميل ملف مضغوط بحجم أكبر من 1 جيجابايت.",
          "ok": false,
          "why": "تحميل الملفات الناجح يعيد 200 OK.",
          "en": "Upon successful download of a zip archive larger than 1GB."
        }
      ],
      "tip": "وقفة امتحانية: كود 429 يرتبط مباشرة بميزة Rate Limiting ويرافقه عادة ترويسة `Retry-After: 60` بالثواني."
    },
    {
      "n": 233,
      "type": "mcq",
      "ref": "L6-S027",
      "q_ar": "وفق معيار RFC 7807 (Problem Details)، لماذا يُعد إرجاع تفاصيل الخطأ الداخلي (مثل Stack Trace واستعلامات SQL) للعميل في بيئة الإنتاج ممارسة معمارية خطيرة؟",
      "q_en": "Under RFC 7807 (Problem Details), why is returning internal error stack traces and SQL queries to clients in production a dangerous architectural flaw?",
      "opts": [
        {
          "ar": "لأن المتصفح سيقوم بإيقاف تشغيل الشاشة تلقائياً.",
          "ok": false,
          "why": "المتصفح يعرض النصوص ولا يتحكم بالشاشة فيزيائياً.",
          "en": "Because the browser will automatically shut down the display."
        },
        {
          "ar": "لأنه يسرب أسرار البنية التحتية وأسماء الجداول والثغرات للمهاجمين، مما يسهل اختراق الخادم.",
          "ok": true,
          "why": "تسريب تفاصيل الخطأ (Information Disclosure) ثغرة أمنية شهيرة؛ ويجب إرجاع رسالة خطأ قياسية موحدة وتسجيل التفاصيل في السجلات الداخلية (Logs).",
          "en": "Because it leaks internal infrastructure schemas, table structures, and potential exploits to attackers, facilitating intrusion."
        },
        {
          "ar": "لأن نصوص الخطأ الطويلة تزيد من فاتورة استهلاك الكهرباء الشهرية.",
          "ok": false,
          "why": "سبب غير علمي وهزلي.",
          "en": "Because lengthy error messages inflate monthly electric utility bills."
        },
        {
          "ar": "لأن لغات البرمجة تمنع كتابة الكلمات الإنجليزية في ردود الأخطاء.",
          "ok": false,
          "why": "لغات البرمجة تدعم كافة اللغات.",
          "en": "Because programming languages prohibit English text in error responses."
        }
      ],
      "tip": "وقفة امتحانية: في Production: أرجع Problem Details مع كود 500 ورقم تتبع (Correlation ID) واحجب تفاصيل الـ Stack Trace داخل السيرفر."
    },
    {
      "n": 234,
      "type": "mcq",
      "ref": "L6-S028",
      "q_ar": "ما هي ثغرة BOLA (Broken Object Level Authorization) المعروفة أيضاً بـ IDOR، وكيف تحدث في الـ APIs؟",
      "q_en": "What is the Broken Object Level Authorization (BOLA/IDOR) vulnerability, and how does it manifest in APIs?",
      "opts": [
        {
          "ar": "انهيار السيرفر بسبب ارتفاع درجة حرارة المعالج المركزي.",
          "ok": false,
          "why": "خلل فيزيائي عتادي وليس ثغرة برمجية منطقية.",
          "en": "Server crash caused by excessive CPU temperature."
        },
        {
          "ar": "تمكن مستخدم مسجل وموثق من الوصول لبيانات مستخدم آخر بمجرد تغيير معرف المورد في الرابط (مثل طلب `/documents/99`) لغياب فحص الملكية.",
          "ok": true,
          "why": "تحدث BOLA عندما يتحقق السيرفر من هوية المستخدم لكنه ينسى التحقق مما إذا كان هذا المستخدم يملك هذا المورد المحدد فعلاً أم لا.",
          "en": "An authenticated user accessing another user's private data simply by altering resource IDs in the URI (e.g. `/documents/99`) due to missing ownership checks."
        },
        {
          "ar": "نسيان المبرمج لكتابة الفاصلة المنقوطة في نهاية سطر الكود.",
          "ok": false,
          "why": "خطأ ترجمة برمجي (Syntax Error) يمنع التشغيل أصلاً.",
          "en": "A developer forgetting a semicolon at the end of a code statement."
        },
        {
          "ar": "تثبيت برنامج مضاد فيروسات مجاني على السيرفر.",
          "ok": false,
          "why": "لا علاقة له بهذه الثغرة المعمارية.",
          "en": "Installing free antivirus software on the host server."
        }
      ],
      "tip": "وقفة امتحانية: BOLA هي التهديد الأمني رقم 1 في قائمة OWASP API Security Top 10؛ والحل دائماً: التحقق من ملكية المورد للمستخدم المسجل."
    },
    {
      "n": 235,
      "type": "mcq",
      "ref": "L6-S030",
      "q_ar": "ما هو التمييز الأكاديمي الحاسم بين عمليتي التحقق من الهوية (Authentication) والتحقق من الصلاحيات (Authorization)؟",
      "q_en": "What is the definitive academic distinction between Authentication and Authorization?",
      "opts": [
        {
          "ar": "المصادقة والترخيص عمليتان مترادفتان تماماً بلا أي تمييز.",
          "ok": false,
          "why": "هناك فارق جوهري بين الهوية والصلاحية.",
          "en": "Authentication and authorization are completely identical concepts."
        },
        {
          "ar": "المصادقة (AuthN) تجيب على سؤال 'من أنت؟'، بينما التفويض (AuthZ) يجيب على سؤال 'ما الذي يُسمح لك بالقيام به؟'.",
          "ok": true,
          "why": "AuthN تثبت هوية المستخدم (تسجيل الدخول)، و AuthZ تحدد صلاحياته والأفعال المسموحة له بناءً على أدواره (Roles).",
          "en": "Authentication (AuthN) answers 'Who are you?', while Authorization (AuthZ) answers 'What are you permitted to do?'."
        },
        {
          "ar": "المصادقة تتم في قواعد البيانات فقط، والتفويض يتم في المتصفح حصراً.",
          "ok": false,
          "why": "كلاهما وظيفتان يتم تنسيقهما في طبقة الخادم الخلفية.",
          "en": "Authentication occurs strictly in databases, while authorization is solely in browsers."
        },
        {
          "ar": "المصادقة تخص المطورين فقط، والتفويض يخص الزوار العاديين.",
          "ok": false,
          "why": "تنطبق المفاهيم على كل مستخدم للنظام.",
          "en": "Authentication applies to developers, and authorization to guest users."
        }
      ],
      "tip": "وقفة امتحانية: المصادقة (AuthN) تسبق التفويض (AuthZ) دائماً في مسار معالجة الطلبات البرمجية."
    },
    {
      "n": 236,
      "type": "mcq",
      "ref": "L6-S032",
      "q_ar": "لماذا يُعد استخدام خوارزميات التجزئة السريعة (مثل MD5 أو SHA-256 المجردة) غير آمن لتخزين كلمات مرور المستخدمين؟",
      "q_en": "Why is using fast hashing algorithms (like MD5 or plain SHA-256) considered insecure for storing user passwords?",
      "opts": [
        {
          "ar": "لأنها بطيئة للغاية وتستهلك ساعات طويلة لتشفير كلمة واحدة.",
          "ok": false,
          "why": "العكس هو الصحيح؛ فسرعتها الفائقة هي العيب القاتل.",
          "en": "Because they are excessively slow, consuming hours to hash one word."
        },
        {
          "ar": "لأن سرعتها الفائقة تتيح للمهاجمين تجربة مليارات الكلمات في الثانية باستخدام بطاقات GPU وجداول Rainbow Tables، ولذا يجب استخدام خوارزميات بطيئة مع ملح مثل BCrypt أو Argon2.",
          "ok": true,
          "why": "خوارزميات كلمات المرور (BCrypt/Argon2) تعتمد عمداً على معامل جهد (Work Factor) وملح (Salt) لعرقلة هجمات القوة الغاشمة.",
          "en": "Because their computational speed allows attackers to guess billions of hashes per second using GPUs and rainbow tables; adaptive algorithms with salt like BCrypt or Argon2 are required."
        },
        {
          "ar": "لأنها لا تقبل الرموز الخاصة مثل علامة @.",
          "ok": false,
          "why": "تتعامل خوارزميات التجزئة مع أي بايتات نصية.",
          "en": "Because they reject special characters like @ symbols."
        },
        {
          "ar": "لأنها تسمح للمستخدم بتغيير كلمة مروره متى شاء.",
          "ok": false,
          "why": "تغيير كلمة المرور ميزة مطلوبة ولا ترتبط بضعف الخوارزمية.",
          "en": "Because they allow users to change passwords whenever desired."
        }
      ],
      "tip": "وقفة امتحانية: لتخزين كلمات المرور بأمان: استخدم Salt عشوائي فريد لكل مستخدم وخوارزمية بطيئة عمداً ومكلفة حسابياً مثل BCrypt أو Argon2id."
    },
    {
      "n": 237,
      "type": "mcq",
      "ref": "L6-S033",
      "q_ar": "ما هي الأجزاء الثلاثة المكونة لرمز الـ JWT (JSON Web Token)، وكيف يتم الفصل بينها نصياً؟",
      "q_en": "What are the three core components comprising a JSON Web Token (JWT), and how are they delimited?",
      "opts": [
        {
          "ar": "الترويسة (Header)، الحمولة (Payload)، والتوقيع (Signature)، ويفصل بينها بنقاط (`.`).",
          "ok": true,
          "why": "هيكل الـ JWT المعياري يتكون من: `Header.Payload.Signature` وكل جزء مشفر بـ Base64Url.",
          "en": "Header, Payload, and Signature, delimited by periods (`.`)."
        },
        {
          "ar": "اسم المستخدم، كلمة المرور، ورقم الهاتف، ويفصل بينها بفواصل (`,`).",
          "ok": false,
          "why": "الـ JWT هيكل رمزي مشفر وموقع رقمياً وليس بيانات حساب مسطحة.",
          "en": "Username, password, and phone number, delimited by commas."
        },
        {
          "ar": "طبقة العميل، طبقة السيرفر، وطبقة قاعدة البيانات، ويفصل بينها بشرطات (`-`).",
          "ok": false,
          "why": "هذه طبقات معمارية وليست أجزاء توكن.",
          "en": "Client layer, server layer, and database layer, delimited by dashes."
        },
        {
          "ar": "ملف الـ HTML، ملف الـ CSS، وملف الـ JS.",
          "ok": false,
          "why": "ملفات واجهات وليست أجزاء رمز أمان.",
          "en": "HTML file, CSS file, and JS file."
        }
      ],
      "tip": "وقفة امتحانية: توكن JWT = `Header.Payload.Signature`؛ الترويسة تحدد الخوارزمية، الحمولة تحوي الادعاءات (Claims)، والتوقيع يضمن عدم التلاعب."
    },
    {
      "n": 238,
      "type": "mcq",
      "ref": "L6-S033",
      "q_ar": "هل تعتبر البيانات المخزنة داخل الـ Payload في توكن JWT سرية ومشفرة بحيث لا يمكن لأي شخص فكها وقراءتها؟",
      "q_en": "Are data fields stored inside a JWT Payload encrypted and secret such that nobody can decode and read them?",
      "opts": [
        {
          "ar": "نعم، هي مشفرة بتشفير عسكري يستحيل فكه إطلاقاً حتى لو تم اعتراض التوكن.",
          "ok": false,
          "why": "الـ JWT مشفر بـ Base64Url وهو ترميز وليس تشفيراً، وأي شخص يمكنه فك قراءته.",
          "en": "Yes, they are encrypted with military-grade ciphers impossible to decode."
        },
        {
          "ar": "لا، فالـ Payload مرمّز فقط بصيغة Base64Url ويمكن لأي طرف قراءة محتواه، ولكن التوقيع (Signature) يمنع التلاعب بالبيانات دون كشفه.",
          "ok": true,
          "why": "فخ كلاسيكي: JWT يضمن سلامة البيانات (Integrity) وعدم تزويرها، ولكنه لا يخفيها؛ لذا يمنع منعاً باتاً تخزين كلمات المرور أو أسرار حساسة داخله.",
          "en": "No, because the payload is merely Base64Url-encoded and readable by anyone; however, the Signature prevents tampering without detection."
        },
        {
          "ar": "نعم، ولكن فقط إذا كان حجم التوكن أقل من 100 حرف.",
          "ok": false,
          "why": "حجم التوكن لا يغير من كونه ترميزاً مفتوحاً.",
          "en": "Yes, but only if token length is under 100 characters."
        },
        {
          "ar": "لا، لأن التوكن يحذف نفسه بعد ثانية واحدة من الإرسال.",
          "ok": false,
          "why": "مدة الصلاحية تحددها مطالبة exp وتكون بالدقائق أو الساعات.",
          "en": "No, because the token self-destructs after one second."
        }
      ],
      "tip": "وقفة امتحانية: فخ متكرر: هل JWT مشفر؟ الجواب: لا! هو موقع (Signed) وليس مشفراً (Not Encrypted)؛ لا تضع أسراراً داخل الـ Claims أبداً."
    },
    {
      "n": 239,
      "type": "mcq",
      "ref": "L6-S034",
      "q_ar": "ما هو الدور الجوهري لإطار العمل OAuth 2.0 في بنية تطبيقات الويب والـ APIs الحديثة؟",
      "q_en": "What is the core role of the OAuth 2.0 framework in modern web and API architectures?",
      "opts": [
        {
          "ar": "بروتوكول لنقل الملفات الصوتية بين الهواتف الذكية بالبلوتوث.",
          "ok": false,
          "why": "لا علاقة له بالبلوتوث أو الملفات الصوتية.",
          "en": "A protocol for transferring audio files over Bluetooth."
        },
        {
          "ar": "إطار تفويض (Delegation Framework) يتيح لتطبيق طرف ثالث الوصول لموارد المستخدم لدى مزود خدمة (مثل Google) دون مشاركة كلمة المرور.",
          "ok": true,
          "why": "OAuth 2.0 يحل معضلة مشاركة كلمات المرور، ويتيح تفويض صلاحيات محددة عبر رموز وصول (Access Tokens).",
          "en": "A delegation authorization framework enabling third-party apps to access user resources on a service provider (like Google) without sharing passwords."
        },
        {
          "ar": "قاعدة بيانات علائقية لحفظ ملفات الفيديو بدقة 4K.",
          "ok": false,
          "why": "OAuth معيار تفويض أمني وليس قاعدة بيانات.",
          "en": "A relational database for storing 4K video files."
        },
        {
          "ar": "نظام تشغيل مخصص للسيارات ذاتية القيادة.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "An operating system dedicated to autonomous vehicles."
        }
      ],
      "tip": "وقفة امتحانية: OAuth 2.0 هو إطار تفويض (Authorization/Delegation)؛ أركانه: Resource Owner (المستخدم)، Client (التطبيق)، Auth Server، Resource Server (الـ API)."
    },
    {
      "n": 240,
      "type": "mcq",
      "ref": "L6-S034",
      "q_ar": "في معمارية OAuth 2.0 و JWT، ما هي الفائدة المعمارية لامتلاك رمز تحديث (Refresh Token) بجانب رمز الوصول (Access Token)؟",
      "q_en": "In OAuth 2.0 and JWT architectures, what is the architectural benefit of having a Refresh Token alongside an Access Token?",
      "opts": [
        {
          "ar": "رمز الوصول قصير الأجل (15 دقيقة) لتقليل نافذة الخطر إذا سُرق، ورمز التحديث طويل الأجل ومخزن بأمان لتجديد رمز الوصول دون إعادة تسجيل الدخول.",
          "ok": true,
          "why": "Access Token قصير العمر يقلل خطر السرقة؛ وعند انتهائه يستخدم العميل Refresh Token للحصول على توكن جديد دون إزعاج المستخدم.",
          "en": "Access tokens are short-lived (e.g. 15 mins) to minimize exposure windows if compromised, while Refresh tokens are long-lived and securely stored to obtain new access tokens."
        },
        {
          "ar": "رمز التحديث يقوم بمسح محتويات القرص الصلب عند السرقة.",
          "ok": false,
          "why": "ليس برنامج تدمير ذاتي.",
          "en": "Refresh token wipes the hard drive clean upon theft."
        },
        {
          "ar": "رمز التحديث يستخدم لتغيير اسم المستخدم في السيرفر تلقائياً.",
          "ok": false,
          "why": "وظيفته تجديد جلسة التوثيق فقط.",
          "en": "Refresh token automatically alters the username on server."
        },
        {
          "ar": "كلا الرمزين يملكان نفس العمر ونفس الصلاحية تماماً ولا فائدة من الفصل.",
          "ok": false,
          "why": "الفصل بينهما هو ركيزة الأمان المعاصرة في الويب والجوال.",
          "en": "Both tokens share identical lifespan and purpose with no difference."
        }
      ],
      "tip": "وقفة امتحانية: ثنائية التوكن: Access Token = قصير العمر (15 دقيقة) سريع الاستخدام. Refresh Token = طويل العمر يُخزن بأمان لتجديد الجلسة."
    },
    {
      "n": 241,
      "type": "mcq",
      "ref": "L6-S036",
      "q_ar": "ما هي آلية CORS (Cross-Origin Resource Sharing) ولماذا يفرضها المتصفح على طلبات الـ APIs؟",
      "q_en": "What is CORS (Cross-Origin Resource Sharing), and why do web browsers enforce it on API calls?",
      "opts": [
        {
          "ar": "بروتوكول لزيادة سرعة الإنترنت في خطوط الهواتف المنزلية.",
          "ok": false,
          "why": "لا علاقة له بسرعة الاتصال الفيزيائي.",
          "en": "A protocol for increasing internet speed in home phone lines."
        },
        {
          "ar": "آلية أمنية مدمجة بالمتصفح تمنع صفحات الويب من نطاق معين (Origin A) من إرسال طلبات وقراءة بيانات من نطاق خادم مختلف (Origin B) إلا إذا سمح الخادم بذلك صراحة عبر ترويسات خاصة.",
          "ok": true,
          "why": "CORS تحمي المستخدم من قيام مواقع خبيثة بإرسال طلبات سرية بحساباته المسجلة (Same-Origin Policy protection).",
          "en": "A browser security mechanism preventing web apps on one origin from making unauthorized API requests to a different origin unless explicitly permitted via server headers."
        },
        {
          "ar": "نظام لضغط الصور تلقائياً قبل حفظها في المتصفح.",
          "ok": false,
          "why": "CORS قضية أمان وصلاحيات نطاقات وليست ضغط صور.",
          "en": "A system for automatically compressing images prior to browser caching."
        },
        {
          "ar": "أداة لترجمة صفحات الويب للغة العربية تلقائياً.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "An automated web page translation tool."
        }
      ],
      "tip": "وقفة امتحانية: CORS أمان يفرضه المتصفح؛ لحل خطأ CORS يجب تكوين `UseCors` في خادم ASP.NET Core وتحديد الأصول المسموحة (Allowed Origins)."
    },
    {
      "n": 242,
      "type": "mcq",
      "ref": "L6-S037",
      "q_ar": "ما هو الأسلوب الأكثر شيوعاً ووضوحاً لإدارة إصدارات الـ APIs (API Versioning) لضمان عدم كسر التطبيقات القديمة للعملاء؟",
      "q_en": "What is the most widely adopted and transparent approach for API Versioning to prevent breaking legacy client applications?",
      "opts": [
        {
          "ar": "تضمين رقم الإصدار في مسار الرابط صراحة (URI Path Versioning) مثل `/api/v1/orders` و `/api/v2/orders`.",
          "ok": true,
          "why": "إدراج الإصدار في المسار هو الأسلوب الأكثر بساطة ووضوحاً واستقراراً وتوثيقاً في منصات التطوير العالمية.",
          "en": "Explicitly embedding version numbers inside the URI path (e.g. `/api/v1/orders` and `/api/v2/orders`)."
        },
        {
          "ar": "حذف الإصدار القديم فجأة في منتصف الليل دون أي تنبيه للمستخدمين.",
          "ok": false,
          "why": "ممارسة كارثية تؤدي لانهيار تطبيقات العملاء فوراً.",
          "en": "Abruptly deleting the old version at midnight without warning."
        },
        {
          "ar": "إلزام جميع المبرمجين في العالم بإعادة كتابة تطبيقاتهم في نفس اليوم.",
          "ok": false,
          "why": "مستحيل تطبيقياً.",
          "en": "Mandating all developers worldwide to rewrite their apps on the same day."
        },
        {
          "ar": "تغيير أسماء قواعد البيانات كل أسبوعين.",
          "ok": false,
          "why": "لا علاقة له بإدارة إصدارات الواجهات.",
          "en": "Renaming databases biweekly."
        }
      ],
      "tip": "وقفة امتحانية: أساليب API Versioning: 1) URI Path (`/v1/`), 2) Query Parameter (`?api-version=1`), 3) Header Versioning (`Accept: v1`)."
    },
    {
      "n": 243,
      "type": "mcq",
      "ref": "L6-S038",
      "q_ar": "ما هي الفائدة المعمارية لأداة Swagger (OpenAPI) المدمجة افتراضياً في مشاريع ASP.NET Core Web API؟",
      "q_en": "What is the architectural benefit of Swagger (OpenAPI) natively integrated into ASP.NET Core Web API projects?",
      "opts": [
        {
          "ar": "إجراء عمليات النسخ الاحتياطي لقواعد البيانات السحابية تلقائياً.",
          "ok": false,
          "why": "النسخ الاحتياطي وظيفة خوادم قواعد البيانات.",
          "en": "Automating cloud database backups."
        },
        {
          "ar": "توليد وثائق تفاعلية قياسية (Interactive Documentation) تتيح للمطورين استكشاف واختبار نقاط النهاية مباشرة من المتصفح.",
          "ok": true,
          "why": "Swagger يقرأ كود الـ Controllers وينشئ ملف عقد OpenAPI وواجهة تفاعلية لتجربة الـ APIs دون الحاجة لأدوات خارجية.",
          "en": "Generating standardized interactive documentation allowing developers to discover, inspect, and test endpoints directly from the browser."
        },
        {
          "ar": "تسريع حركة مؤشر الفأرة على شاشة الحاسوب.",
          "ok": false,
          "why": "غير صحيح وهزلي.",
          "en": "Accelerating mouse cursor speed."
        },
        {
          "ar": "حظر كافة عناوين IP التابعة للدول المجاورة.",
          "ok": false,
          "why": "هذه وظيفة جدران الحماية (WAF / Geo-blocking).",
          "en": "Blocking all IP addresses originating from neighboring nations."
        }
      ],
      "tip": "وقفة امتحانية: في ASP.NET Core: حزمة Swashbuckle تُنشئ مواصفات OpenAPI وواجهة Swagger UI تلقائياً من توصيفات الدوال والوسوم."
    },
    {
      "n": 244,
      "type": "mcq",
      "ref": "L6-S040",
      "q_ar": "في دورة حياة التحقق من توكن JWT في السيرفر عند كل طلب محمي، كيف يتأكد الخادم من صحة التوكن دون الحاجة لطلب قاعدة البيانات في كل مرة؟",
      "q_en": "In the server JWT validation lifecycle for protected requests, how does the server verify token authenticity without querying the database each time?",
      "opts": [
        {
          "ar": "بالاتصال بمقر شركة مايكروسوفت للتأكد من هوية صاحب التوكن.",
          "ok": false,
          "why": "الخادم يمتلك المفتاح محلياً ولا يتصل بجهات خارجية.",
          "en": "By contacting Microsoft headquarters to confirm identity."
        },
        {
          "ar": "بإعادة حساب التوقيع الرقمي (Signature) رياضياً باستخدام المفتاح السري (Secret Key) المخزن في الخادم ومقارنته بالتوقيع المرفق في التوكن.",
          "ok": true,
          "why": "هذه هي قوة الـ JWT؛ فالتحقق من صحة التوقيع هو عملية تشفير رياضية تتم في الذاكرة بالمللي ثانية دون استعلام قاعدة البيانات.",
          "en": "By mathematically recalculating the signature using the server's private Secret Key and comparing it with the token signature in-memory."
        },
        {
          "ar": "عن طريق سؤال المستخدم شفوياً عن كلمة سره في كل طلب.",
          "ok": false,
          "why": "التواصل آلي عبر ترويسة Authorization.",
          "en": "By verbally asking the user for their password on every request."
        },
        {
          "ar": "بفحص بصمة إصبع المستخدم عبر كابل الإنترنت.",
          "ok": false,
          "why": "مستحيل تقنياً.",
          "en": "By scanning user fingerprint through network cables."
        }
      ],
      "tip": "وقفة امتحانية: سرعة وكفاءة JWT: التحقق من التوقيع (Cryptographic Signature Verification) عملية رياضية بحتة لا تتطلب استعلام قاعدة بيانات."
    },
    {
      "n": 245,
      "type": "mcq",
      "ref": "L6-S042",
      "q_ar": "ما هو الاسم القياسي للترويسة (HTTP Header) التي يجب أن يرسلها العميل لتمرير رمز الـ JWT للوصول لنقطة نهاية محمية؟",
      "q_en": "What is the standard HTTP Header name a client must send to transmit a JWT token to access a protected endpoint?",
      "opts": [
        {
          "ar": "`Content-Type: application/jwt`",
          "ok": false,
          "why": "هذه ترويسة نوع المحتوى وليست تفويضاً أمنياً.",
          "en": "`Content-Type: application/jwt`"
        },
        {
          "ar": "`Authorization: Bearer <token>`",
          "ok": true,
          "why": "هذا هو المعيار العالمي لنقل رموز التفويض؛ حيث يُسبق التوكن بكلمة Bearer مفصولة بمسافة داخل ترويسة Authorization.",
          "en": "`Authorization: Bearer <token>`"
        },
        {
          "ar": "`Password: <token>`",
          "ok": false,
          "why": "لا توجد ترويسة قياسية بهذا الاسم لكلمات المرور.",
          "en": "`Password: <token>`"
        },
        {
          "ar": "`Accept-Language: ar-SA`",
          "ok": false,
          "why": "ترويسة تفضيل لغة العرض وليس لها علاقة بالأمان.",
          "en": "`Accept-Language: ar-SA`"
        }
      ],
      "tip": "وقفة امتحانية: احفظ الصيغة المعيارية عن ظهر قلب: `Authorization: Bearer <token>`؛ أي خطأ في الكلمة أو المسافة يرفض الخادم الطلب بكود 401."
    },
    {
      "n": 246,
      "type": "mcq",
      "ref": "L7-S003",
      "q_ar": "ما هي المشكلة الجوهرية للبرمجة المتزامنة المعيقة (Synchronous Blocking Execution) في خوادم الويب؟",
      "q_en": "What is the core problem of Synchronous Blocking Execution in web servers?",
      "opts": [
        {
          "ar": "أنها تستهلك حبراً زائداً عند طباعة التقارير الورقية.",
          "ok": false,
          "why": "لا علاقة له بالطابعات الورقية.",
          "en": "It consumes extra ink when printing paper reports."
        },
        {
          "ar": "أن المسلك (Thread) يظل محجوزاً ومجمداً في حالة انتظار خامد أثناء عمليات الإدخال والإخراج، مما يؤدي لاستنزاف مسالك الخادم (Thread Starvation) وتوقف استقبال طلبات العملاء.",
          "ok": true,
          "why": "في الكود المتزامن، انتظار قاعدة البيانات أو الشبكة يجمد المسلك بالكامل دون أي عمل فعلي للمعالج، فتنفد مسالك السيرفر سريعاً.",
          "en": "The thread remains blocked and idle waiting for I/O operations, leading to thread pool starvation and inability to accept new client requests."
        },
        {
          "ar": "أنها تمنع نظام التشغيل من الاتصال بالشاشات الرسومية.",
          "ok": false,
          "why": "المشكلة في استنزاف مسالك المعالجة وليس في بطاقات العرض.",
          "en": "It prevents the operating system from connecting to graphics monitors."
        },
        {
          "ar": "أنها تقوم بحذف الملفات تلقائياً عند انتهاء الدالة.",
          "ok": false,
          "why": "غير صحيح برمجياً.",
          "en": "It automatically wipes files upon function completion."
        }
      ],
      "tip": "وقفة امتحانية: Synchronous I/O يجمد المسلك (Blocks Thread)؛ مما يسبب اختناق خوادم الويب تحت الحمل العالي وتوقف النظام عن الاستجابة."
    },
    {
      "n": 247,
      "type": "mcq",
      "ref": "L7-S004",
      "q_ar": "كيف تحل البرمجة غير المتزامنة (Asynchronous Execution) مشكلة استنزاف المسالك في منصة .NET Core؟",
      "q_en": "How does Asynchronous Execution solve the thread exhaustion problem in .NET Core?",
      "opts": [
        {
          "ar": "عبر شراء معالجات فيزيائية إضافية تلقائياً من الإنترنت.",
          "ok": false,
          "why": "الحل معماري برمجي وليس شراء عتاد فيزيائي تلقائي.",
          "en": "By purchasing additional physical CPUs automatically online."
        },
        {
          "ar": "بتحرير المسلك فوراً ليعود إلى حوض المسالك (ThreadPool) لخدمة طلبات أخرى أثناء انتظار عمليات I/O، واستئناف التنفيذ على مسلك متاح فور وصول الإشعار باكتمال العملية.",
          "ok": true,
          "why": "بدلاً من تجميد المسلك أثناء القراءة من قاعدة البيانات، يُعاد المسلك ليخدم مستخدماً آخر، مما يتيح لخادم واحد خدمة عشرات آلاف الطلبات.",
          "en": "By immediately releasing the thread back to the ThreadPool to serve other requests during I/O waits, resuming on an available thread when notified of completion."
        },
        {
          "ar": "بإلغاء كافة عمليات القراءة والكتابة في القرص وقواعد البيانات نهائياً.",
          "ok": false,
          "why": "التطبيقات تحتاج حتماً لقراءة وكتابة البيانات.",
          "en": "By completely eliminating disk and database reads and writes."
        },
        {
          "ar": "بتحويل كافة العمليات إلى حلقات تكرارية لانهائية لا تتوقف أبداً.",
          "ok": false,
          "why": "هذا يؤدي لتجميد المعالج بنسبة 100%.",
          "en": "By converting all operations into infinite unyielding loops."
        }
      ],
      "tip": "وقفة امتحانية: فكرة الـ Async: لا يوجد مسلك ينتظر (No Thread is Blocked)؛ تحرير المسلك لحوض ThreadPool هو سر القابلية الهائلة للتوسع (Scalability)."
    },
    {
      "n": 248,
      "type": "mcq",
      "ref": "L7-S005",
      "q_ar": "ما هو الفرق المعماري الدقيق بين العمليات المرتبطة بالإدخال والإخراج (I/O-Bound) والعمليات المرتبطة بالمعالج (CPU-Bound)؟",
      "q_en": "What is the exact architectural distinction between I/O-Bound and CPU-Bound operations?",
      "opts": [
        {
          "ar": "العمليات I/O-Bound تستهلك كهرباء أقل من العمليات CPU-Bound.",
          "ok": false,
          "why": "التمييز يتعلق بطبيعة مورد الانتظار وليس بفواتير الطاقة.",
          "en": "I/O-Bound operations consume less electricity than CPU-Bound ones."
        },
        {
          "ar": "I/O-Bound تنتظر عتاداً خارجياً (شبكة، قاعدة بيانات، قرص) ولا تحتاج لمسلك معالج أثناء الانتظار، بينما CPU-Bound تتطلب حسابات ومعالجة مكثفة في مسالك المعالج (مثل التشفير وضغط الصور).",
          "ok": true,
          "why": "عمليات I/O تنتظر انتهاء وسائط النقل (ولا تحتاج لمسلك إضافي)، بينما عمليات CPU تحتاج لقوة معالجة وحسابات رياضية مستمرة.",
          "en": "I/O-Bound waits on external hardware (network, DB, disk) needing no CPU thread during wait, whereas CPU-Bound requires heavy processing on CPU threads (e.g. cryptography, image filtering)."
        },
        {
          "ar": "I/O-Bound تحدث فقط في الهواتف، و CPU-Bound في السيرفرات فقط.",
          "ok": false,
          "why": "كلا النوعين موجود في كافة البيئات الحاسوبية.",
          "en": "I/O-Bound occurs only in smartphones, and CPU-Bound only on servers."
        },
        {
          "ar": "I/O-Bound تعتمد على لغة C فقط، و CPU-Bound على C#.",
          "ok": false,
          "why": "طبيعة فيزيائية وبرمجية مستقلة عن لغة البرمجة.",
          "en": "I/O-Bound relies on C only, and CPU-Bound on C#."
        }
      ],
      "tip": "وقفة امتحانية: مهم جداً: مع I/O-Bound استخدم `async/await` مباشرة بدون `Task.Run`، أما مع CPU-Bound فتحتاج لـ `Task.Run` لنقل الحسابات لمسلك خلفي."
    },
    {
      "n": 249,
      "type": "mcq",
      "ref": "L7-S007",
      "q_ar": "ماذا يفعل المترجم (C# Compiler) خلف الكواليس عندما تقوم بوسم دالة بالكلمة المفتاحية `async` واستخدام `await`؟",
      "q_en": "What does the C# Compiler generate behind the scenes when a method is marked with `async` and uses `await`?",
      "opts": [
        {
          "ar": "يقوم بإنشاء سيرفر سحابي جديد على منصة Azure.",
          "ok": false,
          "why": "المترجم يترجم كوداً محلياً ولا يطلق خوادم سحابية.",
          "en": "It deploys a new cloud server on Azure platform."
        },
        {
          "ar": "يقوم بتحويل الدالة إلى آلة حالة معقدة (State Machine) تعتمد على الواجهة `IAsyncStateMachine` لتقسيم الدالة واستئناف التنفيذ بعد انتهاء المهمة.",
          "ok": true,
          "why": "الـ Compiler يولد بنية State Machine تتابع تقدم التنفيذ عند كل نقطة await دون الحاجة لتجميد المسلك.",
          "en": "It transforms the method into an underlying State Machine implementing `IAsyncStateMachine` to pause and resume execution seamlessly."
        },
        {
          "ar": "يقوم بحذف كافة متغيرات الدالة ونقلها لملف نصي على سطح المكتب.",
          "ok": false,
          "why": "غير صحيح على الإطلاق.",
          "en": "It wipes all method variables and stores them into a desktop text file."
        },
        {
          "ar": "يقوم بتحويل لغة C# إلى لغة Python تلقائياً.",
          "ok": false,
          "why": "الكود يبقى C# ضمن منصة .NET CLR.",
          "en": "It automatically converts C# code to Python."
        }
      ],
      "tip": "وقفة امتحانية: الكلمتان `async` و `await` هما سكر تركيبي (Syntactic Sugar)؛ والمترجم يحولهما إلى State Machine متقنة تُدار عبر الـ CLR."
    },
    {
      "n": 250,
      "type": "mcq",
      "ref": "L7-S007",
      "q_ar": "ما هي أنواع الإرجاع الثلاثة المعتمدة لدوال `async` في C#، ولماذا يُحظر بشدة استخدام `async void` إلا في معالجات الأحداث الرسومية؟",
      "q_en": "What are the three supported return types for async methods in C#, and why is `async void` strictly discouraged except in UI event handlers?",
      "opts": [
        {
          "ar": "الأنواع هي `int`, `string`, `bool`؛ واستخدام void يسبب مسح الذاكرة العشوائية بالكامل.",
          "ok": false,
          "why": "أنواع الدوال غير المتزامنة هي Task ومشتقاتها.",
          "en": "Types are `int`, `string`, `bool`; void wipes RAM."
        },
        {
          "ar": "الأنواع هي `Task`, `Task<T>`, `ValueTask<T>`؛ ويُحظر `async void` لأنه أسلوب أطلق وانسى (Fire-and-Forget) لا يمكن انتظاره وتؤدي استثناءاته لانهيار البرنامج فوراً.",
          "ok": true,
          "why": "الدالة `async void` لا تعيد كائن Task لمتابعته، وإذا حدث بداخلها Exception لا يمكن التقاطه بـ catch فينهار التطبيق بالكامل.",
          "en": "Types are `Task`, `Task<T>`, and `ValueTask<T>`; `async void` is forbidden because it is fire-and-forget, cannot be awaited, and unhandled exceptions crash the process."
        },
        {
          "ar": "الأنواع هي `List`, `Array`, `Queue`؛ والـ void ممنوع لأن C# لا تدعم الدوال الخالية.",
          "ok": false,
          "why": "هذه مجموعات بيانات وليست أنواع مهام غير متزامنة.",
          "en": "Types are `List`, `Array`, `Queue`; void is unsupported."
        },
        {
          "ar": "لا يوجد أي فرق إطلاقاً بين `async Task` و `async void` وكلاهما متطابقان تماماً.",
          "ok": false,
          "why": "فارق أمني ووظيفي قاتل في استقرار النظم.",
          "en": "There is zero difference; both are completely identical."
        }
      ],
      "tip": "وقفة امتحانية: قاعدة امتحانية ذهبية: 'Avoid `async void`!'؛ استخدم دائماً `async Task` أو `async Task<T>`، والاستثناء الوحيد المسموح به هو UI Event Handlers."
    },
    {
      "n": 251,
      "type": "mcq",
      "ref": "L7-S008",
      "q_ar": "متى يكون استخدام `Task.Run()` ممارسة معمارية صحيحة وموصى بها في C#؟",
      "q_en": "When is using `Task.Run()` considered a proper and recommended architectural practice in C#?",
      "opts": [
        {
          "ar": "عند قراءة ملف من القرص أو استدعاء قاعدة بيانات أو طلب HTTP خارجي.",
          "ok": false,
          "why": "هذه عمليات I/O وتملك دوال async أصيلة ولا تحتاج لـ Task.Run (استخدام Task.Run هنا مضيعة لمسلك).",
          "en": "When reading a file, querying a database, or making an HTTP call."
        },
        {
          "ar": "عند وجود عمل حسابي مكثف يستهلك المعالج (CPU-Bound Work) مثل معالجة الصور أو خوارزميات التشفير المعقدة، لنقله إلى مسلك خلفي والحفاظ على استجابة واجهة المستخدم.",
          "ok": true,
          "why": "وظيفة Task.Run الحقيقية هي تفويض العمليات الحسابية الشاقة لمسلك من حوض ThreadPool لمنع تجميد خيط التطبيق الأساسي.",
          "en": "When executing heavy compute-intensive tasks (CPU-Bound work) like image rendering or encryption to offload them to a background ThreadPool thread."
        },
        {
          "ar": "لتشغيل الموسيقى أثناء تحميل الصفحة.",
          "ok": false,
          "why": "لا علاقة له بهذه الأغراض التافهة.",
          "en": "To play background music while page loads."
        },
        {
          "ar": "لكتابة استعلامات SQL بداخل المتصفح.",
          "ok": false,
          "why": "المتصفح لا يشغل C# Task.Run مباشرة.",
          "en": "To write raw SQL queries inside web browsers."
        }
      ],
      "tip": "وقفة امتحانية: قاعدة: لا تغلف عمليات I/O بـ `Task.Run`! بل استخدم `Task.Run` حصراً للمهام الحسابية المعقدة (CPU-Bound)."
    },
    {
      "n": 252,
      "type": "mcq",
      "ref": "L7-S009",
      "q_ar": "إذا كان لدينا مهمتان غير متزامنتين (المهمة A تستغرق ثانيتين، والمهمة B تستغرق 3 ثوانٍ)، ما الفارق الزمني بين التنفيذ المتتالي والتنفيذ المتزامن عبر `Task.WhenAll`؟",
      "q_en": "Given two async tasks (Task A takes 2s, Task B takes 3s), what is the execution time difference between sequential await and concurrent execution via `Task.WhenAll`?",
      "opts": [
        {
          "ar": "كلاهما يستغرق 10 ثوانٍ دائماً بسبب تكلفة الشبكة.",
          "ok": false,
          "why": "الحساب الرياضي خاطئ تماماً.",
          "en": "Both will always take 10 seconds due to network overhead."
        },
        {
          "ar": "التنفيذ المتتالي (`await A; await B;`) يستغرق مجموع الوقتين (5 ثوانٍ)، بينما التنفيذ المتزامن بـ `Task.WhenAll` يستغرق وقت المهمة الأطول فقط (حوالي 3 ثوانٍ).",
          "ok": true,
          "why": "في WhenAll تنطلق المهمتان معاً في نفس الوقت بالتوازي، لذا يكون الزمن الكلي هو زمن أطولهما استغراقاً: max(2, 3) = 3s.",
          "en": "Sequential execution takes the sum of both (5 seconds), whereas concurrent execution via `Task.WhenAll` takes approximately the maximum of both (about 3 seconds)."
        },
        {
          "ar": "التنفيذ المتزامن يستغرق ثانية واحدة فقط لأن المعالج يسرع الوقت فيزيائياً.",
          "ok": false,
          "why": "المعالج لا يمكنه إنهاء عملية تستغرق 3 ثوانٍ في ثانية واحدة.",
          "en": "Concurrent execution takes only 1 second because the CPU speeds up physical time."
        },
        {
          "ar": "التنفيذ المتتالي أسرع دائماً بمقدار الضعف من التنفيذ المتزامن.",
          "ok": false,
          "why": "التتالي يجمع الأوقات وبالتالي هو الأبطأ دائماً في المهام المستقلة.",
          "en": "Sequential execution is always twice as fast as concurrent execution."
        }
      ],
      "tip": "وقفة امتحانية: حساب زمني امتحاني: المهام المستقلة المتتالية = الجمع (2 + 3 = 5s). المهام عبر `Task.WhenAll` = الأطول (max(2, 3) = 3s)."
    },
    {
      "n": 253,
      "type": "mcq",
      "ref": "L7-S010",
      "q_ar": "ما هي الحالات النهائية الثلاث المحتملة لدورة حياة كائن الـ `Task` في .NET؟",
      "q_en": "What are the three terminal lifecycle states of a `Task` object in .NET?",
      "opts": [
        {
          "ar": "التحميل (Loading)، التجميد (Freezing)، والتخزين (Archived).",
          "ok": false,
          "why": "هذه ليست حالات معتمدة لـ TaskStatus في .NET.",
          "en": "Loading, Freezing, and Archived."
        },
        {
          "ar": "اكتمل بنجاح (`RanToCompletion`)، تعطل بخطأ (`Faulted`)، أو تم إلغاؤه (`Canceled`).",
          "ok": true,
          "why": "هذه هي الحالات الثلاث النهائية لخاصية TaskStatus التي تعبر عن ختام تنفيذ المهمة.",
          "en": "Completed successfully (`RanToCompletion`), failed with error (`Faulted`), or aborted (`Canceled`)."
        },
        {
          "ar": "محذوف (Deleted)، مكرر (Duplicated)، ومطبوع (Printed).",
          "ok": false,
          "why": "أوصاف مستندات وليست حالات برمجة مهام.",
          "en": "Deleted, Duplicated, and Printed."
        },
        {
          "ar": "كائن Task لا ينتهي أبداً ويظل في الذاكرة للأبد.",
          "ok": false,
          "why": "كل مهمة تنتهي حتماً بإحدى الحالات النهائية.",
          "en": "A Task never finishes and stays in memory forever."
        }
      ],
      "tip": "وقفة امتحانية: الحالات الثلاث لاكتمال الـ Task: `RanToCompletion` (نجاح)، `Faulted` (فشل وحمل استثناء)، `Canceled` (إلغاء عبر CancellationToken)."
    },
    {
      "n": 254,
      "type": "mcq",
      "ref": "L7-S013",
      "q_ar": "ما هو الفارق الوظيفي الجوهري بين استدعاء `Task.WhenAll` واستدعاء `Task.WhenAny`؟",
      "q_en": "What is the core functional difference between invoking `Task.WhenAll` and `Task.WhenAny`?",
      "opts": [
        {
          "ar": "كلاهما ينتظران اكتمال كافة المهام بدون أي فارق.",
          "ok": false,
          "why": "WhenAny يختلف جذرياً في سلوك الانتظار.",
          "en": "Both wait for all tasks to complete with zero difference."
        },
        {
          "ar": "`Task.WhenAll` ينتظر اكتمال جميع المهام في المصفوفة، بينما `Task.WhenAny` يعود فور اكتمال أول مهمة تنهي عملها من بين المجموعة.",
          "ok": true,
          "why": "WhenAny مثالية لحالات تحديد المهلة (Timeouts) أو اختيار الخادم الأسرع استجابة بين خوادم مكررة.",
          "en": "`Task.WhenAll` waits for every task in the collection to complete, while `Task.WhenAny` returns as soon as any single task finishes."
        },
        {
          "ar": "`Task.WhenAll` مخصصة للعمليات الحسابية فقط و `Task.WhenAny` للرسائل النصية.",
          "ok": false,
          "why": "كلاهما يتعامل مع أي كائنات Task من أي نوع.",
          "en": "`Task.WhenAll` is for arithmetic only and `Task.WhenAny` is for strings."
        },
        {
          "ar": "`Task.WhenAny` تقوم بحذف جميع المهام المتبقية تلقائياً من الذاكرة فوراً.",
          "ok": false,
          "why": "WhenAny لا تلغي المهام الأخرى تلقائياً؛ بل يجب على المبرمج إلغاؤها صراحة باستخدام CancellationToken.",
          "en": "`Task.WhenAny` automatically cancels and removes remaining tasks from memory."
        }
      ],
      "tip": "وقفة امتحانية: متى تستخدم `Task.WhenAny`؟ 1) عند تطبيق Timeout (مهمة العملية ضد `Task.Delay`)، 2) الاستعلام عن أسرع خادم من بين عدة خوادم بديلة."
    },
    {
      "n": 255,
      "type": "mcq",
      "ref": "L7-S014",
      "q_ar": "ما هو التمييز الأكاديمي الحاسم بين مفهوم التزامن (Concurrency) ومفهوم التوازي (Parallelism)؟",
      "q_en": "What is the decisive academic distinction between Concurrency and Parallelism?",
      "opts": [
        {
          "ar": "التزامن والتوازي كلمتان مترادفتان تماماً لنفس المعنى الفيزيائي.",
          "ok": false,
          "why": "هناك فارق هندسي وفيزيائي كبير صاغه روب بايك.",
          "en": "Concurrency and Parallelism are exact identical synonyms."
        },
        {
          "ar": "التزامن (Concurrency) هو إدارة والتعامل مع عدة مهام في نفس الفترة الزمنية (بالمناوبة وتداخل التنفيذ)، بينما التوازي (Parallelism) هو تنفيذ عدة مهام حرفياً في نفس اللحظة الفيزيائية على أنوية معالج متعددة.",
          "ok": true,
          "why": "التزامن هيكلة معمارية (Dealing with lots of things at once)، والتوازي تنفيذ عتادي متزامن (Doing lots of things at once).",
          "en": "Concurrency is dealing with multiple tasks at once (interleaving and structuring), while Parallelism is literally executing multiple tasks simultaneously on multiple CPU cores."
        },
        {
          "ar": "التزامن يتطلب معالجاً يحتوي على 64 نواة، بينما التوازي يعمل على معالج أحادي النواة قديم.",
          "ok": false,
          "why": "العكس؛ التوازي يستحيل تحقيقه فيزيائياً على معالج أحادي النواة.",
          "en": "Concurrency requires a 64-core CPU, while parallelism runs on single-core CPUs."
        },
        {
          "ar": "التزامن خاص بالشبكات والتوازي خاص بالطابعات.",
          "ok": false,
          "why": "غير صحيح إطلاقاً.",
          "en": "Concurrency is for networks, and parallelism is for printers."
        }
      ],
      "tip": "وقفة امتحانية: مقولة روب بايك الشهيرة: 'Concurrency is about dealing with lots of things at once. Parallelism is about doing lots of things at once.' (التوازي يتطلب أنوية متعددة حتماً)."
    },
    {
      "n": 256,
      "type": "mcq",
      "ref": "L7-S016",
      "q_ar": "لماذا يُعتبر إنشاء مسالك يدوية صريحة عبر `new Thread()` ممارسة مكلفة وغير محبذة في التطبيقات الحديثة؟",
      "q_en": "Why is manually spawning explicit threads via `new Thread()` considered expensive and discouraged in modern applications?",
      "opts": [
        {
          "ar": "لأن كل مسلك صريح يحجز حوالي 1 ميجابايت من الذاكرة لـ Stack الخاص به، ويتطلب تكلفة باهظة في تبديل السياق (Context Switching) وإدارة نظام التشغيل.",
          "ok": true,
          "why": "إنشاء Thread يستهلك موارد تشغيل وذاكرة ضخمة؛ ولذا توفر .NET حوض ThreadPool لإعادة تدوير المسالك بكفاءة.",
          "en": "Because each explicit thread allocates ~1MB of memory for its call stack and incurs high OS context-switching overhead."
        },
        {
          "ar": "لأن نظام التشغيل ويندوز لا يسمح بإنشاء أكثر من 3 مسالك فقط.",
          "ok": false,
          "why": "ويندوز يدعم آلاف المسالك لكن بتكلفة أداء عالية.",
          "en": "Because Windows allows creating only 3 threads maximum."
        },
        {
          "ar": "لأن المسالك اليدوية لا يمكنها قراءة الأرقام الصحيحة.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "Because manual threads cannot read integers."
        },
        {
          "ar": "لأن لغة C# ألغت دعم الكلمة المفتاحية Thread في كافة إصداراتها.",
          "ok": false,
          "why": "فئة Thread ما زالت موجودة لأغراض تاريخية وعتادية خاصة.",
          "en": "Because C# dropped the Thread class entirely from all versions."
        }
      ],
      "tip": "وقفة امتحانية: تكلفة المسلك اليدوي: 1MB Stack Memory + استهلاك وقت لإنشائه؛ البديل الحديث المعتمد: ThreadPool أو `Task.Run`."
    },
    {
      "n": 257,
      "type": "mcq",
      "ref": "L7-S017",
      "q_ar": "ما هي الفكرة المعمارية التي يقوم عليها حوض المسالك (ThreadPool) في بيئة تشغيل .NET؟",
      "q_en": "What is the architectural concept underpinning the ThreadPool in the .NET runtime?",
      "opts": [
        {
          "ar": "مجموعة من المسالك العاملة المسبقة الإنشاء والتي يُعاد استخدامها وتدويرها لتنفيذ المهام، مما يمنع تكلفة إنشاء وحذف المسالك باستمرار.",
          "ok": true,
          "why": "الـ ThreadPool يدير طابور مهام ومسلك ينهي مهمة يستلم أخرى فوراً دون تدميره وإعادة إنشائه.",
          "en": "A pool of pre-allocated worker threads that are reused across tasks, eliminating the continuous creation and destruction overhead."
        },
        {
          "ar": "تخزين المسالك في ملف نصي على القرص الصلب لحين إعادة تشغيل الحاسوب.",
          "ok": false,
          "why": "المسالك كائنات حية في الذاكرة ومعالجات النظام.",
          "en": "Persisting threads to a text file until next computer reboot."
        },
        {
          "ar": "إيقاف عمل كافة المسالك عند وصول عدد المستخدمين إلى 10.",
          "ok": false,
          "why": "الـ ThreadPool يتوسع وينكمش ديناميكياً حسب الحاجة.",
          "en": "Shutting down all threads when user count reaches 10."
        },
        {
          "ar": "أداة لتشغيل ألعاب الفيديو بدقة عالية.",
          "ok": false,
          "why": "لا علاقة له بالألعاب.",
          "en": "A utility for running high-resolution games."
        }
      ],
      "tip": "وقفة امتحانية: ThreadPool يعتمد على خوارزمية سرقة العمل (Work-Stealing Algorithm) لتوزيع الأحمال بالتساوي بين أنوية المعالج."
    },
    {
      "n": 258,
      "type": "mcq",
      "ref": "L7-S019",
      "q_ar": "متى يُعد استخدام `Parallel.For` أو `Parallel.ForEach` خياراً معمارياً أمثل في C#؟",
      "q_en": "When is using `Parallel.For` or `Parallel.ForEach` the optimal architectural choice in C#?",
      "opts": [
        {
          "ar": "في الحلقات التكرارية التي ترسل طلبات HTTP للشبكة وتنتظر الرد.",
          "ok": false,
          "why": "عمليات الشبكة غير متزامنة (Async I/O)، واستخدام Parallel.For معها يجمد مسالك المعالج.",
          "en": "In loops dispatching HTTP network requests and awaiting responses."
        },
        {
          "ar": "في الحلقات التكرارية الحسابية المكثفة لمعالجة البيانات (CPU-Bound Data Parallelism) حيث تكون كل دورة مستقلة تماماً عن الأخرى.",
          "ok": true,
          "why": "مكتبة TPL في Parallel.For تقسم البيانات تلقائياً على أنوية المعالج لاستغلال طاقة العتاد في الحسابات المستقلة.",
          "en": "In heavy compute-intensive loops (CPU-Bound Data Parallelism) where each iteration is completely independent of others."
        },
        {
          "ar": "في العمليات التي تعدل نفس المتغير المشترك بدون أي قفل حماية.",
          "ok": false,
          "why": "هذا يؤدي لكارثة Race Condition فوراً.",
          "en": "In iterations modifying the same shared state without synchronization."
        },
        {
          "ar": "لقراءة ملف واحد حرفاً بحرف من القرص الصلب.",
          "ok": false,
          "why": "القراءة التسلسلية من ملف واحد لا تستفيد من التوازي.",
          "en": "For reading a single file character-by-character from disk."
        }
      ],
      "tip": "وقفة امتحانية: استخدم `Parallel.For` لحلقات الحسابات المكثفة المستقلة (Data Parallelism)، ولا تستخدمها لعمليات الانتظار الشبكي (Async I/O)."
    },
    {
      "n": 259,
      "type": "mcq",
      "ref": "L7-S023",
      "q_ar": "لماذا تؤدي العملية البسيطة `count++` إلى حدوث ظاهرة سباق (Race Condition) عند تنفيذها بالتزامن من عدة مسالك؟",
      "q_en": "Why does the simple statement `count++` trigger a Race Condition when executed concurrently across multiple threads?",
      "opts": [
        {
          "ar": "لأن لغة C# تمنع زيادة الأرقام بأكثر من واحد.",
          "ok": false,
          "why": "C# تدعم العمليات الحسابية بشكل كامل.",
          "en": "Because C# prohibits incrementing numbers by more than one."
        },
        {
          "ar": "لأن `count++` ليست عملية ذرية (Not Atomic)؛ بل تترجم إلى 3 خطوات منفصلة في المعالج: 1) قراءة القيمة من الذاكرة، 2) زيادة القيمة في السجل، 3) كتابة القيمة في الذاكرة، ويمكن للمسالك التداخل بينها.",
          "ok": true,
          "why": "إذا قرأ مسلكان القيمة 5 في نفس اللحظة، فكلاهما سيزيدها إلى 6 ويكتب 6، فتضيع إحدى الزيادات (Lost Update).",
          "en": "Because `count++` is not atomic; it translates into 3 distinct CPU steps (Read, Modify, Write), allowing threads to interleave and overwrite results."
        },
        {
          "ar": "لأن نظام التشغيل يغلق الملف عند زيادة الرقم.",
          "ok": false,
          "why": "العملية تحدث في الذاكرة RAM ولا علاقة لها بالملفات.",
          "en": "Because the OS closes the file when numbers increase."
        },
        {
          "ar": "لأن المتغير الرقمي يستهلك الذاكرة العشوائية بالكامل.",
          "ok": false,
          "why": "المتغير int يحجز 4 بايت فقط.",
          "en": "Because numeric variables deplete the entire RAM."
        }
      ],
      "tip": "وقفة امتحانية: سؤال مفضل: هل `count++` عملية ذرية (Atomic)؟ الإجابة: لا! بل تتكون من: Read -> Modify -> Write؛ مما يسبب Lost Updates."
    },
    {
      "n": 260,
      "type": "mcq",
      "ref": "L7-S024",
      "q_ar": "كيف تعمل كتلة الحماية `lock` في C# خلف الكواليس عند ترجمتها بواسطة المترجم؟",
      "q_en": "How does the `lock` statement in C# operate behind the scenes when compiled?",
      "opts": [
        {
          "ar": "تقوم بفصل كابل الشبكة حتى ينهي المسلك عمله.",
          "ok": false,
          "why": "لا علاقة له بالشبكة الفيزيائية.",
          "en": "It disconnects the network cable until the thread finishes."
        },
        {
          "ar": "تترجم إلى استدعاء `Monitor.Enter` للحصول على القفل، مع وضع الكود داخل كتلة `try...finally` لضمان استدعاء `Monitor.Exit` لتحرير القفل حتى لو حدث استثناء.",
          "ok": true,
          "why": "الـ lock هو مجرد غلاف حماية تركيبي (Syntactic Sugar) لـ Monitor مع كتلة try-finally لضمان عدم بقاء القفل محجوزاً للأبد.",
          "en": "It compiles to `Monitor.Enter` wrapped in a `try...finally` block, ensuring `Monitor.Exit` is guaranteed to release the lock even on exceptions."
        },
        {
          "ar": "تقوم بإيقاف تشغيل المعالج بالكامل لمدة ثانية واحدة.",
          "ok": false,
          "why": "القفل يعيق المسالك المتنافسة على نفس الكائن فقط.",
          "en": "It completely halts the processor for one second."
        },
        {
          "ar": "تحذف المتغير من الذاكرة وتعيد تعريفه من جديد.",
          "ok": false,
          "why": "غير صحيح برمجياً.",
          "en": "It deletes the variable from memory and recreates it."
        }
      ],
      "tip": "وقفة امتحانية: `lock(obj)` تترجم حرفياً إلى: `Monitor.Enter(obj, ref lockTaken)` داخل كتلة `try` وتحريرها بـ `Monitor.Exit(obj)` داخل `finally`."
    },
    {
      "n": 261,
      "type": "mcq",
      "ref": "L7-S024",
      "q_ar": "ما هي الممارسة البرمجية القياسية الآمنة لكائن القفل في جملة `lock`، وما الذي يجب تجنبه تماماً؟",
      "q_en": "What is the standard thread-safe practice for the lock object in a `lock` statement, and what must be strictly avoided?",
      "opts": [
        {
          "ar": "استخدام كائن خاص للقراءة فقط مثل `private readonly object _lock = new object();`، وتجنب القفل على `this` أو `typeof(MyClass)` أو السلاسل النصية.",
          "ok": true,
          "why": "القفل على `this` أو السلاسل النصية أو الأنواع العامة مكشوف لأي كود خارجي وقد يسبب Deadlocks عامة على مستوى التطبيق.",
          "en": "Using a dedicated private instance like `private readonly object _lock = new object();`, avoiding locks on `this`, `typeof(T)`, or string literals."
        },
        {
          "ar": "استخدام نصوص مشتركة عامة مثل `lock(\"my_secret_lock\")` في كل مكان.",
          "ok": false,
          "why": "كارثة أمنية وتصميمية؛ لأن السلاسل النصية مدمجة في الـ String Interning pool مما يسبب deadlocks عشوائية.",
          "en": "Using shared string literals like `lock(\"my_secret_lock\")` everywhere."
        },
        {
          "ar": "القفل على المتغير الرقمي `lock(count)` بعد تحويله لـ int.",
          "ok": false,
          "why": "لا يمكن القفل على أنواع القيمة (Value Types) في C# لأنها تتطلب كائناً مرجعياً.",
          "en": "Locking on value types like `lock(count)`."
        },
        {
          "ar": "تمرير قيمة `null` ككائن قفل في `lock(null)`.",
          "ok": false,
          "why": "تمرير null يرمي استثناء `ArgumentNullException` فوراً.",
          "en": "Passing `null` as the lock object."
        }
      ],
      "tip": "وقفة امتحانية: سؤال كلاسيكي: لماذا يحظر `lock(this)` و `lock(\"str\")`؟ لأنها كائنات مكشوفة عامة، ويجب دائماً تعريف: `private readonly object _lock = new object();`."
    },
    {
      "n": 262,
      "type": "mcq",
      "ref": "L7-S025",
      "q_ar": "لماذا يُعتبر استخدام فئة `Interlocked` (مثل `Interlocked.Increment(ref count)`) أفضل وأسرع بكثير من استخدام `lock` للعمليات الحسابية البسيطة؟",
      "q_en": "Why is using the `Interlocked` class (like `Interlocked.Increment(ref count)`) significantly better and faster than `lock` for simple arithmetic operations?",
      "opts": [
        {
          "ar": "لأنها تعتمد على تعليمات ذرية مدعومة عتادياً من المعالج المركزي (CPU Hardware Instructions) دون تجميد المسالك أو تكلفة تبديل السياق.",
          "ok": true,
          "why": "فئة Interlocked تستخدم تعليمات عتادية ذرية مباشرة (مثل CMPXCHG / LOCK INC)، مما يجعلها أسرع بعشرات المرات من حجز ومراقبة Monitor.",
          "en": "Because it relies on CPU hardware-level atomic instructions without blocking threads or incurring OS context-switching overhead."
        },
        {
          "ar": "لأنها تقوم بمسح كافة الأخطاء البرمجية من المشروع تلقائياً.",
          "ok": false,
          "why": "Interlocked فئة تزامن ذرية وليست أداة تصحيح أخطاء.",
          "en": "Because it automatically erases all bugs from the project."
        },
        {
          "ar": "لأنها لا تحتاج لكتابة أي كود برمجي.",
          "ok": false,
          "why": "تتطلب استدعاء دوالها الصريحة.",
          "en": "Because it requires writing zero lines of code."
        },
        {
          "ar": "لأن `lock` محظور رسمياً في إصدارات .NET الحديثة.",
          "ok": false,
          "why": "الـ lock مدعوم وشائع في العمليات المتعددة الأسطر.",
          "en": "Because `lock` is officially deprecated in modern .NET."
        }
      ],
      "tip": "وقفة امتحانية: للأرقام والعدادات البسيطة: `Interlocked.Increment`, `Interlocked.Decrement`, `Interlocked.CompareExchange` هي الخيار الأمثل فائق السرعة."
    },
    {
      "n": 263,
      "type": "mcq",
      "ref": "L7-S026",
      "q_ar": "لماذا يفضل استخدام مجموعات التزامن الجاهزة (مثل `ConcurrentDictionary<TKey, TValue>`) بدلاً من حماية `Dictionary` التقليدي بقفل يدوي `lock`؟",
      "q_en": "Why is using thread-safe collections (like `ConcurrentDictionary<TKey, TValue>`) preferred over protecting a standard `Dictionary` with manual `lock`?",
      "opts": [
        {
          "ar": "لأن المجموعات المتزامنة تطبق أقفالاً دقيقة ومجزأة (Fine-Grained Bucket Locking) وخوارزميات بلا أقفال لعمليات القراءة، مما يتيح وصول مئات المسالك دون تنافس واختناق.",
          "ok": true,
          "why": "القفل اليدوي على Dictionary يجمد القاموس بالكامل لكل قراءة وكتابة، بينما ConcurrentDictionary يقفل فقط السلة (Bucket) المعنية ويتيح قراءة متزامنة فائقة السرعة.",
          "en": "Because concurrent collections utilize fine-grained bucket-level locking and lock-free reads, enabling massive concurrent access without bottlenecks."
        },
        {
          "ar": "لأن القاموس العادي لا يقبل سوى 5 عناصر كحد أقصى.",
          "ok": false,
          "why": "القاموس العادي يستوعب ملايين العناصر.",
          "en": "Because standard dictionaries only hold up to 5 items."
        },
        {
          "ar": "لأن المجموعات المتزامنة تحول البيانات إلى صور ورسومات بيانية.",
          "ok": false,
          "why": "هي هياكل بيانات بحتة.",
          "en": "Because concurrent collections convert data into charts."
        },
        {
          "ar": "لأن C# تحذف القاموس العادي تلقائياً بعد دقيقة واحدة.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "Because C# automatically garbage-collects regular dictionaries after one minute."
        }
      ],
      "tip": "وقفة امتحانية: مجموعات `System.Collections.Concurrent` (`ConcurrentDictionary`, `ConcurrentQueue`, `ConcurrentBag`) صممت لتحقيق أقصى كفاءة أداء متعدد المسالك."
    },
    {
      "n": 264,
      "type": "mcq",
      "ref": "L7-S027",
      "q_ar": "ما هو التعريف الدقيق لحالة الجمود المميت (Deadlock) في البيئات متعددة المسالك؟",
      "q_en": "What is the precise definition of a Deadlock in multithreaded environments?",
      "opts": [
        {
          "ar": "نفاد الحبر في الطابعة أثناء طباعة الفاتورة.",
          "ok": false,
          "why": "عطل عتادي لا علاقة له بالبرمجة.",
          "en": "Printer running out of ink."
        },
        {
          "ar": "حالة انتظار دائري متبادل يتجمد فيها مسلكان أو أكثر إلى الأبد، حيث يحتفظ المسلك الأول بقفل المورد A وينتظر قفل B، بينما يحتفظ المسلك الثاني بـ B وينتظر A.",
          "ok": true,
          "why": "هذا هو نموذج الانتظار الدائري (Circular Wait) الشهير للجمود المميت حيث لا يستطيع أي طرف الاستمرار أو التراجع.",
          "en": "A circular wait condition where two or more threads freeze permanently: Thread 1 holds Lock A waiting for B, while Thread 2 holds Lock B waiting for A."
        },
        {
          "ar": "إغلاق شاشة الحاسوب المحمول عند دخول وضع السبات.",
          "ok": false,
          "why": "وظيفة إدارة طاقة في نظام التشغيل.",
          "en": "Laptop screen turning off during sleep mode."
        },
        {
          "ar": "تحميل ملف مضغوط بسرعة عالية.",
          "ok": false,
          "why": "لا علاقة له بالجمود.",
          "en": "High-speed download of a zip archive."
        }
      ],
      "tip": "وقفة امتحانية: شروط كوفمان للـ Deadlock: أهمها الانتظار الدائري (Circular Wait)؛ ولتفاديه: اتبع دائماً ترتيباً موحداً وصارماً للحصول على الأقفال (Lock Ordering)."
    },
    {
      "n": 265,
      "type": "mcq",
      "ref": "L7-S030",
      "q_ar": "لماذا يُعتبر استدعاء عمليات الشبكة أو قراءة قواعد البيانات بداخل كتلة `lock` ممارسة معمارية بالغة السوء والخطورة؟",
      "q_en": "Why is invoking network calls or database queries inside a `lock` block considered an atrocious architectural anti-pattern?",
      "opts": [
        {
          "ar": "لأن عمليات I/O بطيئة وغير متوقعة في زمن استجابتها، مما يبقي القفل محجوزاً لفترة طويلة ويجمد كافة المسالك الأخرى المتنافسة ويشل النظام بالكامل.",
          "ok": true,
          "why": "القاعدة الذهبية: احتفظ بالقفل لأقصر مدة ممكنة في الذاكرة RAM، وإياك أن تستدعي I/O أو Thread.Sleep داخل lock.",
          "en": "Because I/O is slow and nondeterministic, holding the lock for extensive periods, starving other waiting threads and crippling system throughput."
        },
        {
          "ar": "لأن المترجم يقوم بحذف كود الشبكة فوراً عند الترجمة.",
          "ok": false,
          "why": "المترجم يسمح بكتابته لكنه يسبب كارثة أداء عند التشغيل.",
          "en": "Because the compiler automatically removes network code during compilation."
        },
        {
          "ar": "لأن قواعد البيانات لا يمكنها استقبال الاتصالات من لغة C#.",
          "ok": false,
          "why": "C# تتصل بكافة أنواع قواعد البيانات.",
          "en": "Because databases cannot accept connections from C#."
        },
        {
          "ar": "لأن المعالج يقوم برمي استثناء فوري ويغلق التطبيق بمجرد اكتشاف اسم قاعدة البيانات.",
          "ok": false,
          "why": "لا يرمي استثناء، بل يتجمد النظام في انتظار فك القفل.",
          "en": "Because CPU throws an instant exception upon detecting database names."
        }
      ],
      "tip": "وقفة امتحانية: قاعدة امتحانية حاسمة: 'Never do I/O or long-running work inside a lock!' (حافظ على نطاق القفل بالغا الصغر وفي الذاكرة فقط)."
    },
    {
      "n": 266,
      "type": "mcq",
      "ref": "L7-S031",
      "q_ar": "ما هو خطر الوقوع في مصيدة (Sync-over-Async) عند استخدام استدعاءات معيقة مثل `.Result` أو `.Wait()` على مهمة غير متزامنة؟",
      "q_en": "What is the danger of falling into the Sync-over-Async pitfall by calling blocking members like `.Result` or `.Wait()` on an async Task?",
      "opts": [
        {
          "ar": "انخفاض دقة ألوان الشاشة في المتصفح.",
          "ok": false,
          "why": "لا علاقة له بالرسوميات.",
          "en": "Reduced monitor color accuracy in web browsers."
        },
        {
          "ar": "تجميد المسلك الحالي وإجباره على الانتظار، مما يؤدي لاستنزاف مسالك الخادم السريع، وحدوث جمود مميت (Deadlock) في التطبيقات التي تمتلك SynchronizationContext.",
          "ok": true,
          "why": "الـ Sync-over-Async يحرم السيرفر من ميزة تحرير المسالك، ويسبب deadlocks مشهورة عندما يحاول كود await العودة لمسلك مجمد بواسطة .Result.",
          "en": "Blocking the calling thread synchronously, triggering thread starvation and causing classic deadlocks in applications with a SynchronizationContext."
        },
        {
          "ar": "تحويل المتغيرات النصية إلى أرقام عشرية سالبة.",
          "ok": false,
          "why": "غير صحيح برمجياً.",
          "en": "Converting string variables into negative decimal numbers."
        },
        {
          "ar": "لا يوجد أي خطر؛ فاستدعاء `.Result` هو الطريقة المفضلة دائماً بدلاً من `await`.",
          "ok": false,
          "why": "استدعاء `.Result` ممارسة خطيرة ويجب تجنبها دائماً واستبدالها بـ `await`.",
          "en": "There is zero danger; calling `.Result` is always preferred over `await`."
        }
      ],
      "tip": "وقفة امتحانية: احفظ الشعار الهندسي المعتمد: 'Async all the way down!'؛ تجنب تماماً `.Result` و `.Wait()`، واستخدم دائماً `await` لمنع الـ Deadlocks."
    },
    {
      "n": 267,
      "type": "mcq",
      "ref": "L7-S034",
      "q_ar": "ما هو الفارق المعماري الجوهري بين ذاكرة الـ Stack وذاكرة الـ Heap في إدارة الذاكرة في منصة .NET؟",
      "q_en": "What is the core architectural difference between Stack and Heap in .NET memory management?",
      "opts": [
        {
          "ar": "الـ Stack خاص بالملفات الكبيرة، والـ Heap خاص بالأكواد البرمجية فقط.",
          "ok": false,
          "why": "الـ Stack للبيانات المحلية والـ Heap للكائنات المرجعية.",
          "en": "Stack is for large files, Heap is for code only."
        },
        {
          "ar": "الـ Stack ذاكرة صغيرة وفائقة السرعة ومنظمة بنمط (LIFO) خاصة بكل مسلك وتُحرر تلقائياً بانتهاء الدالة، بينما الـ Heap ذاكرة واسعة مشتركة تديرها منصة .NET وتخزن الكائنات المرجعية ويقوم جامع القمامة (GC) بتنظيفها.",
          "ok": true,
          "why": "الـ Stack يخزن المتغيرات المحلية ومؤشرات الكائنات وسريع جداً، بينما الـ Heap تخزن الكائنات الحية وتتطلب جامع قمامة لتتبعها وتنظيفها.",
          "en": "Stack is small, ultra-fast, LIFO memory per thread cleaned automatically on scope exit, while Heap is a shared pool storing reference objects cleaned by the Garbage Collector."
        },
        {
          "ar": "الـ Stack يعمل على بطاقات الرسوميات GPU فقط والـ Heap في القرص الصلب.",
          "ok": false,
          "why": "كلاهما جزء من ذاكرة الوصول العشوائي RAM الرئيسية للجهاز.",
          "en": "Stack runs on GPU and Heap on hard drive."
        },
        {
          "ar": "كلا الذاكرتين متطابقتان تماماً ولا يوجد أي تفريق بينهما في بيئة التشغيل.",
          "ok": false,
          "why": "الفارق بينهما هو أساس إدارة الذاكرة والأداء في كافة لغات البرمجة.",
          "en": "Both memory structures are identical with no distinction in the runtime."
        }
      ],
      "tip": "وقفة امتحانية: Stack = سريع، خاص بالمسلك، LIFO، تحرير تلقائي (Deallocated on scope exit). Heap = كبير، مشترك، كائنات الفئات، ينظفه جامع القمامة (GC)."
    },
    {
      "n": 268,
      "type": "mcq",
      "ref": "L7-S035",
      "q_ar": "أي من الأنواع التالية يُعد نوع قيمة (Value Type) يُخزن في الـ Stack مباشرة، وأيها يُعد نوعاً مرجعياً (Reference Type) يُخزن كائنه في الـ Heap؟",
      "q_en": "Which of the following constitutes a Value Type stored inline on the Stack, versus a Reference Type whose object resides on the Heap?",
      "opts": [
        {
          "ar": "الـ `struct` و `int` و `bool` هي أنواع قيمة (Value Types)، بينما الـ `class` و `string` و `array` هي أنواع مرجعية (Reference Types).",
          "ok": true,
          "why": "هذا هو التقسيم الأساسي الثنائي في C#؛ حيث ترث أنواع القيمة من `System.ValueType` وتخزن قيمتها مباشرة، بينما الأنواع المرجعية تخزن مؤشراً في الـ Stack والكائن في الـ Heap.",
          "en": "`struct`, `int`, and `bool` are Value Types, whereas `class`, `string`, and `array` are Reference Types."
        },
        {
          "ar": "الـ `string` هو نوع قيمة يخزن في الـ Stack فقط.",
          "ok": false,
          "why": "فخ كلاسيكي: الـ `string` هو كائن مرجعي (Reference Type) يقع في الـ Heap رغم تعامله شبه الثابت.",
          "en": "`string` is a value type residing on the Stack only."
        },
        {
          "ar": "كافة المتغيرات في C# هي أنواع قيمة ولا وجود للأنواع المرجعية.",
          "ok": false,
          "why": "C# لغة كائنية تعتمد أساساً على المراجع والكائنات.",
          "en": "All variables in C# are value types with no reference types existing."
        },
        {
          "ar": "المصفوفات `arrays` تخزن دائماً في الـ Stack بالكامل مهما كان حجمها.",
          "ok": false,
          "why": "المصفوفات في C# كائنات مرجعية توضع دائماً في الـ Heap.",
          "en": "Arrays are always stored entirely on the Stack regardless of size."
        }
      ],
      "tip": "وقفة امتحانية: فخ شهير جداً: هل `string` نوع قيمة أم مرجعي؟ الـ `string` هو نوع مرجعي (Reference Type) يقع في الـ Heap ولكنه غير قابل للتعديل (Immutable)."
    },
    {
      "n": 269,
      "type": "mcq",
      "ref": "L7-S036",
      "q_ar": "ما هي عمليتا التغليف (Boxing) وفك التغليف (Unboxing) في C#، وما هو أثرهما السلبي على الأداء؟",
      "q_en": "What are Boxing and Unboxing operations in C#, and what is their negative performance impact?",
      "opts": [
        {
          "ar": "ضغط وفك ضغط ملفات ZIP؛ وأثرها استهلاك القرص الصلب.",
          "ok": false,
          "why": "Boxing مصطلح لإدارة الذاكرة وتحويل الأنواع وليس ضغط ملفات.",
          "en": "Compressing and decompressing ZIP files affecting hard drive space."
        },
        {
          "ar": "التغليف (Boxing) هو تحويل نوع قيمة (Value Type) إلى كائن مرجعي (`object`) في الـ Heap، وفك التغليف (Unboxing) هو استخراج القيمة مجدداً؛ وتكرارهما يولد حجوزات ذاكرة مكلفة ويزيد عبء جامع القمامة.",
          "ok": true,
          "why": "عند عمل Boxing يتم تخصيص مساحة جديدة في الـ Heap ونسخ القيمة، مما يسبب ضغطاً هائلاً على الذاكرة وجامع القمامة (GC Pressure).",
          "en": "Boxing converts a Value Type into a Heap `object` reference, and Unboxing extracts it back; frequent occurrences incur heap allocations and heavy GC pressure."
        },
        {
          "ar": "تشفير وفك تشفير بطاقات الائتمان بالإنترنت.",
          "ok": false,
          "why": "لا علاقة له بالتشفير المالي.",
          "en": "Encrypting and decrypting credit cards."
        },
        {
          "ar": "حماية الكود من القرصنة والاختراق الخارجي.",
          "ok": false,
          "why": "ليس آلية أمان أو تعمية كود (Obfuscation).",
          "en": "Protecting code from reverse engineering."
        }
      ],
      "tip": "وقفة امتحانية: استخدام Generics (مثل `List<int>`) يمنع حدوث الـ Boxing والـ Unboxing مقارنة بـ `ArrayList` القديمة، مما يرفع الأداء ويقلل حجز الذاكرة."
    },
    {
      "n": 270,
      "type": "mcq",
      "ref": "L7-S037",
      "q_ar": "كيف تعمل خوارزمية تمييز وكنس الذاكرة (Mark and Sweep) التي يعتمد عليها جامع القمامة (Garbage Collector) في .NET؟",
      "q_en": "How does the Mark and Sweep algorithm employed by the .NET Garbage Collector operate?",
      "opts": [
        {
          "ar": "تقوم بحذف كافة الملفات التي مر على إنشائها أكثر من شهر.",
          "ok": false,
          "why": "الـ GC يدير كائنات الذاكرة RAM الحية وليس ملفات القرص.",
          "en": "It deletes all files created more than a month ago."
        },
        {
          "ar": "المرحلة الأولى (Mark): فحص الجذور (GC Roots) وتمييز الكائنات الحية التي يمكن الوصول إليها؛ والمرحلة الثانية (Sweep): تحرير وحذف الكائنات غير المميزة وضغط الذاكرة الحية المتبقية (Compact).",
          "ok": true,
          "why": "يبدأ الـ GC من الجذور (المتغيرات المحلية، المسجلات، الكائنات الاستاتيكية) ويحدد كل ما هو متصل بها، ثم يمسح ما تبقى ويضغط الذاكرة لمنع التجزؤ.",
          "en": "Mark phase inspects GC Roots to flag reachable live objects; Sweep phase reclaims unflagged dead objects and compacts remaining memory."
        },
        {
          "ar": "فصل الطاقة الكهربائية عن مسالك المعالج الخاملة.",
          "ok": false,
          "why": "وظيفة عتادية لنظام التشغيل.",
          "en": "Disconnecting electric power from idle CPU threads."
        },
        {
          "ar": "إرسال تقرير خطأ لشركة مايكروسوفت كل 5 دقائق.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "Dispatching error crash reports to Microsoft every 5 minutes."
        }
      ],
      "tip": "وقفة امتحانية: مراحل جامع القمامة في .NET: 1) Mark (تمييز الكائنات الحية من الجذور)، 2) Sweep (كنس وحذف الكائنات الميتة)، 3) Compact (ضغط الذاكرة لمنع التجزئة)."
    },
    {
      "n": 271,
      "type": "mcq",
      "ref": "L7-S038",
      "q_ar": "ما هي الفرضية التوليدية (Generational Hypothesis) التي يقوم عليها تقسيم الـ Heap إلى ثلاثة أجيال (Gen 0, Gen 1, Gen 2) في جامع القمامة؟",
      "q_en": "What is the Generational Hypothesis behind dividing the Heap into three generations (Gen 0, Gen 1, Gen 2) in .NET GC?",
      "opts": [
        {
          "ar": "أن البرامج القديمة تعمل أسرع من البرامج الحديثة.",
          "ok": false,
          "why": "فرضية البرمجة التوليدية تتعلق بعمر الكائنات البرمجية في الذاكرة.",
          "en": "That older software runs faster than modern software."
        },
        {
          "ar": "أن معظم الكائنات التي يتم إنشاؤها تكون قصيرة الأجل وتموت سريعاً جداً (مثل المتغيرات المحلية)، بينما الكائنات التي تنجو من عدة دورات تنظيف من المرجح أن تبقى حية لفترة أطول.",
          "ok": true,
          "why": "وفق هذه الفرضية: Gen 0 تفحص بشكل متكرر وسريع وفوري، والكائنات الصامدة تترقى إلى Gen 1 ثم Gen 2 التي نادراً ما يتم فحصها (Full GC) لكون فحصها مكلفاً.",
          "en": "Most created objects are extremely short-lived and die quickly (like local variables), whereas objects surviving multiple collection sweeps tend to live much longer."
        },
        {
          "ar": "أن الذاكرة العشوائية يجب تقسيمها لثلاث قطع فيزيائية متساوية في اللوحة الأم.",
          "ok": false,
          "why": "التقسيم منطقي برمجي في الـ Heap وليس فيزيائياً في اللوحة الأم.",
          "en": "That RAM must be partitioned into three physical chunks on the motherboard."
        },
        {
          "ar": "أن أجهزة الجيل الأول لا يمكنها تشغيل لغة C#.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "That first-generation computers cannot run C#."
        }
      ],
      "tip": "وقفة امتحانية: أجيال GC: `Gen 0` (كائنات حديثة جداً، تنظيف فوري متكرر ورخيص)، `Gen 1` (عازل وسيط)، `Gen 2` (كائنات معمرة مثل Singletons، تنظيف نادر ومكلف)."
    },
    {
      "n": 272,
      "type": "mcq",
      "ref": "L7-S038",
      "q_ar": "ما هو حوض الكائنات الكبيرة (Large Object Heap - LOH)، وما هو الحد الحجمي الأدنى لانتقال الكائن إليه مباشرة؟",
      "q_en": "What is the Large Object Heap (LOH), and what is the minimum byte threshold for an object to be allocated directly onto it?",
      "opts": [
        {
          "ar": "كائن بحجم 10 بايت فقط.",
          "ok": false,
          "why": "هذا حجم كائن ضئيل جداً يوضع في Gen 0.",
          "en": "An object of only 10 bytes."
        },
        {
          "ar": "الكائنات التي يبلغ حجمها 85,000 بايت (حوالي 85 كيلوبايت) فأكثر، وتوضع مباشرة في الـ LOH وتُعامل كجزء من الجيل الثاني (Gen 2) ولا يتم ضغطها افتراضياً لتفادي تكلفة النسخ الباهظة.",
          "ok": true,
          "why": "الكائنات الكبيرة (مثل المصفوفات الضخمة والصور) إذا وضعت في Gen 0 فسترهق الذاكرة بنسخها المستمر، لذا تذهب فوراً للـ LOH التابع لـ Gen 2.",
          "en": "Objects sized 85,000 bytes (~85KB) or greater, allocated directly into LOH, treated as Gen 2, and not compacted by default to avoid huge memory copy overhead."
        },
        {
          "ar": "كائن بحجم 100 جيجابايت فقط.",
          "ok": false,
          "why": "حجم يفوق الذاكرة العادية.",
          "en": "An object of 100 Gigabytes only."
        },
        {
          "ar": "الـ LOH مخصص فقط لنصوص كلمات المرور السرية.",
          "ok": false,
          "why": "الـ LOH يعتمد على الحجم بالبايت فقط بغض النظر عن محتوى الكائن.",
          "en": "LOH is strictly reserved for secret password strings."
        }
      ],
      "tip": "وقفة امتحانية: رقم امتحاني محفوظ: عتبة الـ Large Object Heap هي: 85,000 بايت؛ والكائنات فيه تعامل كـ Gen 2 مباشرة لتجنب كلفة ترحيلها."
    },
    {
      "n": 273,
      "type": "mcq",
      "ref": "L7-S039",
      "q_ar": "ما هو الفارق الحاسم بين الموارد المُدارة (Managed Resources) والموارد غير المُدارة (Unmanaged Resources)؟",
      "q_en": "What is the critical distinction between Managed Resources and Unmanaged Resources?",
      "opts": [
        {
          "ar": "الموارد المدارة هي الكائنات المحجوزة في ذاكرة الـ CLR ويتكفل جامع القمامة بتنظيفها، بينما الموارد غير المدارة هي موارد خارجية تابعة لنظام التشغيل (مثل مقابض الملفات واتصالات الشبكة وقواعد البيانات) ولا يستطيع جامع القمامة إغلاقها تلقائياً.",
          "ok": true,
          "why": "الـ GC يرى الذاكرة فقط، ولكنه لا يعلم متى يجب إغلاق مقبض ملف في ويندوز أو إغلاق اتصال شبكي، ولذا تقع مسؤولية إغلاقها على المطور.",
          "en": "Managed resources are CLR heap objects reclaimed automatically by GC, whereas Unmanaged resources are OS-level handles (file handles, network sockets, DB connections) that GC cannot automatically release."
        },
        {
          "ar": "الموارد المدارة مكتوبة بـ C++ والموارد غير المدارة بـ C#.",
          "ok": false,
          "why": "التصنيف حسب بيئة إدارة الذاكرة وليس حسب لغة البرمجة فقط.",
          "en": "Managed are written in C++ and unmanaged in C#."
        },
        {
          "ar": "الموارد المدارة مجانية والموارد غير المدارة تتطلب اشتراكاً مالياً شهرياً.",
          "ok": false,
          "why": "لا علاقة له بالرسوم والاشتراكات المالية.",
          "en": "Managed are free while unmanaged require monthly paid subscriptions."
        },
        {
          "ar": "كافة موارد الحاسوب بدون استثناء هي موارد غير مدارة.",
          "ok": false,
          "why": "معظم كائنات C# العادية في الـ Heap هي موارد مدارة بالكامل.",
          "en": "All computing resources without exception are unmanaged."
        }
      ],
      "tip": "وقفة امتحانية: الموارد غير المدارة (File handles, DB Connections, Sockets) تتطلب تحريراً صريحاً وفورياً عبر واجهة `IDisposable`."
    },
    {
      "n": 274,
      "type": "mcq",
      "ref": "L7-S040",
      "q_ar": "ما هي الوظيفة الهندسية لواجهة `IDisposable` ودالة `Dispose()` في C#، وكيف تضمن كتلة `using` استدعاءها؟",
      "q_en": "What is the architectural purpose of `IDisposable` and `Dispose()` in C#, and how does the `using` block guarantee its invocation?",
      "opts": [
        {
          "ar": "تحرير الموارد غير المدارة فورياً وحتمياً، وتقوم كتلة `using` بترجمتها إلى `try...finally` لضمان تنفيذ `Dispose()` حتى لو رمى الكود استثناءً خطيراً.",
          "ok": true,
          "why": "واجهة IDisposable تمنح المطور آلية تحرير حتمي وسريع للمقابض دون انتظار دورة الـ GC، والـ using يضمن استدعاء Dispose في كتلة finally.",
          "en": "Deterministically releasing unmanaged resources immediately; `using` compiles into a `try...finally` ensuring `Dispose()` executes even if exceptions are thrown."
        },
        {
          "ar": "إخفاء شاشة التطبيق عن أعين المتطفلين.",
          "ok": false,
          "why": "وظيفة أمنية شاشات ولا علاقة لها بواجهة IDisposable.",
          "en": "Hiding the application screen from onlookers."
        },
        {
          "ar": "إلغاء تثبيت نظام التشغيل بالكامل عند انتهاء البرنامج.",
          "ok": false,
          "why": "غير صحيح على الإطلاق.",
          "en": "Uninstalling the operating system upon program completion."
        },
        {
          "ar": "تحويل الكود إلى ملف تنفيذي سريع التشغيل.",
          "ok": false,
          "why": "وظيفة المترجم Linker وليس واجهة تنظيف الموارد.",
          "en": "Compiling code into a fast executable binary."
        }
      ],
      "tip": "وقفة امتحانية: جملة `using (var res = new Resource())` تترجم دائماً إلى: `try { ... } finally { res.Dispose(); }` لضمان عدم تسريب المقابض."
    },
    {
      "n": 275,
      "type": "mcq",
      "ref": "L7-S041",
      "q_ar": "كيف يمكن أن يحدث تسريب للذاكرة (Memory Leak) في بيئة لغة مدارة مثل C# رغم وجود جامع القمامة (GC)؟",
      "q_en": "How can a Memory Leak occur in a managed runtime environment like C# despite the presence of a Garbage Collector?",
      "opts": [
        {
          "ar": "انقطاع التيار الكهربائي فجأة أثناء المعالجة.",
          "ok": false,
          "why": "انقطاع الكهرباء يفرغ الذاكرة RAM تماماً.",
          "en": "Sudden electric power cutoff during execution."
        },
        {
          "ar": "عندما تظل هناك مراجع حية تشير إلى الكائنات (مثل اشتراك في الأحداث `Events` دون إلغاء الاشتراك، أو تخزين في قوائم ساكنة `static` دائمة)، مما يجعل الـ GC يعتبرها كائنات حية ويرفض تحريرها.",
          "ok": true,
          "why": "الـ GC يحرر فقط الكائنات التي انقطعت كافة مراجعها؛ فإذا نسيت إلغاء الاشتراك في حدث كائن ناشر طويل العمر، يظل الكائن المشترك محبوساً في الذاكرة للأبد.",
          "en": "When lingering live references point to objects (e.g. unhooked event subscriptions or static collection caches), causing the GC to treat them as reachable roots and never collect them."
        },
        {
          "ar": "تسريب الذاكرة مستحيل تماماً في بيئة C# ولا يمكن حدوثه إطلاقاً.",
          "ok": false,
          "why": "تسريب الذاكرة في C# واقعي وشائع ويحدث عبر المراجع المنسية والمقابض غير المغلقة.",
          "en": "Memory leaks are 100% impossible in C# environments."
        },
        {
          "ar": "عندما ينسى المبرمج إغلاق علامات التنصيص في الكود.",
          "ok": false,
          "why": "خطأ ترجمة يمنع بناء البرنامج أصلاً.",
          "en": "When a developer forgets to close quotation marks."
        }
      ],
      "tip": "وقفة امتحانية: أكثر أسباب تسريب الذاكرة في C#: 1) عدم إلغاء الاشتراك في الأحداث (Event Handlers)، 2) المراجع الساكنة المعمرة (`static List/Dictionary`)."
    },
    {
      "n": 276,
      "type": "mcq",
      "ref": "L7-S042",
      "q_ar": "ما هي الكارثة المعمارية التي تحدث عند إنشاء كائن جديد من `HttpClient` مع كل طلب عبر `using (var client = new HttpClient())` في خوادم الويب؟",
      "q_en": "What architectural catastrophe occurs when creating a new `HttpClient` instance per request via `using (var client = new HttpClient())` in web servers?",
      "opts": [
        {
          "ar": "مسح أسماء المجلدات في نظام التشغيل.",
          "ok": false,
          "why": "لا علاقة له بنظام الملفات.",
          "en": "Erasing operating system directory names."
        },
        {
          "ar": "استنزاف منافذ السوكيت في نظام التشغيل (Socket Exhaustion)، لأن منافذ TCP التحتية لا تُغلق فوراً بل تظل في حالة `TIME_WAIT` لعدة دقائق حتى بعد استدعاء Dispose.",
          "ok": true,
          "why": "رغم التخلص من كائن C#، فإن نظام التشغيل يثبت منفذ TCP في حالة TIME_WAIT لمدة تصل لدقيقتين، مما يؤدي لنفاد المنافذ المتاحة وانهيار السيرفر.",
          "en": "Socket Exhaustion, because underlying OS TCP sockets do not close immediately upon disposal but linger in `TIME_WAIT` state for minutes, depleting available ports."
        },
        {
          "ar": "تضاعف سرعة المعالج المركزي 100 مرة.",
          "ok": false,
          "why": "غير صحيح وهزلي.",
          "en": "CPU clock speed doubling 100x."
        },
        {
          "ar": "تشفير قاعدة البيانات وطلب فدية مالية.",
          "ok": false,
          "why": "هذا سلوك برمجيات فدية خبيثة وليس سلوك HttpClient.",
          "en": "Encrypting the database and demanding ransom."
        }
      ],
      "tip": "وقفة امتحانية: سؤال شهير: خطأ إنشاء `new HttpClient()` مع كل طلب يسبب `Socket Exhaustion`؛ والحل المعياري هو استخدام `IHttpClientFactory` أو مشاركة كائن Singleton."
    },
    {
      "n": 277,
      "type": "mcq",
      "ref": "L7-S045",
      "q_ar": "كيف يساعد استخدام الهياكل الحديثة مثل `Span<T>` و `ReadOnlySpan<T>` في تحسين أداء الذاكرة في C#؟",
      "q_en": "How does using modern types like `Span<T>` and `ReadOnlySpan<T>` improve memory performance in C#?",
      "opts": [
        {
          "ar": "بحذف البيانات فوراً من القرص الصلب لتوفير المساحة.",
          "ok": false,
          "why": "Span يعمل في الذاكرة RAM وليس مسح أقراص.",
          "en": "By wiping data off the hard drive to free space."
        },
        {
          "ar": "بإتاحة تقطيع واقتطاع أجزاء من النصوص والمصفوفات دون نسخ أو حجز أي ذاكرة إضافية في الـ Heap (Zero Memory Allocation)، والتعامل المباشر مع شريحة الذاكرة الأصلية.",
          "ok": true,
          "why": "دوال مثل `Substring` القديمة تنشئ كائناً جديداً في الـ Heap في كل مرة؛ بينما `Span` يمثل مجرد مؤشر وطول لنافذة على الذاكرة الموجودة بلا أي حجز إضافي.",
          "en": "By enabling zero-allocation slicing and inspection of contiguous memory buffers without copying or allocating new Heap objects."
        },
        {
          "ar": "بإجبار نظام التشغيل على مضاعفة سعة الـ RAM مجاناً.",
          "ok": false,
          "why": "الـ RAM سعة فيزيائية ثابتة.",
          "en": "By forcing the OS to double physical RAM capacity for free."
        },
        {
          "ar": "بإلغاء لغة C# واستبدالها بلغة الآلة فوراً.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "By bypassing C# in favor of raw machine code."
        }
      ],
      "tip": "وقفة امتحانية: `Span<T>` يمثل ثورة الأداء في .NET الحديثة: اقتطاع الذاكرة والنصوص دون أي حجز في الـ Heap (Zero-allocation Memory Slicing)."
    },
    {
      "n": 278,
      "type": "mcq",
      "ref": "L7-S044",
      "q_ar": "ما هو الخطر الفادح لأسلوب المهمة المتجاهلة (Fire-and-Forget Task) دون استخدام `await` في خوادم الويب؟",
      "q_en": "What is the critical risk of Fire-and-Forget tasks executed without `await` in web servers?",
      "opts": [
        {
          "ar": "إذا رمت المهمة استثناءً (Exception)، فلن يتم التقاطه وسيدفن بصمت أو يتسبب في انهيار التطبيق، فضلاً عن عدم ضمان اكتمالها قبل موت سياق الطلب.",
          "ok": true,
          "why": "إطلاق المهمة دون انتظار يجعل الخادم ينهي استجابة HTTP ويعيد تدوير الموارد بينما المهمة لا تزال تعمل، وإذا فشلت فلن يدري أحد بالخطأ.",
          "en": "If the task throws an exception, it goes unobserved or terminates the process, with no guarantee of completion before the request context is destroyed."
        },
        {
          "ar": "أن الطلب سيتحول تلقائياً إلى رسالة نصية SMS.",
          "ok": false,
          "why": "لا علاقة له بخدمات الرسائل الهاتفية.",
          "en": "The request automatically transforms into an SMS message."
        },
        {
          "ar": "أن المتصفح سيقوم بإعادة تشغيل جهاز المستخدم فوراً.",
          "ok": false,
          "why": "المتصفح لا يملك صلاحية إعادة تشغيل العتاد.",
          "en": "The browser forcefully reboots the client machine."
        },
        {
          "ar": "لا يوجد أي خطر؛ فالمهمة تنفذ دائماً بنجاح 100%.",
          "ok": false,
          "why": "الأخطاء في الشبكات والخوادم حتمية والتعامل مع الاستثناءات إلزامي.",
          "en": "There is zero risk; tasks always execute 100% successfully."
        }
      ],
      "tip": "وقفة امتحانية: فخ Fire-and-Forget: إطلاق المهمة بدون `await` يبتلع الأخطاء؛ والحل للعمليات الخلفية الطويلة هو استخدام `BackgroundService` أو Hangfire."
    },
    {
      "n": 279,
      "type": "mcq",
      "ref": "L7-S022",
      "q_ar": "ما هو التعريف الدقيق لمصطلح 'أمان المسالك' (Thread Safety) في برمجة المنظومات المتزامنة؟",
      "q_en": "What is the precise definition of 'Thread Safety' in concurrent systems programming?",
      "opts": [
        {
          "ar": "قفل الحاسوب بكلمة مرور معقدة لمنع المتطفلين من لمس لوحة المفاتيح.",
          "ok": false,
          "why": "أمان فيزيائي للأجهزة وليس أمان مسالك كود.",
          "en": "Locking the PC with a password to prevent keyboard tampering."
        },
        {
          "ar": "خاصية في الكود البرمجي أو هيكل البيانات تضمن عمله بشكل صحيح وخلوه من أخطاء التسابق أو تلف البيانات عند استدعائه في وقت واحد من مسالك متعددة دون الحاجة لتنسيق خارجي.",
          "ok": true,
          "why": "الكود الآمن مسالكياً (Thread-Safe) يمكن لعدة مسالك تنفيذه في نفس اللحظة بأمان تام ودون الوصول لبيانات مشوهة.",
          "en": "A property of code or data structures guaranteeing correct execution and absence of race conditions or corruption when invoked concurrently by multiple threads."
        },
        {
          "ar": "منع تشغيل أكثر من دالة واحدة في اليوم في نظام التشغيل.",
          "ok": false,
          "why": "تفسير غير منطقي.",
          "en": "Restricting the OS to running one function per day."
        },
        {
          "ar": "تشفير جميع النصوص باللغة الصينية القديمة.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "Encrypting all strings into ancient Chinese."
        }
      ],
      "tip": "وقفة امتحانية: لتحقيق Thread Safety: استخدم البيانات غير القابلة للتعديل (Immutable State)، أو آليات التزامن (lock, Interlocked, Concurrent Collections)."
    },
    {
      "n": 280,
      "type": "mcq",
      "ref": "L7-S029",
      "q_ar": "ما هي القاعدة المعمارية الذهبية الأولى لتجنب حدوث الجمود المميت (Deadlock) عند الحاجة لحجز أكثر من قفل واحد؟",
      "q_en": "What is the primary golden architectural rule to prevent Deadlocks when acquiring multiple locks?",
      "opts": [
        {
          "ar": "حجز الأقفال بترتيب عشوائي في كل مسلك لاختبار ذكاء المعالج.",
          "ok": false,
          "why": "الترتيب العشوائي هو السبب المباشر لحدوث الـ Deadlocks.",
          "en": "Acquiring locks in randomized order across threads."
        },
        {
          "ar": "الالتزام الصارم بترتيب موحد ومتسق عالمياً للحصول على الأقفال (Consistent Lock Ordering) عبر كافة مسالك الكود في المشروع.",
          "ok": true,
          "why": "إذا اتفقت كافة المسالك على حجز القفل 1 أولاً ثم القفل 2 دائماً، يستحيل حدوث انتظار دائري (Circular Wait) ويختفي الـ Deadlock نهائياً.",
          "en": "Strict adherence to a globally consistent lock acquisition order across all threads in the entire project codebase."
        },
        {
          "ar": "إلغاء كافة قواعد البيانات واستخدام الورق والقلم.",
          "ok": false,
          "why": "حل هزلي وغير تقني.",
          "en": "Discarding databases in favor of pen and paper."
        },
        {
          "ar": "حذف حزمة .NET وتثبيت نظام أندرويد.",
          "ok": false,
          "why": "لا علاقة له بحل معضلة التزامن.",
          "en": "Removing .NET and installing Android."
        }
      ],
      "tip": "وقفة امتحانية: قاعدة كوفمان للوقاية من Deadlock: 'Always acquire locks in the exact same order!' (إذا كان Lock A ثم Lock B، فليكن ذلك في كافة الدوال بلا شذوذ)."
    },
    {
      "n": 281,
      "type": "mcq",
      "ref": "L7-S032",
      "q_ar": "ما هي الميزة الكبرى لاستخدام مكتبة القنوات (`System.Threading.Channels`) في نمط المنتج والمستهلك (Producer-Consumer) مقارنة بالأقفال اليدوية؟",
      "q_en": "What is the primary advantage of using `System.Threading.Channels` in Producer-Consumer architectures over manual locks?",
      "opts": [
        {
          "ar": "أنها توفر طابور بيانات فائق الأداء غير معياري ومتزامن تماماً (Async-friendly) يدعم التراجع بالضغط (Backpressure) دون تجميد المسالك أو استهلاك الذاكرة في انتظار العناصر.",
          "ok": true,
          "why": "قنوات Channels مبنية من الأساس لتدعم `await channel.Reader.ReadAsync()`، فلا يجمد المسلك المستهلك إذا كان الطابور فارغاً بل ينتظر بطريقة غير معيقة نهائياً.",
          "en": "It delivers high-throughput, async-native Producer-Consumer queues with built-in backpressure without blocking threads or spinning memory."
        },
        {
          "ar": "أنها تتيح مشاهدة القنوات الفضائية المشفرة مجاناً في تطبيق C#.",
          "ok": false,
          "why": "Channels هيكل برمجي لنقل البيانات بين المسالك وليس قنوات تلفزيونية.",
          "en": "It decodes encrypted satellite TV channels inside C#."
        },
        {
          "ar": "أنها تحظر إضافة أكثر من 3 عناصر في الشهر.",
          "ok": false,
          "why": "القنوات تتحمل ملايين الرسائل في الثانية.",
          "en": "It limits data insertion to 3 items per month."
        },
        {
          "ar": "أنها تعمل فقط بلغة PHP.",
          "ok": false,
          "why": "مكتبة قياسية مطورة في نواة .NET Core.",
          "en": "It works exclusively in PHP."
        }
      ],
      "tip": "وقفة امتحانية: للمهندسين المتقدمين: `System.Threading.Channels` هي البديل المعاصر الأمثل لـ `BlockingCollection` لتمرير الرسائل بين المسالك بأسلوب async نظيف."
    },
    {
      "n": 282,
      "type": "mcq",
      "ref": "L7-S036",
      "q_ar": "في الكود التالي: `object obj = 42; int x = (int)obj;`، ما هي العمليتان اللتان حدثتا على التوالي؟",
      "q_en": "In the code: `object obj = 42; int x = (int)obj;`, what two operations occurred sequentially?",
      "opts": [
        {
          "ar": "تشفير ثم فك تشفير.",
          "ok": false,
          "why": "هذه عمليات إدارة ذاكرة وأنواع وليست تشفيراً رياضياً.",
          "en": "Encryption followed by decryption."
        },
        {
          "ar": "السطر الأول أجرى عملية تغليف (Boxing)، والسطر الثاني أجرى عملية فك تغليف (Unboxing).",
          "ok": true,
          "why": "إسناد int إلى object يتطلب نقل القيمة لـ Heap وتغليفها (Boxing)، والتحويل الصريح العكسي يستخرج القيمة (Unboxing).",
          "en": "First line performed Boxing, and second line performed Unboxing."
        },
        {
          "ar": "حذف القيمة 42 من الذاكرة تماماً.",
          "ok": false,
          "why": "القيمة خزنت واسترجعت ولم تحذف.",
          "en": "Erasing 42 entirely from memory."
        },
        {
          "ar": "إنشاء جدول جديد في قاعدة البيانات.",
          "ok": false,
          "why": "كود ذاكرة محلي لا يتصل بقواعد بيانات.",
          "en": "Creating a new database table."
        }
      ],
      "tip": "وقفة امتحانية: فحص الكود: تحويل Value Type إلى Reference Type = Boxing (يحدث حجز في Heap). تحويل Reference Type إلى Value Type = Unboxing."
    },
    {
      "n": 283,
      "type": "mcq",
      "ref": "L7-S040",
      "q_ar": "ما هو الفرق بين استخدام دالة `Dispose()` التابعة لـ `IDisposable` واستدعاء المصفي النهائي (Finalizer / Destructor) في C#؟",
      "q_en": "What is the difference between invoking `Dispose()` via `IDisposable` versus the Finalizer (`~MyClass()`) in C#?",
      "opts": [
        {
          "ar": "`Dispose()` يتم استدعاؤه فورياً وبشكل محدد وحتمي (Deterministic) بواسطة المبرمج أو كتلة `using`، بينما الـ Finalizer يستدعيه جامع القمامة في وقت مجهول وغير حتمي (Non-deterministic) مما يسبب تأخير تحرير الموارد وتكلفة تنظيف مضاعفة.",
          "ok": true,
          "why": "الـ Finalizer آلية أمان أخيرة بطيئة تجبر الكائن على النجاة لدورة GC ثانية في طابور الـ Finalization Queue، ولذا ينصح بالاعتماد على Dispose واستدعاء `GC.SuppressFinalize(this)`.",
          "en": "`Dispose()` is invoked deterministically and immediately by the developer via `using`, whereas the Finalizer is invoked non-deterministically by GC later, delaying cleanup and incurring double collection cost."
        },
        {
          "ar": "المصفي النهائي يعمل أسرع من Dispose بمليون مرة.",
          "ok": false,
          "why": "المصفي النهائي أبطأ بكثير ويؤخر تحرير الذاكرة لدورة إضافية.",
          "en": "Finalizers run a million times faster than Dispose."
        },
        {
          "ar": "`Dispose()` مخصص فقط للمتغيرات النصية، والمصفي للأرقام.",
          "ok": false,
          "why": "لا علاقة له بنوع البيانات النصية أو الرقمية.",
          "en": "`Dispose()` is for strings only and finalizer for numbers."
        },
        {
          "ar": "كلاهما متطابقان تماماً ويستدعيان في نفس الميكروثانية.",
          "ok": false,
          "why": "فارق جوهري بين التحرير الحتمي والفوري والتحرير غير الحتمي المتأخر.",
          "en": "Both are completely identical and execute simultaneously."
        }
      ],
      "tip": "وقفة امتحانية: Deterministic vs Non-Deterministic: `Dispose()` = تحرير حتمي وفوري للموارد. Finalizer = تحرير غير حتمي يتأخر حتى زيارة جامع القمامة."
    },
    {
      "n": 284,
      "type": "mcq",
      "ref": "L7-S045",
      "q_ar": "لماذا يُفضل استخدام `StringBuilder` بدلاً من دمج النصوص المتكرر بعلامة `+` داخل الحلقات التكرارية الضخمة؟",
      "q_en": "Why is using `StringBuilder` preferred over repeated string concatenation with `+` inside massive loops?",
      "opts": [
        {
          "ar": "لأن النصوص في C# غير قابلة للتعديل (Immutable)، فدمج النصوص في كل دورة حلقة ينشئ كائناً نصياً جديداً كاملاً في الـ Heap، بينما `StringBuilder` يمتلك ذاكرة عازلة داخلية قابلة للتعديل دون حجز نصوص متكررة.",
          "ok": true,
          "why": "حلقة بـ 10,000 دورة دمج بـ `+` تنشئ 10,000 كائن نصي مهمل في الـ Heap، بينما StringBuilder يعدل نفس الذاكرة العازلة بكفاءة قصوى.",
          "en": "Because C# strings are immutable; concatenating in loops allocates a brand-new string on the Heap on every iteration, whereas `StringBuilder` modifies an internal buffer in-place without allocations."
        },
        {
          "ar": "لأن علامة `+` مخصصة لجمع الأعداد فقط وتفشل في معالجة الحروف.",
          "ok": false,
          "why": "علامة `+` تدعم دمج النصوص في C# لكنها غير كفؤة في التكرار الضخم.",
          "en": "Because `+` only works on numbers and fails on characters."
        },
        {
          "ar": "لأن `StringBuilder` يقوم بترجمة الكلمات للغة الفرنسية تلقائياً.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "Because StringBuilder translates text to French."
        },
        {
          "ar": "لأن نصوص `StringBuilder` لا تستهلك أي مساحة في الذاكرة إطلاقاً.",
          "ok": false,
          "why": "تستهلك مساحة الذاكرة العازلة المخصصة لها فقط دون فائض مهدر.",
          "en": "Because StringBuilder consumes zero memory."
        }
      ],
      "tip": "وقفة امتحانية: مبدأ لا ينسى: Strings are Immutable (النصوص ثابتة لا تتغير)؛ أي تعديل ينشئ نسخة جديدة، ولتجنب إرهاق الـ Heap استخدم `StringBuilder`."
    },
    {
      "n": 285,
      "type": "mcq",
      "ref": "L7-S012",
      "q_ar": "عند تنفيذ عدة مهام عبر `Task.WhenAll` وحدثت استثناءات (Exceptions) في أكثر من مهمة في نفس الوقت، كيف يتعامل كائن الـ Task مع هذه الأخطاء؟",
      "q_en": "When executing multiple tasks via `Task.WhenAll` and multiple tasks throw exceptions concurrently, how does the resulting Task handle these errors?",
      "opts": [
        {
          "ar": "يقوم بحذف كافة الأخطاء وتجاهلها تماماً واعتبار العملية ناجحة.",
          "ok": false,
          "why": "لا يمكن تجاهل الأخطاء البرمجية في مهام TPL.",
          "en": "It silently ignores all exceptions and considers it successful."
        },
        {
          "ar": "يقوم بجمع كافة الاستثناءات المرتكبة من المهام الفاشلة وتغليفها داخل استثناء مجمع واحد من نوع `AggregateException`، بحيث يمكن الوصول إليها جميعاً عبر خاصية `InnerExceptions`.",
          "ok": true,
          "why": "ميزة WhenAll أنه لا يكتفي بالتقاط أول خطأ فقط، بل يحفظ كافة استثناءات المهام الفاشلة في مصفوفة InnerExceptions داخل AggregateException.",
          "en": "It aggregates all thrown exceptions into a single `AggregateException`, accessible via its `InnerExceptions` collection."
        },
        {
          "ar": "يقوم بإيقاف تشغيل الخادم الفيزيائي فصلاً للأمان.",
          "ok": false,
          "why": "هذا استثناء برمجي يعالج في الكود ولا يغلق الخادم فيزيائياً.",
          "en": "It powers off the physical server for safety."
        },
        {
          "ar": "يقوم بإعادة تشغيل البرنامج من السطر رقم 1.",
          "ok": false,
          "why": "مسار الاستثناء يتبع قواعد try-catch العادية.",
          "en": "It restarts the application from line 1."
        }
      ],
      "tip": "وقفة امتحانية: في مهام TPL: استثناءات المهام المتعددة تُجمع دائماً داخل: `AggregateException`؛ ويتم فحصها بواسطة حلقة تكرارية على `ex.InnerExceptions`."
    },
    {
      "n": 286,
      "type": "mcq",
      "ref": "L8-S005",
      "q_ar": "ما هو التعريف المعماري الدقيق لمفهوم خطاف الويب (Webhook) مقارنة بالـ API التقليدي؟",
      "q_en": "What is the precise architectural definition of a Webhook compared to a traditional API?",
      "opts": [
        {
          "ar": "بروتوكول لتوصيل الأسلاك الكهربائية في لوحة الأم للخادم.",
          "ok": false,
          "why": "مفهوم برمجي شبكي في طبقة التطبيقات وليس عتاداً كهربائياً.",
          "en": "A protocol for connecting physical power lines on the motherboard."
        },
        {
          "ar": "نقطة نهاية HTTP (Callback) يقوم الخادم الخارجي بالاتصال بها وإرسال البيانات إليها فور وقوع حدث معين (Push Model)، بدلاً من قيام العميل بالاستعلام المتكرر (Polling).",
          "ok": true,
          "why": "الـ Webhook هو واجهة برمجة عكسية (Reverse API)؛ فبدلاً من أن تسأل الخادم هل هناك جديد، الخادم هو من يرسل لك إشعاراً فور وقوع الحدث.",
          "en": "An HTTP endpoint (Callback) invoked by an external server to push data immediately when an event occurs (Push Model), replacing repetitive client polling."
        },
        {
          "ar": "برنامج لحفظ لقطات الشاشة كملفات صور على القرص الصلب.",
          "ok": false,
          "why": "لا علاقة له بالتقاط الصور.",
          "en": "A utility for saving screenshots to the hard drive."
        },
        {
          "ar": "قاعدة بيانات تقوم بحذف البيانات بعد 3 ثوانٍ من وصولها.",
          "ok": false,
          "why": "الـ Webhook آلية اتصال شبكي وليس نظام قاعدة بيانات مؤقتة.",
          "en": "A database that wipes records 3 seconds after arrival."
        }
      ],
      "tip": "وقفة امتحانية: فكرة الـ Webhook الجوهرية: Event-Driven Push (الدفع المعتمد على الأحداث) بدلاً من استنزاف الشبكة بالاستعلام الدوري (Polling)."
    },
    {
      "n": 287,
      "type": "mcq",
      "ref": "L8-S006",
      "q_ar": "في نقطة نهاية Webhook مبنية بـ ASP.NET Core لاستقبال رسائل واتساب، ما هو نوع فعل HTTP المستخدم لاستقبال البيانات من شركة Meta؟",
      "q_en": "In an ASP.NET Core Webhook endpoint designed to receive WhatsApp messages, which HTTP verb is used to accept data payloads from Meta?",
      "opts": [
        {
          "ar": "فعل `GET` فقط.",
          "ok": false,
          "why": "فعل GET يستخدم عادة في خطوة التحقق الأولية (Webhook Verification Challenge) فقط وليس لنقل حمولات الرسائل.",
          "en": "`GET` verb only."
        },
        {
          "ar": "فعل `POST`، حيث ترسل Meta حمولة الرسالة ككائن JSON في جسم الطلب (Request Body).",
          "ok": true,
          "why": "الأحداث وإشعارات الرسائل ترسل دائماً عبر HTTP POST لأنها تحمل بيانات الحدث في الـ Body.",
          "en": "`POST` verb, where Meta transmits the message payload formatted as JSON inside the request body."
        },
        {
          "ar": "فعل `DELETE` لحذف الرسالة من هاتف المستخدم.",
          "ok": false,
          "why": "الخادم يستقبل رسالة جديدة ولا يحذف شيئاً من هاتف العميل.",
          "en": "`DELETE` verb to wipe messages off the client phone."
        },
        {
          "ar": "فعل `TRACE` المخصص لشبكات الاتصال القديمة.",
          "ok": false,
          "why": "TRACE فعل تشخيصي ونادراً ما يستخدم ومحمي أمنياً.",
          "en": "`TRACE` verb for legacy diagnostics."
        }
      ],
      "tip": "وقفة امتحانية: في Webhook واتساب: `GET` للتحقق من ملكية الـ URL أول مرة (Verification Token)، و `POST` لاستقبال كافة الرسائل والأحداث الحية."
    },
    {
      "n": 288,
      "type": "mcq",
      "ref": "L8-S007",
      "q_ar": "كيف يتأكد خادم الـ Webhook من أن طلب الـ POST الوارد قادم فعلاً من شركة موثوقة (مثل Meta أو Stripe) وليس من قراصنة ينتحلون صفتهم؟",
      "q_en": "How does a Webhook server verify that an incoming POST request genuinely originates from a trusted provider (like Meta or Stripe) and not an attacker?",
      "opts": [
        {
          "ar": "عن طريق التحقق من التوقيع الرقمي للترويسة (مثل `X-Hub-Signature-256`) المحسوب باستخدام مفتاح سري مشترك (App Secret) وخوارزمية HMAC-SHA256.",
          "ok": true,
          "why": "المزود يشفر جسم الطلب بالمفتاح السري المشترك ويرسله في الترويسة، ويقوم السيرفر بإعادة حسابه للتأكد من مصدر الرسالة وسلامتها.",
          "en": "By verifying the cryptographic signature header (e.g. `X-Hub-Signature-256`) computed using a shared App Secret and HMAC-SHA256."
        },
        {
          "ar": "بالاتصال هاتفياً بالدعم الفني لشركة Meta عند كل طلب.",
          "ok": false,
          "why": "حل مستحيل برمجياً وعملياً.",
          "en": "By telephoning Meta customer support on every request."
        },
        {
          "ar": "بالتأكد من أن الرسالة تحتوي على كلمة 'مرحباً' في البداية.",
          "ok": false,
          "why": "النصوص لا تثبت هوية المصدر أمنياً.",
          "en": "By checking if the message begins with 'Hello'."
        },
        {
          "ar": "عبر تغيير رقم منفذ السيرفر في كل ثانية.",
          "ok": false,
          "why": "غير صحيح ويعطل عمل خوادم الويب.",
          "en": "By altering server port numbers every second."
        }
      ],
      "tip": "وقفة امتحانية: أمان الـ Webhook يعتمد حتماً على التحقق من توقيع HMAC المرفق في الـ Header لمنع هجمات التزييف (Spoofing) والتلاعب بالبيانات."
    },
    {
      "n": 289,
      "type": "mcq",
      "ref": "L8-S008",
      "q_ar": "ما هو التشبيه الواقعي الدقيق الذي يوضح الفارق المعماري بين الـ API والـ Webhook؟",
      "q_en": "What is the exact real-world analogy illustrating the architectural difference between an API and a Webhook?",
      "opts": [
        {
          "ar": "الـ API والـ Webhook متطابقان تماماً مثل لونين لنفس القلم.",
          "ok": false,
          "why": "هناك فارق جذري في اتجاه تدفق المبادرة.",
          "en": "API and Webhook are identical like two colors of the same pen."
        },
        {
          "ar": "الـ API مثل ذهابك لصندوق البريد كل 5 دقائق لتتفحص هل وصلت رسالة (Polling)، بينما الـ Webhook مثل وصول ساعي البريد ورنين جرس بابك فور وصول الرسالة (Push Notification).",
          "ok": true,
          "why": "استعارة دقيقة: Polling يهدر وقتك بالذهاب المتكرر، بينما Webhook يدفع الإشعار إليك فور وقوع الحدث دون أي هدر.",
          "en": "API is like walking to your mailbox every 5 minutes to check for mail (Polling), while Webhook is like the courier ringing your doorbell the instant a letter arrives (Push)."
        },
        {
          "ar": "الـ API مخصص للقطارات والـ Webhook للطائرات.",
          "ok": false,
          "why": "تشبيه هزلي وغير تقني.",
          "en": "API is for trains and Webhook for airplanes."
        },
        {
          "ar": "الـ API يعمل في النهار فقط والـ Webhook في الليل.",
          "ok": false,
          "why": "كلاهما يعملان على مدار الساعة 24/7.",
          "en": "API operates in daytime only and Webhook at night."
        }
      ],
      "tip": "وقفة امتحانية: المقارنة الكلاسيكية: API = نموذج السحب والطلب الدوري (Pull / Polling). Webhook = نموذج الدفع الفوري المبني على الحدث (Event Push)."
    },
    {
      "n": 290,
      "type": "mcq",
      "ref": "L8-S010",
      "q_ar": "لماذا تفشل البرمجة التقليدية القائمة على مطابقة الكلمات المفتاحية (`if text.Contains(...)`) في بناء روبوتات خدمة عملاء ذكية؟",
      "q_en": "Why does traditional keyword-matching programming (`if text.Contains(...)`) fail in building intelligent customer service bots?",
      "opts": [
        {
          "ar": "لأن الحواسيب لا تستطيع حفظ أكثر من 10 كلمات في الذاكرة.",
          "ok": false,
          "why": "الحواسيب تحفظ مليارات الكلمات بسهولة.",
          "en": "Because computers cannot store more than 10 words in RAM."
        },
        {
          "ar": "بسبب مرونة وتنوع اللغة الطبيعية، تعدد المترادفات، الأخطاء الإملائية، وتغير صياغات السؤال وسياقه؛ مما يجعل تغطية كافة الاحتمالات بجمل `if` أمراً مستحيلاً هندسياً.",
          "ok": true,
          "why": "العميل قد يقول: 'كم حق التلفون؟' أو 'سعره كام؟' أو 'تكلفة الشراء' مع أخطاء إملائية وسياقات مختلفة، فينهار منطق `if-else` الهش.",
          "en": "Due to natural language complexity, rich synonyms, typos, and nuanced phrasing; making rule-based `if` branching impossible to maintain."
        },
        {
          "ar": "لأن لغة C# تمنع استخدام جمل `if` في تطبيقات الويب.",
          "ok": false,
          "why": "جمل `if` أساسية في كافة لغات البرمجة.",
          "en": "Because C# bans `if` statements in web apps."
        },
        {
          "ar": "لأن واتساب يحظر إرسال الرسائل التي تحتوي على كلمات عربية.",
          "ok": false,
          "why": "واتساب يدعم كافة لغات العالم.",
          "en": "Because WhatsApp prohibits Arabic text."
        }
      ],
      "tip": "وقفة امتحانية: عيوب الأنظمة القائمة على القواعد (Rule-Based Systems): الهشاشة (Brittleness)، الفشل أمام المترادفات والأخطاء الإملائية، واستحالة التوسع."
    },
    {
      "n": 291,
      "type": "mcq",
      "ref": "L8-S011",
      "q_ar": "لماذا تعجز النماذج اللغوية العامة سابقة التدريب (مثل ChatGPT أو Claude) عن الإجابة الصحيحة على استفسارات شركة محددة دون تزويدها ببيانات إضافية؟",
      "q_en": "Why do off-the-shelf pretrained Foundation LLMs (like ChatGPT or Claude) fail to accurately answer specific enterprise inquiries without augmentation?",
      "opts": [
        {
          "ar": "لأن النماذج اللغوية لا تعرف قواعد اللغة العربية.",
          "ok": false,
          "why": "النماذج الحديثة تتقن اللغة العربية بكفاءة عالية.",
          "en": "Because LLMs lack knowledge of Arabic grammar."
        },
        {
          "ar": "لأنها تدربت على بيانات الإنترنت العامة فقط، ولا تمتلك أي معرفة ببيانات الشركة الخاصة (الأسعار الحالية، المخزون الحي، سياسات الإرجاع الداخلية)، مما يجعلها تؤلف إجابات كاذبة (Hallucination).",
          "ok": true,
          "why": "النماذج العامة لا تملك وصولاً لقواعد بيانات الشركة الخاصة، وإذا سُئلت عن سعر داخلي ستولد سعراً وهمياً (هلوسة).",
          "en": "Because they were trained solely on public internet corpora and lack private enterprise knowledge (live inventory, prices, internal policies), triggering Hallucinations."
        },
        {
          "ar": "لأن شركة OpenAI تحظر الإجابة على الأسئلة التجارية.",
          "ok": false,
          "why": "النماذج صممت خصيصاً لمساعدة الشركات والأنشطة التجارية.",
          "en": "Because OpenAI blocks commercial queries."
        },
        {
          "ar": "لأن بطاقات الشاشة في السيرفر تتوقف عن العمل عند استقبال أسئلة عن المتاجر.",
          "ok": false,
          "why": "غير صحيح إطلاقاً.",
          "en": "Because server GPUs halt on e-commerce questions."
        }
      ],
      "tip": "وقفة امتحانية: معضلة الـ LLM المجرد: نقص المعرفة المؤسسية الخاصة (Knowledge Gap) + الهلوسة (Hallucination) عند التخمين."
    },
    {
      "n": 292,
      "type": "mcq",
      "ref": "L8-S012",
      "q_ar": "لماذا يُعتبر نمط الـ RAG خياراً معمارياً متفوقاً جداً على إعادة تدريب أو ضبط النموذج اللغوي (Fine-Tuning) لبيانات الشركة المتغيرة باستمرار؟",
      "q_en": "Why is the RAG pattern considered architecturally far superior to retraining or Fine-Tuning an LLM for continuously changing enterprise data?",
      "opts": [
        {
          "ar": "لأن إعادة التدريب رخيصة جداً وتستغرق 3 ثوانٍ فقط.",
          "ok": false,
          "why": "إعادة التدريب والضبط باهظة التكلفة وتستغرق أياماً وأسابيع وتتطلب عتاداً ضخماً.",
          "en": "Because retraining is ultra-cheap taking only 3 seconds."
        },
        {
          "ar": "لأن RAG يتيح تحديث البيانات فورياً بالمللي ثانية دون أي كلفة تدريب، ويمنع الهلوسة عبر تقييد الإجابة بالسياق المسترجع مع توثيق المصادر بدقة.",
          "ok": true,
          "why": "إذا تغير سعر منتج، يكفي تعديل سجله في قاعدة المعرفة ليقرأه RAG فوراً، بينما Fine-Tuning يتطلب دورة تدريب جديدة بالكامل ولا يضمن استرجاع الأرقام بدقة.",
          "en": "Because RAG enables instantaneous, zero-training updates to knowledge, suppresses hallucinations by grounding responses on retrieved context, and provides verifiable citations."
        },
        {
          "ar": "لأن الـ Fine-Tuning مخصص لبرمجة الطابعات فقط.",
          "ok": false,
          "why": "Fine-Tuning تقنية تعلم آلي لتعديل أوزان النماذج اللغوية.",
          "en": "Because Fine-Tuning is exclusively for printers."
        },
        {
          "ar": "لأن RAG يلغي الحاجة لاستخدام نماذج الذكاء الاصطناعي نهائياً.",
          "ok": false,
          "why": "RAG يستخدم الـ LLM في الخطوة الأخيرة لتوليد الصياغة.",
          "en": "Because RAG eliminates LLMs completely."
        }
      ],
      "tip": "وقفة امتحانية: مقارنة حاسمة: Fine-Tuning = تعديل أسلوب الكلام وسلوك النموذج (Style/Form). RAG = تزويد النموذج بالمعلومات والحقائق الدقيقة المحدثة (Facts/Knowledge)."
    },
    {
      "n": 293,
      "type": "mcq",
      "ref": "L8-S013",
      "q_ar": "ما هي الخطوات الثلاث الأساسية التي تتكون منها معمارية التوليد المعزز بالاسترجاع (RAG - Retrieval-Augmented Generation)؟",
      "q_en": "What are the three fundamental stages comprising the Retrieval-Augmented Generation (RAG) architecture?",
      "opts": [
        {
          "ar": "التثبيت (Install)، الفحص (Scan)، والتنسيق (Format).",
          "ok": false,
          "why": "مصطلحات صيانة قرص صلب وليست مراحل RAG.",
          "en": "Install, Scan, and Format."
        },
        {
          "ar": "1) الاسترجاع (Retrieval) للفقرات ذات الصلة من قاعدة المعرفة، 2) التعزيز (Augmentation) لطلب المستخدم بدمج السياق، 3) التوليد (Generation) للإجابة بواسطة النموذج اللغوي.",
          "ok": true,
          "why": "هذا هو التفسير الحرفي للاختصار R-A-G ومسار تدفق بياناته المعماري المعتمد.",
          "en": "1) Retrieval of relevant context chunks from knowledge base, 2) Augmentation of the user prompt with context, 3) Generation of the grounded response via LLM."
        },
        {
          "ar": "التشفير (Encrypt)، فك التشفير (Decrypt)، والحذف (Delete).",
          "ok": false,
          "why": "عمليات أمن بيانات.",
          "en": "Encrypt, Decrypt, and Delete."
        },
        {
          "ar": "التحميل (Download)، الضغط (Compress)، والرفع (Upload).",
          "ok": false,
          "why": "عمليات نقل ملفات عادية.",
          "en": "Download, Compress, and Upload."
        }
      ],
      "tip": "وقفة امتحانية: احفظ أركان RAG الثلاثة: 1) Retrieval (البحث الدلالي عن النصوص)، 2) Augmentation (حشو السياق في الـ Prompt)، 3) Generation (صياغة الإجابة بـ LLM)."
    },
    {
      "n": 294,
      "type": "mcq",
      "ref": "L8-S016",
      "q_ar": "ما هي عملية التقطيع (Chunking) في معمارية RAG ولماذا تُعد خطوة إلزامية لمعالجة مستندات الشركة؟",
      "q_en": "What is the Chunking process in RAG architecture, and why is it a mandatory preprocessing step for enterprise documents?",
      "opts": [
        {
          "ar": "تقطيع الكابلات التالفة في مركز البيانات واستبدالها.",
          "ok": false,
          "why": "معنى لغوي فيزيائي خاطئ تماماً.",
          "en": "Cutting damaged cables in the datacenter."
        },
        {
          "ar": "تقسيم المستندات والكتيبات الضخمة إلى فقرات نصية صغيرة ومترابطة دلالياً (مثل 200 إلى 500 رمز مع تداخل جزئي)، لتجاوز قيود نافذة السياق ولرفع دقة البحث واسترجاع المعلومات المفيدة حصراً.",
          "ok": true,
          "why": "تضمين مستند كامل من 100 صفحة في الـ Prompt يرهق الذاكرة ويهدر التكلفة ويشتت انتباه النموذج؛ والتقطيع يسترجع فقط الفقرة المحددة التي تجيب على السؤال.",
          "en": "Splitting massive documents into smaller, semantically coherent passages (e.g. 200-500 tokens with overlap) to fit LLM context limits and maximize vector retrieval precision."
        },
        {
          "ar": "حذف كافة الأرقام وعلامات الترقيم من النصوص.",
          "ok": false,
          "why": "الأرقام والترقيم عناصر حاسمة في دقة المعنى.",
          "en": "Stripping all numbers and punctuation marks from text."
        },
        {
          "ar": "تحويل ملفات PDF إلى ملفات صوتية بصيغة MP3.",
          "ok": false,
          "why": "عملية تحويل صوتي وليست تقطيع نصوص RAG.",
          "en": "Converting PDF manuals into MP3 audio tracks."
        }
      ],
      "tip": "وقفة امتحانية: استراتيجية التقطيع (Chunking Strategy): تعتمد على حجم الفقرة (Chunk Size) ومقدار التداخل بينها (Chunk Overlap) للحفاظ على السياق اللغوي متصلاً."
    },
    {
      "n": 295,
      "type": "mcq",
      "ref": "L8-S018",
      "q_ar": "ما هو التضمين الشعاعي (Vector Embedding) وما هي السمة الرياضية الفريدة التي يقدمها للنصوص؟",
      "q_en": "What is a Vector Embedding, and what unique mathematical property does it impart to text?",
      "opts": [
        {
          "ar": "حفظ النص كملف صورة نقطية بالأبيض والأسود.",
          "ok": false,
          "why": "التضمين متجهات رياضية رقمية وليس صوراً.",
          "en": "Saving text as a monochrome bitmap image."
        },
        {
          "ar": "تمثيل رياضي مكثف يحول الكلمات والفقرات إلى متجهات أرقام حقيقية (مثل 1536 بعداً)، بحيث تتوضع النصوص المتشابهة في المعنى بالقرب من بعضها البعض في الفضاء الرياضي متعدد الأبعاد.",
          "ok": true,
          "why": "التضمين يعكس المعنى الدلالي؛ فالعبارتان 'سياسة الاسترجاع' و 'شروط استرداد الأموال' ستكونان متقاربتين رياضياً جداً رغم اختلاف كلماتهما تماماً.",
          "en": "A dense mathematical representation mapping text into high-dimensional real vectors (e.g. 1536 dimensions) where semantically similar texts cluster closely together in vector space."
        },
        {
          "ar": "حساب عدد الحروف الأبجدية في الصفحة وقسمتها على 2.",
          "ok": false,
          "why": "إحصاء بسيط وليس تضميناً شعاعياً عميقاً.",
          "en": "Counting total alphabets on the page and dividing by 2."
        },
        {
          "ar": "تشفير النص بحيث لا يمكن استرجاعه للأبد.",
          "ok": false,
          "why": "الغرض هو البحث الدلالي وليس التعمية المطلقة.",
          "en": "One-way hashing so text is lost permanently."
        }
      ],
      "tip": "وقفة امتحانية: التضمين الشعاعي (Vector Embedding) ينقل البحث من المطابقة الحرفية (Keyword Search) إلى المطابقة الدلالية والفكرية (Semantic Search)."
    },
    {
      "n": 296,
      "type": "mcq",
      "ref": "L8-S020",
      "q_ar": "ما هو المقياس الرياضي الأكثر شيوعاً في قواعد البيانات الشعاعية (Vector Databases) لقياس التشابه الدلالي بين متجه استفسار المستخدم ومتجهات المستندات؟",
      "q_en": "What is the most widely adopted mathematical metric in Vector Databases to measure semantic similarity between a user query vector and document vectors?",
      "opts": [
        {
          "ar": "حاصل جمع أرقام الهواتف المحمولة للعملاء.",
          "ok": false,
          "why": "لا علاقة له بالرياضيات الشعاعية.",
          "en": "Sum of customer mobile phone numbers."
        },
        {
          "ar": "تشابه جيب التمام (Cosine Similarity)، والذي يقيس زاوية الاتجاه بين المتجهين في الفضاء الشعاعي بغض النظر عن طولهما.",
          "ok": true,
          "why": "Cosine Similarity يقيس جيب تمام الزاوية بين المتجهين؛ فإذا كانت الزاوية 0 (جيب التمام = 1) فالمعنى متطابق دلالياً تماماً.",
          "en": "Cosine Similarity, measuring the cosine of the angle between two high-dimensional vectors regardless of their magnitude."
        },
        {
          "ar": "طرح التاريخ الميلادي من التاريخ الهجري.",
          "ok": false,
          "why": "حساب تواريخ وليس قياس متجهات.",
          "en": "Subtracting Gregorian dates from Hijri dates."
        },
        {
          "ar": "التحقق من عدد مرات ورود حرف الألف في الاستعلام.",
          "ok": false,
          "why": "هذا إحصاء حروف تقليدي.",
          "en": "Counting occurrences of the letter 'A'."
        }
      ],
      "tip": "وقفة امتحانية: مقاييس التشابه في Vector Databases: 1) Cosine Similarity (الأكثر انتشاراً)، 2) Dot Product، 3) Euclidean Distance (L2)."
    },
    {
      "n": 297,
      "type": "mcq",
      "ref": "L8-S023",
      "q_ar": "كيف يضمن التوجيه المنهجي الدقيق (Prompt Engineering) حماية روبوت الدعم الفني من تأليف إجابات خاطئة؟",
      "q_en": "How does rigorous Prompt Engineering safeguard customer support bots from hallucinating false answers?",
      "opts": [
        {
          "ar": "بأمر النموذج في النظام التوجيهي (System Prompt): 'أجب حصرياً وبدقة من السياق المرفق فقط؛ وإذا لم تجد الإجابة صراحة فيه، فقل بأدب: أنا لا أعلم ذلك ولا تؤلف من عندك'.",
          "ok": true,
          "why": "وضع قيود صارمة وتحديد سلوك العجز الصريح (Fallback) يقيد انتباه النموذج ويمنعه من اللجوء لمعلوماته العامة غير الموثقة.",
          "en": "By strictly instructing the LLM in the System Prompt: 'Answer strictly using only the provided context; if the answer is not present, politely respond that you do not know and never fabricate'."
        },
        {
          "ar": "بإلغاء اتصال الإنترنت عن خادم الـ API تماماً.",
          "ok": false,
          "why": "الروبوت يحتاج الاتصال لاستدعاء النموذج وإرسال الرد للعميل.",
          "en": "By completely disconnecting the server from the internet."
        },
        {
          "ar": "بإجبار النموذج على كتابة الرد بلغة برمجية فقط.",
          "ok": false,
          "why": "العميل يريد رداً بشرياً طبيعياً وليس كوداً.",
          "en": "By forcing the bot to respond only in code."
        },
        {
          "ar": "بتقليص عدد ساعات عمل الموظفين في الشركة.",
          "ok": false,
          "why": "قرار إداري لا علاقة له بهندسة الأوامر الذكية.",
          "en": "By cutting staff working hours."
        }
      ],
      "tip": "وقفة امتحانية: قاعدة الـ Grounded AI: تقييد النموذج بالنصوص المسترجعة (Grounding on Context) مع توجيه صريح بالاعتراف بعدم المعرفة عند غياب الإجابة."
    },
    {
      "n": 298,
      "type": "mcq",
      "ref": "L8-S027",
      "q_ar": "ما هو العيب المعماري الأكبر للأنظمة الموحدة الضخمة (Monolithic Architecture) عندما ينمو حجم النظام وتتعدد أقسامه؟",
      "q_en": "What is the primary architectural drawback of Monolithic Architecture as systems expand in size and scope?",
      "opts": [
        {
          "ar": "أنها مجانية ومتاحة للجميع بدون ترخيص.",
          "ok": false,
          "why": "طبيعة المعمارية لا ترتبط بنوع الترخيص.",
          "en": "They are free and open without licensing."
        },
        {
          "ar": "نقطة الفشل الواحدة (Single Point of Failure)، شدة الترابط (Tight Coupling)، وصعوبة التوسع المستقل؛ فحيث يؤدي خطأ في جزء بسيط لانهيار التطبيق بالكامل وتتطلب أي ترقية إعادة نشر المنظومة برمتها.",
          "ok": true,
          "why": "في النظام الموحد، إذا تعطل كود الفواتير أو الذكاء الاصطناعي قد ينهار السيرفر بالكامل ويتوقف المتجر بالكامل عن البيع.",
          "en": "Single Point of Failure, tight coupling, and scaling bottlenecks: an error in one component crashes the whole app, and minor updates mandate full redeployments."
        },
        {
          "ar": "أنها لا تعمل إلا على شاشات الهواتف فقط.",
          "ok": false,
          "why": "الأنظمة الموحدة تعمل على كافة أنواع الأجهزة والخوادم.",
          "en": "They run exclusively on smartphone screens."
        },
        {
          "ar": "أنها تمنع المطورين من استخدام لوحة المفاتيح أثناء كتابة الكود.",
          "ok": false,
          "why": "غير صحيح وهزلي.",
          "en": "They forbid developers from typing on keyboards."
        }
      ],
      "tip": "وقفة امتحانية: عيوب المونوليث (Monolith): 1) Single Point of Failure، 2) Deploy All or Nothing، 3) صعوبة تبني تقنيات متعددة (Technology Lock-in)."
    },
    {
      "n": 299,
      "type": "mcq",
      "ref": "L8-S028",
      "q_ar": "ما هو المبدأ الجوهري لمعمارية الخدمات المصغرة (Microservices Architecture)؟",
      "q_en": "What is the core foundational principle of Microservices Architecture?",
      "opts": [
        {
          "ar": "كتابة المشروع بالكامل في ملف نصي واحد لا يتجاوز 10 أسطر.",
          "ok": false,
          "why": "هذا تشويه للبرمجة.",
          "en": "Writing the entire project in a single 10-line text file."
        },
        {
          "ar": "تفكيك النظام إلى مجموعة من الخدمات الصغيرة والمستقلة، المنظمة حول نطاقات أعمال محددة، وقابلة للنشر والتوسع والتطوير بشكل معزول ومستقل.",
          "ok": true,
          "why": "كل خدمة مصغرة تملك كودها وقاعدتها وتعمل كمنظومة قائمة بذاتها، وتتواصل مع الخدمات الأخرى عبر شبكة بروتوكولات قياسية.",
          "en": "Decomposing the system into a suite of small, autonomous services organized around business domains, independently deployable and scalable."
        },
        {
          "ar": "إلزام جميع المبرمجين باستخدام نفس الحاسوب المحمول.",
          "ok": false,
          "why": "لا علاقة له بالأجهزة الشخصية للمطورين.",
          "en": "Forcing all developers to share a single laptop."
        },
        {
          "ar": "حظر استخدام قواعد البيانات نهائياً في كافة الخدمات.",
          "ok": false,
          "why": "الخدمات المصغرة تعتمد على قواعد بيانات خاصة بكل خدمة.",
          "en": "Completely prohibiting databases across all services."
        }
      ],
      "tip": "وقفة امتحانية: سمات الخدمات المصغرة: 1) Loose Coupling (تفكيك الترابط)، 2) Independent Deployability (استقلالية النشر)، 3) Domain-Driven Organization."
    },
    {
      "n": 300,
      "type": "mcq",
      "ref": "L8-S030",
      "q_ar": "ما هو الخطر المعماري الفادح للاعتماد الحصري على الاتصال المتزامن (مثل HTTP/REST المباشر) بين كافة الخدمات المصغرة؟",
      "q_en": "What is the severe architectural hazard of relying exclusively on Synchronous communication (like direct HTTP/REST) between microservices?",
      "opts": [
        {
          "ar": "خطر الانهيار التسلسلي المتعاقب (Cascading Failures) وسلسلة تأخير الاستجابة (Latency Chain)، حيث يؤدي بطء أو تعطل خدمة فرعية إلى تجميد وتوقف كافة الخدمات السابقة التي تنتظرها.",
          "ok": true,
          "why": "إذا اتصلت الخدمة A بالخدمة B التي تتصل بـ C، فإن تعطل C يعطل B ويجمد A، مما يحول الميكروسيرفس إلى نظام موحد موزع فاشل (Distributed Monolith).",
          "en": "Cascading Failures and compounding Latency Chains, where slowness or downtime in a downstream service freezes and crashes all upstream callers awaiting responses."
        },
        {
          "ar": "انخفاض سرعة دوران مروحة تبريد السيرفر.",
          "ok": false,
          "why": "أثر عتادي غير منطقي.",
          "en": "Decreased datacenter fan rotation speed."
        },
        {
          "ar": "تغير ألوان أيقونات الموقع الإلكتروني تلقائياً.",
          "ok": false,
          "why": "لا علاقة له بالواجهات الرسومية.",
          "en": "Automatic mutation of website icon colors."
        },
        {
          "ar": "توقف لغة C# عن دعم الأرقام الزوجية.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "C# dropping support for even numbers."
        }
      ],
      "tip": "وقفة امتحانية: الاتصال المتزامن المباشر (Sync HTTP) بين الخدمات يخلق ترابطاً وثيقاً وانهياراً تسلسلياً (Cascading Failure)؛ والحل المعماري هو: Event-Driven Async."
    },
    {
      "n": 301,
      "type": "mcq",
      "ref": "L8-S034",
      "q_ar": "ما هو الدور المعماري لوسيط الرسائل (Message Broker مثل RabbitMQ أو Apache Kafka) في الأنظمة الموزعة؟",
      "q_en": "What is the architectural role of a Message Broker (like RabbitMQ or Apache Kafka) in distributed systems?",
      "opts": [
        {
          "ar": "يعمل كوسيط غير متزامن ومخزن مؤقت للرسائل والأحداث، مما يفكك الترابط بين المنتج (Producer) والمستهلك (Consumer) ويضمن وصول الرسائل حتى لو كانت الخدمة المستقبلة متوقفة مؤقتاً.",
          "ok": true,
          "why": "المنتج يرمي الرسالة في طابور RabbitMQ وينصرف فوراً، ويتولى الوسيط حفظها وإيصالها للمستهلكين عند جاهزيتهم، مما يحقق استقراراً ومرونة فائقة.",
          "en": "Acts as an asynchronous intermediary and buffer for events, decoupling Producers from Consumers and guaranteeing message delivery even during consumer downtime."
        },
        {
          "ar": "طباعة الرسائل الورقية وإرسالها بالبريد العادي للزبائن.",
          "ok": false,
          "why": "وظيفة مكتبية تقليدية وليست وسيط رسائل رقمي.",
          "en": "Printing hardcopy letters and mailing them to clients."
        },
        {
          "ar": "حذف الرسائل تلقائياً لمنع قراءتها نهائياً.",
          "ok": false,
          "why": "الوسيط يحافظ على الرسائل ويضمن عدم ضياعها.",
          "en": "Deleting messages immediately to prevent reads."
        },
        {
          "ar": "تسريع ألعاب الفيديو على أجهزة البلايستيشن.",
          "ok": false,
          "why": "لا علاقة له بأجهزة الألعاب المنزلية.",
          "en": "Accelerating video game framerates."
        }
      ],
      "tip": "وقفة امتحانية: ميزات Message Broker: 1) Decoupling (تفكيك الاعتمادية)، 2) Temporal Decoupling (العمل دون اشتراط عمل الطرفين في نفس اللحظة)، 3) Buffering."
    },
    {
      "n": 302,
      "type": "mcq",
      "ref": "L8-S036",
      "q_ar": "كيف يساعد وسيط الرسائل (Message Queue) في حماية الخدمات الخلفية من الانهيار أثناء طفرات الطلب المفاجئة (Traffic Spikes)؟",
      "q_en": "How does a Message Queue protect downstream services from crashing during sudden traffic spikes (Load Leveling)?",
      "opts": [
        {
          "ar": "يقوم بحذف 90% من طلبات العملاء فوراً دون معالجتها.",
          "ok": false,
          "why": "حذف طلبات الشراء كارثة تجارية ومالية.",
          "en": "By arbitrarily dropping 90% of user requests."
        },
        {
          "ar": "يعمل كخزان عازل (Buffer / Load Leveling)؛ يستوعب الطوفان الهائل من الرسائل الواردة في الطابور، ويسمح للخدمات باستهلاكها ومعالجتها بوتيرة ثابتة ومستقرة تناسب قدرتها القصوى.",
          "ok": true,
          "why": "نمط تسوية الأحمال (Load Leveling): الطابور يمتص الصدمة، والسيرفر يعالج 50 طلباً في الثانية بهدوء بدلاً من استقبال 5000 طلب دفعة واحدة فينهار المعالج.",
          "en": "Acts as a buffer (Load Leveling); absorbing traffic surges into queues, enabling downstream services to process items at a steady, sustainable rate matching their capacity."
        },
        {
          "ar": "يقوم برفع سرعة المعالج المركزي إلى درجات حرارة خطيرة.",
          "ok": false,
          "why": "الوسيط ينظم التدفق البرمجي ولا يتدخل في كسر سرعة العتاد فيزيائياً.",
          "en": "By overclocking the CPU to dangerous thermal levels."
        },
        {
          "ar": "يغلق المتجر في وجه المشترين حتى ينتهي الشهر.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "By shutting down the store for the rest of the month."
        }
      ],
      "tip": "وقفة امتحانية: مصطلح امتحاني معتمد: 'Queue-Based Load Leveling'؛ امتصاص صدمات المرور الشبكي المفاجئة لحماية الخدمات من الاختناق."
    },
    {
      "n": 303,
      "type": "mcq",
      "ref": "L8-S039",
      "q_ar": "ما هو نمط إعادة المحاولة مع التراجع الأسي والعشوائية (Retry Pattern with Exponential Backoff and Jitter)، ولماذا يُعد إلزامياً في النظم الموزعة؟",
      "q_en": "What is the Retry Pattern with Exponential Backoff and Jitter, and why is it mandatory in distributed systems?",
      "opts": [
        {
          "ar": "إعادة إرسال الطلب الفاشل ملايين المرات في نفس الميكروثانية دون أي توقف.",
          "ok": false,
          "why": "هذا هجوم حجب خدمة ذاتي (Self-DDoS) يدمر الخادم المنهك تماماً.",
          "en": "Resending failed requests millions of times in the same microsecond."
        },
        {
          "ar": "إعادة محاولة تنفيذ الطلبات التي فشلت بأخطاء عابرة (Transient Errors) بعد فترات انتظار متضاعفة (مثل 1 ثانية، ثم 2، ثم 4) مع إضافة ضوضاء زمنية عشوائية (Jitter) لتفادي اصطدام كافة العملاء بالسيرفر في نفس اللحظة.",
          "ok": true,
          "why": "التراجع الأسي يمنح السيرفر وقتاً للتعافي، والـ Jitter يبعثر محاولات آلاف العملاء لمنع مشكلة قطيع الثيران الهائج (Thundering Herd Problem).",
          "en": "Retrying transient network failures after exponentially doubling delays (1s, 2s, 4s) enriched with random Jitter to prevent concurrent client stampedes on recovering servers."
        },
        {
          "ar": "إلغاء الطلب وتحويله إلى ملف PDF يُرسل بالفاكس.",
          "ok": false,
          "why": "لا علاقة له بأنماط مرونة الشبكات.",
          "en": "Converting failed calls into faxed PDF documents."
        },
        {
          "ar": "إعادة تشغيل راوتر الشركة كلما حدث خطأ 404.",
          "ok": false,
          "why": "أخطاء 404 تعني مورد مفقود وإعادة تشغيل الراوتر لا يحلها.",
          "en": "Rebooting the office router on every 404."
        }
      ],
      "tip": "وقفة امتحانية: التراجع الأسي (Exponential Backoff) = مضاعفة وقت الانتظار. العشوائية (Jitter) = كسر التزامن لمنع هجوم الثيران الهائجة (Thundering Herd)."
    },
    {
      "n": 304,
      "type": "mcq",
      "ref": "L8-S040",
      "q_ar": "ما هي الحالات الثلاث التي يديرها نمط قاطع الدائرة (Circuit Breaker Pattern)، وما وظيفة كل حالة؟",
      "q_en": "What are the three operational states managed by the Circuit Breaker Pattern, and what is the role of each?",
      "opts": [
        {
          "ar": "التحميل (Loading)، التنزيل (Downloading)، والانتظار (Idle).",
          "ok": false,
          "why": "حالات شبكات عادية وليست قاطع دائرة.",
          "en": "Loading, Downloading, and Idle."
        },
        {
          "ar": "1) مغلق (Closed): الحالة الطبيعية وتمر الطلبات، 2) مفتوح (Open): عند تجاوز نسبة الفشل عتبة محددة، فيتم قطع الاتصال وتفشل الطلبات فوراً دون إجهاد السيرفر، 3) نصف مفتوح (Half-Open): اختبار السيرفر بعد مهلة ببضعة طلبات تجريبية للتحقق من تعافيه.",
          "ok": true,
          "why": "قاطع الدائرة يمنع النظام من إهدار الموارد على خدمة منهارة (Fail Fast)، ويسمح لها بالتعافي ثم يفحصها تدريجياً في حالة Half-Open.",
          "en": "1) Closed: normal state with traffic flowing, 2) Open: trips after failure thresholds to fail-fast without calling failing service, 3) Half-Open: sends trial probes to check recovery."
        },
        {
          "ar": "النهار، الليل، وفترة الغروب.",
          "ok": false,
          "why": "أوقات زمنية طبيعية لا علاقة لها بالهندسة.",
          "en": "Daytime, Nighttime, and Twilight."
        },
        {
          "ar": "حفظ، تعديل، وحذف.",
          "ok": false,
          "why": "عمليات CRUD في قواعد البيانات.",
          "en": "Create, Read, Update, Delete."
        }
      ],
      "tip": "وقفة امتحانية: حالات Circuit Breaker الثلاث: `Closed` (طبيعي يمرر)، `Open` (منهار يقطع فوراً Fail-Fast)، `Half-Open` (فحص تجريبي للتعافي)."
    },
    {
      "n": 305,
      "type": "mcq",
      "ref": "L8-S042",
      "q_ar": "في المعماريات الموزعة غير المتزامنة، لماذا يُعتبر استخدام مفتاح عدم التكرار (Idempotency Key) أمراً مصيرياً لسلامة البيانات المالية؟",
      "q_en": "In distributed asynchronous architectures, why is using an Idempotency Key crucial for financial data integrity?",
      "opts": [
        {
          "ar": "لأن إعادة محاولات الشبكة (Retries) وتكرار تسليم الرسائل (At-least-once Delivery) قد يؤدي لتكرار خصم المبلغ مرتين إذا لم يكتشف الخادم أن هذا الطلب عولج مسبقاً بنفس المفتاح.",
          "ok": true,
          "why": "إذا انقطع الاتصال لحظة إتمام الدفع، يعيد النظام إرسال الطلب؛ ومفتاح Idempotency يضمن أن الخادم يتعرف على الطلب المكرر ويعيد النتيجة السابقة دون سحب رصيد ثانٍ.",
          "en": "Because network retries and 'At-least-once delivery' can trigger duplicate billing charges unless the server recognizes the unique key and avoids reprocessing."
        },
        {
          "ar": "لأن البنوك ترفض استقبال المبالغ المالية التي تنتهي برقم صفر.",
          "ok": false,
          "why": "تفسير خاطئ وهزلي.",
          "en": "Because banks reject amounts ending with zero."
        },
        {
          "ar": "لتشفير أسماء العملات باللغة اللاتينية القديمة.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "To translate currency codes into Latin."
        },
        {
          "ar": "لحذف حساب العميل فور إتمام أول عملية شراء.",
          "ok": false,
          "why": "غير منطقي تجارياً.",
          "en": "To delete client accounts after the first checkout."
        }
      ],
      "tip": "وقفة امتحانية: في الأنظمة الموزعة: ضمان التسليم يكون على الأقل مرة واحدة (At-least-once delivery)؛ ولتفادي تكرار المعاملات يجب تطبيق: Idempotency Key."
    },
    {
      "n": 306,
      "type": "mcq",
      "ref": "L8-S044",
      "q_ar": "عند استقبال طلب Webhook من جهة خارجية تفرض مهلة رد سريعة (مثل Meta تشترط رداً خلال 3 ثوانٍ) بينما تستغرق معالجة الذكاء الاصطناعي 10 ثوانٍ، ما هو النمط المعماري الصحيح لحل هذه المعضلة؟",
      "q_en": "When a Webhook provider enforces a strict 3-second timeout (like Meta) while AI processing takes 10 seconds, what is the proper architectural pattern to resolve this?",
      "opts": [
        {
          "ar": "إلغاء الذكاء الاصطناعي نهائياً والرد برسالة ثابتة دائماً.",
          "ok": false,
          "why": "هذا إلغاء للمتطلب الوظيفي للنظام الذكي.",
          "en": "Abolishing AI entirely and always returning a static string."
        },
        {
          "ar": "نمط الرد الفوري والمعالجة الخلفية (Background Worker / Immediate Acknowledgment): يعيد الكنترولر استجابة `200 OK` فوراً للمزود خلال 50 مللي ثانية بعد وضع الرسالة في طابور خلفي، ويتكفل عامل خلفي (`IHostedService`) بمعالجة الذكاء الاصطناعي والرد على العميل عبر WhatsApp API لاحقاً.",
          "ok": true,
          "why": "المزود يحتاج فقط للتأكد من استلام الرسالة بنجاح؛ لذا نرد بـ 200 OK سريعاً وننقل المعالجة الثقيلة لطابور وخادم خلفي.",
          "en": "Immediate Acknowledgment & Background Worker: the controller immediately returns `200 OK` in <50ms upon enqueuing the job, while a background worker (`IHostedService`) processes AI and responds via WhatsApp API asynchronously."
        },
        {
          "ar": "إجبار Meta على الانتظار حتى لو استغرقت المعالجة 5 دقائق.",
          "ok": false,
          "why": "Meta ستعتبر الطلب ساقطاً بالمهلة (Timeout) وتعيد إرساله مراراً وتغلق الـ Webhook.",
          "en": "Forcing Meta to wait even if processing takes 5 minutes."
        },
        {
          "ar": "إيقاف تشغيل خادم ASP.NET Core وإعادة تشغيله يدوياً.",
          "ok": false,
          "why": "لا يحل مشكلة المهلة بل يفاقمها.",
          "en": "Manually rebooting the ASP.NET Core server."
        }
      ],
      "tip": "وقفة امتحانية: قاعدة الـ Webhook الذهبية: 'Acknowledge immediately, process asynchronously!' (أرجع 200 OK فوراً، ونفذ الذكاء الاصطناعي في Background Worker)."
    },
    {
      "n": 307,
      "type": "mcq",
      "ref": "L8-S046",
      "q_ar": "لماذا يحظر نمط 'قاعدة بيانات لكل خدمة' (Database-per-Service) في معمارية الميكروسيرفس مشاركة قاعدة بيانات واحدة بين عدة خدمات مختلفة؟",
      "q_en": "Why does the 'Database-per-Service' pattern in microservices strictly forbid sharing a single central database across multiple distinct services?",
      "opts": [
        {
          "ar": "لأن مشاركة قاعدة البيانات تخلق ترابطاً خفياً وثيقاً (Hidden Tight Coupling)؛ فأي تعديل في جدول يكسر الخدمات الأخرى، فضلاً عن تعارض الأقفال وتعطيل استقلالية النشر والتوسع لكل خدمة.",
          "ok": true,
          "why": "مشاركة قاعدة البيانات تنقض جوهر الميكروسيرفس؛ والنمط الصحيح هو تغليف بيانات كل خدمة في مخزنها الخاص والاتصال عبر الـ APIs فقط.",
          "en": "Because sharing a database creates hidden tight coupling; altering schema breaks other services, causes lock contention, and destroys independent deployability."
        },
        {
          "ar": "لأن خوادم قواعد البيانات لا تقبل سوى اتصال من برنامج واحد فقط في العالم.",
          "ok": false,
          "why": "قواعد البيانات تدعم آلاف الاتصالات المتزامنة.",
          "en": "Because databases accept only one single connection worldwide."
        },
        {
          "ar": "لأن لغات البرمجة تمنع استخدام الجداول في المشاريع الكبيرة.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "Because programming languages ban tables in enterprise systems."
        },
        {
          "ar": "لأن أسعار قواعد البيانات تصبح مجانية إذا قمت بإنشاء 10 قواعد منفصلة.",
          "ok": false,
          "why": "قضية تسعير غير واقعية ولا ترتبط بالمبدأ المعماري.",
          "en": "Because databases become free if you create 10 separate ones."
        }
      ],
      "tip": "وقفة امتحانية: مبدأ صارم: Database-per-Service! لا تشارك قاعدة البيانات مباشرة بين خدمتين مصغرتين؛ التواصل يتم حصراً عبر APIs أو Message Broker."
    },
    {
      "n": 308,
      "type": "mcq",
      "ref": "L8-S048",
      "q_ar": "ما هي المسؤوليات المركزية الموكلة لبوابة واجهة البرمجة (API Gateway Pattern) في معمارية الخدمات المصغرة؟",
      "q_en": "What are the centralized cross-cutting responsibilities delegated to the API Gateway Pattern in microservices architectures?",
      "opts": [
        {
          "ar": "تعتبر نقطة الدخول الموحدة للعملاء الخارجيين، وتتكفل بالتوجيه (Routing)، المصادقة (Authentication)، إنهاء التشفير (SSL Termination)، تقييد الاستهلاك (Rate Limiting)، وتجميع الاستجابات.",
          "ok": true,
          "why": "بوابة الـ API تعزل العملاء عن تعقيد شبكة الميكروسيرفس الداخلية وتجمع المهام المشتركة (Cross-Cutting Concerns) في مدخل واحد آمن.",
          "en": "Acts as the single unified entry point handling reverse-proxy routing, authentication, SSL termination, rate limiting, and request aggregation."
        },
        {
          "ar": "إدارة بطاقات الحضور والانصراف للموظفين في مكتب الشركة.",
          "ok": false,
          "why": "وظيفة شؤون موظفين مكتبية.",
          "en": "Managing employee biometric attendance cards."
        },
        {
          "ar": "حفظ ملفات الفيديو بدقة 8K على أشرطة مغناطيسية قديمة.",
          "ok": false,
          "why": "لا علاقة له ببوابات الويب المعمارية.",
          "en": "Archiving 8K video files onto legacy magnetic tapes."
        },
        {
          "ar": "إلغاء الحاجة لوجود خدمات مصغرة واستبدالها بنظام حاسبة بسيط.",
          "ok": false,
          "why": "البوابة توجه الطلبات للخدمات المصغرة ولا تلغيها.",
          "en": "Replacing microservices with a simple calculator."
        }
      ],
      "tip": "وقفة امتحانية: وظائف API Gateway: 1) Single Entry Point، 2) Reverse Proxy Routing، 3) Security & Auth، 4) Rate Limiting & SSL Termination."
    },
    {
      "n": 309,
      "type": "mcq",
      "ref": "L8-S050",
      "q_ar": "في المعمارية الشاملة لنظام المتجر الذكي المتكامل عبر واتساب، ما هو المسار التسلسلي الصحيح الذي تسلكه رسالة العميل منذ إرسالها وحتى وصول الرد؟",
      "q_en": "In the end-to-end architecture of the WhatsApp Smart Store system, what is the correct sequence of events from customer message to final response?",
      "opts": [
        {
          "ar": "العميل يرسل في واتساب -> Meta تدفع الحدث لخادم Webhook عبر POST -> الخادم يضع المهمة في طابور RabbitMQ ويرد بـ 200 OK -> خدمة الذكاء الاصطناعي تسترجع المعرفة الدلالية من Vector DB وترسلها لـ LLM -> خدمة الإشعارات ترسل الرد النهائي لهاتف العميل عبر WhatsApp API.",
          "ok": true,
          "why": "هذا هو المسار المعماري المكتمل الذي يدمج: Webhook + Message Queue + Vector DB + LLM + External WhatsApp API في منظومة موزعة فائقة المرونة.",
          "en": "Client sends in WhatsApp -> Meta pushes POST to Webhook -> Webhook enqueues to RabbitMQ and replies 200 OK -> AI Worker queries Vector DB and calls LLM -> Notification service sends final answer via WhatsApp API."
        },
        {
          "ar": "العميل يتصل بقاعدة البيانات مباشرة بدون إنترنت ويكتب الرد بنفسه.",
          "ok": false,
          "why": "مستحيل أمنياً ومعمارياً.",
          "en": "Client connects to DB directly offline and types their own answer."
        },
        {
          "ar": "المسار يبدأ من طباعة الرسالة على ورق ثم فحصها بجهاز السكانر.",
          "ok": false,
          "why": "مسار يدوي بطيء وغير برمجي.",
          "en": "Starts with printing the text on paper then scanning it."
        },
        {
          "ar": "الرسالة تذهب إلى شركة جوجل أولاً ثم تتحول إلى ملف PDF محذوف.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "Message goes to Google first then converts to a deleted PDF."
        }
      ],
      "tip": "وقفة امتحانية: ملخص الوحدة التاسعة والأخيرة: تكامل النظم الحديثة = Webhooks + Microservices + RabbitMQ Event-Driven + RAG Vector Search + LLM Generation."
    },
    {
      "n": 310,
      "type": "mcq",
      "ref": "L8-S014",
      "q_ar": "كيف يساهم تقديم السياق المسترجع (Retrieved Context) في القضاء على ظاهرة الهلوسة (Hallucination) لدى النموذج اللغوي؟",
      "q_en": "How does providing retrieved context eliminate hallucination in LLMs?",
      "opts": [
        {
          "ar": "بإلغاء ذاكرة الحاسوب بالكامل وتحويله إلى آلة كاتبة.",
          "ok": false,
          "why": "لا علاقة له بالعتاد والآلات الكاتبة.",
          "en": "By wiping computer memory into a typewriter."
        },
        {
          "ar": "بتحويل مهمة النموذج من 'التخمين والتأليف بناءً على الذاكرة العامة' إلى 'استخراج وتلخيص وصياغة الإجابة من الحقائق الموثقة المقدمة له صراحة في السؤال'.",
          "ok": true,
          "why": "عندما تزود النموذج بالفقرة الصحيحة وتأمره بالالتزام بها، تصبح مهمته قراءة استيعابية وصياغة لغوية بدلاً من استدعاء تخميني مجهول.",
          "en": "By shifting the LLM task from 'open-ended guessing' to 'grounded reading comprehension, extraction, and synthesis based solely on supplied facts'."
        },
        {
          "ar": "بإجبار النموذج على قراءة الأخبار الرياضية يومياً.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "By forcing the bot to read sports news daily."
        },
        {
          "ar": "النموذج اللغوي لا يمكن تقليل هلوساته بأي وسيلة علمية.",
          "ok": false,
          "why": "RAG أثبت علمياً وهندسياً قدرته الفائقة على تقليص الهلوسة بنسب تتجاوز 95%.",
          "en": "LLM hallucinations can never be mitigated by any scientific means."
        }
      ],
      "tip": "وقفة امتحانية: جوهر RAG: تحويل عمل الـ LLM من 'Closed-Book Exam' (اختبار كتاب مغلق وتخمين) إلى 'Open-Book Exam' (اختبار كتاب مفتوح يستند لحقائق مؤكدة)."
    },
    {
      "n": 311,
      "type": "mcq",
      "ref": "L8-S015",
      "q_ar": "ما هي الفائدة من تطبيق التداخل الجزئي بين المقاطع (Chunk Overlap) أثناء تقطيع المستندات في RAG؟",
      "q_en": "What is the benefit of applying Chunk Overlap when segmenting documents in RAG?",
      "opts": [
        {
          "ar": "مضاعفة حجم ملف قاعدة البيانات دون أي فائدة تذكر.",
          "ok": false,
          "why": "التداخل له هدف دلالي دقيق وليس إهدار مساحة.",
          "en": "Doubling database file size for no useful reason."
        },
        {
          "ar": "منع انقطاع المعنى وسياق الجمل عند حدود التقطيع، وضمان عدم فصل الكلمات المترابطة أو الضمائر عن مراجعها بين فقرتين متجاورتين.",
          "ok": true,
          "why": "إذا انتهى المقطع الأول في منتصف فكرة وبدأ الثاني بباقيها، يفقد المتجه معناه؛ والتداخل يضمن احتواء كل مقطع على سياق كافٍ لفهمه.",
          "en": "Preventing semantic loss across chunk boundaries, ensuring contextual coherence and connected reasoning across adjacent passages."
        },
        {
          "ar": "تسريع سرعة دوران القرص الصلب الميكانيكي.",
          "ok": false,
          "why": "لا علاقة له بميكانيكا الأقراص.",
          "en": "Accelerating hard drive spindle speed."
        },
        {
          "ar": "إجبار النموذج على ترجمة الفقرة للغة الإسبانية.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "Forcing translation to Spanish."
        }
      ],
      "tip": "وقفة امتحانية: الـ Chunk Overlap (مثال: 50 رمز تداخل بين مقطعين) ضروري جداً للحفاظ على سلامة السياق ومنع بتر الجمل في المنتصف."
    },
    {
      "n": 312,
      "type": "mcq",
      "ref": "L8-S019",
      "q_ar": "ما الذي يميز قواعد البيانات الشعاعية (Vector Databases مثل Qdrant أو Milvus) عن قواعد البيانات العلائقية التقليدية (SQL)؟",
      "q_en": "What distinguishes Vector Databases (like Qdrant or Milvus) from traditional Relational SQL databases?",
      "opts": [
        {
          "ar": "أنها مصممة خصيصاً لفهرسة والبحث عالي السرعة في فضاء المتجهات عالية الأبعاد باستخدام خوارزميات الجار الأقرب (Approximate Nearest Neighbor - ANN) بدلاً من مطابقة النصوص الحرفية وجداول B-Tree.",
          "ok": true,
          "why": "جداول SQL تفهرس قيماً أحادية البعد (أرقام، نصوص)؛ بينما Vector DB تفهرس متجهات ذات 1536 بعداً وتجري عمليات بحث هندسي فوري.",
          "en": "Engineered specifically for indexing and searching high-dimensional vector spaces using Approximate Nearest Neighbor (ANN) algorithms rather than literal B-Trees."
        },
        {
          "ar": "أنها مجانية فقط للطلاب وتكلف ملايين الدولارات للموظفين.",
          "ok": false,
          "why": "قواعد البيانات مفتوحة المصدر ومتاحة للاستخدام.",
          "en": "Free for students and millions for employees."
        },
        {
          "ar": "أنها لا تعمل إلا عند وجود شبكة واي فاي فقط.",
          "ok": false,
          "why": "تعمل محلياً أو سحابياً عبر أي اتصال شبكي.",
          "en": "Operates only over WiFi networks."
        },
        {
          "ar": "أنها تحظر تخزين النصوص بالكامل وتخزن الأرقام فقط.",
          "ok": false,
          "why": "تخزن المتجهات مصحوبة بالنصوص الأصلية والبيانات الوصفية (Metadata).",
          "en": "Bans text entirely, storing numbers only."
        }
      ],
      "tip": "وقفة امتحانية: خوارزمية البحث في Vector Databases: خوارزميات الجار الأقرب التقريبي (ANN - Approximate Nearest Neighbor) مثل HNSW."
    },
    {
      "n": 313,
      "type": "mcq",
      "ref": "L8-S035",
      "q_ar": "في معمارية النشر والاشتراك (Publish-Subscribe Pattern)، ما هي العلاقة بين ناشر الحدث والمشتركين فيه؟",
      "q_en": "In the Publish-Subscribe (Pub/Sub) pattern, what is the coupling relationship between event publishers and subscribers?",
      "opts": [
        {
          "ar": "الناشر يجب أن يعرف العناوين الدقيقة وأسماء الخوادم لكافة المشتركين مسبقاً.",
          "ok": false,
          "why": "هذا ترابط وثيق يخالف مبدأ Pub/Sub.",
          "en": "The publisher must explicitly know all subscriber IP addresses."
        },
        {
          "ar": "انعدام تام للترابط (Zero Coupling)؛ فالناشر ينشر الحدث إلى وسيط الرسائل (Topic) دون أن يدري من سيستمع إليه، ويمكن إضافة مشتركين جدد في أي وقت دون تعديل سطر واحد في كود الناشر.",
          "ok": true,
          "why": "نمط Pub/Sub يحقق أقصى درجات المرونة؛ خدمة الطلبات تنشر `OrderCreated`، وتستمع لها خدمات الشحن والمخزون والإشعارات باستقلالية تامة.",
          "en": "Complete decoupling; the publisher emits events to a Topic oblivious to consumers, allowing new subscribers to hook in anytime with zero code modifications to the publisher."
        },
        {
          "ar": "الناشر يتحكم في حذف وإيقاف برامج المشتركين قسراً.",
          "ok": false,
          "why": "المشتركون خدمات مستقلة بذاتها.",
          "en": "Publisher forcefully terminates subscriber processes."
        },
        {
          "ar": "المشترك هو من يكتب الكود البرمجي للناشر.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "Subscriber authors publisher source code."
        }
      ],
      "tip": "وقفة امتحانية: مبدأ الـ Pub/Sub: Open-Closed Principle على مستوى العمارة الموزعة؛ إضافة مشتركين جدد (مثل خدمة الولاء) دون لمس كود الناشر."
    },
    {
      "n": 314,
      "type": "mcq",
      "ref": "L8-S038",
      "q_ar": "ما هي الفلسفة الهندسية الحديثة في التعامل مع الأعطال في النظم البرمجية الموزعة (Design for Failure)؟",
      "q_en": "What is the modern software philosophy regarding errors in distributed systems (Design for Failure)?",
      "opts": [
        {
          "ar": "افتراض أن الشبكات والعتاد لن يتعطل أبداً وكتابة الكود دون أي معالجة للأخطاء.",
          "ok": false,
          "why": "أكبر وهم معماري؛ فالشبكات تفشل باستمرار وتتعطل الخوادم حتماً.",
          "en": "Assuming networks and hardware never fail, writing zero error handling."
        },
        {
          "ar": "التسليم بأن الأعطال وانقطاعات الشبكة وبطء الخدمات الخارجية أمر حتمي لا مفر منه، وبناء النظام بآليات مرونة ومقاومة (Resilience) تتيح له النجاة ومواصلة العمل رغم فشل بعض أجزائه.",
          "ok": true,
          "why": "في الحوسبة السحابية: كل شيء يتعطل في وقت ما (Everything fails all the time)؛ والتصميم الناجح يمتلك Fallbacks و Retries و Circuit Breakers.",
          "en": "Accepting that network drops, timeouts, and failures are inevitable, engineering the system with resilience patterns (Retries, Circuit Breakers, Fallbacks) to survive degraded states."
        },
        {
          "ar": "إلغاء توزيع الأنظمة والعودة لحواسيب السبعينات العملاقة.",
          "ok": false,
          "why": "غير واقعي ولا يلبي متطلبات التوسع العالمية.",
          "en": "Reverting back to 1970s mainframe architectures."
        },
        {
          "ar": "إيقاف السيرفر ومسح قاعدة البيانات عند أول رسالة خطأ.",
          "ok": false,
          "why": "سلوك كارثي مدمر.",
          "en": "Shutting down the server and deleting the database on the first error."
        }
      ],
      "tip": "وقفة امتحانية: مقولة فيرنر فوجلز (CTO Amazon): 'Everything fails, all the time'؛ التصميم المقاوم للفشل (Resilient Design) هو جوهر الأنظمة الموزعة."
    },
    {
      "n": 315,
      "type": "mcq",
      "ref": "L8-S047",
      "q_ar": "كيف يساعد نمط تجميع الطلبات في بوابة الـ API (API Gateway Request Aggregation) في تحسين أداء تطبيقات الهواتف الذكية؟",
      "q_en": "How does Request Aggregation in the API Gateway improve mobile application performance?",
      "opts": [
        {
          "ar": "بشحن بطارية الهاتف لاسلكياً عبر إشارات الواي فاي.",
          "ok": false,
          "why": "مستحيل تقنياً.",
          "en": "Wirelessly recharging phone batteries via WiFi signals."
        },
        {
          "ar": "بتلقي طلب واحد من تطبيق الموبايل، والقيام داخلياً باستدعاء عدة خدمات مصغرة بالتوازي عبر شبكة السيرفرات السريعة، ثم دمج كافة النتائج في استجابة واحدة مجمعة وإعادتها للهاتف بطلب شبكي واحد.",
          "ok": true,
          "why": "شبكات الجوال ذات زمن تأخير عالي (High Latency)؛ فبدلاً من أن يرسل الهاتف 5 طلبات منفصلة عبر 4G، يرسل طلباً واحداً للبوابة وتتولى هي جمع البيانات في شبكتها الداخلية السريعة.",
          "en": "Accepting a single call from mobile, invoking multiple microservices in parallel over high-speed datacenter backplanes, aggregating results, and returning a unified response in a single roundtrip."
        },
        {
          "ar": "بحذف كافة صور المنتجات لتقليل حجم الرد.",
          "ok": false,
          "why": "التجميع ينظم بنية البيانات ولا يحذف الميزات المطلوبة.",
          "en": "Deleting all product images to shrink payloads."
        },
        {
          "ar": "بإجبار المستخدم على مشاهدة إعلان تجاري لمدة 30 ثانية.",
          "ok": false,
          "why": "لا علاقة له بالنمط المعماري.",
          "en": "Forcing users to watch a 30-second advertisement."
        }
      ],
      "tip": "وقفة امتحانية: ميزة الـ Request Aggregation في API Gateway: تقليص الاتصالات الخارجية للهاتف (Mobile Roundtrips) من N اتصالات إلى اتصال واحد مجمع."
    },
    {
      "n": 316,
      "type": "mcq",
      "ref": "L8-S031",
      "q_ar": "متى يكون استخدام الاتصال المتزامن (Synchronous HTTP / gRPC) بين الخدمات المصغرة مبرراً هندسياً وصحيحاً؟",
      "q_en": "When is using Synchronous communication (HTTP / gRPC) between microservices architecturally justified and appropriate?",
      "opts": [
        {
          "ar": "في استعلامات القراءة الفورية الحرجة (Real-Time Read Queries) حيث يحتاج المتصل للبيانات فوراً قبل أن يتمكن من مواصلة عمله (مثل التحقق اللحظي من صلاحية المستخدم أو رصيد حسابه).",
          "ok": true,
          "why": "إذا كانت العملية قراءة فورية سريعة بلا آثار جانبية ويحتاجها العميل لإكمال الشاشة، يكون الاتصال المتزامن عبر gRPC أو HTTP هو الخيار الطبيعي والمنطقي.",
          "en": "In critical real-time read queries where the caller strictly requires immediate data to proceed (such as instantaneous token validation or balance checks)."
        },
        {
          "ar": "في إرسال رسائل البريد الإلكتروني الدعائية الأسبوعية لمليون عميل.",
          "ok": false,
          "why": "إرسال الإيميلات عملية خلفية غير متزامنة يجب أن تمر عبر طابور رسائل.",
          "en": "Dispatching weekly promotional marketing emails to one million clients."
        },
        {
          "ar": "في معالجة وتصدير ملفات الفيديو الضخمة.",
          "ok": false,
          "why": "معالجة الفيديو تتطلب طوابير وعمالاً خلفيين وليس اتصالات متزامنة.",
          "en": "Processing and exporting massive video renders."
        },
        {
          "ar": "في كافة العمليات بدون استثناء وبلا أي حاجة للطوابير إطلاقاً.",
          "ok": false,
          "why": "الاعتماد الحصري على التزامن يدمر الأنظمة الموزعة.",
          "en": "In every single operation without exception, discarding queues."
        }
      ],
      "tip": "وقفة امتحانية: قاعدة التمييز: العمليات التفاعلية الفورية (Read queries) = متزامن (Sync HTTP/gRPC). العمليات الحركية ومعالجة الأعمال (Commands/Writes) = غير متزامن (Async Events/Broker)."
    },
    {
      "n": 317,
      "type": "mcq",
      "ref": "L8-S021",
      "q_ar": "في خطوة التوليد (Generation) ضمن منظومة RAG، ما هي المدخلات التي تُرسل فعلياً في طلب الـ API إلى النموذج اللغوي (LLM)؟",
      "q_en": "In the Generation step of a RAG pipeline, what inputs are explicitly transmitted in the API payload to the LLM?",
      "opts": [
        {
          "ar": "سؤال المستخدم الأصلي فقط دون أي إضافات.",
          "ok": false,
          "why": "إرسال السؤال وحده هو النموذج العادي الذي يسبب الهلوسة.",
          "en": "The original user question alone with zero additions."
        },
        {
          "ar": "حزمة مجمعة متكاملة تضم: 1) رسالة النظام التوجيهية (System Prompt)، 2) الفقرات المعرفية المسترجعة من قاعدة المتجهات (Retrieved Context Chunks)، 3) سؤال المستخدم الحالي.",
          "ok": true,
          "why": "هذا هو جوهر التعزيز (Augmentation)؛ حشو السياق المسترجع مع تعليمات الأمان وسؤال المستخدم في طلب واحد متكامل للنموذج.",
          "en": "An assembled composite payload containing: 1) System Instructions, 2) Retrieved Context Chunks from the vector store, 3) The user's specific inquiry."
        },
        {
          "ar": "كافة ملفات القرص الصلب لنظام التشغيل C:\\.",
          "ok": false,
          "why": "مستحيل تقنياً ويتجاوز حدود أي نافذة سياق.",
          "en": "The entirety of system hard drive C:\\."
        },
        {
          "ar": "كلمات مرور المشرفين وقاعدة بيانات المستخدمين كاملة.",
          "ok": false,
          "why": "كارثة أمنية فادحة.",
          "en": "Admin passwords and the entire user table."
        }
      ],
      "tip": "وقفة امتحانية: مكونات الـ Prompt المعزز في RAG: `Prompt = System Instructions + Retrieved Context Chunks + User Question`."
    },
    {
      "n": 318,
      "type": "mcq",
      "ref": "L8-S041",
      "q_ar": "كيف يضمن وسيط الرسائل الموزع مثل RabbitMQ عدم ضياع الرسائل في حال تعطل أو إعادة تشغيل الخادم الخادم فجأة (Message Durability)؟",
      "q_en": "How does a distributed message broker like RabbitMQ guarantee message durability in the event of sudden server crashes or reboots?",
      "opts": [
        {
          "ar": "عن طريق توصيف الطابور بأنه دائم (`Durable = true`) وتوصيف الرسائل بأنها مستمرة (`Persistent`)، مما يجبر الوسيط على كتابتها وتثبيتها على القرص الصلب الدائم قبل تأكيد استلامها.",
          "ok": true,
          "why": "إذا كانت الرسائل في الذاكرة فقط تضيع مع انقطاع الكهرباء؛ وتفعيل خاصية Durability يكتبها في القرص ويضمن نجاة الطابور والرسائل بعد إعادة التشغيل.",
          "en": "By declaring queues as `Durable` and marking message delivery mode as `Persistent`, forcing the broker to commit messages to non-volatile disk storage."
        },
        {
          "ar": "بالاتصال بمكتب البريد السريع لتوصيل الرسائل يدوياً.",
          "ok": false,
          "why": "حل هزلي وغير برمجي.",
          "en": "By phoning courier delivery services."
        },
        {
          "ar": "عبر طباعة الرسائل في ملف Word على سطح المكتب.",
          "ok": false,
          "why": "لا علاقة له بوسائط الرسائل البرمجية.",
          "en": "By saving messages to a Word doc on Desktop."
        },
        {
          "ar": "الرسائل في RabbitMQ لا يمكن أن تنجو إطلاقاً وتضيع دائماً مع أي عطل.",
          "ok": false,
          "why": "RabbitMQ صمم خصيصاً لضمان موثوقية وثبات الرسائل (Reliability).",
          "en": "Messages in RabbitMQ can never survive and are always lost."
        }
      ],
      "tip": "وقفة امتحانية: مفاهيم موثوقية الرسائل في RabbitMQ: 1) Queue Durability (بقاء الطابور)، 2) Message Persistence (حفظ الرسالة بالقرص)، 3) Consumer Acknowledgments (ACK)."
    },
    {
      "n": 319,
      "type": "mcq",
      "ref": "L8-S043",
      "q_ar": "ما الذي يحدث إذا فشل خادم الـ Webhook الخاص بك في إرجاع كود `200 OK` لشركة Meta خلال المهلة المحددة (مثلاً خلال 5 ثوانٍ)؟",
      "q_en": "What happens if your Webhook server fails to return a `200 OK` status to Meta within the defined timeout (e.g. within 5 seconds)?",
      "opts": [
        {
          "ar": "ستعتبر Meta الطلب فاشلاً وستقوم بإعادة إرسال نفس الرسالة مراراً وتكراراً (Retries)، مما يضاعف الحمل على خادمك وقد ينتهي الأمر بحظر الـ Webhook مؤقتاً.",
          "ok": true,
          "why": "المزودات تعتبر عدم الرد السريع دليلاً على سقوط السيرفر، فتعيد المحاولة فوراً؛ وإذا تكرر الفشل يتم إيقاف وتجميد حساب الـ Webhook بالكامل.",
          "en": "Meta marks the delivery as failed and retries sending the same event repeatedly, amplifying server load and potentially leading to webhook disabling."
        },
        {
          "ar": "ستقوم شركة Meta بدفع تعويض مالي لمتجرك عن كل ثانية تأخير.",
          "ok": false,
          "why": "العطل صادر من خادمك أنت وليس من شركة Meta.",
          "en": "Meta pays financial compensation for every delayed second."
        },
        {
          "ar": "سيتم حذف حسابات كافة عملاء الواتساب في العالم.",
          "ok": false,
          "why": "مستحيل وغير منطقي.",
          "en": "All WhatsApp accounts globally are deleted."
        },
        {
          "ar": "الرسالة ستتحول تلقائياً إلى مقطع فيديو على يوتيوب.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "The message automatically converts to a YouTube video."
        }
      ],
      "tip": "وقفة امتحانية: فخ تأخير الـ Webhook: أي تأخير في الرد يطلق موجة إعادة محاولات مكررة (Retry Storm) من المزود الخارجي تزيد من اختناق السيرفر."
    },
    {
      "n": 320,
      "type": "mcq",
      "ref": "L8-S033",
      "q_ar": "ما هو الفارق المعماري الجوهري بين نمط الاتصال القائم على الأحداث (Event-Driven) والنمط القائم على الأوامر المباشرة (Command-Driven)؟",
      "q_en": "What is the core architectural difference between Event-Driven and Command-Driven communication?",
      "opts": [
        {
          "ar": "الأمر (Command) يعبر عن نية وإلزام بتنفيذ فعل محدد في المستقبل وله مستلم وحيد متوقع منه الرد (مثل `CreateInvoice`)، بينما الحدث (Event) يعبر عن حقيقة تاريخية وقعت في الماضي ولا يمكن تغييرها وتُبث للمهتمين (مثل `OrderPlaced`).",
          "ok": true,
          "why": "الأمر يطلب فعلاً ومرتبط بمستلم محدد، بينما الحدث يعلن حقيقة وقعت بالفعل (Past Tense) ويترك لكل خدمة حرية التصرف وفق مصلحتها.",
          "en": "A Command expresses intent targeting a single recipient expected to act (e.g. `CreateInvoice`), whereas an Event states an immutable historical fact broadcast to interested listeners (e.g. `OrderPlaced`)."
        },
        {
          "ar": "الأحداث تحدث في الصباح فقط والأوامر في المساء.",
          "ok": false,
          "why": "تصنيف زمني لا وجود له في هندسة البرمجيات.",
          "en": "Events happen in mornings, commands in evenings."
        },
        {
          "ar": "كلاهما مترادفان ويعبران عن نفس الشيء تماماً في كافة اللغات.",
          "ok": false,
          "why": "هناك فارق دلالي ومعماري كبير يدرسه مهندسو النظم.",
          "en": "Both are identical synonyms across all languages."
        },
        {
          "ar": "الأوامر مخصصة لنظام لينكس والأحداث لنظام ويندوز.",
          "ok": false,
          "why": "مفاهيم معمارية عامة مستقلة عن نظام التشغيل.",
          "en": "Commands for Linux, events for Windows."
        }
      ],
      "tip": "وقفة امتحانية: قاعدة التسمية: الأوامر صيغة أمر إلزامي (`ProcessPayment`)، والأحداث صيغة ماضي تقريرية غير قابلة للتغيير (`PaymentProcessed`)."
    },
    {
      "n": 321,
      "type": "mcq",
      "ref": "L8-S045",
      "q_ar": "كيف يتم التعامل مع المعاملات الموزعة التي تتطلب التناسق عبر عدة خدمات مصغرة دون استخدام قفل قاعدة البيانات ثنائي الطور (2PC) المعيق؟",
      "q_en": "How are distributed transactions coordinated across multiple microservices without using blocking Two-Phase Commit (2PC)?",
      "opts": [
        {
          "ar": "بحذف قاعدة البيانات عند حدوث أي خطأ والبدء من الصفر.",
          "ok": false,
          "why": "تدمير للبيانات.",
          "en": "By dropping the database on any error."
        },
        {
          "ar": "عبر نمط الساجا (Saga Pattern)، وهو سلسلة من المعاملات المحلية المستقلة في كل خدمة، تُنسق عبر الأحداث مع تنفيذ معاملات تعويضية (Compensating Transactions) للتراجع عن الخطوات السابقة في حال فشل أي خطوة لاحقة.",
          "ok": true,
          "why": "نمط Saga يستبدل أقفال ACID الموزعة البطيئة بنظام المعاملات التعويضية (مثل: إذا فشل الدفع، تنطلق معاملة تعويضية لإلغاء حجز المقعد).",
          "en": "Via the Saga Pattern: a sequence of local transactions coordinated via events, using Compensating Transactions to roll back previous steps if a subsequent step fails."
        },
        {
          "ar": "بإجبار المطورين على تصحيح المعاملات يدوياً بالهاتف كل دقيقة.",
          "ok": false,
          "why": "حل غير برمجي ومستحيل في المشاريع الكبرى.",
          "en": "By forcing developers to manually fix records by phone."
        },
        {
          "ar": "المعاملات الموزعة مستحيلة تماماً ولا يمكن تنفيذها في المعماريات الحديثة.",
          "ok": false,
          "why": "نمط Saga ينفذ المعاملات الموزعة في كبرى الشركات العالمية مثل Netflix و Uber.",
          "en": "Distributed transactions are strictly impossible in modern systems."
        }
      ],
      "tip": "وقفة امتحانية: في الميكروسيرفس: بديل المعاملات الموزعة التقليدية هو نمط الساجا (`Saga Pattern`) بالاعتماد على المعاملات التعويضية (Compensating Transactions)."
    },
    {
      "n": 322,
      "type": "mcq",
      "ref": "L8-S017",
      "q_ar": "إذا كان لدينا نموذجان لإنتاج التضمينات، الأول ينتج متجهات بـ 384 بعداً والثاني بـ 1536 بعداً، ما هو الأثر المعماري لهذا الاختلاف؟",
      "q_en": "If two embedding models produce vectors of 384 and 1536 dimensions respectively, what is the architectural impact of this difference?",
      "opts": [
        {
          "ar": "الأبعاد الأكبر (1536) قادرة على تمثيل تفاصيل دلالية أعمق وأكثر تعقيداً ولكنها تستهلك ذاكرة أكبر وزمن معالجة أطول في قاعدة البيانات، بينما 384 بعداً أسرع وأقل استهلاكاً للمساحة.",
          "ok": true,
          "why": "حجم البعد الشعاعي (Dimensions) يوازن بين دقة التمييز الدلالي وبين تكلفة الذاكرة وسرعة البحث في قاعدة البيانات الشعاعية.",
          "en": "Higher dimensions (1536) capture richer semantic nuances but require more memory and indexing computation, whereas lower dimensions (384) are faster and lighter."
        },
        {
          "ar": "النموذج ذو 384 بعداً لا يدعم سوى الأرقام من 1 إلى 10 فقط.",
          "ok": false,
          "why": "الأبعاد أعداد حقيقية عائمة (Floats) تمثل فضاءً هندسياً كاملاً.",
          "en": "384-dimensional models only support numbers 1 to 10."
        },
        {
          "ar": "كلاهما متطابقان تماماً في استهلاك الذاكرة وسرعة البحث بدون أي فارق.",
          "ok": false,
          "why": "متجه 1536 عنصراً يستهلك 4 أضعاف الذاكرة والحسابات مقارنة بـ 384.",
          "en": "Both consume identical memory and compute."
        },
        {
          "ar": "النموذج ذو 1536 بعداً يعمل بدون كهرباء.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "1536-dimensional models operate without electricity."
        }
      ],
      "tip": "وقفة امتحانية: في Vector DB: تطابق الأبعاد إلزامي؛ يستحيل مقارنة متجه من 384 بعداً مع متجه من 1536 بعداً في نفس جدول البحث الشعاعي."
    },
    {
      "n": 323,
      "type": "mcq",
      "ref": "L8-S028",
      "q_ar": "ما المقصود بخاصية تعدد اللغات والتقنيات (Polyglot Architecture) التي تتيحها معمارية الخدمات المصغرة؟",
      "q_en": "What is meant by the 'Polyglot Architecture' enabled by Microservices Architecture?",
      "opts": [
        {
          "ar": "إجبار كافة الخدمات في المؤسسة على الكتابة بلغة برمجية واحدة قديمة فقط.",
          "ok": false,
          "why": "هذا أحادي التقنية (Monoglot) وليس متعددها.",
          "en": "Forcing all services across the enterprise into a single legacy language."
        },
        {
          "ar": "حرية اختيار لغة البرمجة وقاعدة البيانات والتقنية الأنسب لكل خدمة مصغرة بشكل مستقل (مثل كتابة خدمة الحسابات بـ C# مع SQL Server، وخدمة الذكاء الاصطناعي بـ Python مع Qdrant)، طالما أن التواصل بينها يتم عبر عقود قياسية موحدة.",
          "ok": true,
          "why": "في الميكروسيرفس، تختار الأداة الأفضل للمهمة (Right tool for the job)؛ فالبايثون متفوق في الذكاء الاصطناعي و C# متفوق في الخدمات المؤسسية فائقة السرعة.",
          "en": "The freedom to select the most appropriate language and database for each microservice independently (e.g. C# for core finance, Python for AI), communicating via standard contracts."
        },
        {
          "ar": "ترجمة كافة التعليقات في الكود البرمجي إلى 20 لغة بشرية مختلفة.",
          "ok": false,
          "why": "تعدد التقنيات يخص لغات البرمجة وأطر العمل وليس تعليقات الكود.",
          "en": "Translating all code comments into 20 human languages."
        },
        {
          "ar": "منع استخدام الإنترنت في بيئة التطوير.",
          "ok": false,
          "why": "غير صحيح.",
          "en": "Banning internet inside development environments."
        }
      ],
      "tip": "وقفة امتحانية: ميزة Polyglot: التحرر من الانغلاق التقني (No Technology Lock-in)؛ كل فريق يختار اللغة وقاعدة البيانات المثالية لخدمته."
    },
    {
      "n": 324,
      "type": "mcq",
      "ref": "L8-S047",
      "q_ar": "لماذا يُعتبر إنهاء التشفير (SSL/TLS Termination) عند بوابة الـ API Gateway ممارسة معمارية شائعة ونافعة؟",
      "q_en": "Why is SSL/TLS Termination at the API Gateway a widely adopted and beneficial architectural practice?",
      "opts": [
        {
          "ar": "لأنها تفك تشفير HTTPS في المدخل المركزي الخارجي، وتسمح بالاتصال الداخلي السريع بين الخدمات المصغرة داخل الشبكة الخاصة المعزولة دون تكرار عبء التشفير وفك التشفير في كل قفزة داخلية.",
          "ok": true,
          "why": "عمليات فك تشفير SSL تستهلك طاقة معالجة؛ وتركيزها في البوابة يوفر على الخدمات الداخلية المعالجة ويتيح إدارة شهادات الأمان في مكان واحد.",
          "en": "Because it decrypts HTTPS at the outer boundary, allowing internal communication inside the private VPC without repeating heavy cryptographic handshake overhead at every internal hop."
        },
        {
          "ar": "لأنها تحذف شهادة الأمان وتجعل الموقع غير آمن نهائياً.",
          "ok": false,
          "why": "الاتصال مع العميل الخارجي يظل مشفراً بأعلى درجات الأمان HTTPS.",
          "en": "Because it strips security certificates leaving sites insecure."
        },
        {
          "ar": "لأنها تمنع المستخدمين من كتابة كلمات المرور.",
          "ok": false,
          "why": "لا علاقة له بنماذج الإدخال.",
          "en": "Because it prevents users from typing passwords."
        },
        {
          "ar": "لأن شهادات الأمان تعمل على المتصفحات فقط ولا يمكن تثبيتها على السيرفرات.",
          "ok": false,
          "why": "شهادات SSL تثبت أساساً على الخوادم والبوابات.",
          "en": "Because SSL certificates operate on browsers only."
        }
      ],
      "tip": "وقفة امتحانية: مهام API Gateway: `SSL Termination` يريح الخدمات الداخلية من كلفة المعالجة التشفيرية ويوحد إدارة الشهادات وتجديدها في نقطة واحدة."
    },
    {
      "n": 325,
      "type": "mcq",
      "ref": "L8-S050",
      "q_ar": "ما هي الخلاصة الهندسية الكبرى التي يخرج بها مهندس البرمجيات المتقدم عند ربط معمارية الخدمات المصغرة بتقنيات الذكاء الاصطناعي (AI Engineering)؟",
      "q_en": "What is the ultimate engineering takeaway when integrating Microservices Architecture with AI Engineering?",
      "opts": [
        {
          "ar": "أن الذكاء الاصطناعي أداة سحرية تعمل وحدها بدون الحاجة لأي هندسة برمجيات أو معمارية نظيفة.",
          "ok": false,
          "why": "وهم شائع؛ فالذكاء الاصطناعي بدون معمارية قوية وطوابير ومرونة ينهار فوراً في بيئة الإنتاج.",
          "en": "That AI is magic that operates alone needing zero software engineering or clean architecture."
        },
        {
          "ar": "أن نماذج الذكاء الاصطناعي هي مجرد خدمات برمجية متخصصة (Specialized Services) داخل المعمارية العامة للنظام، تكتمل قيمتها الحقيقية فقط عند تكاملها مع مبادئ التصميم النظيفة، خطافات الويب، طوابير الرسائل، وإدارة الفشل لضمان الموثوقية والأداء والاستدامة.",
          "ok": true,
          "why": "الـ AI وحده لا يصنع تطبيقاً مؤسسياً؛ بل يندمج كخدمة مصغرة ذكية داخل منظومة تعتمد على Webhooks و Message Queues و Resilient Patterns و Clean Architecture.",
          "en": "That AI models are specialized services within the broader system, whose true value is realized only when seamlessly integrated with clean design, Webhooks, Message Brokers, and resilience patterns."
        },
        {
          "ar": "أن لغات البرمجة سيتم الاستغناء عنها بالكامل في العام القادم.",
          "ok": false,
          "why": "الأنظمة المؤسسية تزداد تعقيداً واعتماداً على المهندسين المتمكنين من المعمارية.",
          "en": "That programming languages will be completely discarded next year."
        },
        {
          "ar": "أن قواعد البيانات التقليدية العلائقية اختفت ولم يعد لها أي وجود في العالم.",
          "ok": false,
          "why": "قواعد البيانات العلائقية تظل عصب العمليات المالية والمعاملات الدقيقة.",
          "en": "That relational databases have vanished and no longer exist."
        }
      ],
      "tip": "وقفة امتحانية: مسك ختام المقرر: البرمجة المتقدمة تجمع بين الأنماط (Patterns) ومبادئ SOLID، العمارة النظيفة (Clean Architecture)، والأنظمة الموزعة مع الذكاء الاصطناعي المتين."
    }
  ]
});
