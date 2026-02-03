# m7base

A CSS library that gives websites a quick styling with modern CSS resets, base styles and optional component class styles. It exports a single CSS file.

## Build Setup

This project uses [Lightning CSS](https://lightningcss.dev) for bundling, minification, and CSS transformation. Lightning CSS is an extremely fast CSS parser, transformer, bundler, and minifier written in Rust.

### Features

- **Bundling**: Combines all `@import` statements into a single CSS file
- **Minification**: Reduces file size through aggressive optimization
- **Autoprefixing**: Automatically adds vendor prefixes based on browser targets
- **Modern CSS Support**: Transforms modern CSS features to compatible syntax
- **CSS Layers**: Preserves CSS layer structure (`@layer`)

### Configuration

#### Browser Targets

The build targets modern browsers with the following configuration:
```
"defaults, not IE 11"
```

This means:
- Latest versions of major browsers
- No Internet Explorer 11 support
- Modern CSS features are transformed for compatibility

To change browser targets, modify the `--targets` flag in the build scripts in `package.json`. You can also use a `browserslist` configuration in `package.json` and use the `--browserslist` flag instead.

#### Output

- **Production**: `dist/m7base.css` - Minified, bundled CSS file
- **Development**: `dist/m7base.css` - Unminified, bundled CSS file
- **Watch mode**: `dist/index.css` - Automatically updates on changes

### How It Works

1. Lightning CSS reads `styles/index.css` as the entry point
2. All `@import` statements are resolved and bundled
3. CSS layers are preserved (`@layer reset, base, components, utilities, overrides`)
4. Modern CSS features are transformed based on browser targets
5. Vendor prefixes are automatically added where needed
6. Output is minified (in production builds) and written to `dist/m7base.css`

### Project Structure

```
m7base/
├── styles/
│   ├── index.css      # Main entry point with @import statements
│   └── reset.css      # CSS reset styles
├── dist/
│   └── m7base.css     # Built output (generated)
└── package.json
```
