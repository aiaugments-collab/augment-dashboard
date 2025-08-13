# App Modules

This directory contains individual app modules that define each application's behavior, landing page, and launch logic.

## Module Structure

Each app module should follow this structure:

```
modules/[app-slug]/
├── index.ts              # Main module export
├── landing-page.tsx      # Landing page component
├── launch-handler.ts     # Launch logic
├── metadata.ts           # App metadata
└── types.ts              # App-specific types (optional)
```

## Creating a New App Module

1. Create a new directory with your app's slug name
2. Implement the required files following the existing patterns
3. Register your module in the registry (see registry initialization)
4. Test your app at `/app/[your-slug]`

## Examples

- `crm/` - Basic SSO app
- `erpnext-business-suite/` - Complex setup workflow
- `finance/` - Standard business app

## Migration Notes

Apps are being migrated from database storage to this module-based system. Each module should contain all the metadata and logic that was previously stored in the database.
