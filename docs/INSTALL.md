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

If the registry is private, you have two options:

**Option 1: GitHub API with auth header (recommended):**

```json
{
  "registries": {
    "@rost": {
      "url": "https://api.github.com/repos/josespinal/rost-ui/contents/r/{name}.json",
      "headers": {
        "Authorization": "Bearer ${GITHUB_TOKEN}",
        "Accept": "application/vnd.github.v3.raw"
      }
    }
  }
}
```

**Option 2: Raw URL with token in URL (less secure, but sometimes more reliable):**

```json
{
  "registries": {
    "@rost": "https://${GITHUB_TOKEN}@raw.githubusercontent.com/josespinal/rost-ui/main/r/{name}.json"
  }
}
```

**Note:** If you get parsing errors with Option 1, try Option 2. The GitHub API raw endpoint sometimes has issues with JSON parsing in shadcn.

**Important for private repositories:**

1. **Set the GitHub token environment variable:**
   ```bash
   export GITHUB_TOKEN=your_github_personal_access_token
   ```
   Make sure the token has `repo` scope for private repositories.

2. **Verify the token works:**
   ```bash
   curl -H "Authorization: Bearer $GITHUB_TOKEN" \
        -H "Accept: application/vnd.github.v3.raw" \
        https://api.github.com/repos/rost/rost-ui/contents/r/button.json
   ```

3. **If you still get errors**, shadcn might be falling back to the default registry when it can't access your custom registry. Make sure:
   - The `GITHUB_TOKEN` environment variable is set in the same terminal session where you run `npx shadcn@latest add`
   - The token has the correct permissions (`repo` scope for private repos)
   - The repository path in the URL matches your actual repository (`rost/rost-ui`)
   - The `r/` directory with all JSON files is committed to your repository

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
