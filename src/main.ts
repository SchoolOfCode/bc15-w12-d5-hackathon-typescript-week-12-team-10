// Define character choices as an enum
enum CharacterChoice {
  theif = 8,
  Barbarian = 'barbarian',
  Mage = 'mage'
}

// Define scenarios and their corresponding messages
const scenarios: Record<CharacterChoice, string> = {
  [CharacterChoice.Barbarian]: 'You chose to be a barbarian. Unfortunately, you have met a fierce dragon and died.',
  [CharacterChoice.Mage]: 'Congratulations! You chose to be a mage. You have successfully cast a spell and won the game!',
};

function chooseAdventure(): void {
  console.log('Welcome to the Choose Your Own Adventure Game!\n');

  const rawCharacterChoice = window.prompt(
    'Choose your character: Type "barbarian" or "mage"'
  );

  if (!rawCharacterChoice) {
    console.log('Invalid choice. Refresh the page to try again.');
    return;
  }

  // Convert the user input to a CharacterChoice
  const characterChoice: CharacterChoice = rawCharacterChoice.toLowerCase() as CharacterChoice;

  switch (characterChoice) {
    case CharacterChoice.Barbarian:
      console.log(scenarios[CharacterChoice.Barbarian]);
      break;
    case CharacterChoice.Mage:
      console.log(scenarios[CharacterChoice.Mage]);
      break;
    default:
      console.log('Invalid choice. Refresh the page to try again.');
      break;
  }

  console.log('Thanks for playing! Goodbye.');
}

chooseAdventure();