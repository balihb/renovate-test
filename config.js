// https://docs.renovatebot.com/configuration-options/

module.exports = {
  extends: [
    "config:recommended",
  ],
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
  ],
  customDatasources: {
    azureWebAppPython: {
      defaultRegistryUrlTemplate: "file://azurePythonWebAppStacks.json",
      transformTemplates: [
        "{\"releases\": $$.value[name=\"python\"].properties.majorVersions[value=\"3\"].minorVersions.({\"version\": $.value, \"isDeprecated\": $.stackSettings.linuxRuntimeSettings.isDeprecated})}"
      ]
    },
    azureWebAppPythonHttp: {
      defaultRegistryUrlTemplate: "https://management.azure.com/providers/Microsoft.Web/webAppStacks?stackOsType=Linux&api-version=2022-03-01",
      transformTemplates: [
        "{\"releases\": $$.value[name=\"python\"].properties.majorVersions[value=\"3\"].minorVersions.({\"version\": $.value, \"isDeprecated\": $.stackSettings.linuxRuntimeSettings.isDeprecated})}"
      ]
    }
  },
  customManagers: [
    {
      customType: "regex",
      datasourceTemplate: "custom.azureWebAppPython",
      depNameTemplate: "azureWebAppPython",
      fileMatch: [
        "\\.bicep$"
      ],
      matchStrings: [
        "(?:\\/\\/\\s+renovate:(?: datasource=(?<datasource>[a-z-.]+?))?(?: depName=(?<depName>[^\\s]+?))?(?: packageName=(?<packageName>[^\\s]+?))?(?: versioning=(?<versioning>[a-z-0-9]+?))?(?: extractVersion=(?<extractVersion>[^\\s]+?))?)?\\s+linuxFxVersion: 'PYTHON\\|(?<currentValue>[0-9]\\.[0-9]+)'"
      ]
    },
    {
      customType: "regex",
      datasourceTemplate: "custom.azureWebAppPythonHttp",
      depNameTemplate: "azureWebAppPythonHttp",
      fileMatch: [
        "\\.bicep$"
      ],
      matchStrings: [
        "(?:\\/\\/\\s+renovate:(?: datasource=(?<datasource>[a-z-.]+?))?(?: depName=(?<depName>[^\\s]+?))?(?: packageName=(?<packageName>[^\\s]+?))?(?: versioning=(?<versioning>[a-z-0-9]+?))?(?: extractVersion=(?<extractVersion>[^\\s]+?))?)?\\s+linuxFxVersionHttp: 'PYTHON\\|(?<currentValue>[0-9]\\.[0-9]+)'"
      ]
    }
  ]
}
