const videoTimestamps = new Map();

console.log("🚀 YouTube Auto-Scroller Running Smoothly.");

window.addEventListener('timeupdate', (event) => {
  if (!window.location.pathname.startsWith('/shorts/')) return;

  const video = event.target;
  
  if (video && video.tagName === 'VIDEO' && !video.paused) {
    const current = video.currentTime;
    const duration = video.duration;
    
    if (videoTimestamps.has(video)) {
      const lastTime = videoTimestamps.get(video);

      // Detect video end/loop frame
      if (current < lastTime && lastTime > (duration - 0.5)) {
        console.log("🔥 Short ended. Forcing container viewport shift...");
        videoTimestamps.delete(video);
        
        scrollViewportDown();
      }
    }
    
    videoTimestamps.set(video, current);
  }
}, true);

function scrollViewportDown() {
  // Find the exact layout container that handles the desktop/mobile shorts viewport feed
  const scroller = document.getElementById('shorts-container') || document.querySelector('ytd-shorts, #shorts-inner-container');
  
  if (scroller) {
    console.log("🎯 Shifting container viewport downward by 1 screen height.");
    
    // Smoothly roll the container down exactly 100% of the current screen view height
    scroller.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  } else {
    console.log("⚠️ Structural layout container missing. Testing window layer fallback.");
    // Fallback if full screen responsive mechanics take priority
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }
}

// Memory safety cleanup
setInterval(() => {
  if (videoTimestamps.size > 10) {
    videoTimestamps.clear();
  }
}, 30000);
