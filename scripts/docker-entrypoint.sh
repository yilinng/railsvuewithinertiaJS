#!/bin/sh

# Abort on any error (including if wait-for-it fails).
set -e

# Wait for the backend to be up, if we know where it is.
if [ -n "$URL" ]; then
  scripts/wait-for-it.sh "$URL:${URL:-3000}"
fi

# Run the main container command.
exec "$@"