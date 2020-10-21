import { destroy, Instance, SnapshotOut, types } from "mobx-state-tree"
import { CatModel, CatSnapshot, Cat } from "../cat/cat"

/**
 * Model description here for TypeScript hints.
 */
export const CatStoreModel = types
  .model("CatStore")
  .props({
    cats: types.optional(types.array(CatModel), []),
    activeCat: types.maybe(types.reference(CatModel)),
  })
  .views((self) => ({
    get isEmpty() {
      return self.cats.length === 0
    },
    get hasActive() {
      return !!self.activeCat
    },
    get paws() {
      return self.cats.length * 4
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    add: (catSnapshot: CatSnapshot) => {
      const catModel: Cat = CatModel.create(catSnapshot) // create model instances from the plain objects
      self.cats.push(catModel)
    },
    remove(cat: Cat) {
      self.activeCat = undefined
      destroy(cat)
    },
    setActive(cat: Cat) {
      self.activeCat = cat
    },
    empty() {
      self.activeCat = undefined
    },
  }))

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type CatStoreType = Instance<typeof CatStoreModel>
export interface CatStore extends CatStoreType {}
type CatStoreSnapshotType = SnapshotOut<typeof CatStoreModel>
export interface CatStoreSnapshot extends CatStoreSnapshotType {}
