import {
  loadHTMLContent,
  loadInCallContent,
} from "../control-page/change-page.js";
import { PhoneForm } from "../components/phone-form.js";
import { NavRight } from "../components/nav-right.js";

export class QuickConnect {
  constructor() {
    this.setupBtn();
    new PhoneForm();
    new NavRight("softphone-page");
  }

  setupBtn() {
    const changeFeatureBtn = document.querySelector("#change-feature");
    changeFeatureBtn.addEventListener("click", () => {
      loadHTMLContent("/pages/call/number-pad.html");
    });

    const closeBtn = document.querySelector("#phone-label button");
    closeBtn.addEventListener("click", () => {
      loadHTMLContent("/pages/call/main.html");
    });
  }
}

export class QuickConnectInCall {
  constructor() {
    this.setupBtn();
    new PhoneForm();
  }

  setupBtn() {
    const changeFeatureBtn = document.querySelector("#change-feature");
    changeFeatureBtn.addEventListener("click", () => {
      loadInCallContent("/pages/call/number-pad-incall.html");
    });

    const closeBtn = document.querySelector("#phone-label button");
    closeBtn.addEventListener("click", () => {
      loadInCallContent("/pages/call/incall-container.html");
    });
  }
}

export class QuickConnectAfterCall {
  constructor() {
    this.setupBtn();
    new PhoneForm();
  }

  setupBtn() {
    const changeFeatureBtn = document.querySelector("#change-feature");
    changeFeatureBtn.addEventListener("click", () => {
      loadInCallContent("/pages/call/number-pad-aftercall.html");
    });

    const closeBtn = document.querySelector("#phone-label button");
    closeBtn.addEventListener("click", () => {
      loadInCallContent("/pages/call/aftercall-container.html");
    });
  }
}
