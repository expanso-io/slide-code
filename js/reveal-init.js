/**
 * reveal.js Initialization
 * Expanso Presentation Deck
 */

Reveal.initialize({
  // Display settings - True 16:9 aspect ratio
  width: 1920,
  height: 1080,
  margin: 0,
  minScale: 0.2,
  maxScale: 2.0,

  // Navigation
  controls: true,
  controlsLayout: 'bottom-right',
  progress: true,
  slideNumber: false,
  hash: true,

  // Behavior
  keyboard: true,
  overview: true,
  center: false,
  touch: true,
  loop: false,
  rtl: false,
  shuffle: false,
  fragments: true,

  // Transitions
  transition: 'slide', // none/fade/slide/convex/concave/zoom
  transitionSpeed: 'default', // default/fast/slow
  backgroundTransition: 'fade',

  // Parallax
  parallaxBackgroundImage: '',
  parallaxBackgroundSize: '',

  // Plugins
  plugins: []
});

// Custom keyboard shortcuts
Reveal.addKeyBinding({ keyCode: 83, key: 'S', description: 'Toggle speaker notes' }, () => {
  // Speaker notes toggle (if plugin loaded)
  console.log('Press "S" for speaker view');
});

// Track slide changes for analytics (optional)
Reveal.on('slidechanged', event => {
  console.log(`Slide changed to: ${event.indexh}`);
});

// Auto-hide controls after delay
let controlsTimeout;
Reveal.on('slidechanged', () => {
  clearTimeout(controlsTimeout);
  document.querySelector('.reveal .controls').style.opacity = '1';
  controlsTimeout = setTimeout(() => {
    document.querySelector('.reveal .controls').style.opacity = '0.3';
  }, 3000);
});
