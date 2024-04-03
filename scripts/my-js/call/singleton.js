export class SingleTon {
  static instance = null;
  timer = null;
  ringtone = null;
  controlState = null;

  static getInstance() {
    if (!SingleTon.instance) {
      SingleTon.instance = new SingleTon();
    }
    return SingleTon.instance;
  }

  startTimer(callback) {
    if (!this.timer) {
      this.timer = setInterval(callback, 1000);
    }
  }

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  startControlState(callback) {
    if (!this.controlState) {
      this.controlState = setInterval(callback, 1000);
    }
  }

  stopControlState() {
    if (this.controlState) {
      clearInterval(this.controlState);
      this.controlState = null;
    }
  }

  startRingTone(callback) {
    if (!this.ringtone) {
      this.ringtone = setInterval(callback, 1500);
    }
  }

  stopRingTone() {
    if (this.ringtone) {
      clearInterval(this.ringtone);
      this.ringtone = null;
    }
  }
}

// class SingleTon {
//   static instance = null;
//   static timer = null;
//   static ringtone = null;
//   static phoneNumber = null;

//   static getInstance() {
//     if (!SingleTon.instance) {
//       SingleTon.instance = new SingleTon();
//     }
//     return SingleTon.instance;
//   }

//   startTimer(callback) {
//     if (!SingleTon.timer) {
//       SingleTon.timer = setInterval(callback, 1000);
//     }
//   }

//   stopTimer() {
//     if (SingleTon.timer) {
//       clearInterval(SingleTon.timer);
//       SingleTon.timer = null;
//     }
//   }

//   startRingTone(callback) {
//     if (!SingleTon.ringtone) {
//       SingleTon.ringtone = setInterval(callback, 1500);
//     }
//   }

//   stopRingTone() {
//     if (SingleTon.ringtone) {
//       clearInterval(SingleTon.ringtone);
//       SingleTon.ringtone = null;
//     }
//   }
// }

// module.exports = SingleTon;
