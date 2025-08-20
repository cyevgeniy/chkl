# Open Checklists

So the idea is very simple - we often use checklists, almost everywhere, think about it:

- Shopping list
- PR checklist
- New employee onboarding
- To-do lists
- ... and many more

Inspired by OpenStories, I decided to create something with that - OpenChecklists.

## Spec

Here's a full example of a checklist in Open Checklists format:

```json
{
  "title": "How to get your first task in our project",
  "description": "This list describes how you can start working on our project",
  "created_at": "2025-07-17",
  "authors": [
    {
      "name": "John Doe",
      "url": "mailto:johndoe@email.com",
      "avatar": "https://example.com/avatar/johndoe.png"
    }
  ],
  "items": [
    {
      "id": "1",
      "title": "Register on github",
      "content_text": "Register on https://github.com",
      "blocking": true
    },
    {
      "id": "2",
      "title": "Pick a task from the onboarding category",
      "content_text": "Open github issues board and inspect issues from the \"onboarding\" category.\nPick the one you want to work on and leave a comment with \"I want to work on it\" text.",
      "blocking": true
    },
    {
      "id": "3",
      "title": "Create pull request",
      "content_text": "Create a pull request. We attached a small video instruction on how to create pull requests",
      "blocking": true,
      "attachments": [
        {
          "url": "https://example.com/video/pullrequest.mp4",
          "mime_type": "video/mp4",
          "alt": "How to create pull requests"
        }
      ]
    }
  ]
}
```

And here's a minimal version:


```json
{
  "items": [
    {
      "id": "1",
      "title": "Buy milk"
    },
    {
      "id": "2",
      "title": "Buy bread"
    },
    {
      "id": "3",
      "title": "Buy juice"
    }
  ]
}
```

### Extensions

Clients can extend open checklists object.
**All** additional fields (even nested ones) should start from the `"_"` symbol, for example: 

```json
{
  "_id": "local_id_1",
  "items": [
    {
      "id": "1",
      "title": "Buy milk"
    },
    {
      "id": "2",
      "title": "Buy bread"
    },
    {
      "id": "3",
      "title": "Buy juice",
      "_meta": {
        "_original_url": "https://example.com"
      }
    }
  ]
}
```

## Similar projects

- [Checklist.design](https://www.checklist.design/)
- [Devchecklists](https://github.com/vintasoftware/devchecklists.com-content) 