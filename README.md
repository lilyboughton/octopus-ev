## OEV full-stack code challenge

- Create a page to match the design provided in the `/designs` folder.
- Use any css library you're comfortable with and organise your project in a sensible way.
- The provided app uses [Next.js](https://nextjs.org/). Feel free to use either the newer [App Router](https://nextjs.org/docs/app/building-your-application/routing) or existing [Pages Router](https://nextjs.org/docs/app/building-your-application/routing) for this task.
- Use the dummy data in the `/data` folder
- Aim to spend a few hours on the task _prioritising the acceptance criteria below_.
- Document any further changes or improvements you would have made given more time.

## Acceptance criteria

- When navigating to `/cars/polestar-2` or `/cars/tesla-model-y` it should show the correct car name and image and calculate the `Initial rental` and `Monthly rental` totals for the car
- When changing the `Initial rental`, `Annual mileage` or `Length of contract` fields it should recalculate the `Initial rental` and `Monthly rental` totals

## Other considerations

- The values for the `Initial rental` field can be 1, 3, 6 and 9 months
- The `Monthly rental` value is impacted by the initial rental. You can calculate it by doing the following:
`(rental * lengthOfContract) / (lengthOfContract + initialRental - 1)`

## Getting started

This is a [Next.js](https://nextjs.org/) project.

First, install the dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn more

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
