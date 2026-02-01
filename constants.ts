
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
    email: 'info@daralofooq.com',
    location: {
      en: 'Riyadh, Saudi Arabia | Kingdom Tower, Floor 45',
      ar: 'الرياض، المملكة العربية السعودية | برج المملكة، الطابق 45'
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
      title: { en: 'Strategic Planning', ar: 'التخطيط الاستراتيجي' },
      desc: { 
        en: 'Setting a clear vision and strategic roadmaps for long-term excellence.', 
        ar: 'وضع رؤية واضحة وخطط مدروسة تضمن تحقيق الأهداف على المدى القصير والطويل.' 
      },
      points: {
        en: ['Short and long-term goal alignment', 'Market analysis and opportunity assessment', 'Competitive edge strategy design'],
        ar: ['المساعدة على وضع رؤية واضحة وخطط مدروسة', 'تحليل السوق وتقييم الفرص والتحديات', 'تصميم خارطة استراتيجية للمنافسة والتفوق']
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
      title: { en: 'HR Operations Outsourcing', ar: 'إسناد عمليات الموارد البشرية' },
      desc: { 
        en: 'Full management of government relations, payroll, and employee benefits.', 
        ar: 'إدارة شاملة للعلاقات الحكومية وشؤون الموظفين والأجور.' 
      },
      points: {
        en: ['Government portal management (Muqeem, Qiwa, etc.)', 'Employee benefits and payroll protection', 'Self-service systems implementation'],
        ar: ['إدارة منصات (مقيم، قوى، التأمينات، إلخ)', 'إدارة الأجور وحماية الأجور والمكافآت', 'نظام الخدمة الذاتية لإدارة شؤون الموظفين']
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
      title: { en: 'Recruitment & Talent', ar: 'التوظيف' },
      desc: { 
        en: 'Modern talent acquisition solutions for building strong teams.', 
        ar: 'توفير حلول جذب واختيار الكفاءات عبر منهجيات حديثة.' 
      },
      points: {
        en: ['Talent attraction solutions', 'Certified assessment testing', 'Team-building methodologies'],
        ar: ['حلول جذب واختيار الكفاءات', 'منهجيات توظيف حديثة', 'اختبارات معتمدة لبناء فريق قوي']
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
      name: { en: 'Ahmed Mansour', ar: 'أحمد منصور' },
      role: { en: 'CEO', ar: 'الرئيس التنفيذي' }, 
      img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=400' // Saudi CEO representative
    },
    { 
      name: { en: 'Sarah Ahmed', ar: 'سارة أحمد' },
      role: { en: 'Program Director', ar: 'مديرة البرامج' }, 
      img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400' // Sarah representative
    },
    { 
      name: { en: 'Khalid Abdullah', ar: 'خالد عبدالله' },
      role: { en: 'IT Manager', ar: 'مدير تقنية المعلومات' }, 
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' // IT Manager in black shirt representative
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
