/**
 * Generated with shadcn/ui. (https://ui.shadcn.com/charts)
 */

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

export interface StackedBarChartProps {
  config: ChartConfig
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[]
  xDataKey: string
}

export default function StackedBarChart({
  config,
  data,
  xDataKey,
  ...props
}: StackedBarChartProps & React.ComponentProps<'div'>) {
  return (
    <ChartContainer config={config} {...props}>
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey={xDataKey} tickLine={false} tickMargin={10} axisLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend content={<ChartLegendContent />} />
        {Object.keys(config).map((key, index) => {
          let radius: [number, number, number, number] = [0, 0, 0, 0]
          if (index === 0) {
            radius = [0, 0, 4, 4]
          } else if (index === Object.keys(config).length - 1) {
            radius = [4, 4, 0, 0]
          }

          return <Bar key={key} dataKey={key} stackId="a" fill={config[key].color} radius={radius} />
        })}
      </BarChart>
    </ChartContainer>
  )
}
