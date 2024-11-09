import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/shadcn/components/ui/chart";
import { cn } from "@/shadcn/lib/utils";

export type AssetsChartData = {
    asset: string;
    ticker: string;
    value: number;
};

type Props = {
    className?: string;
    data: AssetsChartData[];
};

const chartConfig = {
    value: {
        label: "Asset Value",
        color: "hsl(var(--primary))",
    },
} satisfies ChartConfig;

export function AssetsChart(props: Props) {
    return (
        <ChartContainer config={chartConfig} className={cn("min-h-[200px] w-full", props.className)}>
            <BarChart accessibilityLayer data={props.data}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="ticker" tickLine={false} tickMargin={10} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent hideIndicator label="asset" />} />
                <Bar dataKey="value" fill="var(--color-value)" radius={4} />
            </BarChart>
        </ChartContainer>
    );
}
