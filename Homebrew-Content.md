# Creating Homebrew COMP/CON Content
First off, a disclaimer: the structure of COMP/CON data is, as of the time of this writing, not yet locked in. It's possible (although unlikely) for it to change. Also, adding content will require manual editing of JSON files. There **is** a content editor UI coming to COMP/CON in the future, but if you can't wait, this guide is for you.

## Adding Content to COMP/CON
LANCER organizes everything by licenses that correspond to Frames. COMP/CON's upcoming content editor UI will do this too, but the actual guts of the app group everything by type (weapon, system, tag, etc) and collect and organize everything as the need arises, most often by a unique `id` attribute for any given thing. The types of things COMP/CON stores as data (and, because of this, the stuff you can add) includes:
- Manufacturers
- CORE Bonuses
- Frames
- Mech Weapons
- Mech Weapon Mods
- Mech Systems
- Tags
- Statuses

The structure and usage of each of these will be covered in detail, but first there's some top-level organizational stuff:

### Content Package Structure
Your content package (hereafter: "brew") is contained in a single-level folder that, at minimum, contains an `info.json` file which contains the following:
```json
{
  "name": "My homebrew package name",
  "author": "My name",
  "version": "Version name or number",
  "description": "A description that shows up on the Options page content toggle",
  "website": "www.my-website.com",
  "active": false
}
```
the `active` property is what COMP/CON uses to determine what installed packages are loaded. It's best to keep this as `false`.

A working, but contentless, folder structure would look like this:

```
my homebrew folder
│   info.json
```

additional data will be included in the folder on the same level as the `info.json` file. _Content folders should not have any depth_.

For the most part, CC will identify missing IDs and display a `// MISSING DATA //` message in the UI. This can be caused by bad ID references, malformed JSON, or an unloaded content package.

### License Structure

Despite being stored by item type, COMP/CON organizes most items (with the exception of Pilot equipment) into Licenses, which are defined by Manufacturer and Frame. Including a new Frame will automatically create a license If it's a Frame under a homebrew Manufacturer, a valid Manufacturer **must** be included. No additional definitions need to be made.
It's strongly recommended that any new Frames contain at least one Weapon, Mod, or System per each license level.

### Item IDs

All data in COMP/CON is referenced by ID string defined in the item data. There are no restrictions on this string, other than it must be unique -- if there are ID collisions, CC will return the first item it can find with the given ID, which could cause deep weirdness.

## Manufacturers

Homebrew Frames can be added to any Core manufacturer (GMS, IPS-N, HA, SSC, and HORUS), but if a Frame has a custom manufacturer it must be added in a `manufacturers.json` file, or licenses will fail to correctly load. The structure of the `manufacturers.json` is as follows:
```
[
  {
    "id": "MHM",
    "name": "My Homebrew Manufacturer",
    "description": "The description can contain HTML tags"
  },
  {...}
]
```
The `id` field should be a few characters, and is the manufacturer's abbreviated name (eg. GMS -> General Massive Systems, SSC -> Smith-Shimano Corpro) and must be correctly referenced in CORE Bonus, Frame, System, Mod, and Weapon data as the item's `source` property. The  `name` field is the display name, and can be any string (eg. HORUS is just HORUS). The `description` field can be of any length and contain HTML elements.