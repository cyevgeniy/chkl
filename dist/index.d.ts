interface CustomObject {
  [k: `_${string}`]:
    | number
    | boolean
    | string
    | CustomObject
    | Array<number | string | CustomObject>;
}

export interface Author extends CustomObject {
  name: string;
  url?: string;
  avatar?: string;
}

export interface Attachment extends CustomObject {
  url: string;
  mime_type: string;
  alt?: string;
}

export interface Item extends CustomObject {
  id: string;
  title: string;
  content_text?: string;
  blocking?: boolean;
  attachments?: Attachment[];
}

export interface Checklist extends CustomObject {
  title?: string;
  description?: string;
  created_at?: string; // https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format
  authors?: Author[];
  items: Item[];
}
