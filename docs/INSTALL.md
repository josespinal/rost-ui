# Install rost-ui registry

## 1) Configure shadcn

Run the official CLI in your React app:

```
npx shadcn@latest init
```

Add the registry to your `components.json`. The file will already have other configuration fields from the init command. Add the `registries` field (or update it if it exists):

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  },
  "registries": {
    "@rost": "https://raw.githubusercontent.com/rost/rost-ui/main/r/{name}.json"
  }
}
```

If the registry is private, use the GitHub API with an auth header:

```json
{
  "registries": {
    "@rost": {
      "url": "https://api.github.com/repos/rost/rost-ui/contents/r/{name}.json",
      "headers": {
        "Authorization": "Bearer ${GITHUB_TOKEN}",
        "Accept": "application/vnd.github.v3.raw"
      }
    }
  }
}
```

Registry maintainers should generate the `r/*.json` files using:

```
npx shadcn@latest build --output r
```

Commit the `r` directory to GitHub so clients can install from it.

## 2) Add components

```
npx shadcn@latest add @rost/button
```

## 3) Add tokens + styles

Import the base tokens, brand file, and shared UI styles once in your app entry:

```
@import "./path/to/tokens/base.css";
@import "./path/to/tokens/brand-rost-default.css";
@import "./path/to/styles/rost-ui.css";
```

Apply dark mode by toggling the `dark` class on the root element.
