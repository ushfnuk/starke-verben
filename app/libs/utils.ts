export function getIds(count: number, max: number): number[] {
  const numbers: number[] = Array.from({ length: max }, (_, i) => i + 1);

  // Алгоритм Фішера–Єйтса для перемішування
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers.slice(0, count);
}

export enum Colums {
  Infinitiv = 'Infinitiv',
  Dritte = '3. Person',
  Preteritum = 'Präteritum',
  Perfekt = 'Perfekt',
  Ubersetzung = 'Übersetzung',
}
