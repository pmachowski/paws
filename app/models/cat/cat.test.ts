import { CatModel, Cat, CatSnapshot } from "./cat"

const catData: CatSnapshot = {
  id: "1",
  name: "Puss",
  sex: "male",
  breed: "siberian",
}

const updatedCatData: CatSnapshot = { ...catData, name: "Wuss Puss" }

test("can be created", () => {
  const instance: Cat = CatModel.create(catData)

  expect(instance).toBeTruthy()
})

test("can update values at once", () => {
  const instance: Cat = CatModel.create(catData)

  instance.update(updatedCatData)
  expect(instance.name).toEqual("Wuss Puss")
})

test("knows if it's male", () => {
  const instance: Cat = CatModel.create(catData)

  expect(instance.isMale).toBe(true)
  expect(instance.isFemale).toBe(false)
})
