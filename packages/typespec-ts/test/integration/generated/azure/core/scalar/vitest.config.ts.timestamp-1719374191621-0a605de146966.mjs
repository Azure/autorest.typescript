// vitest.config.ts
import { defineConfig } from "file:///home/joheredi/azure/autorest.typescript/common/temp/node_modules/.pnpm/vitest@1.6.0_@types+node@18.18.0/node_modules/vitest/dist/config.js";
var vitest_config_default = defineConfig({
  test: {
    reporters: ["basic", "junit"],
    outputFile: {
      junit: "test-results.browser.xml"
    },
    fakeTimers: {
      toFake: ["setTimeout", "Date"]
    },
    watch: false,
    include: ["test/**/*.spec.ts"],
    exclude: ["test/**/browser/*.spec.ts"],
    coverage: {
      include: ["src/**/*.ts"],
      exclude: [
        "src/**/*-browser.mts",
        "src/**/*-react-native.mts",
        "vitest*.config.ts",
        "samples-dev/**/*.ts"
      ],
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      reportsDirectory: "coverage"
    }
  }
});
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL2pvaGVyZWRpL2F6dXJlL2F1dG9yZXN0LnR5cGVzY3JpcHQvcGFja2FnZXMvdHlwZXNwZWMtdHMvdGVzdC9pbnRlZ3JhdGlvbi9nZW5lcmF0ZWQvYXp1cmUvY29yZS9zY2FsYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2pvaGVyZWRpL2F6dXJlL2F1dG9yZXN0LnR5cGVzY3JpcHQvcGFja2FnZXMvdHlwZXNwZWMtdHMvdGVzdC9pbnRlZ3JhdGlvbi9nZW5lcmF0ZWQvYXp1cmUvY29yZS9zY2FsYXIvdml0ZXN0LmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9qb2hlcmVkaS9henVyZS9hdXRvcmVzdC50eXBlc2NyaXB0L3BhY2thZ2VzL3R5cGVzcGVjLXRzL3Rlc3QvaW50ZWdyYXRpb24vZ2VuZXJhdGVkL2F6dXJlL2NvcmUvc2NhbGFyL3ZpdGVzdC5jb25maWcudHNcIjsvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVzdC9jb25maWdcIjtcbmltcG9ydCB7IHJlbGF0aXZlUmVjb3JkaW5nc1BhdGggfSBmcm9tIFwiQGF6dXJlLXRvb2xzL3Rlc3QtcmVjb3JkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdGVzdDoge1xuICAgIHJlcG9ydGVyczogW1wiYmFzaWNcIiwgXCJqdW5pdFwiXSxcbiAgICBvdXRwdXRGaWxlOiB7XG4gICAgICBqdW5pdDogXCJ0ZXN0LXJlc3VsdHMuYnJvd3Nlci54bWxcIixcbiAgICB9LFxuICAgIGZha2VUaW1lcnM6IHtcbiAgICAgIHRvRmFrZTogW1wic2V0VGltZW91dFwiLCBcIkRhdGVcIl0sXG4gICAgfSxcbiAgICB3YXRjaDogZmFsc2UsXG4gICAgaW5jbHVkZTogW1widGVzdC8qKi8qLnNwZWMudHNcIl0sXG4gICAgZXhjbHVkZTogW1widGVzdC8qKi9icm93c2VyLyouc3BlYy50c1wiXSxcbiAgICBjb3ZlcmFnZToge1xuICAgICAgaW5jbHVkZTogW1wic3JjLyoqLyoudHNcIl0sXG4gICAgICBleGNsdWRlOiBbXG4gICAgICAgIFwic3JjLyoqLyotYnJvd3Nlci5tdHNcIixcbiAgICAgICAgXCJzcmMvKiovKi1yZWFjdC1uYXRpdmUubXRzXCIsXG4gICAgICAgIFwidml0ZXN0Ki5jb25maWcudHNcIixcbiAgICAgICAgXCJzYW1wbGVzLWRldi8qKi8qLnRzXCIsXG4gICAgICBdLFxuICAgICAgcHJvdmlkZXI6IFwiaXN0YW5idWxcIixcbiAgICAgIHJlcG9ydGVyOiBbXCJ0ZXh0XCIsIFwianNvblwiLCBcImh0bWxcIl0sXG4gICAgICByZXBvcnRzRGlyZWN0b3J5OiBcImNvdmVyYWdlXCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUdBLFNBQVMsb0JBQW9CO0FBRzdCLElBQU8sd0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxJQUNKLFdBQVcsQ0FBQyxTQUFTLE9BQU87QUFBQSxJQUM1QixZQUFZO0FBQUEsTUFDVixPQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1YsUUFBUSxDQUFDLGNBQWMsTUFBTTtBQUFBLElBQy9CO0FBQUEsSUFDQSxPQUFPO0FBQUEsSUFDUCxTQUFTLENBQUMsbUJBQW1CO0FBQUEsSUFDN0IsU0FBUyxDQUFDLDJCQUEyQjtBQUFBLElBQ3JDLFVBQVU7QUFBQSxNQUNSLFNBQVMsQ0FBQyxhQUFhO0FBQUEsTUFDdkIsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxVQUFVO0FBQUEsTUFDVixVQUFVLENBQUMsUUFBUSxRQUFRLE1BQU07QUFBQSxNQUNqQyxrQkFBa0I7QUFBQSxJQUNwQjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
