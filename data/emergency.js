/* ═══════════════════════════════════════════════════════════
   دليل قناص الخيارات وخدع الامتحان (قاعدة 80/20) — البرمجة المتقدمة
   المدرس: د. بيداء لعلع — مقرر AP (نظري)
   مخصص حصرياً لأسئلة الاختيار من متعدد (MCQ) والصواب والخطأ (True/False)
   معيار صفر إيموجيات (Zero Emojis Standard) · 100% تركيز امتحاني
   ═══════════════════════════════════════════════════════════ */
window.TOC_EMERGENCY = {
  "title_ar": "دليل قناص الخيارات وخدع الامتحان (MCQ & T/F Sniper)",
  "sub_ar": "استراتيجيات الحل الفوري لأسئلة الاختيار من متعدد والصواب والخطأ — كيف تحصد 80% من الدرجات بالكلمات المفتاحية واستبعاد الفخاخ التمويهية لدكتورة بيداء لعلع.",
  "sections": [
    {
      "id": "em_mcq_tricks",
      "nav_title": "1. استراتيجيات قناص MCQ",
      "title": "استراتيجيات وخدع قناص أسئلة الاختيار من متعدد (MCQ Sniper Tricks)",
      "badge": "قواعد الحل في 5 ثوانٍ",
      "desc": "الامتحان النهائي يعتمد بنسبة شبه كاملة على الاختيار من متعدد (MCQ) مع فقرات صواب وخطأ. لا تقرأ الأسئلة قراءة إنشائية؛ استخدم هذه القواعد التكتيكية الأربع لحسم الإجابة واستبعاد الخيارات الخاطئة فوراً:",
      "type": "cards",
      "cards": [
        {
          "num": "1",
          "title": "خدعة التصنيف الثلاثي واستبعاد الخيارات (GoF Category Elimination)",
          "body": "عندما يبدأ السؤال بعبارة «Which structural pattern...» أو «Which creational pattern...»، لا تضع وقتك في قراءة السيناريو الطويل أولاً! انظر مباشرة للخيارات واستبعد أي نمط لا ينتمي للتصنيف المطلوب: الإنشائية (Creational) تشمل Singleton و Factory Method فقط؛ الهيكلية (Structural) تشمل Adapter و Facade و Proxy و Decorator فقط؛ السلوكية (Behavioral) تشمل Strategy و Observer و State و Command فقط. إذا كان السؤال يطلب نمطاً هيكلياً، اشطب فوراً Singleton و Factory و Strategy و State. سيبقى أمامك خيار أو خياران فقط!"
        },
        {
          "num": "2",
          "title": "خدعة الكلمات المفتاحية الإنجليزية الحتمية (Trigger Keywords)",
          "body": "تعتمد الدكتورة في صياغة أسئلتها على المصطلحات الرسمية الواردة في السلايدات بالنص الحرفي. احفظ هذه الثنائيات الذهبية: كلمة «incompatible / legacy» تعني حتماً Adapter · كلمة «simplified / unified interface» تعني حتماً Facade · كلمة «single instance / global access» تعني حتماً Singleton · كلمة «subclasses decide» تعني حتماً Factory Method · كلمة «surrogate / placeholder / access control» تعني حتماً Proxy · كلمة «attach responsibilities dynamically» تعني حتماً Decorator · كلمة «interchangeable family of algorithms» تعني حتماً Strategy · كلمة «internal state changes alters behavior» تعني حتماً State · كلمة «encapsulate request / undo / queue» تعني حتماً Command."
        },
        {
          "num": "3",
          "title": "خدعة المعمارية النظيفة (The Inward Arrow Rule)",
          "body": "في أي سؤال يتعلق بترتيب طبقات المعمارية النظيفة (Clean / Onion Architecture): الأسهم والتبعيات تتجه حصراً إلى الداخل نحو طبقة النطاق (Domain). طبقة Domain تحتوي على الكيانات (Entities) وقواعد الأعمال، وهي مستقلة تماماً بنسبة 100% ولا تعتمد على أي طبقة أخرى إطلاقاً. أي خيار يقول «Domain depends on Infrastructure» أو «Entities depend on UI» أو «Core depends on Database» هو خيار خاطئ قطعاً."
        },
        {
          "num": "4",
          "title": "خدعة حقن التبعيات وفخ الاحتجاز (DI Lifetimes & Captive Trap)",
          "body": "احفظ فترات الحياة الثلاث: Transient ينشأ كائن جديد مع كل طلب حقن · Scoped ينشأ كائن واحد لكل طلب عميل HTTP (مثل DbContext) · Singleton ينشأ كائن واحد فقط طوال فترة حياة التطبيق بأكمله. الفخ الامتحاني المتكرر: «هل يجوز حقن خدمة Scoped داخل خدمة Singleton؟» الإجابة: خطأ معماري فادح يسمى (Captive Dependency)، لأن الـ Singleton يحتجز الـ Scoped للأبد ويمنع تدميره فيحوله لـ Singleton بالخطأ مسبباً تسريب ذاكرة وتضارب بيانات!"
        }
      ]
    },
    {
      "id": "em_patterns_sniper",
      "nav_title": "2. مصفوفة مفاتيح الأنماط العشرة",
      "title": "مصفوفة قناص أنماط التصميم العشرة (MCQ Pattern Recognition Matrix)",
      "badge": "سؤال مؤكد · 40% من الامتحان",
      "desc": "جدول الربط السريع للامتحان: اقرأ الكلمة المفتاحية في نص السؤال -> اختر النمط فوراً -> تجنب الخيار التمويهي المتكرر:",
      "type": "table",
      "head": [
        "النمط وتصنيفه (GoF)",
        "الكلمات الدالة في نص السؤال (Triggers)",
        "الخدعة الامتحانية وسر الحل السريع",
        "الخيار التمويهي المتكرر (Trap)",
        "بصمة كود C# في السلايد"
      ],
      "rows": [
        [
          "المفرد (Singleton) · إنشائي",
          "Single instance, Global point of access",
          "ابحث عن فئة تمنع إنشاء نسخ متعددة وتوفر وصولاً تشاركياً وحيداً",
          "الخلط بينه وبين الفئات الثابتة (Static classes)؛ Singleton يدعم الواجهات والوراثة",
          "باني خاص private constructor مع خاصية public static Instance"
        ],
        [
          "طريقة المصنع (Factory Method) · إنشائي",
          "Subclasses decide instantiation, Factory method",
          "الفئة الأساسية تفوض إنشاء الكائنات للفئات المشتقة لحماية كود العميل من الأنواع الملموسة",
          "الخلط بينه وبين Abstract Factory؛ المصنع هنا ينشئ منتجاً واحداً بطريقة مجردة",
          "دالة مجردة CreateDocument() تعيد WordDocument أو PdfDocument"
        ],
        [
          "المهايئ (Adapter) · هيكلي",
          "Incompatible interface, Legacy system, Wrapper",
          "الهدف هو التوافقية (Compatibility)؛ تحويل واجهة غير متوافقة لتناسب الواجهة المتوقعة",
          "الخلط مع Facade؛ المهايئ يحل مشكلة عدم تطابق الدوال لفئة واحدة، ولا يهدف للتبسيط",
          "فئة EmailAdapter تنفذ IMessageService وتستدعي LegacyEmailService"
        ],
        [
          "الواجهة المبسطة (Facade) · هيكلي",
          "Unified interface, Simplified subsystem, Complex libraries",
          "الهدف هو التبسيط (Simplification)؛ توفير واجهة موحدة سهلة لنظام فرعي معقد من عدة فئات",
          "الخلط مع Adapter؛ الواجهة لا تحل عدم توافق بل تخفي تعقيد 5 خدمات خلف دالة واحدة",
          "BankFacade يوفر دالة واحدة TransferMoney() تنسق الرصيد والسجل والأمان"
        ],
        [
          "الوكيل (Proxy) · هيكلي",
          "Placeholder, Surrogate, Control access, PIN/Security",
          "يقف بديلاً أمام الكائن الحقيقي للتحكم في الوصول (صلاحيات، فحص أمان، كاش، أو تأجيل)",
          "الخلط مع Decorator؛ الوكيل يحافظ على نفس الوظائف مع التدقيق، ولا يضيف ميزات جديدة",
          "BankAccountProxy يفحص رقم PIN وصلاحيات المستخدم قبل التفويض لـ BankAccount"
        ],
        [
          "المزخرف (Decorator) · هيكلي",
          "Attach responsibilities dynamically, Flexible alternative to subclassing",
          "إضافة وتوسيع مسؤوليات وميزات الكائن في وقت التشغيل بدون انفجار شجرة الوراثة",
          "الخلط مع Adapter و Proxy؛ المزخرف يغلف الكائن ليضيف له سلوكيات جديدة (تنسيق/تشفير)",
          "BoldDecorator و ItalicDecorator يغلفان IText مع الحفاظ على الواجهة"
        ],
        [
          "الاستراتيجية (Strategy) · سلوكي",
          "Family of algorithms, Interchangeable at runtime, Switch/Payment",
          "تبديل الخوارزميات ديناميكياً بواسطة العميل أثناء التشغيل دون جمل switch-case متضخمة",
          "الخلط مع State؛ في الاستراتيجية يختار العميل الخوارزمية، بينما في الحالة ينتقل الكائن داخلياً",
          "حقن IPaymentStrategy (Visa, PayPal, Cash) في PaymentService"
        ],
        [
          "المراقب (Observer) · سلوكي",
          "One-to-many dependency, State change notifies dependents, Publish/Subscribe",
          "كائن مركزي (Subject) تتغير حالته ويجب إشعار وتحديث قائمة المشتركين تلقائياً",
          "الخلط مع Mediator أو Command؛ المراقب علاقة تحديث واحد-إلى-متعدد",
          "طلب القهوة CoffeeOrder يستدعي Notify() لتحديث شاشات المطبخ والمحاسب"
        ],
        [
          "الحالة (State) · سلوكي",
          "Object alters behavior when internal state changes, State transition",
          "الكائن يغير تصرفه وسلوكه بالكامل بناءً على حالته الداخلية المتتابعة تلقائياً",
          "الخلط مع Strategy؛ في State الانتقال بين الحالات يحدث تلقائياً من داخل سير العمل",
          "الطلب Order يتنقل: NewOrderState -> PaidState -> ShippedState"
        ],
        [
          "الأمر (Command) · سلوكي",
          "Encapsulate request as object, Supports Undo / Redo / Queue",
          "تغليف الطلب ككائن مستقل يحمل معاملاته لدعم عمليات التراجع وجدولة الأوامر وسجل العمليات",
          "الخلط مع Strategy؛ الأمر يحفظ حالة الطلب ومعاملاته للتراجع، الاستراتيجية خوارزمية فورية",
          "واجهة ICommand بدالتي Execute() و Undo() مثل أوامر المحرر وحساب البنك"
        ]
      ]
    },
    {
      "id": "em_solid_fingerprints",
      "nav_title": "3. بصمات انتهاك مبادئ SOLID",
      "title": "بصمات انتهاك مبادئ SOLID في كود الاختبار (SOLID Violation Fingerprints)",
      "badge": "سؤال كود مؤكد في النهائي",
      "desc": "عندما يأتيك سؤال يحتوي كود C# ويسألك عن المبدأ المنتهك، ابحث عن هذه البصمات المحددة لتحسم الإجابة في ثوانٍ:",
      "type": "table",
      "head": [
        "المبدأ والحرف",
        "بصمة الكود المنتهك في السؤال (Code Smell)",
        "العبارة الإنجليزية الحتمية في السلايد",
        "الخدعة وسر الاستبعاد السريع",
        "طريقة الإصلاح المعماري الصحيحة"
      ],
      "rows": [
        [
          "S · المسؤولية الواحدة (SRP)",
          "فئة تجمع بين دوال غير مترابطة: حساب الراتب + رسم واجهة المستخدم + حفظ في قاعدة بيانات SQL",
          "A class should have only one reason to change",
          "إذا كان الكلاس مسؤولاً عن أكثر من محور تغيير أو تقرير، فالإجابة حتماً SRP",
          "تفكيك الفئة الكبيرة إلى فئات صغيرة مستقلة يخدم كل منها مسؤولية عمل واحدة"
        ],
        [
          "O · مفتوح/مغلق (OCP)",
          "وجود جمل if-else أو switch تفحص نوع الكائن (مثل Car, Truck)، والتعديل على الكلاس القديم لإضافة نوع جديد",
          "Open for extension, closed for modification",
          "إذا رأيت switch-case على الأنواع تتطلب لمس وتعديل الكود القديم عند كل إضافة جديدة، فالانتهاك OCP",
          "استخدام التجريد والواجهات (Interfaces) وإضافة أصناف جديدة ترث دون تعديل الفئات القديمة"
        ],
        [
          "L · إحلال لسكوف (LSP)",
          "فئة مشتقة تكسر سلوك الفئة الأب، مثل رمي NotImplementedException أو تقييد الشروط (كالنعامة ترث Bird لكن دالة Fly ترمي خطأ)",
          "Subtypes must be substitutable for their base types",
          "إذا رأيت في الكود دالة في فئة فرعية ترمي throw new NotImplementedException، فالإجابة حتماً LSP",
          "إعادة هيكلة شجرة الوراثة وفصل الصلاحيات (مثل فصل IFlyingBird عن INonFlyingBird)"
        ],
        [
          "I · فصل الواجهات (ISP)",
          "واجهة ضخمة تحتوي دوال كثيرة، تجبر فئة على كتابة دوال فارغة لا تحتاجها (مثل RobotWorker مجبر على دالة Eat())",
          "Clients should not be forced to depend on methods they do not use",
          "إذا كان الكلاس مجبراً على كتابة دوال فارغة وغير مستخدمة بسبب واجهة ممتلئة (Fat Interface)، فالانتهاك ISP",
          "تفتيت الواجهة الضخمة إلى واجهات صغيرة محددة ومستقلة (مثل IWorkable و IFeedable)"
        ],
        [
          "D · انعكاس التبعية (DIP)",
          "فئة عالية المستوى (High-level) تنشئ كائناً ملموساً بكلمة new داخل البناء مباشرة (مثل OrderService ينشئ new SqlRepository())",
          "Depend on abstractions, not concretions",
          "إذا رأيت كلمة new لكلاس ملموس داخل باني الفئة دون حقن واجهة عبر المعاملات، فالانتهاك حتماً DIP",
          "الاعتماد على حقن التبعيات (DI) وتمرير الواجهات (Interfaces) في المعاملات بدلاً من الإنشاء المباشر"
        ]
      ]
    },
    {
      "id": "em_tf_traps",
      "nav_title": "4. فخاخ الصواب والخطأ (16 فخاً)",
      "title": "أشهر 16 فخاً في أسئلة الصواب والخطأ الامتحانية (True / False Traps)",
      "badge": "احذر هذه العبارات التمويهية",
      "desc": "عبارات امتحانية تبدو صحيحة ظاهرياً ولكنها خاطئة معمارياً، أو حقائق دقيقة يخطئ فيها الطلاب عادةً؛ احفظ حكمها وتبريرها الآن:",
      "type": "tf_list",
      "items": [
        {
          "n": 1,
          "statement": "الكلمتان المفتاحيتان async و await في C# تنشئان دائماً خيط معالجة (Thread) جديداً ومستقلاً لتنفيذ العملية.",
          "verdict": "خطأ (False)",
          "is_true": false,
          "trap": "يعتقد كثير من الطلاب أن async يعني إنشاء Thread جديد تلقائياً؛ وهذا غير صحيح.",
          "rule": "async و await لا تنشئان Thread جديداً بالضرورة في عمليات الإدخال والإخراج (I/O)، بل تحرران الخيط الحالي لمواصلة خدمة طلبات أخرى حتى تكتمل العملية، ثم يستأنف مجمع الخيوط التنفيذ عبر آلة الحالة.",
          "ref": "L7-S012"
        },
        {
          "n": 2,
          "statement": "مجمع النفايات (Garbage Collector) في دوت نت يحرر الموارد غير المدارة (Unmanaged Resources) مثل اتصالات قواعد البيانات ومقابض الملفات تلقائياً.",
          "verdict": "خطأ (False)",
          "is_true": false,
          "trap": "الخلط بين إدارة الذاكرة المدارة (Managed Heap) والموارد غير المدارة في نظام التشغيل.",
          "rule": "مجمع النفايات يدير وينظف الذاكرة المدارة فقط؛ أما الموارد غير المدارة فتتطلب حتماً تطبيق واجهة IDisposable واستدعاء Dispose() أو استخدام عبارة using لتحريرها فورياً.",
          "ref": "L8-S018"
        },
        {
          "n": 3,
          "statement": "في المعمارية النظيفة (Clean Architecture)، تعتمد طبقة النطاق (Domain Entities) على طبقة البنية التحتية (Infrastructure) ومستودعات البيانات.",
          "verdict": "خطأ (False)",
          "is_true": false,
          "trap": "اعتقاد أن الطبقات الأساسية تعتمد على قواعد البيانات لتخزين بياناتها.",
          "rule": "وفق قاعدة التبعية (Dependency Rule)، الأسهم تتجه حصراً إلى الداخل نحو Domain. طبقة Domain مستقلة 100% ولا تعتمد على أي طبقة أخرى إطلاقاً.",
          "ref": "L5-S014"
        },
        {
          "n": 4,
          "statement": "في حقن التبعيات (Dependency Injection)، يعتبر حقن خدمة Scoped داخل خدمة Singleton ممارسة برمجية آمنة وموصى بها.",
          "verdict": "خطأ (False)",
          "is_true": false,
          "trap": "عدم الانتباه لتباين فترات الحياة بين الخدمتين (Captive Dependency).",
          "rule": "هذا فخ معماري خطير؛ خدمة Singleton تعيش طوال حياة التطبيق فإذا حقنت فيها Scoped ستحتجزها للأبد وتمنع تدميرها بنهاية الطلب، مما يسبب تسريب ذاكرة وتضارب تزامن فادح.",
          "ref": "L6-S022"
        },
        {
          "n": 5,
          "statement": "البرمجيات الجيدة وفق الشريحة الرسمية للمقرر هي البرمجيات التي تقتصر على جعل الكود يعمل بشكل صحيح فقط.",
          "verdict": "خطأ (False)",
          "is_true": false,
          "trap": "الظن بأن صحة عمل الكود هي المعيار الهندسي الوحيد.",
          "rule": "الشريحة الرسمية تنص صراحة: Good software is not only about making it work; it is about making it easy to change. البرمجيات الجيدة يجب أن تكون سهلة التعديل والصيانة.",
          "ref": "L2-S004"
        },
        {
          "n": 6,
          "statement": "في نمط الاستراتيجية (Strategy Pattern)، الكائن يغير خوارزميته داخلياً وتلقائياً بناءً على تغير حالته أثناء سير العمل.",
          "verdict": "خطأ (False)",
          "is_true": false,
          "trap": "الخلط بين مفهومي Strategy و State.",
          "rule": "الذي يغير تصرفه داخلياً وتلقائياً بحسب تغير حالته هو نمط الحالة (State Pattern)؛ أما في Strategy فالعميل الخارجي هو من يختار ويبدل الخوارزمية حسب حاجته.",
          "ref": "L4-S006"
        },
        {
          "n": 7,
          "statement": "نمط المهايئ (Adapter Pattern) يهدف أساساً إلى إضافة مسؤوليات وميزات وظيفية جديدة للكائن أثناء وقت التشغيل.",
          "verdict": "خطأ (False)",
          "is_true": false,
          "trap": "الخلط بين نمطي Adapter و Decorator.",
          "rule": "نمط المهايئ لا يضيف أي وظائف جديدة إطلاقاً، بل يحول فقط واجهة قديمة غير متوافقة لتناسب النظام؛ بينما النمط الذي يضيف ميزات جديدة ديناميكياً هو المزخرف (Decorator).",
          "ref": "L3-S008"
        },
        {
          "n": 8,
          "statement": "في مجمع النفايات بدوت نت، تنجو الغالبية العظمى من الكائنات المنشأة من الجيل 0 (Gen 0) وتنتقل إلى الجيل 2 (Gen 2).",
          "verdict": "خطأ (False)",
          "is_true": false,
          "trap": "عدم استيعاب الفرضية التوليدية للذاكرة (Generational Hypothesis).",
          "rule": "القاعدة العلمية الرسمية تنص على أن «معظم الكائنات تموت صغيرة» (Most objects die young)، وبالتالي فإن الغالبية الساحقة من الكائنات تُحذف وتُنظف فوراً داخل الجيل 0 وقليل جداً يرتقي.",
          "ref": "L8-S010"
        },
        {
          "n": 9,
          "statement": "استخدام Task.Run يعتبر الخيار الأفضل والموصى به هندسياً لمعالجة عمليات الإدخال والإخراج غير المتزامنة (I/O-Bound Operations).",
          "verdict": "خطأ (False)",
          "is_true": false,
          "trap": "الظن بأن Task.Run مناسبة لكل المهام غير المتزامنة.",
          "rule": "Task.Run مخصصة حصراً للعمليات الحسابية الثقيلة التي تستهلك المعالج (CPU-Bound)؛ أما عمليات الإدخال والإخراج فيُستخدم معها async/await المباشرة دون حجز خيط معالجة إضافي.",
          "ref": "L7-S028"
        },
        {
          "n": 10,
          "statement": "استدعاء الخواص المعطلة مثل .Result أو الدالة .Wait() على Task غير متزامنة يمكن أن يؤدي إلى حدوث قفل ميت (Deadlock).",
          "verdict": "صواب (True)",
          "is_true": true,
          "trap": "استسهال التحويل المتزامن (Sync-over-Async).",
          "rule": "هذه قاعدة امتحانية ثابتة؛ حظر الخيط الرئيسي بانتظار نتيجة غير متزامنة يؤدي لتجميد سياق التزامن وحدوث Deadlock حتمي.",
          "ref": "L7-S034"
        },
        {
          "n": 11,
          "statement": "نمط الواجهة المبسطة (Facade Pattern) يوفر واجهة موحدة وعالية المستوى لتبسيط استخدام مكتبة أو نظام فرعي معقد.",
          "verdict": "صواب (True)",
          "is_true": true,
          "trap": "هذا هو التعريف الحرفي المعتمد في المقرر.",
          "rule": "الواجهة لا تحل مشكلة عدم توافق بل تجمع عدة خدمات وراء واجهة واحدة سهلة ومرنة للعميل.",
          "ref": "L3-S032"
        },
        {
          "n": 12,
          "statement": "مبدأ مفتوح/مغلق (Open/Closed Principle) ينص على أن الكيانات البرمجية يجب أن تكون مفتوحة للتعديل ومغلقة للتوسيع.",
          "verdict": "خطأ (False)",
          "is_true": false,
          "trap": "عكس الكلمات في نص التعريف التمويهي.",
          "rule": "القاعدة بالعكس تماماً: Open for extension, closed for modification. مفتوحة للتوسيع والإضافة، ومغلقة أمام التعديل على الكود القديم المستقر.",
          "ref": "L1-S010"
        },
        {
          "n": 13,
          "statement": "خطافات الويب (Webhooks) تعتمد على دفع البيانات فورياً ولحظياً من الخادم إلى العميل عبر طلب HTTP POST فور وقوع الحدث.",
          "verdict": "صواب (True)",
          "is_true": true,
          "trap": "الفرق بين السحب بالاستعلام (Polling) والدفع اللحظي (Webhooks).",
          "rule": "Webhooks تعمل بآلية Event-driven push ولا تهدر موارد الشبكة بالاستعلام المتكرر.",
          "ref": "L8-S042"
        },
        {
          "n": 14,
          "statement": "في معمارية الخدمات المصغرة (Microservices)، يعتبر استخدام قاعدة بيانات مركزية واحدة مشتركة بين جميع الخدمات المعيار الهندسي الأمثل.",
          "verdict": "خطأ (False)",
          "is_true": false,
          "trap": "الاعتقاد بأن توحيد قاعدة البيانات أفضل لتسهيل الاستعلامات.",
          "rule": "المعيار الرسمي في الميكروسيرفس هو (Database-per-Service)؛ كل خدمة تمتلك قاعدة بياناتها الخاصة والمستقلة لمنع الارتباط الوثيق والاعتماديات الخفية.",
          "ref": "L8-S038"
        },
        {
          "n": 15,
          "statement": "نمط الوكيل (Proxy Pattern) يوفر بديلاً أو نائباً لكائن حقيقي مع الحفاظ على نفس الواجهة للتحكم في الوصول أو تأجيل التحميل.",
          "verdict": "صواب (True)",
          "is_true": true,
          "trap": "التعريف الرسمي الدقيق لنمط الوكيل.",
          "rule": "الوكيل يطبق نفس واجهة الكائن الأصلي ويتوسط بين العميل والهدف لتدقيق الأذونات أو عمل Cache.",
          "ref": "L3-S047"
        },
        {
          "n": 16,
          "statement": "بروتوكول gRPC يعتمد على العقود الثنائية الثابتة (.proto) وبروتوكول HTTP/2 لنقل البيانات بسرعة وكفاءة تفوق REST.",
          "verdict": "صواب (True)",
          "is_true": true,
          "trap": "مقارنة بروتوكولات الاتصال الموزعة في L8.",
          "rule": "gRPC أداء فائق ويعتمد على Protocol Buffers والنقل الثنائي المتعدد عبر مسار HTTP/2 واحد.",
          "ref": "L8-S030"
        }
      ]
    },
    {
      "id": "em_comparisons",
      "nav_title": "5. مقارنات الخيارات المتقاربة",
      "title": "مصفوفة حسم التردد بين الخيارات المتقاربة (Exam Distractors Matrix)",
      "badge": "كيف تحسم إجابتك بين خيارين؟",
      "desc": "عندما تحصر الإجابة بين خيارين وتتردد، استخدم هذه الفروق الجوهرية الحاسمة للاختيار الصحيح:",
      "type": "table",
      "head": [
        "الخيار (أ)",
        "الخيار (ب)",
        "الفارق الجوهري والامتحاني الحاسم"
      ],
      "rows": [
        [
          "الاستراتيجية (Strategy)",
          "الحالة (State)",
          "في Strategy العميل الخارجي هو من يختار ويبدل الخوارزمية عبر التمرير؛ بينما في State ينتقل الكائن تلقائياً من داخل سير العمل بناءً على حالته الداخلية."
        ],
        [
          "المهايئ (Adapter)",
          "الواجهة (Facade)",
          "Adapter يحل مشكلة عدم توافق الواجهات (Compatibility) لفئة واحدة أو مكتبة قديمة؛ بينما Facade يبسط استخدام نظام فرعي معقد من عدة فئات (Simplification)."
        ],
        [
          "الوكيل (Proxy)",
          "المزخرف (Decorator)",
          "Proxy يتحكم في الوصول للكائن بنفس الواجهة دون إضافة وظائف جديدة (أمان/كاش/تأخير)؛ بينما Decorator يضيف وظائف ومسؤوليات جديدة ديناميكياً."
        ],
        [
          "Task.Run",
          "async / await",
          "Task.Run يحجز خيط معالجة حقيقي من مجمع الخيوط للمهام الحسابية الثقيلة (CPU-Bound)؛ بينما async/await ينتظر عمليات الإدخال والإخراج (I/O) دون حجز خيط."
        ],
        [
          "الذاكرة Stack",
          "الذاكرة Heap",
          "Stack للبيانات السريعة والقصيرة وأنواع القيمة (Value Types) وتُنظف تلقائياً بانتهاء نطاق الدالة؛ Heap للكائنات المرجعية وتدار وتنظف بواسطة Garbage Collector."
        ],
        [
          "طريقة المصنع (Factory Method)",
          "المصنع المجرد (Abstract Factory)",
          "Factory Method يفوض إنشاء منتج واحد لطرق الفئات المشتقة؛ Abstract Factory ينشئ عائلات كاملة من المنتجات المترابطة دون تحديد أصنافها الملموسة."
        ],
        [
          "الاستدعاء الدوري (Polling)",
          "خطاف الويب (Webhook)",
          "Polling يكرر إرسال طلبات استعلام دورية حتى تتوفر البيانات مهدراً موارد الشبكة؛ Webhook يدفع البيانات فورياً عبر HTTP POST لحظة وقوع الحدث."
        ],
        [
          "REST API",
          "GraphQL",
          "REST يعتمد طرق HTTP ونقاط نهاية ثابتة وقد يعاني من Over-fetching؛ بينما GraphQL يتيح للعميل استعلام الحقول المحددة بدقة في طلب واحد."
        ]
      ]
    },
    {
      "id": "em_sniper_bank",
      "nav_title": "6. بنك قناص الخيارات (25 سؤالاً)",
      "title": "بنك قناص الخيارات المحاكي للامتحان النهائي (Top 25 Sniper MCQs & T/F)",
      "badge": "تدريب عملي على أسئلة الدكتورة",
      "desc": "25 سؤالاً نموذجياً تحاكي صياغة د. بيداء بدقة في الاختيار من متعدد والصواب والخطأ، مع بيان الخدعة الامتحانية ومفتاح الحل الفوري:",
      "type": "questions",
      "items": [
        {
          "n": 1,
          "type": "mcq",
          "trick_badge": "Trigger Words",
          "q": "Which design pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime?",
          "trick": "ابحث عن الكلمات الذهبية: family of algorithms + interchangeable at runtime.",
          "a": "Strategy Pattern (نمط الاستراتيجية)",
          "why": "هذا هو التعريف الحرفي المعتمد في السلايد، حيث يتيح تبديل الخوارزميات دون جمل switch متضخمة.",
          "ref": "L4-S004"
        },
        {
          "n": 2,
          "type": "mcq",
          "trick_badge": "Category Elimination",
          "q": "Which of the following is classified as a Structural design pattern according to the GoF catalog?",
          "trick": "استبعد فوراً الأنماط الإنشائية (Singleton, Factory) والأنماط السلوكية (Observer, Strategy).",
          "a": "Adapter (المهايئ)",
          "why": "المهايئ والمزخرف والواجهة والوكيل هي الأنماط الهيكلية في المنهج.",
          "ref": "L3-S006"
        },
        {
          "n": 3,
          "type": "mcq",
          "trick_badge": "Code Smell",
          "q": "In a C# system, class RobotWorker implements interface IWorker. The interface contains methods Work() and Eat(). RobotWorker throws NotImplementedException inside Eat(). Which SOLID principle is violated?",
          "trick": "واجهة تجبر كلاس على كتابة دالة لا يحتاجها ويرمي فيها استثناء -> ISP.",
          "a": "Interface Segregation Principle (ISP - مبدأ فصل الواجهات)",
          "why": "يجب عدم إجبار الكلاس على الاعتماد على دوال لا يستخدمها، والحل بتفكيك الواجهة إلى IWorkable و IFeedable.",
          "ref": "L1-S022"
        },
        {
          "n": 4,
          "type": "mcq",
          "trick_badge": "Trigger Words",
          "q": "Which pattern provides a unified, higher-level interface that makes a complex subsystem easier to use?",
          "trick": "المفتاح اللغوي الصريح: unified interface + subsystem easier to use.",
          "a": "Facade Pattern (نمط الواجهة المبسطة)",
          "why": "يهدف Facade حصراً إلى تبسيط الاستخدام وإخفاء تعقيدات الفئات المتعددة خلف نقطة وصول سهلة.",
          "ref": "L3-S032"
        },
        {
          "n": 5,
          "type": "mcq",
          "trick_badge": "Trigger Words",
          "q": "Which pattern acts as a placeholder or surrogate to control access to a sensitive or resource-intensive object?",
          "trick": "المفتاح الصريح: placeholder / surrogate + control access.",
          "a": "Proxy Pattern (نمط الوكيل)",
          "why": "الوكيل يقف كحارس أمان أو كاش أو مؤجل وصول أمام الكائن الحقيقي مع الحفاظ على نفس الواجهة.",
          "ref": "L3-S047"
        },
        {
          "n": 6,
          "type": "mcq",
          "trick_badge": "Inward Dependency",
          "q": "In Clean Architecture, which layer is at the core center and has zero dependencies on any external layers or frameworks?",
          "trick": "القلب المستقل 100% الذي لا يعتمد على أحد -> Domain.",
          "a": "Domain Layer (Entities & Enterprise Business Rules)",
          "why": "وفق قاعدة التبعية، الأسهم تتجه للداخل نحو Domain، ولا يحق للـ Domain الإشارة لأي طبقة خارجية.",
          "ref": "L5-S014"
        },
        {
          "n": 7,
          "type": "mcq",
          "trick_badge": "Trigger Words",
          "q": "Which Creational pattern ensures that only one instance of a class exists throughout the entire application?",
          "trick": "المفتاح الصريح: only one instance + creational.",
          "a": "Singleton Pattern (نمط المفرد)",
          "why": "يطبق عبر private constructor وخاصية static Instance لمنع تكرار النسخ في الذاكرة.",
          "ref": "L2-S020"
        },
        {
          "n": 8,
          "type": "mcq",
          "trick_badge": "Captive Trap",
          "q": "What happens if a developer injects a Scoped service directly into a Singleton service in ASP.NET Core?",
          "trick": "حقن Scoped داخل Singleton -> فخ احتجاز وتسريب ذاكرة (Captive Dependency).",
          "a": "Captive Dependency error causing concurrency issues and memory leaks",
          "why": "كائن Singleton لا يموت أبداً، فيحتجز معه كائن Scoped ويمنع تدميره بعد انتهاء طلب الـ HTTP.",
          "ref": "L6-S022"
        },
        {
          "n": 9,
          "type": "mcq",
          "trick_badge": "Code Smell",
          "q": "A class AreaCalculator contains a method that uses a large switch-case statement checking shape types (Circle, Square, Triangle). Every time a new shape is introduced, this method must be modified. Which SOLID principle is violated?",
          "trick": "switch على الأنواع وتعديل الكود القديم عند كل إضافة جديدة -> انتهاك OCP.",
          "a": "Open/Closed Principle (OCP - مبدأ مفتوح/مغلق)",
          "why": "الكود يجب أن يكون مفتوحاً للتوسيع ومغلقاً أمام التعديل عبر الواجهات ودوال مساحة Polymorphic.",
          "ref": "L1-S010"
        },
        {
          "n": 10,
          "type": "mcq",
          "trick_badge": "Trigger Words",
          "q": "Which pattern allows adding new behaviors and responsibilities to objects dynamically at runtime without using inheritance?",
          "trick": "المفتاح الصريح: dynamically at runtime + without using inheritance.",
          "a": "Decorator Pattern (نمط المزخرف)",
          "why": "المزخرف يغلف الكائن ويوفر مرونة لتوسيع المسؤوليات أثناء التشغيل دون انفجار عدد الفئات بالوراثة.",
          "ref": "L3-S058"
        },
        {
          "n": 11,
          "type": "mcq",
          "trick_badge": "GC Generation",
          "q": "What is the primary scientific hypothesis behind the generational design of the .NET Garbage Collector?",
          "trick": "المبدأ العلمي المعتمد في السلايد نصاً: Most objects die young.",
          "a": "Most objects die young and are collected in Generation 0",
          "why": "معظم الكائنات قصيرة الأجل وتُنشأ وتُحذف بسرعة داخل Gen 0 لتوفير دورات التنظيف الشاملة.",
          "ref": "L8-S010"
        },
        {
          "n": 12,
          "type": "mcq",
          "trick_badge": "Deadlock Rules",
          "q": "Which of the following practices is considered a primary technique to prevent Deadlocks in multithreaded programming?",
          "trick": "قواعد منع Deadlock: ترتيب ثابت لحجز الأقفال وتجنب الأقفال المتداخلة.",
          "a": "Acquire locks in a globally consistent order across all threads",
          "why": "توحيد ترتيب حجز الموارد يكسر حلقة الانتظار الدائرية (Circular Wait) ويمنع تجمد الخيوط.",
          "ref": "L7-S040"
        },
        {
          "n": 13,
          "type": "mcq",
          "trick_badge": "Trigger Words",
          "q": "Which Behavioral pattern encapsulates a request as an object, thereby enabling parameterization, queuing, and Undo/Redo operations?",
          "trick": "المفتاح الصريح: request as object + Undo/Redo + queuing.",
          "a": "Command Pattern (نمط الأمر)",
          "why": "الأمر يغلف طلب التنفيذ ككائن مستقل يحمل دالتي Execute() و Undo().",
          "ref": "L4-S042"
        },
        {
          "n": 14,
          "type": "mcq",
          "trick_badge": "Trigger Words",
          "q": "Which pattern establishes a one-to-many relationship where a state change in one object automatically notifies multiple dependent objects?",
          "trick": "المفتاح الصريح: one-to-many + automatically notifies dependents.",
          "a": "Observer Pattern (نمط المراقب)",
          "why": "نمط المراقب هو آلية النشر والاشتراك (Publish/Subscribe) المعتمدة لإشعار التابعين فوراً.",
          "ref": "L4-S022"
        },
        {
          "n": 15,
          "type": "mcq",
          "trick_badge": "Elimination Trick",
          "q": "Which pattern is best suited to integrate a third-party payment library whose method signatures do not match your system's IPaymentGateway interface?",
          "trick": "واجهة خارجية لا تتطابق تواقيع دوالها مع واجهتنا المتوقعة -> Adapter.",
          "a": "Adapter Pattern (المهايئ)",
          "why": "المهايئ يعمل كقابس تحويل يربط بين واجهتين غير متوافقتين دون تعديل الكود القديم.",
          "ref": "L3-S008"
        },
        {
          "n": 16,
          "type": "tf",
          "trick_badge": "T/F Trap",
          "q": "True or False: Using async and await always allocates a brand new Thread from the OS thread pool to execute the asynchronous method.",
          "trick": "فخ كلمة always؛ async/await لا تنشئ ثريداً جديداً بالضرورة بل تحرر الثريد الحالي.",
          "a": "False (خطأ)",
          "why": "في عمليات I/O، الخيط يتحرر لخدمة طلبات أخرى وتستأنف العملية عبر آلة الحالة ومجمع الخيوط.",
          "ref": "L7-S012"
        },
        {
          "n": 17,
          "type": "tf",
          "trick_badge": "T/F Trap",
          "q": "True or False: In .NET, the Garbage Collector automatically releases unmanaged database connection handles when an object goes out of scope.",
          "trick": "فخ unmanaged؛ مجمع النفايات لا ينظف الموارد غير المدارة تلقائياً.",
          "a": "False (خطأ)",
          "why": "الموارد غير المدارة تتطلب حتماً تطبيق واجهة IDisposable ودعوة Dispose() أو using.",
          "ref": "L8-S018"
        },
        {
          "n": 18,
          "type": "tf",
          "trick_badge": "T/F Trap",
          "q": "True or False: In Clean Architecture, inner core layers must contain direct implementation references to outer database ORMs like EF Core.",
          "trick": "فخ الطبقات؛ القلب الداخلي لا يشير أبداً للطبقات الخارجية.",
          "a": "False (خطأ)",
          "why": "طبقة النطاق والـ Core مستقلة تماماً والتبعية تتجه دائماً من الخارج إلى الداخل.",
          "ref": "L5-S014"
        },
        {
          "n": 19,
          "type": "tf",
          "trick_badge": "T/F Trap",
          "q": "True or False: Synchronously blocking on asynchronous code using .Result or .Wait() is safe and cannot cause Deadlocks.",
          "trick": "استدعاء .Result أو .Wait() يسبب Deadlocks مؤكدة.",
          "a": "False (خطأ)",
          "why": "هذا هو مسبب Deadlock الكلاسيكي في تطبيقات الويب وواجهات المستخدم الرسومية.",
          "ref": "L7-S034"
        },
        {
          "n": 20,
          "type": "tf",
          "trick_badge": "T/F Trap",
          "q": "True or False: The Open/Closed Principle dictates that classes should be open for extension but closed for modification.",
          "trick": "التعريف الصحيح تماماً لمبدأ OCP.",
          "a": "True (صواب)",
          "why": "مفتوح للتوسيع بإضافة فئات جديدة ترث، ومغلق أمام التعديل على الكود القديم المستقر.",
          "ref": "L1-S010"
        },
        {
          "n": 21,
          "type": "tf",
          "trick_badge": "T/F Trap",
          "q": "True or False: Webhooks use a polling model where the client repeatedly queries the server at fixed intervals to fetch new data.",
          "trick": "الاستعلام المتكرر هو Polling وليس Webhook.",
          "a": "False (خطأ)",
          "why": "خطاف الويب (Webhook) يدفع البيانات لحظياً عبر HTTP POST فور وقوع الحدث دون استعلام متكرر.",
          "ref": "L8-S042"
        },
        {
          "n": 22,
          "type": "tf",
          "trick_badge": "T/F Trap",
          "q": "True or False: A class inheriting from an interface and throwing NotImplementedException inside one of its required methods is a violation of Liskov Substitution Principle (LSP).",
          "trick": "رمي استثناء في فئة مشتقة لتعطيل دالة أصلية = كسر لقابلية الإحلال LSP.",
          "a": "True (صواب)",
          "why": "الفئة الفرعية لا تستطيع أن تحل محل الأصل دون تعطيل البرنامج، مما يكسر مبدأ LSP صراحة.",
          "ref": "L1-S016"
        },
        {
          "n": 23,
          "type": "tf",
          "trick_badge": "T/F Trap",
          "q": "True or False: In Microservices architecture, sharing a single monolithic SQL database among all separate services is the recommended standard.",
          "trick": "مشاركة قاعدة بيانات واحدة في الميكروسيرفس خطأ؛ المعيار هو Database-per-Service.",
          "a": "False (خطأ)",
          "why": "المعيار الرسمي يفرض قاعدة بيانات مستقلة لكل خدمة لمنع التداخل والارتباط الوثيق.",
          "ref": "L8-S038"
        },
        {
          "n": 24,
          "type": "tf",
          "trick_badge": "T/F Trap",
          "q": "True or False: In the State design pattern, state transitions occur internally and automatically as the context executes its workflow.",
          "trick": "في نمط الحالة، الانتقال يحدث تلقائياً من الداخل وليس باختيار العميل الخارجي.",
          "a": "True (صواب)",
          "why": "هذا هو الفارق الجوهري بين State و Strategy.",
          "ref": "L4-S032"
        },
        {
          "n": 25,
          "type": "tf",
          "trick_badge": "T/F Trap",
          "q": "True or False: Good software engineering according to Dr. Baida'a's official lecture slides is only about making the code work correctly.",
          "trick": "السلايد يؤكد: ليس فقط جعله يعمل، بل جعله سهل التغيير والصيانة.",
          "a": "False (خطأ)",
          "why": "Good software is not only about making it work; it is about making it easy to change.",
          "ref": "L2-S004"
        }
      ]
    }
  ]
};
