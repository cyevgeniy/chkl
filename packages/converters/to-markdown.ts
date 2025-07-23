import type { Checklist, Item } from 'chkl'


const minimalExample: Checklist = {
    items: [
        {
            id: '1',
            title: 'Buy milk',
        },
        {
            id: '2',
            title: 'Buy bread',
        },
        {
            id: '3',
            title: 'Buy juice',
        }
    ]
}

function toMarkdownChecklist(item: Item): string {
    // TODO: Handle attachments
    return `- [ ] ${item.title}`
}

export function convert(checklist: Checklist): string {
    const res: String[] = []

    if (checklist.description)
        res.push(checklist.description, '')

    checklist.items.forEach(item => res.push(toMarkdownChecklist(item)))

    return res.join('\n')

}

console.log(convert(minimalExample))