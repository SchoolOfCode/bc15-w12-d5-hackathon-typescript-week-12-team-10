import { chapterTwo, chapterTwoPathThree } from "./chapters/chaptertwo.ts";

// Define character choices as an enum
enum CharacterChoice {
  Barbarian = "barbarian",
  Mage = "mage",
}

enum WeaponChoice {
  Sword = "sword",
  Wand = "wand",
}

export let playerObject = {
  name: null as string | null,
  playerClass: CharacterChoice.Barbarian || CharacterChoice.Mage,
  playerWeapon: WeaponChoice.Sword || WeaponChoice.Wand,
};

function chooseAdventure(): void {
  alert("Welcome to the Choose Your Own Adventure Game!\n");

  // Ask the user for their name, push to the player object
  const playerName = window.prompt("Enter your name:");
  playerObject.name = playerName;

  // Alert, welcome the user
  alert(`Welcome ${playerObject.name}!`);

  // Prompt the user to choose their character
  const rawCharacterChoice = window.prompt(
    'Choose your character: Type "barbarian" or "mage"'
  );

  if (!rawCharacterChoice) {
    alert("Invalid choice. Refresh the page to try again.");
    return;
  }

  const characterChoice: CharacterChoice =
    rawCharacterChoice.toLowerCase() as CharacterChoice;

  switch (characterChoice) {
    case CharacterChoice.Barbarian:
      playerObject.playerClass = characterChoice;
      console.log(playerObject);
      break;
    case CharacterChoice.Mage:
      playerObject.playerClass = characterChoice;
      console.log(playerObject);
      break;
    default:
      console.log("Invalid choice. Refresh the page to try again.");
      break;
  }

  // Prompt the user to choose their weapon
  const rawWeaponChoice = window.prompt(
    'Choose your weapon: Type "sword" or "wand"'
  );

  if (!rawWeaponChoice) {
    alert("Invalid choice. Refresh the page to try again.");
    return;
  }

  const weaponChoice: WeaponChoice =
    rawWeaponChoice.toLowerCase() as WeaponChoice;

  switch (weaponChoice) {
    case WeaponChoice.Sword:
      playerObject.playerWeapon = weaponChoice;
      console.log(playerObject);
      break;
    case WeaponChoice.Wand:
      playerObject.playerWeapon = weaponChoice;
      console.log(playerObject);
      break;
    default:
      console.log("Invalid choice. Refresh the page to try again.");
      break;
  }

  alert(
    `Brave ${playerObject.name} the ${playerObject.playerClass}, armed with your ${playerObject.playerWeapon}! Get ready to set off on your journey.`
  );

  const pathChoice: string | null = window.prompt(
    "You are walking through the forest when you come across a fork in the road. Path 1 leads into the bushes. Path 2 leads to the town. Path 3 leads to the cave. Which number path would you like to follow?"
  );

  if (!pathChoice) {
    alert("Invalid choice. Refresh the page to try again.");
    return;
  }

  switch (pathChoice) {
    case pathChoice === "one" || "1":
      alert(
        "You stumble through the bushes, only to find a cliff on the other side. You lose your footing and fall to your death. A messagenger has been dispatched to inform your loved ones of your unfortunate demise. Game over."
      );
      break;
    case pathChoice === "two" || "2":
      chapterTwo();
      break;
    case pathChoice === "three" || "3":
      chapterTwoPathThree();
      break;
    default:
      console.log("Invalid choice. Refresh the page to try again.");
      break;
  }
}
chooseAdventure();
