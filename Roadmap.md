# Roadmap

## v1
### Printing
The final "core" Pilot Editor feature, COMP/CON needs to allow player to print pilot and mech sheets for tabletop use. Users should have a reasonably fine degree of control as to what is printed, and how (eg. include space for notes, don't print images, etc.)

### Custom Images
Users should be able to upload their own pilot and config images to use in COMP/CON. The only reason it's not in *right now* is because it wasn't necessarily critical -- but it absolutely is required for a 1.0 release.

### Gear Catalogue
LANCER has a lot of stuff, and COMP/CON giving players and GMs a tool to dig through all of it is a no-brainer (we have all the data set up already). v1 should allow users to see item lists by type and category, or by license.

## v2
### Better Stat Contribution Visibility
Right now, a lot of the rules are correctly implemented but hidden. If a pilot's SYSTEMS score is contributing to a configuration's limited bonus, there should be a UI element that describes this relationship.

### Item Actions
Mech systems (and some weapons) enhance or add new combat abilities. These should be moved into a more explicit data structure so we can reason about them in the future (see: Action Cards and Mod Editor)

### Tutorial Mode
COMP/CON should be easier to use than the rulebook, but this can be enhanced. Many Vue tutorial-builder modules exist, and COMP/CON should use one to help guide new players through the pilot and config editors. At a minimum, we should have dismissable tutorials for New Pilot, Level Pilot, and New Config (and probably also loadouts and retrofitting)

### Per-Item Notes
Users should be able to add fluff, reminders, or house rules to individual pieces of pilot gear and mech systems/weapons. This should also include things like Hardsuit and Archaic Weapon rollable descriptions.

### Charts
We have damage and range data, so we should be able to provide users with things like nice damage-at-range (and other!) charts

### Gear Catalogue Comparison View
Users should be able to use the Catalogue to compare stats between two or more items. Ideally this should be an openable window for reference when building loadouts.

### LANCER Glyphs
There are a lot of places where an icon would be useful -- damage type, manufacturer, AoE type, etc.

## v3+

### Modding Tools
COMP/CON should include a full-featured license editor, so users could add homebrew frames and items. It should also be easy to group these licenses into packages, import/export these packages, and enable or disable their use when creating pilots and configurations

### GM Tools
Building enemy combatants/NPCs is nearly as involved as building pilots. Likewise, COMP/CON should have generators and editors for enemy and NPC creation, and allow users to make, save, edit, group, and print sheets for use in gameplay.

Additionally, there are plenty of generators in the rulebook that could be trivially ported to COMP/CON (eg: planet generator, resource tables, mission profiles

Far-future GM tools could include things like dice rollers, initiative trackers, campaign logs/wikis, and faction trackers.