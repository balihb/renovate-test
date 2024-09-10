// https://docs.renovatebot.com/configuration-options/

module.exports = {
  hostRules: [
    {
      matchHost: 'management.azure.com',
      token: process.env.AZURE_ACCESS_TOKEN
      // authType: ''
    }
  ],
  username: 'renovate-release',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: false,
  platform: "github",
  repositories: [
    "balihb/renovate-test"
  ]
}
