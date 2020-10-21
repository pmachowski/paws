// For more info on how to write Detox tests, see the official docs:
// https://github.com/wix/Detox/blob/master/docs/README.md

describe("Main Screen", () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it("should be present", async () => {
    await expect(element(by.id("MainScreen"))).toBeVisible()
  })
})
