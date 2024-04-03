import { disconnectContact } from "../../index-invisible.js";
import { SingleTon } from "./singleton.js";
import { loadInCallContent } from "../control-page/change-page.js";
import { NavRight } from "../components/nav-right.js";

export class InCall {
  constructor() {
    this.singleTon = SingleTon.getInstance();
    this.setupFeatureButton();
    this.setupStatus();
    this.handleRefresh();
    new NavRight("softphone-page");
    this.setupTimer();
  }

  handleRefresh() {
    window.addEventListener("beforeunload", disconnectContact);
  }

  setupStatus() {
    const status = document.querySelector("#status");
    status.textContent = "Busy";
  }

  setupFeatureButton() {
    const hangUpBtn = document.querySelector("#end-call");
    hangUpBtn.addEventListener("click", disconnectContact, false);

    const numberPad = document.querySelector("#incall-feature #pad");
    numberPad.addEventListener("click", () => {
      loadInCallContent("/pages/call/number-pad-incall.html");
    });

    const quickConnect = document.querySelector("#incall-feature #q-connect");
    quickConnect.addEventListener("click", () => {
      loadInCallContent("/pages/call/quick-connect-incall.html");
    });

    const createTask = document.querySelector("#incall-feature #c-task");
    createTask.addEventListener("click", () => {
      loadInCallContent("/pages/call/create-task-incall.html");
    });
  }

  setupTimer() {
    let time = 0;
    const storedTime = localStorage.getItem("inCallTime");
    if (storedTime !== null) {
      time = parseInt(storedTime);
    }

    this.singleTon.startTimer(() => {
      time++;
      localStorage.setItem("inCallTime", time);

      // Format minutes and seconds with leading zeros
      const minutes = String(Math.floor(time / 60)).padStart(2, "0");
      const seconds = String(time % 60).padStart(2, "0");

      const timeCall = document.querySelector("#timer");
      timeCall.textContent = `${minutes}:${seconds}`;
    });

    this.singleTon.stopRingTone();
  }
}
