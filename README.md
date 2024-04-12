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

## LB Notes
I followed the pattern already established in the codebase and so have used JavaScript. If I were to do this exercise again, I would take the
time upfront to enable me to use TypeScript instead. I find using TypeScript helps me organise the way I think about variables better and gives me more
confidence in my code.

Areas to focus on next:
1. Organisation of the codebase:
I don't have much experience defining the structure of a codebase (particularly with Next JS). I would usually look to follow existing patterns when it
comes to naming and organinsing files.

2. Testing
I've put in some very basic tests to test my functions but would like to have implemented more tests. I would have liked to have done some component testing
and I like using Cypress for some E2E testing.

3. Error handling and data validation
I made full use of the fact that the data was mocked and static and so only implemented some very rudimentary error handling. This would definitely be an area
to focus on in next steps.

4. Accessibility and responsiveness
I've used basic html components with limited adjustments made for accessibility. I would look to replace these components with more sophisticated ones, provided by a library that would provide a better, more accessible user experience. I have also coded the solution as per the design, and so it isn't responsive. The design would work well on mobile, but I would be keen to see a design for desktop too. In this way, though, it is coded mobile first
which I would be interested in understanding if that's the correct approach for this application.

5. Favicon
I really wanted to get the favicon to work - followed all the advice I could find but couldn't get it to work!

