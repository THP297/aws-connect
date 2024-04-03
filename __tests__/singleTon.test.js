import { SingleTon } from "../scripts/my-js/call/singleton.js";
test("getInstance() always returns the same instance", () => {
  const instance1 = SingleTon.getInstance();
  const instance2 = SingleTon.getInstance();

  expect(instance1).toBe(instance2);
});

test("startTimer() starts a timer and calls the callback every second", () => {
  jest.useFakeTimers(); // Create a mock timer environment
  const mockCallback = jest.fn();
  SingleTon.getInstance().startTimer(mockCallback);

  jest.advanceTimersByTime(1000); // Advance timers by 1 second
  expect(mockCallback).toHaveBeenCalledTimes(1);

  jest.advanceTimersByTime(1000); // Advance timers by another second
  expect(mockCallback).toHaveBeenCalledTimes(2);

  jest.clearAllTimers(); // Clean up mock timers
});

test("stopTimer() stops the timer and prevents further callback calls", () => {
  jest.useFakeTimers(); // Create a mock timer environment

  const mockCallback = jest.fn();
  const instance = SingleTon.getInstance();
  instance.startTimer(mockCallback);

  instance.stopTimer();
  jest.advanceTimersByTime(1000); // Advance timers, but callback shouldn't be called
  expect(mockCallback).toHaveBeenCalledTimes(0); // Adjust if called before stopTimer
});
