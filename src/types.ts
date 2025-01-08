export type Item = {
  title: string;
  classname: string;
  icon: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
};

export type Data = Array<Item>;

export type Duration = "daily" | "weekly" | "monthly";

export type Buttons = Array<{
  label: string;
  key: Duration;
}>;
