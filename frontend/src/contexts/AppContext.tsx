// AppContextProvider.tsx
import React from "react";
import { AuthContextProvider } from "./providers/AuthContext";

import { combineComponents } from "../utils/combineComponents";
const providers = [AuthContextProvider];
export const AppContextProvider = combineComponents(...providers);
