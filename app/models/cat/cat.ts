import { getParent, Instance, SnapshotOut, types } from "mobx-state-tree"
import { SexType } from "../../components"
import { CatStore } from "../cat-store"

export const CatModel = types
  .model("Cat")
  .props({
    id: types.identifier,
    name: types.maybe(types.string),
    sex: types.enumeration<SexType>(["male", "female"]),
    breed: types.maybe(types.string),
  })
  .views((self) => ({
    get isMale() {
      return self.sex === "male"
    },
    get isFemale() {
      return self.sex === "female"
    },
  }))
  .actions((self) => ({
    update(cat: CatSnapshot) {
      self.id = cat.id
      self.name = cat.name
      self.sex = cat.sex
      self.breed = cat.breed
    },
    remove() {
      getParent<CatStore>(self, 2).remove(self as Cat)
    },
    makeActive() {
      getParent<CatStore>(self, 2).setActive(self as Cat)
    },
  }))

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type CatType = Instance<typeof CatModel>
export interface Cat extends CatType {}
type CatSnapshotType = SnapshotOut<typeof CatModel>
export interface CatSnapshot extends CatSnapshotType {}
