import { formatCurrency } from "@/utils/helpers";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export type AssetTypesChartData = {
    type: string;
    value: number;
    color: string;
};

type Props = {
    className?: string;
    data: AssetTypesChartData[];
};

export function AssetTypesChart(props: Props) {
    return (
        <div className={props.className}>
            <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                    <Pie
                        data={props.data}
                        dataKey="value"
                        nameKey="type"
                        cx="50%"
                        cy="50%"
                        outerRadius={140}
                        innerRadius={100}
                    >
                        {props.data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>

                    <Tooltip formatter={(value) => formatCurrency(Number(value))} />

                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
