export interface ChecklistMeta {
  [k: `_${string}`]:
    | number
    | null
    | boolean
    | string
    | ChecklistMeta
    | Array<number | string | ChecklistMeta | boolean | null>;
}

export interface Author extends ChecklistMeta {
  name: string;
  url?: string;
  avatar?: string;
}

export interface Attachment extends ChecklistMeta {
  url: string;
  mime_type: string;
  alt?: string;
}

export interface Item extends ChecklistMeta {
  id: string;
  title: string;
  content_text?: string;
  blocking?: boolean;
  attachments?: Attachment[];
}

export interface Checklist extends ChecklistMeta {
  title?: string;
  description?: string;
  created_at?: string; // https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format
  authors?: Author[];
  items: Item[];
}
