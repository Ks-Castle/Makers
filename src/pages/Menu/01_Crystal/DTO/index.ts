export interface FinalType {
  daily: Boss[];
  weekly: Boss[];
}

export interface Boss {
  name: string;
  difficulty: string;
  price: number;
  img: string;
  drops: string[];
}

export interface BossCalculateResult {
  index: number;
  data: CalResult[];
}

export interface CalResult {
  name: string;
  difficulty: string;
  price: number;
  count: number;
  img: string;
  drops: string[];
}
