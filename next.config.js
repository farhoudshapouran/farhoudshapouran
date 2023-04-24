/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let basePath = '/'
let assetPrefix = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  basePath = `/${repo}`
  assetPrefix = `/${repo}/`
}

const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: assetPrefix,
  images: {
    loader: 'imgix',
    path: 'farhoodme.imgix.net',
  },
}

module.exports = nextConfig
