#!/usr/bin/env sh
set -eu

LAMBDA_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
STAGE_DIR="$LAMBDA_DIR/.package"
ZIP_PATH="$LAMBDA_DIR/todo-reminder.zip"

rm -rf "$STAGE_DIR" "$ZIP_PATH"
mkdir -p "$STAGE_DIR"
cp "$LAMBDA_DIR/index.js" "$STAGE_DIR/index.js"
cp "$LAMBDA_DIR/package.json" "$STAGE_DIR/package.json"

cd "$STAGE_DIR"
npm install --omit=dev --no-package-lock --workspaces=false
zip -r "$ZIP_PATH" .
echo "Created $ZIP_PATH"
