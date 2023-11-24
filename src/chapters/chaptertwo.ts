import { playerObject } from "../main";

export function chapterTwo(): void {
  alert(
    "Making your way down to the town you notice the gates are covered in thick vines."
  );

  if (playerObject.playerWeapon == "sword") {
    alert(
      "You start hacking away at the vines with your sword but the magic skin proves too tough. The creature pulls you in towards itself and doon you are enveloped, never to be seen again. Game over."
    );
  } else if (playerObject.playerWeapon == "wand") {
    alert(
      "You point your wand at the vines and a bright light shoots out, burning the vines away. The gates are now open and you can enter the town. You win!"
    );
  }
}

export function chapterTwoPathThree(): void {
  alert(
    "You make your way into the dark cave and smell a terrible smell!"
  );

  if (playerObject.playerWeapon == "sword") {
    alert(
      "A harrard looking ogre appears from the darkness and tries to grab your face. You push him back and bury your swords blade deep into his belly. You win."
    );
  } else if (playerObject.playerWeapon == "wand") {
    alert(
      "A harrard looking ogre appears from the darkness. Startled, you point your wand at him and he laughs. 'Magic is useless against me', he cries! He grabs your face and rips it off. Game over."
    );
  }
}
