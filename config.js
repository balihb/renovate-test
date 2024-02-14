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
  ]
}
