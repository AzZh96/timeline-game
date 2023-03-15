

function isSorted(dateArray) {
    // Check if the array is sorted in ascending order
    let isAscending = true;
    debugger
    for (let i = 1; i < dateArray.length; i++) {
      if (dateArray[i] < dateArray[i - 1]) {
        isAscending = false;
        break;
      }
    }
    return isAscending;
  }

const trueDates = [new Date("2021-12-25"),
new Date("2022-12-25"),
new Date("2023-01-25"),];

const falseDates = [new Date("2021-12-25"),
new Date("2023-01-25"),
new Date("2022-12-25"),
]

test("sorted returns true", () => {
  const boolSorted = isSorted(falseDates);
expect(boolSorted).toBe(true)  });

