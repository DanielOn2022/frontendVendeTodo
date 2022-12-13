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
import { PackerHome } from "../PackerHome";
import { ShoppingCart } from "../ShoppingCart";
import { StartPayment } from "../StartPayment";
import { WarehouseManagerHome } from "../WarehouseManagerHome";
import { ShelfManager } from "../ShelfManagerHome";
import { ShelfsDetail } from "../ShelfsDetail";
import { SaleLinesDetail } from "../SaleLinesDetail";


function App() {
  useEffect(() => {
    document.title = "Vende Todo";
  }, []);

  const Stack = createNativeStackNavigator();
  //localStorage.setItem("role","");
  const role = localStorage.getItem("role");
  //const role = ""
  return (
    <ApolloProvider {...{ client }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>

          {!role && (
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Signin" component={Signin} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen
                name="Home"
                component={Home}
                initialParams={{ searchedProduct: "" }}
              />
              <Stack.Screen
                name="ShoppingCart"
                component={ShoppingCart}
              ></Stack.Screen>
              <Stack.Screen name="Checkout" component={StartPayment} />
              <Stack.Screen
                name="ProductDetail"
                component={ProductDetail}
                initialParams={{ product: undefined }}
              />
            </Stack.Navigator>
          )}
          {role && (role == "warehouse_manager"||role == "shelf_manager") && (
            <Stack.Navigator initialRouteName="warehouse_manager">
              <Stack.Screen name="Signin" component={Signin} />
              <Stack.Screen
                name="warehouse_manager"
                component={WarehouseManagerHome}
              />
              <Stack.Screen
                name="ShelfsDetail"
                component={ShelfsDetail}
              />
            </Stack.Navigator>
          )}
          {role && role == "packer" && (
            <Stack.Navigator initialRouteName="packer">
              <Stack.Screen name="Signin" component={Signin} />
              <Stack.Screen
                name="packer"
                component={PackerHome}
              />
              <Stack.Screen
                name="SaleLinesDetail"
                component={SaleLinesDetail}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
