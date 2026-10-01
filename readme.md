# Zahi - Arabic Digital Garden Hugo Theme

![Zahi Hugo Theme](https://raw.githubusercontent.com/mohamedelhefni/zahi/main/images/screenshot.png)

Zahi (زاهي) is a modern, fast Hugo theme designed for Arabic content with RTL support. It's built as a digital garden / personal knowledge base with Obsidian-like features.

## Features

### Core Features
- **RTL & Arabic Optimized** - Built from the ground up for Arabic content with proper RTL layout
- **Dark/Light Mode** - Toggle between themes with smooth transitions, no flash on page load
- **Responsive Design** - Looks great on all devices
- **Fast Performance** - Minimal JavaScript, optimized assets

### Digital Garden Features
- **Wiki-style Links** - Use `[[Page Title]]` syntax to link between notes (green = valid, red = broken)
- **Knowledge Graph** - Interactive D3.js force-directed graph showing connections between posts and tags
- **Enhanced Graph Page** - Full-page graph with filtering (pages/tags/connected), search, zoom controls, and fullscreen mode
- **Backlinks** - Automatically shows which pages link to the current page
- **Series Support** - Group related posts into ordered collections with progress tracking

### Portfolio / Projects Section
- **Project Showcase** - Beautiful grid layout for displaying your projects
- **Project Types** - Support for personal, open-source, client, and contribution projects with color-coded badges
- **Project Status** - Track project status (completed, in-progress, maintained, archived)
- **Featured Projects** - Highlight your best work with featured badges
- **Technology Tags** - Display tech stack with stylish badges
- **Filtering** - Filter projects by type with smooth animations
- **Responsive Cards** - Project cards with thumbnails, descriptions, and action buttons

### Content Features
- **Table of Contents** - Collapsible TOC for easy navigation
- **Reading Time** - Auto-calculated based on word count
- **Search** - Fast client-side search with Fuse.js (Ctrl+K / Cmd+K)
- **Tags** - Organize content with tags
- **Syntax Highlighting** - Beautiful code blocks with Dracula theme (Chroma-based)
- **Copy Code Button** - One-click code copying
- **Disqus Comments** - Optional comment integration

### SEO Features
- **Open Graph** - Full social media preview support
- **Twitter Cards** - Optimized Twitter sharing
- **JSON-LD** - Structured data for articles and breadcrumbs
- **Sitemap & RSS** - Auto-generated feeds
- **Canonical URLs** - Proper URL handling

## Demo

Live demo: [https://zahi.netlify.app/](https://zahi.netlify.app/)

## Installation

### Method 1: Git Submodule (Recommended)

```bash
cd your-hugo-site
git submodule add https://github.com/mohamedelhefni/zahi.git themes/zahi
```

### Method 2: Hugo Module

Add to your `hugo.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/mohamedelhefni/zahi"
```

Then run:

```bash
hugo mod get -u
```

### Method 3: Direct Download

Download the theme and extract it to `themes/zahi` in your Hugo site.

## Configuration

Add to your `hugo.toml`:

```toml
theme = "zahi"
languageCode = "ar"
defaultContentLanguage = "ar"

[taxonomies]
tag = "tags"
series = "series"

enableRobotsTXT = true   # theme provides robots.txt with the sitemap link

[outputs]
home = ["HTML", "RSS", "JSON"]

[params]
description = "وصف موقعك"
author = "اسمك"

# SEO / Google Search Console (all optional)
# ogImage = "images/og-default.png"   # default share image, 1200x630, in static/
[params.verification]
google = "code-from-search-console"   # HTML-tag verification: only the content value
# bing = ""
# yandex = ""

[params.social]
twitter = "username"
github = "username"
linkedin = "username"

[menu]
[[menu.main]]
name = "الرئيسية"
url = "/"
weight = 1

[[menu.main]]
name = "المقالات"
url = "/posts/"
weight = 2

[[menu.main]]
name = "المشاريع"
url = "/projects/"
weight = 3

[[menu.main]]
name = "الوسوم"
url = "/tags/"
weight = 4

[[menu.main]]
name = "السلاسل"
url = "/series/"
weight = 5

[[menu.main]]
name = "الشبكة"
url = "/graph/"
weight = 6
```

## Content

### Basic Post

```yaml
---
title: "عنوان المقالة"
date: 2024-01-15
tags: ["وسم1", "وسم2"]
toc: true
---

محتوى المقالة...
```

### Wiki Links

Link to other posts using wiki-style syntax. A link matches a post's title **or** its filename (case-insensitive):

```markdown
اقرأ المزيد في [[عنوان صفحة أخرى]]
[[عنوان صفحة أخرى|نص مختلف]]
[[عنوان صفحة أخرى#عنوان فرعي]]
![[photo.png]]  ![[photo.png|300]]  ![[clip.mp4]]
```

Embedded files are looked up in the post's page bundle, then in `static/attachments/`. Links inside code blocks are ignored. Pages that link to a post appear as backlinks and in the graph.

### Writing in Obsidian

Edit your site like an Obsidian vault (`[[` autocomplete, backlinks, graph, drag-and-drop images):

```bash
cp -r themes/zahi/obsidian-starter/. .   # adds .obsidian/ and templates/
```

Then open the site folder as a vault. New notes land in `content/posts/`, images in `static/attachments/`, and the **Templates** plugin inserts the front matter (`templates/post.md`) - always insert it, since Hugo needs `title` and `date`.

### Arabic / RTL

Every paragraph, list, heading, quote and table picks its own direction (`dir="auto"`), so mixed Arabic/English text and fully English posts render correctly; code stays LTR. Set `Direction: ltr` (or `rtl`) in front matter to force a whole post.

### Series

Create a series by adding to frontmatter:

```yaml
---
title: "الجزء الأول: المقدمة"
series: "اسم السلسلة"
seriesOrder: 1
seriesDescription: "وصف السلسلة"
---
```

### Pinned Posts

Pin posts to the homepage:

```yaml
---
title: "مقالة مثبتة"
pinned: true
---
```

### Projects

Create projects in `content/projects/`:

```yaml
---
title: "اسم المشروع"
date: 2024-01-15
description: "وصف قصير للمشروع"
thumbnail: "/images/project-thumb.png"
type: "personal"  # personal, open-source, client, contribution
status: "completed"  # completed, in-progress, maintained, archived
featured: true
technologies: ["Hugo", "Tailwind CSS", "JavaScript"]
demoUrl: "https://demo.example.com"
repoUrl: "https://github.com/user/repo"
websiteUrl: "https://example.com"
---

وصف تفصيلي للمشروع...
```

## Knowledge Graph

The theme includes an interactive knowledge graph that visualizes connections between your content:

- **Article Graph**: Each post shows a mini-graph of related content
- **Full Graph Page**: Navigate to `/graph/` for the complete knowledge map
- **Features**:
  - Filter by pages, tags, or connected nodes only
  - Search for specific content
  - Zoom and pan controls
  - Fullscreen mode
  - Click nodes to navigate
  - Hover to highlight connections

## Development

### Prerequisites

- Hugo Extended v0.112.0+
- Node.js (for Tailwind CSS)

### Setup

```bash
# Clone the repository
git clone https://github.com/mohamedelhefni/zahi.git
cd zahi

# Install dependencies
pnpm install

# Start Hugo server
cd exampleSite && hugo server

# Watch Tailwind CSS (in another terminal)
npx tailwindcss -i ./static/css/style.css -o ./static/css/output.css --watch
```

### Build CSS

```bash
npx tailwindcss -i ./static/css/style.css -o ./static/css/output.css --minify
```

## Directory Structure

```
zahi/
├── archetypes/
│   ├── default.md
│   └── projects.md        # Project template
├── exampleSite/           # Demo site
├── images/
│   ├── screenshot.png     # Theme screenshot
│   └── tn.png             # Thumbnail
├── layouts/
│   ├── _default/
│   ├── graph/             # Knowledge graph pages
│   ├── partials/
│   ├── projects/          # Projects section
│   ├── series/            # Series taxonomy
│   └── shortcodes/
├── static/
│   ├── css/
│   │   ├── style.css      # Source styles
│   │   ├── output.css     # Compiled Tailwind
│   │   └── syntax.css     # Code highlighting
│   └── js/
├── hugo.toml              # Hugo version requirements
├── theme.toml             # Theme metadata
└── README.md
```

## Credits

- [IBM Plex Sans Arabic](https://fonts.google.com/specimen/IBM+Plex+Sans+Arabic) - Font
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [D3.js](https://d3js.org/) - Knowledge graph
- [Fuse.js](https://fusejs.io/) - Search

## License

[MIT License](LICENSE)

## Author

**Mohamed Elhefni**
- GitHub: [@mohamedelhefni](https://github.com/mohamedelhefni)
