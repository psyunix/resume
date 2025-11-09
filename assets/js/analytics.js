// Vercel Analytics Configuration
// This file provides a programmatic interface to Vercel Analytics
// for tracking custom events if needed in the future

// Import analytics from the installed package
import { inject } from '@vercel/analytics';

// Initialize Vercel Analytics
// This will automatically track page views
inject();

// Export a function to track custom events
// Usage: trackEvent('button_click', { button: 'resume_download' })
export const trackEvent = (eventName, properties = {}) => {
  if (window.va) {
    window.va('event', { name: eventName, ...properties });
  }
};

// Auto-initialize when the script loads
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    console.log('Vercel Analytics initialized');
  });
}
