/* الترجمة العربية لسلايدات الوحدة 8: النظم الموزعة والخدمات المصغرة والذكاء الاصطناعي RAG
   المدرس: د. بيداء لعلع — 50 شريحة كاملة (L8-S001 إلى L8-S050)
   معيار: 100% SVG line-art · صفر إيموجيات
*/
window.TOC_AR = window.TOC_AR || {};
window.TOC_AR["L8"] = window.TOC_AR["L8"] || {};

window.TOC_AR["L8"]["L8-S001"] = {
  "ar": [
    "البرمجة المتقدمة (Advanced Programming)",
    "المحاضرة التاسعة: الأنظمة الحديثة (Lecture 9: Modern Systems)",
    "الخدمات المصغرة، خطافات الويب، هندسة الذكاء الاصطناعي و RAG، والأتمتة",
    "(Microservices, Webhooks, AI Engineering & RAG, and Automation)",
    "أستاذة المقرر: د. بيداء لعلع"
]
};
window.TOC_AR["L8-S001"] = window.TOC_AR["L8"]["L8-S001"];

window.TOC_AR["L8"]["L8-S002"] = {
  "ar": [
    "الأهداف التعليمية (Learning Objectives):",
    "بنهاية هذه المحاضرة، يجب أن يكون الطلاب قادرين على:",
    "- شرح معمارية الأنظمة الحديثة (Explain modern system architecture).",
    "- فهم واجهات البرمجة وخطافات الويب (Understand APIs and Webhooks).",
    "- شرح المعمارية الموحدة (Explain Monolithic Architecture).",
    "- شرح معمارية الخدمات المصغرة (Explain Microservices Architecture).",
    "- فهم الاتصال المتزامن مقابل غير المتزامن (Understand synchronous vs asynchronous communication).",
    "- شرح وسائط الرسائل (Explain Message Brokers).",
    "- فهم بوابة واجهة البرمجة (Understand API Gateway).",
    "- شرح نمط قاعدة بيانات لكل خدمة (Explain Database-per-Service).",
    "- فهم التوليد المعزز بالاسترجاع والتضمينات (Understand RAG and embeddings).",
    "- شرح كيفية دمج النماذج اللغوية الكبيرة في التطبيقات (Explain how LLMs are integrated into applications).",
    "- فهم المرونة، وحيادية التكرار، وقابلية الملاحظة (Understand resilience, idempotency and observability).",
    "- تصميم نظام خدمات مصغرة متكامل يعتمد على واتساب (Design a complete WhatsApp-based Microservices system).",
    "دراسة حالة (Case Study):",
    "متجر إلكترونيات + WhatsApp + Meta API + ASP.NET Core + خدمات مصغرة + RAG + LLM."
]
};
window.TOC_AR["L8-S002"] = window.TOC_AR["L8"]["L8-S002"];

window.TOC_AR["L8"]["L8-S003"] = {
  "ar": [
    "المشكلة (The Problem):",
    "- تخيل أن لدينا متجر إلكترونيات (electronics store).",
    "- يتواصل العملاء معنا من خلال واتساب (WhatsApp).",
    "- يرسل أحد العملاء: \"كم سعر سامسونج A55؟\" (\"How much is Samsung A55?\")",
    "- يسأل عميل آخر: \"هل يمكنني إرجاع هاتفي بعد خمسة أيام؟\" (\"Can I return my phone after five days?\")",
    "- يسأل عميل ثالث: \"هل سامسونج A55 متوفر؟\" (\"Is Samsung A55 available?\")",
    "- هدفنا: الإجابة تلقائياً عن هذه الأسئلة."
]
};
window.TOC_AR["L8-S003"] = window.TOC_AR["L8"]["L8-S003"];

window.TOC_AR["L8"]["L8-S004"] = {
  "ar": [
    "فكرتنا البسيطة الأولى (Our First Simple Idea):",
    "- يمكننا إنشاء تطبيق ASP.NET Core بسيط.",
    "العميل (Customer)",
    "↓ يرسل رسالة (sends message)",
    "واتساب (WhatsApp)",
    "↓",
    "ميتا (Meta)",
    "↓ خطاف ويب (Webhook)",
    "تطبيق C# الخاص بنا (Our C# Application)",
    "↓",
    "الإجابة (Answer)",
    "- في البداية، يبدو هذا سهلاً.",
    "- ولكن هناك سؤال يطرح نفسه:",
    "- كيف يعرف تطبيق C# الخاص بنا أن العميل أرسل رسالة واتساب؟",
    "- الجواب: من خلال خطاف الويب (Through a Webhook)."
]
};
window.TOC_AR["L8-S004"] = window.TOC_AR["L8"]["L8-S004"];

window.TOC_AR["L8"]["L8-S005"] = {
  "ar": [
    "ما هو خطاف الويب؟ (What is a Webhook?):",
    "- خطاف الويب هو نقطة نهاية HTTP (HTTP endpoint) تستقبل إشعارات الأحداث.",
    "- على سبيل المثال:",
    "  العميل يرسل رسالة واتساب",
    "  ↓",
    "  ميتا (Meta)",
    "  ↓",
    "  طلب HTTP POST",
    "  ↓",
    "  خطاف الويب الخاص بنا (Our Webhook)",
    "- خطاف الويب يخبر نظامنا: \"لقد وصلت رسالة واتساب جديدة.\" (\"A new WhatsApp message has arrived.\")",
    "- نحتاج إلى أن تُخطر ميتا (Meta) تطبيقنا عندما يقع حدث ما.",
    "- هذا ما يُسمى بخطاف الويب (Webhook)."
]
};
window.TOC_AR["L8-S005"] = window.TOC_AR["L8"]["L8-S005"];

window.TOC_AR["L8"]["L8-S006"] = {
  "ar": [
    "خطاف ويب بلغة C# (C# Webhook):",
    "- كود المتحكم في ASP.NET Core:",
    "[ApiController]",
    "[Route(\"api/webhooks\")]",
    "public class WhatsAppController : ControllerBase",
    "{",
    "    [HttpPost(\"whatsapp\")]",
    "    public IActionResult ReceiveMessage(",
    "        WhatsAppMessage request)",
    "    {",
    "        Console.WriteLine(request.Message);",
    "",
    "        return Ok();",
    "    }",
    "}",
    "- الآن يمكن لتطبيقنا استقبال:",
    "POST /api/webhooks/whatsapp"
]
};
window.TOC_AR["L8-S006"] = window.TOC_AR["L8"]["L8-S006"];

window.TOC_AR["L8"]["L8-S007"] = {
  "ar": [
    "ماذا يحدث؟ (What Happens?):",
    "- يرسل العميل:",
    "  How much is Samsung A55? (كم سعر سامسونج A55؟)",
    "- ترسل ميتا (Meta):",
    "  POST /api/webhooks/whatsapp",
    "  مع البيانات التالية:",
    "  {",
    "    \"phone\": \"+967777777777\",",
    "    \"message\": \"How much is Samsung A55?\"",
    "  }",
    "- يستقبل تطبيق C# الخاص بنا الرسالة:",
    "  Meta",
    "  ↓",
    "  Webhook",
    "  ↓",
    "  ReceiveMessage()"
]
};
window.TOC_AR["L8-S007"] = window.TOC_AR["L8"]["L8-S007"];

window.TOC_AR["L8"]["L8-S008"] = {
  "ar": [
    "واجهة البرمجة مقابل خطاف الويب (API vs Webhook):",
    "- واجهة البرمجة (API): نحن نستدعي نظاماً آخر (We call another system).",
    "- خطاف الويب (Webhook): نظام آخر يستدعينا (Another system calls us).",
    "- واجهة البرمجة (API): نطلب بيانات أو إجراءً (We request data or an action).",
    "- خطاف الويب (Webhook): نستقبل إشعاراً حول وقوع حدث (We receive a notification about an event).",
    "- مثال على API: إرسال رسالة واتساب (Send a WhatsApp message).",
    "- مثال على Webhook: استقبال رسالة واتساب جديدة (Receive a new WhatsApp message).",
    "- القاعدة البسيطة (Simple Rule):",
    "  * API: أنا أسألك (I ask you).",
    "  * Webhook: أنت تخبرني (You tell me)."
]
};
window.TOC_AR["L8-S008"] = window.TOC_AR["L8"]["L8-S008"];

window.TOC_AR["L8"]["L8-S009"] = {
  "ar": [
    "المشكلة رقم 2 (Problem #2):",
    "- الآن لدينا الرسالة.",
    "- ولكن تطبيقنا يواجه مشكلة أخرى:",
    "- من أين نحصل على الإجابة؟",
    "- يمكننا أن نكتب:",
    "  if (message.Contains(\"Samsung A55\"))",
    "  {",
    "      return \"Samsung A55 is 150,000 YER\";",
    "  }",
    "- لكن هذا حل سيئ (But this is a bad solution)."
]
};
window.TOC_AR["L8-S009"] = window.TOC_AR["L8"]["L8-S009"];

window.TOC_AR["L8"]["L8-S010"] = {
  "ar": [
    "لماذا يُعد هذا حلاً سيئاً؟ (Why Is This a Bad Solution?):",
    "- تخيل لو كان لدينا:",
    "  * 10 منتجات (10 products)",
    "  * 100 منتج (100 products)",
    "  * 10,000 منتج (10,000 products)",
    "- سيصبح الكود البرمجي لدينا عبارة عن:",
    "  if (...)",
    "  {",
    "  }",
    "  else if (...)",
    "  {",
    "  }",
    "  else if (...)",
    "  {",
    "  }",
    "  else if (...)",
    "  {",
    "  }",
    "- هذا الكود صعب الصيانة والتطوير (This is difficult to maintain)."
]
};
window.TOC_AR["L8-S010"] = window.TOC_AR["L8"]["L8-S010"];

window.TOC_AR["L8"]["L8-S011"] = {
  "ar": [
    "المشكلة رقم 3 (Problem #3):",
    "- الآن يسأل العميل:",
    "  \"هل يمكنني إرجاع هاتفي بعد خمسة أيام؟\" (\"Can I return my phone after five days?\")",
    "- خدمة المنتجات (Product Service) لا تعرف الإجابة.",
    "- هذه المعلومات موجودة في سياسة الشركة (company policy).",
    "- على سبيل المثال:",
    "  ملف company.txt يحتوي على:",
    "  سياسة الإرجاع (Return Policy):",
    "  يمكن للعملاء إرجاع المنتجات خلال 7 أيام (Customers can return products within 7 days)."
]
};
window.TOC_AR["L8-S011"] = window.TOC_AR["L8"]["L8-S011"];

window.TOC_AR["L8"]["L8-S012"] = {
  "ar": [
    "نحتاج إلى المعرفة المؤسسية للشركة (We Need Company Knowledge):",
    "- نحتاج إلى أن يبحث النظام في معلومات شركتنا.",
    "سؤال العميل (Customer Question)",
    "↓",
    "معرفة الشركة (Company Knowledge)",
    "↓",
    "المعلومات ذات الصلة (Relevant Information)",
    "↓",
    "الإجابة (Answer)",
    "- ولكن يظهر سؤال آخر:",
    "- كيف يمكن للنظام العثور على المعلومات ذات الصلة؟"
]
};
window.TOC_AR["L8-S012"] = window.TOC_AR["L8"]["L8-S012"];

window.TOC_AR["L8"]["L8-S013"] = {
  "ar": [
    "تقنية RAG = التوليد المعزز بالاسترجاع (Retrieval-Augmented Generation):",
    "- تجمع تقنية RAG بين فكرتين:",
    "  1. الاسترجاع (Retrieval): العثور على المعلومات ذات الصلة (Find relevant information).",
    "  2. التوليد (Generation): استخدام نموذج لغوي كبير (LLM) لتوليد الإجابة (Use an LLM to generate the answer).",
    "السؤال (Question)",
    "↓",
    "استرجاع المعلومات ذات الصلة (Retrieve relevant information)",
    "↓",
    "تزويد النموذج اللغوي بالمعلومات (Give information to LLM)",
    "↓",
    "توليد الإجابة (Generate answer)",
    "- قدمت أبحاث RAG الأصلية هذا الدمج بين الاسترجاع والتوليد للمهام كثيفة المعرفة."
]
};
window.TOC_AR["L8-S013"] = window.TOC_AR["L8"]["L8-S013"];

window.TOC_AR["L8"]["L8-S014"] = {
  "ar": [
    "مثال بسيط على تقنية RAG (Simple RAG Example):",
    "- معرفة الشركة (Company knowledge):",
    "  * سياسة الإرجاع (Return Policy): يمكن للعملاء إرجاع المنتجات خلال 7 أيام.",
    "  * الشحن (Shipping): الشحن داخل صنعاء مجاني.",
    "  * ساعات العمل (Working Hours): 9 صباحاً - 6 مساءً.",
    "- العميل يسأل:",
    "  \"هل يمكنني إرجاع هاتفي بعد خمسة أيام؟\" (Can I return my phone after five days?)",
    "- يجب على نظامنا استرجاع بند السياسة فقط:",
    "  \"يمكن للعملاء إرجاع المنتجات خلال 7 أيام.\" (Customers can return products within 7 days)."
]
};
window.TOC_AR["L8-S014"] = window.TOC_AR["L8"]["L8-S014"];

window.TOC_AR["L8"]["L8-S015"] = {
  "ar": [
    "المشكلة رقم 4 (Problem #4):",
    "- قد تصبح الوثيقة كبيرة جداً.",
    "- على سبيل المثال:",
    "  ملف company.txt يحتوي على 1000 صفحة (1000 pages).",
    "- لا نريد البحث في الوثيقة بأكملها في كل مرة.",
    "- لذلك نقوم بتقسيمها إلى أجزاء أصغر.",
    "- هذا ما يُسمى بـ:",
    "  التقطيع (Chunking)."
]
};
window.TOC_AR["L8-S015"] = window.TOC_AR["L8"]["L8-S015"];

window.TOC_AR["L8"]["L8-S016"] = {
  "ar": [
    "التقطيع (Chunking):",
    "- التقطيع يعني تقسيم وثيقة كبيرة إلى أجزاء أصغر ذات معنى تُسمى مقاطع (chunks).",
    "- الوثيقة الأصلية (Original document):",
    "  Company Information",
    "  -------------------",
    "  Return Policy: Customers can return within 7 days.",
    "  Shipping: Shipping inside Sana'a is free.",
    "  Payment: Cash and bank transfer are accepted.",
    "- بعد التقطيع (After chunking):",
    "  * المقطع 1 (Chunk 1): سياسة الإرجاع: يمكن للعملاء الإرجاع خلال 7 أيام.",
    "  * المقطع 2 (Chunk 2): الشحن: الشحن داخل صنعاء مجاني.",
    "  * المقطع 3 (Chunk 3): الدفع: الدفع نقداً والتحويل البنكي مقبولة.",
    "- مثال بسيط بلغة C#:",
    "  var chunks = text.Split(\"\\n\\n\");"
]
};
window.TOC_AR["L8-S016"] = window.TOC_AR["L8"]["L8-S016"];

window.TOC_AR["L8"]["L8-S017"] = {
  "ar": [
    "المشكلة رقم 5 (Problem #5):",
    "- يقول العميل:",
    "  \"هل يمكنني إرجاع هاتفي بعد خمسة أيام؟\" (Can I return my phone after five days?)",
    "- الكلمات المطابقة حرفياً قد لا تكون موجودة في الوثيقة.",
    "- فالوثيقة تنص على: \"يمكن للعملاء إرجاع المنتجات خلال 7 أيام.\"",
    "- الجملتان مرتبطتان دلالياً (semantically related).",
    "- البحث النصي البسيط بالسلاسل الحرفية قد لا يكون كافياً.",
    "- نحتاج إلى البحث الدلالي (semantic search)."
]
};
window.TOC_AR["L8-S017"] = window.TOC_AR["L8"]["L8-S017"];

window.TOC_AR["L8"]["L8-S018"] = {
  "ar": [
    "التضمينات (Embeddings):",
    "- تقوم التضمينات بتحويل النص إلى متجهات رقمية (numerical vectors) تمثل المعنى.",
    "\"return phone after five days\"",
    "↓",
    "نموذج التضمين (Embedding Model)",
    "↓",
    "[0.21, -0.43, 0.87, ...]",
    "- المعاني المتشابهة تنتج متجهات متشابهة:",
    "  \"return phone after five days\"",
    "  ↕",
    "  \"customers can return within 7 days\"",
    "  ↓",
    "  متجهات متشابهة (Similar Vectors)",
    "- الفكرة الأساسية (Key idea):",
    "  تتيح التضمينات لأجهزة الكمبيوتر مقارنة معنى النص، وليس فقط الكلمات الحرفية الدقيقة."
]
};
window.TOC_AR["L8-S018"] = window.TOC_AR["L8"]["L8-S018"];

window.TOC_AR["L8"]["L8-S019"] = {
  "ar": [
    "قاعدة البيانات الشعاعية (A Vector Database):",
    "- تخزن التضمينات وتسمح لنا بالبحث عن المحتوى المتشابه دلالياً.",
    "- المقطع (Chunk) + التضمين (Embedding) -> قاعدة البيانات الشعاعية.",
    "- مثال: PostgreSQL + pgvector",
    "- مسار البحث:",
    "  السؤال -> التضمين -> البحث الشعاعي -> المقاطع الأكثر تشابهاً.",
    "- الفكرة الأساسية: تخزين المتجهات واسترجاع المعلومات بناءً على المعنى.",
    "- جدول تخزين المقاطع والمتجهات:",
    "  * المعرف 1 | Customers can return... | المتجه: [0.20, 0.41, 0.80, 0.15]",
    "  * المعرف 2 | Shipping inside Sana'a... | المتجه: [0.72, 0.10, 0.20, 0.65]",
    "  * المعرف 3 | Cash and bank transfer... | المتجه: [0.05, 0.80, 0.30, 0.12]"
]
};
window.TOC_AR["L8-S019"] = window.TOC_AR["L8"]["L8-S019"];

window.TOC_AR["L8"]["L8-S020"] = {
  "ar": [
    "البحث في قاعدة البيانات الشعاعية (Searching the Vector Database):",
    "- يسأل العميل: \"هل يمكنني إرجاع هاتفي بعد خمسة أيام؟\"",
    "- نقوم بتحويل السؤال إلى متجه: السؤال -> التضمين -> البحث الشعاعي.",
    "- تعثر قاعدة البيانات على:",
    "  * سياسة الإرجاع (Return Policy): 0.95 (تشابه عالي)",
    "  * سياسة الشحن (Shipping Policy): 0.20",
    "  * سياسة الدفع (Payment Policy): 0.10",
    "- لذلك، نسترجع: \"يمكن للعملاء إرجاع المنتجات خلال 7 أيام.\"",
    "- متجه السؤال: [0.18, 0.43, 0.78, 0.17]",
    "- استعلام SQL عبر pgvector:",
    "  SELECT Id, Content, Embedding <=> '[0.18,0.43,0.78,0.17]' AS distance",
    "  FROM Documents",
    "  ORDER BY Embedding <=> '[0.18,0.43,0.78,0.17]'",
    "  LIMIT 3;"
]
};
window.TOC_AR["L8-S020"] = window.TOC_AR["L8"]["L8-S020"];

window.TOC_AR["L8"]["L8-S021"] = {
  "ar": [
    "المشكلة رقم 6 (Problem #6):",
    "- لدينا الآن المعلومات الصحيحة المسترجعة.",
    "- ولكن كيف نحولها إلى إجابة طبيعية؟",
    "- يمكننا أن نكتب:",
    "  return \"Yes, you can return...\";",
    "- لكننا نريد أن يفهم النظام العديد من الأسئلة المختلفة بصيغ متنوعة.",
    "- نحتاج إلى:",
    "  نموذج لغوي كبير (An LLM)."
]
};
window.TOC_AR["L8-S021"] = window.TOC_AR["L8"]["L8-S021"];

window.TOC_AR["L8"]["L8-S022"] = {
  "ar": [
    "ما هو النموذج اللغوي الكبير؟ (What Is an LLM?):",
    "- LLM = Large Language Model (نموذج لغوي كبير).",
    "- يمكنه:",
    "  * فهم اللغة الطبيعية (Understand natural language).",
    "  * فهم السياق (Understand context).",
    "  * توليد استجابات باللغة الطبيعية (Generate natural-language responses).",
    "- يمكن لتطبيقنا التواصل معه عبر واجهة برمجة تطبيقات (API):",
    "  C# -> LLM API -> LLM -> Answer (الإجابة)",
    "- الفكرة الأساسية (Key idea):",
    "  النموذج اللغوي يفهم ويولد لغة طبيعية بناءً على السياق الذي نزوده به."
]
};
window.TOC_AR["L8-S022"] = window.TOC_AR["L8"]["L8-S022"];

window.TOC_AR["L8"]["L8-S023"] = {
  "ar": [
    "تزويد النموذج اللغوي بالسياق المسترجع (Give the LLM the Retrieved Context):",
    "- لا ينبغي أن نسأل النموذج ببساطة: \"هل يمكنني إرجاع هاتفي؟\"",
    "- بل نُعطي النموذج اللغوي معلومات الشركة المسترجعة:",
    "  * النظام (SYSTEM):",
    "    أنت مساعد خدمة عملاء (You are a customer service assistant).",
    "    استخدم معلومات الشركة المزودة فقط (Use the provided company information only).",
    "    لا تخترع معلومات من عندك (Do not invent information).",
    "  * السياق (CONTEXT):",
    "    يمكن للعملاء إرجاع المنتجات خلال 7 أيام (Customers can return products within 7 days).",
    "  * المستخدم (USER):",
    "    هل يمكنني إرجاع هاتفي بعد خمسة أيام؟ (Can I return my phone after five days?)"
]
};
window.TOC_AR["L8-S023"] = window.TOC_AR["L8"]["L8-S023"];

window.TOC_AR["L8"]["L8-S024"] = {
  "ar": [
    "النموذج اللغوي يولد الإجابة (LLM Generates the Answer):",
    "- يستطيع النموذج اللغوي الآن توليد:",
    "  \"نعم. يمكنك إرجاع هاتفك بعد خمسة أيام لأن سياسة الإرجاع لدينا تسمح بالإرجاع خلال سبعة أيام.\"",
    "  (\"Yes. You can return your phone after five days because our return policy allows returns within seven days.\")",
    "- يصبح مسار التدفق لدينا:",
    "  السؤال (Question)",
    "  ↓",
    "  الاسترجاع المعزز (RAG)",
    "  ↓",
    "  المعلومات ذات الصلة (Relevant Information)",
    "  ↓",
    "  النموذج اللغوي (LLM)",
    "  ↓",
    "  الإجابة (Answer)"
]
};
window.TOC_AR["L8-S024"] = window.TOC_AR["L8"]["L8-S024"];

window.TOC_AR["L8"]["L8-S025"] = {
  "ar": [
    "كود C# الكامل لمنظومة RAG خطوة بخطوة (RAG Pipeline in C#):",
    "var question = \"Can I return my phone after five days?\";",
    "",
    "// 1. السؤال -> متجه (Question -> Vector)",
    "var queryVector =",
    "    await embeddingService.CreateEmbedding(question);",
    "",
    "// 2. المتجه -> قاعدة البيانات الشعاعية (Vector -> Vector Database)",
    "var chunks =",
    "    await vectorRepository.SearchAsync(queryVector, 3);",
    "",
    "// 3. المقاطع المسترجعة -> سياق (Retrieved Chunks -> Context)",
    "var context =",
    "    string.Join(\"\\n\", chunks.Select(x => x.Content));",
    "",
    "// 4. السياق + السؤال -> موجه (Context + Question -> Prompt)",
    "var prompt = $\"\"\"",
    "Use the following company information to answer the customer.",
    "",
    "Context:",
    "{context}",
    "",
    "Customer Question:",
    "{question}",
    "",
    "Answer the customer clearly.",
    "\"\"\";",
    "",
    "// 5. الموجه -> النموذج اللغوي (Prompt -> LLM)",
    "var answer =",
    "    await llmService.GenerateAsync(prompt);"
]
};
window.TOC_AR["L8-S025"] = window.TOC_AR["L8"]["L8-S025"];

window.TOC_AR["L8"]["L8-S026"] = {
  "ar": [
    "المشكلة رقم 7: المعمارية الموحدة (Problem #7):",
    "- دعونا نلقي نظرة على تطبيقنا الحالي:",
    "- كل شيء موجود داخل تطبيق واحد (Everything is inside one application).",
    "- هذه هي معماريتنا الموحدة (This is our Monolith).",
    "- مشكلة المعمارية الموحدة (The Monolith Problem):",
    "  * في البداية: 10 عملاء — لا توجد مشكلة.",
    "  * لاحقاً: 100,000 عميل.",
    "- يصبح النظام أكثر صعوبة في:",
    "  * النشر (Deploy).",
    "  * التوسع (Scale).",
    "  * الصيانة (Maintain).",
    "  * الاختبار (Test).",
    "  * التعديل (Change).",
    "- مكونات تطبيق ASP.NET Core الموحد:",
    "  Webhook | منطق المنتجات (Product Logic) | منطق العملاء (Customer Logic) | منطق الطلبات (Order Logic) | RAG | LLM | الإشعارات (Notifications)."
]
};
window.TOC_AR["L8-S026"] = window.TOC_AR["L8"]["L8-S026"];

window.TOC_AR["L8"]["L8-S027"] = {
  "ar": [
    "الأجزاء المختلفة لها احتياجات مختلفة (Different Parts Have Different Needs):",
    "- قد تكون طلبات الذكاء الاصطناعي (AI requests) مكلفة للموارد.",
    "- قد تستقبل خدمة المنتجات (Product Service) آلاف الطلبات.",
    "- تحتوي خدمة الطلبات (Order Service) على معاملات حرجة وحساسة.",
    "- قد تعالج خدمة الإشعارات (Notification Service) المهام بشكل غير متزامن.",
    "- لكل جزء متطلبات واحتياجات تشغيلية متباينة.",
    "- لذلك (Therefore):",
    "  ربما لا ينبغي معالجة جميع هذه المسؤوليات بواسطة تطبيق واحد."
]
};
window.TOC_AR["L8-S027"] = window.TOC_AR["L8"]["L8-S027"];

window.TOC_AR["L8"]["L8-S028"] = {
  "ar": [
    "الخدمات المصغرة (Microservices):",
    "- تقوم معمارية الخدمات المصغرة بتقسيم النظام إلى خدمات صغيرة ومستقلة، كل منها مسؤولة عن إمكانية تجارية محددة (specific business capability).",
    "- أمثلة على توزيع الخدمات:",
    "  * خدمة العملاء (Customer Service) ← إدارة العملاء",
    "  * خدمة المنتجات (Product Service) ← المنتجات والمخزون",
    "  * خدمة الطلبات (Order Service) ← معالجة الطلبات",
    "  * خدمة الذكاء الاصطناعي (AI/RAG Service) ← الذكاء الاصطناعي واسترجاع المعرفة",
    "  * خدمة الإشعارات (Notification Service) ← إشعارات SMS / WhatsApp",
    "  * خدمة واتساب (WhatsApp Service) ← التواصل المباشر عبر واتساب"
]
};
window.TOC_AR["L8-S028"] = window.TOC_AR["L8"]["L8-S028"];

window.TOC_AR["L8"]["L8-S029"] = {
  "ar": [
    "مشكلة جديدة (New Problem):",
    "- ولكن لدينا الآن مشكلة جديدة:",
    "- كيف تتواصل خدمة واتساب (WhatsApp Service) مع خدمة الذكاء الاصطناعي (AI Service) وخدمة المنتجات (Product Service)؟",
    "- نحتاج إلى الاتصال بين الخدمات (Service-to-Service Communication)."
]
};
window.TOC_AR["L8-S029"] = window.TOC_AR["L8"]["L8-S029"];

window.TOC_AR["L8"]["L8-S030"] = {
  "ar": [
    "الاتصال المتزامن (Synchronous Communication):",
    "- أحد الحلول هو استخدام بروتوكول HTTP.",
    "خدمة واتساب (WhatsApp Service)",
    "| طلب HTTP",
    "↓",
    "خدمة المنتجات (Product Service)",
    "| استجابة (Response)",
    "↓",
    "خدمة واتساب (WhatsApp Service)",
    "- مثال بسيط بلغة C#:",
    "  var response = await httpClient.GetAsync(\"/api/products/A55\");",
    "- الطرف المستدعي ينتظر وصول الاستجابة (The caller waits for the response)."
]
};
window.TOC_AR["L8-S030"] = window.TOC_AR["L8"]["L8-S030"];

window.TOC_AR["L8"]["L8-S031"] = {
  "ar": [
    "متى يكون HTTP مفيداً؟ (When Is HTTP Useful?):",
    "- استخدم بروتوكول HTTP المتزامن عندما:",
    "  نحتاج إلى الإجابة على الفور (We need the answer immediately).",
    "- مثال:",
    "  \"ما هو السعر الحالي؟\" (\"What is the current price?\")",
    "  خدمة واتساب (WhatsApp Service)",
    "  ↓",
    "  خدمة المنتجات (Product Service)",
    "  ↓",
    "  150,000 ريال يمني (150,000 YER)",
    "- تدفق محادثة واتساب يحتاج إلى تلك الإجابة الآن ليكمل الرد."
]
};
window.TOC_AR["L8-S031"] = window.TOC_AR["L8"]["L8-S031"];

window.TOC_AR["L8"]["L8-S032"] = {
  "ar": [
    "مشكلة جديدة (New Problem):",
    "- تخيل الآن أن العميل أرسل:",
    "  \"أريد شراء سامسونج A55.\" (\"I want to buy Samsung A55.\")",
    "- يجب أن تحدث عدة عمليات بالتتابع:",
    "  * إنشاء الطلب (Create Order)",
    "  * تحديث المخزون (Update Inventory)",
    "  * إرسال الإشعار (Send Notification)",
    "  * تسجيل التحليلات (Record Analytics)",
    "- هل نريد من خدمة واتساب استدعاء كل هذه الخدمات بالتتالي؟",
    "  WhatsApp -> Order -> Inventory -> Notification -> Analytics",
    "- هذا يخلق ارتباطاً وثيقاً معيباً (This creates tight coupling)."
]
};
window.TOC_AR["L8-S032"] = window.TOC_AR["L8"]["L8-S032"];

window.TOC_AR["L8"]["L8-S033"] = {
  "ar": [
    "الاتصال غير المتزامن (Asynchronous Communication):",
    "- بدلاً من ذلك، يمكننا نشر حدث (publish an event).",
    "خدمة واتساب -> حدث تم إنشاء الطلب (OrderCreated) -> وسيط الرسائل (Message Broker).",
    "- يمكن للخدمات الأخرى استهلاك هذا الحدث بشكل مستقل:",
    "  OrderCreated",
    "  ↓",
    "  وسيط الرسائل (Message Broker)",
    "  /       |       \\",
    "  ↓       ↓       ↓",
    "  المخزون (Inventory) | الإشعارات (Notification) | التحليلات (Analytics)"
]
};
window.TOC_AR["L8-S033"] = window.TOC_AR["L8"]["L8-S033"];

window.TOC_AR["L8"]["L8-S034"] = {
  "ar": [
    "ما هو وسيط الرسائل؟ (What Is a Message Broker?):",
    "- وسيط الرسائل هو نظام يستقبل الرسائل ويسلمها إلى المستهلكين (consumers).",
    "- أمثلة عالمية:",
    "  * رابيت إم كيو (RabbitMQ)",
    "  * كافكا (Kafka)",
    "  * ناقل خدمة أزور (Azure Service Bus)",
    "- المفهوم الأساسي (Conceptually):",
    "  المنتِج (Producer) -> وسيط الرسائل (Message Broker) -> المستهلِك (Consumer)."
]
};
window.TOC_AR["L8-S034"] = window.TOC_AR["L8"]["L8-S034"];

window.TOC_AR["L8"]["L8-S035"] = {
  "ar": [
    "كود C# لنقل الأموال ونشر الحدث (Publish Event Code):",
    "public async Task TransferMoney(TransferRequest request)",
    "{",
    "    // تحويل الأموال (Transfer money)",
    "    await bankService.Transfer(request);",
    "",
    "    // نشر الحدث (Publish event)",
    "    var message = new TransferCompleted",
    "    {",
    "        TransactionId = request.TransactionId,",
    "        Phone = request.Phone,",
    "        Amount = request.Amount",
    "    };",
    "",
    "    await messageBroker.PublishAsync(message);",
    "}",
    "- مخطط توزيع حدث TransferCompleted:",
    "  TransferCompleted",
    "  │",
    "  ├→ خدمة الإشعارات (Notification Service) → واتساب (WhatsApp)",
    "  │",
    "  ├→ خدمة التدقيق (Audit Service) → حفظ السجل (Save Log)",
    "  │",
    "  └─→ خدمة التحليلات (Analytics Service) → الإحصائيات (Statistics)"
]
};
window.TOC_AR["L8-S035"] = window.TOC_AR["L8"]["L8-S035"];

window.TOC_AR["L8"]["L8-S036"] = {
  "ar": [
    "المستهلِك (Consumer):",
    "- تستمع خدمة الإشعارات للحدث (Notification Service listens):",
    "public async Task Handle(OrderCreatedEvent message)",
    "{",
    "    await SendWhatsAppMessage(message.CustomerId,",
    "        \"Your order was created.\");",
    "}",
    "- الآن لا تحتاج خدمة الطلبات إلى معرفة أي تفاصيل داخلية عن كيفية تنفيذ خدمة الإشعارات."
]
};
window.TOC_AR["L8-S036"] = window.TOC_AR["L8"]["L8-S036"];

window.TOC_AR["L8"]["L8-S037"] = {
  "ar": [
    "مشكلة جديدة (New Problem):",
    "- لدينا الآن:",
    "  خدمة واتساب -> وسيط الرسائل -> خدمة الذكاء الاصطناعي -> خدمة المنتجات.",
    "- لكن الأنظمة الموزعة تقدم مشاكل وتحديات جديدة.",
    "- ماذا لو كانت:",
    "  خدمة الذكاء الاصطناعي (AI Service)",
    "  ↓",
    "  معطلة ومتوقفة عن العمل (DOWN)؟"
]
};
window.TOC_AR["L8-S037"] = window.TOC_AR["L8"]["L8-S037"];

window.TOC_AR["L8"]["L8-S038"] = {
  "ar": [
    "الفشل في الأنظمة الموزعة (Failure in Distributed Systems):",
    "- استدعاءات الشبكة قد تفشل (Network calls can fail).",
    "- الخدمات قد تفشل وتتوقف (Services can fail).",
    "- قواعد البيانات قد تفشل (Databases can fail).",
    "- الطلبات قد تنتهي مهلتها الزمنية (Requests can timeout).",
    "- الرسائل قد تتأخر (Messages can be delayed).",
    "- لذلك (Therefore):",
    "  تتطلب الخدمات المصغرة استراتيجيات للمرونة ومقاومة الأعطال (resilience strategies)."
]
};
window.TOC_AR["L8-S038"] = window.TOC_AR["L8"]["L8-S038"];

window.TOC_AR["L8"]["L8-S039"] = {
  "ar": [
    "نمط إعادة المحاولة (Retry):",
    "- إذا حدث فشل مؤقت (temporary failure):",
    "  * المحاولة 1 ← فشلت (Attempt 1 → Failed)",
    "  * المحاولة 2 ← فشلت (Attempt 2 → Failed)",
    "  * المحاولة 3 ← نجحت (Attempt 3 → Success)",
    "- المفهوم البسيط بلغة C#:",
    "for (int i = 0; i < 3; i++)",
    "{",
    "    try",
    "    {",
    "        return await CallService();",
    "    }",
    "    catch",
    "    {",
    "        await Task.Delay(1000);",
    "    }",
    "}",
    "- في الأنظمة الحقيقية، نستخدم مكتبات وسياسات مرونة مناسبة بدلاً من كتابة حلقات إعادة محاولة ساذجة في كل مكان."
]
};
window.TOC_AR["L8-S039"] = window.TOC_AR["L8"]["L8-S039"];

window.TOC_AR["L8"]["L8-S040"] = {
  "ar": [
    "نمط قاطع الدائرة (Circuit Breaker):",
    "- يمنع قاطع الدائرة الاستدعاءات المتكررة لخدمة متوقفة وفاشلة ويساعد في منع الانهيارات المتتالية (cascading failures).",
    "- ماذا لو كانت الخدمة متوقفة باستمرار؟",
    "- بدلاً من تكرار الاستدعاء الفاشل:",
    "  Bank Service → Notification Service (فشل)",
    "  Bank Service → Notification Service (فشل)",
    "  Bank Service → Notification Service (فشل)",
    "- نتوقف عن استدعائها مؤقتاً.",
    "- الخدمة ب متوقفة (Service B DOWN) ← تصبح الدائرة مفتوحة (Circuit OPEN).",
    "- هذا يمنع الاستدعاءات المتكررة من جعل الموقف أسوأ."
]
};
window.TOC_AR["L8-S040"] = window.TOC_AR["L8"]["L8-S040"];

window.TOC_AR["L8"]["L8-S041"] = {
  "ar": [
    "مشكلة أخرى: تكرار الرسائل (Another Problem: Duplicate Messages):",
    "- افترض أن ميتا أرسلت رسالة بالمعرف:",
    "  MessageId = 12345",
    "- استقبل نظامنا الرسالة مرتين نتيجة إعادة الإرسال الشبكي:",
    "  12345",
    "  12345",
    "- إذا قمنا بمعالجة الرسالتين معاً:",
    "  إنشاء طلب (Create Order)",
    "  إنشاء طلب (Create Order)",
    "- قد نقوم بإنشاء طلبين مكررين لنفس العملية بالخطأ."
]
};
window.TOC_AR["L8-S041"] = window.TOC_AR["L8"]["L8-S041"];

window.TOC_AR["L8"]["L8-S042"] = {
  "ar": [
    "حيادية التكرار (Idempotency):",
    "- تعني أن معالجة نفس الرسالة عدة مرات تنتج نفس النتيجة تماماً كما لو عولجت مرة واحدة.",
    "- مثال برمجي في C#:",
    "if (await repository.Exists(messageId))",
    "{",
    "    return; // تمت معالجتها بالفعل (Already processed)",
    "}",
    "await repository.Save(messageId);",
    "await ProcessMessage();",
    "- مسار التدفق (Flow):",
    "  الرسالة (Message)",
    "  ↓",
    "  هل تم معالجة معرف الرسالة من قبل؟",
    "  * نعم (YES) ← تجاهل الرسالة (Ignore)",
    "  * لا (NO)  ← حفظ المعرف -> معالجة الرسالة",
    "- الغرض: منع المعالجة المكررة والآثار الجانبية المزدوجة."
]
};
window.TOC_AR["L8-S042"] = window.TOC_AR["L8"]["L8-S042"];

window.TOC_AR["L8"]["L8-S043"] = {
  "ar": [
    "مشكلة أخرى: وقت معالجة خطاف الويب (Another Problem: Webhook Processing Time):",
    "- افترض أن خطاف الويب يقوم بالخطوات التالية متزامنة:",
    "  الاستقبال (Receive)",
    "  ↓",
    "  قاعدة البيانات (Database)",
    "  ↓",
    "  التضمين (Embedding)",
    "  ↓",
    "  البحث الشعاعي (Vector Search)",
    "  ↓",
    "  النموذج اللغوي (LLM)",
    "  ↓",
    "  إرسال واتساب (Send WhatsApp)",
    "  قد يستغرق هذا عدة ثوانٍ (This may take several seconds).",
    "- بدلاً من ذلك (Instead):",
    "  خطاف الويب (Webhook) -> التحقق (Validate) -> نشر الحدث (Publish Event) -> الرد بـ 200 OK.",
    "- ثم بعد ذلك (Then):",
    "  العامل في الخلفية (Background Worker) -> استرجاع AI/RAG -> النموذج اللغوي -> إرسال واتساب.",
    "- هذا أفضل بكثير للمعالجة غير المتزامنة (This is much better for asynchronous processing)."
]
};
window.TOC_AR["L8-S043"] = window.TOC_AR["L8"]["L8-S043"];

window.TOC_AR["L8"]["L8-S044"] = {
  "ar": [
    "العامل في الخلفية (Background Worker):",
    "- العامل في الخلفية هو عملية تعمل في الخلفية وتعالج باستمرار المهام أو الرسائل المصطفة في طابور دون انتظار طلب من المستخدم.",
    "- مثال بسيط في .NET:",
    "public class MessageWorker : BackgroundService",
    "{",
    "    protected override async Task ExecuteAsync(CancellationToken stoppingToken)",
    "    {",
    "        while (!stoppingToken.IsCancellationRequested)",
    "        {",
    "            var message =",
    "                await queue.ReceiveAsync();",
    "            await ProcessMessage(message);",
    "        }",
    "    }",
    "}",
    "- يقوم العامل بمعالجة الرسائل المصطفة في الطابور باستمرار."
]
};
window.TOC_AR["L8-S044"] = window.TOC_AR["L8"]["L8-S044"];

window.TOC_AR["L8"]["L8-S045"] = {
  "ar": [
    "لدينا الآن معمارية حقيقية (Now We Have a Real Architecture):",
    "- مسار التدفق الكامل للنظام الموزع:",
    "  العميل (Customer)",
    "  ↓",
    "  واتساب (WhatsApp)",
    "  ↓",
    "  ميتا (Meta)",
    "  ↓",
    "  خطاف الويب (Webhook)",
    "  ↓",
    "  خدمة واتساب (WhatsApp Service)",
    "  ↓",
    "  وسيط الرسائل (Message Broker)",
    "  ↓",
    "  خدمة الذكاء الاصطناعي و RAG (AI/RAG Service)",
    "  ↓",
    "  خدمة المنتجات (Product Service)",
    "  ↓",
    "  النموذج اللغوي (LLM)",
    "  ↓",
    "  خدمة واتساب (WhatsApp Service)",
    "  ↓",
    "  ميتا (Meta)",
    "  ↓",
    "  العميل (Customer)",
    "- لقد تطور الآن تطبيق واتساب البسيط الخاص بنا ليصبح نظاماً موزعاً متكاملاً (distributed system)."
]
};
window.TOC_AR["L8-S045"] = window.TOC_AR["L8"]["L8-S045"];

window.TOC_AR["L8"]["L8-S046"] = {
  "ar": [
    "قاعدة بيانات لكل خدمة (Database per Service):",
    "- توزيع قواعد البيانات في الخدمات المصغرة:",
    "  * خدمة العملاء (Customer Service) ← قاعدة بيانات العملاء (Customer DB)",
    "  * خدمة المنتجات (Product Service) ← قاعدة بيانات المنتجات (Product DB)",
    "  * خدمة الطلبات (Order Service) ← قاعدة بيانات الطلبات (Order DB)",
    "  * خدمة الذكاء الاصطناعي (AI Service) ← قاعدة البيانات الشعاعية (Vector DB)",
    "- كل خدمة تمتلك بياناتها الخاصة (Each service owns its data).",
    "- هذا مبدأ شائع لملكية البيانات في الخدمات المصغرة موصوف في إرشادات معمارية مايكروسوفت (Microsoft architecture guidance)."
]
};
window.TOC_AR["L8-S046"] = window.TOC_AR["L8"]["L8-S046"];

window.TOC_AR["L8"]["L8-S047"] = {
  "ar": [
    "مشكلة جديدة: فوضى عناوين الخدمات (New Problem):",
    "- لدينا الآن العديد من الخدمات:",
    "  * العملاء (Customer)",
    "  * المنتجات (Product)",
    "  * الطلبات (Order)",
    "  * الذكاء الاصطناعي (AI)",
    "  * واتساب (WhatsApp)",
    "  * الإشعارات (Notification)",
    "- إذا احتاج عميل خارجي الوصول إلى عدة خدمات، فهل يجب عليه استدعاء جميع الخدمات مباشرة؟",
    "  العميل (Client)",
    "  ├ خدمة العملاء (Customer)",
    "  ├ خدمة المنتجات (Product)",
    "  ├ خدمة الطلبات (Order)",
    "  └─ خدمة الذكاء الاصطناعي (AI)",
    "- هذا يمكن أن يصبح معقداً ومربكاً للغاية (This can become complicated)."
]
};
window.TOC_AR["L8-S047"] = window.TOC_AR["L8"]["L8-S047"];

window.TOC_AR["L8"]["L8-S048"] = {
  "ar": [
    "بوابة واجهة البرمجة (API Gateway):",
    "- بوابة واجهة البرمجة هي نقطة دخول وحيدة بين العملاء والخدمات المصغرة.",
    "العميل (Client) -> بوابة واجهة البرمجة (API Gateway) -> العملاء | المنتجات | الطلبات.",
    "- المسؤوليات الرئيسية (Main Responsibilities):",
    "  * المصادقة (Authentication): التحقق من هوية المستخدمين.",
    "  * التوجيه (Routing): توجيه الطلبات إلى الخدمة الصحيحة.",
    "  * تحديد معدل الطلبات (Rate Limiting): التحكم في حركة مرور الطلبات.",
    "  * التسجيل (Logging): تسجيل الطلبات والاستجابات.",
    "- الفكرة الأساسية (Key idea):",
    "  نقطة دخول واحدة لخدمات مصغرة متعددة (One entry point for multiple microservices)."
]
};
window.TOC_AR["L8-S048"] = window.TOC_AR["L8"]["L8-S048"];

window.TOC_AR["L8"]["L8-S049"] = {
  "ar": [
    "القصة الكاملة (The Complete Story):",
    "- بدأنا بمشكلة بسيطة: \"كيف أجيب عملاء واتساب تلقائياً؟\"",
    "- ثم واجهنا المشاكل واحدة تلو الأخرى وحللناها هندسياً:",
    "  * المشكلة 1: كيف تخطرنا ميتا؟ ← خطاف الويب (Webhook).",
    "  * المشكلة 2: من أين نحصل على معلومات المنتجات؟ ← خدمة المنتجات (Product Service).",
    "  * المشكلة 3: من أين نحصل على سياسات الشركة؟ ← التوليد المعزز بالاسترجاع (RAG).",
    "  * المشكلة 4: كيف نفهم اللغة الطبيعية؟ ← النموذج اللغوي الكبير (LLM).",
    "  * المشكلة 5: أصبح تطبيقنا كبيراً جداً ← الخدمات المصغرة (Microservices).",
    "  * المشكلة 6: كيف تتواصل الخدمات؟ ← بروتوكول HTTP / الرسائل (Messaging).",
    "  * المشكلة 7: كيف نتواصل بشكل غير متزامن؟ ← وسيط الرسائل (Message Broker).",
    "  * المشكلة 8: ماذا يحدث عند فشل إحدى الخدمات؟ ← إعادة المحاولة / قاطع الدائرة (Retry / Circuit Breaker).",
    "  * المشكلة 9: ماذا يحدث إذا وصلت الرسالة مرتين؟ ← حيادية التكرار (Idempotency).",
    "  * المشكلة 10: كيف نعالج العمليات الطويلة؟ ← العامل في الخلفية (Background Worker).",
    "  * المشكلة 11: كيف تمتلك الخدمات بياناتها؟ ← قاعدة بيانات لكل خدمة (Database per Service).",
    "  * المشكلة 12: كيف نراقب كل شيء؟ ← التسجيل / المقاييس / التتبع (Logging / Metrics / Tracing)."
]
};
window.TOC_AR["L8-S049"] = window.TOC_AR["L8"]["L8-S049"];

window.TOC_AR["L8"]["L8-S050"] = {
  "ar": [
    "ماذا بنينا فعلياً؟ (What Did We Actually Build?):",
    "- نحن لم نبنِ:",
    "  تطبيق واتساب نفسه (WhatsApp itself).",
    "- نحن استخدمنا (We used):",
    "  * واجهة برمجة Meta WhatsApp API",
    "  * النموذج اللغوي الكبير (LLM)",
    "  * نموذج التضمين (Embedding Model)",
    "  * قاعدة بيانات PostgreSQL",
    "  * إضافة pgvector",
    "  * وسيط الرسائل (Message Broker)",
    "- نحن بنينا (We built):",
    "  * خدمات بلغة C# (C# services).",
    "  * خطاف الويب (Webhook).",
    "  * منطق الأعمال (Business logic).",
    "  * تنسيق منظومة RAG (RAG orchestration).",
    "  * الاتصال بين الخدمات (Service communication).",
    "  * عمال الخلفية (Background workers).",
    "  * التكامل بين جميع المكونات (Integration between all components)."
]
};
window.TOC_AR["L8-S050"] = window.TOC_AR["L8"]["L8-S050"];

