# Rost UI

A shadcn/ui registry built on Base UI with warm, cozy styling. Rost UI provides accessible, customizable React components that you can copy and paste into your applications.

## Features

- 🎨 **Warm, Cozy Design** - Carefully crafted color palette and styling
- ♿ **Accessible** - Built on Base UI primitives for accessibility
- 🎯 **Type-Safe** - Full TypeScript support
- 🎭 **Customizable** - Copy components directly into your project
- 🌙 **Dark Mode** - Built-in dark mode support via CSS variables
- 📦 **Registry-Based** - Install via shadcn/ui CLI

## Quick Start

### 1. Configure shadcn/ui

Run the official CLI in your React app:

```bash
npx shadcn-ui@latest init
```

Add the registry to your `components.json`:

```json
{
  "registry": "https://raw.githubusercontent.com/rost/rost-ui/main/registry.json"
}
```

### 2. Install Dependencies

Rost UI components require Base UI React:

```bash
npm install @base-ui/react
```

The `rost-ui-utils` library also requires:

```bash
npm install clsx tailwind-merge
```

### 3. Add Components

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
# ... add more components as needed
```

### 4. Add Styles and Tokens

Import the base tokens, brand file, and shared UI styles once in your app entry:

```css
@import "./path/to/tokens/base.css";
@import "./path/to/tokens/brand-rost-default.css";
@import "./path/to/styles/rost-ui.css";
```

Apply dark mode by toggling the `dark` class on the root element:

```tsx
document.documentElement.classList.toggle('dark');
```

## Components

Rost UI includes the following components:

- **Button** - Button component with variants (primary, secondary, ghost, outline) and sizes
- **Input** - Text input component
- **Textarea** - Multi-line text input
- **Card** - Card layout primitives
- **Avatar** - Avatar with image fallback
- **Badge** - Status labels
- **Form** - Form helpers with field management
- **Modal** - Modal dialog
- **Checkbox** - Checkbox input
- **Radio** - Radio button
- **Radio Group** - Radio group wrapper
- **Select** - Dropdown select
- **Combobox** - Combobox with search
- **Toast** - Toast notifications
- **Toaster** - Toast manager
- **Table** - Table primitives
- **Data Table Toolbar** - Toolbar component for data tables
- **Data Table Filters** - Filters component for data tables
- **Data Table Pagination** - Pagination component for data tables
- **Data Table** - Complete data table with sorting and pagination (composes table + pagination)
- **Sidebar** - Sidebar navigation
- **Nav** - Top navigation
- **Icon** - Icon wrapper

## Usage Example

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Rost UI</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary" size="md">
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}
```

## Theming

Rost UI uses a layered token system:

1. **Base Tokens** (`tokens/base.css`) - Semantic tokens for light and dark modes
2. **Brand Tokens** (`tokens/brand-rost-default.css`) - Brand-specific overrides

See [BRANDING.md](./docs/BRANDING.md) for detailed theming documentation.

## Updating Components

To update a component to the latest version:

```bash
npx shadcn-ui@latest update button
```

If you have local overrides, review diffs before accepting updates. See [UPDATE.md](./docs/UPDATE.md) for best practices.

## Requirements

- React 18+ or 19+
- Base UI React 2.0+
- clsx 2.0+
- tailwind-merge 2.0+

## Documentation

- [Installation Guide](./docs/INSTALL.md)
- [Branding & Theming](./docs/BRANDING.md)
- [Updating Components](./docs/UPDATE.md)

## License

MIT
