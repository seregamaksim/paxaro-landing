import { FC } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';
import moment from 'moment';

import currency from 'currency.js';

interface Data {
  name: string;
  value: number;
}
interface IChartProps {
  className?: string;
  data: Data[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const formatedValue = currency(payload[0].value, {
      separator: ' ',
      precision: 0,
    }).format();
    return (
      <CustomTooltipContent>
        <CustomTooltipContentText>{formatedValue}</CustomTooltipContentText>
      </CustomTooltipContent>
    );
  }

  return null;
};

const Chart: FC<IChartProps> = ({ className, data }) => {
  return (
    <Root className={className}>
      <ResponsiveContainer>
        <StyledLineChart data={data}>
          <CartesianGrid
            strokeDasharray="8"
            strokeWidth="0.5"
            stroke="#B5B5B5"
          />
          <XAxis
            dataKey="name"
            fontSize="12px"
            fontWeight="600"
            color="#8F8F8F"
            tickFormatter={(e) => {
              return moment(e).format('DD.MM.YYYY');
            }}
            tickMargin={18}
          />
          <YAxis
            fontSize="12px"
            fontWeight="600"
            color="#8F8F8F"
            tickFormatter={(e) => {
              return currency(e, {
                separator: '',
                precision: 0,
              }).format();
            }}
            tickMargin={18}
            label={{
              position: 'left',
            }}
          />
          <Tooltip label={false} content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="value"
            stroke="var(--green)"
            strokeWidth="3"
            activeDot={{ stroke: '#111', strokeWidth: 6, r: 8 }}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="var(--green)"
            strokeWidth="3"
            style={{
              filter: 'blur(5px)',
            }}
            activeDot={{ stroke: '#111', strokeWidth: 6, r: 8 }}
            dot={false}
          />
        </StyledLineChart>
      </ResponsiveContainer>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  @media (max-width: 768px) {
    width: 768px;
  }
`;

const StyledLineChart = styled(LineChart)`
  width: 100% !important;
  height: 330px;

  .recharts-surface {
    width: 100% !important;
  }
`;

const CustomTooltipContent = styled.div`
  padding: 3px 8px;
  background: var(--green);
  border-radius: 6px;
  box-shadow: 0px 0.796707px 6.37366px rgba(152, 152, 152, 0.17);
`;

const CustomTooltipContentText = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: var(--white);
`;

export default Chart;
