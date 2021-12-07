export const portfolioTypeOptions = [
  { value: 'i30', label: 'i30' },
  { value: 'i50', label: 'i50' },
  { value: 'i100', label: 'i100' },
];

export const investmentsAmountOptions: { [key: string]: any } = {
  i30: [
    { value: '1000', label: '1000' },
    { value: '5000', label: '5000' },
    { value: '10000', label: '10000' },
    { value: '50000', label: '50000' },
    { value: '100000', label: '100000' },
    { value: '500000', label: '500000' },
    { value: '1000000', label: '1000000' },
  ],
  i50: [
    { value: '1000', label: '1000' },
    { value: '2000', label: '2000' },
    { value: '5000', label: '5000' },
    { value: '10000', label: '10000' },
    { value: '50000', label: '50000' },
    { value: '100000', label: '100000' },
    { value: '500000', label: '500000' },
    { value: '1000000', label: '1000000' },
  ],
  i100: [
    { value: '1000', label: '1000' },
    { value: '2000', label: '2000' },
    { value: '2500', label: '2500' },
    { value: '5000', label: '5000' },
    { value: '10000', label: '10000' },
    { value: '50000', label: '50000' },
    { value: '100000', label: '100000' },
    { value: '500000', label: '500000' },
    { value: '1000000', label: '1000000' },
  ],
};

export const marks: { [key: string]: any } = {
  i30: {
    0: 0,
    5: 1000,
    14: 5000,
    28: 10000,
    42: 50000,
    56: 100000,
    70: 500000,
    100: 1000000,
  },
  i50: {
    0: 0,
    5: 1000,
    14: 2000,
    28: 5000,
    42: 10000,
    56: 50000,
    70: 100000,
    84: 500000,
    100: 1000000,
  },
  i100: {
    0: 0,
    5: 1000,
    14: 2000,
    28: 2500,
    42: 5000,
    56: 10000,
    70: 50000,
    84: 100000,
    93: 500000,
    100: 1000000,
  },
};
