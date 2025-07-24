# Open Checklists

So the idea is very simple - we often use checklists, almost everywhere, think about it:

- Shopping list
- PR checklist
- New employee onboarding
- To-do lists
- ... and many more

Inspired by OpenStories, I decided to create something with that - OpenChecklists.

Plans:

- [ ] Spec
- [ ] Fancy landing page (launchkit from evilmartians as starting point)
- [ ] Online checklist constructor
- [ ] Online converter
- [ ] A web app (I'll describe my plans later)
- [ ] A mobile app

## Spec

Need to document format, provide examples.

Create type definitions.

## Web app (just proof of concept version)

So the idea is simple - Create a web application that in general perform only 2 tasks - 

1. Search for available checklists
2. Allow user to "work" with them
  
   - (Un)Bookmark
   - CHECK ITEMS

Checklists themselves will be "inlined" on build time for the start, no backend, so ideally
it would be a "local-first" (or local-only, who knows).


## Online checklist constructor

Ok, that's mainly to automate id fields generation and mime types for attachments maybe.

## Online converter

You give a link to OpenChecklist or its content and you get:

- Markdown checklists to easily paste it into your documentation or pull request
- Fancy html to put it on your blog
- ???