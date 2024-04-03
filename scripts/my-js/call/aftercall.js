import { clearContact } from "../../index-invisible.js";
import { SingleTon } from "./singleton.js";
import { loadInCallContent } from "../control-page/change-page.js";
import { NavRight } from "../components/nav-right.js";

export class AfterCall {
  constructor() {
    this.singleTon = SingleTon.getInstance();
    this.setupFeatureButton();
    this.setupStatus();
    new NavRight("softphone-page");
    this.setupTimer();
  }

  setupStatus() {
    const status = document.querySelector("#status");
    status.textContent = "AfterCallWork ";
  }

  setupFeatureButton() {
    const acceptBtn = document.querySelector("#end-call");
    acceptBtn.addEventListener("click", clearContact, false);

    const numberPad = document.querySelector("#aftercall-feature #pad");
    numberPad.addEventListener("click", () => {
      console.log("ok");
      loadInCallContent("/pages/call/number-pad-aftercall.html");
    });

    const quickConnect = document.querySelector(
      "#aftercall-feature #q-connect"
    );
    quickConnect.addEventListener("click", () => {
      loadInCallContent("/pages/call/quick-connect-aftercall.html");
    });

    const createTask = document.querySelector("#aftercall-feature #c-task");
    createTask.addEventListener("click", () => {
      loadInCallContent("/pages/call/create-task-aftercall.html");
    });
  }

  setupTimer() {
    let time = 0;
    const storedTime = localStorage.getItem("afterCallTime");
    if (storedTime !== null) {
      time = parseInt(storedTime);
    }

    this.singleTon.startTimer(() => {
      time++;
      localStorage.setItem("afterCallTime", time);

      // Format minutes and seconds with leading zeros
      const minutes = String(Math.floor(time / 60)).padStart(2, "0");
      const seconds = String(time % 60).padStart(2, "0");

      const timeCall = document.querySelector("#timer");
      timeCall.textContent = `${minutes}:${seconds}`;
    });

    this.singleTon.stopRingTone();
  }
}
