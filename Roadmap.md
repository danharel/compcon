## v1.0 (Complete!)
### ~Printing~ ✅

### ~Custom Images~ ✅

### ~Gear Catalogue~ ✅

## v1.5 (projected: April 2019)

### Readability and Style Normalization
Font sizing and weight, spacing, gutters, and colors can be improved and standardized across the whole app, making it nicer to use and setting up future styling passes.

### Performance
The first-pass implementations of features aren't particularly performant, and there are many easy saves yet to be made.

### Code Cleanliness
It's a fair sight better than the alpha but by no means good. COMP/CON's code should be clear, clean, and well documented so future contributors feel comfortable working with it.

### Alternate Roster and Hangar Views
Provide at-a-glance Roster and Config views that aren't restricted to the sidebar -- especially pretty for users who take advantage of the custom images options

### LANCER GDrive Player Sheet Integration
Integrate [ari's](twitter.com/hellwife0) importer for the [GDrive LANCER Player Sheet](https://docs.google.com/spreadsheets/d/1Tz8rbkOq9nyuIJ6bA0636dtLeN68Z5Q0yJF8cjycXxQ/edit#gid=0)

## v2
### GIST Saves
COMP/CON Save Data is small. We should be able to update it to a gist as a kind of ad-hoc "cloud storage". Trade pilots and configurations by sending someone an ID. COMP/CON handles the rest.

### Better Stat Contribution Visibility
Right now, a lot of the rules are correctly implemented but hidden. If a pilot's SYSTEMS score is contributing to a configuration's limited bonus, there should be a UI element that describes this relationship.

### Item Actions
Mech systems (and some weapons) add or enhance combat abilities. These should be moved into a more explicit data structure so we can reason about them in the future -- and do things like offer a DnD4e-style "Action Card" print format

### Tutorial Mode
COMP/CON should be a smoother, easier character creator than the core pdf at a minimum, but it should be easy for first-time users in the general sense. Many Vue tutorial-builder modules exist, and COMP/CON should use one to help guide new players through the pilot and config editors. At a minimum, we should have tutorials for New Pilot, Level Pilot, and New Config (and probably also loadouts and retrofitting)

### Per-Item Notes
Users should be able to add fluff, reminders, or house rules to individual pieces of pilot gear and mech systems/weapons. This should also include things like Hardsuit and Archaic Weapon rollable descriptions.

### Exotic and Custom Items
Users should be able to add Pilot and Mech gear not present in the rulebook. Saving, storing, and importing/exporting these items will be a good starting point to building out the mod manager framework.

### Charts
We have damage and range data, so we should be able to provide users with things like nice, reactive damage-at-range (and other!) charts for their configuration loadouts

### Gear Catalogue Comparison View
Users should be able to use the Catalogue to compare stats between two or more items. Ideally this should be an openable window for reference when building loadouts.

### LANCER Glyphs
There are a lot of places where an icon would be useful -- damage type, manufacturer, AoE type, etc.

### More Print Options
Users should have the ability to select from a few print templates (portrait, landscape, embellished, etc) as well as printing a set of D&D-esque "Power Cards", filled in with relevant stat bonuses and system abilities.

## v3+

### Modding Tools
COMP/CON should include a full-featured license editor, so users could add homebrew frames and items. It should also be easy to group these licenses into packages, import/export these packages, and enable or disable their use when creating pilots and configurations

### GM Tools
Building enemy combatants/NPCs is nearly as involved as building pilots. Likewise, COMP/CON should have generators and editors for enemy and NPC creation, and allow users to make, save, edit, group, and print sheets for use in gameplay.

Additionally, there are plenty of generators in the rulebook that could be trivially ported to COMP/CON (eg: planet generator, resource tables, mission profiles

Far-future GM tools could include things like dice rollers, initiative trackers, campaign logs/wikis, and faction trackers.