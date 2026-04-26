# Taozhi Chen Homepage

This repository contains the source code for my personal academic website:

- Homepage: <https://taozhi-chen.github.io/>

The site is built with Jekyll and deployed through GitHub Pages. It includes my homepage, publications, projects, awards, news, and showcase pages.

## Site Structure

- `_data/profile.yml`: personal profile, links, bio, portrait, education, experience, and awards shown on the homepage
- `_data/navigation.yml`: top navigation bar entries
- `_data/display.yml`: homepage display toggles
- `_publications/`: publication entries
- `_projects/`: project entries
- `_awards/`: award entries
- `_news/`: news entries
- `_showcase/`: showcase cards and travel content
- `_includes/` and `_layouts/`: reusable templates and page layouts
- `assets/`: images, CSS, JavaScript, and map files

## Running Locally (Debug & Preview)

1. Follow the step 1 and step 2 instructions here to install Ruby prerequisites and Jekyll:
   <https://jekyllrb.com/docs/>
2. Clone your forked repository to your local machine.
3. Install dependencies in the repository root:

   ```bash
   bundle install
   ```

4. Run the site locally:

   ```bash
   bundle exec jekyll serve
   ```

5. Open the local URL shown in the terminal.

Note: if you change `_config.yml`, restart the Jekyll server.

## Common Updates

- Update profile and homepage content in `_data/profile.yml`
- Add or edit publications in `_publications/`
- Add or edit projects in `_projects/`
- Add or edit awards in `_awards/`
- Add or edit showcase content in `_showcase/`
- Adjust homepage widgets and templates in `_includes/`

## Deployment

Push changes to the repository, then wait for GitHub Pages to rebuild and deploy the site.

If a change affects search appearance or metadata, it may take additional time for Google to refresh search results even after the site is live.

## Notes

- `robots.txt`, `favicon.ico`, and `_config.yml` affect search indexing and site metadata.
- `_site/` is generated output and should not be edited directly.
