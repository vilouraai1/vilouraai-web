export type City = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroIntro: string;
  /** City-specific paragraphs: why forecasting bites differently here. */
  angles: { heading: string; body: string }[];
  /** Local demand patterns worth planning around. */
  patterns: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const CITIES: City[] = [
  {
    slug: "dallas",
    name: "Dallas",
    metaTitle: "Demand forecasting in Dallas",
    metaDescription:
      "Free 12-week booking forecast for Dallas businesses. See the weeks you'll turn customers away before they book with the salon, spa, or restaurant next door.",
    heroEyebrow: "Demand forecasting in Dallas, TX",
    heroTitle: "In Dallas, the customer you turn away is already next door.",
    heroIntro:
      "Dallas is the densest market in North Texas. Your customers have five alternatives within a ten-minute drive, and when your chairs, tables, or crews are full, they do not wait — they book the next name on the list. A 12-week forecast shows you exactly which weeks that happens, so you open hours, staff up, and hold full price instead of watching the business walk down the block.",
    angles: [
      {
        heading: "Density cuts both ways",
        body: "A busy Dallas neighborhood puts thousands of potential customers in walking distance — and just as many competitors. The same foot traffic that fills your books in a good week punishes a full schedule in a bad one, because the spillover has somewhere to go. Forecasting turns that density into an advantage: you see the crunch weeks early and capture the demand instead of donating it.",
      },
      {
        heading: "Uptown, Deep Ellum, and the suburbs run on different calendars",
        body: "A Deep Ellum restaurant's Saturday looks nothing like a North Dallas med spa's Tuesday. Downtown events, convention traffic, and neighborhood routines each pull demand in their own direction. A forecast built on your own bookings respects that — it reads your pattern, not a city average, and flags the weeks that matter to your business specifically.",
      },
      {
        heading: "Discounting is the most expensive habit in a competitive market",
        body: "When every competitor runs a promo, the temptation is to match it. But discounting a week that was already going to fill just hands margin to customers who would have paid full price. The forecast separates the weeks that need help from the weeks that need more chairs, so your promotions go only where they earn their keep.",
      },
    ],
    patterns: [
      {
        heading: "Holiday and event surges",
        body: "December parties, New Year's bookings, and downtown event weekends stack demand fast. The businesses that see them coming add hours; the rest turn people away at the door.",
      },
      {
        heading: "Summer slowdowns in appointment businesses",
        body: "When school lets out, routines break. Appointment books that were solid in spring thin out — and the owners who planned for it fill the gap with packages and memberships instead of panic discounts.",
      },
      {
        heading: "Convention and game-day spillover",
        body: "Big weekends downtown ripple outward into restaurants, salons, and services across the city. If your forecast flags one, you staff for it instead of being surprised by it.",
      },
    ],
    faqs: [
      {
        q: "I'm in a Dallas suburb, not downtown. Does this still apply?",
        a: "Yes. Your forecast is built on your bookings, not a downtown average. Whether your customers come from Lakewood, Oak Cliff, or North Dallas, the model reads your pattern and flags your crunch weeks.",
      },
      {
        q: "How is this different from just looking at last year's calendar?",
        a: "Last year's calendar shows what happened. A forecast shows what's coming, with probability bands that tell you how sure to be — so you can staff, price, and promote weeks before they arrive instead of reacting after the fact.",
      },
      {
        q: "What do you need from my Dallas business?",
        a: "Twelve weeks of booking history — a simple export from whatever you already use. No logins, no new software, no passwords. Ten minutes of your time.",
      },
    ],
  },
  {
    slug: "fort-worth",
    name: "Fort Worth",
    metaTitle: "Demand forecasting in Fort Worth",
    metaDescription:
      "Free 12-week booking forecast for Fort Worth businesses. Plan around Stockyards weekends and seasonal swings — before your schedule overflows.",
    heroEyebrow: "Demand forecasting in Fort Worth, TX",
    heroTitle: "Fort Worth runs on seasons. Your schedule should see them coming.",
    heroIntro:
      "Fort Worth moves to its own rhythm: Stockyards weekends, rodeo season, summer heat that reshapes when people go out, and steady growth pushing west. Businesses here live with real seasonal swings — and the owners who plan for them staff up for the rush and hold their nerve through the quiet weeks. A 12-week forecast puts those swings on a calendar you can act on.",
    angles: [
      {
        heading: "Tourism weekends are not random",
        body: "The Stockyards, downtown events, and rodeo season pull visitors in waves. If your business serves them — restaurants, salons, hospitality, services — those waves show up in your books whether you plan for them or not. A forecast turns them from surprises into staffing decisions made weeks ahead.",
      },
      {
        heading: "Summer heat changes behavior",
        body: "A Fort Worth July does not behave like a Fort Worth October. Outdoor work shifts earlier, appointments move, and some services slow while others spike. Twelve weeks of your own history, modeled forward, shows which side of that your business lands on — so you are not guessing in June.",
      },
      {
        heading: "Growth on the west side rewards the prepared",
        body: "New neighborhoods mean new customers, and new customers mean new competition. The businesses that grow with the west side are the ones whose schedules can stretch: extra hours opened before the rush, not after the waitlist forms. That is a forecasting decision, made one quarter at a time.",
      },
    ],
    patterns: [
      {
        heading: "Rodeo and event season",
        body: "Stock Show season and downtown events concentrate demand into specific weeks. Restaurants and services near the action feel it first — and the forecast flags those weeks before they fill.",
      },
      {
        heading: "Summer reshuffles routines",
        body: "Heat and school breaks move appointments around. The businesses that expect it run summer packages and adjusted hours; the ones that don't discount in a panic.",
      },
      {
        heading: "Holiday gatherings, Fort Worth style",
        body: "From Thanksgiving through New Year's, family visits and parties fill calendars. The crunch weeks are predictable — if you look at your own numbers instead of your gut.",
      },
    ],
    faqs: [
      {
        q: "My business depends on Stockyards foot traffic. Can a forecast help with that?",
        a: "Yes — because tourist weekends show up in your booking history as a pattern. The forecast reads that pattern and tells you which coming weeks will run hot, so you can staff and stock for them instead of scrambling.",
      },
      {
        q: "What if my business is new and I don't have much history?",
        a: "Twelve weeks of bookings is enough to start. If you have less, send what you have and we'll tell you honestly what the forecast can and can't say yet.",
      },
      {
        q: "Do you work with businesses outside downtown Fort Worth?",
        a: "Yes. We serve the whole Fort Worth area — downtown, the west side, Alliance, and everywhere in between. Your forecast is built on your bookings, wherever your customers come from.",
      },
    ],
  },
  {
    slug: "plano",
    name: "Plano",
    metaTitle: "Demand forecasting in Plano",
    metaDescription:
      "Free 12-week booking forecast for Plano businesses. Legacy West foot traffic, appointment-driven clients, and corporate calendars — planned a quarter ahead.",
    heroEyebrow: "Demand forecasting in Plano, TX",
    heroTitle: "Plano clients plan ahead. Your schedule should too.",
    heroIntro:
      "Plano is an appointment town. Corporate calendars, school schedules, and Legacy West foot traffic set the tempo, and your clients book around all three. When a med spa, salon, or service business here overbooks, the client does not wait — they rebook with the next provider on their list. A 12-week forecast tells you which weeks will overflow, while there is still time to open hours and keep them.",
    angles: [
      {
        heading: "Legacy West raises the bar",
        body: "Plano's busiest corridors attract customers who expect availability and polish — and competitors who deliver both. In a market like that, a full schedule is not a good problem to have; it is a leak. Forecasting shows you the leak weeks in advance, so you can add capacity instead of apologizing.",
      },
      {
        heading: "Corporate calendars drive demand",
        body: "Plano's workforce runs on quarterly rhythms: project pushes, conferences, relocations, and the holiday slowdown that follows. Those rhythms land in your booking book as patterns. A forecast reads them and turns them into decisions — extra staff for the busy quarter, membership pushes for the quiet one.",
      },
      {
        heading: "Memberships and packages need timing",
        body: "The quiet weeks in a Plano appointment business are the ones where a well-timed package or membership offer pays for itself. The mistake is discounting the weeks that were already going to fill. The forecast draws the line between the two, so your offers go where they actually grow revenue.",
      },
    ],
    patterns: [
      {
        heading: "Back-to-school reset",
        body: "Late August reorders family life across Plano. Appointment businesses that plan for the reset capture the new routine; the ones that don't spend September wondering where everyone went.",
      },
      {
        heading: "Holiday season, booked solid",
        body: "From Thanksgiving through New Year's, Plano's appointment books fill first and fastest. The forecast flags the overflow weeks while you can still open hours.",
      },
      {
        heading: "Spring refresh",
        body: "March and April bring the annual reset — new routines, events, and spending. Businesses that see it coming staff for it; the rest play catch-up.",
      },
    ],
    faqs: [
      {
        q: "I run a med spa in Plano. Is forecasting really for my business?",
        a: "Med spas are one of the best fits: appointment-driven, seasonal, and capacity-limited. When your chairs are full, every turned-away client is revenue that goes to the next spa. A forecast shows you those weeks before they happen.",
      },
      {
        q: "How accurate is a 12-week forecast?",
        a: "It comes with probability bands, not false precision — a range that says how sure to be. That honesty is the point: you make staffing and pricing decisions with real uncertainty shown, instead of a single number you can't trust.",
      },
      {
        q: "What does the free forecast include?",
        a: "A 12-week forecast built on your bookings, with the weeks you'll overbook flagged. Yours to keep, no strings — even if you never pay us a dollar.",
      },
    ],
  },
  {
    slug: "frisco",
    name: "Frisco",
    metaTitle: "Demand forecasting in Frisco",
    metaDescription:
      "Free 12-week booking forecast for Frisco businesses. New neighborhoods, sports traffic, and the fastest-growing market in DFW — planned before the rush.",
    heroEyebrow: "Demand forecasting in Frisco, TX",
    heroTitle: "Frisco is growing fast. Your schedule has to keep up.",
    heroIntro:
      "Frisco adds new neighborhoods, new families, and new competitors every year. For a local business, that growth is either a tailwind or a treadmill: more customers, but more rivals for them, and demand that shifts as fast as the rooftops go up. A 12-week forecast keeps your schedule ahead of the curve — you see the busy weeks before they arrive and open capacity while there is still time.",
    angles: [
      {
        heading: "Growth means your pattern changes",
        body: "A forecast from last year is not enough in a city where the customer base keeps expanding. New subdivisions bring new routines, new schools shift family calendars, and new competitors open down the street. Twelve weeks of fresh bookings, modeled forward, catches the pattern as it is now — not as it was two years ago.",
      },
      {
        heading: "Sports and events concentrate demand",
        body: "The Star, Toyota Stadium, and the event calendar pull crowds into Frisco on specific weekends. Restaurants, salons, and services feel those weekends as sudden surges. The businesses that plan for them staff up and hold price; the ones that don't turn customers away at the door.",
      },
      {
        heading: "New businesses can't afford to guess",
        body: "If you opened in the last year or two, every quarter is still a first. You have no five-year gut feel to fall back on — which makes a forecast built on your actual numbers more valuable, not less. It replaces guessing with a calendar you can plan around.",
      },
    ],
    patterns: [
      {
        heading: "Youth sports weekends",
        body: "Tournament and game weekends flood Frisco with visiting families. Services and restaurants near the action see sharp, short surges — the kind a forecast flags weeks early.",
      },
      {
        heading: "New-neighborhood waves",
        body: "As new subdivisions fill in, new customers arrive in waves. The businesses that track their own booking trend spot the wave early and staff for it.",
      },
      {
        heading: "Holiday and school-calendar peaks",
        body: "Frisco's family-heavy population runs on the school calendar. Breaks, holidays, and back-to-school each move demand — predictably, if you look at your numbers.",
      },
    ],
    faqs: [
      {
        q: "My Frisco business is less than a year old. Can you forecast with so little history?",
        a: "Twelve weeks of bookings is enough to start. If you have less, send what you have and we'll tell you honestly what the forecast can and can't say yet — no invented precision.",
      },
      {
        q: "We get slammed on event weekends. How does forecasting help?",
        a: "Event weekends show up in your booking history as a repeating pattern. The forecast reads it and flags the coming surge weeks, so you can add hours and staff before the waitlist forms instead of after.",
      },
      {
        q: "What do you need from me to start?",
        a: "Twelve weeks of booking history — a simple export from whatever you already use. No logins, no new software. Ten minutes of your time.",
      },
    ],
  },
  {
    slug: "arlington",
    name: "Arlington",
    metaTitle: "Demand forecasting in Arlington",
    metaDescription:
      "Free 12-week booking forecast for Arlington businesses. Stadium events, game days, and entertainment-district surges — staffed before they hit.",
    heroEyebrow: "Demand forecasting in Arlington, TX",
    heroTitle: "In Arlington, the calendar is the business.",
    heroIntro:
      "Few cities in Texas run on events the way Arlington does. Stadium crowds, concerts, and game days can turn an ordinary weekend into your biggest week of the quarter — or your biggest missed opportunity. A 12-week forecast maps those swings onto your own booking history, so you staff for the surges, price them right, and stop being surprised by your own city.",
    angles: [
      {
        heading: "Event weekends are your best weeks — if you're ready",
        body: "When tens of thousands of visitors pour into the entertainment district, nearby restaurants, salons, and services either capture the surge or watch it walk past. The difference is preparation: staff scheduled, hours extended, inventory ready. A forecast flags the surge weeks while you can still act on them.",
      },
      {
        heading: "The quiet weeks need a plan too",
        body: "Event-driven demand means event-shaped gaps. The weeks between big weekends can go soft, and the businesses that survive them are the ones with a plan: packages, memberships, and local offers timed to the lull instead of panic discounts timed to nothing. The forecast shows you both the peaks and the valleys.",
      },
      {
        heading: "Visitors and locals need different playbooks",
        body: "A game-day crowd wants speed and availability. Your regulars want their usual slot. When both hit the same week, the schedule breaks unless you saw it coming. Forecasting separates the two patterns in your own numbers, so you can serve both instead of choosing.",
      },
    ],
    patterns: [
      {
        heading: "Game days and concerts",
        body: "AT&T Stadium and Globe Life Field set Arlington's tempo. Event weeks concentrate demand sharply — and the forecast flags them before your books fill.",
      },
      {
        heading: "Tourism season",
        body: "Summer and holiday visitors stack on top of local demand. The businesses that plan for the stack capture it; the rest turn people away.",
      },
      {
        heading: "Between-event lulls",
        body: "The weeks without a big event are where smart offers earn their keep. A forecast shows you the lull coming, so your promotions land on time.",
      },
    ],
    faqs: [
      {
        q: "My business isn't in the entertainment district. Does Arlington's event calendar still matter?",
        a: "Often, yes — event weekends ripple across the whole city as visitors stay, eat, and book services nearby. Your own booking history shows whether the ripple reaches you, and the forecast reads that pattern either way.",
      },
      {
        q: "How far ahead can I really plan staffing?",
        a: "Twelve weeks. That's enough to adjust hours, bring on seasonal help, and time your promotions — decisions that need lead time, made with real numbers instead of guesses.",
      },
      {
        q: "What does the free forecast cost?",
        a: "Ten minutes and an export of twelve weeks of bookings. You keep the forecast either way, even if you never pay us a dollar.",
      },
    ],
  },
  {
    slug: "lewisville",
    name: "Lewisville",
    metaTitle: "Demand forecasting in Lewisville",
    metaDescription:
      "Free 12-week booking forecast for Lewisville businesses. Your home-town market, your own numbers — see the weeks you'll overbook before they arrive.",
    heroEyebrow: "Demand forecasting in Lewisville, TX",
    heroTitle: "Lewisville is home turf. Your forecast should act like it.",
    heroIntro:
      "VilouraAI is based in Lewisville, and this is the market we know best: a mix of long-standing local services, Old Town storefronts, and corridor businesses serving commuters and families across Denton County. The businesses that win here are the ones whose calendars hold up — and a 12-week forecast built on your own bookings shows you exactly which weeks will overflow, while there is still time to open hours and keep the customer.",
    angles: [
      {
        heading: "Home-town customers remember",
        body: "In a city where word of mouth still travels fast, turning a regular away is not a one-time loss — it is a story they tell. When your chairs, tables, or crews are full, that customer books elsewhere, and in a tight local market they may not come back. A forecast flags the weeks that will overflow so you can add capacity before the regular ever has to look elsewhere.",
      },
      {
        heading: "Corridor traffic is not the same as local demand",
        body: "Lewisville sits on the I-35E corridor between Dallas and Denton, which means through-traffic and commuter routines shape your weeks in ways a city average never captures. Your forecast reads your own bookings, so it separates the weeks your locals drive from the weeks the corridor does.",
      },
      {
        heading: "Small-market seasons hit harder",
        body: "A holiday surge or a school-calendar shift moves a Lewisville appointment book fast, because the customer base is concentrated. The businesses that plan for those swings staff up and hold price; the ones that don't discount weeks that were already going to fill. The forecast draws that line for you.",
      },
    ],
    patterns: [
      {
        heading: "Back-to-school reset",
        body: "Late August reorders family life across Lewisville. Appointment businesses that plan for the reset capture the new routine; the ones that don't spend September wondering where everyone went.",
      },
      {
        heading: "Holiday and event peaks",
        body: "From Thanksgiving through New Year's, calendars fill first and fastest. The forecast flags the overflow weeks while you can still open hours.",
      },
      {
        heading: "Summer rhythm changes",
        body: "Heat and school breaks move appointments around. The businesses that expect it run summer packages and adjusted hours; the ones that don't discount in a panic.",
      },
    ],
    faqs: [
      {
        q: "Are you actually in Lewisville?",
        a: "Yes. VilouraAI is based in Lewisville, Texas. If your business is here too, your forecast comes from the people who know this market block by block.",
      },
      {
        q: "What do you need from my Lewisville business?",
        a: "Twelve weeks of booking history — a simple export from whatever you already use. No logins, no new software, no passwords. Ten minutes of your time.",
      },
      {
        q: "My business is small. Is forecasting overkill?",
        a: "Small is exactly when it matters: with a concentrated customer base, a few turned-away regulars are a visible share of your week. A forecast shows you those weeks before they happen, so you keep the regulars you already earned.",
      },
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((city) => city.slug === slug);
}
