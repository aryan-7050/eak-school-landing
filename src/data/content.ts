import {
  Award,
  BookOpen,
  Bus,
  Building2,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Microscope,
  Monitor,
  ShieldCheck,
  Sparkles,
  Utensils,
  Trophy,
  Users,
  type LucideIcon,
} from 'lucide-react';

export const SCHOOL = {
  name: 'EAK International School',
  session: 'Academic Session 2027–28',
  established: 1998,
  phone: '+91 98765 43210',
  email: 'admissions@eakschool.edu.in',
  address: 'EAK Knowledge Park, Sector 42, Gurugram, Haryana 122002',
  hours: 'Mon-Sat, 8:00 AM - 4:00 PM',
};

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: 'Why EAK', href: '#why' },
  { label: 'Programs', href: '#programs' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Admissions', href: '#process' },
  { label: 'Fees', href: '#fees' },
  { label: 'FAQs', href: '#faqs' },
];

export type IconItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const WHY_CHOOSE: IconItem[] = [
  {
    icon: GraduationCap,
    title: 'Experienced Faculty',
    description:
      '220+ qualified educators with an average of 12 years classroom experience and ongoing pedagogical training.',
  },
  {
    icon: Trophy,
    title: 'Academic Excellence',
    description:
      '97% board distinction rate for the Class of 2026, with 40+ students placed in top global universities.',
  },
  {
    icon: Building2,
    title: 'Modern Infrastructure',
    description:
      'A 9-acre thoughtfully designed campus with smart classrooms, research-grade labs, and creative studios.',
  },
  {
    icon: Sparkles,
    title: 'Holistic Development',
    description:
      'A balanced blend of academics, arts, sports, and socio-emotional learning woven into every school day.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Caring Campus',
    description:
      '24/7 CCTV, GPS-tracked transport, on-campus nurse, and a child-safeguarding policy across all grades.',
  },
  {
    icon: Monitor,
    title: 'Technology-Enabled Learning',
    description:
      '1:1 device program from Grade 6, interactive panels in every room, and a dedicated STEAM & coding curriculum.',
  },
  {
    icon: Users,
    title: 'Low Student-Teacher Ratio',
    description:
      'A 12:1 ratio in Primary and 15:1 in Senior School ensures personalised attention for every learner.',
  },
  {
    icon: Lightbulb,
    title: 'Future-Ready Skills',
    description:
      'Design thinking, financial literacy, public speaking, and an AI & robotics lab prepare students for tomorrow.',
  },
];

export type Program = {
  level: string;
  grades: string;
  ages: string;
  description: string;
  features: string[];
  accent: string;
};

export const PROGRAMS: Program[] = [
  {
    level: 'Primary',
    grades: 'Grade 1-5',
    ages: 'Ages 6-10',
    description:
      'A joyful, inquiry-led foundation that builds strong literacy, numeracy, curiosity, and confidence.',
    features: [
      'Phonics & reading workshops',
      'Hands-on math & science corners',
      'Daily storytelling & library time',
      'Movement, music & visual arts',
    ],
    accent: 'from-brand-500 to-brand-700',
  },
  {
    level: 'Middle',
    grades: 'Grade 6-8',
    ages: 'Ages 11-13',
    description:
      'A bridge years programme that deepens conceptual understanding and grows independence and self-direction.',
    features: [
      'STEAM & coding labs',
      'Second language pathways',
      'Clubs: debate, drama, robotics',
      'Structured study skills coaching',
    ],
    accent: 'from-amber-400 via-amber-500 to-yellow-600',
  },
  {
    level: 'Secondary',
    grades: 'Grade 9-10',
    ages: 'Ages 14-15',
    description:
      'Rigorous board preparation paired with guidance, real-world projects, and a strong wellbeing framework.',
    features: [
      'CBSE board preparation',
      'Personalised academic mentoring',
      'Career & subject-stream guidance',
      'Community service & leadership',
    ],
    accent: 'from-emerald-500 to-emerald-700',
  },
  {
    level: 'Senior Secondary',
    grades: 'Grade 11-12',
    ages: 'Ages 16-18',
    description:
      'Streamed Science, Commerce, and Humanities tracks with university counselling and research electives.',
    features: [
      'Science, Commerce & Humanities',
      'University counselling cell',
      'Research & internship electives',
      'SAT, AP & entrance exam support',
    ],
    accent: 'from-rose-500 to-rose-700',
  },
];

export type Stat = { value: string; label: string; icon: LucideIcon };

export const HIGHLIGHTS: Stat[] = [
  { value: '27+', label: 'Years of excellence', icon: Award },
  { value: '12,400', label: 'Alumni across 30 countries', icon: GraduationCap },
  { value: '220+', label: 'Faculty members', icon: Users },
  { value: '40+', label: 'Sports & co-curricular activities', icon: Trophy },
];

export type Facility = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export const FACILITIES: Facility[] = [
  {
    title: 'Smart Classrooms',
    description:
      'Every room features interactive panels, flexible seating, and acoustic design for focused learning.',
    image:
      'https://images.pexels.com/photos/8618019/pexels-photo-8618019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Monitor,
  },
  {
    title: 'Science Labs',
    description:
      'Physics, chemistry, and biology labs equipped to university standards with safety-first design.',
    image:
      'https://images.pexels.com/photos/8471913/pexels-photo-8471913.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: FlaskConical,
  },
  {
    title: 'Computer & STEAM Labs',
    description:
      'Dedicated coding, robotics, and AI labs with 1:1 devices for every learner from Grade 6 onwards.',
    image:
      'https://images.pexels.com/photos/5530484/pexels-photo-5530484.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Monitor,
  },
  {
  title: 'Library & Research Hub',
  description:
    '30,000+ books, digital archives, quiet study pods, and a maker corner for curious minds.',
  image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=940&q=80',
  icon: BookOpen,
},
  {
    title: 'Sports Complex',
    description:
      'Cricket ground, football field, basketball courts, indoor gymnasium, and a heated learn-to-swim pool.',
    image:
      'https://images.pexels.com/photos/8927012/pexels-photo-8927012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Trophy,
  },
  {
    title: 'Safe Transport',
    description:
      'GPS-tracked buses with trained attendants, live parent app updates, and verified female staff on routes.',
    image:
      'https://images.pexels.com/photos/19760978/pexels-photo-19760978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Bus,
  },
  {
    title: 'Medical Support',
    description:
      'A qualified resident nurse, on-call pediatrician, and a fully stocked infirmary open through the school day.',
    image:
      'https://images.pexels.com/photos/8466717/pexels-photo-8466717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: HeartPulse,
  },
  {
    title: 'Cafeteria',
    description:
      'Nutritionist-planned, freshly cooked meals served in a bright, allergen-aware dining hall.',
    image:
      'https://images.pexels.com/photos/8617558/pexels-photo-8617558.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Utensils,
  },
];

export type Step = { n: string; title: string; description: string };

export const PROCESS: Step[] = [
  {
    n: '01',
    title: 'Enquiry',
    description:
      'Share your interest via the enquiry form or call our admissions team. We’ll share the prospectus and answer your questions.',
  },
  {
    n: '02',
    title: 'Application',
    description:
      'Submit the completed application form along with the required documents and the application fee.',
  },
  {
    n: '03',
    title: 'Assessment & Interaction',
    description:
      'Age-appropriate readiness check for younger children, or an interaction and written assessment for senior grades.',
  },
  {
    n: '04',
    title: 'Selection',
    description:
      'Our admissions committee reviews the application and interaction. Selected families receive a formal offer of admission.',
  },
  {
    n: '05',
    title: 'Enrollment',
    description:
      'Confirm your seat by paying the admission fee and completing enrollment. Welcome to the EAK family!',
  },
];

export type DatedEvent = {
  date: string;
  weekday: string;
  month: string;
  title: string;
  note: string;
};

export const IMPORTANT_DATES: DatedEvent[] = [
  {
    date: '15 Oct 2026',
    weekday: 'Thu',
    month: 'Oct',
    title: 'Applications Open',
    note: 'Online application portal goes live for all grades.',
  },
  {
    date: '12 Dec 2026',
    weekday: 'Sat',
    month: 'Dec',
    title: 'Application Deadline',
    note: 'Last date to submit completed applications.',
  },
  {
    date: '15-24 Jan 2027',
    weekday: 'Fri',
    month: 'Jan',
    title: 'Assessment & Interaction',
    note: 'Scheduled slot-wise; exact timings emailed individually.',
  },
  {
    date: '07 Feb 2027',
    weekday: 'Sun',
    month: 'Feb',
    title: 'Results Announced',
    note: 'Admission offers emailed to selected families.',
  },
  {
    date: '28 Feb 2027',
    weekday: 'Sun',
    month: 'Feb',
    title: 'Enrollment Deadline',
    note: 'Confirm your seat by paying the admission fee.',
  },
];

export type DocItem = { title: string; note: string };

export const DOCUMENTS: DocItem[] = [
  {
    title: 'Birth Certificate',
    note: 'Government-issued, as proof of date of birth.',
  },
  {
    title: 'Previous School Records',
    note: 'Report cards & transfer certificate (if applicable).',
  },
  {
    title: 'Passport-size Photographs',
    note: '4 recent photos of the child and 2 of each parent.',
  },
  {
    title: 'Address Proof',
    note: 'Aadhaar, passport, or utility bill in parent’s name.',
  },
  {
    title: 'Parent / Guardian ID Proof',
    note: 'Aadhaar, passport, or voter ID of both parents.',
  },
  {
    title: 'Immunisation Record',
    note: 'Updated vaccination history from your pediatrician.',
  },
];

export type FeeRow = {
  grade: string;
  annual: string;
  admission: string;
  includes: string;
};

export const FEES: FeeRow[] = [
  {
    grade: 'Grade 1-5',
    annual: 'Rs. 45,000',
    admission: 'Rs. 8,000',
    includes: 'Tuition, library, technology & activity fee',
  },
  {
    grade: 'Grade 6-8',
    annual: 'Rs. 58,000',
    admission: 'Rs. 10,000',
    includes: 'Tuition, labs, STEAM kit & activity fee',
  },
  {
    grade: 'Grade 9-12',
    annual: 'Rs. 72,000',
    admission: 'Rs. 12,000',
    includes: 'Tuition, board exam support & counselling',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  relation: string;
  avatar: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The teachers genuinely know my daughter. She has grown more confident in two years here than I could have imagined.',
    name: 'Atharv Patil',
    relation: 'Parent of Aarohi, Grade 4',
    avatar:
      'https://images.pexels.com/photos/3890576/pexels-photo-3890576.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    rating: 5,
  },
  {
    quote:
      'From the robotics lab to the music room, my son finally looks forward to school every single day. Worth every rupee.',
    name: 'Rohan Kumbhar',
    relation: 'Parent of Vivaan, Grade 7',
    avatar:
      'https://images.pexels.com/photos/20354887/pexels-photo-20354887.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    rating: 5,
  },
  {
    quote:
      'The admissions process was transparent and warm. The campus visit sealed it for us you can feel the care in every corner.',
    name: 'Dr. Kavita Chavan',
    relation: 'Parent of Ishaan, Grade 11',
    avatar:
      'https://images.pexels.com/photos/21642977/pexels-photo-21642977.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    rating: 5,
  },
  {
    quote:
      'My twins are in different streams and both are thriving. The personalised attention here is simply unmatched.',
    name: 'Sunil & Priya Kapoor',
    relation: 'Parents of Tara & Veer, Grade 9',
    avatar:
      'https://images.pexels.com/photos/38624436/pexels-photo-38624436.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    rating: 5,
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: 'What is the admissions process at EAK International School?',
    a: 'Admissions follow a simple five-step process: Enquiry → Application → Assessment & Interaction → Selection → Enrollment. You can start by filling out the enquiry form on this page, and our admissions team will guide you through each step.',
  },
  {
    q: 'Which classes are accepting applications for 2027-28?',
    a: 'Applications are open for Grade 1 through Grade 12, subject to seat availability. The main entry points are Nursery, Grade 1, Grade 6, and Grade 11. Limited seats are available in other grades  please enquire early.',
  },
  {
    q: 'What documents are required at the time of application?',
    a: 'You will need the childs birth certificate, previous school records (if applicable), four passport-size photographs of the child and two of each parent, address proof, and parent/guardian ID proof. A complete checklist is provided in the Required Documents section.',
  },
  {
    q: 'Is there an entrance assessment? What does it involve?',
    a: 'Yes. For Primary grades, we conduct an age-appropriate readiness interaction. For Middle and Secondary grades, there is a written assessment in English, Maths, and Science followed by an interaction with the child and parents.',
  },
  {
    q: 'How can I schedule a campus visit?',
    a: 'You can book a guided campus visit by clicking “Schedule a Visit” anywhere on this page, or by calling our admissions team at +91 98765 43210. Tours are conducted on weekdays between 9:00 AM and 2:00 PM with prior appointment.',
  },
  {
    q: 'Do you offer transport, and is the campus safe?',
    a: 'Yes. We operate a fleet of GPS-tracked buses with trained attendants covering over 40 routes across the city. The campus is monitored 24×7 with CCTV, a resident nurse, and a dedicated child-safeguarding policy.',
  },
];

export const HERO_IMAGE =
  'https://images.pexels.com/photos/8199169/pexels-photo-8199169.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400';
export const SECONDARY_HERO_IMAGE =
  'https://images.pexels.com/photos/698516/pexels-photo-698516.jpeg?auto=compress&cs=tinysrgb&h=500&w=500';
export const FINAL_CTA_IMAGE =
  'https://images.pexels.com/photos/35997307/pexels-photo-35997307.jpeg?auto=compress&cs=tinysrgb&h=800&w=1400';

export const _iconsInUse: LucideIcon[] = [Microscope, BookOpen];
