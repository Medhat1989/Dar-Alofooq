
import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: { en: 'Home', ar: 'الرئيسية' } },
  { id: 'services', label: { en: 'Our Services', ar: 'خدمتنا' } },
  { id: 'products', label: { en: 'Our Products', ar: 'منتجاتنا' } },
  { id: 'who-we-are', label: { en: 'Who We Are', ar: 'من نحن' } },
  { id: 'team', label: { en: 'Our Team', ar: 'فريقنا' } },
  { id: 'testimonials', label: { en: 'Testimonials', ar: 'آراء العملاء' } },
  { id: 'contact', label: { en: 'Contact', ar: 'اتصل بنا' } },
  { id: 'book', label: { en: 'Book Online', ar: 'حجز موعد' } },
];

export const SOCIAL_LINKS = [
  { name: 'WhatsApp', url: 'https://wa.me/966532875558', icon: 'MessageCircle' },
  { name: 'X', url: 'https://x.com/DOFOQKSA', icon: 'Twitter' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/daralofoq/', icon: 'Linkedin' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@dofoqksa', icon: 'Music2' },
  { name: 'Snapchat', url: 'https://t.snapchat.com/DdU6z25c', icon: 'Ghost' },
  { name: 'YouTube', url: 'https://www.youtube.com/@dofoq_', icon: 'Youtube' },
];

export const APP_CONTENT = {
  contact: {
    phone: '+966 53 287 5558',
    email: 'mk@dofoq.sa',
    location: {
      en: 'Riyadh - Al-Kharj, Al-Salam District, Abu Bakr Al-Siddiq Road',
      ar: 'الرياض - الخرج حي السلام طريق ابي بكر الصديق'
    }
  },
  hero: {
    title: {
      en: 'Your Trusted Partner for Achieving Entrepreneurship Excellence',
      ar: 'شريكك الموثوق لتحقيق الريادة فى ريادة الأعمال'
    },
    cta: {
      en: 'Register Now',
      ar: 'سجل الآن'
    }
  },
  about: {
    title: { en: 'Who We Are', ar: 'من نحن' },
    text: {
      en: 'Dar Alofooq is a leading platform dedicated to empowering entrepreneurs and business leaders. We provide comprehensive tools, mentorship, and learning modules designed to drive success in the modern business landscape.',
      ar: 'دار الأفق هي منصة رائدة مكرسة لتمكين رواد الأعمال وقادة الأعمال. نحن نقدم أدوات شاملة وإرشاداً ووحدات تعليمية مصممة لتحقيق النجاح في مشهد الأعمال الحديث.'
    }
  },
  services_detailed: [
    {
      id: 'strategic',
      icon: 'Target',
      title: { en: 'Strategic Planning and Strategy Restructuring (Strategy Package)', ar: 'التخطيط الاستراتيجي وإعادة هيكلة الاستراتيجية( باقة الاستراتيجية)' },
      desc: { 
        en: 'In the Strategy Package, we ensure the achievement of goals with efficiency and flexibility, including:', 
        ar: 'نقدم لك في باقة الاستراتيجية ضمان تحقيق الأهداف بكفاءة ومرونة والتي تشمل :' 
      },
      points: {
        en: [
          'Strategic Planning: Strategic Analysis – Strategy Building – Strategy Translation and Communication – Performance Monitoring – Preparation of Implementation Plans',
          'Strategic Restructuring: Review and modification of the strategy according to changes'
        ],
        ar: [
          'التخطيط الاستراتيجي: التحليل الاستراتيجي – بناء الاستراتيجية– ترجمة وتعميم الاستراتيجية – متابعة الاداء – اعداد خطط التنفيذ',
          'إعادة الهيكلة الاستراتيجية: مراجعة وتعديل الاستراتيجية حسب التغيرات'
        ]
      }
    },
    {
      id: 'restructuring',
      icon: 'Layers',
      title: { en: 'Organizational Restructuring and Organizational Development (Development Package)', ar: 'إعادة الهيكلة التنظيمية والتطوير التنظيمي ( باقة التطوير)' },
      desc: { 
        en: 'In the Development Package, we ensure sustainable efficiency and high performance, including:', 
        ar: 'نقدم لك في باقة التطوير ضمان الكفاءة المستدامة والأداء العالي والتي تشمل :' 
      },
      points: {
        en: [
          'Organizational Restructuring: Arranging the organizational structure – Defining departments, responsibilities, and authorities – Clarifying reporting lines and decision-making',
          'Organizational Development: Attraction and recruitment - Preparation of job descriptions – Performance evaluation – Job evaluation and salary scales – Policies and procedures – Developing work teams and continuous improvement follow-up'
        ],
        ar: [
          'إعادة الهيكلة التنظيمية: ترتيب الهيكل التنظيمي – تحديد الأقسام والمسؤوليات والصلاحيات – توضيح خطوط التقارير واتخاذ القرار',
          'التطوير التنظيمي: الاستقطاب والتوظيف - أعداد الأوصاف الوظيفية – تقييم الأداء – تقييم الوظائف وسلم الرواتب – السياسات والإجراءات– تطوير فرق العمل ومتابعة التحسينات بشكل مستمر'
        ]
      }
    },
    {
      id: 'hr_outsourcing',
      icon: 'Users2',
      title: { en: 'Daily HR Operations Management (Outsourcing Package)', ar: 'إدارة العمليات اليومية للموارد البشرية ( باقة الاسناد)' },
      desc: { 
        en: 'In the Outsourcing Package, we provide you with seamless organization and follow-up of core HR operations without the need for internal hiring, including:', 
        ar: 'نقدم لك في باقة الأسناد تنظيم ومتابعة العمليات الأساسية للموارد البشرية بسلاسة دون الحاجة لتوظيف داخلي والتي تشمل :' 
      },
      points: {
        en: [
          'Specialized follow-up for your government platforms: Madad – Qiwa – Ministry of Human Resources – Social Insurance – Muqeem or Absher Business – Medical Insurance – Government Support Programs – or any other platform related to the facility.',
          'Specialized follow-up for your employee affairs: Full recruitment procedures – Employee file management – Attendance and departure – Employee leaves – Payroll management – Resignations and service terminations – Employee requirements.'
        ],
        ar: [
          'متابعة موظف متخصص لدينا للمنصات الحكومية الخاصة بكم من: مدد – قوى – وزارة الموارد البشرية – التأمينات الاجتماعية – مقيم أو ابشر اعمال – متابعة التأمين الطبي – متابعة برامج الدعم الحكومي – أو أي منصة أخرى تخص المنشأة',
          'متابعة موظف متخصص لدينا لشؤون الموظفين لديكم: إجراءات التعيين كامله – إدارة ملفات الموظفين – الحضور والانصراف – اجازات الموظفين – إدارة الرواتب – إدارة الاستقالات وانهاء الخدمات – متطلبات الموظفين'
        ]
      }
    },
    {
      id: 'recruitment',
      icon: 'Search',
      title: { en: 'Employee Operation and Management (Operation Package)', ar: 'تشغيل وإدارة الموظفين( باقة التشغيل)' },
      desc: { 
        en: 'In the Operation Package, we provide recruitment, management, supervision, and full follow-up to ensure workflow continuity without administrative burden on you, including:', 
        ar: 'نقدم لك في باقة التشغيل من التوظيف والإدارة والاشراف والمتابعة الكاملة لضمان سير العمل واستمراريته بدون عبء إداري عليك والتي تشمل :' 
      },
      points: {
        en: [
          'Providing qualified employees according to your needs (administrative / operational / support)',
          'Full management and supervision – Attendance and departure monitoring – Periodic performance evaluation – Employee replacement when needed'
        ],
        ar: [
          'توفير موظفين مؤهلين حسب احتياجكم ( اداري / تشغيلي / دعم )',
          'إدارة وإشراف كامل – متابعة الحضور والانصراف – تقييم الأداء لهم بشكل دوري – استبدال الموظفين عند الحاجة'
        ]
      }
    }
  ],
  booking: {
    title: { en: 'Book Your Consultation', ar: 'احجز استشارتك الآن' },
    subtitle: { 
      en: 'Take the first step towards transformation. Schedule a private session with our experts.', 
      ar: 'اتخذ الخطوة الأولى نحو التحول. حدد موعداً لجلسة خاصة مع خبرائنا.' 
    },
    services: [
      { id: 'mentorship', label: { en: 'Business Mentorship', ar: 'الإرشاد التجاري' } },
      { id: 'strategy', label: { en: 'Strategic Planning', ar: 'التخطيط الاستراتيجي' } },
      { id: 'startup', label: { en: 'Startup Consultation', ar: 'استشارات الشركات الناشئة' } }
    ]
  },
  team: [
    { 
      name: { en: 'Dr. Malak Alomairah', ar: 'د. ملاك آل عميره' },
      role: { en: 'CEO', ar: 'الرئيس التنفيذي' }, 
      img: 'https://i.ibb.co/TDtbXbFF/Malak.jpg'
    },
    { 
      name: { en: 'Shahd Al-Qahtani', ar: 'شهد القحطاني' },
      role: { en: 'Chief Marketing Officer', ar: 'رئيس التسويق' }, 
      img: 'https://i.ibb.co/9kNp7txT/shahd.jpg'
    },
    { 
      name: { en: 'Meshary Al-Sharif', ar: 'مشاري الشريف' },
      role: { en: 'COO', ar: 'مدير التشغيل' }, 
      img: 'https://i.ibb.co/5XQZr2T0/meshary.jpg'
    }
  ],
  testimonials: [
    {
      name: { en: 'Abdullah Al-Faisal', ar: 'عبدالله الفيصل' },
      role: { en: 'Tech Startup Founder', ar: 'مؤسس شركة تقنية ناشئة' },
      text: {
        en: "Dar Alofooq transformed my business vision into a structured reality. Their mentorship is world-class.",
        ar: "دار الأفق حولت رؤيتي التجارية إلى واقع ملموس. إرشادهم كان بمستوى عالمي."
      },
      img: 'https://picsum.photos/seed/t1/100/100'
    },
    {
      name: { en: 'Layla Mohammed', ar: 'ليلى محمد' },
      role: { en: 'Creative Director', ar: 'مديرة إبداعية' },
      text: {
        en: "The environment and resources provided by Dar Alofooq are unmatched. Truly a partner in success.",
        ar: "البيئة والموارد التي توفرها دار الأفق لا تضاهى. حقاً شريك في النجاح."
      },
      img: 'https://picsum.photos/seed/t2/100/100'
    },
    {
      name: { en: 'Fahad Al-Otaibi', ar: 'فهد العتيبي' },
      role: { en: 'Business Investor', ar: 'مستثمر أعمال' },
      text: {
        en: "Strategic insights from Dar Alofooq helped us scale across the region in record time.",
        ar: "الرؤى الاستراتيجية من دار الأفق ساعدتنا في التوسع في المنطقة في وقت قياسي."
      },
      img: 'https://picsum.photos/seed/t3/100/100'
    }
  ],
  products: {
    title: { en: 'Our Products', ar: 'منتجاتنا' },
    items: [
      {
        id: 'org-structure-package',
        name: { 
          en: 'Dar Alofooq Professional Organizational Structure Analysis Methodology Package', 
          ar: 'حزمة منهجية دار الأفق لتحليل الهيكل التنظيمي الاحترافية' 
        },
        images: [
          'https://i.ibb.co/VcSVchdv/d1.jpg',
          'https://i.ibb.co/QFSYm7DN/d2.jpg',
          'https://i.ibb.co/jvjhvbXw/d3.jpg',
          'https://i.ibb.co/dyd0PfD/d4.jpg',
          'https://i.ibb.co/9kTCt844/d5.jpg'
        ],
        price: { en: '399 SAR', ar: '399 ريال سعودي' },
        description: {
          en: `An integrated consulting package that helps companies evaluate organizational structure, identify gaps, and improve the distribution of tasks and authorities. Includes a full analytical report (Word) and a professional presentation (PowerPoint) containing explanations, concepts, and an applied example.

What does the package include?
Word File – Official Report:
• Organizational structure analysis
• Gap analysis
• Final recommendations
• Analysis tools
• Checklist
• Risk indicators
• Common mistakes
• Scientific references
• Structure map template

PowerPoint File – Presentation:
• Explanation of organizational structure
• Definition of terms
• Types of structures
• Risks of poor structure
• Global best practices
• Performance indicators (KPIs)
• Restructuring plan
• Implementation follow-up template
• Full applied example
• User guide

Target Audience:
• SMEs
• HR Managers
• Consultants
• Business Owners
• Government Entities
• Management Teams

Additional Features:
• Ready for immediate use
• Fully editable
• Suitable for meetings and presentations
• Based on global methodologies
• Professional and clear design`,
          ar: `حزمة استشارية متكاملة تساعد الشركات على تقييم الهيكل التنظيمي، تحديد الفجوات، وتحسين توزيع المهام والصلاحيات. تشمل تقريرًا تحليليًا كاملًا (Word) وعرضًا توضيحيًا احترافيًا (PowerPoint) يحتوي على الشرح والمفاهيم والمثال التطبيقي.

ماذا تشمل الحزمة؟
ملف Word – التقرير الرسمي:
• تحليل الهيكل التنظيمي
• تحليل الفجوات
• التوصيات النهائية
• الأدوات المساعدة للتحليل
• قائمة التحقق
• مؤشرات الخطر
• الأخطاء الشائعة
• المراجع العلمية
• نموذج خريطة الهيكل

ملف PowerPoint – العرض التوضيحي:
• شرح الهيكل التنظيمي
• تعريف المصطلحات
• أنواع الهياكل
• مخاطر الهيكل السيئ
• أفضل الممارسات العالمية
• مؤشرات الأداء (KPIs)
• خطة إعادة الهيكلة
• نموذج متابعة التنفيذ
• المثال التطبيقي الكامل
• دليل الاستخدام

الفئة المستهدفة:
• الشركات الصغيرة والمتوسطة
• مدراء الموارد البشرية
• المستشارون
• أصحاب الأعمال
• الجهات الحكومية
• الفرق الإدارية

مميزات إضافية:
• جاهز للاستخدام مباشرة
• قابل للتعديل بالكامل
• مناسب للاجتماعات والعروض
• مبني على منهجيات عالمية
• تصميم احترافي وواضح`
        },
        cta: { en: 'Order via WhatsApp', ar: 'اطلب عبر الواتساب' }
      }
    ]
  }
};
