import { disconnectContact } from "../../index-invisible.js";
import { NavRight } from "../components/nav-right.js";
export class Connecting {
  constructor() {
    this.setupFeatureButton();
    this.setupStatus();
    new NavRight("softphone-page");
  }

  setupStatus() {
    const status = document.querySelector("#status");
    status.textContent = "PendingBusy";
  }

  setupFeatureButton() {
    const acceptBtn = document.querySelector("#end-call");
    acceptBtn.addEventListener("click", disconnectContact, false);
  }

  // setPhoneNumber() {
  //   const phoneManager = PhoneNumberManager.getInstance();
  //   console.log(phoneManager.getPhoneNumber());
  //   const phoneNumber = document.querySelector("#phone-number");
  //   phoneNumber.textContent = phoneManager.getPhoneNumber();
  // }
}
