import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { DefaultTheme } from "@react-navigation/native";
import { useTheme } from "native-base";

export function Routes() {
  const { colors } = useTheme();
  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];
  return <AuthRoutes />;
}
