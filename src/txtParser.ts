import { CategoryType, MoveType, SheetType } from "./types";

export const parseMove = (line: string): MoveType | null => {
    const hintIndex = line.indexOf('(');
    const hint = hintIndex !== -1 ? line.substring(hintIndex + 1, line.length - 1) : undefined;
  
    const inputsPart = hintIndex !== -1 ? line.substring(0, hintIndex) : line;
    const inputs = inputsPart.trim().split(' ');
  
    if (inputs.length === 0) return null; // Skip empty lines
  
    return { inputs, hint };
  };
  
  export const parseTextFile = (text: string): SheetType => {
    const lines = text
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    const title = lines[0];
    const categories: CategoryType[] = [];
    let currentCategory: CategoryType | null = null;

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (line.startsWith("#")) {
        if (currentCategory) {
          categories.push(currentCategory);
        }
        currentCategory = {
          title: line.slice(1).trim(),
          moves: [],
        };
      } else if (currentCategory) {
        const moveMatch = line.match(/^(.*?)(?:\s*\((.*?)\))?$/);
        if (moveMatch) {
          const inputs = moveMatch[1].trim().split(/\s+/);
          const hint = moveMatch[2] || "";
          currentCategory.moves.push({ inputs, hint });
        }
      }
    }

    if (currentCategory) {
      categories.push(currentCategory);
    }

    return { title, categories };
  };