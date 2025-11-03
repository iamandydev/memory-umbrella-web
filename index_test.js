// index_test.js
import { API_TEST_URL, TIMEOUT_TEST } from './src/utils/config.js';
import fetch from 'node-fetch';

async function testAPI() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TIMEOUT_TEST);
    const response = await fetch(API_TEST_URL, { signal: controller.signal });
    clearTimeout(timeout);
    if (!response.ok) throw new Error('API Test failed');
    const data = await response.json();
    console.log('API Test Success:', Array.isArray(data) ? data.length : Object.keys(data));
  } catch (error) {
    console.error('API Test Error:', error.message);
    process.exit(1);
  }
}

testAPI();
