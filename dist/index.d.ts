/**
 * - [ ] Draft format
 * - [ ] Web viewer
 * - [ ] Landing page
 * - [ ] Documentation (github)
 * - [ ] Mobile app viewer
 */

export interface Author {
	name: string
	url?: string
	avatar?: string
}

export interface Attachment {
	url: string
	mime_type: string
	alt?: string
}

export interface Item {
	id: string
	title: string
	content_text?: string
	blocking?: boolean
	attachments?: Attachment[]
}

export interface Checklist {
	title?: string
	description?: string
	created_at?: string // https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format
	authors?: Author[]
	items: Item[]
}