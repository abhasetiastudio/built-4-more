export const site = {
  name: "Built 4 More",
  tagline: "BUILT TO COMPETE.\nBUILT TO LEAD.",
  email: "built4more@abhasetia.studio",
  phone: "(555) 123-4567",
  location: "Greater Metro Area",
} as const;

/** Header nav — same on homepage and all inner pages */
export const primaryNavLinks = [
  { href: "#mission", label: "Mission" },
  { href: "#leadership-week", label: "Leadership Week" },
  { href: "#mindset", label: "Mindset" },
  { href: "#parents", label: "Parents" },
  { href: "#beliefs", label: "Beliefs" },
  { href: "/founder", label: "Founder" },
] as const;

/** Footer explore links */
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "Mission" },
  { href: "/programs", label: "Programs" },
  { href: "/founder", label: "Abir" },
  { href: "/about", label: "Mentors" },
  { href: "/faq", label: "FAQ" },
] as const;

export const founder = {
  name: "Abir Bajaj",
  title: "Founder",
  tagline:
    "Connecting high school basketball players with elementary students—leadership through mentorship, not another camp.",
  roleNote:
    "Vision, oversight, and the peer-mentorship model—still on the court today.",
  bio: [
    "Abir Bajaj founded Built 4 More to connect high school basketball players with elementary students—leadership through mentorship, not another camp.",
    "He started as a high school player who saw what older teammates could offer younger kids—and believed every elementary student deserved that same investment from someone just a few years ahead.",
  ],
  quote: {
    text: "This was never about turning me into your coach.",
    addendum: {
      body: [
        "I wanted to be there for younger athletes in a way I didn't always have growing up.",
        "Not just to help with basketball — but to help kids build confidence, leadership, resilience, and belief in themselves both on and off the court.",
      ],
    },
  },
  principles: [
    {
      title: "Peer leadership works",
      description:
        "Elementary students listen to high schoolers differently—more relatable, less intimidating, more real.",
    },
    {
      title: "Mentors grow too",
      description:
        "Teaching an elementary kid to believe in themselves makes you a better leader on your own team.",
    },
    {
      title: "Structure matters",
      description:
        "Trained mentors, adult supervision, and sessions designed for young kids—not chaos.",
    },
  ],
} as const;

/** What elementary students build—with high school mentors leading on the court */
export const pillars = [
  {
    title: "Leadership",
    description:
      "Learn to try first, cheer others on, and step up—because someone a few years older is showing you how.",
    icon: "◆",
  },
  {
    title: "Confidence",
    description:
      "Get comfortable with the ball, your voice, and trying new things in a low-pressure, kid-first environment.",
    icon: "◇",
  },
  {
    title: "Discipline",
    description:
      "Show up ready, listen, and finish what you start—habits that stick when older mentors keep the standard high.",
    icon: "▣",
  },
  {
    title: "Resilience",
    description:
      "Miss a shot, breathe, and go again. High school mentors normalize mistakes and model bouncing back.",
    icon: "◎",
  },
  {
    title: "Communication",
    description:
      "Ask questions, speak up in huddles, and learn to be a good teammate—skills that start young.",
    icon: "◈",
  },
  {
    title: "Mindset",
    description:
      "Believe you can get better. Hear it from someone who was in your shoes not long ago.",
    icon: "◉",
  },
] as const;

export const programs = [
  {
    id: "court-sessions",
    name: "Court Sessions",
    ages: "Elementary · Grades 3–5",
    duration: "Weekly · 90 minutes",
    description:
      "Small-group basketball and leadership sessions led by trained high school mentors. Fundamentals, games, and real talk—built for kids who are just finding their love for the game.",
    highlights: [
      "Groups capped for personal attention",
      "High school mentor + adult oversight",
      "Skills, teamwork, and confidence drills",
      "No travel-team pressure—just growth",
    ],
  },
  {
    id: "mentor-corps",
    name: "Mentor Corps",
    ages: "High School · Grades 9–10+",
    duration: "Season-long commitment",
    description:
      "For varsity and JV players who want to lead. Learn how to coach younger kids, communicate clearly, and represent something bigger than your stat line.",
    highlights: [
      "Leadership training before you mentor",
      "Weekly elementary sessions you run on-court",
      "Feedback from program staff",
      "Service hours & character development",
    ],
  },
  {
    id: "hoop-lab",
    name: "Hoop Lab",
    ages: "Elementary · Grades K–2",
    duration: "Monthly · 2 hours",
    description:
      "Intro sessions for the youngest ballers—movement, hoops basics, and fun with high school mentors who keep it simple, patient, and encouraging.",
    highlights: [
      "Age-appropriate games and stations",
      "Focus on fun and participation",
      "Same mentor team, lighter curriculum",
      "Great first step before Court Sessions",
    ],
  },
] as const;

export const beliefs = [
  {
    title: "SPORTS ARE BIGGER THAN THE SCOREBOARD.",
    body: "Winning matters. Growth matters more. We believe the game should build confidence, resilience, discipline, and character that lasts far beyond the final buzzer.",
  },
  {
    title: "LEADERSHIP STARTS BEFORE ADULTHOOD.",
    body: "Young athletes are already becoming teammates, communicators, role models, and decision makers. We want them to recognize that now — not years later.",
  },
  {
    title: "CONFIDENCE IS BUILT THROUGH CHALLENGE.",
    body: "Real growth happens when athletes step outside their comfort zone, learn to respond to adversity, and discover what they're capable of under pressure.",
  },
  {
    title: "GREAT PLAYERS AREN'T ALWAYS GREAT LEADERS — BUT THEY CAN BECOME BOTH.",
    body: "Built 4 More exists to help athletes grow not just in skill, but in mindset, accountability, presence, and the way they impact people around them.",
  },
] as const;

/** Flagship cohort experiences — add future camps here as additional entries */
export const leadershipWeek = {
  slug: "leadership-week",
  name: "Built 4 More Leadership Week",
  week: "August 10–15",
  fullName: "Built 4 More Leadership Week · August 10–15",
  subtitle:
    "A 5-day leadership and basketball development experience designed to help young athletes build confidence, communication, resilience, and leadership — on and off the court.",
  details: [
    { label: "August 10–15" },
    { label: "5-Day Cohort Experience" },
    { label: "Tentative Time" },
    { label: "Grades K–7" },
    { label: "Limited to 6–8 Athletes" },
    { label: "Northville / Novi Area" },
    { label: "Founding Summer Cohort" },
  ],
  why: [
    "Built 4 More was created to help athletes grow beyond the game.",
    "This week-long experience combines basketball training, leadership development, competitive challenges, and intentional reflection in a small-group environment designed to build confidence, accountability, communication, and resilience.",
    "More than a camp, this is a space for athletes to challenge themselves, connect with teammates, and begin developing the mindset needed for success both on and off the court.",
  ],
  themes: [
    {
      day: "Monday",
      title: "Confidence",
      body: "Learning how to carry yourself, communicate, and compete with belief.",
    },
    {
      day: "Tuesday",
      title: "Communication",
      body: "Building stronger teammate habits and leadership presence.",
    },
    {
      day: "Wednesday",
      title: "Accountability",
      body: "Owning actions, effort, discipline, and response to mistakes.",
    },
    {
      day: "Thursday",
      title: "Resilience",
      body: "Learning how to respond under pressure and adversity.",
    },
    {
      day: "Friday",
      title: "Leadership",
      body: "Using your influence to positively impact others.",
    },
  ],
  differentiators: [
    "Small-group experience (6–8 athletes max)",
    "Leadership-focused development",
    "Competitive basketball training",
    "Reflection and mindset sessions",
    "Intentional mentorship environment",
    "Friday parent showcase and athlete reflections",
  ],
  cta: {
    title: "Ready To Join The Founding Cohort?",
    subtitle: "Limited spots available for the first Built 4 More Leadership Week · August 10–15.",
    buttonLabel: "Register Now",
    href: "/register",
  },
} as const;

export const faqs = [
  {
    question: "Who are the mentors?",
    answer:
      "High school basketball players—typically grades 9–12—who apply to Mentor Corps, complete leadership training, and mentor elementary students under adult supervision. They're not professional coaches; they're older athletes learning to lead by giving back.",
  },
  {
    question: "What ages is this for?",
    answer:
      "Elementary students are our focus: Hoop Lab (K–2), Court Sessions (grades 3–5), with room to grow. High school athletes join as mentors through Mentor Corps.",
  },
  {
    question: "Does my child need basketball experience?",
    answer:
      "No. Some kids are brand new to the game; others already play rec or school ball. Sessions meet kids where they are—confidence and character come first.",
  },
  {
    question: "How is this different from a regular camp?",
    answer:
      "Your child learns from someone closer to their world—a high school player they can look up to, not just an adult coach. Basketball is the hook; leadership, teamwork, and belief in yourself are the point.",
  },
  {
    question: "How do you keep sessions safe and structured?",
    answer:
      "Every session has trained high school mentors plus on-site adult staff. Clear rules, sign-in/out, and small groups so kids get attention—not chaos.",
  },
  {
    question: "Can my high schooler become a mentor?",
    answer:
      "Yes—if they're on a school or club basketball team and ready to commit for the season. Apply through Contact and we'll share Mentor Corps requirements and training dates.",
  },
] as const;

/** What high school mentors bring to elementary sessions */
export const mentorLessons = [
  {
    title: "Someone Who Gets It",
    body: "Mentors were kids not long ago. They speak in a way that lands—less lecture, more \"here's what worked for me.\"",
  },
  {
    title: "Basketball They Can Touch",
    body: "Dribbling, passing, footwork—broken down by players who still practice it every day, at a pace little kids can follow.",
  },
  {
    title: "Effort Over Highlights",
    body: "High school athletes show what trying hard looks like—hustle, encouragement, and celebrating teammates.",
  },
  {
    title: "Leadership by Example",
    body: "How to line up, listen, high-five, and bounce back—mentors model the behavior they want the next generation to carry.",
  },
] as const;

export const trustPoints = [
  {
    title: "Trained Teen Mentors",
    description:
      "High school players complete leadership training before they ever lead a session—not just anyone with a ball.",
  },
  {
    title: "Adults on Site",
    description:
      "Program staff oversee every session. Mentors lead activities; adults handle safety, logistics, and parent communication.",
  },
  {
    title: "Built for Elementary Kids",
    description:
      "Curriculum, group sizes, and language are designed for grades K–7—not shrunk-down high school practice.",
  },
  {
    title: "Parents Stay in the Loop",
    description:
      "Session updates, clear expectations, and an open line when you have questions about your child's experience.",
  },
] as const;
