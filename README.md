# Description

At this moment this extension only closes tabs which satisfies the condition:

- url startsWith `https://*.ringcentral.com/*/*`
- url contains the word `post_meeting`

# Scripts

background.js -> There is only one script in background. This script is applied on every tab opened in the browser.

# Install

- Enable chrome extension developer mode in chrome://extensions.
- Add this extension folder as extension imported from package folder.
