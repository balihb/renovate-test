// https://docs.renovatebot.com/configuration-options/

module.exports = {
  hostRules: [
    {
      matchHost: 'https://management.azure.com',
      token: process.env.AZURE_ACCESS_TOKEN
    },
    {
      matchHost: 'management.azure.com',
      token: process.env.AZURE_ACCESS_TOKEN
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
