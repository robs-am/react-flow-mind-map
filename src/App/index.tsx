import { ReactFlow, Controls, Panel } from 'react-flow-renderer';

import '@xyflow/react/dist/style.css';


function Flow() {
  return (
    <ReactFlow>
      <Controls showInteractive={false} />
      <Panel position="top-left" />
    </ReactFlow>
  );
}

export default Flow;