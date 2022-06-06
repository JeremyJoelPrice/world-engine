# NPC Generator

The following is my solution for creating deep NPCs who think and act
consistently, with minimal prep time.

## Contents

<hr>

-   Design Philosophy
-   Implementation
-   To Do

<br>

## Design Philosophy

<hr>

To me, an NPC is made of a number of components depending on that NPC's expected
prominence in the story. There are 4 roles an NPC might be needed to fill:
Background, Minor, Significant, Main.

1. If you need some extras to fill out a scene/location, use **Background
   NPCs**.
2. If you need someone to have enough characterisation to impact a scene, use
   **Minor NPCs**.
3. If you need someone to be the focus of a scene, or a recurring character of
   some interest, use **Signifcant NPCs**.

**Background NPCs** have:

-   Name
-   High Concept

_These NPCs are wallpaper_

**Minor NPCs** also have:

-   Characterisation
-   Relationships (at least to PCs, possibly to other NPCs/factions)

_These NPCs will react to events in some important way in one or two scenes_

**Significant NPCs** also have:

-   Approach _2 or 3 emotional attitudes they adopt when confronted with a
    problem they can't easily solve. These are a hierarchy; the NPC begins at
    their first resort, and moves down the list until they find a strategy that
    works._
-   Assets _One or more abilities, resources, useful knowledge/insights, or
    anything else that they can use to their advantage_
-   Limitations _One or more weaknesses, flaws, dependencies, or anything that
    limits what they can do, or can be exploited and used against them_

_These NPCs must tolerate a lot of interaction and scrutiny, so they are given
specific strengths, weaknesses and strategies they will try to apply to whatever
circumstances they find themselves in_

**Main NPCs** are prominent, recurring characters who shape the world around
them. They generally have more detail in all of the above categories, but also
have:

-   Agenda _An overall goal, and a next step, which describe how the game world
    will change if the PCs don't interfere_

_These NPCs push their own agenda; they represent what will happen if the PCs do
nothing_

<br>

## Implementation

<hr>
NPC Gen will return one or more NPCs, whose details can be customised according to which parameters the user
chooses to give.

### NPC Object

Each NPC is returned as an object, for example:

```
name: "Æskil Kjartanson",
highConcept: "Cynical dancing girl or boy",
descent: "Norræn",
sex: "male",
characterisation: [
    "Bulky, built, or more massive than usual",
    "Their accent is unusual for the location",
    "Ill-kept, whether worn, dirty, or rumpled"
],
```

### Parameters Object

NPC parameters are specified with a similar object. This object is provided as
an argument, and is used as a template for the NPC/s to be created.

```
{
    highConcept: "underClass" || "commonerClass" || "gentryClass" || "criminal" || "merchant" || "nobility" || "tribal" || "villager" || "warrior",
    descent: "norræn" || "woodland" || "asculum",
    sex: "male" || "female",
    characterisation: "random",
    ...
}
```

Any key can be given a value of "random' instead, and a random value will be
returned. Any key can also be given a custom value, and that value will be
returned as given. Any keys not given will be ignored in the returned object,
except for the following mandatory keys, which will be given random values:

-   name
-   descent
-   sex
-   highConcept

### Assets Key
Because assets includes characer stats, this key has some extra optional configurations.
If your assets array includes an object with a key of `maxHd` and/or `minHd`, these will act as constraints on the random stats generated.

### Function Call

The getNPC function takes several parameters:

-   npcParams - _the parameters object described above_
-   count - _the number of NPCs to return_

### More Parameters

You can give your parameters object the following additional keys with "random"
values to generate additional content:

-   characterisation
-   relationships
-   assets
-   limitations
-   approach
-   agenda

### Templates

Normally, you will generate NPCs via a template. To do this, pass one of the following strings in place of the params object:
* "background"
* "minor"
* "significant"
* "main"

### To Do

Refactor npc generator to only return fields marked as "random",
Implement a middleman function which created parameter objects based on templates, and accepts either partially completed parameter objects and/or string names of templates