## v1.0 (Complete!)
### ~Printing~ ✅

### ~Custom Images~ ✅

### ~Gear Catalogue~ ✅

## v1.2 (Complete!)

### ~Alternate Roster and Hangar Views~ ✅

### ~LANCER GDrive Player Sheet Integration~ ✅

### ~Homebrew and Content Package Importer~ ✅

## v1.5
### ~Performance~ ✅

### ~Code Cleanliness~ ✅

### Expanded Compendium
The Compendium should serve as an in-app reference for users who like to keep COMP/CON open as they play.

### ~Improved UI~ ✅

## v2
### GIST Saves
COMP/CON Save Data is small. We should be able to update it to a gist as a kind of ad-hoc "cloud storage". Trade pilots and configurations by sending someone an ID. COMP/CON handles the rest.

### Imgur-hosted Pilot and Mech art
Users should be able to, as an option, upload their custom artwork via COMP/CON so that when Pilots and Configurations are shared, the recipients don't have to do any more work to see the associated art. This can be done via the imgur API, automated by COMP/CON

### Better Stat Contribution Visibility
Right now, a lot of the rules are correctly implemented but hidden. If a pilot's ENGINEERING score is contributing to a configuration's limited bonus, there should be a UI element that describes this relationship.

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

### Active Mode
COMP/CON should accommodate users who want to use the app for active play: activating a pilot should lock free editing, but allow for tracking damage, heat, repairs, limited usage, dice rolling, &c. A user should be able to rely on the app as a digital player sheet, not just a printable generator.

### Modding Tools
COMP/CON should include a full-featured license editor, so users could add homebrew frames and items. It should also be easy to group these licenses into packages, import/export these packages, and enable or disable their use when creating pilots and configurations

### GM Tools
Building enemy combatants/NPCs is nearly as involved as building pilots. Likewise, COMP/CON should have generators and editors for enemy and NPC creation, and allow users to make, save, edit, group, and print sheets for use in gameplay.

Additionally, there are plenty of generators in the rulebook that could be trivially ported to COMP/CON (eg: planet generator, resource tables, mission profiles

Far-future GM tools could include things like initiative trackers, campaign logs/wikis, and faction trackers.