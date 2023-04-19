export interface service {
  id: number;
  header: string;
  price: number;
  description: string;
  isCollapsed: boolean;
  isChecked: boolean;
}
[];

export interface Services {
  data: service[];
}

export const listOfServices: Services = {
  data: [
    {
      id: 0,
      header: "Fresh Breakfast for one ",
      price: 400,
      description:
        "Bread, Coffee, milk, juice, and a selection of spreads + toppings.",
      isCollapsed: false,
      isChecked: false,
    },
    {
      id: 1,
      header: "Fresh Breakfast for two",
      price: 800,
      description:
        "Bread, Coffee, milk, juice, and a selection of spreads + toppings.",
      isCollapsed: false,
      isChecked: false,
    },
    {
      id: 2,
      header: "Classic Dinner for one",
      price: 600,
      description:
        "Bread, Coffee, milk, juice, and a selection of spreads + toppings.",
      isCollapsed: false,
      isChecked: false,
    },
    {
      id: 3,
      header: "Classic Dinner for two",
      price: 1200,
      description:
        "Bread, Coffee, milk, juice, and a selection of spreads + toppings.",
      isCollapsed: false,
      isChecked: false,
    },
    {
      id: 4,
      header: "Electric Car Charge",
      price: 800,
      description:
        "Bread, Coffee, milk, juice, and a selection of spreads + toppings.",
      isCollapsed: false,
      isChecked: false,
    },
  ],
};
