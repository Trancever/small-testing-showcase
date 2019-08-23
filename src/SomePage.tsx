import React, { useEffect } from 'react';

import GA from './GA';

interface Props {
  active: boolean;
}

const SomePage: React.FC<Props> = props => {
  useEffect(() => {
    if (props.active) {
      GA.trackScreen('SomePage');
    }
  }, [props.active]);

  return (
    <div>
      <h1>Some Page</h1>
    </div>
  );
};

export default SomePage;
