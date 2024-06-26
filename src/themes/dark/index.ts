import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";

import { commonBadge } from "../commons";
import { colors } from "../commons/colors";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const Badge: ComponentStyleConfig = {
  baseStyle: {
    bg: "green.300",
    color: "gray.800",
    ...commonBadge.baseStyle,
  },
};

export const Button: ComponentStyleConfig = {
  variants: {
    solid: {
      color: "brand.primary.white",
      bg: "brand.primary.blue.2",
      transition: "all 0.3s ease-in-out",
      fontWeight: "bolder",
      _hover: {
        bg: "brand.primary.blue.3",
      },
      _disabled: {
        _hover: {
          bg: "brand.camo.300",
        },
      },
    },
  },
};

export const Card: ComponentStyleConfig = {
  parts: [],
  baseStyle: {
    container: {
      padding: {
        base: 4,
        lg: 6,
      },
      bg: "#1C1E1A",
      backdropFilter: "blur(70px)",
      borderRadius: "2xl",
    },
    header: {
      px: 0,
      pt: 0,
    },
    body: {
      px: 0,
      py: 0,
    },
    footer: {
      px: 0,
      pb: 0,
    },
  },
};

export const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      color: "paragraph.accent.100",
    },
  },
  sizes: {
    lg: {
      field: {
        height: "56px",
      },
    },
  },
  variants: {
    fill: {
      field: {
        width: "100%",
        minWidth: 0,
        outline: 0,
        position: "relative",
        appearance: "none",
        transitionProperty: "common",
        transitionDuration: "normal",
        backgroundColor: "brand.neutral.grey.2",
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
        },
      },
    },
  },
};

const Popover: ComponentStyleConfig = {
  parts: [],

  baseStyle: {
    dialog: {
      bg: "brand.camo.400",
      backdropFilter: "blur(70px)",
    },
    content: {
      padding: {
        base: 2,
        lg: 4,
      },
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "brand.camo.300",
      bg: "brand.camo.400",
      backdropFilter: "blur(70px)",
      borderRadius: "2xl",
    },
    body: {
      p: 0,
    },
  },
};

const Textarea: ComponentStyleConfig = {
  baseStyle: {
    color: "paragraph.accent.100",
    backgroundColor: "brand.neutral.grey.2",
  },
};

const Modal: ComponentStyleConfig = {
  parts: [],

  baseStyle: {
    dialogContainer: {
      backdropFilter: "blur(8px)",
    },
    dialog: {
      p: "6",
      bg: "brand.camo.400",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "brand.camo.300",
      borderRadius: "2xl",
    },
    body: {
      margin: "auto",
    },
  },
};

const Select: ComponentStyleConfig = {
  baseStyle: {
    field: {
      color: "paragraph.accent.100",
    },
  },
  sizes: {
    lg: {
      field: {
        height: "56px",
      },
    },
  },
  variants: {
    filled: {
      field: {
        color: "paragraph.accent.300",
        fontSize: "1rem",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "brand.camo.300",
        borderRadius: "3xl",
        background: "rgba(64, 72, 51, 0.5)",
        _focusVisible: {
          borderColor: "brand.camo.300",
        },
        _placeholder: {
          color: "brand.camo.200",
        },
      },
    },
  },
};

const Table: ComponentStyleConfig = {
  baseStyle: {},
  variants: {
    simple: {
      th: {
        color: "brand.yellow.200",
        borderColor: "brand.camo.300",
      },
      td: {
        borderColor: "brand.camo.300",
      },
    },
  },
};

const List: ComponentStyleConfig = {
  baseStyle: {
    item: {
      p: 2,
      "&::marker": {
        color: "brand.yellow.100",
        fontSize: "sm",
      },
    },
  },
};

const Alert: ComponentStyleConfig = {
  baseStyle: {
    title: {
      fontSize: "20px",
    },
    description: {
      fontSize: "14px",
    },
  },

  variants: {
    loading: {
      container: {
        bgColor: "#FBBF24",
      },
    },
    success: {
      container: {
        bgColor: "#2B8AC9",
      },
    },
    error: {
      container: {
        bgColor: "#B91C1C",
      },
    },
  },
};

const themeDark = extendTheme({
  colors,
  config,
  styles: {
    global: () => ({
      body: {
        bg: "#121212",
      },
    }),
  },

  components: {
    Badge,
    Button,
    Card,
    Input,
    Popover,
    Modal,
    Select,
    Table,
    Alert,
    List,
    Textarea,
  },
});

export default themeDark;
