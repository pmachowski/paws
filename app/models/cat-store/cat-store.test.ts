import { CatStoreModel, CatStore } from "./cat-store"

test("can be created", () => {
  const instance: CatStore = CatStoreModel.create({} as any)

  expect(instance).toBeTruthy()
})
