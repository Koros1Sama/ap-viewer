/* ═══════════════════════════════════════════════════════════
   interactive.js — محرك ونماذج الشرح التفاعلي المعماري بالـ SVG
   مقرر البرمجة المتقدمة (AP) — د. بيداء لعلع
   1. النموذج الكانوني: جوهر أنماط التصميم وعائلاتها الثلاث (The Visual Triad)
   2. أطلس ومحاكي مخططات UML لجميع أنماط المنهج وعلاقاتها المشروحة (Curriculum UML Studio)
   معيار 100% SVG متجهي عالي الدقة · صفر إيموجيات (Zero Emojis Standard)
   ═══════════════════════════════════════════════════════════ */

(function () {
  "use strict";

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
    module_title: "الوحدات 2 و 3 و 4: أنماط التصميم المعمارية (GoF Design Patterns)",
    ref: "L2-S009",
    title_ar: "جوهر أنماط التصميم وعائلاتها الثلاث الكبرى (The Visual Triad)",
    title_en: "The Visual Triad: Creational · Structural · Behavioral Patterns",
    desc_ar:
      "أنماط التصميم (Design Patterns) هي حلول معمارية مستوحاة من العالم الفيزيائي لحل معضلات برمجية شائعة. هذا المحاكي البصري يوضح لك بالرسم المتجهي الفيزيائي كيف يشرح الشكل المفهوم المعماري فوراً: كيف تُخلق الكائنات بالذاكرة (الإنشائية)، كيف تُوفّق الواجهات (الهيكلية)، وكيف تتخاطب الكائنات وتوزع الأحداث (السلوكية).",
    badge: "النموذج البصري الكانوني · Master Showcase",
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
        { id: "behavioral", label: "1. الأنماط السلوكية: محاكي رادار البث والمراقب (Observer Radar)" },
        { id: "structural", label: "2. الأنماط الهيكلية: محاكي المحوّل والمقبس (Adapter Plug & Socket)" },
        { id: "creational", label: "3. الأنماط الإنشائية: محاكي النواة المفردة بالذاكرة (Singleton Forge)" },
        { id: "matrix", label: "4. مصفوفة المقارنة المعمارية وفخاخ الامتحان (Synthesis Matrix)" },
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
      label: "علاقات UML السبعة (L3-S010)",
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
    module_title: "الوحدات 2 و 3 و 4: لغة النمذجة الموحدة ومخططات الفئات (UML Diagrams)",
    ref: "L3-S010",
    title_ar: "أطلس مخططات UML المعمارية لأنماط المقرر وعلاقاتها المشروحة",
    title_en: "Curriculum UML Class Diagrams & OOP Architecture Atlas",
    desc_ar:
      "استوديو تفاعلي شامل يجمع كافة مخططات فئات UML المعتمدة في سلايدات د. بيداء لعلع لأنماط التصميم والعلاقات الأكثر شيوعاً (The Most Common UML Relationships)، مع شرح مرئي مفصل لكل سهم وعلاقة (Inheritance, Implementation, Aggregation, Composition, Dependency)، ودلالة علامات الرؤية (+ للعام، - للخاص، # للمحمي)، والتسطير للدوال والحقول الساكنة (Static)، مع المقارنة المباشرة بالسلايد الرسمي وكود C#.",
    badge: "مخططات المنهج المعتمدة · Annotated UML Studio",
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

  /* ───────────────────────────────────────────────────────────
     تصدير مصفوفة النماذج التفاعلية المعمارية (window.TOC_INTERACTIVE)
     ─────────────────────────────────────────────────────────── */
  window.TOC_INTERACTIVE = [GOF_TRIAD_MODEL, CURRICULUM_UML_MODEL];
})();
