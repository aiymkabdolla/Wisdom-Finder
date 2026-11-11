
const proverbs = [

    // 1. ЕҢБЕК ЖӘНЕ ЖЕТІСТІК — 8
    {
        text: "Еңбек етсең ерінбей, тояды қарның тіленбей.",
        category: "Еңбек және жетістік",
        meaning: "Еңбекқор адам өз еңбегінің арқасында мақсатына жетіп, молшылыққа кенеледі.",
        keywords: ["еңбек", "жұмыс", "табыс", "жетістік", "еңбектену"]
    },
    {
        text: "Еңбек түбі — береке.",
        category: "Еңбек және жетістік",
        meaning: "Адал еңбек адамның өміріне молшылық пен береке әкеледі.",
        keywords: ["еңбек", "береке", "жұмыс", "табыс"]
    },
    {
        text: "Бейнет түбі — зейнет.",
        category: "Еңбек және жетістік",
        meaning: "Қиындықпен жасалған еңбектің соңында жақсы нәтиже болады.",
        keywords: ["еңбек", "қиындық", "нәтиже", "жетістік"]
    },
    {
        text: "Еңбектің наны тәтті, жалқаудың жаны тәтті.",
        category: "Еңбек және жетістік",
        meaning: "Еңбекпен келген табыс қадірлі, ал жалқаулық адамды алға бастырмайды.",
        keywords: ["еңбек", "жалқаулық", "жұмыс", "табыс"]
    },
    {
        text: "Еріншектің ертеңі бітпес.",
        category: "Еңбек және жетістік",
        meaning: "Істі үнемі кейінге қалдыратын адам мақсатына жете алмайды.",
        keywords: ["еріншектік", "жалқаулық", "уақыт", "кейінге қалдыру"]
    },
    {
        text: "Қолы қимылдағанның аузы қимылдайды.",
        category: "Еңбек және жетістік",
        meaning: "Әрекет етіп, еңбек еткен адам өз күнін өзі көре алады.",
        keywords: ["еңбек", "әрекет", "жұмыс", "күнкөріс"]
    },
    {
        text: "Еңбегі аздың өнбегі аз.",
        category: "Еңбек және жетістік",
        meaning: "Аз еңбек еткен адам үлкен нәтижеге қол жеткізе алмайды.",
        keywords: ["еңбек", "нәтиже", "талпыныс", "жетістік"]
    },
    {
        text: "Талаптыға нұр жауар.",
        category: "Еңбек және жетістік",
        meaning: "Алға ұмтылып, талаптанған адам міндетті түрде жетістікке жақындайды.",
        keywords: ["талап", "мақсат", "арман", "талпыныс", "жетістік"]
    },

    // 2. БІЛІМ ЖӘНЕ ҒЫЛЫМ — 8
    {
        text: "Оқу — білім бұлағы, білім — өмір шырағы.",
        category: "Білім және ғылым",
        meaning: "Білім адамның өмір жолын жарық етіп, дұрыс бағыт табуына көмектеседі.",
        keywords: ["оқу", "білім", "мектеп", "университет", "ғылым"]
    },
    {
        text: "Ақыл азбайды, білім тозбайды.",
        category: "Білім және ғылым",
        meaning: "Адамның ақылы мен білімі ешқашан құнын жоғалтпайды.",
        keywords: ["ақыл", "білім", "ғылым", "үйрену"]
    },
    {
        text: "Білекті бірді жығар, білімді мыңды жығар.",
        category: "Білім және ғылым",
        meaning: "Күштен гөрі білім мен ақылдың мүмкіндігі әлдеқайда жоғары.",
        keywords: ["білім", "ақыл", "күш", "ғылым", "оқу"]
    },
    {
        text: "Көп оқыған білмейді, көп тоқыған біледі.",
        category: "Білім және ғылым",
        meaning: "Білімді тек оқу емес, алған ақпаратты түсініп, тәжірибеде қолдану арқылы меңгеруге болады.",
        keywords: ["оқу", "білім", "тәжірибе", "үйрену"]
    },
    {
        text: "Оқыған озады, оқымаған тозады.",
        category: "Білім және ғылым",
        meaning: "Үнемі білім іздеген адам дамиды, ал оқуға ұмтылмаған адам артта қалады.",
        keywords: ["оқу", "білім", "даму", "болашақ"]
    },
    {
        text: "Білімдіге дүние жарық, білімсіздің күні кәріп.",
        category: "Білім және ғылым",
        meaning: "Білім адамға мүмкіндіктер ашады, ал білімсіздік өмірде қиындық туғызады.",
        keywords: ["білім", "білімсіздік", "ғылым", "оқу"]
    },
    {
        text: "Ұстазы жақсының ұстамы жақсы.",
        category: "Білім және ғылым",
        meaning: "Жақсы ұстаздан тәлім алған адамның тәрбиесі мен білімі де жақсы болады.",
        keywords: ["ұстаз", "мұғалім", "тәрбие", "оқу", "мектеп"]
    },
    {
        text: "Білгенің бір тоғыз, білмегенің тоқсан тоғыз.",
        category: "Білім және ғылым",
        meaning: "Адам қанша білім алса да, әлі үйренетін нәрсе көп екенін түсінуі керек.",
        keywords: ["білім", "үйрену", "ғылым", "ізденіс", "ақыл"]
    },

    // 3. ДОСТЫҚ ЖӘНЕ АДАМГЕРШІЛІК — 8
    {
        text: "Досы көпті жау алмайды, ақылы көпті дау алмайды.",
        category: "Достық және адамгершілік",
        meaning: "Жанында адал достары бар адам қиындықта жалғыз қалмайды.",
        keywords: ["дос", "достық", "қолдау", "адалдық"]
    },
    {
        text: "Дос жылатып айтады, дұшпан күлдіріп айтады.",
        category: "Достық және адамгершілік",
        meaning: "Шынайы дос қателігіңді жасырмай айтады, ал жаман адам жалған мақтауы мүмкін.",
        keywords: ["дос", "дұшпан", "шындық", "адалдық"]
    },
    {
        text: "Жүз теңгең болғанша, жүз досың болсын.",
        category: "Достық және адамгершілік",
        meaning: "Адал достық материалдық байлықтан да қымбат.",
        keywords: ["дос", "достық", "байлық", "қарым-қатынас"]
    },
    {
        text: "Досы жақсының өзі де жақсы.",
        category: "Достық және адамгершілік",
        meaning: "Адамның қандай екенін оның араласатын ортасынан да байқауға болады.",
        keywords: ["дос", "орта", "адам", "достық"]
    },
    {
        text: "Адамның күні адаммен.",
        category: "Достық және адамгершілік",
        meaning: "Адамдар бір-біріне көмектесіп, қарым-қатынас арқылы өмір сүреді.",
        keywords: ["адам", "достық", "көмек", "қоғам"]
    },
    {
        text: "Жақсымен жолдас болсаң, жетерсің мұратқа.",
        category: "Достық және адамгершілік",
        meaning: "Жақсы адамдармен араласу адамды дұрыс жолға бағыттайды.",
        keywords: ["дос", "жақсы адам", "орта", "мақсат"]
    },
    {
        text: "Кең болсаң, кем болмайсың.",
        category: "Достық және адамгершілік",
        meaning: "Жомарт, кешірімді және кең пейілді адам ешқашан ұтылмайды.",
        keywords: ["жомарттық", "мейірім", "кешірім", "адамгершілік"]
    },
    {
        text: "Жақсыдан үйрен, жаманнан жирен.",
        category: "Достық және адамгершілік",
        meaning: "Жақсы адамдардың қасиетін үлгі етіп, жаман әрекеттерден аулақ болу керек.",
        keywords: ["жақсылық", "жамандық", "тәрбие", "адамгершілік"]
    },

    // 4. ОТБАСЫ ЖӘНЕ АТА-АНА — 8
    {
        text: "Отан отбасынан басталады.",
        category: "Отбасы және ата-ана",
        meaning: "Отанға деген сүйіспеншілік пен тәрбие ең алдымен отбасында қалыптасады.",
        keywords: ["отбасы", "ата-ана", "отан", "тәрбие"]
    },
    {
        text: "Атаңа не қылсаң, алдыңа сол келер.",
        category: "Отбасы және ата-ана",
        meaning: "Үлкендерге жасаған қарым-қатынасың өмірде өзіңе де қайтып келеді.",
        keywords: ["ата", "ана", "ата-ана", "үлкен", "құрмет"]
    },
    {
        text: "Әкеге қарап ұл өсер, шешеге қарап қыз өсер.",
        category: "Отбасы және ата-ана",
        meaning: "Балалар ата-анасының мінезі мен іс-әрекетінен үлгі алады.",
        keywords: ["әке", "ана", "ата-ана", "бала", "тәрбие"]
    },
    {
        text: "Ана сүті бой өсіреді, ана тілі ой өсіреді.",
        category: "Отбасы және ата-ана",
        meaning: "Ана тілі адамның ойлау қабілеті мен рухани дамуына әсер етеді.",
        keywords: ["ана", "ана тілі", "отбасы", "тіл", "тәрбие"]
    },
    {
        text: "Балалы үй — базар, баласыз үй — мазар.",
        category: "Отбасы және ата-ана",
        meaning: "Бала отбасына қуаныш, шаттық және өмірдің мәнін сыйлайды.",
        keywords: ["бала", "отбасы", "ата-ана", "қуаныш"]
    },
    {
        text: "Ағайын тату болса — ат көп, абысын тату болса — ас көп.",
        category: "Отбасы және ата-ана",
        meaning: "Туыстар арасындағы татулық отбасының берекесін арттырады.",
        keywords: ["ағайын", "туыс", "отбасы", "татулық"]
    },
    {
        text: "Ұяда не көрсең, ұшқанда соны ілерсің.",
        category: "Отбасы және ата-ана",
        meaning: "Бала отбасында көрген тәрбиесін өскенде өз өмірінде қолданады.",
        keywords: ["ұя", "отбасы", "бала", "тәрбие", "ата-ана"]
    },
    {
        text: "Ана алдында құрмет, ата алдында қызмет.",
        category: "Отбасы және ата-ана",
        meaning: "Ата-ананы сыйлап, оларға қамқорлық жасау — перзенттік парыз.",
        keywords: ["ана", "әке", "ата-ана", "құрмет", "қамқорлық"]
    },

    // 5. ОТАН ЖӘНЕ ТУҒАН ЖЕР — 8
    {
        text: "Отан — оттан да ыстық.",
        category: "Отан және туған жер",
        meaning: "Туған ел мен жер әр адам үшін ең қымбат мекен.",
        keywords: ["отан", "туған жер", "қазақстан", "ел"]
    },
    {
        text: "Туған жердей жер болмас, туған елдей ел болмас.",
        category: "Отан және туған жер",
        meaning: "Өз туған жерің мен еліңнің орны әрқашан ерекше.",
        keywords: ["туған жер", "отан", "ел", "қазақстан"]
    },
    {
        text: "Ел іші — алтын бесік.",
        category: "Отан және туған жер",
        meaning: "Адам үшін туған елі мен туған ортасы ең қымбат мекен.",
        keywords: ["ел", "отан", "туған жер", "халық"]
    },
    {
        text: "Туған жердің күні де ыстық, түні де ыстық.",
        category: "Отан және туған жер",
        meaning: "Туған өлкенің әрбір сәті мен әрбір бұрышы адамға ыстық.",
        keywords: ["туған жер", "өлке", "отан", "табиғат"]
    },
    {
        text: "Елінен безген ер оңбас, көлінен безген қаз оңбас.",
        category: "Отан және туған жер",
        meaning: "Өз елінен, туған ортасынан ажыраған адам көп нәрседен айырылады.",
        keywords: ["ел", "отан", "туған жер", "халық"]
    },
    {
        text: "Батыр туса — ел ырысы, жаңбыр жауса — жер ырысы.",
        category: "Отан және туған жер",
        meaning: "Елін қорғайтын батыр халықтың бақыты мен мақтанышы.",
        keywords: ["батыр", "ел", "отан", "халық", "ерлік"]
    },
    {
        text: "Ел үмітін ер ақтар, ер атағын ел сақтар.",
        category: "Отан және туған жер",
        meaning: "Ел сенімін ақтаған азаматтың еңбегін халық ұмытпайды.",
        keywords: ["ел", "ерлік", "жауапкершілік", "отан", "халық"]
    },
    {
        text: "Өз елім — өлең төсегім.",
        category: "Отан және туған жер",
        meaning: "Адам өз елінде өзін еркін әрі жайлы сезінеді.",
        keywords: ["ел", "отан", "туған жер", "үй"]
    },

    // 6. АҚЫЛ ЖӘНЕ ДАНАЛЫҚ — 8
    {
        text: "Жеті рет өлшеп, бір рет кес.",
        category: "Ақыл және даналық",
        meaning: "Маңызды шешім қабылдамас бұрын жан-жақты ойланып алу қажет.",
        keywords: ["шешім", "ойлану", "ақыл", "таңдау"]
    },
    {
        text: "Ашу — дұшпан, ақыл — дос.",
        category: "Ақыл және даналық",
        meaning: "Ашуға берілмей, кез келген жағдайды ақылмен шешкен дұрыс.",
        keywords: ["ашу", "ақыл", "сабыр", "эмоция"]
    },
    {
        text: "Ақыл жастан, асыл тастан.",
        category: "Ақыл және даналық",
        meaning: "Ақыл мен даналық адамның жасына ғана байланысты емес.",
        keywords: ["ақыл", "жас", "даналық", "білім"]
    },
    {
        text: "Көп сөз — көмір, аз сөз — алтын.",
        category: "Ақыл және даналық",
        meaning: "Орынсыз көп сөйлегеннен гөрі, аз әрі мағыналы сөйлеген дұрыс.",
        keywords: ["сөз", "сөйлеу", "ақыл", "даналық"]
    },
    {
        text: "Сөз сүйектен өтеді, таяқ еттен өтеді.",
        category: "Ақыл және даналық",
        meaning: "Ауыр сөз адамның жүрегіне қатты тиіп, ұзақ уақыт есте қалуы мүмкін.",
        keywords: ["сөз", "тіл", "реніш", "қарым-қатынас"]
    },
    {
        text: "Бас кеспек болса да, тіл кеспек жоқ.",
        category: "Ақыл және даналық",
        meaning: "Адам шындықты айту құқығынан айырылмауы керек.",
        keywords: ["шындық", "сөз", "әділдік", "батылдық"]
    },
    {
        text: "Сөз тапқанға қолқа жоқ.",
        category: "Ақыл және даналық",
        meaning: "Орынды әрі тапқыр жауап берген адамға айтар кінә аз.",
        keywords: ["тапқырлық", "сөз", "ақыл", "шешендік"]
    },
    {
        text: "Білгеніңді біреуден сұра, білмегеніңді көптен сұра.",
        category: "Ақыл және даналық",
        meaning: "Білмеген нәрсені сұраудан ұялмай, өзгелердің тәжірибесінен үйрену керек.",
        keywords: ["сұрақ", "ақыл", "білім", "тәжірибе", "үйрену"]
    },

    // 7. САБЫР ЖӘНЕ ТӨЗІМДІЛІК — 8
    {
        text: "Сабыр түбі — сары алтын.",
        category: "Сабыр және төзімділік",
        meaning: "Қиындыққа сабырмен қараған адам ақырында жақсы нәтижеге жетеді.",
        keywords: ["сабыр", "шыдам", "қиындық", "төзім"]
    },
    {
        text: "Асыққан шайтанның ісі.",
        category: "Сабыр және төзімділік",
        meaning: "Асығыстық қателікке әкелуі мүмкін, сондықтан істі байыппен жасау керек.",
        keywords: ["асықпау", "сабыр", "уақыт", "қателік"]
    },
    {
        text: "Төзім түбі — жеңіс.",
        category: "Сабыр және төзімділік",
        meaning: "Қиындыққа шыдап, берілмеген адам жеңіске жетуі мүмкін.",
        keywords: ["төзім", "жеңіс", "қиындық", "шыдам"]
    },
    {
        text: "Қайрат қылсаң, қажымассың.",
        category: "Сабыр және төзімділік",
        meaning: "Қайратты әрі табанды адам кедергілерден қорықпайды.",
        keywords: ["қайрат", "табандылық", "батылдық", "қиындық"]
    },
    {
        text: "Бір күндік жолға шықсаң да, үш күндік азық ал.",
        category: "Сабыр және төзімділік",
        meaning: "Кез келген іске дайындықпен кірісіп, күтпеген жағдайларды ескерген дұрыс.",
        keywords: ["дайындық", "сабыр", "жоспар", "сақтық"]
    },
    {
        text: "Қорыққанға қос көрінер.",
        category: "Сабыр және төзімділік",
        meaning: "Қорқыныш кейде жағдайды шын мәнінен әлдеқайда қиын етіп көрсетеді.",
        keywords: ["қорқыныш", "батылдық", "сенім", "сабыр"]
    },
    {
        text: "Шыдаған жетер мұратқа.",
        category: "Сабыр және төзімділік",
        meaning: "Төзімділік пен табандылық адамды арманына жақындатады.",
        keywords: ["шыдам", "мақсат", "арман", "табандылық"]
    },
    {
        text: "Тау мен тасты су бұзар, адамзатты сөз бұзар.",
        category: "Сабыр және төзімділік",
        meaning: "Ойланбай айтылған сөз адамдардың арасындағы татулықты бұзуы мүмкін.",
        keywords: ["сөз", "сабыр", "реніш", "қарым-қатынас"]
    },

    // 8. БІРЛІК ЖӘНЕ ЫНТЫМАҚ — 8
    {
        text: "Бірлік болмай, тірлік болмас.",
        category: "Бірлік және ынтымақ",
        meaning: "Адамдар бірікпейінше, ортақ мақсатқа жету қиын.",
        keywords: ["бірлік", "ынтымақ", "команда", "бірге"]
    },
    {
        text: "Жұмыла көтерген жүк жеңіл.",
        category: "Бірлік және ынтымақ",
        meaning: "Бірнеше адам бірігіп әрекет етсе, қиын жұмыс та жеңілдейді.",
        keywords: ["бірге", "команда", "көмек", "бірлік"]
    },
    {
        text: "Алтау ала болса, ауыздағы кетеді, төртеу түгел болса, төбедегі келеді.",
        category: "Бірлік және ынтымақ",
        meaning: "Араздық бар жерде береке болмайды, ал бірлік үлкен жетістікке жеткізеді.",
        keywords: ["бірлік", "татулық", "ынтымақ", "ұжым"]
    },
    {
        text: "Ырыс алды — ынтымақ.",
        category: "Бірлік және ынтымақ",
        meaning: "Береке мен молшылықтың негізі — адамдар арасындағы татулық.",
        keywords: ["ынтымақ", "бірлік", "береке", "татулық"]
    },
    {
        text: "Көп түкірсе — көл.",
        category: "Бірлік және ынтымақ",
        meaning: "Көп адамның аз-аздан қосқан үлесі үлкен нәтижеге айналады.",
        keywords: ["көпшілік", "бірлік", "көмек", "үлес"]
    },
    {
        text: "Жалғыз ағаш орман болмас.",
        category: "Бірлік және ынтымақ",
        meaning: "Үлкен мақсатқа жету үшін адамдардың бірлескен еңбегі қажет.",
        keywords: ["бірге", "команда", "бірлік", "ынтымақ"]
    },
    {
        text: "Төртеу түгел болса, төбедегі келеді.",
        category: "Бірлік және ынтымақ",
        meaning: "Тату әрі ұйымшыл адамдар кез келген істі бірге атқара алады.",
        keywords: ["бірлік", "ұйымшылдық", "команда", "татулық"]
    },
    {
        text: "Кеңесіп пішкен тон келте болмас.",
        category: "Бірлік және ынтымақ",
        meaning: "Маңызды істі бірнеше адам ақылдасып шешсе, нәтиже жақсы болады.",
        keywords: ["кеңес", "бірге", "ақылдасу", "шешім"]
    },

    // 9. ӨМІР ЖӘНЕ УАҚЫТ — 8
    {
        text: "Уақыт — алтыннан қымбат.",
        category: "Өмір және уақыт",
        meaning: "Уақытты бағалап, әр сәтті пайдалы іске жұмсау керек.",
        keywords: ["уақыт", "сағат", "күн", "өмір"]
    },
    {
        text: "Өткен күннен алғыс жоқ, келер күннен үміт көп.",
        category: "Өмір және уақыт",
        meaning: "Өткенге байланып қалмай, болашаққа үмітпен қарау керек.",
        keywords: ["өткен", "болашақ", "үміт", "өмір"]
    },
    {
        text: "Бүгінгі істі ертеңге қалдырма.",
        category: "Өмір және уақыт",
        meaning: "Істі кейінге қалдырмай, уақытында орындау қажет.",
        keywords: ["бүгін", "ертең", "уақыт", "жалқаулық"]
    },
    {
        text: "Өмір — өзен, ағып жатыр, тоқтамайды.",
        category: "Өмір және уақыт",
        meaning: "Өмір үнемі өзгеріп отырады, сондықтан әр сәттің қадірін білу керек.",
        keywords: ["өмір", "уақыт", "өзгеріс", "сәт"]
    },
    {
        text: "Көш жүре түзеледі.",
        category: "Өмір және уақыт",
        meaning: "Кез келген істі бастап, тәжірибе жинаған сайын оны жақсартуға болады.",
        keywords: ["бастау", "тәжірибе", "даму", "өмір"]
    },
    {
        text: "Жақсыдан шарапат, жаманнан кесапат.",
        category: "Өмір және уақыт",
        meaning: "Жақсы адамның пайдасы тиеді, ал жаман адамның әрекеті зиян келтіреді.",
        keywords: ["жақсылық", "жамандық", "адам", "өмір"]
    },
    {
        text: "Бірінші байлық — денсаулық, екінші байлық — ақ жаулық, үшінші байлық — он саулық.",
        category: "Өмір және уақыт",
        meaning: "Денсаулық, отбасы және ұрпақ — халық түсінігіндегі маңызды құндылықтар.",
        keywords: ["денсаулық", "байлық", "отбасы", "өмір"]
    },
    {
        text: "Судың да сұрауы бар.",
        category: "Өмір және уақыт",
        meaning: "Әр нәрсенің қадірін біліп, табиғи ресурстарды үнемдеу қажет.",
        keywords: ["су", "табиғат", "үнем", "жауапкершілік"]
    },

    // 10. ЖАҚСЫЛЫҚ ЖӘНЕ ТӘРБИЕ — 8
    {
        text: "Жақсы сөз — жарым ырыс.",
        category: "Жақсылық және тәрбие",
        meaning: "Жылы сөз адамның көңілін көтеріп, жақсылыққа жетелейді.",
        keywords: ["жақсы сөз", "тілек", "сөйлеу", "жақсылық"]
    },
    {
        text: "Жақсының жақсылығын айт, нұры тасысын.",
        category: "Жақсылық және тәрбие",
        meaning: "Жақсы адамның игі ісін бағалап, өзгелерге үлгі ету керек.",
        keywords: ["жақсылық", "алғыс", "ризашылық", "мейірім"]
    },
    {
        text: "Не ексең, соны орасың.",
        category: "Жақсылық және тәрбие",
        meaning: "Адамның жасаған әрекеті мен таңдауы болашақ нәтижесіне әсер етеді.",
        keywords: ["әрекет", "нәтиже", "жақсылық", "жауапкершілік"]
    },
    {
        text: "Жақсылық қылсаң, жасыр, жақсылық көрсең, асыр.",
        category: "Жақсылық және тәрбие",
        meaning: "Жақсылықты мақтан үшін емес, шын ниетпен жасау керек.",
        keywords: ["жақсылық", "мейірім", "көмек", "адамгершілік"]
    },
    {
        text: "Әдепті бала — арлы бала, әдепсіз бала — сорлы бала.",
        category: "Жақсылық және тәрбие",
        meaning: "Әдептілік пен жақсы мінез адамның абыройын арттырады.",
        keywords: ["әдеп", "тәрбие", "бала", "мінез"]
    },
    {
        text: "Ұлық болсаң, кішік бол.",
        category: "Жақсылық және тәрбие",
        meaning: "Қандай дәрежеге жетсең де, қарапайым әрі кішіпейіл болу керек.",
        keywords: ["қарапайымдылық", "кішіпейілдік", "тәрбие", "мінез"]
    },
    {
        text: "Жақсы байқап сөйлер, жаман шайқап сөйлер.",
        category: "Жақсылық және тәрбие",
        meaning: "Ақылды адам сөзін ойланып айтады, ал ойсыз адам орынсыз сөйлейді.",
        keywords: ["сөз", "әдеп", "тәрбие", "ақыл"]
    },
    {
        text: "Үлкенге құрмет, кішіге ізет.",
        category: "Жақсылық және тәрбие",
        meaning: "Үлкендерді сыйлап, кішілерге қамқор болу — адамгершіліктің белгісі.",
        keywords: ["құрмет", "ізет", "үлкен", "кіші", "тәрбие"]
    }

];

/* =====================================
   WISDOM FINDER
   ===================================== */

// 1. ВСТАВЬ СЮДА СВОИ 80 ПОСЛОВИЦ
// От const proverbs = [ до закрывающего ];


// 2. HTML элементтерін алу
const situationInput = document.getElementById("situation");
const searchButton = document.getElementById("searchButton");
const resultsSection = document.getElementById("results");
const resultsGrid = document.getElementById("resultsGrid");
const favoritesGrid = document.getElementById("favoritesGrid");
const historyList = document.getElementById("historyList");
const clearHistoryButton = document.getElementById("clearHistory");
const charCount = document.getElementById("charCount");

// 3. Сақталған мәліметтер
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let history = JSON.parse(localStorage.getItem("history")) || [];

// 4. Қауіпсіз мәтін
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[char]);
}

// 5. Мәтінді қалыпқа келтіру
function normalize(text) {
    return text.toLocaleLowerCase("kk").replace(/[.,!?;:«»"()]/g, " ").trim();
}

// 6. Үш мақал таңдау
function findProverbs(situation) {
    const words = normalize(situation)
        .split(/\s+/)
        .filter(word => word.length > 2);

    return proverbs.map((proverb, index) => {
        let score = 0;

        const searchable = normalize(
            proverb.text + " " +
            proverb.category + " " +
            proverb.meaning
        );

        words.forEach(word => {
            if (searchable.includes(word)) score++;

            proverb.keywords.forEach(keyword => {
                const key = normalize(keyword);

                if (key.includes(word) || word.includes(key)) {
                    score += 3;
                }
            });
        });

        return { ...proverb, score, originalIndex: index };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

// 7. Мақал карточкасы
function createCard(proverb) {
    const index = proverb.originalIndex ??
        proverbs.findIndex(item => item.text === proverb.text);

    const isFavorite = favorites.some(
        item => item.text === proverb.text
    );

    return `
        <article class="proverb-card">
            <span class="proverb-category">
                ${escapeHTML(proverb.category)}
            </span>

            <h3>${escapeHTML(proverb.text)}</h3>

            <p>${escapeHTML(proverb.meaning)}</p>

            <div class="card-actions">
                <button class="text-button favorite-btn"
                    data-index="${index}">
                    ${isFavorite ? "♥ Таңдаулыдан алу" : "♡ Таңдаулыға қосу"}
                </button>

                <button class="text-button copy-btn"
                    data-copy="${encodeURIComponent(proverb.text)}">
                    Көшіру
                </button>
            </div>
        </article>
    `;
}

// 8. Іздеу
function searchProverbs() {
    const situation = situationInput.value.trim();

    if (!situation) {
        alert("Алдымен жағдайыңды жаз!");
        return;
    }

    const matches = findProverbs(situation);

    resultsSection.classList.remove("hidden");

    if (matches.length === 0) {
        resultsGrid.innerHTML = `
            <p class="empty-message">
                Сәйкес мақал табылмады. Басқа сөздермен жазып көр.
            </p>
        `;
    } else {
        resultsGrid.innerHTML = matches.map(createCard).join("");
    }

    history.unshift({
        text: situation,
        date: new Date().toLocaleString("kk-KZ")
    });

    history = history.slice(0, 20);

    localStorage.setItem("history", JSON.stringify(history));
    renderHistory();

    resultsSection.scrollIntoView({ behavior: "smooth" });
}

// 9. Іздеу батырмасы
searchButton.addEventListener("click", searchProverbs);

situationInput.addEventListener("keydown", event => {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        searchProverbs();
    }
});

// 10. Таңдаулылар
function renderFavorites() {
    if (!favorites.length) {
        favoritesGrid.innerHTML =
            '<p class="empty-message">Әзірге сақталған мақал жоқ.</p>';
        return;
    }

    favoritesGrid.innerHTML = favorites.map(proverb => `
        <article class="proverb-card">
            <span class="proverb-category">${escapeHTML(proverb.category)}</span>
            <h3>${escapeHTML(proverb.text)}</h3>
            <p>${escapeHTML(proverb.meaning)}</p>

            <div class="card-actions">
                <button class="text-button remove-favorite"
                    data-text="${encodeURIComponent(proverb.text)}">
                    ♥ Таңдаулыдан алу
                </button>

                <button class="text-button copy-btn"
                    data-copy="${encodeURIComponent(proverb.text)}">
                    Көшіру
                </button>
            </div>
        </article>
    `).join("");
}

// 11. Лайк функциясы
function toggleFavorite(index) {
    const proverb = proverbs[index];

    if (!proverb) return;

    const exists = favorites.some(
        item => item.text === proverb.text
    );

    if (exists) {
        favorites = favorites.filter(
            item => item.text !== proverb.text
        );
    } else {
        favorites.push(proverb);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    renderFavorites();

    const situation = situationInput.value.trim();

    if (situation) {
        const matches = findProverbs(situation);
        resultsGrid.innerHTML = matches.map(createCard).join("");
    }
}

// 12. Батырмаларды басқару
document.addEventListener("click", async event => {
    const favoriteButton = event.target.closest(".favorite-btn");

    if (favoriteButton) {
        toggleFavorite(Number(favoriteButton.dataset.index));
        return;
    }

    const removeButton = event.target.closest(".remove-favorite");

    if (removeButton) {
        const text = decodeURIComponent(removeButton.dataset.text);

        favorites = favorites.filter(item => item.text !== text);

        localStorage.setItem("favorites", JSON.stringify(favorites));
        renderFavorites();

        const situation = situationInput.value.trim();

        if (situation) {
            resultsGrid.innerHTML = findProverbs(situation)
                .map(createCard).join("");
        }
        return;
    }

    const copyButton = event.target.closest(".copy-btn");

    if (copyButton) {
        try {
            await navigator.clipboard.writeText(
                decodeURIComponent(copyButton.dataset.copy)
            );
            copyButton.textContent = "Көшірілді ✓";
        } catch {
            alert("Көшіру мүмкін болмады.");
        }
    }
});

// 13. Іздеу тарихы
function renderHistory() {
    if (!history.length) {
        historyList.innerHTML =
            '<p class="empty-message">Іздеу тарихы әзірге бос.</p>';
        return;
    }

    historyList.innerHTML = history.map((item, index) => `
        <div class="history-item">
            <button class="history-search" data-history="${index}">
                ${escapeHTML(item.text)}
            </button>
            <span>${escapeHTML(item.date)}</span>
        </div>
    `).join("");
}

// 14. Тарихтағы іздеу
historyList.addEventListener("click", event => {
    const button = event.target.closest(".history-search");
    if (!button) return;

    const item = history[Number(button.dataset.history)];

    if (item) {
        situationInput.value = item.text;
        situationInput.dispatchEvent(new Event("input"));
        searchProverbs();
    }
});

// 15. Тарихты тазалау
clearHistoryButton.addEventListener("click", () => {
    history = [];
    localStorage.setItem("history", JSON.stringify(history));
    renderHistory();
});

// 16. Мысал батырмалары
document.querySelectorAll(".example-chip").forEach(button => {
    button.addEventListener("click", () => {
        situationInput.value = button.dataset.text;
        situationInput.dispatchEvent(new Event("input"));
        situationInput.focus();
    });
});

// 17. Таңбаларды санау
situationInput.addEventListener("input", () => {
    charCount.textContent =
        `${situationInput.value.length} / 500`;
});

// 18. Алғашқы мәліметтерді көрсету
renderFavorites();
renderHistory();

console.log("Wisdom Finder іске қосылды!");
console.log("Мақал саны:", proverbs.length);