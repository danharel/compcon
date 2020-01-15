**_NOTE: THIS PAGE IS A WORK IN PROGRESS AND IS BEING REWRITTEN TO ACCOMODATE THE NEW V2 HOMEBREW STRUCTURE_**
# Basics
A UI-based homebrew editor is not yet available in COMP/CON, but you can already create homebrew content if you're willing to work with JSON.
COMP/CON loads homebrew from `.LCP` (Lancer Content Pack) archives, which are actually just `.ZIP` files with their extension changed. It looks inside the archive for specific `.JSON` files which contain the actual data. The archive **MUST** contain a `lcp_manifest.json` file, which contains metadata for the package. The files it looks for data in are as follows, and their contents should be obvious from the name:
* `manufacturers.json`
* `core_bonus.json`
* `frames.json`
* `weapons.json`
* `systems.json`
* `mods.json`
* `pilot_gear.json`
* `talents.json`
* `tags.json`
* `npc_classes.json`
* `npc_features.json`
* `npc_templates.json`

## The VSCode extension

To make creating homebrew content packs as easy as possible, you should use [Visual Studio Code](https://code.visualstudio.com/) combined with the [COMP/CON Content Authoring extension](https://marketplace.visualstudio.com/items?itemName=massif-press.comp-con-content-authoring). VSCode provides JSON validation by default to catch syntax errors, and the extension provides data validation, autocomplete, and a task to rapidly create the .LCP archive from your source code.

To use the extension, make sure you're working in an **EMPTY FOLDER**, and create an `lcp_manifest.json` file inside of it. The extension should activate once it detects the manifest file. To run the build task, first, if you're on Windows, make sure you have 7zip installed - Mac and Linux should work right away (uses `zip` tool). Press `Ctrl+Shift+P`, and search for `Tasks: Run Build Task`. You should see a `compcon: Build .LCP package` option - select it and your .LCP file should rapidly build itself.

## A note about images
Due to web limitations, images in content packs (namely: your pack's main image, manufacturer logos, and frame images) can only be referenced via a URL for an image hosted on the Internet. Make sure the place where you choose to host your images will be around for a while.

# Details
## Manufacturers (`manufacturers.json`)
## Core Bonuses (`core_bonus.json`)
## FRAMEs (`frames.json`)
## Mech weapons (`weapons.json`)
## Mech systems (`systems.json`)
## Mech weapon mods (`mods.json`)
## Pilot gear, armor, and weapons (`pilot_gear.json`)
## Pilot talents (`talents.json`)
## Equipment tags (`tags.json`)
## NPC classes (`npc_classes.json`)
## NPC features (systems, traits, etc.) (`npc_features.json`)
## NPC templates (`npc_templates.json`)