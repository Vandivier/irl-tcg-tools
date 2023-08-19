import { useMutation } from "@blitzjs/rpc"
import React from "react"
import Accordion from "src/core/components/Accordion"
import createInitialPrompt from "../mutations/createInitialPrompt"
import { FORM_ERROR, GameSetupForm } from "./GameSetupForm"

export const GameSetupAccordion: React.FC = () => {
  const [createInitialPromptMutation] = useMutation(createInitialPrompt)
  const [initialPrompt, setInitialPrompt] = React.useState<string | null>(null)

  return (
    <Accordion title="game options and prompt assistant">
      <React.Suspense fallback={<div>Loading...</div>}>
        <GameSetupForm
          submitText="Generate Initial Prompt"
          onSubmit={async (data) => {
            try {
              const result = await createInitialPromptMutation({
                ...data,
              })
              await setInitialPrompt(result)
            } catch (error: any) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </React.Suspense>

      <section id="initial-prompt">{initialPrompt}</section>
    </Accordion>
  )
}
