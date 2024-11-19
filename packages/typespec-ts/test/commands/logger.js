export function createTaskLogger() {
  let entries = [];

  return {
    log: (message) => entries.push({ type: "log", message }),
    error: (message) =>
      entries.push({ type: "error", message: `ERROR: ${message}` }),
    captureOutput: (data) =>
      entries.push({ type: "output", message: data.toString() }),
    flush: () => {
      for (const entry of entries) {
        if (entry.type === "error") {
          console.error(entry.message); // Use console.error for error messages
        } else {
          console.log(entry.message); // Use console.log for log and output messages
        }
      }
      // Clear the buffer after flushing
      entries = [];
    }
  };
}
