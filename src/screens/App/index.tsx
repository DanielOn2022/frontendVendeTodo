import { ApolloProvider } from "@apollo/client";
import client from "../../api";
import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { theme } from "./theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../Home'

function App() {

  useEffect(() => {
    document.title = "Vende Todo";
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <ApolloProvider {...{ client }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
