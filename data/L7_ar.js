/* الترجمة العربية لسلايدات الوحدة 7: البرمجة غير المتزامنة وتعدد المسالك وإدارة الذاكرة
   المدرس: د. بيداء لعلع — 45 شريحة كاملة (L7-S001 إلى L7-S045)
   معيار: 100% SVG line-art · صفر إيموجيات
*/
window.TOC_AR = window.TOC_AR || {};
window.TOC_AR["L7"] = window.TOC_AR["L7"] || {};

window.TOC_AR["L7"]["L7-S001"] = {
  "ar": [
    "البرمجة المتقدمة (Advanced Programming)",
    "المحاضرة الثامنة (Lecture 8)",
    "البرمجة غير المتزامنة، التزامن، تعدد المسالك، وإدارة الذاكرة (Asynchronous Programming, Concurrency, Multithreading & Memory Management)"
  ]
};
window.TOC_AR["L7-S001"] = window.TOC_AR["L7"]["L7-S001"];

window.TOC_AR["L7"]["L7-S002"] = {
  "ar": [
    "أهداف التعلم (Learning Objectives):",
    "- بنهاية هذه المحاضرة، سيكون الطلاب قادرين على:",
    "  * شرح التنفيذ المتزامن وغير المتزامن (Explain synchronous and asynchronous execution).",
    "  * فهم كل من Task و async و await (Understand Task, async, and await).",
    "  * التمييز بين التزامن والتوازي (Distinguish concurrency from parallelism).",
    "  * فهم العمليات والمسالك وحوض المسالك (Understand processes, threads, and ThreadPool).",
    "  * تحديد حالات التسابق ومشاكل أمان المسالك (Identify race conditions and thread-safety issues).",
    "  * استخدام lock و Interlocked والمجموعات المتزامنة (Use lock, Interlocked, and concurrent collections).",
    "  * فهم إدارة الذاكرة في منصة .NET (Understand .NET memory management).",
    "  * شرح المكدس والركام وجامع القمامة (Explain Stack, Heap, and Garbage Collection).",
    "  * فهم أجيال جامع القمامة (Understand GC generations).",
    "  * استخدام واجهة IDisposable وجملة using.",
    "  * تحديد المشاكل الشائعة في إدارة الذاكرة (Identify common memory-management problems).",
    "- مسار المحاضرة:",
    "  * البرمجة غير المتزامنة (Async Programming) -> التزامن وتعدد المسالك (Concurrency & Multithreading) -> إدارة الذاكرة (Memory Management)."
  ]
};
window.TOC_AR["L7-S002"] = window.TOC_AR["L7"]["L7-S002"];

window.TOC_AR["L7"]["L7-S003"] = {
  "ar": [
    "الجزء 1 — البرمجة غير المتزامنة (Part 1 - Asynchronous Programming):",
    "- التنفيذ المتزامن يعني أن العمليات تُنفذ واحدة تلو الأخرى على التوالي (Synchronous execution means operations are executed one after another).",
    "- مثال الكود البرمجي:",
    "  var data = GetData();",
    "  ProcessData(data);",
    "  SaveData(data);",
    "- مسار التنفيذ (Execution):",
    "  * استدعاء GetData() -> انتظار وتوقف (WAIT) -> استدعاء ProcessData() -> استدعاء SaveData().",
    "- إذا استغرقت الدالة GetData() مدة 5 ثوانٍ، فإن البرنامج ينتظر ويتجمد لمدة 5 ثوانٍ كاملة.",
    "- المشكلة الجوهرية (Key Problem):",
    "  * العملية المعيقة والمجمدة للعمل (A blocking operation) تمنع المسلك الحالي من أداء أي عمل مفيد آخر."
  ]
};
window.TOC_AR["L7-S003"] = window.TOC_AR["L7"]["L7-S003"];

window.TOC_AR["L7"]["L7-S004"] = {
  "ar": [
    "البرمجة غير المتزامنة (Asynchronous Programming):",
    "- تتيح البرمجة غير المتزامنة للبرنامج بدء عملية معينة، والاستمرار في إنجاز أعمال أخرى أثناء انتظار اكتمال تلك العملية (allows a program to start an operation and continue doing other work while waiting for the operation to complete).",
    "- مثال الكود البرمجي:",
    "  var data = await GetDataAsync();",
    "  ProcessData(data);",
    "- المسار المفاهيمي (Conceptually):",
    "  * بدء العملية (Start Operation) -> في أثناء الانتظار: تنفيذ أعمال أخرى مفيدة (Do Other Work) -> الحصول على النتيجة عند جاهزيتها (Result).",
    "- قاعدة هامة جدا (Important):",
    "  * البرمجة غير المتزامنة لا تعني تلقائيا تعدد المسالك (Asynchronous does not automatically mean multithreaded)."
  ]
};
window.TOC_AR["L7-S004"] = window.TOC_AR["L7"]["L7-S004"];

window.TOC_AR["L7"]["L7-S005"] = {
  "ar": [
    "مقارنة العمليات المقيدة بالإدخال/الإخراج مقابل العمليات المقيدة بالمعالج (I/O-Bound vs CPU-Bound):",
    "- العمليات المقيدة بالإدخال/الإخراج (I/O-Bound):",
    "  * يقضي التطبيق معظم وقته منتظرا لـ:",
    "    - قاعدة البيانات (Database)",
    "    - واجهات HTTP API",
    "    - الملفات (File)",
    "    - الشبكة (Network)",
    "    - القرص الصلب (Disk)",
    "  * مثال: var response = await client.GetAsync(url);",
    "- العمليات المقيدة بالمعالج (CPU-Bound):",
    "  * يكون المعالج نشطا في تنفيذ العمليات الحسابية والمعالجة الفعلية:",
    "    - معالجة الصور (Image processing)",
    "    - التشفير (Encryption)",
    "    - ضغط البيانات (Compression)",
    "    - الحسابات الرياضية الضخمة (Large calculations)",
    "  * مثال: var result = CalculateLargeValue();",
    "- القاعدة الذهبية:",
    "  * عمليات I/O-Bound = انتظار (Waiting).",
    "  * عمليات CPU-Bound = عمل ومعالجة فعلية (Working)."
  ]
};
window.TOC_AR["L7-S005"] = window.TOC_AR["L7"]["L7-S005"];

window.TOC_AR["L7"]["L7-S006"] = {
  "ar": [
    "لماذا نحتاج إلى البرمجة غير المتزامنة؟ (Why Do We Need Async Programming?):",
    "- تبرز الحاجة إليها خصوصا في العمليات المقيدة بالإدخال/الإخراج (I/O-bound operations):",
    "  * استعلامات قواعد البيانات (Database queries)",
    "  * طلبات واستدعاءات HTTP (HTTP requests)",
    "  * عمليات قراءة وكتابة الملفات (File operations)",
    "  * الاتصال الشبكي (Network communication)",
    "  * واجهات برمجة التطبيقات (APIs)",
    "  * قراءة وكتابة تدفقات البيانات (Reading/writing streams)",
    "- مثال الكود البرمجي:",
    "  public async Task<string> GetUserAsync() {",
    "      return await httpClient.GetStringAsync(url);",
    "  }",
    "- الفائدة الجوهرية: أثناء انتظار الاستجابة القادمة عبر الشبكة، لا يحتاج التطبيق إلى حجب وتجميد المسلك دون فائدة (the application does not need to block a thread unnecessarily)."
  ]
};
window.TOC_AR["L7-S006"] = window.TOC_AR["L7"]["L7-S006"];

window.TOC_AR["L7"]["L7-S007"] = {
  "ar": [
    "الكلمات المحجوزة async و await:",
    "- الكلمة المحجوزة async:",
    "  * تشير إلى أن الدالة تحتوي على عمليات غير متزامنة (Indicates that a method contains asynchronous operations).",
    "  * مثال التعريف:",
    "    public async Task<string> GetDataAsync() { ... }",
    "- الكلمة المحجوزة await:",
    "  * تنتظر اكتمال العملية بصورة غير متزامنة دون تجميد المسلك (Asynchronously waits for the operation):",
    "  * مثال الاستدعاء: var result = await GetDataAsync();",
    "- مثال متكامل (Complete Example):",
    "  public async Task<string> GetDataAsync() {",
    "      await Task.Delay(1000);",
    "      return \"Data received\";",
    "  }"
  ]
};
window.TOC_AR["L7-S007"] = window.TOC_AR["L7"]["L7-S007"];

window.TOC_AR["L7"]["L7-S008"] = {
  "ar": [
    "العمليات المقيدة بالمعالج (CPU-Bound Work):",
    "- العمليات المقيدة بالمعالج تقضي معظم وقتها في استخدام المعالج للحسابات والمعالجة (spend most of their time using the CPU for computation).",
    "- مثال على حسابات مكثفة (Example):",
    "  long Calculate() {",
    "      long result = 0;",
    "      for (long i = 0; i < 1_000_000_000; i++)",
    "          result += i;",
    "      return result;",
    "  }",
    "- استخدام دالة Task.Run:",
    "  var result = await Task.Run(Calculate);",
    "- تقوم دالة Task.Run بنقل العمل المكثف حسابيا إلى مسلك من حوض المسالك (Thread Pool thread)، مما يسمح للمسلك المستدعي بالبقاء متجاوبا (allowing the calling thread to remain responsive).",
    "- قاعدة هامة جدا (Important):",
    "  * استخدم Task.Run للعمليات المقيدة بالمعالج (CPU-bound work) — ولا تستخدمها كبديل عام لعمليات الإدخال والإخراج غير المتزامنة (not as a generic replacement for asynchronous I/O)."
  ]
};
window.TOC_AR["L7-S008"] = window.TOC_AR["L7"]["L7-S008"];

window.TOC_AR["L7"]["L7-S009"] = {
  "ar": [
    "التنفيذ غير المتزامن المتسلسل مقابل المتزامن المشترك (Sequential Async vs Concurrent Async):",
    "- التنفيذ المتسلسل (Sequential):",
    "  var a = await GetAAsync();",
    "  var b = await GetBAsync();",
    "  * الخط الزمني (Timeline): العملية A ثم بعدها العملية B.",
    "  * إجمالي الزمن المستغرق: Total ≈ A + B",
    "- التنفيذ المتزامن المشترك (Concurrent):",
    "  var taskA = GetAAsync();",
    "  var taskB = GetBAsync();",
    "  var a = await taskA;",
    "  var b = await taskB;",
    "  * الخط الزمني (Timeline): تعمل العمليتان A و B في فترات زمنية متداخلة.",
    "  * إجمالي الزمن المستغرق: Total ≈ max(A, B)"
  ]
};
window.TOC_AR["L7-S009"] = window.TOC_AR["L7"]["L7-S009"];

window.TOC_AR["L7"]["L7-S010"] = {
  "ar": [
    "مفهوم المهمة (Task):",
    "- تمثل المهمة (Task) عملية غير متزامنة قيد التنفيذ (A Task represents an asynchronous operation).",
    "- للمهام التي لا تعيد قيمة:",
    "  Task task = DoSomethingAsync();",
    "  await task;",
    "- للمهام التي تعيد نتيجة وقيمة:",
    "  Task<int> task = CalculateAsync();",
    "  int result = await task;",
    "- المفهوم الذهبي لـ Task:",
    "  * المهمة Task هي: عملية ستكتمل في وقت ما في المستقبل (An operation that will finish sometime in the future)."
  ]
};
window.TOC_AR["L7-S010"] = window.TOC_AR["L7"]["L7-S010"];

window.TOC_AR["L7"]["L7-S011"] = {
  "ar": [
    "الجزء 2 — التزامن (Part 2 — Concurrency):",
    "- التزامن (Concurrency) يعني التعامل مع عمليات متعددة خلال فترات زمنية متداخلة (dealing with multiple operations during overlapping periods of time).",
    "- التمثيل الزمني:",
    "  * المهمة Task A تتداخل زمنيا مع Task B وتتداخل مع Task C (The operations overlap).",
    "- قاعدة أساسية وحاسمة:",
    "  * التزامن لا يعني بالضرورة أن العمليات تُنفذ في نفس اللحظة بالتمام (Concurrency does not necessarily mean they execute at exactly the same time)."
  ]
};
window.TOC_AR["L7-S011"] = window.TOC_AR["L7"]["L7-S011"];

window.TOC_AR["L7"]["L7-S012"] = {
  "ar": [
    "دالة انتظار جميع المهام (Task.WhenAll):",
    "- النهج الأمثل للتنفيذ المتزامن:",
    "  var results = await Task.WhenAll(",
    "      GetUserAsync(),",
    "      GetOrdersAsync(),",
    "      GetPaymentsAsync()",
    "  );",
    "- متى نستخدم Task.WhenAll؟",
    "  * نستخدمها عندما تكون العمليات:",
    "    - مستقلة عن بعضها البعض (Independent).",
    "    - غير متزامنة (Asynchronous).",
    "    - يمكن تشغيلها بالتزامن بأمان تام (Can safely run concurrently).",
    "- مثال من الواقع الحقيقي (Real-world example):",
    "  var tasks = countries.Select(country => GetExchangeRateAsync(country));",
    "  var rates = await Task.WhenAll(tasks);"
  ]
};
window.TOC_AR["L7-S012"] = window.TOC_AR["L7"]["L7-S012"];

window.TOC_AR["L7"]["L7-S013"] = {
  "ar": [
    "دالة انتظار أول مهمة تكتمل (Task.WhenAny):",
    "- الغرض: الانتظار حتى تكتمل أول مهمة من بين مجموعة مهام (Wait for the first task to complete).",
    "- كود الاستدعاء:",
    "  var task1 = GetFromServer1Async();",
    "  var task2 = GetFromServer2Async();",
    "  var completed = await Task.WhenAny(task1, task2);",
    "  var result = await completed;",
    "- المفهوم التوضيحي (Concept):",
    "  * الخادم Server 1 مستمر في المعالجة.",
    "  * الخادم Server 2 انتهى أولا وتم بنجاح (DONE).",
    "  * تلتقط WhenAny المهمة المكتملة فورا وتستكمل التنفيذ دون انتظار البقية."
  ]
};
window.TOC_AR["L7-S013"] = window.TOC_AR["L7"]["L7-S013"];

window.TOC_AR["L7"]["L7-S014"] = {
  "ar": [
    "مقارنة شاملة بين التزامن والتوازي (Concurrency vs Parallelism):",
    "- جدول المقارنة التفصيلي:",
    "  * حالة المهام: في التزامن عدة مهام قيد التقدم والإنجاز (Multiple tasks are in progress)، بينما في التوازي عدة مهام تُنفذ في نفس اللحظة تماما (Multiple tasks execute simultaneously).",
    "  * متطلبات العتاد: التزامن يمكن أن يحدث على نواة معالج واحدة (Can happen on one CPU core)، بينما التوازي يتطلب عادة أنوية معالج متعددة (Usually requires multiple CPU cores).",
    "  * محور التركيز: التزامن يركز على إدارة وتنظيم المهام (Focuses on managing tasks)، بينما التوازي يركز على سرعة تنفيذ المهام (Focuses on executing tasks).",
    "  * الاستخدام الأمثل: التزامن ممتاز لعمليات الإدخال والإخراج (Great for I/O)، بينما التوازي ممتاز للأعمال الحسابية المكثفة (Great for CPU-intensive work).",
    "- التوضيح بالرسم:",
    "  * التزامن (Concurrency): معالج واحد يدير Task A و Task B و Task C.",
    "  * التوازي (Parallelism): نواة 1 تنفذ Task A، نواة 2 تنفذ Task B، نواة 3 تنفذ Task C، ونواة 4 تنفذ Task D."
  ]
};
window.TOC_AR["L7-S014"] = window.TOC_AR["L7"]["L7-S014"];

window.TOC_AR["L7"]["L7-S015"] = {
  "ar": [
    "الجزء 3 — تعدد المسالك (Part 3 — Multithreading):",
    "- المسلك (Thread) هو مسار تنفيذ للتعليمات داخل العملية البرمجية (A thread is a path of execution inside a process).",
    "- المخطط الهيكلي:",
    "  * العملية (Process)",
    "    - المسلك 1 (Thread 1)",
    "    - المسلك 2 (Thread 2)",
    "    - المسلك 3 (Thread 3)",
    "- القاعدة الأساسية: يمكن للعملية الواحدة أن تحتوي على مسالك متعددة (A process can contain multiple threads)."
  ]
};
window.TOC_AR["L7-S015"] = window.TOC_AR["L7"]["L7-S015"];

window.TOC_AR["L7"]["L7-S016"] = {
  "ar": [
    "إنشاء مسلك في لغة C# (Creating a Thread in C#):",
    "- الكود اليدوي التقليدي:",
    "  Thread thread = new Thread(() => {",
    "      Console.WriteLine(\"Running...\");",
    "  });",
    "  thread.Start();",
    "- التوجيه الهندسي الحديث:",
    "  * في تطبيقات .NET الحديثة، يُفضل دائما استخدام البدائل الأرقى والأكثر كفاءة:",
    "    - المهام (Task)",
    "    - النمط غير المتزامن (async/await)",
    "    - حوض المسالك (ThreadPool)",
    "    - المعالجة المتوازية (Parallel)",
    "  * وذلك بدلا من إنشاء المسالك يدويا (instead of manually creating threads)."
  ]
};
window.TOC_AR["L7-S016"] = window.TOC_AR["L7"]["L7-S016"];

window.TOC_AR["L7"]["L7-S017"] = {
  "ar": [
    "حوض المسالك (ThreadPool):",
    "- تحتفظ بيئة .NET بحوض من مسالك العمال القابلة لإعادة الاستخدام (maintains a pool of reusable worker threads).",
    "- هيكلية الحوض:",
    "  * حوض المسالك (ThreadPool)",
    "    - مسلك عامل (Worker Thread)",
    "    - مسلك عامل (Worker Thread)",
    "    - مسلك عامل (Worker Thread)",
    "    - مسلك عامل (Worker Thread)",
    "- يمكن للمهام (Tasks) استخدام مسالك ThreadPool عند الاقتضاء.",
    "- لماذا نستخدم حوض المسالك؟ (Why?):",
    "  * تجنب إنشاء مسالك جديدة بشكل متكرر (Avoid creating threads repeatedly).",
    "  * إعادة استخدام المسالك القائمة (Reuse threads).",
    "  * تحسين قابلية التوسع والأداء للنظام (Improve scalability)."
  ]
};
window.TOC_AR["L7-S017"] = window.TOC_AR["L7"]["L7-S017"];

window.TOC_AR["L7"]["L7-S018"] = {
  "ar": [
    "دالة تفويض المهام Task.Run:",
    "- مثال الاستخدام للعمليات الحسابية:",
    "  var result = await Task.Run(() => {",
    "      return CalculateSomething();",
    "  });",
    "- دالة Task.Run مفيدة جدا لنقل العمليات المقيدة بالمعالج (CPU-bound work) إلى مسلك من مسالك ThreadPool.",
    "- تحذير حاسم: لا تستخدمها بشكل أعمى مع عمليات الإدخال والإخراج (I/O):",
    "  * ممارسة غير ضرورية وسيئة:",
    "    await Task.Run(() => httpClient.GetAsync(url));",
    "  * الممارسة المفضلة والصحيحة:",
    "    await httpClient.GetAsync(url);"
  ]
};
window.TOC_AR["L7-S018"] = window.TOC_AR["L7"]["L7-S018"];

window.TOC_AR["L7"]["L7-S019"] = {
  "ar": [
    "التكرار المتوازي Parallel.For — الجزء الأول:",
    "- تُستخدم دالة Parallel.For في C# لتنفيذ دورات وتكرارات الحلقة بالتوازي (execute iterations of a loop in parallel).",
    "- بدلا من معالجة كل دورة تلو الأخرى بالتتابع، تقوم بيئة تشغيل .NET بتوزيع العمل عبر مسالك متعددة من حوض Thread Pool.",
    "- حلقة for المتسلسلة التقليدية (Sequential for Loop):",
    "  for (int i = 0; i < 10; i++) {",
    "      Process(i);",
    "  }",
    "- مسار التنفيذ المتسلسل:",
    "  * 1 -> 2 -> 3 -> 4 -> 5 -> ... -> 10",
    "  * كل دورة تنتظر اكتمال الدورة التي تسبقها بالكامل (Each iteration waits for the previous one to complete)."
  ]
};
window.TOC_AR["L7-S019"] = window.TOC_AR["L7"]["L7-S019"];

window.TOC_AR["L7"]["L7-S020"] = {
  "ar": [
    "التكرار المتوازي Parallel.For — الجزء الثاني:",
    "- كود الاستدعاء المتوازي:",
    "  Parallel.For(0, 10, i => {",
    "      Process(i);",
    "  });",
    "- توزيع التكرارات عبر المسالك المتعددة:",
    "  * المسلك 1 (Thread 1) -> الدورات 0, 1, 2",
    "  * المسلك 2 (Thread 2) -> الدورات 3, 4, 5",
    "  * المسلك 3 (Thread 3) -> الدورات 6, 7",
    "  * المسلك 4 (Thread 4) -> الدورات 8, 9",
    "- قد تُنفذ هذه التكرارات في نفس اللحظة عبر أنوية معالج مختلفة (different CPU cores).",
    "- شروط الاستخدام المثالي:",
    "  * دالة Parallel.For مفيدة أساسا للعمليات المقيدة بالمعالج (CPU-bound work) حيث تكون كل دورة مستقلة نسبيا عن الأخرى (each iteration is relatively independent)."
  ]
};
window.TOC_AR["L7-S020"] = window.TOC_AR["L7"]["L7-S020"];

window.TOC_AR["L7"]["L7-S021"] = {
  "ar": [
    "الجزء 4 — أمان المسالك (Part 4 — Thread Safety):",
    "- حالة التسابق (Race condition): تحدث عندما تصل مسالك متعددة إلى بيانات مشتركة وتعتمد النتيجة النهائية على توقيت الوصول (result depends on timing).",
    "- مثال:",
    "  int counter = 0;",
    "  counter++;",
    "- تبدو العملية كأنها عملية واحدة، لكنها مفاهيميا تتكون من 3 خطوات:",
    "  * القراءة (Read): قراءة القيمة الحالية من الذاكرة إلى مسجل المعالج.",
    "  * التعديل (Modify): زيادة القيمة بمقدار 1.",
    "  * الكتابة (Write): كتابة القيمة الجديدة وإعادتها للذاكرة.",
    "- يمكن لمسلكين أن يتداخلا ويتعارضا مع بعضهما البعض (Two threads can interfere with each other)."
  ]
};
window.TOC_AR["L7-S021"] = window.TOC_AR["L7"]["L7-S021"];

window.TOC_AR["L7"]["L7-S022"] = {
  "ar": [
    "أمان المسالك وحالة البيانات المشتركة (Thread Safety):",
    "- الكود الآمن للمسالك (Thread-safe code):",
    "  * هو الكود الذي يتصرف ويعمل بشكل صحيح عند الوصول إليه بالتزامن من قبل مسالك متعددة (Code that behaves correctly when accessed concurrently by multiple threads).",
    "- الحالة والبيانات المشتركة (Shared State):",
    "  * مثل: int counter;",
    "  * مثل: List<int> items;",
    "  * مثل: Dictionary<int, string> cache;",
    "- المشكلة الرئيسية (Main Problem):",
    "  * مسالك متعددة (Multiple Threads) -> تصل لحالة وبيانات مشتركة (Shared State) -> يؤدي إلى حالة تسابق وتلف البيانات (Race Condition)."
  ]
};
window.TOC_AR["L7-S022"] = window.TOC_AR["L7"]["L7-S022"];

window.TOC_AR["L7"]["L7-S023"] = {
  "ar": [
    "مثال عملي على حالة التسابق (Race Condition Example):",
    "- الكود المصدري للتجربة:",
    "  int counter = 0;",
    "  Parallel.For(0, 1000, i => {",
    "      counter++;",
    "  });",
    "  Console.WriteLine(counter);",
    "- ما قد تتوقعه ظاهريا: 1000",
    "- النتيجة الفعلية في الواقع:",
    "  * يمكن أن تكون النتيجة أقل بكثير من 1000 (can be less than 1000) لأن مسالك متعددة تقوم بتعديل نفس المتغير بالتزامن وتتداخل خطوات التحديث مما يضيع جزءا من العمليات."
  ]
};
window.TOC_AR["L7-S023"] = window.TOC_AR["L7"]["L7-S023"];

window.TOC_AR["L7"]["L7-S024"] = {
  "ar": [
    "المزامنة باستخدام كلمة lock:",
    "- أحد الحلول لحماية البيانات المشتركة هو المزامنة باستخدام lock (synchronization using lock):",
    "  private readonly object _lock = new();",
    "  lock (_lock) {",
    "      counter++;",
    "  }",
    "- المفهوم العملي (Conceptually):",
    "  * المسلك 1 (Thread 1) -> يمتلك القفل -> ينفذ التعديل -> يحرر القفل.",
    "  * المسلك 2 (Thread 2) -> في حالة انتظار (WAIT).",
    "  * المسلك 3 (Thread 3) -> في حالة انتظار (WAIT).",
    "- القاعدة الأساسية: مسلك واحد فقط يدخل إلى القسم الحرج في المرة الواحدة (Only one thread enters the critical section at a time)."
  ]
};
window.TOC_AR["L7-S024"] = window.TOC_AR["L7"]["L7-S024"];

window.TOC_AR["L7"]["L7-S025"] = {
  "ar": [
    "الفئة الذرية Interlocked:",
    "- للعمليات الذرية البسيطة (For simple atomic operations):",
    "  Interlocked.Increment(ref counter);",
    "  بدلا من استخدام: counter++;",
    "- مفيدة جدا للعدادات والعمليات الذرية البسيطة ذات الأداء العالي.",
    "- العمليات الذرية الشائعة التي توفرها Interlocked:",
    "  * الزيادة بمقدار واحد (Increment)",
    "  * الإنقاص بمقدار واحد (Decrement)",
    "  * إضافة قيمة محددة (Add)",
    "  * استبدال القيمة (Exchange)",
    "  * المقارنة والاستبدال الشرطي (CompareExchange)"
  ]
};
window.TOC_AR["L7-S025"] = window.TOC_AR["L7"]["L7-S025"];

window.TOC_AR["L7"]["L7-S026"] = {
  "ar": [
    "المجموعات المتزامنة الآمنة للمسالك (Concurrent Collections):",
    "- توفر منصة .NET مجموعات مهيأة ومصممة خصيصا للوصول المتزامن:",
    "  * القاموس المتزامن: ConcurrentDictionary<TKey,TValue>",
    "  * الطابور المتزامن: ConcurrentQueue<T>",
    "  * المكدس المتزامن: ConcurrentStack<T>",
    "  * الحقيبة المتزامنة: ConcurrentBag<T>",
    "- مثال الاستخدام:",
    "  var queue = new ConcurrentQueue<int>();",
    "  Parallel.For(0, 1000, i => {",
    "      queue.Enqueue(i);",
    "  });",
    "- صُممت هذه المجموعات للوصول المتزامن الآمن؛ وتوصي مايكروسوفت رسميا باستخدام الأنواع التابعة لحزمة System.Collections.Concurrent في سيناريوهات الإضافة والحذف المتزامنة لأنها توفر أمان المسالك وقابلية التوسع (thread safety and scalability)."
  ]
};
window.TOC_AR["L7-S026"] = window.TOC_AR["L7"]["L7-S026"];

window.TOC_AR["L7"]["L7-S027"] = {
  "ar": [
    "حالة التعليق التام / الجمود الميت (Deadlock):",
    "- التعريف: التعليق التام (Deadlock) هو حالة ينتظر فيها مسلكان أو أكثر إلى الأبد موارد يحتجزها كل منهما من الآخر (Two or more threads wait forever for resources held by each other).",
    "- السيناريو التوضيحي:",
    "  * المسلك A (Thread A) -> يحتجز القفل A (Lock A) -> وينتظر القفل B المحتجز لدى B.",
    "  * المسلك B (Thread B) -> يحتجز القفل B (Lock B) -> وينتظر القفل A المحتجز لدى A.",
    "- النتيجة الحتمية:",
    "  * انتظار لا نهائي إلى الأبد وتجمد البرنامج بالكامل (FOREVER WAITING)."
  ]
};
window.TOC_AR["L7-S027"] = window.TOC_AR["L7"]["L7-S027"];

window.TOC_AR["L7"]["L7-S028"] = {
  "ar": [
    "المشكلة الواقعية للتعليق التام (The problem):",
    "- سيناريو تحويل الأموال بين الحسابات البنكية:",
    "  * المعاملة 1 (Transaction 1): تحويل أموال من الحساب A إلى الحساب B:",
    "    - تحجز القفل على الحساب Account A.",
    "    - تنتظر الحصول على القفل للحساب Account B.",
    "  * المعاملة 2 (Transaction 2): تحويل أموال بالاتجاه المعاكس من الحساب B إلى الحساب A:",
    "    - تحجز القفل على الحساب Account B.",
    "    - تنتظر الحصول على القفل للحساب Account A.",
    "- المخطط الدائري:",
    "  * المعاملة 1 تمتلك A وتنتظر B.",
    "  * المعاملة 2 تمتلك B وتنتظر A.",
    "  * النتيجة: حلقة انتظار متبادلة وتجمد تام لكلا المعاملتين البنكيتين."
  ]
};
window.TOC_AR["L7-S028"] = window.TOC_AR["L7"]["L7-S028"];

window.TOC_AR["L7"]["L7-S029"] = {
  "ar": [
    "أفضل ممارسات الأقفال وتجنب التعليق التام — القواعد 1 و 2:",
    "1. إبقاء نطاق الأقفال صغيرا وموجزا (Keep Locks Small):",
    "   * اجعل القسم الحرج (critical section) قصيرا قدر الإمكان.",
    "   * كود المثال:",
    "     var data = ReadData(); // قراءة البيانات خارج القفل",
    "     lock (_lock) {",
    "         sharedData.Update(data); // التحديث فقط داخل القفل",
    "     }",
    "   * السبب والغاية (Why?): القفل الأقصر يعني قضاء مسالك أخرى وقتا أقل بكثير في الانتظار.",
    "2. تجنب الأقفال المتداخلة (Avoid Nested Locks):",
    "   * تجنب حيازة قفل جديد بينما أنت تحتجز قفلا آخر بالفعل.",
    "   * الكود المحفوف بالمخاطر (Risky):",
    "     lock (_lockA) {",
    "         lock (_lockB) {",
    "             // Critical section",
    "         }",
    "     }",
    "   * السبب والغاية (Why?): يمكن أن تؤدي الأقفال المتداخلة إلى Deadlock عندما يحصل مسلك آخر على الأقفال بالترتيب المعاكس."
  ]
};
window.TOC_AR["L7-S029"] = window.TOC_AR["L7"]["L7-S029"];

window.TOC_AR["L7"]["L7-S030"] = {
  "ar": [
    "أفضل ممارسات الأقفال وتجنب التعليق التام — القاعدة 3:",
    "3. استخدام ترتيب ثابت وموحد للأقفال (Use Consistent Lock Ordering):",
    "   * إذا كانت هناك حاجة حتمية لأقفال متعددة، قم دائما بحيازتها وطلبها بنفس الترتيب الموحد.",
    "   * كود التطبيق الموحد:",
    "     // المسلك 1 (Thread 1)",
    "     lock (_lockA) {",
    "         lock (_lockB) { /* العمل البرمجي */ }",
    "     }",
    "     // المسلك 2 (Thread 2)",
    "     lock (_lockA) {",
    "         lock (_lockB) { /* العمل البرمجي */ }",
    "     }",
    "   * السبب والغاية (Why?): الترتيب الموحد والمنسق يقلل بشكل حاسم من مخاطر حدوث التعليق التام (Consistent ordering reduces the risk of Deadlock)."
  ]
};
window.TOC_AR["L7-S030"] = window.TOC_AR["L7"]["L7-S030"];

window.TOC_AR["L7"]["L7-S031"] = {
  "ar": [
    "أفضل ممارسات الأقفال وتجنب التعليق التام — القاعدة 4:",
    "4. تجنب حجب وتجميد الكود غير المتزامن (Avoid Blocking Async Code):",
    "   * لا تقم بحجب وتجميد العمليات غير المتزامنة باستخدام الخاصية .Result أو الدالة .Wait().",
    "   * الكود الحاصر والخاطئ (Blocking):",
    "     var result = GetDataAsync().Result;",
    "   * الكود المفضل والصحيح (Asynchronous):",
    "     var result = await GetDataAsync();",
    "   * السبب والغاية (Why?): تجميد الكود غير المتزامن يهدر المسالك وقد يسبب حالات تعليق تام في بعض سياقات المزامنة (can waste threads and may cause deadlocks in some synchronization contexts)."
  ]
};
window.TOC_AR["L7-S031"] = window.TOC_AR["L7"]["L7-S031"];

window.TOC_AR["L7"]["L7-S032"] = {
  "ar": [
    "أفضل ممارسات الأقفال وتجنب التعليق التام — القاعدة 5:",
    "5. تفضيل التجريدات عالية المستوى للتزامن (Prefer Higher-Level Concurrency Abstractions):",
    "   * استخدم أدوات التزامن المدمجة الجاهزة عندما تناسب المشكلة البرمجية.",
    "   * بدلا من القفل اليدوي للطابور:",
    "     lock (_lock) { queue.Enqueue(item); }",
    "   * استخدم المجموعات الآمنة المدمجة:",
    "     var queue = new ConcurrentQueue<int>();",
    "     queue.Enqueue(item);",
    "   * تجريدات متقدمة ومفيدة أخرى تشمل:",
    "     - Task / async-await",
    "     - Task.WhenAll",
    "     - Parallel.For",
    "     - ConcurrentDictionary",
    "     - ConcurrentQueue",
    "     - Interlocked",
    "- المبدأ الجوهري الحاكم (Key Principle):",
    "  * الأقفال تحمي البيانات المشتركة، ولكن الأقفال غير الضرورية أو سيئة التصميم يمكن أن تسبب مشاكل خطيرة في الأداء وحالات تعليق تام (Locks protect shared data, but unnecessary or poorly designed locking can cause performance problems and deadlocks)."
  ]
};
window.TOC_AR["L7-S032"] = window.TOC_AR["L7"]["L7-S032"];

window.TOC_AR["L7"]["L7-S033"] = {
  "ar": [
    "الجزء 5 — إدارة الذاكرة في منصة .NET (Part 5 — Memory Management):",
    "- إدارة الذاكرة هي عملية تشمل الأنشطة التالية (Memory management is the process of):",
    "  * تخصيص الذاكرة (Allocating memory).",
    "  * استخدام الذاكرة (Using memory).",
    "  * تحرير وتفريغ الذاكرة (Releasing memory).",
    "  * إعادة استخدام الذاكرة (Reusing memory).",
    "  * منع تسريبات الذاكرة (Preventing memory leaks).",
    "- في منصة .NET، تتم إدارة الذاكرة إلى حد كبير وبشكل تلقائي بواسطة جامع القمامة (largely handled automatically by the Garbage Collector - GC)."
  ]
};
window.TOC_AR["L7-S033"] = window.TOC_AR["L7"]["L7-S033"];

window.TOC_AR["L7"]["L7-S034"] = {
  "ar": [
    "مقارنة المكدس مقابل الركام (Stack vs Heap):",
    "- نظرة مبسطة لهيكل الذاكرة (A simplified view):",
    "  * الذاكرة (Memory)",
    "    - المكدس (Stack)",
    "    - الركام (Heap)",
    "- ذاكرة المكدس (Stack):",
    "  * تحتوي عادة على:",
    "    - المتغيرات المحلية (Local variables).",
    "    - معلومات استدعاء الدوال (Method call information).",
    "    - المراجع والقيم المحلية (References/local values).",
    "  * مثال: void Calculate() { int x = 10; }",
    "- ذاكرة الركام (Heap):",
    "  * تُستخدم للكائنات المخصصة ديناميكيا (Used for dynamically allocated objects).",
    "  * مثال: var user = new User();",
    "  * يتم حجز وتخصيص الكائن الفعلي على الركام المدار (allocated on the managed heap)."
  ]
};
window.TOC_AR["L7-S034"] = window.TOC_AR["L7"]["L7-S034"];

window.TOC_AR["L7"]["L7-S035"] = {
  "ar": [
    "أنواع القيمة مقابل أنواع المرجع — أنواع القيمة (Value Types):",
    "- أمثلة على أنواع القيمة (Value Type Examples):",
    "  * الأعداد الصحيحة: int",
    "  * الأعداد العشرية: double",
    "  * القيم المنطقية: bool",
    "  * الهياكل: struct",
    "  * التعدادات: enum",
    "- مثال برمجي يوضح سلوك النسخ:",
    "  int x = 10;",
    "  int y = x;",
    "  y = 20;",
    "- القيمة النهائية للمتغير x:",
    "  * يظل المتغير x محتفظا بقيمته الأصلية 10 دون أي تغيير (x remains: 10) لأن المتغير y أخذ نسخة مستقلة تماما من القيمة."
  ]
};
window.TOC_AR["L7-S035"] = window.TOC_AR["L7"]["L7-S035"];

window.TOC_AR["L7"]["L7-S036"] = {
  "ar": [
    "أنواع المرجع (Reference Types):",
    "- أمثلة على أنواع المرجع (Reference Type Examples):",
    "  * الأصناف: class",
    "  * الكائنات العامة: object",
    "  * النصوص: string",
    "  * المصفوفات: Array",
    "- مثال برمجي يوضح سلوك المراجع المشتركة:",
    "  var user1 = new User();",
    "  var user2 = user1;",
    "- كلا المرجعين يشيران إلى نفس الكائن تماما في الذاكرة الركامية (Both references point to the same object):",
    "  * المرجع user1 والمرجع user2 يتجهان لنفس الكائن User Object على الركام."
  ]
};
window.TOC_AR["L7-S036"] = window.TOC_AR["L7"]["L7-S036"];

window.TOC_AR["L7"]["L7-S037"] = {
  "ar": [
    "جامع القمامة في .NET (Garbage Collector):",
    "- يقوم جامع القمامة في .NET تلقائيا بالتعرف على الكائنات التي لم يعد بالإمكان الوصول إليها ويقوم باسترجاع وتحرير ذاكرتها (automatically identifies objects that are no longer reachable and reclaims their memory).",
    "- دورة حياة الكائن:",
    "  * إنشاء الكائن (Create Object) -> استخدام الكائن (Use Object) -> انقطاع المراجع (No References) -> تدخل جامع القمامة (Garbage Collector) -> استرجاع الذاكرة وتحريرها (Memory Reclaimed).",
    "- مثال:",
    "  var user = new User();",
    "  user = null;",
    "- يصبح الكائن في النهاية مؤهلا لجمع القمامة (eligible for garbage collection).",
    "- قاعدة هامة جدا (Important):",
    "  * تعيين المرجع إلى null لا يحرر الذاكرة بشكل فوري (Setting a reference to null does not immediately free the memory)."
  ]
};
window.TOC_AR["L7-S037"] = window.TOC_AR["L7"]["L7-S037"];

window.TOC_AR["L7"]["L7-S038"] = {
  "ar": [
    "جمع القمامة القائم على الأجيال (Generational Garbage Collection):",
    "- يستخدم جامع القمامة في .NET نظام الأجيال (uses generations):",
    "  * الجيل 0 (Generation 0) -> الجيل 1 (Generation 1) -> الجيل 2 (Generation 2).",
    "- تعريف الأجيال:",
    "  * الجيل 0 (Gen 0): مخصص للكائنات قصيرة العمر (Short-lived objects).",
    "  * الجيل 1 (Gen 1): مخصص للكائنات التي نجت من جمع الجيل 0 (Objects that survived Gen 0).",
    "  * الجيل 2 (Gen 2): مخصص للكائنات طويلة العمر (Long-lived objects).",
    "- الفكرة العامة الحاكمة (General idea):",
    "  * معظم الكائنات تموت وتفقد الحاجة إليها في وقت مبكر (Most objects die young) -> مما يمكن جامع القمامة من جمعها بكفاءة وسرعة عالية."
  ]
};
window.TOC_AR["L7-S038"] = window.TOC_AR["L7"]["L7-S038"];

window.TOC_AR["L7"]["L7-S039"] = {
  "ar": [
    "الموارد المدارة مقابل الموارد غير المدارة (Managed vs Unmanaged Resources):",
    "- الموارد المدارة (Managed):",
    "  * تقع تحت السيطرة والإشراف الكامل لجامع القمامة في .NET (Controlled by the .NET GC):",
    "    - الكائنات البرمجية (Objects)",
    "    - المصفوفات (Arrays)",
    "    - النصوص (Strings)",
    "    - القوائم (Lists)",
    "- الموارد غير المدارة (Unmanaged):",
    "  * موارد تقع خارج نظام الذاكرة المدارة الطبيعي (Resources outside the normal managed-memory system):",
    "    - مقابض ومؤشرات الملفات (File handles)",
    "    - اتصالات قواعد البيانات (Database connections)",
    "    - منافذ الشبكة (Sockets)",
    "    - الموارد الأصلية للنظام (Native resources)",
    "    - مقابض نظام التشغيل (Operating-system handles)",
    "  * هذه الموارد تتطلب غالبا تنظيفا وإغلاقا صريحا من المطور (often require explicit cleanup)."
  ]
};
window.TOC_AR["L7-S039"] = window.TOC_AR["L7"]["L7-S039"];

window.TOC_AR["L7"]["L7-S040"] = {
  "ar": [
    "واجهة التحرير IDisposable وجملة using:",
    "- للموارد التي تتطلب تنظيفا وإغلاقا محددا وحتميا في وقت معلوم (deterministic cleanup):",
    "  using var connection = new SqlConnection(connectionString);",
    "  connection.Open();",
    "- في نهاية النطاق (scope)، يتم استدعاء دالة Dispose() تلقائيا وبصورة حتمية.",
    "- المفهوم المكافئ لجملة using هو كتلة try-finally:",
    "  var resource = new MyResource();",
    "  try {",
    "      // استخدام المورد",
    "  }",
    "  finally {",
    "      resource.Dispose(); // ضمان الاستدعاء حتى عند حدوث استثناء",
    "  }"
  ]
};
window.TOC_AR["L7-S040"] = window.TOC_AR["L7"]["L7-S040"];

window.TOC_AR["L7"]["L7-S041"] = {
  "ar": [
    "تسريب الذاكرة (Memory Leak):",
    "- يحدث تسريب الذاكرة عندما تصبح الذاكرة غير مفيدة للتطبيق ولكنها تظل قابلة للوصول فلا يمكن استرجاعها بواسطة الـ GC كما هو متوقع (memory is no longer useful but remains reachable or cannot be reclaimed).",
    "- الأسباب الشائعة لتسريبات الذاكرة (Common causes include):",
    "  * المجموعات الساكنة التي تنمو وتتضخم بلا حدود (Static collections growing indefinitely).",
    "  * معالجات الأحداث التي لا يُلغى الاشتراك فيها (Event handlers not unsubscribed).",
    "  * المراجع طويلة العمر التي تحتجز كائنات قصيرة (Long-lived references).",
    "  * التخزين المؤقت دون حدود أو سياسات إفراغ (Caching without limits).",
    "  * المعالجة غير السليمة للموارد غير المدارة (Improper unmanaged resource handling).",
    "- كود المثال التوضيحي:",
    "  static List<byte[]> cache = new();",
    "  while (true) {",
    "      cache.Add(new byte[1024 * 1024]);",
    "  }",
    "- المشكلة: تحتفظ القائمة الساكنة باستمرار بمراجع إلى الكائنات فلا يستطيع الـ GC تحريرها."
  ]
};
window.TOC_AR["L7-S041"] = window.TOC_AR["L7"]["L7-S041"];

window.TOC_AR["L7"]["L7-S042"] = {
  "ar": [
    "مثال من الواقع الحقيقي — واجهة Web API (التطبيق السيئ المتسلسل):",
    "- تخيل نقطة نهاية في واجهة برمجة: GET /dashboard",
    "- تحتاج هذه الصفحة لجلب البيانات الأربعة التالية:",
    "  * بيانات المستخدم (User)",
    "  * قائمة الطلبات (Orders)",
    "  * سجل المدفوعات (Payments)",
    "  * الإشعارات (Notifications)",
    "- التنفيذ السيئ المتتابع (Bad implementation):",
    "  var user = await GetUserAsync();",
    "  var orders = await GetOrdersAsync();",
    "  var payments = await GetPaymentsAsync();",
    "  var notifications = await GetNotificationsAsync();",
    "- حساب الزمن: إذا استغرقت كل عملية ثانية واحدة:",
    "  * 1 + 1 + 1 + 1 = حوالي 4 ثوانٍ (~4 seconds)."
  ]
};
window.TOC_AR["L7-S042"] = window.TOC_AR["L7"]["L7-S042"];

window.TOC_AR["L7"]["L7-S043"] = {
  "ar": [
    "الحل الهندسي الأفضل — استخدام Task.WhenAll:",
    "- كود التنفيذ المحسن المتزامن:",
    "  var userTask = GetUserAsync();",
    "  var ordersTask = GetOrdersAsync();",
    "  var paymentsTask = GetPaymentsAsync();",
    "  var notificationsTask = GetNotificationsAsync();",
    "  await Task.WhenAll(",
    "      userTask,",
    "      ordersTask,",
    "      paymentsTask,",
    "      notificationsTask",
    "  );",
    "- المفهوم الزمني (Conceptually):",
    "  * تنطلق العمليات الأربع (User, Orders, Payments, Notifications) لتعمل معا بالتزامن في نفس الوقت.",
    "  * إجمالي الزمن المستغرق: حوالي ثانية واحدة فقط (~1 second) بدلا من 4 ثوانٍ!"
  ]
};
window.TOC_AR["L7-S043"] = window.TOC_AR["L7"]["L7-S043"];

window.TOC_AR["L7"]["L7-S044"] = {
  "ar": [
    "الأخطاء البرمجية الشائعة (Common Mistakes):",
    "- الخطأ 1 (Mistake 1):",
    "  * استخدام Task.Run(() => DatabaseCall());",
    "  * هذا لا يجعل الكود أفضل تلقائيا، بل يحجز مسلكا من حوض المسالك بلا داعٍ لاستدعاء قاعدة بيانات يمتلك بالأصل دوال غير متزامنة.",
    "- الخطأ 2 (Mistake 2):",
    "  * استخدام .Result أو .Wait()",
    "  * هذه الخصائص والدوال قد تحجب وتجمد المسالك وتتسبب في حالات تعليق تام (deadlocks).",
    "  * البديل المفضل: استخدام الكلمة المحجوزة await.",
    "- الخطأ 3 (Mistake 3):",
    "  * استخدام المتغيرات المشتركة دون مزامنة، مثل: counter++;",
    "  * يؤدي مباشرة لحدوث حالات تسابق وتلف البيانات.",
    "- الخطأ 4 (Mistake 4):",
    "  * إنشاء مسلك جديد لكل عملية منفردة (new Thread).",
    "  * البديل المفضل: استخدام Task أو ThreadPool أو النمط غير المتزامن async/await."
  ]
};
window.TOC_AR["L7-S044"] = window.TOC_AR["L7"]["L7-S044"];

window.TOC_AR["L7"]["L7-S045"] = {
  "ar": [
    "قياس وتحسين أداء الذاكرة (Memory Performance):",
    "- القاعدة الذهبية: لا تخمن — بل قس بالأدوات الدقيقة (Don't guess — measure).",
    "- الأدوات والمفاهيم المفيدة (Useful tools/concepts):",
    "  * أدوات التشخيص في فيجوال ستوديو (Visual Studio Diagnostic Tools):",
    "    - المسار: Debug -> Windows -> Diagnostic Tools",
    "    - قياس: استهلاك المعالج (CPU Usage)، استهلاك الذاكرة (Memory Usage)، والتقاط لقطة للذاكرة (Take Snapshot).",
    "  * أداة العدادات (dotnet-counters):",
    "    - مراقبة العمليات: dotnet-counters monitor --process-id 1234",
    "  * أداة التتبع (dotnet-trace):",
    "    - جمع بيانات التتبع: dotnet-trace collect --process-id 1234",
    "  * أداة تحليل مقالب الذاكرة (dotnet-dump):",
    "    - جمع المقلب: dotnet-dump collect --process-id 1234",
    "    - تحليل المقلب: dotnet-dump analyze dump.dmp",
    "  * مقاييس جامع القمامة (GC metrics):",
    "    - مراقبة مقاييس الـ GC عبر dotnet-counters monitor --process-id 12540",
    "- توفر مايكروسوفت إرشادات مخصصة لفحص أداء جامع القمامة والذاكرة، بما في ذلك التنميط أثناء التشغيل (runtime profiling) وفحص الركام (heap inspection)."
  ]
};
window.TOC_AR["L7-S045"] = window.TOC_AR["L7"]["L7-S045"];

