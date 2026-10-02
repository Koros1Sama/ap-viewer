/* ═══════════════════════════════════════════════════════════
   نماذج الاختبار النصفي الرسمي لعام 2026م — البرمجة المتقدمة
   مدرس المقرر: د. بيداء لعلع
   النماذج الرسمية الثلاثة (النموذج الأول · النموذج الثاني · النموذج الثالث)
   مدققة بصرياً ومنهجياً ومحلولة وفق سلايدات المقرر المعتمدة
   معيار صفر إيموجيات (Zero Emojis Standard)
   ═══════════════════════════════════════════════════════════ */
window.TOC_MODELS = window.TOC_MODELS || [];

/* ───────────────────────────────────────────────────────────
   النموذج الأول (Model 1) — الاختبار النصفي 2026م
   ─────────────────────────────────────────────────────────── */
window.TOC_MODELS.push({
  "id": "midterm_2026_m1",
  "kind": "نظري",
  "title_ar": "اختبار نصفي 2026م — النموذج الأول (د. بيداء لعلع)",
  "short_label": "نصفي 1",
  "teacher_ar": "د. بيداء لعلع",
  "origin_ar": "ورقة الاختبار النصفي الرسمي لعام 2026م — النموذج الأول (د. بيداء لعلع). مستخرج بالرؤية البصرية من النموذج الامتحاني المعتمد ومدقق علمياً 100% وفق سلايدات المنهج، مع ربط كل سؤال بالشريحة المرجعية وتقديم التفسير والوقفة الامتحانية لكل خيار.",
  "origin_label": "النموذج النصفي الأول (CS25)",
  "origin_url": "https://t.me/c/2333768205/3220/3544",
  "questions": [
    {
      "n": 1,
      "type": "tf",
      "ref": "L2-S007",
      "q_ar": "نمط التصميم (Design Pattern) هو حل مثبت وقابل لإعادة الاستخدام لمشكلة تصميم برمجية متكررة الحدوث.",
      "q_en": "A Design Pattern is A proven, reusable solution to a recurring software design problem.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ نمط التصميم يمثل قالباً معمارياً قياسياً ومجرباً لحل مشكلة متكررة في بنية البرمجيات كائنية التوجه."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "نمط التصميم ليس كوداً جاهزاً للنسخ واللصق، بل هو حل مجرب وموثق لمشكلة تصميم شائعة."
        }
      ],
      "tip": "وقفة امتحانية: أنماط التصميم (GoF) ليست خوارزميات أو مكتبات برمجية مسبقة البناء، بل هي مفاهيم معمارية مجربة قابلة للتخصيص."
    },
    {
      "n": 2,
      "type": "tf",
      "ref": "L4-S003",
      "q_ar": "نستخدم نمط المزخرف (Decorator Pattern) عندما يُراد جعل الخوارزميات قابلة للتبديل أثناء وقت التشغيل (at runtime).",
      "q_en": "We use Decorator Pattern when Algorithms should be interchangeable at runtime.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ النمط المسؤول عن جعل الخوارزميات قابلة للتبديل في وقت التشغيل هو نمط الاستراتيجية (Strategy Pattern)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة في الأصل؛ لأن وظيفة Decorator هي إلحاق مسؤوليات وسلوكيات إضافية بالكائن ديناميكياً، بينما تبديل الخوارزميات في وقت التشغيل هو اختصاص نمط Strategy."
        }
      ],
      "tip": "وقفة امتحانية: فرّق بدقة بين الأنماط: Strategy لتبديل الخوارزميات (Algorithms interchangeable at runtime)، بينما Decorator لإضافة سلوكيات جديدة ديناميكياً (Add behavior dynamically)."
    },
    {
      "n": 3,
      "type": "tf",
      "ref": "L2-S010",
      "q_ar": "تركز أنماط التصميم الإنشائية (Creational Patterns) على كيفية إنشاء وتكوين الكائنات.",
      "q_en": "Creation Patterns focus on how objects are created.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ الأنماط الإنشائية تعنى بآليات إنشاء الكائنات بطريقة تفصل النظام عن كيفية تكوينها وتغليف منطق الإنشاء."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "الأنماط الإنشائية تختص حصراً بإنشاء الكائنات (مثل Singleton و Factory Method و Abstract Factory)."
        }
      ],
      "tip": "وقفة امتحانية: الفئات الثلاث للأنماط: الإنشائية (Creation) تركز على كيفية إنشاء الكائنات، الهيكلية (Structural) تركز على تركيبها وهيكلتها، والسلوكية (Behavioral) تركز على تفاعلها وسلوكها."
    },
    {
      "n": 4,
      "type": "tf",
      "ref": "L2-S014",
      "q_ar": "نمط المصنع (Factory) هو نمط تصميم إنشائي يضمن أن الفئة تمتلك نسخة واحدة فقط، مع توفير نقطة وصول عامة موحدة لهذه النسخة.",
      "q_en": "Factory is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ هذا هو التعريف القياسي لنمط المفرد (Singleton Pattern) وليس نمط المصنع."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ الفئة التي تضمن وجود نسخة واحدة وتوفر نقطة وصول عامة موحدة هي Singleton، بينما Factory يختص بتفويض إنشاء الكائنات لفئات فرعية أو دوال مخصصة."
        }
      ],
      "tip": "وقفة امتحانية: ركّز في مصطلحات التعريف: 'only one instance + global access point' تعني حصراً نمط المفرد (Singleton)."
    },
    {
      "n": 5,
      "type": "tf",
      "ref": "L3-S056",
      "q_ar": "يتيح نمط الاستراتيجية (Strategy Pattern) إضافة سلوك جديد إلى كائن برمجياً بشكل ديناميكي دون تعديل كوده المصدري.",
      "q_en": "The Strategy Pattern allows you to add new behavior to an object dynamically without modifying its source code.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ هذا هو التعريف الدقيق لنمط المزخرف (Decorator Pattern) الذي يلف الكائنات لإضافة سلوكيات دون تعديل شفرتها الأصلية."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ إضافة سلوكيات ديناميكية دون تعديل الكود هو اختصاص نمط المزخرف (Decorator Pattern)، في حين يختص نمط Strategy بتعريف عائلة من الخوارزميات وتبديلها."
        }
      ],
      "tip": "وقفة امتحانية: لاحظ التبادل الذي تكرره الدكتورة في الأسئلة: تعريف Decorator يُنسب خطأً لـ Strategy، وتعريف Strategy يُنسب خطأً لـ Decorator."
    },
    {
      "n": 6,
      "type": "tf",
      "ref": "L3-S012",
      "q_ar": "يسمح نمط المحوّل (Adapter Pattern) للواجهات البرمجية غير المتوافقة بالعمل معاً.",
      "q_en": "Adapter Pattern allows incompatible interfaces to work together.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ نمط المحول (Adapter) يعمل كجسر يترجم واجهة صنف إلى واجهة أخرى متوافقة يتوقعها العميل."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "الهدف الأساسي لنمط Adapter هو تمكين الواجهات غير المتوافقة من التعاون بنجاح."
        }
      ],
      "tip": "وقفة امتحانية: تذكر تشبيه محول القابس الكهربائي (Power Adapter)؛ فهو يجعل القابس الثلاثي يعمل في المقبس الثنائي دون تغيير أي منهما."
    },
    {
      "n": 7,
      "type": "tf",
      "ref": "L1-S030",
      "q_ar": "تقوم فكرة مبدأ فصل الواجهات (ISP) على إبقاء الواجهات البرمجية صغيرة ومحددة التركيز.",
      "q_en": "The idea of ISP is to keep interfaces small and focused.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ ينص مبدأ ISP على أن وجود عدة واجهات صغيرة ومتخصصة لكل عميل أفضل بكثير من واجهة واحدة عامة وضخمة."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "مبدأ Interface Segregation Principle يهدف تحديداً لمنع الواجهات السمينة (Fat Interfaces) وجعلها صغيرة ومركزة."
        }
      ],
      "tip": "وقفة امتحانية: قاعدة ISP الذهبية: لا تجبر أي فئة على تنفيذ دوال لا تحتاج إليها؛ قسّم الواجهات الضخمة إلى واجهات أصغر ذات دور محدد (Role Interfaces)."
    },
    {
      "n": 8,
      "type": "tf",
      "ref": "L1-S027",
      "q_ar": "يجب أن تكون الفئات المشتقة قادرة على أن تحل محل الفئات الأساسية دون الإخلال بسلوك وصحة البرنامج.",
      "q_en": "Derived classes should replace base classes without breaking behavior.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ هذا هو النص الجوهري لمبدأ استبدال لسكوف (Liskov Substitution Principle - LSP)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "هذا النص هو تعريف مبدأ LSP الذي صاغته باربرا لسكوف عام 1987."
        }
      ],
      "tip": "وقفة امتحانية: مبدأ LSP يعني أنه إذا كان لديك كائن من النوع الأساسي Base واستبدلته بكائن من النوع المشتق Derived، فيجب أن يستمر البرنامج بالعمل بصورة صحيحة وبنفس التوقعات."
    },
    {
      "n": 9,
      "type": "tf",
      "ref": "L5-S094",
      "q_ar": "يجب أن تحتوي المتحكمات (Controllers) على كامل منطق الأعمال في تطبيقات العمارة النظيفة (Clean Architecture).",
      "q_en": "Controllers should contain all business logic in a Clean Architecture application.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ وضع منطق الأعمال داخل المتحكمات ينتهك العمارة النظيفة ويجعل الكود شديد الترابط وضعيف الاختبار."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ تنتمي المتحكمات إلى طبقة العرض (Presentation Layer) ويقتصر دورها على استقبال طلبات HTTP وتوجيهها لطبقة التطبيق، بينما يسكن منطق الأعمال حصراً في طبقتي Domain و Application."
        }
      ],
      "tip": "وقفة امتحانية: تمنع العمارة النظيفة حظراً باتاً وضع أي Business Rules أو Database Queries داخل الـ Controllers."
    },
    {
      "n": 10,
      "type": "tf",
      "ref": "L5-S022",
      "q_ar": "يمكن لحقن التبعيات (Dependency Injection) المساعدة في تطبيق قاعدة التبعية (Dependency Rule).",
      "q_en": "Dependency Injection can help implement the Dependency Rule.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ حقن التبعيات (DI) هو الأداة التقنية التي تعكس اتجاه التحكم (IoC)، مما يمكن الطبقات الخارجية من تقديم تطبيقاتها للطبقات الداخلية دون أن تعتمد الطبقات الداخلية عليها."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "حقن التبعيات هو التقنية الأساسية المعتمدة لتحقيق قاعدة التبعية وتوجيه مسار التبعيات إلى الداخل دوماً."
        }
      ],
      "tip": "وقفة امتحانية: التوافق المعماري: مبدأ DIP يعرّف القاعدة النظرية (الاعتماد على التجريد)، بينما DI هو نمط التطبيق العملي الذي يحقن الكائنات وقت التشغيل."
    },
    {
      "n": 11,
      "type": "mcq",
      "ref": "L3-S036",
      "q_ar": "يستخدم أحد التطبيقات نظاماً فرعياً معقداً يضم كلاً من: AuthenticationService و PaymentService و NotificationService. وتريد تزويد العميل بواجهة موحدة وبسيطة لاستخدام هذه الخدمات. ما هو النمط الذي ينبغي استخدامه؟",
      "q_en": "An application uses a complex subsystem containing AuthenticationService, PaymentService, and NotificationService. You want to provide the client with one simple interface to use these services. Which pattern should you use?",
      "opts": [
        {
          "ar": "المزخرف (Decorator)",
          "en": "Decorator",
          "ok": false,
          "why": "نمط Decorator يضيف وظائف ديناميكية لكائن فردي ولا يوفر واجهة مبسطة لنظام فرعي معقد."
        },
        {
          "ar": "الواجهة الموحدة (Façade)",
          "en": "Façade",
          "ok": true,
          "why": "نمط Façade مصمم خصيصاً لتوفير واجهة مبسطة وعليا لنظام فرعي معقد يخفي تعقيداته وتنسيق استدعاء خدماته المتعددة خلف واجهة واحدة مريحة."
        },
        {
          "ar": "المراقب (Observer)",
          "en": "Observer",
          "ok": false,
          "why": "نمط Observer يختص ببث الإشعارات وتحديث المشتركين عند تغير حالة كائن ناشر."
        },
        {
          "ar": "الوكيل (Proxy)",
          "en": "Proxy",
          "ok": false,
          "why": "نمط Proxy يوفر نائباً لكائن واحد للتحكم بالوصول إليه أو التخزين المؤقت، وليس لنظام فرعي متعدد الخدمات."
        }
      ],
      "tip": "وقفة امتحانية: عندما ترى في السؤال عدة خدمات معقدة (خدمة دفع، مصادقة، إشعارات) والهدف تزويد العميل بواجهة موحدة بسيطة: الإجابة دائماً هي Façade."
    },
    {
      "n": 12,
      "type": "mcq",
      "ref": "L5-S022",
      "q_ar": "وفقاً لقاعدة التبعية (The Dependency Rule) في العمارة النظيفة، يجب أن تتجه مسارات التبعية دائماً:",
      "q_en": "According to the Dependency Rule, dependencies should point:",
      "opts": [
        {
          "ar": "من الطبقات الداخلية إلى الطبقات الخارجية",
          "en": "From inner layers to outer layers",
          "ok": false,
          "why": "هذا يعكس مبدأ العمارة النظيفة ويدمر استقلالية منطق الأعمال عن التفاصيل الخارجية."
        },
        {
          "ar": "من الطبقات الخارجية إلى الطبقات الداخلية",
          "en": "From outer layers to inner layers",
          "ok": true,
          "why": "تنص قاعدة التبعية على أن تبعيات الكود المصدري يجب أن تشير دائماً إلى الداخل فقط؛ حيث تعتمد الطبقات الخارجية على الطبقات الداخلية الأكثر تجريداً، ولا تعرف الطبقات الداخلية أي شيء عن الطبقات الخارجية."
        },
        {
          "ar": "من قاعدة البيانات إلى واجهة المستخدم",
          "en": "From database to UI",
          "ok": false,
          "why": "قاعدة البيانات وواجهة المستخدم كلاهما في الدوائر الخارجية ولا تتجه التبعيات بينهما مباشرة بهذا الشكل في العمارة النظيفة."
        },
        {
          "ar": "في كلا الاتجاهين معاً",
          "en": "In both directions",
          "ok": false,
          "why": "التبعية ثنائية الاتجاه (Circular Dependency) ممنوعة تماماً في العمارة البرمجية السليمة."
        }
      ],
      "tip": "وقفة امتحانية: السهم في مخطط الدوائر المتحدة لـ Clean Architecture يشير دائماً نحو المركز (Inward: Outer -> Inner)."
    },
    {
      "n": 13,
      "type": "mcq",
      "ref": "L5-S058",
      "q_ar": "أي طبقة في العمارة النظيفة تحتوي عادةً على الواجهات البرمجية للمستودعات مثل IUserRepository؟",
      "q_en": "Which layer normally contains interfaces such as IUserRepository?",
      "opts": [
        {
          "ar": "طبقة النطاق (Domain)",
          "en": "Domain",
          "ok": false,
          "why": "تحتوي طبقة Domain على الكيانات (Entities) وقواعد الأعمال الخالصة، بينما توضع واجهات المستودعات في طبقة Application بحسب منهج المقرر وسلايدات د. بيداء."
        },
        {
          "ar": "طبقة التطبيق (Application)",
          "en": "Application",
          "ok": true,
          "why": "في سلايدات المقرر المعتمدة (شريحة L5-S058 و L5-S063 بعنوان: Why Repository Interface is in Application)، تُعرّف طبقة Application واجهات المستودعات (مثل IUserRepository) كعقود لحالات الاستخدام (Use Cases)، وتفوض تنفيذها الفعلي لطبقة Infrastructure."
        },
        {
          "ar": "طبقة البنية التحتية (Infrastructure)",
          "en": "Infrastructure",
          "ok": false,
          "why": "تحتوي Infrastructure على التنفيذ الفعلي (UserRepository) وليس الواجهة التجريدية (IUserRepository)."
        },
        {
          "ar": "طبقة العرض (Presentation)",
          "en": "Presentation",
          "ok": false,
          "why": "طبقة Presentation لا تحتوي على واجهات مستودعات البيانات."
        }
      ],
      "tip": "وقفة امتحانية: احفظ هذه القاعدة المنهجية المعتمدة لدكتورة المادة: واجهة المستودع IUserRepository تُعرّف في طبقة Application، بينما تطبيقها الفعلي UserRepository يوضع في Infrastructure."
    },
    {
      "n": 14,
      "type": "mcq",
      "ref": "L5-S074",
      "q_ar": "أين يتم وضع التنفيذ الفعلي لقاعدة البيانات والمستودعات (Database Implementation) عادةً؟",
      "q_en": "Where should database implementation usually be placed?",
      "opts": [
        {
          "ar": "طبقة النطاق (Domain)",
          "en": "Domain",
          "ok": false,
          "why": "طبقة النطاق مستقلة تماماً عن قواعد البيانات وأطر العمل (Persistence Ignorance)."
        },
        {
          "ar": "طبقة التطبيق (Application)",
          "en": "Application",
          "ok": false,
          "why": "طبقة التطبيق تعتمد على التجريدات فقط ولا تحتوي على تفاصيل اتصال بقواعد البيانات."
        },
        {
          "ar": "طبقة البنية التحتية (Infrastructure)",
          "en": "Infrastructure",
          "ok": true,
          "why": "كافة التفاصيل التقنية الخاصة بالتعامل المباشر مع قواعد البيانات وأطر الـ ORM مثل Entity Framework Core وكتابة استعلامات SQL والمستودعات الملموسة توضع في Infrastructure."
        },
        {
          "ar": "طبقة العرض (Presentation)",
          "en": "Presentation",
          "ok": false,
          "why": "طبقة Presentation مخصصة فقط للتفاعل مع المستخدم وعرض النتائج."
        }
      ],
      "tip": "وقفة امتحانية: كل ما يرتبط بقواعد البيانات (EF Core, DbContext, SQL, Repositories Implementation) يسكن في طبقة البنية التحتية (Infrastructure)."
    },
    {
      "n": 15,
      "type": "mcq",
      "ref": "L1-S034",
      "q_ar": "أي من مبادئ SOLID يشجع على الاعتماد على التجريدات (Abstractions) بدلاً من الاعتماد على الفئات والتطبيقات الملموسة (Concrete Implementations)؟",
      "q_en": "Which principle encourages depending on abstractions rather than concrete implementations?",
      "opts": [
        {
          "ar": "مبدأ المسؤولية الواحدة (SRP)",
          "en": "SRP",
          "ok": false,
          "why": "يركز SRP على أن يكون للفئة سبب واحد فقط للتغيير ومسؤولية واحدة محددة."
        },
        {
          "ar": "مبدأ الفتح والإغلاق (OCP)",
          "en": "OCP",
          "ok": false,
          "why": "يركز OCP على أن تكون البرمجيات مفتوحة للتوسع ومغلقة أمام التعديل."
        },
        {
          "ar": "مبدأ استبدال لسكوف (LSP)",
          "en": "LSP",
          "ok": false,
          "why": "يركز LSP على قدرة الفئات المشتقة على أن تحل محل الفئات الأساسية دون كسر السلوك."
        },
        {
          "ar": "مبدأ عكس التبعية (DIP)",
          "en": "DIP",
          "ok": true,
          "why": "ينص مبدأ Dependency Inversion Principle صراحة على أن الوحدات عالية المستوى والمنخفضة المستوى يجب أن تعتمد كلاهما على التجريدات (Interfaces/Abstractions) وليس على التطبيقات الملموسة."
        }
      ],
      "tip": "وقفة امتحانية: 'Depend upon abstractions, not concretions' هو الشعار الرسمي لمبدأ DIP (الحرف D في SOLID)."
    },
    {
      "n": 16,
      "type": "essay",
      "ref": "L1-S019",
      "q_ar": "ما هي مبادئ SOLID؟ اشرح ثلاثة من مبادئها باختصار، واذكر مثالاً برمجياً بسيطاً بلغة #C لأحدها.",
      "q_en": "What is SOLID? Explain three of its principles briefly, and provide a simple C# example for one of them.",
      "ans_ar": "1. تعريف مبادئ SOLID:\nSOLID هو اختصار لخمسة مبادئ أساسية في التصميم البرمجي كائني التوجه صاغها روبرت مارتن (Uncle Bob)، وتهدف إلى بناء أنظمة برمجية مرنة، سهلة الصيانة، قابلة للتوسع، ومفككة الترابط.\n\n2. شرح ثلاثة من المبادئ:\n• مبدأ المسؤولية الواحدة (Single Responsibility Principle - SRP): يجب أن تمتلك الفئة سبباً واحداً فقط للتغيير، أي أن تركز على مسؤولية واحدة محددة دون تشتيت المهام.\n• مبدأ الفتح والإغلاق (Open/Closed Principle - OCP): يجب أن تكون الكيانات البرمجية مفتوحة للتوسع (إضافة ميزات جديدة) ولكنها مغلقة أمام التعديل (دون العبث بالكود المختبر مسبقاً).\n• مبدأ عكس التبعية (Dependency Inversion Principle - DIP): يجب ألا تعتمد الوحدات عالية المستوى على الوحدات منخفضة المستوى، بل يعتمد كلاهما على التجريدات (Interfaces).\n\n3. مثال برمجي بلغة #C لمبدأ المسؤولية الواحدة (SRP):\n// فئة مسؤولة حصراً عن بيانات الفاتورة وحساب قيمتها\npublic class Invoice {\n    public decimal Amount { get; set; }\n    public decimal CalculateTotal() => Amount * 1.15m;\n}\n\n// فئة منفصلة مسؤولة حصراً عن الطباعة وتوليد التقارير\npublic class InvoicePrinter {\n    public void Print(Invoice invoice) {\n        Console.WriteLine($\"Invoice Total: {invoice.CalculateTotal()}\");\n    }\n}",
      "tip": "وقفة امتحانية: في الأسئلة المقالية لمبادئ SOLID، اذكر الحرف والاسم الكامل لكل مبدأ، واكتب مثال #C بسيطاً يوضح الفصل بين فئتين لتنال الدرجة كاملة."
    },
    {
      "n": 17,
      "type": "essay",
      "ref": "L2-S009",
      "q_ar": "ما هي الفئات الثلاث الرئيسية لأنماط التصميم؟ اذكر مثالاً واحداً لكل فئة، وارسم مخطط صنف (UML/Class Diagram) لأحد الأنماط الإنشائية.",
      "q_en": "What are the three main categories of Design Patterns? Give one example for each category and draw a UML/Class Diagram for one of the creation patterns.",
      "ans_ar": "1. الفئات الثلاث الرئيسية لأنماط التصميم (GoF Categories):\n• أنماط التصميم الإنشائية (Creational Patterns): تهتم بآليات إنشاء الكائنات بطريقة مرنة وتفصل الكود عن تفاصيل الإنشاء. مثال: Singleton أو Factory Method.\n• أنماط التصميم الهيكلية (Structural Patterns): تهتم بكيفية تكوين وتركيب الفئات والكائنات في هياكل أكبر مع الحفاظ على مرونتها. مثال: Adapter أو Façade أو Decorator.\n• أنماط التصميم السلوكية (Behavioral Patterns): تهتم بكيفية تواصل الكائنات وتوزيع المسؤوليات والخوارزميات بينها. مثال: Strategy أو Observer.\n\n2. رسم مخطط صنف (UML Diagram) لنمط المفرد الإنشائي (Singleton Pattern):\n+-----------------------------------+\n|             Singleton             |\n+-----------------------------------+\n| - instance: Singleton {static}    |\n+-----------------------------------+\n| - Singleton()                     |  <-- منشئ خاص (Private Constructor)\n| + GetInstance(): Singleton {static}|  <-- نقطة وصول عامة ثابتة\n| + DoWork(): void                  |\n+-----------------------------------+\n\nشرح المخطط: يتميز الصنف بمنشئ فئة خاص (Private Constructor) لمنع الإنشاء الخارجي المباشر عبر new، ومتغير ثابت خاص يحمل النسخة الوحيدة، ودالة وصول ثابتة عامة GetInstance() تعيد هذه النسخة الوحيدة لجميع أجزاء البرنامج.",
      "tip": "وقفة امتحانية: نمط Singleton هو أسهل نمط إنشائي للرسم في ورقة الاختبار؛ لا تنسَ وضع علامة السالب (-) للمنشئ والنسخة وعلامة الزائد (+) لدالة GetInstance."
    }
  ]
});

/* ───────────────────────────────────────────────────────────
   النموذج الثاني (Model 2) — الاختبار النصفي 2026م
   ─────────────────────────────────────────────────────────── */
window.TOC_MODELS.push({
  "id": "midterm_2026_m2",
  "kind": "نظري",
  "title_ar": "اختبار نصفي 2026م — النموذج الثاني (د. بيداء لعلع)",
  "short_label": "نصفي 2",
  "teacher_ar": "د. بيداء لعلع",
  "origin_ar": "ورقة الاختبار النصفي الرسمي لعام 2026م — النموذج الثاني (د. بيداء لعلع). مستخرج بالرؤية البصرية بدقة متناهية ومدقق علمياً 100% وفق سلايدات المنهج المعتمدة، مع ربط كل سؤال بالشريحة المرجعية وتقديم التفسيرات والوقفات الامتحانية النموذجية.",
  "origin_label": "النموذج النصفي الثاني (CS25)",
  "origin_url": "https://t.me/c/2333768205/3220/3545",
  "questions": [
    {
      "n": 1,
      "type": "tf",
      "ref": "L5-S006",
      "q_ar": "مبدأ فصل الاهتمامات (Separation of Concerns) يعني تقسيم النظام إلى أجزاء مستقلة، بحيث يمتلك كل جزء مسؤولية واحدة محددة.",
      "q_en": "Separation of Concerns means dividing the system into independent parts, where each part has a single responsibility.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ مبدأ فصل الاهتمامات (SoC) هو الركيزة الهندسية لبناء أنظمة مجزأة إلى طبقات ووحدات مستقلة تعالج كل منها مسؤولية معمارية منفصلة."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "فصل الاهتمامات يهدف تحديداً لتقسيم النظام إلى أجزاء ذات مسؤوليات مستقلة."
        }
      ],
      "tip": "وقفة امتحانية: مبدأ فصل الاهتمامات (SoC) هو حجر الأساس لكل من العمارة متعددة الطبقات والعمارة النظيفة (Clean Architecture)."
    },
    {
      "n": 2,
      "type": "tf",
      "ref": "L4-S004",
      "q_ar": "نستخدم نمط المفرد (Singleton Pattern) عندما تتوفر عدة خوارزميات لحل نفس المشكلة البرمجية.",
      "q_en": "We use Singlton Pattern when multiple algorithms solve the same problem.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ النمط المناسب عند توفر عدة خوارزميات لحل المشكلة هو نمط الاستراتيجية (Strategy Pattern)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ نمط Singleton يضمن وجود نسخة واحدة فقط من الفئة، بينما يُستخدم نمط Strategy لتغليف عدة خوارزميات بديلة وتبديلها وقت التشغيل."
        }
      ],
      "tip": "وقفة امتحانية: عبارة 'Multiple algorithms solve the same problem' تشير حصراً إلى نمط الاستراتيجية (Strategy Pattern)."
    },
    {
      "n": 3,
      "type": "tf",
      "ref": "L2-S012",
      "q_ar": "تركز أنماط التصميم السلوكية (Behavioral Patterns) على كيفية تفاعل الكائنات وتواصلها مع بعضها البعض.",
      "q_en": "Behavioral Patterns focus on how objects interact and communicate.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ الأنماط السلوكية تعنى بتوزيع المسؤوليات وتدفق البيانات وبروتوكولات التواصل بين الكائنات."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "التواصل والتفاعل وتوزيع المسؤوليات هو جوهر الأنماط السلوكية (مثل Observer و Strategy)."
        }
      ],
      "tip": "وقفة امتحانية: تذكر: Creational = إنشاء، Structural = تركيب وهيكلة، Behavioral = تفاعل وتواصل (Interact and communicate)."
    },
    {
      "n": 4,
      "type": "tf",
      "ref": "L3-S012",
      "q_ar": "يعمل نمط الاستراتيجية (Strategy) كجسر بين فئتين عبر تحويل واجهة إحداهما إلى واجهة أخرى متوافقة يتوقعها العميل.",
      "q_en": "Strategy acts as a bridge between two classes by converting one interface into another that the client expects.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ هذا هو التعريف الحرفي لنمط المحول (Adapter Pattern) وليس الاستراتيجية."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ تحويل الواجهات لتعمل كجسر متوافق هو وظيفة نمط المحول (Adapter Pattern)، في حين يختص Strategy بتغيير خوارزمية العمل."
        }
      ],
      "tip": "وقفة امتحانية: عبارة 'converting one interface into another that client expects' هي التعريف الدقيق لنمط المحول (Adapter Pattern)."
    },
    {
      "n": 5,
      "type": "tf",
      "ref": "L3-S047",
      "q_ar": "نمط الوكيل (Proxy) هو نمط تصميم إنشائي يضمن أن الفئة تمتلك نسخة واحدة فقط، مع توفير نقطة وصول عامة موحدة لهذه النسخة.",
      "q_en": "Proxy is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ نمط الوكيل (Proxy) هو نمط هيكلي (Structural) يتحكم بالوصول إلى كائن آخر، والتعريف المذكور هو تعريف Singleton."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة من جهتين: Proxy نمط هيكلي وليس إنشائياً، كما أن هذا التعريف هو تعريف نمط المفرد (Singleton)."
        }
      ],
      "tip": "وقفة امتحانية: احذر من خلط تصنيفات الأنماط: Proxy نمط هيكلي (Structural)، بينما Singleton نمط إنشائي (Creational)."
    },
    {
      "n": 6,
      "type": "tf",
      "ref": "L1-S027",
      "q_ar": "يجب أن تكون الفئات المشتقة قادرة على أن تحل محل الفئات الأساسية دون الإخلال بسلوك البرنامج.",
      "q_en": "Derived classes should replace base classes without breaking behavior.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ هذا هو تعريف مبدأ استبدال لسكوف (LSP) الأساسي."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "هذا هو النص الصريح لمبدأ استبدال لسكوف (Liskov Substitution Principle)."
        }
      ],
      "tip": "وقفة امتحانية: سؤال متكرر في كافة النماذج: الفئة الابن تحل محل الفئة الأب دون كسر السلوك = LSP."
    },
    {
      "n": 7,
      "type": "tf",
      "ref": "L2-S023",
      "q_ar": "يعرّف نمط المفرد (Singleton) دالة يجب استخدامها لإنشاء الكائنات بدلاً من الاستدعاء المباشر لمنشئ الفئة (عبر المعامل new).",
      "q_en": "The Singlton defines a method, which should be used for creating objects instead of using a direct constructor call (new operator).",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ هذا هو توصيف نمط طريقة المصنع (Factory Method Pattern) وليس Singleton."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ النمط الذي يعرّف دالة مخصصة لإنشاء الكائنات بدلاً من الاستدعاء المباشر للمعامل new هو نمط طريقة المصنع (Factory Method Pattern)."
        }
      ],
      "tip": "وقفة امتحانية: تعريف Factory Method الحرفي في سلايدات د. بيداء (L2-S023): 'defines a method, which should be used for creating objects instead of using a direct constructor call (new operator)'."
    },
    {
      "n": 8,
      "type": "tf",
      "ref": "L1-S030",
      "q_ar": "يجب ألا يتم إجبار العملاء على الاعتماد على دوال برمجية لا يستخدمونها.",
      "q_en": "Clients should not be forced to depend on methods they do not use.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ هذا هو النص الدقيق لمبدأ فصل الواجهات (Interface Segregation Principle - ISP)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "هذا هو جوهر مبدأ فصل الواجهات (ISP) لتفادي الواجهات الضخمة غير المستغلة."
        }
      ],
      "tip": "وقفة امتحانية: نص مبدأ ISP الكلاسيكي: 'Clients should not be forced to depend upon interfaces that they do not use'."
    },
    {
      "n": 9,
      "type": "tf",
      "ref": "L5-S070",
      "q_ar": "يمكن لطبقة البنية التحتية (Infrastructure) تنفيذ الواجهات البرمجية المعرفة داخل طبقة التطبيق (Application).",
      "q_en": "Infrastructure can implement interfaces defined in the Application layer.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ في العمارة النظيفة تُعرّف طبقة Application الواجهات التجريدية (مثل IUserRepository) وتقوم طبقة Infrastructure بتنفيذها فعلياً، مما يطابق قاعدة التبعية للداخل."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "هذا هو الترتيب المعماري القياسي في العمارة النظيفة لتطبيق مبدأ انعكاس التبعية (DIP)."
        }
      ],
      "tip": "وقفة امتحانية: العلاقة الذهبية: Application تعلن الواجهة (Declare Interface) و Infrastructure تنفذها (Implement Interface)."
    },
    {
      "n": 10,
      "type": "tf",
      "ref": "L5-S065",
      "q_ar": "يساعد حقن التبعيات (Dependency Injection) في تقليل الترابط الشديد والوثيق بين الفئات.",
      "q_en": "Dependency Injection helps reduce tight coupling between classes.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ حقن التبعيات يفصل الفئات عن عملية إنشاء تبعياتها المباشرة ويوفر الترابط المفكك (Loose Coupling)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "تقليل الترابط الشديد (Tight Coupling) هو الفائدة الأساسية الأولى لحقن التبعيات."
        }
      ],
      "tip": "وقفة امتحانية: حقن التبعيات (DI) يحول الكود من Tight Coupling إلى Loose Coupling، مما يرفع قابلية الفحص والتطوير."
    },
    {
      "n": 11,
      "type": "mcq",
      "ref": "L4-S022",
      "q_ar": "نظام إشعارات يجب أن يرسل تنبيهاً تلقائياً لجميع المستخدمين المسجلين كلما تم نشر رسالة جديدة. ما هو النمط الأنسب؟",
      "q_en": "A notification system should automatically notify all registered users whenever a new message is published. Which pattern is most suitable?",
      "opts": [
        {
          "ar": "المحول (Adapter)",
          "en": "Adapter",
          "ok": false,
          "why": "نمط Adapter يوفر التوافق بين واجهتين غير متوافقتين ولا يتعامل مع بث الإشعارات."
        },
        {
          "ar": "طريقة المصنع (Factory Method)",
          "en": "Factory Method",
          "ok": false,
          "why": "نمط Factory Method يختص بإنشاء الكائنات وليس بنشر التحديثات للمشتركين."
        },
        {
          "ar": "المراقب (Observer)",
          "en": "Observer",
          "ok": true,
          "why": "نمط المراقب (Observer) يعرّف علاقة واحد-إلى-متعدد (One-to-Many)، حيث يرسل الناشر (Subject) إشعاراً تلقائياً لكافة المشتركين (Observers) المسجلين فور وقوع الحدث."
        },
        {
          "ar": "الوكيل (Proxy)",
          "en": "Proxy",
          "ok": false,
          "why": "نمط Proxy يتحكم بالوصول لكائن معين ولا يوفر آلية اشتراك ونشر متعددة."
        }
      ],
      "tip": "وقفة امتحانية: في أي سيناريو يتضمن بث إشعارات تلقائية لمشتركين عند نشر رسالة جديدة أو تغير حالة: الإجابة هي نمط المراقب (Observer)."
    },
    {
      "n": 12,
      "type": "mcq",
      "ref": "L3-S008",
      "q_ar": "أي نمط تصميم يوفر واجهة برمجية مبسطة للتعامل مع نظام فرعي معقد؟",
      "q_en": "Which Design Pattern provides a simplified interface to a complex subsystem?",
      "opts": [
        {
          "ar": "طريقة المصنع (Factory Method)",
          "en": "Factory Method",
          "ok": false,
          "why": "نمط إنشاء كائنات وليس واجهة لنظام فرعي."
        },
        {
          "ar": "المراقب (Observer)",
          "en": "Observer",
          "ok": false,
          "why": "نمط سلوكي للبث والتنبيه."
        },
        {
          "ar": "الواجهة الموحدة (Façade)",
          "en": "Façade",
          "ok": true,
          "why": "الهدف الرئيسي لنمط Façade هو توفير واجهة عالية المستوى ومبسطة تجعل استخدام النظام الفرعي المعقد أمراً هيناً على العميل."
        },
        {
          "ar": "المزخرف (Decorator)",
          "en": "Decorator",
          "ok": false,
          "why": "المزخرف يضيف سلوكيات جديدة لكائن موجود دون تغيير واجهته الأصلية."
        }
      ],
      "tip": "وقفة امتحانية: جملة 'Simplified interface to a complex subsystem' هي البصمة التعريفية الحرفية لنمط الواجهة الموحدة (Façade)."
    },
    {
      "n": 13,
      "type": "mcq",
      "ref": "L5-S074",
      "q_ar": "أين يجب أن يقع التنفيذ الفعلي لواجهة المستودع IUserRepository في العمارة النظيفة؟",
      "q_en": "Where should the actual implementation of IUserRepository normally be located?",
      "opts": [
        {
          "ar": "طبقة النطاق (Domain)",
          "en": "Domain",
          "ok": false,
          "why": "طبقة Domain لا ترتبط بأي تفاصيل تقنية أو قواعد بيانات."
        },
        {
          "ar": "طبقة التطبيق (Application)",
          "en": "Application",
          "ok": false,
          "why": "طبقة Application تحتوي على واجهة العقد (IUserRepository) فقط ولا تحتوي على التنفيذ الفعلي."
        },
        {
          "ar": "طبقة البنية التحتية (Infrastructure)",
          "en": "Infrastructure",
          "ok": true,
          "why": "التنفيذ الفعلي للمستودع (UserRepository) الذي يتعامل مع قاعدة البيانات وتقنيات التخزين مثل EF Core يقع حصراً في طبقة البنية التحتية (Infrastructure)."
        },
        {
          "ar": "طبقة العرض (Presentation)",
          "en": "Presentation",
          "ok": false,
          "why": "طبقة Presentation مخصصة فقط للتعامل مع طلبات المستخدم والواجهات."
        }
      ],
      "tip": "وقفة امتحانية: انتبه لصيغة السؤال: الواجهة (Interface) في Application، بينما التنفيذ الفعلي (Actual Implementation) في Infrastructure."
    },
    {
      "n": 14,
      "type": "mcq",
      "ref": "L5-S085",
      "q_ar": "أي مكوّن أو طبقة مسؤول عادةً عن استقبال ومعالجة طلبات واستجابات HTTP؟",
      "q_en": "Which component is usually responsible for HTTP requests and responses?",
      "opts": [
        {
          "ar": "طبقة النطاق (Domain)",
          "en": "Domain",
          "ok": false,
          "why": "طبقة النطاق لا علم لها بالإنترنت أو بروتوكول HTTP."
        },
        {
          "ar": "طبقة التطبيق (Application)",
          "en": "Application",
          "ok": false,
          "why": "طبقة التطبيق تعنى بمنطق حالات الاستخدام وتظل مستقلة عن بروتوكولات الاتصال كالويب."
        },
        {
          "ar": "طبقة البنية التحتية (Infrastructure)",
          "en": "Infrastructure",
          "ok": false,
          "why": "البنية التحتية تتعامل مع قواعد البيانات والمكتبات الخارجية وليس طلبات HTTP المباشرة للواجهة."
        },
        {
          "ar": "طبقة العرض (Presentation)",
          "en": "Presentation",
          "ok": true,
          "why": "طبقة العرض (Presentation Layer) التي تحتوي على المتحكمات (Controllers) ونقاط النهاية (API Endpoints) هي البوابة الخارجية المسؤولة عن التعامل مع طلبات واستجابات بروتوكول HTTP."
        }
      ],
      "tip": "وقفة امتحانية: مسؤوليات طبقة العرض (Presentation): التعامل مع بروتوكول الويب (HTTP Requests/Responses)، وتنسيق مخرجات JSON/HTML للعميل."
    },
    {
      "n": 15,
      "type": "mcq",
      "ref": "L1-S028",
      "q_ar": "فئة أساسية Bird تحتوي على دالة ()Fly. وفئة Penguin ترث من Bird، ولكن طائر البطريق لا يستطيع الطيران. أي مبدأ من مبادئ SOLID قد تم انتهاكه في هذا التصميم؟",
      "q_en": "A Bird base class contains a Fly() method. A Penguin class inherits from Bird, but penguins cannot fly. Which SOLID principle is potentially violated?",
      "opts": [
        {
          "ar": "مبدأ المسؤولية الواحدة (SRP)",
          "en": "SRP",
          "ok": false,
          "why": "المشكلة ليست في تعدد مسؤوليات الفئة، بل في علاقة الوراثة غير القابلة للاستبدال."
        },
        {
          "ar": "مبدأ الفتح والإغلاق (OCP)",
          "en": "OCP",
          "ok": false,
          "why": "الانتهاك يرتبط بسلوك الاستبدال المكسور بين الأب والابن."
        },
        {
          "ar": "مبدأ استبدال لسكوف (LSP)",
          "en": "LSP",
          "ok": true,
          "why": "هذا هو المثال الكلاسيكي لانتهاك مبدأ استبدال لسكوف (LSP)؛ لأن استبدال كائن Bird بكائن Penguin سيؤدي لرمي استثناء عند استدعاء ()Fly، مما يكسر تعاقد الفئة الأساسية."
        },
        {
          "ar": "مبدأ عكس التبعية (DIP)",
          "en": "DIP",
          "ok": false,
          "why": "المشكلة لا تتعلق بحقن التبعيات أو الاعتماد على التجريد."
        }
      ],
      "tip": "وقفة امتحانية: مثال الطائر والبطريق (Bird & Penguin) أو المستطيل والمربع (Rectangle & Square) هو المثال الأشهر عالمياً على انتهاك مبدأ LSP."
    },
    {
      "n": 16,
      "type": "essay",
      "ref": "L1-S013",
      "q_ar": "ما هي المبادئ الأربعة الرئيسية للبرمجة كائنية التوجه (OOP)؟ اشرح كل مبدأ باختصار، واذكر مثالاً برمجياً بسيطاً بلغة #C لأحدها.",
      "q_en": "What are the four main principles of Object-Oriented Programming (OOP)? Explain each principle briefly, and provide a simple C# example for one of them.",
      "ans_ar": "1. المبادئ الأربعة الرئيسية للبرمجة كائنية التوجه (OOP Principles):\n• التغليف (Encapsulation): دمج البيانات (الحقول) والعمليات التي تعمل عليها داخل وحدة واحدة (Class)، وإخفاء الحالة الداخلية وحمايتها عبر محددات الوصول (Access Modifiers) لتفادي التعديل غير المصرّح.\n• التجريد (Abstraction): إظهار التفاصيل الأساسية والوظائف الهامة فقط للمستخدم مع إخفاء التعقيدات الداخلية وآليات التنفيذ عبر الواجهات (Interfaces) والفئات المجردة (Abstract Classes).\n• الوراثة (Inheritance): تمكين فئة جديدة (مشتقة/ابن) من وراثة الخصائص والدوال من فئة قائمة (أساسية/أب)، مما يعزز إعادة استخدام الكود ويمثل علاقة (is-a).\n• تعدد الأشكال (Polymorphism): قدرة الكائنات المختلفة على الاستجابة لنفس الاستدعاء البرمجي بطريقتها الخاصة المحددة، سواء أثناء وقت الترجمة (Overloading) أو وقت التشغيل (Overriding).\n\n2. مثال برمجي بلغة #C لمبدأ التغليف (Encapsulation):\npublic class BankAccount {\n    // حقل خاص مخفي لحماية الرصيد من التعديل العشوائي الخارجي\n    private decimal _balance;\n\n    // خاصية للقراءة فقط\n    public decimal Balance => _balance;\n\n    // دالة محكومة بقواعد الأعمال لإيداع الأموال بأمان\n    public void Deposit(decimal amount) {\n        if (amount > 0) {\n            _balance += amount;\n        }\n    }\n}",
      "tip": "وقفة امتحانية: احفظ المبادئ الأربعة بكلمة واحدة لكل منها: التغليف = حماية، التجريد = تبسيط، الوراثة = إعادة استخدام، التعدد = مرونة استجابة."
    },
    {
      "n": 17,
      "type": "essay",
      "ref": "L5-S025",
      "q_ar": "ارسم مخطط صنف (UML/Class Diagram) للسيناريو التالي في العمارة النظيفة: يشتمل النظام على: Account Entity و IAccountRepository و AccountService و AccountRepository و AccountController. وضّح العلاقات بين الفئات وحدد الطبقة التي ينتمي إليها كل مكوّن.",
      "q_en": "Draw a UML/Class Diagram for the following Clean Architecture scenario: A system contains: Account Entity, IAccountRepository, AccountService, AccountRepository, AccountController. Show the relationships between the classes/interfaces and indicate which layer each component belongs to.",
      "ans_ar": "1. توزيع المكونات على طبقات العمارة النظيفة (Layer Mapping):\n• طبقة النطاق (Domain Layer): الكيان Account Entity.\n• طبقة التطبيق (Application Layer): واجهة المستودع IAccountRepository وخدمة التطبيق AccountService.\n• طبقة البنية التحتية (Infrastructure Layer): المستودع الفعلي الملموس AccountRepository.\n• طبقة العرض (Presentation Layer): المتحكم AccountController.\n\n2. مسار التبعيات والعلاقات المعمارية:\n• المتحكم AccountController (Presentation) يعتمد على AccountService (Application).\n• الخدمة AccountService (Application) تعتمد على واجهة IAccountRepository وتتعامل مع الكيان Account.\n• المستودع AccountRepository (Infrastructure) ينفذ (Implements) واجهة IAccountRepository محققاً مبدأ انعكاس التبعية (DIP).\n\n3. مخطط الصنف المعماري (UML Diagram):\n+-------------------------------------------------------------+\n| PRESENTATION LAYER                                          |\n|   [ AccountController ]                                     |\n+----------------------|--------------------------------------+\n                       | depends on (يستدعي)\n                       v\n+-------------------------------------------------------------+\n| APPLICATION LAYER                                           |\n|   [ AccountService ] -------> [ <<interface>>              ]|\n|           |             uses  [ IAccountRepository         ]|\n+-----------|----------------------------------^--------------+\n            |                                  | implements (ينفذ)\n            | uses                             |\n            v                                  |\n+------------------------+       +-------------|--------------+\n| DOMAIN LAYER           |       | INFRASTRUCTURE LAYER       |\n|   [ Account Entity ]   |<------|   [ AccountRepository ]    |\n+------------------------+ uses  +----------------------------+",
      "tip": "وقفة امتحانية: تأكد من رسم 4 مستطيلات واضحة تمثل الطبقات الأربع، وبيّن سهم التنفيذ المتقطع من Infrastructure إلى Application لتمثيل انعكاس التبعية."
    }
  ]
});

/* ───────────────────────────────────────────────────────────
   النموذج الثالث (Model 3) — الاختبار النصفي 2026م
   ─────────────────────────────────────────────────────────── */
window.TOC_MODELS.push({
  "id": "midterm_2026_m3",
  "kind": "نظري",
  "title_ar": "اختبار نصفي 2026م — النموذج الثالث (د. بيداء لعلع)",
  "short_label": "نصفي 3",
  "teacher_ar": "د. بيداء لعلع",
  "origin_ar": "ورقة الاختبار النصفي الرسمي لعام 2026م — النموذج الثالث (د. بيداء لعلع). مستخرج بالرؤية البصرية بدقة متناهية ومدقق علمياً 100% وفق سلايدات المنهج المعتمدة، مع ربط كل سؤال بالشريحة المرجعية وتقديم التفسيرات والوقفات الامتحانية النموذجية.",
  "origin_label": "النموذج النصفي الثالث (CS25)",
  "origin_url": "https://t.me/c/2333768205/3220/3546",
  "questions": [
    {
      "n": 1,
      "type": "tf",
      "ref": "L1-S009",
      "q_ar": "يركز مساق البرمجة المتقدمة على تصميم وتطوير أنظمة برمجية عالية الجودة، قابلة للتوسع والتطوير والصيانة.",
      "q_en": "Advanced Programming focuses on designing and developing scalable, maintainable, and high-quality software systems.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ الهدف الجوهري لمساق البرمجة المتقدمة هو الانتقال من كتابة أكواد بسيطة إلى هندسة أنظمة متينة وقابلة للصيانة والتوسع والتطوير المستمر."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "هذا هو الهدف الأساسي المعرّف في المحاضرة الأولى للمساق."
        }
      ],
      "tip": "وقفة امتحانية: تعريف البرمجة المتقدمة: التركيز على القابلية للصيانة والتوسع وجودة المعمارية (Scalable, Maintainable & High-Quality)."
    },
    {
      "n": 2,
      "type": "tf",
      "ref": "L1-S023",
      "q_ar": "يجب أن يكون العنصر البرمجي مفتوحاً للتعديل ولكنه مغلق أمام التوسع.",
      "q_en": "A software artifact should be open for modification but closed for extension.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ النص يعكس نص مبدأ OCP تماماً؛ فالصحيح أن يكون مفتوحاً للتوسع ومغلقاً أمام التعديل."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ نص مبدأ الفتح والإغلاق (OCP) ينص على: 'Open for extension, but closed for modification' (مفتوح للتوسع ومغلق أمام التعديل)."
        }
      ],
      "tip": "وقفة امتحانية: خدعة امتحانية شهيرة: عكس الكلمات في OCP: تذكر دائماً (Open for extension, Closed for modification)."
    },
    {
      "n": 3,
      "type": "tf",
      "ref": "L3-S008",
      "q_ar": "يوفر نمط الواجهة الموحدة (Façade Pattern) واجهة برمجية مبسطة للتعامل مع نظام فرعي معقد.",
      "q_en": "Façade Pattern provides a simplified interface to a complex subsystem",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ هذا هو التعريف القياسي الدقيق لنمط الواجهة الموحدة (Façade)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "الهدف الرئيسي لنمط Façade هو تبسيط الواجهة للأنظمة الفرعية المعقدة."
        }
      ],
      "tip": "وقفة امتحانية: نمط Façade هو القناع الموحد الذي يخفي تفاعلات الأنظمة المعقدة خلف شاشة اتصال مبسطة."
    },
    {
      "n": 4,
      "type": "tf",
      "ref": "L2-S023",
      "q_ar": "يعرّف نمط طريقة المصنع (Factory Method) دالة يجب استخدامها لإنشاء الكائنات بدلاً من الاستدعاء المباشر لمنشئ الفئة (عبر المعامل new).",
      "q_en": "The Factory Method defines a method, which should be used for creating objects instead of using a direct constructor call (new operator).",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ هذا هو النص الدقيق المعتمد في السلايد لتعريف نمط Factory Method."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "طريقة المصنع تفوض إنشاء الكائنات لدالة مخصصة بدلاً من استخدام المعامل new المباشر."
        }
      ],
      "tip": "وقفة امتحانية: في النموذج الثاني تم نسب هذا التعريف لـ Singleton وكان خطأ، وهنا نُسب لـ Factory Method ولذلك فهو صح."
    },
    {
      "n": 5,
      "type": "tf",
      "ref": "L1-S027",
      "q_ar": "إذا أدى استبدال كائن من الفئة الأب بكائن من الفئة الابن إلى كسر أو تعطل سلوك البرنامج، فإن مبدأ استبدال لسكوف (LSP) يكون قد تم انتهاكه.",
      "q_en": "If replacing a parent object with a child object breaks the program, LSP is violated.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ مبدأ LSP يشترط أن تحل الكائنات المشتقة محل الكائنات الأصلية بسلاسة تامة دون كسر وظائف البرنامج."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "كسر سلوك البرنامج عند استبدال الأب بالابن هو التوصيف المباشر لانتهاك مبدأ لسكوف."
        }
      ],
      "tip": "وقفة امتحانية: معيار الحكم على LSP: هل يمكن استبدال الأب بالابن دون مفاجآت أو أعطال؟ إذا كان الجواب نعم فالمبدأ محقق، وإذا كان لا فهو منتهك."
    },
    {
      "n": 6,
      "type": "tf",
      "ref": "L2-S010",
      "q_ar": "تركز أنماط التصميم الإنشائية (Creational Patterns) على كيفية تكوين وتركيب الفئات والكائنات معاً.",
      "q_en": "Creational Patterns focus on how classes and objects are composed.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ الأنماط التي تركز على كيفية تكوين وتركيب الفئات والكائنات هي الأنماط الهيكلية (Structural Patterns)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ الأنماط الإنشائية تختص بإنشاء الكائنات (Object Creation)، بينما الأنماط الهيكلية (Structural Patterns) هي التي تركز على تركيبها وتكوينها (Composition)."
        }
      ],
      "tip": "وقفة امتحانية: انتبه للفارق اللفظي الدقيق: 'how objects are created' = Creational، بينما 'how classes and objects are composed' = Structural."
    },
    {
      "n": 7,
      "type": "tf",
      "ref": "L3-S006",
      "q_ar": "تفضّل معظم أنماط التصميم الهيكلية التركيب على الوراثة (Composition over Inheritance).",
      "q_en": "Most Structural Patterns prefer Composition over Inheritance.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ 'Favor composition over inheritance' هو الشعار الأساسي لأنماط التصميم الهيكلية لضمان المرونة وتجنب الوراثة الهشة."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "تفضيل التركيب على الوراثة هو المبدأ الجوهري المعتمد في كافة الأنماط الهيكلية كـ Adapter و Decorator و Facade."
        }
      ],
      "tip": "وقفة امتحانية: القاعدة الهندسية الراسخة: التركيب (Composition) يمنح مرونة عالية في وقت التشغيل، بينما الوراثة (Inheritance) ترابط صلب وثابت في وقت الترجمة."
    },
    {
      "n": 8,
      "type": "tf",
      "ref": "L3-S047",
      "q_ar": "يوفر نمط الوكيل (Proxy Pattern) عنصراً نائباً أو بديلاً لكائن آخر بغرض التحكم في الوصول إليه.",
      "q_en": "The Proxy Pattern provides a placeholder or surrogate for another object to control access to it.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ هذا هو التعريف المعياري الحرفي لنمط الوكيل (Proxy)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "نمط الوكيل يعمل كبديل أو نائب (Placeholder/Surrogate) للتحكم بالوصول والحماية أو التحميل المؤجل."
        }
      ],
      "tip": "وقفة امتحانية: الكلمات الدالة على Proxy: 'placeholder or surrogate' للتحكم في الوصول (control access)."
    },
    {
      "n": 9,
      "type": "tf",
      "ref": "L5-S045",
      "q_ar": "يجب أن تعتمد طبقة النطاق (Domain layer) بشكل مباشر على مكتبة Entity Framework Core.",
      "q_en": "The Domain layer should depend directly on Entity Framework Core.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "عبارة خاطئة؛ طبقة Domain يجب أن تكون نقية وخالية تماماً من أي تبعيات لأطر عمل أو قواعد بيانات."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "عبارة خاطئة؛ تنص العمارة النظيفة على استقلالية طبقة النطاق (Persistence Ignorance)، بينما مكتبة EF Core تنتمي حصراً لطبقة البنية التحتية (Infrastructure)."
        }
      ],
      "tip": "وقفة امتحانية: محظورات طبقة Domain: ممنوع وجود أي مراجع لـ Entity Framework أو SQL أو أي مكتبة خارجية فيها."
    },
    {
      "n": 10,
      "type": "tf",
      "ref": "L5-S019",
      "q_ar": "تساعد العمارة النظيفة (Clean Architecture) في فصل منطق الأعمال عن اهتمامات البنية التحتية والتفاصيل التقنية.",
      "q_en": "Clean Architecture helps separate business logic from infrastructure concerns.",
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "عبارة صحيحة؛ هذا هو الهدف الأسمى للعمارة النظيفة لضمان استقلالية قواعد الأعمال وقابليتها للصيانة والفحص."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "عزل منطق الأعمال عن تفاصيل البنية التحتية هو الدافع الأساسي لابتكار العمارة النظيفة."
        }
      ],
      "tip": "وقفة امتحانية: العمارة النظيفة تجعل منطق الأعمال في القلب مستقلاً عن قاعدة البيانات، واجهة المستخدم، والأجهزة الخارجية."
    },
    {
      "n": 11,
      "type": "mcq",
      "ref": "L4-S003",
      "q_ar": "يدعم نظام دفع كلاً من الدفع بالبطاقة الائتمانية (CreditCardPayment)، وباي بال (PayPalPayment)، والتحويل البنكي (BankTransferPayment). ويجب أن يتمكن التطبيق من تغيير خوارزمية الدفع أثناء وقت التشغيل. ما هو النمط الأنسب؟",
      "q_en": "A payment system supports CreditCardPayment, PayPalPayment, and BankTransferPayment. The application should be able to change the payment algorithm at runtime. Which pattern is most suitable?",
      "opts": [
        {
          "ar": "الاستراتيجية (Strategy)",
          "en": "Strategy",
          "ok": true,
          "why": "نمط الاستراتيجية (Strategy Pattern) يغلف خوارزميات الدفع المختلفة في فئات منفصلة تشترك في واجهة موحدة، مما يمكن النظام من تبديل خوارزمية الدفع ديناميكياً أثناء وقت التشغيل."
        },
        {
          "ar": "طريقة المصنع (Factory Method)",
          "en": "Factory Method",
          "ok": false,
          "why": "يختص بإنشاء الكائنات وليس بتبديل خوارزميات السلوك أثناء التشغيل."
        },
        {
          "ar": "المحول (Adapter)",
          "en": "Adapter",
          "ok": false,
          "why": "يختص بتوفيق الواجهات غير المتوافقة."
        },
        {
          "ar": "الواجهة الموحدة (Façade)",
          "en": "Façade",
          "ok": false,
          "why": "يختص بتبسيط واجهة الأنظمة المعقدة."
        }
      ],
      "tip": "وقفة امتحانية: مثال الدفع المتعدد (CreditCard, PayPal, BankTransfer) القابل للتبديل في وقت التشغيل هو المثال الرسمي لنمط الاستراتيجية (Strategy) في المحاضرة 4."
    },
    {
      "n": 12,
      "type": "mcq",
      "ref": "L5-S019",
      "q_ar": "ما هو الهدف الرئيسي والأساسي للعمارة النظيفة (Clean Architecture)؟",
      "q_en": "What is the main goal of Clean Architecture?",
      "opts": [
        {
          "ar": "جعل التطبيق أسرع في التنفيذ",
          "en": "Make the application faster",
          "ok": false,
          "why": "العمارة النظيفة تركز على جودة التصميم والصيانة وليس مجرد سرعة التنفيذ الحسابي."
        },
        {
          "ar": "فصل الاهتمامات وتقليل التبعيات والترابط",
          "en": "Separate concerns and reduce dependencies",
          "ok": true,
          "why": "الهدف الرئيسي للعمارة النظيفة هو تحقيق فصل الاهتمامات (Separation of Concerns)، وعزل منطق الأعمال عن تفاصيل البنية التحتية، وجعل النظام مفكك الترابط وقابلاً للاختبار والتطوير."
        },
        {
          "ar": "حذف وإلغاء قاعدة البيانات نهائياً",
          "en": "Remove the database",
          "ok": false,
          "why": "العمارة النظيفة لا تحذف قاعدة البيانات بل تعزلها كأداة وتفصيل خارجي."
        },
        {
          "ar": "استخدام أكبر قدر ممكن من أنماط التصميم",
          "en": "Use more design patterns",
          "ok": false,
          "why": "الإفراط في الأنماط دون حاجة هو هندسة مفرطة وممارسة سيئة."
        }
      ],
      "tip": "وقفة امتحانية: الهدف الأسمى لأي معمارية برمجية رفيعة هو فصل الاهتمامات وتفكيك التبعيات (Separate concerns and reduce dependencies)."
    },
    {
      "n": 13,
      "type": "mcq",
      "ref": "L5-S027",
      "q_ar": "أي طبقة في العمارة النظيفة تحتوي على الكيانات الأساسية (Entities) وقواعد الأعمال الجوهرية؟",
      "q_en": "Which layer contains the core business entities and rules?",
      "opts": [
        {
          "ar": "طبقة العرض (Presentation)",
          "en": "Presentation",
          "ok": false,
          "why": "طبقة العرض تتعامل مع واجهات المستخدم وبروتوكول HTTP."
        },
        {
          "ar": "طبقة البنية التحتية (Infrastructure)",
          "en": "Infrastructure",
          "ok": false,
          "why": "طبقة البنية التحتية تحتوي على قواعد البيانات ومكتبات الوصول للبيانات."
        },
        {
          "ar": "طبقة التطبيق (Application)",
          "en": "Application",
          "ok": false,
          "why": "طبقة التطبيق تحتوي على حالات الاستخدام (Use Cases) وتدفقات الأعمال وليس الكيانات الجوهرية."
        },
        {
          "ar": "طبقة النطاق (Domain)",
          "en": "Domain",
          "ok": true,
          "why": "طبقة النطاق (Domain Layer) هي قلب النظام المركزي، وتضم الكيانات الأساسية (Entities)، وكائنات القيمة (Value Objects)، وقواعد الأعمال المؤسسية الجوهرية المستقلة عن أي تقنية."
        }
      ],
      "tip": "وقفة امتحانية: Core business entities and rules = Domain Layer (قلب النظام النابض)."
    },
    {
      "n": 14,
      "type": "mcq",
      "ref": "L5-S051",
      "q_ar": "أي طبقة في العمارة النظيفة مسؤولة عن حالات استخدام التطبيق (Use Cases) وتدفقات الأعمال؟",
      "q_en": "Which layer is responsible for application use cases and business workflows?",
      "opts": [
        {
          "ar": "طبقة النطاق (Domain)",
          "en": "Domain",
          "ok": false,
          "why": "طبقة النطاق تحتوي على الكيانات العامة للمؤسسة وليس تدفقات التطبيق وسيناريوهاته الخاصة."
        },
        {
          "ar": "طبقة التطبيق (Application)",
          "en": "Application",
          "ok": true,
          "why": "طبقة التطبيق (Application Layer) هي المسؤولة عن تنسيق حالات الاستخدام (Use Cases)، وتدفقات الأعمال، وتنظيم التفاعل بين الكيانات والخدمات لتحقيق سيناريوهات التطبيق."
        },
        {
          "ar": "طبقة البنية التحتية (Infrastructure)",
          "en": "Infrastructure",
          "ok": false,
          "why": "البنية التحتية تنفذ العمليات التقنية كالاتصال بالشبكة وقواعد البيانات."
        },
        {
          "ar": "طبقة العرض (Presentation)",
          "en": "Presentation",
          "ok": false,
          "why": "طبقة العرض تتعامل مع طلبات الويب والشاشات."
        }
      ],
      "tip": "وقفة امتحانية: تذكر الثنائية: الكيانات وقواعد الأعمال العامة = Domain، بينما حالات الاستخدام وتدفقات التطبيق = Application."
    },
    {
      "n": 15,
      "type": "mcq",
      "ref": "L1-S023",
      "q_ar": "أي مبدأ من مبادئ SOLID ينص على أن العناصر البرمجية يجب أن تكون مفتوحة للتوسع ولكن مغلقة أمام التعديل؟",
      "q_en": "Which principle states that software entities should be open for extension but closed for modification?",
      "opts": [
        {
          "ar": "مبدأ المسؤولية الواحدة (SRP)",
          "en": "SRP",
          "ok": false,
          "why": "ينص على أن الفئة لها سبب واحد للتغيير ومهمة واحدة."
        },
        {
          "ar": "مبدأ الفتح والإغلاق (OCP)",
          "en": "OCP",
          "ok": true,
          "why": "هذا هو النص المعياري الحرفي لمبدأ الفتح والإغلاق (Open/Closed Principle - OCP)."
        },
        {
          "ar": "مبدأ استبدال لسكوف (LSP)",
          "en": "LSP",
          "ok": false,
          "why": "ينص على إمكانية استبدال الفئات الأساسية بالمشتقة دون كسر السلوك."
        },
        {
          "ar": "مبدأ عكس التبعية (DIP)",
          "en": "DIP",
          "ok": false,
          "why": "ينص على الاعتماد على التجريد وليس التطبيقات الملموسة."
        }
      ],
      "tip": "وقفة امتحانية: Open for extension + Closed for modification = OCP (الحرف O في SOLID)."
    },
    {
      "n": 16,
      "type": "essay",
      "ref": "L1-S013",
      "q_ar": "ما هي المبادئ الأربعة الرئيسية للبرمجة كائنية التوجه (OOP)؟ اشرح كل مبدأ باختصار، واذكر مثالاً برمجياً بسيطاً بلغة #C لأحدها.",
      "q_en": "What are the four main principles of Object-Oriented Programming (OOP)? Explain each principle briefly, and provide a simple C# example for one of them.",
      "ans_ar": "1. المبادئ الأربعة الرئيسية للبرمجة كائنية التوجه (OOP Principles):\n• التغليف (Encapsulation): جمع البيانات والعمليات في فئة واحدة وإخفاء الحالة الداخلية لمنع التلاعب المباشر عبر محددات الوصول.\n• التجريد (Abstraction): عرض الوظائف الجوهرية وإخفاء التفاصيل التنفيذية المعقدة باستخدام الواجهات والفئات المجردة.\n• الوراثة (Inheritance): إنشاء فئات جديدة تعتمد على فئات سابقة لإعادة استخدام الكود وإنشاء علاقة تصنيفية هرمية.\n• تعدد الأشكال (Polymorphism): تمكين واجهة أو دالة موحدة من التعامل مع أنواع مختلفة من الكائنات بسلوكيات مخصصة لكل نوع.\n\n2. مثال برمجي بلغة #C لمبدأ تعدد الأشكال (Polymorphism):\n// فئة أساسية تعرف دالة افتراضية\npublic abstract class Shape {\n    public abstract double CalculateArea();\n}\n\n// فئة مشتقة تعيد تعريف السلوك بطريقتها الخاصة\npublic class Circle : Shape {\n    public double Radius { get; set; }\n    public override double CalculateArea() => Math.PI * Radius * Radius;\n}\n\n// فئة مشتقة أخرى بسلوك مختلف\npublic class Rectangle : Shape {\n    public double Width { get; set; }\n    public double Height { get; set; }\n    public override double CalculateArea() => Width * Height;\n}",
      "tip": "وقفة امتحانية: مبدأ Polymorphism يظهر بوضوح عند استخدام الكلمات المفتاحية virtual و override في #C."
    },
    {
      "n": 17,
      "type": "essay",
      "ref": "L5-S025",
      "q_ar": "ارسم مخطط صنف (UML/Class Diagram) للسيناريو التالي في العمارة النظيفة: يشتمل النظام على: User Entity و IUserRepository و UserService و UserRepository و UserController. وضّح العلاقات بين الفئات وحدد الطبقة التي ينتمي إليها كل مكوّن.",
      "q_en": "Draw a UML/Class Diagram for the following Clean Architecture scenario: A system contains: User Entity, IUserRepository, UserService, UserRepository, UserController. Show the relationships between the classes/interfaces and indicate which layer each component belongs to.",
      "ans_ar": "1. توزيع المكونات على طبقات العمارة النظيفة (Layer Mapping):\n• طبقة النطاق (Domain Layer): الكيان User Entity.\n• طبقة التطبيق (Application Layer): الواجهة IUserRepository وخدمة التطبيق UserService.\n• طبقة البنية التحتية (Infrastructure Layer): المستودع الفعلي الملموس UserRepository.\n• طبقة العرض (Presentation Layer): المتحكم UserController.\n\n2. العلاقات الهندسية بين المكونات:\n• المتحكم UserController (Presentation) يستدعي خدمة التطبيق UserService.\n• خدمة التطبيق UserService (Application) تعتمد على الواجهة التجريدية IUserRepository وتتعامل مع الكيان User.\n• مستودع البيانات UserRepository (Infrastructure) ينفذ (Implements) الواجهة IUserRepository ويجري العمليات على User في قاعدة البيانات.\n\n3. مخطط الصنف المعماري (UML Diagram):\n+-------------------------------------------------------------+\n| PRESENTATION LAYER                                          |\n|   [ UserController ]                                        |\n+----------------------|--------------------------------------+\n                       | depends on (يستدعي)\n                       v\n+-------------------------------------------------------------+\n| APPLICATION LAYER                                           |\n|   [ UserService ] ------------> [ <<interface>>            ]|\n|           |             uses    [ IUserRepository          ]|\n+-----------|----------------------------------^--------------+\n            |                                  | implements (ينفذ)\n            | uses                             |\n            v                                  |\n+------------------------+       +-------------|--------------+\n| DOMAIN LAYER           |       | INFRASTRUCTURE LAYER       |\n|   [ User Entity ]      |<------|   [ UserRepository ]       |\n+------------------------+ uses  +----------------------------+",
      "tip": "وقفة امتحانية: تذكر قاعدة التبعية في العمارة النظيفة: لا يجوز لـ Domain أو Application أن يشير إلى Infrastructure أو Presentation أبداً."
    }
  ]
});
