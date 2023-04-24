process.env.NODE_ENV = 'test';

const assert = require('assert');
const request = require('supertest');
const app = require('../app');