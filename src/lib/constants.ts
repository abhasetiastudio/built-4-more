export const site = {
  name: "Built 4 More",
  tagline: "High school leaders. Elementary confidence.",
  email: "hello@built4more.com",
  phone: "(555) 123-4567",
  location: "Greater Metro Area",
} as const;

/** Primary nav — Contact is the header CTA only */
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
    "He's still involved today: building the Mentor Corps, training high school leaders, and making sure every session stays kid-first—confidence and character before highlights.",
  ],
  quote: {
    text: "This was never about turning me into your coach.",
    highlight: "It's about high school players becoming leaders younger kids can trust.",
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
        "Teaching a 3rd grader to believe in themselves makes you a better leader on your own team.",
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

export const testimonials = [
  {
    quote:
      "My 4th grader was shy at first. After a few weeks with his high school mentor, he dribbles into the driveway and actually talks about being a good teammate.",
    author: "Jennifer R.",
    role: "Parent · 4th grade",
  },
  {
    quote:
      "Mentoring the little kids made me think about how I lead on my team. I'm more patient, and I take school more seriously too.",
    author: "Jordan K.",
    role: "10th grade · Mentor Corps",
  },
  {
    quote:
      "It's not a random teenager babysitting—they're basketball players who've been trained to teach. That difference matters to us.",
    author: "Marcus & Ana D.",
    role: "Parents · 2nd & 5th grade",
  },
] as const;

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
      "Curriculum, group sizes, and language are designed for grades K–5—not shrunk-down high school practice.",
  },
  {
    title: "Parents Stay in the Loop",
    description:
      "Session updates, clear expectations, and an open line when you have questions about your child's experience.",
  },
] as const;
