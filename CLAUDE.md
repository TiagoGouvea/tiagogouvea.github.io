# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal link aggregator website hosted on GitHub Pages at https://tiagogouvea.github.io/. It functions as a centralized hub for all useful links, similar to Linktree, and is used as the main link in Instagram profile. The site serves as a single point of access to all important personal and professional links.

## Architecture

- **Static Site**: Single-page application with no build process
- **Data-Driven**: All content is managed through `dataSet.js` configuration
- **Frontend Stack**: Vanilla HTML/CSS/JS with Bootstrap 4 and FontAwesome icons

### Key Files

- `index.html`: Main HTML template with Bootstrap layout and styling
- `dataSet.js`: Configuration file containing all content (name, description, sections, links)
- `img/`: Static images used throughout the site

### Data Structure

The site is driven by the `dataSet` object in `dataSet.js`:
- `name`: Profile name displayed at top
- `description`: Subtitle text
- `sections`: Array of content sections, each containing:
  - `title`: Optional section header
  - `description`: Optional section description  
  - `links`: Array of links/content items supporting:
    - Regular links with icons (FontAwesome classes)
    - Images (`type: 'img'`)
    - YouTube embeds (`type: 'youtube'`)

## Development

### Making Content Changes

All content modifications should be done in `dataSet.js` following the existing structure. The render function automatically generates the HTML layout. When adding new links, prioritize those that are most useful and relevant for visitors coming from Instagram or other social media platforms.

### Testing Changes

Since this is a static site, simply open `index.html` in a browser to preview changes locally.

### Deployment

This site is deployed via GitHub Pages. Push changes to the main branch to deploy automatically.

## Code Standards

- Use FontAwesome icon classes for link icons
- Maintain Bootstrap responsive design patterns
- Keep all content data in `dataSet.js` rather than hardcoding in HTML