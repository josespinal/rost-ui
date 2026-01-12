# Update components

Run the update command for any component you want to refresh from the registry:

```
npx shadcn-ui@latest update button
```

If you have local overrides, review diffs before accepting updates.

## Safe update workflow

1. Commit local changes in your app.
2. Run `update` for the component.
3. Resolve conflicts manually if you customized the file.
4. Re-apply any local overrides that should persist.
