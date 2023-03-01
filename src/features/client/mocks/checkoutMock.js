export const checkoutMock = {
  customerAddresses: [
    'V.Grybo Gatvė 43-7',
    'Vilniaus g. 3-4',
    'Vokieciu gatvė 9-23',
  ],
  restaurantName: 'Azerai',
  restaurantAddress: 'Kauno g.',
  deliveryDistance: '4.77 km',
  deliveryPrice: '3.00',
  serviceFee: '0.09',
  smallOrderFee: '2.25',
  cartItems: [
    {
      dishName: 'Burrito',
      dishQuantity: '2',
      dishPrice: '5.4',
      dishThumb:
        'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      dishName: 'Nachos',
      dishQuantity: '5',
      dishPrice: '4.4',
      dishThumb:
        'https://images.unsplash.com/photo-1598726465740-455ad9c05fbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80',
    },
  ],
};

export const payingOptions = [
  {
    payingService: 'Swedbank',
  },
  {
    payingService: 'Paysera',
  },
];
