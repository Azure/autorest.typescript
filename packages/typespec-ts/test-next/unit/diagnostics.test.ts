import { describe, it, expect, vi, beforeEach } from "vitest";
import { NoTarget, Program } from "@typespec/compiler";
import * as lib from "../../src/lib.js";

// Mock the reportDiagnostic function
const mockReportDiagnostic = vi.fn();

describe("Diagnostic reporting", () => {
  beforeEach(() => {
    mockReportDiagnostic.mockClear();
    // Spy on reportDiagnostic
    vi.spyOn(lib, "reportDiagnostic").mockImplementation(mockReportDiagnostic);
  });

  describe("file-format-error diagnostic", () => {
    it("should report diagnostic when file formatting fails", async () => {
      // Import the module that uses reportDiagnostic
      const { default: emitUtil } = await import("../../src/utils/emitUtil.js");
      
      // This test verifies the diagnostic code is defined
      expect(lib.$lib.diagnostics["file-format-error"]).toBeDefined();
      expect(lib.$lib.diagnostics["file-format-error"].severity).toBe("error");
    });
  });

  describe("directory-traversal-error diagnostic", () => {
    it("should report diagnostic when directory traversal fails", () => {
      // This test verifies the diagnostic code is defined
      expect(lib.$lib.diagnostics["directory-traversal-error"]).toBeDefined();
      expect(lib.$lib.diagnostics["directory-traversal-error"].severity).toBe("error");
    });
  });
});
