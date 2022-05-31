import React, { useState } from "react";

export const useStater = (intialState) => {
    const [state, setState] = useState(intialState);

    return [state, setState]
};