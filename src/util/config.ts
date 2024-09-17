const config = {
  configKey: 'dd-danmaku-config',
  get: (key: string): string | null => {
    if (localStorage.getItem(config.configKey) === null) {
      localStorage.setItem(config.configKey, JSON.stringify({}));
    }
    return JSON.parse(localStorage.getItem(config.configKey) || '{}')[key] || null;
  },
  set: (key: string, value: string | null): void => {
    const configData = JSON.parse(localStorage.getItem(config.configKey) || '{}');
    if (value === null) {
      delete configData[key];
    } else {
      configData[key] = value;
    }
    localStorage.setItem(config.configKey, JSON.stringify(configData));
  },
};
export { config };
