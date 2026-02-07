// Google Analytics 4 - Event Tracking
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
};

// Meta Pixel - Event Tracking
export const trackMetaEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, eventParams);
  }
};

// Eventos Personalizados para o Site
export const trackWhatsAppClick = (source: string) => {
  trackEvent('whatsapp_click', { source });
  trackMetaEvent('Contact', { method: 'whatsapp', source });
};

export const trackPhoneClick = (source: string) => {
  trackEvent('phone_click', { source });
  trackMetaEvent('Contact', { method: 'phone', source });
};

export const trackFormSubmit = () => {
  trackEvent('form_submit', { form_type: 'contact' });
  trackMetaEvent('Lead', { content_name: 'Contact Form' });
};

export const trackProductView = (productName: string) => {
  trackEvent('product_view', { product_name: productName });
  trackMetaEvent('ViewContent', { content_name: productName });
};

export const trackQuoteRequest = (source: string) => {
  trackEvent('quote_request', { source });
  trackMetaEvent('Lead', { content_name: 'Quote Request', source });
};
