import { acceptContact } from "../../index-invisible.js";
import { disconnectContact } from "../../index-invisible.js";
import { SingleTon } from "./singleton.js";
import { NavRight } from "../components/nav-right.js";
import { loadHTMLContent } from "../control-page/change-page.js";

export class Incoming {
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
    const acceptBtn = document.querySelector("#incoming-accept");
    acceptBtn.addEventListener("click", acceptContact, false);
    acceptBtn.addEventListener(
      "click",
      () => {
        loadHTMLContent("/pages/call/connecting.html");
      },
      false
    );

    const rejectBtn = document.querySelector("#incoming-reject");
    rejectBtn.addEventListener("click", disconnectContact, false);
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
    });

    this.singleTon.stopRingTone();
  }
}
