# Layouts Folder

This folder is for your layouts.

The very minimal layout would be something like this:

```html
---
title: My Rad Blog
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
  </head>
  <body>
    {{ content | safe }}
  </body>
</html>
  ```

See the [Eleventy docs](https://www.11ty.dev/docs/layouts/) for more info.