/**
 * Main application controller class.
 * Initializes the application state and handles UI interactions.
 */
import { NavRight } from "./components/nav-right.js";
import { loadHTMLContent } from "./control-page/change-page.js";
import { SingleTon } from "./call/singleton.js";
export class Main {
  constructor() {
    this.singleTon = SingleTon.getInstance();
    this.navRight = new NavRight("softphone-page");
    this.setupControlState();
    this.setupBeforeLoad();
    this.initializeState();
    this.setupEventListeners();
  }

  setupControlState() {
    this.singleTon.startControlState(() => {
      console.log("checking");
      if (localStorage.getItem("browser-state")) {
        if (localStorage.getItem("browser-state") === "afterload") {
          setTimeout(() => {
            const currentState = localStorage.getItem("current-call-state");
            loadHTMLContent(`/pages/call/${currentState}.html`);
            localStorage.setItem("browser-state", "beforeload");
          }, 1000);
        }
      } else {
        localStorage.setItem("browser-state", "beforeload");
      }
    });
  }

  setupBeforeLoad() {
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("browser-state", "afterload");
    });
  }

  /**
   * Initializes the application state by setting the current state in localStorage if not already set.
   */
  initializeState() {
    if (!localStorage.getItem("current-call-state")) {
      localStorage.setItem("current-call-state", "main");
    }
  }

  /**
   * Sets up event listeners for UI elements.
   */
  setupEventListeners() {
    this.setupConnectButton();
    this.setupNumberPadButton();
  }

  /**
   * Attaches an event listener to the quick connect button.
   */
  setupConnectButton() {
    const quickConnectBtn = document.querySelector("#connects");
    if (quickConnectBtn) {
      quickConnectBtn.addEventListener("click", () => {
        this.loadQuickConnectPage();
      });
    }
  }

  /**
   * Attaches an event listener to the number pad button.
   */
  setupNumberPadButton() {
    const numberPadBtn = document.querySelector("#pad");
    if (numberPadBtn) {
      numberPadBtn.addEventListener("click", () => {
        this.loadNumberPadPage();
      });
    }
  }

  /**
   * Loads the quick connect page content.
   */
  loadQuickConnectPage() {
    loadHTMLContent("/pages/call/quick-connect.html");
  }

  /**
   * Loads the number pad page content.
   */
  loadNumberPadPage() {
    loadHTMLContent("/pages/call/number-pad.html");
  }
}

// Instantiating the main class to kick off the application.
new Main();
