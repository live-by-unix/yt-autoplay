# AutoPlay Installation Guide

This guide provides step-by-step instructions for installing the AutoPlay Chrome extension on various browsers.

## Table of Contents

- [Google Chrome](#google-chrome)
- [Microsoft Edge](#microsoft-edge)
- [Brave Browser](#brave-browser)
- [Other Chromium-based Browsers](#other-chromium-based-browsers)
- [Troubleshooting](#troubleshooting)

## Google Chrome

### Prerequisites
- Google Chrome browser (version 88 or higher)
- AutoPlay extension files

### Installation Steps

1. **Download the Extension**
   - Download the AutoPlay extension ZIP file or clone the repository
   - Extract the contents to a folder on your computer

2. **Open Chrome Extensions Page**
   - Open Google Chrome
   - Navigate to `chrome://extensions/` in the address bar
   - Alternatively, go to Chrome Menu (⋮) → More Tools → Extensions

3. **Enable Developer Mode**
   - Look for the "Developer mode" toggle in the top-right corner
   - Click the toggle to enable Developer mode
   - You should see additional buttons appear

4. **Load the Extension**
   - Click the "Load unpacked" button that appeared
   - A file dialog will open
   - Navigate to and select the `autoplay` folder (the folder containing `manifest.json`)
   - Click "Select Folder"

5. **Verify Installation**
   - You should see "AutoPlay" appear in your extensions list
   - The extension should show as "Enabled"
   - You may see a small puzzle piece icon in your Chrome toolbar

6. **Test the Extension**
   - Navigate to any YouTube Shorts page (e.g., https://www.youtube.com/shorts)
   - Play a Short and wait for it to end
   - The extension should automatically advance to the next Short

## Microsoft Edge

### Prerequisites
- Microsoft Edge browser (Chromium-based)
- AutoPlay extension files

### Installation Steps

1. **Download the Extension**
   - Download or extract the AutoPlay extension files to a folder

2. **Open Edge Extensions Page**
   - Open Microsoft Edge
   - Navigate to `edge://extensions/` in the address bar
   - Alternatively, go to Edge Menu (⋯) → Extensions

3. **Enable Developer Mode**
   - Toggle "Developer mode" in the bottom-left corner
   - Additional control options will appear

4. **Load the Extension**
   - Click "Load unpacked"
   - Navigate to and select the `autoplay` folder
   - Click "Select Folder"

5. **Verify Installation**
   - AutoPlay should appear in your extensions list
   - Test by visiting YouTube Shorts

## Brave Browser

### Prerequisites
- Brave browser
- AutoPlay extension files

### Installation Steps

1. **Download the Extension**
   - Download or extract the AutoPlay extension files

2. **Open Brave Extensions Page**
   - Open Brave browser
   - Navigate to `brave://extensions/` in the address bar
   - Alternatively, go to Brave Menu (⋮) → Extensions

3. **Enable Developer Mode**
   - Toggle "Developer mode" in the top-right corner

4. **Load the Extension**
   - Click "Load unpacked"
   - Select the `autoplay` folder
   - Click "Select Folder"

5. **Verify Installation**
   - AutoPlay should appear in your extensions list
   - Test on YouTube Shorts

## Other Chromium-based Browsers

For other Chromium-based browsers (Opera, Vivaldi, etc.), the process is similar:

1. Navigate to the browser's extensions page (usually `browser-name://extensions/`)
2. Enable Developer Mode
3. Click "Load unpacked" or similar
4. Select the `autoplay` folder
5. Verify installation

## Troubleshooting

### Extension Not Loading

**Problem**: "Load unpacked" button is greyed out or doesn't work

**Solutions**:
- Ensure you have selected the correct folder (must contain `manifest.json`)
- Check that Developer Mode is enabled
- Try restarting the browser
- Verify you have the latest browser version

### Extension Not Working on YouTube Shorts

**Problem**: Extension is installed but Shorts don't auto-advance

**Solutions**:
- Refresh the YouTube Shorts page after installation
- Check browser console for errors (F12 → Console)
- Ensure the extension is enabled in the extensions list
- Try disabling other YouTube-related extensions temporarily
- Verify you're on `youtube.com/shorts/*` URL

### Permission Errors

**Problem**: Extension shows permission errors

**Solutions**:
- The extension only needs access to `youtube.com/shorts/*`
- No additional permissions should be required
- If prompted, allow the extension to access YouTube Shorts

### Icons Not Displaying

**Problem**: Extension icons appear as generic placeholders

**Solutions**:
- Ensure the `icons/` folder exists in the extension directory
- Verify icon files (`icon16.png`, `icon48.png`, `icon128.png`) are present
- Try reloading the extension

## Updating the Extension

To update the extension after making changes:

1. Go to the extensions page (`chrome://extensions/`)
2. Find AutoPlay in the list
3. Click the refresh/circular arrow icon
4. The extension will reload with the new changes

## Uninstalling

To remove the extension:

1. Go to the extensions page
2. Find AutoPlay in the list
3. Click "Remove" or the trash icon
4. Confirm removal when prompted

## Security Notes

- Only install extensions from trusted sources
- This extension is open-source - you can review the code before installation
- The extension only operates on YouTube Shorts pages
- No data is collected or transmitted externally

## Getting Help

If you encounter issues not covered in this guide:

1. Check the browser console for error messages
2. Review the extension code in `content.js`
3. Ensure your browser is up to date
4. Try installing in a fresh browser profile

## Advanced Usage

### Development Mode

For developers who want to modify the extension:

1. Load the extension as described above
2. Make changes to the source files
3. Click the refresh button on the extensions page
4. Changes take effect immediately

### Console Logging

The extension includes console logging for debugging:
- "AutoPlay: Initializing on YouTube Shorts" - Extension loaded
- "AutoPlay: Attached listener to video" - Video element found
- "AutoPlay: Video ended, navigating to next Short" - Auto-advance triggered

To view these messages:
1. Open YouTube Shorts
2. Press F12 to open Developer Tools
3. Go to the Console tab
4. Watch for AutoPlay messages
