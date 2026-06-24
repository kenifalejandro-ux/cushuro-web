//src/utils/gtm.ts

type GTMData = Record<string, any>;

// El tipo global de `window.dataLayer` está declarado en src/gtm.d.ts

export const gtmPush = (eventName: string, data: GTMData = {}): void => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...data,
  });
};
