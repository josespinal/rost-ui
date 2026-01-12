# Branding and theming

## Token layering

Rost UI uses a layered token system for maximum flexibility:

1. `tokens/base.css` defines semantic tokens for light and dark modes.
2. `tokens/brand-rost-default.css` overrides brand-specific values.

Load base first, then brand overrides:

```css
@import "./path/to/tokens/base.css";
@import "./path/to/tokens/brand-rost-default.css";
```

## CSS Variables

### Color Tokens

#### Background & Foreground
- `--bg` - Main background color
- `--fg` - Main foreground/text color
- `--card` - Card background color
- `--card-foreground` - Card text color

#### Primary Colors
- `--primary` - Primary brand color
- `--primary-foreground` - Text color on primary background

#### Secondary Colors
- `--secondary` - Secondary background color
- `--secondary-foreground` - Text color on secondary background

#### Accent Colors
- `--accent` - Accent/highlight color
- `--accent-foreground` - Text color on accent background

#### Muted Colors
- `--muted` - Muted background color
- `--muted-foreground` - Muted text color

#### Semantic Colors
- `--success` - Success state color
- `--warning` - Warning state color
- `--danger` - Error/danger state color

#### Border & Ring
- `--border` - Border color
- `--ring` - Focus ring color

### Design Tokens

#### Border Radius
- `--radius` - Base border radius (default: 0.875rem)

#### Shadows
- `--shadow-soft` - Soft shadow for elevated elements

#### Typography
- `--font-sans` - Sans-serif font family (default: "Inter", "Helvetica Neue", Arial, sans-serif)
- `--font-display` - Display font family (default: "Fraunces", "Georgia", serif)

### Transition Tokens (defined in rost-ui.css)

- `--rost-transition-fast` - Fast transition (150ms ease)
- `--rost-transition-medium` - Medium transition (220ms ease)
- `--rost-focus-ring` - Focus ring shadow definition

## Creating a new brand

1. Copy `tokens/brand-rost-default.css` to `tokens/brand-your-brand.css`.
2. Override the CSS variables you want to customize:

```css
:root {
  --primary: #your-color;
  --primary-foreground: #your-text-color;
  --accent: #your-accent-color;
  --radius: 1rem;
  --font-sans: "Your Font", sans-serif;
  --font-display: "Your Display Font", serif;
}

.dark {
  --primary: #your-dark-primary;
  --primary-foreground: #your-dark-text-color;
  /* ... other dark mode overrides */
}
```

3. Import the new file in your app:

```css
@import "./path/to/tokens/base.css";
@import "./path/to/tokens/brand-your-brand.css";
```

### Brand Customization Examples

#### Minimal Brand Override
Only override primary colors:

```css
:root {
  --primary: #3b82f6;
  --primary-foreground: #ffffff;
}

.dark {
  --primary: #60a5fa;
  --primary-foreground: #1e293b;
}
```

#### Complete Brand Override
Override all brand-specific tokens:

```css
:root {
  --primary: #your-primary;
  --primary-foreground: #your-primary-text;
  --accent: #your-accent;
  --accent-foreground: #your-accent-text;
  --radius: 0.5rem;
  --font-sans: "Custom Sans", sans-serif;
  --font-display: "Custom Display", serif;
}

.dark {
  --primary: #your-dark-primary;
  --primary-foreground: #your-dark-primary-text;
  --accent: #your-dark-accent;
  --accent-foreground: #your-dark-accent-text;
}
```

## Dark mode

Dark mode is activated by adding the `dark` class to the root element:

```tsx
// Toggle dark mode
document.documentElement.classList.toggle('dark');

// Set dark mode
document.documentElement.classList.add('dark');

// Remove dark mode
document.documentElement.classList.remove('dark');
```

Or use a media query approach:

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode tokens are automatically applied */
  }
}
```

## Component Styling

All components use the `rost-*` CSS class prefix. Components automatically inherit colors from CSS variables, so updating tokens will update all components consistently.

### Example: Customizing Button Colors

```css
:root {
  --primary: #your-brand-color;
  --primary-foreground: #your-text-color;
}

/* All buttons will automatically use the new primary color */
```

## Best Practices

1. **Always load base.css first** - Base tokens provide the foundation
2. **Override only what you need** - Brand files should only contain overrides
3. **Test in both modes** - Ensure your brand works in light and dark modes
4. **Use semantic tokens** - Prefer `--primary` over hardcoded colors
5. **Maintain contrast** - Ensure foreground colors have sufficient contrast on backgrounds
