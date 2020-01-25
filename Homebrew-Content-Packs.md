**_NOTE: THIS PAGE IS A WORK IN PROGRESS AND IS BEING REWRITTEN TO ACCOMODATE THE NEW V2 HOMEBREW STRUCTURE_**
# Basics
A UI-based homebrew editor is not yet available in COMP/CON, but you can already create homebrew content if you're willing to work with JSON.
COMP/CON loads homebrew from `.LCP` (Lancer Content Pack) archives, which are actually just `.ZIP` files with their extension changed. It looks inside the archive for specific `.JSON` files which contain the actual data. The archive **MUST** contain a [`lcp_manifest.json` file with its required contents](#manifest-lcp_manifestjson), which contains metadata for the package. The files it looks for data in are as follows:

* [`manufacturers.json` (Manufacturers)](#manufacturers-manufacturersjson)
* [`core_bonus.json` (Core Bonuses)](#core-bonuses-core_bonusjson)
* [`frames.json` (FRAMEs)](#frames-framesjson)
* [`weapons.json` (Mech weapons)](#mech-weapons-weaponsjson)
* [`systems.json` (Mech systems)](#mech-systems-systemsjson)
* [`mods.json` (Mech weapon mods)](#mech-weapon-mods-modsjson)
* [`pilot_gear.json` (Pilot gear, armor, and weapons)](#pilot-gear-armor-and-weapons-pilot_gearjson)
* [`talents.json` (Pilot talents)](#pilot-talents-talentsjson)
* [`tags.json` (Equipment tags)](#equipment-tags-tagsjson)
* [`npc_classes.json` (NPC classes)](#npc-classes-npc_classesjson)
* [`npc_features.json` (NPC features (systems, traits, etc.))](#npc-features-systems-traits-etc-npc_featuresjson)
* [`npc_templates.json` (NPC templates)](#npc-templates-npc_templatesjson)

## The VSCode extension

To make creating homebrew content packs as easy as possible, you should use the [Visual Studio Code](https://code.visualstudio.com/) text editor combined with the [COMP/CON Content Authoring extension](https://marketplace.visualstudio.com/items?itemName=massif-press.comp-con-content-authoring). VSCode by default provides JSON syntax validation, and the extension provides COMP/CON specific data validation, autocomplete, and a task to rapidly create the .LCP archive from your source code.

To use the extension, make sure you're working in an **EMPTY FOLDER**, create an `lcp_manifest.json` file inside of it, and fill out its required fields. The extension should activate once it detects the manifest file. To run the build task, first, if you're on Windows, make sure you have 7zip installed - Mac and Linux should work right away (uses `zip` tool). Press `Ctrl+Shift+P`, and search for `Tasks: Run Build Task`. You should see a `compcon: Build .LCP package` option - select it and your .LCP file should rapidly build itself.

## A note about images
Due to web limitations, images in content packs (namely: your pack's main image, manufacturer logos, and frame images) can only be referenced via a URL for an image hosted on the Internet. Make sure the place where you choose to host your images will be around for a while.

# Details
## Manifest (`lcp_manifest.json`)
### Structure
A single JSON object containing metadata about your content package.
```json
{
    "name": "My Homebrew",
    "author": "Ari",
    "description": "This is my homebrew.",
    "item_prefix": "prefix",
    "version": "0.0.1",
    "image_url": "https://images.com/optional-image.png",
    "website": "https://optional-website.com"
}
```
* **`name`**: The name of your homebrew package.
* **`author`**: Your name or your group's name.
* **`description`** _(optional)_: A description of your homebrew package.
* **`item_prefix`**: A prefix used to generate your homebrew items' internal IDs. These IDs are how the items are stored in pilot data, so make sure you're happy with your prefix and **do NOT change it after releasing your homebrew to the public**, else people's saves will break.
* **`version`**: A version identifier for the current iteration of your homebrew. Can technically be any string, but it's recommended to use numerical-style versions for clarity.
* **`image_url`** _(optional)_: An external URL to an image representing your homebrew package. Optional, but recommended for recognizability.
* **`website`** _(optional)_: A link to a website representing your homebrew package, or any site you want really. Just try not to give anyone a virus.

**COMP/CON uses the `name` and `author` fields in combination to identify whether the homebrew package is already installed and perform and update rather than an install.** Refrain from changing these in updates for a better user experience.

## Manufacturers (`manufacturers.json`)
### Structure
An array of objects containing each manufacturer's data.
```json
[
    {
        "id": "MFR",
        "name": "Manufacturer Name",
        "color": "#000000",
        "description": "My manufacturer fluff",
        "quote": "<i>A quote</i>",
        "logo_url": "https://example.com/image.png"
    }
]
```
* **`id`**: An initialism or other short name for your manufacturer, eg `GMS`, `IPS-N`. Will be referenced by licensed items such as weapons, and is **CASE-SENSITIVE**.
* **`name`**: The manufacturer's name.
* **`color`**: The color that represents your manufacturer, in hex with the leading number sign.
* **`description`**: **(Accepts HTML)** Long-form fluff about your manufacturer.
* **`quote`**: **(Accepts HTML)** A pithy quote representing manufacturer, such as _"SUPERIOR BY DESIGN"_.
* **`logo_url`** _(optional)_: An external URL to an image representing your manufacturer. Optional but recommended.

## Core Bonuses (`core_bonus.json`)
### Structure
An array of objects containing each core bonus's data.
```json
[
    {
        "name": "My Core Bonus",
        "source": "mf",
        "description": "Fluff for your core bonus",
        "effect": "The mechanical effect of the core bonus"
    }
]
```
* **`name`**: The name of the core bonus.
* **`source`**: The `logo` property of the manufacturer that provides the core bonus. If `GMS`, it will be available without license requirements.
* **`description`**: Fluff for your core bonus.
* **`effect`**: The mechanical effect of the core bonus.

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