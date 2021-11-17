/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const withTM = require('next-transpile-modules')(['gsap']);

module.exports = {
  i18n,
  reactStrictMode: false,
  withTM,
};
