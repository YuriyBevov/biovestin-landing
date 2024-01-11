import { Modal } from "../classes/Modal";

const modals = document.querySelectorAll(".lw-modal");
if (modals) {
  console.log(modals);
  modals.forEach((modal) => {
    new Modal(modal);
  });
}
