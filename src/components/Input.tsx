import {
  IInputProps,
  Input as NativeBaseInput,
  FormControl,
} from "native-base";

type Props = IInputProps & {
  errorMenssage?: string | null;
};

export function Input({ errorMenssage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMenssage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        bg="gray.700"
        h={14}
        px={4}
        borderWidth={0}
        fontSize="md"
        color="white"
        fontFamily="body"
        placeholderTextColor="gray.300"
        _focus={{
          bg: "gray.700",
          borderWidth: 1,
          borderColor: "green.500",
        }}
        {...rest}
      />

      <FormControl.ErrorMessage>{errorMenssage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
