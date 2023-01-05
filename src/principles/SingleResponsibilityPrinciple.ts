const circle = (radius: number) => {
  const photo = {
    type: "Circle",
  };

  return Object.assign(Object.create(photo), { radius });
};

const square = (length: number) => {
  const photo = {
    type: "Square",
  };

  return Object.assign(Object.create(photo), { length });
};

type Shapes =
  | { type: "Square"; radius: number }
  | { type: "Circle"; length: number };

type Photo = {
  sum: () => void;
  output: () => string;
};

const areaCalculator = (s: Shapes[]): Photo => {
  const photo: Photo = {
    sum: () => {},
    output: () => {
      return `
      <h1>
      SUM of the areas provided shapes:
      ${photo.sum()}
      </h1>
      `;
    },
  };

  return Object.assign(Object.create(photo), { shapes: s });
};

const shapes = [circle(2), square(5), square(6)];

const areas = areaCalculator(shapes);
console.log(areas.output());

const test = () => {
  console.log("OPAAA");
};
