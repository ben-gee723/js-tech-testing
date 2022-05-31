import React from "react";
import { useProvider } from "./useProvider";
import { useStater } from "./useStater";

const [isToggled, setIsToggled] = useStater(false);

const valuesObject = { isToggled, setIsToggled };

export const [MyContext, MyProvider] = useProvider(valuesObject);
