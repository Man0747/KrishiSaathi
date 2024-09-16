"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { week: "0", modal: 2043.8, predicted: 2217 },
  { week: "1", modal: 1937.75, predicted: 2116 },
  { week: "2", modal: 1613.8, predicted: 1832 },
  { week: "3", modal: 1385.666667, predicted: 1507 },
  { week: "4", modal: 1453.333333, predicted: 1605 },
  { week: "5", modal: 1500, predicted: 1619 },
  { week: "6", modal: 1519.2, predicted: 1634 },
  { week: "7", modal: 1760.333333, predicted: 1982 },
  { week: "8", modal: 1562.25, predicted: 1748 },
  { week: "9", modal: 1601.5, predicted: 1828 },
  { week: "10", modal: 1766, predicted: 1901 },
  { week: "11", modal: 1591.6, predicted: 1720 },
  { week: "12", modal: 1500.25, predicted: 1633 },
  { week: "13", modal: 1719, predicted: 1871 },
  { week: "14", modal: 1406, predicted: 1594 },
  { week: "15", modal: 1562.5, predicted: 1669 },
  { week: "16", modal: 1614.666667, predicted: 1742 },
  { week: "17", modal: 1544, predicted: 1659 },
  { week: "18", modal: 2025.4, predicted: 2235 },
  { week: "19", modal: 1664, predicted: 1791 },
  { week: "20", modal: 1531, predicted: 1690 },
  { week: "21", modal: 1562.333333, predicted: 1760 },
  { week: "22", modal: 1712.6, predicted: 1840 },
  { week: "23", modal: 1916.666667, predicted: 2108 },
  { week: "24", modal: 2125, predicted: 2277 },
  { week: "25", modal: 2156, predicted: 2397 },
  { week: "26", modal: 2631.6, predicted: 2873 },
  { week: "27", modal: 2813, predicted: 2926 },
  { week: "28", modal: 2695.5, predicted: 2869 },
  { week: "29", modal: 2812.6, predicted: 2982 },
  { week: "30", modal: 2906, predicted: 3097 },
  { week: "31", modal: 2969, predicted: 3092 },
  { week: "32", modal: 2891, predicted: 3115 },
  { week: "33", modal: 3328.5, predicted: 3525 },
  { week: "34", modal: 3438, predicted: 3624 },
];

const chartConfig = {
  modal: {
    label: "Modal",
    color: "#fff000",
  },
  predicted: {
    label: "Predicted",
    color: "#eeeeee",
  },
};

export function Chart() {
  return (
    <div className="flex justify-end w-full p-8">
      <Card className="flex-1 w-full">
        <CardHeader>
          <CardTitle>
            Onion Price in Darjeeling, West Bengal in the last 32 weeks of 2024
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <ChartContainer config={chartConfig} className="w-full h-64">
            <AreaChart
              data={chartData}
              width={600}
              height={200}
              margin={{
                left: 8,
                right: 8,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="week"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Area
                dataKey="modal"
                type="natural"
                fill="#eab308"
                fillOpacity={0.4}
                stackId="a"
              />
              <Area
                dataKey="predicted"
                type="natural"
                fill="#115e59"
                fillOpacity={1}
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
