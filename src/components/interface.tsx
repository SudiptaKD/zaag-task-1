export interface Title {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Author {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface StoryText {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Url {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface HighlightResult {
  title: Title;
  author: Author;
  story_text: StoryText;
  url: Url;
}

export interface Hit {
  created_at: Date;
  title: string;
  url: string;
  author: string;
  points: number;
  story_text: string;
  comment_text?: any;
  num_comments: number;
  story_id?: any;
  story_title?: any;
  story_url?: any;
  parent_id?: any;
  created_at_i: number;
  _tags: string[];
  objectID: string;
  _highlightResult: HighlightResult;
}

export interface RootObject {
  hits: Hit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  query: string;
  params: string;
  processingTimeMS: number;
}
