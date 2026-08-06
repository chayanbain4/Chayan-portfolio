#!/usr/bin/env bash
set -euo pipefail

DEFAULT_EMAIL="chayanbain8@gmail.com"

printf "Gmail sender [%s]: " "$DEFAULT_EMAIL"
read -r SMTP_USER
SMTP_USER="${SMTP_USER:-$DEFAULT_EMAIL}"

printf "Inbox receiving enquiries [%s]: " "$SMTP_USER"
read -r CONTACT_TO
CONTACT_TO="${CONTACT_TO:-$SMTP_USER}"

printf "Fresh Gmail App Password: "
read -rs SMTP_PASS
printf "\n"

SMTP_PASS="${SMTP_PASS//[[:space:]]/}"

if [[ ${#SMTP_PASS} -lt 16 ]]; then
  echo "Invalid App Password. Google App Passwords are normally 16 characters."
  exit 1
fi

cat > .env <<ENV
SMTP_USER=$SMTP_USER
SMTP_PASS=$SMTP_PASS
CONTACT_TO=$CONTACT_TO
PORT=4173
ENV

chmod 600 .env
echo "Email configuration saved securely in .env"
echo "Run: npm run dev:full"
