import React from "react"
import { Form, FormProps } from "src/core/components/Form"
import LabeledSelectField from "src/core/components/LabeledSelectField"
import {
  LabeledTextField,
  //   LabeledTextareaField,
} from "src/core/components/LabeledTextField"
import { z } from "zod"
export { FORM_ERROR } from "src/core/components/Form"

export const GameSetupSchema = z.object({
  numberOfPlayers: z.number().min(1, "Must have at least one player"),
  primaryGameMode: z.enum(["Canonical", "Narrative"]),
  secondaryGameMode: z.enum([
    "Elimination Bracket",
    "Battle Royale",
    "Point and Turn",
    "Adventure",
  ]),
  houseRules: z.string().optional(),
})

type GameSetupFormProps = FormProps<typeof GameSetupSchema>

export function GameSetupForm(props: GameSetupFormProps) {
  return (
    <Form {...props} schema={GameSetupSchema}>
      <LabeledTextField
        name="numberOfPlayers"
        label="Number of Players"
        placeholder="2"
        type="number"
      />

      <LabeledSelectField name="primaryGameMode" label="Primary Game Mode">
        <option value="Canonical">Canonical</option>
        <option value="Narrative">Narrative</option>
      </LabeledSelectField>

      <LabeledSelectField name="secondaryGameMode" label="Secondary Game Mode">
        <option value="Elimination Bracket">Elimination Bracket</option>
        <option value="Battle Royale">Battle Royale</option>
        <option value="Point and Turn">Point and Turn</option>
        <option value="Adventure">Adventure</option>
      </LabeledSelectField>

      {/* <LabeledTextareaField
        name="houseRules"
        label="House Rules"
        placeholder="Write any custom rules..."
      /> */}
    </Form>
  )
}
