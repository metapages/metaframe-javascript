import { FunctionalComponent } from "preact";
import MonacoEditor from "@monaco-editor/react";
import { Box } from "@chakra-ui/react";

export type EditorProps = {
  mode: string;
  value: string | undefined;
  setValue: (value: string | undefined) => void;
  theme: string;
};

export const Editor: FunctionalComponent<EditorProps> = ({
  mode,
  value,
  setValue,
  theme,
}) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <MonacoEditor
        defaultLanguage={mode}
        theme={theme}
        options={{
          minimap: { enabled: false },
        }}
        onChange={setValue}
        value={value}
        width="100%"
        height="70vh"
      />
    </Box>
  );
};
