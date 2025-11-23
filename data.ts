import { Participant } from "./types";

// Fallback data used if CSV fetch fails.
const FALLBACK_PARTICIPANTS: Participant[] = [
  { person_name: "Amanuel", password: "123456", assigned_person: "Priya", assigned_person_interests: "fitness gear, running accessories, and protein snacks" },
  { person_name: "Brittany", password: "123456", assigned_person: "Lena", assigned_person_interests: "fitness gear, running accessories, and protein snacks" },
  { person_name: "Priya", password: "159782", assigned_person: "Amanuel", assigned_person_interests: "anime, manga, and collectible figures" },
  { person_name: "Marcus", password: "864203", assigned_person: "Jordan", assigned_person_interests: "fitness gear, running accessories, and protein snacks" },
  { person_name: "Lena", password: "370951", assigned_person: "Marcus", assigned_person_interests: "plants, scented candles, and journaling" },
  { person_name: "Diego", password: "245819", assigned_person: "Noah", assigned_person_interests: "art supplies, sketchbooks, and watercolor sets" },
  { person_name: "Fatima", password: "906421", assigned_person: "Ethan", assigned_person_interests: "fitness gear, running accessories, and protein snacks" },
  { person_name: "Noah", password: "531780", assigned_person: "Fatima", assigned_person_interests: "board games, DnD, and fantasy books" },
  { person_name: "Sophia", password: "672058", assigned_person: "Diego", assigned_person_interests: "LEGO sets, space stuff, and sci-fi movies" },
  { person_name: "Ethan", password: "418639", assigned_person: "Sophia", assigned_person_interests: "anime, manga, and collectible figures" },
];

let cachedParticipants: Participant[] | null = null;

const csvUrl = `${import.meta.env.BASE_URL || '/'}participants.csv`;

function parseCsv(text: string): Participant[] {
  const rows = text.trim().split(/\r?\n/);
  if (rows.length < 2) return [];

  const parseLine = (line: string) => {
    const out: string[] = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"' ) {
        if (inQuotes && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === ',' && !inQuotes) {
        out.push(current);
        current = '';
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

  return rows.slice(1).map((line) => {
    const cols = parseLine(line);
    return {
      person_name: cols[nameIdx] || '',
      password: cols[passIdx] || '',
      assigned_person: cols[assignedIdx] || '',
      assigned_person_interests: cols[interestsIdx] || '',
    };
  }).filter((p) => p.person_name);
}

export async function fetchParticipants(): Promise<Participant[]> {
  if (cachedParticipants) return cachedParticipants;
  try {
    const res = await fetch(csvUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const parsed = parseCsv(text);
    cachedParticipants = parsed.length ? parsed : FALLBACK_PARTICIPANTS;
  } catch (err) {
    cachedParticipants = FALLBACK_PARTICIPANTS;
  }
  return cachedParticipants;
}

export function getFallbackParticipants(): Participant[] {
  return FALLBACK_PARTICIPANTS;
}
