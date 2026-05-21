# yago-tomaszewski.github.io

Personal site built with [Quartz v4](https://quartz.jzhao.xyz/) and hosted on GitHub Pages.

## Setup

### 1. Clone Quartz and overlay this config

```bash
git clone https://github.com/jackyzha0/quartz.git
cd quartz
# copy the files from this repo into the quartz directory
cp -r /path/to/this-repo/* .
npm install
```

### 2. Local dev

```bash
npx quartz build --serve
# opens at http://localhost:8080
```

### 3. Deploy

Push to `main`. The GitHub Actions workflow builds and deploys to Pages automatically.

Make sure GitHub Pages is set to deploy from **GitHub Actions** (not a branch) in your repo settings:
`Settings → Pages → Source → GitHub Actions`

## Structure

```
content/
  index.md          # homepage / bio
  projects/
    index.md        # projects list
  posts/
    index.md        # posts index
    *.md            # individual posts
static/
  custom.scss       # sci-fi theme overrides
quartz.config.ts    # Quartz configuration
.github/
  workflows/
    deploy.yml      # CI/CD to GitHub Pages
```

## Writing posts

Create a new file in `content/posts/`:

```md
---
title: My post title
date: 2025-09-01
tags:
  - optimisation
  - python
draft: false
---

Post content here.
```

Set `draft: true` to hide from production while writing.

## Theme

Sci-fi interface aesthetic. Accent color: `#00b4dc`. Font: Space Mono.
To change the accent, find `--accent` in `static/custom.scss`.
