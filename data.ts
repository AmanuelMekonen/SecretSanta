import { Participant } from "./types";

const deriveFirst = (full: string) => full.trim().split(/\s+/)[0] || full;

const addFirstNames = (participants: Participant[]): Participant[] =>
  participants.map((p) => ({
    ...p,
    first_name: p.first_name || deriveFirst(p.person_name),
  }));

const mapAssignedInterests = (participants: Participant[]): Participant[] => {
  const interestByName = new Map<string, string>();
  participants.forEach((p) => {
    interestByName.set(p.person_name, p.assigned_person_interests);
  });
  return participants.map((p) => ({
    ...p,
    assigned_person_interests: interestByName.get(p.assigned_person) || "",
  }));
};

// Fallback data used if CSV fetch fails.
const FALLBACK_PARTICIPANTS: Participant[] = [
  {
    person_name: "Addyson cobb",
    password: "989304",
    assigned_person: "Brittany Avery",
    assigned_person_interests:
      "The GYMMMd!!! (defyne gymshark etc) -clothes -sweatshirts, vintage tees, music is pretty solid and anything is cool",
    first_name: "Addyson",
  },
  {
    person_name: "Amanuel Fesseha",
    password: "654321",
    assigned_person: "Jacob Stewart",
    assigned_person_interests: "I like building or making stuff and staing warm when riding my bike",
    first_name: "Amanuel",
  },
  {
    person_name: "Anna Majure",
    password: "091751",
    assigned_person: "Miriah E",
    assigned_person_interests: "I like anything but i like to cook/ bake and other things too but i cant think of them :)",
    first_name: "Anna",
  },
  {
    person_name: "Ava Smith",
    password: "095680",
    assigned_person: "Tony robinson",
    assigned_person_interests: "Starbucks, chocolate, self care stuff, makeup stuff, ",
    first_name: "Ava",
  },
  {
    person_name: "Brittany Avery",
    password: "345687",
    assigned_person: "Ava Smith",
    assigned_person_interests:
      "The color pink or green, cat stuff, matcha, cute planners, twilight( the movie franchise, not the annual bike race or time of day). Socks. ",
    first_name: "Brittany",
  },
  {
    person_name: "Colin Harker",
    password: "252608",
    assigned_person: "Emily Waldrop",
    assigned_person_interests: "I ain’t sayin nuthin. Go suck a lemon.",
    first_name: "Colin",
  },
  {
    person_name: "Ella McCook",
    password: "902283",
    assigned_person: "Megan DeVine",
    assigned_person_interests: "Board games, art, music, good tequila, thrifting",
    first_name: "Ella",
  },
  {
    person_name: "Ella Smith",
    password: "711420",
    assigned_person: "Anna Majure",
    assigned_person_interests: "Reading, sports, and cooking ",
    first_name: "Ella",
  },
  {
    person_name: "Emily Waldrop",
    password: "217506",
    assigned_person: "Amanuel Fesseha",
    assigned_person_interests: "Music, Books, Selfcare, Sports",
    first_name: "Emily",
  },
  {
    person_name: "Georgia Martin ",
    password: "308490",
    assigned_person: "TJ Collins",
    assigned_person_interests: "Working out, wine, candles & anything pink ",
    first_name: "Georgia",
  },
  {
    person_name: "Hailey Shon",
    password: "098556",
    assigned_person: "Wesley Rayburn ",
    assigned_person_interests: "Beauty, clothes, food, candy, bath products, blankets!!",
    first_name: "Hailey",
  },
  {
    person_name: "Hayden Pearman ",
    password: "764664",
    assigned_person: "Wes Harris",
    assigned_person_interests:
      "Local coffee shops, yoga, Mexican food, self care, books, UGA football, Carolina panthers, music",
    first_name: "Hayden",
  },
  {
    person_name: "Jacob Stewart",
    password: "465291",
    assigned_person: "Hayden Pearman ",
    assigned_person_interests: "Coffee cups/hats etc",
    first_name: "Jacob",
  },
  {
    person_name: "James Lockamy",
    password: "404901",
    assigned_person: "Georgia Martin ",
    assigned_person_interests: "Music, boyish nerdy stuff, gym gear, posters",
    first_name: "James",
  },
  {
    person_name: "Josh Pehrson ",
    password: "519085",
    assigned_person: "Ella Smith",
    assigned_person_interests: "Anything outdoors. Food. Really anything. I’m not picky.",
    first_name: "Josh",
  },
  {
    person_name: "Josiah Raynor ",
    password: "625706",
    assigned_person: "James Lockamy",
    assigned_person_interests: "People/Gaming/God",
    first_name: "Josiah",
  },
  {
    person_name: "Kaitlyn Kennedy ",
    password: "875193",
    assigned_person: "Colin Harker",
    assigned_person_interests: "Weed liquor stuff for my cat ",
    first_name: "Kaitlyn",
  },
  {
    person_name: "Kayla Parker",
    password: "642653",
    assigned_person: "Addyson cobb",
    assigned_person_interests: "Pickles, cats, devil’s lettuce, sunflowers haha ",
    first_name: "Kayla",
  },
  {
    person_name: "Lydia Wong ",
    password: "973970",
    assigned_person: "Hailey Shon",
    assigned_person_interests: "Uh idk",
    first_name: "Lydia",
  },
  {
    person_name: "Megan DeVine",
    password: "301170",
    assigned_person: "Josh Pehrson ",
    assigned_person_interests:
      "I love anything gym/exercise/working out related & spending time with my doggy... I LOVE CHICA CHIDA TEQUILA MORE THAN LIFE!",
    first_name: "Megan",
  },
  {
    person_name: "Miriah E",
    password: "103921",
    assigned_person: "Kaitlyn Kennedy ",
    assigned_person_interests: "Candy, Alani, orrrrrr you can buy something for my kids and I won't be mad ",
    first_name: "Miriah",
  },
  {
    person_name: "Rajaee Delane",
    password: "944108",
    assigned_person: "Lydia Wong ",
    assigned_person_interests: "Stock Market ",
    first_name: "Rajaee",
  },
  {
    person_name: "TJ Collins",
    password: "764931",
    assigned_person: "Kayla Parker",
    assigned_person_interests: "Anything is fine",
    first_name: "TJ",
  },
  {
    person_name: "Tony robinson",
    password: "121849",
    assigned_person: "Rajaee Delane",
    assigned_person_interests: "Anything outdoors ",
    first_name: "Tony",
  },
  {
    person_name: "Wes Harris",
    password: "755067",
    assigned_person: "Josiah Raynor ",
    assigned_person_interests: "Anything as long as it’s weird",
    first_name: "Wes",
  },
  {
    person_name: "Wesley Rayburn ",
    password: "491170",
    assigned_person: "Ella McCook",
    assigned_person_interests: "Basketball, candles, books, PS5s, hats, clothes, records.",
    first_name: "Wesley",
  },
];

let cachedParticipants: Participant[] | null = null;

const csvUrl = `${import.meta.env.BASE_URL || "/"}participants.csv`;

function parseCsv(text: string): Participant[] {
  const rows = text.trim().split(/\r?\n/);
  if (rows.length < 2) return [];

  const parseLine = (line: string) => {
    const out: string[] = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuotes && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === "," && !inQuotes) {
        out.push(current);
        current = "";
      } else {
        current += ch;
      }
    }
    out.push(current);
    return out.map((s) => s.trim());
  };

  const header = parseLine(rows[0]);
  const idx = (key: string) => header.indexOf(key);
  const nameIdx = idx("person_name");
  const passIdx = idx("password");
  const assignedIdx = idx("assigned_person");
  const interestsIdx = idx("assigned_person_interests");
  if (nameIdx === -1 || passIdx === -1 || assignedIdx === -1 || interestsIdx === -1) return [];

  return rows
    .slice(1)
    .map((line) => {
      const cols = parseLine(line);
      return {
        person_name: cols[nameIdx] || "",
        password: cols[passIdx] || "",
        assigned_person: cols[assignedIdx] || "",
        assigned_person_interests: cols[interestsIdx] || "",
      };
    })
    .filter((p) => p.person_name);
}

export async function fetchParticipants(): Promise<Participant[]> {
  if (cachedParticipants) return cachedParticipants;
  try {
    const res = await fetch(csvUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const parsed = parseCsv(text);
    const enriched = parsed.length ? parsed : FALLBACK_PARTICIPANTS;
    cachedParticipants = mapAssignedInterests(addFirstNames(enriched));
  } catch (err) {
    cachedParticipants = mapAssignedInterests(addFirstNames(FALLBACK_PARTICIPANTS));
  }
  return cachedParticipants;
}

export function getFallbackParticipants(): Participant[] {
  return mapAssignedInterests(addFirstNames(FALLBACK_PARTICIPANTS));
}
