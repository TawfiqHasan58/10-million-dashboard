import React, { useState, useEffect } from 'react';
import { Card } from './styles/dashboardstyles';
import {
  HighlightContainer,
  HighlightCount,
  HighlightCountContainer,
  HighlightTitle,
  HighlightWrapper,
  HighlightSubTitle,
} from './styles/highlightstyles';

export default function FeaturedInfo({ data }) {
  const [status, setStatus] = useState();

  useEffect(() => {
    if (data) {
      let _status = [
        {
          title: 'Daily',
          dollar: data.daily,
          gradient: ['rgba(152, 82, 240, 1) ', 'rgba(90, 1, 201, 1)'],
          subTitle: 'Daily active user',
        },
        {
          title: 'Weekly',
          dollar: data.weekly,
          gradient: ['rgba(31, 208, 112, 1)', 'rgba(1, 169, 68, 1)'],
          subTitle: 'Weekly active user',
        },
        {
          title: 'Monthly',
          dollar: data.monthly,
          gradient: ['rgba(0, 149, 235, 1)', 'rgba(0, 59, 210, 1)'],
          subTitle: 'Monthly active user',
        },
        {
          title: 'Total',
          dollar: data.total,
          gradient: ['rgba(243, 144, 52, 1)', 'rgba(255, 42, 39, 1))'],
          subTitle: 'Total user',
        },
      ];

      setStatus(_status);
    }
  }, [data]);

  return (
    <HighlightContainer>
      <HighlightWrapper>
        {status &&
          status.map((val, pos) => (
            <Card
              style={{
                backgroundImage: `linear-gradient(to right, ${val.gradient[0]},${val.gradient[1]} `,
              }}
              key={`hightlight-card-no${pos}`}
            >
              <HighlightTitle>{val.title}</HighlightTitle>
              <HighlightCountContainer>
                <HighlightCount>{val.dollar}</HighlightCount>
              </HighlightCountContainer>
              <HighlightSubTitle>{val.subTitle}</HighlightSubTitle>
            </Card>
          ))}
      </HighlightWrapper>
    </HighlightContainer>
  );
}
