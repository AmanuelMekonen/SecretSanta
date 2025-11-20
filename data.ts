import { Participant } from "./types";

/**
 * SECRET SANTA DATA SOURCE
 * ========================
 * Data populated from provided CSV.
 * 
 * Structure:
 * - person_name: The name the user selects to log in.
 * - password: The secret password for that user.
 * - assigned_person: The person they are gifting to.
 * - assigned_person_interests: Hints/Interests for the gift.
 */

export const PARTICIPANTS: Participant[] = [
  {
    person_name: "Amanuel",
    password: "onXlO68U",
    assigned_person: "Priya",
    assigned_person_interests: "fitness gear, running accessories, and protein snacks"
  },
  {
    person_name: "Jordan",
    password: "yJDorPVF",
    assigned_person: "Lena",
    assigned_person_interests: "fitness gear, running accessories, and protein snacks"
  },
  {
    person_name: "Priya",
    password: "9MPFl7WS",
    assigned_person: "Amanuel",
    assigned_person_interests: "anime, manga, and collectible figures"
  },
  {
    person_name: "Marcus",
    password: "nCqmUE9N",
    assigned_person: "Jordan",
    assigned_person_interests: "fitness gear, running accessories, and protein snacks"
  },
  {
    person_name: "Lena",
    password: "iuS0VCu2",
    assigned_person: "Marcus",
    assigned_person_interests: "plants, scented candles, and journaling"
  },
  {
    person_name: "Diego",
    password: "nYSpZFxR",
    assigned_person: "Noah",
    assigned_person_interests: "art supplies, sketchbooks, and watercolor sets"
  },
  {
    person_name: "Fatima",
    password: "RXiKhC5M",
    assigned_person: "Ethan",
    assigned_person_interests: "fitness gear, running accessories, and protein snacks"
  },
  {
    person_name: "Noah",
    password: "uQFGIBMl",
    assigned_person: "Fatima",
    assigned_person_interests: "board games, DnD, and fantasy books"
  },
  {
    person_name: "Sophia",
    password: "Tib0B4uO",
    assigned_person: "Diego",
    assigned_person_interests: "LEGO sets, space stuff, and sci-fi movies"
  },
  {
    person_name: "Ethan",
    password: "oTxOkiNI",
    assigned_person: "Sophia",
    assigned_person_interests: "anime, manga, and collectible figures"
  }
];