import { ApolloProvider } from "@apollo/client";
import client from "../../api";
import { ThemeProvider } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import { theme } from "./theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../Home";
import { Login } from "../Login";
import { Signin } from "../Signin";
import { ProductDetail } from "../ProductDetail";

function App() {
  useEffect(() => {
    document.title = "Vende Todo";
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <ApolloProvider {...{ client }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetail}
              initialParams={{ product: undefined }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
