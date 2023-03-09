export enum Plans {
  Free = 'Free',
  Light = 0,
  Middle,
  Pro,
}

export const plans = [
  {
    tariff: Plans.Free,
    title: 'Free',
    price: '0 USD',
    duration: 'Lifetime',
    limit: 2,
  },
  {
    tariff: Plans.Light,
    title: 'Starter',
    price: '0.11 USD',
    duration: '30 days',
    limit: 4,
  },
  {
    tariff: Plans.Middle,
    title: 'Standard',
    price: '0.12 USD',
    duration: '90 days',
    limit: 6,
  },
  {
    tariff: Plans.Pro,
    title: 'Lifetime',
    price: '0.13 USD',
    duration: 'Lifetime',
    limit: 10,
  },
]

export const planMap: any = {
  [Plans.Free]: 2,
  [Plans.Light]: 4,
  [Plans.Middle]: 6,
  [Plans.Pro]: 10,
}
