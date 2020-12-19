import { TranslatableStringType } from '../i18n/i18n.types';

export type PlacementType =
  | 'first'
  | 'sharedFirst'
  | 'second'
  | 'purchase'
  | 'honorableMention'
  | 'entry';

type CompetitionCategoryType =
  | 'architecture'
  | 'townPlanning'
  | 'ideation';

export interface CompetitionType {
  category: CompetitionCategoryType,
  placement: PlacementType,
  placementDescription?: TranslatableStringType,
  title?: string,
}

interface LocationType {
  city: string,
  country: string,
  details?: TranslatableStringType,
}

type ProjectStatusType =
  | 'implementation';

type CategoryType =
  | 'architecture'
  | 'thesis';

export interface ProjectType {
  categories: CategoryType[],
  competition?: CompetitionType,
  date: number,
  description: TranslatableStringType,
  imageFolder: string,
  isHighlight: boolean,
  location?: LocationType,
  status?: ProjectStatusType,
  title: TranslatableStringType,
}