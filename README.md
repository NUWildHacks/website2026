# WildHacks 2026 Website

The official website for WildHacks 2026, Northwestern's largest hackathon.

## Development

```bash
git clone https://github.com/NUWildHacks/website2026.git
cd website2026
bun install
bun dev
```

### Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun lint` - Run ESLint
- `bun check` - Check formatting with dprint
- `bun format` - Format code with dprint

## Deployment

The site is deployed on **Vercel** under the `wildhacks@northwestern.edu` account.

- **Production branch:** `launch`
- Pushes to the `launch` branch automatically trigger a production deployment
