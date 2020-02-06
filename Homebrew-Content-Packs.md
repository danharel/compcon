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

## HORUS text
Comp/Con has a few special text effects, mostly for HORUS-style flavor. You can include these in fields noted with **(Accepts HTML)** by wrapping the desired text with one of these sets of tags:
```
<code class=\"horus\">Blah blah blah</code>
<span class=\"horus--subtle\">Blah blah blah</span>
<span class=\"ra-quiet\">Blah blah blah</span>
```
The `"`s are escaped (`\"`) so that they are valid JSON.

## On Equipment Tags
Every tag has an identifying string - an `id` - which can be applied to other items (frames, equipment, weapons, etc...). Any item which can have tags applied has a `tags` property.

The tag id's for the Core book tags follow the format `tg_tag_name` - the name is converted to lower case, punctuation removed, and spaces replaced with `_`. To see the id's of all tags from the core book, see [tags.json](https://github.com/massif-press/lancer-data/blob/master/lib/tags.json) in the lancer-data repo.

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
* **`source`**: The `id` property of the manufacturer that provides the core bonus. If `GMS`, it will be available without license requirements.
* **`description`**: **(Accepts HTML)** Fluff for your core bonus.
* **`effect`**: **(Accepts HTML)** The mechanical effect of the core bonus.

## FRAMEs (`frames.json`)


## Mech weapons (`weapons.json`)
## Mech systems (`systems.json`)
## Mech weapon mods (`mods.json`)
## Pilot gear, armor, and weapons (`pilot_gear.json`)
All three kinds of pilot gear must be included together in the `pilot_gear.json` file. The file must begin with `[` and end with `]`.
### Pilot gear
```json
  {
    "name": "My Pilot Gear",
    "type": "gear",
    "description": "Fluff and/or mechanical effects of the gear.",
    "tags": [
      {
        "id": "tg_gear"
      },
      {
        "id": "tg_limited",
        "val": 1
      },
      {
        "id": "tg_full_action"
      }
    ],
    "uses": 1
  }
```
* **`name`**: The name of the pilot gear.
* **`type`**: Gear must all have `gear` in this property. This type is for anything that isn't a weapon or armor.
* **`description`**: **(Accepts HTML)** Fluff and/or mechanical effects for your gear.
* **`tags`**: A list of the tags for the gear. Each tag begins with a `{` and ends with a `}`. For more information, see [On Equipment Tags](#on-equipment-tags).
  * **`id`**: The identifying string for the tag. The tag id's for the Core book tags follow the format `tg_tag_name` - the name is converted to lower case, punctuation removed, and spaces replaced with `_`.
  * **`val`** _(optional)_: For tags that take a value, like Reliable, this is the value that gets inserted into the tag name/description.
* **`uses`** _(optional)_: The number of limited uses for the piece of gear. This is currently required, but may be made redundant in favor of using the Limited tag. Must be a number. (i.e. `1`, not `"1"` or `'1'`.)

### Pilot armor
```json
  {
    "name": "My Pilot Armor",
    "type": "armor",
    "description": "Fluff and/or mechanical effects of the armor.",
    "tags": [
      {
        "id": "tg_personal_armor"
      }
    ],
    "hp_bonus": 3,
    "armor": 1,
    "evasion": 8,
    "edef": 8,
    "speed": 4
  }
```
* **`name`**: The name of the pilot armor.
* **`type`**: Armor must all have `armor` in this property.
* **`description`**: **(Accepts HTML)** Fluff and/or mechanical effects for your armor.
* **`tags`**: A list of the tags for the armor. Each tag begins with a `{` and ends with a `}`. All armor from the Core book has the `tg_personal_armor` tag, and homebrew is encouraged to follow this convention. Other tags may be included as well. For more information, see [On Equipment Tags](#on-equipment-tags).
  * **`id`**: The identifying string for the tag. The tag id's for the Core book tags follow the format `tg_tag_name` - the name is converted to lower case, punctuation removed, and spaces replaced with `_`.
  * **`val`** _(optional)_: For tags that take a value, like Reliable, this is the value that gets inserted into the tag name/description.
* **`hp_bonus`**: The amount of bonus HP that the armor provides to the pilot. Should be a number with no quotes. (i.e. `3`, not `"3"` or `'3'`.)
* **`armor`**: The pilot's Armor while wearing the armor. Should be a number with no quotes.
* **`evasion`**: The pilot's Evasion while wearing the armor. Should be a number with no quotes.
* **`edef`**: The pilot's E-Defense while wearing the armor. Should be a number with no quotes.
* **`speed`**: The pilot's Speed while wearing the armor. Should be a number with no quotes.

### Pilot weapons
```json
  {
    "name": "My Pilot Weapon",
    "type": "weapon",
    "description": "Fluff and/or mechanical effects of the weapon.",
    "tags": [
      {
        "id": "tg_loading"
      },
      {
        "id": "tg_reliable",
        "val": 1
      }
    ],
    "range": [
      {
        "type": "Range",
        "val": 5
      }
    ],
    "damage": [
      {
        "type": "kinetic",
        "val": 2
      }
    ]
  }
```
* **`name`**: The name of the pilot weapon.
* **`type`**: Weapons must have `Weapon` in this property.
* **`description`**: **(Accepts HTML)** Fluff and/or mechanical effects for your weapon.
* **`tags`**: A list of the tags for the weapon. Each tag begins with a `{` and ends with a `}`. For more information, see [On Equipment Tags](#on-equipment-tags).
  * **`id`**: The identifying string for the tag.
  * **`val`** _(optional)_: For tags that take a value, like Reliable, this is the value that gets inserted into the tag name/description.
* **`range`**: A list of the range types for the weapon. Each type begins with a `{` and ends with a `}`. The example above will render as having Range 5.
  * **`type`**: The type of range. Must be one of `Range`, `Threat`, `Line`, `Cone`, `Blast`, or `Burst`.
  * **`val`**: The range for this type.
* **`damage`**: A list of the damage types for the weapon. Each type begins with a `{` and ends with a `}`. The example above will render as doing 2 kinetic damage.
  * **`type`**: The type of damage. Must be one of `kinetic`, `explosive`, `energy`, `burn`, or `variable`. `variable` is what is used on the Signature weapons from the Core book - in the future this type will allow the user to select what type of damage the weapon will do.
  * **`val`**: The amount of damage for this type. Can either be a number (as shown above), or a string (for example, `1d6`).

## Pilot talents (`talents.json`)
```json
[
  {
    "name": "MY TALENT",
    "description": "Fluff for your talent.",
    "ranks": [
      {
        "name": "RANK 1 NAME",
        "description": "Mechanical effect of rank 1."
      },
      {
        "name": "RANK 2 NAME",
        "description": "Mechanical effect of rank 2."
      },
      {
        "name": "RANK 3 NAME",
        "description": "Mechanical effect of rank 3."
      }
    ]
  }
]
```
* **`name`**: The name of the talent.
* **`description`**: **(Accepts HTML)** Fluff for your talent.
* **`ranks`**: A list of the ranks of the talent. Comp/Con requires there to be exactly 3 ranks.
  * **`name`**: The name of the talent rank.
  * **`description`**: **(Accepts HTML)** The mechanical effect of the talent rank.

## Equipment tags (`tags.json`)
```json
[
  {
    "name": "MY TAG {VAL}",
    "description": "Mechanical effects of the tag, which does {VAL} amount of something."
  }
]
```
* **`name`**: The name of the tag. The `{VAL}` is optional, and is for tags like Reliable which have an associated value. In those cases, `{VAL}` gets replaced with the value of the tag.
* **`description`**: **(Accepts HTML)** Mechanical effect of the tag. Again, `{VAL}` is optional and is treated the same as in `name`.

## NPC classes (`npc_classes.json`)
## NPC features (systems, traits, etc.) (`npc_features.json`)
## NPC templates (`npc_templates.json`)