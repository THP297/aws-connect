import { clearContact } from "../../index-invisible.js";
import { SingleTon } from "./singleton.js";
import { NavRight } from "../components/nav-right.js";

export class Reject {
  constructor() {
    this.singleTon = SingleTon.getInstance();
    this.setupFeatureButton();
    this.setupStatus();
    new NavRight("softphone-page");
    this.setupTimer();
  }

  setupStatus() {
    const status = document.querySelector("#status");
    status.textContent = "PendingBusy";
  }

  setupFeatureButton() {
    const closeBtn = document.querySelector("#end-call");
    closeBtn.addEventListener("click", clearContact, false);
    closeBtn.addEventListener(
      "click",
      () => {
        this.singleTon.stopTimer();
      },
      false
    );

    const closeAnnounce = document.querySelector("#close-announce");
    closeAnnounce.addEventListener("click", () => {
      const announce = document.querySelector("#announce");
      announce.style.display = "none";
    });
  }

  setupTimer() {
    let time = 0;
    const storedTime = localStorage.getItem("connectCallTime");
    if (storedTime !== null) {
      time = parseInt(storedTime);
    }

    this.singleTon.startTimer(() => {
      time++;
      localStorage.setItem("connectCallTime", time);

      const minutes = String(Math.floor(time / 60)).padStart(2, "0");
      const seconds = String(time % 60).padStart(2, "0");

      const timeCall = document.querySelector("#timer");
      timeCall.textContent = `${minutes}:${seconds}`;
    });

    this.singleTon.stopRingTone();
  }

  // setPhoneNumber() {
  //   const phoneManager = PhoneNumberManager.getInstance();
  //   console.log(phoneManager.getPhoneNumber());
  //   const phoneNumber = document.querySelector("#phone-number");
  //   phoneNumber.textContent = phoneManager.getPhoneNumber();
  // }
}
