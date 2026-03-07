const categories = [

    {
        id: 1,
        name: "Mebel",
        icon: "./assets/icons/category/mebel.png",
        slug: "furniture",

        items: {

            "Karavot va matraslar": {
                "Matraslar": [],
                "Karavotlar": [],
                "Yotoqxona uchun mebel to‘plamlari": []
            },

            "Kompakt mebel": {
                "Kompakt divanlar": [],
                "Kompakt karavotlar": [],
                "Kompakt kreslolar": [],
                "Kompakt shkaflar": []
            },

            "Mebel uchun furnitura va butlovchi qismlar": {
                "Mebel uchun butlovchi qismlar": [],
                "Mebel uchun furnitura": []
            },

            "Ofis va kompyuter mebellari": {
                "Ofis kreslolari": [],
                "Geymerlar uchun kreslolar": [],
                "Seyflar": [],
                "Partalar": [],
                "Ofis mebeli to‘plamlari": [],
                "Ofis tumbalari": [],
                "Yozuv va kompyuter stollari": []
            },

            "Oshxona mebellari": {
                "Oshxona burchaklari": [],
                "Oshxona garnituralari": [],
                "Oshxona modullari": [],
                "Oshxona xontaxtalari": []
            },

            "Saqlash mebellari": {
                "Komodlar va tumbalar": [],
                "Tokcha va javonlar": [],
                "Qavatli ilgichlar": [],
                "Shkaflar va garderoblar": []
            },

            "Stollar va stullar": {
                "Stullar": [],
                "Jurnal stollari": [],
                "Stollar": [],
                "Ovqatlanish guruhlari": [],
                "Pardoz stollari va konsollar": [],
                "Taburetkalar": []
            },

            "Vannaxona uchun mebel": {
                "Rakovina uchun tumbalar": [],
                "Vannaxona uchun mebel to‘plamlari": [],
                "Vannaxona uchun shkaflar": [],
                "Vannaxona uchun penallar": []
            },

            "Yumshoq mebel": {
                "Pufiklar va banketkalar": [],
                "Divanlar": [],
                "Karkassiz divanlar": [],
                "Kreslolar": [],
                "Yumshoq mebel to‘plamlari": []
            }

        }

    },

    {
        id: 2,
        name: "Turizm, baliq ovi va ovchilik",
        icon: "./assets/icons/category/bonfire.png",
        slug: "tourism",

        items: {

            "Chodirlar, tentlar va шатyorlar": {
                "Chodirlar": [],
                "Tentlar va chodirlar": [],
                "Aksessuarlar chodirlar va tentlar uchun": []
            },

            "Turizm va ochiq havoda dam olish": {
                "Fonarlar va aksessuarlar": [],
                "Turizm va dam olish uchun aksessuarlar": [],
                "Sayohat uchun ryukzaklar va sumkalar": [],
                "Katlanadigan sayyohlik stullari": [],
                "Sayohat uchun idishlar": [],
                "Sayyohlik stollari va mebel to‘plamlari": [],
                "Metall izlagichlar va aksessuarlar": [],
                "Uyqu qoplari": [],
                "Turistik gilamchalar": [],
                "Nasoslar": [],
                "Orientatsiya uchun yordamchi vositalar": [],
                "Taktik kostyumlar": [],
                "Osma qozonchalar": []
            },

            "Baliq ovi": {
                "G‘altaklar baliq ovlash uchun": [],
                "Baliq ovlash asboblari va aksessuarlari": [],
                "Baliq ovi uchun primankalar va o‘ljalar": [],
                "Qayiqlar va aksessuarlar": [],
                "Ozuqalar va nasadkalar": [],
                "Leskalar va simlar": [],
                "Ilgaklar, bog‘ichlar va gruzilalar": [],
                "Exolotlar va navigatsiya": []
            },

            "Ov va otish mashg‘ulotlari": {
                "Cho‘zmarlar": [],
                "Optika va diqqatga sazovor joylar": [],
                "Sport otish mashqlari": [],
                "Trofeqlar uchun bezaklar": []
            }

        }

    },

    {
        id: 3,
        name: "Elektronika",
        icon: "./assets/icons/category/headphones.png",
        slug: "electronics",

        items: {

            "Smartfonlar va telefonlar": {
                "Smartfonlar uchun aksessuarlar": [],
                "Knopkali telefonlar": [],
                "Smartfonlar": [],
                "Ehtiyot qismlar va ta’mirlash": [],
                "Statsionar telefonlar": []
            },

            "Kompyuter texnikasi": {
                "Kompyuter aksessuarlari": [],
                "Kompyuter texnikalari uchun butlovchi qismlar": [],
                "Kompyuterning tashqi qurilmalari": [],
                "Ma'lumotlarni saqlash": [],
                "Kompyuterlar": [],
                "Dasturiy ta'minot": [],
                "Don mahsulotlari": [],
                "Yog'lar": [],
                "Tish gigiyenasi": []
            },

            "Geymerlar uchun mahsulotlar": {
                "O‘yin pristavkalari": [],
                "O‘yin sichqonchalari": [],
                "O‘yin klaviaturalari": [],
                "O‘yin uchun quloqchinlar": [],
                "O‘yinlar": [],
                "O‘yin gilamchalari": [],
                "O‘yin monitorlari": [],
                "O‘yin noutbuklari": [],
                "O‘yin g‘ildiraklari va pedallari": [],
                "VR garnituralar": []
            },

            "Noutbuklar, planshetlar va elektron kitoblar": {
                "Noutbuklar": [],
                "Planshetlar va elektron kitoblar": [],
                "Noutbuk uchun aksessuarlar": []
            },

            "Quloqchinlar va audio texnikalar": {
                "Quloqchinlar": [],
                "Audiotexnika": [],
                "Proigrivatel uchun aksessuarlar": [],
                "Periferiya va aksessuarlar": []
            },

            "Ofis texnikasi": {
                "Ofis jihozlari uchun butlovchi qismlar": [],
                "Ofis jihozlari": [],
                "Aksessuarlar va ofis jihozlari parvarishi": []
            },

            "Elektronika uchun aksessuarlar": {
                "USB hablar": [],
                "Akkumulyatorlar uchun zaryadlovchi qurilmalar": [],
                "Tarmoq filtrlar": [],
                "Konnektorlar": [],
                "Kabel himoyasi": [],
                "Uzaytirgichlar": [],
                "Akkumulyator batareyalar": [],
                "Kabellar uchun tutqichlar": [],
                "Tarmoqlagichlar": [],
                "Elektr tarmoqlagichlar": [],
                "Kabellar uchun organayzerlar": [],
                "Dok-stansiyalar": [],
                "Quyosh panellari va batareyalari": [],
                "Kuchlanishni o‘zgartirgichlar": [],
                "Simlar uchun qutilar": []
            },

            "Televizorlar va videoteknikalar": {
                "Kabellar va adapterlar": [],
                "Televizorlar": [],
                "Tyuner va resiverlar": [],
                "Televizor aksessuarlari": [],
                "Televizor uchun stend va kronshteynlar": [],
                "TV pristavkalar va media pleerlar": [],
                "Proyektorlar va aksessuarlar": [],
                "Raqamli va sun’iy yo‘ldosh TV": [],
                "Ichki joylashadigan televizorlar": []
            },

            "Aqlli soatlar va fitness bilaguzuklar": {
                "Aqlli soatlar": [],
                "Qayishlar": [],
                "Fitness bilaguzuklar": [],
                "Kabellar va zaryadlovchi qurilmalar": [],
                "Aqlli gadjetlar": [],
                "Soatlar uchun aksessuarlar": []
            },

            "Foto va video texnika": {
                "Fotosuratchilar uchun uskunalar": [],
                "Foto va video kameralar": [],
                "Kameralar uchun aksessuarlar": []
            },

            "Soatlar va elektron budilniklar": {
                "Elektron budilniklar": [],
                "Proyeksiya soatlari": [],
                "Radio budilniklar": [],
                "Aroma budilniklar": []
            },

            "Kvadrakopterlar va aksessuarlar": {
                "Kvadrakopterlar uchun aksessuarlar": [],
                "Kvadrakopterlar": []
            },

            "Navigatsiya": {
                "GPS-trekerlar va GPS-mayoklar": [],
                "Sayyohlik navigatorlari": [],
                "Avtomobil navigatorlari": [],
                "Elektron kompaslar": [],
                "Navigatorlar uchun aksessuarlar": []
            }

        }

    },

    {
        id: 4,
        name: "Maishiy texnika",
        icon: "./assets/icons/category/blender.png",
        slug: "home-appliances",

        items: {

            "Katta maishiy texnika": {
                "Suv uchun kulerlar va aksessuarlar": [],
                "Oshxona dudburonlari": [],
                "Qaynatish panellari": [],
                "Katta maishiy texnika uchun aksessuarlar": [],
                "Sovutgichlar va muzlatgichlar": [],
                "Kir yuvish mashinalari": [],
                "Pechlar": [],
                "Pechkalar": [],
                "Idish yuvish mashinalar": [],
                "Quritkich mashinasi": [],
                "Tozalash vositalari": [],
                "Idishlar": []
            },

            "Go‘zallik uchun texnika": {
                "Soch turmaklash": [],
                "Soch kesish": [],
                "Elektr ustara": [],
                "Apparati kosmetologiya": [],
                "Epilyatorlar va aksessuarlar": [],
                "Yerda turadigan tarozilar": [],
                "Mini solariya": []
            },

            "Uy uchun texnika": {
                "Changyutgichlar va aksessuarlar": [],
                "Dazmollar va bug‘lagichlar": [],
                "Tikuv mashinalari va aksessuarlar": [],
                "Sterilizatorlar": [],
                "Namlab tozalash apparatlari": [],
                "Qo‘l uchun quritgichlar": []
            },

            "Iqlim texnikasi": {
                "Ventilyatorlar": [],
                "Havoni tozalash va namlantirish": [],
                "Isitgichlar": [],
                "Konditsionerlar va split tizimlar": [],
                "Suv isitkichlari va isitish qozonlari": [],
                "Havo sovutgichlari": [],
                "Datchiklar": [],
                "Ob-havo stansiyalari": []
            },

            "Oshxona texnikalari": {
                "Maydalash va aralashtirish": [],
                "Qovurish va pishirish uskunalari": [],
                "Elektr choynaklar va termopotlar": [],
                "Boshqa oshxona texnikalari": [],
                "Kofe tayyorlash": [],
                "Sharbat chiqargichlar": [],
                "Mikroto‘lqinli pechlar va aksessuarlar": []
            },

            "Maishiy texnika uchun boshqa aksessuarlar va ehtiyot qismlar": {
                "Aksessuarlar": [],
                "Ehtiyot qismlar": []
            }

        }
    },

    {
        id: 5,
        name: "Kiyim",
        icon: "./assets/icons/category/t-shirt.png",
        slug: "clothes",

        items: {

            "Ayollar kiyimi": {
                "Ichki kiyim": [],
                "Liboslar va sarafanlar": [],
                "Futbolkalar va polo": [],
                "Paypoqlar, kolgotkalar va chulkilar": [],
                "Shimlar": [],
                "Kiyim to‘plamlari": [],
                "Jemperlar, sviterlar va kardiganlar": [],
                "Bluzkalar va ko‘ylaklar": [],
                "Uy kiyimi": [],
                "Jinsilar": [],
                "Sport kiyimlari": [],
                "Diniy kiyim": [],
                "Cho‘milish va plyaj kiyimlari": [],
                "Yubkalar": [],
                "Top va maykalar": [],
                "Xudi va svitshotlar": [],
                "Tunikalar": [],
                "Ustki kiyim": [],
                "Pidjaklar va kostyumlar": [],
                "Shortilar": [],
                "Homiladorlar uchun kiyimlar": [],
                "Kombinezonlar": [],
                "Bodi": [],
                "To‘qilgan kostyumlar": [],
                "Milliy kiyimlar": [],
                "Karnaval uchun kiyimlar": [],
                "Tog‘ chang‘i sport kiyimlari": [],
                "Katta o‘lchamli kiyimlar": [],
                "Maxsus kiyimlar": [],
                "Dezodorantlar": [],
                "Kremlar": [],
                "Yuz parvarishi": [],
                "Shampunlar": [],
                "Tagliklar": []
            },

            "Erkaklar kiyimi": {
                "Futbolkalar va polo": [],
                "Paypoqlar va getrlar": [],
                "Shimlar": [],
                "Xudi va svitshotlar": [],
                "Jemperlar, sviterlar va kardiganlar": [],
                "Ko‘ylaklar": [],
                "Jinsilar": [],
                "Sport kiyimlari": [],
                "Ustki kiyim": [],
                "Kiyim to‘plamlari": [],
                "Ichki kiyimlar": [],
                "Shortilar": [],
                "Maxsus kiyimlar": [],
                "Cho‘milish plavkalari va shortilar": [],
                "Maykalar": [],
                "Uy kiyimi": [],
                "Katta o‘lchamli kiyimlar": [],
                "Termal ichki kiyimlar": [],
                "Pidjaklar va kostyumlar": [],
                "Erkaklar uchun diniy kiyim": [],
                "Karnaval uchun kiyimlar": [],
                "Tog‘ chang‘i sport kiyimlari": [],
                "Milliy kiyimlar": []
            },

            "O‘g‘il bolalar uchun kiyimlar": {
                "Kiyim to‘plamlari": [],
                "Futbolkalar va maykalar": [],
                "Kostyumlar va pidjaklar": [],
                "Sport kiyimlari": [],
                "Shimlar va jinsilar": [],
                "Tolstovka va olimpiyakalar": [],
                "Paypoqlar": [],
                "Shortilar": [],
                "Ko‘ylaklar": [],
                "Ichki kiyim va termal ichki kiyim": [],
                "Uy kiyimi": [],
                "Jemperlar, sviterlar va kardiganlar": [],
                "Ustki kiyim": [],
                "Cho‘milish plavkalari va shortilar": [],
                "O‘g‘il bolalar uchun maktab formasi": [],
                "Kombinezonlar va yarim kombinezonlar": [],
                "Karnaval uchun kiyimlar": [],
                "O‘g‘il bolalar uchun diniy kiyim": []
            },

            "Yangi tug‘ilgan chaqaloqlar uchun kiyimlar": {
                "Bodi va kombinezonlar": [],
                "Kostyumlar va to‘plamlar": [],
                "Paypoqlar, poynaklar": [],
                "Shimlar va ishtonlar": [],
                "Qalpoqchalar": [],
                "Futbolkalar, ko‘ylaklar": [],
                "Jemperlar va tolstovkalar": [],
                "Ustki kiyim": [],
                "Ko‘ylaklar va yubkalar": [],
                "Ichki kiyim": []
            },

            "Qizlar uchun kiyimlar": {
                "Ko‘ylaklar va sarafanlar": [],
                "Kiyim to‘plamlari": [],
                "Futbolkalar va polo": [],
                "Paypoq va kolgotkilar": [],
                "Top va maykalar": [],
                "Shimlar va jinsilar": [],
                "Kostyumlar va pidjaklar": [],
                "Sport kiyimlari": [],
                "Yubkalar va shortilar": [],
                "Ichki kiyim va termal ichki kiyim": [],
                "Jemperlar, sviterlar va kardiganlar": [],
                "Tolstovka va olimpiyakalar": [],
                "Uy kiyimi": [],
                "Qizlar uchun maktab formasi": [],
                "Bluzkalar va ko‘ylaklar": [],
                "Ustki kiyim": [],
                "Kombinezonlar va yarim kombinezonlar": [],
                "Karnaval uchun kiyimlar": [],
                "Qizlar uchun diniy kiyim": [],
                "Cho‘milish kiyimlari va plavkalar": []
            }

        }
    },

    {
        id: 6,
        name: "Poyabzallar",
        icon: "./assets/icons/category/shoes.png",
        slug: "shoes",

        items: {

            "Erkaklar poyabzali": {
                "Krossovkalar": [],
                "Mokasinlar": [],
                "Shlepanslar va slanslar": [],
                "Kedalar": [],
                "Tufli va loferlar": [],
                "Sliponlar": [],
                "Botinkalar": [],
                "Uy shippaklari": [],
                "Sandallar": [],
                "Sabo": [],
                "Funktsional poyabzal": [],
                "Espadrillar": [],
                "Topsayderlar": [],
                "Etiklar va uggi": [],
                "Trekking botinkalari": [],
                "Akva poyabzal": [],
                "Rezinali etiklar va kalishlar": []
            },

            "Ayollar poyabzali": {
                "Krossovkalar": [],
                "Tufli": [],
                "Shlepanslar va slanslar": [],
                "Mokasinlar": [],
                "Uy shippaklari": [],
                "Kedalar": [],
                "Bosonojkalar": [],
                "Loferlar": [],
                "Baletkalar": [],
                "Sandallar": [],
                "Sliponlar": [],
                "Botinkalar": [],
                "Sabo": [],
                "Myuli": [],
                "Etiklar va uggi": [],
                "Botilyonlar": [],
                "Espadrillar": [],
                "Topsayderlar": [],
                "Akva poyabzal": [],
                "Funktsional poyabzal": [],
                "Trekking botinkalari": [],
                "Rezinali etiklar va kalishlar": []
            },

            "O‘g‘il bolalar uchun poyabzal": {
                "Krossovkalar va kedalar": [],
                "Tuflilar va cheshkalar": [],
                "Sandallar va сабо": [],
                "Botinkalar va qo‘njisiz botinkalar": [],
                "Rezin poyabzal": [],
                "Uyda kiyish uchun poyabzal": [],
                "Shlepanslar va slanslar": [],
                "Etiklar va uggi": [],
                "Mokasinlar va sliponlar": []
            },

            "Qizlar uchun poyabzal": {
                "Krossovkalar va kedalar": [],
                "Tuflilar va cheshkalar": [],
                "Bosonojkalar": [],
                "Sandallar va sabo": [],
                "Mokasinlar va sliponlar": [],
                "Uyda kiyish uchun poyabzal": [],
                "Baletkalar": [],
                "Etiklar va uggi": [],
                "Rezin poyabzal": [],
                "Botinkalar va qo‘njisiz botinkalar": [],
                "Shlepanslar va slanslar": []
            },

            "Poyabzal aksessuarlari": {
                "Oyoq kiyim uchun pataklar va qo‘yilmalar": [],
                "Bog‘ichlar": [],
                "Jibbitslar": [],
                "G‘iloflar": [],
                "Poyabzal qoshiqalari": [],
                "Muzda yurish uchun oyoq kiyim tagliklari": [],
                "Oyoq o‘lchagichlar": [],
                "Baxillar": [],
                "Oyoq kiyimlarini bezash": []
            }

        }
    },

    {
        id: 7,
        name: "Aksessuarlar",
        icon: "./assets/icons/category/accessories.png",
        slug: "accessories",

        items: {

            "Ayollar aksessuarlari": {
                "Bijuteriyalar": [],
                "Sumkalar va ryukzaklar": [],
                "Soch uchun aksessuarlar": [],
                "Ko‘zoynak": [],
                "Ro‘mollar va sharflar": [],
                "Soatlar va qayishlar": [],
                "Hamyonlar, kalit solgichlar va tashrif qog‘ozlar": [],
                "Bosh kiyimlar": [],
                "Soyabon va yelpig‘ich": [],
                "Zargarlik buyumlari": [],
                "Kamarlar, belbog‘lar va portupeylar": [],
                "Klatchlar va kosmetika sumkalar": [],
                "Qo‘lqoplar va varejkalar": [],
                "To‘y aksessuarlari": []
            },

            "Erkaklar aksessuarlari": {
                "Ko‘zoynak": [],
                "Soatlar va qayishlar": [],
                "Sumkalar va ryukzaklar": [],
                "Bijuteriyalar": [],
                "Bosh kiyimlar": [],
                "Hamyonlar, kalit solgichlar va tashrif qog‘ozlar": [],
                "Qayishlar va osma kamarlar": [],
                "Soyabonlar": [],
                "Zargarlik buyumlari": [],
                "Bo‘yinbog‘lar, kapalakchalar, ro‘molchalar": [],
                "Ro‘molchalar va sharflar": [],
                "Portmone va kosmetika sumkalar": [],
                "Qo‘lqoplar va varejkalar": []
            },

            "Qizlar uchun aksessuarlar": {
                "Soch uchun aksessuarlar": [],
                "Bijuteriyalar": [],
                "Sumkalar va ryukzaklar": [],
                "Bosh kiyimlar": [],
                "Ko‘zoynak": [],
                "Soyabonlar": [],
                "Qizlar uchun hamyonlar": [],
                "Kamarlar va belbog‘lar": [],
                "Chamadonlar": [],
                "Sharflar va ro‘mollar": [],
                "Qo‘lqoplar va varejkalar": [],
                "Dastro‘mollar": []
            },

            "O‘g‘il bolalar uchun aksessuarlar": {
                "Sumkalar va ryukzaklar": [],
                "Bijuteriyalar": [],
                "Bosh kiyimlar": [],
                "Ko‘zoynaklar": [],
                "Soyabonlar": [],
                "Qayishlar va osma kamarlar": [],
                "O‘g‘il bolalar uchun hamyonlar": [],
                "Chamadonlar": [],
                "Bo‘yinbog‘lar va kapalakchalar": [],
                "Sharflar va ro‘mollar": [],
                "Qo‘lqoplar va varejkalar": []
            },

            "Sayohat uchun aksessuarlar": {
                "Yo‘l sumkalari": [],
                "Uyqu uchun tovarlar": [],
                "Chamadonlar": [],
                "Sayohat uchun organayzerlar": [],
                "Sayohat uchun to‘plamlar": [],
                "Chamadonlar uchun aksessuarlar": []
            },

            "Diniy aksessuarlar": {
                "Joynamozlar": [],
                "Tasbehlar": [],
                "Hijob va turbalar": [],
                "Diniy to‘plamlar": [],
                "Do‘ppilar": [],
                "Kulonlar va marjonlar": []
            },

            "Tog‘ chang‘i sport aksessuarlari": {
                "Balaklavalar": [],
                "Qo‘lqoplar va varejkalar": [],
                "Qalpoqlar": [],
                "Snudlar": []
            }

        }
    },

    {
        id: 8,
        name: "Oziq-ovqat mahsulotlari",
        icon: "./assets/icons/category/grocery.png",
        slug: "food",

        items: {

            "Choy, qahva va kakao": {
                "Qora choy": [],
                "Ko‘k choy": [],
                "Qo‘shimchalar qo‘shilgan choy": [],
                "Eriyadigan qahva": [],
                "Donli qahva": [],
                "Giyohli choylar": [],
                "Maydalangan qahva": [],
                "Kapsulalardagi qahva": [],
                "Kakao va issiq shokolad": [],
                "Choy to‘plamlari": [],
                "Qahvali va sutli ichimliklar": [],
                "Sikoriya": [],
                "Chaga": []
            },

            "Konservalar": {
                "Konservalangan sabzavotlar": [],
                "Konservalangan baliqlar": [],
                "Konservalangan go‘sht": [],
                "Sabzavotli ikra va gazaklar": [],
                "Konservalangan mevalar": [],
                "Konservalangan ovqatlar": [],
                "Konservalangan qo‘ziqorinlar": []
            },

            "Un, shakar va tuz": {
                "Un": [],
                "Tuz": [],
                "Shakar": []
            },

            "Asal, murabbo, shirin konservalar": {
                "Sirop va toppinglar": [],
                "Asal va asalarichilik mahsulotlari": [],
                "Quyultirilgan sut": [],
                "Murabbo, jemlar va rezavorlar": []
            },

            "Yog‘lar, souslar va ziravorlar": {
                "Souslar": [],
                "Ziravorlar": [],
                "Yog‘lar": []
            },

            "Makaronlar, yormalar va quruq nonushtalar": {
                "Makaronlar": [],
                "Yormalar va dukkaklilar": [],
                "Quruq nonushta": [],
                "Tez tayyorlanadigan mahsulotlar": []
            },

            "Sneklar, yong‘oqlar va pistalar": {
                "Chips va popkorn": [],
                "Suxariklar va krekerlar": [],
                "Quruq mevalar va sabzavotlar": [],
                "Mevali chipslar": [],
                "Yong‘oqlar": [],
                "Pistalar": [],
                "Krekerlar": [],
                "Qurt": []
            },

            "Pishirish va shirinliklar": {
                "Konfetlar": [],
                "Pechenye": [],
                "Zefir, pastila, marmelad": [],
                "Pryaniklar va vaflilar": [],
                "Saqichlar": [],
                "Batonchalar": [],
                "Sharq shirinliklari": [],
                "Shokolad": [],
                "Qutili konfetlar": [],
                "Shokoladli pasta": [],
                "Tortlar, ruletlar, kekslar": [],
                "Shokoladli tuxumlar": [],
                "Kraft shokoladlar": []
            },

            "Suv va ichimliklar": {
                "Sharbatlar va smuzilar": [],
                "Gazlangan ichimliklar": [],
                "Energetik ichimliklar": [],
                "Suv": [],
                "Kvas va kombucha": [],
                "Mors va kompotlar": [],
                "Alkogolsiz vinolar": []
            },

            "Sut va sut mahsulotlari": {
                "Sut": [],
                "Sutli kokteyllar": []
            }

        }
    },

    {
        id: 9,
        name: "Uy-ro‘zg‘or buyumlari",
        icon: "./assets/icons/category/home.png",
        slug: "home-goods",

        items: {

            "Oshxona buyumlari": {
                "Oshxona anjomlari": [],
                "Oziq-ovqat mahsulotlarini saqlash": [],
                "Ovqat pishirish uchun idishlar": [],
                "Oshxonada tartib": [],
                "Krujkalar, stakanlar va bokallar": [],
                "Termoslar va termo krujkalar": [],
                "Tamadixonа idishlari": [],
                "Maydalagichlar va sharbat chiqargichlar": [],
                "Choynaklar va qahva idishlari": [],
                "Pazandachilik aksessuarlari": [],
                "Oshxona aksessuarlari": [],
                "Bir martalik ishlatiladigan idishlar": [],
                "Ovqat pishirish uchun shakllar": [],
                "Suv uchun filtrlar": [],
                "Ichimlik uchun aksessuarlar": [],
                "Vino aksessuarlari": [],
                "Konservalash uchun tovarlar": [],
                "Spirtli ichimliklar tayyorlash": []
            },

            "Buyumlarni saqlash": {
                "Organayzerlar va ajratuvchilar": [],
                "Qutilar, savatlar, konteynerlar": [],
                "Vakuumli paketlar va paket qadoqlagichlar": [],
                "Kiyim uchun qoplamalar": [],
                "Kirlar uchun baklar": [],
                "Poyabzallar uchun qoplamalar": [],
                "Soyabonlar stendlari": []
            },

            "Hammom va sauna uchun tovarlar": {
                "Hammom uchun to‘qimachilik buyumlari": [],
                "Hammom uchun interyer buyumlari": [],
                "Tokchalar va skameykalar": [],
                "Chelaklar va kadkalar": [],
                "Kovshlar va cherpaklar": [],
                "Bug‘lamalar va xushbo‘y moddalar": [],
                "Hammom uchun veniklar": [],
                "Tuz va hammom toshlari": [],
                "Yog‘och chelaklar": []
            },

            "To‘qimachilik": {
                "Choyshablar": [],
                "Sochiqlar": [],
                "Oshxona uchun tekstil mahsulotlari": [],
                "Yostiqlar": [],
                "Gilamlar va yo‘lak gilamlari": [],
                "Ko‘rpa va qoplamalar": [],
                "Adyollar": [],
                "Pardalar va karnizlar": [],
                "Matras qoplamalari va g‘iloflar": [],
                "Elektr bilan isitiladigan to‘qimachilik": []
            },

            "Dekor va interyer": {
                "Suvenirlar va sovg‘alar": [],
                "Shamlar va shamdonlar": [],
                "Uy uchun iforlar": [],
                "Sun’iy gullar": [],
                "Rasmlar va panno": [],
                "Interyerni bezatish": [],
                "Soatlar va ob-havo stansiyalari": [],
                "Guldonlar": [],
                "Tutqichlar, tagliklar va patnislar": [],
                "G‘aladonlar": [],
                "Foto ramkalar va foto albomlar": [],
                "Tablichkalar, raqamlar va ilgaklar": [],
                "Termometrlar va barometrlar": [],
                "Ko‘zgular": [],
                "Dafn marosimi uchun tovarlar": [],
                "Sanamlar": []
            },

            "Xo‘jalik buyumlari": {
                "Tozalash ishlari uchun inventarlar": [],
                "Vanna uchun aksessuarlar": [],
                "Kiyim va poyabzallar parvarishi": [],
                "Axlat qutilari va baklari": [],
                "Qadoqlash va tashish": [],
                "Qo‘l tarozilari va pallali tarozilar": [],
                "Xo‘jalik sumkalari": [],
                "Sumka-aravachalar": []
            },

            "Bayramlar uchun tovarlar": {
                "Sovg‘a o‘ramlari va otkritkalar": [],
                "Bayramni bezatish": [],
                "Yangi yil tovarlari": [],
                "Karnaval buyumlari": [],
                "Feyerverklar va salyutlar": [],
                "Mukofotlar, kuboklar va tasmalari": [],
                "To‘y uchun tovarlar": [],
                "Sovg‘a sertifikatlari va vaucherlar": [],
                "Pasxa uchun tovarlar": []
            }

        }
    },

    {
        id: 9,
        name: "Maishiy kimyoviy moddalar",
        icon: "./assets/icons/category/cleaning.png",
        slug: "household-chemicals",

        items: {

            "Tozalash va yuvish vositalari": {
                "Vanna va hojatxona uchun vositalar": [],
                "Idish yuvish vositalari": [],
                "Universal tozalash vositasi": [],
                "Oshxona uchun vositalar": [],
                "Mebel va polni parvarishlash vositalari": [],
                "Tiqilib qolishga qarshi vositalar": [],
                "Oynalarni tozalash vositalari": [],
                "Maxsus tozalash vositalari": []
            },

            "Poyabzallarni parvarish qilish vositalari": {
                "Poyabzal uchun kremlar va vosklar": [],
                "Poyabzal uchun bo‘yoq": [],
                "Poyabzal uchun cho‘tkalar va gubkalar": [],
                "Poyabzal uchun ko‘pik tozalash vositalari": [],
                "Poyabzal uchun dezodorantlar": [],
                "Suv, tuz va reagentlardan himoya": [],
                "Rang yorqinligini kuchaytirgichlar": []
            },

            "Yuvish uchun vositalar": {
                "Kir yuvish kukunlari": [],
                "Kir yuvish uchun gel va suyuqliklar": [],
                " Oqartirgichlar va dog‘ ketkazgichlar": [],
                "Konditsionerlar va chayish vositalari": [],
                "Kir yuvish kapsulalari": [],
                "Xo‘jalik sovuni": []
            },

            "Havoni musaffolashtirgichlar va neytralizatorlar": {
                "Havo tozalagichlar": [],
                "Uy uchun xushbo‘ylashtirgichlar": [],
                "Hidlarni neytrallash vositalari": []
            },

            "Idish yuvish mashinalari uchun vositalar": {
                "IYuM uchun tabletkalar va kapsulalar": [],
                "IYuM uchun chayish vositalari": [],
                "IYuM uchun kukunlar": [],
                "IYuM uchun gellar va suyuqliklar": []
            },

            "Qog‘oz mahsulotlari": {
                "Tualet qog‘ozi": [],
                "Salfetkalar": [],
                "Qog‘oz sochiqlar": []
            },

            "Hasharotlar va kemiruvchilarga qarshi vositalar": {
                "Ratisidlar": [],
                "Repellentlar": [],
                "Insektitsidlar": [],
                "Hasharotlarga qarshi himoya": []
            },

            "Maishiy texnika parvarishi uchun vositalar": {
                "Katta maishiy texnika uchun": [],
                "Kichik maishiy texnika uchun": [],
                "Maishiy elektronika uchun": []
            }

        }
    },

    {
        id: 10,
        name: "Go‘zallik va parvarish",
        icon: "./assets/icons/category/beauty.png",
        slug: "beauty",

        items: {

            "Makiyaj": {
                "Ko‘zlar": [],
                "Yuz": [],
                "Lablar": [],
                "Makiyaj uchun aksessuarlar": [],
                "Qoshlar": [],
                "Makiyaj to‘plamlari": [],
                "Vaqtinchalik tatuirovkalar va mehendi": []
            },

            "Sochlar parvarishi": {
                "Tozalash va parvarish uchun vositalar": [],
                "Soch parvarishi uchun aksessuarlar": [],
                "Bo‘yash va kimyoviy jingalak qilish": [],
                "Turmaklash uchun vositalar": [],
                "Pariklar va shinyonlar": [],
                "Sartarosh uchun professional asboblar": [],
                "Sochlar uchun kosmetika to‘plamlari": []
            },

            "Tana parvarishi": {
                "Namlashtirish va oziqlantirish": [],
                "Quyoshda toblanish va quyoshdan himoya": [],
                "Ayollar dezodorantlari va antiperspirantlar": [],
                "Dush va vanna uchun vositalar": [],
                "Tana parvarishi uchun aksessuarlar": [],
                "Tana parvarishi uchun kosmetika to‘plamlari": [],
                "Sellyulitga va cho‘zilishga qarshi vositalar": []
            },

            "Yuz parvarishi": {
                "Niqoblar": [],
                "Namlashtirish va oziqlantirish": [],
                "Tozalash va yuvish": [],
                "Muammoli terilar uchun mahsulotlar": [],
                "Yuz uchun to‘plamlar": [],
                "Skrab va piling": [],
                "Patchalar": [],
                "Kosmetologik teyp va bandajlar": []
            },

            "Erkaklar uchun": {
                "Soqol olish uchun": [],
                "Erkaklar parfyumlari": [],
                "Tana parvarishi": [],
                "Soch uchun": [],
                "Erkaklar uchun to‘plamlar": [],
                "Soqol va mo‘ylovlar uchun": [],
                "Yuz parvarishi": []
            },

            "Koreya kosmetikasi": {
                "Makiyaj": [],
                "Yuz parvarishi": [],
                "Yuz terisini tozalash": [],
                "Koreya kosmetika to‘plamlari": [],
                "Tana parvarishi": [],
                "Sochlar parvarishi": []
            },

            "Shaxsiy gigiyena": {
                "Og‘iz bo‘shlig‘i gigiyenasi": [],
                "Sovun": [],
                "Paxta mahsulotlari": [],
                "Intim gigiyena": [],
                "Depilyatsiya va epilyatsiya": [],
                "Soqol olish uchun tovarlar": [],
                "Quloq va burunni tozalash asboblari": [],
                "Oyoq uchun dezodorantlar va spreylar": []
            },

            "Parfyumeriya": {
                "Parfyumlangan suv": [],
                "Atirlar": [],
                "Xushbo‘ylangan suv": [],
                "Miniatyuralar va tiqinlar": [],
                "Parfyumeriya to‘plami": [],
                "Yog‘li atirlar": [],
                "Atomayzerlar va parfyum shishalari": [],
                "Quruq atirlar": [],
                "Odekolonlar": []
            },

            "Manikyur va pedikyur": {
                "Manikyur anjomlari": [],
                "Gel-laklar": [],
                "Tirnoqlar dizayni": [],
                "Manikyur va pedikyur to‘plamlari": []
            },

            "Professional kosmetika": {
                "Yuz parvarishi": [],
                "Tana parvarishi": [],
                "Sochlar parvarishi": [],
                "Makiyaj": [],
                "Erkaklar uchun": []
            },

            "Dermakosmetika": {
                "Quyoshdan himoya qiluvchi vositalar": [],
                "Sochlar parvarishi": [],
                "Yuz parvarishi": [],
                "Tana parvarishi": []
            },

            "Tatuirovka saloni uchun uskunalar va materiallar": {
                "Tatuirovka to‘plamlari": [],
                "Pirsing uchun uskunalar": [],
                "Tatuirovka mashinalari va aksessuarlari": [],
                "Tatuirovka parvarishi": [],
                "Kartrijlar": []
            },

            "Go‘zallik salonlari uchun mebel va jihozlar": {
                "Manikyur va pedikyur kabinetlari uchun": [],
                "Sartaroshlar uchun": [],
                "Kipriklarni professional o‘stirish uchun": [],
                "Vizajistlar uchun": []
            },

            "Manikyur va pedikyur": {
                "Manikyur anjomlari": [],
                "Gel-laklar": [],
                "Tirnoqlar dizayni": [],
                "Manikyur va pedikyur to‘plamlari": [],
                "Laklar": [],
                "Manikyur uchun lampalar va chiroqlar": [],
                "Davolovchi va parvarishlovchi tovarlar": [],
                "Bazalar va toplar": [],
                "Tirnoq yopishtirish uchun materiallar": [],
                "Tirnoq bo‘yog‘ini tozalash vositalari": [],
                "Tirnoqlar uchun xina": [],
                "Praymerlar va yog‘larni yo‘qotuvchi moddalar": [],
                "Lak uchun razbavitel": []
            },

            "Aromaterapiya": {
                "Efir moylari": [],
                "Xushbo‘y shamlar": [],
                "Aroma yostiqlar": [],
                "Xushbo‘y lampalar": [],
                "Aromasashe": []
            }
        }
    }
]
