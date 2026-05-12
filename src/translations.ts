export const translations = {
    en: {
        footerText: "All rights reserved to YaHala Application©",
        selectLanguage: "Select Language",

        landingTitle: "Built for simple everyday messaging",

        landingDescription:
            "YaHla focuses on fast chatting, media sharing, and a clean experience without unnecessary complexity.",

        headerLogin: "Login",
        headerDownloadAndroid: "Download Android",
        headerGetApp: "Get app",

        heroBadge: "YaHla Messenger",
        heroTitleLineOne: "Chat simply,",
        heroTitleLineTwo: "share freely",
        heroDescription:
            "Send texts, photos, voice notes, files, and videos in a simple chat made for everyday moments.",
        heroDownloadButton: "Download Android",
        heroStartMessaging: "Start messaging",

        sectionTwoBadge: "Messaging first",
        sectionTwoTitle:
            "A calm place for the messages that matter today.",
        sectionTwoDescription:
            "YaHla keeps you focused: start a chat, type what you need, and send the media your conversation calls for.",

        mediaPhotos: "Photos",
        mediaPhotosDetail: "Share moments in the chat",

        mediaVoice: "Voice",
        mediaVoiceDetail: "Send quick voice notes",

        mediaFiles: "Files",
        mediaFilesDetail: "Pass along useful documents",

        mediaVideos: "Videos",
        mediaVideosDetail: "Keep memories moving",

        sectionThreeBadge: "Send more than text",
        sectionThreeTitle:
            "Photos, voice, files, and videos stay inside the conversation.",
        sectionThreeDescription:
            "No extra pages, no feature maze. The landing page says exactly what the app does now, then gets people to the Android download.",

        sectionFourBadge: "Privacy first, always",
        sectionFourTitle:
            "Fully encrypted. Completely private. Yours.",
        sectionFourDescription:
            "Every message, every media file, every call — secured with end-to-end encryption. YaHla is built so that no one, not even us, can read your conversations. What you share stays between you and who you trust.",

        newsCardOneTitle:
            "Fast text messaging that feels natural",

        newsCardOneBody:
            "Send messages instantly in a clean and lightweight chat experience designed for daily conversations.",

        newsCardTwoTitle:
            "Share photos, videos, and files easily",

        newsCardTwoBody:
            "Send your favorite moments, important documents, and media directly inside the conversation.",

        newsCardThreeTitle:
            "Voice notes made quick and simple",

        newsCardThreeBody:
            "Record and send voice messages instantly whenever typing is not enough.",
    },

    ar: {
        footerText: "جميع الحقوق محفوظة لتطبيق يا هلا ©",
        selectLanguage: "اختر اللغة",

        landingTitle: "مصمم للمحادثات اليومية البسيطة",

        landingDescription:
            "ياهلا يركز على الدردشة السريعة ومشاركة الوسائط وتجربة نظيفة بدون تعقيد أو مميزات غير ضرورية.",

        headerLogin: "تسجيل الدخول",
        headerDownloadAndroid: "تحميل للأندرويد",
        headerGetApp: "تحميل التطبيق",

        heroBadge: "ياهلا ماسنجر",
        heroTitleLineOne: "دردش بسهولة،",
        heroTitleLineTwo: "وشارك بحرية",
        heroDescription:
            "أرسل الرسائل والصور والملاحظات الصوتية والملفات والفيديوهات داخل دردشة بسيطة للحظاتك اليومية.",
        heroDownloadButton: "تحميل للأندرويد",
        heroStartMessaging: "ابدأ المحادثة",

        sectionTwoBadge: "الرسائل أولاً",
        sectionTwoTitle:
            "مكان هادئ للمحادثات التي تهمك اليوم.",
        sectionTwoDescription:
            "ياهلا يبقيك مركزًا: ابدأ محادثة، اكتب ما تحتاجه، وأرسل الوسائط التي تناسب حديثك.",

        mediaPhotos: "الصور",
        mediaPhotosDetail: "شارك لحظاتك داخل المحادثة",

        mediaVoice: "الصوت",
        mediaVoiceDetail: "أرسل ملاحظات صوتية بسرعة",

        mediaFiles: "الملفات",
        mediaFilesDetail: "شارك الملفات المهمة بسهولة",

        mediaVideos: "الفيديوهات",
        mediaVideosDetail: "احتفظ بذكرياتك متحركة",

        sectionThreeBadge: "أكثر من مجرد رسائل",
        sectionThreeTitle:
            "الصور والصوت والملفات والفيديوهات تبقى داخل المحادثة.",
        sectionThreeDescription:
            "بدون تعقيد أو صفحات إضافية. الصفحة توضح بالضبط ما يقدمه التطبيق وتقود المستخدم مباشرة لتحميل الأندرويد.",

        sectionFourBadge: "الخصوصية أولاً دائماً",
        sectionFourTitle:
            "مشفر بالكامل. خاص بالكامل. لك وحدك.",
        sectionFourDescription:
            "كل رسالة وكل ملف وكل مكالمة — محمية بتشفير كامل بين الطرفين. ياهلا مصمم بحيث لا يستطيع أحد، حتى نحن، قراءة محادثاتك. ما تشاركه يبقى بينك وبين من تثق به فقط.",

        newsCardOneTitle:
            "رسائل سريعة بتجربة طبيعية",

        newsCardOneBody:
            "أرسل الرسائل فورًا داخل تجربة دردشة خفيفة ونظيفة مصممة للمحادثات اليومية.",

        newsCardTwoTitle:
            "شارك الصور والفيديوهات والملفات بسهولة",

        newsCardTwoBody:
            "أرسل لحظاتك المفضلة وملفاتك المهمة والوسائط مباشرة داخل المحادثة.",

        newsCardThreeTitle:
            "ملاحظات صوتية سريعة وبسيطة",

        newsCardThreeBody:
            "سجل وأرسل الرسائل الصوتية فورًا عندما لا تكفي الكتابة.",
    },
} as const;

export type Language = keyof typeof translations;