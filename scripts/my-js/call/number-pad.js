import {
  loadHTMLContent,
  loadInCallContent,
} from "../control-page/change-page.js";
import { PhoneForm } from "../components/phone-form.js";
import { NavRight } from "../components/nav-right.js";

export class NumberPad {
  constructor() {
    this.setupBtn();
    new PhoneForm();
    new NavRight("softphone-page");
  }

  setupBtn() {
    const changeFeatureBtn = document.querySelector("#change-feature");

    changeFeatureBtn.addEventListener("click", () => {
      loadHTMLContent("/pages/call/quick-connect.html");
    });

    const closeBtn = document.querySelector("#phone-label button");
    closeBtn.addEventListener("click", () => {
      loadHTMLContent("/pages/call/main.html");
    });
  }
}

export class NumberPadInCall {
  constructor() {
    this.setupBtn();
  }

  setupBtn() {
    const changeFeatureBtn = document.querySelector("#change-feature");

    changeFeatureBtn.addEventListener("click", () => {
      loadInCallContent("/pages/call/quick-connect-incall.html");
    });

    const closeBtn = document.querySelector("#phone-label button");
    closeBtn.addEventListener("click", () => {
      loadInCallContent("/pages/call/incall-container.html");
    });
  }
}

export class NumberPadAfterCall {
  constructor() {
    this.setupBtn();
  }

  setupBtn() {
    const changeFeatureBtn = document.querySelector("#change-feature");

    changeFeatureBtn.addEventListener("click", () => {
      loadInCallContent("/pages/call/quick-connect-aftercall.html");
    });

    const closeBtn = document.querySelector("#phone-label button");
    closeBtn.addEventListener("click", () => {
      loadInCallContent("/pages/call/aftercall-container.html");
    });
  }
}
