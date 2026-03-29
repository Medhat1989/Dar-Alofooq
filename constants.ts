
import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: { en: 'Home', ar: 'الرئيسية' } },
  { id: 'services', label: { en: 'Our Services', ar: 'خدمتنا' } },
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
      id: 'feasibility',
      icon: 'BarChart3',
      title: { en: 'Feasibility Studies', ar: 'دراسات الجدوى' },
      desc: { 
        en: 'Evaluating technical and economic project viability with accurate reports.', 
        ar: 'توفير تحليل مفصل للمشاريع لتقييم الجدوى الاقتصادية والفنية.' 
      },
      points: {
        en: ['Economic and technical analysis', 'Risk avoidance reporting', 'Informed decision-making support'],
        ar: ['تحليل مفصل لتقييم الجدوى الاقتصادية والفنية', 'تقديم تقارير دقيقة لاتخاذ قرارات مستنيرة', 'تجنب المخاطر المحتملة']
      }
    },
    {
      id: 'restructuring',
      icon: 'Layers',
      title: { en: 'Restructuring & Org Dev', ar: 'إعادة الهيكلة والتطوير التنظيمي' },
      desc: { 
        en: 'Designing organizational structures aligned with market requirements.', 
        ar: 'إعادة الهيكلة التنظيمية وتطوير الموارد البشرية بما يتناسب مع الأهداف.' 
      },
      points: {
        en: ['Job descriptions and policy design', 'Wage and reward structures', 'Training needs analysis'],
        ar: ['تصميم الهياكل وبطاقات الوصف الوظيفي والسياسات', 'تصميم هيكل الأجور والمكافآت', 'تحليل الاحتياجات التدريبية وتقييم الأداء']
      }
    },
    {
      id: 'incorporation',
      icon: 'Briefcase',
      title: { en: 'Incorporation Services', ar: 'خدمة التأسيس' },
      desc: { 
        en: 'Comprehensive support for legal registration and licensing.', 
        ar: 'خدمات شاملة تشمل اختيار الشكل القانوني وتراخيص العمل.' 
      },
      points: {
        en: ['Legal form selection', 'Official documentation registration', 'Necessary licensing acquisition'],
        ar: ['اختيار الشكل القانوني', 'تسجيل الأوراق الرسمية', 'الحصول على التراخيص اللازمة']
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
      id: 'hr_consulting',
      icon: 'MessageSquare',
      title: { en: 'HR Consulting', ar: 'استشارات عمليات الموارد البشرية' },
      desc: { 
        en: 'Professional guidance on government compliance and employee follow-ups.', 
        ar: 'توجيه الموظفين القائمين على العمل وتغطية الجوانب الحكومية.' 
      },
      points: {
        en: ['Compliance guidance', 'Employee inquiry handling', 'Operational follow-up mechanisms'],
        ar: ['توجيه الموظفين القائمين على العمل', 'تغطية الجوانب الحكومية', 'آليات متابعة شؤون الموظفين']
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
      name: { en: 'Malak Alomairah', ar: 'ملاك العميرة' },
      role: { en: 'CEO', ar: 'الرئيس التنفيذي' }, 
      img: 'https://i.ibb.co/gLJ8BH6N/Malak.png'
    },
    { 
      name: { en: 'Sarah Ahmed', ar: 'سارة أحمد' },
      role: { en: 'Program Director', ar: 'مديرة البرامج' }, 
      img: 'https://i.ibb.co/bgXb9mbb/sarah.png'
    },
    { 
      name: { en: 'Khalid Abdullah', ar: 'خالد عبدالله' },
      role: { en: 'IT Manager', ar: 'مدير تقنية المعلومات' }, 
      img: 'https://i.ibb.co/JjCRKnkY/abdullah.png'
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
  ]
};
