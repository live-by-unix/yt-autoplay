# AutoPlay - YouTube Shorts Auto-Advance

A lightweight Chrome extension that automatically advances to the next YouTube Short when the current one ends, allowing for continuous hands-free viewing.

## Features

- **Auto-Advance**: Automatically navigates to the next Short when the current video ends
- **Lightweight**: Minimal code footprint with no background scripts
- **Privacy-Friendly**: Only operates on YouTube Shorts pages, no data collection
- **Cross-Browser Compatible**: Works on Chrome, Edge, Brave, and other Chromium-based browsers
- **Seamless Integration**: Works alongside existing YouTube features

## Installation

### Quick Install (Developer Mode)

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked"
5. Select the `autoplay` directory
6. The extension is now active!

For detailed installation instructions, see [docs/INSTALL.md](docs/INSTALL.md)

## Usage

1. Navigate to any YouTube Shorts page (youtube.com/shorts)
2. Watch a Short normally
3. When the video ends, AutoPlay will automatically advance to the next Short
4. Sit back and enjoy continuous Shorts viewing

The extension works immediately after installation with no configuration needed.

## How It Works

AutoPlay uses a simple content script that:
1. Detects when you're on a YouTube Shorts page
2. Attaches an event listener to the video element
3. When the video ends, it simulates a click on the "next" button or navigates to the next Short
4. The process repeats for each subsequent Short

## Development

### Project Structure

```
autoplay/
├── manifest.json       # Extension manifest (Manifest V3)
├── content.js          # Content script for auto-advance functionality
├── icons/              # Extension icons
├── docs/
│   └── INSTALL.md      # Detailed installation guide
├── README.md           # This file
├── LICENSE             # MIT License
└── .gitignore          # Git ignore rules
```

### Building

This extension requires no build process - it's ready to use as-is. Simply load the unpacked extension in Chrome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## Compatibility

- Chrome (recommended)
- Microsoft Edge
- Brave Browser
- Other Chromium-based browsers

## Privacy

AutoPlay does not collect, store, or transmit any data. It only operates locally within your browser to enhance your YouTube Shorts viewing experience.
