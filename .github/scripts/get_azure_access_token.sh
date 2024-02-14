#!/usr/bin/env bash

set -Eeuo pipefail

echo "AZURE_ACCESS_TOKEN=$(curl -X POST -sSfL -d \
  "grant_type=client_credentials&\
  client_id=${AZURE_CLIENT_ID}&\
  client_secret=${AZURE_CLIENT_SECRET}&\
  resource=https%3A%2F%2Fmanagement.azure.com%2F" \
  "https://login.microsoftonline.com/${AZURE_TENANT_ID}/oauth2/token" |
  jq -r .access_token)" >>"${GITHUB_ENV}"
