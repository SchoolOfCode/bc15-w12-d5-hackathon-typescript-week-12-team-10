import { playerObject } from "../main";

export default function chapterTwo(playerObject: object) {
  const correctWeapon: string | null = window.prompt(
    "Making your way down to the town you notice the gates are covered in thick vines. Did you bring your wand? Yes or No?"
  );

  switch (correctWeapon) {
    case correctWeapon == "no" || "No":
      alert(
        "You start hacking away at the vines with your sword but the magic skin proves too tough. The creature pulls you in towards itself and doon you are enveloped, never to be seen again. Game over."
      );
      break;
    case correctWeapon == "yes" || "Yes":
      alert(
        "You point your wand at the vines and a bright light shoots out, burning the vines away. The gates are now open and you can enter the town."
      );
      break;
  }
}
