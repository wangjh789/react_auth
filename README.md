# React_auth

## Features
- http://localhost:3000/login
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

# Server
- MongoDB
- Node.js

# Client
- React.js

## Installation
- Make ```dev.js``` in ```server/config``` dir and paste
```
module.exports = {
    mongoURI:'<Your MongoDB URI>'
}
```

```sh
cd react_auth-master
npm run dev
```
Using 3000 & 5000 port for client, server
