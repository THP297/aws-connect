// -----------CALL-----------
import { Main } from "../main.js";
import { Incoming } from "../call/incoming.js";
import { Connecting } from "../call/connecting.js";
import { AfterCall } from "../call/aftercall.js";
import { InCall } from "../call/incall.js";
import { Reject } from "../call/reject.js";
import {
  NumberPad,
  NumberPadInCall,
  NumberPadAfterCall,
} from "../call/number-pad.js";
import {
  QuickConnect,
  QuickConnectInCall,
  QuickConnectAfterCall,
} from "../call/quick-connect.js";

// -----------CHAT-----------
import { Chat } from "../chat/index.js";

// -----------TASK-----------
import {
  CreateTask,
  CreateTaskInCall,
  CreateTaskAfterCall,
} from "../task/createTask.js";
import { Task } from "../task/index.js";

// -----------SETTINGS-----------
import { Settings } from "../settings.js";

export async function loadHTMLContent(filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error("Failed to load HTML content: " + response.status);
    }
    const htmlContent = await response.text();

    // Parse the HTML content using DOMParser
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const bodyContent = doc.body.innerHTML;

    const container = document.querySelector("#container");
    container.innerHTML = bodyContent;

    if (filePath === "/pages/call/main.html") new Main();
    if (filePath === "/pages/call/aftercall.html") new AfterCall();
    if (filePath === "/pages/call/incall.html") new InCall();
    if (filePath === "/pages/call/connecting.html") new Connecting();
    if (filePath === "/pages/call/incoming.html") new Incoming();
    if (filePath === "/pages/call/quick-connect.html") new QuickConnect();
    if (filePath === "/pages/call/number-pad.html") new NumberPad();
    if (filePath === "/pages/call/reject.html") new Reject();
    if (filePath === "/pages/call/create-task-incall.html")
      new CreateTaskInCall();

    if (filePath === "/pages/chat/main.html") new Chat();

    if (filePath === "/pages/task/main.html") new Task();
    if (filePath === "/pages/task/create-task.html") new CreateTask();

    if (filePath === "/pages/settings.html") new Settings();
  } catch (error) {
    console.error("Error fetching HTML:", error);
  }
}

export async function loadInCallContent(filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error("Failed to load HTML content: " + response.status);
    }
    const htmlContent = await response.text();

    // Parse the HTML content using DOMParser
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const bodyContent = doc.body.innerHTML;

    const container = document.querySelector("#main-container");
    container.innerHTML = bodyContent;
    if (filePath === "/pages/call/number-pad-incall.html")
      new NumberPadInCall();

    if (filePath === "/pages/call/quick-connect-incall.html")
      new QuickConnectInCall();

    if (filePath === "/pages/call/create-task-incall.html")
      new CreateTaskInCall();

    if (filePath === "/pages/call/incall-container.html") new InCall();

    if (filePath === "/pages/call/number-pad-aftercall.html")
      new NumberPadAfterCall();

    if (filePath === "/pages/call/quick-connect-aftercall.html")
      new QuickConnectAfterCall();

    if (filePath === "/pages/call/create-task-aftercall.html")
      new CreateTaskAfterCall();

    if (filePath === "/pages/call/aftercall-container.html") new AfterCall();
  } catch (error) {
    console.error("Error fetching HTML:", error);
  }
}
