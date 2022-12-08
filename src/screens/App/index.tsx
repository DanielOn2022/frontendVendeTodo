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
import { Suplier } from "../suplier";

function App() {
  useEffect(() => {
    document.title = "Vende Todo";
  }, []);

  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState(undefined);
  const state = {user, setUser};

  return (
    <ApolloProvider {...{ client }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Signin" component={Signin} initialParams={{ globalState:state }} />
            <Stack.Screen name="Login" component={Login} initialParams={{ globalState:state }} />
            <Stack.Screen name="Home" component={Home} initialParams={{ globalState:state }} />
            <Stack.Screen name="Suplier" component={Suplier} initialParams={{ globalState:state }} />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetail}
              initialParams={{ product: undefined, globalState:state }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
