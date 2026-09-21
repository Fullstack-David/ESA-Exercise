/* =========================================================
   ESA-TRÄNAREN — Arbete i HSP-anläggningar
   Kursen är upplagd som en DRIFTORDER: numrerade åtgärder
   som genomförs i ordning. Varje åtgärd avslutas med en
   kopplingsbekräftelse (kunskapskontroll) innan nästa
   åtgärd får påbörjas — precis som i verkligheten.
   ========================================================= */

const T = {
  paper: "#F4EFDF",
  paperDark: "#EAE3CC",
  ink: "#1B1810",
  inkSoft: "#4A4536",
  line: "#C6BB9A",
  warn: "#F2C200",
  warnDark: "#8A6D00",
  red: "#BE3020",
  green: "#1E6B45",
  white: "#FDFBF4",
};

const MODULES = [
  {
    id: "grund",
    title: "Varför ESA finns",
    bits: [
      {
        h: "80 % är handhavandefel",
        p: "Av branschens elolycksfall beror 80 % på handhavandefel — inte på trasig utrustning. Det är därför anvisningarna finns: de styr hur människor arbetar, inte bara vad tekniken ska klara.",
        note: "Innan varje arbete: Rätt kunskap (ESA)? Rätt dokumentation? Rätt verktyg och instrument? Rätt skyddsutrustning?",
      },
      {
        h: "Lagpyramiden",
        p: "Överst står Elsäkerhetslagen (2017:218), under den Elsäkerhetsförordningen. Elsäkerhetsverket utfärdar föreskrifter (ELSÄK-FS 2008:3, som pekar på standarden SS-EN 50110-1) om hur arbete ska utföras, hur tillsyn ska utövas och hur en elanläggning ska skötas.",
        note: "ESA är branschens exempel på sådana anvisningar — ett planeringshjälpmedel som talar om vilka roller som finns och vem som gör vad.",
      },
      {
        h: "Tre ESA-publikationer",
        p: "ESA Grund gäller alla, ESA Entreprenör gäller entreprenörsarbete i elanläggningar och ESA Industri gäller industrianläggningar. Arbetsmiljölagen säger att arbetsgivaren SKALL vidta alla åtgärder så att arbetstagare inte utsätts för ohälsa eller olycksfall — inklusive betryggande skydd mot elektrisk ström.",
        note: "Innehavaren SKALL fastställa anvisningar. Arbetsgivaren SKALL utfärda egna anvisningar när Svensk Standard inte följs, inte kan tillämpas eller måste kompletteras.",
      },
    ],
    quiz: [
      {
        q: "Hur stor andel av branschens elolycksfall beror på handhavandefel?",
        opts: ["20 %", "50 %", "80 %"],
        correct: 2,
        why: "80 % — därför är arbetssätt och rutiner (ESA) viktigare än något annat skydd.",
      },
      {
        q: "Vem utfärdar föreskrifterna som beskriver hur arbete på en elanläggning ska utföras?",
        opts: ["Elsäkerhetsverket", "Energiföretagen (EBR)", "Arbetsmiljöverket"],
        correct: 0,
        why: "Elsäkerhetsverket utfärdar föreskrifter om arbete, tillsyn och skötsel. ESA är branschens sätt att uppfylla dem.",
      },
    ],
  },
  {
    id: "roller",
    title: "Rollerna i ESA",
    bits: [
      {
        h: "Innehavare & Eldriftledare",
        p: "Innehavaren råder över anläggningen och ska se till att den är säker för personer, husdjur och egendom, samt övervaka och kontrollera den systematiskt. Innehavaren utser ELDRIFTLEDAREN — som ansvarar för att anläggningen är säker vid kopplingar, utfärdar driftinstruktioner, utser kopplingsledare och ger direktiv för driftorder/kopplingssedel.",
        note: "Kom ihåg kedjan: Innehavare → (delegering) → Eldriftledare → (delegering) → Kopplingsledare.",
      },
      {
        h: "Elsäkerhetsledare",
        p: "Utses av ARBETSGIVAREN. Skall med den kompetens och befogenhet som krävs leda elsäkerhetsarbetet på plats. Kan vara arbetsgivaren själv, annan erfaren person i företaget eller en anlitad entreprenör.",
        note: "Elsäkerhetsledaren skickar arbetsbegäran till kopplingsledaren och tar emot arbetsbevis — det är länken mellan arbetslaget och driften.",
      },
      {
        h: "Kopplingsledare & Kopplingsbiträde",
        p: "Kopplingsledaren planlägger, utför och svarar för kopplingar inom det område eldriftledaren angett: upprättar kopplingssedel/driftorder (som ska kontrolleras av annan kompetent person), inhämtar kopplingsbekräftelse, lämnar arbetsbevis och tar emot driftbevis. Kopplingsbiträdet utför kopplingar på kopplingsledarens order och lämnar kopplingsbekräftelse tillbaka.",
        note: "Bevisen går mellan elsäkerhetsledare och kopplingsledare. Bekräftelsen går mellan kopplingsbiträde och kopplingsledare.",
      },
    ],
    quiz: [
      {
        q: "Vem utser elsäkerhetsledaren?",
        opts: ["Innehavaren", "Arbetsgivaren", "Eldriftledaren"],
        correct: 1,
        why: "Arbetsgivaren utser elsäkerhetsledaren. Innehavaren utser eldriftledaren, som i sin tur utser kopplingsledare.",
      },
      {
        q: "Vem utfärdar kopplingssedeln?",
        opts: ["Kopplingsledaren", "Elsäkerhetsledaren", "Kopplingsbiträdet"],
        correct: 0,
        why: "Kopplingsledaren utfärdar den, annan kompetent person kontrollerar den, kopplingsbiträdet utför den.",
      },
      {
        q: "Vem lämnar kopplingsbekräftelse till kopplingsledaren?",
        opts: ["Eldriftledaren", "Innehavaren", "Kopplingsbiträdet"],
        correct: 2,
        why: "Kopplingsbiträdet bekräftar att beordrade åtgärder verkställts.",
      },
    ],
  },
  {
    id: "planering",
    title: "Planering & riskbedömning",
    bits: [
      {
        h: "Samråd före arbetet",
        p: "Riskbedömningen görs i samråd mellan elsäkerhetsledare och kopplingsledare. För betryggande säkerhet krävs noggrann planering — bland annat med hänsyn till språk och att flera olika aktörer kan vara på samma arbetsplats. Ibland behöver även en arbetsmiljöplan upprättas.",
        note: null,
      },
      {
        h: "Riskbedömningens fem steg",
        p: "1) Identifiera riskerna. 2) Identifiera vilka som kan utsättas för risk. 3) Uppskatta riskerna. 4) Undersök möjligheten att eliminera riskerna. 5) Gör en bedömning om arbetsmetod.",
        note: "Sista steget — val av arbetsmetod — är det som leder vidare till AUS, AMS eller ANS.",
      },
      {
        h: "Verktyg och utrustning",
        p: "Skall uppfylla gällande svenska standarder där sådana finns. Exempel: isolerande skor och handskar, ögon-/ansikts-/huvudskydd, ändamålsenlig klädsel, isolerade verktyg och manöverstänger, spänningsprovare samt hjälpmedel för markering som flagglina.",
        note: null,
      },
    ],
    quiz: [
      {
        q: "Vilka gör riskbedömningen i samråd?",
        opts: [
          "Innehavare och arbetsgivare",
          "Elsäkerhetsledare och kopplingsledare",
          "Kopplingsbiträde och arbetare",
        ],
        correct: 1,
        why: "Elsäkerhetsledaren (arbetslaget) och kopplingsledaren (driften) planerar tillsammans.",
      },
      {
        q: "Vad är riskbedömningens sista steg?",
        opts: ["Uppskatta riskerna", "Göra en bedömning om arbetsmetod", "Identifiera riskerna"],
        correct: 1,
        why: "Allt mynnar ut i valet av arbetsmetod: AUS, AMS eller ANS.",
      },
    ],
  },
  {
    id: "dokument",
    title: "Dokumenten i arbetsgången",
    bits: [
      {
        h: "Arbetsbegäran / Avbrottsbegäran",
        p: "Görs SKRIFTLIGEN till kopplingsledaren, i god tid före det planerade arbetet. Skall bl.a. innehålla: berörd anläggningsdel, arbetsplatsens avgränsningar, elsäkerhetsledarens namn och adress, arbetets omfattning med önskad tidpunkt och arbetstid, samt idrifttagningsplan om sådan behövs.",
        note: null,
      },
      {
        h: "Driftorder",
        p: "Skall alltid utföras när kopplingarna berör flera kopplingsledare och/eller elsäkerhetsledare. Delges berörd personal i god tid, genomförs alltid i den ordning som anges, och kontrolleras och signeras av en annan kompetent person. Innehåller numrerade åtgärder — normalt en åtgärd per punkt.",
        note: "Om en apparat kräver flera handgrepp för en manöver ska en LOKAL INSTRUKTION utfärdas.",
      },
      {
        h: "Kopplingsbekräftelse — muntlig eller skriftlig?",
        p: "En bekräftelse på att beordrade åtgärder verkställts eller att anläggningsdelar har angivna kopplingslägen. Den SKALL vara SKRIFTLIG när: frånskiljare blockerats, truck blockerats i frånskilt läge, säkringar avlägsnats och blockerats, arbetsjordning anbringats, eller slackar avlägsnats och fixerats. I övriga fall kan den vara muntlig.",
        note: "Skriftlighetslistan är ett klassiskt provmoment — lär dig de fem fallen.",
      },
      {
        h: "Arbetsbevis & Driftbevis",
        p: "ARBETSBEVIS: bekräftelse på att säkerhetsåtgärder vidtagits för arbete på angiven anläggningsdel. SKALL vara skriftligt och kvarstår tills driftbevis lämnats. DRIFTBEVIS: lämnas av den som innehar arbetsbeviset och bekräftar att anläggningsdelen för dennes del är klar för drift. Först när kopplingsledaren hämtat in SAMTLIGA driftbevis får tillkoppling ske.",
        note: "Arbetsbevis = 'ni får börja jobba'. Driftbevis = 'vi är klara, ni får spänningssätta'.",
      },
      {
        h: "Telefem",
        p: "Muntligt meddelande via telefon eller radio med samma giltighet som skriftligt. Skall vara nedskrivet och dikterat av avsändaren, och skrivas ned och repeteras av mottagaren. Kan även vara en repeterad och kvitterad punkt i driftorder/kopplingssedel.",
        note: null,
      },
    ],
    quiz: [
      {
        q: "När SKALL en driftorder alltid användas?",
        opts: [
          "Vid allt arbete över 1000 V",
          "När kopplingarna berör flera kopplingsledare och/eller elsäkerhetsledare",
          "Endast vid arbete på stamnätet",
        ],
        correct: 1,
        why: "Flera inblandade ledare = driftorder, genomförd i angiven ordning och kontrollerad av annan kompetent person.",
      },
      {
        q: "Vilken av dessa kräver SKRIFTLIG kopplingsbekräftelse?",
        opts: ["Arbetsjordning har anbringats", "En brytare har slagits från", "Ett reläskydd tagits ur drift"],
        correct: 0,
        why: "De fem skriftliga fallen: blockerad frånskiljare, truck i frånskilt läge, avlägsnade+blockerade säkringar, anbringad arbetsjordning, avlägsnade fixerade slackar.",
      },
      {
        q: "Vad krävs innan kopplingsledaren får tillkoppla?",
        opts: [
          "Att arbetstiden har löpt ut",
          "Samtliga driftbevis som motsvarar utlämnade arbetsbevis",
          "Muntligt OK från innehavaren",
        ],
        correct: 1,
        why: "Varje utlämnat arbetsbevis måste ha kommit tillbaka som ett driftbevis — annars kan någon fortfarande arbeta på anläggningen.",
      },
    ],
  },
  {
    id: "aus",
    title: "Arbete utan spänning (AUS)",
    bits: [
      {
        h: "Arbetsföljden — kursens ryggrad",
        p: "AUS är arbete på spänningslös anläggning efter att ALLA åtgärder vidtagits mot elektrisk risk. Ordningen: 1) Frånkoppling → 2) Blockering → 3) Spänningslöshetskontroll → 4) Arbetsjordning → 5) Kopplingsbekräftelse → 6) Arbetsbevis → [ARBETET] → 7) Driftbevis → 8) Tillkoppling.",
        note: "Lär dig ordningen utantill — den återkommer i varje driftorder och på varje LIA-dag.",
      },
      {
        h: "Frånkoppling & Blockering",
        p: "Frånkopplingen ska förebygga spänningssättning FRÅN ALLA HÅLL och ge ett synligt brytställe eller frånskiljning med tillförlitlig lägesindikering. Blockeringen förhindrar oavsiktlig manöver: säkringar avlägsnas, skylt 'Arbete pågår' sätts upp, och elkopplare låses om möjligt.",
        note: null,
      },
      {
        h: "Spänningslöshetskontroll",
        p: "Kontroll av att anläggningsdelen inte är spänningssatt med driftspänning. Skall ALLTID utföras, med GODKÄND spänningsprovare, och mot SAMTLIGA faser.",
        note: "Tre 'alltid': alltid utföras, alltid godkänd provare, alltid alla faser.",
      },
      {
        h: "Arbetsjordning — när och varför",
        p: "Skall anbringas vid arbete över 1000 V. Den förhindrar farliga spänningsskillnader på arbetsplatsen från oavsiktlig spänningssättning (felkoppling, reservkraft), inverkan från andra anläggningar (direkt kontakt eller induktion), åska och restspänning.",
        note: null,
      },
      {
        h: "Arbetsjordning — reglerna",
        p: "Anbringas MELLAN frånkopplingsstället och arbetsplatsen. Skall tåla högsta förekommande ström (normalt kortslutningsströmmen). Inga säkringar får finnas mellan arbetsjorden och anläggningsdelen man jobbar på — men elkopplare får finnas om de är kortslutningssäkra och mekaniskt blockerade i slutet läge. Jordförbindelsen omfattar fasledarna, oisolerade stag, jordade delar, skrymmande redskap utan betryggande isolation och övrigt ledande material.",
        note: "Jordningsverktyg: minst 16 mm² Cu, provas regelbundet, skadat verktyg används inte. Jordningsdon ansluts FÖRST till jordningsbult och avlägsnas SIST.",
      },
    ],
    quiz: [
      {
        q: "Vilket steg kommer direkt efter spänningslöshetskontrollen i AUS-följden?",
        opts: ["Blockering", "Arbetsjordning", "Arbetsbevis"],
        correct: 1,
        why: "Frånkoppling → Blockering → Spänningslöshetskontroll → Arbetsjordning → Kopplingsbekräftelse → Arbetsbevis → Driftbevis → Tillkoppling.",
      },
      {
        q: "Vid vilken spänning skall arbetsjordning anbringas?",
        opts: ["Över 400 V", "Över 1000 V", "Över 10 kV"],
        correct: 1,
        why: "Över 1000 V — alltså i hela HSP-området.",
      },
      {
        q: "I vilken ände ansluts jordningsdonet först?",
        opts: ["Till fasledaren", "Till jordningsbulten i jordningssystemet", "Spelar ingen roll"],
        correct: 1,
        why: "Jord först, fas sist — och vid demontering avlägsnas jordanslutningen sist.",
      },
      {
        q: "Vad är minsta area för jordningsverktyg?",
        opts: ["10 mm² Cu", "16 mm² Cu", "25 mm² Cu"],
        correct: 1,
        why: "16 mm² koppar — och verktyget ska vara standardenligt och provas regelbundet.",
      },
    ],
  },
  {
    id: "ams",
    title: "Arbete med spänning (AMS)",
    bits: [
      {
        h: "Tre hörnstenar + hårda krav",
        p: "AMS vilar på: utbildad personal med föreskriven kompetens, lämpliga verktyg och utrustningar, samt anpassade arbetsinstruktioner. Metoden får tillämpas först när brand- och explosionsrisken eliminerats. Vid spänning ≥ 1000 V krävs minst TVÅ kompetenta personer och anläggningen måste ha automatisk frånkoppling vid jordslutning. Får inte utföras i väderlek där verktygen blir svåra att hantera.",
        note: null,
      },
      {
        h: "De fyra metoderna",
        p: "ISOLERSTÅNGSMETODEN: arbetaren står på bestämt avstånd och arbetar med isolerade stänger. ISOLERHANDSMETODEN: arbetaren rör spänningsförande delar skyddad av långa isolerande handskar, ev. med armskydd. BARHANDSMETODEN: arbetaren är på SAMMA POTENTIAL som delarna, i direkt beröring, isolerad från omgivningen. KOMBINATIONSMETODEN: flera metoder i samma arbete — planeras var för sig och får INTE kombineras i ett enskilt arbetsmoment.",
        note: "Särskilda AMS-arbeten med fackkunnig person: spolning av salt, avlägsnande av damm/is, provning av isolatorer, träröjning från ledning.",
      },
    ],
    quiz: [
      {
        q: "Vad gäller vid AMS på ≥ 1000 V?",
        opts: [
          "Minst två kompetenta personer och automatisk frånkoppling vid jordslutning",
          "Endast dagtid och torr väderlek",
          "Skriftligt tillstånd från Elsäkerhetsverket",
        ],
        correct: 0,
        why: "Två-personskravet och automatisk frånkoppling vid jordslutning är de hårda villkoren för AMS i HSP.",
      },
      {
        q: "Vid vilken metod befinner sig arbetaren på samma potential som spänningsförande delar?",
        opts: ["Isolerstångsmetoden", "Isolerhandsmetoden", "Barhandsmetoden"],
        correct: 2,
        why: "Barhand = samma potential, direkt beröring, isolerad från omgivningen.",
      },
    ],
  },
  {
    id: "ans",
    title: "Arbete nära spänning (ANS)",
    bits: [
      {
        h: "Riskområde och närområde",
        p: "ANS: arbete där arbetare, maskin, materiel eller verktyg kommer in — eller riskerar att komma in — i NÄROMRÅDET (Dv), utan att nå RISKOMRÅDET (DL) med någon del. Riskområdet är zonen närmast spänningsförande del där isolationsnivån inte är säkerställd — det får ALDRIG beträdas. Närområdet är det begränsade område som omger riskområdet.",
        note: "Exempel på avstånd i luft: 10 kV → DL 120 mm / Dv 1150 mm. 130 kV → DL 1100 mm / Dv 3000 mm. 400 kV → DL 2500 mm / Dv 4000 mm.",
      },
      {
        h: "Säkerhetsavstånd & tillstånd",
        p: "Säkerhetsavståndet fastställs av arbetsansvarig för varje arbete med hänsyn till arbetssätt, redskap, material, arbetets varaktighet och arbetarnas kunnighet — så att ingen kommer in i riskområdet. Bör markeras, t.ex. med avspärrningsband. Arbetstillstånd (och i särskilda fall arbetsbegäran) skall inhämtas från kopplingsledare.",
        note: null,
      },
      {
        h: "Fyra säkerhetsåtgärder",
        p: "SKYDDSAVSKÄRMNING: anordning som gör att man inte oavsiktligt kan nå riskområdet. SKYDDSAVSPÄRRNING: tillfällig anordning som påminner om fara och varnar. BEVAKNING: utsedda personer håller uppsikt över arbetarna och varnar vid behov — får delta i arbetet. ÖVERVAKNING: för kortvarigt arbete, högst 5 minuter; den som övervakar får INTE delta i arbetet och får bara övervaka EN person.",
        note: "Bevakning = får jobba med. Övervakning = får inte jobba, max 5 min, max en person.",
      },
    ],
    quiz: [
      {
        q: "Vad gäller för riskområdet (DL)?",
        opts: [
          "Det får beträdas med skyddsutrustning",
          "Det får aldrig beträdas",
          "Det får beträdas efter arbetstillstånd",
        ],
        correct: 1,
        why: "Riskområdet ska i princip vara omöjligt att komma in i — det får aldrig beträdas.",
      },
      {
        q: "Hur länge får ÖVERVAKNING som säkerhetsåtgärd pågå?",
        opts: ["Högst 5 minuter", "Högst 30 minuter", "Hela arbetspasset"],
        correct: 0,
        why: "Max 5 minuter, övervakaren deltar inte i arbetet och övervakar bara en person.",
      },
      {
        q: "Vem fastställer säkerhetsavståndet vid ANS?",
        opts: ["Elsäkerhetsverket", "Arbetsansvarig, för varje arbete", "Innehavaren, en gång per anläggning"],
        correct: 1,
        why: "Det bedöms per arbete: arbetssätt, redskap, material, varaktighet och arbetarnas kunnighet.",
      },
    ],
  },
  {
    id: "icke",
    title: "Icke-elektriskt arbete",
    bits: [
      {
        h: "När gäller det?",
        p: "Vid anläggnings- och byggnadsarbete och annat icke-elektriskt arbete, samt vid förflyttning av maskiner och skrymmande last, skall ett fastställt säkerhetsavstånd ALLTID upprättas. Avståndet bestäms från närmaste OSKYDDADE spänningsförande del eller ledare.",
        note: null,
      },
      {
        h: "Avstånden att kunna",
        p: "I SIDLED: lågspänning minst 2 m, högspänning < 40 kV minst 4 m, högspänning > 40 kV minst 6 m. I HÖJDLED: lågspänning minst 2 m, högspänning minst 4 m (vid 400 kV minst 4,5 m).",
        note: "Kan avstånden inte innehållas skall arbetet utföras som ELEKTRISKT arbete — och då måste kontakt tas med eldriftledaren!",
      },
    ],
    quiz: [
      {
        q: "En grävmaskin ska arbeta i sidled nära en 130 kV-ledning. Minsta säkerhetsavstånd?",
        opts: ["2 m", "4 m", "6 m"],
        correct: 2,
        why: "Högspänning över 40 kV → minst 6 m i sidled.",
      },
      {
        q: "Vad händer om säkerhetsavstånden inte kan innehållas?",
        opts: [
          "Arbetet utförs som elektriskt arbete och eldriftledaren kontaktas",
          "Arbetet får utföras med bevakning",
          "Avståndet halveras om skyddsskärm används",
        ],
        correct: 0,
        why: "Då blir det ett elektriskt arbete — och kontakt MÅSTE tas med eldriftledaren.",
      },
    ],
  },
];

const STORAGE_KEY = "esa-kurs-progress-v1";

const state = {
  done: [],
  active: 0,
  bitIdx: 0,
  phase: "read",
  qIdx: 0,
  picked: null,
};

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved?.done)) state.done = saved.done;
    if (Number.isInteger(saved?.active)) {
      state.active = Math.min(Math.max(saved.active, 0), MODULES.length - 1);
    }
  } catch (error) {
    console.warn("Kunde inte läsa sparade framsteg.", error);
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    done: state.done,
    active: state.active,
  }));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function openModule(index) {
  if (index > state.done.length) return;
  state.active = index;
  state.bitIdx = 0;
  state.qIdx = 0;
  state.picked = null;
  state.phase = state.done.includes(MODULES[index].id) ? "passed" : "read";
  render();
}

function nextBit() {
  const module = MODULES[state.active];
  if (state.bitIdx < module.bits.length - 1) {
    state.bitIdx += 1;
  } else {
    state.phase = "quiz";
    state.qIdx = 0;
    state.picked = null;
  }
  render();
}

function afterAnswer() {
  const module = MODULES[state.active];
  const question = module.quiz[state.qIdx];
  if (state.picked !== question.correct) {
    state.picked = null;
  } else if (state.qIdx < module.quiz.length - 1) {
    state.qIdx += 1;
    state.picked = null;
  } else {
    if (!state.done.includes(module.id)) state.done.push(module.id);
    state.phase = "passed";
    saveProgress();
  }
  render();
}

function resetAll() {
  if (!confirm("Vill du nollställa alla framsteg?")) return;
  state.done = [];
  state.active = 0;
  state.bitIdx = 0;
  state.qIdx = 0;
  state.picked = null;
  state.phase = "read";
  localStorage.removeItem(STORAGE_KEY);
  render();
}

function renderNavigation() {
  const buttons = MODULES.map((module, index) => {
    const isDone = state.done.includes(module.id);
    const locked = index > state.done.length;
    const active = index === state.active;
    return `
      <button class="module-button${active ? " active" : ""}" data-module="${index}" ${locked ? "disabled" : ""}>
        <span class="check${isDone ? " done" : ""}">${isDone ? "✓" : ""}</span>
        <span class="module-label"><span class="module-number">${index + 1}.</span>${escapeHtml(module.title)}</span>
        ${locked ? '<span aria-hidden="true">🔒</span>' : ""}
      </button>`;
  }).join("");

  return `
    <nav aria-label="Kursens åtgärder">
      <div class="module-list">
        <div class="module-list-title">Åtgärder (${state.done.length}/${MODULES.length})</div>
        ${buttons}
      </div>
      <button class="reset" data-action="reset">Nollställ framsteg</button>
    </nav>`;
}

function renderRead(module) {
  const bit = module.bits[state.bitIdx];
  return `
    <div class="fade">
      <div class="eyebrow">Punkt ${state.bitIdx + 1} av ${module.bits.length}</div>
      <article class="card">
        <h3>${escapeHtml(bit.h)}</h3>
        <p class="body-copy">${escapeHtml(bit.p)}</p>
        ${bit.note ? `<p class="note"><strong>Kom ihåg:</strong> ${escapeHtml(bit.note)}</p>` : ""}
      </article>
      <div class="actions">
        ${state.bitIdx > 0 ? '<button class="secondary" data-action="previous-bit">← Tillbaka</button>' : ""}
        <button class="primary" data-action="next-bit">
          ${state.bitIdx < module.bits.length - 1 ? "Förstått — nästa punkt →" : "Förstått — till kopplingsbekräftelsen →"}
        </button>
      </div>
    </div>`;
}

function renderQuiz(module) {
  const question = module.quiz[state.qIdx];
  const options = question.opts.map((option, index) => {
    let resultClass = "";
    if (state.picked === index) resultClass = index === question.correct ? " correct" : " wrong";
    return `
      <button class="option${resultClass}" data-answer="${index}" ${state.picked !== null ? "disabled" : ""}>
        <span class="option-letter">${String.fromCharCode(65 + index)}</span>${escapeHtml(option)}
      </button>`;
  }).join("");

  const isCorrect = state.picked === question.correct;
  const feedback = state.picked === null ? "" : `
    <div class="feedback ${isCorrect ? "correct" : "wrong"}">
      <strong>${isCorrect ? "Bekräftat. " : "Inte riktigt. "}</strong>
      ${isCorrect ? escapeHtml(question.why) : "Fundera en gång till och välj igen."}
      <div><button class="primary" data-action="after-answer">
        ${isCorrect ? (state.qIdx < module.quiz.length - 1 ? "Nästa fråga →" : "Kvittera åtgärden →") : "Försök igen"}
      </button></div>
    </div>`;

  return `
    <div class="fade">
      <div class="quiz-stripe"></div>
      <article class="quiz-card">
        <div class="quiz-label">Kopplingsbekräftelse · fråga ${state.qIdx + 1} av ${module.quiz.length}</div>
        <h3 class="quiz-question">${escapeHtml(question.q)}</h3>
        <div class="options">${options}</div>
        ${feedback}
        <button class="text-button" data-action="reread">Läs punkterna igen</button>
      </article>
    </div>`;
}

function renderPassed() {
  const allDone = state.done.length === MODULES.length;
  return `
    <div class="fade">
      <article class="card passed">
        <div class="passed-label">${allDone && state.active === MODULES.length - 1 ? "Driftbevis lämnat" : "Arbetsbevis utfärdat"}</div>
        <h3>Åtgärd ${state.active + 1} kvitterad ✓</h3>
        <p>${allDone
          ? "Alla åtta åtgärder är genomförda — anläggningen är klar för drift. Du har hela kedjan: lagstöd, roller, dokument, AUS-följden, AMS-metoderna, ANS-zonerna och avstånden för icke-elektriskt arbete. Nollställ gärna och kör ett varv till några dagar före kursstart."
          : "Bra jobbat. Nästa åtgärd i driftordern är upplåst — genomför dem i ordning."}</p>
        <div class="actions">
          ${!allDone && state.active < MODULES.length - 1 ? '<button class="primary" data-action="next-module">Nästa åtgärd →</button>' : ""}
          <button class="secondary" data-action="repeat">Repetera denna åtgärd</button>
        </div>
      </article>
    </div>`;
}

function render() {
  const module = MODULES[state.active];
  const content = state.phase === "read"
    ? renderRead(module)
    : state.phase === "quiz"
      ? renderQuiz(module)
      : renderPassed();

  document.getElementById("app").innerHTML = `
    <div class="stripe"></div>
    <header class="site-header">
      <div class="title-row">
        <span class="tag">DRIFTORDER · ESA-TRÄNING</span>
        <h1>Arbete i HSP-anläggningar</h1>
      </div>
      <p class="intro">Åtta numrerade åtgärder — genomförs i ordning, precis som en riktig driftorder. Varje åtgärd avslutas med en <strong>kopplingsbekräftelse</strong> (kunskapskontroll) innan nästa låses upp. Dina framsteg sparas.</p>
    </header>
    <main>
      ${renderNavigation()}
      <section>
        <div class="module-heading">
          <span class="big-number">${String(state.active + 1).padStart(2, "0")}</span>
          <h2>${escapeHtml(module.title)}</h2>
        </div>
        ${content}
      </section>
    </main>
    <footer><div class="stripe"></div></footer>`;
}

document.addEventListener("click", (event) => {
  const moduleButton = event.target.closest("[data-module]");
  if (moduleButton) return openModule(Number(moduleButton.dataset.module));

  const answerButton = event.target.closest("[data-answer]");
  if (answerButton && state.picked === null) {
    state.picked = Number(answerButton.dataset.answer);
    return render();
  }

  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "next-bit") nextBit();
  if (action === "previous-bit") { state.bitIdx -= 1; render(); }
  if (action === "after-answer") afterAnswer();
  if (action === "reread" || action === "repeat") { state.phase = "read"; state.bitIdx = 0; state.picked = null; render(); }
  if (action === "next-module") openModule(state.active + 1);
  if (action === "reset") resetAll();
});

loadProgress();
render();
