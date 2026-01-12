# Agents Guide

This document provides guidance for AI agents working with the Rost UI registry project.

## Project Overview

Rost UI is a shadcn/ui registry built on Base UI with warm, cozy styling. It provides accessible, customizable React components that can be copied and pasted into applications via the shadcn/ui CLI.

## Project Structure

```
rost-ui/
├── components/ui/          # React component files
├── styles/                # CSS stylesheet (rost-ui.css)
├── tokens/                # CSS variable tokens
│   ├── base.css          # Base semantic tokens
│   └── brand-rost-default.css  # Brand-specific overrides
├── docs/                  # Documentation files
├── registry.json          # shadcn/ui registry manifest
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # Main project documentation
```

## Key Conventions

### Component Structure

1. **All components** are in `components/ui/` directory
2. **Component naming**: Use kebab-case for files (e.g., `data-table.tsx`)
3. **Export pattern**: Use named exports with `forwardRef` for components
4. **Display names**: Always set `displayName` for components
5. **Type exports**: Export component prop types

### CSS Conventions

1. **CSS classes** use `rost-*` prefix
2. **BEM-like naming**: Use `rost-component__element--modifier` pattern
3. **All styles** are in `styles/rost-ui.css` (monolithic file)
4. **CSS variables** are defined in `tokens/base.css` and overridden in brand files

### Registry Structure

1. **Registry items** must follow shadcn/ui schema
2. **Dependencies**: List npm packages in `dependencies` array
3. **Registry dependencies**: List other registry items in `registryDependencies` array
4. **Titles**: All components should have a `title` field for CLI display
5. **Descriptions**: Should be descriptive and mention key features

### TypeScript

1. **Strict mode**: Enabled in tsconfig.json
2. **React types**: Use `React.ComponentPropsWithoutRef` for prop types
3. **Generics**: Use TypeScript generics for reusable components (e.g., `DataTable<TData>`)
4. **JSDoc**: Add JSDoc comments to exported components and functions

## Common Patterns

### Component Template

```tsx
import * as React from "react";
import { Component as BaseComponent } from "@base-ui/react/component";
import { cn } from "./utils";

export type ComponentProps = React.ComponentPropsWithoutRef<typeof BaseComponent> & {
  // Additional props
};

/**
 * Component description with usage example.
 *
 * @example
 * ```tsx
 * <Component prop="value" />
 * ```
 */
export const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseComponent
        ref={ref}
        className={cn("rost-component", className)}
        {...props}
      />
    );
  }
);

Component.displayName = "Component";
```

### Registry Item Template

```json
{
  "name": "component-name",
  "type": "registry:component",
  "title": "Component Name",
  "description": "Brief description mentioning key features.",
  "dependencies": ["@base-ui/react"],
  "registryDependencies": ["rost-ui-utils", "rost-ui-styles"],
  "files": [
    {
      "path": "components/ui/component-name.tsx",
      "type": "registry:component",
      "target": "components/ui/component-name.tsx"
    }
  ]
}
```

## Dependencies

### Required Dependencies

- `@base-ui/react` - Base UI primitives (for most components)
- `clsx` - Class name utility (via rost-ui-utils)
- `tailwind-merge` - Tailwind class merging (via rost-ui-utils)

### Registry Dependencies

- `rost-ui-utils` - Required by all components (provides `cn` utility)
- `rost-ui-styles` - Required by all components (provides CSS classes)
- Component-specific dependencies (e.g., `table` for `data-table`)

## Adding New Components

1. **Create component file** in `components/ui/`
2. **Add CSS styles** to `styles/rost-ui.css` with section comments
3. **Add registry entry** to `registry.json`
4. **Export component** in `components/ui/index.ts`
5. **Add JSDoc comments** to exported components
6. **Update README.md** component list

## Modifying Existing Components

1. **Update component file** in `components/ui/`
2. **Update CSS** if styling changes are needed
3. **Update registry.json** if dependencies change
4. **Update documentation** if API changes
5. **Maintain backward compatibility** when possible

## CSS Organization

The `rost-ui.css` file is organized with section comments:

```css
/* ============================================
   Component Name
   ============================================ */
.rost-component { ... }
```

When adding new component styles, add a section comment before the component's CSS.

## Testing Changes

1. **Validate JSON**: Ensure `registry.json` is valid JSON
2. **Type check**: Run `npm run type-check` (if available)
3. **Lint check**: Verify no linting errors
4. **Verify exports**: Ensure all components are exported in `index.ts`

## Important Notes

- **Do not** split CSS files - keep everything in `rost-ui.css` (monolithic approach)
- **Do not** modify `tokens/base.css` unless adding new semantic tokens
- **Do** add `title` fields to all registry items
- **Do** use descriptive descriptions in registry.json
- **Do** add JSDoc comments to exported components
- **Do** maintain consistent naming conventions

## Component Composition

Some components are composed of smaller pieces:

- `data-table` depends on `data-table-pagination` and `table`
- `toaster` depends on `toast`
- Components can be installed independently for better composition

When creating composite components, consider if they should be split into smaller registry items.

## File Naming

- Components: `kebab-case.tsx` (e.g., `data-table.tsx`)
- Types: PascalCase (e.g., `DataTableProps`)
- CSS classes: `rost-kebab-case` (e.g., `rost-data-table`)
- Registry names: `kebab-case` (e.g., `data-table`)

## Questions to Consider

When working on this project, consider:

1. **Is this a new component or modification?** - Follow appropriate workflow
2. **Does it need Base UI?** - Most components do, but some don't (e.g., `card`, `badge`)
3. **Should it be split?** - Consider if complex components should be multiple registry items
4. **Are dependencies correct?** - Verify npm and registry dependencies
5. **Is documentation updated?** - Update README and add JSDoc comments

## Resources

- [shadcn/ui Registry Schema](https://ui.shadcn.com/docs/registry/registry-json)
- [Base UI React Documentation](https://base-ui.com/react/)
- Project README.md for user-facing documentation
- docs/BRANDING.md for theming information
