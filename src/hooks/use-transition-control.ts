import { useEffect, useState } from "react";

import type { Dispatch, SetStateAction } from "react";

export const useTransitionControl = (
  loading = false,
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => setShow(true));
    }
  }, [loading]);

  return [show, setShow];
};
