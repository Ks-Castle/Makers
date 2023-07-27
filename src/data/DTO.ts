export type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

export interface TierListDTO {
  id: string;
  CreatedAt: any;
  downloadCount: number;
  enterCount: number;
  imgs: string[];
  title: string;
  titleImg: string;
  gameTitle: string;
}
