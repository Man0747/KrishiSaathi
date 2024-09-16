"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const chartData = [
  { date: "2024-04-01", actual: 222, predicted: 150 },
  { date: "2024-04-02", actual: 97, predicted: 180 },
  { date: "2024-04-03", actual: 167, predicted: 120 },
  { date: "2024-04-04", actual: 242, predicted: 260 },
  { date: "2024-04-05", actual: 373, predicted: 290 },
  { date: "2024-04-06", actual: 301, predicted: 340 },
  { date: "2024-04-07", actual: 245, predicted: 180 },
  { date: "2024-04-08", actual: 409, predicted: 320 },
  { date: "2024-04-09", actual: 59, predicted: 110 },
  { date: "2024-04-10", actual: 261, predicted: 190 },
  { date: "2024-04-11", actual: 327, predicted: 350 },
  { date: "2024-04-12", actual: 292, predicted: 210 },
  { date: "2024-04-13", actual: 342, predicted: 380 },
  { date: "2024-04-14", actual: 137, predicted: 220 },
  { date: "2024-04-15", actual: 120, predicted: 170 },
  { date: "2024-04-16", actual: 138, predicted: 190 },
  { date: "2024-04-17", actual: 446, predicted: 360 },
  { date: "2024-04-18", actual: 364, predicted: 410 },
  { date: "2024-04-19", actual: 243, predicted: 180 },
  { date: "2024-04-20", actual: 89, predicted: 150 },
  { date: "2024-04-21", actual: 137, predicted: 200 },
  { date: "2024-04-22", actual: 224, predicted: 170 },
  { date: "2024-04-23", actual: 138, predicted: 230 },
  { date: "2024-04-24", actual: 387, predicted: 290 },
  { date: "2024-04-25", actual: 215, predicted: 250 },
  { date: "2024-04-26", actual: 75, predicted: 130 },
  { date: "2024-04-27", actual: 383, predicted: 420 },
  { date: "2024-04-28", actual: 122, predicted: 180 },
  { date: "2024-04-29", actual: 315, predicted: 240 },
  { date: "2024-04-30", actual: 454, predicted: 380 },
  { date: "2024-05-01", actual: 165, predicted: 220 },
  { date: "2024-05-02", actual: 293, predicted: 310 },
  { date: "2024-05-03", actual: 247, predicted: 190 },
  { date: "2024-05-04", actual: 385, predicted: 420 },
  { date: "2024-05-05", actual: 481, predicted: 390 },
  { date: "2024-05-06", actual: 498, predicted: 520 },
  { date: "2024-05-07", actual: 388, predicted: 300 },
  { date: "2024-05-08", actual: 149, predicted: 210 },
  { date: "2024-05-09", actual: 227, predicted: 180 },
  { date: "2024-05-10", actual: 293, predicted: 330 },
  { date: "2024-05-11", actual: 335, predicted: 270 },
  { date: "2024-05-12", actual: 197, predicted: 240 },
  { date: "2024-05-13", actual: 197, predicted: 160 },
  { date: "2024-05-14", actual: 448, predicted: 490 },
  { date: "2024-05-15", actual: 473, predicted: 380 },
  { date: "2024-05-16", actual: 338, predicted: 400 },
  { date: "2024-05-17", actual: 499, predicted: 420 },
  { date: "2024-05-18", actual: 315, predicted: 350 },
  { date: "2024-05-19", actual: 235, predicted: 180 },
  { date: "2024-05-20", actual: 177, predicted: 230 },
  { date: "2024-05-21", actual: 82, predicted: 140 },
  { date: "2024-05-22", actual: 81, predicted: 120 },
  { date: "2024-05-23", actual: 252, predicted: 290 },
  { date: "2024-05-24", actual: 294, predicted: 220 },
  { date: "2024-05-25", actual: 201, predicted: 250 },
  { date: "2024-05-26", actual: 213, predicted: 170 },
  { date: "2024-05-27", actual: 420, predicted: 460 },
  { date: "2024-05-28", actual: 233, predicted: 190 },
  { date: "2024-05-29", actual: 78, predicted: 130 },
  { date: "2024-05-30", actual: 340, predicted: 280 },
  { date: "2024-05-31", actual: 178, predicted: 230 },
  { date: "2024-06-01", actual: 178, predicted: 200 },
  { date: "2024-06-02", actual: 470, predicted: 410 },
  { date: "2024-06-03", actual: 103, predicted: 160 },
  { date: "2024-06-04", actual: 439, predicted: 380 },
  { date: "2024-06-05", actual: 88, predicted: 140 },
  { date: "2024-06-06", actual: 294, predicted: 250 },
  { date: "2024-06-07", actual: 323, predicted: 370 },
  { date: "2024-06-08", actual: 385, predicted: 320 },
  { date: "2024-06-09", actual: 438, predicted: 480 },
  { date: "2024-06-10", actual: 155, predicted: 200 },
  { date: "2024-06-11", actual: 92, predicted: 150 },
  { date: "2024-06-12", actual: 492, predicted: 420 },
  { date: "2024-06-13", actual: 81, predicted: 130 },
  { date: "2024-06-14", actual: 426, predicted: 380 },
  { date: "2024-06-15", actual: 307, predicted: 350 },
  { date: "2024-06-16", actual: 371, predicted: 310 },
  { date: "2024-06-17", actual: 475, predicted: 520 },
  { date: "2024-06-18", actual: 107, predicted: 170 },
  { date: "2024-06-19", actual: 341, predicted: 290 },
  { date: "2024-06-20", actual: 408, predicted: 450 },
  { date: "2024-06-21", actual: 169, predicted: 210 },
  { date: "2024-06-22", actual: 317, predicted: 270 },
  { date: "2024-06-23", actual: 480, predicted: 530 },
  { date: "2024-06-24", actual: 132, predicted: 180 },
  { date: "2024-06-25", actual: 141, predicted: 190 },
  { date: "2024-06-26", actual: 434, predicted: 380 },
  { date: "2024-06-27", actual: 448, predicted: 490 },
  { date: "2024-06-28", actual: 149, predicted: 200 },
  { date: "2024-06-29", actual: 103, predicted: 160 },
  { date: "2024-06-30", actual: 446, predicted: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

export function Component() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const now = new Date();
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    now.setDate(now.getDate() - daysToSubtract);
    return date >= now;
  });

  return (
    <Card className="w-3/4 mx-auto mb-8">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Onion Predicted VS Actual Data</CardTitle>
          <CardDescription>Showing Monthly/Weekly Data</CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="predicted"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="actual"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
