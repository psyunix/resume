# Résumé

### About
Simple résumé site built with vanilla HTML, CSS, and JavaScript using a single data object.  

HTML defines the initial structure; CSS provides styling; JavaScript converts structured data into DOM fragments (progressively enhancing the static layout). All profile content lives inside `data/profile.js` as a plain JS object (`profileData`).

### Getting Started

#### Using GitHub Pages
_( Make sure you have a GitHub account )_
1. Fork this repo by clicking the **Fork** button on the top-right corner.
2. Go to the forked repo on your profile (It opens by default).    
3. Edit the `data/profile.js` file using GitHub online editor and fill in your data.
4. Save above by doing `commit changes`.
5. Open the repo Settings and enable [GitHub Pages](https://pages.github.com/) selecting the `main` branch (root).  
6. Visit `https://<your GitHub username>.github.io/resume` in your browser.  
7. Additionally you can print/save the page as a PDF.  

#### Using local development
If you want to run locally follow the steps below. The project can be served by any static web server (`http-server`, Python's `http.server`, Nginx, Apache, etc). Below shows the Node-based `http-server` method. (Requires Node.js + npm.)

Tip: In VS Code you can use the Live Server extension for auto-reload.

1. Clone the repo using git or download the zip of the project on your local system.
To clone
```bash
$ git clone https://github.com/psyunix/resume/
```

2. Go into the `resume` directory and run
```bash
$ http-server
```
which will show something like

```bash
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.1.21:8080
Hit CTRL-C to stop the server
```

3. Visit `http://localhost:8080` in the browser.   

4. Edit `data/profile.js`, then refresh the browser. You can safely add/remove sections—missing arrays are ignored by defensive JS checks.

5. (Optional) Use your browser's print dialog to export a PDF. Adjust scaling for best fit.

### Data Model Overview
`profileData` contains keys: `title`, `name`, `sub_title`, `about`, `links`, `skills`, `experiences`, `projects`, `education`, `certifications`, `events`.

Each renderer function expects minimal structure; undefined sections are skipped. This makes it easy to trim content for a shorter résumé.

### Accessibility & Improvements
Recent fixes:
- Added `meta charset` and proper viewport attributes.
- Normalized obfuscated email / phone into clickable links when possible.
- Fixed incorrect `aria-hidden` attribute and improved icon semantics.
- Title now reflects actual profile name.

Potential next steps (not yet implemented):
- Add semantic landmarks (`<header>`, `<main>`, `<footer>`).
- Include a print stylesheet to optimize PDF export.
- Add ESLint + Prettier configuration for consistency.
- Convert `profile.js` to JSON and load asynchronously for easier reuse.

### Contributing
1. Fork → branch → changes.
2. Run a local static server for manual testing.
3. Open a pull request with a concise description of changes.


### Support
If you like the project idea, please star the repo. Contributions welcome—PRs for accessibility, print styles, or data model enhancements are especially appreciated.



