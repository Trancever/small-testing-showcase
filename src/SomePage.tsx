import React, { useEffect } from 'react';

import GA from './GA';

interface Props {
  parameter: string;
}

const SomePage: React.FC<Props> = props => {
  useEffect(() => {
    GA.trackScreen(props.parameter);
  }, [props.parameter]);

  return (
    <div>
      <h1>Some Page</h1>
    </div>
  );
};

export default SomePage;
