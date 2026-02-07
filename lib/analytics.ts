// Google Tag Manager - Push to dataLayer
export const pushToDataLayer = (event: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event,
      ...data,
    });
  }
};

// Google Analytics 4 - Event Tracking
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  // Push para GTM dataLayer
  pushToDataLayer(eventName, eventParams);
  
  // GA4 direto (caso não esteja usando GTM)
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
  const eventData = { 
    source,
    contact_method: 'whatsapp',
    event_category: 'engagement',
    event_label: `WhatsApp - ${source}`,
  };
  
  trackEvent('whatsapp_click', eventData);
  trackMetaEvent('Contact', { method: 'whatsapp', source });
};

export const trackPhoneClick = (source: string) => {
  const eventData = {
    source,
    contact_method: 'phone',
    event_category: 'engagement',
    event_label: `Phone - ${source}`,
  };
  
  trackEvent('phone_click', eventData);
  trackMetaEvent('Contact', { method: 'phone', source });
};

export const trackFormSubmit = () => {
  const eventData = {
    form_type: 'contact',
    event_category: 'lead_generation',
    event_label: 'Contact Form Submit',
  };
  
  trackEvent('form_submit', eventData);
  trackMetaEvent('Lead', { content_name: 'Contact Form' });
};

export const trackProductView = (productName: string) => {
  const eventData = {
    product_name: productName,
    event_category: 'engagement',
    event_label: `Product View - ${productName}`,
  };
  
  trackEvent('product_view', eventData);
  trackMetaEvent('ViewContent', { content_name: productName });
};

export const trackQuoteRequest = (source: string) => {
  const eventData = {
    source,
    event_category: 'lead_generation',
    event_label: `Quote Request - ${source}`,
  };
  
  trackEvent('quote_request', eventData);
  trackMetaEvent('Lead', { content_name: 'Quote Request', source });
};
