import React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import uuid from "react-native-uuid"
import { observer } from "mobx-react-lite"
import { compose } from "recompose"
import { Formik } from "formik"
import * as Yup from "yup"
import {
  handleTextInput,
  withInputTypeProps,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
} from "react-native-formik"
import { Button, Header, Screen, SexSelector, SexType, Text, TextField } from "../../components"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"

const Form = withNextInputAutoFocusForm(View)
const EnhancedTextField = compose(
  handleTextInput,
  withInputTypeProps,
  withNextInputAutoFocusInput,
)(TextField)

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please! Name?"),
  breed: Yup.string().required("Please! Breed?"),
  sex: Yup.string().required("Please! Male or Female?"),
})

export const AddScreen = observer(function AddScreen() {
  const rootStore = useStores()
  const { catStore } = rootStore
  const navigation = useNavigation()

  const isUpdateMode = catStore.hasActive
  const initialValues = isUpdateMode ? { ...catStore.activeCat } : { name: "", breed: "", sex: "" }

  const goBack = () => navigation.goBack()

  const onSave = (values) => {
    if (isUpdateMode) {
      // update existing cat
      catStore.activeCat.update({ ...catStore.activeCat, ...values })
    } else {
      // create new cat
      catStore.add({
        id: uuid.v1(),
        ...values,
      })
    }

    goBack()
  }

  const onDelete = () => {
    catStore.activeCat.remove()

    goBack()
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSave} validationSchema={validationSchema}>
      {({
        handleSubmit,
        initialValues,
        errors,
        touched,
        isSubmitting,
        setFieldValue,
        setTouched,
      }) => (
        <Form testID="AddScreen" style={styles.full}>
          <Screen preset="scroll" style={styles.full}>
            <Header leftIcon="arrowLeft" onLeftPress={goBack} />
            <View style={styles.header}>
              <Text preset="headerBold" style={styles.headerText} text="Add New Cat" />
            </View>

            <View style={styles.content}>
              <EnhancedTextField
                name="name"
                type="name"
                label="Name"
                placeholder="Cats name"
                withErrorIfNeeded
              />

              <EnhancedTextField
                name="breed"
                type="name"
                label="Breed"
                placeholder="Cats breed"
                withErrorIfNeeded
              />

              <SexSelector
                preselected={initialValues.sex}
                label="Sex"
                onSelect={(sex: SexType) => {
                  touched.sex = true
                  setTouched(touched)
                  setFieldValue("sex", sex, true)
                }}
                error={touched.sex && (errors.sex as string)}
              />
            </View>
          </Screen>

          <View style={styles.footer}>
            <View style={styles.footerContent}>
              <Button
                testID="ButtonSaveThisCat"
                text={isUpdateMode ? "Update This Cat" : "Save This Cat"}
                onPress={handleSubmit}
                disabled={isSubmitting}
              />

              {isUpdateMode && (
                <View style={styles.deleteContainer}>
                  <Button
                    preset="link"
                    textStyle={styles.deleteText}
                    text="Delete This Cat"
                    onPress={onDelete}
                  />
                </View>
              )}
            </View>
          </View>
        </Form>
      )}
    </Formik>
  )
})

const styles = {
  full: {
    flex: 1,
  } as ViewStyle,
  header: {
    backgroundColor: color.background,
    paddingHorizontal: spacing.normal,
    paddingBottom: spacing.big,
  } as ViewStyle,
  headerText: {
    fontSize: 33,
    textAlign: "center",
  } as TextStyle,
  content: {
    flex: 1,
    backgroundColor: color.container,
    borderTopLeftRadius: spacing.iphoneRadius,
    borderTopRightRadius: spacing.iphoneRadius,
    paddingHorizontal: spacing.large,
    paddingVertical: spacing.big,
  } as ViewStyle,

  footer: {
    backgroundColor: color.container,
  } as ViewStyle,
  footerContent: {
    backgroundColor: color.background,
    borderTopLeftRadius: spacing.iphoneRadius,
    borderTopRightRadius: spacing.iphoneRadius,
    padding: spacing.iphoneRadius,
  } as ViewStyle,
  deleteContainer: {
    marginTop: spacing.big,
    marginBottom: spacing.medium,
    alignItems: "center",
  } as ViewStyle,
  deleteText: {
    color: color.error,
  } as TextStyle,
}
