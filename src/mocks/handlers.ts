import { rest } from "msw";

export const handlers = [
  rest.get("https://restcountries.com/v3.1/name/test", (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.json({
        processedData: {
          name: { official: "India" },
          population: 1212,
          capital: ["newdelhi"],
          latlng: [11, 12],
          flags: { svg: "fake.svg", alt: "fake svg" },
        },
      })
    );
  }),
  rest.get(
    "http://api.weatherstack.com/current?access_key=b3d631cb59bc8d674ae790968aafd1df&query=newdelhi",
    (req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.json({
          processedData: {
            temperature: 50,
            weather_icons: "xyz.svg",
            wind_speed: 50,
            precipitation: 50,
          },
        })
      );
    }
  ),
];
