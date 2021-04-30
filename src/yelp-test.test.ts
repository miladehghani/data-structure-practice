import { ClickTracker, ClickData } from "./yelp-test";

const clickData: ClickData[] = [
  { source: "Home", destination: "Profile" },
  { source: "Profile", destination: "page1" },
  { source: "Profile", destination: "page2" },
  { source: "page1", destination: "page4" },
  { source: "page2", destination: "page3" },
  { source: "page2", destination: "page2" },
  { source: "page2", destination: "page6" },
  { source: "page4", destination: "page5" },
];

test("getDestination(Home)", () => {
  const tracker = new ClickTracker(clickData);

  expect(tracker.getDestination("Home")).toEqual(["page5", "page3", "page6"]);
});

test("getDestination(page2)", () => {
  const tracker = new ClickTracker(clickData);

  expect(tracker.getDestination("page2")).toEqual(["page3", "page6"]);
});

test("getDestination(Profile)", () => {
  const tracker = new ClickTracker(clickData);

  expect(tracker.getDestination("Profile")).toEqual([
    "page5",
    "page3",
    "page6",
  ]);
});

test("getDestination(page5)", () => {
  const tracker = new ClickTracker(clickData);

  expect(tracker.getDestination("page5")).toEqual(["page5"]);
});
