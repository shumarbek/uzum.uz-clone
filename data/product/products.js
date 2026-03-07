const products = [

    {
        id: 1,
        name: "Tozalash vositasi Domestos 1250 ml",
        image: "./data/product/images/product-1.png",

        category: "household-chemicals",
        subcategory: "Tozalash vositalari",

        orginal: true,
        isCheapest: true,
        isNew: false,

        byCard: 44150,
        price: 47990,
        credit: 3399,

        rating: 4.9,
        comments: 745,
        deliveryTime: "Ertaga"
    },

    {
        id: 2,
        name: "Tova Kukmara yopishmaydigan qoplama 24/26sm",
        image: "./data/product/images/product-2.png",

        category: "home-goods",
        subcategory: "Ovqat pishirish uchun idishlar",

        orginal: true,
        isCheapest: false,
        isNew: false,

        byCard: 318660,
        price: 339000,
        credit: 24012,

        rating: 4.9,
        comments: 1352,
        deliveryTime: "Ertaga"
    },

    {
        id: 3,
        name: "NIVEA MEN dezodorant 150ml",
        image: "./data/product/images/product-3.png",

        category: "beauty",
        subcategory: "Dezodorantlar",

        orginal: true,
        isCheapest: true,
        isNew: false,

        byCard: 34910,
        price: 35990,
        credit: 2549,

        rating: 4.9,
        comments: 821,
        deliveryTime: "Ertaga"
    },

    {
        id: 4,
        name: "Guruch UzRice 950gr",
        image: "./data/product/images/product-4.png",

        category: "food",
        subcategory: "Yormalar va dukkaklilar",

        orginal: false,
        isCheapest: true,
        isNew: false,

        byCard: 18590,
        price: 19990,
        credit: 1415,

        rating: 5.0,
        comments: 1204,
        deliveryTime: "Ertaga"
    },

    {
        id: 5,
        name: "Kungaboqar yog'i Ideal 1L",
        image: "./data/product/images/product-5.png",

        category: "food",
        subcategory: "Yog‘lar",

        orginal: false,
        isCheapest: false,
        isNew: false,

        byCard: 30409,
        price: 31350,
        credit: 2220,

        rating: 5.0,
        comments: 302,
        deliveryTime: "Ertaga"
    },

    {
        id: 6,
        name: "NIVEA Soft universal krem 100ml",
        image: "./data/product/images/product-6.png",

        category: "beauty",
        subcategory: "Kremlar",

        orginal: true,
        isCheapest: false,
        isNew: false,

        byCard: 34191,
        price: 37990,
        credit: 2609,

        rating: 4.9,
        comments: 2050,
        deliveryTime: "Ertaga"
    },

    {
        id: 7,
        name: "Tagliklar Huggies Elite Soft 25 dona",
        image: "./data/product/images/product-7.png",

        category: "clothes",
        subcategory: "Tagliklar",

        orginal: true,
        isCheapest: false,
        isNew: false,

        byCard: 57321,
        price: 57900,
        credit: 4101,

        rating: 4.9,
        comments: 1167,
        deliveryTime: "Ertaga"
    },

    {
        id: 8,
        name: "Tish cho'tkasi Colgate Klassik 2+1",
        image: "./data/product/images/product-8.png",

        category: "home-goods",
        subcategory: "Kiyim va poyabzallar parvarishi",

        orginal: true,
        isCheapest: false,
        isNew: false,

        byCard: 13736,
        price: 14770,
        credit: 1046,

        rating: 4.9,
        comments: 2844,
        deliveryTime: "Ertaga"
    },

    {
        id: 9,
        name: "Garnier misellyar suv 400ml",
        image: "./data/product/images/product-9.png",

        category: "beauty",
        subcategory: "Yuz parvarishi",

        orginal: true,
        isCheapest: false,
        isNew: false,

        byCard: 42770,
        price: 45990,
        credit: 3257,

        rating: 4.9,
        comments: 2355,
        deliveryTime: "Ertaga"
    },

    {
        id: 10,
        name: "Garnier Fructis SOS shampun 400ml",
        image: "./data/product/images/product-10.png",

        category: "beauty",
        subcategory: "Shampunlar",

        orginal: true,
        isCheapest: true,
        isNew: false,

        byCard: 50430,
        price: 51990,
        credit: 3682,

        rating: 4.9,
        comments: 1010,
        deliveryTime: "Ertaga"
    },

    {
        id: 11,
        name: "Namoz o‘qish uchun qulay stul Muallim",
        image: "./data/product/images/product-11.png",

        category: "furniture",
        subcategory: "Mebel",

        orginal: false,
        isCheapest: true,
        isNew: false,

        byCard: 420750,
        price: 425000,
        credit: 30104,

        rating: 5.0,
        comments: 46,
        deliveryTime: "13-mart"
    },

    {
        id: 12,
        name: "Karovat Xloya layt Woodline",
        image: "./data/product/images/product-12.png",

        category: "furniture",
        subcategory: "Yotoqxona mebellari",

        orginal: false,
        isCheapest: false,
        isNew: true,

        byCard: 2985840,
        price: 3016000,
        credit: 213633,

        rating: 0,
        comments: 0,
        deliveryTime: "28-mart"
    },

    {
        id: 13,
        name: "Metall kiyim uchun ilgich, oyoq kiyim javon bilan",
        image: "./data/product/images/product-13.png",

        category: "furniture",
        subcategory: "Saqlash tizimlari",

        orginal: false,
        isCheapest: false,
        isNew: false,

        byCard: 147510,
        price: 149000,
        credit: 10554,

        rating: 4.5,
        comments: 118,
        deliveryTime: "12-mart"
    },

    {
        id: 14,
        name: "Yig‘ma stol, kompyuter va o‘quv ishlari uchun",
        image: "./data/product/images/product-14.png",

        category: "furniture",
        subcategory: "Stollar",

        orginal: false,
        isCheapest: false,
        isNew: false,

        byCard: 75863,
        price: 76630,
        credit: 5427,

        rating: 4.6,
        comments: 380,
        deliveryTime: "Ertaga"
    },

    {
        id: 15,
        name: "Karovat Valensiya layt Woodline",
        image: "./data/product/images/product-15.png",

        category: "furniture",
        subcategory: "Yotoqxona mebellari",

        orginal: false,
        isCheapest: false,
        isNew: false,

        byCard: 3207600,
        price: 3240000,
        credit: 229500,

        rating: 5.0,
        comments: 1,
        deliveryTime: "28-mart"
    },

    {
        id: 16,
        name: "Geymerlar uchun kompyuter kreslosi",
        image: "./data/product/images/product-16.png",

        category: "furniture",
        subcategory: "Kompyuter kreslolari",

        orginal: false,
        isCheapest: true,
        isNew: false,

        byCard: 767040,
        price: 799000,
        credit: 56595,

        rating: 5.0,
        comments: 8,
        deliveryTime: "Ertaga"
    },

    {
        id: 17,
        name: "Oyoqli g‘ildirakli geymer kreslosi",
        image: "./data/product/images/product-17.png",

        category: "furniture",
        subcategory: "Kompyuter kreslolari",

        orginal: false,
        isCheapest: false,
        isNew: false,

        byCard: 709440,
        price: 739000,
        credit: 52345,

        rating: 4.6,
        comments: 144,
        deliveryTime: "Ertaga"
    },

    {
        id: 18,
        name: "Divan Sandra Woodline",
        image: "./data/product/images/product-18.png",

        category: "furniture",
        subcategory: "Divanlar",

        orginal: false,
        isCheapest: true,
        isNew: true,

        byCard: 4692600,
        price: 4740000,
        credit: 335750,

        rating: 0,
        comments: 0,
        deliveryTime: "28-mart"
    },

    {
        id: 19,
        name: "Polga osiladigan kiyim ilgich, 5 tokchali",
        image: "./data/product/images/product-19.png",

        category: "furniture",
        subcategory: "Saqlash tizimlari",

        orginal: false,
        isCheapest: true,
        isNew: false,

        byCard: 88110,
        price: 89000,
        credit: 6304,

        rating: 4.3,
        comments: 262,
        deliveryTime: "Ertaga"
    },

    {
        id: 20,
        name: "Oyoq kiyimlari uchun 5 tokchali javon",
        image: "./data/product/images/product-20.png",

        category: "furniture",
        subcategory: "Saqlash tizimlari",

        orginal: false,
        isCheapest: false,
        isNew: false,

        byCard: 93060,
        price: 94000,
        credit: 6658,

        rating: 4.5,
        comments: 466,
        deliveryTime: "Ertaga"
    },

    {
        id: 21,
        name: "Divan Olivia Pro Woodline",
        image: "./data/product/images/product-21.png",

        category: "furniture",
        subcategory: "Divanlar",

        orginal: false,
        isCheapest: true,
        isNew: false,

        byCard: 6785460,
        price: 6854000,
        credit: 485491,

        rating: 5.0,
        comments: 4,
        deliveryTime: "28-mart"
    },

    {
        id: 22,
        name: "Gaming kompyuter stoli, geymerlar uchun",
        image: "./data/product/images/product-22.png",

        category: "furniture",
        subcategory: "Kompyuter stollari",

        orginal: false,
        isCheapest: true,
        isNew: false,

        byCard: 761310,
        price: 769000,
        credit: 54470,

        rating: 5.0,
        comments: 2,
        deliveryTime: "Ertaga"
    },

    {
        id: 23,
        name: "Professional sayyohlik monokulyari 16x",
        image: "./data/product/images/product-23.png",

        category: "tourism",
        subcategory: "Optik qurilmalar",

        orginal: false,
        isCheapest: true,
        isNew: false,

        byCard: 117500,
        price: 125000,
        credit: 8854,

        rating: 3.0,
        comments: 1,
        deliveryTime: "Ertaga"
    },

    {
        id: 24,
        name: "Taktik barmoqsiz qo'lqoplar, sport va velosiped uchun",
        image: "./data/product/images/product-24.png",

        category: "tourism",
        subcategory: "Sport aksessuarlari",

        orginal: false,
        isCheapest: true,
        isNew: false,

        byCard: 27260,
        price: 29000,
        credit: 2054,

        rating: 4.7,
        comments: 339,
        deliveryTime: "Ertaga"
    },

    {
        id: 25,
        name: "Yig'uvchi kapalak pichog'i (balisong), mashq uchun",
        image: "./data/product/images/product-25.png",

        category: "tourism",
        subcategory: "Asboblar",

        orginal: false,
        isCheapest: false,
        isNew: false,

        byCard: 46906,
        price: 49900,
        credit: 3534,

        rating: 4.7,
        comments: 700,
        deliveryTime: "Ertaga"
    },

    {
        id: 26,
        name: "Fonari Police 1101",
        image: "./data/product/images/product-26.png",

        category: "tourism",
        subcategory: "Fonariklar",

        orginal: false,
        isCheapest: true,
        isNew: false,

        byCard: 375060,
        price: 399000,
        credit: 28262,

        rating: 4.0,
        comments: 4,
        deliveryTime: "10-mart"
    },

    {
        id: 27,
        name: "Adapter iPhone uchun Lightning AUX 2in1",
        image: "./data/product/images/product-27.png",

        category: "electronics",
        subcategory: "Telefon aksessuarlari",

        orginal: false,
        isCheapest: false,
        isNew: false,

        byCard: 34650,
        price: 35000,
        credit: 2479,

        rating: 4.1,
        comments: 280,
        deliveryTime: "Ertaga"
    },

    {
        id: 28,
        name: "Simsiz quloqchinlar Pods Pro Air 31",
        image: "./data/product/images/product-28.png",

        category: "electronics",
        subcategory: "Quloqchinlar",

        orginal: false,
        isCheapest: true,
        isNew: false,

        byCard: 38703,
        price: 39900,
        credit: 2826,

        rating: 4.3,
        comments: 81,
        deliveryTime: "Indinga"
    },

    {
        id: 29,
        name: "Sovutgich Elite RF-205, oq",
        image: "./data/product/images/product-29.png",

        category: "home-appliances",
        subcategory: "Sovutgichlar",

        orginal: false,
        isCheapest: true,
        isNew: false,

        byCard: 2057020,
        price: 2099000,
        credit: 148679,

        rating: 4.8,
        comments: 327,
        deliveryTime: "Ertaga"
    },

    {
        id: 30,
        name: "Karcher AF 20 havo tozalagich 1.024-820.0",
        image: "./data/product/images/product-30.png",

        category: "home-appliances",
        subcategory: "Havo tozalagichlar",

        orginal: true,
        isCheapest: true,
        isNew: false,

        byCard: 2182950,
        price: 2205000,
        credit: 156187,

        rating: 5.0,
        comments: 3,
        deliveryTime: "Ertaga"
    },

    {
        id: 31,
        name: "Oyoq kiyim – universal krasovka 38-46",
        image: "./data/product/images/product-31.png",

        category: "shoes",
        subcategory: "Krasovkalar",

        orginal: false,
        isCheapest: true,
        isNew: false,

        byCard: 118680,
        price: 129000,
        credit: 9137,

        rating: 4.6,
        comments: 185,
        deliveryTime: "Ertaga"
    },

    {
        id: 32,
        name: "Ayol va qizlar uchun bahor va qish fasllari uchun krasovka",
        image: "./data/product/images/product-32.png",

        category: "shoes",
        subcategory: "Ayollar krasovkalari",

        orginal: false,
        isCheapest: false,
        isNew: true,

        byCard: 248308,
        price: 269900,
        credit: 19117,

        rating: 0,
        comments: 0,
        deliveryTime: "Ertaga"
    },

    {
        id: 33,
        name: "Soat erkaklar uchun, arab raqamli minimalistik soat",
        image: "./data/product/images/product-33.png",

        category: "accessories",
        subcategory: "Soatlar",

        orginal: false,
        isCheapest: false,
        isNew: false,

        byCard: 26680,
        price: 29000,
        credit: 2054,

        rating: 4.7,
        comments: 294,
        deliveryTime: "Ertaga"
    },

    {
        id: 34,
        name: "Barsetka portmone erkaklar uchun",
        image: "./data/product/images/product-34.png",

        category: "accessories",
        subcategory: "Sumkalar",

        orginal: false,
        isCheapest: false,
        isNew: true,

        byCard: 146280,
        price: 159000,
        credit: 11262,

        rating: 0,
        comments: 0,
        deliveryTime: "Ertaga"
    }
]