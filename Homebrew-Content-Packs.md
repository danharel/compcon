**_NOTE: THIS PAGE IS A WORK IN PROGRESS AND IS BEING REWRITTEN TO ACCOMODATE THE NEW V2 HOMEBREW STRUCTURE_**
# Basics
A UI-based homebrew editor is not yet available in COMP/CON, but you can already create homebrew content if you're willing to work with JSON.
COMP/CON loads homebrew from `.LCP` (Lancer Content Pack) archives, which are actually just `.ZIP` files with their extension changed. It looks inside the archive for specific `.JSON` files which contain the actual data - every type of item has its own .json file, which contains an array of items. The archive **MUST** contain a [`lcp_manifest.json` file with its required contents](#manifest-lcp_manifestjson), which contains metadata for the package. The files it looks for data in are as follows - and they ⚠️**MUST BE NAMED AS FOLLOWING**⚠️, COMP/CON will *ignore any other files in the package*:

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

Frames are the basis for all LANCER, and thus COMP/CON, licenses. With the exception of GMS, all mech equipment is tied to a Frame.

`frames.json` is structured in the following way:
```json
[
  {
  "source": "MFR",
  "name": "FRAMENAME",
  "mechtype": [
    "Type"
  ],
  "y_pos": "",
  "description": "My description of the Frame",
  "mounts": [
    "Flex",
    "Main",
    ...
  ],
  "stats": {
    "size": 0.5,
    "armor": 2,
    "hp": 12,
    "evasion": 8,
    "edef": 6,
    "heatcap": 6,
    "repcap": 4,
    "sensor_range": 10,
    "tech_attack": -2,
    "save": 10,
    "speed": 4,
    "sp": 6
  },
  "traits": [
    {
      "name": "Trait 1 Name",
      "description": "Trait 1 effect"
    },
    {
      "name": "Trait 2 Name",
      "description": "Trait 2 effect, It's possible to have any number of traits"
    },
    ...
  ],
  "core_system": {
    "name": "Core System Name",
    "description": "Fluff text for the core system",
    "active_name": "Core System Active Name",
    "active_effect": "Mechanics for the active effect",
    "tags": [
      {
        "id": "tg_quick_action"
      }
    ],
    "passive_name": "Core System Passive",
    "passive_effect": "Mechanics for the passive effect",
    "integrated": {
        "id": "mw_framename_integrated"
      },
  },
  "data_type": "frame",
  "aptitude": {},
  "counters": [
      {
        "id": "ctr_counter_id",
        "name": "COUNTER NAME",
        "default_value": 0,
        "min": 0,
        "max": 12
      }
    ]
  },
  ...
]
```

* **`source`**: The `logo` property of the manufacturer that provides the frame.
* **`name`**: The name of the Frame, and the name of the License. Should be all caps.
* **`mechtype`**: Very short description of the mech, base game tags include: Artillery, Balanced, Controller, Defender, Striker, Support.
* **`y_pos`**: Y offset for frame portrait in Compendium -> Licences. 
* **`description`**: **(Accepts HTML)** Fluff for your frame.
* **`mounts`**: See below for [Mount](#mounts) details.
* **`stats`**: Required frame stats, all fields must be Numbers, not Strings.
* **`traits`**: Frame traits, contain both a `name` and `description`. Any number of traits can be added.
* **`core_system`**:
    * **`name`**: The name of the core system.
    * **`description`**: Fluff for the core system. Mechanical effects go in 'active_effect' and or 'passive_effect'.
    * **`active_name`**: The name of the active effect.
    * **`active_effect`**: **(Accepts HTML)** Mechanical description of what the active effect does.
    * **`tags`**: If a CORE System has no tags, leave this empty ([]).
        * **`id`**: Tag id. For more information, see [On Equipment Tags](#on-equipment-tags).
        * **`val`**: Value for associated tag
    * **`passive_name`**: _(optional)_ The name of the passive effect.
    * **`passive_effect`**: _(optional)_ **(Accepts HTML)** Mechanical description of what the passive effect does
    * **`integrated`**: _(optional)_ If a CORE System has an Integrated weapon, this will be copied to all loadouts. Contains `id` tag for weapon, see [Weapons](#mech-weapons-weaponsjson) for details. TODO: Add more detail on how integrated id's have to be specified.
* **`data_type`**: Should only be set as 'frame'. Used internally in the app.
* **`aptitude`**: Currently unused, leave empty.
* **`counters`**: _(optional)_ stores data for the counter(s) used in the core systems of the mech.
    * **`name`**: The name which will be displayed on the counter.
    * **`default_value`**: The value the counter gets set to initially, or when "Reset" is clicked.
    * **`min`**: The minimum value for the counter.
    * **`max`**: The maximum value for the counter.

### Mounts

Mounts are stored as an array of strings. COMP/CON will determine mount type and slots based on the string -- the valid mount types are:
- Main
- Heavy
- Aux/Aux
- Aux
- Main/Aux
- Flex
- Integrated

They must preserve the capitalization above. Custom mixed mounts (eg. 'Heavy/Aux') are not yet supported.

## Mech weapons (`weapons.json`)

Mech Weapons can be added to existing licenses, custom licenses, or the GMS base set. If adding to a custom license, that license must be loaded and unlocked for a user to select that equipment. If a mech weapon is not appearing when it should be, please ensure that the license name, level, and source fields are correct (and the content package is installed and activated).

`weapons.json` is structured in the following way:
```json
[
  {
    "name": "BIG IRON",
    "mount": "Main",
    "type": "Rifle",
    "damage": [
      {
        "type": "kinetic",
        "val": "1d6"
      },
      {
        "type": "burn",
        "val": 1
      },
      ...
    ],
    "range": [
      {
        "type": "Range",
        "val": 8
      },
      {
        "override": true,
        "val": "Write any effect here"
      },
      ...
    ],
    "tags": [
      {
        "id": "tg_accurate"
      }
    ],
    "source": "MFG",
    "license": "FRAMENAME",
    "license_level": 3,
    "effect": "Mechanical description of effect",
    "description": "Fluff description for weapon",
    "data_type": "weapon",
    "aptitude": {}
  },
  ...
]
```
TODO: Talk about the id field, especially as it relates to integrated weapons.
* **`name`**: The name of the Weapon.
* **`mount`**: Weapon mount size, See below for [Weapon Mount](#weapon-mounts) details.
* **`type`**: Type of weapon. See below for [Weapon Type](#weapon-types) details.
* **`damage`**: Damage(s) dealt by the weapon, specify either: `type` or `override` and a `val`
    * **`type`**: Type of damage, valid choices below. Using `type` then uses `val` as either as a string of a roll, eg: "1d3", or a constant number eg: 2
        * kinetic
        * energy
        * explosive
        * heat
        * burn
        * variable
    * **`override`**: If this tag is set and is 'true' then `val` is read and displayed as a string for any effect desired.
* **`range`**: Range(s) usable by the weapon, specify either: `type` or `override` and a `val`
    * **`type`**: Type of range, valid choices below. Using `type` then uses `val` as a constant number eg: 2
        * Range
        * Threat
        * Thrown
        * Line
        * Cone
        * Blast
        * Burst
    * **`override`**: If this tag is set and is 'true' then `val` is read and displayed as a string for any effect desired.
* **`tags`**: A list of the tags for the weapon. For more information, see [On Equipment Tags](#on-equipment-tags).
  * **`id`**: The identifying string for the tag. The tag id's for the Core book tags follow the format `tg_tag_name` - the name is converted to lower case, punctuation removed, and spaces replaced with `_`.
  * **`val`** _(optional)_: For tags that take a value, like Reliable, this is the value that gets inserted into the tag name/description.
* **`source`**: The `logo` property of the manufacturer that provides the core bonus. If `GMS`, it will be available without license requirements.
* **`license`**: The NAME of the frame /  license this weapon is associated with. Must match exactly.
* **`license_level`**: Number from 1-3 for where the weapon exists within the license.
* **`effect`**: **(Accepts HTML)** Mechanical description of what the active effect does.
* **`description`**: **(Accepts HTML)** Fluff for your weapon.
* **`data_type`**: Should only be set as 'weapon'. Used internally in the app.
* **`aptitude`**: Currently unused, leave empty.

### Weapon Mounts

Weapon mounts dictate the size of the weapon, and how many / what types of mounts they use. Valid weapon mount sizes are as follows:
* Auxiliary
* Main
* Heavy
* Superheavy

They must preserve the capitalization above. Custom mixed mounts (eg. 'Heavy/Aux') are not yet supported.

### Weapon Types

Weapon types dictate the classification of weapon, and what types of mods, systems, and tags can be applied.
The string must match exactly. valid types are: 
* Rifle
* Cannon
* Launcher
* CQB
* Nexus
* Melee

## Mech systems (`systems.json`)

[TODO: Probably get a description for this section]

`systems.json` is structured in the following way:
```json
[
  {
    "name": "My Custom System",
    "type": "Deployable",
    "sp": 2,
    "tags": [
      {
        "id": "unique"
      },
      {
        "id": "limited",
        "val": 5
      },
      ...
    ],
    "source": "MFG",
    "license": "FRAMENAME",
    "license_level": 1,
    "effect": "Mechanical description of effect",
    "description": "Fluff description for system",
    "data_type": "system",
    "aptitude": {}
  },
  ...
]
```

* **`name`**: The name of the system.
* **`type`**: What category of system that it is, valid choices below:
    * System
    * AI
    * Shield
    * Deployable
    * Drone
    * Tech
    * Armor
    * Flight System
    * Integrated
    * Mod
* **`sp`**: Cost of the system in system points.
* **`tags`**: A list of the tags for the system. For more information, see [On Equipment Tags](#on-equipment-tags).
  * **`id`**: The identifying string for the tag. The tag id's for the Core book tags follow the format `tg_tag_name` - the name is converted to lower case, punctuation removed, and spaces replaced with `_`.
  * **`val`** _(optional)_: For tags that take a value, like Reliable, this is the value that gets inserted into the tag name/description.
* **`source`**: The `logo` property of the manufacturer that provides the core bonus. If `GMS`, it will be available without license requirements.
* **`license`**: The NAME of the frame /  license this system is associated with. Must match exactly.
* **`license_level`**: Number from 1-3 for where the weapon exists within the license.
* **`effect`**: **(Accepts HTML)** Mechanical description of what the active effect does.
* **`description`**: _(optional)_ **(Accepts HTML)** Fluff for your weapon mod.
* **`data_type`**: Should only be set as 'system'. Used internally in the app.
* **`aptitude`**: Currently unused, leave empty.

For systems, it's recommended to (when appropriate) include the special tags quicktech, fulltech, quickaction, fullaction where appropriate.

## Mech weapon mods (`mods.json`)

Mech Weapon Mods are essentially systems with a few additional properties so COMP/CON can determine how to attach them to weapons. 

`mods.json` is structured in the following way:
```json
[
  {
    "name": "My Weapon Mod",
    "sp": 1,
    "applied_to": [
      "melee",
      "cqb",
      "cannon",
      ...
    ],
    "applied_string": "Melee, CQB, or Cannon",
    "source": "MFG",
    "license": "FRAMENAME",
    "license_level": 1,
    "effect": "Mechanical description of what the active effect does",
    "description": "Fluff for your weapon mod",
    "data_type": "mod",
    "aptitude": {},
    "tags": [
      {
        "id": "tg_mod"
      },
      {
        "id": "tg_unique"
      },
      ...
    ],
    "added_damage": {
      "type": "explosive",
      "val": "2d6"
    },
    "restricted_mounts": [
      "superheavy",
      ...
    ]
  },
  ...
]
```

* **`name`**: The name of the Weapon mod.
* **`sp`**: Cost of the mod in system points.
* **`applied_to`**: What [weapon types](#weapon-types) can this mod be applied to.
* **`applied_string`**: Flavour string for how the information from applied_to is conveyed. eg, "Melee, CQB, or Cannon". 
* **`source`**: The `logo` property of the manufacturer that provides the core bonus. If `GMS`, it will be available without license requirements.
* **`license`**: The NAME of the frame /  license this weapon mod is associated with. Must match exactly.
* **`license_level`**: Number from 1-3 for where the weapon exists within the license.
* **`effect`**: **(Accepts HTML)** Mechanical description of what the active effect does.
* **`description`**: _(optional)_ **(Accepts HTML)** Fluff for your weapon mod.
* **`data_type`**: Should only be set as 'mod'. Used internally in the app.
* **`aptitude`**: Currently unused, leave empty.
* **`tags`**: A list of the tags for the gear. Must include "tg_mod" tag at minimum. For more information, see [On Equipment Tags](#on-equipment-tags).
  * **`id`**: The identifying string for the tag. The tag id's for the Core book tags follow the format `tg_tag_name` - the name is converted to lower case, punctuation removed, and spaces replaced with `_`.
  * **`val`** _(optional)_: For tags that take a value, like Reliable, this is the value that gets inserted into the tag name/description.
* **`added_damage`**: Additional damage granted to weapon the mod is applied to, see `damage` under [mech weapons](#mech-weapons-weaponsjson) for more info.
* **`restricted_mounts`**: Restricts what size mount of weapon this mod can be applied to, see [weapon mounts](#weapon-mounts) for details.

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
* **`tags`**: A list of the tags for the gear. For more information, see [On Equipment Tags](#on-equipment-tags).
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
    "id": "my_tag_id",
    "name": "MY TAG {VAL}",
    "description": "Mechanical effects of the tag, which does {VAL} amount of something."
  }
]
```
* **`id`** _(optional)_: The id for the tag that Comp/Con will use internally, which must be unique. If not supplied, Comp/Con will generate an id automatically. However, any equipment that uses the tag must specify it by id, so you may want to supply id's for your custom tags so that you know what they will be. For more information, see [On Equipment Tags](#on-equipment-tags).
* **`name`**: The name of the tag. The `{VAL}` is optional, and is for tags like Reliable which have an associated value. In those cases, `{VAL}` gets replaced with the value of the tag.
* **`description`**: **(Accepts HTML)** Mechanical effect of the tag. Again, `{VAL}` is optional and is treated the same as in `name`.

## NPC classes (`npc_classes.json`)
```json
[
    {
        "id": "my_npc",
        "name": "MyNPC",
        "role": "striker",
        "info": {
            "flavor": "Flavor text.",
            "tactics": "How to use this NPC."
        },
        "base_features": [
            "npc_base_feature_id_1",
            "npc_base_feature_id_2"
        ],
        "optional_features": [
            "npc_optional_feature_id_1",
            "npc_optional_feature_id_2"
        ],
        "power": 100,
        "stats": {
            "activations": [1, 1, 1],
            "stress": [1, 1, 1],
            "structure": [1, 1, 1],
            "hp": [12, 15, 18],
            "armor": [0, 0, 0],
            "evade": [8, 10, 12],
            "edef": [8, 10, 12],
            "heatcap": [6, 7, 8],
            "hull": [1, 2, 3],
            "agility": [1, 2, 3],
            "systems": [1, 2, 3],
            "engineering": [1, 2, 3],
            "speed": [4, 5, 6],
            "sensor": [10, 10, 10],
            "save": [10, 12, 14],
            "size": [[1], [1], [1]]
        }
    }
]
```

* **`name`**: The name of the NPC class.
* **`id`** _(optional)_: The ID that Comp/Con will use internally. If not specified, the importer will automatically generate an ID.
* **`role`**: Which NPC role category / designation this NPC class generally belongs to. Accepted values are `"artillery"`, `"biological"`, `"controller"`, `"defender"`, `"striker"` and `"support"`.
* **`info`**: General information about the NPC.
  * **`flavor`**: **(Accepts HTML)** Flavor text to introduce the narrative style and role of the NPC in the Lancer universe.
  * **`tactics`**: **(Accepts HTML)** Recommended tactics for GMs using this NPC in their encounters. 
* **`base_features`**: A list of the of the base features that are included with this NPC. Must match the `id` property of the features. 
* **`optional_features`**: A list of the of the optional features this NPC can always select. Must match the `id` property of the features.
* **`power`**: A rough estimation of the combat power of this NPC at Tier 1. Used for combat analytic metrics. 100 is standard.
* **`stats`**: A complete breakdown of the essential stats for this NPC. 
  * **`activations`**: A list containing the number of times this NPC can be activated per round at each tier.
  * **`stress`**: A list of the Stress of the NPC for each tier.
  * **`structure`**: A list of the Structure of the NPC for each tier.
  * **`hp`**: A list containing the number of Hit Points (HP) this NPC has at each tier.
  * **`armor`**: A list containing the number of Armor points this NPC has at each tier.
  * **`evade`**: A list containing the Evasion target number this NPC has at each tier.
  * **`edef`**: A list containing E-Defense target number this NPC has at each tier.
  * **`heatcap`**: A list containing the Heat Capacity of this NPC has at each tier.
  * **`hull`**: A list containing the Hull stat for this NPC has at each tier.
  * **`agility`**: A list containing the Agility stat for this NPC has at each tier.
  * **`systems`**: A list containing the Systems stat for this NPC has at each tier.
  * **`engineering`**: A list containing the Engineering stat for this NPC has at each tier.
  * **`speed`**: A list containing the movement Speed of this NPC has at each tier.
  * **`sensor`**: A list containing the Sensor Range of this NPC has at each tier.
  * **`save`**: A list containing the Save Target number for this NPC has at each tier.
  * **`size`**: A nested list of lists containing the size of this NPC has at each tier.

## NPC features (systems, traits, etc.) (`npc_features.json`)
## NPC templates (`npc_templates.json`)