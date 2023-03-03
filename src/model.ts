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
    price: '0 $',
    duration: '1 mount',
    limit: 2,
  },
  {
    tariff: Plans.Light,
    title: 'Light',
    price: '3 $',
    duration: '3 mount',
    limit: 4,
  },
  {
    tariff: Plans.Middle,
    title: 'Middle',
    price: '10 $',
    duration: 'Half Year',
    limit: 6,
  },
  {
    tariff: Plans.Pro,
    title: 'Pro',
    price: '50 $',
    duration: 'Year',
    limit: 10,
  },
]

export const planMap: any = {
  [Plans.Free]: 2,
  [Plans.Light]: 4,
  [Plans.Middle]: 6,
  [Plans.Pro]: 10,
}
