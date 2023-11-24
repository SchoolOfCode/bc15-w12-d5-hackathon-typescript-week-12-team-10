// // Define character choices as an enum
// enum CharacterChoice {
//   Barbarian = 'barbarian',
//   Mage = 'mage'
// }

// // Define scenarios and their corresponding messages
// const scenarios: Record<CharacterChoice, string> = {
//   [CharacterChoice.Barbarian]: 'You chose to be a barbarian. Unfortunately, you have met a fierce dragon and died.',
//   [CharacterChoice.Mage]: 'Congratulations! You chose to be a mage. You have successfully cast a spell and won the game!',
// };

// function chooseAdventure(): void {
//   console.log('Welcome to the Choose Your Own Adventure Game!\n');

//   const rawCharacterChoice = window.prompt(
//     'Choose your character: Type "barbarian" or "mage"'
//   );

//   if (!rawCharacterChoice) {
//     console.log('Invalid choice. Refresh the page to try again.');
//     return;
//   }

//   // Convert the user input to a CharacterChoice
//   const characterChoice: CharacterChoice = rawCharacterChoice.toLowerCase() as CharacterChoice;

//   switch (characterChoice) {
//     case CharacterChoice.Barbarian:
//       console.log(scenarios[CharacterChoice.Barbarian]);
//       break;
//     case CharacterChoice.Mage:
//       console.log(scenarios[CharacterChoice.Mage]);
//       break;
//     default:
//       console.log('Invalid choice. Refresh the page to try again.');
//       break;
//   }

//   console.log('Thanks for playing! Goodbye.');
// }

// chooseAdventure();

// Define character choices as an enum
enum CharacterChoice {
  Barbarian = 'barbarian',
  Mage = 'mage'
}

enum WeaponChoice {
  Sword = 'sword',
  Wand = 'wand'
}

let playerObject = {
  name: null as string | null,
  playerClass: CharacterChoice.Barbarian || CharacterChoice.Mage,
  playerWeapon: WeaponChoice.Sword || WeaponChoice.Wand
}


function chooseAdventure(): void {
  console.log('Welcome to the Choose Your Own Adventure Game!\n');

  // Ask the user for their name, push to the player object
  const playerName = window.prompt('Enter your name:')
  playerObject.name = playerName;

  // Alert, welcome the user
  alert(`Welcome ${playerObject.name}!`);

// Prompt the user to choose their character
const rawCharacterChoice = window.prompt(
    'Choose your character: Type "barbarian" or "mage"'
  );

if (!rawCharacterChoice) {
    alert('Invalid choice. Refresh the page to try again.');
    return;
  }

const characterChoice: CharacterChoice = rawCharacterChoice.toLowerCase() as CharacterChoice;

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
      console.log('Invalid choice. Refresh the page to try again.');
      break;
  }

  // Prompt the user to choose their weapon
  const rawWeaponChoice = window.prompt(
    'Choose your weapon: Type "sword" or "wand"'
  );

  if (!rawWeaponChoice) {
    alert('Invalid choice. Refresh the page to try again.');
    return;
  }

  const weaponChoice: WeaponChoice = rawWeaponChoice.toLowerCase() as WeaponChoice;

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
      console.log('Invalid choice. Refresh the page to try again.');
      break;
  }

  console.log('Thanks for playing! Goodbye.');
}

chooseAdventure();