import { FunctionalComponent } from "preact";
import { useCallback } from "preact/hooks";
import { IconButton } from "@chakra-ui/react";
import { useHashParamBoolean } from "@metapages/metaframe-hook";
import { ViewIcon } from "@chakra-ui/icons";

export const ButtonPresentationMode: FunctionalComponent = () => {
  const [presentationMode, setPresentationMode] = useHashParamBoolean(
    "presentation",
    undefined
  );

  const onClick = useCallback(() => {
    setPresentationMode(!presentationMode);
    window.location.reload();
  }, [presentationMode, setPresentationMode]);

  return (
    <>
      <IconButton
        verticalAlign="top"
        aria-label="Help"
        // @ts-ignore
        icon={<ViewIcon />}
        size="md"
        onClick={onClick}
        mr="4"
      />
    </>
  );
};
