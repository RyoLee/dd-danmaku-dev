import { config } from './config';

describe('config', () => {
  test('get-not-exist', () => {
    const key = 'testKey';
    expect(config.get(key)).toBeNull();
  });
  test('get-exist', () => {
    const key = 'testKey';
    const value = 'testValue';
    localStorage.setItem(config.configKey, JSON.stringify({ [key]: value }));
    expect(config.get(key)).toBe(value);
  });
  test('set-init', () => {
    localStorage.removeItem(config.configKey);
    const key = 'testKey';
    const value = 'testValue';
    config.set(key, value);
    expect(JSON.parse(localStorage.getItem(config.configKey) || '{}')[key]).toBe(value);
  });
  test('set-update', () => {
    const key = 'testKey';
    const value = 'testValue';
    config.set(key, value);
    const newValue = 'newValue';
    config.set(key, newValue);
    expect(config.get(key)).toBe(newValue);
    expect(JSON.parse(localStorage.getItem(config.configKey) || '{}')[key]).toBe(newValue);
  });
  test('set-delete', () => {
    const key = 'testKey';
    const value = 'testValue';
    config.set(key, value);
    config.set(key, null);
    expect(config.get(key)).toBeNull();
    expect(JSON.parse(localStorage.getItem(config.configKey) || '{}')[key]).toBeUndefined();
  });
});
