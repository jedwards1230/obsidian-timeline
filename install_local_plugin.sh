#!/bin/bash

# This script installs a local plugin into the Obsidian vault.
# ~/Obsidian/Personal\ Vault/.obsidian/plugins/...

# Start by finding the Obsidian vault path
# This script assumes that the vault is located in the default location

# List vaults in default directory. let user select 1.
OBSIDIAN_VAULT_PATHS=()

# Check if VAULT_PATH is defined and contains a .obsidian folder
if [ -n "$VAULT_PATH" ] && [ -d "$VAULT_PATH/.obsidian" ]; then
  OBSIDIAN_VAULT_PATHS+=("$VAULT_PATH")
else
  while IFS= read -r line; do
    OBSIDIAN_VAULT_PATHS+=("$line")
  done < <(find ~/Obsidian -maxdepth 2 -type d -name "*.obsidian" -exec dirname {} \;)
fi

if [ ${#OBSIDIAN_VAULT_PATHS[@]} -eq 1 ]; then
  VAULT="${OBSIDIAN_VAULT_PATHS[0]}"
else
  echo "Select the Obsidian vault to install the plugin into:"
  select VAULT in "${OBSIDIAN_VAULT_PATHS[@]}"; do
    if [ -n "$VAULT" ]; then
      break
    else
      echo "Invalid selection. Please try again."
    fi
  done
fi

# Check if the vault path is empty
if [ -z "$VAULT" ]; then
  echo "Error: Could not find the Obsidian vault path."
  exit 1
fi

# Check if the vault path exists
if [ ! -d "$VAULT" ]; then
  echo "Error: The Obsidian vault path does not exist."
  exit 1
fi

# Check if the plugins directory exists
PLUGINS_DIR="$VAULT/.obsidian/plugins"
if [ ! -d "$PLUGINS_DIR" ]; then
  echo "Error: The plugins directory does not exist in the Obsidian vault."
  exit 1
fi

# Check if the plugin directory exists, create it if not
PLUGIN_DIR="$PLUGINS_DIR/obsidian-timeline-2"

if [ ! -d "$PLUGIN_DIR" ]; then
    mkdir -p "$PLUGIN_DIR"
fi

# Declare an array of files to copy
FILES=("main.js" "styles.css" "manifest.json")

# Copy each file to the Obsidian vault
for file in "${FILES[@]}"; do
    cp -r "$file" "$PLUGIN_DIR"
done

# create empty `.hotreload` file in plugin dir
touch "$PLUGIN_DIR/.hotreload"

