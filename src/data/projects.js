// Real work only: every entry links to a live product or a public repository.

export const webProjects = [
    {
        id: 'shahin11group',
        url: 'https://shahin11group.com',
        domain: 'shahin11group.com',
        image: '/projects/shahin11group.webp',
        tags: ['Next.js', 'React', 'Full-Stack'],
        status: 'active',
        fa: {
            name: 'شاهین گروه',
            role: 'برنامه‌نویس فول‌استک',
            description: 'پلتفرم خدمات شاهین گروه در حوزه ویزا و مهاجرت، خرید ملک در دبی، مشاوره حقوقی و اجاره خودرو با دفاتر تهران، دبی و ایروان. بیش از یک سال است که توسعه و نگهداری فرانت‌اند و بک‌اند آن با من است.',
        },
        en: {
            name: 'Shahin Group',
            role: 'Full-Stack Developer',
            description: 'Service platform for Shahin Group covering visas and immigration, Dubai real estate, legal consulting and car rental, with offices in Tehran, Dubai and Yerevan. I have been building and maintaining its frontend and backend for more than a year.',
        },
    },
    {
        id: 'balasstore',
        url: 'https://balasstore.com',
        domain: 'balasstore.com',
        image: '/projects/balasstore.webp',
        tags: ['Next.js', 'React', 'E-commerce'],
        status: 'active',
        fa: {
            name: 'بالاس',
            role: 'مدیر فنی (CTO) و سهام‌دار',
            description: 'فروشگاه آنلاین لپ‌تاپ استوک و کارکرده اماراتی با جست‌وجوی محصول، سبد خرید و ثبت سفارش بدون پیش‌پرداخت. کل وب‌سایت و مدیریت فنی آن بر عهده من است.',
        },
        en: {
            name: 'Balas Store',
            role: 'CTO & Shareholder',
            description: 'Online store for refurbished business laptops imported from the UAE, with product search, cart and no-prepayment ordering. I own the entire website and its technical management.',
        },
    },
    {
        id: 'dyama',
        url: 'https://dyama.ir',
        domain: 'dyama.ir',
        image: '/projects/dyama.webp',
        tags: ['Next.js', 'React', 'AI', 'i18n'],
        status: 'active',
        fa: {
            name: 'دیاما اینتلیجنس',
            role: 'مدیر فنی (CTO) و سهام‌دار',
            description: 'وب‌سایت دوزبانه شرکت خودمان، دیاما اینتلیجنس؛ ارائه‌دهنده خدمات طراحی سایت، سئو، توسعه هوش مصنوعی، بینایی ماشین و اینترنت اشیا. به‌عنوان CTO مسئول تصمیم‌های فنی و توسعه محصول هستم.',
        },
        en: {
            name: 'Dyama Intelligence',
            role: 'CTO & Shareholder',
            description: 'Bilingual website of our own company, Dyama Intelligence, which delivers web design, SEO, AI development, computer vision and IoT services. As CTO I lead the technical decisions and product development.',
        },
    },
    {
        id: 'zarnavaa',
        url: 'https://zarnavaa.com',
        domain: 'zarnavaa.com',
        image: '/projects/zarnavaa.webp',
        tags: ['Next.js', 'React', 'UI Design'],
        status: 'active',
        fa: {
            name: 'زعفران زرناوا',
            role: 'طراح و توسعه‌دهنده وب‌سایت',
            description: 'وب‌سایت برند زعفران زرناوا برای معرفی و فروش زعفران خراسان، با صفحه‌های محصولات، گالری و ثبت سفارش. طراحی و پیاده‌سازی سایت را انجام داده‌ام و توسعه آن ادامه دارد.',
        },
        en: {
            name: 'Zarnava Saffron',
            role: 'Website Designer & Developer',
            description: 'Brand website for Zarnava Saffron, presenting and selling Khorasan saffron with product pages, a gallery and ordering. I designed and built the site and keep developing it.',
        },
    },
    {
        id: 'arraba',
        url: null,
        domain: 'arraba.ir',
        image: null,
        tags: ['Frontend'],
        status: 'closed',
        fa: {
            name: 'ارابا',
            role: 'برنامه‌نویس فرانت‌اند',
            description: 'توسعه رابط کاربری وب‌سایت ارابا به‌عنوان برنامه‌نویس فرانت‌اند تیم. فعالیت این مجموعه متوقف شده و سایت دیگر در دسترس نیست.',
        },
        en: {
            name: 'Arraba',
            role: 'Frontend Developer',
            description: 'Built the user interface of the Arraba website as the team’s frontend developer. The business has since shut down and the site is no longer online.',
        },
    },
];

export const aiProjects = [
    {
        id: 'fff-defect-detection',
        url: 'https://github.com/MHDadgostar/FFF-3DPrint-Defect-Detection',
        tags: ['Python', 'PyTorch', 'YOLOv8', 'RT-DETR', 'DEIMv2', 'Grad-CAM'],
        fa: {
            name: 'تشخیص عیب در پرینت سه‌بعدی FFF',
            category: 'بینایی ماشین · تشخیص اشیا',
            description: 'پایپ‌لاین یادگیری عمیق برای مقایسه آشکارسازهای مبتنی بر CNN (YOLOv8) و ترنسفورمر (RT-DETR و DEIMv2) در تشخیص عیب‌های پرینت سه‌بعدی، همراه با تحلیل مقاومت در برابر خرابی تصویر، تفسیرپذیری و آزمون‌های معناداری آماری.',
        },
        en: {
            name: 'FFF 3D-Print Defect Detection',
            category: 'Computer Vision · Object Detection',
            description: 'Deep learning pipeline comparing CNN-based (YOLOv8) and transformer-based (RT-DETR, DEIMv2) detectors for defects in FFF 3D printing, with robustness analysis under image corruptions, explainability and statistical significance tests.',
        },
    },
    {
        id: 'rsna-pneumonia',
        url: 'https://github.com/MHDadgostar/2018-RSNA-Pneumonia-Detection-Challenge',
        tags: ['Python', 'OpenCV', 'scikit-learn', 'XGBoost', 'DICOM'],
        fa: {
            name: 'تشخیص ذات‌الریه در تصاویر رادیوگرافی، چالش RSNA 2018',
            category: 'تصویربرداری پزشکی · یادگیری ماشین',
            description: 'پایپ‌لاین تشخیص ذات‌الریه روی داده‌های چالش RSNA 2018 شامل پیش‌پردازش تصاویر DICOM، استخراج ویژگی‌های HOG و LBP، طبقه‌بندی با SVM، Random Forest و XGBoost و رگرسیون جعبه محدودکننده ناحیه درگیر.',
        },
        en: {
            name: 'RSNA 2018 Pneumonia Detection',
            category: 'Medical Imaging · Machine Learning',
            description: 'Pneumonia detection pipeline on the RSNA 2018 chest X-ray challenge data: DICOM preprocessing, HOG and LBP feature extraction, classification with SVM, Random Forest and XGBoost, and bounding-box regression for the affected region.',
        },
    },
    {
        id: 'surrogate-composites',
        url: 'https://github.com/MHDadgostar/DeepLearning-miniProject',
        tags: ['Python', 'XAI', 'SHAP', 'Optuna', 'Nested CV'],
        fa: {
            name: 'مدل‌های جانشین تفسیرپذیر برای کامپوزیت‌ها',
            category: 'یادگیری ماشین · هوش مصنوعی تفسیرپذیر',
            description: 'ساخت و اعتبارسنجی مدل‌های جانشین مقاوم در برابر بیش‌برازش برای پیش‌بینی خواص مکانیکی کامپوزیت‌ها از سه مجموعه‌داده آزمایشگاهی کوچک، با تنظیم ابرپارامتر، SHAP و LIME، برآورد عدم قطعیت و آزمون‌های آماری.',
        },
        en: {
            name: 'Interpretable Surrogate Models for Composites',
            category: 'Machine Learning · Explainable AI',
            description: 'Overfitting-resistant surrogate models predicting mechanical properties of friction-processed composites from three small experimental datasets, with hyperparameter tuning, SHAP and LIME, uncertainty estimation and statistical tests.',
        },
    },
    {
        id: 'ai-vision-pet',
        url: 'https://github.com/MHDadgostar/AI-Vision-Pet',
        tags: ['Python', 'OpenCV', 'MediaPipe'],
        fa: {
            name: 'حیوان خانگی مجازی با بینایی ماشین',
            category: 'بینایی ماشین · تعامل بلادرنگ',
            description: 'برنامه وب‌کم با Python، OpenCV و MediaPipe: توله‌سگی مجازی که روی لبه‌های تشخیص‌داده‌شده می‌نشیند، روی کف دست می‌پرد و به نوازش با نوک انگشت واکنش نشان می‌دهد.',
        },
        en: {
            name: 'AI Vision Pet',
            category: 'Computer Vision · Real-Time Interaction',
            description: 'Webcam app built with Python, OpenCV and MediaPipe: a virtual puppy that sits on detected edges, jumps onto your palm and reacts to fingertip petting.',
        },
    },
    {
        id: 'realtime-chat',
        url: 'https://github.com/MHDadgostar/RealTimeChat',
        tags: ['React', 'Django', 'Channels', 'WebSocket', 'JWT', 'Redis'],
        fa: {
            name: 'چت بلادرنگ فول‌استک',
            category: 'وب · فول‌استک',
            description: 'اپلیکیشن چت بلادرنگ با فرانت‌اند React و بک‌اند Django REST Framework و Channels: پیام‌رسانی با WebSocket، احراز هویت JWT، پروفایل کاربر و نسخه‌ای با رمزنگاری سرتاسری.',
        },
        en: {
            name: 'Real-Time Chat',
            category: 'Web · Full-Stack',
            description: 'Real-time chat application with a React frontend and a Django REST Framework + Channels backend: WebSocket messaging, JWT authentication, user profiles and an end-to-end encrypted variant.',
        },
    },
];
