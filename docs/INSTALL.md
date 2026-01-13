# Install rost-ui registry

## 1) Configure shadcn

Run the official CLI in your React app:

```
npx shadcn@latest init
```

Add the registry to your `components.json`:

```
{
  "registry": "https://raw.githubusercontent.com/rost/rost-ui/main/registry.json"
}
```

## 2) Add components

```
npx shadcn@latest add button
```

## 3) Add tokens + styles

Import the base tokens, brand file, and shared UI styles once in your app entry:

```
@import "./path/to/tokens/base.css";
@import "./path/to/tokens/brand-rost-default.css";
@import "./path/to/styles/rost-ui.css";
```

Apply dark mode by toggling the `dark` class on the root element.
